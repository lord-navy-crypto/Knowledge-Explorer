import type { CodeBoardLanguage } from "@/data/code-board";

const FENCE = /```(\w+)?[^\n]*\n([\s\S]*?)```/g;

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
};

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
