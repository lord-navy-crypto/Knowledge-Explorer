import { Questionnaire } from "@/lib/types";

/**
 * Rebuilt AP practice tranche: original questions with complete prompts, reference answers,
 * rationales, and scoring guides. Single-item sets are labeled skill_drill rather than being
 * presented as complete AP mock sections.
 */
export const apPracticeExpansion: Questionnaire[] = [
  {
    id: "phys1-gen-energy-a",
    title: "Physics 1 — Work and Energy Quantitative Reasoning",
    subject: "AP Physics 1",
    kind: "generated",
    authenticity: "exam_authentic",
    description:
      "Original AP Physics 1 Mathematical Routines practice using a complete force–distance scenario and multi-part reasoning.",
    generationNote: "Rebuilt original practice · 2026 question-quality refresh.",
    estimatedMinutes: 15,
    difficultyTier: 2,
    tags: ["energy", "work", "mathematical-routines", "refreshed"],
    items: [
      {
        id: "phys1-en-1",
        format: "open",
        authenticity: "exam_authentic",
        responseMode: "extended_response",
        difficultyTier: 2,
        conceptId: "energy-work",
        conceptIntro: "Section II · Mathematical Routines · work–energy theorem.",
        examSection: "Section II · Mathematical Routines",
        stimulus:
          "A 2.0 kg cart moves on a horizontal track. At point A its speed is 3.0 m/s. From A to B, a student pulls the cart with a constant 10 N horizontal force over 4.0 m while a constant 2.0 N resistive force acts opposite the motion. After B the pulling force is removed, but the 2.0 N resistive force continues to act.",
        prompt:
          "(a) Calculate the net work done on the cart from A to B.\n(b) Determine the speed of the cart at B.\n(c) Starting from B, calculate how far the cart travels before coming momentarily to rest.\n(d) Another student claims that the cart's kinetic energy at B equals the work done by the pulling force alone. State whether the claim is correct and justify your answer using an energy principle.",
        visibleSteps: [
          "Treat work as signed energy transfer and include every force that does work.",
          "Use the work–energy theorem between clearly identified initial and final states.",
        ],
        blankSteps: ["(a) Net work", "(b) Speed at B", "(c) Stopping distance", "(d) Claim and justification"],
        blankAnswers: [
          "W_net=(10 N)(4.0 m)−(2.0 N)(4.0 m)=32 J.",
          "K_A=9 J, so K_B=41 J. From ½mv_B²=41 J with m=2.0 kg, v_B=√41≈6.4 m/s.",
          "After B, only the resistive force does work: −(2.0 N)d=0−41 J, so d=20.5 m.",
          "The claim is incorrect. K_B−K_A equals the net work of all forces, not the pulling work alone; the resistive force does −8 J of work from A to B.",
        ],
        answerKey:
          "From A to B, the pulling force does +40 J and the resistive force does −8 J, so W_net=32 J. The cart begins with 9 J of kinetic energy, giving K_B=41 J and v_B≈6.4 m/s. After B, −2d=−41 gives d=20.5 m. The student's claim is false because the work–energy theorem uses net work, including the negative work of the resistive force.",
        rationale:
          "A complete response consistently applies W_net=ΔK across two intervals and distinguishes work by one force from net work by all forces.",
        scoringGuide: [
          "1 point: Correctly calculates +40 J pulling work, −8 J resistive work, and 32 J net work.",
          "1 point: Uses K_B=K_A+W_net and obtains K_B=41 J.",
          "1 point: Obtains v_B≈6.4 m/s with correct units or equivalent exact expression.",
          "1 point: Uses the post-B resistive work to obtain a stopping distance of 20.5 m.",
          "1 point: Rejects the claim and explicitly invokes net work / the resistive force's negative work.",
        ],
        hints: [
          "The pulling force and resistive force both do work between A and B.",
          "After B, the cart loses all 41 J of kinetic energy through negative work by the 2.0 N force.",
        ],
      },
    ],
    examFormatNote:
      "Single original Mathematical Routines task shaped for the AP Physics 1 free-response skill; not a full mock Section II.",
  },
  {
    id: "phys1-gen-momentum-a",
    title: "Physics 1 — Impulse, Momentum, and Model Comparison",
    subject: "AP Physics 1",
    kind: "generated",
    authenticity: "exam_authentic",
    description:
      "Original multi-part AP Physics 1 quantitative/qualitative translation task involving force-time data and momentum change.",
    generationNote: "Rebuilt original practice · 2026 question-quality refresh.",
    estimatedMinutes: 15,
    difficultyTier: 2,
    tags: ["momentum", "impulse", "representations", "refreshed"],
    items: [
      {
        id: "phys1-mom-1",
        format: "open",
        authenticity: "exam_authentic",
        responseMode: "extended_response",
        difficultyTier: 2,
        conceptId: "momentum",
        conceptIntro: "Section II · Qualitative/Quantitative Translation · impulse and momentum.",
        examSection: "Section II · Qualitative/Quantitative Translation",
        stimulus:
          "A 0.50 kg ball initially travels to the right at 6.0 m/s. During a collision with a padded wall, the horizontal force exerted by the wall on the ball increases linearly from 0 to 20 N leftward during the first 0.10 s, then decreases linearly back to 0 during the next 0.10 s. Ignore gravity during the short collision.",
        prompt:
          "(a) Determine the impulse delivered by the wall to the ball, including sign if rightward is positive.\n(b) Calculate the ball's velocity immediately after the collision.\n(c) On a force-versus-time graph, explain what geometric feature represents the magnitude of the impulse.\n(d) A second wall produces the same impulse over twice the collision time. Compare the average force magnitudes for the two collisions and justify your answer.",
        visibleSteps: [
          "Connect the area under a force–time graph to impulse.",
          "Use J=Δp and distinguish impulse from average force.",
        ],
        blankSteps: ["(a) Impulse", "(b) Final velocity", "(c) Graph interpretation", "(d) Average-force comparison"],
        blankAnswers: [
          "The triangular area is ½(0.20 s)(−20 N)=−2.0 N·s.",
          "p_i=(0.50)(6.0)=3.0 kg·m/s. p_f=3.0−2.0=1.0 kg·m/s, so v_f=+2.0 m/s.",
          "The magnitude of impulse is the magnitude of the signed area between the force curve and the time axis.",
          "For the same impulse over twice the time, |F_avg| is half as large because J=F_avgΔt.",
        ],
        answerKey:
          "The force–time triangle has signed area −2.0 N·s. Therefore p_f=1.0 kg·m/s and v_f=+2.0 m/s. Impulse is represented by signed area under F(t). Holding impulse fixed while doubling collision time halves the magnitude of average force.",
        rationale:
          "The task tests translation among a force-time representation, impulse, momentum, and a qualitative force-duration comparison.",
        scoringGuide: [
          "1 point: Correct signed triangular area / impulse of −2.0 N·s.",
          "1 point: Correct momentum update and final velocity +2.0 m/s.",
          "1 point: Identifies signed area under the F–t curve as impulse.",
          "1 point: States that the second average-force magnitude is half the first and justifies with J=F_avgΔt.",
        ],
        hints: [
          "The force-time curve is a triangle with total base 0.20 s.",
          "Rightward is positive, so the wall's impulse is negative.",
        ],
      },
    ],
    examFormatNote:
      "Single original AP Physics 1 translation task; not a full mock Section II.",
  },
  {
    id: "calcab-gen-integrals-a",
    title: "Calculus AB/BC — Accumulation and the Fundamental Theorem",
    subject: "AP Calculus AB/BC",
    kind: "generated",
    authenticity: "exam_authentic",
    description:
      "Original AP Calculus free-response practice requiring setup, evaluation, interpretation, and an accumulation-function derivative.",
    generationNote: "Rebuilt original practice · 2026 question-quality refresh.",
    estimatedMinutes: 15,
    difficultyTier: 2,
    tags: ["integrals", "FTC", "accumulation", "refreshed"],
    items: [
      {
        id: "calc-int-1",
        format: "open",
        authenticity: "exam_authentic",
        responseMode: "extended_response",
        difficultyTier: 2,
        conceptId: "integrals-basics",
        conceptIntro: "Section II · Free Response (no calculator) · accumulation and FTC.",
        examSection: "Section II · Free Response (no calculator)",
        stimulus:
          "A particle moves along a straight line with velocity v(t)=3t²−12t+9 meters per second for 0≤t≤4. At time t=0, the particle is at position x=5 meters.",
        prompt:
          "(a) Find all times in 0<t<4 at which the particle changes direction. Justify your answer.\n(b) Find the displacement of the particle from t=0 to t=4.\n(c) Find the particle's position at t=4.\n(d) Let A(x)=∫₁ˣ v(t)dt. Find A′(3) and explain what this value represents in the context of the velocity function.",
        visibleSteps: [
          "Direction changes occur when velocity changes sign, not merely when velocity equals zero.",
          "Displacement is the integral of velocity; position equals initial position plus displacement.",
        ],
        blankSteps: ["(a) Direction changes", "(b) Displacement", "(c) Position", "(d) A′(3) and interpretation"],
        blankAnswers: [
          "v(t)=3(t−1)(t−3), so signs change at t=1 and t=3; the particle changes direction at both times.",
          "∫₀⁴(3t²−12t+9)dt=[t³−6t²+9t]₀⁴=64−96+36=4 m.",
          "x(4)=5+4=9 m.",
          "By the Fundamental Theorem of Calculus, A′(3)=v(3)=0 m/s. It is the instantaneous rate of change of accumulated signed displacement A with respect to its upper limit at x=3.",
        ],
        answerKey:
          "Factor v(t)=3(t−1)(t−3). Its sign changes at t=1 and 3, so both are direction changes. The displacement on [0,4] is 4 m, giving x(4)=9 m. FTC gives A′(3)=v(3)=0.",
        rationale:
          "The response must distinguish velocity zeros from direction changes, integrate correctly, and use FTC conceptually rather than as a memorized rule alone.",
        scoringGuide: [
          "1 point: Finds t=1 and t=3 and verifies sign changes.",
          "1 point: Sets up the definite integral for displacement.",
          "1 point: Evaluates displacement as 4 m.",
          "1 point: Uses initial position to obtain x(4)=9 m.",
          "1 point: Uses FTC to obtain A′(3)=0 and gives a correct contextual interpretation.",
        ],
        hints: [
          "Factor the velocity before making a sign chart.",
          "Do not confuse total distance with displacement in part (b).",
        ],
      },
    ],
    examFormatNote:
      "Single original AP Calculus free-response task; not a full six-question Section II.",
  },
  {
    id: "chem-gen-stoich-a",
    title: "AP Chemistry — Stoichiometry, Limiting Reactant, and Particle Reasoning",
    subject: "AP Chemistry",
    kind: "generated",
    authenticity: "exam_authentic",
    description:
      "Original AP Chemistry short free-response task combining stoichiometric calculation with particulate reasoning and experimental evidence.",
    generationNote: "Rebuilt original practice · 2026 question-quality refresh.",
    estimatedMinutes: 14,
    difficultyTier: 2,
    tags: ["stoichiometry", "limiting-reactant", "particles", "refreshed"],
    items: [
      {
        id: "chem-st-1",
        format: "open",
        authenticity: "exam_authentic",
        responseMode: "extended_response",
        difficultyTier: 2,
        conceptId: "chem-stoichiometry",
        conceptIntro: "Section II · Short free response · stoichiometric and particulate reasoning.",
        examSection: "Section II · Short free response",
        stimulus:
          "Hydrogen gas reacts with oxygen gas according to 2 H₂(g)+O₂(g)→2 H₂O(g). A rigid reaction vessel initially contains 0.80 mol H₂ and 0.30 mol O₂ at a temperature high enough that the water remains gaseous. The reaction proceeds to completion.",
        prompt:
          "(a) Identify the limiting reactant and justify your answer quantitatively.\n(b) Calculate the amount, in moles, of H₂O produced.\n(c) Calculate the amount, in moles, of the excess reactant remaining after the reaction.\n(d) A student draws a particulate diagram showing both H₂ and O₂ molecules remaining after completion. Explain why that diagram is inconsistent with the reaction going to completion.",
        visibleSteps: [
          "Use the balanced-equation mole ratio before subtracting remaining amounts.",
          "A limiting reactant is completely consumed when the reaction reaches completion.",
        ],
        blankSteps: ["(a) Limiting reactant", "(b) H₂O produced", "(c) Excess remaining", "(d) Particulate-model explanation"],
        blankAnswers: [
          "0.30 mol O₂ requires 0.60 mol H₂. Since 0.80 mol H₂ is available, O₂ is limiting.",
          "The 1:2 ratio O₂:H₂O gives 0.60 mol H₂O.",
          "H₂ consumed=0.60 mol, so H₂ remaining=0.80−0.60=0.20 mol.",
          "Because O₂ is limiting and the reaction goes to completion, no O₂ molecules should remain; the diagram must show excess H₂ but zero O₂ reactant molecules.",
        ],
        answerKey:
          "O₂ is limiting because 0.30 mol O₂ consumes only 0.60 mol of the available 0.80 mol H₂. The reaction forms 0.60 mol H₂O and leaves 0.20 mol H₂. A completed-reaction particle diagram cannot show unreacted O₂ because the limiting reactant is exhausted.",
        rationale:
          "A complete answer connects the symbolic balanced equation to mole accounting and then to a particulate representation.",
        scoringGuide: [
          "1 point: Identifies O₂ as limiting with a valid mole-ratio calculation.",
          "1 point: Calculates 0.60 mol H₂O.",
          "1 point: Calculates 0.20 mol H₂ remaining.",
          "1 point: Explains that a completed reaction cannot contain remaining limiting-reactant O₂ molecules.",
        ],
        hints: [
          "Compare the amount of H₂ required for 0.30 mol O₂ with the 0.80 mol available.",
          "Use the same stoichiometric extent to calculate both product and leftover reactant.",
        ],
      },
    ],
    examFormatNote:
      "Single original AP Chemistry short free-response task; not a full seven-question Section II.",
  },
  {
    id: "bio-gen-cell-a",
    title: "AP Biology — Osmosis Experimental Analysis",
    subject: "AP Biology",
    kind: "generated",
    authenticity: "exam_authentic",
    description:
      "Original AP Biology data-analysis task using an osmosis experiment, prediction, quantitative evidence, and evaluation of a claim.",
    generationNote: "Rebuilt original practice · 2026 question-quality refresh.",
    estimatedMinutes: 14,
    difficultyTier: 2,
    tags: ["osmosis", "cell-transport", "data-analysis", "refreshed"],
    items: [
      {
        id: "bio-cell-1",
        format: "open",
        authenticity: "exam_authentic",
        responseMode: "extended_response",
        difficultyTier: 2,
        conceptId: "bio-cell-membrane",
        conceptIntro: "Section II · Short FRQ · Data analysis · water potential and osmosis.",
        examSection: "Section II · Short FRQ · Data analysis",
        stimulus:
          "Students cut equal-size cylinders from the same potato and record each cylinder's initial mass. They place cylinders for 45 minutes in sucrose solutions of 0.0 M, 0.2 M, 0.4 M, and 0.6 M. Mean percent mass changes are +12%, +5%, −3%, and −11%, respectively. Temperature and solution volume are held constant.",
        prompt:
          "(a) Describe the direction of net water movement for potato cells in the 0.6 M solution and justify your answer using the data.\n(b) Estimate the sucrose concentration at which there would be no net change in potato mass. Explain how the data support your estimate.\n(c) Predict what would happen to the magnitude of percent mass change if the cylinders remained in the solutions for only 5 minutes instead of 45 minutes. Justify your prediction.\n(d) A student claims that sucrose molecules moved rapidly into the potato cells and caused the mass decrease in 0.6 M solution. Evaluate the claim using the principles of osmosis.",
        visibleSteps: [
          "Use the sign and magnitude of percent mass change as evidence for net water movement.",
          "Distinguish movement of water across a selectively permeable membrane from movement of the solute itself.",
        ],
        blankSteps: ["(a) Water movement", "(b) Isotonic estimate", "(c) Five-minute prediction", "(d) Claim evaluation"],
        blankAnswers: [
          "Water moved out of the potato cells because the cylinders lost 11% mass in 0.6 M sucrose.",
          "Approximately 0.33 M, between 0.2 M (+5%) and 0.4 M (−3%); linear interpolation gives about 0.325 M.",
          "The magnitude would generally be smaller because less time would be available for net water movement toward equilibrium.",
          "The claim is not supported. The mass decrease is explained by net water leaving cells in a hypertonic external solution; it does not require rapid sucrose entry into cells.",
        ],
        answerKey:
          "The −11% mass change at 0.6 M indicates net water loss from potato tissue. The zero-change concentration is between 0.2 and 0.4 M, approximately 0.33 M by interpolation. A shorter exposure should produce a smaller magnitude change because the system has less time to approach equilibrium. The student's sucrose-entry explanation is inconsistent with osmosis: water loss, not required solute influx, accounts for the decreased mass.",
        rationale:
          "The task requires students to use quantitative evidence, interpolate an isotonic condition, make a time-based prediction, and evaluate a mechanistic claim.",
        scoringGuide: [
          "1 point: States net water movement out of cells and cites the −11% mass change.",
          "1 point: Places the isotonic point between 0.2 M and 0.4 M with a reasonable estimate near 0.33 M.",
          "1 point: Predicts a smaller magnitude after 5 minutes and justifies using time toward equilibrium.",
          "1 point: Rejects the sucrose-entry claim and explains the result by net water movement in a hypertonic environment.",
        ],
        hints: [
          "A negative percent mass change means the tissue lost water overall.",
          "Find where the trend would cross 0% mass change between the 0.2 M and 0.4 M observations.",
        ],
      },
    ],
    examFormatNote:
      "Single original AP Biology short data-analysis task; not a full six-question Section II.",
  },
];
