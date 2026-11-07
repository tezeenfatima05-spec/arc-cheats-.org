import { getBlogFaqs, type SiteFaqItem } from '../data/faq';
import { normalizeInternalPath, productPath } from '../utils/path';

function replaceProductAnchor(html: string, label: string): string {
  const href = normalizeInternalPath(productPath('arc-raiders'));
  const needle = `<a href="${href}">ARC Raiders product</a>`;
  if (!html.includes(needle)) return html;
  return html.replace(needle, `<a href="${href}">${label}</a>`);
}

const productLabelByFaqId: Record<string, string> = {
  'blog-slug-esp': 'Distance caps on Raiders product hub',
  'blog-default-1': 'Authoritative listing before checkout',
};

/** Contextual FAQ block at the bottom of blog posts — unique product anchors only. */
export function getBlogArticleFaqs(tag: string, slug: string): SiteFaqItem[] {
  return getBlogFaqs(tag, slug).map((item) => {
    const label = productLabelByFaqId[item.id];
    if (!label) return item;
    return {
      ...item,
      a: replaceProductAnchor(item.a, label),
      aHtml: item.aHtml ? replaceProductAnchor(item.aHtml, label) : undefined,
    };
  });
}
