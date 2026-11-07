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
    toolbarBackLabel: 'Back to guides hub from ESP article',
    checkoutLinkLabel: 'Player ESP guide checkout',
    navCheckoutLabel: 'Checkout from this ESP guide',
    navProductsLabel: 'Browse player ESP product listing',
    navBlogLabel: 'Return to guides index',
    ctaButtonLabel: 'Open ARC Raiders product map',
    sidebarEliteLabel: 'Player ESP features on Raiders hub',
    sidebarHubLabel: 'Software catalog from ESP guide',
    srOnlyAnchors: [
      { href: '/support/', label: 'Loader tickets from ESP layout article' },
      { href: '/faq/', label: 'Policy answers for ESP readers' },
      { href: '/about/', label: 'Publisher notes for ESP readers' },
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
    toolbarBackLabel: 'Back to guides hub from aimbot article',
    checkoutLinkLabel: 'Aimbot settings guide checkout',
    navCheckoutLabel: 'Checkout from aimbot settings guide',
    navProductsLabel: 'Browse aimbot product listing',
    navBlogLabel: 'More aim and ESP guides',
    ctaButtonLabel: 'Open aimbot feature map',
    sidebarEliteLabel: 'ARC Raiders aimbot product page',
    sidebarHubLabel: 'All ARC Raiders software listings',
    srOnlyAnchors: [
      { href: '/blog/arc-raiders-setup-and-first-launch/', label: 'Portal setup before FOV tuning' },
      { href: '/privacy/', label: 'Privacy policy from aimbot guide' },
      { href: '/forum/', label: 'Forum sample from aimbot guide' },
    ],
  },
  'arc-raiders-setup-and-first-launch': {
    title: 'Arc Raiders – and a safe order for enabling overlays on',
    description:
      'Arc Raiders portal access, first launch, and a safe order for enabling overlays on Steam PC before you stack aimbot or ESP groups.',
    keywords: 'arc raiders, arc raiders setup, arc raiders cheats, steam pc',
    h1: 'How to set up ARC Raiders cheats on PC (portal first)',
    sidebarHeadingsAsParagraphs: true,
    toolbarBackLabel: 'Back to guides hub from setup article',
    checkoutLinkLabel: 'Setup guide checkout',
    navCheckoutLabel: 'Checkout after setup walkthrough',
    navProductsLabel: 'Browse ARC Raiders software hub',
    navBlogLabel: 'More setup articles',
    ctaButtonLabel: 'Open setup product page',
    sidebarEliteLabel: 'Setup targets Raiders product hub',
    sidebarHubLabel: 'Full catalog from setup guide',
    srOnlyAnchors: [
      { href: '/support/', label: 'Install help after setup walkthrough' },
      { href: '/terms/', label: 'Purchase terms from setup walkthrough' },
      { href: '/products/cloud-dma/', label: 'Cloud DMA from setup walkthrough' },
    ],
  },
  'arc-raiders-arc-threat-overlays': {
    title: 'ARC threat overlays when units are on your rou | Cheats',
    description:
      'Threat markers, corpses, and distance context on Steam PC — know when to break contact with ARC Raiders ARC unit overlays.',
    keywords: 'threat, arc raiders esp, arc threat overlays, arc raiders cheats',
    h1: 'ARC threat overlays when units are on your route — ARC Raiders cheats',
    sidebarHeadingsAsParagraphs: true,
    toolbarBackLabel: 'Back to guides hub from threat article',
    checkoutLinkLabel: 'Threat overlay guide checkout',
    navCheckoutLabel: 'Checkout from threat overlay guide',
    navProductsLabel: 'Browse threat overlay products',
    navBlogLabel: 'More threat and ESP guides',
    ctaButtonLabel: 'Open threat overlay product map',
    sidebarEliteLabel: 'Threat overlays on Raiders hub',
    sidebarHubLabel: 'Browse software from threat guide',
    srOnlyAnchors: [
      { href: '/blog/arc-raiders-extraction-and-threat-overlays/', label: 'Extraction caps paired with threat markers' },
      { href: '/forum/', label: 'Community forum sample for threat readers' },
      { href: '/privacy/', label: 'Privacy policy from threat overlay guide' },
    ],
  },
  'arc-raiders-extraction-and-threat-overlays': {
    title: 'Extraction – Cap distance so only relevant | ARC Cheats',
    description:
      'Using extraction icons with distance caps and switching combat mode for quieter world ESP on Steam PC—relevant exits stay visible under pressure.',
    keywords: 'extraction, arc raiders esp, extraction overlays, arc raiders cheats',
    h1: 'Extraction – cap distance so only relevant exits — ARC Raiders cheats',
    sidebarHeadingsAsParagraphs: true,
    toolbarBackLabel: 'Back to guides hub from extraction article',
    checkoutLinkLabel: 'Extraction overlay guide checkout',
    navCheckoutLabel: 'Checkout from extraction guide',
    navProductsLabel: 'Browse extraction overlay products',
    navBlogLabel: 'More extraction and ESP guides',
    ctaButtonLabel: 'Open extraction overlay product map',
    sidebarEliteLabel: 'Extraction features on Raiders hub',
    sidebarHubLabel: 'Catalog link from extraction guide',
    srOnlyAnchors: [
      { href: '/blog/arc-raiders-combat-routing-to-extract/', label: 'Combat peel routing sibling article' },
      { href: '/products/cloud-dma/', label: 'Cloud DMA listing from extraction guide' },
      { href: '/support/', label: 'Support desk from extraction guide' },
    ],
  },
  'arc-raiders-combat-routing-to-extract': {
    title: 'Extract – balance combat overlays with exit icons on Steam',
    description:
      'Extract clean under pressure: balance combat overlays with exit icons on Steam PC so you peel without guessing the route out.',
    keywords: 'extract, arc raiders esp, extraction routing, arc raiders cheats',
    h1: 'Fight hard, extract clean: overlay routing — ARC Raiders cheats',
    sidebarHeadingsAsParagraphs: true,
    toolbarBackLabel: 'Back to guides hub from extract article',
    checkoutLinkLabel: 'Extract routing guide checkout',
    navCheckoutLabel: 'Checkout from extract routing guide',
    navProductsLabel: 'Browse combat overlay products',
    navBlogLabel: 'More extract and combat guides',
    ctaButtonLabel: 'Open extract routing product map',
    sidebarEliteLabel: 'Combat routing on Raiders hub',
    sidebarHubLabel: 'Product catalog from extract guide',
    srOnlyAnchors: [
      { href: '/blog/arc-raiders-misc-camera-and-crosshair/', label: 'Misc camera follow-up after extract routing' },
      { href: '/about/', label: 'Publisher about page from extract routing' },
      { href: '/faq/', label: 'Checkout FAQ from extract routing article' },
    ],
  },
};

export function getBlogSeoOverride(slug: string): BlogSeoOverride | undefined {
  return BLOG_SEO_BY_SLUG[slug];
}
