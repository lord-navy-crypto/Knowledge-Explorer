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
  /** Soft decode budget after the first stream chunk (extends while visible). */
  timeoutMs: number;
  /** After stream starts: interrupt if no tokens at all (model stalled). */
  idleVisibleMs: number;
  /**
   * Interrupt if stuck inside an open <think> with no visible answer.
   * `0` = never cut thinking — wait for the model to finish.
   */
  thinkingBudgetMs: number;
  /** Whole-request ceiling including prefill. */
  absoluteTimeoutMs: number;
  /** Prefill-only budget before first chunk (create + first token). */
  prefillTimeoutMs: number;
  /**
   * Heavy finish mode: do not soft-kill mid-stream; wait for the full answer.
   * Only a true stall (idle) or the absolute ceiling may stop generation.
   */
  finishOutput: boolean;
  /** Skip aggressive prompt truncation (Heavy needs the full brief). */
  preservePrompt: boolean;
  nudge: string;
  /** Context window sizes to try on load (largest first). */
  contextAttempts: number[];
  /** Cap context / prefill for this model family. */
  contextWindowCap: number | null;
  /** True when this id is a retired R1 / Distill reasoning dump model. */
  isRetiredReasoning: boolean;
};

export function isMediumLocalModel(modelId: string): boolean {
  return /(?:^|[^0-9.])([34])B(?:-|$)/i.test(modelId) && !isHeavyLocalModel(modelId);
}

export function getLocalGenPolicy(modelId: string): LocalGenPolicy {
  const heavy = isHeavyLocalModel(modelId);
  const medium = isMediumLocalModel(modelId);
  const disableThinking = shouldDisableThinking(modelId);

  if (heavy) {
    // Heavy stays runnable and waits for the stream to complete.
    // No thinking-off / think-kill — those left answers half-finished.
    return {
      disableThinking: false,
      maxTokens: 1536,
      timeoutMs: 600_000,
      idleVisibleMs: 180_000,
      thinkingBudgetMs: 0,
      absoluteTimeoutMs: 900_000,
      prefillTimeoutMs: 300_000,
      finishOutput: true,
      preservePrompt: true,
      nudge: localNudgeForModel(modelId),
      contextAttempts: [4096, 2048],
      contextWindowCap: null,
      isRetiredReasoning: isReasoningLocalModel(modelId),
    };
  }

  if (medium) {
    // Medium lag is almost always Qwen3 hidden thinking — force it off.
    // Do not reintroduce Heavy-style truncate / finishOutput waits.
    return {
      disableThinking,
      maxTokens: 512,
      timeoutMs: 150_000,
      idleVisibleMs: 75_000,
      thinkingBudgetMs: 12_000,
      absoluteTimeoutMs: 240_000,
      prefillTimeoutMs: 120_000,
      finishOutput: false,
      preservePrompt: false,
      nudge: localNudgeForModel(modelId),
      contextAttempts: [4096],
      contextWindowCap: null,
      isRetiredReasoning: isReasoningLocalModel(modelId),
    };
  }

  return {
    disableThinking,
    maxTokens: 480,
    timeoutMs: 120_000,
    idleVisibleMs: 60_000,
    thinkingBudgetMs: 10_000,
    absoluteTimeoutMs: 180_000,
    prefillTimeoutMs: 90_000,
    finishOutput: false,
    preservePrompt: false,
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
    prefill_chunk_size: Math.min(512, capped),
  };
}

/** Shrink Local prompts so prefill does not burn the whole timeout. */
export function compactLocalMessages(
  messages: Array<{ role: string; content: string }>,
  opts?: { preservePrompt?: boolean }
): Array<{ role: string; content: string }> {
  const MAX_SYSTEM = opts?.preservePrompt ? 8_000 : 2_200;
  const MAX_TURN = opts?.preservePrompt ? 4_000 : 900;
  const MAX_TURNS = opts?.preservePrompt ? 8 : 4;

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

/** Soft fallback shown in the dialogue instead of a red hard error. */
export function localTimeoutGuidance(modelId: string): string {
  const short = modelId.replace(/-q4f16_1-MLC$/i, "").replace(/-/g, " ");
  return `## Local AI stopped early

No visible answer arrived in time on **${short}** (often hidden thinking, or the model is too heavy for this device).

Try one of these:
1. Switch to **Qwen3.5 Starter** or another **Super light / Light** model, then press **Enable** again
2. Turn **off site search** in Local settings (smaller prompt = faster)
3. Use **Website API** for this question

Heavy 7B–9B browser models need a strong discrete GPU — leave them running until the answer finishes.`;
}

export function isLocalGuidanceReply(text: string): boolean {
  return text.trimStart().startsWith("## Local AI stopped early");
}

export { shouldDisableThinking, isHeavyLocalModel, localNudgeForModel };
