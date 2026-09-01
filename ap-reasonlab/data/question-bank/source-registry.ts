import type { Questionnaire } from "@/lib/types";
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
import { shapeApQuestionnaires } from "@/lib/ap-exam-format";
import managedQuestionnaires from "@/data/.generated/managed-questionnaires.json";

/**
 * The source registry is the only place that assembles AP questionnaire sources.
 * The editor-owned managed-content monolith is sharded before build so application
 * modules no longer parse/import the entire managed-content.json file.
 */
export const shapedQuestionnaires: Questionnaire[] = shapeApQuestionnaires([
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
  ...(managedQuestionnaires as Questionnaire[]),
]);
