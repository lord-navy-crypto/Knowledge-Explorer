/**
 * Clean the user turn before Knowledge Explorer search.
 * Chat history / mode labels pollute the 32-token search budget.
 */

const BOILERPLATE =
  /^(?:subject|mode|language|focus|task|target|notes?|latest student message)\s*:/i;

/**
 * Prefer the latest student question for retrieval.
 * Falls back to the raw string when no clear "latest" section exists.
 */
export function extractAiSearchQuery(raw: string, maxChars = 600): string {
  const text = String(raw || "").trim();
  if (!text) return "";

  const latest = text.match(/Latest student message:\s*([\s\S]+)$/i);
  let focus = (latest?.[1] || text).trim();

  // Drop prior dialogue block if present.
  focus = focus.replace(/^Previous dialogue \(for continuity\):[\s\S]*?(?=Latest student message:|$)/i, "");

  const lines = focus
    .split(/\n+/)
    .map((line) => line.trim())
    .filter((line) => line && !BOILERPLATE.test(line));

  const cleaned = lines.join(" ").replace(/\s+/g, " ").trim();
  if (cleaned.length <= maxChars) return cleaned;
  return cleaned.slice(0, maxChars);
}
