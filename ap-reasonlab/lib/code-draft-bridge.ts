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
  if (language === "python") return "/code/editor?lang=python";
  if (language === "javascript") return "/code/editor?lang=javascript";
  if (language === "typescript") return "/code/editor?lang=typescript";
  if (language === "html") return "/code/editor?lang=web";
  if (language === "sql") return "/code/editor?lang=sql";
  if (language === "markdown") return "/code/editor?lang=markdown";
  if (language === "java") return "/code/editor?lang=java";
  if (language === "csharp") return "/code/editor?lang=csharp";
  return null;
}

export type CodeEditorDesk = "json" | "encode" | "board";

/** One-editor desk URL (JSON / Base64 / code board tabs). */
export function codeEditorDeskHref(desk: CodeEditorDesk, lang?: string): string {
  const params = new URLSearchParams();
  if (lang) params.set("lang", lang);
  params.set("desk", desk);
  return `/code/editor?${params.toString()}`;
}

/** Stay on the fused editor when already there; otherwise open that desk. */
export function openCodeEditorDesk(
  router: { push: (href: string) => void; replace: (href: string, opts?: { scroll?: boolean }) => void },
  desk: CodeEditorDesk
) {
  if (typeof window !== "undefined" && window.location.pathname.includes("/code/editor")) {
    const params = new URLSearchParams(window.location.search);
    params.set("desk", desk);
    router.replace(`/code/editor?${params.toString()}`, { scroll: false });
    return;
  }
  router.push(codeEditorDeskHref(desk));
}

const EDIT_ID_KEY = "ke-code-board-edit-id";

/** Write code into the target playground draft before navigation. */
export function preloadPlaygroundDraft(
  language: CodeBoardLanguage,
  code: string,
  opts?: { blockId?: string }
): string | null {
  const href = playgroundHref(language);
  if (!href || typeof window === "undefined") return href;
  const key = PLAYGROUND_DRAFT_KEYS[language];
  localStorage.setItem(key, code.replace(/\r\n/g, "\n"));
  sessionStorage.setItem("ke-code-board-handoff", language);
  if (opts?.blockId) sessionStorage.setItem(EDIT_ID_KEY, opts.blockId);
  else sessionStorage.removeItem(EDIT_ID_KEY);
  return href;
}

export function peekCodeBoardEditId(): string | null {
  if (typeof window === "undefined") return null;
  return sessionStorage.getItem(EDIT_ID_KEY);
}

export function consumePlaygroundHandoffNotice(): string | null {
  if (typeof window === "undefined") return null;
  const lang = sessionStorage.getItem("ke-code-board-handoff");
  sessionStorage.removeItem("ke-code-board-handoff");
  return lang;
}
