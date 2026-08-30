import { Questionnaire } from "@/lib/types";
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
import { shapeApQuestionnaires } from "@/lib/ap-exam-format";
import { normalizeApQuestionnaire } from "@/lib/question-normalize";
import managed from "@/data/managed-content.json";

/**
 * Generated original practice only. Do not paste College Board exam text or answer keys verbatim.
 *
 * IMPORTANT: Every historical source file is aggregated here and passes through THREE layers:
 * 1) shapeApQuestionnaires — maps the item to the appropriate AP section/task family.
 * 2) audited recovery registries — replace only specifically reviewed legacy items in place.
 * 3) normalizeApQuestionnaire — enforces answer/reference/rubric/response-mode quality rules.
 *
 * An unresolved MCQ with no defensible key is quarantined instead of being shown to learners.
 * Legacy items that are useful but not strong enough to claim current-exam fidelity remain visible
 * only as clearly labeled Skill drills.
 */

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

const recoveredApItems = {
  ...recoveredApItemsBatch1,
  ...recoveredApItemsBatch2,
  ...recoveredApItemsBatch2Fix,
  ...recoveredApItemsBatch3,
  ...recoveredApItemsBatch4,
  ...recoveredApItemsBatch4C,
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
