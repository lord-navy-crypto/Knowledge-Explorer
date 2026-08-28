import { Questionnaire } from "@/lib/types";

/** Humanities AP FRQ-style generated sets paired with /ap/writing-frameworks */
export const humanitiesQuestionnaires: Questionnaire[] = [
  {
    id: "apush-dbq-practice-a",
    title: "AP US History — DBQ Practice Set A",
    subject: "AP US History",
    kind: "generated",
    description:
      "Document-based prompts with half-process scaffolding. Use the DBQ framework on /ap/writing-frameworks.",
    generationNote: "Original prompts — not College Board exam text.",
    estimatedMinutes: 45,
    difficultyTier: 2,
    tags: ["DBQ", "writing", "humanities"],
    items: [
      {
        id: "apush-dbq-a1",
        format: "frq_half",
        difficultyTier: 2,
        prompt:
          "Evaluate the extent to which Progressive Era reforms (1890–1920) expanded democratic participation in the United States.",
        visibleSteps: [
          "Group documents by argument (political, social, economic).",
          "Draft a thesis with a defensible claim and 2–3 categories.",
        ],
        blankSteps: [
          "Thesis: ________________________________________________",
          "Outside evidence example: ________________________________",
        ],
        hints: [
          "Qualify one document — explain a limitation or alternate reading.",
          "Use the DBQ framework checklist before writing body ¶1.",
        ],
      },
    ],
  },
  {
    id: "apwh-leq-practice-a",
    title: "AP World History — LEQ Practice Set A",
    subject: "AP World History",
    kind: "generated",
    description: "Long Essay Question practice with comparison/causation frames.",
    generationNote: "Original prompts for skill practice.",
    estimatedMinutes: 40,
    difficultyTier: 2,
    tags: ["LEQ", "writing", "humanities"],
    items: [
      {
        id: "apwh-leq-a1",
        format: "frq_half",
        difficultyTier: 2,
        prompt:
          "In the period 1450–1750, compare the effects of maritime exploration on two world regions.",
        visibleSteps: [
          "Choose two regions and a valid comparison category (economy, state power, culture).",
          "Write a thesis that compares AND explains a reason for difference/similarity.",
        ],
        blankSteps: [
          "Thesis: ________________________________________________",
          "One specific piece of evidence per region: ________________",
        ],
        hints: [
          "LEQ needs explicit comparison language (similarly, whereas, while).",
          "Contextualization: 1–2 sentences before the thesis.",
        ],
      },
    ],
  },
  {
    id: "aplang-rhetoric-practice-a",
    title: "AP English Language — Rhetorical Analysis Set A",
    subject: "AP English Language",
    kind: "generated",
    description: "Rhetorical analysis prompts with SOAPS + thesis scaffolding.",
    generationNote: "Original rhetorical situations for practice.",
    estimatedMinutes: 35,
    difficultyTier: 2,
    tags: ["rhetoric", "writing", "humanities"],
    items: [
      {
        id: "aplang-rhet-a1",
        format: "frq_half",
        difficultyTier: 2,
        prompt:
          "Analyze how the author of a speech advocating for public parks uses rhetorical choices to build credibility with a city council audience.",
        visibleSteps: [
          "Identify speaker, occasion, audience, purpose, and tone (SOAPS).",
          "Choose 2–3 rhetorical choices (evidence, structure, style) to analyze.",
        ],
        blankSteps: [
          "Thesis (author + choices + purpose): ______________________",
          "Body ¶1 topic sentence: __________________________________",
        ],
        hints: [
          "Explain HOW each choice builds credibility — not just what the choice is.",
          "Use the rhetorical analysis framework on /ap/writing-frameworks.",
        ],
      },
    ],
  },
];
