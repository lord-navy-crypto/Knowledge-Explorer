import type { Questionnaire, QuestionnaireItem } from "@/lib/types";
import {
  buildRecoveredApItemsBatch5,
  type RecoveryBatch5Result,
} from "@/data/ap-question-recovery-batch-5";

function hasDefensibleSourceAnswer(item: QuestionnaireItem): boolean {
  if (item.answerKey?.trim()) return true;
  if (item.blankAnswers?.some((answer) => answer.trim())) return true;
  return Boolean(
    item.format === "mcq" &&
      item.choices?.length &&
      Number.isInteger(item.mcqAnswer) &&
      Number(item.mcqAnswer) >= 0 &&
      Number(item.mcqAnswer) < item.choices.length
  );
}

/**
 * Batch 18 continues issue #236 at the highest remaining severity level.
 *
 * It targets still-unrecovered source items with no defensible complete answer after Batch 17.
 * Historical IDs are retained only for traceability. The legacy key is never guessed or copied:
 * each selected item is replaced as a coherent original assessment through the proven Batch 5
 * discipline factories, rebuilding prompt/stimulus, response mode, reference answer, rationale,
 * hints, and scoring guide together. The resulting tasks require multi-step reasoning and include
 * diagnostic misconception or boundary-condition checks where appropriate.
 */
export function buildPublicDepthBatch18(
  sets: Questionnaire[],
  excludedIds: Set<string>,
  target = 100
): RecoveryBatch5Result {
  const severeQuarantineSets: Questionnaire[] = sets
    .map((set) => ({
      ...set,
      items: (set.items || []).filter(
        (item) => !excludedIds.has(item.id) && !hasDefensibleSourceAnswer(item)
      ),
    }))
    .filter((set) => set.items.length > 0);

  return buildRecoveredApItemsBatch5(
    severeQuarantineSets,
    new Set<string>(),
    target
  );
}
