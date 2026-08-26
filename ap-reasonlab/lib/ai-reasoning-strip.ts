/**
 * Soft-strip accidental chain-of-thought dumps (e.g. leftover <think> tags).
 * Local DeepSeek-R1 Distill was removed because waiting on a private thinking
 * phase made the UI feel stuck; this helper is only a safety net now.
 *
 * Generation budgets / thinking-disable policy: `lib/local-ai-policy.ts`.
 */

import { splitAiReplyEquations } from "@/lib/ai-latex-accuracy";

const THINK_OPEN = /<(?:redacted_)?think(?:ing)?\b[^>]*>/i;
const THINK_CLOSE = /<\/(?:redacted_)?think(?:ing)?>/i;

export function isInsideOpenThinkBlock(text: string): boolean {
  const openIdx = text.search(THINK_OPEN);
  if (openIdx < 0) return false;
  const after = text.slice(openIdx);
  return !THINK_CLOSE.test(after);
}

export function stripReasoningTrace(text: string, opts?: { trim?: boolean }): string {
  if (!text) return "";

  let out = text
    .replace(/<(?:redacted_)?think\b[^>]*>[\s\S]*?<\/(?:redacted_)?think>/gi, "")
    .replace(/<thinking\b[^>]*>[\s\S]*?<\/thinking>/gi, "")
    .replace(/<reason(?:ing)?\b[^>]*>[\s\S]*?<\/reason(?:ing)?>/gi, "")
    .replace(/◁think▷[\s\S]*?◁\/think▷/gi, "")
    .replace(/\[thinking\][\s\S]*?\[\/thinking\]/gi, "");

  // Unclosed thinking block — hide from the open tag onward until it closes.
  const openIdx = out.search(/<(?:redacted_)?think(?:ing)?\b/i);
  if (openIdx >= 0 && !/<\/(?:redacted_)?think(?:ing)?>/i.test(out.slice(openIdx))) {
    out = out.slice(0, openIdx);
  }

  out = out.replace(/\n{3,}/g, "\n\n");
  return opts?.trim === false ? out : out.trim();
}

/** WebLLM allows only one system message (index 0). Merge the nudge into it. */
export function mergeLocalDirectNudge(
  messages: Array<{ role: string; content: string }>,
  nudge: string = LOCAL_MARKDOWN_NUDGE
): Array<{ role: string; content: string }> {
  const sysIdx = messages.findIndex((m) => m.role === "system");
  if (sysIdx >= 0) {
    return messages.map((m, i) =>
      i === sysIdx ? { ...m, content: `${m.content}\n\n${nudge}` } : m
    );
  }
  return [{ role: "system", content: nudge }, ...messages];
}

export function isReasoningLocalModel(modelId: string): boolean {
  return /deepseek-r1|r1-distill|reasoning/i.test(modelId);
}

/** True for Qwen3 / Qwen3.5 builds that accept `extra_body.enable_thinking`. */
export function supportsDisableThinking(modelId: string): boolean {
  return /Qwen3/i.test(modelId);
}

/**
 * Sole Local restriction: turn off thinking mode for models that support it
 * (Qwen3 / Qwen3.5 `enable_thinking: false`). Applies to every size.
 */
export function shouldDisableThinking(modelId: string): boolean {
  return supportsDisableThinking(modelId);
}

/** 7B / 8B / 9B only — do not treat 0.8B or 1.7B as heavy. */
export function isHeavyLocalModel(modelId: string): boolean {
  return /(?:^|[^0-9.])([789])B(?:-|$)/i.test(modelId);
}

/** ~3B–4B mid-tier (not Heavy). */
export function isMediumLocalModel(modelId: string): boolean {
  return /(?:^|[^0-9.])([34])B(?:-|$)/i.test(modelId) && !isHeavyLocalModel(modelId);
}

/** Tiny / super-light (~≤1B or 135M). */
export function isTinyLocalModel(modelId: string): boolean {
  return /(?:135M|360M|0\.[0-9]+B|1B(?:-|$)|gemma3-1b)/i.test(modelId) && !isMediumLocalModel(modelId) && !isHeavyLocalModel(modelId);
}

/** Soft quality score for thin-reply expansion (AP / general Local). */
export function localReplyLooksThin(text: string): boolean {
  const t = text.trim();
  // Do not treat a long cut-off draft as "thin" — continue instead of rewrite.
  if (t.length >= 700) return false;
  if (!t || t.length < 280) return true;
  const headings = (t.match(/^#{1,3}\s+\S+/gm) || []).length;
  const bullets = (t.match(/^\s*[-*+]\s+\S+/gm) || []).length;
  if (t.length < 500 && headings + bullets < 2) return true;
  return false;
}

/** True when an AP/science reply has almost no structured equations. */
export function localReplyNeedsMoreFormulas(text: string): boolean {
  const t = text.trim();
  // Densify only when there is essentially no math — prefer validate/repair over rewrite.
  if (t.length < 160 || t.length >= 900) return false;
  return splitAiReplyEquations(t).equations.length < 1;
}

/** Used when the reply has almost no rendered math. Prefer quoting pack/site formulas over inventing. */
export const LOCAL_MORE_FORMULAS_NUDGE =
  "Add KaTeX-ready equations. Keep your teaching text. Insert an ## Equations section with 2–4 lines as: Name | latex | symbol meanings (latex has NO $ characters). Prefer formulas from any site materials / formula pack already in the prompt. Do not rewrite the whole answer shorter. Do not invent conflicting physics. Never emit $...$ or $$$.";


export function localNudgeForModel(modelId: string): string {
  const base = shouldDisableThinking(modelId) ? LOCAL_DIRECT_ANSWER_NUDGE : LOCAL_MARKDOWN_NUDGE;
  const sizeHint = isTinyLocalModel(modelId)
    ? LOCAL_TINY_POWER_HINT
    : isHeavyLocalModel(modelId)
      ? LOCAL_HEAVY_POWER_HINT
      : LOCAL_MID_POWER_HINT;
  return `${base}\n\n${LOCAL_DEPTH_NUDGE}\n\n${LOCAL_QUALITY_NUDGE}\n\n${sizeHint}`;
}

/**
 * R1 distill is trained to think first. We allow that privately, then show only
 * the final answer. Asking it to "never think" usually fails and wastes tokens.
 */
export const REASONING_MODEL_DIRECT_ANSWER =
  "You may reason privately inside <think>...</think> if needed. After </think>, output ONLY the final answer in the requested format — no meta commentary about your thinking.";

/** Soft nudge when thinking mode does not apply — keep formulas visible. */
export const LOCAL_MARKDOWN_NUDGE =
  "Reply in markdown. Put every important formula under ## Equations as lines Name | latex | meaning (latex has NO $). Prose stays plain English — never $...$, $$...$$, or $$$, and never bare \\frac in paragraphs.";

/** Nudge paired with thinking-off (sole Local restriction). */
export const LOCAL_DIRECT_ANSWER_NUDGE =
  "Thinking mode is OFF. Write the visible answer immediately — do not open <think> or <thinking> tags. Put key formulas under ## Equations as Name | latex | meaning (NO $ in latex). Prose has no $...$ / $$$.";

/** Push Local models to speak more, use more formulas, and explain in detail. */
export const LOCAL_DEPTH_NUDGE = `Speak as you go: write useful teaching text sentence by sentence right away. Do not silently plan a short answer first.

Length & detail:
- Prefer a LONG, detailed teaching reply over a stub. Keep talking until the student has enough to work with.
- Use multiple sections (idea → key formulas → symbol meanings → steps → partial example → checkpoint → what the student finishes).
- Explain WHY each step works, not only what to do.

Formulas (required when the topic is math/science/AP):
- Include a ## Equations section with SEVERAL lines: Name | latex | symbol meanings (latex has NO $ characters).
- Do not wrap formulas in $...$ / $$...$$ in prose — the UI renders equation cards.
- Show at least one worked PARTIAL example with numbers/units when possible.

Put ALL of this in the visible streamed reply. Do not stop after one short paragraph.`;

/**
 * Quality / power layer — stronger teaching without fluff or instability.
 * Shared by all Local sizes (AP / concept / coding paths).
 */
export const LOCAL_QUALITY_NUDGE = `Power & quality (stay stable):
- Be precise: name the right law, formula, unit, or code symbol on the first relevant sentence.
- Prefer correct, checkable steps over vague pep-talk. If unsure, say so briefly and give the best next check.
- Structure clearly with markdown headings/bullets so students can scan.
- Avoid filler loops (“as mentioned above…” repeated). Each sentence should add a new fact, formula, or step.
- Never invent fake site citations. Only cite Liji Explore hits when they were appended.
- Keep ethics: do not finish graded numeric finals; leave the last algebra to the student when required.`;

export const LOCAL_TINY_POWER_HINT =
  "Small model mode: still give a full teaching reply with clear sections and a ## Equations block (Name | latex | meaning) — short stubs are not enough. Stay concrete; skip long digressions.";

export const LOCAL_MID_POWER_HINT =
  "Mid model mode: aim for a rich worksheet-style answer — multiple formulas with symbol meanings, a partial numeric example, one common mistake, and a clear student finish step.";

export const LOCAL_HEAVY_POWER_HINT =
  "Heavy model mode: use your capacity for depth and accuracy — careful unit tracking, richer partial work, sharper misconception notes, and tighter formula explanations. Stay organized; do not ramble.";

/** Used when the first Local pass is blank (thinking leftovers). */
export const LOCAL_RETRY_NO_THINK_NUDGE =
  "Retry: start speaking a LONG teaching answer NOW, sentence by sentence. Zero <think> tags. Include ## Equations with several Name | latex | meaning lines, detailed steps, and a partial example — not a one-liner. No $...$.";

/** Used when the first Local pass is too thin. */
export const LOCAL_EXPAND_NUDGE =
  "Your draft was too short or too light. Continue with a much longer teaching answer: more headings/bullets, a fuller ## Equations section (Name | latex | meaning, NO $), detailed step-by-step explanation, a partial worked example, one common mistake, and what the student should do next. Do not restart from zero — expand.";

/** Used when WebLLM stopped early because the context window / max_tokens filled. */
export const LOCAL_CONTINUE_NUDGE =
  "Your previous reply was cut off mid-answer by the model context window. Continue EXACTLY from the last incomplete sentence or heading. Do NOT restart. Do NOT repeat earlier sections. Finish the remaining teaching content now.";

/**
 * English Local nudge — thinking-off only, NO AP formula / science-worksheet pressure.
 * Passed as a complete() override so English tasks are not polluted by LOCAL_DEPTH_NUDGE.
 */
export const LOCAL_ENGLISH_NUDGE = `Thinking mode is OFF. Write the visible English answer immediately — do not open <think> or <thinking> tags.

This is English learning (grammar / translation / writing / language materials / exam strategy / practice) — NOT AP science.
- Do NOT invent physics formulas, science worksheets, or $...$ math dumps.
- Speak clearly sentence by sentence.
- Translator: JUST TRANSLATE — direction line + full translation only.
- Coaching modes (grammar / writing / materials / strategy / practice): be concrete and strong — name the grammar/vocab point, give 2 corrected examples, and one next practice step. Prefer substance over praise.
- Stay useful; avoid empty pep-talk.`;

export const LOCAL_ENGLISH_RETRY_NUDGE =
  "Retry: start the English answer NOW. Zero <think> tags. No fake math formulas. Translate or coach in clear language — not an AP science worksheet.";

/** Site Guide Local — navigation only; never densify with AP equation cards. */
export const LOCAL_GUIDE_NUDGE = `Thinking mode is OFF. Write the visible site-navigation answer immediately — do not open <think> or <thinking> tags.

This is Liji Explore Site Guide — NOT AP science tutoring.
- Do NOT invent formulas, ## Equations sections, or $...$ math.
- Name real paths, tabs, and buttons (e.g. /hints, Manage, Concepts).
- Give numbered steps. If the student asks homework, refuse and point to AI Toolbox AP.
- Stay short and concrete.`;

export function localNudgeForEnglish(modelId: string): string {
  // Thinking-off still applies for Qwen; English skips the AP depth/formula stack.
  if (shouldDisableThinking(modelId)) return LOCAL_ENGLISH_NUDGE;
  return `Reply in markdown for English learning. Do not invent physics formulas.\n\n${LOCAL_ENGLISH_NUDGE}`;
}

/**
 * Coding Local nudge — thinking-off only, NO AP formula / science-worksheet pressure.
 * Passed as a complete() override so Coding tasks skip LOCAL_DEPTH_NUDGE + formula densify.
 */
export const LOCAL_CODING_NUDGE = `Thinking mode is OFF. Write the visible coding answer immediately — do not open <think> or <thinking> tags.

This is Coding AI (debug / write / explain) — NOT AP science.
- Do NOT invent physics formulas, science worksheets, or $...$ math dumps.
- Use markdown with ## Coaching / ## Steps / ## Snippet / ## Test / edge case when helpful.
- Put code in fenced blocks with a language tag (\\\`\\\`\\\`python, \\\`\\\`\\\`js, …).
- Be concrete: name the bug or pattern, give a small stub, and one test/edge case.
- Prefer teaching partials over dumping full graded homework.`;

export const LOCAL_CODING_RETRY_NUDGE =
  "Retry: start the coding answer NOW. Zero <think> tags. No fake math formulas. Steps + fenced snippet + one test idea.";

export function localNudgeForCoding(modelId: string): string {
  if (shouldDisableThinking(modelId)) return LOCAL_CODING_NUDGE;
  return `Reply in markdown for coding help. Use code fences. Do not invent physics formulas.\n\n${LOCAL_CODING_NUDGE}`;
}
