import { Questionnaire } from "@/lib/types";

function mcq(
  id: string,
  conceptId: string,
  intro: string,
  prompt: string,
  choices: [string, string, string, string],
  answer: number,
  hints: string[],
  answerKey: string
): Questionnaire["items"][number] {
  return {
    id,
    format: "mcq",
    conceptId,
    conceptIntro: intro,
    prompt,
    choices,
    mcqAnswer: answer,
    hints,
    answerKey,
  };
}

function frq(
  id: string,
  conceptId: string,
  intro: string,
  prompt: string,
  visibleSteps: string[],
  blankSteps: string[],
  hints: string[] = ["Write a complete AP-style response with specific evidence."],
  blankAnswers?: string[]
): Questionnaire["items"][number] {
  return {
    id,
    format: "frq_half",
    conceptId,
    conceptIntro: intro,
    prompt,
    visibleSteps,
    blankSteps,
    hints,
    blankAnswers,
  };
}

/**
 * Official-format slices for every AP subject that did not yet have a dedicated
 * exam-shape set. Original items — not College Board exam text.
 */
export const apExamFormatAllQuestionnaires: Questionnaire[] = [
  {
    id: "phys1-exam-format-a",
    title: "AP Physics 1 — Exam Format Set A",
    subject: "AP Physics 1",
    kind: "generated",
    description: "Four-choice MCQ plus the four 2025+ Physics 1 FRQ types. Original numbers.",
    generationNote: "Original Physics 1 items in College Board 2025 exam shape.",
    estimatedMinutes: 45,
    difficultyTier: 2,
    tags: ["exam-format", "MCQ", "FRQ", "generated"],
    items: [
      mcq(
        "phys1-fmt-m1",
        "kinematics-basics",
        "Section I · Multiple Choice",
        "A cart moves right at constant velocity on a horizontal track. Which graph of net force vs time is consistent?",
        [
          "A horizontal line at a positive constant force",
          "A horizontal line at F_net = 0",
          "A line with constant positive slope",
          "A force that grows without bound",
        ],
        1,
        ["Newton 1: constant velocity ⇒ net force zero."],
        "B. Constant velocity means a_net = 0, so F_net = 0."
      ),
      mcq(
        "phys1-fmt-m2",
        "energy-work",
        "Section I · Multiple Choice",
        "A block slides down a rough ramp at constant speed. Which statement is true?",
        [
          "Mechanical energy is conserved.",
          "The decrease in gravitational PE equals energy transferred to thermal energy.",
          "Kinetic energy increases at a constant rate.",
          "The normal force does positive work.",
        ],
        1,
        ["Constant speed ⇒ ΔK = 0; friction dissipates Ug."],
        "B. ΔK = 0 so loss in Ug goes to thermal energy."
      ),
      mcq(
        "phys1-fmt-m3",
        "momentum-impulse",
        "Section I · Multiple Choice",
        "Two carts collide and stick. Which quantity must be conserved if the track is frictionless?",
        [
          "Kinetic energy",
          "Mechanical energy",
          "Horizontal momentum of the two-cart system",
          "Each cart’s momentum separately",
        ],
        2,
        ["Inelastic: K not conserved; no external horizontal force ⇒ p conserved."],
        "C. Isolated horizontal system conserves total momentum."
      ),
      frq(
        "phys1-fmt-mr",
        "kinematics-basics",
        "Section II · Mathematical Routines",
        "A 1.2 kg block starts from rest and accelerates at 2.5 m/s² for 3.0 s. Calculate the displacement during those 3.0 s.",
        ["List knowns.", "Choose a kinematics equation without v."],
        ["x = ______ m"],
        ["x = v₀t + ½at² with v₀ = 0."],
        ["11 m (½·2.5·9 = 11.25 ≈ 11)"]
      ),
      frq(
        "phys1-fmt-ed",
        "energy-work",
        "Section II · Experimental Design and Analysis",
        "Design a procedure to determine the coefficient of kinetic friction between a block and a board using a stopwatch, meter stick, and a balance. You may tilt the board.",
        ["Identify measured quantities.", "Write the equation that yields μ_k."],
        ["Procedure outline: ______", "μ_k from data: ______"],
        ["Time a slide through distance d on a known angle; a = 2d/t²; μ_k = tanθ − a/(g cosθ)."]
      ),
    ],
  },
  {
    id: "phys2-exam-format-a",
    title: "AP Physics 2 — Exam Format Set A",
    subject: "AP Physics 2",
    kind: "generated",
    description: "Four-choice MCQ plus Physics 2 FRQ types (fluids, E&M, thermo, modern).",
    generationNote: "Original Physics 2 items in official exam shape.",
    estimatedMinutes: 40,
    difficultyTier: 2,
    tags: ["exam-format", "generated"],
    items: [
      mcq(
        "phys2-fmt-m1",
        "p2-fluids",
        "Section I · Multiple Choice",
        "A sealed cylinder of ideal gas is compressed slowly at constant temperature. Which quantity increases?",
        ["Average kinetic energy of a molecule", "Pressure", "Internal energy", "rms speed"],
        1,
        ["Isothermal: T fixed so KE and U fixed; PV = nRT ⇒ P rises."],
        "B. T constant, V down ⇒ P up."
      ),
      mcq(
        "phys2-fmt-m2",
        "p2-circuits",
        "Section I · Multiple Choice",
        "Two identical resistors in parallel have equivalent resistance R/2. If a third identical resistor is added in parallel, the equivalent resistance is",
        ["R/3", "R/2", "2R/3", "3R"],
        0,
        ["n equal resistors in parallel: R/n."],
        "A. Three identical parallels give R/3."
      ),
      frq(
        "phys2-fmt-ed",
        "p2-fluids",
        "Section II · Experimental Design and Analysis",
        "You have a beaker, overflow can, graduated cylinder, and an irregular metal sample. Outline how to find the sample’s density.",
        ["Measure mass.", "Measure displaced volume."],
        ["ρ = ______"],
        ["ρ = m/V_displaced."]
      ),
    ],
  },
  {
    id: "physc-mech-exam-format-a",
    title: "AP Physics C: Mechanics — Exam Format Set A",
    subject: "AP Physics C: Mechanics",
    kind: "generated",
    description: "Calculator MCQ plus 3 calculus-based FRQs.",
    generationNote: "Original Physics C Mechanics exam-shape items.",
    estimatedMinutes: 40,
    difficultyTier: 3,
    tags: ["exam-format", "calculus", "generated"],
    items: [
      mcq(
        "pcm-fmt-m1",
        "pcm-newton",
        "Section I · Multiple Choice",
        "A particle’s velocity is v(t) = 4t² − 3 (SI). Its acceleration at t = 2 s is",
        ["4 m/s²", "13 m/s²", "16 m/s²", "29 m/s²"],
        2,
        ["a = dv/dt = 8t; a(2) = 16."],
        "C. a = 8t = 16 m/s²."
      ),
      frq(
        "pcm-fmt-f1",
        "pcm-energy",
        "Section II · Free Response 1",
        "A variable force F(x) = 6x (N, x in m) acts on a 2.0 kg particle from x = 0 to x = 3.0 m, starting from rest. Find the work and the speed at x = 3.0 m.",
        ["W = ∫ F dx.", "W = ΔK."],
        ["W = ______ J", "v = ______ m/s"],
        ["W = 3x² from 0 to 3 = 27 J; 27 = ½(2)v² ⇒ v = √27 ≈ 5.2 m/s."]
      ),
    ],
  },
  {
    id: "physc-em-exam-format-a",
    title: "AP Physics C: E&M — Exam Format Set A",
    subject: "AP Physics C: E&M",
    kind: "generated",
    description: "Calculator MCQ plus calculus-based E&M FRQs.",
    generationNote: "Original Physics C E&M exam-shape items.",
    estimatedMinutes: 40,
    difficultyTier: 3,
    tags: ["exam-format", "generated"],
    items: [
      mcq(
        "pcem-fmt-m1",
        "pcem-gauss",
        "Section I · Multiple Choice",
        "For a uniformly charged insulating sphere of radius R, Gauss’s law is most useful to find E at r < R using a Gaussian surface that is",
        ["a cube outside the sphere", "a sphere of radius r concentric with the charge", "an infinite plane", "a cylinder through a diameter"],
        1,
        ["Match symmetry: spherical charge ⇒ spherical Gaussian surface."],
        "B. Concentric sphere uses Φ = E·4πr² = Q_enc/ε₀."
      ),
      frq(
        "pcem-fmt-f1",
        "pcem-circuits",
        "Section II · Free Response 1",
        "An RC circuit has ε = 12 V, R = 4.0 kΩ, C = 2.0 μF. The capacitor is initially uncharged. Write I(t) after the switch closes and find the time constant.",
        ["τ = RC.", "I(t) = (ε/R)e^(−t/τ)."],
        ["τ = ______ s", "I(0) = ______ A"],
        ["τ = 8.0×10⁻³ s; I(0) = 3.0 mA."]
      ),
    ],
  },
  {
    id: "chem-exam-format-a",
    title: "AP Chemistry — Exam Format Set A",
    subject: "AP Chemistry",
    kind: "generated",
    description: "60-style 4-choice MCQ (stimulus or discrete) plus long/short FRQ.",
    generationNote: "Original Chemistry items in official exam shape.",
    estimatedMinutes: 40,
    difficultyTier: 2,
    tags: ["exam-format", "generated"],
    items: [
      mcq(
        "chem-fmt-m1",
        "chem-stoich",
        "Section I · Multiple Choice",
        "How many moles of O₂ are required to burn 2.0 mol C₃H₈? C₃H₈ + 5 O₂ → 3 CO₂ + 4 H₂O",
        ["2.0", "5.0", "10.", "15"],
        2,
        ["2.0 mol propane × 5 mol O₂ / 1 mol propane = 10 mol."],
        "C. Mole ratio 5/1."
      ),
      mcq(
        "chem-fmt-m2",
        "chem-equilibrium",
        "Section I · Multiple Choice",
        "For N₂(g) + 3 H₂(g) ⇌ 2 NH₃(g), decreasing volume at constant T shifts the system",
        ["left; fewer gas moles on the left", "right; fewer gas moles on the right", "no shift; Kc unchanged means Q unchanged", "to completion"],
        1,
        ["Fewer moles of gas on product side (2 vs 4)."],
        "B. Compression favors fewer gas moles."
      ),
      frq(
        "chem-fmt-long",
        "chem-thermo",
        "Section II · Long free response",
        "A 50.0 g sample of metal at 100.0 °C is placed in 100.0 g of water at 22.0 °C. Final T = 28.5 °C. Calculate the specific heat of the metal. (c_water = 4.18 J/g·°C)",
        ["q_water = −q_metal.", "Solve for c_metal."],
        ["c = ______ J/g·°C"],
        ["q_w = 100×4.18×6.5; c_m = q_w / (50×71.5)."]
      ),
    ],
  },
  {
    id: "bio-exam-format-a",
    title: "AP Biology — Exam Format Set A",
    subject: "AP Biology",
    kind: "generated",
    description: "Stimulus-style 4-choice MCQ plus long/short FRQ types (experiment, graphing, models).",
    generationNote: "Original Biology items in official exam shape.",
    estimatedMinutes: 40,
    difficultyTier: 2,
    tags: ["exam-format", "generated"],
    items: [
      mcq(
        "bio-fmt-m1",
        "bio-cells",
        "Section I · Multiple Choice",
        "A cell in distilled water bursts. The most likely explanation is that the solution is _____ to the cytoplasm and water moved _____.",
        [
          "hypertonic; out",
          "hypotonic; in",
          "isotonic; equally both ways with no net volume change",
          "hypertonic; in",
        ],
        1,
        ["Distilled water is hypotonic; water enters."],
        "B. Hypotonic surroundings ⇒ net water in."
      ),
      frq(
        "bio-fmt-exp",
        "bio-energy",
        "Section II · Long FRQ · Interpret experimental results",
        "Students measure O₂ production of Elodea under three light colors. Red and blue yield high O₂; green yields near zero. Explain in terms of photosynthetic pigments.",
        ["Identify which wavelengths are absorbed.", "Connect to photolysis / O₂."],
        ["Explanation: ______"],
        ["Chlorophyll absorbs red/blue and reflects green, so little light energy is captured in green light."]
      ),
      frq(
        "bio-fmt-short",
        "bio-genetics",
        "Section II · Short FRQ · Conceptual analysis",
        "A heterozygous pea plant (Yy) is crossed with yy. Predict the offspring phenotype ratio if Y is dominant yellow.",
        ["Punnett square."],
        ["Ratio: ______"],
        ["1 yellow : 1 green"]
      ),
    ],
  },
  {
    id: "calc-exam-format-a",
    title: "AP Calculus AB/BC — Exam Format Set A",
    subject: "AP Calculus AB/BC",
    kind: "generated",
    description: "4-choice MCQ plus calculator and no-calculator FRQ parts.",
    generationNote: "Original Calculus items in official exam shape.",
    estimatedMinutes: 40,
    difficultyTier: 2,
    tags: ["exam-format", "generated"],
    items: [
      mcq(
        "calc-fmt-m1",
        "calc-abbc-derivatives",
        "Section I · Multiple Choice (no calculator)",
        "If f(x) = x³ − 6x, then f′(2) =",
        ["−6", "6", "8", "12"],
        1,
        ["f′ = 3x² − 6; f′(2) = 12 − 6 = 6."],
        "B. 6"
      ),
      mcq(
        "calc-fmt-m2",
        "calc-abbc-integrals",
        "Section I · Multiple Choice (no calculator)",
        "∫₀² (3x²) dx =",
        ["6", "8", "12", "24"],
        1,
        ["Antiderivative x³ from 0 to 2 = 8."],
        "B. 8"
      ),
      frq(
        "calc-fmt-frq",
        "related-rates",
        "Section II · Free Response (no calculator)",
        "A spherical balloon’s volume increases at 12π cm³/s. Find dr/dt when r = 3 cm.",
        ["V = (4/3)πr³.", "dV/dt = 4πr² dr/dt."],
        ["dr/dt = ______ cm/s"],
        ["12π = 4π(9) dr/dt ⇒ dr/dt = 1/3"]
      ),
    ],
  },
  {
    id: "stats-exam-format-a",
    title: "AP Statistics — Exam Format Set A",
    subject: "AP Statistics",
    kind: "generated",
    description: "4-choice MCQ plus FRQ skills and an Investigative Task-style prompt.",
    generationNote: "Original Statistics items in official exam shape.",
    estimatedMinutes: 40,
    difficultyTier: 2,
    tags: ["exam-format", "investigative", "generated"],
    items: [
      mcq(
        "stats-fmt-m1",
        "stats-inference",
        "Section I · Multiple Choice",
        "A 95% CI for a mean is 12.4 ± 1.1. Which is a correct interpretation?",
        [
          "95% of the data lie between 11.3 and 13.5.",
          "The probability that μ is in this interval is 0.95.",
          "We are 95% confident that the method produced an interval containing μ.",
          "The sample mean is 95% accurate.",
        ],
        2,
        ["Confidence is about the method, not P(μ in this realized interval)."],
        "C. Standard confidence interpretation."
      ),
      frq(
        "stats-fmt-inf",
        "stats-inference",
        "Section II Part A · Inference",
        "A school tests H0: p = 0.5 vs Ha: p > 0.5 with n = 80 and 48 successes. Calculate p̂ and state the hypotheses in context.",
        ["p̂ = x/n.", "Define p."],
        ["p̂ = ______", "H0/Ha: ______"],
        ["0.60; p = true proportion who…"]
      ),
      frq(
        "stats-fmt-inv",
        "stats-collect",
        "Section II Part B · Investigative Task",
        "A district wants to know whether a new study hall changes GPA. Describe a randomized experiment, identify a lurking variable if they instead compare volunteers vs non-volunteers, and name one ethical constraint.",
        ["Random assignment.", "Confounding.", "Consent/privacy."],
        ["Design: ______", "Lurking variable: ______"],
        ["Randomly assign study hall vs not; volunteers may already be more motivated."]
      ),
    ],
  },
  {
    id: "psych-exam-format-a",
    title: "AP Psychology — Exam Format Set A",
    subject: "AP Psychology",
    kind: "generated",
    description: "4-choice MCQ plus concept-application and research-method FRQs.",
    generationNote: "Original Psychology items in official exam shape.",
    estimatedMinutes: 35,
    difficultyTier: 2,
    tags: ["exam-format", "generated"],
    items: [
      mcq(
        "psych-fmt-m1",
        "psych-research",
        "Section I · Multiple Choice",
        "Which design best tests whether a new mnemonic causes higher recall?",
        [
          "Case study of one student",
          "Random assignment to mnemonic vs control, then a recall test",
          "Survey of who likes the mnemonic",
          "Correlation of GPA and hours slept",
        ],
        1,
        ["Cause requires experiment with random assignment."],
        "B. Experiment."
      ),
      frq(
        "psych-fmt-rm",
        "psych-research",
        "Section II · Research-method FRQ",
        "Identify the independent variable, dependent variable, and one ethical guideline for a study that assigns students to 5 vs 9 hours of sleep then tests reaction time.",
        ["IV = sleep hours.", "DV = reaction time.", "Informed consent / debrief."],
        ["IV: ______", "DV: ______", "Ethics: ______"]
      ),
    ],
  },
  {
    id: "micro-exam-format-a",
    title: "AP Microeconomics — Exam Format Set A",
    subject: "AP Microeconomics",
    kind: "generated",
    description: "4-choice MCQ plus 1 long and 2 short FRQ shapes.",
    generationNote: "Original Micro items in official exam shape.",
    estimatedMinutes: 35,
    difficultyTier: 2,
    tags: ["exam-format", "generated"],
    items: [
      mcq(
        "micro-fmt-m1",
        "micro-elasticity",
        "Section I · Multiple Choice",
        "If price elasticity of demand is 2, a 10% price increase changes quantity demanded by",
        ["5% decrease", "10% decrease", "20% decrease", "20% increase"],
        2,
        ["%ΔQ = E × %ΔP = 2 × 10% = 20% down."],
        "C. 20% decrease."
      ),
      frq(
        "micro-fmt-long",
        "micro-costs",
        "Section II · Long free response",
        "A firm in perfect competition has MC = ATC at q = 10 and P = 8, with min ATC = 12. Show on a graph (describe) whether the firm produces in the short run and explain.",
        ["Compare P to AVC/ATC.", "Shutdown rule."],
        ["Produce? ______", "Reason: ______"],
        ["Need AVC; if P < AVC shut down. Given only ATC, note ATC > P so negative profit; shutdown depends on AVC."]
      ),
    ],
  },
  {
    id: "macro-exam-format-a",
    title: "AP Macroeconomics — Exam Format Set A",
    subject: "AP Macroeconomics",
    kind: "generated",
    description: "4-choice MCQ plus long/short FRQ (AD-AS, policy).",
    generationNote: "Original Macro items in official exam shape.",
    estimatedMinutes: 35,
    difficultyTier: 2,
    tags: ["exam-format", "generated"],
    items: [
      mcq(
        "macro-fmt-m1",
        "macro-adas",
        "Section I · Multiple Choice",
        "A decrease in consumer confidence, holding other things equal, shifts",
        ["AD right", "AD left", "LRAS right", "SRAS right"],
        1,
        ["Spending down ⇒ AD left."],
        "B. AD left."
      ),
      frq(
        "macro-fmt-long",
        "macro-policy",
        "Section II · Long free response",
        "The economy is in a recessionary gap. Identify one fiscal policy and show (describe) the AD-AS adjustment if the policy is expansionary.",
        ["G up or T down.", "AD right toward Yf."],
        ["Policy: ______", "AD shift: ______"]
      ),
    ],
  },
  {
    id: "apush-exam-format-a",
    title: "AP US History — Exam Format Set A",
    subject: "AP US History",
    kind: "generated",
    description: "Stimulus MCQ, SAQ, DBQ scaffolding, and LEQ — official APUSH shape. Original sources.",
    generationNote: "Original US History items in official exam shape.",
    estimatedMinutes: 50,
    difficultyTier: 2,
    tags: ["exam-format", "DBQ", "SAQ", "LEQ", "generated"],
    items: [
      mcq(
        "apush-fmt-m1",
        "ush-periodization",
        "Section I Part A · Stimulus-based Multiple Choice",
        `Stimulus (original): A 1935 newspaper: “Factories hum again, yet breadlines remain in the mill towns.”

The excerpt is best used as evidence that New Deal recovery was`,
        [
          "complete by 1935",
          "uneven across regions and still left unemployment visible",
          "limited to agriculture only",
          "opposed by all factory owners",
        ],
        1,
        ["Both humming factories and breadlines are in the source."],
        "B. Uneven recovery."
      ),
      frq(
        "apush-fmt-saq",
        "ush-periodization",
        "Section I Part B · Short-Answer Question",
        "a) Briefly explain ONE cause of increased federal power in the 1930s. b) Briefly explain ONE limitation of that power by 1940.",
        ["Cause: Depression + New Deal agencies.", "Limit: Court, local implementation, or remaining unemployment."],
        ["a) ______", "b) ______"]
      ),
      frq(
        "apush-fmt-dbq",
        "ush-periodization",
        "Section II · DBQ",
        "Evaluate the extent to which the New Deal transformed the role of the federal government (1933–1941). Use the stimulus above plus outside evidence. (Original prompt — not a CB packet.)",
        ["Thesis with extent.", "Group evidence.", "Outside evidence + complexity."],
        ["Thesis: ______", "Outside evidence: ______"]
      ),
      frq(
        "apush-fmt-leq",
        "ush-cold-war",
        "Section II · Long Essay Question",
        "Evaluate the extent to which the Cold War changed American society from 1945 to 1975.",
        ["Contextualization.", "Thesis.", "Specific evidence (GI Bill vs McCarthyism, etc.)."],
        ["Thesis: ______"]
      ),
    ],
  },
  {
    id: "apwh-exam-format-a",
    title: "AP World History — Exam Format Set A",
    subject: "AP World History",
    kind: "generated",
    description: "Stimulus MCQ, SAQ, DBQ, LEQ in official AP World shape. Original stimulus.",
    generationNote: "Original World History items in official exam shape.",
    estimatedMinutes: 50,
    difficultyTier: 2,
    tags: ["exam-format", "generated"],
    items: [
      mcq(
        "apwh-fmt-m1",
        "whap-industrial",
        "Section I Part A · Stimulus-based Multiple Choice",
        `Stimulus (original): 1880s export table — raw cotton out of South Asia rises while finished cloth imports into the same ports also rise.

The pattern is best explained by`,
        [
          "complete deindustrialization with no local weaving",
          "imperial trade networks that extracted staples and sold factory cloth",
          "equal industrial growth in both regions",
          "the end of oceanic trade",
        ],
        1,
        ["Staple out + cloth in is classic colonial division of labor."],
        "B."
      ),
      frq(
        "apwh-fmt-saq",
        "whap-industrial",
        "Section I Part B · Short-Answer Question",
        "Identify ONE similarity and ONE difference in industrialization in Britain and Meiji Japan.",
        ["Similarity: factories, rail, state role.", "Difference: timing, imperialism vs defensive modernization."],
        ["Similarity: ______", "Difference: ______"]
      ),
      frq(
        "apwh-fmt-leq",
        "whap-industrial",
        "Section II · Long Essay Question",
        "In 1750–1900, compare the effects of industrialization on TWO regions.",
        ["Valid comparison category.", "Specific evidence per region."],
        ["Thesis: ______"]
      ),
    ],
  },
  {
    id: "euro-exam-format-a",
    title: "AP European History — Exam Format Set A",
    subject: "AP European History",
    kind: "generated",
    description: "Stimulus MCQ, SAQ, and LEQ/DBQ-style FRQ. Original stimulus.",
    generationNote: "Original European History items in official exam shape.",
    estimatedMinutes: 45,
    difficultyTier: 2,
    tags: ["exam-format", "generated"],
    items: [
      mcq(
        "euro-fmt-m1",
        "euro-renaissance",
        "Section I Part A · Stimulus-based Multiple Choice",
        `Stimulus (original): A humanist letter praises “the dignity of man” and the study of Cicero, while a preacher warns that vernacular Bibles will “unleash every cobbler as a theologian.”

The contrast is best used to illustrate tension between`,
        [
          "humanism and Reformation-era challenges to clerical monopoly on scripture",
          "industrialization and guilds",
          "Napoleonic codes and feudalism",
          "Cold War alliances",
        ],
        0,
        ["Cicero vs vernacular Bible access."],
        "A."
      ),
      frq(
        "euro-fmt-saq",
        "euro-renaissance",
        "Section I Part B · Short-Answer Question",
        "a) Identify ONE cause of the Protestant Reformation. b) Identify ONE political consequence in the Holy Roman Empire.",
        ["Indulgences / printing / corruption.", "Princes’ choice of confession; conflict."],
        ["a) ______", "b) ______"]
      ),
    ],
  },
  {
    id: "hug-exam-format-a",
    title: "AP Human Geography — Exam Format Set A",
    subject: "AP Human Geography",
    kind: "generated",
    description: "4-choice MCQ plus 3 FRQ-style prompts.",
    generationNote: "Original Human Geography items in official exam shape.",
    estimatedMinutes: 35,
    difficultyTier: 2,
    tags: ["exam-format", "generated"],
    items: [
      mcq(
        "hug-fmt-m1",
        "hug-cities",
        "Section I · Multiple Choice",
        "A city annexes suburbs and builds a light-rail spine. This is most clearly an example of",
        ["pastoral nomadism", "urban hierarchy only in a primate city", "infrastructure-led urban spatial reorganization", "a nation-state with no cities"],
        2,
        ["Transit + annexation reshape urban form."],
        "C."
      ),
      frq(
        "hug-fmt-f1",
        "hug-cities",
        "Section II · Free Response 1",
        "Define primate city and explain ONE political challenge it can create for a country.",
        ["Disproportionate size/influence.", "Resource drain or regional inequality."],
        ["Definition: ______", "Challenge: ______"]
      ),
    ],
  },
  {
    id: "es-exam-format-a",
    title: "AP Environmental Science — Exam Format Set A",
    subject: "AP Environmental Science",
    kind: "generated",
    description: "4-choice MCQ plus investigation design and data-analysis FRQs.",
    generationNote: "Original ES items in official exam shape.",
    estimatedMinutes: 35,
    difficultyTier: 2,
    tags: ["exam-format", "generated"],
    items: [
      mcq(
        "es-fmt-m1",
        "es-energy",
        "Section I · Multiple Choice",
        "If producers contain 10,000 kJ, about how much energy is available to tertiary consumers under a 10% transfer rule?",
        ["1,000 kJ", "100 kJ", "10 kJ", "1 kJ"],
        2,
        ["10% three times: 10,000 → 1,000 → 100 → 10."],
        "C. 10 kJ."
      ),
      frq(
        "es-fmt-lab",
        "es-energy",
        "Section II · Design an investigation",
        "Design a simple lab to compare dissolved oxygen in a shaded pond vs a sunny pond. Identify IV, DV, and one control.",
        ["IV = shade vs sun (or location).", "DV = DO.", "Control: time of day, depth."],
        ["IV: ______", "DV: ______", "Control: ______"]
      ),
    ],
  },
  {
    id: "csa-exam-format-a",
    title: "AP Computer Science A — Exam Format Set A",
    subject: "AP Computer Science A",
    kind: "generated",
    description: "4-choice MCQ plus the four FRQ types (methods, class, ArrayList, 2D array).",
    generationNote: "Original CSA items in official exam shape.",
    estimatedMinutes: 40,
    difficultyTier: 2,
    tags: ["exam-format", "java", "generated"],
    items: [
      mcq(
        "csa-fmt-m1",
        "csa-arrays",
        "Section I · Multiple Choice",
        "After int[] a = {2, 4, 6}; a[1] = a[0] + a[2]; what is a[1]?",
        ["2", "4", "6", "8"],
        3,
        ["a[0]+a[2] = 2+6 = 8."],
        "D. 8"
      ),
      frq(
        "csa-fmt-methods",
        "csa-methods",
        "Section II · Methods and control structures",
        "Write a method countEven(int[] nums) that returns how many even values appear. You may use a loop.",
        ["Loop index.", "n % 2 == 0."],
        ["Method body outline: ______"]
      ),
      frq(
        "csa-fmt-2d",
        "csa-arrays",
        "Section II · 2D array",
        "A 2D int array grid is rectangular. Describe how to sum the first column.",
        ["Loop rows.", "Add grid[r][0]."],
        ["Code idea: ______"]
      ),
    ],
  },
  {
    id: "csp-exam-format-a",
    title: "AP Computer Science Principles — Exam Format Set A",
    subject: "AP Computer Science Principles",
    kind: "generated",
    description: "Stimulus-style 4-choice MCQ plus Create PT written-response practice.",
    generationNote: "Original CSP items in official exam shape.",
    estimatedMinutes: 30,
    difficultyTier: 2,
    tags: ["exam-format", "generated"],
    items: [
      mcq(
        "csp-fmt-m1",
        "csp-data",
        "Section I · Multiple Choice",
        "A dataset of 10 million rows is too large for one laptop RAM. Which approach is most appropriate?",
        [
          "Store every row as a separate Word file",
          "Sample, aggregate, or process in chunks / a database",
          "Print the dataset",
          "Convert numbers to Roman numerals to save space",
        ],
        1,
        ["Scale: sampling, aggregation, or out-of-core tools."],
        "B."
      ),
      frq(
        "csp-fmt-create",
        "csp-create",
        "Create performance task · written responses (practice)",
        "Describe one procedure in a student program that uses a parameter and how that procedure manages complexity.",
        ["Name the procedure.", "Parameter + abstraction."],
        ["Procedure: ______", "How it manages complexity: ______"]
      ),
    ],
  },
];
