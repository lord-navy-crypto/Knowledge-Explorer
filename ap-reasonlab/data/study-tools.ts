export type StudyToolCategory =
  | "ai"
  | "write"
  | "math"
  | "study"
  | "files"
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
  { id: "files", label: "Files & export" },
];

export const STUDY_TOOLS: StudyTool[] = [
  {
    id: "ai",
    href: "/hints",
    title: "Unified AI panel",
    blurb: "Local / Website API / Your own API — AP, English, or Coding in one dialogue.",
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
    blurb: "Plot y = f(x) with zoom and trace.",
    category: "ai",
  },
  {
    id: "imagegen",
    href: "/hints?tool=imagegen",
    title: "Image Gen",
    blurb: "Generate study diagrams from a prompt.",
    category: "ai",
  },
  {
    id: "draft",
    href: "/tools/draft",
    title: "Black draft paper",
    blurb: "Dual-blended black board: typed notes + stylus/drawing canvas.",
    category: "draw",
    badge: "New",
  },
  {
    id: "dual",
    href: "/tools/dual",
    title: "Dual-column editor",
    blurb: "Markdown on the left, live render on the right — FRQ writing desk.",
    category: "write",
    badge: "New",
  },
  {
    id: "typewriter",
    href: "/tools/typewriter",
    title: "Typewriter mode",
    blurb: "Reveal concepts one line at a time for memorization.",
    category: "write",
    badge: "New",
  },
  {
    id: "latex",
    href: "/tools/latex",
    title: "LaTeX checker",
    blurb: "Paste $math$ / $$display$$ and preview with KaTeX instantly.",
    category: "math",
    badge: "New",
  },
  {
    id: "units",
    href: "/tools/units",
    title: "Units & constants",
    blurb: "AP Physics / Chemistry unit converter plus common constants.",
    category: "math",
    badge: "New",
  },
  {
    id: "timer",
    href: "/tools/timer",
    title: "Study timer",
    blurb: "Pomodoro and custom exam timers — stays on this device.",
    category: "study",
    badge: "New",
  },
  {
    id: "flashcards",
    href: "/tools/flashcards",
    title: "Flashcards",
    blurb: "Turn concept lines into flip cards and practice locally.",
    category: "study",
    badge: "New",
  },
  {
    id: "markdown-pdf",
    href: "/tools/markdown-pdf",
    title: "Markdown → PDF",
    blurb: "Write Markdown + LaTeX, preview, then print / save as PDF.",
    category: "files",
    badge: "New",
  },
  {
    id: "word-import",
    href: "/tools/word-import",
    title: "Word → Markdown",
    blurb: "Upload a .docx and extract text into editable Markdown.",
    category: "files",
    badge: "New",
  },
];
