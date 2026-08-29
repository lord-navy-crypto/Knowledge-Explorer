import { preloadPlaygroundDraft } from "@/lib/code-draft-bridge";
import type { CodeBoardLanguage } from "@/data/code-board";
import { ALL_CODE_LANGS } from "@/data/code-language-hub";

export const LAST_CODE_LANG_KEY = "ke-code-editor-lang";

export const CODE_IMPORT_ACCEPT =
  ".py,.pyw,.js,.mjs,.cjs,.ts,.tsx,.jsx,.sql,.md,.html,.htm,.css,.json,.java,.cs,.c,.h,.cpp,.cc,.cxx,.hpp,.go,.rs,.php,.rb,.r,.swift,.kt,.kts,.txt";

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
  c: "c",
  h: "c",
  cpp: "cpp",
  cc: "cpp",
  cxx: "cpp",
  hpp: "cpp",
  go: "go",
  rs: "rust",
  php: "php",
  rb: "ruby",
  r: "r",
  swift: "swift",
  kt: "kotlin",
  kts: "kotlin",
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

const BOARD_LANGS = new Set<CodeBoardLanguage>([
  "python",
  "javascript",
  "typescript",
  "sql",
  "markdown",
  "java",
  "csharp",
  "html",
  "c",
  "cpp",
  "go",
  "rust",
  "php",
  "ruby",
  "r",
  "swift",
  "kotlin",
  "other",
]);

export function boardLang(editorLang: string): CodeBoardLanguage {
  if (editorLang === "web") return "html";
  if (BOARD_LANGS.has(editorLang as CodeBoardLanguage) && editorLang !== "other") {
    return editorLang as CodeBoardLanguage;
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

const AI_LANG_TO_EDITOR: Record<string, string> = {
  Python: "/code/editor?lang=python",
  Java: "/code/editor?lang=java",
  C: "/code/editor?lang=c",
  "C++": "/code/editor?lang=cpp",
  Go: "/code/editor?lang=go",
  Rust: "/code/editor?lang=rust",
  "JavaScript / TypeScript": "/code/editor?lang=javascript",
  "HTML / CSS / JS": "/code/editor?lang=web",
  SQL: "/code/editor?lang=sql",
  "C#": "/code/editor?lang=csharp",
  PHP: "/code/editor?lang=php",
  Ruby: "/code/editor?lang=ruby",
  R: "/code/editor?lang=r",
  Swift: "/code/editor?lang=swift",
  Kotlin: "/code/editor?lang=kotlin",
};

/** One-editor URL for the AI Toolbox coding language dropdown. */
export function codingAiPlaygroundHref(label: string): string {
  return AI_LANG_TO_EDITOR[label] || "/code/editor";
}
