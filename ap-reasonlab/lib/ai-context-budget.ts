/** Rough token estimate for Local/cloud context budgeting in AI Toolbox. */

export type ContextBudgetMode = "speed" | "complete";

export function estimateTokens(...parts: string[]): number {
  const chars = parts.reduce((sum, part) => sum + String(part || "").length, 0);
  return Math.max(0, Math.ceil(chars / 4));
}

/**
 * Browser-local models mostly run with a ~4K context. Keep both modes below the
 * old limits so prompt ingestion does not dominate first-token latency.
 */
export function localHistoryWindow(mode: ContextBudgetMode): number {
  return mode === "speed" ? 2 : 4;
}

export function localTurnCap(mode: ContextBudgetMode): number {
  return mode === "speed" ? 600 : 900;
}

export function localUserCap(mode: ContextBudgetMode): number {
  return mode === "speed" ? 2800 : 4200;
}

export function localSiteCap(mode: ContextBudgetMode): number {
  return mode === "speed" ? 1400 : 2200;
}

/** Soft Local context wall (~WebLLM 4096). */
export const LOCAL_CONTEXT_SOFT_LIMIT = 4096;
