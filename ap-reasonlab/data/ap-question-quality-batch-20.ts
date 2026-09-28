import type { Questionnaire, QuestionnaireItem } from "@/lib/types";
import { buildRecoveredApItemsBatch5, type RecoveryBatch5Result } from "@/data/ap-question-recovery-batch-5";

const SUPPORTED = /Physics|Calculus|Statistics|Chemistry|Biology|Environmental|Economics|Psychology|Computer Science/i;

/**
 * Phase-3 quality batch 20.
 *
 * Severe public-gate quarantine is already zero. This pass deliberately selects 100
 * already-public STEM items and sends them through the established discipline-specific
 * deep-rewrite factories. Existing answer fields are removed before selection so the
 * factory cannot inherit or infer a legacy key. The historical item ID is preserved.
 *
 * The resulting tasks require multi-step calculation/evidence, misconception diagnosis,
 * a boundary/model check, a complete reference response, and a four-point discriminating
 * rubric. This is a substantive assessment replacement, not metadata normalization.
 */
export function buildApQualityBatch20(sets: Questionnaire[], target = 100): RecoveryBatch5Result {
  const forcedSets: Questionnaire[] = [];
  let remaining = target;

  for (const set of sets) {
    if (remaining <= 0) break;
    if (!SUPPORTED.test(set.subject || "")) continue;

    const selected: QuestionnaireItem[] = [];
    for (const item of set.items || []) {
      if (remaining <= 0) break;
      selected.push({
        ...item,
        answerKey: undefined,
        blankAnswers: undefined,
        mcqAnswer: undefined,
      });
      remaining -= 1;
    }
    if (selected.length) forcedSets.push({ ...set, items: selected });
  }

  if (remaining !== 0) {
    throw new Error(`AP quality batch 20 expected ${target} public STEM candidates but was short by ${remaining}.`);
  }

  const rebuilt = buildRecoveredApItemsBatch5(forcedSets, new Set<string>(), target);
  if (rebuilt.ids.length !== target || Object.keys(rebuilt.items).length !== target) {
    throw new Error(`AP quality batch 20 expected exactly ${target} deep rewrites.`);
  }
  return rebuilt;
}
