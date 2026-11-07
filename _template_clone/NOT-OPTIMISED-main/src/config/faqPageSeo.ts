import { getAllFaqs, type SiteFaqItem } from '../data/faq';
import { normalizeInternalPath, productPath } from '../utils/path';

function faqLink(text: string, href: string): string {
  return `<a href="${normalizeInternalPath(href)}">${text}</a>`;
}

const productHref = normalizeInternalPath(productPath('arc-raiders'));
const defaultProductAnchor = 'ARC Raiders product';

/** FAQ index only — unique product anchors per answer (no global i18n/nav change). */
const productAnchorByFaqId: Record<string, string> = {
  'products-page': 'ARC Raiders full feature list',
  'what-is-esp': 'Player ESP limits on product hub',
  'aimbot-vs-esp': 'Aimbot tuning on product hub',
  'blog-vs-product': 'Authoritative product feature list',
};

export function getFaqPageFaqs(): SiteFaqItem[] {
  const needle = `<a href="${productHref}">${defaultProductAnchor}</a>`;
  return getAllFaqs().map((item) => {
    const label = productAnchorByFaqId[item.id];
    if (!label || !item.a.includes(needle)) return item;
    return {
      ...item,
      a: item.a.replace(needle, faqLink(label, productPath('arc-raiders'))),
    };
  });
}
