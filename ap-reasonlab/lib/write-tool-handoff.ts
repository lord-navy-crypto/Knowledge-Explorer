const KEY = "ke-write-tool-handoff-v1";

export type WriteToolTarget =
  | "dual"
  | "draft"
  | "word-count"
  | "markdown-plain"
  | "markdown-pdf"
  | "word-pdf"
  | "word-import";

export type WriteToolHandoff = {
  target: WriteToolTarget;
  text: string;
  title?: string;
  at: number;
};

export function preloadWriteToolDraft(
  target: WriteToolTarget,
  text: string,
  title?: string
): void {
  if (typeof window === "undefined") return;
  const payload: WriteToolHandoff = {
    target,
    text: text.replace(/\r\n/g, "\n"),
    title: title?.trim() || undefined,
    at: Date.now(),
  };
  sessionStorage.setItem(KEY, JSON.stringify(payload));
}

export function consumeWriteToolHandoff(target: WriteToolTarget): WriteToolHandoff | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = sessionStorage.getItem(KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as WriteToolHandoff;
    if (parsed.target !== target) return null;
    sessionStorage.removeItem(KEY);
    return parsed;
  } catch {
    return null;
  }
}

export function peekWriteToolHandoffNotice(target: WriteToolTarget): boolean {
  if (typeof window === "undefined") return false;
  try {
    const raw = sessionStorage.getItem(KEY);
    if (!raw) return false;
    const parsed = JSON.parse(raw) as WriteToolHandoff;
    return parsed.target === target;
  } catch {
    return false;
  }
}
