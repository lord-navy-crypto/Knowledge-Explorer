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

export type StudyTool = {
  id: string;
  href: string;
  title: string;
  blurb: string;
  category: StudyToolCategory;
  badge?: string;
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
  // —— AI ——
  {
    id: "ai",
    href: "/hints",
    title: "Unified AI panel",
    blurb: "本地 AI 优先；云端备用。AP / English / Coding 一体对话。",
    category: "ai",
  },
  {
    id: "calculator",
    href: "/hints?tool=calculator",
    title: "KE-84 Calculator",
    blurb: "TI-inspired scientific keypad inside AI Toolbox.",
    category: "ai",
  },
  {
    id: "grapher",
    href: "/hints?tool=grapher",
    title: "KE Graph",
    blurb: "Function plotter — plot y = f(x) with zoom and trace.",
    category: "ai",
  },

  // —— Study desk ——
  {
    id: "timer",
    href: "/tools/timer",
    title: "Study timer",
    blurb: "Pomodoro and custom exam timers — stays on this device.",
    category: "study",
  },
  {
    id: "flashcards",
    href: "/tools/flashcards",
    title: "Flashcards",
    blurb: "Turn concept lines into flip cards and practice locally.",
    category: "study",
  },
  {
    id: "mistake-notebook",
    href: "/tools/mistake-notebook",
    title: "Mistake notebook",
    blurb: "Log wrong answers, what you missed, and the fix — private to this browser.",
    category: "study",
    badge: "New",
  },
  {
    id: "exam-countdown",
    href: "/tools/exam-countdown",
    title: "Exam countdown",
    blurb: "Track exam dates and days remaining on this device.",
    category: "study",
    badge: "New",
  },
  {
    id: "word-count",
    href: "/tools/word-count",
    title: "Word count & reading time",
    blurb: "Count words, characters, sentences, and estimate reading time.",
    category: "study",
  },

  // —— English ——
  {
    id: "vocab-book",
    href: "/tools/vocab-book",
    title: "Vocab book",
    blurb: "Save words, meanings, and examples; flip cards to self-test.",
    category: "english",
    badge: "New",
  },
  {
    id: "dictation",
    href: "/tools/dictation",
    title: "Dictation",
    blurb: "Listen with browser speech, type what you hear, check accuracy.",
    category: "english",
    badge: "New",
  },
  {
    id: "paraphrase",
    href: "/tools/paraphrase",
    title: "Paraphrase compare",
    blurb: "Compare original vs rewrite wording overlap for safer paraphrasing.",
    category: "english",
    badge: "New",
  },
  {
    id: "reading-highlight",
    href: "/tools/reading-highlight",
    title: "Reading highlights",
    blurb: "Highlight passage phrases with colors and margin notes locally.",
    category: "english",
    badge: "New",
  },

  // —— Math ——
  {
    id: "latex",
    href: "/tools/latex",
    title: "LaTeX checker",
    blurb: "Paste $math$ / $$display$$ and preview with KaTeX instantly.",
    category: "math",
  },
  {
    id: "units",
    href: "/tools/units",
    title: "Units & constants",
    blurb: "AP Physics / Chemistry unit converter plus common constants.",
    category: "math",
  },
  {
    id: "sci-notation",
    href: "/tools/sci-notation",
    title: "Scientific notation & sig figs",
    blurb: "Convert numbers and estimate significant figures for lab work.",
    category: "math",
    badge: "New",
  },
  {
    id: "vector-resolve",
    href: "/tools/vector-resolve",
    title: "Vector components",
    blurb: "Resolve a 2D vector into x/y components with a simple diagram.",
    category: "math",
    badge: "New",
  },

  // —— Write ——
  {
    id: "dual",
    href: "/tools/dual",
    title: "Dual-column editor",
    blurb: "Markdown on the left, live render on the right — FRQ writing desk.",
    category: "write",
  },
  {
    id: "typewriter",
    href: "/tools/typewriter",
    title: "Typewriter mode",
    blurb: "Reveal concepts one line at a time for memorization.",
    category: "write",
  },

  // —— Draw ——
  {
    id: "draft",
    href: "/tools/draft",
    title: "Black draft paper",
    blurb: "Dual-blended black board: typed notes + stylus/drawing canvas.",
    category: "draw",
  },

  // —— File lab ——
  {
    id: "word-pdf",
    href: "/tools/word-pdf",
    title: "Word → PDF",
    blurb: "Upload .docx, preview, then Print → Save as PDF in one flow.",
    category: "files",
  },
  {
    id: "word-import",
    href: "/tools/word-import",
    title: "Word → Markdown",
    blurb: "Extract editable Markdown from .docx for concepts and editors.",
    category: "files",
  },
  {
    id: "markdown-pdf",
    href: "/tools/markdown-pdf",
    title: "Markdown → PDF",
    blurb: "Write Markdown + LaTeX, preview, then print / save as PDF.",
    category: "files",
  },
  {
    id: "pdf-tools",
    href: "/tools/pdf-tools",
    title: "PDF merge & split",
    blurb: "Combine PDFs or extract page ranges — all in this browser.",
    category: "files",
  },
  {
    id: "pdf-compress",
    href: "/tools/pdf-compress",
    title: "PDF compress (light)",
    blurb: "Rebuild a PDF to trim unused objects; modest browser-side shrink.",
    category: "files",
    badge: "New",
  },
  {
    id: "csv-markdown",
    href: "/tools/csv-markdown",
    title: "CSV → Markdown table",
    blurb: "Paste or upload CSV and copy a clean Markdown table.",
    category: "files",
  },
  {
    id: "markdown-plain",
    href: "/tools/markdown-plain",
    title: "Markdown ↔ plain text",
    blurb: "Strip Markdown to plain text or wrap plain paragraphs as Markdown.",
    category: "files",
    badge: "New",
  },
  {
    id: "batch-rename",
    href: "/tools/batch-rename",
    title: "Batch rename export",
    blurb: "Preview numbered names and download renamed file copies locally.",
    category: "files",
    badge: "New",
  },

  // —— Images ——
  {
    id: "image-compress",
    href: "/tools/image-compress",
    title: "Image compress & convert",
    blurb: "Shrink photos, set max width, export JPEG / WebP / PNG locally.",
    category: "media",
  },
  {
    id: "image-crop",
    href: "/tools/image-crop",
    title: "Image crop & annotate",
    blurb: "Crop a region or draw simple marks, then download PNG.",
    category: "media",
    badge: "New",
  },

  // —— Classroom light ——
  {
    id: "text-diff",
    href: "/tools/text-diff",
    title: "Text diff",
    blurb: "Compare two drafts line by line for peer review or rewriting.",
    category: "collab",
    badge: "New",
  },
  {
    id: "random-groups",
    href: "/tools/random-groups",
    title: "Random pick & groups",
    blurb: "Shuffle a class list into groups or pick one name at random.",
    category: "collab",
    badge: "New",
  },
  {
    id: "short-code",
    href: "/tools/short-code",
    title: "Short codes (local)",
    blurb: "Map short codes to URLs/notes in this browser for class sharing.",
    category: "collab",
    badge: "New",
  },

  // —— Utilities ——
  {
    id: "color-contrast",
    href: "/tools/color-contrast",
    title: "Color & contrast",
    blurb: "Pick colors and check WCAG contrast for readable materials.",
    category: "utilities",
  },
  {
    id: "qr-code",
    href: "/tools/qr-code",
    title: "QR code",
    blurb: "Turn a link or short text into a downloadable QR code.",
    category: "utilities",
  },
];
