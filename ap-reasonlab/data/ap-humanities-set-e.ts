import { Questionnaire } from "@/lib/types";

/** Humanities AP Set E — CED depth aligned with STEM Set E coverage. */
export const apHumanitiesSetE: Questionnaire[] = [
  {
    id: "ush-ced-set-e",
    title: "AP US History — CED Depth Set E",
    subject: "AP US History",
    kind: "generated",
    description: "Contextualization, periodization, and civil rights depth.",
    generationNote: "Original USH CED Set E prompts.",
    estimatedMinutes: 35,
    difficultyTier: 2,
    tags: ["ced", "DBQ", "LEQ", "generated"],
    items: [
      {
        id: "ush-ced-e1",
        format: "frq_half",
        conceptId: "ush-new-deal",
        conceptIntro: "Key concept: New Deal expanded federal economic role.",
        prompt:
          "Provide one piece of context BEFORE 1933 and one consequence AFTER 1940 for evaluating the New Deal's legacy.",
        blankSteps: ["Before 1933: ______", "After 1940: ______"],
        hints: ["Before: Great Depression banking collapse.", "After: Social Security, stronger federal role."],
      },
      {
        id: "ush-ced-e2",
        format: "concept_check",
        conceptId: "ush-civil-rights",
        conceptIntro: "Key concept: grassroots + federal action both matter.",
        prompt:
          "Why was the 1964 Civil Rights Act not sufficient on its own to end discrimination in daily life?",
        hints: ["Implementation, local resistance, economic inequality persisted."],
      },
      {
        id: "ush-ced-e3",
        format: "frq_half",
        conceptId: "ush-cold-war",
        conceptIntro: "Key concept: Cold War shaped domestic politics.",
        prompt:
          "How did Cold War anxiety affect civil liberties in the United States in the 1950s? Give one example.",
        blankSteps: ["Example + effect: ______"],
        hints: ["McCarthyism, loyalty oaths, HUAC hearings."],
      },
    ],
  },
  {
    id: "euro-ced-set-e",
    title: "AP European History — CED Depth Set E",
    subject: "AP European History",
    kind: "generated",
    description: "Enlightenment, industrialization, and 20th-century conflict.",
    generationNote: "Original Euro CED Set E prompts.",
    estimatedMinutes: 35,
    difficultyTier: 2,
    tags: ["ced", "LEQ", "generated"],
    items: [
      {
        id: "euro-ced-e1",
        format: "concept_check",
        conceptId: "euro-enlightenment",
        conceptIntro: "Key concept: Enlightenment ideas had limits in practice.",
        prompt:
          "Give one way Enlightenment ideals coexisted with slavery or empire in the 18th century.",
        hints: ["Rights language excluded women, enslaved people, colonized subjects."],
      },
      {
        id: "euro-ced-e2",
        format: "frq_half",
        conceptId: "euro-napoleonic",
        conceptIntro: "Key concept: Napoleonic reforms spread beyond France.",
        prompt:
          "Name one reform associated with Napoleonic rule and one region outside France affected by Napoleonic wars.",
        blankSteps: ["Reform: ______", "Region: ______"],
        hints: ["Napoleonic Code; Spain weakened → Latin American independence."],
      },
      {
        id: "euro-ced-e3",
        format: "frq_half",
        conceptId: "euro-imperialism",
        conceptIntro: "Key concept: industrial demand drove New Imperialism.",
        prompt:
          "Explain one economic motive for European imperial expansion in Africa after 1870.",
        blankSteps: ["Motive: ______"],
        hints: ["Raw materials, markets, strategic ports, investment."],
      },
    ],
  },
  {
    id: "elang-ced-set-e",
    title: "AP English Language — CED Depth Set E",
    subject: "AP English Language",
    kind: "generated",
    description: "Rhetorical analysis, synthesis, and argument depth.",
    generationNote: "Original English Language CED Set E prompts.",
    estimatedMinutes: 30,
    difficultyTier: 2,
    tags: ["ced", "rhetoric", "synthesis", "generated"],
    items: [
      {
        id: "elang-ced-e1",
        format: "concept_check",
        conceptId: "elang-rhetoric",
        conceptIntro: "Key concept: commentary links evidence to claim.",
        prompt:
          "A student writes: 'The author uses statistics.' Write one sentence of commentary that would strengthen this.",
        hints: ["Explain how the statistic supports the author's purpose or claim."],
      },
      {
        id: "elang-ced-e2",
        format: "frq_half",
        conceptId: "elang-synthesis",
        conceptIntro: "Key concept: sources must interact, not sit in separate paragraphs.",
        prompt:
          "Two sources disagree on whether schools should ban phones. Write one sentence synthesizing them toward a qualified thesis.",
        blankSteps: ["Synthesis sentence: ______"],
        hints: ["Acknowledge both; explain which limitation matters more."],
      },
      {
        id: "elang-ced-e3",
        format: "concept_check",
        conceptId: "elang-audience-purpose",
        conceptIntro: "Key concept: same topic, different audiences need different appeals.",
        prompt:
          "How might a writer arguing for later school start times address parents differently than administrators?",
        hints: ["Parents: health, family schedule; admins: buses, staffing, budgets."],
      },
    ],
  },
  {
    id: "elit-ced-set-e",
    title: "AP English Literature — CED Depth Set E",
    subject: "AP English Literature",
    kind: "generated",
    description: "Poetry, prose, and drama close reading.",
    generationNote: "Original English Literature CED Set E prompts.",
    estimatedMinutes: 30,
    difficultyTier: 2,
    tags: ["ced", "poetry", "prose", "generated"],
    items: [
      {
        id: "elit-ced-e1",
        format: "concept_check",
        conceptId: "elit-poetry",
        conceptIntro: "Key concept: form shapes meaning.",
        prompt:
          "How can enjambment (line running over without pause) create tension in a poem about waiting?",
        hints: ["Unfinished lines mirror unresolved waiting; pace feels suspended."],
      },
      {
        id: "elit-ced-e2",
        format: "frq_half",
        conceptId: "elit-prose-voice",
        conceptIntro: "Key concept: narrator voice affects theme.",
        prompt:
          "Write a thesis line analyzing how a first-person teenage narrator might critique adult hypocrisy through tone.",
        blankSteps: ["Thesis: ______"],
        hints: ["Topic + insight; avoid plot summary."],
      },
      {
        id: "elit-ced-e3",
        format: "concept_check",
        conceptId: "elit-drama-conflict",
        conceptIntro: "Key concept: stage directions reveal power.",
        prompt:
          "Why might a playwright describe a character 'speaking quietly while others shout' in a public scene?",
        hints: ["Contrast shows control, intimidation, or hidden authority."],
      },
    ],
  },
];
