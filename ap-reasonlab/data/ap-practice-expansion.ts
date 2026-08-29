import { Questionnaire } from "@/lib/types";

/** Additional generated AP practice sets for Physics 1, Calc, Chem, Bio */
export const apPracticeExpansion: Questionnaire[] = [
  {
    "id": "phys1-gen-energy-a",
    "title": "Physics 1 — Energy & Work Set A",
    "subject": "AP Physics 1",
    "kind": "generated",
    "description": "Work–energy theorem and conservation drills. Half-process only. Official exam shape: Section I: 40 four-choice MCQ (80 min). Section II: 4 FRQs — Mathematical Routines, Translation Between Representations, Experimental Design and Analysis, Qualitative/Quantitative Translation (100 min).",
    "generationNote": "Original energy topic prompts.",
    "estimatedMinutes": 30,
    "difficultyTier": 2,
    "tags": [
      "energy",
      "work",
      "generated"
    ],
    "items": [
      {
        "id": "phys1-en-1",
        "format": "frq_half",
        "conceptId": "energy-work",
        "conceptIntro": "Section II · Mathematical Routines. Key concept: W_net = ΔK.",
        "prompt": "A 2.0 kg block slides on a frictionless table and speeds up from 3.0 m/s to 7.0 m/s. Find the net work on the block.\n\n(a) List known quantities and the unknown.\n(b) Write a symbolic equation relating them.\n(c) Calculate a numerical result with units.",
        "visibleSteps": [
          "Recall W_net = ΔK.",
          "Compute initial and final kinetic energy."
        ],
        "blankSteps": [
          "(a) ______",
          "(b) ______",
          "(c) ______"
        ],
        "hints": [
          "K = ½mv².",
          "Use final minus initial kinetic energy."
        ],
        "examSection": "Section II · Mathematical Routines"
      }
    ],
    "examFormatNote": "Section I: 40 four-choice MCQ (80 min). Section II: 4 FRQs — Mathematical Routines, Translation Between Representations, Experimental Design and Analysis, Qualitative/Quantitative Translation (100 min)."
  },
  {
    "id": "phys1-gen-momentum-a",
    "title": "Physics 1 — Momentum Set A",
    "subject": "AP Physics 1",
    "kind": "generated",
    "description": "Impulse and momentum change in 1D. Official exam shape: Section I: 40 four-choice MCQ (80 min). Section II: 4 FRQs — Mathematical Routines, Translation Between Representations, Experimental Design and Analysis, Qualitative/Quantitative Translation (100 min).",
    "generationNote": "Original momentum prompts.",
    "estimatedMinutes": 25,
    "difficultyTier": 2,
    "tags": [
      "momentum",
      "impulse",
      "generated"
    ],
    "items": [
      {
        "id": "phys1-mom-1",
        "format": "frq_half",
        "conceptId": "momentum",
        "conceptIntro": "Section II · Mathematical Routines. Key concept: J = Δp.",
        "prompt": "A 0.50 kg ball changes velocity from +6.0 m/s to −2.0 m/s. Find the impulse magnitude.\n\n(a) List known quantities and the unknown.\n(b) Write a symbolic equation relating them.\n(c) Calculate a numerical result with units.",
        "visibleSteps": [
          "Define positive direction.",
          "Compute Δp = m(v_f − v_i)."
        ],
        "blankSteps": [
          "(a) ______",
          "(b) ______",
          "(c) ______"
        ],
        "hints": [
          "Include sign change in velocity.",
          "Impulse magnitude is |Δp| if only magnitude is asked."
        ],
        "examSection": "Section II · Mathematical Routines"
      }
    ],
    "examFormatNote": "Section I: 40 four-choice MCQ (80 min). Section II: 4 FRQs — Mathematical Routines, Translation Between Representations, Experimental Design and Analysis, Qualitative/Quantitative Translation (100 min)."
  },
  {
    "id": "calcab-gen-integrals-a",
    "title": "Calculus AB — Integrals & FTC Set A",
    "subject": "AP Calculus AB/BC",
    "kind": "generated",
    "description": "Definite integrals and FTC applications. Official exam shape: Section I: 45 MCQ (Part A no calculator, Part B calculator). Section II: 6 FRQs (Part A calculator, Part B no calculator).",
    "generationNote": "Original integral prompts.",
    "estimatedMinutes": 30,
    "difficultyTier": 2,
    "tags": [
      "integrals",
      "FTC",
      "generated"
    ],
    "items": [
      {
        "id": "calc-int-1",
        "format": "frq_half",
        "conceptId": "integrals-basics",
        "conceptIntro": "Section II · Free Response (no calculator). Key concept: ∫ₐᵇ f(x) dx = F(b) − F(a).",
        "prompt": "A particle’s velocity is v(t) = 3t² + 1 meters per second. Find the displacement from t = 0 to t = 2 by evaluating ∫₀² (3x² + 1) dx.\n\n(a) Set up the derivative, integral, or limit that answers the question.\n(b) Compute the value.\n(c) Interpret the result in the context of the problem.",
        "visibleSteps": [
          "Find antiderivative.",
          "Apply FTC at bounds 0 and 2."
        ],
        "blankSteps": [
          "(a) ______",
          "(b) ______",
          "(c) ______"
        ],
        "hints": [
          "Antiderivative of 3x² is x³.",
          "Constant term integrates to x."
        ],
        "examSection": "Section II · Free Response (no calculator)"
      }
    ],
    "examFormatNote": "Section I: 45 MCQ (Part A no calculator, Part B calculator). Section II: 6 FRQs (Part A calculator, Part B no calculator)."
  },
  {
    "id": "chem-gen-stoich-a",
    "title": "AP Chemistry — Stoichiometry Set A",
    "subject": "AP Chemistry",
    "kind": "generated",
    "description": "Mole ratios and limiting reagent reasoning. Official exam shape: Section I: 60 MCQ (90 min). Section II: 7 FRQs — 3 long, 4 short (105 min).",
    "generationNote": "Original stoichiometry prompts.",
    "estimatedMinutes": 25,
    "difficultyTier": 2,
    "tags": [
      "stoichiometry",
      "generated"
    ],
    "items": [
      {
        "id": "chem-st-1",
        "format": "frq_half",
        "conceptId": "chem-stoichiometry",
        "conceptIntro": "Section II · Short free response. Key concept: coefficients give mole ratios.",
        "prompt": "For 2 H₂ + O₂ → 2 H₂O, which reactant limits if you start with 4 mol H₂ and 1 mol O₂?\n\n(a) Identify the chemical species, process, or claim.\n(b) Justify using a calculation, periodic trend, or particulate model.",
        "hints": [
          "Compare mole ratio needed vs available.",
          "O₂ needs 2 mol H₂ per mol O₂."
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
    "id": "bio-gen-cell-a",
    "title": "AP Biology — Cell Transport Set A",
    "subject": "AP Biology",
    "kind": "generated",
    "description": "Osmosis and membrane transport concept checks. Official exam shape: Section I: 60 MCQ (90 min; discrete + stimulus sets). Section II: 6 FRQs — 2 long (experimental/graphing), 4 short.",
    "generationNote": "Original cell transport prompts.",
    "estimatedMinutes": 20,
    "difficultyTier": 1,
    "tags": [
      "cells",
      "osmosis",
      "generated"
    ],
    "items": [
      {
        "id": "bio-cell-1",
        "format": "frq_half",
        "conceptId": "bio-cell-membrane",
        "conceptIntro": "Section II · Short FRQ · Data analysis. Key concept: water moves toward higher solute concentration.",
        "prompt": "A plant cell is placed in a hypertonic solution. Will it gain or lose water? Explain in one sentence.\n\n(a) Identify the biological concept or claim.\n(b) Explain using evidence from the model, data, or scenario.",
        "hints": [
          "Hypertonic means higher solute outside.",
          "Water leaves the cell by osmosis."
        ],
        "blankSteps": [
          "(a) ______",
          "(b) ______"
        ],
        "visibleSteps": [
          "Answer each labeled part in AP free-response style."
        ],
        "examSection": "Section II · Short FRQ · Data analysis"
      }
    ],
    "examFormatNote": "Section I: 60 MCQ (90 min; discrete + stimulus sets). Section II: 6 FRQs — 2 long (experimental/graphing), 4 short."
  }
];
