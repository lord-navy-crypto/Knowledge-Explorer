import type { QuestionnaireItem } from "@/lib/types";

/** Final prompt-depth fixes for audited Statistics short-response recoveries. */
export const recoveredApItemsBatch2Fix: Record<string, QuestionnaireItem> = {
  "stats-mix-1": {
    id: "stats-mix-1",
    format: "frq_half",
    conceptId: "stats-two-var",
    conceptIntro: "Section II · Exploring data. Interpreting r².",
    authenticity: "exam_authentic",
    responseMode: "short_response",
    difficultyTier: 1,
    stimulus: "A tutoring program studies whether time spent in its weekly study sessions is associated with students' final exam performance. A least-squares regression model is fit using hours studied as the explanatory variable and exam score as the response variable.",
    prompt: "The fitted model has r² = 0.71. Write a correct interpretation of r² in the context of this study, identifying both variables and what the 71% represents.",
    answerKey: "About 71% of the variation in exam scores among the students in the data is explained by the linear relationship between hours studied and exam score.",
    rationale: "r² describes the proportion of variability in the response accounted for by the fitted linear model using the explanatory variable; it is not the percent of students whose scores were predicted correctly.",
    scoringGuide: ["1 point: identifies 71% of the variation in exam scores.", "1 point: states that this variation is explained by the linear relationship/model with hours studied, in context."],
    hints: ["Name the response variable first and describe variation, not individual students."],
    examSection: "Section II · Free Response"
  },

  "stats-mix-4": {
    id: "stats-mix-4",
    format: "frq_half",
    conceptId: "stats-experiments",
    conceptIntro: "Section II · Experimental design. Random assignment.",
    authenticity: "exam_authentic",
    responseMode: "short_response",
    difficultyTier: 1,
    stimulus: "An instructor wants to compare two ways of teaching the same anatomy unit. Twenty-four students have volunteered for the study. Twelve students must receive a physical-dissection lab and twelve must receive a simulation lab before all students take the same assessment.",
    prompt: "Describe a valid random-assignment procedure that creates the two treatment groups of exactly 12 students each. Your procedure must make clear how chance is used and how duplicate assignment is prevented.",
    answerKey: "Label the students 1–24. Use a random-number generator or random shuffle to choose 12 distinct labels for the physical-dissection group; assign the remaining 12 students to the simulation group. Each student has an equal chance to be assigned to either treatment, no student can appear in both groups, and both groups contain exactly 12 students.",
    rationale: "Random assignment uses a chance mechanism to create comparable treatment groups on average. Sampling labels without replacement or shuffling all labels ensures both equal group size and no duplicate assignment.",
    scoringGuide: ["1 point: specifies a genuine chance mechanism with distinct student labels.", "1 point: clearly creates exactly two groups of 12 without duplicate assignment."],
    hints: ["A complete random shuffle of all 24 labels is sufficient."],
    examSection: "Section II · Free Response"
  },

  "stats-mix-5": {
    id: "stats-mix-5",
    format: "frq_half",
    conceptId: "stats-random-vars",
    conceptIntro: "Section II · Probability. Geometric waiting-time reasoning.",
    authenticity: "exam_authentic",
    responseMode: "short_response",
    difficultyTier: 2,
    stimulus: "An airline's upgrade system treats each flight independently for a particular frequent flyer. On every flight, the probability that the flyer receives an upgrade is 0.08, and the probability of no upgrade is therefore 0.92.",
    prompt: "Find the probability that the flyer's first upgrade occurs after the fourth flight. Show the probability expression you use and explain what must happen on flights 1 through 4 for this event to occur.",
    answerKey: "For the first upgrade to occur after flight 4, flights 1–4 must all be non-upgrades. Therefore P = (1-0.08)^4 = 0.92^4 ≈ 0.7164. This is the probability of four consecutive non-upgrades before any upgrade occurs.",
    rationale: "The event 'first success occurs after trial 4' means there are no successes in the first four independent trials; it does not require specifying what happens on flight 5.",
    scoringGuide: ["1 point: identifies four consecutive non-upgrades and uses 0.92^4.", "1 point: computes approximately 0.7164 and interprets the event correctly."],
    hints: ["Translate 'after the fourth flight' into the required outcomes on flights 1–4."],
    examSection: "Section II · Free Response"
  }
};
