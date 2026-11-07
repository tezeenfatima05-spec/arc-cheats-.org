import type { BreadcrumbItem } from '../utils/schema';

const HOME_ARIA: Record<string, string> = {
  '/about/': 'Home — site root linked from about',
  '/faq/': 'Home — site root linked from FAQ',
  '/blog/': 'Home — site root linked from guides index',
};

const BLOG_ARIA_BY_SLUG: Record<string, string> = {
  'arc-raiders-player-esp-layout': 'Blog index — from player ESP layout guide',
  'arc-raiders-aimbot-and-fov-settings': 'Blog index — from aimbot FOV guide',
  'arc-raiders-setup-and-first-launch': 'Blog index — from portal setup guide',
  'arc-raiders-arc-threat-overlays': 'Blog index — from ARC threat overlay guide',
  'arc-raiders-extraction-and-threat-overlays': 'Blog index — from exit overlay guide',
  'arc-raiders-combat-routing-to-extract': 'Blog index — from combat routing guide',
  'arc-raiders-loot-and-world-esp-filters': 'Blog index — from loot filter guide',
};

/** Unique accessible names on breadcrumb links (visible crumb text unchanged). */
export function applyBreadcrumbSeo(pagePath: string, items: BreadcrumbItem[]): BreadcrumbItem[] {
  const homeAria = HOME_ARIA[pagePath];

  return items.map((item, index) => {
    if (item.path === '/' && homeAria && index === 0) {
      return { ...item, linkAriaLabel: homeAria };
    }
    if (pagePath.startsWith('/blog/') && item.path === '/blog/' && index === 1) {
      const slug = pagePath.replace(/^\/blog\/|\/$/g, '');
      const blogAria = BLOG_ARIA_BY_SLUG[slug] ?? `Blog index — from ${slug} guide`;
      return { ...item, linkAriaLabel: blogAria };
    }
    if (pagePath.startsWith('/blog/') && item.path === '/' && index === 0) {
      const slug = pagePath.replace(/^\/blog\/|\/$/g, '');
      const aria = `Home — site root linked from ${slug} guide`;
      return { ...item, linkAriaLabel: aria };
    }
    return item;
  });
}
