import type { WriteToolTarget } from "@/lib/write-tool-handoff";

export type WriteConvertStep = {
  id: string;
  title: string;
  blurb: string;
  toolHref: string;
  handoffTarget: WriteToolTarget;
  optional?: boolean;
};

export type WriteConvertPath = {
  id: string;
  title: string;
  blurb: string;
  steps: WriteConvertStep[];
};

export const WRITE_CONVERT_PATHS: WriteConvertPath[] = [
  {
    id: "essay-export",
    title: "Essay → count → PDF",
    blurb: "Draft in Markdown, check length, then print/save as PDF.",
    steps: [
      {
        id: "draft",
        title: "Draft",
        blurb: "Write in dual-column Markdown + LaTeX.",
        toolHref: "/tools/dual",
        handoffTarget: "dual",
      },
      {
        id: "count",
        title: "Word count",
        blurb: "Check words, sentences, and reading time.",
        toolHref: "/tools/word-count",
        handoffTarget: "word-count",
      },
      {
        id: "pdf",
        title: "Markdown → PDF",
        blurb: "Preview and print/save as PDF in the browser.",
        toolHref: "/tools/markdown-pdf",
        handoffTarget: "markdown-pdf",
      },
    ],
  },
  {
    id: "word-roundtrip",
    title: "Word import → edit → PDF",
    blurb: "Bring in a .docx, edit as Markdown, export again.",
    steps: [
      {
        id: "import",
        title: "Word import",
        blurb: "Convert .docx to editable Markdown.",
        toolHref: "/tools/word-import",
        handoffTarget: "word-import",
      },
      {
        id: "dual",
        title: "Polish draft",
        blurb: "Edit with live preview.",
        toolHref: "/tools/dual",
        handoffTarget: "dual",
      },
      {
        id: "word-pdf",
        title: "Word / Markdown → PDF",
        blurb: "Print or save PDF from Markdown.",
        toolHref: "/tools/word-pdf",
        handoffTarget: "word-pdf",
      },
    ],
  },
  {
    id: "plain-md",
    title: "Markdown ↔ plain cleanup",
    blurb: "Strip formatting for sharing, or wrap plain notes as Markdown.",
    steps: [
      {
        id: "convert",
        title: "Markdown ↔ plain",
        blurb: "Convert between Markdown and plain text.",
        toolHref: "/tools/markdown-plain",
        handoffTarget: "markdown-plain",
      },
      {
        id: "count",
        title: "Word count",
        blurb: "Verify length after conversion.",
        toolHref: "/tools/word-count",
        handoffTarget: "word-count",
        optional: true,
      },
    ],
  },
];

export const WRITE_TOOL_QUICK_LINKS = [
  { href: "/tools/dual", label: "Dual-column editor" },
  { href: "/tools/draft", label: "Black draft paper" },
  { href: "/tools/word-count", label: "Word count" },
  { href: "/tools/markdown-plain", label: "Markdown ↔ plain" },
  { href: "/tools/markdown-pdf", label: "Markdown → PDF" },
  { href: "/tools/word-import", label: "Word import" },
  { href: "/tools/word-pdf", label: "Word → PDF" },
];
