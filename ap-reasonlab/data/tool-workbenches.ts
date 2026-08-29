export type ToolWorkbench = {
  id: string;
  title: string;
  blurb: string;
  href: string;
  moduleIds: readonly string[];
  capabilityLabel: string;
};

/**
 * Workbenches are the only first-class internal tool products shown in Tools & Code.
 * Smaller routes remain available for compatibility, but are reached through their workbench.
 */
export const TOOL_WORKBENCHES: ToolWorkbench[] = [
  {
    id: "math",
    title: "Math workbench · Calc + Graph",
    blurb:
      "One math desk for everyday calculation, graphing, calculus and the supporting AP/STEM utilities.",
    href: "/hints?tool=calculator",
    moduleIds: ["math-pad", "formula-board", "latex", "units", "sci-notation", "vector-resolve"],
    capabilityLabel: "Calculator · Graph · Calculus · Units · Vectors · LaTeX · Formulas",
  },
  {
    id: "code",
    title: "Code workbench",
    blurb:
      "One programming workspace with language editing plus the code utilities that used to be scattered across the catalog.",
    href: "/code/editor?lang=python",
    moduleIds: ["code-board", "json-formatter", "encode-decode", "text-comparator", "short-code"],
    capabilityLabel: "Editor · Code board · JSON · Base64/URL · Compare · Presets",
  },
  {
    id: "write",
    title: "Write & convert workbench",
    blurb:
      "Draft, edit, count and convert writing from one workflow instead of separate writing and conversion cards.",
    href: "/tools/write-convert",
    moduleIds: [
      "write-convert",
      "dual",
      "draft",
      "typewriter",
      "word-count",
      "markdown-plain",
      "markdown-pdf",
      "word-pdf",
      "word-import",
    ],
    capabilityLabel: "Edit · Draft · Count · Markdown · Word import · PDF export",
  },
  {
    id: "files",
    title: "File workbench",
    blurb:
      "The old File Lab cluster becomes one workbench for PDF, image, table and rename jobs.",
    href: "/tools/workbench/files",
    moduleIds: ["pdf-tools", "image-compress", "csv-markdown", "batch-rename"],
    capabilityLabel: "PDF · Images · CSV/Markdown · Batch rename",
  },
  {
    id: "study",
    title: "Study workbench",
    blurb:
      "Focus and review tools are grouped into one study desk instead of four separate catalog products.",
    href: "/tools/workbench/study",
    moduleIds: ["focus-desk", "flashcards", "exam-countdown", "mistake-notebook"],
    capabilityLabel: "Focus · Flashcards · Countdown · Mistake log",
  },
  {
    id: "english",
    title: "English practice workbench",
    blurb:
      "Vocabulary, listening, speech, rewrite comparison and reading annotation live under one English workbench.",
    href: "/tools/workbench/english",
    moduleIds: ["vocab-book", "dictation", "speech-to-text", "paraphrase", "reading-highlight"],
    capabilityLabel: "Vocabulary · Dictation · Speech · Paraphrase · Reading",
  },
  {
    id: "classroom",
    title: "Classroom utility workbench",
    blurb:
      "Small classroom helpers are collected into one lightweight workbench rather than separate top-level tools.",
    href: "/tools/workbench/classroom",
    moduleIds: ["random-groups", "qr-code", "color-contrast"],
    capabilityLabel: "Groups · QR · Color/contrast",
  },
  {
    id: "ai",
    title: "AI workbench",
    blurb:
      "The unified AI panel remains one workbench for AP, English, coding and math assistance.",
    href: "/hints",
    moduleIds: ["ai"],
    capabilityLabel: "AP · English · Coding · Math · Local/API paths",
  },
];

export function getToolWorkbench(id: string): ToolWorkbench | undefined {
  return TOOL_WORKBENCHES.find((workbench) => workbench.id === id);
}
