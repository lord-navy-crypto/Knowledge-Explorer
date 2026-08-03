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
const BARE_LATEX_HINT =
  /\\(frac|dfrac|tfrac|sqrt|sum|int|oint|prod|partial|nabla|cdot|times|div|pm|mp|leq|geq|neq|approx|equiv|infty|alpha|beta|gamma|delta|epsilon|varepsilon|theta|lambda|mu|nu|xi|pi|rho|sigma|tau|phi|varphi|chi|psi|omega|Alpha|Beta|Gamma|Delta|Theta|Lambda|Pi|Sigma|Phi|Psi|Omega|vec|hat|bar|tilde|dot|ddot|mathbf|mathrm|operatorname|left|right|sin|cos|tan|sec|csc|cot|log|ln|exp|lim|to|rightarrow|leftarrow|Rightarrow|Leftarrow|leftrightarrow|Leftrightarrow|ldots|cdots|vdots|overline|underline|text|textbf|textit|quad|qquad|hspace|vspace|binom|choose|overset|underset)(?![a-zA-Z])/;

function isInsideProtectedFence(text: string, index: number): boolean {
  // Rough: odd number of ``` before index ⇒ inside a fence.
  const before = text.slice(0, index);
  const fences = before.split("```").length - 1;
  return fences % 2 === 1;
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

function wrapLatexishSpan(plain: string): string {
  if (!plain || !BARE_LATEX_HINT.test(plain)) return plain;

  return plain
    .split("\n")
    .map((line) => {
      const trimmed = line.trim();
      if (!trimmed || !BARE_LATEX_HINT.test(trimmed)) return line;
      if (trimmed.includes("$")) return line;

      const indent = line.match(/^\s*/)?.[0] || "";
      const latexCmds = trimmed.match(/\\[a-zA-Z]+/g) || [];
      const proseWords = (trimmed.match(/\b[A-Za-z]{3,}\b/g) || []).filter(
        (w) =>
          !/^(sin|cos|tan|log|ln|exp|lim|frac|sqrt|left|right|text|mathrm|mathbf|partial|infty)$/i.test(
            w
          )
      );
      // Mostly-TeX line → display equation
      if (
        (trimmed.startsWith("\\") || latexCmds.length >= proseWords.length) &&
        trimmed.length <= 240
      ) {
        return `${indent}$$\n${trimmed}\n$$`;
      }

      // Mixed prose → wrap each TeX run inline
      let out = "";
      let i = 0;
      while (i < line.length) {
        const run = wrapLatexRunFrom(line, i);
        if (run) {
          out += `$${run.span}$`;
          i = run.end;
          continue;
        }
        out += line[i];
        i += 1;
      }
      return out;
    })
    .join("\n");
}

/**
 * Turn bare AI LaTeX (`\frac{1}{2}`, ```latex blocks, align envs) into $ / $$
 * so RichContent / KaTeX actually draws equations instead of raw code.
 */
export function promoteBareLatexToMath(input: string): string {
  let text = input;

  // ```latex / ```tex / ```math → display math
  text = text.replace(
    /```(?:latex|tex|math)\s*\n([\s\S]*?)```/gi,
    (_m, body: string) => `\n$$\n${String(body).trim()}\n$$\n`
  );

  // \begin{env}...\end{env} → display math (skip if already in $$)
  text = text.replace(
    /\\begin\{([a-zA-Z*]+)\}([\s\S]*?)\\end\{\1\}/g,
    (match, env: string, body: string, offset: number) => {
      if (isInsideProtectedFence(text, offset)) return match;
      const before = text.slice(Math.max(0, offset - 2), offset);
      if (before.includes("$$")) return match;
      // If surrounded by $$ already nearby, leave it.
      const window = text.slice(Math.max(0, offset - 4), offset + match.length + 4);
      if (/\$\$/.test(window.slice(0, 4)) && /\$\$/.test(window.slice(-4))) return match;
      return `\n$$\n\\begin{${env}}${body}\\end{${env}}\n$$\n`;
    }
  );

  // Outside existing $$…$$, wrap bare commands.
  const displayParts = text.split("$$");
  for (let i = 0; i < displayParts.length; i += 2) {
    displayParts[i] = mapOutsideInlineMath(displayParts[i], wrapLatexishSpan);
  }
  return displayParts.join("$$");
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
