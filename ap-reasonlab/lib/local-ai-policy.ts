/**
 * Local AI generation policy.
 * Sole hard restriction: turn thinking mode off (Qwen3 `enable_thinking: false`).
 * Otherwise prefer full, useful teaching replies (no short-answer throttles).
 */

import {
  localNudgeForModel,
  shouldDisableThinking,
  isHeavyLocalModel,
  isReasoningLocalModel,
} from "@/lib/ai-reasoning-strip";

export type LocalGenPolicy = {
  /** Force WebLLM `extra_body.enable_thinking: false` when the model supports it. */
  disableThinking: boolean;
  /** High ceiling so answers are not cut short. */
  maxTokens: number;
  /** Sampling temperature — a bit higher helps small models write fuller replies. */
  temperature: number;
  nudge: string;
  /** True when this id is a retired R1 / Distill reasoning dump model. */
  isRetiredReasoning: boolean;
};

/** One shared policy for every local model size. */
export function getLocalGenPolicy(modelId: string): LocalGenPolicy {
  return {
    disableThinking: shouldDisableThinking(modelId),
    maxTokens: 3072,
    temperature: 0.55,
    nudge: localNudgeForModel(modelId),
    isRetiredReasoning: isReasoningLocalModel(modelId),
  };
}

/** No context-window / prefill caps — use WebLLM defaults. */
export function chatOptsForModel(
  _modelId: string,
  _contextWindow: number
): { context_window_size: number; prefill_chunk_size: number } | undefined {
  return undefined;
}

/** Pass messages through unchanged (no prompt truncation). */
export function compactLocalMessages(
  messages: Array<{ role: string; content: string }>,
  _opts?: { preservePrompt?: boolean }
): Array<{ role: string; content: string }> {
  return messages.map((message) => ({ ...message }));
}

/** Soft fallback if generation fails with no text. */
export function localTimeoutGuidance(modelId: string): string {
  const short = modelId.replace(/-q4f16_1-MLC$/i, "").replace(/-/g, " ");
  return `## Local AI stopped early

No useful answer arrived from **${short}**.

Try one of these:
1. Press **Enable** again on the same model (or switch to **Qwen3.5 Starter** / Light)
2. Turn **off site search** in Local settings (smaller prompt = less likely to stall)
3. Use **Website API** for this question`;
}

export function isLocalGuidanceReply(text: string): boolean {
  return text.trimStart().startsWith("## Local AI stopped early");
}

/** True when a Local reply is too thin to be useful for students. */
export function isThinLocalReply(text: string): boolean {
  const t = String(text || "").trim();
  if (!t || isLocalGuidanceReply(t)) return true;
  if (t.length < 280) return true;
  const structure =
    (t.match(/^#{1,3}\s+/gm) || []).length + (t.match(/^[-*]\s+/gm) || []).length;
  if (structure < 2 && t.length < 550) return true;
  return false;
}

export function isMediumLocalModel(modelId: string): boolean {
  return /(?:^|[^0-9.])([34])B(?:-|$)/i.test(modelId) && !isHeavyLocalModel(modelId);
}

export { shouldDisableThinking, isHeavyLocalModel, localNudgeForModel };
