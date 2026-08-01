export type StudyToolCategory =
  | "ai"
  | "write"
  | "math"
  | "study"
  | "files"
  | "media"
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
  { id: "write", label: "Write & draft" },
  { id: "draw", label: "Draw & board" },
  { id: "math", label: "Math & science" },
  { id: "study", label: "Study helpers" },
  { id: "files", label: "Documents & PDF" },
  { id: "media", label: "Images" },
  { id: "utilities", label: "Quick utilities" },
];

export const STUDY_TOOLS: StudyTool[] = [
  // —— AI ——
  {
    id: "ai",
    href: "/hints",
    title: "Unified AI panel",
    blurb:
      "作者亲测：本地 AI 更聪明，优先使用；云端作备用。AP / English / Coding 一体对话。",
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
  {
    id: "word-count",
    href: "/tools/word-count",
    title: "Word count & reading time",
    blurb: "Count words, characters, sentences, and estimate reading time locally.",
    category: "write",
    badge: "New",
  },

  // —— Draw ——
  {
    id: "draft",
    href: "/tools/draft",
    title: "Black draft paper",
    blurb: "Dual-blended black board: typed notes + stylus/drawing canvas.",
    category: "draw",
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

  // —— Study ——
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

  // —— Documents & PDF ——
  {
    id: "word-pdf",
    href: "/tools/word-pdf",
    title: "Word → PDF",
    blurb: "Upload .docx, preview, then Print → Save as PDF in one flow.",
    category: "files",
    badge: "New",
  },
  {
    id: "word-import",
    href: "/tools/word-import",
    title: "Word → Markdown",
    blurb: "Extract editable Markdown from .docx for concepts and dual-column editor.",
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
    badge: "New",
  },
  {
    id: "csv-markdown",
    href: "/tools/csv-markdown",
    title: "CSV → Markdown table",
    blurb: "Paste or upload CSV and copy a clean Markdown table.",
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
    badge: "New",
  },

  // —— Utilities ——
  {
    id: "color-contrast",
    href: "/tools/color-contrast",
    title: "Color & contrast",
    blurb: "Pick colors and check WCAG contrast for readable study materials.",
    category: "utilities",
    badge: "New",
  },
  {
    id: "qr-code",
    href: "/tools/qr-code",
    title: "QR code",
    blurb: "Turn a link or short text into a downloadable QR code.",
    category: "utilities",
    badge: "New",
  },
];
