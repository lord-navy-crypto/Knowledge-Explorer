import { Questionnaire } from "@/lib/types";

/** Humanities AP Set C — challenge-tier writing/FRQ practice. */
export const apHumanitiesSetC: Questionnaire[] = [
  {
    "id": "ush-gen-sourcing-c",
    "title": "AP US History — Sourcing Set C",
    "subject": "AP US History",
    "kind": "generated",
    "description": "Corroboration and sourcing under time pressure. Official exam shape: Section I: 55 stimulus MCQ + 3 SAQs. Section II: 1 DBQ + 1 LEQ.",
    "generationNote": "Original USH Set C prompts.",
    "estimatedMinutes": 35,
    "difficultyTier": 3,
    "tags": [
      "DBQ",
      "sourcing",
      "generated"
    ],
    "items": [
      {
        "id": "ush-src-c1",
        "format": "frq_half",
        "conceptId": "ush-periodization",
        "conceptIntro": "Section I Part B · Short-Answer Question. Key concept: corroborate across documents before thesis.",
        "prompt": "Two documents disagree on whether the New Deal ended the Depression. List one way to corroborate with outside evidence.\n\n(a) Identify or describe ONE relevant example.\n(b) Explain a cause, effect, or reason using specific evidence.",
        "blankSteps": [
          "(a) ______",
          "(b) ______"
        ],
        "hints": [
          "Use unemployment stats, WPA programs, or court challenges."
        ],
        "visibleSteps": [
          "Answer each labeled part in AP free-response style."
        ],
        "examSection": "Section I Part B · Short-Answer Question"
      },
      {
        "id": "ush-src-c2",
        "format": "frq_half",
        "conceptId": "ush-cold-war",
        "conceptIntro": "Section I Part B · Short-Answer Question. Key concept: point of view shapes argument.",
        "prompt": "Why might a 1950s FBI memo and a civil rights organizer's letter describe the same march differently?\n\n(a) Identify or describe ONE relevant example.\n(b) Explain a cause, effect, or reason using specific evidence.",
        "hints": [
          "Audience, purpose, and institutional position differ."
        ],
        "blankSteps": [
          "(a) ______",
          "(b) ______"
        ],
        "visibleSteps": [
          "Answer each labeled part in AP free-response style."
        ],
        "examSection": "Section I Part B · Short-Answer Question"
      }
    ],
    "examFormatNote": "Section I: 55 stimulus MCQ + 3 SAQs. Section II: 1 DBQ + 1 LEQ."
  },
  {
    "id": "world-gen-comparison-c",
    "title": "AP World History — Comparison Set C",
    "subject": "AP World History",
    "kind": "generated",
    "description": "Causation and comparison in the modern era. Official exam shape: Section I: 55 stimulus MCQ + 3 SAQs. Section II: 1 DBQ + 1 LEQ.",
    "generationNote": "Original world history Set C prompts.",
    "estimatedMinutes": 35,
    "difficultyTier": 3,
    "tags": [
      "LEQ",
      "comparison",
      "generated"
    ],
    "items": [
      {
        "id": "wh-comp-c1",
        "format": "frq_half",
        "conceptId": "whap-decolonization",
        "conceptIntro": "Section I Part B · Short-Answer Question. Key concept: decolonization ≠ instant stability.",
        "prompt": "Compare one similarity and one difference in decolonization outcomes in Africa and South Asia, 1945–1975.\n\n(a) Identify or describe ONE relevant example.\n(b) Explain a cause, effect, or reason using specific evidence.",
        "blankSteps": [
          "(a) ______",
          "(b) ______"
        ],
        "hints": [
          "Both faced border/ethnic challenges; paths differed (partition vs gradual transition)."
        ],
        "visibleSteps": [
          "Answer each labeled part in AP free-response style."
        ],
        "examSection": "Section I Part B · Short-Answer Question"
      },
      {
        "id": "wh-comp-c2",
        "format": "frq_half",
        "conceptId": "whap-industrial",
        "conceptIntro": "Section I Part B · Short-Answer Question. Key concept: industrialization reshapes labor globally.",
        "prompt": "How did industrial demand for raw materials link European factories to colonies after 1750?\n\n(a) Identify or describe ONE relevant example.\n(b) Explain a cause, effect, or reason using specific evidence.",
        "hints": [
          "Cash crops, mining, and export economies tied regions together."
        ],
        "blankSteps": [
          "(a) ______",
          "(b) ______"
        ],
        "visibleSteps": [
          "Answer each labeled part in AP free-response style."
        ],
        "examSection": "Section I Part B · Short-Answer Question"
      }
    ],
    "examFormatNote": "Section I: 55 stimulus MCQ + 3 SAQs. Section II: 1 DBQ + 1 LEQ."
  },
  {
    "id": "eurohist-gen-c",
    "title": "AP European History — Context Set C",
    "subject": "AP European History",
    "kind": "generated",
    "description": "Enlightenment and revolution contextualization. Official exam shape: Section I: 55 stimulus MCQ + 3 SAQs. Section II: 1 DBQ + 1 LEQ.",
    "generationNote": "Original Euro Set C prompts.",
    "estimatedMinutes": 35,
    "difficultyTier": 3,
    "tags": [
      "LEQ",
      "generated"
    ],
    "items": [
      {
        "id": "eur-ctx-c1",
        "format": "frq_half",
        "conceptId": "euro-enlightenment",
        "conceptIntro": "Section I Part B · Short-Answer Question. Key concept: Enlightenment ideas vs Old Regime institutions.",
        "prompt": "Give two sentences of context before arguing whether Enlightenment thought caused the French Revolution.\n\n(a) Identify or describe ONE relevant example.\n(b) Explain a cause, effect, or reason using specific evidence.",
        "blankSteps": [
          "(a) ______",
          "(b) ______"
        ],
        "hints": [
          "Fiscal crisis, estate system, American Revolution example."
        ],
        "visibleSteps": [
          "Answer each labeled part in AP free-response style."
        ],
        "examSection": "Section I Part B · Short-Answer Question"
      },
      {
        "id": "eur-ctx-c2",
        "format": "frq_half",
        "conceptId": "euro-renaissance",
        "conceptIntro": "Section I Part B · Short-Answer Question. Key concept: change and continuity across reform movements.",
        "prompt": "Name one continuity and one change in European religion, 1450–1648.\n\n(a) Identify or describe ONE relevant example.\n(b) Explain a cause, effect, or reason using specific evidence.",
        "hints": [
          "Continuity: Christianity central; change: denominational fragmentation."
        ],
        "blankSteps": [
          "(a) ______",
          "(b) ______"
        ],
        "visibleSteps": [
          "Answer each labeled part in AP free-response style."
        ],
        "examSection": "Section I Part B · Short-Answer Question"
      }
    ],
    "examFormatNote": "Section I: 55 stimulus MCQ + 3 SAQs. Section II: 1 DBQ + 1 LEQ."
  },
  {
    "id": "englang-gen-rhetoric-c",
    "title": "AP English Language — Rhetoric Set C",
    "subject": "AP English Language",
    "kind": "generated",
    "description": "Audience, purpose, and line of reasoning. Official exam shape: Section I: 45 four-choice MCQ (reading + writing revision, 60 min). Section II: Synthesis, Rhetorical Analysis, Argument (2 h 15 min).",
    "generationNote": "Original rhetoric Set C prompts.",
    "estimatedMinutes": 35,
    "difficultyTier": 3,
    "tags": [
      "rhetoric",
      "generated"
    ],
    "items": [
      {
        "id": "aplang-rhet-c1",
        "format": "frq_half",
        "conceptId": "elang-audience-purpose",
        "conceptIntro": "Section II · Question 2 Rhetorical Analysis. Key concept: audience shapes evidence choice.",
        "prompt": "Excerpt (original practice): “Buses already idle at 6:50 a.m. A later bell would not erase homework; it would let teenagers meet the clock their bodies already keep.”\n\nExcerpt (original practice): “Buses already idle at 6:50 a.m. A later bell would not erase homework; it would let teenagers meet the clock their bodies already keep.”\n\nExcerpt (original practice): “Buses already idle at 6:50 a.m. A later bell would not erase homework; it would let teenagers meet the clock their bodies already keep.”\n\nA mayor addresses parents about phone bans in schools. Identify audience, purpose, and one likely appeal.\n\n(a) Identify the rhetorical situation (speaker, audience, purpose).\n(b) Analyze TWO rhetorical choices and their effects.",
        "blankSteps": [
          "Audience: ______",
          "Purpose: ______",
          "Appeal: ______"
        ],
        "hints": [
          "Parents as audience; safety/focus purpose; pathos or logos."
        ],
        "visibleSteps": [
          "Answer each labeled part in AP free-response style."
        ],
        "examSection": "Section II · Question 2 Rhetorical Analysis"
      },
      {
        "id": "aplang-rhet-c2",
        "format": "frq_half",
        "conceptId": "elang-evidence-types",
        "conceptIntro": "Section II · Question 2 Rhetorical Analysis. Key concept: statistics vs anecdote serve different roles.",
        "prompt": "Excerpt (original practice): “You have the budget spreadsheet. I am asking you to hear the daily sequence the spreadsheet does not show.”\n\nExcerpt (original practice): “You have the budget spreadsheet. I am asking you to hear the daily sequence the spreadsheet does not show.”\n\nExcerpt (original practice): “You have the budget spreadsheet. I am asking you to hear the daily sequence the spreadsheet does not show.”\n\nWhen is an anecdote stronger than a statistic in a local policy op-ed?\n\n(a) Identify the rhetorical situation (speaker, audience, purpose).\n(b) Analyze TWO rhetorical choices and their effects.",
        "hints": [
          "Humanizes issue; less persuasive for broad causal claims alone."
        ],
        "blankSteps": [
          "(a) ______",
          "(b) ______"
        ],
        "visibleSteps": [
          "Answer each labeled part in AP free-response style."
        ],
        "examSection": "Section II · Question 2 Rhetorical Analysis"
      }
    ],
    "examFormatNote": "Section I: 45 four-choice MCQ (reading + writing revision, 60 min). Section II: Synthesis, Rhetorical Analysis, Argument (2 h 15 min)."
  },
  {
    "id": "englit-gen-analysis-c",
    "title": "AP English Literature — Close Reading Set C",
    "subject": "AP English Literature",
    "kind": "generated",
    "description": "Prose narrator and dramatic conflict. Official exam shape: Section I: 55 four-choice MCQ on poetry, prose, and drama (60 min). Section II: poetry analysis, prose analysis, literary argument.",
    "generationNote": "Original lit analysis Set C prompts.",
    "estimatedMinutes": 40,
    "difficultyTier": 3,
    "tags": [
      "literature",
      "generated"
    ],
    "items": [
      {
        "id": "aplit-cr-c1",
        "format": "frq_half",
        "conceptId": "elit-prose-voice",
        "conceptIntro": "Section II · Prose fiction analysis. Key concept: narrator reliability affects theme.",
        "prompt": "Passage (original practice): “She counted the clock’s ticks as if they were footsteps she still owed the hallway.”\n\nPassage (original practice): “She counted the clock’s ticks as if they were footsteps she still owed the hallway.”\n\nPassage (original practice): “She counted the clock’s ticks as if they were footsteps she still owed the hallway.”\n\nA first-person narrator admits they 'might remember wrong.' How could that affect the reader's trust?\n\n(a) Make a defensible claim about the passage.\n(b) Support it with TWO specific textual details.",
        "blankSteps": [
          "Effect on trust: ______",
          "Link to theme: ______"
        ],
        "hints": [
          "Unreliable narration invites skepticism; theme about memory or bias."
        ],
        "visibleSteps": [
          "Answer each labeled part in AP free-response style."
        ],
        "examSection": "Section II · Prose fiction analysis"
      },
      {
        "id": "aplit-cr-c2",
        "format": "frq_half",
        "conceptId": "elit-drama-conflict",
        "conceptIntro": "Section II · Literary argument. Key concept: external vs internal conflict.",
        "prompt": "Passage (original practice): “She counted the clock’s ticks as if they were footsteps she still owed the hallway.”\n\nPassage (original practice): “She counted the clock’s ticks as if they were footsteps she still owed the hallway.”\n\nPassage (original practice): “She counted the clock’s ticks as if they were footsteps she still owed the hallway.”\n\nDistinguish external and internal conflict in a play where a character hides a secret from family.\n\n(a) Make a defensible claim about the passage.\n(b) Support it with TWO specific textual details.",
        "hints": [
          "External: family confrontation; internal: guilt or fear."
        ],
        "blankSteps": [
          "(a) ______",
          "(b) ______"
        ],
        "visibleSteps": [
          "Answer each labeled part in AP free-response style."
        ],
        "examSection": "Section II · Literary argument"
      }
    ],
    "examFormatNote": "Section I: 55 four-choice MCQ on poetry, prose, and drama (60 min). Section II: poetry analysis, prose analysis, literary argument."
  }
];

/** Humanities AP Set D — additional challenge sets. */
export const apHumanitiesSetD: Questionnaire[] = [
  {
    "id": "ush-gen-sourcing-d",
    "title": "AP US History — Argument Set D",
    "subject": "AP US History",
    "kind": "generated",
    "description": "Thesis refinement and counterargument in LEQ/DBQ style. Official exam shape: Section I: 55 stimulus MCQ + 3 SAQs. Section II: 1 DBQ + 1 LEQ.",
    "generationNote": "Original USH Set D prompts.",
    "estimatedMinutes": 40,
    "difficultyTier": 3,
    "tags": [
      "LEQ",
      "DBQ",
      "generated"
    ],
    "items": [
      {
        "id": "ush-src-d1",
        "format": "frq_half",
        "conceptId": "ush-gilded-age",
        "conceptIntro": "Section I Part B · Short-Answer Question. Key concept: qualify thesis with limits.",
        "prompt": "Write a two-sentence thesis: To what extent did Gilded Age industrialization benefit American workers?\n\n(a) Identify or describe ONE relevant example.\n(b) Explain a cause, effect, or reason using specific evidence.",
        "blankSteps": [
          "(a) ______",
          "(b) ______"
        ],
        "hints": [
          "Acknowledge wages/jobs vs harsh conditions and inequality."
        ],
        "visibleSteps": [
          "Answer each labeled part in AP free-response style."
        ],
        "examSection": "Section I Part B · Short-Answer Question"
      },
      {
        "id": "ush-src-d2",
        "format": "frq_half",
        "conceptId": "ush-civil-rights",
        "conceptIntro": "Section I Part B · Short-Answer Question. Key concept: federal vs grassroots change.",
        "prompt": "How did grassroots organizing and federal action both contribute to civil rights gains, 1954–1968?\n\n(a) Identify or describe ONE relevant example.\n(b) Explain a cause, effect, or reason using specific evidence.",
        "hints": [
          "Courts/legislation + boycotts, marches, local activists."
        ],
        "blankSteps": [
          "(a) ______",
          "(b) ______"
        ],
        "visibleSteps": [
          "Answer each labeled part in AP free-response style."
        ],
        "examSection": "Section I Part B · Short-Answer Question"
      }
    ],
    "examFormatNote": "Section I: 55 stimulus MCQ + 3 SAQs. Section II: 1 DBQ + 1 LEQ."
  },
  {
    "id": "world-gen-comparison-d",
    "title": "AP World History — Causation Set D",
    "subject": "AP World History",
    "kind": "generated",
    "description": "Globalization and environmental change. Official exam shape: Section I: 55 stimulus MCQ + 3 SAQs. Section II: 1 DBQ + 1 LEQ.",
    "generationNote": "Original world history Set D prompts.",
    "estimatedMinutes": 40,
    "difficultyTier": 3,
    "tags": [
      "LEQ",
      "generated"
    ],
    "items": [
      {
        "id": "wh-comp-d1",
        "format": "frq_half",
        "conceptId": "whap-globalization",
        "conceptIntro": "Section I Part B · Short-Answer Question. Key concept: technology accelerates exchange.",
        "prompt": "Explain one cause and one effect of increased global trade, 1900–present.\n\n(a) Identify or describe ONE relevant example.\n(b) Explain a cause, effect, or reason using specific evidence.",
        "blankSteps": [
          "(a) ______",
          "(b) ______"
        ],
        "hints": [
          "Container shipping, WTO; supply chains, cultural diffusion."
        ],
        "visibleSteps": [
          "Answer each labeled part in AP free-response style."
        ],
        "examSection": "Section I Part B · Short-Answer Question"
      },
      {
        "id": "wh-comp-d2",
        "format": "frq_half",
        "conceptId": "whap-decolonization",
        "conceptIntro": "Section I Part B · Short-Answer Question. Key concept: Cold War shaped postcolonial paths.",
        "prompt": "Why did some newly independent states align with superpowers during the Cold War?\n\n(a) Identify or describe ONE relevant example.\n(b) Explain a cause, effect, or reason using specific evidence.",
        "hints": [
          "Aid, security, ideology; avoid isolation."
        ],
        "blankSteps": [
          "(a) ______",
          "(b) ______"
        ],
        "visibleSteps": [
          "Answer each labeled part in AP free-response style."
        ],
        "examSection": "Section I Part B · Short-Answer Question"
      }
    ],
    "examFormatNote": "Section I: 55 stimulus MCQ + 3 SAQs. Section II: 1 DBQ + 1 LEQ."
  },
  {
    "id": "eurohist-gen-d",
    "title": "AP European History — Comparison Set D",
    "subject": "AP European History",
    "kind": "generated",
    "description": "Revolution and nationalism. Official exam shape: Section I: 55 stimulus MCQ + 3 SAQs. Section II: 1 DBQ + 1 LEQ.",
    "generationNote": "Original Euro Set D prompts.",
    "estimatedMinutes": 40,
    "difficultyTier": 3,
    "tags": [
      "LEQ",
      "generated"
    ],
    "items": [
      {
        "id": "eur-ctx-d1",
        "format": "frq_half",
        "conceptId": "euro-napoleonic",
        "conceptIntro": "Section I Part B · Short-Answer Question. Key concept: revolution exports ideas and war.",
        "prompt": "Compare how the French Revolution influenced one European state and one Latin American movement.\n\n(a) Identify or describe ONE relevant example.\n(b) Explain a cause, effect, or reason using specific evidence.",
        "blankSteps": [
          "(a) ______",
          "(b) ______"
        ],
        "hints": [
          "Legal codes, nationalism, independence wars."
        ],
        "visibleSteps": [
          "Answer each labeled part in AP free-response style."
        ],
        "examSection": "Section I Part B · Short-Answer Question"
      },
      {
        "id": "eur-ctx-d2",
        "format": "frq_half",
        "conceptId": "euro-enlightenment",
        "conceptIntro": "Section I Part B · Short-Answer Question. Key concept: salons and print culture spread ideas.",
        "prompt": "How did print culture help spread Enlightenment ideas beyond elite circles?\n\n(a) Identify or describe ONE relevant example.\n(b) Explain a cause, effect, or reason using specific evidence.",
        "hints": [
          "Pamphlets, encyclopedias, literacy, coffeehouses."
        ],
        "blankSteps": [
          "(a) ______",
          "(b) ______"
        ],
        "visibleSteps": [
          "Answer each labeled part in AP free-response style."
        ],
        "examSection": "Section I Part B · Short-Answer Question"
      }
    ],
    "examFormatNote": "Section I: 55 stimulus MCQ + 3 SAQs. Section II: 1 DBQ + 1 LEQ."
  },
  {
    "id": "englang-gen-rhetoric-d",
    "title": "AP English Language — Synthesis Set D",
    "subject": "AP English Language",
    "kind": "generated",
    "description": "Multi-source argument construction. Official exam shape: Section I: 45 four-choice MCQ (reading + writing revision, 60 min). Section II: Synthesis, Rhetorical Analysis, Argument (2 h 15 min).",
    "generationNote": "Original synthesis Set D prompts.",
    "estimatedMinutes": 40,
    "difficultyTier": 3,
    "tags": [
      "synthesis",
      "generated"
    ],
    "items": [
      {
        "id": "aplang-rhet-d1",
        "format": "frq_half",
        "conceptId": "elang-synthesis",
        "conceptIntro": "Section II · Question 1 Synthesis. Key concept: sources must interact in paragraphs.",
        "prompt": "Outline a synthesis paragraph on public transit funding using one statistic source and one local anecdote.\n\n(a) State a defensible thesis.\n(b) Support it with specific evidence and commentary.",
        "blankSteps": [
          "Topic sentence: ______",
          "Source interaction: ______"
        ],
        "hints": [
          "Anecdote humanizes; statistic shows scale — link both to claim."
        ],
        "visibleSteps": [
          "Answer each labeled part in AP free-response style."
        ],
        "examSection": "Section II · Question 1 Synthesis"
      },
      {
        "id": "aplang-rhet-d2",
        "format": "frq_half",
        "conceptId": "elang-rhetoric",
        "conceptIntro": "Section II · Question 1 Synthesis. Key concept: concession strengthens ethos.",
        "prompt": "Write one sentence conceding a counterargument about school start times, then refuting it.\n\n(a) State a defensible thesis.\n(b) Support it with specific evidence and commentary.",
        "hints": [
          "Although… however… structure."
        ],
        "blankSteps": [
          "(a) ______",
          "(b) ______"
        ],
        "visibleSteps": [
          "Answer each labeled part in AP free-response style."
        ],
        "examSection": "Section II · Question 1 Synthesis"
      }
    ],
    "examFormatNote": "Section I: 45 four-choice MCQ (reading + writing revision, 60 min). Section II: Synthesis, Rhetorical Analysis, Argument (2 h 15 min)."
  },
  {
    "id": "englit-gen-analysis-d",
    "title": "AP English Literature — Theme Set D",
    "subject": "AP English Literature",
    "kind": "generated",
    "description": "Theme statements and structural choices. Official exam shape: Section I: 55 four-choice MCQ on poetry, prose, and drama (60 min). Section II: poetry analysis, prose analysis, literary argument.",
    "generationNote": "Original lit analysis Set D prompts.",
    "estimatedMinutes": 40,
    "difficultyTier": 3,
    "tags": [
      "literature",
      "generated"
    ],
    "items": [
      {
        "id": "aplit-cr-d1",
        "format": "frq_half",
        "conceptId": "elit-theme",
        "conceptIntro": "Section II · Literary argument. Key concept: theme is arguable insight, not topic.",
        "prompt": "Passage (original practice): “She counted the clock’s ticks as if they were footsteps she still owed the hallway.”\n\nPassage (original practice): “She counted the clock’s ticks as if they were footsteps she still owed the hallway.”\n\nPassage (original practice): “She counted the clock’s ticks as if they were footsteps she still owed the hallway.”\n\nWrite a theme statement for a novel where characters repeatedly fail to communicate.\n\n(a) Make a defensible claim about the passage.\n(b) Support it with TWO specific textual details.",
        "blankSteps": [
          "Theme: ______",
          "Evidence direction: ______"
        ],
        "hints": [
          "Avoid one-word topics; claim about isolation or misunderstanding."
        ],
        "visibleSteps": [
          "Answer each labeled part in AP free-response style."
        ],
        "examSection": "Section II · Literary argument"
      },
      {
        "id": "aplit-cr-d2",
        "format": "frq_half",
        "conceptId": "elit-poetry",
        "conceptIntro": "Section II · Poetry analysis. Key concept: form reinforces meaning.",
        "prompt": "Poem (original practice): “The shutters / did not wait for the sentence to end / the rain kept walking into the kitchen.”\n\nPoem (original practice): “The shutters / did not wait for the sentence to end / the rain kept walking into the kitchen.”\n\nPoem (original practice): “The shutters / did not wait for the sentence to end / the rain kept walking into the kitchen.”\n\nHow can a poem's short, end-stopped lines affect pacing in a grief narrative?\n\n(a) Make a defensible claim about the passage.\n(b) Support it with TWO specific textual details.",
        "hints": [
          "Creates pauses, weight, finality."
        ],
        "blankSteps": [
          "(a) ______",
          "(b) ______"
        ],
        "visibleSteps": [
          "Answer each labeled part in AP free-response style."
        ],
        "examSection": "Section II · Poetry analysis"
      }
    ],
    "examFormatNote": "Section I: 55 four-choice MCQ on poetry, prose, and drama (60 min). Section II: poetry analysis, prose analysis, literary argument."
  }
];
