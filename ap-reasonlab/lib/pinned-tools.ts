const KEY = "ke-pinned-tools-v1";
const MAX = 8;

export function readPinnedToolIds(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as string[];
    return Array.isArray(parsed) ? parsed.slice(0, MAX) : [];
  } catch {
    return [];
  }
}

export function togglePinnedTool(id: string): string[] {
  const prev = readPinnedToolIds();
  const next = prev.includes(id) ? prev.filter((x) => x !== id) : [id, ...prev].slice(0, MAX);
  localStorage.setItem(KEY, JSON.stringify(next));
  return next;
}

export function isPinnedTool(id: string): boolean {
  return readPinnedToolIds().includes(id);
}
