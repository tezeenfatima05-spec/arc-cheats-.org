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

const bySlug = (slug: string) => {
  const post = blogPosts.find((p) => p.slug === slug);
  const path = `/blog/${slug}/`;
  return {
    sourceTitle: post?.title ?? slug,
    sourcePath: path,
  };
};

export const forumPosts: ForumPost[] = [
  {
    slug: 'verify-portal-build-before-queue',
    category: 'Patch talk',
    categoryTone: 'orange',
    title: 'Do you check portal status before every queue?',
    excerpt:
      'I only obsess over the portal after patches—but last Tuesday I queued blind and overlays were half broken.',
    author: 'northstar_peel',
    age: '4h',
    commentsCount: 4,
    upvotes: 118,
    flair: 'Patch week',
    ...bySlug('arc-raiders-setup-and-first-launch'),
    body: [
      'Steam updated ARC Raiders on a Tuesday and I assumed the loader from Friday was fine. Player ESP worked, world loot was missing half its icons, and support said the build line had moved.',
      'Now I read portal status even on quiet weeks—takes thirty seconds and saves a wasted raid. Anyone else gate queue on notes or only when Twitter is screaming patch day?',
    ],
    comments: [
      {
        author: 'clamp_distance',
        age: '3h',
        score: 42,
        body: 'Quiet weeks I skim notes. Patch weeks I read every line and screenshot the build hash. Distance caps are the first thing I re-test.',
      },
      {
        author: 'read_notes',
        age: '2h',
        score: 31,
        body: 'Treat portal notes like client patch notes. If maintenance is up, I do not stack new features same session.',
        replies: [
          {
            author: 'northstar_peel',
            age: '1h',
            score: 8,
            body: 'Fair—maintenance banner would have saved me that run.',
          },
        ],
      },
      {
        author: 'portal_first',
        age: '45m',
        score: 19,
        body: 'Linked the full enable order in the blog setup piece. Player distance before aimbot still the hill I will die on.',
      },
    ],
  },
  {
    slug: 'loot-filters-vs-visual-noise',
    category: 'Community',
    categoryTone: 'green',
    title: 'How strict are your loot rarity filters?',
    excerpt: 'Running everything at epic+ felt clean until I missed route crates on a map I did not know.',
    author: 'route_first',
    age: '1d',
    commentsCount: 3,
    upvotes: 86,
    flair: 'Loot ESP',
    ...bySlug('arc-raiders-loot-and-world-esp-filters'),
    body: [
      'I copied a buddy\'s filter preset and the HUD looked amazing—until I walked past field crates because rarity gates hid them. Learned the map the hard way.',
      'Now I run strict filters on farms I know, loose filters on new POIs for a session or two. Pairs with shorter max distance while learning.',
    ],
    comments: [
      {
        author: 'filter_zen',
        age: '22h',
        score: 27,
        body: 'Type filters matter more than rarity for me. Weapon parts yes, junk no. Containers get their own toggle.',
      },
      {
        author: 'arcscout',
        age: '18h',
        score: 14,
        body: 'Custom selection lists saved me—only highlight what the route actually needs.',
      },
    ],
  },
  {
    slug: 'how-to-enable-features-safely',
    category: 'Guides & builds',
    categoryTone: 'blue',
    title: 'Feature enable order that did not crash my first night',
    excerpt: 'Overlays off, then distance caps, then ONE visual—box without skeleton until stable.',
    author: 'layer_cake',
    age: '2d',
    commentsCount: 5,
    upvotes: 203,
    flair: 'Setup',
    ...bySlug('arc-raiders-setup-and-first-launch'),
    body: [
      'First night I flipped aimbot and full player ESP at once and could not tell which layer caused micro-stutter. Second night: overlays off, verify Steam launch, enable max distance only, add box ESP, then smooth aim at tight FOV.',
      'World loot waited until player readouts felt boring-stable. Not glamorous but my crash rate dropped to zero that week.',
    ],
    comments: [
      {
        author: 'quiet_aim',
        age: '1d',
        score: 55,
        body: 'Visible check on before you widen FOV. Learned after snapping through a wall I thought was cover.',
      },
      {
        author: 'vexloot',
        age: '1d',
        score: 38,
        body: 'Wrote my profile name on paper when something finally worked. Sounds silly but patch weeks I reload that baseline first.',
      },
    ],
  },
  {
    slug: 'what-does-combat-mode-hide',
    category: 'Guides & builds',
    categoryTone: 'blue',
    title: 'Combat mode saved my screen—not my loot sense',
    excerpt: 'Hides salvage spam during CQC; I forgot to flip it back and rotated blind.',
    author: 'toggle_key',
    age: '3d',
    commentsCount: 4,
    upvotes: 74,
    flair: 'Combat mode',
    ...bySlug('arc-raiders-extraction-and-threat-overlays'),
    body: [
      'Combat mode does what it says: fight overlays stay, world clutter ducks. Problem is muscle memory—won a scrap, chased another fight, never re-enabled containers.',
      'Bound combat mode to a mouse side button. Profile saved for “push” vs “farm”. Exit icons stay capped so I always see a peel lane.',
    ],
    comments: [
      {
        author: 'exit_band',
        age: '2d',
        score: 22,
        body: 'Keep extraction distance tighter than player ESP. Exits inside panic range only.',
      },
      {
        author: 'toggle_key',
        age: '2d',
        score: 11,
        body: 'Yeah—wide exit caps during farm profile, tight during push profile.',
      },
    ],
  },
  {
    slug: 'patch-day-profile-reset',
    category: 'Patch talk',
    categoryTone: 'orange',
    title: 'Profile reset ritual after client updates',
    excerpt: 'Screenshot menus when stable; diff after patch instead of guessing which slider broke.',
    author: 'build_hash',
    age: '5d',
    commentsCount: 3,
    upvotes: 91,
    flair: 'Profiles',
    ...bySlug('arc-raiders-setup-and-first-launch'),
    body: [
      'I used to retune from scratch every patch. Now I keep a “calm lobby” profile and a screenshot of distance caps. After updates I load calm, play one extract, then compare.',
      'Most breaks are one slider—combat mode binding, container distance, not the whole cheat suite.',
    ],
    comments: [
      {
        author: 'notes_nerd',
        age: '4d',
        score: 17,
        body: 'Portal changelog + your screenshot beats memory every time.',
      },
    ],
  },
  {
    slug: 'aim-smooth-stickiness-debate',
    category: 'General',
    categoryTone: 'purple',
    title: 'Smooth high or stickiness high for tracking?',
    excerpt: 'Sticky feels glued on strafing targets; smooth looks human but arrives late.',
    author: 'fov_tight',
    age: '6h',
    commentsCount: 6,
    upvotes: 156,
    flair: 'Aimbot',
    ...bySlug('arc-raiders-aimbot-and-fov-settings'),
    body: [
      'ARC Raiders strafe fights punish wide FOV. I run narrow cone, smooth 70%+, stickiness mid. Raise sticky only when targets bunny sideways.',
      'Drawn FOV helped me see the cone lying to me—turned off after tuning. Anyone run stickiness low on purpose?',
    ],
    comments: [
      {
        author: 'bone_chest',
        age: '5h',
        score: 44,
        body: 'Chest bone + visible check until you trust profiles. Head bone later.',
      },
      {
        author: 'debug_lines',
        age: '4h',
        score: 29,
        body: 'Target line for one evening of tuning then off forever. Clutter otherwise.',
      },
      {
        author: 'fov_tight',
        age: '3h',
        score: 12,
        body: 'Stickiness low crew reporting in—smooth carries tracking for me.',
      },
    ],
  },
  {
    slug: 'skeleton-or-box-esp',
    category: 'Community',
    categoryTone: 'green',
    title: 'Box only, skeleton only, or both (why)?',
    excerpt: 'Both maxed looks like Christmas lights. Squad tags + box at medium distance won.',
    author: 'minimal_hud',
    age: '2d',
    commentsCount: 4,
    upvotes: 132,
    flair: 'Player ESP',
    ...bySlug('arc-raiders-player-esp-layout'),
    body: [
      'Tested skeleton-only for a week—great for peek reads, noisy in tall grass maps. Box-only cleaner until fights stack, then I miss angle info.',
      'Settled on box + squad tag + shield bar, skeleton off unless duos weekend. OOF arrows only past 80m or screen edges feel like a radar dish.',
    ],
    comments: [
      {
        author: 'duo_caller',
        age: '1d',
        score: 36,
        body: 'Squad name + distance for voice sync. Name text smaller than you think you need.',
      },
      {
        author: 'view_vec',
        age: '20h',
        score: 21,
        body: 'View direction line is underrated for hold angles. Costs frames if you crank distance.',
      },
    ],
  },
  {
    slug: 'extraction-icons-under-fire',
    category: 'Guides & builds',
    categoryTone: 'blue',
    title: 'Extraction icons when threat markers spike',
    excerpt: 'Threat and exit on same screen edge = chaos. Drop threat distance first.',
    author: 'peel_route',
    age: '8h',
    commentsCount: 5,
    upvotes: 97,
    flair: 'Extract',
    ...bySlug('arc-raiders-combat-routing-to-extract'),
    body: [
      'Mid-raid my threat icons and exit markers hugged the same corner. I peeled the wrong direction once—never again. Now threat distance steps down before touch maps, exit cap stays fixed.',
      'Combat mode on during scrap, off during rotate. Extraction checklist lives on a sticky note beside monitor—sounds boomer, works.',
    ],
    comments: [
      {
        author: 'threat_step',
        age: '6h',
        score: 33,
        body: 'ARC corpses off during push profile. Back on for loot path.',
      },
      {
        author: 'peel_route',
        age: '5h',
        score: 9,
        body: 'Exactly. Corpses are routing not fighting data.',
      },
    ],
  },
];

export function getForumPost(slug: string): ForumPost | undefined {
  return forumPosts.find((post) => post.slug === slug);
}
