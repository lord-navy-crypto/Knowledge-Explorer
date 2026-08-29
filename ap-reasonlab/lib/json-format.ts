/** Pure JSON helpers for the formatter tool. */

export function sortJsonKeys(value: unknown): unknown {
  if (Array.isArray(value)) return value.map(sortJsonKeys);
  if (value && typeof value === "object") {
    const src = value as Record<string, unknown>;
    const out: Record<string, unknown> = {};
    for (const key of Object.keys(src).sort((a, b) => a.localeCompare(b))) {
      out[key] = sortJsonKeys(src[key]);
    }
    return out;
  }
  return value;
}

/** Dot / bracket path, e.g. tools[0] or nested.ok */
export function getJsonPath(value: unknown, path: string): unknown {
  const parts = path
    .trim()
    .replace(/\[(\d+)\]/g, ".$1")
    .split(".")
    .filter(Boolean);
  let cur: unknown = value;
  for (const part of parts) {
    if (cur == null || typeof cur !== "object") return undefined;
    cur = (cur as Record<string, unknown>)[part];
  }
  return cur;
}

export function jsonStats(value: unknown): { type: string; keys: number; depth: number } {
  const type = Array.isArray(value) ? "array" : value === null ? "null" : typeof value;
  let keys = 0;
  let depth = 0;
  function walk(node: unknown, level: number) {
    depth = Math.max(depth, level);
    if (Array.isArray(node)) {
      node.forEach((item) => walk(item, level + 1));
      return;
    }
    if (node && typeof node === "object") {
      const entries = Object.keys(node as object);
      keys += entries.length;
      for (const k of entries) walk((node as Record<string, unknown>)[k], level + 1);
    }
  }
  walk(value, 1);
  return { type, keys, depth };
}
