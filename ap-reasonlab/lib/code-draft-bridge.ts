import type { CodeBoardLanguage } from "@/data/code-board";

/** localStorage keys used by each in-browser playground draft. */
export const PLAYGROUND_DRAFT_KEYS: Record<CodeBoardLanguage, string> = {
  python: "ke-code-python-draft",
  javascript: "ke-code-js-draft",
  typescript: "ke-code-ts-draft",
  html: "ke-code-html-draft",
  sql: "ke-code-sql-draft",
  markdown: "ke-code-markdown-draft",
  java: "ke-code-java-draft",
  csharp: "ke-code-csharp-draft",
  other: "ke-code-other-draft",
};

export function playgroundHref(language: CodeBoardLanguage): string | null {
  if (language === "other") return null;
  if (language === "python") return "/code/python";
  if (language === "javascript") return "/code/javascript";
  if (language === "typescript") return "/code/typescript";
  if (language === "html") return "/code/web";
  if (language === "sql") return "/code/sql";
  if (language === "markdown") return "/code/markdown";
  if (language === "java") return "/code/java";
  if (language === "csharp") return "/code/csharp";
  return null;
}

/** Write code into the target playground draft before navigation. */
export function preloadPlaygroundDraft(language: CodeBoardLanguage, code: string): string | null {
  const href = playgroundHref(language);
  if (!href || typeof window === "undefined") return href;
  const key = PLAYGROUND_DRAFT_KEYS[language];
  localStorage.setItem(key, code.replace(/\r\n/g, "\n"));
  sessionStorage.setItem("ke-code-board-handoff", language);
  return href;
}

export function consumePlaygroundHandoffNotice(): string | null {
  if (typeof window === "undefined") return null;
  const lang = sessionStorage.getItem("ke-code-board-handoff");
  sessionStorage.removeItem("ke-code-board-handoff");
  return lang;
}
