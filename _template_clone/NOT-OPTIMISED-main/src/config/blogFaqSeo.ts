import { getBlogFaqs, type SiteFaqItem } from '../data/faq';
import { normalizeInternalPath, productPath, ROUTES } from '../utils/path';

function replaceAnchor(html: string, href: string, fromText: string, toText: string): string {
  const needle = `<a href="${normalizeInternalPath(href)}">${fromText}</a>`;
  if (!html.includes(needle)) return html;
  return html.replace(needle, `<a href="${normalizeInternalPath(href)}">${toText}</a>`);
}

const productHref = normalizeInternalPath(productPath('arc-raiders'));
const productsHref = normalizeInternalPath(ROUTES.products);
const blogHref = normalizeInternalPath(ROUTES.blog);

const DEFAULT_PRODUCT = 'ARC Raiders product';
const DEFAULT_PRODUCTS = 'Products';
const DEFAULT_BLOG = 'blog guides';

/** Per-slug anchors in the bottom FAQ block (unique within each article). */
const slugProductLabel: Record<string, string> = {
  'arc-raiders-player-esp-layout': 'Distance caps on Raiders listing',
  'arc-raiders-aimbot-and-fov-settings': 'FOV groups on Raiders listing',
  'arc-raiders-setup-and-first-launch': 'Enable order on Raiders listing',
  'arc-raiders-arc-threat-overlays': 'Unit markers on Raiders listing',
  'arc-raiders-extraction-and-threat-overlays': 'Exit icons on Raiders listing',
  'arc-raiders-combat-routing-to-extract': 'Combat overlays on Raiders listing',
  'arc-raiders-loot-and-world-esp-filters': 'Loot filters on Raiders listing',
  'arc-raiders-misc-camera-and-crosshair': 'Misc toolkit on Raiders listing',
};

const slugProductsLabel: Record<string, string> = {
  'arc-raiders-player-esp-layout': 'Multi-SKU hub for layout readers',
  'arc-raiders-aimbot-and-fov-settings': 'Multi-SKU hub for FOV readers',
  'arc-raiders-setup-and-first-launch': 'Multi-SKU hub for setup readers',
  'arc-raiders-arc-threat-overlays': 'Multi-SKU hub for unit marker readers',
  'arc-raiders-extraction-and-threat-overlays': 'Multi-SKU hub for exit overlay readers',
  'arc-raiders-combat-routing-to-extract': 'Multi-SKU hub for routing readers',
  'arc-raiders-loot-and-world-esp-filters': 'Multi-SKU hub for loot filter readers',
  'arc-raiders-misc-camera-and-crosshair': 'Multi-SKU hub for misc comfort readers',
};

const slugBlogLabel: Record<string, string> = {
  'arc-raiders-player-esp-layout': 'ESP layout articles index',
  'arc-raiders-aimbot-and-fov-settings': 'Aim tuning articles index',
  'arc-raiders-setup-and-first-launch': 'Setup walkthroughs index',
  'arc-raiders-arc-threat-overlays': 'Unit marker articles index',
  'arc-raiders-extraction-and-threat-overlays': 'Exit overlay articles index',
  'arc-raiders-combat-routing-to-extract': 'Extract routing articles index',
  'arc-raiders-loot-and-world-esp-filters': 'Loot filter articles index',
  'arc-raiders-misc-camera-and-crosshair': 'Misc comfort articles index',
};

/** Contextual FAQ block at the bottom of blog posts — unique internal anchors only. */
export function getBlogArticleFaqs(tag: string, slug: string): SiteFaqItem[] {
  const productLabel = slugProductLabel[slug];
  const productsLabel = slugProductsLabel[slug];
  const blogLabel = slugBlogLabel[slug];

  return getBlogFaqs(tag, slug).map((item) => {
    let a = item.a;
    let aHtml = item.aHtml;

    if (productLabel) {
      a = replaceAnchor(a, productHref, DEFAULT_PRODUCT, productLabel);
      if (aHtml) aHtml = replaceAnchor(aHtml, productHref, DEFAULT_PRODUCT, productLabel);
    }
    if (productsLabel) {
      a = replaceAnchor(a, productsHref, DEFAULT_PRODUCTS, productsLabel);
      if (aHtml) aHtml = replaceAnchor(aHtml, productsHref, DEFAULT_PRODUCTS, productsLabel);
    }
    if (blogLabel) {
      a = replaceAnchor(a, blogHref, DEFAULT_BLOG, blogLabel);
      if (aHtml) aHtml = replaceAnchor(aHtml, blogHref, DEFAULT_BLOG, blogLabel);
    }

    if (a === item.a && aHtml === item.aHtml) return item;
    return { ...item, a, aHtml };
  });
}
