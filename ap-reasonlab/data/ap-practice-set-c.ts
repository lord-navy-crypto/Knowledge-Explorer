import { Questionnaire } from "@/lib/types";

/** Set C — challenge-tier FRQ practice for high-traffic STEM subjects. */
export const apPracticeSetC: Questionnaire[] = [
  {
    "id": "phys1-gen-energy-c",
    "title": "Physics 1 — Energy & Work Set C",
    "subject": "AP Physics 1",
    "kind": "generated",
    "description": "Energy bar charts with friction and springs. Official exam shape: Section I: 40 four-choice MCQ (80 min). Section II: 4 FRQs — Mathematical Routines, Translation Between Representations, Experimental Design and Analysis, Qualitative/Quantitative Translation (100 min).",
    "generationNote": "Original energy Set C prompts.",
    "estimatedMinutes": 35,
    "difficultyTier": 3,
    "tags": [
      "energy",
      "work",
      "generated"
    ],
    "items": [
      {
        "id": "phys1-en-c1",
        "format": "frq_half",
        "conceptId": "energy-work",
        "conceptIntro": "Section II · Mathematical Routines. Key concept: U_s = ½kx²; W_nc = ΔK + ΔU.",
        "prompt": "A 0.40 kg block compresses a spring (k = 200 N/m) by 0.10 m from natural length on a frictionless track, then releases. Find speed when the spring returns to natural length.\n\n(a) List known quantities and the unknown.\n(b) Write a symbolic equation relating them.\n(c) Calculate a numerical result with units.",
        "visibleSteps": [
          "Compute spring PE at max compression.",
          "Convert to KE at equilibrium."
        ],
        "blankSteps": [
          "(a) ______",
          "(b) ______",
          "(c) ______"
        ],
        "hints": [
          "U_s = ½(200)(0.1)² = 1 J.",
          "K = ½mv²."
        ],
        "examSection": "Section II · Mathematical Routines"
      },
      {
        "id": "phys1-en-c2",
        "format": "frq_half",
        "conceptId": "energy-work",
        "conceptIntro": "Section II · Qualitative/Quantitative Translation. Key concept: path independence for conservative forces.",
        "prompt": "Why can you use energy methods instead of Newton's laws for a block sliding down a frictionless ramp?\n\n(a) Make a qualitative comparison or ranking and justify it.\n(b) Support the comparison with a calculation or derived relationship.",
        "hints": [
          "Gravity is conservative; no friction removes mechanical energy."
        ],
        "blankSteps": [
          "(a) ______",
          "(b) ______"
        ],
        "visibleSteps": [
          "Answer each labeled part in AP free-response style."
        ],
        "examSection": "Section II · Qualitative/Quantitative Translation"
      }
    ],
    "examFormatNote": "Section I: 40 four-choice MCQ (80 min). Section II: 4 FRQs — Mathematical Routines, Translation Between Representations, Experimental Design and Analysis, Qualitative/Quantitative Translation (100 min)."
  },
  {
    "id": "phys1-gen-momentum-c",
    "title": "Physics 1 — Momentum Set C",
    "subject": "AP Physics 1",
    "kind": "generated",
    "description": "2D glancing collisions and center-of-mass reasoning. Official exam shape: Section I: 40 four-choice MCQ (80 min). Section II: 4 FRQs — Mathematical Routines, Translation Between Representations, Experimental Design and Analysis, Qualitative/Quantitative Translation (100 min).",
    "generationNote": "Original momentum Set C prompts.",
    "estimatedMinutes": 30,
    "difficultyTier": 3,
    "tags": [
      "momentum",
      "generated"
    ],
    "items": [
      {
        "id": "phys1-mom-c1",
        "format": "frq_half",
        "conceptId": "momentum",
        "conceptIntro": "Section II · Mathematical Routines. Key concept: p_x and p_y conserved separately.",
        "prompt": "A 3 kg cart moving east at 2 m/s collides with a 1 kg cart at rest. After collision, the 1 kg cart moves north at 3 m/s. Find eastward velocity of the 3 kg cart.\n\n(a) List known quantities and the unknown.\n(b) Write a symbolic equation relating them.\n(c) Calculate a numerical result with units.",
        "visibleSteps": [
          "Conserve p_x: m₁v₁ = m₁v₁′ + m₂v₂′ (east).",
          "Conserve p_y: 0 = m₂v₂′ (north)."
        ],
        "blankSteps": [
          "(a) ______",
          "(b) ______",
          "(c) ______"
        ],
        "hints": [
          "North momentum only on 1 kg cart.",
          "Solve east component."
        ],
        "examSection": "Section II · Mathematical Routines"
      },
      {
        "id": "phys1-mom-c2",
        "format": "frq_half",
        "conceptId": "momentum",
        "conceptIntro": "Section II · Qualitative/Quantitative Translation. Key concept: impulse changes momentum.",
        "prompt": "Why does an airbag reduce injury compared with hitting a rigid dashboard?\n\n(a) Make a qualitative comparison or ranking and justify it.\n(b) Support the comparison with a calculation or derived relationship.",
        "hints": [
          "Same Δp over longer Δt ⇒ smaller average force."
        ],
        "blankSteps": [
          "(a) ______",
          "(b) ______"
        ],
        "visibleSteps": [
          "Answer each labeled part in AP free-response style."
        ],
        "examSection": "Section II · Qualitative/Quantitative Translation"
      }
    ],
    "examFormatNote": "Section I: 40 four-choice MCQ (80 min). Section II: 4 FRQs — Mathematical Routines, Translation Between Representations, Experimental Design and Analysis, Qualitative/Quantitative Translation (100 min)."
  },
  {
    "id": "phys1-gen-shm-c",
    "title": "Physics 1 — SHM Set C",
    "subject": "AP Physics 1",
    "kind": "generated",
    "description": "Period, frequency, and energy in oscillations. Official exam shape: Section I: 40 four-choice MCQ (80 min). Section II: 4 FRQs — Mathematical Routines, Translation Between Representations, Experimental Design and Analysis, Qualitative/Quantitative Translation (100 min).",
    "generationNote": "Original SHM Set C prompts.",
    "estimatedMinutes": 30,
    "difficultyTier": 3,
    "tags": [
      "shm",
      "generated"
    ],
    "items": [
      {
        "id": "phys1-shm-c1",
        "format": "frq_half",
        "conceptId": "shm",
        "conceptIntro": "Section II · Mathematical Routines. Key concept: T = 2π√(m/k).",
        "prompt": "A 0.25 kg mass on a spring oscillates with period 0.80 s. Find the spring constant k.\n\n(a) List known quantities and the unknown.\n(b) Write a symbolic equation relating them.\n(c) Calculate a numerical result with units.",
        "visibleSteps": [
          "Rearrange T = 2π√(m/k)."
        ],
        "blankSteps": [
          "(a) ______",
          "(b) ______",
          "(c) ______"
        ],
        "hints": [
          "k = 4π²m/T²."
        ],
        "examSection": "Section II · Mathematical Routines"
      },
      {
        "id": "phys1-shm-c2",
        "format": "frq_half",
        "conceptId": "shm",
        "conceptIntro": "Section II · Mathematical Routines. Key concept: total mechanical energy in SHM.",
        "prompt": "At maximum displacement of a mass-spring system, where is energy stored and why is speed zero?\n\n(a) List known quantities and the unknown.\n(b) Write a symbolic equation relating them.\n(c) Calculate a numerical result with units.",
        "hints": [
          "PE max at amplitude; KE zero at turning point."
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
    "id": "calcab-gen-integrals-c",
    "title": "Calculus AB — Integrals Set C",
    "subject": "AP Calculus AB/BC",
    "kind": "generated",
    "description": "Substitution and area between curves. Official exam shape: Section I: 45 MCQ (Part A no calculator, Part B calculator). Section II: 6 FRQs (Part A calculator, Part B no calculator).",
    "generationNote": "Original integral Set C prompts.",
    "estimatedMinutes": 35,
    "difficultyTier": 3,
    "tags": [
      "integrals",
      "generated"
    ],
    "items": [
      {
        "id": "calc-int-c1",
        "format": "frq_half",
        "conceptId": "integrals-basics",
        "conceptIntro": "Section II · Free Response (no calculator). Key concept: ∫(f − g) dx for area between curves.",
        "prompt": "Find the area between y = x² and y = x on [0, 1].\n\n(a) Set up the derivative, integral, or limit that answers the question.\n(b) Compute the value.\n(c) Interpret the result in the context of the problem.",
        "visibleSteps": [
          "Find intersection points.",
          "Integrate (top − bottom)."
        ],
        "blankSteps": [
          "(a) ______",
          "(b) ______",
          "(c) ______"
        ],
        "hints": [
          "On [0,1], x ≥ x².",
          "∫₀¹ (x − x²) dx."
        ],
        "examSection": "Section II · Free Response (no calculator)"
      },
      {
        "id": "calc-int-c2",
        "format": "frq_half",
        "conceptId": "integrals-basics",
        "conceptIntro": "Section II · Free Response (calculator). Key concept: FTC Part 1.",
        "prompt": "If F(x) = ∫₁ˣ t² dt, find F′(x) without evaluating the integral first.\n\n(a) Set up the derivative, integral, or limit that answers the question.\n(b) Compute the value.\n(c) Interpret the result in the context of the problem.",
        "hints": [
          "FTC1: F′(x) = x²."
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
    "id": "calcab-gen-apps-c",
    "title": "Calculus AB — Applications Set C",
    "subject": "AP Calculus AB/BC",
    "kind": "generated",
    "description": "Related rates and optimization. Official exam shape: Section I: 45 MCQ (Part A no calculator, Part B calculator). Section II: 6 FRQs (Part A calculator, Part B no calculator).",
    "generationNote": "Original applications Set C prompts.",
    "estimatedMinutes": 35,
    "difficultyTier": 3,
    "tags": [
      "related-rates",
      "optimization",
      "generated"
    ],
    "items": [
      {
        "id": "calc-app-c1",
        "format": "frq_half",
        "conceptId": "related-rates",
        "conceptIntro": "Section II · Free Response (no calculator). Key concept: differentiate implicit equation w.r.t. t.",
        "prompt": "A ladder 10 ft long slides down a wall. When the base is 6 ft from the wall, the base moves at 2 ft/s. How fast is the top sliding down?\n\n(a) Set up the derivative, integral, or limit that answers the question.\n(b) Compute the value.\n(c) Interpret the result in the context of the problem.",
        "visibleSteps": [
          "Use x² + y² = 100.",
          "Differentiate and substitute knowns."
        ],
        "blankSteps": [
          "(a) ______",
          "(b) ______",
          "(c) ______"
        ],
        "hints": [
          "At x=6, y=8.",
          "Watch sign for downward motion."
        ],
        "examSection": "Section II · Free Response (no calculator)"
      },
      {
        "id": "calc-app-c2",
        "format": "frq_half",
        "conceptId": "related-rates",
        "conceptIntro": "Section II · Free Response (calculator). Key concept: domain in optimization.",
        "prompt": "Why must you check endpoints when optimizing a continuous function on a closed interval?\n\n(a) Set up the derivative, integral, or limit that answers the question.\n(b) Compute the value.\n(c) Interpret the result in the context of the problem.",
        "hints": [
          "Extrema can occur at boundaries, not only critical points."
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
    "id": "chem-gen-stoich-c",
    "title": "AP Chemistry — Stoichiometry Set C",
    "subject": "AP Chemistry",
    "kind": "generated",
    "description": "Limiting reagent and percent yield combined. Official exam shape: Section I: 60 MCQ (90 min). Section II: 7 FRQs — 3 long, 4 short (105 min).",
    "generationNote": "Original stoichiometry Set C prompts.",
    "estimatedMinutes": 30,
    "difficultyTier": 3,
    "tags": [
      "stoichiometry",
      "generated"
    ],
    "items": [
      {
        "id": "chem-st-c1",
        "format": "frq_half",
        "conceptId": "chem-stoichiometry",
        "conceptIntro": "Section II · Long free response. Key concept: limiting reagent from mole ratios.",
        "prompt": "For 2 Al + 3 Cl₂ → 2 AlCl₃, if you start with 2.0 mol Al and 2.5 mol Cl₂, how many moles of AlCl₃ form?\n\n(a) Write the relevant equation, identification, or particulate claim.\n(b) Show a calculation or chemical reasoning with units.\n(c) Justify a claim using evidence from the prompt.",
        "visibleSteps": [
          "Compare mole ratios needed vs available."
        ],
        "blankSteps": [
          "(a) ______",
          "(b) ______",
          "(c) ______"
        ],
        "hints": [
          "Cl₂ limits if Al needs only 1.67 mol Cl₂ for 2 mol Al."
        ],
        "examSection": "Section II · Long free response"
      },
      {
        "id": "chem-st-c2",
        "format": "frq_half",
        "conceptId": "chem-equilibrium",
        "conceptIntro": "Section II · Long free response. Key concept: Q vs K.",
        "prompt": "If Q < K for a reaction at a given temperature, which direction will the reaction shift?\n\n(a) Write the relevant equation, identification, or particulate claim.\n(b) Show a calculation or chemical reasoning with units.\n(c) Justify a claim using evidence from the prompt.",
        "hints": [
          "Shift toward products to increase Q until Q = K."
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
      }
    ],
    "examFormatNote": "Section I: 60 MCQ (90 min). Section II: 7 FRQs — 3 long, 4 short (105 min)."
  },
  {
    "id": "bio-gen-cell-c",
    "title": "AP Biology — Cell Transport Set C",
    "subject": "AP Biology",
    "kind": "generated",
    "description": "Water potential and membrane transport. Official exam shape: Section I: 60 MCQ (90 min; discrete + stimulus sets). Section II: 6 FRQs — 2 long (experimental/graphing), 4 short.",
    "generationNote": "Original cell transport Set C prompts.",
    "estimatedMinutes": 25,
    "difficultyTier": 2,
    "tags": [
      "cells",
      "generated"
    ],
    "items": [
      {
        "id": "bio-cell-c1",
        "format": "frq_half",
        "conceptId": "bio-cell-membrane",
        "conceptIntro": "Section II · Short FRQ · Data analysis. Key concept: water moves toward lower water potential.",
        "prompt": "A plant cell in a solution neither gains nor loses water. Is the solution isotonic, hypertonic, or hypotonic to the cell?\n\n(a) Identify the biological concept or claim.\n(b) Explain using evidence from the model, data, or scenario.",
        "hints": [
          "No net water movement ⇒ isotonic."
        ],
        "blankSteps": [
          "(a) ______",
          "(b) ______"
        ],
        "visibleSteps": [
          "Answer each labeled part in AP free-response style."
        ],
        "examSection": "Section II · Short FRQ · Data analysis"
      },
      {
        "id": "bio-cell-c2",
        "format": "frq_half",
        "conceptId": "bio-photosynthesis",
        "conceptIntro": "Section II · Short FRQ · Model or visual. Key concept: light reactions vs Calvin cycle.",
        "prompt": "Name the location and main outputs of the light-dependent reactions in photosynthesis.\n\n(a) Identify the biological concept or claim.\n(b) Explain using evidence from the model, data, or scenario.",
        "blankSteps": [
          "Location: ______",
          "Outputs: ______"
        ],
        "hints": [
          "Thylakoid membranes.",
          "ATP, NADPH, O₂."
        ],
        "visibleSteps": [
          "Answer each labeled part in AP free-response style."
        ],
        "examSection": "Section II · Short FRQ · Model or visual"
      }
    ],
    "examFormatNote": "Section I: 60 MCQ (90 min; discrete + stimulus sets). Section II: 6 FRQs — 2 long (experimental/graphing), 4 short."
  }
];
