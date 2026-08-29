export type StudyToolCategory =
  | "ai"
  | "write"
  | "math"
  | "study"
  | "english"
  | "files"
  | "media"
  | "collab"
  | "utilities"
  | "draw"
  | "external";

/** Risk / permission hint shown in the toolbox catalog. */
export type ToolSecurity =
  | "safe"
  | "local-data"
  | "upload"
  | "keys"
  | "shared";

export type StudyTool = {
  id: string;
  href: string;
  title: string;
  blurb: string;
  category: StudyToolCategory;
  badge?: string;
  /**
   * When false, keep the route for bookmarks/redirects but hide from /tools grid.
   * Default true.
   */
  listed?: boolean;
  /** Security / permission class for the toolbox catalog. */
  security?: ToolSecurity;
};

export const TOOL_SECURITY_LABELS: Record<
  ToolSecurity,
  { label: string; detail: string; className: string }
> = {
  safe: {
    label: "Safe",
    detail: "Runs locally; no file upload or API keys.",
    className: "bg-emerald-100 text-emerald-800",
  },
  "local-data": {
    label: "Local data",
    detail: "Saves in this browser only (localStorage / memory).",
    className: "bg-sky-100 text-sky-800",
  },
  upload: {
    label: "File permission",
    detail: "Needs you to choose a file. Processing stays in this browser unless noted.",
    className: "bg-amber-100 text-amber-900",
  },
  keys: {
    label: "API key",
    detail: "May ask for your own API key / token. Never paste a change code here.",
    className: "bg-rose-100 text-rose-800",
  },
  shared: {
    label: "Shared / change code",
    detail: "Can publish or delete with a change code / shared storage.",
    className: "bg-violet-100 text-violet-900",
  },
};

export const STUDY_TOOL_CATEGORIES: Array<{ id: StudyToolCategory; label: string }> = [
  { id: "ai", label: "AI Toolbox" },
  { id: "study", label: "Study desk" },
  { id: "english", label: "English" },
  { id: "math", label: "Math & science" },
  { id: "write", label: "Write & draft" },
  { id: "draw", label: "Draw & board" },
  { id: "files", label: "File lab" },
  { id: "media", label: "Images" },
  { id: "collab", label: "Classroom light" },
  { id: "utilities", label: "Quick utilities" },
  { id: "external", label: "External connections" },
];

export const STUDY_TOOLS: StudyTool[] = [
  // —— AI (one hub; calculator/grapher are deep-links, not separate recommended cards) ——
  {
    id: "ai",
    href: "/hints",
    title: "Unified AI panel",
    blurb: "Local AI first; cloud backup. AP / English / Coding in one place — plus Calculator & Grapher tabs.",
    category: "ai",
    security: "keys",
  },
  {
    id: "calculator",
    href: "/hints?tool=calculator",
    title: "KE ClassWiz Calculator",
    blurb:
      "Casio ClassWiz-class: COMP, COMPLEX, MATRIX, EQN, 1-/2-Var STAT, BASE-N, DIST, ENG — AP STEM ready.",
    category: "ai",
    security: "safe",
    listed: false,
  },
  {
    id: "grapher",
    href: "/hints?tool=grapher",
    title: "KE Graph",
    blurb:
      "Y1–Y4, derivative/tangent, zeros/max-min/intersect, ∫, shade Y1≥Y2, parametric & polar, pan/zoom.",
    category: "ai",
    security: "safe",
    listed: false,
  },
  {
    id: "math-pad",
    href: "/hints?tool=calculator",
    title: "Calc + Graph pad",
    blurb:
      "Calculator + grapher + numeric d/dx, ∫, Σ, table, zeros, units, sci notation, vectors, LaTeX, and formulas in one desk.",
    category: "math",
    security: "safe",
  },

  // —— Study desk ——
  {
    id: "focus-desk",
    href: "/tools/focus-desk",
    title: "Tomato focus desk",
    blurb: "Pomodoro focus/break + optional noise beds (white, pink, brown, soft, rain-like).",
    category: "study",
    security: "safe",
  },
  {
    // Hidden: merged into focus-desk; route redirects.
    id: "timer",
    href: "/tools/focus-desk",
    title: "Study timer",
    blurb: "Merged into Tomato focus desk.",
    category: "study",
    listed: false,
    security: "safe",
  },
  {
    id: "flashcards",
    href: "/tools/flashcards",
    title: "Flashcards (paste)",
    blurb: "Ephemeral STEM flip cards from pasted lines — not saved like Vocab book.",
    category: "study",
    security: "safe",
  },
  {
    id: "mistake-notebook",
    href: "/tools/mistake-notebook",
    title: "Mistake notebook",
    blurb: "Log wrong answers and fixes — private to this browser.",
    category: "study",
    security: "local-data",
  },
  {
    id: "exam-countdown",
    href: "/tools/exam-countdown",
    title: "Exam countdown",
    blurb: "Track exam dates and days remaining on this device.",
    category: "study",
    security: "local-data",
  },
  {
    id: "code-board",
    href: "/tools/code-board",
    title: "Long code block adder",
    blurb: "Scrollable code library with comments — also linked from Code hub.",
    category: "study",
    security: "local-data",
  },
  {
    id: "word-count",
    href: "/tools/word-count",
    title: "Word count & reading time",
    blurb: "Count words, characters, sentences, and estimate reading time.",
    category: "study",
    security: "safe",
  },

  // —— English ——
  {
    id: "vocab-book",
    href: "/tools/vocab-book",
    title: "Vocab book",
    blurb: "Saved English words with flip self-test (persists in this browser).",
    category: "english",
    security: "local-data",
  },
  {
    id: "speech-to-text",
    href: "/tools/speech-to-text",
    title: "Speech to text",
    blurb:
      "English speech → text while you speak: live mic, record a clip, or upload audio (Whisper).",
    category: "english",
    security: "upload",
  },
  {
    id: "dictation",
    href: "/tools/dictation",
    title: "Dictation",
    blurb: "Listen with browser speech, type what you hear, check accuracy.",
    category: "english",
    security: "safe",
  },
  {
    id: "paraphrase",
    href: "/tools/paraphrase",
    title: "Paraphrase compare",
    blurb: "Compare original vs rewrite wording overlap (English rewrite check).",
    category: "english",
    security: "safe",
  },
  {
    id: "reading-highlight",
    href: "/tools/reading-highlight",
    title: "Reading highlights",
    blurb: "Highlight passage phrases with colors and margin notes locally.",
    category: "english",
    security: "local-data",
  },

  // —— Math ——
  {
    id: "formula-board",
    href: "/tools/formula-board",
    title: "Formula board",
    blurb: "Common AP / STEM formulas — one-click copy as LaTeX or plain text.",
    category: "math",
    security: "safe",
  },
  {
    id: "latex",
    href: "/tools/latex",
    title: "LaTeX checker",
    blurb: "Paste $math$ / $$display$$ and preview with KaTeX instantly.",
    category: "math",
    security: "safe",
  },
  {
    id: "units",
    href: "/tools/units",
    title: "Units & constants",
    blurb: "AP Physics / Chemistry unit converter plus common constants.",
    category: "math",
    security: "safe",
  },
  {
    id: "sci-notation",
    href: "/tools/sci-notation",
    title: "Scientific notation & sig figs",
    blurb: "Convert numbers, estimate sig figs, and multiply/divide with classroom rounding.",
    category: "math",
    security: "safe",
  },
  {
    id: "vector-resolve",
    href: "/tools/vector-resolve",
    title: "Vector components",
    blurb: "Resolve |A|∠θ or add/subtract 2D vectors with magnitude, angle, and diagram.",
    category: "math",
    security: "safe",
  },

  // —— Write ——
  {
    id: "write-convert",
    href: "/tools/write-convert",
    title: "Write & convert wizard",
    blurb: "Batch pipeline: hand off one draft to word count, Markdown cleanup, or PDF export.",
    category: "write",
    security: "local-data",
    badge: "Wizard",
  },
  {
    id: "dual",
    href: "/tools/dual",
    title: "Dual-column editor",
    blurb: "Markdown on the left, live render on the right — FRQ writing desk.",
    category: "write",
    security: "safe",
  },
  {
    id: "typewriter",
    href: "/tools/typewriter",
    title: "Typewriter mode",
    blurb: "Reveal concepts one line at a time for memorization.",
    category: "write",
    security: "safe",
  },

  // —— Draw ——
  {
    id: "draft",
    href: "/tools/draft",
    title: "Black draft paper",
    blurb: "Dual-blended black board: typed notes + stylus/drawing canvas.",
    category: "draw",
    security: "local-data",
  },

  // —— File lab ——
  {
    id: "word-pdf",
    href: "/tools/word-pdf",
    title: "Word → PDF",
    blurb: "Upload .docx, preview, then Print → Save as PDF in one flow.",
    category: "files",
    security: "upload",
  },
  {
    id: "word-import",
    href: "/tools/word-import",
    title: "Word → Markdown",
    blurb: "Extract editable Markdown from .docx for concepts and editors.",
    category: "files",
    security: "upload",
  },
  {
    id: "markdown-pdf",
    href: "/tools/markdown-pdf",
    title: "Markdown → PDF",
    blurb: "Write Markdown + LaTeX, preview, then print / save as PDF.",
    category: "files",
    security: "safe",
  },
  {
    id: "pdf-tools",
    href: "/tools/pdf-tools",
    title: "PDF desk",
    blurb: "Merge, split, rotate, or lightly compress PDFs — import files in one desk.",
    category: "files",
    security: "upload",
  },
  {
    id: "pdf-compress",
    href: "/tools/pdf-tools?mode=compress",
    title: "PDF compress (light)",
    blurb: "Merged into PDF desk.",
    category: "files",
    security: "upload",
    listed: false,
  },
  {
    id: "csv-markdown",
    href: "/tools/csv-markdown",
    title: "CSV → Markdown table",
    blurb: "Paste or upload CSV and copy a clean Markdown table.",
    category: "files",
    security: "upload",
  },
  {
    id: "markdown-plain",
    href: "/tools/markdown-plain",
    title: "Markdown ↔ plain text",
    blurb: "Strip Markdown to plain text or wrap plain paragraphs as Markdown.",
    category: "files",
    security: "safe",
  },
  {
    id: "batch-rename",
    href: "/tools/batch-rename",
    title: "Batch rename export",
    blurb: "Preview numbered names and download renamed file copies locally.",
    category: "files",
    security: "upload",
  },

  // —— Images ——
  {
    id: "image-compress",
    href: "/tools/image-compress",
    title: "Image desk",
    blurb: "Compress, convert, crop, or annotate images locally — import in one desk.",
    category: "media",
    security: "upload",
  },
  {
    id: "image-crop",
    href: "/tools/image-compress?mode=crop",
    title: "Image crop & annotate",
    blurb: "Merged into Image desk.",
    category: "media",
    security: "upload",
    listed: false,
  },

  // —— Classroom light ——
  {
    id: "text-comparator",
    href: "/tools/text-comparator",
    title: "Text-to-text comparator",
    blurb: "Paste left + right text. Perfect match or highlighted diffs — see how much changed.",
    category: "collab",
    security: "safe",
  },
  {
    id: "text-diff",
    href: "/tools/text-diff",
    title: "Text diff",
    blurb: "Compare two drafts line by line (same as Text-to-text comparator).",
    category: "collab",
    security: "safe",
    listed: false,
  },
  {
    id: "random-groups",
    href: "/tools/random-groups",
    title: "Random pick & groups",
    blurb: "Shuffle a class list into groups or pick one name — names stay in this browser.",
    category: "collab",
    security: "local-data",
  },
  {
    id: "short-code",
    href: "/tools/short-code",
    title: "Short codes · presets",
    blurb: "Save a short code → link + optional embed window. Create once, reuse anytime (this browser).",
    category: "collab",
    badge: "Presets",
    security: "local-data",
  },

  // —— Utilities ——
  {
    id: "color-contrast",
    href: "/tools/color-contrast",
    title: "Color & contrast",
    blurb: "Pick colors and check WCAG contrast for readable materials.",
    category: "utilities",
    security: "safe",
  },
  {
    id: "qr-code",
    href: "/tools/qr-code",
    title: "QR code",
    blurb: "Turn a link or short text into a downloadable QR code.",
    category: "utilities",
    security: "safe",
  },
  {
    id: "json-formatter",
    href: "/tools/json-formatter",
    title: "JSON formatter",
    blurb: "Validate, pretty-print, and minify JSON locally — pair with text comparator or code board.",
    category: "utilities",
    security: "safe",
    badge: "New",
  },
  {
    id: "encode-decode",
    href: "/tools/encode-decode",
    title: "Base64 & URL encoder",
    blurb: "Encode/decode Base64 and URL/URI strings locally — handy for APIs and query params.",
    category: "utilities",
    security: "safe",
    badge: "New",
  },

  // —— External connections hub ——
  {
    id: "external-hub",
    href: "/tools/external",
    title: "External connections & tools",
    blurb: "Curated off-site links: AP/SAT/TOEFL hubs, Desmos, PhET, dictionaries, coding docs, and more.",
    category: "external",
    security: "safe",
  },
];

export function listedStudyTools(): StudyTool[] {
  return STUDY_TOOLS.filter((tool) => tool.listed !== false);
}

export function getStudyTool(id: string): StudyTool | undefined {
  return STUDY_TOOLS.find((tool) => tool.id === id);
}
