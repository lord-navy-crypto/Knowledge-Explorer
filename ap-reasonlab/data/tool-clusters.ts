/** Curated groups — similar tools shown together on /tools and tool pages. */

export type ToolCluster = {
  id: string;
  title: string;
  blurb: string;
  toolIds: readonly string[];
  /** Optional code playground paths (not in study-tools registry). */
  codeHrefs?: readonly string[];
};

export const TOOL_CLUSTERS: ToolCluster[] = [
  {
    id: "code-workbench",
    title: "Code workbench",
    blurb: "Save blocks, compare text, format JSON, and jump to browser playgrounds.",
    toolIds: ["code-board", "text-comparator", "short-code", "json-formatter", "encode-decode"],
    codeHrefs: ["/code", "/code/python", "/code/javascript"],
  },
  {
    id: "write-convert",
    title: "Write & convert",
    blurb: "Draft essays, count words, and move between Markdown, Word, and PDF.",
    toolIds: ["write-convert", "dual", "draft", "typewriter", "word-count", "markdown-plain", "markdown-pdf", "word-pdf", "word-import"],
  },
  {
    id: "file-lab",
    title: "File lab",
    blurb: "PDF helpers, CSV ↔ Markdown, batch rename, and compression.",
    toolIds: ["pdf-tools", "pdf-compress", "csv-markdown", "batch-rename", "image-compress", "image-crop"],
  },
  {
    id: "study-desk",
    title: "Study desk",
    blurb: "Focus timers, flashcards, exam countdown, and mistake logs.",
    toolIds: ["focus-desk", "timer", "flashcards", "exam-countdown", "mistake-notebook"],
  },
  {
    id: "math-science",
    title: "Math & science pads",
    blurb: "Calculator, grapher, LaTeX, units, vectors, and formula board.",
    toolIds: ["calculator", "grapher", "latex", "formula-board", "units", "sci-notation", "vector-resolve"],
  },
  {
    id: "english-practice",
    title: "English practice",
    blurb: "Vocabulary, dictation, speech-to-text, paraphrase, and reading highlight.",
    toolIds: ["vocab-book", "dictation", "speech-to-text", "paraphrase", "reading-highlight"],
  },
  {
    id: "classroom-light",
    title: "Classroom light",
    blurb: "Random groups, QR codes, and color contrast checks.",
    toolIds: ["random-groups", "qr-code", "color-contrast"],
  },
];

export function clusterForToolId(toolId: string): ToolCluster | undefined {
  return TOOL_CLUSTERS.find((c) => c.toolIds.includes(toolId));
}
