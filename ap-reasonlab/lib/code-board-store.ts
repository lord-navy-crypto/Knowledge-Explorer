import type { CodeBoardLanguage } from "@/data/code-board";

const KEY = "ke-code-board-v1";

type StoredBlock = {
  id: string;
  language: CodeBoardLanguage;
  title: string;
  comment: string;
  code: string;
  builtin?: boolean;
  favorite?: boolean;
  updatedAt?: number;
};

function readBlocks(): StoredBlock[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as StoredBlock[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

/** Append a user block to the code board library (localStorage). */
export function appendToCodeBoard(opts: {
  language: CodeBoardLanguage;
  title: string;
  code: string;
  comment?: string;
}): string {
  const block: StoredBlock = {
    id: `cb-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`,
    language: opts.language,
    title: opts.title.trim() || "Playground snippet",
    comment: (opts.comment || "Saved from playground").trim(),
    code: opts.code.replace(/\r\n/g, "\n"),
    builtin: false,
    favorite: false,
    updatedAt: Date.now(),
  };
  const next = [block, ...readBlocks()];
  localStorage.setItem(KEY, JSON.stringify(next));
  return block.id;
}

/** Replace code on an existing user block. Returns false if missing. */
export function updateCodeBoardBlock(id: string, code: string): boolean {
  if (typeof window === "undefined") return false;
  const blocks = readBlocks();
  const idx = blocks.findIndex((b) => b.id === id);
  if (idx < 0) return false;
  const prev = blocks[idx]!;
  blocks[idx] = {
    ...prev,
    code: code.replace(/\r\n/g, "\n"),
    updatedAt: Date.now(),
  };
  localStorage.setItem(KEY, JSON.stringify(blocks));
  return true;
}
