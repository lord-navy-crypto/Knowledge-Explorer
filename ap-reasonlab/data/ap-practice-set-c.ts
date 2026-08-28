import { Questionnaire } from "@/lib/types";

/** Set C — challenge-tier FRQ practice for high-traffic STEM subjects. */
export const apPracticeSetC: Questionnaire[] = [
  {
    id: "phys1-gen-energy-c",
    title: "Physics 1 — Energy & Work Set C",
    subject: "AP Physics 1",
    kind: "generated",
    description: "Energy bar charts with friction and springs.",
    generationNote: "Original energy Set C prompts.",
    estimatedMinutes: 35,
    difficultyTier: 3,
    tags: ["energy", "work", "generated"],
    items: [
      {
        id: "phys1-en-c1",
        format: "frq_half",
        conceptId: "energy-work",
        conceptIntro: "Key concept: U_s = ½kx²; W_nc = ΔK + ΔU.",
        prompt:
          "A 0.40 kg block compresses a spring (k = 200 N/m) by 0.10 m from natural length on a frictionless track, then releases. Find speed when the spring returns to natural length.",
        visibleSteps: ["Compute spring PE at max compression.", "Convert to KE at equilibrium."],
        blankSteps: ["v = ______ m/s"],
        hints: ["U_s = ½(200)(0.1)² = 1 J.", "K = ½mv²."],
      },
      {
        id: "phys1-en-c2",
        format: "concept_check",
        conceptId: "energy-work",
        conceptIntro: "Key concept: path independence for conservative forces.",
        prompt:
          "Why can you use energy methods instead of Newton's laws for a block sliding down a frictionless ramp?",
        hints: ["Gravity is conservative; no friction removes mechanical energy."],
      },
    ],
  },
  {
    id: "phys1-gen-momentum-c",
    title: "Physics 1 — Momentum Set C",
    subject: "AP Physics 1",
    kind: "generated",
    description: "2D glancing collisions and center-of-mass reasoning.",
    generationNote: "Original momentum Set C prompts.",
    estimatedMinutes: 30,
    difficultyTier: 3,
    tags: ["momentum", "generated"],
    items: [
      {
        id: "phys1-mom-c1",
        format: "frq_half",
        conceptId: "momentum",
        conceptIntro: "Key concept: p_x and p_y conserved separately.",
        prompt:
          "A 3 kg cart moving east at 2 m/s collides with a 1 kg cart at rest. After collision, the 1 kg cart moves north at 3 m/s. Find eastward velocity of the 3 kg cart.",
        visibleSteps: ["Conserve p_x: m₁v₁ = m₁v₁′ + m₂v₂′ (east).", "Conserve p_y: 0 = m₂v₂′ (north)."],
        blankSteps: ["v₁′ (east) = ______ m/s"],
        hints: ["North momentum only on 1 kg cart.", "Solve east component."],
      },
      {
        id: "phys1-mom-c2",
        format: "concept_check",
        conceptId: "momentum",
        conceptIntro: "Key concept: impulse changes momentum.",
        prompt:
          "Why does an airbag reduce injury compared with hitting a rigid dashboard?",
        hints: ["Same Δp over longer Δt ⇒ smaller average force."],
      },
    ],
  },
  {
    id: "phys1-gen-shm-c",
    title: "Physics 1 — SHM Set C",
    subject: "AP Physics 1",
    kind: "generated",
    description: "Period, frequency, and energy in oscillations.",
    generationNote: "Original SHM Set C prompts.",
    estimatedMinutes: 30,
    difficultyTier: 3,
    tags: ["shm", "generated"],
    items: [
      {
        id: "phys1-shm-c1",
        format: "frq_half",
        conceptId: "shm",
        conceptIntro: "Key concept: T = 2π√(m/k).",
        prompt:
          "A 0.25 kg mass on a spring oscillates with period 0.80 s. Find the spring constant k.",
        visibleSteps: ["Rearrange T = 2π√(m/k)."],
        blankSteps: ["k = ______ N/m"],
        hints: ["k = 4π²m/T²."],
      },
      {
        id: "phys1-shm-c2",
        format: "concept_check",
        conceptId: "shm",
        conceptIntro: "Key concept: total mechanical energy in SHM.",
        prompt:
          "At maximum displacement of a mass-spring system, where is energy stored and why is speed zero?",
        hints: ["PE max at amplitude; KE zero at turning point."],
      },
    ],
  },
  {
    id: "calcab-gen-integrals-c",
    title: "Calculus AB — Integrals Set C",
    subject: "AP Calculus AB/BC",
    kind: "generated",
    description: "Substitution and area between curves.",
    generationNote: "Original integral Set C prompts.",
    estimatedMinutes: 35,
    difficultyTier: 3,
    tags: ["integrals", "generated"],
    items: [
      {
        id: "calc-int-c1",
        format: "frq_half",
        conceptId: "integrals-basics",
        conceptIntro: "Key concept: ∫(f − g) dx for area between curves.",
        prompt: "Find the area between y = x² and y = x on [0, 1].",
        visibleSteps: ["Find intersection points.", "Integrate (top − bottom)."],
        blankSteps: ["Area = ______"],
        hints: ["On [0,1], x ≥ x².", "∫₀¹ (x − x²) dx."],
      },
      {
        id: "calc-int-c2",
        format: "concept_check",
        conceptId: "integrals-basics",
        conceptIntro: "Key concept: FTC Part 1.",
        prompt:
          "If F(x) = ∫₁ˣ t² dt, find F′(x) without evaluating the integral first.",
        hints: ["FTC1: F′(x) = x²."],
      },
    ],
  },
  {
    id: "calcab-gen-apps-c",
    title: "Calculus AB — Applications Set C",
    subject: "AP Calculus AB/BC",
    kind: "generated",
    description: "Related rates and optimization.",
    generationNote: "Original applications Set C prompts.",
    estimatedMinutes: 35,
    difficultyTier: 3,
    tags: ["related-rates", "optimization", "generated"],
    items: [
      {
        id: "calc-app-c1",
        format: "frq_half",
        conceptId: "related-rates",
        conceptIntro: "Key concept: differentiate implicit equation w.r.t. t.",
        prompt:
          "A ladder 10 ft long slides down a wall. When the base is 6 ft from the wall, the base moves at 2 ft/s. How fast is the top sliding down?",
        visibleSteps: ["Use x² + y² = 100.", "Differentiate and substitute knowns."],
        blankSteps: ["dy/dt = ______ ft/s (magnitude)"],
        hints: ["At x=6, y=8.", "Watch sign for downward motion."],
      },
      {
        id: "calc-app-c2",
        format: "concept_check",
        conceptId: "related-rates",
        conceptIntro: "Key concept: domain in optimization.",
        prompt:
          "Why must you check endpoints when optimizing a continuous function on a closed interval?",
        hints: ["Extrema can occur at boundaries, not only critical points."],
      },
    ],
  },
  {
    id: "chem-gen-stoich-c",
    title: "AP Chemistry — Stoichiometry Set C",
    subject: "AP Chemistry",
    kind: "generated",
    description: "Limiting reagent and percent yield combined.",
    generationNote: "Original stoichiometry Set C prompts.",
    estimatedMinutes: 30,
    difficultyTier: 3,
    tags: ["stoichiometry", "generated"],
    items: [
      {
        id: "chem-st-c1",
        format: "frq_half",
        conceptId: "chem-stoichiometry",
        conceptIntro: "Key concept: limiting reagent from mole ratios.",
        prompt:
          "For 2 Al + 3 Cl₂ → 2 AlCl₃, if you start with 2.0 mol Al and 2.5 mol Cl₂, how many moles of AlCl₃ form?",
        visibleSteps: ["Compare mole ratios needed vs available."],
        blankSteps: ["n(AlCl₃) = ______ mol"],
        hints: ["Cl₂ limits if Al needs only 1.67 mol Cl₂ for 2 mol Al."],
      },
      {
        id: "chem-st-c2",
        format: "concept_check",
        conceptId: "chem-equilibrium",
        conceptIntro: "Key concept: Q vs K.",
        prompt:
          "If Q < K for a reaction at a given temperature, which direction will the reaction shift?",
        hints: ["Shift toward products to increase Q until Q = K."],
      },
    ],
  },
  {
    id: "bio-gen-cell-c",
    title: "AP Biology — Cell Transport Set C",
    subject: "AP Biology",
    kind: "generated",
    description: "Water potential and membrane transport.",
    generationNote: "Original cell transport Set C prompts.",
    estimatedMinutes: 25,
    difficultyTier: 2,
    tags: ["cells", "generated"],
    items: [
      {
        id: "bio-cell-c1",
        format: "concept_check",
        conceptId: "bio-cell-membrane",
        conceptIntro: "Key concept: water moves toward lower water potential.",
        prompt:
          "A plant cell in a solution neither gains nor loses water. Is the solution isotonic, hypertonic, or hypotonic to the cell?",
        hints: ["No net water movement ⇒ isotonic."],
      },
      {
        id: "bio-cell-c2",
        format: "frq_half",
        conceptId: "bio-photosynthesis",
        conceptIntro: "Key concept: light reactions vs Calvin cycle.",
        prompt:
          "Name the location and main outputs of the light-dependent reactions in photosynthesis.",
        blankSteps: ["Location: ______", "Outputs: ______"],
        hints: ["Thylakoid membranes.", "ATP, NADPH, O₂."],
      },
    ],
  },
];
