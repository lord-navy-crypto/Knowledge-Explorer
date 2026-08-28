/**
 * Extract human-readable prose from a partial JSON stream (reply / feedback fields).
 * Falls back to raw text when the model is not emitting JSON.
 */
export function proseFromPartialJson(text: string): string {
  const trimmed = text.trim();
  if (!trimmed.startsWith("{")) return text;

  for (const key of ["reply", "feedback", "raw", "revisionExample", "hints"]) {
    const marker = `"${key}"`;
    const keyIdx = trimmed.indexOf(marker);
    if (keyIdx === -1) continue;
    const colonIdx = trimmed.indexOf(":", keyIdx + marker.length);
    if (colonIdx === -1) continue;
    let i = colonIdx + 1;
    while (i < trimmed.length && /\s/.test(trimmed[i]!)) i++;
    if (trimmed[i] !== '"') {
      if (key === "hints" && trimmed[i] === "[") {
        let j = i + 1;
        while (j < trimmed.length && /\s/.test(trimmed[j]!)) j++;
        if (trimmed[j] !== '"') continue;
        j++;
        let out = "";
        while (j < trimmed.length) {
          const ch = trimmed[j]!;
          if (ch === "\\") {
            const next = trimmed[j + 1];
            if (next === "n") {
              out += "\n";
              j += 2;
              continue;
            }
            if (next === '"') {
              out += '"';
              j += 2;
              continue;
            }
            out += next || ch;
            j += 2;
            continue;
          }
          if (ch === '"') break;
          out += ch;
          j++;
        }
        if (out.length > 0) return out;
      }
      continue;
    }

    i++;
    let out = "";
    while (i < trimmed.length) {
      const ch = trimmed[i]!;
      if (ch === "\\") {
        const next = trimmed[i + 1];
        if (next === "n") {
          out += "\n";
          i += 2;
          continue;
        }
        if (next === "t") {
          out += "\t";
          i += 2;
          continue;
        }
        if (next === '"') {
          out += '"';
          i += 2;
          continue;
        }
        if (next === "\\") {
          out += "\\";
          i += 2;
          continue;
        }
        out += next || ch;
        i += 2;
        continue;
      }
      if (ch === '"') break;
      out += ch;
      i++;
    }
    if (out.length > 0) return out;
  }

  return "";
}
