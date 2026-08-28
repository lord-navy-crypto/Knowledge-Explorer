import { Questionnaire } from "@/lib/types";

/** Humanities AP Set C — challenge-tier writing/FRQ practice. */
export const apHumanitiesSetC: Questionnaire[] = [
  {
    id: "ush-gen-sourcing-c",
    title: "AP US History — Sourcing Set C",
    subject: "AP US History",
    kind: "generated",
    description: "Corroboration and sourcing under time pressure.",
    generationNote: "Original USH Set C prompts.",
    estimatedMinutes: 35,
    difficultyTier: 3,
    tags: ["DBQ", "sourcing", "generated"],
    items: [
      {
        id: "ush-src-c1",
        format: "frq_half",
        conceptId: "ush-periodization",
        conceptIntro: "Key concept: corroborate across documents before thesis.",
        prompt:
          "Two documents disagree on whether the New Deal ended the Depression. List one way to corroborate with outside evidence.",
        blankSteps: ["Corroboration move: ______"],
        hints: ["Use unemployment stats, WPA programs, or court challenges."],
      },
      {
        id: "ush-src-c2",
        format: "concept_check",
        conceptId: "ush-cold-war",
        conceptIntro: "Key concept: point of view shapes argument.",
        prompt:
          "Why might a 1950s FBI memo and a civil rights organizer's letter describe the same march differently?",
        hints: ["Audience, purpose, and institutional position differ."],
      },
    ],
  },
  {
    id: "world-gen-comparison-c",
    title: "AP World History — Comparison Set C",
    subject: "AP World History",
    kind: "generated",
    description: "Causation and comparison in the modern era.",
    generationNote: "Original world history Set C prompts.",
    estimatedMinutes: 35,
    difficultyTier: 3,
    tags: ["LEQ", "comparison", "generated"],
    items: [
      {
        id: "wh-comp-c1",
        format: "frq_half",
        conceptId: "whap-decolonization",
        conceptIntro: "Key concept: decolonization ≠ instant stability.",
        prompt:
          "Compare one similarity and one difference in decolonization outcomes in Africa and South Asia, 1945–1975.",
        blankSteps: ["Similarity: ______", "Difference: ______"],
        hints: ["Both faced border/ethnic challenges; paths differed (partition vs gradual transition)."],
      },
      {
        id: "wh-comp-c2",
        format: "concept_check",
        conceptId: "whap-industrial",
        conceptIntro: "Key concept: industrialization reshapes labor globally.",
        prompt:
          "How did industrial demand for raw materials link European factories to colonies after 1750?",
        hints: ["Cash crops, mining, and export economies tied regions together."],
      },
    ],
  },
  {
    id: "eurohist-gen-c",
    title: "AP European History — Context Set C",
    subject: "AP European History",
    kind: "generated",
    description: "Enlightenment and revolution contextualization.",
    generationNote: "Original Euro Set C prompts.",
    estimatedMinutes: 35,
    difficultyTier: 3,
    tags: ["LEQ", "generated"],
    items: [
      {
        id: "eur-ctx-c1",
        format: "frq_half",
        conceptId: "euro-enlightenment",
        conceptIntro: "Key concept: Enlightenment ideas vs Old Regime institutions.",
        prompt:
          "Give two sentences of context before arguing whether Enlightenment thought caused the French Revolution.",
        blankSteps: ["Context 1: ______", "Context 2: ______"],
        hints: ["Fiscal crisis, estate system, American Revolution example."],
      },
      {
        id: "eur-ctx-c2",
        format: "concept_check",
        conceptId: "euro-renaissance",
        conceptIntro: "Key concept: change and continuity across reform movements.",
        prompt:
          "Name one continuity and one change in European religion, 1450–1648.",
        hints: ["Continuity: Christianity central; change: denominational fragmentation."],
      },
    ],
  },
  {
    id: "englang-gen-rhetoric-c",
    title: "AP English Language — Rhetoric Set C",
    subject: "AP English Language",
    kind: "generated",
    description: "Audience, purpose, and line of reasoning.",
    generationNote: "Original rhetoric Set C prompts.",
    estimatedMinutes: 35,
    difficultyTier: 3,
    tags: ["rhetoric", "generated"],
    items: [
      {
        id: "aplang-rhet-c1",
        format: "frq_half",
        conceptId: "elang-audience-purpose",
        conceptIntro: "Key concept: audience shapes evidence choice.",
        prompt:
          "A mayor addresses parents about phone bans in schools. Identify audience, purpose, and one likely appeal.",
        blankSteps: ["Audience: ______", "Purpose: ______", "Appeal: ______"],
        hints: ["Parents as audience; safety/focus purpose; pathos or logos."],
      },
      {
        id: "aplang-rhet-c2",
        format: "concept_check",
        conceptId: "elang-evidence-types",
        conceptIntro: "Key concept: statistics vs anecdote serve different roles.",
        prompt:
          "When is an anecdote stronger than a statistic in a local policy op-ed?",
        hints: ["Humanizes issue; less persuasive for broad causal claims alone."],
      },
    ],
  },
  {
    id: "englit-gen-analysis-c",
    title: "AP English Literature — Close Reading Set C",
    subject: "AP English Literature",
    kind: "generated",
    description: "Prose narrator and dramatic conflict.",
    generationNote: "Original lit analysis Set C prompts.",
    estimatedMinutes: 40,
    difficultyTier: 3,
    tags: ["literature", "generated"],
    items: [
      {
        id: "aplit-cr-c1",
        format: "frq_half",
        conceptId: "elit-prose-voice",
        conceptIntro: "Key concept: narrator reliability affects theme.",
        prompt:
          "A first-person narrator admits they 'might remember wrong.' How could that affect the reader's trust?",
        blankSteps: ["Effect on trust: ______", "Link to theme: ______"],
        hints: ["Unreliable narration invites skepticism; theme about memory or bias."],
      },
      {
        id: "aplit-cr-c2",
        format: "concept_check",
        conceptId: "elit-drama-conflict",
        conceptIntro: "Key concept: external vs internal conflict.",
        prompt:
          "Distinguish external and internal conflict in a play where a character hides a secret from family.",
        hints: ["External: family confrontation; internal: guilt or fear."],
      },
    ],
  },
];

/** Humanities AP Set D — additional challenge sets. */
export const apHumanitiesSetD: Questionnaire[] = [
  {
    id: "ush-gen-sourcing-d",
    title: "AP US History — Argument Set D",
    subject: "AP US History",
    kind: "generated",
    description: "Thesis refinement and counterargument in LEQ/DBQ style.",
    generationNote: "Original USH Set D prompts.",
    estimatedMinutes: 40,
    difficultyTier: 3,
    tags: ["LEQ", "DBQ", "generated"],
    items: [
      {
        id: "ush-src-d1",
        format: "frq_half",
        conceptId: "ush-gilded-age",
        conceptIntro: "Key concept: qualify thesis with limits.",
        prompt:
          "Write a two-sentence thesis: To what extent did Gilded Age industrialization benefit American workers?",
        blankSteps: ["Thesis sentence 1: ______", "Thesis sentence 2: ______"],
        hints: ["Acknowledge wages/jobs vs harsh conditions and inequality."],
      },
      {
        id: "ush-src-d2",
        format: "concept_check",
        conceptId: "ush-civil-rights",
        conceptIntro: "Key concept: federal vs grassroots change.",
        prompt:
          "How did grassroots organizing and federal action both contribute to civil rights gains, 1954–1968?",
        hints: ["Courts/legislation + boycotts, marches, local activists."],
      },
    ],
  },
  {
    id: "world-gen-comparison-d",
    title: "AP World History — Causation Set D",
    subject: "AP World History",
    kind: "generated",
    description: "Globalization and environmental change.",
    generationNote: "Original world history Set D prompts.",
    estimatedMinutes: 40,
    difficultyTier: 3,
    tags: ["LEQ", "generated"],
    items: [
      {
        id: "wh-comp-d1",
        format: "frq_half",
        conceptId: "whap-globalization",
        conceptIntro: "Key concept: technology accelerates exchange.",
        prompt:
          "Explain one cause and one effect of increased global trade, 1900–present.",
        blankSteps: ["Cause: ______", "Effect: ______"],
        hints: ["Container shipping, WTO; supply chains, cultural diffusion."],
      },
      {
        id: "wh-comp-d2",
        format: "concept_check",
        conceptId: "whap-decolonization",
        conceptIntro: "Key concept: Cold War shaped postcolonial paths.",
        prompt:
          "Why did some newly independent states align with superpowers during the Cold War?",
        hints: ["Aid, security, ideology; avoid isolation."],
      },
    ],
  },
  {
    id: "eurohist-gen-d",
    title: "AP European History — Comparison Set D",
    subject: "AP European History",
    kind: "generated",
    description: "Revolution and nationalism.",
    generationNote: "Original Euro Set D prompts.",
    estimatedMinutes: 40,
    difficultyTier: 3,
    tags: ["LEQ", "generated"],
    items: [
      {
        id: "eur-ctx-d1",
        format: "frq_half",
        conceptId: "euro-napoleonic",
        conceptIntro: "Key concept: revolution exports ideas and war.",
        prompt:
          "Compare how the French Revolution influenced one European state and one Latin American movement.",
        blankSteps: ["European example: ______", "Latin American example: ______"],
        hints: ["Legal codes, nationalism, independence wars."],
      },
      {
        id: "eur-ctx-d2",
        format: "concept_check",
        conceptId: "euro-enlightenment",
        conceptIntro: "Key concept: salons and print culture spread ideas.",
        prompt:
          "How did print culture help spread Enlightenment ideas beyond elite circles?",
        hints: ["Pamphlets, encyclopedias, literacy, coffeehouses."],
      },
    ],
  },
  {
    id: "englang-gen-rhetoric-d",
    title: "AP English Language — Synthesis Set D",
    subject: "AP English Language",
    kind: "generated",
    description: "Multi-source argument construction.",
    generationNote: "Original synthesis Set D prompts.",
    estimatedMinutes: 40,
    difficultyTier: 3,
    tags: ["synthesis", "generated"],
    items: [
      {
        id: "aplang-rhet-d1",
        format: "frq_half",
        conceptId: "elang-synthesis",
        conceptIntro: "Key concept: sources must interact in paragraphs.",
        prompt:
          "Outline a synthesis paragraph on public transit funding using one statistic source and one local anecdote.",
        blankSteps: ["Topic sentence: ______", "Source interaction: ______"],
        hints: ["Anecdote humanizes; statistic shows scale — link both to claim."],
      },
      {
        id: "aplang-rhet-d2",
        format: "concept_check",
        conceptId: "elang-rhetoric",
        conceptIntro: "Key concept: concession strengthens ethos.",
        prompt:
          "Write one sentence conceding a counterargument about school start times, then refuting it.",
        hints: ["Although… however… structure."],
      },
    ],
  },
  {
    id: "englit-gen-analysis-d",
    title: "AP English Literature — Theme Set D",
    subject: "AP English Literature",
    kind: "generated",
    description: "Theme statements and structural choices.",
    generationNote: "Original lit analysis Set D prompts.",
    estimatedMinutes: 40,
    difficultyTier: 3,
    tags: ["literature", "generated"],
    items: [
      {
        id: "aplit-cr-d1",
        format: "frq_half",
        conceptId: "elit-theme",
        conceptIntro: "Key concept: theme is arguable insight, not topic.",
        prompt:
          "Write a theme statement for a novel where characters repeatedly fail to communicate.",
        blankSteps: ["Theme: ______", "Evidence direction: ______"],
        hints: ["Avoid one-word topics; claim about isolation or misunderstanding."],
      },
      {
        id: "aplit-cr-d2",
        format: "concept_check",
        conceptId: "elit-poetry",
        conceptIntro: "Key concept: form reinforces meaning.",
        prompt:
          "How can a poem's short, end-stopped lines affect pacing in a grief narrative?",
        hints: ["Creates pauses, weight, finality."],
      },
    ],
  },
];
