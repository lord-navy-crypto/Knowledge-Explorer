/**
 * Local AI generation policy — budgets, context retries, thinking flags.
 * Catalog lives in `local-ai-models.ts`; strip helpers in `ai-reasoning-strip.ts`.
 */

import {
  localNudgeForModel,
  shouldDisableThinking,
  isHeavyLocalModel,
  isReasoningLocalModel,
} from "@/lib/ai-reasoning-strip";

export type LocalGenPolicy = {
  /** Force WebLLM `extra_body.enable_thinking: false` (Qwen3 family). */
  disableThinking: boolean;
  maxTokens: number;
  timeoutMs: number;
  nudge: string;
  /** Context window sizes to try on load (largest first). */
  contextAttempts: number[];
  /** Cap context / prefill for this model family. */
  contextWindowCap: number | null;
  /** True when this id is a retired R1 / Distill reasoning dump model. */
  isRetiredReasoning: boolean;
};

export function isMediumLocalModel(modelId: string): boolean {
  return /3B|4B/i.test(modelId) && !isHeavyLocalModel(modelId);
}

export function getLocalGenPolicy(modelId: string): LocalGenPolicy {
  const heavy = isHeavyLocalModel(modelId);
  const medium = isMediumLocalModel(modelId);
  const disableThinking = shouldDisableThinking(modelId);

  if (heavy) {
    return {
      disableThinking,
      maxTokens: 1000,
      timeoutMs: 120_000,
      nudge: localNudgeForModel(modelId),
      contextAttempts: [4096, 2048],
      contextWindowCap: 4096,
      isRetiredReasoning: isReasoningLocalModel(modelId),
    };
  }

  if (medium) {
    return {
      disableThinking,
      maxTokens: 900,
      timeoutMs: 90_000,
      nudge: localNudgeForModel(modelId),
      contextAttempts: [4096],
      contextWindowCap: 4096,
      isRetiredReasoning: isReasoningLocalModel(modelId),
    };
  }

  return {
    disableThinking,
    maxTokens: 768,
    timeoutMs: 75_000,
    nudge: localNudgeForModel(modelId),
    contextAttempts: [4096],
    contextWindowCap: null,
    isRetiredReasoning: isReasoningLocalModel(modelId),
  };
}

export function chatOptsForModel(
  modelId: string,
  contextWindow: number
): { context_window_size: number; prefill_chunk_size: number } | undefined {
  const policy = getLocalGenPolicy(modelId);
  if (policy.contextWindowCap == null) return undefined;
  const capped = Math.min(contextWindow, policy.contextWindowCap);
  return {
    context_window_size: capped,
    prefill_chunk_size: Math.min(1024, capped),
  };
}

export { shouldDisableThinking, isHeavyLocalModel, localNudgeForModel };
