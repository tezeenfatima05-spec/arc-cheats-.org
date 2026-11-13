import type { SitemapItem } from '@astrojs/sitemap';
import { blogPosts } from '../data/blog';
import { parseBlogDate } from '../utils/schema';

/** Paths that must never appear in sitemap.xml (redirects, stubs, checkout hops). */
export const SITEMAP_EXCLUDE_PATHS = [
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
] as const;

export function shouldIncludeInSitemap(pageUrlOrPath: string): boolean {
  let path: string;
  try {
    path = pageUrlOrPath.startsWith('http')
      ? new URL(pageUrlOrPath).pathname
      : pageUrlOrPath;
  } catch {
    return false;
  }
  if (!path.startsWith('/')) path = `/${path}`;
  const normalized = path.endsWith('/') ? path : `${path}/`;
  return !SITEMAP_EXCLUDE_PATHS.some(
    (part) => normalized === part || normalized.includes(part),
  );
}

const buildDate = new Date().toISOString();

const blogLastmod = new Map(
  blogPosts.map((post) => [`/blog/${post.slug}/`, parseBlogDate(post.date)] as const),
);

function pathnameFromUrl(url: string): string {
  const path = new URL(url).pathname;
  return path.endsWith('/') ? path : `${path}/`;
}

export function sitemapSerialize(item: SitemapItem): SitemapItem | undefined {
  const path = pathnameFromUrl(item.url);

  if (!shouldIncludeInSitemap(path)) {
    return undefined;
  }

  item.lastmod = buildDate;

  if (path === '/') {
    item.priority = 1;
    item.changefreq = 'weekly';
    return item;
  }

  if (path === '/blog/') {
    item.priority = 0.9;
    item.changefreq = 'weekly';
    return item;
  }

  if (path === '/forum/') {
    item.priority = 0.8;
    item.changefreq = 'daily';
    return item;
  }

  if (path.startsWith('/forum/')) {
    item.priority = 0.6;
    item.changefreq = 'weekly';
    return item;
  }

  if (path.startsWith('/blog/')) {
    item.priority = 0.7;
    item.changefreq = 'monthly';
    item.lastmod = blogLastmod.get(path) ?? buildDate;
    return item;
  }

  if (path.startsWith('/products/')) {
    item.priority = 0.8;
    item.changefreq = 'weekly';
    return item;
  }

  if (
    path === '/about/' ||
    path === '/support/' ||
    path === '/privacy/' ||
    path === '/terms/' ||
    path === '/faq/'
  ) {
    item.priority = 0.5;
    item.changefreq = 'yearly';
    return item;
  }

  item.priority = 0.6;
  item.changefreq = 'monthly';
  return item;
}
