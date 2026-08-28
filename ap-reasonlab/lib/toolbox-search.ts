import { listedStudyTools, STUDY_TOOL_CATEGORIES, type StudyTool } from "@/data/study-tools";
import { TOOL_CLUSTERS } from "@/data/tool-clusters";
import { ALL_CODE_LANGS, CODE_LANG_FAMILIES } from "@/data/code-language-hub";

/** Extra tokens so search finds tools by synonym, not only title. */
export const TOOL_SEARCH_KEYWORDS: Record<string, string> = {
  "write-convert": "wizard pipeline handoff convert word pdf markdown draft essay export batch",
  dual: "two column markdown latex editor frq writing desk live preview",
  typewriter: "reveal lines memorization recitation",
  draft: "black paper stylus canvas sketch notes drawing",
  "word-count": "wc characters sentences reading time flesch keywords",
  "word-pdf": "docx print save as pdf mammoth",
  "word-import": "docx mammoth extract markdown",
  "markdown-pdf": "print katex latex export pdf",
  "markdown-plain": "strip markdown unwrap links plaintext",
  "pdf-tools": "merge split extract pages combine",
  "pdf-compress": "shrink pdf size reduce",
  "csv-markdown": "spreadsheet table paste csv tsv",
  "batch-rename": "filename numbered copies export",
  "json-formatter": "pretty print minify validate json object array stringify parse",
  "encode-decode": "base64 url uri percent encoding utf-8 query string btoa atob hex",
  "code-board": "snippet library adder playground python javascript save blocks",
  "text-comparator": "diff compare two texts highlight changes",
  "text-diff": "diff compare",
  "qr-code": "qrcode barcode link share",
  "color-contrast": "wcag a11y accessibility luminance",
  "focus-desk": "pomodoro tomato timer study desk noise",
  timer: "countdown stopwatch pomodoro",
  flashcards: "srs cards memorize quiz",
  "exam-countdown": "days until exam calendar deadline",
  "mistake-notebook": "error log wrong answers review",
  latex: "katex equation math typeset",
  "formula-board": "pin formulas physics chemistry",
  calculator: "classwiz scientific matrix stats",
  grapher: "plot function y= graph desmos-like",
  units: "si convert meters joules",
  "sci-notation": "scientific notation significant figures",
  "vector-resolve": "components angle magnitude 2d",
  "image-compress": "jpeg webp png resize shrink photo",
  "image-crop": "crop annotate screenshot",
  "random-groups": "shuffle names pick group classroom",
  "short-code": "preset shortcut embed link alias",
  "vocab-book": "vocabulary word list flashcards",
  dictation: "listen type spelling",
  "speech-to-text": "mic transcribe stt whisper",
  paraphrase: "reword rewrite compare",
  "reading-highlight": "annotate passage highlighter",
  "external-hub": "desmos phet dictionary official links",
  ai: "hints toolbox local ai coding english ap",
};

export const FORUM_SEARCH_LANES = [
  {
    id: "forum-home",
    title: "Forum · Discussions",
    href: "/forum",
    detail: "Public threads — questions, tips, quote reply, code fences.",
    body: "forum discussions threads posts replies quote permalink markdown attachments community questions resources announcements beta feedback code fence playground",
  },
  {
    id: "forum-shared",
    title: "Forum · Shared library",
    href: "/forum?tab=shared",
    detail: "Public uploads everyone can browse.",
    body: "shared library public materials upload pdf documents files folders forum tab=shared",
  },
  {
    id: "forum-box",
    title: "Forum · My box",
    href: "/forum?tab=box",
    detail: "Private notes and pictures in this browser.",
    body: "my box private notes pictures indexeddb local learning box random draw forum tab=box",
  },
  {
    id: "forum-questions",
    title: "Forum · Questions",
    href: "/forum?tag=questions",
    detail: "Filter discussion threads tagged as questions.",
    body: "help how why what question ask forum tag=questions",
  },
  {
    id: "forum-resources",
    title: "Forum · Resources",
    href: "/forum?tag=resources",
    detail: "Shared notes, links, and study materials in discussions.",
    body: "resource share note link material pdf guide tip forum tag=resources",
  },
] as const;

const TOOL_QUERY_TERMS = new Set([
  "tools",
  "tool",
  "toolbox",
  "json",
  "base64",
  "encode",
  "decode",
  "url",
  "pdf",
  "docx",
  "markdown",
  "wizard",
  "converter",
  "convert",
  "timer",
  "pomodoro",
  "qr",
  "qrcode",
  "diff",
  "latex",
  "flashcards",
  "flashcard",
  "pretty",
  "minify",
]);

const CODE_QUERY_TERMS = new Set([
  "code",
  "coding",
  "python",
  "pyodide",
  "javascript",
  "typescript",
  "sql",
  "sqlite",
  "html",
  "css",
  "java",
  "csharp",
  "playground",
  "snippet",
  "compiler",
  "markdown",
]);

const FORUM_QUERY_TERMS = new Set([
  "forum",
  "thread",
  "discussion",
  "discussions",
  "reply",
  "shared",
  "library",
  "box",
  "questions",
  "question",
  "resources",
  "resource",
]);

export function toolSearchHaystack(tool: StudyTool): string {
  const cat = STUDY_TOOL_CATEGORIES.find((c) => c.id === tool.category)?.label || "";
  const cluster = TOOL_CLUSTERS.filter((c) => c.toolIds.includes(tool.id))
    .map((c) => `${c.title} ${c.blurb}`)
    .join(" ");
  const extra = TOOL_SEARCH_KEYWORDS[tool.id] || "";
  return [tool.title, tool.blurb, tool.category, cat, tool.href, tool.badge, extra, cluster, "convenient tools"]
    .filter(Boolean)
    .join(" ");
}

export function listedToolsSearchHaystackById(id: string): string {
  const tool = listedStudyTools().find((t) => t.id === id);
  return tool ? toolSearchHaystack(tool) : TOOL_SEARCH_KEYWORDS[id] || "";
}

export function codeLangSearchHaystack() {
  return ALL_CODE_LANGS.map((lang) => ({
    id: `code-lang-${lang.id}`,
    title: `${lang.title} playground`,
    href: lang.href,
    detail: lang.description,
    body: [
      lang.title,
      lang.description,
      lang.runKind,
      lang.official?.label,
      CODE_LANG_FAMILIES.find((f) => f.langs.some((l) => l.id === lang.id))?.label,
      CODE_LANG_FAMILIES.find((f) => f.langs.some((l) => l.id === lang.id))?.blurb,
      "code playground editor run browser official docs",
    ]
      .filter(Boolean)
      .join(" "),
  }));
}

export function detectSearchLane(tokens: string[]): "tools" | "code" | "forum" | null {
  const set = new Set(tokens);
  const hits = {
    tools: [...set].filter((t) => TOOL_QUERY_TERMS.has(t)).length,
    code: [...set].filter((t) => CODE_QUERY_TERMS.has(t)).length,
    forum: [...set].filter((t) => FORUM_QUERY_TERMS.has(t)).length,
  };
  const best = (Object.entries(hits) as Array<["tools" | "code" | "forum", number]>).sort(
    (a, b) => b[1] - a[1]
  )[0];
  if (!best || best[1] === 0) return null;
  return best[0];
}

export function laneTypeBoosts(lane: "tools" | "code" | "forum"): Partial<Record<string, number>> {
  if (lane === "tools") {
    return { tool: 5.5, page: 2.2, code: 1.6, forum: 0.9, concept: 0.4, formula: 0.35 };
  }
  if (lane === "code") {
    return { code: 5.5, tool: 2.4, page: 1.8, forum: 1.1, concept: 0.4, formula: 0.3 };
  }
  return { forum: 5.2, tool: 1.8, code: 1.6, page: 2, learning: 2.2, concept: 0.4 };
}
