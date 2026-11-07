/** Unique sr-only anchor text for /sitemap.xml per page (same URL, distinct labels). */

export const SITEMAP_ANCHOR_BY_PATH: Record<string, string> = {
  '/': 'Sitemap URL list — homepage sr-only hop',
  '/about/': 'Sitemap URL list — about sr-only hop',
  '/faq/': 'Sitemap URL list — FAQ sr-only hop',
  '/blog/': 'Sitemap URL list — guides index sr-only hop',
  '/forum/': 'Sitemap URL list — forum index sr-only hop',
};
