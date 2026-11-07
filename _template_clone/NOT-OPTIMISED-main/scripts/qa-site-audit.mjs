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
const sitemap = path.join(dist, 'sitemap-index.xml');
if (!fs.existsSync(robots)) errors.push('robots.txt missing in dist');
if (!fs.existsSync(sitemap)) errors.push('sitemap-index.xml missing in dist');

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

// Sitemap should list key routes (parse child sitemap if present)
const sitemapBody = fs.existsSync(sitemap) ? fs.readFileSync(sitemap, 'utf8') : '';
const childMatch = sitemapBody.match(/<loc>([^<]+sitemap-\d+\.xml)<\/loc>/);
if (childMatch) {
  const childPath = childMatch[1];
  const childFile = childPath.includes('://')
    ? path.join(dist, path.basename(childPath))
    : path.join(dist, path.basename(childPath));
  if (fs.existsSync(childFile)) {
    const childXml = fs.readFileSync(childFile, 'utf8');
    const locs = [...childXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => {
      try {
        return new URL(m[1]).pathname;
      } catch {
        return m[1];
      }
    });
    for (const must of ['/blog/', '/forum/', '/products/arc-raiders/']) {
      if (!locs.some((p) => p === must || p.startsWith(must))) {
        warnings.push(`sitemap: expected path like ${must}`);
      }
    }
  }
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
