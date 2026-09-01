/** Bookmark-safe redirects — keep in sync with app redirect pages. */
export const KNOWN_REDIRECTS: Array<{ from: string; to: string }> = [
  { from: "/tools/calculator", to: "/hints?tool=calculator" },
  { from: "/tools/grapher", to: "/hints?tool=grapher" },
  { from: "/tools/pdf-compress", to: "/tools/pdf-tools?mode=compress" },
  { from: "/tools/image-crop", to: "/tools/image-compress?mode=crop" },
  { from: "/tools/timer", to: "/tools/focus-desk" },
  { from: "/image-gen", to: "/hints?tool=grapher" },
  { from: "/academic", to: "/forum" },
  { from: "/academic/materials", to: "/forum?tab=shared" },
  { from: "/picture", to: "/forum?tab=box&view=pictures" },
  { from: "/questionnaires", to: "/practice" },
  { from: "/register", to: "/" },
];
