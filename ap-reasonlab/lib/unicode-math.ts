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
  "frac|dfrac|tfrac|sqrt|sum|int|oint|prod|partial|nabla|cdot|times|div|pm|mp|leq|geq|neq|approx|equiv|infty|alpha|beta|gamma|delta|epsilon|varepsilon|theta|lambda|mu|nu|xi|pi|rho|sigma|tau|phi|varphi|chi|psi|omega|Alpha|Beta|Gamma|Delta|Theta|Lambda|Pi|Sigma|Phi|Psi|Omega|vec|hat|bar|tilde|dot|ddot|mathbf|mathrm|operatorname|left|right|sin|cos|tan|sec|csc|cot|log|ln|exp|lim|to|rightarrow|leftarrow|Rightarrow|Leftarrow|leftrightarrow|Leftrightarrow|ldots|cdots|vdots|overline|underline|text|textbf|textit|quad|qquad|hspace|vspace|binom|choose|overset|underset|begin|end";

const BARE_LATEX_HINT = new RegExp(String.raw`\\(?:${TEX_CMD_NAMES})(?![a-zA-Z])`);

/** True when a string looks like TeX / formula source (not prose or program code). */
export function looksLikeLatexSource(input: string): boolean {
  const s = String(input || "").trim();
  if (!s || s.length > 2000) return false;
  if (BARE_LATEX_HINT.test(s)) return true;
  if (/\\begin\{[a-zA-Z*]+\}/.test(s)) return true;
  if (/\$\$|\\\(|\\\[/.test(s)) return true;
  // Underscore / caret formulas: F_{net}=ma, x^{2}, a_x
  if (/[A-Za-z0-9]_\{[^}]+\}|[A-Za-z0-9]\^\{[^}]+\}/.test(s)) return true;
  return false;
}

function isProgrammingFenceLang(lang: string): boolean {
  return /^(python|py|javascript|js|typescript|ts|tsx|jsx|java|c|cpp|csharp|cs|go|rust|ruby|php|html|css|json|bash|sh|shell|sql|yaml|yml|xml|swift|kotlin|r|matlab|plaintext|text|markdown|md)$/i.test(
    lang.trim()
  );
}

function countProseWords(text: string): string[] {
  return (text.match(/\b[A-Za-z]{3,}\b/g) || []).filter(
    (w) =>
      !/^(sin|cos|tan|log|ln|exp|lim|frac|sqrt|left|right|text|mathrm|mathbf|partial|infty|net|max|min|avg)$/i.test(
        w
      )
  );
}

function isMostlyLatexBody(body: string): boolean {
  const trimmed = body.trim();
  if (!trimmed || trimmed.length > 1200) return false;
  if (/\b(def|function|const|let|var|class|import|print|return|public|private)\b/.test(trimmed)) {
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
    if (/[0-9a-zA-Z+\-*/=().,|']/.test(c)) {
      j += 1;
      continue;
    }
    break;
  }
  return { end: j, span: line.slice(start, j).trim() };
}

function wrapScriptFormulaRun(line: string, start: number): { end: number; span: string } | null {
  // Start at a letter/number that begins a _{ } / ^{ } formula chunk.
  if (!/[A-Za-z0-9]/.test(line[start] || "")) return null;
  // Must contain _{…} or ^{…} somewhere in the run we claim.
  let j = start;
  while (j < line.length && /[A-Za-z0-9\\_^{}+\-*/=().,|']/.test(line[j])) {
    if (line[j] === "{" || line[j] === "}") {
      j += 1;
      continue;
    }
    j += 1;
  }
  const span = line.slice(start, j).trim();
  if (!/[A-Za-z0-9]_\{[^}]+\}|[A-Za-z0-9]\^\{[^}]+\}/.test(span)) return null;
  if (span.length < 3 || span.length > 80) return null;
  return { end: start + span.length, span };
}

function wrapOneLatexishLine(line: string): string {
  const trimmed = line.trim();
  if (!trimmed || trimmed.includes("$")) return line;

  const indent = line.match(/^\s*/)?.[0] || "";
  const bullet = trimmed.match(/^([-*+]|\d+\.)\s+(.*)$/);
  const marker = bullet ? `${bullet[1]} ` : "";
  const content = bullet ? bullet[2] : trimmed;
  if (!content) return line;

  const hasCmd = BARE_LATEX_HINT.test(content);
  const hasScript = /[A-Za-z0-9]_\{[^}]+\}|[A-Za-z0-9]\^\{[^}]+\}/.test(content);
  if (!hasCmd && !hasScript) return line;

  const proseWords = countProseWords(content);
  const mostlyTex =
    content.length <= 240 &&
    proseWords.length === 0 &&
    (content.startsWith("\\") || hasCmd || hasScript);

  if (mostlyTex) {
    // List items stay inline so markdown lists + KaTeX both work.
    if (bullet) return `${indent}${marker}$${content}$`;
    return `${indent}$$\n${content}\n$$`;
  }

  // Mixed prose → wrap each TeX / script run inline (keep bullet/indent outside).
  const prefix = bullet ? `${indent}${marker}` : indent;
  const source = bullet ? content : trimmed;
  let out = "";
  let i = 0;
  while (i < source.length) {
    const run = wrapLatexRunFrom(source, i) || (!hasCmd ? wrapScriptFormulaRun(source, i) : null);
    if (run) {
      out += `$${run.span}$`;
      i = run.end;
      continue;
    }
    out += source[i];
    i += 1;
  }
  return prefix + out;
}

function wrapLatexishSpan(plain: string): string {
  if (!plain) return plain;
  if (!BARE_LATEX_HINT.test(plain) && !/[A-Za-z0-9]_\{[^}]+\}|[A-Za-z0-9]\^\{[^}]+\}/.test(plain)) {
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

  // AI tools often emit MathJax delimiters; remark-math uses dollar delimiters.
  value = value
    .replace(/\\\[([\s\S]*?)\\\]/g, (_match, math: string) => `\n$$\n${math.trim()}\n$$\n`)
    .replace(/\\\(([^\n]*?)\\\)/g, (_match, math: string) => `$${math.trim()}$`);

  // Bare \frac / ```latex → real math delimiters (AI often forgets $…$).
  value = promoteBareLatexToMath(value);

  return balanceMathDelimiters(value);
}

/**
 * Close unfinished $ / $$ while AI streams so remark-math does not swallow the
 * rest of the reply (which looks like “LaTeX disappeared”).
 */
export function balanceMathDelimiters(input: string): string {
  let text = input;
  // Unclosed display math: odd number of $$ fences.
  const displayCount = (text.match(/\$\$/g) || []).length;
  if (displayCount % 2 === 1) {
    text = `${text}\n$$`;
  }
  // Unclosed inline math outside $$ blocks.
  const segments = text.split("$$");
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
