import { blogPosts } from './blog';

export interface ForumComment {
  author: string;
  age: string;
  score: number;
  body: string;
  replies?: ForumComment[];
}

export interface ForumPost {
  slug: string;
  category: string;
  categoryTone: 'purple' | 'blue' | 'green' | 'orange';
  title: string;
  excerpt: string;
  author: string;
  age: string;
  commentsCount: number;
  upvotes: number;
  flair?: string;
  body: string[];
  comments: ForumComment[];
  sourceTitle?: string;
  sourcePath?: string;
}

export const forumCategories = [
  { name: 'General', tone: 'purple', icon: 'users' },
  { name: 'Guides & builds', tone: 'blue', icon: 'navBlog' },
  { name: 'Patch talk', tone: 'orange', icon: 'refresh' },
  { name: 'Community', tone: 'green', icon: 'messageCircle' },
] as const;

/** Sample threads — clearly editorial Q&A referencing on-site guides (not real user chats). */
function guideDiscussion(input: {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  categoryTone: ForumPost['categoryTone'];
  sourceTitle: string;
  sourcePath: string;
  upvotes: number;
  answer: string;
  detail: string;
  tip: string;
}): ForumPost {
  const { answer, detail, tip, ...post } = input;
  return {
    ...post,
    author: 'guide_team',
    age: 'Sample thread',
    commentsCount: 1,
    upvotes: post.upvotes,
    flair: 'Sample Q&A',
    body: [answer, detail],
    comments: [{ author: 'guide_team', age: 'From the guide', score: 0, body: tip }],
  };
}

const bySlug = (slug: string) => {
  const post = blogPosts.find((p) => p.slug === slug);
  const path = `/blog/${slug}/`;
  return {
    sourceTitle: post?.title ?? slug,
    sourcePath: path,
  };
};

const additionalGuidePosts: ForumPost[] = [
  guideDiscussion({
    slug: 'how-to-enable-features-safely',
    title: 'What order should I enable features when testing?',
    upvotes: 48,
    excerpt: 'Portal-first enablement: player distance caps before aimbot, then world layers.',
    category: 'Guides & builds',
    categoryTone: 'blue',
    ...bySlug('arc-raiders-setup-and-first-launch'),
    answer:
      'Start with overlays disabled, confirm Steam launch works, then enable max distance for player ESP before you add aimbot smoothing or world loot overlays.',
    detail:
      'Each layer adds visual noise. Keeping a clean progression makes it easier to spot what caused instability if something breaks after a patch.',
    tip: 'Write down your first working profile name before you experiment with aggressive settings.',
  }),
  guideDiscussion({
    slug: 'what-does-combat-mode-hide',
    title: 'What does combat mode hide compared with full world ESP?',
    upvotes: 36,
    excerpt: 'Combat mode keeps fight-focused overlays and tucks away dense world markers.',
    category: 'Guides & builds',
    categoryTone: 'blue',
    ...bySlug('arc-raiders-extraction-and-threat-overlays'),
    answer:
      'Combat mode is meant for stretches where you only need combat context—aim and player readouts—without salvage, container, or full world clutter.',
    detail:
      'Re-enable world ESP when you are rotating for loot or extractions so you do not lose route cues.',
    tip: 'Bind profiles so you can flip modes without opening menus mid-fight.',
  }),
  guideDiscussion({
    slug: 'cloud-dma-meaning',
    title: 'What does Cloud DMA refer to in portal docs?',
    upvotes: 41,
    excerpt: 'It describes hardware-assisted setups that need specific compatibility and cabling.',
    category: 'General',
    categoryTone: 'purple',
    ...bySlug('arc-raiders-setup-and-first-launch'),
    answer:
      'Docs use Cloud DMA as a hardware category that pairs with supported Windows builds. Requirements are spelled out in the portal—not summarized as a guarantee on the website.',
    detail:
      'If you are unsure whether your rig qualifies, open a support ticket with your motherboard and PCIe layout before checking out.',
    tip: 'Do not daisy-chain experimental drivers on top of undocumented wiring.',
  }),
];

export const forumPosts: ForumPost[] = [
  {
    slug: 'verify-portal-build-before-queue',
    category: 'Patch talk',
    categoryTone: 'orange',
    title: 'Do I need to check portal status before every ARC Raiders session?',
    excerpt: 'Short answer: yes after patches; otherwise read notes if anything felt unstable last run.',
    author: 'guide_team',
    age: 'Sample thread',
    commentsCount: 2,
    upvotes: 62,
    flair: 'Sample',
    ...bySlug('arc-raiders-setup-and-first-launch'),
    body: [
      'ARC Raiders client updates can invalidate overlays until a matching build ships. The safe ritual is: read portal notes, confirm build number matches, then enable features gradually.',
      'If you skipped a patch cycle, assume your profile needs review—especially distance caps that interact with map scale.',
    ],
    comments: [
      {
        author: 'clamp_distance',
        age: 'Sample comment',
        score: 9,
        body: 'Distance caps are underrated—tightening them fixed more clutter than removing whole modules.',
      },
      {
        author: 'read_notes',
        age: 'Sample comment',
        score: 5,
        body: 'I treat portal notes like patch notes. Saves headaches.',
      },
    ],
  },
  {
    slug: 'loot-filters-vs-visual-noise',
    category: 'Community',
    categoryTone: 'green',
    title: 'How strict should loot rarity filters be?',
    excerpt: 'Start strict, loosen after you learn route timing—not the other way around.',
    author: 'guide_team',
    age: 'Sample thread',
    commentsCount: 1,
    upvotes: 28,
    flair: 'Sample',
    ...bySlug('arc-raiders-loot-and-world-esp-filters'),
    body: [
      'Filters exist so rarity and type cues stay scannable. If everything glows, you stop seeing containers that matter.',
      'Pair filters with shorter max distance while you learn a map, then widen distance once you can ignore irrelevant drops instinctively.',
    ],
    comments: [
      {
        author: 'route_first',
        age: 'Sample comment',
        score: 6,
        body: 'I run strict filters on new maps, loose filters on maps I know cold.',
      },
    ],
  },
  ...additionalGuidePosts,
];

export function getForumPost(slug: string): ForumPost | undefined {
  return forumPosts.find((post) => post.slug === slug);
}
