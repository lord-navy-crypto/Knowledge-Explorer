import { extraSatQuestions, extraToeflQuestions } from "./english-questions-extra";
import { curatedSatQuestions, curatedToeflQuestions } from "./english-questions-curated";
import {
  curatedExtendedSatQuestions,
  curatedExtendedToeflQuestions,
} from "./english-questions-curated-extended";
import { hardSatQuestions, hardToeflQuestions } from "./english-questions-hard";
import { authenticToeflQuestions } from "./english-questions-authentic-toefl";
import { authenticSatQuestions } from "./english-questions-authentic-sat";
import { coreSatQuestions, coreToeflQuestions } from "./english-questions-core";
import { recoveredEnglishItemsBatch1 } from "./english-question-recovery-batch-1";
import { recoveredEnglishItemsBatch2A } from "./english-question-recovery-batch-2a";
import { recoveredEnglishItemsBatch2B } from "./english-question-recovery-batch-2b";
import { recoveredEnglishItemsBatch2BFix } from "./english-question-recovery-batch-2b-fix";
import { withOfficialSkill } from "@/lib/english-exam-format";
import { shapeOfficialEnglishQuestion } from "@/lib/english-official-shape";
import {
  isPublicReadyEnglishQuestion,
  normalizeEnglishQuestion,
} from "@/lib/question-normalize";
import type { AssessmentAuthenticity, ResponseMode } from "@/lib/types";

export type EnglishPracticeQuestion = {
  id: string;
  skill: string;
  prompt: string;
  choices: string[];
  answer: number;
  explanation: string;
  /** Short stimulus: Digital SAT passage, TOEFL notice, transcript, email scenario. */
  passage?: string;
  /** Current-exam-shaped original item versus intentionally simplified skill practice. */
  authenticity?: AssessmentAuthenticity;
  /** What the real task asks the learner to produce. */
  responseMode?: ResponseMode;
  /** Original model response/reference answer for productive TOEFL tasks. */
  referenceAnswer?: string;
  /** Human-readable criteria used to judge a speaking/writing response. */
  scoringGuide?: string[];
  /** Current official task family, e.g. Read an Academic Passage or Take an Interview. */
  taskType?: string;
};

const recoveredEnglishItems: Record<string, EnglishPracticeQuestion> = {
  ...recoveredEnglishItemsBatch1,
  ...recoveredEnglishItemsBatch2A,
  ...recoveredEnglishItemsBatch2B,
  ...recoveredEnglishItemsBatch2BFix,
};

function withExamSkills(
  exam: "toefl" | "sat",
  items: EnglishPracticeQuestion[]
): EnglishPracticeQuestion[] {
  return items
    .map((item) => recoveredEnglishItems[item.id] || item)
    .map((item) =>
      normalizeEnglishQuestion(
        exam,
        shapeOfficialEnglishQuestion(exam, withOfficialSkill(exam, item))
      )
    )
    .filter(isPublicReadyEnglishQuestion);
}

/** Exam tracks — exam-style practice questions and uploaded practice sets. */
export const englishExamAreas = [
  {
    href: "/english/toefl",
    title: "TOEFL",
    icon: "T",
    description:
      "Current TOEFL iBT task families plus an in-site bank of original items. Exam-style tasks are separated from simplified skill drills, and productive tasks use typed or spoken responses instead of fake MCQ scoring.",
  },
  {
    href: "/english/sat",
    title: "SAT",
    icon: "S",
    description:
      "Digital SAT Reading and Writing domains + Math, with original short-passage, data, selected-response, and student-produced-response practice.",
  },
] as const;

/** Core English skills — language ability, separate from exam practice sets. */
export const englishSkillAreas = [
  {
    href: "/english/vocabulary",
    title: "Vocabulary",
    icon: "V",
    description: "Word meaning, families, collocations, and active recall.",
  },
  {
    href: "/english/grammar",
    title: "Grammar & Sentences",
    icon: "G",
    description: "Sentence control, clauses, transitions, and revision.",
  },
] as const;

/** Local practice tools that support skills (not exam practice sets). */
export const englishPracticeTools = [
  {
    href: "/tools/vocab-book",
    title: "My vocab book",
    description: "Personal flashcards saved in this browser.",
  },
  {
    href: "/tools/speech-to-text",
    title: "Speech to text",
    description: "Speak, record, or upload audio → English transcript.",
  },
  {
    href: "/tools/dictation",
    title: "Dictation",
    description: "Listen and type to train listening + spelling.",
  },
  {
    href: "/tools/paraphrase",
    title: "Paraphrase compare",
    description: "Check rewrite overlap for safer paraphrasing.",
  },
  {
    href: "/tools/reading-highlight",
    title: "Reading highlights",
    description: "Mark passages and keep margin notes locally.",
  },
] as const;

/** Flat list for search / legacy consumers. */
export const englishAreas = [
  ...englishExamAreas,
  ...englishSkillAreas,
  {
    href: "/english/ai",
    title: "English AI Tutor",
    icon: "AI",
    description: "Focused English tutor in AI Toolbox — writing, vocab, and strategy feedback.",
  },
] as const;

export const academicVocabulary = [
  { word: "analyze", family: "analysis · analytical", meaning: "examine parts and relationships", collocation: "analyze evidence", example: "The report analyzes how rainfall affects crop yield." },
  { word: "infer", family: "inference · inferential", meaning: "reach a conclusion from evidence", collocation: "infer from context", example: "From the empty nests, researchers inferred that the birds had migrated." },
  { word: "substantiate", family: "substantiation", meaning: "support a claim with evidence", collocation: "substantiate a claim", example: "One observation cannot substantiate a broad conclusion." },
  { word: "concede", family: "concession", meaning: "acknowledge that a point is valid", collocation: "concede a limitation", example: "The author concedes that the sample was small." },
  { word: "derive", family: "derivation · derivative", meaning: "obtain something from a source", collocation: "derive from", example: "The estimate was derived from three independent measurements." },
  { word: "coherent", family: "coherence · coherently", meaning: "logical and easy to follow", collocation: "coherent argument", example: "Clear transitions make the explanation more coherent." },
  { word: "ambiguous", family: "ambiguity · ambiguously", meaning: "open to more than one interpretation", collocation: "ambiguous wording", example: "The pronoun is ambiguous because it could refer to either scientist." },
  { word: "prevalent", family: "prevalence", meaning: "common or widespread", collocation: "widely prevalent", example: "The practice became prevalent after production costs fell." },
  { word: "mitigate", family: "mitigation", meaning: "reduce the severity of something", collocation: "mitigate risk", example: "Backup sensors can mitigate the effect of a single failure." },
  { word: "corroborate", family: "corroboration", meaning: "confirm with additional evidence", collocation: "corroborate findings", example: "A second experiment corroborated the initial result." },
  { word: "plausible", family: "plausibility · plausibly", meaning: "reasonable and believable", collocation: "plausible explanation", example: "The hypothesis is plausible, but it still requires testing." },
  { word: "nevertheless", family: "contrast transition", meaning: "despite what was just stated", collocation: "nevertheless, the result…", example: "The trial was brief; nevertheless, it revealed a useful pattern." },
] as const;

export const sentencePatterns = [
  { title: "Claim → reason", pattern: "[Claim] because [specific reason].", example: "The second design is more reliable because it continues operating after one sensor fails." },
  { title: "Concession → position", pattern: "Although [valid limitation], [main position].", example: "Although the sample is small, the repeated pattern deserves further study." },
  { title: "Evidence → inference", pattern: "Because [evidence], it is reasonable to infer that [careful conclusion].", example: "Because both trials produced similar curves, it is reasonable to infer that the trend is reproducible." },
  { title: "Contrast", pattern: "Whereas [A], [B].", example: "Whereas the first passage emphasizes cost, the second focuses on reliability." },
  { title: "Definition with precision", pattern: "[Term] refers to [category] that [distinguishing feature].", example: "A feedback loop refers to a process in which an output influences a later input." },
  { title: "Cautious academic claim", pattern: "The evidence suggests that [claim], although [uncertainty].", example: "The evidence suggests that sleep improved recall, although the study did not control diet." },
] as const;

export const rawToeflQuestions: EnglishPracticeQuestion[] = [
  ...authenticToeflQuestions,
  ...curatedToeflQuestions,
  ...curatedExtendedToeflQuestions,
  ...hardToeflQuestions,
  ...coreToeflQuestions,
  ...extraToeflQuestions,
];

export const rawSatQuestions: EnglishPracticeQuestion[] = [
  ...authenticSatQuestions,
  ...curatedSatQuestions,
  ...curatedExtendedSatQuestions,
  ...hardSatQuestions,
  ...coreSatQuestions,
  ...extraSatQuestions,
];

/** Every historical English question passes through current-format shaping + quality normalization. */
export const toeflQuestions: EnglishPracticeQuestion[] = withExamSkills("toefl", rawToeflQuestions);
export const satQuestions: EnglishPracticeQuestion[] = withExamSkills("sat", rawSatQuestions);

export const englishQuestionBankStats = {
  toefl: {
    raw: rawToeflQuestions.length,
    total: toeflQuestions.length,
    quarantined: rawToeflQuestions.length - toeflQuestions.length,
    examAuthentic: toeflQuestions.filter((q) => q.authenticity === "exam_authentic").length,
    skillDrill: toeflQuestions.filter((q) => q.authenticity !== "exam_authentic").length,
    productive: toeflQuestions.filter((q) => !["single_choice", "student_produced"].includes(q.responseMode || "single_choice")).length,
  },
  sat: {
    raw: rawSatQuestions.length,
    total: satQuestions.length,
    quarantined: rawSatQuestions.length - satQuestions.length,
    examAuthentic: satQuestions.filter((q) => q.authenticity === "exam_authentic").length,
    skillDrill: satQuestions.filter((q) => q.authenticity !== "exam_authentic").length,
  },
};