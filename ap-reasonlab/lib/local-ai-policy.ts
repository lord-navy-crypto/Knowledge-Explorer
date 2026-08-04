/**
 * Local AI generation policy.
 * Sole hard restriction: turn thinking mode off (Qwen3 `enable_thinking: false`).
 * No generation time limits — wait for the stream to finish.
 *
 * WebLLM featured models ship with context_window_size ≈ 4096. Generation stops
 * with finish_reason="length" when the KV cache fills — that looked like
 * mid-sentence truncation. Keep max_tokens and prompts inside that budget.
 */

import {
  localNudgeForModel,
  shouldDisableThinking,
  isHeavyLocalModel,
  isMediumLocalModel,
  isTinyLocalModel,
  isReasoningLocalModel,
} from "@/lib/ai-reasoning-strip";

/** Featured WebLLM chat configs use 4096 for almost every Qwen/Llama pick. */
export const LOCAL_CONTEXT_WINDOW_TOKENS = 4096;

/** Leave at least this many tokens for the visible answer when possible. */
export const LOCAL_DECODE_RESERVE_TOKENS = 1600;

export type LocalGenPolicy = {
  /** Force WebLLM `extra_body.enable_thinking: false` when the model supports it. */
  disableThinking: boolean;
  /**
   * Requested decode ceiling. Effective max is further capped by
   * `budgetLocalMaxTokens(promptTokens, maxTokens)` so we never ask for more
   * than the remaining context window.
   */
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

/** Rough token estimate for Local prompt budgeting (CJK denser than Latin). */
export function estimateLocalTokens(text: string): number {
  const s = String(text || "");
  const cjk = (s.match(/[\u3040-\u30ff\u3400-\u9fff\uf900-\ufaff]/g) || []).length;
  const rest = Math.max(0, s.length - cjk);
  return Math.max(1, Math.ceil(cjk / 1.7 + rest / 4));
}

export function estimateMessagesTokens(
  messages: Array<{ role?: string; content?: string }>
): number {
  let total = 0;
  for (const message of messages) {
    total += 4; // role / framing overhead
    total += estimateLocalTokens(String(message.content || ""));
  }
  return total;
}

/**
 * Cap decode tokens to what still fits in the WebLLM context window.
 * Asking for 8192 while context is 4096 never helped — the engine stops at KV full.
 */
export function budgetLocalMaxTokens(promptTokens: number, policyMax: number): number {
  const room = LOCAL_CONTEXT_WINDOW_TOKENS - promptTokens - 32;
  return Math.max(192, Math.min(policyMax, room));
}

/**
 * Size-aware generation knobs — more capable replies without chaotic sampling.
 * maxTokens is a *decode* budget that fits a 4096 context with a normal prompt.
 */
export function getLocalGenPolicy(modelId: string): LocalGenPolicy {
  const band = sizeBandFor(modelId);

  // Decode budgets must fit inside ~4096 context after the prompt.
  let maxTokens = 2048;
  let temperature = 0.7;
  let topP = 0.9;
  let frequencyPenalty = 0.05;
  let repetitionPenalty = 1.05;

  switch (band) {
    case "tiny":
      maxTokens = 1536;
      temperature = 0.78;
      topP = 0.92;
      frequencyPenalty = 0.12;
      repetitionPenalty = 1.08;
      break;
    case "light":
      maxTokens = 2048;
      temperature = 0.72;
      topP = 0.9;
      frequencyPenalty = 0.08;
      repetitionPenalty = 1.06;
      break;
    case "medium":
      maxTokens = 2048;
      temperature = 0.68;
      topP = 0.9;
      frequencyPenalty = 0.05;
      repetitionPenalty = 1.05;
      break;
    case "heavy":
      maxTokens = 2304;
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

/**
 * Soft prompt compact so Always-search + history leave decode room.
 * Keeps system + latest user; trims older turns and very long bodies.
 */
export function compactLocalMessages(
  messages: Array<{ role: string; content: string }>,
  _opts?: { preservePrompt?: boolean }
): Array<{ role: string; content: string }> {
  if (messages.length === 0) return [];

  const cloned = messages.map((message) => ({
    role: message.role,
    content: String(message.content || ""),
  }));

  const systemIdx = cloned.findIndex((m) => m.role === "system");
  if (systemIdx >= 0 && cloned[systemIdx].content.length > 4200) {
    cloned[systemIdx] = {
      ...cloned[systemIdx],
      content: `${cloned[systemIdx].content.slice(0, 4000)}\n\n[System prompt trimmed to leave room for the answer.]`,
    };
  }

  // Keep the last user message; trim earlier dialogue turns.
  const lastUserIdx = (() => {
    for (let i = cloned.length - 1; i >= 0; i -= 1) {
      if (cloned[i].role === "user") return i;
    }
    return -1;
  })();

  for (let i = 0; i < cloned.length; i += 1) {
    if (i === systemIdx || i === lastUserIdx) continue;
    if (cloned[i].content.length > 900) {
      cloned[i] = {
        ...cloned[i],
        content: `${cloned[i].content.slice(0, 850)}…`,
      };
    }
  }

  if (lastUserIdx >= 0 && cloned[lastUserIdx].content.length > 5500) {
    cloned[lastUserIdx] = {
      ...cloned[lastUserIdx],
      content: `${cloned[lastUserIdx].content.slice(0, 5200)}\n\n[User prompt trimmed to leave room for the answer.]`,
    };
  }

  // If still too large for a decent decode reserve, drop oldest non-system turns.
  let tokens = estimateMessagesTokens(cloned);
  const budget = LOCAL_CONTEXT_WINDOW_TOKENS - LOCAL_DECODE_RESERVE_TOKENS;
  while (tokens > budget && cloned.length > 2) {
    const dropIdx = cloned.findIndex(
      (m, i) => i !== systemIdx && i !== lastUserIdx && m.role !== "system"
    );
    if (dropIdx < 0) break;
    cloned.splice(dropIdx, 1);
    tokens = estimateMessagesTokens(cloned);
  }

  return cloned;
}

/** Soft fallback if generation fails with no text (not a time-limit stop). */
export function localFailGuidance(modelId: string): string {
  const short = modelId.replace(/-q4f16_1-MLC$/i, "").replace(/-/g, " ");
  return `## Local AI could not finish

No useful answer arrived from **${short}**.

Try one of these:
1. Press **Enable** again on the same model (or switch to **Qwen3.5 Starter** / Light)
2. Start a **New chat** (shorter history leaves more room for the answer)
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

/** True when a streamed reply looks cut off mid-thought (context/length stop). */
export function localReplyLooksCutOff(text: string): boolean {
  const t = text.trim();
  if (t.length < 60) return false;
  if (/[.!?。！？」』）)\]]\s*$/.test(t)) return false;
  if (/^#{1,3}\s+\S+[^\n]*$/m.test(t) && /[.!?。！？]\s*$/.test(t.split("\n").pop() || "")) {
    return false;
  }
  // Ends mid-word / mid-clause / trailing connector — classic length truncation.
  if (/[,:;，、：；\-–—]\s*$/.test(t)) return true;
  if (/\b(and|or|the|a|an|to|of|for|with|where|when|that|which|is|are|was|were|因为|所以|然后|并且|而且|就是)\s*$/i.test(t)) {
    return true;
  }
  if (/[A-Za-z\u4e00-\u9fff]{2,}$/.test(t) && !/\n##\s+\S+\s*$/.test(t)) return true;
  return false;
}

export {
  shouldDisableThinking,
  isHeavyLocalModel,
  isMediumLocalModel,
  isTinyLocalModel,
  localNudgeForModel,
};
