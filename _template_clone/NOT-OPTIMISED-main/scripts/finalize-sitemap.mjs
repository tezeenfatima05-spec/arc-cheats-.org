import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const dist = path.join(root, 'dist');
const source = path.join(dist, 'sitemap-0.xml');

const DEFAULT_ORIGIN = 'https://arccheats.org';
const WORKERS_ORIGIN = 'https://arc-cheats--org.tazeenrooziroti.workers.dev';
const siteOrigin = (process.env.PUBLIC_SITE_URL || DEFAULT_ORIGIN).replace(/\/+$/, '');

/** Keep in sync with src/config/sitemap.ts — paths that must not be in sitemap.xml */
const SITEMAP_EXCLUDE_PATHS = [
  '/404',
  '/go/',
  '/rss.xml',
  '/cheats/',
  '/contact/',
  '/products/utilities/',
  '/products/cloud-dma/',
  '/products/ugc/',
  '/products/arc-raiders/arc-raiders/',
  '/products/arc-raiders/utilities/',
];

function rewriteOriginInTree(dir, from, to) {
  if (from === to) return;
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const target = path.join(dir, ent.name);
    if (ent.isDirectory()) rewriteOriginInTree(target, from, to);
    else if (/\.(html|xml|txt|js|css)$/i.test(ent.name)) {
      const text = fs.readFileSync(target, 'utf8');
      if (!text.includes(from)) continue;
      fs.writeFileSync(target, text.split(from).join(to));
    }
  }
}

if (!fs.existsSync(source)) {
  console.error('finalize-sitemap: dist/sitemap-0.xml not found — run astro build first.');
  process.exit(1);
}

const raw = fs.readFileSync(source, 'utf8');

function canonicalSitemapLoc(href) {
  const u = new URL(href);
  const pathname = u.pathname.endsWith('/') ? u.pathname : `${u.pathname}/`;
  return `${siteOrigin}${pathname}`;
}

/** One entry per canonical https URL (trailing slash). */
function dedupeAndNormalizeUrlset(xml) {
  const blocks = [...xml.matchAll(/<url>([\s\S]*?)<\/url>/g)];
  const seen = new Set();
  const entries = [];

  for (const block of blocks) {
    const inner = block[1];
    const locM = inner.match(/<loc>([^<]*)<\/loc>/);
    if (!locM) continue;

    let canonical;
    try {
      canonical = canonicalSitemapLoc(locM[1].trim());
    } catch {
      continue;
    }

    if (seen.has(canonical)) continue;
    seen.add(canonical);

    const normalizedInner = inner.replace(/<loc>[^<]*<\/loc>/, `<loc>${canonical}</loc>`);
    entries.push(normalizedInner);
  }

  if (entries.length === 0) return xml;

  return `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${entries.map((e) => `<url>${e}</url>`).join('')}</urlset>`;
}

function stripUrlsetNamespaces(xml) {
  return xml.replace(
    /<urlset[^>]*>/,
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  );
}

function formatUrlset(xml) {
  return stripUrlsetNamespaces(xml)
    .replace(/^<\?xml[^?]*\?>/, '<?xml version="1.0" encoding="UTF-8"?>\n')
    .replace(/<urlset([^>]*)>/, '<urlset$1>\n')
    .replace(/<\/urlset>/, '\n</urlset>\n')
    .replace(/<url>/g, '  <url>\n')
    .replace(/<\/url>/g, '\n  </url>\n')
    .replace(/<loc>/g, '    <loc>')
    .replace(/<\/loc>/g, '</loc>\n')
    .replace(/<lastmod>/g, '    <lastmod>')
    .replace(/<\/lastmod>/g, '</lastmod>\n')
    .replace(/<changefreq>/g, '    <changefreq>')
    .replace(/<\/changefreq>/g, '</changefreq>\n')
    .replace(/<priority>/g, '    <priority>')
    .replace(/<\/priority>/g, '</priority>\n');
}

function distHtmlForPathname(pathname) {
  const normalized = pathname.endsWith('/') ? pathname : `${pathname}/`;
  const rel = normalized === '/' ? 'index.html' : `${normalized.slice(1)}index.html`;
  return path.join(dist, rel);
}

function validateSitemapXml(xml) {
  const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
  let ok = true;

  for (const loc of locs) {
    let pathname;
    let origin;
    try {
      const u = new URL(loc);
      origin = u.origin;
      pathname = u.pathname.endsWith('/') ? u.pathname : `${u.pathname}/`;
    } catch {
      console.error(`finalize-sitemap: invalid <loc> ${loc}`);
      ok = false;
      continue;
    }

    if (origin !== siteOrigin) {
      console.error(`finalize-sitemap: <loc> host must be ${siteOrigin}, got ${loc}`);
      ok = false;
    }

    if (SITEMAP_EXCLUDE_PATHS.some((part) => pathname.includes(part))) {
      console.error(`finalize-sitemap: excluded path in sitemap ${pathname}`);
      ok = false;
    }

    const htmlPath = distHtmlForPathname(pathname);
    if (!fs.existsSync(htmlPath)) {
      console.error(`finalize-sitemap: no HTML for sitemap URL ${pathname} (expected ${htmlPath})`);
      ok = false;
    }
  }

  return ok;
}

let xml = raw;
for (const legacyOrigin of [DEFAULT_ORIGIN, WORKERS_ORIGIN]) {
  if (legacyOrigin !== siteOrigin) {
    xml = xml.split(legacyOrigin).join(siteOrigin);
  }
}
xml = dedupeAndNormalizeUrlset(xml);

const urlCount = (xml.match(/<url>/g) ?? []).length;
if (urlCount === 0) {
  console.error('finalize-sitemap: sitemap contains no URLs after normalize.');
  process.exit(1);
}

const formatted = formatUrlset(xml);
if (!validateSitemapXml(formatted)) {
  console.error('finalize-sitemap: validation failed — fix routes or PUBLIC_SITE_URL before deploy.');
  process.exit(1);
}

fs.writeFileSync(path.join(dist, 'sitemap.xml'), formatted, 'utf8');

const indexXml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${siteOrigin}/sitemap.xml</loc>
    <lastmod>${new Date().toISOString().slice(0, 10)}</lastmod>
  </sitemap>
</sitemapindex>
`;
fs.writeFileSync(path.join(dist, 'sitemap-index.xml'), indexXml, 'utf8');

try {
  fs.unlinkSync(path.join(dist, 'sitemap-0.xml'));
} catch {
  /* astro artifact removed when possible */
}

const robots = `User-agent: *
Allow: /

Disallow: /go/

Sitemap: ${siteOrigin}/sitemap.xml
`;
fs.writeFileSync(path.join(dist, 'robots.txt'), `${robots.trim()}\n`, 'utf8');

function rewriteBareDomainInTree(dir, fromDomain, toDomain) {
  if (fromDomain === toDomain) return;
  const escaped = fromDomain.replace(/\./g, '\\.');
  const re = new RegExp(`\\b${escaped}\\b`, 'g');
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const target = path.join(dir, ent.name);
    if (ent.isDirectory()) rewriteBareDomainInTree(target, fromDomain, toDomain);
    else if (/\.html$/i.test(ent.name)) {
      const text = fs.readFileSync(target, 'utf8');
      if (!text.includes(fromDomain)) continue;
      const next = text.replace(re, (match, offset, full) => {
        if (full[offset - 1] === '@') return match;
        return toDomain;
      });
      fs.writeFileSync(target, next);
    }
  }
}

if (siteOrigin !== DEFAULT_ORIGIN) {
  rewriteOriginInTree(dist, DEFAULT_ORIGIN, siteOrigin);
  const liveHost = new URL(siteOrigin).hostname;
  rewriteBareDomainInTree(dist, 'arccheats.org', liveHost);
} else if (WORKERS_ORIGIN !== siteOrigin) {
  rewriteOriginInTree(dist, WORKERS_ORIGIN, siteOrigin);
  const liveHost = new URL(siteOrigin).hostname;
  rewriteBareDomainInTree(dist, new URL(WORKERS_ORIGIN).hostname, liveHost);
}

console.log(`Sitemap finalized: ${urlCount} URLs → dist/sitemap.xml (origin: ${siteOrigin})`);
