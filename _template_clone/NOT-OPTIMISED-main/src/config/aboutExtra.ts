/** Server-rendered About copy (SEO depth). Not in i18n — About page only. */

export const ABOUT_EXTRA_SECTIONS: { heading: string; paragraphs: string[] }[] = [
  {
    heading: 'How we work',
    paragraphs: [
      'We keep product pages, guides, and FAQs aligned with the current ARC Raiders build for Steam PC. Editorial updates focus on setup order, overlay trade-offs, and checkout expectations—not hype.',
      'If you need background on who runs the site, this page is the canonical about arc cheats overview before you open support or checkout.',
    ],
  },
  {
    heading: 'What we do not do',
    paragraphs: [
      'We do not operate in-game accounts, impersonate players on the forum samples, or promise undetectable outcomes. Risk and compatibility notes stay on product and legal pages where you can review them before purchase.',
    ],
  },
  {
    heading: 'Where to read next',
    paragraphs: [
      'Product feature groups, checkout links, and patch notes live on the ARC Raiders hub and blog index. Support handles portal login issues; legal pages cover refunds and privacy when you need them before purchase.',
    ],
  },
];
