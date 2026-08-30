import type { Questionnaire, QuestionnaireItem } from "@/lib/types";

type EnglishQuestionLike = {
  id: string;
  skill: string;
  prompt: string;
  choices: string[];
  answer: number;
  explanation: string;
  passage?: string;
  authenticity?: "exam_authentic" | "skill_drill";
  responseMode?: string;
  referenceAnswer?: string;
  scoringGuide?: string[];
  taskType?: string;
};

export type QuestionQualityIssue = {
  code: string;
  message: string;
  severity: "error" | "warning";
};

export type QuestionQualityResult = {
  ok: boolean;
  score: number;
  issues: QuestionQualityIssue[];
};

function words(text?: string): number {
  return (text || "").trim().split(/\s+/).filter(Boolean).length;
}

function hasReferenceAnswer(item: QuestionnaireItem): boolean {
  if (item.format === "mcq") {
    return Boolean(
      item.choices?.length &&
        Number.isInteger(item.mcqAnswer) &&
        Number(item.mcqAnswer) >= 0 &&
        Number(item.mcqAnswer) < item.choices.length &&
        (item.rationale?.trim() || item.answerKey?.trim())
    );
  }
  return Boolean(item.answerKey?.trim() || item.blankAnswers?.some((x) => x.trim()));
}

function push(
  issues: QuestionQualityIssue[],
  severity: "error" | "warning",
  code: string,
  message: string
) {
  issues.push({ code, message, severity });
}

/**
 * AP quality gate for newly refreshed content.
 * It does not mutate legacy questions. Exam-authentic items are held to a much higher bar than drills.
 */
export function auditApItem(item: QuestionnaireItem): QuestionQualityResult {
  const issues: QuestionQualityIssue[] = [];
  const authentic = item.authenticity === "exam_authentic";
  const promptWords = words(`${item.stimulus || ""} ${item.prompt}`);

  if (!item.prompt?.trim()) push(issues, "error", "missing-prompt", "Question prompt is empty.");
  if (!item.examSection?.trim()) push(issues, authentic ? "error" : "warning", "missing-section", "Exam section/task label is missing.");
  if (!item.responseMode) push(issues, authentic ? "error" : "warning", "missing-response-mode", "Response mode is not declared.");
  if (!hasReferenceAnswer(item)) push(issues, "error", "missing-answer", "No valid answer/reference answer is supplied.");

  if (item.format === "mcq") {
    if (item.choices?.length !== 4) push(issues, authentic ? "error" : "warning", "mcq-choice-count", "AP-style MCQ should have four choices.");
    if (promptWords < 18) push(issues, authentic ? "error" : "warning", "thin-mcq", "MCQ has too little context to function as a substantial exam-style item.");
  } else {
    if (promptWords < 35) push(issues, authentic ? "error" : "warning", "thin-frq", "Constructed-response item has too little context or task detail.");
    if (authentic && (!item.scoringGuide || item.scoringGuide.length < 2)) {
      push(issues, "error", "missing-rubric", "Exam-authentic constructed response needs a point-by-point scoring guide.");
    }
    if (item.blankSteps?.length && item.blankAnswers && item.blankSteps.length !== item.blankAnswers.length) {
      push(issues, "error", "answer-step-mismatch", "blankAnswers must align with blankSteps.");
    }
  }

  if (authentic && words(item.rationale || item.answerKey) < 12) {
    push(issues, "error", "thin-explanation", "Exam-authentic item needs a substantive explanation/reference answer.");
  }

  const errors = issues.filter((x) => x.severity === "error").length;
  const warnings = issues.filter((x) => x.severity === "warning").length;
  const score = Math.max(0, 100 - errors * 25 - warnings * 8);
  return { ok: errors === 0, score, issues };
}

export function auditApSet(set: Questionnaire): QuestionQualityResult {
  const issues: QuestionQualityIssue[] = [];
  if (!set.items?.length) push(issues, "error", "empty-set", "Question set contains no items.");
  if ((set.authenticity === "exam_authentic" || set.items.some((x) => x.authenticity === "exam_authentic")) && set.items.length < 2) {
    push(issues, "warning", "tiny-set", "An exam-authentic set should normally contain more than one item or be labeled as a single-item practice task.");
  }
  for (const item of set.items || []) {
    const result = auditApItem(item);
    for (const issue of result.issues) {
      issues.push({ ...issue, message: `${item.id}: ${issue.message}` });
    }
  }
  const errors = issues.filter((x) => x.severity === "error").length;
  const warnings = issues.filter((x) => x.severity === "warning").length;
  return { ok: errors === 0, score: Math.max(0, 100 - errors * 15 - warnings * 5), issues };
}

/** Quality gate shared by current Digital SAT and TOEFL iBT banks. */
export function auditEnglishQuestion(exam: "sat" | "toefl", q: EnglishQuestionLike): QuestionQualityResult {
  const issues: QuestionQualityIssue[] = [];
  const authentic = q.authenticity === "exam_authentic";
  const taskTextWords = words(`${q.passage || ""} ${q.prompt || ""}`);

  if (!q.prompt?.trim()) push(issues, "error", "missing-prompt", "Prompt is empty.");
  if (!q.skill?.trim()) push(issues, "error", "missing-skill", "Official domain/task family is missing.");
  if (!q.explanation?.trim() && !q.referenceAnswer?.trim()) push(issues, "error", "missing-explanation", "No explanation or model response is supplied.");
  if (authentic && !q.responseMode) push(issues, "error", "missing-response-mode", "Exam-authentic item must declare its real response mode.");

  const productive = q.responseMode && q.responseMode !== "single_choice" && q.responseMode !== "student_produced";
  if (productive) {
    if (!q.referenceAnswer?.trim()) push(issues, "error", "missing-model-response", "Productive task needs an original reference response.");
    if (!q.scoringGuide || q.scoringGuide.length < 2) push(issues, "error", "missing-scoring-guide", "Productive task needs explicit scoring criteria.");
  } else {
    if (!Array.isArray(q.choices) || q.choices.length < 2) push(issues, "error", "missing-choices", "Selected-response item needs answer choices.");
    if (!Number.isInteger(q.answer) || q.answer < 0 || q.answer >= q.choices.length) push(issues, "error", "invalid-answer", "Answer index is outside the choice list.");
  }

  if (exam === "sat" && authentic) {
    const isRw = ["Information and Ideas", "Craft and Structure", "Expression of Ideas", "Standard English Conventions"].includes(q.skill);
    const isMath = ["Algebra", "Advanced Math", "Problem-Solving and Data Analysis", "Geometry and Trigonometry"].includes(q.skill);
    if (!isRw && !isMath) push(issues, "error", "sat-domain", "Question is not mapped to a current Digital SAT domain.");
    if (isRw && words(q.passage) < 20) push(issues, "error", "sat-thin-passage", "Digital SAT Reading and Writing item needs a substantive short text or notes/data stimulus.");
    if (isRw && words(q.passage) > 180) push(issues, "warning", "sat-long-passage", "Passage is unusually long for the current Digital SAT short-text format.");
  }

  if (exam === "toefl" && authentic) {
    const currentTasks = [
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
    ];
    if (!currentTasks.includes(q.taskType || q.skill)) {
      push(issues, "error", "toefl-task", "Question is not mapped to a current post-January-2026 TOEFL iBT task family.");
    }
    if (["Take an Interview", "Listen and Repeat", "Write an Email", "Write for an Academic Discussion"].includes(q.taskType || q.skill) && q.responseMode === "single_choice") {
      push(issues, "error", "toefl-fake-mcq", "A productive TOEFL task cannot be labeled exam-authentic while implemented only as a multiple-choice strategy question.");
    }
  }

  if (authentic && taskTextWords < 12) push(issues, "error", "thin-task", "Exam-authentic item is too thin to stand as a complete task.");

  const errors = issues.filter((x) => x.severity === "error").length;
  const warnings = issues.filter((x) => x.severity === "warning").length;
  return { ok: errors === 0, score: Math.max(0, 100 - errors * 25 - warnings * 8), issues };
}
