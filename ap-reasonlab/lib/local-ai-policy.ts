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
  /** Soft wall-clock budget; extends while visible tokens arrive (see idle/absolute). */
  timeoutMs: number;
  /** If no visible answer appears within this window, interrupt early. */
  idleVisibleMs: number;
  /** Hard ceiling even if the soft deadline keeps sliding. */
  absoluteTimeoutMs: number;
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
      // Keep answers shorter so decode finishes before wall-clock timeout.
      maxTokens: 640,
      timeoutMs: 150_000,
      idleVisibleMs: 60_000,
      absoluteTimeoutMs: 210_000,
      nudge: localNudgeForModel(modelId),
      contextAttempts: [4096, 2048],
      contextWindowCap: 4096,
      isRetiredReasoning: isReasoningLocalModel(modelId),
    };
  }

  if (medium) {
    return {
      disableThinking,
      maxTokens: 560,
      timeoutMs: 120_000,
      idleVisibleMs: 45_000,
      absoluteTimeoutMs: 180_000,
      nudge: localNudgeForModel(modelId),
      contextAttempts: [4096],
      contextWindowCap: 4096,
      isRetiredReasoning: isReasoningLocalModel(modelId),
    };
  }

  return {
    disableThinking,
    maxTokens: 480,
    timeoutMs: 90_000,
    idleVisibleMs: 35_000,
    absoluteTimeoutMs: 120_000,
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

/** Shrink Local prompts so prefill does not burn the whole timeout. */
export function compactLocalMessages(
  messages: Array<{ role: string; content: string }>
): Array<{ role: string; content: string }> {
  const MAX_SYSTEM = 4_000;
  const MAX_TURN = 1_500;
  const MAX_TURNS = 6; // system + up to 5 later messages

  const system = messages.find((m) => m.role === "system");
  const rest = messages.filter((m) => m.role !== "system").slice(-MAX_TURNS + 1);
  const out: Array<{ role: string; content: string }> = [];
  if (system) {
    out.push({
      role: "system",
      content:
        system.content.length > MAX_SYSTEM
          ? `${system.content.slice(0, MAX_SYSTEM)}\n…(truncated for Local speed)`
          : system.content,
    });
  }
  for (const message of rest) {
    out.push({
      role: message.role,
      content:
        message.content.length > MAX_TURN
          ? `${message.content.slice(0, MAX_TURN)}\n…(truncated for Local speed)`
          : message.content,
    });
  }
  return out;
}

export { shouldDisableThinking, isHeavyLocalModel, localNudgeForModel };
