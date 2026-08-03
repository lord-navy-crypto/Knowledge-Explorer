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
  "Reply in markdown with thinking mode off. Wrap EVERY formula in $...$ or $$...$$ (never bare TeX, never formula code fences). Do NOT open <think> or <thinking> tags — start with visible answer content.";

/** Push Local models to write useful, substantial teaching replies. */
export const LOCAL_DEPTH_NUDGE = `Write a FULL teaching reply students can actually use — not a stub or one-liner.
Include multiple short sections when helpful (e.g. idea → formulas → steps → partial example → checkpoint → what the student finishes).
Be concrete and useful: name quantities, show process, give at least one worked partial step or mini-example when the topic allows.
Aim for a rich answer (roughly several paragraphs / bullet blocks). Prefer helpful depth over brevity.
Put all useful content in the visible reply.`;

/** Used when the first Local pass is blank (thinking leftovers). */
export const LOCAL_RETRY_NO_THINK_NUDGE =
  "Retry: output a FULL student-facing teaching answer now. Zero <think> tags. Use $...$ for math. Include formulas, steps, and a useful example or checkpoint — not a one-liner.";

/** Used when the first Local pass is too thin. */
export const LOCAL_EXPAND_NUDGE =
  "Your draft was too short. Expand into a complete teaching answer with headings or bullets, formulas in $...$, clear steps, a partial worked example, one common mistake, and what the student should do next. Make it substantially more useful.";
