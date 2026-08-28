import { Questionnaire } from "@/lib/types";

/** Additional generated AP practice sets for Physics 1, Calc, Chem, Bio */
export const apPracticeExpansion: Questionnaire[] = [
  {
    id: "phys1-gen-energy-a",
    title: "Physics 1 — Energy & Work Set A",
    subject: "AP Physics 1",
    kind: "generated",
    description: "Work–energy theorem and conservation drills. Half-process only.",
    generationNote: "Original energy topic prompts.",
    estimatedMinutes: 30,
    difficultyTier: 2,
    tags: ["energy", "work", "generated"],
    items: [
      {
        id: "phys1-en-1",
        format: "frq_half",
        conceptId: "energy-work",
        conceptIntro: "Key concept: W_net = ΔK.",
        prompt:
          "A 2.0 kg block slides on a frictionless table and speeds up from 3.0 m/s to 7.0 m/s. Find the net work on the block.",
        visibleSteps: ["Recall W_net = ΔK.", "Compute initial and final kinetic energy."],
        blankSteps: ["W_net = ______ J"],
        hints: ["K = ½mv².", "Use final minus initial kinetic energy."],
      },
    ],
  },
  {
    id: "phys1-gen-momentum-a",
    title: "Physics 1 — Momentum Set A",
    subject: "AP Physics 1",
    kind: "generated",
    description: "Impulse and momentum change in 1D.",
    generationNote: "Original momentum prompts.",
    estimatedMinutes: 25,
    difficultyTier: 2,
    tags: ["momentum", "impulse", "generated"],
    items: [
      {
        id: "phys1-mom-1",
        format: "frq_half",
        conceptId: "momentum",
        conceptIntro: "Key concept: J = Δp.",
        prompt:
          "A 0.50 kg ball changes velocity from +6.0 m/s to −2.0 m/s. Find the impulse magnitude.",
        visibleSteps: ["Define positive direction.", "Compute Δp = m(v_f − v_i)."],
        blankSteps: ["|Δp| = ______ kg·m/s"],
        hints: ["Include sign change in velocity.", "Impulse magnitude is |Δp| if only magnitude is asked."],
      },
    ],
  },
  {
    id: "calcab-gen-integrals-a",
    title: "Calculus AB — Integrals & FTC Set A",
    subject: "AP Calculus AB/BC",
    kind: "generated",
    description: "Definite integrals and FTC applications.",
    generationNote: "Original integral prompts.",
    estimatedMinutes: 30,
    difficultyTier: 2,
    tags: ["integrals", "FTC", "generated"],
    items: [
      {
        id: "calc-int-1",
        format: "frq_half",
        conceptId: "integrals-basics",
        conceptIntro: "Key concept: ∫ₐᵇ f(x) dx = F(b) − F(a).",
        prompt: "Evaluate ∫₀² (3x² + 1) dx.",
        visibleSteps: ["Find antiderivative.", "Apply FTC at bounds 0 and 2."],
        blankSteps: ["Integral = ______"],
        hints: ["Antiderivative of 3x² is x³.", "Constant term integrates to x."],
      },
    ],
  },
  {
    id: "chem-gen-stoich-a",
    title: "AP Chemistry — Stoichiometry Set A",
    subject: "AP Chemistry",
    kind: "generated",
    description: "Mole ratios and limiting reagent reasoning.",
    generationNote: "Original stoichiometry prompts.",
    estimatedMinutes: 25,
    difficultyTier: 2,
    tags: ["stoichiometry", "generated"],
    items: [
      {
        id: "chem-st-1",
        format: "concept_check",
        conceptId: "chem-stoichiometry",
        conceptIntro: "Key concept: coefficients give mole ratios.",
        prompt:
          "For 2 H₂ + O₂ → 2 H₂O, which reactant limits if you start with 4 mol H₂ and 1 mol O₂?",
        hints: ["Compare mole ratio needed vs available.", "O₂ needs 2 mol H₂ per mol O₂."],
      },
    ],
  },
  {
    id: "bio-gen-cell-a",
    title: "AP Biology — Cell Transport Set A",
    subject: "AP Biology",
    kind: "generated",
    description: "Osmosis and membrane transport concept checks.",
    generationNote: "Original cell transport prompts.",
    estimatedMinutes: 20,
    difficultyTier: 1,
    tags: ["cells", "osmosis", "generated"],
    items: [
      {
        id: "bio-cell-1",
        format: "concept_check",
        conceptId: "bio-cell-membrane",
        conceptIntro: "Key concept: water moves toward higher solute concentration.",
        prompt:
          "A plant cell is placed in a hypertonic solution. Will it gain or lose water? Explain in one sentence.",
        hints: ["Hypertonic means higher solute outside.", "Water leaves the cell by osmosis."],
      },
    ],
  },
];
