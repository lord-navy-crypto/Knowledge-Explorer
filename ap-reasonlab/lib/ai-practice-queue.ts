/** Split AI-generated practice into a try-one-at-a-time queue. */

export function parsePracticeItems(text: string): string[] {
  const raw = String(text || "").trim();
  if (!raw) return [];

  const blocks: string[] = [];
  const lines = raw.split(/\n/);
  let current: string[] = [];

  const startRe =
    /^\s*(?:#{1,3}\s*)?(?:Q(?:uestion)?\s*)?(\d{1,2})(?:\s*[.)]|:\s|\s[-–—]\s)/i;

  for (const line of lines) {
    if (startRe.test(line) && current.length) {
      const joined = current.join("\n").trim();
      if (joined.length > 12) blocks.push(joined);
      current = [line];
    } else {
      current.push(line);
    }
  }
  if (current.length) {
    const joined = current.join("\n").trim();
    if (joined.length > 12) blocks.push(joined);
  }

  if (blocks.length >= 2) return blocks.slice(0, 12);

  // Fallback: split on blank lines when numbering is missing.
  const paras = raw
    .split(/\n{2,}/)
    .map((p) => p.trim())
    .filter((p) => p.length > 40 && !/^#{1,3}\s/m.test(p.slice(0, 40)));
  if (paras.length >= 2) return paras.slice(0, 12);

  return raw.length > 40 ? [raw] : [];
}
