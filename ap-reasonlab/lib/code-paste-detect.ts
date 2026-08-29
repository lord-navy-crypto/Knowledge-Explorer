import { extractForumCodeBlocks } from "@/lib/forum-code-blocks";

export type PasteKind = "json" | "fence" | "base64" | "plain";

export type ClassifiedPaste = {
  kind: PasteKind;
  /** Hub language id when kind is fence (html → web). */
  language?: string;
  body: string;
};

const FENCE_TO_EDITOR: Record<string, string> = {
  python: "python",
  javascript: "javascript",
  typescript: "typescript",
  html: "web",
  sql: "sql",
  markdown: "markdown",
  java: "java",
  csharp: "csharp",
  c: "c",
  cpp: "cpp",
  go: "go",
  rust: "rust",
  php: "php",
  ruby: "ruby",
  r: "r",
  swift: "swift",
  kotlin: "kotlin",
};

function looksLikeBase64(text: string): boolean {
  const compact = text.replace(/\s+/g, "");
  if (compact.length < 16 || compact.length % 4 !== 0) return false;
  return /^(?:[A-Za-z0-9+/]{16,}={0,2})$/.test(compact);
}

/** Classify clipboard / paste for the one Code editor + JSON / Base64 tools. */
export function classifyPaste(raw: string): ClassifiedPaste {
  const text = raw.trim();
  if (!text) return { kind: "plain", body: "" };

  const fences = extractForumCodeBlocks(text);
  const first = fences[0];
  if (first) {
    return {
      kind: "fence",
      language: FENCE_TO_EDITOR[first.language] || first.language,
      body: first.code,
    };
  }

  try {
    const parsed = JSON.parse(text) as unknown;
    if (parsed !== null && typeof parsed === "object") {
      return { kind: "json", body: JSON.stringify(parsed, null, 2) };
    }
  } catch {
    /* not JSON */
  }

  if (looksLikeBase64(text)) {
    return { kind: "base64", body: text.replace(/\s+/g, "") };
  }

  return { kind: "plain", body: text };
}
