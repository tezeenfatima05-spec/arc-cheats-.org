import { blogPosts } from '../data/blog';
import { RSS_FEED_PATH, SITE_ORIGIN, absoluteAssetUrl, canonicalUrl } from '../config/seo';
import { SITE_NAME } from '../config/site';
import { parseBlogDate } from './schema';
import { blogPostPath } from './path';

function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function enclosureType(imageUrl: string): string {
  if (/\.webp(\?|$)/i.test(imageUrl)) return 'image/webp';
  if (/\.png(\?|$)/i.test(imageUrl)) return 'image/png';
  if (/\.jpe?g(\?|$)/i.test(imageUrl)) return 'image/jpeg';
  return 'image/*';
}

export function buildRssFeed(): string {
  const feedUrl = `${SITE_ORIGIN}${RSS_FEED_PATH}`;
  const items = blogPosts
    .map((post) => {
      const link = canonicalUrl(blogPostPath(post.slug));
      const pubDate = new Date(parseBlogDate(post.date)).toUTCString();
      const encUrl = absoluteAssetUrl(post.image);
      return `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <description>${escapeXml(post.desc)}</description>
      <pubDate>${pubDate}</pubDate>
      <enclosure url="${escapeXml(encUrl)}" type="${enclosureType(encUrl)}" />
    </item>`;
    })
    .join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(SITE_NAME)} Blog</title>
    <link>${SITE_ORIGIN}/blog/</link>
    <description>ARC Raiders guides, setup, and feature notes from arccheats.org.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${feedUrl}" rel="self" type="application/rss+xml" />
    ${items}
  </channel>
</rss>`;
}
