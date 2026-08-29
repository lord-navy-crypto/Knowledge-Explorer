import { Questionnaire } from "@/lib/types";

/** Set D — additional challenge FRQ practice for high-traffic STEM subjects. */
export const apPracticeSetD: Questionnaire[] = [
  {
    "id": "phys1-gen-rotation-d",
    "title": "Physics 1 — Rotation Set D",
    "subject": "AP Physics 1",
    "kind": "generated",
    "description": "Rolling without slipping and torque equilibrium. Official exam shape: Section I: 40 four-choice MCQ (80 min). Section II: 4 FRQs — Mathematical Routines, Translation Between Representations, Experimental Design and Analysis, Qualitative/Quantitative Translation (100 min).",
    "generationNote": "Original rotation Set D prompts.",
    "estimatedMinutes": 35,
    "difficultyTier": 3,
    "tags": [
      "rotation",
      "generated"
    ],
    "items": [
      {
        "id": "phys1-rot-d1",
        "format": "frq_half",
        "conceptId": "rotation",
        "conceptIntro": "Section II · Mathematical Routines. Key concept: rolling K = ½mv² + ½Iω² with v = Rω.",
        "prompt": "A solid sphere rolls without slipping down a ramp. If translational speed at the bottom is v, express total kinetic energy in terms of m, v, and I.\n\n(a) List known quantities and the unknown.\n(b) Write a symbolic equation relating them.\n(c) Calculate a numerical result with units.",
        "visibleSteps": [
          "Write K_trans + K_rot.",
          "Substitute ω = v/R."
        ],
        "blankSteps": [
          "(a) ______",
          "(b) ______",
          "(c) ______"
        ],
        "hints": [
          "K = ½mv² + ½I(v/R)²."
        ],
        "examSection": "Section II · Mathematical Routines"
      },
      {
        "id": "phys1-rot-d2",
        "format": "frq_half",
        "conceptId": "rotation",
        "conceptIntro": "Section II · Mathematical Routines. Key concept: static equilibrium Στ = 0.",
        "prompt": "A uniform beam rests on two supports not at its ends. Why must you use torque — not just force balance — to find support forces?\n\n(a) List known quantities and the unknown.\n(b) Write a symbolic equation relating them.\n(c) Calculate a numerical result with units.",
        "hints": [
          "Forces can balance while net torque does not unless you include torques."
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
    "id": "calcab-gen-de-d",
    "title": "Calculus AB — Differential Equations Set D",
    "subject": "AP Calculus AB/BC",
    "kind": "generated",
    "description": "Separable DEs and slope fields. Official exam shape: Section I: 45 MCQ (Part A no calculator, Part B calculator). Section II: 6 FRQs (Part A calculator, Part B no calculator).",
    "generationNote": "Original DE Set D prompts.",
    "estimatedMinutes": 30,
    "difficultyTier": 3,
    "tags": [
      "differential-equations",
      "generated"
    ],
    "items": [
      {
        "id": "calc-de-d1",
        "format": "frq_half",
        "conceptId": "diff-eqs",
        "conceptIntro": "Section II · Free Response (no calculator). Key concept: dy/dx = ky ⇒ exponential solutions.",
        "prompt": "Solve dy/dx = 3y with initial condition y(0) = 2.\n\n(a) Set up the derivative, integral, or limit that answers the question.\n(b) Compute the value.\n(c) Interpret the result in the context of the problem.",
        "visibleSteps": [
          "Separate: dy/y = 3 dx.",
          "Integrate and apply IC."
        ],
        "blankSteps": [
          "(a) ______",
          "(b) ______",
          "(c) ______"
        ],
        "hints": [
          "y = Ce^{3x}.",
          "C = 2."
        ],
        "examSection": "Section II · Free Response (no calculator)"
      },
      {
        "id": "calc-de-d2",
        "format": "frq_half",
        "conceptId": "diff-eqs",
        "conceptIntro": "Section II · Free Response (no calculator). Key concept: slope field shows dydx at grid points.",
        "prompt": "For dy/dx = x − y, describe the slope along the line y = x.\n\n(a) Set up the derivative, integral, or limit that answers the question.\n(b) Compute the value.\n(c) Interpret the result in the context of the problem.",
        "hints": [
          "On y = x, slope = x − x = 0 (horizontal segments)."
        ],
        "blankSteps": [
          "(a) ______",
          "(b) ______",
          "(c) ______"
        ],
        "visibleSteps": [
          "Answer each labeled part in AP free-response style."
        ],
        "examSection": "Section II · Free Response (no calculator)"
      }
    ],
    "examFormatNote": "Section I: 45 MCQ (Part A no calculator, Part B calculator). Section II: 6 FRQs (Part A calculator, Part B no calculator)."
  },
  {
    "id": "chem-gen-equilibrium-d",
    "title": "AP Chemistry — Equilibrium Set D",
    "subject": "AP Chemistry",
    "kind": "generated",
    "description": "ICE tables and Le Châtelier. Official exam shape: Section I: 60 MCQ (90 min). Section II: 7 FRQs — 3 long, 4 short (105 min).",
    "generationNote": "Original equilibrium Set D prompts.",
    "estimatedMinutes": 30,
    "difficultyTier": 3,
    "tags": [
      "equilibrium",
      "generated"
    ],
    "items": [
      {
        "id": "chem-eq-d1",
        "format": "frq_half",
        "conceptId": "chem-equilibrium",
        "conceptIntro": "Section II · Long free response. Key concept: ICE table setup.",
        "prompt": "For N₂ + 3H₂ ⇌ 2NH₃, start with 1.0 M N₂ and 3.0 M H₂. At equilibrium [NH₃] = 0.40 M. Find change in [N₂].\n\n(a) Write the relevant equation, identification, or particulate claim.\n(b) Show a calculation or chemical reasoning with units.\n(c) Justify a claim using evidence from the prompt.",
        "visibleSteps": [
          "Relate Δ[NH₃] to Δ[N₂] via coefficients."
        ],
        "blankSteps": [
          "(a) ______",
          "(b) ______",
          "(c) ______"
        ],
        "hints": [
          "2 mol NH₃ per 1 mol N₂.",
          "Δ[N₂] = −0.20 M."
        ],
        "examSection": "Section II · Long free response"
      },
      {
        "id": "chem-eq-d2",
        "format": "frq_half",
        "conceptId": "chem-equilibrium",
        "conceptIntro": "Section II · Long free response. Key concept: Le Châtelier — stress response.",
        "prompt": "For an endothermic reaction at equilibrium, how does increasing temperature affect K and product amount?\n\n(a) Write the relevant equation, identification, or particulate claim.\n(b) Show a calculation or chemical reasoning with units.\n(c) Justify a claim using evidence from the prompt.",
        "hints": [
          "Treat heat as reactant; shift toward products; K increases with T."
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
    "id": "bio-gen-metabolism-d",
    "title": "AP Biology — Metabolism Set D",
    "subject": "AP Biology",
    "kind": "generated",
    "description": "Cellular respiration and ATP. Official exam shape: Section I: 60 MCQ (90 min; discrete + stimulus sets). Section II: 6 FRQs — 2 long (experimental/graphing), 4 short.",
    "generationNote": "Original metabolism Set D prompts.",
    "estimatedMinutes": 25,
    "difficultyTier": 2,
    "tags": [
      "metabolism",
      "generated"
    ],
    "items": [
      {
        "id": "bio-met-d1",
        "format": "frq_half",
        "conceptId": "bio-photosynthesis",
        "conceptIntro": "Section II · Long FRQ · Interpret experimental results. Key concept: chemiosmosis in mitochondria.",
        "prompt": "Where is the proton gradient established in aerobic respiration, and what does it drive?\n\n(a) Identify the independent and dependent variables or the claim supported by the data.\n(b) Predict or calculate from the results.\n(c) Justify using evidence from the experiment or model.",
        "hints": [
          "ETC in inner mitochondrial membrane drives ATP synthase via H⁺ flow."
        ],
        "blankSteps": [
          "(a) ______",
          "(b) ______",
          "(c) ______"
        ],
        "visibleSteps": [
          "Answer each labeled part in AP free-response style."
        ],
        "examSection": "Section II · Long FRQ · Interpret experimental results"
      },
      {
        "id": "bio-met-d2",
        "format": "frq_half",
        "conceptId": "bio-cell-membrane",
        "conceptIntro": "Section II · Short FRQ · Model or visual. Key concept: feedback inhibition.",
        "prompt": "Explain how feedback inhibition of an early enzyme in a pathway prevents overproduction of an end product.\n\n(a) Identify the biological concept or claim.\n(b) Explain using evidence from the model, data, or scenario.",
        "blankSteps": [
          "(a) ______",
          "(b) ______"
        ],
        "hints": [
          "End product binds allosteric site; reduces pathway flux."
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
