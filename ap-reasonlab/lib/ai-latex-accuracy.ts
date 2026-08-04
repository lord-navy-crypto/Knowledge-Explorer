import katex from "katex";
import { FORMULA_BOARD, type FormulaBoardItem } from "@/data/formula-board";
import {
  normalizeAuthoredText,
  protectCurrencyDollars,
  sanitizeMathDelimiterSalad,
  stabilizeStreamingMath,
  toLatexSource,
} from "@/lib/unicode-math";

/** Structured equation unit for AI replies (Phase B). */
export type AiEquation = {
  name?: string;
  latex: string;
  means?: string;
};

export type MathRepairReport = {
  text: string;
  fixed: number;
  stillBroken: number;
};

/**
 * Prompt rules shared by AP Local + cloud: display + structure + site grounding.
 */
export const FORMULA_ACCURACY_RULES = `Math accuracy protocol (display + structure + grounding):
A) Display: every equation must use $...$ or $$...$$. Never leave bare \\frac / \\sqrt in prose or inside code fences. Never emit $$$ or $$$$ or $$ in the middle of a formula.
B) Structure: put the most important equations in a dedicated list (JSON "equations" / "keyFormulas" / "formulas", or a ## Equations section locally). Each item: Name — $latex$ — meaning of symbols.
C) Grounding: when Knowledge Explorer site materials OR a curated formula pack are appended, PREFER those equations. Quote them with $...$; do not invent a conflicting formula. If you invent one, say it is not from site materials.
D) Validate mentally: KaTeX must be able to parse your latex (balanced braces, \\frac{a}{b}, \\left/\\right pairs).`;

/** Soft subject → formula-board section id. */
export function resolveFormulaBoardSectionId(subject: string): string | null {
  const s = subject.toLowerCase();
  if (/physics|力学|物理|mech|em\b|electric|magnet/.test(s)) return "physics";
  if (/calc|微积分|derivative|integral|ab\b|bc\b/.test(s)) return "calc";
  if (/chem|化学|stoich|acid|base|thermo/.test(s)) return "chem";
  if (/stat|统计|probability|inferen/.test(s)) return "stats";
  if (/precalc|algebra|trig|几何|geometry|math/.test(s)) return "math";
  return null;
}

function wrapInlineLatex(latex: string): string {
  const body = latex.trim().replace(/^\$+|\$+$/g, "");
  return `$${body}$`;
}

/** Curated formula pack injected into AP prompts (Phase C). */
export function buildGroundedFormulaPack(subject: string, maxItems = 8): string {
  const sectionId = resolveFormulaBoardSectionId(subject);
  if (!sectionId) return "";
  const section = FORMULA_BOARD.find((s) => s.id === sectionId);
  if (!section?.items.length) return "";
  const items = section.items.slice(0, maxItems);
  const lines = items.map(
    (item: FormulaBoardItem) =>
      `- ${item.name}: ${wrapInlineLatex(item.latex)}${item.note ? ` — ${item.note}` : ""}`
  );
  return [
    `Curated Knowledge Explorer formula pack (${section.title}) — prefer these when relevant:`,
    ...lines,
    "If a pack formula matches the question, use that latex (wrapped in $...$) and explain symbols. Do not invent a conflicting form.",
  ].join("\n");
}

/** Append pack + accuracy rules onto an AP system prompt. */
export function withFormulaAccuracy(
  system: string,
  subject?: string,
  options?: { maxPackItems?: number; compact?: boolean }
): string {
  const maxPackItems = options?.maxPackItems ?? (options?.compact ? 4 : 8);
  const pack = subject ? buildGroundedFormulaPack(subject, maxPackItems) : "";
  const rules = options?.compact
    ? `Math protocol: wrap formulas in $...$/$$...$$; prefer equations from site hits / the formula pack below; put key equations in ## Equations as Name: $latex$ — meaning; KaTeX must parse the latex.`
    : FORMULA_ACCURACY_RULES;
  return [system.trim(), rules, pack].filter(Boolean).join("\n\n");
}

export function katexParses(latex: string): boolean {
  const source = toLatexSource(latex);
  if (!source.trim()) return false;
  try {
    katex.renderToString(source, {
      throwOnError: true,
      displayMode: false,
      strict: "ignore",
      trust: false,
    });
    return true;
  } catch {
    return false;
  }
}

/** Deterministic TeX hygiene before / instead of another full LLM rewrite. */
export function deterministicRepairLatex(latex: string): string {
  let s = String(latex ?? "").trim();
  if (!s) return s;

  // Doubled command escapes from JSON / markdown: \\frac → \frac
  s = s.replace(/\\\\([a-zA-Z]+)/g, "\\$1");
  // Unicode minus / times often break KaTeX
  s = s.replace(/\u2212/g, "-").replace(/\u00d7/g, "\\times ").replace(/\u00b7/g, "\\cdot ");
  // \frac12 → \frac{1}{2} (and similar short forms)
  s = s.replace(/\\frac\s*(\d+)\s*(\d+)/g, "\\frac{$1}{$2}");
  s = s.replace(/\\dfrac\s*(\d+)\s*(\d+)/g, "\\dfrac{$1}{$2}");
  s = s.replace(/\\tfrac\s*(\d+)\s*(\d+)/g, "\\tfrac{$1}{$2}");
  // Do NOT strip trailing \\command here — that deleted valid \\oplus / \\infty / \\rightarrow.

  let open = 0;
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (ch === "{" && s[i - 1] !== "\\") open += 1;
    else if (ch === "}" && s[i - 1] !== "\\") open = Math.max(0, open - 1);
  }
  if (open > 0) s += "}".repeat(Math.min(open, 12));

  const lefts = (s.match(/\\left(?![a-zA-Z])/g) || []).length;
  const rights = (s.match(/\\right(?![a-zA-Z])/g) || []).length;
  if (lefts > rights) s += "\\right.".repeat(Math.min(lefts - rights, 8));

  return s.trim();
}

export function repairLatexSource(latex: string): { latex: string; ok: boolean; repaired: boolean } {
  const original = String(latex ?? "").trim();
  if (!original) return { latex: "", ok: false, repaired: false };

  // Always apply light deterministic hygiene (frac12, unicode minus) even when KaTeX
  // already accepts the source — keeps student-facing TeX consistent.
  const lightly = deterministicRepairLatex(original);
  if (katexParses(lightly)) {
    return { latex: lightly, ok: true, repaired: lightly !== original };
  }
  if (katexParses(original)) {
    return { latex: original, ok: true, repaired: false };
  }

  // Last-resort: drop a clearly incomplete trailing command (\fra, \sqr) or lone _/^ 
  const stripped = lightly
    .replace(/\\(?:f|fr|fra|sq|sqr|tex|mat|mathematics)$/i, "")
    .replace(/[_^]$/, "");
  if (stripped !== lightly && katexParses(stripped)) {
    return { latex: stripped, ok: true, repaired: true };
  }

  // Last try: toLatexSource path (Unicode → TeX)
  const viaUnicode = toLatexSource(stripped || lightly || original);
  if (viaUnicode && katexParses(viaUnicode)) {
    return { latex: viaUnicode, ok: true, repaired: true };
  }
  return {
    latex: lightly || original,
    ok: katexParses(lightly || original),
    repaired: lightly !== original,
  };
}

type SpanHit = { start: number; end: number; body: string; display: boolean };

/**
 * Collect $$…$$ then $…$ spans without letting the second `$` of `$$` start an
 * inline match (that produced `$$$` and swallowed surrounding words).
 */
function collectMathSpans(markdown: string): SpanHit[] {
  const hits: SpanHit[] = [];
  const displayRe = /\$\$([\s\S]*?)\$\$/g;
  let m: RegExpExecArray | null;
  while ((m = displayRe.exec(markdown))) {
    hits.push({ start: m.index, end: m.index + m[0].length, body: m[1], display: true });
  }

  const displays = [...hits].sort((a, b) => a.start - b.start);
  const proseRegions: Array<{ start: number; end: number }> = [];
  let cursor = 0;
  for (const d of displays) {
    if (cursor < d.start) proseRegions.push({ start: cursor, end: d.start });
    cursor = Math.max(cursor, d.end);
  }
  if (cursor < markdown.length) proseRegions.push({ start: cursor, end: markdown.length });

  for (const region of proseRegions) {
    const slice = markdown.slice(region.start, region.end);
    const inlineRe = /\$([^$\n]+?)\$/g;
    let im: RegExpExecArray | null;
    while ((im = inlineRe.exec(slice))) {
      // Ignore empty / whitespace-only bodies
      if (!im[1].trim()) continue;
      hits.push({
        start: region.start + im.index,
        end: region.start + im.index + im[0].length,
        body: im[1],
        display: false,
      });
    }
  }

  hits.sort((a, b) => a.start - b.start || (b.end - b.start) - (a.end - a.start));
  return hits;
}

/**
 * Phase A: validate each $…$ / $$…$$ span; deterministically repair broken TeX in place.
 * Also runs normalizeAuthoredText so bare TeX gets promoted first.
 * Currency `$5` is protected so it cannot open a false math span.
 */
export function repairAiMarkdownMath(markdown: string): MathRepairReport {
  const promoted = normalizeAuthoredText(String(markdown ?? ""));
  const currency = protectCurrencyDollars(promoted);
  const spans = collectMathSpans(currency.text);
  if (spans.length === 0) {
    return { text: currency.restore(currency.text), fixed: 0, stillBroken: 0 };
  }

  let fixed = 0;
  let stillBroken = 0;
  let out = "";
  let cursor = 0;
  for (const span of spans) {
    // Overlaps (should not happen after region scan) — skip safely.
    if (span.start < cursor) continue;
    out += currency.text.slice(cursor, span.start);
    const result = repairLatexSource(span.body);
    if (result.repaired || result.latex !== span.body.trim()) {
      if (result.repaired || result.latex !== span.body) fixed += 1;
    }
    if (!result.ok) stillBroken += 1;
    const body = result.latex;
    out += span.display ? `$$${body}$$` : `$${body}$`;
    cursor = span.end;
  }
  out += currency.text.slice(cursor);
  const restored = sanitizeMathDelimiterSalad(currency.restore(out));
  return { text: restored, fixed, stillBroken };
}

/** Normalize cloud JSON equation / formula list items into structured units. */
export function normalizeEquationItems(items: unknown): AiEquation[] {
  if (!Array.isArray(items)) return [];
  const out: AiEquation[] = [];
  for (const raw of items) {
    if (raw && typeof raw === "object" && !Array.isArray(raw)) {
      const obj = raw as Record<string, unknown>;
      const latex = String(obj.latex || obj.expression || obj.tex || "").trim();
      if (!latex) continue;
      const repaired = repairLatexSource(latex.replace(/^\$+|\$+$/g, ""));
      const meansRaw = obj.means ?? obj.meaning ?? obj.when;
      out.push({
        name: obj.name ? String(obj.name) : undefined,
        latex: repaired.latex,
        means: meansRaw != null && String(meansRaw).trim() ? String(meansRaw).trim() : undefined,
      });
      continue;
    }
    const line = String(raw ?? "").trim();
    if (!line) continue;
    // "Name: $latex$ — meaning" or "Name: latex — meaning"
    const match = line.match(
      /^([^:：]+)\s*[:：]\s*(.+?)(?:\s*[—–\-]\s*(.+))?$/
    );
    if (match) {
      const name = match[1].trim();
      let latexPart = match[2].trim();
      const means = match[3]?.trim();
      const dollar = latexPart.match(/\$\$([\s\S]+?)\$\$|\$([^$\n]+?)\$/);
      const body = dollar ? (dollar[1] || dollar[2] || "").trim() : latexPart.replace(/^\$+|\$+$/g, "");
      const repaired = repairLatexSource(body);
      out.push({ name, latex: repaired.latex, means });
    } else {
      const dollar = line.match(/\$\$([\s\S]+?)\$\$|\$([^$\n]+?)\$/);
      const body = dollar ? (dollar[1] || dollar[2] || "").trim() : line.replace(/^\$+|\$+$/g, "");
      const repaired = repairLatexSource(body);
      out.push({ latex: repaired.latex });
    }
  }
  return out.slice(0, 12);
}

/** Phase B display: structured equations as markdown bullets with validated $latex$. */
export function formatEquationsMarkdown(equations: AiEquation[], label = "Key equations"): string {
  if (!equations.length) return "";
  const lines = equations.map((eq) => {
    const math = wrapInlineLatex(eq.latex);
    const name = eq.name?.trim();
    const means = eq.means?.trim();
    if (name && means) return `- ${name}: ${math} — ${means}`;
    if (name) return `- ${name}: ${math}`;
    if (means) return `- ${math} — ${means}`;
    return `- ${math}`;
  });
  return `**${label}**\n${lines.join("\n")}`;
}

/** Ensure a free-text formula list item has a renderable $…$ span. */
export function ensureFormulaListItem(item: string): string {
  const line = String(item ?? "").trim();
  if (!line) return line;
  if (/\$.+\$/.test(line)) {
    return repairAiMarkdownMath(line).text;
  }
  // Try to wrap the latex-ish middle of "Name: expr — when"
  const match = line.match(/^([^:：]+)\s*[:：]\s*(.+?)(?:\s*[—–\-]\s*(.+))?$/);
  if (match) {
    const name = match[1].trim();
    const expr = match[2].trim().replace(/^\$+|\$+$/g, "");
    const means = match[3]?.trim();
    const repaired = repairLatexSource(expr);
    const math = wrapInlineLatex(repaired.latex);
    return means ? `${name}: ${math} — ${means}` : `${name}: ${math}`;
  }
  const repaired = repairLatexSource(line);
  return wrapInlineLatex(repaired.latex);
}

/** Merge legacy string formula arrays + optional structured equations. */
export function mergeFormulaLists(
  legacyItems: unknown,
  equationsField: unknown
): { markdown: string; equations: AiEquation[] } {
  const fromStructured = normalizeEquationItems(equationsField);
  const fromLegacy = normalizeEquationItems(legacyItems);
  // Prefer structured; fill from legacy if empty
  const equations = fromStructured.length ? fromStructured : fromLegacy;
  // If both exist, prefer structured but keep unique legacy latex
  if (fromStructured.length && fromLegacy.length) {
    const seen = new Set(fromStructured.map((e) => e.latex));
    for (const eq of fromLegacy) {
      if (!seen.has(eq.latex)) {
        equations.push(eq);
        seen.add(eq.latex);
      }
    }
  }
  return {
    equations,
    markdown: formatEquationsMarkdown(equations),
  };
}

/** Lightweight fixture check for CI/manual — returns failing case names. */
export function runAiLatexAccuracyFixtures(): string[] {
  const fails: string[] = [];
  const cases: Array<{ name: string; ok: () => boolean }> = [
    {
      name: "valid-frac",
      ok: () => katexParses("\\frac{1}{2}mv^2"),
    },
    {
      name: "repair-frac12",
      ok: () => repairLatexSource("\\frac12 mv^2").ok,
    },
    {
      name: "repair-braces",
      ok: () => repairLatexSource("\\frac{1}{2").ok,
    },
    {
      name: "markdown-span-repair",
      ok: () => {
        const r = repairAiMarkdownMath("Energy $K = \\frac{1}{2} m v^2$ is kinetic.");
        return r.stillBroken === 0 && r.text.includes("$");
      },
    },
    {
      name: "display-inline-no-triple-dollar",
      ok: () => {
        const r = repairAiMarkdownMath(
          "Use $$F = ma$$ and $v^2 = v_0^2 + 2a\\Delta x$."
        );
        return (
          !r.text.includes("$$$") &&
          r.text.includes("$$F = ma$$") &&
          r.text.includes(" and ") &&
          r.text.includes("$v^2")
        );
      },
    },
    {
      name: "frac12-normalized",
      ok: () => {
        const r = repairLatexSource("\\frac12 mv^2");
        return r.ok && r.latex.includes("\\frac{1}{2}");
      },
    },
    {
      name: "currency-kept",
      ok: () => {
        const r = repairAiMarkdownMath("Price is $5 and half is $\\frac{1}{2}$.");
        return (
          r.text.includes("$5") &&
          r.text.includes(" half is $") &&
          /\$\\frac\{1\}\{2\}\$/.test(r.text) &&
          !r.text.includes("$$$")
        );
      },
    },
    {
      name: "stream-currency-no-extra-dollar",
      ok: () => {
        const s = stabilizeStreamingMath("Price is $5 and half is $\\frac{1}{2}$.");
        return s.includes("$5") && !s.endsWith(".$") && s.includes("$\\frac{1}{2}$");
      },
    },
    {
      name: "equation-format",
      ok: () => {
        const md = formatEquationsMarkdown([
          { name: "KE", latex: "\\tfrac{1}{2}mv^2", means: "kinetic energy" },
        ]);
        return md.includes("$") && md.includes("KE");
      },
    },
    {
      name: "dollar-salad-units",
      ok: () => {
        const r = repairAiMarkdownMath(
          String.raw`G ($6.674\times$$10^{-11}$,$$$$ \text{N}\cdot\text{m}^2/\text{kg}^2)`
        );
        return (
          !r.text.includes("$$$") &&
          !/\\times\$\$/.test(r.text) &&
          r.text.includes("10^{-11}") &&
          r.text.includes("\\text{N}")
        );
      },
    },
    {
      name: "dollar-salad-display",
      ok: () => {
        const r = repairAiMarkdownMath(
          String.raw`$$$$v_e = \sqrt{\frac{2GM}{R}}$$$`
        );
        return (
          !r.text.includes("$$$") &&
          r.text.includes("\\sqrt") &&
          (r.text.match(/\$\$/g) || []).length % 2 === 0
        );
      },
    },
    {
      name: "dollar-salad-energy",
      ok: () => {
        const r = repairAiMarkdownMath(
          String.raw`Energy$$$K_i + U_i = K_f + U_f$$$$* Meaning`
        );
        return !r.text.includes("$$$") && r.text.includes("K_i");
      },
    },
    {
      name: "oplus-kept",
      ok: () => {
        const r = repairAiMarkdownMath("Earth ($M_\\oplus$) mass");
        return r.text.includes("\\oplus") && r.text.includes("$M_");
      },
    },
    {
      name: "bare-frac-wrapped",
      ok: () => {
        const r = repairAiMarkdownMath("U(r) = -G \\frac{M m}{r}");
        return r.text.includes("$") && r.text.includes("\\frac");
      },
    },
    {
      name: "escape-velocity-salad",
      ok: () => {
        const r = repairAiMarkdownMath(
          String.raw`$$$v_{\text{esc}}$ $$
=
$$$\sqrt{\frac{2GM}{R}}$$$$`
        );
        return (
          !r.text.includes("$$$") &&
          r.text.includes("\\sqrt") &&
          r.text.includes("v_{\\text{esc}}") &&
          (r.text.match(/\$\$/g) || []).length >= 2
        );
      },
    },
  ];
  for (const c of cases) {
    try {
      if (!c.ok()) fails.push(c.name);
    } catch {
      fails.push(c.name);
    }
  }
  return fails;
}
