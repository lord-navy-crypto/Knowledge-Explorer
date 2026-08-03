/**
 * Local AI generation policy.
 * Sole hard restriction: turn thinking mode off (Qwen3 `enable_thinking: false`).
 * No generation time limits — wait for the stream to finish. Allow long replies.
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
  /** High ceiling so long teaching answers can finish. */
  maxTokens: number;
  /** Sampling temperature — helps small models write fuller replies. */
  temperature: number;
  nudge: string;
  /** True when this id is a retired R1 / Distill reasoning dump model. */
  isRetiredReasoning: boolean;
};

/** One shared policy for every local model size. */
export function getLocalGenPolicy(modelId: string): LocalGenPolicy {
  return {
    disableThinking: shouldDisableThinking(modelId),
    maxTokens: 8192,
    temperature: 0.7,
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

/** Soft fallback if generation fails with no text (not a time-limit stop). */
export function localFailGuidance(modelId: string): string {
  const short = modelId.replace(/-q4f16_1-MLC$/i, "").replace(/-/g, " ");
  return `## Local AI could not finish

No useful answer arrived from **${short}**.

Try one of these:
1. Press **Enable** again on the same model (or switch to **Qwen3.5 Starter** / Light)
2. Turn **off site search** in Local settings (smaller prompt)
3. Use **Website API** for this question`;
}

/** @deprecated Use localFailGuidance — kept for older call sites. */
export const localTimeoutGuidance = localFailGuidance;

export function isLocalGuidanceReply(text: string): boolean {
  const t = text.trimStart();
  return (
    t.startsWith("## Local AI could not finish") || t.startsWith("## Local AI stopped early")
  );
}

export function isMediumLocalModel(modelId: string): boolean {
  return /(?:^|[^0-9.])([34])B(?:-|$)/i.test(modelId) && !isHeavyLocalModel(modelId);
}

export { shouldDisableThinking, isHeavyLocalModel, localNudgeForModel };
