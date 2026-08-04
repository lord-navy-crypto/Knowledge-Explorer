/**
 * Soft-strip accidental chain-of-thought dumps (e.g. leftover <think> tags).
 * Local DeepSeek-R1 Distill was removed because waiting on a private thinking
 * phase made the UI feel stuck; this helper is only a safety net now.
 *
 * Generation budgets / thinking-disable policy: `lib/local-ai-policy.ts`.
 */

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

export function localNudgeForModel(modelId: string): string {
  const base = shouldDisableThinking(modelId) ? LOCAL_DIRECT_ANSWER_NUDGE : LOCAL_MARKDOWN_NUDGE;
  return `${base}\n\n${LOCAL_DEPTH_NUDGE}`;
}

/**
 * R1 distill is trained to think first. We allow that privately, then show only
 * the final answer. Asking it to "never think" usually fails and wastes tokens.
 */
export const REASONING_MODEL_DIRECT_ANSWER =
  "You may reason privately inside <think>...</think> if needed. After </think>, output ONLY the final answer in the requested format — no meta commentary about your thinking.";

/** Soft nudge when thinking mode does not apply — keep formulas visible. */
export const LOCAL_MARKDOWN_NUDGE =
  "Reply in markdown. Wrap EVERY formula in $...$ or $$...$$ so students see equations (never bare \\frac / \\sqrt, never formula code fences).";

/** Nudge paired with thinking-off (sole Local restriction). */
export const LOCAL_DIRECT_ANSWER_NUDGE =
  "Thinking mode is OFF. Write the visible answer immediately — do not open <think> or <thinking> tags. Wrap EVERY formula in $...$ or $$...$$ (never bare TeX, never formula code fences).";

/** Push Local models to speak more, use more formulas, and explain in detail. */
export const LOCAL_DEPTH_NUDGE = `Speak as you go: write useful teaching text sentence by sentence right away. Do not silently plan a short answer first.

Length & detail:
- Prefer a LONG, detailed teaching reply over a stub. Keep talking until the student has enough to work with.
- Use multiple sections (idea → key formulas → symbol meanings → steps → partial example → checkpoint → what the student finishes).
- Explain WHY each step works, not only what to do.

Formulas (required when the topic is math/science/AP):
- Include SEVERAL formulas, each wrapped in $...$ or $$...$$ (never bare TeX, never formula code fences).
- After each important formula, explain what every symbol means and when to use it.
- Show at least one worked PARTIAL example with numbers/units when possible.

Put ALL of this in the visible streamed reply. Do not stop after one short paragraph.`;

/** Used when the first Local pass is blank (thinking leftovers). */
export const LOCAL_RETRY_NO_THINK_NUDGE =
  "Retry: start speaking a LONG teaching answer NOW, sentence by sentence. Zero <think> tags. Include several $...$ formulas with symbol meanings, detailed steps, and a partial example — not a one-liner.";

/** Used when the first Local pass is too thin. */
export const LOCAL_EXPAND_NUDGE =
  "Your draft was too short or too light on formulas. Continue with a much longer teaching answer: more headings/bullets, MORE formulas in $...$ (with symbol meanings), detailed step-by-step explanation, a partial worked example, one common mistake, and what the student should do next.";

/** Used when the reply has almost no rendered math. */
export const LOCAL_MORE_FORMULAS_NUDGE =
  "Add more formulas. Rewrite/expand with at least several $...$ / $$...$$ equations, explain each symbol, and walk through the reasoning in more detail while streaming the visible answer.";

/**
 * English Local nudge — thinking-off only, NO AP formula / science-worksheet pressure.
 * Passed as a complete() override so English tasks are not polluted by LOCAL_DEPTH_NUDGE.
 */
export const LOCAL_ENGLISH_NUDGE = `Thinking mode is OFF. Write the visible English answer immediately — do not open <think> or <thinking> tags.

This is English learning (grammar / translation / writing / language materials / exam strategy / practice) — NOT AP science.
- Do NOT invent physics formulas, science worksheets, or $...$ math dumps.
- Speak clearly sentence by sentence.
- Translator: just translate. Coaching modes: concrete language feedback with examples.
- Stay useful and concrete; avoid empty praise.`;

export const LOCAL_ENGLISH_RETRY_NUDGE =
  "Retry: start the English answer NOW. Zero <think> tags. No fake math formulas. Translate or coach in clear language — not an AP science worksheet.";

export function localNudgeForEnglish(modelId: string): string {
  // Thinking-off still applies for Qwen; English skips the AP depth/formula stack.
  if (shouldDisableThinking(modelId)) return LOCAL_ENGLISH_NUDGE;
  return `Reply in markdown for English learning. Do not invent physics formulas.\n\n${LOCAL_ENGLISH_NUDGE}`;
}
