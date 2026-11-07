import { getLandingFaqs, type SiteFaqItem } from '../data/faq';
import { normalizeInternalPath, productPath } from '../utils/path';

/** Homepage FAQ block only — unique product anchor in the products-page answer. */
export function getHomeLandingFaqs(): SiteFaqItem[] {
  const href = normalizeInternalPath(productPath('arc-raiders'));
  const needle = `<a href="${href}">ARC Raiders product</a>`;
  const label = 'Feature groups on Raiders software hub';
  return getLandingFaqs().map((item) => {
    if (item.id !== 'products-page' || !item.a.includes(needle)) return item;
    return {
      ...item,
      a: item.a.replace(needle, `<a href="${href}">${label}</a>`),
    };
  });
}
