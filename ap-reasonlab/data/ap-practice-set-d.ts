import { Questionnaire } from "@/lib/types";

/** Set D — additional challenge FRQ practice for high-traffic STEM subjects. */
export const apPracticeSetD: Questionnaire[] = [
  {
    id: "phys1-gen-rotation-d",
    title: "Physics 1 — Rotation Set D",
    subject: "AP Physics 1",
    kind: "generated",
    description: "Rolling without slipping and torque equilibrium.",
    generationNote: "Original rotation Set D prompts.",
    estimatedMinutes: 35,
    difficultyTier: 3,
    tags: ["rotation", "generated"],
    items: [
      {
        id: "phys1-rot-d1",
        format: "frq_half",
        conceptId: "rotation",
        conceptIntro: "Key concept: rolling K = ½mv² + ½Iω² with v = Rω.",
        prompt:
          "A solid sphere rolls without slipping down a ramp. If translational speed at the bottom is v, express total kinetic energy in terms of m, v, and I.",
        visibleSteps: ["Write K_trans + K_rot.", "Substitute ω = v/R."],
        blankSteps: ["K_total = ______"],
        hints: ["K = ½mv² + ½I(v/R)²."],
      },
      {
        id: "phys1-rot-d2",
        format: "concept_check",
        conceptId: "rotation",
        conceptIntro: "Key concept: static equilibrium Στ = 0.",
        prompt:
          "A uniform beam rests on two supports not at its ends. Why must you use torque — not just force balance — to find support forces?",
        hints: ["Forces can balance while net torque does not unless you include torques."],
      },
    ],
  },
  {
    id: "calcab-gen-de-d",
    title: "Calculus AB — Differential Equations Set D",
    subject: "AP Calculus AB/BC",
    kind: "generated",
    description: "Separable DEs and slope fields.",
    generationNote: "Original DE Set D prompts.",
    estimatedMinutes: 30,
    difficultyTier: 3,
    tags: ["differential-equations", "generated"],
    items: [
      {
        id: "calc-de-d1",
        format: "frq_half",
        conceptId: "diff-eqs",
        conceptIntro: "Key concept: dy/dx = ky ⇒ exponential solutions.",
        prompt: "Solve dy/dx = 3y with initial condition y(0) = 2.",
        visibleSteps: ["Separate: dy/y = 3 dx.", "Integrate and apply IC."],
        blankSteps: ["y = ______"],
        hints: ["y = Ce^{3x}.", "C = 2."],
      },
      {
        id: "calc-de-d2",
        format: "concept_check",
        conceptId: "diff-eqs",
        conceptIntro: "Key concept: slope field shows dydx at grid points.",
        prompt:
          "For dy/dx = x − y, describe the slope along the line y = x.",
        hints: ["On y = x, slope = x − x = 0 (horizontal segments)."],
      },
    ],
  },
  {
    id: "chem-gen-equilibrium-d",
    title: "AP Chemistry — Equilibrium Set D",
    subject: "AP Chemistry",
    kind: "generated",
    description: "ICE tables and Le Châtelier.",
    generationNote: "Original equilibrium Set D prompts.",
    estimatedMinutes: 30,
    difficultyTier: 3,
    tags: ["equilibrium", "generated"],
    items: [
      {
        id: "chem-eq-d1",
        format: "frq_half",
        conceptId: "chem-equilibrium",
        conceptIntro: "Key concept: ICE table setup.",
        prompt:
          "For N₂ + 3H₂ ⇌ 2NH₃, start with 1.0 M N₂ and 3.0 M H₂. At equilibrium [NH₃] = 0.40 M. Find change in [N₂].",
        visibleSteps: ["Relate Δ[NH₃] to Δ[N₂] via coefficients."],
        blankSteps: ["Δ[N₂] = ______ M"],
        hints: ["2 mol NH₃ per 1 mol N₂.", "Δ[N₂] = −0.20 M."],
      },
      {
        id: "chem-eq-d2",
        format: "concept_check",
        conceptId: "chem-equilibrium",
        conceptIntro: "Key concept: Le Châtelier — stress response.",
        prompt:
          "For an endothermic reaction at equilibrium, how does increasing temperature affect K and product amount?",
        hints: ["Treat heat as reactant; shift toward products; K increases with T."],
      },
    ],
  },
  {
    id: "bio-gen-metabolism-d",
    title: "AP Biology — Metabolism Set D",
    subject: "AP Biology",
    kind: "generated",
    description: "Cellular respiration and ATP.",
    generationNote: "Original metabolism Set D prompts.",
    estimatedMinutes: 25,
    difficultyTier: 2,
    tags: ["metabolism", "generated"],
    items: [
      {
        id: "bio-met-d1",
        format: "concept_check",
        conceptId: "bio-photosynthesis",
        conceptIntro: "Key concept: chemiosmosis in mitochondria.",
        prompt:
          "Where is the proton gradient established in aerobic respiration, and what does it drive?",
        hints: ["ETC in inner mitochondrial membrane drives ATP synthase via H⁺ flow."],
      },
      {
        id: "bio-met-d2",
        format: "frq_half",
        conceptId: "bio-cell-membrane",
        conceptIntro: "Key concept: feedback inhibition.",
        prompt:
          "Explain how feedback inhibition of an early enzyme in a pathway prevents overproduction of an end product.",
        blankSteps: ["Mechanism: ______"],
        hints: ["End product binds allosteric site; reduces pathway flux."],
      },
    ],
  },
];
