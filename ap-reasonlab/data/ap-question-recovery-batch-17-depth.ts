import type { Questionnaire, QuestionnaireItem } from "@/lib/types";
import {
  buildRecoveredApItemsBatch5,
  type RecoveryBatch5Result,
} from "@/data/ap-question-recovery-batch-5";

/**
 * Batch 17 starts the post-recovery depth pass tracked in issue #236.
 *
 * Previous batches eliminated quarantine and validator warnings. This batch deliberately
 * selects public source items that have never been covered by a recovery overlay and sends
 * them through the same original, answer-independent deep-rewrite factories proven in the
 * science/economics/psychology/computing recovery batches.
 *
 * We blank legacy answer fields only in an in-memory candidate view so the factory never
 * trusts or propagates a legacy key. The source registry itself is untouched. Each selected
 * legacy ID is retained solely for traceability; the resulting prompt, answer, rationale,
 * hints, response mode, and scoring guide are all newly generated as one coherent task.
 */
export function buildPublicDepthBatch17(
  sets: Questionnaire[],
  excludedIds: Set<string>,
  target = 100
): RecoveryBatch5Result {
  const unseenPublicSets: Questionnaire[] = sets
    .map((set) => ({
      ...set,
      items: (set.items || [])
        .filter((item) => !excludedIds.has(item.id))
        .map((item): QuestionnaireItem => ({
          ...item,
          // Force answer-independent reconstruction. These fields are modified only in the
          // temporary candidate view passed to the deep-rewrite factory.
          answerKey: undefined,
          blankAnswers: undefined,
          mcqAnswer: undefined,
        })),
    }))
    .filter((set) => set.items.length > 0);

  const rebuilt = buildRecoveredApItemsBatch5(unseenPublicSets, new Set<string>(), target);

  // These are depth-pass items, not newly discovered severe defects. Keep the shared batch
  // shape for stats while avoiding false severe-defect accounting.
  return {
    ...rebuilt,
    severeMissingAnswer: 0,
    severeStructural: 0,
  };
}
