import { Questionnaire } from "@/lib/types";

/** Humanities AP Set E — CED depth aligned with STEM Set E coverage. */
export const apHumanitiesSetE: Questionnaire[] = [
  {
    "id": "ush-ced-set-e",
    "title": "AP US History — CED Depth Set E",
    "subject": "AP US History",
    "kind": "generated",
    "description": "Contextualization, periodization, and civil rights depth. Official exam shape: Section I: 55 stimulus MCQ + 3 SAQs. Section II: 1 DBQ + 1 LEQ.",
    "generationNote": "Original USH CED Set E prompts.",
    "estimatedMinutes": 35,
    "difficultyTier": 2,
    "tags": [
      "ced",
      "DBQ",
      "LEQ",
      "generated"
    ],
    "items": [
      {
        "id": "ush-ced-e1",
        "format": "frq_half",
        "conceptId": "ush-new-deal",
        "conceptIntro": "Section I Part B · Short-Answer Question. Key concept: New Deal expanded federal economic role.",
        "prompt": "Provide one piece of context BEFORE 1933 and one consequence AFTER 1940 for evaluating the New Deal's legacy.\n\n(a) Identify or describe ONE relevant example.\n(b) Explain a cause, effect, or reason using specific evidence.",
        "blankSteps": [
          "(a) ______",
          "(b) ______"
        ],
        "hints": [
          "Before: Great Depression banking collapse.",
          "After: Social Security, stronger federal role."
        ],
        "blankAnswers": [
          "Great Depression / banking crisis",
          "Social Security, expanded federal role"
        ],
        "answerKey": "Before: Great Depression context; After: lasting programs like Social Security.",
        "visibleSteps": [
          "Answer each labeled part in AP free-response style."
        ],
        "examSection": "Section I Part B · Short-Answer Question"
      },
      {
        "id": "ush-ced-e2",
        "format": "frq_half",
        "conceptId": "ush-civil-rights",
        "conceptIntro": "Section I Part B · Short-Answer Question. Key concept: grassroots + federal action both matter.",
        "prompt": "Why was the 1964 Civil Rights Act not sufficient on its own to end discrimination in daily life?\n\n(a) Identify or describe ONE relevant example.\n(b) Explain a cause, effect, or reason using specific evidence.",
        "hints": [
          "Implementation, local resistance, economic inequality persisted."
        ],
        "answerKey": "Law changed formal rules; de facto segregation, enforcement gaps, and economic barriers remained.",
        "blankSteps": [
          "(a) ______",
          "(b) ______"
        ],
        "visibleSteps": [
          "Answer each labeled part in AP free-response style."
        ],
        "examSection": "Section I Part B · Short-Answer Question"
      },
      {
        "id": "ush-ced-e3",
        "format": "frq_half",
        "conceptId": "ush-cold-war",
        "conceptIntro": "Section I Part B · Short-Answer Question. Key concept: Cold War shaped domestic politics.",
        "prompt": "How did Cold War anxiety affect civil liberties in the United States in the 1950s? Give one example.\n\n(a) Identify or describe ONE relevant example.\n(b) Explain a cause, effect, or reason using specific evidence.",
        "blankSteps": [
          "(a) ______",
          "(b) ______"
        ],
        "hints": [
          "McCarthyism, loyalty oaths, HUAC hearings."
        ],
        "blankAnswers": [
          "McCarthy hearings → fear of dissent"
        ],
        "answerKey": "Example: McCarthyism / loyalty programs chilled free speech and association.",
        "visibleSteps": [
          "Answer each labeled part in AP free-response style."
        ],
        "examSection": "Section I Part B · Short-Answer Question"
      }
    ],
    "examFormatNote": "Section I: 55 stimulus MCQ + 3 SAQs. Section II: 1 DBQ + 1 LEQ."
  },
  {
    "id": "euro-ced-set-e",
    "title": "AP European History — CED Depth Set E",
    "subject": "AP European History",
    "kind": "generated",
    "description": "Enlightenment, industrialization, and 20th-century conflict. Official exam shape: Section I: 55 stimulus MCQ + 3 SAQs. Section II: 1 DBQ + 1 LEQ.",
    "generationNote": "Original Euro CED Set E prompts.",
    "estimatedMinutes": 35,
    "difficultyTier": 2,
    "tags": [
      "ced",
      "LEQ",
      "generated"
    ],
    "items": [
      {
        "id": "euro-ced-e1",
        "format": "frq_half",
        "conceptId": "euro-enlightenment",
        "conceptIntro": "Section I Part B · Short-Answer Question. Key concept: Enlightenment ideas had limits in practice.",
        "prompt": "Give one way Enlightenment ideals coexisted with slavery or empire in the 18th century.\n\n(a) Identify or describe ONE relevant example.\n(b) Explain a cause, effect, or reason using specific evidence.",
        "hints": [
          "Rights language excluded women, enslaved people, colonized subjects."
        ],
        "answerKey": "Example: 'natural rights' rhetoric coexisted with Atlantic slavery and empire.",
        "blankSteps": [
          "(a) ______",
          "(b) ______"
        ],
        "visibleSteps": [
          "Answer each labeled part in AP free-response style."
        ],
        "examSection": "Section I Part B · Short-Answer Question"
      },
      {
        "id": "euro-ced-e2",
        "format": "frq_half",
        "conceptId": "euro-napoleonic",
        "conceptIntro": "Section I Part B · Short-Answer Question. Key concept: Napoleonic reforms spread beyond France.",
        "prompt": "Name one reform associated with Napoleonic rule and one region outside France affected by Napoleonic wars.\n\n(a) Identify or describe ONE relevant example.\n(b) Explain a cause, effect, or reason using specific evidence.",
        "blankSteps": [
          "(a) ______",
          "(b) ______"
        ],
        "hints": [
          "Napoleonic Code; Spain weakened → Latin American independence."
        ],
        "blankAnswers": [
          "Napoleonic Code",
          "Spain / Latin America"
        ],
        "answerKey": "Reform: Napoleonic Code; Region: Spain weakened → Latin American independence movements.",
        "visibleSteps": [
          "Answer each labeled part in AP free-response style."
        ],
        "examSection": "Section I Part B · Short-Answer Question"
      },
      {
        "id": "euro-ced-e3",
        "format": "frq_half",
        "conceptId": "euro-imperialism",
        "conceptIntro": "Section I Part B · Short-Answer Question. Key concept: industrial demand drove New Imperialism.",
        "prompt": "Explain one economic motive for European imperial expansion in Africa after 1870.\n\n(a) Identify or describe ONE relevant example.\n(b) Explain a cause, effect, or reason using specific evidence.",
        "blankSteps": [
          "(a) ______",
          "(b) ______"
        ],
        "hints": [
          "Raw materials, markets, strategic ports, investment."
        ],
        "blankAnswers": [
          "Raw materials / markets"
        ],
        "answerKey": "Industrial powers sought raw materials, markets, and strategic ports in Africa.",
        "visibleSteps": [
          "Answer each labeled part in AP free-response style."
        ],
        "examSection": "Section I Part B · Short-Answer Question"
      }
    ],
    "examFormatNote": "Section I: 55 stimulus MCQ + 3 SAQs. Section II: 1 DBQ + 1 LEQ."
  },
  {
    "id": "elang-ced-set-e",
    "title": "AP English Language — CED Depth Set E",
    "subject": "AP English Language",
    "kind": "generated",
    "description": "Rhetorical analysis, synthesis, and argument depth. Official exam shape: Section I: 45 four-choice MCQ (reading + writing revision, 60 min). Section II: Synthesis, Rhetorical Analysis, Argument (2 h 15 min).",
    "generationNote": "Original English Language CED Set E prompts.",
    "estimatedMinutes": 30,
    "difficultyTier": 2,
    "tags": [
      "ced",
      "rhetoric",
      "synthesis",
      "generated"
    ],
    "items": [
      {
        "id": "elang-ced-e1",
        "format": "frq_half",
        "conceptId": "elang-rhetoric",
        "conceptIntro": "Section II · Question 3 Argument. Key concept: commentary links evidence to claim.",
        "prompt": "A student writes: 'The author uses statistics.' Write one sentence of commentary that would strengthen this.\n\n(a) State a defensible thesis.\n(b) Support it with specific evidence and commentary.",
        "hints": [
          "Explain how the statistic supports the author's purpose or claim."
        ],
        "answerKey": "Sample: 'This statistic shows rising teen phone use, supporting the author's call for school phone limits.'",
        "blankSteps": [
          "(a) ______",
          "(b) ______"
        ],
        "visibleSteps": [
          "Answer each labeled part in AP free-response style."
        ],
        "examSection": "Section II · Question 3 Argument"
      },
      {
        "id": "elang-ced-e2",
        "format": "frq_half",
        "conceptId": "elang-synthesis",
        "conceptIntro": "Section II · Question 1 Synthesis. Key concept: sources must interact, not sit in separate paragraphs.",
        "prompt": "Two sources disagree on whether schools should ban phones. Write one sentence synthesizing them toward a qualified thesis.\n\n(a) State a defensible thesis.\n(b) Support it with specific evidence and commentary.",
        "blankSteps": [
          "(a) ______",
          "(b) ______"
        ],
        "hints": [
          "Acknowledge both; explain which limitation matters more."
        ],
        "blankAnswers": [
          "Qualified thesis acknowledging both sides"
        ],
        "answerKey": "Sample: 'While phones distract, structured classroom use may work if policies limit social apps.'",
        "visibleSteps": [
          "Answer each labeled part in AP free-response style."
        ],
        "examSection": "Section II · Question 1 Synthesis"
      },
      {
        "id": "elang-ced-e3",
        "format": "frq_half",
        "conceptId": "elang-audience-purpose",
        "conceptIntro": "Section II · Question 3 Argument. Key concept: same topic, different audiences need different appeals.",
        "prompt": "How might a writer arguing for later school start times address parents differently than administrators?\n\n(a) State a defensible thesis.\n(b) Support it with specific evidence and commentary.",
        "hints": [
          "Parents: health, family schedule; admins: buses, staffing, budgets."
        ],
        "answerKey": "Parents: teen sleep/health; admins: bus routes, staffing, budget constraints.",
        "blankSteps": [
          "(a) ______",
          "(b) ______"
        ],
        "visibleSteps": [
          "Answer each labeled part in AP free-response style."
        ],
        "examSection": "Section II · Question 3 Argument"
      }
    ],
    "examFormatNote": "Section I: 45 four-choice MCQ (reading + writing revision, 60 min). Section II: Synthesis, Rhetorical Analysis, Argument (2 h 15 min)."
  },
  {
    "id": "elit-ced-set-e",
    "title": "AP English Literature — CED Depth Set E",
    "subject": "AP English Literature",
    "kind": "generated",
    "description": "Poetry, prose, and drama close reading. Official exam shape: Section I: 55 four-choice MCQ on poetry, prose, and drama (60 min). Section II: poetry analysis, prose analysis, literary argument.",
    "generationNote": "Original English Literature CED Set E prompts.",
    "estimatedMinutes": 30,
    "difficultyTier": 2,
    "tags": [
      "ced",
      "poetry",
      "prose",
      "generated"
    ],
    "items": [
      {
        "id": "elit-ced-e1",
        "format": "frq_half",
        "conceptId": "elit-poetry",
        "conceptIntro": "Section II · Poetry analysis. Key concept: form shapes meaning.",
        "prompt": "Poem (original practice): “The shutters / did not wait for the sentence to end / the rain kept walking into the kitchen.”\n\nPoem (original practice): “The shutters / did not wait for the sentence to end / the rain kept walking into the kitchen.”\n\nPoem (original practice): “The shutters / did not wait for the sentence to end / the rain kept walking into the kitchen.”\n\nHow can enjambment (line running over without pause) create tension in a poem about waiting?\n\n(a) Make a defensible claim about the passage.\n(b) Support it with TWO specific textual details.",
        "hints": [
          "Unfinished lines mirror unresolved waiting; pace feels suspended."
        ],
        "answerKey": "Run-on lines delay closure, mirroring the speaker's unresolved waiting.",
        "blankSteps": [
          "(a) ______",
          "(b) ______"
        ],
        "visibleSteps": [
          "Answer each labeled part in AP free-response style."
        ],
        "examSection": "Section II · Poetry analysis"
      },
      {
        "id": "elit-ced-e2",
        "format": "frq_half",
        "conceptId": "elit-prose-voice",
        "conceptIntro": "Section II · Prose fiction analysis. Key concept: narrator voice affects theme.",
        "prompt": "Passage (original practice): “She counted the clock’s ticks as if they were footsteps she still owed the hallway.”\n\nPassage (original practice): “She counted the clock’s ticks as if they were footsteps she still owed the hallway.”\n\nPassage (original practice): “She counted the clock’s ticks as if they were footsteps she still owed the hallway.”\n\nWrite a thesis line analyzing how a first-person teenage narrator might critique adult hypocrisy through tone.\n\n(a) Make a defensible claim about the passage.\n(b) Support it with TWO specific textual details.",
        "blankSteps": [
          "(a) ______",
          "(b) ______"
        ],
        "hints": [
          "Topic + insight; avoid plot summary."
        ],
        "blankAnswers": [
          "Thesis with insight on tone/voice"
        ],
        "answerKey": "Sample thesis: 'The narrator's sarcastic tone exposes adult hypocrisy through understated observations.'",
        "visibleSteps": [
          "Answer each labeled part in AP free-response style."
        ],
        "examSection": "Section II · Prose fiction analysis"
      },
      {
        "id": "elit-ced-e3",
        "format": "frq_half",
        "conceptId": "elit-drama-conflict",
        "conceptIntro": "Section II · Literary argument. Key concept: stage directions reveal power.",
        "prompt": "Passage (original practice): “She counted the clock’s ticks as if they were footsteps she still owed the hallway.”\n\nPassage (original practice): “She counted the clock’s ticks as if they were footsteps she still owed the hallway.”\n\nPassage (original practice): “She counted the clock’s ticks as if they were footsteps she still owed the hallway.”\n\nWhy might a playwright describe a character 'speaking quietly while others shout' in a public scene?\n\n(a) Make a defensible claim about the passage.\n(b) Support it with TWO specific textual details.",
        "hints": [
          "Contrast shows control, intimidation, or hidden authority."
        ],
        "answerKey": "Quiet delivery amid chaos signals power, control, or menace through contrast.",
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
