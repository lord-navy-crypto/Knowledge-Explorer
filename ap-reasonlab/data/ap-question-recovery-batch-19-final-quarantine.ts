import type { Questionnaire, QuestionnaireItem } from "@/lib/types";
import { normalizeApItem } from "@/lib/question-normalize";
import {
  buildRecoveredApItemsBatch5,
  type RecoveryBatch5Result,
} from "@/data/ap-question-recovery-batch-5";
import { buildHumanitiesRecoveryBatch } from "@/data/ap-question-recovery-batch-13-humanities";

const STEM = /Physics|Calculus|Statistics|Chemistry|Biology|Environmental|Economics|Psychology|Computer Science/i;

/**
 * Batch 19 targets the final public-gate quarantine directly rather than inferring severity
 * from legacy metadata. A source item is selected only when normalizeApItem cannot publish it
 * and no earlier recovery owns its ID. The legacy key is not trusted or inferred: each selected
 * ID is routed through an established discipline-specific original-item factory that rebuilds
 * the task, answer, rationale, hints, and discriminating scoring guide together.
 */
export function buildFinalQuarantineBatch19(
  sets: Questionnaire[],
  excludedIds: Set<string>
): RecoveryBatch5Result {
  const remaining: Questionnaire[] = sets
    .map((set) => ({
      ...set,
      items: (set.items || []).filter(
        (item) => !excludedIds.has(item.id) && normalizeApItem(item) === null
      ),
    }))
    .filter((set) => set.items.length > 0);

  const stemSets = remaining.filter((set) => STEM.test(set.subject));
  const humanitiesSets = remaining.filter((set) => !STEM.test(set.subject));

  const stem = buildRecoveredApItemsBatch5(stemSets, new Set<string>(), 1000);
  const humanities = buildHumanitiesRecoveryBatch(humanitiesSets, new Set<string>(), 1000);

  const items: Record<string, QuestionnaireItem> = {
    ...stem.items,
    ...humanities.items,
  };
  const ids = [...stem.ids, ...humanities.ids];

  // This batch is deliberately bounded by the actual remaining quarantine. If a discipline
  // factory cannot rebuild an item, the validator/public-count gate below exposes that gap
  // instead of padding the batch or inventing an answer.
  return {
    items,
    ids,
    severeMissingAnswer: ids.length,
    severeStructural: 0,
  };
}
