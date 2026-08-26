/** Rough token estimate for Local/cloud context budgeting in AI Toolbox. */

export type ContextBudgetMode = "speed" | "complete";

export function estimateTokens(...parts: string[]): number {
  const chars = parts.reduce((sum, part) => sum + String(part || "").length, 0);
  return Math.max(0, Math.ceil(chars / 4));
}

export function localHistoryWindow(mode: ContextBudgetMode): number {
  return mode === "speed" ? 2 : 6;
}

export function localTurnCap(mode: ContextBudgetMode): number {
  return mode === "speed" ? 700 : 1200;
}

export function localUserCap(mode: ContextBudgetMode): number {
  return mode === "speed" ? 3200 : 5500;
}

export function localSiteCap(mode: ContextBudgetMode): number {
  return mode === "speed" ? 1800 : 3200;
}

/** Soft Local context wall (~WebLLM 4096). */
export const LOCAL_CONTEXT_SOFT_LIMIT = 4096;
