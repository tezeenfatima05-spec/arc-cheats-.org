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
  products: 'arc raiders cheats, arc raiders software, cloud dma, ugc tool',
  blog: 'arc raiders guides, arc raiders setup, arc raiders aimbot settings',
  forum: 'arc raiders forum, arc raiders cheats help, arc raiders esp tips',
};

export const PAGE_SEO: Record<string, PageSeoEntry> = {
  '/': {
    title: 'Arc Raiders Cheats – extraction markers | ARC Cheats',
    description:
      'Arc Raiders cheats for Steam PC: aimbot, player ESP, loot overlays, and extraction markers. Feature guides and secure checkout at ARC Cheats.',
    keywords: KW.core,
  },
  '/products/': {
    title: 'ARC Raiders Cheats | Products Hub',
    description:
      'ARC Raiders cheats, Cloud DMA access, and UGC tool listings with feature summaries, setup notes, and secure checkout for Steam PC.',
    keywords: KW.products,
  },
  '/products/arc-raiders/': {
    title: 'ARC Raiders Cheats | Full Feature List',
    description:
      'ARC Raiders cheats for Steam: aimbot, player ESP, world and loot overlays, extraction markers, and misc options. Full feature breakdown.',
    keywords: 'arc raiders cheats, arc raiders aimbot, arc raiders wallhack, steam pc',
  },
  '/products/cloud-dma/': {
    title: 'Cloud DMA Access for ARC Raiders',
    description:
      'Cloud DMA hardware access for supported Windows rigs. Compatibility checklist, portal notes, and checkout for ARC Raiders operators.',
    keywords: 'cloud dma, arc raiders cheats, arc raiders hardware, steam pc',
  },
  '/products/ugc/': {
    title: 'UGC Tool Access | ARC Cheats',
    description:
      'UGC utility tool for Windows with one-time access, portal download steps, and secure checkout through ARC Cheats.',
    keywords: 'ugc tool, arc raiders utilities, arc cheats access',
  },
  '/blog/': {
    title: 'ARC Raiders Cheats Guides & Setup',
    description:
      'ARC Raiders cheats setup guides, aimbot tuning, ESP layout tips, loot filters, and patch-day notes for Steam PC players.',
    keywords: KW.blog,
  },
  '/forum/': {
    title: 'ARC Raiders Cheats Forum & Q&A',
    description:
      'Sample community threads on ARC Raiders cheats setup, ESP layout, combat mode, loot filters, and Cloud DMA on Steam PC.',
    keywords: KW.forum,
  },
  '/faq/': {
    title: 'ARC Raiders Cheats FAQ',
    description:
      'FAQ for ARC Raiders cheats: Steam compatibility, ban risk, Cloud DMA, checkout, loader setup, and support at ARC Cheats.',
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
    title: 'About Arc Cheats – ARC Cheats publishes ARC | ARC Cheats',
    description:
      'About Arc Cheats: ARC Cheats publishes ARC Raiders PC software overviews, honest limitations, guides, and status notes for Steam players.',
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
