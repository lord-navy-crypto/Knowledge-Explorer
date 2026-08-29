import { Questionnaire } from "@/lib/types";

/** Generated FRQ sets across AP subjects — one starter set per major subject. */
export const apPracticeBySubject: Questionnaire[] = [
  {
    "id": "stats-gen-inference-a",
    "title": "AP Statistics — Inference Set A",
    "subject": "AP Statistics",
    "kind": "generated",
    "description": "Confidence intervals and hypothesis test setup. Official exam shape: Section I: 40 MCQ (90 min). Section II: 5 FRQs + 1 Investigative Task (90 min).",
    "generationNote": "Original inference prompts.",
    "estimatedMinutes": 30,
    "difficultyTier": 2,
    "tags": [
      "inference",
      "generated"
    ],
    "items": [
      {
        "id": "stats-inf-a1",
        "format": "frq_half",
        "conceptIntro": "Section II Part A · Inference. Key concept: interpret CI, not just compute.",
        "prompt": "A one-proportion CI for seniors voting is 0.52 ± 0.04. What does 0.52 represent, and what does ±0.04 mean?\n\n(a) Identify the relevant principle, quantity, or claim.\n(b) Explain or calculate using evidence from the prompt.",
        "visibleSteps": [
          "Identify point estimate.",
          "Explain margin of error in context."
        ],
        "blankSteps": [
          "Point estimate meaning: ______",
          "Margin of error meaning: ______"
        ],
        "hints": [
          "0.52 is the sample proportion.",
          "±0.04 is the margin of error for the interval."
        ],
        "examSection": "Section II Part A · Inference"
      }
    ],
    "examFormatNote": "Section I: 40 MCQ (90 min). Section II: 5 FRQs + 1 Investigative Task (90 min)."
  },
  {
    "id": "psych-gen-research-a",
    "title": "AP Psychology — Research Methods Set A",
    "subject": "AP Psychology",
    "kind": "generated",
    "description": "Variables, operational definitions, and ethics. Official exam shape: Section I: 75 MCQ. Section II: 2 FRQs (concept application + research-method design).",
    "generationNote": "Original psych methods prompts.",
    "estimatedMinutes": 25,
    "difficultyTier": 1,
    "tags": [
      "research",
      "generated"
    ],
    "items": [
      {
        "id": "psych-rm-a1",
        "format": "frq_half",
        "conceptIntro": "Section II · Article analysis / concept application. Key concept: IV vs DV.",
        "prompt": "A study tests whether background music affects recall.\n\n(a) Identify the independent variable.\n(b) Identify the dependent variable.\n(c) Operationally define one of the variables.",
        "visibleSteps": [
          "IV is manipulated; DV is measured.",
          "Operational definition is how it is measured."
        ],
        "blankSteps": [
          "(a) IV: ______",
          "(b) DV: ______",
          "(c) Operational definition: ______"
        ],
        "hints": [
          "IV is manipulated; DV is measured outcome."
        ],
        "examSection": "Section II · Article analysis / concept application"
      }
    ],
    "examFormatNote": "Section I: 75 MCQ. Section II: 2 FRQs (concept application + research-method design)."
  },
  {
    "id": "econ-micro-gen-a",
    "title": "AP Microeconomics — Supply & Demand Set A",
    "subject": "AP Microeconomics",
    "kind": "generated",
    "description": "Shifts vs movement along curves. Official exam shape: Section I: 60 MCQ (70 min). Section II: 3 FRQs — 1 long, 2 short (60 min).",
    "generationNote": "Original micro prompts.",
    "estimatedMinutes": 25,
    "difficultyTier": 2,
    "tags": [
      "micro",
      "generated"
    ],
    "items": [
      {
        "id": "micro-sd-a1",
        "format": "frq_half",
        "conceptIntro": "Section II · Short free response. Key concept: price change vs shift.",
        "prompt": "A tax on producers of coffee is introduced.\n\n(a) Identify whether supply or demand is directly affected.\n(b) Explain whether the curve shifts or the market moves along a curve.",
        "visibleSteps": [
          "Tax is a production cost.",
          "Supply shifts left."
        ],
        "blankSteps": [
          "(a) ______",
          "(b) ______"
        ],
        "hints": [
          "Tax affects production cost — supply side."
        ],
        "examSection": "Section II · Short free response"
      }
    ],
    "examFormatNote": "Section I: 60 MCQ (70 min). Section II: 3 FRQs — 1 long, 2 short (60 min)."
  },
  {
    "id": "econ-macro-gen-a",
    "title": "AP Macroeconomics — AD-AS Set A",
    "subject": "AP Macroeconomics",
    "kind": "generated",
    "description": "Aggregate demand and supply reasoning. Official exam shape: Section I: 60 MCQ (70 min). Section II: 3 FRQs — 1 long, 2 short (60 min).",
    "generationNote": "Original macro prompts.",
    "estimatedMinutes": 25,
    "difficultyTier": 2,
    "tags": [
      "macro",
      "generated"
    ],
    "items": [
      {
        "id": "macro-ad-a1",
        "format": "frq_half",
        "conceptIntro": "Section II · Short free response. Key concept: AD components.",
        "prompt": "Government increases infrastructure spending.\n\n(a) Identify which component of aggregate demand increases first.\n(b) Describe the short-run AD-AS result for output and the price level.",
        "visibleSteps": [
          "G is a direct AD component.",
          "AD shifts right."
        ],
        "blankSteps": [
          "(a) ______",
          "(b) ______"
        ],
        "hints": [
          "Government spending G is a direct AD component."
        ],
        "examSection": "Section II · Short free response"
      }
    ],
    "examFormatNote": "Section I: 60 MCQ (70 min). Section II: 3 FRQs — 1 long, 2 short (60 min)."
  },
  {
    "id": "ush-gen-sourcing-a",
    "title": "AP US History — Sourcing Set A",
    "subject": "AP US History",
    "kind": "generated",
    "description": "Document sourcing and contextualization drills. Official exam shape: Section I: 55 stimulus MCQ + 3 SAQs. Section II: 1 DBQ + 1 LEQ.",
    "generationNote": "Original USH prompts.",
    "estimatedMinutes": 30,
    "difficultyTier": 2,
    "tags": [
      "DBQ",
      "sourcing",
      "generated"
    ],
    "items": [
      {
        "id": "ush-src-a1",
        "format": "frq_half",
        "conceptId": "ush-constitution",
        "conceptIntro": "Section I Part B · Short-Answer Question. Key concept: HIPP — Historical context, Intended audience, Purpose, Point of view.",
        "prompt": "A 1917 editorial urges women's suffrage. List two contextual facts that would help frame the author's argument.\n\n(a) Identify or describe ONE relevant example.\n(b) Explain a cause, effect, or reason using specific evidence.",
        "visibleSteps": [
          "Identify time period.",
          "Connect to reform movements."
        ],
        "blankSteps": [
          "Context fact 1: ______",
          "Context fact 2: ______"
        ],
        "hints": [
          "Progressive Era reforms.",
          "WWI home-front roles."
        ],
        "examSection": "Section I Part B · Short-Answer Question"
      }
    ],
    "examFormatNote": "Section I: 55 stimulus MCQ + 3 SAQs. Section II: 1 DBQ + 1 LEQ."
  },
  {
    "id": "world-gen-comparison-a",
    "title": "AP World History — Comparison Set A",
    "subject": "AP World History",
    "kind": "generated",
    "description": "Comparative reasoning for LEQ-style practice. Official exam shape: Section I: 55 stimulus MCQ + 3 SAQs. Section II: 1 DBQ + 1 LEQ.",
    "generationNote": "Original world history prompts.",
    "estimatedMinutes": 30,
    "difficultyTier": 2,
    "tags": [
      "LEQ",
      "comparison",
      "generated"
    ],
    "items": [
      {
        "id": "wh-comp-a1",
        "format": "frq_half",
        "conceptId": "whap-industrial",
        "conceptIntro": "Section II · Long Essay Question. Key concept: valid comparison category.",
        "prompt": "Compare land-based empires' use of tribute systems in the period 1450–1750. Name one similarity and one difference to explain.\n\n(a) Contextualize the topic (1–2 sentences).\n(b) Write a thesis that takes a position.\n(c) Support with TWO specific examples.",
        "visibleSteps": [
          "Pick two empires.",
          "Choose one political/economic category."
        ],
        "blankSteps": [
          "Similarity: ______",
          "Difference: ______"
        ],
        "hints": [
          "Think Ottomans, Ming/Qing, Mughals."
        ],
        "examSection": "Section II · Long Essay Question"
      }
    ],
    "examFormatNote": "Section I: 55 stimulus MCQ + 3 SAQs. Section II: 1 DBQ + 1 LEQ."
  },
  {
    "id": "englang-gen-rhetoric-a",
    "title": "AP English Language — Rhetoric Set A",
    "subject": "AP English Language",
    "kind": "generated",
    "description": "Rhetorical situation and line of reasoning. See also Exam Format Set A for AP Lang MCQ + three FRQ types. Official exam shape: Section I: 45 four-choice MCQ (reading + writing revision, 60 min). Section II: Synthesis, Rhetorical Analysis, Argument (2 h 15 min).",
    "generationNote": "Original rhetoric prompts.",
    "estimatedMinutes": 30,
    "difficultyTier": 2,
    "tags": [
      "rhetoric",
      "generated"
    ],
    "items": [
      {
        "id": "aplang-rhet-a1",
        "format": "frq_half",
        "conceptId": "elang-rhetoric",
        "conceptIntro": "Section II · Question 2 Rhetorical Analysis. Key concept: SOAPS + thesis.",
        "prompt": "Excerpt (original practice): “Buses already idle at 6:50 a.m. A later bell would not erase homework; it would let teenagers meet the clock their bodies already keep.”\n\nExcerpt (original practice): “Buses already idle at 6:50 a.m. A later bell would not erase homework; it would let teenagers meet the clock their bodies already keep.”\n\nAnalyze how an op-ed about school start times uses evidence to appeal to parents.\n\n(a) Identify the rhetorical situation (speaker, audience, purpose).\n(b) Analyze TWO rhetorical choices and their effects.",
        "visibleSteps": [
          "Identify audience and purpose.",
          "Choose two evidence types used."
        ],
        "blankSteps": [
          "Thesis: ______",
          "Evidence type 1: ______"
        ],
        "hints": [
          "Look for statistics vs anecdotes."
        ],
        "examSection": "Section II · Question 2 Rhetorical Analysis"
      }
    ],
    "examFormatNote": "Section I: 45 four-choice MCQ (reading + writing revision, 60 min). Section II: Synthesis, Rhetorical Analysis, Argument (2 h 15 min)."
  },
  {
    "id": "englit-gen-analysis-a",
    "title": "AP English Literature — Close Reading Set A",
    "subject": "AP English Literature",
    "kind": "generated",
    "description": "Poetry/prose close reading scaffolds. See also Exam Format Set A for AP Lit MCQ + three FRQ types. Official exam shape: Section I: 55 four-choice MCQ on poetry, prose, and drama (60 min). Section II: poetry analysis, prose analysis, literary argument.",
    "generationNote": "Original lit analysis prompts.",
    "estimatedMinutes": 35,
    "difficultyTier": 2,
    "tags": [
      "literature",
      "generated"
    ],
    "items": [
      {
        "id": "aplit-cr-a1",
        "format": "frq_half",
        "conceptId": "elit-poetry",
        "conceptIntro": "Section II · Poetry analysis. Key concept: claim about effect of a device.",
        "prompt": "Poem (original practice): “The shutters / did not wait for the sentence to end / the rain kept walking into the kitchen.”\n\nPoem (original practice): “The shutters / did not wait for the sentence to end / the rain kept walking into the kitchen.”\n\nA poem uses enjambment across three lines describing a storm. What effect might enjambment create for the reader?\n\n(a) Make a defensible claim about the passage.\n(b) Support it with TWO specific textual details.",
        "visibleSteps": [
          "Define enjambment.",
          "Link to storm imagery."
        ],
        "blankSteps": [
          "Device effect claim: ______"
        ],
        "hints": [
          "Enjambment can increase momentum or tension."
        ],
        "examSection": "Section II · Poetry analysis"
      }
    ],
    "examFormatNote": "Section I: 55 four-choice MCQ on poetry, prose, and drama (60 min). Section II: poetry analysis, prose analysis, literary argument."
  },
  {
    "id": "envsci-gen-ecosystems-a",
    "title": "AP Environmental Science — Ecosystems Set A",
    "subject": "AP Environmental Science",
    "kind": "generated",
    "description": "Energy flow and population dynamics. Official exam shape: Section I: 80 MCQ. Section II: 3 FRQs (including a lab/data-analysis question).",
    "generationNote": "Original ES prompts.",
    "estimatedMinutes": 25,
    "difficultyTier": 1,
    "tags": [
      "ecosystems",
      "generated"
    ],
    "items": [
      {
        "id": "es-eco-a1",
        "format": "frq_half",
        "conceptIntro": "Section II · Analyze an environmental problem (data). Key concept: 10% rule.",
        "prompt": "If producers contain 10,000 kJ, approximately how much energy is available to tertiary consumers?\n\n(a) State the 10% rule.\n(b) Calculate the energy at the tertiary-consumer level.",
        "visibleSteps": [
          "Each trophic level retains ~10%.",
          "Tertiary is three transfers from producers."
        ],
        "blankSteps": [
          "(a) Rule: ______",
          "(b) Energy: ______ kJ"
        ],
        "hints": [
          "Each trophic level retains ~10% of energy."
        ],
        "examSection": "Section II · Analyze an environmental problem (data)"
      }
    ],
    "examFormatNote": "Section I: 80 MCQ. Section II: 3 FRQs (including a lab/data-analysis question)."
  },
  {
    "id": "csa-gen-methods-a",
    "title": "AP Computer Science A — Methods Set A",
    "subject": "AP Computer Science A",
    "kind": "generated",
    "description": "Method design and tracing drills. Official exam shape: Section I: 42 MCQ. Section II: 4 FRQs (methods, class design, array/ArrayList, 2D array).",
    "generationNote": "Original CSA prompts.",
    "estimatedMinutes": 25,
    "difficultyTier": 2,
    "tags": [
      "java",
      "generated"
    ],
    "items": [
      {
        "id": "csa-m-a1",
        "format": "frq_half",
        "conceptIntro": "Section II · Methods and control structures. Key concept: parameters vs return.",
        "prompt": "Write a method that returns the larger of two integers a and b.\n\n(a) Write the method signature.\n(b) Write the method body using a return statement.",
        "visibleSteps": [
          "Return type int; two int parameters.",
          "Compare a and b."
        ],
        "blankSteps": [
          "(a) Signature: ______",
          "(b) Body: ______"
        ],
        "hints": [
          "Return type int; two int parameters."
        ],
        "examSection": "Section II · Methods and control structures"
      }
    ],
    "examFormatNote": "Section I: 42 MCQ. Section II: 4 FRQs (methods, class design, array/ArrayList, 2D array)."
  },
  {
    "id": "csp-gen-data-a",
    "title": "AP Computer Science Principles — Data Set A",
    "subject": "AP Computer Science Principles",
    "kind": "generated",
    "description": "Data representation and bias. Official exam shape: Section I: 70 MCQ (including stimulus questions). Create performance task is separate.",
    "generationNote": "Original CSP prompts.",
    "estimatedMinutes": 20,
    "difficultyTier": 1,
    "tags": [
      "data",
      "generated"
    ],
    "items": [
      {
        "id": "csp-d-a1",
        "format": "frq_half",
        "conceptIntro": "Create performance task · written responses (practice). Key concept: sampling bias.",
        "prompt": "A survey about phone use is sent only to students in one honors class.\n\n(a) Identify the sampling problem.\n(b) Explain why results might not generalize.",
        "visibleSteps": [
          "The sample is not representative.",
          "Honors students may differ in phone use."
        ],
        "blankSteps": [
          "(a) ______",
          "(b) ______"
        ],
        "hints": [
          "Sample may not represent all students."
        ],
        "examSection": "Create performance task · written responses (practice)"
      }
    ],
    "examFormatNote": "Section I: 70 MCQ (including stimulus questions). Create performance task is separate."
  },
  {
    "id": "phys2-gen-waves-a",
    "title": "AP Physics 2 — Waves Set A",
    "subject": "AP Physics 2",
    "kind": "generated",
    "description": "Wave properties and interference. Official exam shape: Section I: 40 four-choice MCQ. Section II: 4 FRQs (mathematical routines, representations, experimental design, qualitative/quantitative translation).",
    "generationNote": "Original Physics 2 prompts.",
    "estimatedMinutes": 25,
    "difficultyTier": 2,
    "tags": [
      "waves",
      "generated"
    ],
    "items": [
      {
        "id": "phys2-w-a1",
        "format": "frq_half",
        "conceptIntro": "Section II · Mathematical Routines. Key concept: v = fλ.",
        "prompt": "A wave with frequency 500 Hz travels at 340 m/s in air. Find its wavelength.\n\n(a) Write the equation that relates v, f, and λ.\n(b) Calculate λ with units.",
        "visibleSteps": [
          "Rearrange v = fλ.",
          "λ = v/f."
        ],
        "blankSteps": [
          "(a) Equation: ______",
          "(b) λ = ______ m"
        ],
        "hints": [
          "Rearrange v = fλ to solve for λ."
        ],
        "examSection": "Section II · Mathematical Routines"
      }
    ],
    "examFormatNote": "Section I: 40 four-choice MCQ. Section II: 4 FRQs (mathematical routines, representations, experimental design, qualitative/quantitative translation)."
  },
  {
    "id": "physc-mech-gen-a",
    "title": "AP Physics C: Mechanics — Rotation Set A",
    "subject": "AP Physics C: Mechanics",
    "kind": "generated",
    "description": "Torque and rotational kinematics. Official exam shape: Section I: 35 MCQ (45 min, calculator). Section II: 3 FRQs (45 min).",
    "generationNote": "Original Phys C Mech prompts.",
    "estimatedMinutes": 30,
    "difficultyTier": 3,
    "tags": [
      "rotation",
      "generated"
    ],
    "items": [
      {
        "id": "phycm-r-a1",
        "format": "frq_half",
        "conceptIntro": "Section II · Free Response 2. Key concept: τ = Iα.",
        "prompt": "A disk with I = 0.05 kg·m² has angular acceleration 12 rad/s². Find net torque.\n\n(a) Identify the relevant principle, quantity, or claim.\n(b) Explain or calculate using evidence from the prompt.",
        "visibleSteps": [
          "Use τ_net = Iα."
        ],
        "blankSteps": [
          "τ_net = ______ N·m"
        ],
        "hints": [
          "Direct substitution."
        ],
        "examSection": "Section II · Free Response 2"
      }
    ],
    "examFormatNote": "Section I: 35 MCQ (45 min, calculator). Section II: 3 FRQs (45 min)."
  },
  {
    "id": "physc-em-gen-a",
    "title": "AP Physics C: E&M — Gauss Set A",
    "subject": "AP Physics C: E&M",
    "kind": "generated",
    "description": "Flux and symmetric charge distributions. Official exam shape: Section I: 35 MCQ (45 min, calculator). Section II: 3 FRQs (45 min).",
    "generationNote": "Original E&M prompts.",
    "estimatedMinutes": 30,
    "difficultyTier": 3,
    "tags": [
      "electromagnetism",
      "generated"
    ],
    "items": [
      {
        "id": "phycem-g-a1",
        "format": "frq_half",
        "conceptIntro": "Section II · Free Response 1. Key concept: Gauss's law symmetry.",
        "prompt": "Why is Gauss's law easiest to use for an infinite line charge with cylindrical symmetry?\n\n(a) State Gauss's law.\n(b) Explain which symmetry makes E constant on the Gaussian surface.",
        "visibleSteps": [
          "Φ = Q_enc/ε₀.",
          "Cylindrical symmetry ⇒ E ⊥ and constant on the curved surface."
        ],
        "blankSteps": [
          "(a) ______",
          "(b) ______"
        ],
        "hints": [
          "E field magnitude constant on cylindrical surface."
        ],
        "examSection": "Section II · Free Response 1"
      }
    ],
    "examFormatNote": "Section I: 35 MCQ (45 min, calculator). Section II: 3 FRQs (45 min)."
  },
  {
    "id": "humgeo-gen-a",
    "title": "AP Human Geography — Patterns Set A",
    "subject": "AP Human Geography",
    "kind": "generated",
    "description": "Spatial patterns and scale. Official exam shape: Section I: 60 MCQ. Section II: 3 FRQs.",
    "generationNote": "Original APHG prompts.",
    "estimatedMinutes": 25,
    "difficultyTier": 2,
    "tags": [
      "geography",
      "generated"
    ],
    "items": [
      {
        "id": "hg-pat-a1",
        "format": "frq_half",
        "conceptIntro": "Section II · Free Response 1. Key concept: scale of analysis.",
        "prompt": "Explain urban sprawl at two scales.\n\n(a) Identify one local effect.\n(b) Identify one global effect.",
        "visibleSteps": [
          "Local: traffic, land use.",
          "Global: resource use, emissions."
        ],
        "blankSteps": [
          "(a) Local: ______",
          "(b) Global: ______"
        ],
        "hints": [
          "Local: traffic; global: resource use — examples vary."
        ],
        "examSection": "Section II · Free Response 1"
      }
    ],
    "examFormatNote": "Section I: 60 MCQ. Section II: 3 FRQs."
  },
  {
    "id": "eurohist-gen-a",
    "title": "AP European History — Context Set A",
    "subject": "AP European History",
    "kind": "generated",
    "description": "Contextualization for LEQ/DBQ practice. Official exam shape: Section I: 55 stimulus MCQ + 3 SAQs. Section II: 1 DBQ + 1 LEQ.",
    "generationNote": "Original Euro prompts.",
    "estimatedMinutes": 30,
    "difficultyTier": 2,
    "tags": [
      "LEQ",
      "generated"
    ],
    "items": [
      {
        "id": "eur-ctx-a1",
        "format": "frq_half",
        "conceptId": "euro-renaissance",
        "conceptIntro": "Section I Part B · Short-Answer Question. Key concept: broader historical context before thesis.",
        "prompt": "Before writing about Enlightenment reforms, give two sentences of context from the 17th–18th centuries.\n\n(a) Identify or describe ONE relevant example.\n(b) Explain a cause, effect, or reason using specific evidence.",
        "blankSteps": [
          "Context sentence 1: ______",
          "Context sentence 2: ______"
        ],
        "hints": [
          "Scientific Revolution, absolute monarchy, print culture."
        ],
        "visibleSteps": [
          "Answer each labeled part in AP free-response style."
        ],
        "examSection": "Section I Part B · Short-Answer Question"
      }
    ],
    "examFormatNote": "Section I: 55 stimulus MCQ + 3 SAQs. Section II: 1 DBQ + 1 LEQ."
  }
];
