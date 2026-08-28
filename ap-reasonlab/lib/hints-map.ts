import { asStringList } from "@/lib/ai-client";
import {
  extractDollarMathToEquations,
  normalizeEquationItems,
  type AiEquation,
} from "@/lib/ai-latex-accuracy";

function liftList(items: string[]) {
  const out: string[] = [];
  const extra: AiEquation[] = [];
  for (const item of items) {
    const lifted = extractDollarMathToEquations(item);
    if (lifted.prose.trim()) out.push(lifted.prose.trim());
    extra.push(...lifted.equations);
  }
  return { out, extra };
}

/** Normalize raw hint-process JSON from the model into API response shape. */
export function mapHintsResponse(
  data: Record<string, unknown>,
  meta: { note: string; model?: string; provider?: string }
) {
  const equations = normalizeEquationItems(data.equations).slice(0, 8);
  const hints = liftList(asStringList(data.hints).slice(0, 6));
  const knowns = liftList(asStringList(data.knownsUnknowns).slice(0, 10));
  const checks = liftList(asStringList(data.checkpoints).slice(0, 8));
  const process = liftList(asStringList(data.processOutline).slice(0, 8));
  const partial = liftList(asStringList(data.workedPartial).slice(0, 6));
  const keyFormulas = liftList(asStringList(data.keyFormulas).slice(0, 8));
  const allEq = normalizeEquationItems([
    ...equations,
    ...hints.extra,
    ...knowns.extra,
    ...checks.extra,
    ...process.extra,
    ...partial.extra,
    ...keyFormulas.extra,
  ]).slice(0, 12);

  return {
    hints: hints.out,
    equations: allEq,
    keyFormulas: keyFormulas.out,
    knownsUnknowns: knowns.out,
    checkpoints: checks.out,
    processOutline: process.out,
    workedPartial: partial.out,
    aiMayBeWrong:
      String(data.aiMayBeWrong || "").trim() ||
      "AI may make mistakes. Verify with your textbook or teacher.",
    note: meta.note,
    model: meta.model,
    provider: meta.provider,
  };
}
