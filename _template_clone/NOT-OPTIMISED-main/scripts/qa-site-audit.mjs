/**
 * Post-build QA: titles, meta, H1, placeholder copy, sitemap/robots, checkout hrefs, image alts.
 * Run: node scripts/qa-site-audit.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const dist = path.join(root, 'dist');

const PLACEHOLDER_RE = /\b(sample thread|sample q&a|lorem ipsum|todo:|placeholder text)\b/i;
const SKIP_HTML = new Set(['404.html']);

/** Redirect stubs and /go/ hops are not full marketing pages */
const SKIP_ROUTE_PREFIX = [
  '/go/',
  '/cheats/',
  '/contact/',
  '/products/utilities/',
  '/products/cloud-dma/',
  '/products/ugc/',
  '/products/arc-raiders/arc-raiders/',
  '/products/arc-raiders/utilities/',
];

function walkHtml(dir, out = []) {
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) walkHtml(full, out);
    else if (name.endsWith('.html') && !SKIP_HTML.has(name)) out.push(full);
  }
  return out;
}

function relPath(file) {
  return '/' + path.relative(dist, file).replace(/\\/g, '/').replace(/index\.html$/, '');
}

function extractOne(html, re) {
  const m = html.match(re);
  return m?.[1]?.trim() ?? '';
}

const errors = [];
const warnings = [];

if (!fs.existsSync(dist)) {
  console.error('dist/ missing — run npm run build first');
  process.exit(1);
}

const robots = path.join(dist, 'robots.txt');
const sitemapIndex = path.join(dist, 'sitemap-index.xml');
const sitemapUrlset = path.join(dist, 'sitemap.xml');
if (!fs.existsSync(robots)) errors.push('robots.txt missing in dist');
if (!fs.existsSync(sitemapUrlset)) errors.push('sitemap.xml missing in dist');
if (!fs.existsSync(sitemapIndex)) errors.push('sitemap-index.xml missing in dist');
if (fs.existsSync(path.join(dist, 'sitemap-0.xml'))) {
  errors.push('sitemap-0.xml should be removed after finalize-sitemap (duplicate urlset)');
}

const htmlFiles = walkHtml(dist);
const pathsSeen = new Set();

for (const file of htmlFiles) {
  const html = fs.readFileSync(file, 'utf8');
  const route = relPath(file);
  const normalized = route.endsWith('/') ? route : `${route}/`;
  pathsSeen.add(normalized);
  if (SKIP_ROUTE_PREFIX.some((p) => normalized.startsWith(p))) continue;

  const title = extractOne(html, /<title>([^<]+)<\/title>/i);
  const meta = extractOne(html, /<meta\s+name="description"\s+content="([^"]*)"/i);
  const h1s = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)].map((m) =>
    m[1].replace(/<[^>]+>/g, '').trim(),
  );

  if (!title) errors.push(`${route}: missing <title>`);
  if (!meta || meta.length < 50) errors.push(`${route}: meta description missing or too short`);
  if (h1s.length !== 1) errors.push(`${route}: expected 1 H1, found ${h1s.length}`);
  if (PLACEHOLDER_RE.test(html)) errors.push(`${route}: placeholder/sample copy detected`);

  const imgs = [...html.matchAll(/<img\b[^>]*>/gi)];
  for (const tag of imgs) {
    if (!/\balt="[^"]+"/i.test(tag)) warnings.push(`${route}: img missing alt`);
  }

  const badCheckout = [...html.matchAll(/href="(https:\/\/zadeyo\.com[^"]*)"/gi)];
  for (const [, href] of badCheckout) {
    if (!href.includes('arc-raiders')) {
      errors.push(`${route}: exposed checkout URL not targeting arc-raiders: ${href}`);
    }
  }
}

const SITEMAP_EXCLUDE = [
  '/go/',
  '/products/cloud-dma/',
  '/products/ugc/',
  '/products/utilities/',
];

function distHtmlForPathname(pathname) {
  const normalized = pathname.endsWith('/') ? pathname : `${pathname}/`;
  const rel = normalized === '/' ? 'index.html' : `${normalized.slice(1)}index.html`;
  return path.join(dist, rel);
}

const sitemapBody = fs.existsSync(sitemapUrlset) ? fs.readFileSync(sitemapUrlset, 'utf8') : '';
const sitemapLocs = [...sitemapBody.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
const sitemapOrigins = new Set();

for (const loc of sitemapLocs) {
  try {
    const u = new URL(loc);
    sitemapOrigins.add(u.origin);
    const p = u.pathname.endsWith('/') ? u.pathname : `${u.pathname}/`;
    if (SITEMAP_EXCLUDE.some((part) => p.includes(part))) {
      errors.push(`sitemap.xml: disallowed path ${p}`);
    }
    if (!fs.existsSync(distHtmlForPathname(p))) {
      errors.push(`sitemap.xml: no HTML for ${p}`);
    }
  } catch {
    errors.push(`sitemap.xml: invalid loc ${loc}`);
  }
}

if (sitemapOrigins.size > 1) {
  errors.push(`sitemap.xml: mixed hosts ${[...sitemapOrigins].join(', ')}`);
}
if (sitemapBody.includes('workers.dev')) {
  errors.push('sitemap.xml: workers.dev URLs must not appear when canonical host is arccheats.org');
}
const sitemapLocCount = sitemapLocs.length;
const uniqueLocs = new Set(
  sitemapLocs.map((loc) => {
    try {
      const u = new URL(loc);
      const p = u.pathname.endsWith('/') ? u.pathname : `${u.pathname}/`;
      return `${u.origin}${p}`;
    } catch {
      return loc;
    }
  }),
);
if (uniqueLocs.size !== sitemapLocCount) {
  errors.push(`sitemap.xml: duplicate URLs (${sitemapLocCount} locs, ${uniqueLocs.size} unique)`);
}

for (const must of ['/blog/', '/forum/', '/products/arc-raiders/']) {
  if (!sitemapLocs.some((loc) => {
    try {
      const p = new URL(loc).pathname;
      return p === must || p.startsWith(must);
    } catch {
      return false;
    }
  })) {
    warnings.push(`sitemap: expected path like ${must}`);
  }
}

const robotsBody = fs.existsSync(robots) ? fs.readFileSync(robots, 'utf8') : '';
const robotsSitemap = robotsBody.match(/^Sitemap:\s*(.+)$/m)?.[1]?.trim();
if (robotsSitemap && sitemapLocs.length && !robotsSitemap.endsWith('/sitemap.xml')) {
  warnings.push('robots.txt: Sitemap line should end with /sitemap.xml');
}
const indexBody = fs.existsSync(sitemapIndex) ? fs.readFileSync(sitemapIndex, 'utf8') : '';
if (!indexBody.includes('/sitemap.xml')) {
  errors.push('sitemap-index.xml must reference /sitemap.xml');
}

console.log(`QA scanned ${htmlFiles.length} HTML files`);
if (warnings.length) {
  console.warn('Warnings:');
  warnings.forEach((w) => console.warn('  -', w));
}
if (errors.length) {
  console.error('Failures:');
  errors.forEach((e) => console.error('  -', e));
  process.exit(1);
}
console.log('QA passed: titles, meta, single H1, no placeholder copy, robots/sitemap present');
