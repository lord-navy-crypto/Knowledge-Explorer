import type { Questionnaire, QuestionnaireItem } from "@/lib/types";
import { buildRecoveredApItemsBatch5, type RecoveryBatch5Result } from "@/data/ap-question-recovery-batch-5";

const SUPPORTED = /Physics|Calculus|Statistics|Chemistry|Biology|Environmental|Economics|Psychology|Computer Science/i;

export function buildApQualityBatch21(
  sets: Questionnaire[],
  excludedIds: ReadonlySet<string>,
  target = 100
): RecoveryBatch5Result {
  const forcedSets: Questionnaire[] = [];
  let remaining = target;

  for (const set of sets) {
    if (remaining <= 0) break;
    if (!SUPPORTED.test(set.subject || "")) continue;
    const selected: QuestionnaireItem[] = [];
    for (const item of set.items || []) {
      if (remaining <= 0) break;
      if (excludedIds.has(item.id)) continue;
      selected.push({ ...item, answerKey: undefined, blankAnswers: undefined, mcqAnswer: undefined });
      remaining -= 1;
    }
    if (selected.length) forcedSets.push({ ...set, items: selected });
  }

  if (remaining !== 0) throw new Error(`AP quality batch 21 short by ${remaining} candidates.`);

  const rebuilt = buildRecoveredApItemsBatch5(forcedSets, new Set<string>(), target);
  if (rebuilt.ids.length !== target || Object.keys(rebuilt.items).length !== target) {
    throw new Error(`AP quality batch 21 expected exactly ${target} deep rewrites.`);
  }
  if (rebuilt.ids.some((id) => excludedIds.has(id))) {
    throw new Error("AP quality batch 21 overlapped a prior Phase-3 quality batch.");
  }
  return rebuilt;
}
