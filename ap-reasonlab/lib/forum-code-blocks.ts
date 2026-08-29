import type { CodeBoardLanguage } from "@/data/code-board";

const FENCE = /```([A-Za-z0-9_+#-]+)?[^\n]*\n([\s\S]*?)```/g;

const LANG_MAP: Record<string, CodeBoardLanguage> = {
  py: "python",
  python: "python",
  js: "javascript",
  javascript: "javascript",
  ts: "typescript",
  typescript: "typescript",
  html: "html",
  sql: "sql",
  md: "markdown",
  markdown: "markdown",
  java: "java",
  csharp: "csharp",
  cs: "csharp",
  "c#": "csharp",
  c: "c",
  cpp: "cpp",
  cxx: "cpp",
  "c++": "cpp",
  go: "go",
  golang: "go",
  rust: "rust",
  rs: "rust",
  php: "php",
  ruby: "ruby",
  rb: "ruby",
  r: "r",
  swift: "swift",
  kotlin: "kotlin",
  kt: "kotlin",
};

const LANG_LABEL: Partial<Record<CodeBoardLanguage, string>> = {
  python: "Python",
  javascript: "JavaScript",
  typescript: "TypeScript",
  html: "HTML",
  sql: "SQL",
  markdown: "Markdown",
  java: "Java",
  csharp: "C#",
  c: "C",
  cpp: "C++",
  go: "Go",
  rust: "Rust",
  php: "PHP",
  ruby: "Ruby",
  r: "R",
  swift: "Swift",
  kotlin: "Kotlin",
};

/** Composer insert chips — latex uses $$ rather than a fence tag. */
export const FORUM_FENCE_INSERTS: Array<{ tag: string; label: string }> = [
  { tag: "python", label: "Python" },
  { tag: "javascript", label: "JS" },
  { tag: "java", label: "Java" },
  { tag: "c", label: "C" },
  { tag: "cpp", label: "C++" },
  { tag: "go", label: "Go" },
  { tag: "rust", label: "Rust" },
  { tag: "json", label: "JSON" },
  { tag: "latex", label: "LaTeX" },
];

export type ForumCodeBlock = {
  language: CodeBoardLanguage;
  code: string;
  label: string;
};

export function extractForumCodeBlocks(body: string): ForumCodeBlock[] {
  const blocks: ForumCodeBlock[] = [];
  let match: RegExpExecArray | null;
  const re = new RegExp(FENCE.source, "g");
  while ((match = re.exec(body)) !== null) {
    const tag = (match[1] || "").trim().toLowerCase();
    const language = LANG_MAP[tag];
    if (!language) continue;
    const code = match[2]?.trim();
    if (!code) continue;
    blocks.push({
      language,
      code,
      label: LANG_LABEL[language] || language,
    });
  }
  return blocks;
}
