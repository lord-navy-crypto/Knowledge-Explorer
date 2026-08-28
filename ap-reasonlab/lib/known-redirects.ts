/** Bookmark-safe redirects — keep in sync with app redirect pages. */
export const KNOWN_REDIRECTS: Array<{ from: string; to: string }> = [
  { from: "/ai-for-ap", to: "/hints?section=ai-for-ap" },
  { from: "/tools/calculator", to: "/hints?tool=calculator" },
  { from: "/tools/grapher", to: "/hints?tool=grapher" },
  { from: "/tools/timer", to: "/tools/focus-desk" },
  { from: "/image-gen", to: "/hints?tool=grapher" },
  { from: "/academic", to: "/forum" },
  { from: "/academic/materials", to: "/forum?tab=shared" },
  { from: "/picture", to: "/forum?tab=box&view=pictures" },
  { from: "/questionnaires", to: "/practice" },
  { from: "/register", to: "/" },
];
