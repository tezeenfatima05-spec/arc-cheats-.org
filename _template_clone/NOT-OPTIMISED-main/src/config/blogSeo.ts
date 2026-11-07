/**
 * Per-article SEO overrides (document title, meta, optional H1).
 * Does not change visible lead copy in posts.ts unless h1 is set.
 */

export interface BlogSeoOverride {
  title: string;
  description: string;
  keywords?: string;
  /** Visible article H1 when audit requires title alignment */
  h1?: string;
  sidebarHeadingsAsParagraphs?: boolean;
  checkoutLinkLabel?: string;
  navCheckoutLabel?: string;
  navProductsLabel?: string;
  navBlogLabel?: string;
  ctaButtonLabel?: string;
  imageAlt?: string;
  sidebarEliteLabel?: string;
  sidebarHubLabel?: string;
  toolbarBackLabel?: string;
  srOnlyAnchors?: { href: string; label: string }[];
}

export const BLOG_SEO_BY_SLUG: Record<string, BlogSeoOverride> = {
  'arc-raiders-player-esp-layout': {
    title: 'Player ESP layout that stays readable | ARC Cheats',
    description:
      'Player esp layout: boxes, skeletons, squad tags, and distance caps — pick a minimal stack before you add more overlays for Steam PC raids.',
    keywords: 'player esp layout, arc raiders esp, arc raiders cheats, steam pc',
    h1: 'Player ESP layout that stays readable in ARC Raiders cheats',
    sidebarHeadingsAsParagraphs: true,
    toolbarBackLabel: 'Return from player ESP layout',
    checkoutLinkLabel: 'ESP layout end-of-article purchase',
    navCheckoutLabel: 'Get access after ESP layout tips',
    navProductsLabel: 'Player ESP tier listing',
    navBlogLabel: 'Sibling layout articles',
    ctaButtonLabel: 'Open feature map (ESP layout)',
    sidebarEliteLabel: 'Elite hub (ESP layout)',
    sidebarHubLabel: 'Whole catalog (ESP layout)',
    srOnlyAnchors: [
      { href: '/support/', label: 'Loader tickets beside ESP layout' },
      { href: '/faq/', label: 'Portal policies for layout readers' },
      { href: '/blog/arc-raiders-loot-and-world-esp-filters/', label: 'Loot filters after box caps' },
    ],
  },
  'arc-raiders-aimbot-and-fov-settings': {
    title: 'ARC Raiders aimbot: FOV, smooth, and filters e | Cheats',
    description:
      'What each aim slider does, when to tighten FOV, and how visible check and bones interact on Steam PC ARC Raiders aimbot guides.',
    keywords: 'fov, arc raiders aimbot, arc raiders cheats, steam pc',
    h1: 'ARC Raiders aimbot: FOV, smooth, and filters explained — cheats',
    imageAlt: 'ARC Raiders aimbot and smoothing settings reference',
    sidebarHeadingsAsParagraphs: true,
    toolbarBackLabel: 'Return from aimbot FOV article',
    checkoutLinkLabel: 'Aim FOV section purchase link',
    navCheckoutLabel: 'Portal access after FOV tuning',
    navProductsLabel: 'Aim group product listing',
    navBlogLabel: 'Siblings on aim and ESP',
    ctaButtonLabel: 'Open aim feature map (FOV)',
    sidebarEliteLabel: 'Elite hub (FOV article)',
    sidebarHubLabel: 'Software catalog (FOV article)',
    srOnlyAnchors: [
      { href: '/blog/arc-raiders-setup-and-first-launch/', label: 'Portal enable order before FOV' },
      { href: '/privacy/', label: 'Analytics privacy for FOV readers' },
      { href: '/blog/arc-raiders-player-esp-layout/', label: 'ESP clutter companion to FOV' },
    ],
  },
  'arc-raiders-setup-and-first-launch': {
    title: 'Arc Raiders – and a safe order for enabling overlays on',
    description:
      'Arc Raiders portal access, first launch, and a safe order for enabling overlays on Steam PC before you stack aimbot or ESP groups.',
    keywords: 'arc raiders, arc raiders setup, arc raiders cheats, steam pc',
    h1: 'Arc Raiders setup: safe order for enabling overlays on PC (portal first)',
    sidebarHeadingsAsParagraphs: true,
    toolbarBackLabel: 'Return from setup launch article',
    checkoutLinkLabel: 'Setup steps purchase link',
    navCheckoutLabel: 'Portal access after setup',
    navProductsLabel: 'Software hub (setup article)',
    navBlogLabel: 'More overlay setup pieces',
    ctaButtonLabel: 'Raiders map (setup article)',
    sidebarEliteLabel: 'Elite hub (setup article)',
    sidebarHubLabel: 'Catalog link (setup article)',
    srOnlyAnchors: [
      { href: '/support/', label: 'Install tickets after setup steps' },
      { href: '/terms/', label: 'License wording for setup readers' },
      { href: '/blog/arc-raiders-misc-camera-and-crosshair/', label: 'Camera misc notes post-setup' },
    ],
  },
  'arc-raiders-arc-threat-overlays': {
    title: 'ARC threat overlays when units are on your rou | Cheats',
    description:
      'Threat markers, corpses, and distance context on Steam PC — know when to break contact with ARC Raiders ARC unit overlays.',
    keywords: 'threat, arc raiders esp, arc threat overlays, arc raiders cheats',
    h1: 'ARC threat overlays when units are on your route — ARC Raiders cheats',
    sidebarHeadingsAsParagraphs: true,
    toolbarBackLabel: 'Return from ARC threat article',
    checkoutLinkLabel: 'Threat overlay purchase link',
    navCheckoutLabel: 'Secure access (threat article)',
    navProductsLabel: 'Threat marker listing',
    navBlogLabel: 'Threat/ESP companion reads',
    ctaButtonLabel: 'Threat overlay map link',
    sidebarEliteLabel: 'Elite hub (threat article)',
    sidebarHubLabel: 'Catalog entry (threat article)',
    srOnlyAnchors: [
      { href: '/blog/arc-raiders-extraction-and-threat-overlays/', label: 'Exit cap pairing with threat' },
      { href: '/forum/', label: 'Forum thread samples (threat)' },
      { href: '/about/', label: 'Publisher background (threat)' },
    ],
  },
  'arc-raiders-extraction-and-threat-overlays': {
    title: 'Extraction – Cap distance so only relevant | ARC Cheats',
    description:
      'Using extraction icons with distance caps and switching combat mode for quieter world ESP on Steam PC—relevant exits stay visible under pressure.',
    keywords: 'extraction, arc raiders esp, extraction overlays, arc raiders cheats',
    h1: 'Extraction – cap distance so only relevant exits — ARC Raiders cheats',
    sidebarHeadingsAsParagraphs: true,
    toolbarBackLabel: 'Return from extraction overlay article',
    checkoutLinkLabel: 'Extraction overlay purchase',
    navCheckoutLabel: 'Portal purchase (extraction)',
    navProductsLabel: 'Extraction overlay listing',
    navBlogLabel: 'Extraction/ESP siblings',
    ctaButtonLabel: 'Overlay map (extraction)',
    sidebarEliteLabel: 'Elite hub (extraction)',
    sidebarHubLabel: 'Full catalog (extraction)',
    srOnlyAnchors: [
      { href: '/blog/arc-raiders-combat-routing-to-extract/', label: 'Peel routing sibling piece' },
      { href: '/products/cloud-dma/', label: 'DMA hardware reference page' },
      { href: '/terms/', label: 'Purchase terms for extraction readers' },
    ],
  },
  'arc-raiders-combat-routing-to-extract': {
    title: 'Extract – balance combat overlays with exit icons on Steam',
    description:
      'Extract clean under pressure: balance combat overlays with exit icons on Steam PC so you peel without guessing the route out.',
    keywords: 'extract, arc raiders esp, extraction routing, arc raiders cheats',
    h1: 'Extract – balance combat overlays with exit icons on Steam — ARC Raiders cheats',
    sidebarHeadingsAsParagraphs: true,
    toolbarBackLabel: 'Return from extract routing article',
    checkoutLinkLabel: 'Extract routing purchase',
    navCheckoutLabel: 'Access after extract tips',
    navProductsLabel: 'Combat overlay listing',
    navBlogLabel: 'Extract/combat siblings',
    ctaButtonLabel: 'Product map (extract routing)',
    sidebarEliteLabel: 'Elite hub (extract routing)',
    sidebarHubLabel: 'Wider catalog (extract routing)',
    srOnlyAnchors: [
      { href: '/blog/arc-raiders-misc-camera-and-crosshair/', label: 'Camera misc after extract routing' },
      { href: '/blog/arc-raiders-extraction-and-threat-overlays/', label: 'Exit overlay sibling article' },
      { href: '/products/arc-raiders/', label: 'Elite product breakdown page' },
    ],
  },
};

export function getBlogSeoOverride(slug: string): BlogSeoOverride | undefined {
  return BLOG_SEO_BY_SLUG[slug];
}
