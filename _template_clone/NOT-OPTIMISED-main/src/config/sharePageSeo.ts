/** Unique share-link anchor text per page (same outbound URLs, distinct labels for crawlers). */

export const HOME_SHARE_LABELS = {
  x: 'Post ARC Cheats home on X',
  facebook: 'Post ARC Cheats home on Facebook',
  telegram: 'Post ARC Cheats home on Telegram',
} as const;

export const BLOG_INDEX_SHARE_LABELS = {
  x: 'Post guides index on X',
  facebook: 'Post guides index on Facebook',
  telegram: 'Post guides index on Telegram',
} as const;

export const FAQ_SHARE_LABELS = {
  x: 'Post FAQ index on X',
  facebook: 'Post FAQ index on Facebook',
  telegram: 'Post FAQ index on Telegram',
} as const;

export const ABOUT_SHARE_LABELS = {
  x: 'Post about page on X',
  facebook: 'Post about page on Facebook',
  telegram: 'Post about page on Telegram',
} as const;

export function blogArticleShareLabels(slug: string) {
  const topic = slug.replace(/^arc-raiders-/, '').replace(/-/g, ' ');
  return {
    x: `Post guide (${topic}) on X`,
    facebook: `Post guide (${topic}) on Facebook`,
    telegram: `Post guide (${topic}) on Telegram`,
  };
}
