import type { Questionnaire, QuestionnaireItem } from "@/lib/types";
import { shapedQuestionnaires } from "@/data/question-bank/source-registry";
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
import { finalRecoveryBatch, finalRecoveryItems } from "@/data/ap-question-recovery-final";

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
export const apRecoveryBatch8 = sliceRecoveryBatch(apRecoveryBatch5.ids.length + apRecoveryBatch6.ids.length + apRecoveryBatch7.ids.length, 100);
export const apRecoveryBatch9 = sliceRecoveryBatch(apRecoveryBatch5.ids.length + apRecoveryBatch6.ids.length + apRecoveryBatch7.ids.length + apRecoveryBatch8.ids.length, 100);
export const apRecoveryBatch10 = sliceRecoveryBatch(apRecoveryBatch5.ids.length + apRecoveryBatch6.ids.length + apRecoveryBatch7.ids.length + apRecoveryBatch8.ids.length + apRecoveryBatch9.ids.length, 100);
export const apRecoveryBatch11 = sliceRecoveryBatch(apRecoveryBatch5.ids.length + apRecoveryBatch6.ids.length + apRecoveryBatch7.ids.length + apRecoveryBatch8.ids.length + apRecoveryBatch9.ids.length + apRecoveryBatch10.ids.length, 100);
export const apRecoveryBatch12 = sliceRecoveryBatch(apRecoveryBatch5.ids.length + apRecoveryBatch6.ids.length + apRecoveryBatch7.ids.length + apRecoveryBatch8.ids.length + apRecoveryBatch9.ids.length + apRecoveryBatch10.ids.length + apRecoveryBatch11.ids.length, 100);

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

export const apRecoveryBatch13 = buildHumanitiesRecoveryBatch(
  shapedQuestionnaires,
  new Set(Object.keys(recoveredApItemsThroughBatch12)),
  75
);

const recoveredApItemsThroughBatch13 = {
  ...recoveredApItemsThroughBatch12,
  ...apRecoveryBatch13.items,
};

export const apRecoveryBatch14 = buildHumanitiesRecoveryBatch(
  shapedQuestionnaires,
  new Set(Object.keys(recoveredApItemsThroughBatch13)),
  75
);

export const apRecoveryBatch15 = finalRecoveryBatch;

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
  { label: "14", batch: apRecoveryBatch14 },
  { label: "15", batch: apRecoveryBatch15 },
] as const;

export const recoveredApItems = {
  ...recoveredApItemsThroughBatch13,
  ...apRecoveryBatch14.items,
  ...finalRecoveryItems,
};
