import type { QuestionnaireItem } from "@/lib/types";

/** Audited AP Statistics recoveries. Correct choices are derivable from the original stems and hints. */
export const recoveredApItemsBatch2: Record<string, QuestionnaireItem> = {
  "stats-ed-5": {
    id: "stats-ed-5",
    format: "mcq",
    conceptId: "stats-one-var",
    conceptIntro: "Section I · Multiple Choice. Comparing what histograms and boxplots reveal.",
    authenticity: "exam_authentic",
    responseMode: "single_choice",
    difficultyTier: 2,
    prompt:
      "A residence hall records the floor area of every student room. A histogram of the room areas has two distinct clusters, one centered near 14 m² and another near 22 m², with relatively few rooms between the clusters. A standard boxplot is made from the same data. Which feature of the distribution can be identified from the histogram but cannot be determined from the boxplot alone?",
    choices: [
      "A) The approximate median room area",
      "B) The presence of two distinct modes",
      "C) The approximate maximum room area",
      "D) The interquartile range"
    ],
    mcqAnswer: 1,
    answerKey: "B) The presence of two distinct modes",
    rationale:
      "A boxplot shows the median, quartiles, spread, and potential extreme values, but it does not preserve the detailed shape of the distribution. Two separated peaks are therefore visible in the histogram but cannot be inferred from a standard boxplot alone.",
    hints: ["Ask which display preserves distribution shape rather than only five-number-summary information."],
    examSection: "Section I · Multiple Choice (4 options)"
  },

  "stats-cd-6": {
    id: "stats-cd-6",
    format: "mcq",
    conceptId: "stats-experiments",
    conceptIntro: "Section I · Multiple Choice. Scope of conclusions from a randomized experiment.",
    authenticity: "exam_authentic",
    responseMode: "single_choice",
    difficultyTier: 2,
    prompt:
      "Participants in a randomized experiment are assigned to one of two treatments: a new drug plus two therapy sessions, or a placebo plus two therapy sessions. The drug group has a statistically significantly better mean outcome. A researcher then claims that the drug plus two sessions is just as effective as eight therapy sessions without the drug. Which statement best identifies the flaw in the researcher's conclusion?",
    choices: [
      "A) A statistically significant result can never come from a study with only two treatment groups.",
      "B) The experiment did not include an eight-session, no-drug treatment group, so that comparison is unsupported.",
      "C) Statistical significance proves that the two treatments in the experiment have exactly the same effect.",
      "D) A placebo group prevents researchers from making any causal conclusion."
    ],
    mcqAnswer: 1,
    answerKey: "B) The experiment did not include an eight-session, no-drug treatment group, so that comparison is unsupported.",
    rationale:
      "Random assignment supports a causal comparison between the treatments actually assigned. It does not provide evidence about a third treatment that was never included in the experiment.",
    hints: ["Match the conclusion to the treatment groups that were actually compared."],
    examSection: "Section I · Multiple Choice (4 options)"
  },

  "stats-mix-3": {
    id: "stats-mix-3",
    format: "mcq",
    conceptId: "stats-hypothesis-tests",
    conceptIntro: "Section I · Multiple Choice. Type I and Type II errors.",
    authenticity: "exam_authentic",
    responseMode: "single_choice",
    difficultyTier: 2,
    prompt:
      "A significance test uses H₀: p = 0.50 and Hₐ: p ≠ 0.50. The test fails to reject H₀. Which type of error could have occurred as a result of this decision?",
    choices: [
      "A) Type I error only",
      "B) Type II error only",
      "C) Either a Type I or a Type II error",
      "D) Neither type of error is possible after failing to reject H₀"
    ],
    mcqAnswer: 1,
    answerKey: "B) Type II error only",
    rationale:
      "A Type II error occurs when the null hypothesis is false but the test fails to reject it. A Type I error requires rejecting a true null hypothesis, which is inconsistent with the decision made here.",
    hints: ["Identify which error definition is compatible with a fail-to-reject decision."],
    examSection: "Section I · Multiple Choice (4 options)"
  }
};
