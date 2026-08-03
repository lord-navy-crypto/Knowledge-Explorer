/**
 * Local AI generation policy.
 * Sole restriction: turn thinking mode off (Qwen3 `enable_thinking: false`).
 * No timeouts, token caps, context shrink, or size-tier special cases.
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
  /** High ceiling so answers are not cut short — not a size-tier throttle. */
  maxTokens: number;
  nudge: string;
  /** True when this id is a retired R1 / Distill reasoning dump model. */
  isRetiredReasoning: boolean;
};

/** One shared policy for every local model size. */
export function getLocalGenPolicy(modelId: string): LocalGenPolicy {
  return {
    disableThinking: shouldDisableThinking(modelId),
    maxTokens: 2048,
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

/** Soft fallback if generation fails with no text (rare with restrictions removed). */
export function localTimeoutGuidance(modelId: string): string {
  const short = modelId.replace(/-q4f16_1-MLC$/i, "").replace(/-/g, " ");
  return `## Local AI stopped early

No answer arrived from **${short}**.

Try one of these:
1. Switch to **Qwen3.5 Starter** or another lighter model, then press **Enable** again
2. Turn **off site search** in Local settings (smaller prompt = faster)
3. Use **Website API** for this question`;
}

export function isLocalGuidanceReply(text: string): boolean {
  return text.trimStart().startsWith("## Local AI stopped early");
}

export function isMediumLocalModel(modelId: string): boolean {
  return /(?:^|[^0-9.])([34])B(?:-|$)/i.test(modelId) && !isHeavyLocalModel(modelId);
}

export { shouldDisableThinking, isHeavyLocalModel, localNudgeForModel };
