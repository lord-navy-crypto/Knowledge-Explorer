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
  | "draw";

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
    title: "KE-84 Calculator",
    blurb: "Open Calculator tab inside AI Toolbox (not a separate app).",
    category: "ai",
    security: "safe",
  },
  {
    id: "grapher",
    href: "/hints?tool=grapher",
    title: "KE Graph",
    blurb: "Open Grapher tab inside AI Toolbox — plot y = f(x).",
    category: "ai",
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
    blurb: "Convert numbers and estimate significant figures for lab work.",
    category: "math",
    security: "safe",
  },
  {
    id: "vector-resolve",
    href: "/tools/vector-resolve",
    title: "Vector components",
    blurb: "Resolve a 2D vector into x/y components with a simple diagram.",
    category: "math",
    security: "safe",
  },

  // —— Write ——
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
    title: "PDF merge & split",
    blurb: "Combine PDFs or extract page ranges — all in this browser.",
    category: "files",
    security: "upload",
  },
  {
    id: "pdf-compress",
    href: "/tools/pdf-compress",
    title: "PDF compress (light)",
    blurb: "Rebuild a PDF to trim unused objects; modest browser-side shrink.",
    category: "files",
    security: "upload",
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
    title: "Image compress & convert",
    blurb: "Shrink photos, set max width, export JPEG / WebP / PNG locally.",
    category: "media",
    security: "upload",
  },
  {
    id: "image-crop",
    href: "/tools/image-crop",
    title: "Image crop & annotate",
    blurb: "Crop a region or draw simple marks, then download PNG.",
    category: "media",
    security: "upload",
  },

  // —— Classroom light ——
  {
    id: "text-diff",
    href: "/tools/text-diff",
    title: "Text diff",
    blurb: "Compare two drafts line by line (general text — not the English paraphrase tool).",
    category: "collab",
    security: "safe",
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
    title: "Short codes (local)",
    blurb: "Map short codes to URLs/notes in this browser for class sharing.",
    category: "collab",
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
];

export function listedStudyTools(): StudyTool[] {
  return STUDY_TOOLS.filter((tool) => tool.listed !== false);
}

export function getStudyTool(id: string): StudyTool | undefined {
  return STUDY_TOOLS.find((tool) => tool.id === id);
}
