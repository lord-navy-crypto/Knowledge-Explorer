import type { Questionnaire } from "@/lib/types";
import { normalizeApQuestionnaire } from "@/lib/question-normalize";
import { shapedQuestionnaires } from "@/data/question-bank/source-registry";
import {
  apRecoveryBatches as apRecoveryBatchesBefore19,
  recoveredApItems,
} from "@/data/question-bank/recovery";
import { buildFinalQuarantineBatch19 } from "@/data/ap-question-recovery-batch-19-final-quarantine";
import { buildApQuestionBankStats } from "@/data/question-bank/stats";

export {
  apRecoveryBatch5,
  apRecoveryBatch6,
  apRecoveryBatch7,
  apRecoveryBatch8,
  apRecoveryBatch9,
  apRecoveryBatch10,
  apRecoveryBatch11,
  apRecoveryBatch12,
  apRecoveryBatch13,
  apRecoveryBatch14,
} from "@/data/question-bank/recovery";

export const apRecoveryBatch19 = buildFinalQuarantineBatch19(
  shapedQuestionnaires,
  new Set(Object.keys(recoveredApItems))
);

export const apRecoveryBatches = [
  ...apRecoveryBatchesBefore19,
  { label: "19", batch: apRecoveryBatch19 },
] as const;

const recoveredApItemsThroughBatch19 = {
  ...recoveredApItems,
  ...apRecoveryBatch19.items,
};

export const rawQuestionnaires: Questionnaire[] = shapedQuestionnaires.map((set) => ({
  ...set,
  items: set.items.map((item) => recoveredApItemsThroughBatch19[item.id] || item),
}));

export const questionnaires: Questionnaire[] = rawQuestionnaires
  .map(normalizeApQuestionnaire)
  .filter((set): set is Questionnaire => Boolean(set));

export const apQuestionBankStats = buildApQuestionBankStats(
  rawQuestionnaires,
  questionnaires,
  apRecoveryBatches
);

export function getQuestionnaireById(id: string): Questionnaire | undefined {
  return questionnaires.find((q) => q.id === id);
}

export function getQuestionnairesBySubject(subject: string): Questionnaire[] {
  return questionnaires.filter((q) => q.subject === subject);
}

export function getSubjectsFromQuestionnaires(): string[] {
  return [...new Set(questionnaires.map((q) => q.subject))];
}
