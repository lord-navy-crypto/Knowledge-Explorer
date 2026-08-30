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
  if (/dbq|long essay|literary argument|synthesis|rhetorical analysis|poetry analysis|prose fiction/.test(section)) {
    return "essay";
  }
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
  if (item.visibleSteps?.length >= 2) {
    return item.visibleSteps.map((step, index) => `Point ${index + 1}: ${compact(step)}`);
  }
  if (reference) {
    return [
      "Point 1: states the relevant principle, claim, or result correctly.",
      "Point 2: supports the result with reasoning, evidence, calculation, or context from the prompt.",
    ];
  }
  return undefined;
}

/**
 * Every legacy AP item goes through this function before public display.
 * We never invent an unknown MCQ key: an unresolved selected-response item is quarantined (null).
 * Legacy constructed-response items can remain as clearly labeled skill drills when their hints/steps
 * support a defensible reference response; only explicitly authored exam_authentic items retain that label.
 */
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
      : `A full-credit response should satisfy the reference answer and the listed scoring criteria.`);

  return {
    ...item,
    authenticity,
    responseMode,
    mcqAnswer,
    answerKey: reference,
    rationale,
    scoringGuide,
  };
}

export function normalizeApQuestionnaire(set: Questionnaire): Questionnaire | null {
  const items = (set.items || [])
    .map(normalizeApItem)
    .filter((item): item is QuestionnaireItem => Boolean(item));
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
    return ["Builds a grammatical sentence that preserves the intended meaning."];
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
  if (q.referenceAnswer?.trim()) return q.referenceAnswer.trim();
  if (mode === "listen_repeat") return compact(q.passage || q.prompt);
  if (validChoiceIndex(q.choices, q.answer)) return q.choices[q.answer].trim();
  if (q.explanation?.trim()) return q.explanation.trim();
  return undefined;
}

/**
 * Normalizes every SAT/TOEFL legacy item. Current productive TOEFL task names are converted to their
 * real response mode instead of remaining fake MCQs. The old correct option becomes an original model
 * response when one exists; the choices are retained only for historical data compatibility and are not
 * rendered by productive-response UI.
 */
export function normalizeEnglishQuestion<T extends EnglishQuestionLike>(
  exam: "sat" | "toefl",
  source: T
): T {
  const taskType = source.taskType || source.skill;
  const responseMode = englishResponseMode(exam, source);
  const referenceAnswer = modelEnglishAnswer(source, responseMode);
  const scoringGuide = source.scoringGuide?.length ? source.scoringGuide : defaultEnglishGuide(responseMode);
  const productive = !["single_choice", "student_produced"].includes(responseMode);
  const authenticity: AssessmentAuthenticity =
    source.authenticity === "exam_authentic" && (!productive || Boolean(referenceAnswer && scoringGuide?.length))
      ? "exam_authentic"
      : "skill_drill";

  return {
    ...source,
    taskType,
    responseMode,
    authenticity,
    referenceAnswer,
    scoringGuide,
    explanation:
      source.explanation?.trim() ||
      referenceAnswer ||
      "Review the task requirements and compare your response with the reference criteria.",
  };
}
