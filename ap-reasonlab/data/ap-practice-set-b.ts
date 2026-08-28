import { Questionnaire } from "@/lib/types";

/** Set B generated FRQ practice — second unit/topic per subject (2 items each). */
export const apPracticeSetB: Questionnaire[] = [
  {
    id: "stats-gen-inference-b",
    title: "AP Statistics — Inference Set B",
    subject: "AP Statistics",
    kind: "generated",
    description: "Type I/II errors and interpreting p-values.",
    generationNote: "Original inference Set B prompts.",
    estimatedMinutes: 30,
    difficultyTier: 2,
    tags: ["inference", "generated"],
    items: [
      {
        id: "stats-inf-b1",
        format: "concept_check",
        conceptIntro: "Key concept: p-value is P(data this extreme | H₀ true).",
        prompt:
          "A test yields p = 0.03 at α = 0.05. State the decision regarding H₀ and what p = 0.03 means in context.",
        hints: ["Reject H₀ when p < α.", "Do not say H₀ is 'proven false'."],
      },
      {
        id: "stats-inf-b2",
        format: "frq_half",
        conceptIntro: "Key concept: Type II error = fail to reject false H₀.",
        prompt:
          "Explain Type I and Type II error for a test that H₀: μ = 50 vs Hₐ: μ ≠ 50 in a manufacturing setting.",
        visibleSteps: ["Define each error in plain language.", "Give one consequence of each."],
        blankSteps: ["Type I: ______", "Type II: ______"],
        hints: ["Type I: reject true H₀.", "Type II: miss a real change."],
      },
    ],
  },
  {
    id: "psych-gen-research-b",
    title: "AP Psychology — Research Methods Set B",
    subject: "AP Psychology",
    kind: "generated",
    description: "Correlation vs causation and experimental controls.",
    generationNote: "Original psych methods Set B prompts.",
    estimatedMinutes: 25,
    difficultyTier: 2,
    tags: ["research", "generated"],
    items: [
      {
        id: "psych-rm-b1",
        format: "concept_check",
        conceptIntro: "Key concept: correlation ≠ causation.",
        prompt:
          "Ice cream sales and drowning deaths both rise in summer. Why should you not conclude ice cream causes drowning?",
        hints: ["Look for a third variable (temperature/season)."],
      },
      {
        id: "psych-rm-b2",
        format: "frq_half",
        conceptIntro: "Key concept: random assignment vs random sampling.",
        prompt:
          "Distinguish random assignment and random sampling. Which supports internal validity? Which supports generalization?",
        blankSteps: ["Random assignment: ______", "Random sampling: ______"],
        hints: ["Assignment → causation inside study.", "Sampling → population inference."],
      },
    ],
  },
  {
    id: "econ-micro-gen-b",
    title: "AP Microeconomics — Elasticity Set B",
    subject: "AP Microeconomics",
    kind: "generated",
    description: "Price elasticity and total revenue.",
    generationNote: "Original micro Set B prompts.",
    estimatedMinutes: 25,
    difficultyTier: 2,
    tags: ["micro", "elasticity", "generated"],
    items: [
      {
        id: "micro-el-b1",
        format: "concept_check",
        conceptIntro: "Key concept: elastic demand |Ed| > 1.",
        prompt:
          "If demand is elastic, what happens to total revenue when price increases? Explain in one sentence.",
        hints: ["Quantity falls proportionally more than price rises."],
      },
      {
        id: "micro-el-b2",
        format: "frq_half",
        conceptIntro: "Key concept: midpoint formula.",
        prompt:
          "Price rises from $4 to $6 and quantity falls from 100 to 80. Compute |Ed| using the midpoint method.",
        visibleSteps: ["Compute %ΔQ and %ΔP with midpoints."],
        blankSteps: ["|Ed| ≈ ______"],
        hints: ["Midpoint Q = 90, midpoint P = 5.", "|Ed| = |%ΔQ / %ΔP|."],
      },
    ],
  },
  {
    id: "econ-macro-gen-b",
    title: "AP Macroeconomics — Fiscal Policy Set B",
    subject: "AP Macroeconomics",
    kind: "generated",
    description: "Multipliers and crowding out.",
    generationNote: "Original macro Set B prompts.",
    estimatedMinutes: 25,
    difficultyTier: 2,
    tags: ["macro", "fiscal", "generated"],
    items: [
      {
        id: "macro-fp-b1",
        format: "concept_check",
        conceptIntro: "Key concept: expansionary fiscal policy.",
        prompt:
          "During a recession, how can increased government spending affect AD and unemployment in the short run?",
        hints: ["G shifts AD right.", "Unemployment may fall if output rises."],
      },
      {
        id: "macro-fp-b2",
        format: "frq_half",
        conceptIntro: "Key concept: crowding out.",
        prompt:
          "Explain how financing deficit spending by borrowing might reduce private investment.",
        blankSteps: ["Crowding out mechanism: ______"],
        hints: ["Higher demand for loanable funds → higher interest rates."],
      },
    ],
  },
  {
    id: "ush-gen-sourcing-b",
    title: "AP US History — Sourcing Set B",
    subject: "AP US History",
    kind: "generated",
    description: "Audience and purpose in primary sources.",
    generationNote: "Original USH Set B prompts.",
    estimatedMinutes: 30,
    difficultyTier: 2,
    tags: ["DBQ", "sourcing", "generated"],
    items: [
      {
        id: "ush-src-b1",
        format: "frq_half",
        conceptIntro: "Key concept: intended audience shapes tone.",
        prompt:
          "A 1963 speech to civil rights marchers vs a private memo to the president — how might audience change the message?",
        blankSteps: ["Public speech tone: ______", "Private memo tone: ______"],
        hints: ["Public: inspirational.", "Private: strategic/constrained."],
      },
      {
        id: "ush-src-b2",
        format: "concept_check",
        conceptIntro: "Key concept: purpose (persuade, record, justify).",
        prompt:
          "Why might a plantation ledger and an abolitionist pamphlet give different pictures of the same year?",
        hints: ["Different authors, purposes, and audiences."],
      },
    ],
  },
  {
    id: "world-gen-comparison-b",
    title: "AP World History — Comparison Set B",
    subject: "AP World History",
    kind: "generated",
    description: "Causation and continuity over time.",
    generationNote: "Original world history Set B prompts.",
    estimatedMinutes: 30,
    difficultyTier: 2,
    tags: ["LEQ", "comparison", "generated"],
    items: [
      {
        id: "wh-comp-b1",
        format: "frq_half",
        conceptIntro: "Key concept: valid comparison needs a shared category.",
        prompt:
          "Compare how two empires (your choice, 1200–1450) administered diverse populations. One similarity, one difference.",
        blankSteps: ["Similarity: ______", "Difference: ______"],
        hints: ["Category: administration, taxation, religion."],
      },
      {
        id: "wh-comp-b2",
        format: "concept_check",
        conceptIntro: "Key concept: CCOT thesis needs continuity AND change.",
        prompt:
          "Write one sentence thesis for CCOT in global trade networks 1450–1750.",
        hints: ["Name what persisted and what transformed."],
      },
    ],
  },
  {
    id: "englang-gen-rhetoric-b",
    title: "AP English Language — Rhetoric Set B",
    subject: "AP English Language",
    kind: "generated",
    description: "Line of reasoning and evidence types.",
    generationNote: "Original rhetoric Set B prompts.",
    estimatedMinutes: 30,
    difficultyTier: 2,
    tags: ["rhetoric", "generated"],
    items: [
      {
        id: "aplang-rhet-b1",
        format: "frq_half",
        conceptIntro: "Key concept: line of reasoning = claim → evidence → link.",
        prompt:
          "Outline the line of reasoning in an op-ed that opposes phone bans in schools (thesis + two evidence moves).",
        blankSteps: ["Thesis: ______", "Evidence move 1: ______"],
        hints: ["Identify claim first.", "Note stats vs anecdotes."],
      },
      {
        id: "aplang-rhet-b2",
        format: "concept_check",
        conceptIntro: "Key concept: concession strengthens ethos.",
        prompt:
          "Why might a writer concede a counterpoint before refuting it?",
        hints: ["Shows fairness; builds trust with audience."],
      },
    ],
  },
  {
    id: "englit-gen-analysis-b",
    title: "AP English Literature — Close Reading Set B",
    subject: "AP English Literature",
    kind: "generated",
    description: "Imagery, tone, and structure.",
    generationNote: "Original lit analysis Set B prompts.",
    estimatedMinutes: 35,
    difficultyTier: 2,
    tags: ["literature", "generated"],
    items: [
      {
        id: "aplit-cr-b1",
        format: "frq_half",
        conceptIntro: "Key concept: tie device to meaning, not device spotting.",
        prompt:
          "A scene repeats images of closed doors. What might that motif suggest about the character's choices?",
        blankSteps: ["Motif claim: ______", "Textual link: ______"],
        hints: ["Closed doors → blocked opportunities or self-isolation."],
      },
      {
        id: "aplit-cr-b2",
        format: "concept_check",
        conceptIntro: "Key concept: shift in tone.",
        prompt:
          "How can a volta in a sonnet change the reader's understanding of the speaker's attitude?",
        hints: ["Turn introduces contrast or resolution."],
      },
    ],
  },
  {
    id: "envsci-gen-ecosystems-b",
    title: "AP Environmental Science — Ecosystems Set B",
    subject: "AP Environmental Science",
    kind: "generated",
    description: "Biogeochemical cycles and human disturbance.",
    generationNote: "Original ES Set B prompts.",
    estimatedMinutes: 25,
    difficultyTier: 2,
    tags: ["ecosystems", "generated"],
    items: [
      {
        id: "es-eco-b1",
        format: "concept_check",
        conceptIntro: "Key concept: eutrophication sequence.",
        prompt:
          "Describe how agricultural runoff can lead to a fish kill in a lake.",
        hints: ["Nutrients → algal bloom → decomposition → low DO."],
      },
      {
        id: "es-eco-b2",
        format: "frq_half",
        conceptIntro: "Key concept: keystone species.",
        prompt:
          "Explain how removing a keystone predator can restructure a food web.",
        blankSteps: ["Short-term effect: ______", "Long-term effect: ______"],
        hints: ["Prey population explosion.", "Competition shifts."],
      },
    ],
  },
  {
    id: "csa-gen-methods-b",
    title: "AP Computer Science A — Arrays Set B",
    subject: "AP Computer Science A",
    kind: "generated",
    description: "Array traversal and run-time reasoning.",
    generationNote: "Original CSA Set B prompts.",
    estimatedMinutes: 25,
    difficultyTier: 2,
    tags: ["java", "arrays", "generated"],
    items: [
      {
        id: "csa-m-b1",
        format: "concept_check",
        conceptIntro: "Key concept: enhanced for vs indexed loop.",
        prompt:
          "When might you need an indexed for loop instead of a for-each loop over an int[]?",
        hints: ["Need index, modify neighbors, or reverse traversal."],
      },
      {
        id: "csa-m-b2",
        format: "frq_half",
        conceptIntro: "Key concept: run-time of linear scan.",
        prompt:
          "Describe an algorithm to find the second-largest value in an unsorted int[] in one pass.",
        visibleSteps: ["Track largest and secondLargest while iterating."],
        blankSteps: ["Key update rule: ______"],
        hints: ["Update both when new max appears."],
      },
    ],
  },
  {
    id: "csp-gen-data-b",
    title: "AP Computer Science Principles — Data Set B",
    subject: "AP Computer Science Principles",
    kind: "generated",
    description: "Privacy, metadata, and clean data.",
    generationNote: "Original CSP Set B prompts.",
    estimatedMinutes: 20,
    difficultyTier: 1,
    tags: ["data", "generated"],
    items: [
      {
        id: "csp-d-b1",
        format: "concept_check",
        conceptIntro: "Key concept: metadata reveals patterns.",
        prompt:
          "Why can anonymized location metadata still threaten privacy?",
        hints: ["Home/work patterns re-identify individuals."],
      },
      {
        id: "csp-d-b2",
        format: "frq_half",
        conceptIntro: "Key concept: data cleaning.",
        prompt:
          "A spreadsheet mixes dates as 03/04/2025 and 2025-03-04. Give two steps to clean the column.",
        blankSteps: ["Step 1: ______", "Step 2: ______"],
        hints: ["Standardize format.", "Validate or parse errors."],
      },
    ],
  },
  {
    id: "phys2-gen-waves-b",
    title: "AP Physics 2 — Waves Set B",
    subject: "AP Physics 2",
    kind: "generated",
    description: "Standing waves and boundary conditions.",
    generationNote: "Original Physics 2 Set B prompts.",
    estimatedMinutes: 25,
    difficultyTier: 2,
    tags: ["waves", "generated"],
    items: [
      {
        id: "phys2-w-b1",
        format: "concept_check",
        conceptIntro: "Key concept: nodes and antinodes.",
        prompt:
          "For a string fixed at both ends, where are nodes and antinodes relative to the ends?",
        hints: ["Fixed ends are nodes.", "First harmonic: one antinode at center."],
      },
      {
        id: "phys2-w-b2",
        format: "frq_half",
        conceptIntro: "Key concept: f₁ = v / 2L for fundamental string.",
        prompt:
          "A string of length 0.80 m has wave speed 320 m/s. Find the fundamental frequency.",
        visibleSteps: ["Use f = v / λ.", "Fundamental λ = 2L."],
        blankSteps: ["f₁ = ______ Hz"],
        hints: ["λ = 1.6 m.", "f = 320 / 1.6."],
      },
    ],
  },
  {
    id: "physc-mech-gen-b",
    title: "AP Physics C: Mechanics — Rotation Set B",
    subject: "AP Physics C: Mechanics",
    kind: "generated",
    description: "Angular momentum conservation.",
    generationNote: "Original Phys C Mech Set B prompts.",
    estimatedMinutes: 30,
    difficultyTier: 3,
    tags: ["rotation", "generated"],
    items: [
      {
        id: "phycm-r-b1",
        format: "frq_half",
        conceptIntro: "Key concept: L = Iω conserved if τ_ext = 0.",
        prompt:
          "A spinning figure skater pulls arms in, reducing I. What happens to ω? Explain using angular momentum.",
        blankSteps: ["Direction of ω change: ______", "Reason: ______"],
        hints: ["L constant → smaller I means larger ω."],
      },
      {
        id: "phycm-r-b2",
        format: "concept_check",
        conceptIntro: "Key concept: rolling without slipping v = Rω.",
        prompt:
          "A disk rolls without slipping. How are v_cm and ω related?",
        hints: ["v = Rω for rolling without slipping."],
      },
    ],
  },
  {
    id: "physc-em-gen-b",
    title: "AP Physics C: E&M — Capacitors Set B",
    subject: "AP Physics C: E&M",
    kind: "generated",
    description: "Capacitor energy and dielectrics.",
    generationNote: "Original E&M Set B prompts.",
    estimatedMinutes: 30,
    difficultyTier: 3,
    tags: ["electromagnetism", "generated"],
    items: [
      {
        id: "phycem-c-b1",
        format: "frq_half",
        conceptIntro: "Key concept: U = ½CV².",
        prompt:
          "A capacitor is charged then disconnected from the battery. A dielectric is inserted. What happens to stored energy?",
        visibleSteps: ["Q fixed when disconnected.", "C increases with κ."],
        blankSteps: ["Energy: ______", "Explain: ______"],
        hints: ["U = Q²/(2C) with Q constant."],
      },
      {
        id: "phycem-c-b2",
        format: "concept_check",
        conceptIntro: "Key concept: parallel plate C ∝ A/d.",
        prompt:
          "How does doubling plate separation affect capacitance (same A)?",
        hints: ["C halved when d doubles."],
      },
    ],
  },
  {
    id: "humgeo-gen-b",
    title: "AP Human Geography — Patterns Set B",
    subject: "AP Human Geography",
    kind: "generated",
    description: "Diffusion models and site vs situation.",
    generationNote: "Original APHG Set B prompts.",
    estimatedMinutes: 25,
    difficultyTier: 2,
    tags: ["geography", "generated"],
    items: [
      {
        id: "hg-pat-b1",
        format: "concept_check",
        conceptIntro: "Key concept: relocation vs expansion diffusion.",
        prompt:
          "Give one example of relocation diffusion and one of expansion diffusion.",
        hints: ["Relocation moves with migrants.", "Expansion spreads outward from hearth."],
      },
      {
        id: "hg-pat-b2",
        format: "frq_half",
        conceptIntro: "Key concept: site vs situation.",
        prompt:
          "Explain site and situation for a port city that later became a major airline hub.",
        blankSteps: ["Site factor: ______", "Situation factor: ______"],
        hints: ["Site: physical land/water.", "Situation: relative to markets/routes."],
      },
    ],
  },
  {
    id: "eurohist-gen-b",
    title: "AP European History — Context Set B",
    subject: "AP European History",
    kind: "generated",
    description: "Historical argument and synthesis.",
    generationNote: "Original Euro Set B prompts.",
    estimatedMinutes: 30,
    difficultyTier: 2,
    tags: ["LEQ", "generated"],
    items: [
      {
        id: "eur-ctx-b1",
        format: "frq_half",
        conceptIntro: "Key concept: nuance in thesis.",
        prompt:
          "Write a two-sentence thesis arguing whether industrialization improved living standards 1750–1900.",
        blankSteps: ["Thesis sentence 1: ______", "Thesis sentence 2: ______"],
        hints: ["Acknowledge regional/time variation.", "Avoid absolute yes/no."],
      },
      {
        id: "eur-ctx-b2",
        format: "concept_check",
        conceptIntro: "Key concept: continuity vs change.",
        prompt:
          "Name one continuity and one change in women's roles in Europe 1815–1914.",
        hints: ["Continuity: domestic expectations in many classes.", "Change: suffrage movements."],
      },
    ],
  },
  {
    id: "phys1-gen-energy-b",
    title: "Physics 1 — Energy & Work Set B",
    subject: "AP Physics 1",
    kind: "generated",
    description: "Potential energy and conservation with non-conservative work.",
    generationNote: "Original energy Set B prompts.",
    estimatedMinutes: 30,
    difficultyTier: 2,
    tags: ["energy", "work", "generated"],
    items: [
      {
        id: "phys1-en-b1",
        format: "frq_half",
        conceptId: "energy-work",
        conceptIntro: "Key concept: ΔK + ΔU = W_nc.",
        prompt:
          "A 1.5 kg book slides down a rough ramp, losing 2.0 J to friction. If it drops 0.50 m vertically (g = 10 m/s²), find speed at bottom from rest.",
        visibleSteps: ["Compute ΔU = mgh.", "Apply energy accounting with friction."],
        blankSteps: ["v = ______ m/s"],
        hints: ["mgh = 7.5 J.", "Net mechanical energy minus friction → K."],
      },
      {
        id: "phys1-en-b2",
        format: "concept_check",
        conceptId: "energy-work",
        conceptIntro: "Key concept: work by normal force on flat surface.",
        prompt:
          "A box pushed at constant speed on a horizontal floor: how much work does the normal force do?",
        hints: ["Normal ⊥ displacement → W = 0."],
      },
    ],
  },
  {
    id: "phys1-gen-momentum-b",
    title: "Physics 1 — Momentum Set B",
    subject: "AP Physics 1",
    kind: "generated",
    description: "2D momentum components and inelastic collisions.",
    generationNote: "Original momentum Set B prompts.",
    estimatedMinutes: 25,
    difficultyTier: 2,
    tags: ["momentum", "impulse", "generated"],
    items: [
      {
        id: "phys1-mom-b1",
        format: "frq_half",
        conceptId: "momentum",
        conceptIntro: "Key concept: p_x, p_y conserved separately.",
        prompt:
          "A 2 kg cart moving east at 3 m/s collides and sticks to a 1 kg cart at rest. Find common speed after collision.",
        visibleSteps: ["1D inelastic: m₁v₁ = (m₁+m₂)v_f."],
        blankSteps: ["v_f = ______ m/s"],
        hints: ["(2)(3) = (3)v_f."],
      },
      {
        id: "phys1-mom-b2",
        format: "concept_check",
        conceptId: "momentum",
        conceptIntro: "Key concept: impulse = area on F–t graph.",
        prompt:
          "How do you find impulse from a force–time graph?",
        hints: ["Area under the curve (signed)."],
      },
    ],
  },
  {
    id: "calcab-gen-integrals-b",
    title: "Calculus AB — Integrals & FTC Set B",
    subject: "AP Calculus AB/BC",
    kind: "generated",
    description: "U-substitution and average value.",
    generationNote: "Original integral Set B prompts.",
    estimatedMinutes: 30,
    difficultyTier: 2,
    tags: ["integrals", "FTC", "generated"],
    items: [
      {
        id: "calc-int-b1",
        format: "frq_half",
        conceptId: "integrals-basics",
        conceptIntro: "Key concept: u-substitution.",
        prompt: "Evaluate ∫ 2x cos(x²) dx.",
        visibleSteps: ["Let u = x².", "Find du and antiderivative in u."],
        blankSteps: ["Integral = ______ + C"],
        hints: ["du = 2x dx.", "∫ cos(u) du = sin(u)."],
      },
      {
        id: "calc-int-b2",
        format: "concept_check",
        conceptId: "integrals-basics",
        conceptIntro: "Key concept: average value = (1/(b−a))∫ₐᵇ f(x) dx.",
        prompt:
          "Write the integral expression for the average value of f on [1, 4].",
        hints: ["(1/3)∫₁⁴ f(x) dx."],
      },
    ],
  },
  {
    id: "chem-gen-stoich-b",
    title: "AP Chemistry — Stoichiometry Set B",
    subject: "AP Chemistry",
    kind: "generated",
    description: "Gas stoichiometry and percent yield.",
    generationNote: "Original stoichiometry Set B prompts.",
    estimatedMinutes: 25,
    difficultyTier: 2,
    tags: ["stoichiometry", "generated"],
    items: [
      {
        id: "chem-st-b1",
        format: "frq_half",
        conceptId: "chem-stoichiometry",
        conceptIntro: "Key concept: PV = nRT for gas moles.",
        prompt:
          "How many moles of O₂ are needed to produce 4.0 mol CO₂ in complete combustion of a hydrocarbon? (Use balanced CO₂:O₂ ratio from CₙHₘ + O₂ → CO₂ + H₂O setup.)",
        visibleSteps: ["Write and balance a simple case like CH₄ + 2O₂ → CO₂ + 2H₂O."],
        blankSteps: ["n(O₂) = ______ mol"],
        hints: ["From CH₄ example, 1 mol CO₂ needs 2 mol O₂."],
      },
      {
        id: "chem-st-b2",
        format: "concept_check",
        conceptId: "chem-stoichiometry",
        conceptIntro: "Key concept: percent yield.",
        prompt:
          "Theoretical yield is 10.0 g; actual yield is 8.0 g. Find percent yield.",
        hints: ["(actual/theoretical) × 100%."],
      },
    ],
  },
  {
    id: "bio-gen-cell-b",
    title: "AP Biology — Cell Transport Set B",
    subject: "AP Biology",
    kind: "generated",
    description: "Active transport and membrane proteins.",
    generationNote: "Original cell transport Set B prompts.",
    estimatedMinutes: 20,
    difficultyTier: 1,
    tags: ["cells", "osmosis", "generated"],
    items: [
      {
        id: "bio-cell-b1",
        format: "concept_check",
        conceptId: "bio-cell-membrane",
        conceptIntro: "Key concept: active vs passive transport.",
        prompt:
          "Why does the sodium-potassium pump require ATP while facilitated diffusion of glucose does not?",
        hints: ["Pump moves ions against gradient.", "Facilitated diffusion is down gradient."],
      },
      {
        id: "bio-cell-b2",
        format: "frq_half",
        conceptId: "bio-cell-membrane",
        conceptIntro: "Key concept: plasmolysis in plant cells.",
        prompt:
          "Describe what happens to a plant cell in a hypertonic solution (turgor, membrane position).",
        blankSteps: ["Water movement: ______", "Visible result: ______"],
        hints: ["Water leaves cell.", "Membrane pulls away — plasmolysis."],
      },
    ],
  },
];
