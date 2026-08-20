/**
 * Remap legacy English exam hub buckets (toefl / sat) into
 * per-subject spaces after the exam folder split.
 * Former IELTS spaces fold into matching TOEFL folders (IELTS UI removed).
 */

type Spaced = { area?: string; space?: string; name?: string; title?: string };

function labelOf(item: Spaced): string {
  return `${item.name || ""} ${item.title || ""}`.toLowerCase();
}

function remapLegacyExamSpace(space: string, label: string): string {
  const n = (space || "").trim() || "_root";

  if (n === "toefl") {
    if (/听力|listening/.test(label)) return "toefl-listening";
    if (/写作|writing/.test(label)) return "toefl-writing";
    if (/口语|speaking/.test(label)) return "toefl-speaking";
    // Reading sets + leftover TOEFL hub uploads land in Reading
    return "toefl-reading";
  }

  // IELTS removed — fold legacy hub + section spaces into TOEFL counterparts
  if (n === "ielts" || n.startsWith("ielts-")) {
    if (n === "ielts-listening" || /听力|listening/.test(label)) return "toefl-listening";
    if (n === "ielts-writing" || /写作|writing/.test(label)) return "toefl-writing";
    if (n === "ielts-speaking" || /口语|speaking/.test(label)) return "toefl-speaking";
    return "toefl-reading";
  }

  if (n === "sat") {
    if (/数学|math|mathematics/.test(label)) return "sat-mathematics";
    if (/语法|grammar/.test(label)) return "sat-grammar";
    if (/阅读|reading/.test(label)) return "sat-reading";
    return "sat-english";
  }

  // Skills Writing page removed — fold uploads into TOEFL Writing
  if (n === "writing") return "toefl-writing";

  return n;
}

/** Mutates spaced rows in place; safe to call from normalizeManagedContent. */
export function migrateLegacyEnglishExamSpaces<T extends Spaced>(items: T[] | undefined): T[] {
  if (!Array.isArray(items)) return [];
  for (const item of items) {
    if (item.area !== "english") continue;
    const next = remapLegacyExamSpace(item.space || "", labelOf(item));
    if (next !== (item.space || "").trim()) {
      item.space = next;
    }
  }
  return items;
}
