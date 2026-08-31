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

// Generate one continuous severe-first window so each later batch keeps a distinct
// generation-index range instead of restarting template parameters at zero.
const batch5To7Window = buildRecoveredApItemsBatch5(
  severeOrderedSets,
  new Set(Object.keys(recoveredApItemsBeforeBatch5)),
  300
);

function sliceRecoveryBatch(start: number, count: number) {
  const ids = batch5To7Window.ids.slice(start, start + count);
  const items: Record<string, QuestionnaireItem> = Object.fromEntries(
    ids.map((id) => [id, batch5To7Window.items[id]])
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

const recoveredApItems = {
  ...recoveredApItemsBeforeBatch6,
  ...apRecoveryBatch6.items,
  ...apRecoveryBatch7.items,
};

export const rawQuestionnaires: Questionnaire[] = shapedQuestionnaires.map((set) => ({
  ...set,
  items: set.items.map((item) => recoveredApItems[item.id] || item),
}));

export const questionnaires: Questionnaire[] = rawQuestionnaires
  .map(normalizeApQuestionnaire)
  .filter((set): set is Questionnaire => Boolean(set));

export const apQuestionBankStats = {
  rawSets: rawQuestionnaires.length,
  publicSets: questionnaires.length,
  rawItems: rawQuestionnaires.reduce((sum, set) => sum + set.items.length, 0),
  publicItems: questionnaires.reduce((sum, set) => sum + set.items.length, 0),
  batch5: {
    deeplyUpgraded: apRecoveryBatch5.ids.length,
    severeMissingAnswer: apRecoveryBatch5.severeMissingAnswer,
    severeStructural: apRecoveryBatch5.severeStructural,
  },
  batch6: {
    deeplyUpgraded: apRecoveryBatch6.ids.length,
    severeMissingAnswer: apRecoveryBatch6.severeMissingAnswer,
    severeStructural: apRecoveryBatch6.severeStructural,
  },
  batch7: {
    deeplyUpgraded: apRecoveryBatch7.ids.length,
    severeMissingAnswer: apRecoveryBatch7.severeMissingAnswer,
    severeStructural: apRecoveryBatch7.severeStructural,
  },
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
