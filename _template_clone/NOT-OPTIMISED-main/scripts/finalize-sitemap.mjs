import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const dist = path.join(root, 'dist');
const source = path.join(dist, 'sitemap-0.xml');

const DEFAULT_ORIGIN = 'https://arccheats.org';
const siteOrigin = (process.env.PUBLIC_SITE_URL || DEFAULT_ORIGIN).replace(/\/+$/, '');

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
const urlCount = (raw.match(/<url>/g) ?? []).length;

if (urlCount === 0) {
  console.error('finalize-sitemap: sitemap-0.xml contains no URLs.');
  process.exit(1);
}

function formatUrlset(xml) {
  return xml
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

let xml = raw;
if (siteOrigin !== DEFAULT_ORIGIN) {
  xml = xml.split(DEFAULT_ORIGIN).join(siteOrigin);
}

const formatted = formatUrlset(xml);
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
fs.writeFileSync(path.join(dist, 'sitemap-0.xml'), formatted, 'utf8');

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
}

console.log(`Sitemap finalized: ${urlCount} URLs → dist/sitemap.xml (origin: ${siteOrigin})`);
