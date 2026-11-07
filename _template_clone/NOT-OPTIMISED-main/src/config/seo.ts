import { t } from '../i18n';
import { DEFAULT_OG_IMAGE_PATH, SITE_DOMAIN as INDEXNOW_HOST_NAME, SITE_URL } from './site';
import { getBlogPost } from '../data/blog';
import { getForumPost } from '../data/forum';
import { getPageSeoEntry, getPageKeywords, normalizeSeoPath } from './pageSeo';

export { getPageKeywords };

export const SITE_ORIGIN = SITE_URL;

export const DEFAULT_OG_IMAGE = DEFAULT_OG_IMAGE_PATH;

export const GA_MEASUREMENT_ID = import.meta.env.PUBLIC_GA_MEASUREMENT_ID as string | undefined;

/** @example @arccheatsorg */
export const TWITTER_SITE = import.meta.env.PUBLIC_TWITTER_SITE as string | undefined;

export const TWITTER_CREATOR = import.meta.env.PUBLIC_TWITTER_CREATOR as string | undefined;

/** Comma-separated profile URLs (X, YouTube, etc.) for Organization sameAs. */
export function getOrganizationSameAs(): string[] {
  const raw = import.meta.env.PUBLIC_ORG_SAME_AS as string | undefined;
  if (!raw?.trim()) return [];
  return raw
    .split(',')
    .map((entry) => entry.trim())
    .filter(Boolean);
}

export const INDEXNOW_KEY = import.meta.env.INDEXNOW_KEY as string | undefined;

export function canonicalUrl(pathname: string): string {
  let path = pathname || '/';
  if (!path.startsWith('/')) path = `/${path}`;
  if (path !== '/' && !path.endsWith('/')) path = `${path}/`;
  return `${SITE_ORIGIN}${path}`;
}

export function absoluteAssetUrl(path: string): string {
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_ORIGIN}${normalized}`;
}

export function resolvePageSeo(pathname: string): {
  title: string;
  description: string;
  keywords?: string;
} {
  const entry = getPageSeoEntry(pathname);
  if (entry) return entry;

  const path = normalizeSeoPath(pathname);
  const blogMatch = path.match(/^\/blog\/([^/]+)\/$/);
  if (blogMatch) {
    const post = getBlogPost(blogMatch[1]);
    if (post) {
      return {
        title: pageTitle(post.title),
        description: post.desc,
        keywords: `arc raiders cheats, arc cheat, ${post.tag.toLowerCase()}, steam pc`,
      };
    }
  }

  const forumMatch = path.match(/^\/forum\/([^/]+)\/$/);
  if (forumMatch) {
    const post = getForumPost(forumMatch[1]);
    if (post) {
      return {
        title: pageTitle(post.title),
        description: post.excerpt,
        keywords: 'arc raiders cheats, arc raiders forum, arc cheat, steam pc',
      };
    }
  }

  return { title: t.site.title, description: t.site.description, keywords: getPageKeywords('/') };
}

export function pageTitle(keyword: string, brand = t.site.name): string {
  const suffix = ` | ${brand}`;
  const max = 60;
  if (`${keyword}${suffix}`.length <= max) return `${keyword}${suffix}`;
  const trimmed = keyword.slice(0, Math.max(20, max - suffix.length - 1)).trim();
  return `${trimmed}${suffix}`;
}

export const DEFAULT_OG_IMAGE_WIDTH = 180;
export const DEFAULT_OG_IMAGE_HEIGHT = 180;

export const RSS_FEED_PATH = '/rss.xml';

export function rssFeedUrl(): string {
  return `${SITE_ORIGIN}${RSS_FEED_PATH}`;
}

/** Prefer on-site images for OG/Twitter so audits match the crawled hostname. */
export function resolveSocialImage(image?: string): string {
  const candidate = (image ?? DEFAULT_OG_IMAGE).trim();
  if (!candidate) return DEFAULT_OG_IMAGE;
  if (candidate.startsWith('/')) return absoluteAssetUrl(candidate);
  try {
    const parsed = new URL(candidate);
    const origin = new URL(SITE_ORIGIN);
    if (parsed.origin === origin.origin) return candidate;
  } catch {
    return absoluteAssetUrl(DEFAULT_OG_IMAGE);
  }
  return absoluteAssetUrl(DEFAULT_OG_IMAGE);
}

/** Used by IndexNow postbuild script. */
export const INDEXNOW_HOST = INDEXNOW_HOST_NAME;
