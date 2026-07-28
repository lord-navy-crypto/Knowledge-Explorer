/**
 * Soft-strip accidental chain-of-thought dumps (e.g. leftover <think> tags).
 * Local DeepSeek-R1 Distill was removed because waiting on a private thinking
 * phase made the UI feel stuck; this helper is only a safety net now.
 */

const THINK_OPEN = /<(?:redacted_)?think(?:ing)?\b[^>]*>/i;
const THINK_CLOSE = /<\/(?:redacted_)?think(?:ing)?>/i;

export function isInsideOpenThinkBlock(text: string): boolean {
  const openIdx = text.search(THINK_OPEN);
  if (openIdx < 0) return false;
  const after = text.slice(openIdx);
  return !THINK_CLOSE.test(after);
}

export function stripReasoningTrace(text: string): string {
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

  return out.replace(/\n{3,}/g, "\n\n").trim();
}

/** WebLLM allows only one system message (index 0). Merge the nudge into it. */
export function mergeLocalDirectNudge(
  messages: Array<{ role: string; content: string }>
): Array<{ role: string; content: string }> {
  const nudge = LOCAL_DIRECT_ANSWER_NUDGE;
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

/** Qwen3 / Qwen3.5 support WebLLM `extra_body.enable_thinking: false` to skip hidden thinking. */
export function supportsDisableThinking(modelId: string): boolean {
  return /Qwen3/i.test(modelId);
}

/**
 * R1 distill is trained to think first. We allow that privately, then show only
 * the final answer. Asking it to "never think" usually fails and wastes tokens.
 */
export const REASONING_MODEL_DIRECT_ANSWER =
  "You may reason privately inside <think>...</think> if needed. After </think>, output ONLY the final answer in the requested format — no meta commentary about your thinking.";

/** Keep local answers short and visible — no hidden chain-of-thought dumps. */
export const LOCAL_DIRECT_ANSWER_NUDGE =
  "Answer immediately in markdown. Use $...$ / $$...$$ for math. Do not write <think> blocks or private reasoning — put formulas and steps in the visible reply only.";
