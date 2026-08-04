/**
 * Turn common Unicode physics/calc notation into KaTeX-friendly LaTeX.
 * Existing LaTeX (\, _, ^, \frac, $…$) is preserved; Unicode is a fallback.
 */

const SUBSCRIPTS: Record<string, string> = {
  "₀": "0",
  "₁": "1",
  "₂": "2",
  "₃": "3",
  "₄": "4",
  "₅": "5",
  "₆": "6",
  "₇": "7",
  "₈": "8",
  "₉": "9",
  "₊": "+",
  "₋": "-",
  "ₐ": "a",
  "ₑ": "e",
  "ₒ": "o",
  "ₓ": "x",
  "ₙ": "n",
  "ₘ": "m",
  "ₜ": "t",
  "ᵢ": "i",
  "ⱼ": "j",
  "ₖ": "k",
  "ₚ": "p",
  "ₛ": "s",
  "ᵤ": "u",
  "ᵥ": "v",
};

const SUPERSCRIPTS: Record<string, string> = {
  "⁰": "0",
  "¹": "1",
  "²": "2",
  "³": "3",
  "⁴": "4",
  "⁵": "5",
  "⁶": "6",
  "⁷": "7",
  "⁸": "8",
  "⁹": "9",
  "⁺": "+",
  "⁻": "-",
  "ⁿ": "n",
};

const SYMBOLS: Array<[RegExp, string]> = [
  [/½/g, "\\frac{1}{2}"],
  [/¼/g, "\\frac{1}{4}"],
  [/¾/g, "\\frac{3}{4}"],
  [/⅓/g, "\\frac{1}{3}"],
  [/⅔/g, "\\frac{2}{3}"],
  [/∞/g, "\\infty"],
  [/±/g, "\\pm"],
  [/∓/g, "\\mp"],
  [/·/g, "\\cdot"],
  [/×/g, "\\times"],
  [/÷/g, "\\div"],
  [/≤/g, "\\le"],
  [/≥/g, "\\ge"],
  [/≠/g, "\\ne"],
  [/≈/g, "\\approx"],
  [/≡/g, "\\equiv"],
  [/→/g, "\\to"],
  [/←/g, "\\leftarrow"],
  [/⇒/g, "\\Rightarrow"],
  [/⇔/g, "\\Leftrightarrow"],
  [/∈/g, "\\in"],
  [/∉/g, "\\notin"],
  [/∝/g, "\\propto"],
  [/√/g, "\\sqrt"],
  [/∫/g, "\\int"],
  [/∑/g, "\\sum"],
  [/∏/g, "\\prod"],
  [/∂/g, "\\partial"],
  [/∇/g, "\\nabla"],
  [/∠/g, "\\angle"],
  [/°/g, "^\\circ"],
  [/Δ/g, "\\Delta "],
  [/δ/g, "\\delta "],
  [/θ/g, "\\theta "],
  [/Θ/g, "\\Theta "],
  [/π/g, "\\pi "],
  [/Π/g, "\\Pi "],
  [/μ/g, "\\mu "],
  [/ω/g, "\\omega "],
  [/Ω/g, "\\Omega "],
  [/ρ/g, "\\rho "],
  [/λ/g, "\\lambda "],
  [/Λ/g, "\\Lambda "],
  [/σ/g, "\\sigma "],
  [/Σ/g, "\\Sigma "],
  [/α/g, "\\alpha "],
  [/β/g, "\\beta "],
  [/γ/g, "\\gamma "],
  [/Γ/g, "\\Gamma "],
  [/ε/g, "\\varepsilon "],
  [/φ/g, "\\phi "],
  [/Φ/g, "\\Phi "],
  [/ψ/g, "\\psi "],
  [/Ψ/g, "\\Psi "],
  [/η/g, "\\eta "],
  [/τ/g, "\\tau "],
  [/κ/g, "\\kappa "],
  [/ν/g, "\\nu "],
  [/ξ/g, "\\xi "],
  [/χ/g, "\\chi "],
  [/−/g, "-"],
  [/–/g, "-"],
  [/—/g, "-"],
];

/** Strip wrapping math delimiters so we can re-render cleanly. */
export function stripMathDelimiters(input: string): string {
  let s = input.trim();
  if (s.startsWith("$$") && s.endsWith("$$") && s.length > 4) {
    return s.slice(2, -2).trim();
  }
  if (s.startsWith("$") && s.endsWith("$") && s.length > 2) {
    return s.slice(1, -1).trim();
  }
  if (s.startsWith("\\(") && s.endsWith("\\)")) {
    return s.slice(2, -2).trim();
  }
  if (s.startsWith("\\[") && s.endsWith("\\]")) {
    return s.slice(2, -2).trim();
  }
  return s;
}

function collapseUnicodeScripts(input: string): string {
  let out = "";
  let i = 0;
  while (i < input.length) {
    const ch = input[i];
    if (SUBSCRIPTS[ch]) {
      let body = "";
      while (i < input.length && SUBSCRIPTS[input[i]]) {
        body += SUBSCRIPTS[input[i]];
        i += 1;
      }
      out += `_{${body}}`;
      continue;
    }
    if (SUPERSCRIPTS[ch]) {
      let body = "";
      while (i < input.length && SUPERSCRIPTS[input[i]]) {
        body += SUPERSCRIPTS[input[i]];
        i += 1;
      }
      out += `^{${body}}`;
      continue;
    }
    out += ch;
    i += 1;
  }
  return out;
}

/**
 * Convert authored formula text (Unicode or LaTeX) into a KaTeX source string.
 */
export function toLatexSource(input: string): string {
  let s = stripMathDelimiters(input);
  for (const [re, rep] of SYMBOLS) {
    s = s.replace(re, rep);
  }
  s = collapseUnicodeScripts(s);
  return s.replace(/ {2,}/g, " ").trim();
}

/** True if the string already uses Markdown math delimiters. */
export function hasMathDelimiters(input: string): boolean {
  return /\$\$[\s\S]+?\$\$|\$[^$\n]+?\$|\\\([\s\S]+?\\\)|\\\[[\s\S]+?\\\]/.test(input);
}

/** Common TeX commands AI emits without $…$ wrappers. */
const TEX_CMD_NAMES =
  "frac|dfrac|tfrac|sqrt|sum|int|oint|prod|partial|nabla|cdot|times|div|pm|mp|leq|geq|neq|approx|equiv|infty|alpha|beta|gamma|delta|epsilon|varepsilon|theta|lambda|mu|nu|xi|pi|rho|sigma|tau|phi|varphi|chi|psi|omega|Alpha|Beta|Gamma|Delta|Theta|Lambda|Pi|Sigma|Phi|Psi|Omega|vec|hat|bar|tilde|dot|ddot|mathbf|mathrm|mathbb|mathcal|mathfrak|boldsymbol|operatorname|left|right|sin|cos|tan|sec|csc|cot|log|ln|exp|lim|to|rightarrow|leftarrow|Rightarrow|Leftarrow|leftrightarrow|Leftrightarrow|ldots|cdots|vdots|overline|underline|text|textbf|textit|quad|qquad|hspace|vspace|binom|choose|overset|underset|begin|end|perp|parallel|subset|supset|subseteq|supseteq|in|notin|forall|exists|emptyset|cup|cap|vee|wedge";

const BARE_LATEX_HINT = new RegExp(String.raw`\\(?:${TEX_CMD_NAMES})(?![a-zA-Z])`);

const TEX_CMD_NAME_SET = new Set(
  TEX_CMD_NAMES.split("|").map((name) => name.toLowerCase())
);

/** True when a string looks like TeX / formula source (not prose or program code). */
export function looksLikeLatexSource(input: string): boolean {
  const s = String(input || "").trim();
  if (!s || s.length > 2000) return false;
  if (BARE_LATEX_HINT.test(s)) return true;
  if (/\\begin\{[a-zA-Z*]+\}/.test(s)) return true;
  if (/\$\$|\\\(|\\\[/.test(s)) return true;
  // Underscore / caret formulas: F_{net}=ma, x^{2}, a_x
  if (/[A-Za-z0-9]_\{[^}]+\}|[A-Za-z0-9]\^\{[^}]+\}|[A-Za-z]_[A-Za-z0-9]+/.test(s)) {
    return true;
  }
  // Short ASCII equation: KE = 1/2 mv^2
  if (/[=^]|\/\d|\d\//.test(s) && s.length <= 80 && countProseWords(s).length <= 1) {
    return /^[\w\\{}^_+\-*/=().\s]+$/i.test(s);
  }
  return false;
}

function isProgrammingFenceLang(lang: string): boolean {
  return /^(python|py|javascript|js|typescript|ts|tsx|jsx|java|c|cpp|csharp|cs|go|rust|ruby|php|html|css|json|bash|sh|shell|sql|yaml|yml|xml|swift|kotlin|r|matlab|plaintext|text|markdown|md)$/i.test(
    lang.trim()
  );
}

function countCjkChars(text: string): number {
  return (text.match(/[\u3040-\u30ff\u3400-\u9fff\uf900-\ufaff]/g) || []).length;
}

function countProseWords(text: string): string[] {
  return (text.match(/\b[A-Za-z]{3,}\b/g) || []).filter((w) => {
    const lower = w.toLowerCase();
    if (TEX_CMD_NAME_SET.has(lower)) return false;
    if (/^(net|max|min|avg|rms|rms|hor|ver|mag)$/i.test(w)) return false;
    return true;
  });
}

function hasMeaningfulProse(text: string): boolean {
  return countProseWords(text).length > 0 || countCjkChars(text) > 0;
}

function isMostlyLatexBody(body: string): boolean {
  const trimmed = body.trim();
  if (!trimmed || trimmed.length > 1200) return false;
  if (/\b(def|function|const|let|var|class|import|print|return|public|private)\b/.test(trimmed)) {
    return false;
  }
  if (countCjkChars(trimmed) > 0 && countCjkChars(trimmed) >= trimmed.length / 4) {
    return false;
  }
  if (BARE_LATEX_HINT.test(trimmed) || /\\begin\{/.test(trimmed)) {
    const cmds = trimmed.match(/\\[a-zA-Z]+/g) || [];
    const prose = countProseWords(trimmed);
    return cmds.length >= Math.max(1, prose.length);
  }
  if (/[A-Za-z0-9]_\{[^}]+\}|[A-Za-z0-9]\^\{[^}]+\}/.test(trimmed)) {
    return countProseWords(trimmed).length <= 2 && trimmed.length <= 120;
  }
  return false;
}

/**
 * Protect `$5` / `$20.50` style currency so remark-math does not treat prices
 * as the start of inline math. Do NOT touch closed math like `$5$`.
 */
export function protectCurrencyDollars(input: string): { text: string; restore: (s: string) => string } {
  const slots: string[] = [];
  // Currency: $ + digits (+ optional decimals) when NOT immediately closed by $ (math).
  const text = input.replace(/\$(\d+(?:\.\d+)?)(?!\$)/g, (match, amount: string, offset: number, full: string) => {
    // Already inside a math span that started earlier — leave alone if previous char is letter/}.
    const prev = full[offset - 1] || "";
    if (prev === "\\" ) return match;
    const idx = slots.length;
    slots.push(`$${amount}`);
    return `\uE050${idx}\uE051`;
  });
  return {
    text,
    restore: (s: string) =>
      s.replace(/\uE050(\d+)\uE051/g, (_m, idx: string) => slots[Number(idx)] ?? ""),
  };
}

/**
 * JSON / models often emit `\\frac` (two backslashes). Collapse to `\frac`
 * so promote + KaTeX can see real TeX.
 */
function unescapeDoubledLatexChunk(chunk: string): string {
  let out = chunk;
  for (let n = 0; n < 4; n += 1) {
    const next = out.replace(new RegExp(String.raw`\\\\(${TEX_CMD_NAMES})(?![a-zA-Z])`, "g"), "\\$1");
    if (next === out) break;
    out = next;
  }
  return out;
}

function unescapeDoubledLatex(input: string): string {
  const parts = input.split("```");
  for (let i = 0; i < parts.length; i += 2) {
    parts[i] = unescapeDoubledLatexChunk(parts[i]);
  }
  return parts.join("```");
}

function mapFenceAware(text: string, transform: (plain: string) => string): string {
  const parts = text.split("```");
  for (let i = 0; i < parts.length; i += 2) {
    parts[i] = transform(parts[i]);
  }
  return parts.join("```");
}

/**
 * Map a transform over regions that are NOT already inside $…$ / $$…$$.
 * Display ($$) regions are left untouched; odd/even $ singles alternate.
 */
function mapOutsideInlineMath(segment: string, transform: (plain: string) => string): string {
  let out = "";
  let i = 0;
  let inInline = false;
  let buf = "";
  while (i < segment.length) {
    if (segment[i] === "$" && segment[i - 1] !== "\\") {
      if (inInline) {
        out += `$${buf}$`;
        buf = "";
        inInline = false;
      } else {
        out += transform(buf);
        buf = "";
        inInline = true;
      }
      i += 1;
      continue;
    }
    buf += segment[i];
    i += 1;
  }
  if (inInline) {
    // Unclosed inline — keep raw and let balanceMathDelimiters finish.
    out += `$${buf}`;
  } else {
    out += transform(buf);
  }
  return out;
}

function wrapLatexRunFrom(line: string, start: number): { end: number; span: string } | null {
  if (line[start] !== "\\" || !/[a-zA-Z]/.test(line[start + 1] || "")) return null;
  let j = start + 1;
  while (j < line.length && /[a-zA-Z]/.test(line[j])) j += 1;
  const cmd = line.slice(start, j);
  if (!BARE_LATEX_HINT.test(cmd)) return null;

  while (j < line.length) {
    const c = line[j];
    if (c === "{" || c === "[") {
      const open = c;
      const close = c === "{" ? "}" : "]";
      let depth = 1;
      j += 1;
      while (j < line.length && depth > 0) {
        if (line[j] === open) depth += 1;
        else if (line[j] === close) depth -= 1;
        j += 1;
      }
      continue;
    }
    if (c === "_" || c === "^") {
      j += 1;
      if (line[j] === "{") continue;
      if (j < line.length) j += 1;
      continue;
    }
    if (c === "\\" && /[a-zA-Z\\]/.test(line[j + 1] || "")) {
      // \cdot, \, \; or another command — keep in the same math run
      if (/[,;!]/.test(line[j + 1] || "")) {
        j += 2;
        continue;
      }
      j += 1;
      while (j < line.length && /[a-zA-Z]/.test(line[j])) j += 1;
      continue;
    }
    // Only "\Delta x" / "\partial t" style — not "\frac{1}{2} today"
    if (c === " ") {
      const head = line.slice(start, j);
      if (
        /\\(Delta|delta|nabla|partial|vec|hat|bar|tilde|dot|ddot)$/.test(head) &&
        /[A-Za-z]/.test(line[j + 1] || "")
      ) {
        j += 1;
        continue;
      }
      break;
    }
    if (/[0-9a-zA-Z+\-*/=|']/.test(c)) {
      j += 1;
      continue;
    }
    break;
  }

  // Do not swallow prose punctuation / closing parens after the formula.
  let span = line.slice(start, j).trimEnd();
  while (/[.,;:!?)]$/.test(span) && !/\d[.]$/.test(span)) {
    span = span.slice(0, -1).trimEnd();
  }
  if (!span) return null;
  return { end: start + span.length, span };
}

/** Physics / math variable bases worth auto-wrapping as subscripts. */
const PHYSICS_SCRIPT_BASE =
  /^(?:[A-Za-z]|KE|PE|TE|UE|RE|EMF|rms|avg|max|min|net)$/i;

/** Snake_case English identifiers — never treat as math (file_name, user_id). */
function looksLikeSnakeIdentifier(base: string, sub: string): boolean {
  if (base.length >= 2 && /[a-z]/.test(base) && /[a-z]{2,}/.test(sub) && !PHYSICS_SCRIPT_BASE.test(base)) {
    return true;
  }
  if (base.length >= 3 && sub.length >= 2 && /^[a-z]+$/i.test(base) && /^[a-z]+$/i.test(sub) && !PHYSICS_SCRIPT_BASE.test(base)) {
    return true;
  }
  return false;
}

function rewritePlainSubscripts(text: string): string {
  return text.replace(/\b([A-Za-z]{1,3})_([A-Za-z0-9]{1,8})\b/g, (full, base: string, sub: string) => {
    if (looksLikeSnakeIdentifier(base, sub)) return full;
    if (!PHYSICS_SCRIPT_BASE.test(base) && !(base.length === 1 || /^[A-Z][a-z]?$/.test(base))) {
      return full;
    }
    // Chemistry trailing letters after digit subscript: H_2O → keep O outside.
    const digitChem = sub.match(/^(\d+)([A-Za-z].*)$/);
    if (digitChem) {
      return `${base}_{${digitChem[1]}}${digitChem[2]}`;
    }
    return `${base}_{${sub}}`;
  });
}

function wrapScriptFormulaRun(line: string, start: number): { end: number; span: string } | null {
  // F_{net}, x^{2}, or plain physics a_x / v_0 / F_net — not snake_case / chem mishaps.
  if (!/[A-Za-z0-9]/.test(line[start] || "")) return null;
  // Never start a subscript run mid-identifier (file_name → would match e_name).
  if (start > 0 && /[A-Za-z0-9]/.test(line[start - 1] || "")) return null;

  const braced = line
    .slice(start)
    .match(/^([A-Za-z0-9]+(?:_\{[^}]+\}|\^\{[^}]+\})+(?:[+\-*/=()0-9A-Za-z\\_^{}]*)?)/);
  if (braced) {
    const span = braced[1].trim();
    // Avoid swallowing trailing prose: stop at whitespace already via match.
    if (span.length >= 3 && span.length <= 80 && !looksLikeSnakeIdentifier(span.split(/[_^]/)[0] || "", "x")) {
      return { end: start + span.length, span };
    }
  }

  // Chemistry: H_2O / CO_2 — only the digit run is the subscript.
  const chem = line.slice(start).match(/^([A-Z][a-z]?)_(\d+)(?=[A-Za-z]|$)/);
  if (chem) {
    const rawLen = chem[1].length + 1 + chem[2].length;
    return { end: start + rawLen, span: `${chem[1]}_{${chem[2]}}` };
  }

  const plain = line.slice(start).match(/^([A-Za-z]{1,3})_([A-Za-z0-9]{1,8})(?![A-Za-z0-9])/);
  if (plain) {
    const base = plain[1];
    const sub = plain[2];
    if (looksLikeSnakeIdentifier(base, sub)) return null;
    const digitOnly = /^\d+$/.test(sub);
    const physicsOk = PHYSICS_SCRIPT_BASE.test(base) || base.length === 1;
    const chemOk = digitOnly && /^[A-Z][a-z]?$|^[A-Z]{1,2}$/.test(base);
    if (!physicsOk && !chemOk) return null;
    // Digit + trailing letters already handled by chem; if sub is digits-only OK.
    if (/^\d+[A-Za-z]/.test(sub)) {
      const digits = sub.match(/^\d+/)![0];
      return {
        end: start + base.length + 1 + digits.length,
        span: `${base}_{${digits}}`,
      };
    }
    return {
      end: start + plain[1].length + 1 + sub.length,
      span: `${base}_{${sub}}`,
    };
  }

  return null;
}

function looksLikeAsciiEquation(line: string): boolean {
  const t = line.trim();
  if (!t.includes("=") || t.length > 100) return false;
  // Any real prose word → not a whole-line equation (wrap runs inline instead).
  if (countProseWords(t).length > 0) return false;
  if (countCjkChars(t) > 0) return false;
  // KE = 1/2 mv^2  |  F_net = ma  |  a = dv/dt
  return /[=^_/]|\/\d|\d\//.test(t) && /^[A-Za-z0-9\\{}^_+\-*/=().\s]+$/.test(t);
}

function promoteAsciiMathBits(text: string): string {
  // 1/2 → \frac{1}{2} in math-ish contexts (equation lines / next to letters)
  return text.replace(/(?<![A-Za-z0-9])(\d+)\/(\d+)(?![A-Za-z0-9])/g, (_m, a: string, b: string) => {
    return `\\frac{${a}}{${b}}`;
  });
}

function wrapOneLatexishLine(line: string): string {
  const trimmed = line.trim();
  if (!trimmed || trimmed.includes("$")) return line;

  const indent = line.match(/^\s*/)?.[0] || "";
  const bullet = trimmed.match(/^([-*+]|\d+\.)\s+(.*)$/);
  const marker = bullet ? `${bullet[1]} ` : "";
  let content = bullet ? bullet[2] : trimmed;
  if (!content) return line;

  // Keep closing punctuation from a preceding inline math outside the new wrap.
  // Fixes: ($M_\oplus$) \approx ... → ($M_\oplus$) $$\approx...$$ (not $M_\oplus$$) ...)
  const leadMatch = content.match(/^([)\],;:]+(?:\s+[)\],;:]*)*)\s*/);
  const lead = leadMatch ? leadMatch[1] : "";
  if (lead) content = content.slice(leadMatch![0].length);
  if (!content) return line;

  // Label + formula: "Kinetic: 1/2 mv^2" / "Force: F_net = ma"
  const labeled = content.match(/^([^:]{1,40}):\s+(.+)$/);
  if (labeled && (looksLikeLatexSource(labeled[2]) || looksLikeAsciiEquation(labeled[2]))) {
    const formula = promoteAsciiMathBits(labeled[2].trim());
    const wrapped = BARE_LATEX_HINT.test(formula) || /[_^\\]/.test(formula) || formula.includes("=")
      ? `$${formula}$`
      : formula;
    return `${indent}${marker}${labeled[1]}: ${wrapped}`;
  }

  content = promoteAsciiMathBits(content);
  // Rewrite F_net → F_{net} before whole-line wrap so KaTeX gets real subscripts.
  if (looksLikeAsciiEquation(content) || (!hasMeaningfulProse(content) && /_/.test(content))) {
    content = rewritePlainSubscripts(content);
  }

  const hasCmd = BARE_LATEX_HINT.test(content);
  const hasScript =
    /[A-Za-z0-9]_\{[^}]+\}|[A-Za-z0-9]\^\{[^}]+\}|[A-Za-z]_[A-Za-z0-9]+/.test(content);
  const asciiEq = looksLikeAsciiEquation(content);

  if (!hasCmd && !hasScript && !asciiEq) return line;

  const mostlyTex =
    content.length <= 240 &&
    !hasMeaningfulProse(content) &&
    (content.startsWith("\\") || hasCmd || hasScript || asciiEq);

  if (mostlyTex || asciiEq) {
    const displayBody = rewritePlainSubscripts(content);
    // Keep fences on the same lines so sanitizeMathDelimiterSalad cannot
    // strip paired `$$` openers/closers that sit alone on a line.
    if (bullet) return `${indent}${marker}${lead}$${displayBody}$`;
    if (displayBody.length > 80 || displayBody.includes("\n")) {
      return `${indent}${lead}$$\n${displayBody}\n$$`;
    }
    return `${indent}${lead}$$${displayBody}$$`;
  }

  // Mixed prose → wrap each TeX / script run inline (keep bullet/indent outside).
  const prefix = `${bullet ? `${indent}${marker}` : indent}${lead}`;
  const source = content;
  let out = "";
  let i = 0;
  while (i < source.length) {
    const run = wrapLatexRunFrom(source, i) || wrapScriptFormulaRun(source, i);
    if (run) {
      out += `$${run.span}$`;
      i = run.end;
      // Skip a single space already consumed into TeX runs like "\Delta x"
      continue;
    }
    out += source[i];
    i += 1;
  }
  return prefix + out;
}

function wrapLatexishSpan(plain: string): string {
  if (!plain) return plain;
  if (
    !BARE_LATEX_HINT.test(plain) &&
    !/[A-Za-z0-9]_\{[^}]+\}|[A-Za-z0-9]\^\{[^}]+\}|[A-Za-z]_[A-Za-z0-9]+/.test(plain) &&
    !/(?<![A-Za-z0-9])\d+\/\d+(?![A-Za-z0-9])/.test(plain) &&
    !/=/.test(plain)
  ) {
    return plain;
  }

  return plain.split("\n").map(wrapOneLatexishLine).join("\n");
}

function convertTexFencesToDisplay(text: string): string {
  return text.replace(/```([^\n`]*)\n([\s\S]*?)```/g, (match, langRaw: string, body: string) => {
    const lang = String(langRaw || "").trim();
    if (isProgrammingFenceLang(lang)) return match;
    if (/^(latex|tex|math)$/i.test(lang) || (!lang && isMostlyLatexBody(body))) {
      const cleaned = unescapeDoubledLatexChunk(String(body).trim());
      return `\n$$\n${cleaned}\n$$\n`;
    }
    return match;
  });
}

function unwrapTexBackticks(text: string): string {
  return text.replace(/`([^`\n]+)`/g, (match, body: string) => {
    const inner = String(body).trim();
    if (!inner || inner.includes("`")) return match;
    if (!looksLikeLatexSource(inner) && !BARE_LATEX_HINT.test(inner)) return match;
    // Already delimited
    if (inner.startsWith("$") && inner.endsWith("$")) return inner;
    return `$${inner}$`;
  });
}

function wrapBeginEndEnvironments(text: string): string {
  return text.replace(
    /\\begin\{([a-zA-Z*]+)\}([\s\S]*?)\\end\{\1\}/g,
    (match, env: string, body: string, offset: number) => {
      const before = text.slice(0, offset);
      if ((before.split("```").length - 1) % 2 === 1) return match;
      const prev = text.slice(Math.max(0, offset - 3), offset);
      if (prev.includes("$$")) return match;
      return `\n$$\n\\begin{${env}}${body}\\end{${env}}\n$$\n`;
    }
  );
}

/**
 * Turn bare AI LaTeX (`\frac{1}{2}`, ```latex blocks, align envs) into $ / $$
 * so RichContent / KaTeX actually draws equations instead of raw code.
 */
export function promoteBareLatexToMath(input: string): string {
  // Convert TeX fences first (unescapes fence bodies), then unescape remaining prose.
  let text = convertTexFencesToDisplay(input);
  text = unescapeDoubledLatex(text);

  // Inline ` \frac{1}{2} ` → $...$ (KaTeX does not render inside code spans)
  text = mapFenceAware(text, unwrapTexBackticks);

  // \begin{env}...\end{env} → display math
  text = mapFenceAware(text, wrapBeginEndEnvironments);

  // Outside code fences and existing $$…$$, wrap bare commands / script formulas.
  text = mapFenceAware(text, (segment) => {
    const displayParts = segment.split("$$");
    for (let i = 0; i < displayParts.length; i += 2) {
      displayParts[i] = mapOutsideInlineMath(displayParts[i], wrapLatexishSpan);
    }
    return displayParts.join("$$");
  });

  return text;
}

/**
 * Prepare AI / authored markdown so formulas render as KaTeX, not raw TeX code.
 * Alias kept for call sites that want an explicit “AI reply” name.
 */
export function prepareAiReplyMarkdown(input: string): string {
  return normalizeAuthoredText(input);
}

/**
 * Collapse AI “dollar salad” ($$$ / $$$$ / mid-formula $$) before promote/balance.
 * Without this, balanceMathDelimiters appends more $$ and makes rendering worse.
 *
 * NOTE: In String.replace replacement strings, `$$` means a literal `$`.
 * To emit two dollar signs use a replacer function (or `$$$$`).
 */
export function sanitizeMathDelimiterSalad(input: string): string {
  let text = String(input ?? "");

  const twoDollars = () => "$$";
  const collapse = (s: string) =>
    s
      .replace(/\${3,}/g, twoDollars)
      .replace(/\$\$\s*\$\$/g, twoDollars);

  text = collapse(text);

  // Spurious $$ glued inside a formula (common Local/cloud glitch)
  text = text.replace(
    /(\\times|\\cdot|\\pm|\\approx|\\div|[\]A-Za-z0-9}])\$\$(\d)/g,
    "$1 $2"
  );
  text = text.replace(/(\\times|\\cdot|\\pm)\s*\$\$\s*/g, "$1 ");
  // Only glue before \text/\mathrm (unit tails) — never strip $$ before \sqrt/\frac
  text = text.replace(/\$\$\s*(\\text|\\mathrm)/g, " $1");
  // $$v_{\text{esc}}$ $$ → $$v_{\text{esc}}$$
  text = text.replace(/\$\$([^$\n]+)\$\s*\$\$/g, (_m, body: string) => `$$${body}$$`);
  // $$\tfrac{1}{2}$ → $\tfrac{1}{2}$ (display opener glued onto inline close)
  text = text.replace(/\$\$(\\tfrac|\\frac|\\dfrac)\{/g, (_m, cmd: string) => `$${cmd}{`);

  // Broken unit lists: $...,$$$$ \text{...}  → one math span
  text = text.replace(/\$\s*,\s*\$\$\s*/g, ", ");
  text = text.replace(/,\s*\$\$\s*/g, ", ");
  text = text.replace(/\$\$\s*,\s*/g, ", ");
  // ($6.67\times 10^{-11}$, \text{N}·...) → $(6.67\times 10^{-11}\,\text{N}...)$
  text = text.replace(
    /\(\$([^$\n]+),\s*((?:\\text\{[^}]+\}|\\cdot|\\,|\/|\s|[A-Za-z0-9^\\{}])*)\)/g,
    (_m, expr: string, unit: string) => `$(${expr.trim()}\\,${unit.trim()})$`
  );

  // Split empty “$$ = $$” artifacts only (do not eat fences of neighboring formulas).
  text = text.replace(/\$\$\s*=\s*\$\$/g, " = ");

  text = collapse(text);

  // Do NOT merge a real closing `$` with a following `$$` opener
  // (that turned `$M_\\oplus$ $$` into `$M_\\oplus$$)`).

  return text;
}

/** Normalize pasted content and safely repair common UTF-8-as-Latin-1 mojibake. */
export function normalizeAuthoredText(input: string): string {
  let value = String(input ?? "")
    .replace(/\r\n?/g, "\n")
    .replace(/\u0000/g, "")
    .replace(/\u00a0/g, " ")
    .normalize("NFC");

  const suspicious = /Ã.|Â.|â.|ðŸ|[åæç][\u0080-\u00ff]/.test(value);
  if (suspicious && [...value].every((character) => character.charCodeAt(0) <= 255)) {
    try {
      const bytes = Uint8Array.from([...value], (character) => character.charCodeAt(0));
      const repaired = new TextDecoder("utf-8", { fatal: true }).decode(bytes);
      const noise = (text: string) => (text.match(/Ã.|Â.|â.|ðŸ|�/g) || []).length;
      if (noise(repaired) < noise(value)) value = repaired;
    } catch {
      // Preserve the original when the bytes cannot be recovered safely.
    }
  }

  // Fix $$$ / $$$$ / mid-formula $$ BEFORE currency protect + promote.
  value = sanitizeMathDelimiterSalad(value);

  // Keep `$5` from being treated as math while we promote TeX dollars.
  const currency = protectCurrencyDollars(value);
  value = currency.text;

  // AI tools often emit MathJax delimiters; remark-math uses dollar delimiters.
  value = value
    .replace(/\\\[([\s\S]*?)\\\]/g, (_match, math: string) => `\n$$\n${math.trim()}\n$$\n`)
    .replace(/\\\(([^\n]*?)\\\)/g, (_match, math: string) => `$${math.trim()}$`);

  // Bare \frac / ```latex / ASCII physics → real math delimiters.
  value = promoteBareLatexToMath(value);
  // Promote can reintroduce salad — clean again before balancing.
  value = sanitizeMathDelimiterSalad(value);
  // Currency already protected above — use raw balancer (public one would wipe slots).
  value = balanceMathDelimitersRaw(value);
  value = sanitizeMathDelimiterSalad(value);
  return currency.restore(value);
}

/**
 * Close unfinished $ / $$ while AI streams so remark-math does not swallow the
 * rest of the reply (which looks like “LaTeX disappeared”).
 * Currency `$5` is protected so it does not count as an odd math delimiter.
 */
function balanceMathDelimitersRaw(text: string): string {
  let next = text;
  // Unclosed display math: odd number of $$ fences.
  let displayCount = (next.match(/\$\$/g) || []).length;
  if (displayCount % 2 === 1) {
    // Prefer dropping a trailing orphan $$ over appending another (avoids $$$$ growth).
    if (/\n?\$\$\s*$/.test(next) && displayCount >= 1) {
      next = next.replace(/\n?\$\$\s*$/, "");
      displayCount = (next.match(/\$\$/g) || []).length;
    }
    if (displayCount % 2 === 1) {
      next = `${next}\n$$`;
    }
  }
  // Unclosed inline math outside $$ blocks.
  const segments = next.split("$$");
  for (let i = 0; i < segments.length; i += 2) {
    let singles = 0;
    const chunk = segments[i];
    for (let j = 0; j < chunk.length; j++) {
      if (chunk[j] === "$" && chunk[j - 1] !== "\\") singles += 1;
    }
    if (singles % 2 === 1) {
      segments[i] = `${chunk}$`;
    }
  }
  return segments.join("$$");
}

export function balanceMathDelimiters(input: string): string {
  const currency = protectCurrencyDollars(input);
  return currency.restore(balanceMathDelimitersRaw(currency.text));
}

/** Close open `{` / `\left` inside a math body so KaTeX can paint while tokens still arrive. */
function closeOpenMathGroups(math: string): string {
  let m = math
    // Incomplete command or script marker at the very end: \fra, \sqr, _, ^
    .replace(/\\[a-zA-Z]{1,24}$/, "")
    .replace(/[_^]$/, "");

  let open = 0;
  for (let i = 0; i < m.length; i++) {
    const ch = m[i];
    if (ch === "{" && m[i - 1] !== "\\") open += 1;
    else if (ch === "}" && m[i - 1] !== "\\") open = Math.max(0, open - 1);
  }
  if (open > 0) m += "}".repeat(Math.min(open, 12));

  const lefts = (m.match(/\\left(?![a-zA-Z])/g) || []).length;
  const rights = (m.match(/\\right(?![a-zA-Z])/g) || []).length;
  if (lefts > rights) m += "\\right.".repeat(Math.min(lefts - rights, 8));
  return m;
}

function mapClosedMathSegments(input: string, map: (math: string) => string): string {
  // Region-safe: never let the second `$` of `$$` start an inline match.
  const displayRe = /\$\$([\s\S]*?)\$\$/g;
  const displays: Array<{ start: number; end: number; body: string }> = [];
  let m: RegExpExecArray | null;
  while ((m = displayRe.exec(input))) {
    displays.push({ start: m.index, end: m.index + m[0].length, body: m[1] });
  }

  const parts: string[] = [];
  let cursor = 0;
  for (const d of displays) {
    if (cursor < d.start) {
      parts.push(mapInlineInProse(input.slice(cursor, d.start), map));
    }
    parts.push(`$$${map(d.body)}$$`);
    cursor = d.end;
  }
  if (cursor < input.length) {
    parts.push(mapInlineInProse(input.slice(cursor), map));
  }
  return parts.join("");
}

function mapInlineInProse(prose: string, map: (math: string) => string): string {
  return prose.replace(/\$([^$\n]+?)\$/g, (_full, body: string) => `$${map(body)}$`);
}

/**
 * Extra streaming hygiene for AI replies: balance delimiters AND close unfinished
 * TeX groups so equations keep rendering instead of flashing raw/error LaTeX.
 */
export function stabilizeStreamingMath(input: string): string {
  const cleaned = sanitizeMathDelimiterSalad(String(input ?? ""));
  const currency = protectCurrencyDollars(cleaned);
  const balanced = balanceMathDelimitersRaw(currency.text);
  const mapped = mapClosedMathSegments(balanced, closeOpenMathGroups);
  return sanitizeMathDelimiterSalad(currency.restore(mapped));
}

