import type { Questionnaire } from "@/lib/types";
import { normalizeApQuestionnaire } from "@/lib/question-normalize";
import { shapedQuestionnaires } from "@/data/question-bank/source-registry";
import { apRecoveryBatches, recoveredApItems } from "@/data/question-bank/recovery";
import { buildApQuestionBankStats } from "@/data/question-bank/stats";
import { singleItemPracticeSetIds } from "@/data/ap-question-recovery-final";

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
  apRecoveryBatch15,
  apRecoveryBatches,
} from "@/data/question-bank/recovery";

export const rawQuestionnaires: Questionnaire[] = shapedQuestionnaires.map((set) => ({
  ...set,
  singleItemPractice: set.singleItemPractice || singleItemPracticeSetIds.has(set.id),
  items: set.items.map((item) => recoveredApItems[item.id] || item),
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
