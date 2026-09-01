import type { Questionnaire } from "@/lib/types";

type RecoveryBatchLike = {
  ids: string[];
  severeMissingAnswer: number;
  severeStructural: number;
};

export function buildApQuestionBankStats(
  rawQuestionnaires: Questionnaire[],
  questionnaires: Questionnaire[],
  recoveryBatches: readonly { label: string; batch: RecoveryBatchLike }[]
) {
  const recoveryStats = Object.fromEntries(
    recoveryBatches.map(({ label, batch }) => [
      `batch${label}`,
      {
        deeplyUpgraded: batch.ids.length,
        severeMissingAnswer: batch.severeMissingAnswer,
        severeStructural: batch.severeStructural,
      },
    ])
  );

  return {
    rawSets: rawQuestionnaires.length,
    publicSets: questionnaires.length,
    rawItems: rawQuestionnaires.reduce((sum, set) => sum + set.items.length, 0),
    publicItems: questionnaires.reduce((sum, set) => sum + set.items.length, 0),
    ...recoveryStats,
  };
}
