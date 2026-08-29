import { preloadPlaygroundDraft } from "@/lib/code-draft-bridge";
import type { CodeBoardLanguage } from "@/data/code-board";
import { ALL_CODE_LANGS } from "@/data/code-language-hub";

export const LAST_CODE_LANG_KEY = "ke-code-editor-lang";

const EXT_TO_LANG: Record<string, string> = {
  py: "python",
  pyw: "python",
  js: "javascript",
  mjs: "javascript",
  cjs: "javascript",
  ts: "typescript",
  tsx: "typescript",
  jsx: "javascript",
  sql: "sql",
  md: "markdown",
  markdown: "markdown",
  html: "web",
  htm: "web",
  css: "web",
  json: "javascript",
  java: "java",
  cs: "csharp",
};

export function langIdFromFilename(name: string): string | null {
  const ext = name.split(".").pop()?.toLowerCase() || "";
  return EXT_TO_LANG[ext] || null;
}

export function isCodeLangId(value: string | null | undefined): boolean {
  return Boolean(value && ALL_CODE_LANGS.some((row) => row.id === value));
}

function browserStorage(): Storage | null {
  try {
    return (globalThis as { localStorage?: Storage }).localStorage ?? null;
  } catch {
    return null;
  }
}

export function loadLastCodeLang(fallback = "python"): string {
  const stored = browserStorage()?.getItem(LAST_CODE_LANG_KEY);
  return isCodeLangId(stored) ? stored! : fallback;
}

export function saveLastCodeLang(lang: string) {
  if (!isCodeLangId(lang)) return;
  browserStorage()?.setItem(LAST_CODE_LANG_KEY, lang);
}

export function boardLang(editorLang: string): CodeBoardLanguage {
  if (editorLang === "web") return "html";
  if (
    editorLang === "python" ||
    editorLang === "javascript" ||
    editorLang === "typescript" ||
    editorLang === "sql" ||
    editorLang === "markdown" ||
    editorLang === "java" ||
    editorLang === "csharp"
  ) {
    return editorLang;
  }
  return "other";
}

/** Write file text into the playground draft for the guessed or current language. */
export function importSourceIntoEditor(
  filename: string,
  text: string,
  currentLang: string
): { lang: string } {
  const guessed = langIdFromFilename(filename);
  const lang = guessed && isCodeLangId(guessed) ? guessed : currentLang;
  const board = boardLang(lang);
  preloadPlaygroundDraft(board, text);
  saveLastCodeLang(lang);
  return { lang };
}
