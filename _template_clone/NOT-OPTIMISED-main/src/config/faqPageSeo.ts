import { getAllFaqs, type SiteFaqItem } from '../data/faq';
import { normalizeInternalPath, productPath, ROUTES } from '../utils/path';

function faqLink(text: string, href: string): string {
  return `<a href="${normalizeInternalPath(href)}">${text}</a>`;
}

const productHref = normalizeInternalPath(productPath('arc-raiders'));
const defaultProductAnchor = 'ARC Raiders product';
const productNeedle = `<a href="${productHref}">${defaultProductAnchor}</a>`;

const blogHref = normalizeInternalPath(ROUTES.blog);
const defaultBlogAnchor = 'blog guides';
const blogNeedle = `<a href="${blogHref}">${defaultBlogAnchor}</a>`;

/** FAQ index only — unique product anchors per answer (no global i18n/nav change). */
const productAnchorByFaqId: Record<string, string> = {
  'products-page': 'ARC Raiders full feature list',
  'what-is-esp': 'Player ESP limits on product hub',
  'aimbot-vs-esp': 'Aimbot tuning on product hub',
  'blog-vs-product': 'Authoritative product feature list',
};

const blogAnchorByFaqId: Record<string, string> = {
  'blog-vs-product': 'Setup walkthroughs on blog index',
};

const supportHref = normalizeInternalPath(ROUTES.support);

/** Per-answer extra internal links (FAQ page only). */
const supportAnchorByFaqId: Record<string, string> = {
  'support-ticket': 'Open install help ticket',
};

export function getFaqPageFaqs(): SiteFaqItem[] {
  return getAllFaqs().map((item) => {
    let a = item.a;

    const productLabel = productAnchorByFaqId[item.id];
    if (productLabel && a.includes(productNeedle)) {
      a = a.replace(productNeedle, faqLink(productLabel, productPath('arc-raiders')));
    }

    const blogLabel = blogAnchorByFaqId[item.id];
    if (blogLabel && a.includes(blogNeedle)) {
      a = a.replace(blogNeedle, faqLink(blogLabel, ROUTES.blog));
    }

    const supportLabel = supportAnchorByFaqId[item.id];
    if (supportLabel && item.id === 'support-ticket' && !a.includes(supportHref)) {
      a = a.replace(
        'through the Support page',
        `through the ${faqLink(supportLabel, ROUTES.support)}`,
      );
    }

    return a === item.a ? item : { ...item, a };
  });
}
