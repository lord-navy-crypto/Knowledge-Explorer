import { Questionnaire, QuestionnaireItem } from "@/lib/types";
import { macroQuestionnaires } from "@/data/ap-macro";
import { microQuestionnaires } from "@/data/ap-micro";
import { physics2Questionnaires } from "@/data/ap-physics2";
import { statsQuestionnaires } from "@/data/ap-stats";
import { humanitiesQuestionnaires } from "@/data/ap-humanities-practice";
import { apHumanitiesSetC, apHumanitiesSetD } from "@/data/ap-humanities-set-c-d";
import { apHumanitiesSetE } from "@/data/ap-humanities-set-e";
import { apPracticeExpansion } from "@/data/ap-practice-expansion";
import { apPracticeBySubject } from "@/data/ap-practice-by-subject";
import { apPracticeSetB } from "@/data/ap-practice-set-b";
import { apPracticeSetC } from "@/data/ap-practice-set-c";
import { apPracticeSetD } from "@/data/ap-practice-set-d";
import { apCedPractice } from "@/data/ap-ced-practice";
import { apEnglishExamFormatQuestionnaires } from "@/data/ap-english-exam-format";
import { apExamFormatAllQuestionnaires } from "@/data/ap-exam-format-all";
import { apInlineQuestionnaires } from "@/data/ap-questionnaires-inline";
import { apPracticeDrillQuestionnaires } from "@/data/ap-practice-drills";
import { apPracticeFullStemQuestionnaires } from "@/data/ap-practice-full-stems";
import { recoveredApItemsBatch1 } from "@/data/ap-question-recovery-batch-1";
import { recoveredApItemsBatch2 } from "@/data/ap-question-recovery-batch-2";
import { recoveredApItemsBatch2Fix } from "@/data/ap-question-recovery-batch-2-fix";
import { recoveredApItemsBatch3 } from "@/data/ap-question-recovery-batch-3";
import { recoveredApItemsBatch4 } from "@/data/ap-question-recovery-batch-4";
import { recoveredApItemsBatch4C } from "@/data/ap-question-recovery-batch-4c";
import { recoveredApItemsBatch4Fix } from "@/data/ap-question-recovery-batch-4-fix";
import { recoveredApItemsBatch4CD } from "@/data/ap-question-recovery-batch-4cd";
import { recoveredApItemsBatch4EMcq } from "@/data/ap-question-recovery-batch-4e-mcq";
import { recoveredApItemsBatch4EFrq } from "@/data/ap-question-recovery-batch-4e-frq";
import { recoveredApItemsBatch4EPlus } from "@/data/ap-question-recovery-batch-4e-plus";
import { recoveredApItemsBatch4FinalFix } from "@/data/ap-question-recovery-batch-4-final-fix";
import { buildRecoveredApItemsBatch5 } from "@/data/ap-question-recovery-batch-5";
import { buildHumanitiesRecoveryBatch } from "@/data/ap-question-recovery-batch-13-humanities";
import { shapeApQuestionnaires } from "@/lib/ap-exam-format";
import { normalizeApQuestionnaire } from "@/lib/question-normalize";
import managed from "@/data/managed-content.json";

const shapedQuestionnaires: Questionnaire[] = shapeApQuestionnaires([
  ...apInlineQuestionnaires,
  ...microQuestionnaires,
  ...macroQuestionnaires,
  ...physics2Questionnaires,
  ...statsQuestionnaires,
  ...humanitiesQuestionnaires,
  ...apHumanitiesSetC,
  ...apHumanitiesSetD,
  ...apHumanitiesSetE,
  ...apPracticeExpansion,
  ...apPracticeBySubject,
  ...apPracticeSetB,
  ...apPracticeSetC,
  ...apPracticeSetD,
  ...apCedPractice,
  ...apEnglishExamFormatQuestionnaires,
  ...apExamFormatAllQuestionnaires,
  ...apPracticeDrillQuestionnaires,
  ...apPracticeFullStemQuestionnaires,
  ...(((managed as { questionnaires?: Questionnaire[] }).questionnaires || []) as Questionnaire[]),
]);

const recoveredApItemsBeforeBatch5 = {
  ...recoveredApItemsBatch1,
  ...recoveredApItemsBatch2,
  ...recoveredApItemsBatch2Fix,
  ...recoveredApItemsBatch3,
  ...recoveredApItemsBatch4,
  ...recoveredApItemsBatch4C,
  ...recoveredApItemsBatch4Fix,
  ...recoveredApItemsBatch4CD,
  ...recoveredApItemsBatch4EMcq,
  ...recoveredApItemsBatch4EFrq,
  ...recoveredApItemsBatch4EPlus,
  ...recoveredApItemsBatch4FinalFix,
};

function hasSourceDefensibleAnswer(item: QuestionnaireItem): boolean {
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

const missingAnswerSets: Questionnaire[] = shapedQuestionnaires
  .map((set) => ({ ...set, items: set.items.filter((item) => !hasSourceDefensibleAnswer(item)) }))
  .filter((set) => set.items.length > 0);
const structuralSets: Questionnaire[] = shapedQuestionnaires
  .map((set) => ({ ...set, items: set.items.filter(hasSourceDefensibleAnswer) }))
  .filter((set) => set.items.length > 0);
const severeOrderedSets = [...missingAnswerSets, ...structuralSets];
const sourceItemById = new Map<string, QuestionnaireItem>();
for (const set of shapedQuestionnaires) {
  for (const item of set.items) sourceItemById.set(item.id, item);
}

export const apRecoveryBatch5 = buildRecoveredApItemsBatch5(
  severeOrderedSets,
  new Set(Object.keys(recoveredApItemsBeforeBatch5)),
  100
);

const recoveredApItemsBeforeBatch6 = {
  ...recoveredApItemsBeforeBatch5,
  ...apRecoveryBatch5.items,
};

// Generate one continuous severe-first window so each later STEM/social-science batch
// keeps a distinct generation-index range instead of restarting template parameters.
const batch5To12Window = buildRecoveredApItemsBatch5(
  severeOrderedSets,
  new Set(Object.keys(recoveredApItemsBeforeBatch5)),
  800
);

function sliceRecoveryBatch(start: number, count: number) {
  const ids = batch5To12Window.ids.slice(start, start + count);
  const items: Record<string, QuestionnaireItem> = Object.fromEntries(
    ids.map((id) => [id, batch5To12Window.items[id]])
  );
  const severeMissingAnswer = ids.filter((id) => {
    const source = sourceItemById.get(id);
    return source ? !hasSourceDefensibleAnswer(source) : false;
  }).length;
  return {
    items,
    ids,
    severeMissingAnswer,
    severeStructural: ids.length - severeMissingAnswer,
  };
}

export const apRecoveryBatch6 = sliceRecoveryBatch(apRecoveryBatch5.ids.length, 100);
export const apRecoveryBatch7 = sliceRecoveryBatch(apRecoveryBatch5.ids.length + apRecoveryBatch6.ids.length, 100);
export const apRecoveryBatch8 = sliceRecoveryBatch(
  apRecoveryBatch5.ids.length + apRecoveryBatch6.ids.length + apRecoveryBatch7.ids.length,
  100
);
export const apRecoveryBatch9 = sliceRecoveryBatch(
  apRecoveryBatch5.ids.length + apRecoveryBatch6.ids.length + apRecoveryBatch7.ids.length + apRecoveryBatch8.ids.length,
  100
);
export const apRecoveryBatch10 = sliceRecoveryBatch(
  apRecoveryBatch5.ids.length + apRecoveryBatch6.ids.length + apRecoveryBatch7.ids.length + apRecoveryBatch8.ids.length + apRecoveryBatch9.ids.length,
  100
);
export const apRecoveryBatch11 = sliceRecoveryBatch(
  apRecoveryBatch5.ids.length + apRecoveryBatch6.ids.length + apRecoveryBatch7.ids.length + apRecoveryBatch8.ids.length + apRecoveryBatch9.ids.length + apRecoveryBatch10.ids.length,
  100
);
export const apRecoveryBatch12 = sliceRecoveryBatch(
  apRecoveryBatch5.ids.length + apRecoveryBatch6.ids.length + apRecoveryBatch7.ids.length + apRecoveryBatch8.ids.length + apRecoveryBatch9.ids.length + apRecoveryBatch10.ids.length + apRecoveryBatch11.ids.length,
  100
);

const recoveredApItemsThroughBatch12 = {
  ...recoveredApItemsBeforeBatch6,
  ...apRecoveryBatch6.items,
  ...apRecoveryBatch7.items,
  ...apRecoveryBatch8.items,
  ...apRecoveryBatch9.items,
  ...apRecoveryBatch10.items,
  ...apRecoveryBatch11.items,
  ...apRecoveryBatch12.items,
};

// Batch 13 deliberately targets the remaining humanities/history/English thin FRQs.
// It uses a separate subject-aware generator so the already-published Batch 5–12
// candidate order and replacements stay byte-for-byte stable.
export const apRecoveryBatch13 = buildHumanitiesRecoveryBatch(
  shapedQuestionnaires,
  new Set(Object.keys(recoveredApItemsThroughBatch12)),
  75
);

export const apRecoveryBatches = [
  { label: "5", batch: apRecoveryBatch5 },
  { label: "6", batch: apRecoveryBatch6 },
  { label: "7", batch: apRecoveryBatch7 },
  { label: "8", batch: apRecoveryBatch8 },
  { label: "9", batch: apRecoveryBatch9 },
  { label: "10", batch: apRecoveryBatch10 },
  { label: "11", batch: apRecoveryBatch11 },
  { label: "12", batch: apRecoveryBatch12 },
  { label: "13", batch: apRecoveryBatch13 },
] as const;

const recoveredApItems = {
  ...recoveredApItemsThroughBatch12,
  ...apRecoveryBatch13.items,
};

export const rawQuestionnaires: Questionnaire[] = shapedQuestionnaires.map((set) => ({
  ...set,
  items: set.items.map((item) => recoveredApItems[item.id] || item),
}));

export const questionnaires: Questionnaire[] = rawQuestionnaires
  .map(normalizeApQuestionnaire)
  .filter((set): set is Questionnaire => Boolean(set));

const recoveryStats = Object.fromEntries(
  apRecoveryBatches.map(({ label, batch }) => [
    `batch${label}`,
    {
      deeplyUpgraded: batch.ids.length,
      severeMissingAnswer: batch.severeMissingAnswer,
      severeStructural: batch.severeStructural,
    },
  ])
);

export const apQuestionBankStats = {
  rawSets: rawQuestionnaires.length,
  publicSets: questionnaires.length,
  rawItems: rawQuestionnaires.reduce((sum, set) => sum + set.items.length, 0),
  publicItems: questionnaires.reduce((sum, set) => sum + set.items.length, 0),
  ...recoveryStats,
};

export function getQuestionnaireById(id: string): Questionnaire | undefined {
  return questionnaires.find((q) => q.id === id);
}

export function getQuestionnairesBySubject(subject: string): Questionnaire[] {
  return questionnaires.filter((q) => q.subject === subject);
}

export function getSubjectsFromQuestionnaires(): string[] {
  return [...new Set(questionnaires.map((q) => q.subject))];
}
