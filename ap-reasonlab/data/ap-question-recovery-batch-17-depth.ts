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
 * Batch 17 continues issue #236 at the highest remaining severity level.
 *
 * The validator can report zero warnings while still quarantining source items for which no
 * defensible complete answer exists. This batch selects only those unrecovered quarantine
 * candidates, preserves each historical ID for traceability, and replaces the entire task
 * through the proven answer-independent Batch 5 discipline factories. No legacy key is
 * inferred or propagated: prompt, response mode, answer, rationale, hints, and scoring guide
 * are generated together as a coherent multi-step assessment with misconception/boundary
 * checks where appropriate.
 */
export function buildPublicDepthBatch17(
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
