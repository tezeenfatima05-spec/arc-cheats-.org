import type { IconName } from '../components/icons/types';
import { normalizeInternalPath, productPath, ROUTES } from '../utils/path';

export type FaqTopic =
  | 'all'
  | 'plans'
  | 'esp'
  | 'scripts'
  | 'safety'
  | 'products'
  | 'blog'
  | 'setup';

export interface SiteFaqItem {
  id: string;
  topic: FaqTopic;
  icon: IconName;
  q: string;
  a: string;
  aHtml?: string;
  scopes?: string[];
}

function a(text: string): string {
  return text;
}

function link(text: string, href: string): string {
  return `<a href="${normalizeInternalPath(href)}">${text}</a>`;
}

const productPage = link('ARC Raiders product', productPath('arc-raiders'));
const productsHub = link('Products', ROUTES.products);
const faqPage = link('full FAQ', ROUTES.faq);
const blog = link('blog guides', ROUTES.blog);

export const siteFaqs: SiteFaqItem[] = [
  {
    id: 'status',
    topic: 'setup',
    icon: 'faqStatus',
    q: 'Where do I check build status before playing?',
    a: a('Read the support and product notes on arccheats.org and your operator portal before launching ARC Raiders — especially after patches.'),
  },
  {
    id: 'after-buy',
    topic: 'setup',
    icon: 'faqAfterBuy',
    q: 'What happens after I buy?',
    a: a('The checkout flow sends access instructions. Use your operator portal to download the current build and follow setup steps before loading ARC Raiders.'),
  },
  {
    id: 'ban-risk',
    topic: 'safety',
    icon: 'faqBanRisk',
    q: 'Can I get banned using ARC Raiders cheats?',
    a: a('Yes. Any third-party tool can breach game rules and risk enforcement. Read current notes and accept the risk before using anything.'),
  },
  {
    id: 'platforms',
    topic: 'setup',
    icon: 'faqPlatforms',
    q: 'Which platforms are supported?',
    a: a('ARC Raiders via Steam on Windows 10/11 64-bit. Other clients are not supported unless the portal lists them.'),
  },
  {
    id: 'patch-discipline',
    topic: 'setup',
    icon: 'faqPlatforms',
    q: 'Should I check portal notes after an ARC Raiders patch?',
    a: a('Yes. Client updates can change loader guidance and overlay behavior. Read portal status before you reuse the same profile.'),
  },
  {
    id: 'products-page',
    topic: 'products',
    icon: 'faqProductsPage',
    q: 'Where is the ARC Raiders feature list?',
    a: `${productPage} lists aimbot, player ESP, ARC and world overlays, loot filters, extraction markers, and misc options.`,
  },
  {
    id: 'what-is-esp',
    topic: 'esp',
    icon: 'faqWhatIsEsp',
    q: 'What is player ESP / wallhack?',
    a: `Player ESP shows boxes, skeletons, health, squad tags, and distance within caps. It is an information overlay — read limits on ${productPage}.`,
    scopes: ['arc-raiders'],
  },
  {
    id: 'aimbot-vs-esp',
    topic: 'scripts',
    icon: 'faqEspVsScripts',
    q: 'What is the difference between aimbot and ESP?',
    a: `Aimbot adjusts targeting with FOV and smoothing. ESP draws world information. You can tune each group separately on ${productPage}.`,
    scopes: ['arc-raiders'],
  },
  {
    id: 'loot-filters',
    topic: 'esp',
    icon: 'faqWhichTierEsp',
    q: 'How do loot filters work?',
    a: a('Filters limit loot overlays by rarity and type. Add only what you need so raids stay readable.'),
    scopes: ['arc-raiders'],
  },
  {
    id: 'combat-mode',
    topic: 'esp',
    icon: 'faqStreamProof',
    q: 'What does combat mode do?',
    a: a('Combat mode hides world ESP so combat overlays stay dominant during heavy fights.'),
    scopes: ['arc-raiders'],
  },
  {
    id: 'checkout-url',
    topic: 'products',
    icon: 'faqBlogSetup',
    q: 'Why does checkout use a /go/ link?',
    a: a('arccheats.org shows internal /go/ URLs so your browser bar stays on our domain until the secure redirect.'),
  },
  {
    id: 'blog-vs-product',
    topic: 'blog',
    icon: 'faqBlogVsCheats',
    q: 'Are blog guides the same as the product page?',
    a: `${blog} expands on setup; ${productPage} is the feature source of truth before checkout.`,
  },
  {
    id: 'support-ticket',
    topic: 'setup',
    icon: 'faqDiscordHelp',
    q: 'How do I get install help?',
    a: a('Open a ticket through the Support page with your order email, Windows version, ARC Raiders build, and any error text.'),
  },
  {
    id: 'undetected',
    topic: 'safety',
    icon: 'faqUndetected',
    q: 'Is undetected status guaranteed?',
    a: a('No. Status is point-in-time. Stop if maintenance or warnings apply.'),
  },
  {
    id: 'faq-more',
    topic: 'all',
    icon: 'faqMore',
    q: 'Where is the full FAQ?',
    a: `This page lists common questions. See the ${faqPage} for every topic.`,
  },
];

export function getLandingFaqs(): SiteFaqItem[] {
  return siteFaqs.filter((f) =>
    ['status', 'after-buy', 'ban-risk', 'platforms', 'patch-discipline', 'products-page'].includes(f.id),
  );
}

export function getAllFaqs(): SiteFaqItem[] {
  return siteFaqs.filter((f) => f.topic !== 'all');
}

export const SITE_FAQ_SECTION_COPY = {
  eyebrow: 'All topics',
  title: 'Browse by category',
  subtitle: 'Filter setup, ESP, aimbot, safety, products, and blog answers.',
} as const;

export const SITE_FAQ_FILTER_TOPICS: FaqTopic[] = [
  'all',
  'plans',
  'esp',
  'scripts',
  'safety',
  'products',
  'blog',
  'setup',
];

export const CONTEXTUAL_FAQ_SECTION_COPY = {
  eyebrow: 'FAQ',
  title: 'Questions about this page',
  subtitle: 'Answers tied to what you are reading — visit the FAQ page for every topic.',
} as const;

export function faqFilterTopicsForItems(items: SiteFaqItem[]): FaqTopic[] {
  const present = new Set(items.map((item) => item.topic));
  const topics: FaqTopic[] = ['all'];
  for (const topic of SITE_FAQ_FILTER_TOPICS) {
    if (topic !== 'all' && present.has(topic)) topics.push(topic);
  }
  return topics;
}

export function getProductFaqs(slug: string, kind: 'tier' | 'utility'): SiteFaqItem[] {
  const general = siteFaqs.filter(
    (f) => !f.scopes && ['setup', 'safety', 'products', 'esp', 'scripts'].includes(f.topic),
  );
  const scoped = siteFaqs.filter((f) => f.scopes?.includes(slug));

  const combined = kind === 'tier' ? [...scoped, ...general.slice(0, 10)] : [...scoped, ...general.slice(0, 8)];

  const seen = new Set<string>();
  return combined.filter((item) => {
    if (seen.has(item.id)) return false;
    seen.add(item.id);
    return true;
  });
}

const blogTopicFaqs: Record<string, SiteFaqItem[]> = {
  Guides: [
    {
      id: 'blog-guide-console',
      topic: 'blog',
      icon: 'faqBlogGuideStart',
      q: 'Do these guides replace the product page?',
      a: a('No. Articles explain workflows; the ARC Raiders product page lists authoritative features before checkout.'),
    },
  ],
  Setup: [
    {
      id: 'blog-setup-first',
      topic: 'blog',
      icon: 'faqBlogSetupLoader',
      q: 'Should I test in a quiet session first?',
      a: a('Yes. Enable overlays gradually and save a conservative profile before long raids.'),
    },
  ],
};

const defaultBlogFaqs: SiteFaqItem[] = [
  {
    id: 'blog-default-1',
    topic: 'blog',
    icon: 'faqBlogDefault1',
    q: 'Are blog guides official documentation?',
    a: `${blog} supplements ${productsHub}. Use the product page for checkout decisions.`,
  },
];

export function getBlogFaqs(tag: string, slug: string): SiteFaqItem[] {
  const topicFaqs = blogTopicFaqs[tag] ?? [];
  const slugHints: SiteFaqItem[] = [];

  if (slug.includes('esp') || slug.includes('layout')) {
    slugHints.push({
      id: 'blog-slug-esp',
      topic: 'esp',
      icon: 'faqBlogSlugEsp',
      q: 'Which article covers ESP clutter?',
      a: `Start with player ESP layout, then cross-check distance caps on ${productPage}.`,
    });
  }
  if (slug === 'arc-raiders-aimbot-and-fov-settings') {
    slugHints.push({
      id: 'blog-slug-aim',
      topic: 'scripts',
      icon: 'faqBlogSlugScripts',
      q: 'Where is aim tuning explained?',
      a: a('The aimbot guide walks through smooth, filters, and cone defaults with conservative settings.'),
    });
  } else if (slug.includes('aimbot') || slug.includes('fov')) {
    slugHints.push({
      id: 'blog-slug-aim',
      topic: 'scripts',
      icon: 'faqBlogSlugScripts',
      q: 'Where is aim tuning explained?',
      a: a('The aimbot guide walks through FOV, smooth, and filters with conservative defaults.'),
    });
  }

  return [...slugHints, ...topicFaqs, ...defaultBlogFaqs].slice(0, 8);
}

/** Reserved for legacy compare tables — not used on ARC Raiders single-product focus. */
export const compareRows = [] as const;
