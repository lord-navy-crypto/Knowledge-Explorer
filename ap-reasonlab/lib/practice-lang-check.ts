export type PracticeCheckResult = {
  ok: boolean;
  issues: string[];
  notes: string[];
};

type ScanOpts = {
  /** Treat `#` as a line comment (Ruby / R / PHP). Off for C so `#include` stays. */
  hashComments?: boolean;
};

/**
 * Honest Practice Run for languages we do not compile in-browser:
 * brace / quote balance after stripping strings and comments.
 * Not a compiler, linter, or runtime.
 */
export function checkPracticeSource(source: string, opts: ScanOpts = {}): PracticeCheckResult {
  const issues: string[] = [];
  const notes: string[] = [
    "Practice Run is a structure check only — not a compiler, interpreter, or test runner.",
    "Download the file and use the official toolchain to build or run it.",
  ];
  const code = source.replace(/\r\n/g, "\n");
  if (!code.trim()) {
    return { ok: false, issues: ["Editor is empty."], notes };
  }

  const stripped = stripStringsAndComments(code, opts.hashComments === true);
  const braces = countPairs(stripped, "{", "}");
  const parens = countPairs(stripped, "(", ")");
  const brackets = countPairs(stripped, "[", "]");
  if (braces !== 0) issues.push(braces > 0 ? "Unclosed `{` brace." : "Extra `}` brace.");
  if (parens !== 0) issues.push(parens > 0 ? "Unclosed `(`." : "Extra `)`.");
  if (brackets !== 0) issues.push(brackets > 0 ? "Unclosed `[`." : "Extra `]`.");

  const quotes = leftoverQuotes(stripped);
  if (quotes.single) issues.push("Possible unmatched single quote.");
  if (quotes.double) issues.push("Possible unmatched double quote.");

  if (!stripped.replace(/\s+/g, "")) {
    issues.push("Only comments or whitespace remain after stripping strings.");
  }

  return {
    ok: issues.length === 0,
    issues,
    notes,
  };
}

function countPairs(text: string, open: string, close: string): number {
  let n = 0;
  for (const ch of text) {
    if (ch === open) n += 1;
    else if (ch === close) n -= 1;
  }
  return n;
}

function leftoverQuotes(text: string): { single: boolean; double: boolean } {
  let single = 0;
  let double = 0;
  for (const ch of text) {
    if (ch === "'") single += 1;
    if (ch === '"') double += 1;
  }
  return { single: single % 2 === 1, double: double % 2 === 1 };
}

function stripStringsAndComments(src: string, hashComments: boolean): string {
  let out = "";
  let i = 0;
  const n = src.length;
  while (i < n) {
    const ch = src[i]!;
    const next = src[i + 1];

    if (ch === "/" && next === "/") {
      i = skipLine(src, i);
      out += "\n";
      continue;
    }
    if (ch === "/" && next === "*") {
      i = skipBlock(src, i + 2);
      continue;
    }
    if (hashComments && ch === "#") {
      i = skipLine(src, i);
      out += "\n";
      continue;
    }
    if (ch === '"' || ch === "'") {
      i = skipString(src, i, ch);
      out += " ";
      continue;
    }
    if (ch === "`") {
      i = skipString(src, i, "`");
      out += " ";
      continue;
    }
    out += ch;
    i += 1;
  }
  return out;
}

function skipLine(src: string, i: number): number {
  while (i < src.length && src[i] !== "\n") i += 1;
  return i < src.length ? i + 1 : i;
}

function skipBlock(src: string, i: number): number {
  while (i < src.length - 1) {
    if (src[i] === "*" && src[i + 1] === "/") return i + 2;
    i += 1;
  }
  return src.length;
}

function skipString(src: string, i: number, quote: string): number {
  i += 1;
  while (i < src.length) {
    if (src[i] === "\\" && i + 1 < src.length) {
      i += 2;
      continue;
    }
    if (src[i] === quote) return i + 1;
    if (src[i] === "\n" && quote !== "`") return i;
    i += 1;
  }
  return src.length;
}
