/**
 * Central titles/descriptions for high-traffic routes.
 * Title target: <=60 characters. Description target: 120-160 characters.
 */

export interface PageSeoEntry {
  title: string;
  description: string;
  keywords?: string;
}

const KW = {
  core: 'arc raiders cheats, arc raiders aimbot, arc raiders esp, steam pc cheats',
  products: 'arc raiders cheats, arc raiders software, arc raiders esp, steam pc',
  blog: 'arc raiders guides, arc raiders setup, arc raiders aimbot settings',
  forum: 'arc raiders forum, arc raiders cheats help, arc raiders esp tips',
};

export const PAGE_SEO: Record<string, PageSeoEntry> = {
  '/': {
    title: 'Arc Raiders Cheats – and extraction markers with setup',
    description:
      'Arc Raiders Cheats: Arc cheats hub for Steam PC: Arc Raiders aimbot, player ESP, loot overlays, and extraction markers with setup guides and secure.',
    keywords: KW.core,
  },
  '/products/': {
    title: 'ARC Raiders Cheats | Products Hub',
    description:
      'ARC Raiders cheats for Steam PC: one product hub with aimbot, player ESP, loot overlays, extraction markers, setup notes, and secure checkout.',
    keywords: KW.products,
  },
  '/products/arc-raiders/': {
    title: 'ARC Raiders Cheats | Full Feature List',
    description:
      'ARC Raiders cheats for Steam: aimbot, player ESP, world and loot overlays, extraction markers, and misc options. Full feature breakdown.',
    keywords: 'arc raiders cheats, arc raiders aimbot, arc raiders wallhack, steam pc',
  },
  '/blog/': {
    title: 'Setup – and patch-day notes for Steam PC | ARC Cheats',
    description:
      'ARC Raiders cheats setup guides, aimbot tuning, ESP layout tips, loot filters, and patch-day notes for Steam PC players.',
    keywords: KW.blog,
  },
  '/forum/': {
    title: 'ARC Raiders Cheats Forum | Steam PC',
    description:
      'Community threads on ARC Raiders cheats—portal setup, aimbot tuning, player ESP layouts, loot filters, combat mode, and patch-week profiles on Steam.',
    keywords: KW.forum,
  },
  '/faq/': {
    title: 'FAQ – ARC Raiders cheats, access, guides & Steam PC',
    description:
      'FAQ for ARC Raiders cheats: Steam PC compatibility, ban risk, checkout, loader setup, patches, and support. Help center FAQ for ARC Raiders cheats.',
    keywords: KW.core,
  },
  '/terms/': {
    title: 'Terms & Conditions | ARC Cheats',
    description:
      'Terms of use, license scope, refunds, and checkout policy for ARC Cheats and ARC Raiders product listings.',
    keywords: 'arc cheats terms, arc raiders checkout policy',
  },
  '/privacy/': {
    title: 'Privacy Policy | ARC Cheats',
    description:
      'How ARC Cheats handles analytics, cookies, and contact data when you browse or request support.',
    keywords: 'arc cheats privacy policy',
  },
  '/about/': {
    title: 'About Arc Cheats – and patch status notes for Raiders on',
    description:
      'About arc cheats — software overviews, honest limitations, setup guides, and patch status notes for Raiders on Steam PC.',
    keywords: 'about arc cheats, arc raiders cheats site',
  },
  '/support/': {
    title: 'ARC Raiders Cheats Support',
    description:
      'Support for ARC Raiders cheats: portal login, loader setup, checkout help, and Windows compatibility on Steam PC.',
    keywords: 'arc raiders cheats support, arc cheats setup help',
  },
};

export function normalizeSeoPath(pathname: string): string {
  let path = pathname || '/';
  if (!path.startsWith('/')) path = `/${path}`;
  if (path !== '/' && !path.endsWith('/')) path = `${path}/`;
  return path;
}

export function getPageSeoEntry(pathname: string): PageSeoEntry | undefined {
  return PAGE_SEO[normalizeSeoPath(pathname)];
}

export function getPageKeywords(pathname: string): string | undefined {
  return getPageSeoEntry(pathname)?.keywords;
}
