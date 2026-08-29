import { Questionnaire } from "@/lib/types";

/** Set B generated FRQ practice — second unit/topic per subject (2 items each). */
export const apPracticeSetB: Questionnaire[] = [
  {
    "id": "stats-gen-inference-b",
    "title": "AP Statistics — Inference Set B",
    "subject": "AP Statistics",
    "kind": "generated",
    "description": "Type I/II errors and interpreting p-values. Official exam shape: Section I: 40 MCQ (90 min). Section II: 5 FRQs + 1 Investigative Task (90 min).",
    "generationNote": "Original inference Set B prompts.",
    "estimatedMinutes": 30,
    "difficultyTier": 2,
    "tags": [
      "inference",
      "generated"
    ],
    "items": [
      {
        "id": "stats-inf-b1",
        "format": "frq_half",
        "conceptIntro": "Section II Part A · Probability / sampling distributions. Key concept: p-value is P(data this extreme | H₀ true).",
        "prompt": "A test yields p = 0.03 at α = 0.05. State the decision regarding H₀ and what p = 0.03 means in context.\n\n(a) State the parameter, hypotheses, or procedure in context.\n(b) Carry out the method or interpret the result in context.",
        "hints": [
          "Reject H₀ when p < α.",
          "Do not say H₀ is 'proven false'."
        ],
        "blankSteps": [
          "(a) ______",
          "(b) ______"
        ],
        "visibleSteps": [
          "Answer each labeled part in AP free-response style."
        ],
        "examSection": "Section II Part A · Probability / sampling distributions"
      },
      {
        "id": "stats-inf-b2",
        "format": "frq_half",
        "conceptIntro": "Section II Part A · Probability / sampling distributions. Key concept: Type II error = fail to reject false H₀.",
        "prompt": "Explain Type I and Type II error for a test that H₀: μ = 50 vs Hₐ: μ ≠ 50 in a manufacturing setting.\n\n(a) State the parameter, hypotheses, or procedure in context.\n(b) Carry out the method or interpret the result in context.",
        "visibleSteps": [
          "Define each error in plain language.",
          "Give one consequence of each."
        ],
        "blankSteps": [
          "Type I: ______",
          "Type II: ______"
        ],
        "hints": [
          "Type I: reject true H₀.",
          "Type II: miss a real change."
        ],
        "examSection": "Section II Part A · Probability / sampling distributions"
      }
    ],
    "examFormatNote": "Section I: 40 MCQ (90 min). Section II: 5 FRQs + 1 Investigative Task (90 min)."
  },
  {
    "id": "psych-gen-research-b",
    "title": "AP Psychology — Research Methods Set B",
    "subject": "AP Psychology",
    "kind": "generated",
    "description": "Correlation vs causation and experimental controls. Official exam shape: Section I: 75 MCQ. Section II: 2 FRQs (concept application + research-method design).",
    "generationNote": "Original psych methods Set B prompts.",
    "estimatedMinutes": 25,
    "difficultyTier": 2,
    "tags": [
      "research",
      "generated"
    ],
    "items": [
      {
        "id": "psych-rm-b1",
        "format": "frq_half",
        "conceptIntro": "Section II · Article analysis / concept application. Key concept: correlation ≠ causation.",
        "prompt": "Ice cream sales and drowning deaths both rise in summer. Why should you not conclude ice cream causes drowning?\n\n(a) Apply the named psychological concept to the scenario.\n(b) Explain the application with a specific detail from the prompt.",
        "hints": [
          "Look for a third variable (temperature/season)."
        ],
        "blankSteps": [
          "(a) ______",
          "(b) ______"
        ],
        "visibleSteps": [
          "Answer each labeled part in AP free-response style."
        ],
        "examSection": "Section II · Article analysis / concept application"
      },
      {
        "id": "psych-rm-b2",
        "format": "frq_half",
        "conceptIntro": "Section II · Research-method FRQ. Key concept: random assignment vs random sampling.",
        "prompt": "Distinguish random assignment and random sampling. Which supports internal validity? Which supports generalization?\n\n(a) Apply the named psychological concept to the scenario.\n(b) Explain the application with a specific detail from the prompt.",
        "blankSteps": [
          "Random assignment: ______",
          "Random sampling: ______"
        ],
        "hints": [
          "Assignment → causation inside study.",
          "Sampling → population inference."
        ],
        "visibleSteps": [
          "Answer each labeled part in AP free-response style."
        ],
        "examSection": "Section II · Research-method FRQ"
      }
    ],
    "examFormatNote": "Section I: 75 MCQ. Section II: 2 FRQs (concept application + research-method design)."
  },
  {
    "id": "econ-micro-gen-b",
    "title": "AP Microeconomics — Elasticity Set B",
    "subject": "AP Microeconomics",
    "kind": "generated",
    "description": "Price elasticity and total revenue. Official exam shape: Section I: 60 MCQ (70 min). Section II: 3 FRQs — 1 long, 2 short (60 min).",
    "generationNote": "Original micro Set B prompts.",
    "estimatedMinutes": 25,
    "difficultyTier": 2,
    "tags": [
      "micro",
      "elasticity",
      "generated"
    ],
    "items": [
      {
        "id": "micro-el-b1",
        "format": "frq_half",
        "conceptIntro": "Section II · Short free response. Key concept: elastic demand |Ed| > 1.",
        "prompt": "If demand is elastic, what happens to total revenue when price increases? Explain in one sentence.\n\n(a) Identify the market, curve, or policy that is affected.\n(b) Describe the graph change (which curve shifts, or movement along a curve).\n(c) State the short-run effect on the relevant prices and quantities.",
        "hints": [
          "Quantity falls proportionally more than price rises."
        ],
        "blankSteps": [
          "(a) ______",
          "(b) ______",
          "(c) ______"
        ],
        "visibleSteps": [
          "Answer each labeled part in AP free-response style."
        ],
        "examSection": "Section II · Short free response"
      },
      {
        "id": "micro-el-b2",
        "format": "frq_half",
        "conceptIntro": "Section II · Long free response. Key concept: midpoint formula.",
        "prompt": "Price rises from $4 to $6 and quantity falls from 100 to 80. Compute |Ed| using the midpoint method.\n\n(a) Identify the market, curve, or policy that is affected.\n(b) Describe the graph change (which curve shifts, or movement along a curve).\n(c) State the short-run effect on the relevant prices and quantities.",
        "visibleSteps": [
          "Compute %ΔQ and %ΔP with midpoints."
        ],
        "blankSteps": [
          "(a) ______",
          "(b) ______",
          "(c) ______"
        ],
        "hints": [
          "Midpoint Q = 90, midpoint P = 5.",
          "|Ed| = |%ΔQ / %ΔP|."
        ],
        "examSection": "Section II · Long free response"
      }
    ],
    "examFormatNote": "Section I: 60 MCQ (70 min). Section II: 3 FRQs — 1 long, 2 short (60 min)."
  },
  {
    "id": "econ-macro-gen-b",
    "title": "AP Macroeconomics — Fiscal Policy Set B",
    "subject": "AP Macroeconomics",
    "kind": "generated",
    "description": "Multipliers and crowding out. Official exam shape: Section I: 60 MCQ (70 min). Section II: 3 FRQs — 1 long, 2 short (60 min).",
    "generationNote": "Original macro Set B prompts.",
    "estimatedMinutes": 25,
    "difficultyTier": 2,
    "tags": [
      "macro",
      "fiscal",
      "generated"
    ],
    "items": [
      {
        "id": "macro-fp-b1",
        "format": "frq_half",
        "conceptIntro": "Section II · Long free response. Key concept: expansionary fiscal policy.",
        "prompt": "During a recession, how can increased government spending affect AD and unemployment in the short run?\n\n(a) Identify the market, curve, or policy that is affected.\n(b) Describe the graph change (which curve shifts, or movement along a curve).\n(c) State the short-run effect on the relevant prices and quantities.",
        "hints": [
          "G shifts AD right.",
          "Unemployment may fall if output rises."
        ],
        "blankSteps": [
          "(a) ______",
          "(b) ______",
          "(c) ______"
        ],
        "visibleSteps": [
          "Answer each labeled part in AP free-response style."
        ],
        "examSection": "Section II · Long free response"
      },
      {
        "id": "macro-fp-b2",
        "format": "frq_half",
        "conceptIntro": "Section II · Short free response. Key concept: crowding out.",
        "prompt": "Explain how financing deficit spending by borrowing might reduce private investment.\n\n(a) Identify the market, curve, or policy that is affected.\n(b) Describe the graph change (which curve shifts, or movement along a curve).\n(c) State the short-run effect on the relevant prices and quantities.",
        "blankSteps": [
          "(a) ______",
          "(b) ______",
          "(c) ______"
        ],
        "hints": [
          "Higher demand for loanable funds → higher interest rates."
        ],
        "visibleSteps": [
          "Answer each labeled part in AP free-response style."
        ],
        "examSection": "Section II · Short free response"
      }
    ],
    "examFormatNote": "Section I: 60 MCQ (70 min). Section II: 3 FRQs — 1 long, 2 short (60 min)."
  },
  {
    "id": "ush-gen-sourcing-b",
    "title": "AP US History — Sourcing Set B",
    "subject": "AP US History",
    "kind": "generated",
    "description": "Audience and purpose in primary sources. Official exam shape: Section I: 55 stimulus MCQ + 3 SAQs. Section II: 1 DBQ + 1 LEQ.",
    "generationNote": "Original USH Set B prompts.",
    "estimatedMinutes": 30,
    "difficultyTier": 2,
    "tags": [
      "DBQ",
      "sourcing",
      "generated"
    ],
    "items": [
      {
        "id": "ush-src-b1",
        "format": "frq_half",
        "conceptIntro": "Section I Part B · Short-Answer Question. Key concept: intended audience shapes tone.",
        "prompt": "A 1963 speech to civil rights marchers vs a private memo to the president — how might audience change the message?\n\n(a) Identify or describe ONE relevant example.\n(b) Explain a cause, effect, or reason using specific evidence.",
        "blankSteps": [
          "(a) ______",
          "(b) ______"
        ],
        "hints": [
          "Public: inspirational.",
          "Private: strategic/constrained."
        ],
        "visibleSteps": [
          "Answer each labeled part in AP free-response style."
        ],
        "examSection": "Section I Part B · Short-Answer Question"
      },
      {
        "id": "ush-src-b2",
        "format": "frq_half",
        "conceptIntro": "Section I Part B · Short-Answer Question. Key concept: purpose (persuade, record, justify).",
        "prompt": "Why might a plantation ledger and an abolitionist pamphlet give different pictures of the same year?\n\n(a) Identify or describe ONE relevant example.\n(b) Explain a cause, effect, or reason using specific evidence.",
        "hints": [
          "Different authors, purposes, and audiences."
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
    "id": "world-gen-comparison-b",
    "title": "AP World History — Comparison Set B",
    "subject": "AP World History",
    "kind": "generated",
    "description": "Causation and continuity over time. Official exam shape: Section I: 55 stimulus MCQ + 3 SAQs. Section II: 1 DBQ + 1 LEQ.",
    "generationNote": "Original world history Set B prompts.",
    "estimatedMinutes": 30,
    "difficultyTier": 2,
    "tags": [
      "LEQ",
      "comparison",
      "generated"
    ],
    "items": [
      {
        "id": "wh-comp-b1",
        "format": "frq_half",
        "conceptIntro": "Section I Part B · Short-Answer Question. Key concept: valid comparison needs a shared category.",
        "prompt": "Compare how two empires (your choice, 1200–1450) administered diverse populations. One similarity, one difference.\n\n(a) Identify or describe ONE relevant example.\n(b) Explain a cause, effect, or reason using specific evidence.",
        "blankSteps": [
          "(a) ______",
          "(b) ______"
        ],
        "hints": [
          "Category: administration, taxation, religion."
        ],
        "visibleSteps": [
          "Answer each labeled part in AP free-response style."
        ],
        "examSection": "Section I Part B · Short-Answer Question"
      },
      {
        "id": "wh-comp-b2",
        "format": "frq_half",
        "conceptIntro": "Section I Part B · Short-Answer Question. Key concept: CCOT thesis needs continuity AND change.",
        "prompt": "Write one sentence thesis for CCOT in global trade networks 1450–1750.\n\n(a) Identify or describe ONE relevant example.\n(b) Explain a cause, effect, or reason using specific evidence.",
        "hints": [
          "Name what persisted and what transformed."
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
    "id": "englang-gen-rhetoric-b",
    "title": "AP English Language — Rhetoric Set B",
    "subject": "AP English Language",
    "kind": "generated",
    "description": "Line of reasoning and evidence types. Official exam shape: Section I: 45 four-choice MCQ (reading + writing revision, 60 min). Section II: Synthesis, Rhetorical Analysis, Argument (2 h 15 min).",
    "generationNote": "Original rhetoric Set B prompts.",
    "estimatedMinutes": 30,
    "difficultyTier": 2,
    "tags": [
      "rhetoric",
      "generated"
    ],
    "items": [
      {
        "id": "aplang-rhet-b1",
        "format": "frq_half",
        "conceptIntro": "Section II · Question 2 Rhetorical Analysis. Key concept: line of reasoning = claim → evidence → link.",
        "prompt": "Excerpt (original practice): “You have the budget spreadsheet. I am asking you to hear the daily sequence the spreadsheet does not show.”\n\nExcerpt (original practice): “You have the budget spreadsheet. I am asking you to hear the daily sequence the spreadsheet does not show.”\n\nExcerpt (original practice): “You have the budget spreadsheet. I am asking you to hear the daily sequence the spreadsheet does not show.”\n\nOutline the line of reasoning in an op-ed that opposes phone bans in schools (thesis + two evidence moves).\n\n(a) Identify the rhetorical situation (speaker, audience, purpose).\n(b) Analyze TWO rhetorical choices and their effects.",
        "blankSteps": [
          "Thesis: ______",
          "Evidence move 1: ______"
        ],
        "hints": [
          "Identify claim first.",
          "Note stats vs anecdotes."
        ],
        "visibleSteps": [
          "Answer each labeled part in AP free-response style."
        ],
        "examSection": "Section II · Question 2 Rhetorical Analysis"
      },
      {
        "id": "aplang-rhet-b2",
        "format": "frq_half",
        "conceptIntro": "Section II · Question 2 Rhetorical Analysis. Key concept: concession strengthens ethos.",
        "prompt": "Excerpt (original practice): “You have the budget spreadsheet. I am asking you to hear the daily sequence the spreadsheet does not show.”\n\nExcerpt (original practice): “You have the budget spreadsheet. I am asking you to hear the daily sequence the spreadsheet does not show.”\n\nExcerpt (original practice): “You have the budget spreadsheet. I am asking you to hear the daily sequence the spreadsheet does not show.”\n\nWhy might a writer concede a counterpoint before refuting it?\n\n(a) Identify the rhetorical situation (speaker, audience, purpose).\n(b) Analyze TWO rhetorical choices and their effects.",
        "hints": [
          "Shows fairness; builds trust with audience."
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
    "id": "englit-gen-analysis-b",
    "title": "AP English Literature — Close Reading Set B",
    "subject": "AP English Literature",
    "kind": "generated",
    "description": "Imagery, tone, and structure. Official exam shape: Section I: 55 four-choice MCQ on poetry, prose, and drama (60 min). Section II: poetry analysis, prose analysis, literary argument.",
    "generationNote": "Original lit analysis Set B prompts.",
    "estimatedMinutes": 35,
    "difficultyTier": 2,
    "tags": [
      "literature",
      "generated"
    ],
    "items": [
      {
        "id": "aplit-cr-b1",
        "format": "frq_half",
        "conceptIntro": "Section II · Literary argument. Key concept: tie device to meaning, not device spotting.",
        "prompt": "Passage (original practice): “She counted the clock’s ticks as if they were footsteps she still owed the hallway.”\n\nPassage (original practice): “She counted the clock’s ticks as if they were footsteps she still owed the hallway.”\n\nPassage (original practice): “She counted the clock’s ticks as if they were footsteps she still owed the hallway.”\n\nA scene repeats images of closed doors. What might that motif suggest about the character's choices?\n\n(a) Make a defensible claim about the passage.\n(b) Support it with TWO specific textual details.",
        "blankSteps": [
          "Motif claim: ______",
          "Textual link: ______"
        ],
        "hints": [
          "Closed doors → blocked opportunities or self-isolation."
        ],
        "visibleSteps": [
          "Answer each labeled part in AP free-response style."
        ],
        "examSection": "Section II · Literary argument"
      },
      {
        "id": "aplit-cr-b2",
        "format": "frq_half",
        "conceptIntro": "Section II · Literary argument. Key concept: shift in tone.",
        "prompt": "Passage (original practice): “She counted the clock’s ticks as if they were footsteps she still owed the hallway.”\n\nPassage (original practice): “She counted the clock’s ticks as if they were footsteps she still owed the hallway.”\n\nPassage (original practice): “She counted the clock’s ticks as if they were footsteps she still owed the hallway.”\n\nHow can a volta in a sonnet change the reader's understanding of the speaker's attitude?\n\n(a) Make a defensible claim about the passage.\n(b) Support it with TWO specific textual details.",
        "hints": [
          "Turn introduces contrast or resolution."
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
  },
  {
    "id": "envsci-gen-ecosystems-b",
    "title": "AP Environmental Science — Ecosystems Set B",
    "subject": "AP Environmental Science",
    "kind": "generated",
    "description": "Biogeochemical cycles and human disturbance. Official exam shape: Section I: 80 MCQ. Section II: 3 FRQs (including a lab/data-analysis question).",
    "generationNote": "Original ES Set B prompts.",
    "estimatedMinutes": 25,
    "difficultyTier": 2,
    "tags": [
      "ecosystems",
      "generated"
    ],
    "items": [
      {
        "id": "es-eco-b1",
        "format": "frq_half",
        "conceptIntro": "Section II · Analyze an environmental problem. Key concept: eutrophication sequence.",
        "prompt": "Describe how agricultural runoff can lead to a fish kill in a lake.\n\n(a) Identify the environmental process or quantity.\n(b) Explain a cause, effect, or calculation using evidence from the prompt.",
        "hints": [
          "Nutrients → algal bloom → decomposition → low DO."
        ],
        "blankSteps": [
          "(a) ______",
          "(b) ______"
        ],
        "visibleSteps": [
          "Answer each labeled part in AP free-response style."
        ],
        "examSection": "Section II · Analyze an environmental problem"
      },
      {
        "id": "es-eco-b2",
        "format": "frq_half",
        "conceptIntro": "Section II · Analyze an environmental problem. Key concept: keystone species.",
        "prompt": "Explain how removing a keystone predator can restructure a food web.\n\n(a) Identify the environmental process or quantity.\n(b) Explain a cause, effect, or calculation using evidence from the prompt.",
        "blankSteps": [
          "Short-term effect: ______",
          "Long-term effect: ______"
        ],
        "hints": [
          "Prey population explosion.",
          "Competition shifts."
        ],
        "visibleSteps": [
          "Answer each labeled part in AP free-response style."
        ],
        "examSection": "Section II · Analyze an environmental problem"
      }
    ],
    "examFormatNote": "Section I: 80 MCQ. Section II: 3 FRQs (including a lab/data-analysis question)."
  },
  {
    "id": "csa-gen-methods-b",
    "title": "AP Computer Science A — Arrays Set B",
    "subject": "AP Computer Science A",
    "kind": "generated",
    "description": "Array traversal and run-time reasoning. Official exam shape: Section I: 42 MCQ. Section II: 4 FRQs (methods, class design, array/ArrayList, 2D array).",
    "generationNote": "Original CSA Set B prompts.",
    "estimatedMinutes": 25,
    "difficultyTier": 2,
    "tags": [
      "java",
      "arrays",
      "generated"
    ],
    "items": [
      {
        "id": "csa-m-b1",
        "format": "frq_half",
        "conceptIntro": "Section II · 2D array. Key concept: enhanced for vs indexed loop.",
        "prompt": "When might you need an indexed for loop instead of a for-each loop over an int[]?\n\n(a) Write the method signature or complete the required implementation.\n(b) Trace the result for a concrete input, or explain a correctness condition.",
        "hints": [
          "Need index, modify neighbors, or reverse traversal."
        ],
        "blankSteps": [
          "(a) ______",
          "(b) ______"
        ],
        "visibleSteps": [
          "Answer each labeled part in AP free-response style."
        ],
        "examSection": "Section II · 2D array"
      },
      {
        "id": "csa-m-b2",
        "format": "frq_half",
        "conceptIntro": "Section II · 2D array. Key concept: run-time of linear scan.",
        "prompt": "Describe an algorithm to find the second-largest value in an unsorted int[] in one pass.\n\n(a) Write the method signature or complete the required implementation.\n(b) Trace the result for a concrete input, or explain a correctness condition.",
        "visibleSteps": [
          "Track largest and secondLargest while iterating."
        ],
        "blankSteps": [
          "(a) ______",
          "(b) ______"
        ],
        "hints": [
          "Update both when new max appears."
        ],
        "examSection": "Section II · 2D array"
      }
    ],
    "examFormatNote": "Section I: 42 MCQ. Section II: 4 FRQs (methods, class design, array/ArrayList, 2D array)."
  },
  {
    "id": "csp-gen-data-b",
    "title": "AP Computer Science Principles — Data Set B",
    "subject": "AP Computer Science Principles",
    "kind": "generated",
    "description": "Privacy, metadata, and clean data. Official exam shape: Section I: 70 MCQ (including stimulus questions). Create performance task is separate.",
    "generationNote": "Original CSP Set B prompts.",
    "estimatedMinutes": 20,
    "difficultyTier": 1,
    "tags": [
      "data",
      "generated"
    ],
    "items": [
      {
        "id": "csp-d-b1",
        "format": "frq_half",
        "conceptIntro": "Create performance task · written responses (practice). Key concept: metadata reveals patterns.",
        "prompt": "Why can anonymized location metadata still threaten privacy?\n\n(a) Identify the computing concept in the scenario.\n(b) Explain an effect, limitation, or trade-off.",
        "hints": [
          "Home/work patterns re-identify individuals."
        ],
        "blankSteps": [
          "(a) ______",
          "(b) ______"
        ],
        "visibleSteps": [
          "Answer each labeled part in AP free-response style."
        ],
        "examSection": "Create performance task · written responses (practice)"
      },
      {
        "id": "csp-d-b2",
        "format": "frq_half",
        "conceptIntro": "Create performance task · written responses (practice). Key concept: data cleaning.",
        "prompt": "A spreadsheet mixes dates as 03/04/2025 and 2025-03-04. Give two steps to clean the column.\n\n(a) Identify the computing concept in the scenario.\n(b) Explain an effect, limitation, or trade-off.",
        "blankSteps": [
          "Step 1: ______",
          "Step 2: ______"
        ],
        "hints": [
          "Standardize format.",
          "Validate or parse errors."
        ],
        "visibleSteps": [
          "Answer each labeled part in AP free-response style."
        ],
        "examSection": "Create performance task · written responses (practice)"
      }
    ],
    "examFormatNote": "Section I: 70 MCQ (including stimulus questions). Create performance task is separate."
  },
  {
    "id": "phys2-gen-waves-b",
    "title": "AP Physics 2 — Waves Set B",
    "subject": "AP Physics 2",
    "kind": "generated",
    "description": "Standing waves and boundary conditions. Official exam shape: Section I: 40 four-choice MCQ. Section II: 4 FRQs (mathematical routines, representations, experimental design, qualitative/quantitative translation).",
    "generationNote": "Original Physics 2 Set B prompts.",
    "estimatedMinutes": 25,
    "difficultyTier": 2,
    "tags": [
      "waves",
      "generated"
    ],
    "items": [
      {
        "id": "phys2-w-b1",
        "format": "frq_half",
        "conceptIntro": "Section II · Qualitative/Quantitative Translation. Key concept: nodes and antinodes.",
        "prompt": "For a string fixed at both ends, where are nodes and antinodes relative to the ends?\n\n(a) Make a qualitative comparison or ranking and justify it.\n(b) Support the comparison with a calculation or derived relationship.",
        "hints": [
          "Fixed ends are nodes.",
          "First harmonic: one antinode at center."
        ],
        "blankSteps": [
          "(a) ______",
          "(b) ______"
        ],
        "visibleSteps": [
          "Answer each labeled part in AP free-response style."
        ],
        "examSection": "Section II · Qualitative/Quantitative Translation"
      },
      {
        "id": "phys2-w-b2",
        "format": "frq_half",
        "conceptIntro": "Section II · Mathematical Routines. Key concept: f₁ = v / 2L for fundamental string.",
        "prompt": "A string of length 0.80 m has wave speed 320 m/s. Find the fundamental frequency.\n\n(a) List known quantities and the unknown.\n(b) Write a symbolic equation relating them.\n(c) Calculate a numerical result with units.",
        "visibleSteps": [
          "Use f = v / λ.",
          "Fundamental λ = 2L."
        ],
        "blankSteps": [
          "(a) ______",
          "(b) ______",
          "(c) ______"
        ],
        "hints": [
          "λ = 1.6 m.",
          "f = 320 / 1.6."
        ],
        "examSection": "Section II · Mathematical Routines"
      }
    ],
    "examFormatNote": "Section I: 40 four-choice MCQ. Section II: 4 FRQs (mathematical routines, representations, experimental design, qualitative/quantitative translation)."
  },
  {
    "id": "physc-mech-gen-b",
    "title": "AP Physics C: Mechanics — Rotation Set B",
    "subject": "AP Physics C: Mechanics",
    "kind": "generated",
    "description": "Angular momentum conservation. Official exam shape: Section I: 35 MCQ (45 min, calculator). Section II: 3 FRQs (45 min).",
    "generationNote": "Original Phys C Mech Set B prompts.",
    "estimatedMinutes": 30,
    "difficultyTier": 3,
    "tags": [
      "rotation",
      "generated"
    ],
    "items": [
      {
        "id": "phycm-r-b1",
        "format": "frq_half",
        "conceptIntro": "Section II · Free Response 2. Key concept: L = Iω conserved if τ_ext = 0.",
        "prompt": "A spinning figure skater pulls arms in, reducing I. What happens to ω? Explain using angular momentum.\n\n(a) List known quantities and the unknown.\n(b) Write a symbolic equation relating them.\n(c) Calculate a numerical result with units.",
        "blankSteps": [
          "(a) ______",
          "(b) ______",
          "(c) ______"
        ],
        "hints": [
          "L constant → smaller I means larger ω."
        ],
        "visibleSteps": [
          "Answer each labeled part in AP free-response style."
        ],
        "examSection": "Section II · Free Response 2"
      },
      {
        "id": "phycm-r-b2",
        "format": "frq_half",
        "conceptIntro": "Section II · Free Response 3. Key concept: rolling without slipping v = Rω.",
        "prompt": "A uniform disk of radius R rolls without slipping down a gentle incline, so the contact point is instantaneously at rest. How are v_cm and ω related?\n\n(a) List known quantities and the unknown.\n(b) Write a symbolic equation relating them.\n(c) Calculate a numerical result with units.",
        "hints": [
          "v = Rω for rolling without slipping."
        ],
        "blankSteps": [
          "(a) ______",
          "(b) ______",
          "(c) ______"
        ],
        "visibleSteps": [
          "Answer each labeled part in AP free-response style."
        ],
        "examSection": "Section II · Free Response 3"
      }
    ],
    "examFormatNote": "Section I: 35 MCQ (45 min, calculator). Section II: 3 FRQs (45 min)."
  },
  {
    "id": "physc-em-gen-b",
    "title": "AP Physics C: E&M — Capacitors Set B",
    "subject": "AP Physics C: E&M",
    "kind": "generated",
    "description": "Capacitor energy and dielectrics. Official exam shape: Section I: 35 MCQ (45 min, calculator). Section II: 3 FRQs (45 min).",
    "generationNote": "Original E&M Set B prompts.",
    "estimatedMinutes": 30,
    "difficultyTier": 3,
    "tags": [
      "electromagnetism",
      "generated"
    ],
    "items": [
      {
        "id": "phycem-c-b1",
        "format": "frq_half",
        "conceptIntro": "Section II · Free Response 3. Key concept: U = ½CV².",
        "prompt": "A capacitor is charged then disconnected from the battery. A dielectric is inserted. What happens to stored energy?\n\n(a) List known quantities and the unknown.\n(b) Write a symbolic equation relating them.\n(c) Calculate a numerical result with units.",
        "visibleSteps": [
          "Q fixed when disconnected.",
          "C increases with κ."
        ],
        "blankSteps": [
          "(a) ______",
          "(b) ______",
          "(c) ______"
        ],
        "hints": [
          "U = Q²/(2C) with Q constant."
        ],
        "examSection": "Section II · Free Response 3"
      },
      {
        "id": "phycem-c-b2",
        "format": "frq_half",
        "conceptIntro": "Section II · Free Response 2. Key concept: parallel plate C ∝ A/d.",
        "prompt": "Two large parallel plates of fixed area A form a vacuum capacitor on a lab bench. How does doubling plate separation affect capacitance (same A)?\n\n(a) List known quantities and the unknown.\n(b) Write a symbolic equation relating them.\n(c) Calculate a numerical result with units.",
        "hints": [
          "C halved when d doubles."
        ],
        "blankSteps": [
          "(a) ______",
          "(b) ______",
          "(c) ______"
        ],
        "visibleSteps": [
          "Answer each labeled part in AP free-response style."
        ],
        "examSection": "Section II · Free Response 2"
      }
    ],
    "examFormatNote": "Section I: 35 MCQ (45 min, calculator). Section II: 3 FRQs (45 min)."
  },
  {
    "id": "humgeo-gen-b",
    "title": "AP Human Geography — Patterns Set B",
    "subject": "AP Human Geography",
    "kind": "generated",
    "description": "Diffusion models and site vs situation. Official exam shape: Section I: 60 MCQ. Section II: 3 FRQs.",
    "generationNote": "Original APHG Set B prompts.",
    "estimatedMinutes": 25,
    "difficultyTier": 2,
    "tags": [
      "geography",
      "generated"
    ],
    "items": [
      {
        "id": "hg-pat-b1",
        "format": "frq_half",
        "conceptIntro": "Section II · Free Response 3. Key concept: relocation vs expansion diffusion.",
        "prompt": "Give one example of relocation diffusion and one of expansion diffusion.\n\n(a) Identify a relevant geographic process or scale.\n(b) Explain one specific effect using an example.",
        "hints": [
          "Relocation moves with migrants.",
          "Expansion spreads outward from hearth."
        ],
        "blankSteps": [
          "(a) ______",
          "(b) ______"
        ],
        "visibleSteps": [
          "Answer each labeled part in AP free-response style."
        ],
        "examSection": "Section II · Free Response 3"
      },
      {
        "id": "hg-pat-b2",
        "format": "frq_half",
        "conceptIntro": "Section II · Free Response 3. Key concept: site vs situation.",
        "prompt": "Explain site and situation for a port city that later became a major airline hub.\n\n(a) Identify a relevant geographic process or scale.\n(b) Explain one specific effect using an example.",
        "blankSteps": [
          "Site factor: ______",
          "Situation factor: ______"
        ],
        "hints": [
          "Site: physical land/water.",
          "Situation: relative to markets/routes."
        ],
        "visibleSteps": [
          "Answer each labeled part in AP free-response style."
        ],
        "examSection": "Section II · Free Response 3"
      }
    ],
    "examFormatNote": "Section I: 60 MCQ. Section II: 3 FRQs."
  },
  {
    "id": "eurohist-gen-b",
    "title": "AP European History — Context Set B",
    "subject": "AP European History",
    "kind": "generated",
    "description": "Historical argument and synthesis. Official exam shape: Section I: 55 stimulus MCQ + 3 SAQs. Section II: 1 DBQ + 1 LEQ.",
    "generationNote": "Original Euro Set B prompts.",
    "estimatedMinutes": 30,
    "difficultyTier": 2,
    "tags": [
      "LEQ",
      "generated"
    ],
    "items": [
      {
        "id": "eur-ctx-b1",
        "format": "frq_half",
        "conceptIntro": "Section I Part B · Short-Answer Question. Key concept: nuance in thesis.",
        "prompt": "Write a two-sentence thesis arguing whether industrialization improved living standards 1750–1900.\n\n(a) Identify or describe ONE relevant example.\n(b) Explain a cause, effect, or reason using specific evidence.",
        "blankSteps": [
          "(a) ______",
          "(b) ______"
        ],
        "hints": [
          "Acknowledge regional/time variation.",
          "Avoid absolute yes/no."
        ],
        "visibleSteps": [
          "Answer each labeled part in AP free-response style."
        ],
        "examSection": "Section I Part B · Short-Answer Question"
      },
      {
        "id": "eur-ctx-b2",
        "format": "frq_half",
        "conceptIntro": "Section I Part B · Short-Answer Question. Key concept: continuity vs change.",
        "prompt": "Name one continuity and one change in women's roles in Europe 1815–1914.\n\n(a) Identify or describe ONE relevant example.\n(b) Explain a cause, effect, or reason using specific evidence.",
        "hints": [
          "Continuity: domestic expectations in many classes.",
          "Change: suffrage movements."
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
    "id": "phys1-gen-energy-b",
    "title": "Physics 1 — Energy & Work Set B",
    "subject": "AP Physics 1",
    "kind": "generated",
    "description": "Potential energy and conservation with non-conservative work. Official exam shape: Section I: 40 four-choice MCQ (80 min). Section II: 4 FRQs — Mathematical Routines, Translation Between Representations, Experimental Design and Analysis, Qualitative/Quantitative Translation (100 min).",
    "generationNote": "Original energy Set B prompts.",
    "estimatedMinutes": 30,
    "difficultyTier": 2,
    "tags": [
      "energy",
      "work",
      "generated"
    ],
    "items": [
      {
        "id": "phys1-en-b1",
        "format": "frq_half",
        "conceptId": "energy-work",
        "conceptIntro": "Section II · Mathematical Routines. Key concept: ΔK + ΔU = W_nc.",
        "prompt": "A 1.5 kg book slides down a rough ramp, losing 2.0 J to friction. If it drops 0.50 m vertically (g = 10 m/s²), find speed at bottom from rest.\n\n(a) List known quantities and the unknown.\n(b) Write a symbolic equation relating them.\n(c) Calculate a numerical result with units.",
        "visibleSteps": [
          "Compute ΔU = mgh.",
          "Apply energy accounting with friction."
        ],
        "blankSteps": [
          "(a) ______",
          "(b) ______",
          "(c) ______"
        ],
        "hints": [
          "mgh = 7.5 J.",
          "Net mechanical energy minus friction → K."
        ],
        "examSection": "Section II · Mathematical Routines"
      },
      {
        "id": "phys1-en-b2",
        "format": "frq_half",
        "conceptId": "energy-work",
        "conceptIntro": "Section II · Mathematical Routines. Key concept: work by normal force on flat surface.",
        "prompt": "A box pushed at constant speed on a horizontal floor: how much work does the normal force do?\n\n(a) List known quantities and the unknown.\n(b) Write a symbolic equation relating them.\n(c) Calculate a numerical result with units.",
        "hints": [
          "Normal ⊥ displacement → W = 0."
        ],
        "blankSteps": [
          "(a) ______",
          "(b) ______",
          "(c) ______"
        ],
        "visibleSteps": [
          "Answer each labeled part in AP free-response style."
        ],
        "examSection": "Section II · Mathematical Routines"
      }
    ],
    "examFormatNote": "Section I: 40 four-choice MCQ (80 min). Section II: 4 FRQs — Mathematical Routines, Translation Between Representations, Experimental Design and Analysis, Qualitative/Quantitative Translation (100 min)."
  },
  {
    "id": "phys1-gen-momentum-b",
    "title": "Physics 1 — Momentum Set B",
    "subject": "AP Physics 1",
    "kind": "generated",
    "description": "2D momentum components and inelastic collisions. Official exam shape: Section I: 40 four-choice MCQ (80 min). Section II: 4 FRQs — Mathematical Routines, Translation Between Representations, Experimental Design and Analysis, Qualitative/Quantitative Translation (100 min).",
    "generationNote": "Original momentum Set B prompts.",
    "estimatedMinutes": 25,
    "difficultyTier": 2,
    "tags": [
      "momentum",
      "impulse",
      "generated"
    ],
    "items": [
      {
        "id": "phys1-mom-b1",
        "format": "frq_half",
        "conceptId": "momentum",
        "conceptIntro": "Section II · Mathematical Routines. Key concept: p_x, p_y conserved separately.",
        "prompt": "A 2 kg cart moving east at 3 m/s collides and sticks to a 1 kg cart at rest. Find common speed after collision.\n\n(a) List known quantities and the unknown.\n(b) Write a symbolic equation relating them.\n(c) Calculate a numerical result with units.",
        "visibleSteps": [
          "1D inelastic: m₁v₁ = (m₁+m₂)v_f."
        ],
        "blankSteps": [
          "(a) ______",
          "(b) ______",
          "(c) ______"
        ],
        "hints": [
          "(2)(3) = (3)v_f."
        ],
        "examSection": "Section II · Mathematical Routines"
      },
      {
        "id": "phys1-mom-b2",
        "format": "frq_half",
        "conceptId": "momentum",
        "conceptIntro": "Section II · Translation Between Representations. Key concept: impulse = area on F–t graph.",
        "prompt": "How do you find impulse from a force–time graph?\n\n(a) Sketch or describe the requested graph, diagram, or equation.\n(b) Explain how that representation is consistent with the physical situation.",
        "hints": [
          "Area under the curve (signed)."
        ],
        "blankSteps": [
          "(a) ______",
          "(b) ______"
        ],
        "visibleSteps": [
          "Answer each labeled part in AP free-response style."
        ],
        "examSection": "Section II · Translation Between Representations"
      }
    ],
    "examFormatNote": "Section I: 40 four-choice MCQ (80 min). Section II: 4 FRQs — Mathematical Routines, Translation Between Representations, Experimental Design and Analysis, Qualitative/Quantitative Translation (100 min)."
  },
  {
    "id": "calcab-gen-integrals-b",
    "title": "Calculus AB — Integrals & FTC Set B",
    "subject": "AP Calculus AB/BC",
    "kind": "generated",
    "description": "U-substitution and average value. Official exam shape: Section I: 45 MCQ (Part A no calculator, Part B calculator). Section II: 6 FRQs (Part A calculator, Part B no calculator).",
    "generationNote": "Original integral Set B prompts.",
    "estimatedMinutes": 30,
    "difficultyTier": 2,
    "tags": [
      "integrals",
      "FTC",
      "generated"
    ],
    "items": [
      {
        "id": "calc-int-b1",
        "format": "frq_half",
        "conceptId": "integrals-basics",
        "conceptIntro": "Section II · Free Response (no calculator). Key concept: u-substitution.",
        "prompt": "A student notices that 2x is the inner derivative of x² and wants to reverse the chain rule for a cosine composition. Evaluate ∫ 2x cos(x²) dx.\n\n(a) Set up the derivative, integral, or limit that answers the question.\n(b) Compute the value.\n(c) Interpret the result in the context of the problem.",
        "visibleSteps": [
          "Let u = x².",
          "Find du and antiderivative in u."
        ],
        "blankSteps": [
          "(a) ______",
          "(b) ______",
          "(c) ______"
        ],
        "hints": [
          "du = 2x dx.",
          "∫ cos(u) du = sin(u)."
        ],
        "examSection": "Section II · Free Response (no calculator)"
      },
      {
        "id": "calc-int-b2",
        "format": "frq_half",
        "conceptId": "integrals-basics",
        "conceptIntro": "Section II · Free Response (calculator). Key concept: average value = (1/(b−a))∫ₐᵇ f(x) dx.",
        "prompt": "Write the integral expression for the average value of f on [1, 4].\n\n(a) Set up the derivative, integral, or limit that answers the question.\n(b) Compute the value.\n(c) Interpret the result in the context of the problem.",
        "hints": [
          "(1/3)∫₁⁴ f(x) dx."
        ],
        "blankSteps": [
          "(a) ______",
          "(b) ______",
          "(c) ______"
        ],
        "visibleSteps": [
          "Answer each labeled part in AP free-response style."
        ],
        "examSection": "Section II · Free Response (calculator)"
      }
    ],
    "examFormatNote": "Section I: 45 MCQ (Part A no calculator, Part B calculator). Section II: 6 FRQs (Part A calculator, Part B no calculator)."
  },
  {
    "id": "chem-gen-stoich-b",
    "title": "AP Chemistry — Stoichiometry Set B",
    "subject": "AP Chemistry",
    "kind": "generated",
    "description": "Gas stoichiometry and percent yield. Official exam shape: Section I: 60 MCQ (90 min). Section II: 7 FRQs — 3 long, 4 short (105 min).",
    "generationNote": "Original stoichiometry Set B prompts.",
    "estimatedMinutes": 25,
    "difficultyTier": 2,
    "tags": [
      "stoichiometry",
      "generated"
    ],
    "items": [
      {
        "id": "chem-st-b1",
        "format": "frq_half",
        "conceptId": "chem-stoichiometry",
        "conceptIntro": "Section II · Short free response. Key concept: PV = nRT for gas moles.",
        "prompt": "How many moles of O₂ are needed to produce 4.0 mol CO₂ in complete combustion of a hydrocarbon? (Use balanced CO₂:O₂ ratio from CₙHₘ + O₂ → CO₂ + H₂O setup.)\n\n(a) Identify the chemical species, process, or claim.\n(b) Justify using a calculation, periodic trend, or particulate model.",
        "visibleSteps": [
          "Write and balance a simple case like CH₄ + 2O₂ → CO₂ + 2H₂O."
        ],
        "blankSteps": [
          "(a) ______",
          "(b) ______"
        ],
        "hints": [
          "From CH₄ example, 1 mol CO₂ needs 2 mol O₂."
        ],
        "examSection": "Section II · Short free response"
      },
      {
        "id": "chem-st-b2",
        "format": "frq_half",
        "conceptId": "chem-stoichiometry",
        "conceptIntro": "Section II · Short free response. Key concept: percent yield.",
        "prompt": "Theoretical yield is 10.0 g; actual yield is 8.0 g. Find percent yield.\n\n(a) Identify the chemical species, process, or claim.\n(b) Justify using a calculation, periodic trend, or particulate model.",
        "hints": [
          "(actual/theoretical) × 100%."
        ],
        "blankSteps": [
          "(a) ______",
          "(b) ______"
        ],
        "visibleSteps": [
          "Answer each labeled part in AP free-response style."
        ],
        "examSection": "Section II · Short free response"
      }
    ],
    "examFormatNote": "Section I: 60 MCQ (90 min). Section II: 7 FRQs — 3 long, 4 short (105 min)."
  },
  {
    "id": "bio-gen-cell-b",
    "title": "AP Biology — Cell Transport Set B",
    "subject": "AP Biology",
    "kind": "generated",
    "description": "Active transport and membrane proteins. Official exam shape: Section I: 60 MCQ (90 min; discrete + stimulus sets). Section II: 6 FRQs — 2 long (experimental/graphing), 4 short.",
    "generationNote": "Original cell transport Set B prompts.",
    "estimatedMinutes": 20,
    "difficultyTier": 1,
    "tags": [
      "cells",
      "osmosis",
      "generated"
    ],
    "items": [
      {
        "id": "bio-cell-b1",
        "format": "frq_half",
        "conceptId": "bio-cell-membrane",
        "conceptIntro": "Section II · Long FRQ · Experimental results with graphing. Key concept: active vs passive transport.",
        "prompt": "Why does the sodium-potassium pump require ATP while facilitated diffusion of glucose does not?\n\n(a) Identify the independent and dependent variables or the claim supported by the data.\n(b) Predict or calculate from the results.\n(c) Justify using evidence from the experiment or model.",
        "hints": [
          "Pump moves ions against gradient.",
          "Facilitated diffusion is down gradient."
        ],
        "blankSteps": [
          "(a) ______",
          "(b) ______",
          "(c) ______"
        ],
        "visibleSteps": [
          "Answer each labeled part in AP free-response style."
        ],
        "examSection": "Section II · Long FRQ · Experimental results with graphing"
      },
      {
        "id": "bio-cell-b2",
        "format": "frq_half",
        "conceptId": "bio-cell-membrane",
        "conceptIntro": "Section II · Long FRQ · Interpret experimental results. Key concept: plasmolysis in plant cells.",
        "prompt": "Describe what happens to a plant cell in a hypertonic solution (turgor, membrane position).\n\n(a) Identify the independent and dependent variables or the claim supported by the data.\n(b) Predict or calculate from the results.\n(c) Justify using evidence from the experiment or model.",
        "blankSteps": [
          "(a) ______",
          "(b) ______",
          "(c) ______"
        ],
        "hints": [
          "Water leaves cell.",
          "Membrane pulls away — plasmolysis."
        ],
        "visibleSteps": [
          "Answer each labeled part in AP free-response style."
        ],
        "examSection": "Section II · Long FRQ · Interpret experimental results"
      }
    ],
    "examFormatNote": "Section I: 60 MCQ (90 min; discrete + stimulus sets). Section II: 6 FRQs — 2 long (experimental/graphing), 4 short."
  }
];
