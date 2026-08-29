import { Questionnaire } from "@/lib/types";

/**
 * CED-depth generated practice — built-in Set E for subjects that had starter-only coverage.
 * Original prompts aligned to College Board unit topics; no pasted exam text.
 */

export const apCedPractice: Questionnaire[] = [
  {
    "id": "chem-ced-set-e",
    "title": "AP Chemistry — CED Depth Set E",
    "subject": "AP Chemistry",
    "kind": "generated",
    "description": "Units 1, 6, 8, 9: atomic trends, thermochemistry, acids/bases, electrochemistry. Official exam shape: Section I: 60 MCQ (90 min). Section II: 7 FRQs — 3 long, 4 short (105 min).",
    "generationNote": "Original CED-aligned chemistry prompts (Set E).",
    "estimatedMinutes": 35,
    "difficultyTier": 2,
    "tags": [
      "ced",
      "atomic",
      "acids",
      "electrochemistry",
      "generated"
    ],
    "items": [
      {
        "id": "chem-ced-e1",
        "format": "frq_half",
        "conceptId": "chem-atomic-structure",
        "conceptIntro": "Section II · Short free response. Key concept: periodic trends follow effective nuclear charge.",
        "prompt": "Which has the larger first ionization energy: Na or Mg? Explain in one sentence using periodic trends.\n\n(a) Identify the relevant principle, quantity, or claim.\n(b) Explain or calculate using evidence from the prompt.",
        "hints": [
          "Same period: higher Z_eff generally increases IE.",
          "Mg has one more proton in same shell."
        ],
        "answerKey": "Mg — same period, higher effective nuclear charge → harder to remove an electron.",
        "blankSteps": [
          "(a) ______",
          "(b) ______"
        ],
        "visibleSteps": [
          "Answer each labeled part in AP free-response style."
        ],
        "examSection": "Section II · Short free response"
      },
      {
        "id": "chem-ced-e2",
        "format": "frq_half",
        "conceptId": "chem-thermochemistry",
        "conceptIntro": "Section II · Long free response. Key concept: Hess's law combines step enthalpies.",
        "prompt": "Given C(s) + O₂(g) → CO₂(g), ΔH = −394 kJ/mol and CO(g) + ½O₂(g) → CO₂(g), ΔH = −283 kJ/mol, find ΔH for C(s) + ½O₂(g) → CO(g).\n\n(a) Identify the relevant principle, quantity, or claim.\n(b) Explain or calculate using evidence from the prompt.",
        "visibleSteps": [
          "Write target reaction.",
          "Manipulate given equations and add ΔH values."
        ],
        "blankSteps": [
          "ΔH = ______ kJ/mol"
        ],
        "hints": [
          "Reverse second equation if needed.",
          "Watch sign when reversing."
        ],
        "blankAnswers": [
          "+110 kJ/mol"
        ],
        "answerKey": "Reverse CO₂ formation: CO₂ → CO + ½O₂, ΔH = +283. Add to first: −394 + 283 = −111 kJ/mol for C + ½O₂ → CO (sign convention may vary by ±).",
        "examSection": "Section II · Long free response"
      },
      {
        "id": "chem-ced-e3",
        "format": "mcq",
        "conceptId": "chem-acids-bases",
        "conceptIntro": "Section I · Multiple Choice (4 options; discrete or stimulus set). Key concept: buffer resists pH change.",
        "prompt": "Which pair makes an effective buffer at pH ≈ 4.7?",
        "choices": [
          "A) HCl and NaCl",
          "B) CH₃COOH and CH₃COONa",
          "C) NaOH and NaCl",
          "D) H₂SO₄ and K₂SO₄"
        ],
        "hints": [
          "Need weak acid + conjugate base.",
          "Strong acids/bases do not buffer."
        ],
        "mcqAnswer": 1,
        "answerKey": "B) weak acid + conjugate base.",
        "examSection": "Section I · Multiple Choice (4 options; discrete or stimulus set)"
      },
      {
        "id": "chem-ced-e4",
        "format": "frq_half",
        "conceptId": "chem-electrochemistry",
        "conceptIntro": "Section II · Long free response. Key concept: oxidation at anode, reduction at cathode.",
        "prompt": "In a galvanic cell with Zn(s) | Zn²⁺ || Cu²⁺ | Cu(s), which electrode is the anode and which ion is reduced?\n\n(a) Identify the relevant principle, quantity, or claim.\n(b) Explain or calculate using evidence from the prompt.",
        "blankSteps": [
          "Anode: ______",
          "Ion reduced: ______"
        ],
        "hints": [
          "Zn loses electrons (oxidation).",
          "Cu²⁺ gains electrons."
        ],
        "blankAnswers": [
          "Zn (anode)",
          "Cu²⁺"
        ],
        "answerKey": "Anode = Zn (oxidation); Cu²⁺ is reduced at the cathode.",
        "visibleSteps": [
          "Answer each labeled part in AP free-response style."
        ],
        "examSection": "Section II · Long free response"
      }
    ],
    "examFormatNote": "Section I: 60 MCQ (90 min). Section II: 7 FRQs — 3 long, 4 short (105 min)."
  },
  {
    "id": "bio-ced-set-e",
    "title": "AP Biology — CED Depth Set E",
    "subject": "AP Biology",
    "kind": "generated",
    "description": "Units 5, 7, 8: genetics, evolution, ecology. Official exam shape: Section I: 60 MCQ (90 min; discrete + stimulus sets). Section II: 6 FRQs — 2 long (experimental/graphing), 4 short.",
    "generationNote": "Original CED-aligned biology prompts (Set E).",
    "estimatedMinutes": 35,
    "difficultyTier": 2,
    "tags": [
      "ced",
      "genetics",
      "evolution",
      "ecology",
      "generated"
    ],
    "items": [
      {
        "id": "bio-ced-e1",
        "format": "frq_half",
        "conceptId": "bio-heredity",
        "conceptIntro": "Section II · Short FRQ · Conceptual analysis. Key concept: testcross reveals unknown genotype.",
        "prompt": "A pea plant with yellow seeds (dominant) is testcrossed with green. Half the offspring are yellow, half green. What was the parent genotype?\n\n(a) Identify the relevant principle, quantity, or claim.\n(b) Explain or calculate using evidence from the prompt.",
        "blankSteps": [
          "Genotype = ______"
        ],
        "hints": [
          "50/50 ratio suggests heterozygous dominant.",
          "Homozygous dominant would give all yellow."
        ],
        "blankAnswers": [
          "Yy (heterozygous)"
        ],
        "answerKey": "Yy — testcross with yy gives 50% Yy (yellow) and 50% yy (green).",
        "visibleSteps": [
          "Answer each labeled part in AP free-response style."
        ],
        "examSection": "Section II · Short FRQ · Conceptual analysis"
      },
      {
        "id": "bio-ced-e2",
        "format": "frq_half",
        "conceptId": "bio-natural-selection",
        "conceptIntro": "Section II · Long FRQ · Experimental results with graphing. Key concept: Hardy–Weinberg requires no evolution.",
        "prompt": "A population is in Hardy–Weinberg equilibrium with p = 0.6 for allele A. What is the expected frequency of genotype Aa?\n\n(a) Identify the relevant principle, quantity, or claim.\n(b) Explain or calculate using evidence from the prompt.",
        "hints": [
          "2pq for heterozygote.",
          "q = 1 − p."
        ],
        "answerKey": "2pq = 2(0.6)(0.4) = 0.48",
        "blankSteps": [
          "(a) ______",
          "(b) ______"
        ],
        "visibleSteps": [
          "Answer each labeled part in AP free-response style."
        ],
        "examSection": "Section II · Long FRQ · Experimental results with graphing"
      },
      {
        "id": "bio-ced-e3",
        "format": "mcq",
        "conceptId": "bio-ecology",
        "conceptIntro": "Section I · Multiple Choice (4 options; discrete or stimulus set). Key concept: energy pyramids narrow at top trophic levels.",
        "prompt": "If producers have 10,000 kJ/m² available, about how much energy reaches tertiary consumers (~10% rule)?",
        "choices": [
          "A) 10,000 kJ",
          "B) 1,000 kJ",
          "C) 100 kJ",
          "D) 10 kJ"
        ],
        "hints": [
          "Each level ~10% of level below.",
          "Three transfers: prod → 1° → 2° → 3°."
        ],
        "mcqAnswer": 3,
        "answerKey": "D) ~10 kJ (10,000 × 0.1³).",
        "examSection": "Section I · Multiple Choice (4 options; discrete or stimulus set)"
      },
      {
        "id": "bio-ced-e4",
        "format": "frq_half",
        "conceptId": "bio-cell-cycle",
        "conceptIntro": "Section II · Short FRQ · Conceptual analysis. Key concept: meiosis produces genetic variation.",
        "prompt": "Name two events in meiosis I that increase genetic variation among gametes.\n\n(a) Identify the relevant principle, quantity, or claim.\n(b) Explain or calculate using evidence from the prompt.",
        "blankSteps": [
          "Event 1: ______",
          "Event 2: ______"
        ],
        "hints": [
          "Crossing over in prophase I.",
          "Independent assortment at metaphase I."
        ],
        "blankAnswers": [
          "Crossing over (prophase I)",
          "Independent assortment (metaphase I)"
        ],
        "answerKey": "Crossing over and independent assortment shuffle alleles into new combinations.",
        "visibleSteps": [
          "Answer each labeled part in AP free-response style."
        ],
        "examSection": "Section II · Short FRQ · Conceptual analysis"
      }
    ],
    "examFormatNote": "Section I: 60 MCQ (90 min; discrete + stimulus sets). Section II: 6 FRQs — 2 long (experimental/graphing), 4 short."
  },
  {
    "id": "psych-ced-set-e",
    "title": "AP Psychology — CED Depth Set E",
    "subject": "AP Psychology",
    "kind": "generated",
    "description": "Units 2–9: biological bases, cognition, development, social, clinical. Official exam shape: Section I: 75 MCQ. Section II: 2 FRQs (concept application + research-method design).",
    "generationNote": "Original CED-aligned psychology prompts (Set E).",
    "estimatedMinutes": 30,
    "difficultyTier": 2,
    "tags": [
      "ced",
      "cognition",
      "social",
      "generated"
    ],
    "items": [
      {
        "id": "psych-ced-e1",
        "format": "frq_half",
        "conceptId": "psych-biological-bases",
        "conceptIntro": "Section II · Research-method FRQ. Key concept: neurotransmitters have specific roles.",
        "prompt": "Low serotonin activity is often linked to which domain of behavior? (mood, balance, muscle contraction, or vision)\n\n(a) Identify the relevant principle, quantity, or claim.\n(b) Explain or calculate using evidence from the prompt.",
        "hints": [
          "Serotonin relates to mood and sleep.",
          "Acetylcholine → muscle at neuromuscular junction."
        ],
        "answerKey": "Mood (and sleep regulation).",
        "blankSteps": [
          "(a) ______",
          "(b) ______"
        ],
        "visibleSteps": [
          "Answer each labeled part in AP free-response style."
        ],
        "examSection": "Section II · Research-method FRQ"
      },
      {
        "id": "psych-ced-e2",
        "format": "frq_half",
        "conceptId": "psych-cognition",
        "conceptIntro": "Section II · Research-method FRQ. Key concept: encoding specificity improves recall.",
        "prompt": "A student learns vocabulary in a quiet library but takes the test in a noisy gym. How might context-dependent memory affect performance?\n\n(a) Identify the relevant principle, quantity, or claim.\n(b) Explain or calculate using evidence from the prompt.",
        "blankSteps": [
          "Predicted effect: ______"
        ],
        "hints": [
          "Mismatch of learning and test context can hurt recall.",
          "State/context-dependent memory."
        ],
        "blankAnswers": [
          "Lower recall / performance"
        ],
        "answerKey": "Context mismatch often lowers recall compared with matching study and test environments.",
        "visibleSteps": [
          "Answer each labeled part in AP free-response style."
        ],
        "examSection": "Section II · Research-method FRQ"
      },
      {
        "id": "psych-ced-e3",
        "format": "mcq",
        "conceptId": "psych-social",
        "conceptIntro": "Section I · Multiple Choice (4 options). Key concept: fundamental attribution error.",
        "prompt": "After a stranger snaps at you, you think they are rude. Later you learn they just received bad news. Which concept best explains your initial judgment?",
        "choices": [
          "A) Fundamental attribution error",
          "B) Social facilitation",
          "C) Group polarization",
          "D) mere exposure effect"
        ],
        "hints": [
          "Overemphasize disposition, ignore situation."
        ],
        "mcqAnswer": 0,
        "answerKey": "A) fundamental attribution error",
        "examSection": "Section I · Multiple Choice (4 options)"
      },
      {
        "id": "psych-ced-e4",
        "format": "frq_half",
        "conceptId": "psych-development",
        "conceptIntro": "Section II · Research-method FRQ. Key concept: negative reinforcement removes aversive stimulus.",
        "prompt": "A child does chores to stop parents' nagging. Is this positive reinforcement, negative reinforcement, punishment, or extinction?\n\n(a) Identify the relevant principle, quantity, or claim.\n(b) Explain or calculate using evidence from the prompt.",
        "hints": [
          "Behavior increases.",
          "Aversive stimulus (nagging) is removed."
        ],
        "answerKey": "Negative reinforcement — behavior increases because an aversive stimulus is removed.",
        "blankSteps": [
          "(a) ______",
          "(b) ______"
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
    "id": "apes-ced-set-e",
    "title": "AP Environmental Science — CED Depth Set E",
    "subject": "AP Environmental Science",
    "kind": "generated",
    "description": "Units 3, 6, 7, 9: population, energy, pollution, climate. Official exam shape: Section I: 80 MCQ. Section II: 3 FRQs (including a lab/data-analysis question).",
    "generationNote": "Original CED-aligned APES prompts (Set E).",
    "estimatedMinutes": 30,
    "difficultyTier": 2,
    "tags": [
      "ced",
      "climate",
      "pollution",
      "generated"
    ],
    "items": [
      {
        "id": "apes-ced-e1",
        "format": "frq_half",
        "conceptId": "apes-population",
        "conceptIntro": "Section II · Analyze an environmental problem. Key concept: rule of 70 estimates doubling time.",
        "prompt": "A country grows at 2.1% per year. Estimate its population doubling time using the rule of 70.\n\n(a) Identify the relevant principle, quantity, or claim.\n(b) Explain or calculate using evidence from the prompt.",
        "visibleSteps": [
          "Use doubling time ≈ 70/r with r in percent."
        ],
        "blankSteps": [
          "Doubling time ≈ ______ years"
        ],
        "hints": [
          "70 / 2.1 ≈ 33 years."
        ],
        "blankAnswers": [
          "≈ 33 years"
        ],
        "answerKey": "70 ÷ 2.1 ≈ 33 years.",
        "examSection": "Section II · Analyze an environmental problem"
      },
      {
        "id": "apes-ced-e2",
        "format": "frq_half",
        "conceptId": "apes-energy-resources",
        "conceptIntro": "Section II · Design an investigation. Key concept: greenhouse gases trap infrared radiation.",
        "prompt": "Why does methane (CH₄) contribute strongly to warming despite lower atmospheric concentration than CO₂?\n\n(a) Identify the relevant principle, quantity, or claim.\n(b) Explain or calculate using evidence from the prompt.",
        "hints": [
          "Compare per-molecule warming potential.",
          "Methane is potent but shorter-lived."
        ],
        "answerKey": "Higher per-molecule greenhouse effect (GWP) despite lower concentration.",
        "blankSteps": [
          "(a) ______",
          "(b) ______"
        ],
        "visibleSteps": [
          "Answer each labeled part in AP free-response style."
        ],
        "examSection": "Section II · Design an investigation"
      },
      {
        "id": "apes-ced-e3",
        "format": "mcq",
        "conceptId": "apes-pollution",
        "conceptIntro": "Section I · Multiple Choice (4 options). Key concept: biomagnification concentrates toxins.",
        "prompt": "DDT is found at highest concentration in which trophic level?",
        "choices": [
          "A) Producers",
          "B) Primary consumers",
          "C) Secondary consumers",
          "D) Top predators"
        ],
        "hints": [
          "Fat-soluble toxins increase up the food chain."
        ],
        "mcqAnswer": 3,
        "answerKey": "D) Top predators — biomagnification concentrates DDT.",
        "examSection": "Section I · Multiple Choice (4 options)"
      }
    ],
    "examFormatNote": "Section I: 80 MCQ. Section II: 3 FRQs (including a lab/data-analysis question)."
  },
  {
    "id": "hug-ced-set-e",
    "title": "AP Human Geography — CED Depth Set E",
    "subject": "AP Human Geography",
    "kind": "generated",
    "description": "Units 2–7: population, culture, political, urban, development. Official exam shape: Section I: 60 MCQ. Section II: 3 FRQs.",
    "generationNote": "Original CED-aligned Human Geo prompts (Set E).",
    "estimatedMinutes": 30,
    "difficultyTier": 2,
    "tags": [
      "ced",
      "population",
      "urban",
      "generated"
    ],
    "items": [
      {
        "id": "hug-ced-e1",
        "format": "frq_half",
        "conceptId": "hug-population-migration",
        "conceptIntro": "Section II · Free Response 1. Key concept: push and pull factors drive migration.",
        "prompt": "Give one push factor and one pull factor that might move rural workers to a primate city.\n\n(a) Identify the relevant principle, quantity, or claim.\n(b) Explain or calculate using evidence from the prompt.",
        "hints": [
          "Push: limited jobs, drought.",
          "Pull: wages, services."
        ],
        "answerKey": "Example push: crop failure; pull: factory wages in primate city.",
        "blankSteps": [
          "(a) ______",
          "(b) ______"
        ],
        "visibleSteps": [
          "Answer each labeled part in AP free-response style."
        ],
        "examSection": "Section II · Free Response 1"
      },
      {
        "id": "hug-ced-e2",
        "format": "frq_half",
        "conceptId": "hug-agriculture-urban",
        "conceptIntro": "Section II · Free Response 2. Key concept: bid-rent curve peaks at CBD.",
        "prompt": "Why might a luxury department store locate in the CBD while a warehouse locates farther out?\n\n(a) Identify the relevant principle, quantity, or claim.\n(b) Explain or calculate using evidence from the prompt.",
        "blankSteps": [
          "CBD reason: ______",
          "Warehouse reason: ______"
        ],
        "hints": [
          "Accessibility vs land cost tradeoff.",
          "Retail benefits from foot traffic."
        ],
        "blankAnswers": [
          "High accessibility / foot traffic",
          "Lower land cost / space needs"
        ],
        "answerKey": "Retail pays premium for CBD access; warehouses trade distance for cheaper land.",
        "visibleSteps": [
          "Answer each labeled part in AP free-response style."
        ],
        "examSection": "Section II · Free Response 2"
      },
      {
        "id": "hug-ced-e3",
        "format": "mcq",
        "conceptId": "hug-development",
        "conceptIntro": "Section I · Multiple Choice (4 options). Key concept: HDI combines multiple development indicators.",
        "prompt": "Which index combines life expectancy, education, and income into one score?",
        "choices": [
          "A) GII",
          "B) HDI",
          "C) GNI per capita alone",
          "D) Total fertility rate"
        ],
        "hints": [
          "Human Development Index."
        ],
        "mcqAnswer": 1,
        "answerKey": "B) HDI",
        "examSection": "Section I · Multiple Choice (4 options)"
      }
    ],
    "examFormatNote": "Section I: 60 MCQ. Section II: 3 FRQs."
  },
  {
    "id": "csa-ced-set-e",
    "title": "AP Computer Science A — CED Depth Set E",
    "subject": "AP Computer Science A",
    "kind": "generated",
    "description": "Units 6–8: arrays, ArrayList, recursion. Official exam shape: Section I: 42 MCQ. Section II: 4 FRQs (methods, class design, array/ArrayList, 2D array).",
    "generationNote": "Original CED-aligned CSA prompts (Set E).",
    "estimatedMinutes": 30,
    "difficultyTier": 2,
    "tags": [
      "ced",
      "arrays",
      "recursion",
      "generated"
    ],
    "items": [
      {
        "id": "csa-ced-e1",
        "format": "frq_half",
        "conceptId": "csa-arrays",
        "conceptIntro": "Section II · Methods and control structures. Key concept: array indices 0 to length−1.",
        "prompt": "int[] scores = {10, 20, 30}; What is scores[scores.length - 1] and what happens if you access scores[3]?\n\n(a) Identify the relevant principle, quantity, or claim.\n(b) Explain or calculate using evidence from the prompt.",
        "blankSteps": [
          "scores[scores.length - 1] = ______",
          "scores[3]: ______"
        ],
        "hints": [
          "Last index is length−1 = 2.",
          "Index 3 is out of bounds."
        ],
        "blankAnswers": [
          "30",
          "ArrayIndexOutOfBoundsException"
        ],
        "answerKey": "scores[2] = 30; scores[3] throws ArrayIndexOutOfBoundsException.",
        "visibleSteps": [
          "Answer each labeled part in AP free-response style."
        ],
        "examSection": "Section II · Methods and control structures"
      },
      {
        "id": "csa-ced-e2",
        "format": "frq_half",
        "conceptId": "csa-recursion",
        "conceptIntro": "Section II · Array / ArrayList. Key concept: base case stops recursion.",
        "prompt": "Why does factorial(n) need if (n <= 1) return 1; before the recursive call?\n\n(a) Identify the relevant principle, quantity, or claim.\n(b) Explain or calculate using evidence from the prompt.",
        "hints": [
          "Without base case, infinite recursion.",
          "Stack overflow."
        ],
        "answerKey": "Stops recursion at n ≤ 1; otherwise infinite calls overflow the stack.",
        "blankSteps": [
          "(a) ______",
          "(b) ______"
        ],
        "visibleSteps": [
          "Answer each labeled part in AP free-response style."
        ],
        "examSection": "Section II · Array / ArrayList"
      },
      {
        "id": "csa-ced-e3",
        "format": "mcq",
        "conceptId": "csa-inheritance",
        "conceptIntro": "Section I · Multiple Choice (4 options). Key concept: runtime polymorphism.",
        "prompt": "Animal a = new Dog(); a.speak(); // Dog overrides speak. Which method runs?",
        "choices": [
          "A) Animal.speak()",
          "B) Dog.speak()",
          "C) Compile error",
          "D) Runtime error always"
        ],
        "hints": [
          "Dynamic dispatch uses actual object type."
        ],
        "mcqAnswer": 1,
        "answerKey": "B) Dog.speak() — runtime polymorphism.",
        "examSection": "Section I · Multiple Choice (4 options)"
      }
    ],
    "examFormatNote": "Section I: 42 MCQ. Section II: 4 FRQs (methods, class design, array/ArrayList, 2D array)."
  },
  {
    "id": "csp-ced-set-e",
    "title": "AP Computer Science Principles — CED Depth Set E",
    "subject": "AP Computer Science Principles",
    "kind": "generated",
    "description": "Big Ideas 2–5: data, algorithms, internet, impact. Official exam shape: Section I: 70 MCQ (including stimulus questions). Create performance task is separate.",
    "generationNote": "Original CED-aligned CSP prompts (Set E).",
    "estimatedMinutes": 25,
    "difficultyTier": 1,
    "tags": [
      "ced",
      "data",
      "impact",
      "generated"
    ],
    "items": [
      {
        "id": "csp-ced-e1",
        "format": "frq_half",
        "conceptId": "csp-data-internet",
        "conceptIntro": "Create performance task · written responses (practice). Key concept: lossless vs lossy compression.",
        "prompt": "Why is PNG preferred over heavy JPEG for a diagram with sharp text edges?\n\n(a) Identify the relevant principle, quantity, or claim.\n(b) Explain or calculate using evidence from the prompt.",
        "hints": [
          "Lossless preserves exact pixels.",
          "JPEG lossy blurs edges."
        ],
        "answerKey": "PNG is lossless — sharp text/diagram edges stay crisp; JPEG compression blurs edges.",
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
        "id": "csp-ced-e2",
        "format": "frq_half",
        "conceptId": "csp-algorithms",
        "conceptIntro": "Create performance task · written responses (practice). Key concept: binary search needs sorted data.",
        "prompt": "List the comparisons to find 7 in sorted [2, 5, 7, 11, 14] using binary search.\n\n(a) Identify the relevant principle, quantity, or claim.\n(b) Explain or calculate using evidence from the prompt.",
        "blankSteps": [
          "Comparison sequence: ______"
        ],
        "hints": [
          "Check middle (7) first — found immediately.",
          "Or trace: mid=11, then mid=5, then 7."
        ],
        "blankAnswers": [
          "Compare to 7 at middle — found on first step"
        ],
        "answerKey": "Middle element is 7 — found immediately (or trace left/right if starting elsewhere).",
        "visibleSteps": [
          "Answer each labeled part in AP free-response style."
        ],
        "examSection": "Create performance task · written responses (practice)"
      },
      {
        "id": "csp-ced-e3",
        "format": "frq_half",
        "conceptId": "csp-impact",
        "conceptIntro": "Create performance task · written responses (practice). Key concept: algorithmic bias.",
        "prompt": "How can unrepresentative training data cause unfair facial recognition errors?\n\n(a) Identify the relevant principle, quantity, or claim.\n(b) Explain or calculate using evidence from the prompt.",
        "hints": [
          "Model learns patterns from training set.",
          "Underrepresented faces → higher error rates."
        ],
        "answerKey": "Training set skew → model underfits minority groups → higher false negatives for them.",
        "blankSteps": [
          "(a) ______",
          "(b) ______"
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
    "id": "physc-ced-set-e",
    "title": "AP Physics C — CED Depth Set E",
    "subject": "AP Physics C: Mechanics",
    "kind": "generated",
    "description": "Rotation and energy — calculus-based mechanics. Official exam shape: Section I: 35 MCQ (45 min, calculator). Section II: 3 FRQs (45 min).",
    "generationNote": "Original CED-aligned Physics C Mechanics prompts (Set E).",
    "estimatedMinutes": 35,
    "difficultyTier": 3,
    "tags": [
      "ced",
      "rotation",
      "generated"
    ],
    "items": [
      {
        "id": "physc-m-e1",
        "format": "frq_half",
        "conceptId": "physc-mech-rotation",
        "conceptIntro": "Section II · Free Response 2. Key concept: τ = Iα.",
        "prompt": "A uniform disk (I = ½MR²) has M = 2 kg, R = 0.5 m, and net torque 4 N·m about its center. Find α.\n\n(a) Identify the relevant principle, quantity, or claim.\n(b) Explain or calculate using evidence from the prompt.",
        "visibleSteps": [
          "Write τ = Iα.",
          "Substitute I = ½MR²."
        ],
        "blankSteps": [
          "α = ______ rad/s²"
        ],
        "hints": [
          "I = 0.5 × 2 × 0.25 = 0.25 kg·m².",
          "α = 4/0.25 = 16 rad/s²."
        ],
        "blankAnswers": [
          "16 rad/s²"
        ],
        "answerKey": "I = ½MR² = 0.25 kg·m²; α = τ/I = 4/0.25 = 16 rad/s².",
        "examSection": "Section II · Free Response 2"
      },
      {
        "id": "physc-m-e2",
        "format": "frq_half",
        "conceptId": "physc-mech-rotation",
        "conceptIntro": "Section II · Free Response 3. Key concept: rolling KE has translational + rotational parts.",
        "prompt": "A sphere rolls without slipping down a ramp. Which energy forms are present at the bottom?\n\n(a) Identify the relevant principle, quantity, or claim.\n(b) Explain or calculate using evidence from the prompt.",
        "hints": [
          "Both ½mv² and ½Iω².",
          "No slipping: v = rω."
        ],
        "answerKey": "Translational KE (½mv²) and rotational KE (½Iω²).",
        "blankSteps": [
          "(a) ______",
          "(b) ______"
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
    "id": "physc-em-ced-set-e",
    "title": "AP Physics C: E&M — CED Depth Set E",
    "subject": "AP Physics C: E&M",
    "kind": "generated",
    "description": "Circuits and Faraday induction. Official exam shape: Section I: 35 MCQ (45 min, calculator). Section II: 3 FRQs (45 min).",
    "generationNote": "Original CED-aligned Physics C E&M prompts (Set E).",
    "estimatedMinutes": 35,
    "difficultyTier": 3,
    "tags": [
      "ced",
      "circuits",
      "induction",
      "generated"
    ],
    "items": [
      {
        "id": "physc-em-e1",
        "format": "frq_half",
        "conceptId": "physc-em-circuits",
        "conceptIntro": "Section II · Free Response 1. Key concept: resistors in series add.",
        "prompt": "A 12 V battery connects to R₁ = 4 Ω and R₂ = 8 Ω in series. Find total current.\n\n(a) Identify the relevant principle, quantity, or claim.\n(b) Explain or calculate using evidence from the prompt.",
        "visibleSteps": [
          "R_eq = R₁ + R₂.",
          "I = V / R_eq."
        ],
        "blankSteps": [
          "I = ______ A"
        ],
        "hints": [
          "R_eq = 12 Ω.",
          "I = 1 A."
        ],
        "blankAnswers": [
          "1 A"
        ],
        "answerKey": "R_eq = 12 Ω; I = V/R = 12/12 = 1 A.",
        "examSection": "Section II · Free Response 1"
      },
      {
        "id": "physc-em-e2",
        "format": "frq_half",
        "conceptId": "physc-em-induction",
        "conceptIntro": "Section II · Free Response 3. Key concept: Lenz's law opposes flux change.",
        "prompt": "A magnet approaches a coil. Does the induced current create a field that attracts or repels the magnet?\n\n(a) Identify the relevant principle, quantity, or claim.\n(b) Explain or calculate using evidence from the prompt.",
        "hints": [
          "Induced field opposes increasing flux.",
          "Repels approaching north pole."
        ],
        "answerKey": "Repels — induced current creates field opposing the approaching magnet (Lenz's law).",
        "blankSteps": [
          "(a) ______",
          "(b) ______"
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
    "id": "calc-bc-ced-set-e",
    "title": "AP Calculus BC — CED Depth Set E",
    "subject": "AP Calculus AB/BC",
    "kind": "generated",
    "description": "Parametric, polar, and vector motion (BC topics). Official exam shape: Section I: 45 MCQ (Part A no calculator, Part B calculator). Section II: 6 FRQs (Part A calculator, Part B no calculator).",
    "generationNote": "Original CED-aligned Calculus BC prompts (Set E).",
    "estimatedMinutes": 35,
    "difficultyTier": 3,
    "tags": [
      "ced",
      "parametric",
      "polar",
      "bc",
      "generated"
    ],
    "items": [
      {
        "id": "calc-bc-e1",
        "format": "frq_half",
        "conceptId": "calc-bc-parametric",
        "conceptIntro": "Section II · Free Response (calculator). Key concept: dy/dx = (dy/dt)/(dx/dt).",
        "prompt": "For x(t) = t² and y(t) = t³, find dy/dx at t = 1.\n\n(a) Identify the relevant principle, quantity, or claim.\n(b) Explain or calculate using evidence from the prompt.",
        "visibleSteps": [
          "Compute dx/dt and dy/dt.",
          "Evaluate ratio at t = 1."
        ],
        "blankSteps": [
          "dy/dx at t=1 = ______"
        ],
        "hints": [
          "dx/dt = 2t, dy/dt = 3t².",
          "At t=1: 3/2."
        ],
        "blankAnswers": [
          "3/2"
        ],
        "answerKey": "dy/dx = (3t²)/(2t) = 3t/2 → 3/2 at t = 1.",
        "examSection": "Section II · Free Response (calculator)"
      },
      {
        "id": "calc-bc-e2",
        "format": "frq_half",
        "conceptId": "calc-bc-parametric",
        "conceptIntro": "Section II · Free Response (calculator). Key concept: polar area A = ½∫ r² dθ.",
        "prompt": "Find the area enclosed by r = 2 for 0 ≤ θ ≤ 2π.\n\n(a) Identify the relevant principle, quantity, or claim.\n(b) Explain or calculate using evidence from the prompt.",
        "visibleSteps": [
          "A = ½∫₀^{2π} 4 dθ."
        ],
        "blankSteps": [
          "Area = ______"
        ],
        "hints": [
          "Integral of 4 over full circle.",
          "Area = 4π."
        ],
        "blankAnswers": [
          "4π"
        ],
        "answerKey": "A = ½∫₀^{2π} 4 dθ = 4π.",
        "examSection": "Section II · Free Response (calculator)"
      },
      {
        "id": "calc-bc-e3",
        "format": "frq_half",
        "conceptId": "calc-bc-vectors",
        "conceptIntro": "Section II · Free Response (calculator). Key concept: v(t) = r′(t).",
        "prompt": "If r(t) = ⟨3t, t²⟩, what is the speed at t = 2?\n\n(a) Identify the relevant principle, quantity, or claim.\n(b) Explain or calculate using evidence from the prompt.",
        "hints": [
          "v = ⟨3, 2t⟩.",
          "Speed = √(9 + 16) = 5 at t=2."
        ],
        "answerKey": "Speed = |v(2)| = √(3² + 4²) = 5.",
        "blankSteps": [
          "(a) ______",
          "(b) ______"
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
    "id": "whap-ced-set-e",
    "title": "AP World History — CED Depth Set E",
    "subject": "AP World History",
    "kind": "generated",
    "description": "Units 2, 5, 7: exchange, revolutions, global conflict. Official exam shape: Section I: 55 stimulus MCQ + 3 SAQs. Section II: 1 DBQ + 1 LEQ.",
    "generationNote": "Original CED-aligned World History prompts (Set E).",
    "estimatedMinutes": 30,
    "difficultyTier": 2,
    "tags": [
      "ced",
      "exchange",
      "revolutions",
      "generated"
    ],
    "items": [
      {
        "id": "whap-ced-e1",
        "format": "frq_half",
        "conceptId": "whap-silk-roads",
        "conceptIntro": "Section I Part B · Short-Answer Question. Key concept: trade spreads ideas and disease.",
        "prompt": "Name one technology that facilitated Indian Ocean trade and one cultural exchange along Silk Roads.\n\n(a) Identify or describe ONE relevant example.\n(b) Explain a cause, effect, or reason using specific evidence.",
        "hints": [
          "Lateen sails, monsoon knowledge.",
          "Buddhism, Islam, paper."
        ],
        "answerKey": "Example: lateen sails; cultural exchange: spread of Buddhism along Silk Roads.",
        "blankSteps": [
          "(a) ______",
          "(b) ______",
          "(c) ______"
        ],
        "visibleSteps": [
          "Answer each labeled part in AP free-response style."
        ],
        "examSection": "Section I Part B · Short-Answer Question"
      },
      {
        "id": "whap-ced-e2",
        "format": "frq_half",
        "conceptId": "whap-revolutions",
        "conceptIntro": "Section I Part B · Short-Answer Question. Key concept: Enlightenment ideas influenced revolutions.",
        "prompt": "How did Enlightenment ideas about natural rights appear in one Atlantic revolution's declaration or constitution?\n\n(a) Identify or describe ONE relevant example.\n(b) Explain a cause, effect, or reason using specific evidence.",
        "blankSteps": [
          "(a) ______",
          "(b) ______",
          "(c) ______"
        ],
        "hints": [
          "US Declaration, French Declaration of Rights.",
          "Link specific phrase to Enlightenment thinker."
        ],
        "blankAnswers": [
          "e.g. 'unalienable rights' ↔ Locke"
        ],
        "answerKey": "Example: US Declaration 'unalienable rights' reflects Locke's natural rights ideas.",
        "visibleSteps": [
          "Answer each labeled part in AP free-response style."
        ],
        "examSection": "Section I Part B · Short-Answer Question"
      },
      {
        "id": "whap-ced-e3",
        "format": "frq_half",
        "conceptId": "whap-cold-war",
        "conceptIntro": "Section I Part B · Short-Answer Question. Key concept: proxy wars avoided direct superpower war.",
        "prompt": "Why was the Cold War called 'cold' despite many regional conflicts?\n\n(a) Identify or describe ONE relevant example.\n(b) Explain a cause, effect, or reason using specific evidence.",
        "hints": [
          "No direct large-scale US–USSR war.",
          "Proxy conflicts in Korea, Vietnam, etc."
        ],
        "answerKey": "Superpowers avoided direct war; fought indirectly through allies and proxies.",
        "blankSteps": [
          "(a) ______",
          "(b) ______",
          "(c) ______"
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
    "id": "phys2-ced-set-e",
    "title": "AP Physics 2 — CED Depth Set E",
    "subject": "AP Physics 2",
    "kind": "generated",
    "description": "Thermodynamics and geometric optics. Official exam shape: Section I: 40 four-choice MCQ. Section II: 4 FRQs (mathematical routines, representations, experimental design, qualitative/quantitative translation).",
    "generationNote": "Original CED-aligned Physics 2 prompts (Set E).",
    "estimatedMinutes": 30,
    "difficultyTier": 2,
    "tags": [
      "ced",
      "thermo",
      "optics",
      "generated"
    ],
    "items": [
      {
        "id": "phys2-ced-e1",
        "format": "frq_half",
        "conceptId": "phys2-thermo",
        "conceptIntro": "Section II · Qualitative/Quantitative Translation. Key concept: first law ΔU = Q − W.",
        "prompt": "An ideal gas is compressed isothermally. Is ΔU zero, positive, or negative? Is Q positive or negative?\n\n(a) Identify the relevant principle, quantity, or claim.\n(b) Explain or calculate using evidence from the prompt.",
        "blankSteps": [
          "ΔU = ______",
          "Q = ______"
        ],
        "hints": [
          "Isothermal ideal gas: ΔU = 0.",
          "Work done ON gas → Q = W > 0 leaves gas."
        ],
        "blankAnswers": [
          "0",
          "positive (heat enters gas)"
        ],
        "answerKey": "Isothermal ideal gas: ΔU = 0; compression adds work so Q > 0 into gas.",
        "visibleSteps": [
          "Answer each labeled part in AP free-response style."
        ],
        "examSection": "Section II · Mathematical Routines"
      },
      {
        "id": "phys2-ced-e2",
        "format": "frq_half",
        "conceptId": "phys2-optics",
        "conceptIntro": "Section II · Qualitative/Quantitative Translation. Key concept: Snell's law at interface.",
        "prompt": "Light goes from air (n≈1) to water (n≈1.33) at 30° to normal. Does it bend toward or away from the normal?\n\n(a) Identify the relevant principle, quantity, or claim.\n(b) Explain or calculate using evidence from the prompt.",
        "hints": [
          "Slower medium → bend toward normal.",
          "n increases → angle in water smaller."
        ],
        "answerKey": "Toward the normal — light slows in denser medium (higher n).",
        "blankSteps": [
          "(a) ______",
          "(b) ______"
        ],
        "visibleSteps": [
          "Answer each labeled part in AP free-response style."
        ],
        "examSection": "Section II · Mathematical Routines"
      }
    ],
    "examFormatNote": "Section I: 40 four-choice MCQ. Section II: 4 FRQs (mathematical routines, representations, experimental design, qualitative/quantitative translation)."
  }
];
