/** One-shot sessionStorage handoffs between Convenient Tools. */

const JSON_KEY = "ke-json-handoff-v1";
const ENCODE_KEY = "ke-encode-handoff-v1";
const DIFF_KEY = "ke-diff-handoff-v1";
const EDITOR_PASTE_KEY = "ke-code-editor-paste-v1";

export type EncodeHandoffMode =
  | "base64-encode"
  | "base64-decode"
  | "url-encode"
  | "url-decode"
  | "uri-encode"
  | "uri-decode"
  | "hex-encode"
  | "hex-decode"
  | "html-encode"
  | "html-decode"
  | "jwt-peek";

export function preloadJsonFormatter(text: string): void {
  if (typeof window === "undefined") return;
  sessionStorage.setItem(JSON_KEY, JSON.stringify({ text, at: Date.now() }));
}

export function consumeJsonFormatterHandoff(): string | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = sessionStorage.getItem(JSON_KEY);
    sessionStorage.removeItem(JSON_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as { text?: string };
    return typeof parsed.text === "string" ? parsed.text : null;
  } catch {
    return null;
  }
}

export function preloadEncodeDecode(text: string, mode?: EncodeHandoffMode): void {
  if (typeof window === "undefined") return;
  sessionStorage.setItem(ENCODE_KEY, JSON.stringify({ text, mode, at: Date.now() }));
}

export function consumeEncodeDecodeHandoff(): { text: string; mode?: EncodeHandoffMode } | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = sessionStorage.getItem(ENCODE_KEY);
    sessionStorage.removeItem(ENCODE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as { text?: string; mode?: EncodeHandoffMode };
    if (typeof parsed.text !== "string") return null;
    return { text: parsed.text, mode: parsed.mode };
  } catch {
    return null;
  }
}

export function preloadTextDiff(left: string, right: string): void {
  if (typeof window === "undefined") return;
  sessionStorage.setItem(DIFF_KEY, JSON.stringify({ left, right, at: Date.now() }));
}

export function consumeTextDiffHandoff(): { left: string; right: string } | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = sessionStorage.getItem(DIFF_KEY);
    sessionStorage.removeItem(DIFF_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as { left?: string; right?: string };
    if (typeof parsed.left !== "string" || typeof parsed.right !== "string") return null;
    return { left: parsed.left, right: parsed.right };
  } catch {
    return null;
  }
}

/** Prefill the one Code editor paste/detect box. */
export function preloadCodeEditorPaste(text: string): void {
  if (typeof window === "undefined") return;
  sessionStorage.setItem(EDITOR_PASTE_KEY, JSON.stringify({ text, at: Date.now() }));
}

export function consumeCodeEditorPaste(): string | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = sessionStorage.getItem(EDITOR_PASTE_KEY);
    sessionStorage.removeItem(EDITOR_PASTE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as { text?: string };
    return typeof parsed.text === "string" ? parsed.text : null;
  } catch {
    return null;
  }
}
