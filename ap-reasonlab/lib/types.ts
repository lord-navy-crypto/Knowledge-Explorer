export interface Concept {
  id: string;
  title: string;
  subject: string;
  summary: string;
  keyPoints: string[];
  commonMistakes: string[];
  example: string;
}

export type QuestionFormat =
  | "mcq"
  | "frq_half"
  | "fill_blank"
  | "concept_check"
  | "open";

/**
 * exam_authentic = original practice that mirrors the current assessment task shape.
 * skill_drill = useful focused practice, but intentionally simplified and never presented as a mock exam item.
 */
export type AssessmentAuthenticity = "exam_authentic" | "skill_drill";

export type ResponseMode =
  | "single_choice"
  | "student_produced"
  | "short_response"
  | "extended_response"
  | "essay"
  | "spoken"
  | "listen_repeat"
  | "email"
  | "academic_discussion"
  | "sentence_build";

export interface PracticeQuestion {
  id: string;
  subject: string;
  topic: string;
  question: string;
  visibleSteps: string[];
  blankSteps: string[];
  hints: string[];
  /** Official AP exam section label when this drill is exam-shaped. */
  examSection?: string;
  format?: QuestionFormat;
  choices?: string[];
  authenticity?: AssessmentAuthenticity;
  responseMode?: ResponseMode;
  /** Complete original stimulus/data/context needed to answer the question. */
  stimulus?: string;
  /** Instructor-facing explanation of why the reference answer earns credit. */
  rationale?: string;
  /** Point-by-point rubric or response criteria for constructed responses. */
  scoringGuide?: string[];
}

export type HintLevel = 1 | 2 | 3;

/** All public question sets are AI-generated originals (not pasted exam keys). */
export type QuestionSetKind = "generated";

/** Optional future field — three difficulty tiers (not shown in UI yet). */
export type DifficultyTier = 1 | 2 | 3;

export interface QuestionnaireItem {
  id: string;
  format: QuestionFormat;
  prompt: string;
  choices?: string[];
  visibleSteps?: string[];
  blankSteps?: string[];
  hints: string[];
  conceptId?: string;
  conceptIntro?: string;
  /** 1 = intro, 2 = standard, 3 = challenge */
  difficultyTier?: DifficultyTier;
  /** Official exam section label (College Board format). */
  examSection?: string;
  /** Reveal after attempt — original reference answer, never copied official keys. */
  answerKey?: string;
  /** MCQ: 0-based index into choices */
  mcqAnswer?: number;
  /** FRQ: sample fills aligned with blankSteps (same order) */
  blankAnswers?: string[];
  /** Whether this is a current-exam-shaped item or a deliberately simplified drill. */
  authenticity?: AssessmentAuthenticity;
  /** Actual response behavior expected from the student. */
  responseMode?: ResponseMode;
  /** Complete passage, data description, source set, transcript, scenario, or other stimulus. */
  stimulus?: string;
  /** Why the answer is correct / what reasoning is expected. */
  rationale?: string;
  /** Point-by-point scoring criteria for FRQ/essay/open-response items. */
  scoringGuide?: string[];
}

export interface Questionnaire {
  id: string;
  title: string;
  subject: string;
  kind: QuestionSetKind;
  description: string;
  /** How this set was produced (e.g. Claude prompt + date) */
  generationNote: string;
  estimatedMinutes: number;
  tags: string[];
  items: QuestionnaireItem[];
  /** Official AP exam section structure this set trains. */
  examFormatNote?: string;
  /** Future: filter sets by tier */
  difficultyTier?: DifficultyTier;
  /** Set-level declaration; individual items may override for mixed drill sets. */
  authenticity?: AssessmentAuthenticity;
  /** Explicitly declares that a one-item set is intentionally a focused practice task, not an incomplete mock set. */
  singleItemPractice?: boolean;
}

export type GuideCategory = "ap_content" | "ai_for_ap" | "study_skill";

export interface KeyConceptGuide {
  id: string;
  title: string;
  subject: string;
  category: GuideCategory;
  introduction: string;
  howToUseAI: string[];
  conceptQuestions: {
    id: string;
    prompt: string;
    hints: string[];
  }[];
}

export interface Formula {
  id: string;
  subject: string;
  unit: string;
  name: string;
  expression: string;
  /** New managed formulas may use one complete Markdown + LaTeX body instead of split fields. */
  content?: string;
  variables: string;
  whenToUse: string;
  relatedConceptId?: string;
  /** e.g. College Board AP Physics 1 equation sheet */
  sourceNote: string;
}

export type ChecklistStatus = "done" | "in_progress" | "todo";

export interface ChecklistItem {
  id: string;
  status: ChecklistStatus;
  title: string;
  description: string;
  link?: string;
}
