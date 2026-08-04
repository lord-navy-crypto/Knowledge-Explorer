/**
 * Local AI generation policy.
 * Sole hard restriction: turn thinking mode off (Qwen3 `enable_thinking: false`).
 * No generation time limits — wait for the stream to finish. Allow long replies.
 *
 * Size-aware sampling: tiny models get a bit more exploration to fill answers;
 * heavy models run cooler for accuracy/stability. All stay powerful via nudges.
 */

import {
  localNudgeForModel,
  shouldDisableThinking,
  isHeavyLocalModel,
  isMediumLocalModel,
  isTinyLocalModel,
  isReasoningLocalModel,
} from "@/lib/ai-reasoning-strip";

export type LocalGenPolicy = {
  /** Force WebLLM `extra_body.enable_thinking: false` when the model supports it. */
  disableThinking: boolean;
  /** High ceiling so long teaching answers can finish. */
  maxTokens: number;
  /** Sampling temperature — tuned by size for power + stability. */
  temperature: number;
  /** Nucleus sampling — keeps outputs coherent. */
  topP: number;
  /** Mild anti-loop for small models; near-neutral for heavy. */
  frequencyPenalty: number;
  /** Light repetition control (WebLLM). */
  repetitionPenalty: number;
  nudge: string;
  /** True when this id is a retired R1 / Distill reasoning dump model. */
  isRetiredReasoning: boolean;
  /** Size band for UI / expand heuristics. */
  sizeBand: "tiny" | "light" | "medium" | "heavy";
};

function sizeBandFor(modelId: string): LocalGenPolicy["sizeBand"] {
  if (isHeavyLocalModel(modelId)) return "heavy";
  if (isMediumLocalModel(modelId)) return "medium";
  if (isTinyLocalModel(modelId)) return "tiny";
  return "light";
}

/**
 * Size-aware generation knobs — more capable replies without chaotic sampling.
 * Thinking-off remains the only hard Local restriction.
 */
export function getLocalGenPolicy(modelId: string): LocalGenPolicy {
  const band = sizeBandFor(modelId);

  // Defaults aim for rich teaching; cooler on heavier models for stability.
  let maxTokens = 8192;
  let temperature = 0.7;
  let topP = 0.9;
  let frequencyPenalty = 0.05;
  let repetitionPenalty = 1.05;

  switch (band) {
    case "tiny":
      // Small models under-talk — nudge fullness; modest max keeps them stable.
      maxTokens = 6144;
      temperature = 0.78;
      topP = 0.92;
      frequencyPenalty = 0.12;
      repetitionPenalty = 1.08;
      break;
    case "light":
      maxTokens = 8192;
      temperature = 0.72;
      topP = 0.9;
      frequencyPenalty = 0.08;
      repetitionPenalty = 1.06;
      break;
    case "medium":
      maxTokens = 8192;
      temperature = 0.68;
      topP = 0.9;
      frequencyPenalty = 0.05;
      repetitionPenalty = 1.05;
      break;
    case "heavy":
      // Stronger models: cooler sampling → sharper formulas / fewer loops.
      maxTokens = 8192;
      temperature = 0.62;
      topP = 0.88;
      frequencyPenalty = 0.02;
      repetitionPenalty = 1.03;
      break;
  }

  return {
    disableThinking: shouldDisableThinking(modelId),
    maxTokens,
    temperature,
    topP,
    frequencyPenalty,
    repetitionPenalty,
    nudge: localNudgeForModel(modelId),
    isRetiredReasoning: isReasoningLocalModel(modelId),
    sizeBand: band,
  };
}

/** No context-window / prefill caps — use WebLLM defaults (avoids OOM surprises). */
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

export {
  shouldDisableThinking,
  isHeavyLocalModel,
  isMediumLocalModel,
  isTinyLocalModel,
  localNudgeForModel,
};
