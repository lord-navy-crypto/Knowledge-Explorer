import type { Questionnaire, QuestionnaireItem } from "@/lib/types";
import { normalizeApItem } from "@/lib/question-normalize";
import {
  buildRecoveredApItemsBatch5,
  type RecoveryBatch5Result,
} from "@/data/ap-question-recovery-batch-5";
import { buildHumanitiesRecoveryBatch } from "@/data/ap-question-recovery-batch-13-humanities";

const STEM = /Physics|Calculus|Statistics|Chemistry|Biology|Environmental|Economics|Psychology|Computer Science/i;

function forceDeepRewriteCandidate(item: QuestionnaireItem): QuestionnaireItem {
  // The source has already failed the public gate. Remove legacy answer fields before routing so
  // the recovery factory cannot accidentally treat an ambiguous/unparseable key as authoritative.
  return {
    ...item,
    answerKey: undefined,
    blankAnswers: undefined,
    mcqAnswer: undefined,
  };
}

/**
 * Batch 19 targets the final public-gate quarantine directly. Historical IDs are retained only
 * for traceability; unsupported legacy keys are never inferred. Each quarantined ID is converted
 * into a forced deep-rewrite candidate and rebuilt by the established discipline factory.
 */
export function buildFinalQuarantineBatch19(
  sets: Questionnaire[],
  excludedIds: Set<string>
): RecoveryBatch5Result {
  const remaining: Questionnaire[] = sets
    .map((set) => ({
      ...set,
      items: (set.items || [])
        .filter((item) => !excludedIds.has(item.id) && normalizeApItem(item) === null)
        .map(forceDeepRewriteCandidate),
    }))
    .filter((set) => set.items.length > 0);

  const stemSets = remaining.filter((set) => STEM.test(set.subject));
  const humanitiesSets = remaining.filter((set) => !STEM.test(set.subject));
  const stemCount = stemSets.reduce((sum, set) => sum + set.items.length, 0);
  const humanitiesCount = humanitiesSets.reduce((sum, set) => sum + set.items.length, 0);

  const stem = stemCount
    ? buildRecoveredApItemsBatch5(stemSets, new Set<string>(), stemCount)
    : { items: {}, ids: [], severeMissingAnswer: 0, severeStructural: 0 };
  const humanities = humanitiesCount
    ? buildHumanitiesRecoveryBatch(humanitiesSets, new Set<string>(), humanitiesCount)
    : { items: {}, ids: [], severeMissingAnswer: 0, severeStructural: 0 };

  const items: Record<string, QuestionnaireItem> = { ...stem.items, ...humanities.items };
  const ids = [...stem.ids, ...humanities.ids];
  const expected = stemCount + humanitiesCount;
  if (ids.length !== expected) {
    throw new Error(`Batch 19 expected to rebuild all ${expected} final-quarantine items but rebuilt ${ids.length}.`);
  }

  return {
    items,
    ids,
    severeMissingAnswer: ids.length,
    severeStructural: 0,
  };
}
