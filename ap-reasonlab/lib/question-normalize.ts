import type {
  AssessmentAuthenticity,
  Questionnaire,
  QuestionnaireItem,
  ResponseMode,
} from "@/lib/types";

export type EnglishQuestionLike = {
  id: string;
  skill: string;
  prompt: string;
  choices: string[];
  answer: number;
  explanation: string;
  passage?: string;
  authenticity?: AssessmentAuthenticity;
  responseMode?: ResponseMode;
  referenceAnswer?: string;
  scoringGuide?: string[];
  taskType?: string;
};

function compact(text?: string): string {
  return (text || "").replace(/\s+/g, " ").trim();
}

function wordCount(text?: string): number {
  return compact(text).split(/\s+/).filter(Boolean).length;
}

function validChoiceIndex(choices: string[] | undefined, value: number | undefined): value is number {
  return Boolean(choices?.length && Number.isInteger(value) && value! >= 0 && value! < choices!.length);
}

function inferMcqIndex(item: QuestionnaireItem): number | undefined {
  if (validChoiceIndex(item.choices, item.mcqAnswer)) return item.mcqAnswer;
  if (!item.choices?.length || !item.answerKey?.trim()) return undefined;
  const key = compact(item.answerKey);
  const letter = key.match(/^\(?([A-D])\)?(?:[.):\-]\s*)?/i)?.[1];
  if (letter) {
    const index = letter.toUpperCase().charCodeAt(0) - 65;
    if (index >= 0 && index < item.choices.length) return index;
  }
  const exact = item.choices.findIndex((choice) => compact(choice).toLowerCase() === key.toLowerCase());
  return exact >= 0 ? exact : undefined;
}

function responseModeForAp(item: QuestionnaireItem): ResponseMode {
  if (item.responseMode) return item.responseMode;
  if (item.format === "mcq") return "single_choice";
  const section = `${item.examSection || ""} ${item.prompt}`.toLowerCase();
  if (/dbq|long essay|literary argument|synthesis|rhetorical analysis|poetry analysis|prose fiction/.test(section)) return "essay";
  if (/short-answer|short frq|conceptual analysis/.test(section)) return "short_response";
  return "extended_response";
}

function referenceFromAp(item: QuestionnaireItem, mcqAnswer?: number): string | undefined {
  if (item.answerKey?.trim()) return item.answerKey.trim();
  if (item.blankAnswers?.some((x) => x.trim())) {
    return item.blankAnswers
      .map((answer, index) => `(${String.fromCharCode(97 + index)}) ${answer.trim()}`)
      .join("\n");
  }
  if (validChoiceIndex(item.choices, mcqAnswer)) {
    return `Correct choice: ${String.fromCharCode(65 + mcqAnswer)}. ${item.choices![mcqAnswer]}`;
  }
  if (item.hints?.length >= 2) {
    return `Reference reasoning for this skill drill:\n${item.hints
      .map((hint, index) => `${index + 1}. ${hint.trim()}`)
      .join("\n")}`;
  }
  return undefined;
}

function rubricFromAp(item: QuestionnaireItem, reference?: string): string[] | undefined {
  if (item.scoringGuide?.length) return item.scoringGuide;
  if (item.format === "mcq") return undefined;
  const steps = item.blankSteps?.filter(Boolean) || [];
  if (steps.length >= 2) {
    return steps.map((step, index) => `Point ${index + 1}: completes ${compact(step).replace(/_+/g, "the requested part")} with correct reasoning.`);
  }
  const visibleSteps = item.visibleSteps?.filter(Boolean) || [];
  if (visibleSteps.length >= 2) {
    return visibleSteps.map((step, index) => `Point ${index + 1}: ${compact(step)}`);
  }
  if (reference) {
    return [
      "Point 1: states the relevant principle, claim, or result correctly.",
      "Point 2: supports the result with reasoning, evidence, calculation, or context from the prompt.",
    ];
  }
  return undefined;
}

function alignedBlankAnswers(item: QuestionnaireItem): string[] | undefined {
  if (!item.blankAnswers?.length) return undefined;
  if (!item.blankSteps?.length) return undefined;
  if (item.blankAnswers.length !== item.blankSteps.length) return undefined;
  return item.blankAnswers;
}

/** Every historical AP item is normalized before public display. Unknown MCQ keys are never invented. */
export function normalizeApItem(item: QuestionnaireItem): QuestionnaireItem | null {
  const mcqAnswer = inferMcqIndex(item);
  if (item.format === "mcq" && !validChoiceIndex(item.choices, mcqAnswer)) return null;
  const reference = referenceFromAp(item, mcqAnswer);
  if (!reference) return null;

  const responseMode = responseModeForAp(item);
  const scoringGuide = rubricFromAp(item, reference);
  const authenticity: AssessmentAuthenticity = item.authenticity === "exam_authentic" ? "exam_authentic" : "skill_drill";
  const rationale =
    item.rationale?.trim() ||
    (item.format === "mcq"
      ? `${reference}${item.hints?.length ? ` ${item.hints.join(" ")}` : ""}`
      : "A full-credit response should satisfy the reference answer and the listed scoring criteria.");

  return {
    ...item,
    authenticity,
    responseMode,
    mcqAnswer,
    blankAnswers: alignedBlankAnswers(item),
    answerKey: reference,
    rationale,
    scoringGuide,
  };
}

export function normalizeApQuestionnaire(set: Questionnaire): Questionnaire | null {
  const items = (set.items || []).map(normalizeApItem).filter((item): item is QuestionnaireItem => Boolean(item));
  if (!items.length) return null;
  const authenticity: AssessmentAuthenticity =
    set.authenticity === "exam_authentic" && items.every((item) => item.authenticity === "exam_authentic")
      ? "exam_authentic"
      : "skill_drill";
  return {
    ...set,
    authenticity,
    items,
    description:
      authenticity === "exam_authentic"
        ? set.description
        : `${set.description.replace(/\s*Official exam shape:[\s\S]*$/i, "").trim()} This set is labeled Skill drill unless each item independently satisfies the current exam-authentic quality gate.`,
  };
}

function englishResponseMode(exam: "sat" | "toefl", q: EnglishQuestionLike): ResponseMode {
  if (q.responseMode) return q.responseMode;
  const task = q.taskType || q.skill;
  if (exam === "toefl") {
    if (task === "Write an Email") return "email";
    if (task === "Write for an Academic Discussion") return "academic_discussion";
    if (task === "Build a Sentence") return "sentence_build";
    if (task === "Take an Interview") return "spoken";
    if (task === "Listen and Repeat") return "listen_repeat";
  }
  return "single_choice";
}

function defaultEnglishGuide(mode: ResponseMode): string[] | undefined {
  if (mode === "email") {
    return [
      "Addresses the requested purpose and all key details from the situation.",
      "Uses an appropriate email register, organization, and clear supporting detail.",
      "Uses understandable grammar and vocabulary with errors that do not obscure meaning.",
    ];
  }
  if (mode === "academic_discussion") {
    return [
      "States a clear position that directly responds to the discussion question.",
      "Develops the position with a specific reason, example, or connection to another contribution.",
      "Uses coherent, precise English rather than disconnected sentences.",
    ];
  }
  if (mode === "sentence_build") {
    return [
      "Builds a grammatical sentence with complete required elements.",
      "Preserves the intended meaning and logical word order.",
    ];
  }
  if (mode === "spoken") {
    return [
      "Answers the interview question directly and develops at least one specific reason or example.",
      "Speech is understandable and organized within the time limit.",
      "Grammar and vocabulary support meaning without requiring memorized wording.",
    ];
  }
  if (mode === "listen_repeat") {
    return [
      "Repeats the complete meaning of the model utterance without omitting key words.",
      "Speech is intelligible with reasonable pacing and pronunciation.",
    ];
  }
  return undefined;
}

function modelEnglishAnswer(q: EnglishQuestionLike, mode: ResponseMode): string | undefined {
  if (typeof q.referenceAnswer === "string" && q.referenceAnswer.trim()) return q.referenceAnswer.trim();
  if (mode === "listen_repeat") return compact(q.passage || q.prompt);
  if (validChoiceIndex(q.choices, q.answer)) return q.choices[q.answer].trim();
  if (typeof q.explanation === "string" && q.explanation.trim()) return q.explanation.trim();
  return undefined;
}

const SAT_RW = new Set(["Information and Ideas", "Craft and Structure", "Expression of Ideas", "Standard English Conventions"]);
const SAT_MATH = new Set(["Algebra", "Advanced Math", "Problem-Solving and Data Analysis", "Geometry and Trigonometry"]);
const TOEFL_CURRENT = new Set([
  "Complete the Words",
  "Read in Daily Life",
  "Read an Academic Passage",
  "Listen and Choose a Response",
  "Listen to a Conversation",
  "Listen to an Announcement",
  "Listen to an Academic Talk",
  "Build a Sentence",
  "Write an Email",
  "Write for an Academic Discussion",
  "Listen and Repeat",
  "Take an Interview",
]);

function canKeepExamAuthentic(exam: "sat" | "toefl", q: EnglishQuestionLike, mode: ResponseMode, model?: string, guide?: string[]): boolean {
  if (q.authenticity !== "exam_authentic") return false;
  if (!compact(q.prompt) || !compact(q.explanation || model)) return false;
  if (exam === "sat") {
    if (!SAT_RW.has(q.skill) && !SAT_MATH.has(q.skill)) return false;
    if (SAT_RW.has(q.skill) && (wordCount(q.passage) < 20 || wordCount(q.passage) > 180)) return false;
    if (mode === "single_choice" && (!validChoiceIndex(q.choices, q.answer) || q.choices.length !== 4)) return false;
    return true;
  }
  const task = q.taskType || q.skill;
  if (!TOEFL_CURRENT.has(task)) return false;
  if (wordCount(`${q.passage || ""} ${q.prompt}`) < 12) return false;
  const productive = !["single_choice", "student_produced"].includes(mode);
  if (productive && (!model || !guide || guide.length < 2)) return false;
  if (!productive && !validChoiceIndex(q.choices, q.answer)) return false;
  return true;
}

/** Convert every English legacy item to a truthful response mode and authenticity label. */
export function normalizeEnglishQuestion<T extends EnglishQuestionLike>(exam: "sat" | "toefl", source: T): T {
  const taskType = source.taskType || source.skill;
  const responseMode = englishResponseMode(exam, source);
  const referenceAnswer = modelEnglishAnswer(source, responseMode);
  const scoringGuide = Array.isArray(source.scoringGuide) && source.scoringGuide.length ? source.scoringGuide : defaultEnglishGuide(responseMode);
  const authenticity: AssessmentAuthenticity = canKeepExamAuthentic(exam, source, responseMode, referenceAnswer, scoringGuide)
    ? "exam_authentic"
    : "skill_drill";

  return {
    ...source,
    taskType,
    responseMode,
    authenticity,
    referenceAnswer,
    scoringGuide,
    explanation: (typeof source.explanation === "string" && source.explanation.trim()) || referenceAnswer || "Compare the response with the task requirements and scoring criteria.",
  };
}

/** Public-bank gate: malformed historical entries are quarantined rather than shown with invented answers. */
export function isPublicReadyEnglishQuestion(q: EnglishQuestionLike): boolean {
  if (!compact(q.id) || !compact(q.prompt) || !compact(q.skill)) return false;
  const mode = q.responseMode || "single_choice";
  if (mode === "single_choice") {
    return validChoiceIndex(q.choices, q.answer) && q.choices.length >= 2 && Boolean(compact(q.explanation));
  }
  return Boolean(compact(q.referenceAnswer) && q.scoringGuide?.length && compact(q.explanation));
}