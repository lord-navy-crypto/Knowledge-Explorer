import type { Questionnaire } from "@/lib/types";
import { shapeApQuestionnaires } from "@/lib/ap-exam-format";

/** Original AP items with multi-sentence stems (not wrapper-only). Not College Board text. */

export const apPracticeFullStemQuestionnaires: Questionnaire[] = shapeApQuestionnaires([
  {
    id: "phys1-full-stems-a",
    title: "Physics 1 — Full-stem exam-format set A",
    subject: "AP Physics 1",
    kind: "generated",
    description:
      "Original Section I MCQ and Section II Mathematical Routines with complete scenarios. Official exam shape: Section I: 40 four-choice MCQ (80 min). Section II: 4 FRQs.",
    generationNote: "Written as full stems so practice is not a one-line wrapper.",
    estimatedMinutes: 30,
    tags: ["physics 1", "full stem", "exam format"],
    items: [
      {
        id: "p1-stem-mcq-1",
        format: "mcq",
        prompt:
          "A 2.0 kg block sits on a rough horizontal table. A student applies a horizontal 6.0 N force. The block does not move. The table’s maximum static friction on this block is 8.0 N. Which statement is correct while the block remains at rest?",
        choices: [
          "A) Kinetic friction is 6.0 N opposite the push.",
          "B) Static friction is 6.0 N opposite the push.",
          "C) The net force is 6.0 N in the direction of the push.",
          "D) Gravity is canceled, so friction must be zero.",
        ],
        mcqAnswer: 1,
        hints: [
          "At rest, static friction matches the applied force up to its maximum.",
          "Maximum static friction is 8 N, so 6 N is still in the static range.",
        ],
      },
      {
        id: "p1-stem-frq-1",
        format: "frq_half",
        prompt:
          "A 0.40 kg cart rolls to the right at 3.0 m/s on a level, low-friction track. It collides with a 0.20 kg cart at rest. After the collision the carts stick and move together. Take the positive direction to the right.\n\n(a) Calculate the speed of the combined carts just after the collision.\n(b) Is kinetic energy conserved in this collision? Justify with a comparison, not only a yes/no.",
        visibleSteps: [
          "Momentum is conserved if external impulses along the track are negligible.",
          "Sticking means a perfectly inelastic collision: KE is not conserved.",
        ],
        blankSteps: ["(a) ______", "(b) ______"],
        hints: [
          "p_i = (0.40)(3.0); p_f = (0.60)v.",
          "Compare ½ m v² before and after using the speed from (a).",
        ],
      },
      {
        id: "p1-stem-frq-2",
        format: "frq_half",
        prompt:
          "A 1.2 kg object is released from rest at the top of a 2.5 m high smooth ramp. It slides down and then across a rough horizontal patch 0.80 m long. The patch exerts a constant 4.0 N friction force. The object then reaches a spring (k = 200 N/m) on smooth ice.\n\n(a) Find the object’s speed at the bottom of the ramp, before the rough patch.\n(b) Find the maximum compression of the spring. Take g = 10 m/s².",
        visibleSteps: [
          "Smooth ramp: mechanical energy conserved from top to bottom.",
          "Rough patch: friction does negative work before the spring.",
        ],
        blankSteps: ["(a) ______", "(b) ______"],
        hints: [
          "mgh = ½mv² at the bottom of the ramp.",
          "Energy at spring max: remaining energy = ½ k x² after subtracting W_friction.",
        ],
      },
    ],
  },
  {
    id: "calc-full-stems-a",
    title: "Calculus AB/BC — Full-stem exam-format set A",
    subject: "AP Calculus AB/BC",
    kind: "generated",
    description:
      "Original calculator and no-calculator style FRQs with complete setups. Official exam shape: Section I: 45 MCQ. Section II: 6 FRQs.",
    generationNote: "Written as full stems so practice is not a one-line wrapper.",
    estimatedMinutes: 30,
    tags: ["calculus", "full stem", "exam format"],
    items: [
      {
        id: "calc-stem-mcq-1",
        format: "mcq",
        prompt:
          "A particle moves along a line so that its position at time t ≥ 0 seconds is s(t) = t³ − 6t² + 9t meters. Which statement is true at t = 1?",
        choices: [
          "A) The particle is at rest and acceleration is zero.",
          "B) Velocity is zero and acceleration is negative, so the particle is instantaneously at rest and starting to move left.",
          "C) Velocity equals position.",
          "D) The particle has already passed its only turning point.",
        ],
        mcqAnswer: 1,
        hints: [
          "v = s′ = 3t² − 12t + 9; v(1) = 0.",
          "a = v′ = 6t − 12; a(1) = −6 < 0.",
        ],
      },
      {
        id: "calc-stem-frq-1",
        format: "frq_half",
        prompt:
          "Water flows into a tank at the rate R_in(t) = 12 + 3t liters per minute, and flows out at the constant rate 8 liters per minute, for 0 ≤ t ≤ 6. At t = 0 the tank holds 40 liters.\n\n(a) Set up the derivative, integral, or limit that answers the question.\n(b) Compute the value.\n(c) Interpret the result in the context of the problem.",
        conceptIntro: "Net rate and accumulation — typical AP Calculus FRQ story.",
        visibleSteps: [
          "Net rate = (12 + 3t) − 8 = 4 + 3t.",
          "Amount(6) = 40 + ∫₀⁶ (4 + 3t) dt.",
        ],
        blankSteps: ["(a) ______", "(b) ______", "(c) ______"],
        hints: [
          "Integrate the net rate from 0 to 6 and add the initial 40 L.",
          "Interpret as liters in the tank at t = 6 minutes.",
        ],
      },
      {
        id: "calc-stem-frq-2",
        format: "frq_half",
        prompt:
          "A spherical balloon is inflated so that its volume increases at a constant 12π cm³/s. Let r(t) be the radius in centimeters. At the instant r = 3 cm, a student wants dr/dt.\n\n(a) Set up the derivative, integral, or limit that answers the question.\n(b) Compute the value.\n(c) Interpret the result in the context of the problem.",
        visibleSteps: [
          "V = (4/3)πr³, so dV/dt = 4πr² dr/dt.",
          "Substitute dV/dt = 12π and r = 3.",
        ],
        blankSteps: ["(a) ______", "(b) ______", "(c) ______"],
        hints: [
          "Related rates: differentiate volume with respect to t.",
          "dr/dt = (12π) / (4π · 9) = 1/3 cm/s.",
        ],
      },
    ],
  },
  {
    id: "macro-full-stems-a",
    title: "AP Macroeconomics — Full-stem AD-AS set A",
    subject: "AP Macroeconomics",
    kind: "generated",
    description:
      "Original short FRQ with a complete policy scenario. Official exam shape: Section I: 60 MCQ (70 min). Section II: 3 FRQs — 1 long, 2 short (60 min).",
    generationNote: "Expands one-line AD-AS drills into a full stem.",
    estimatedMinutes: 20,
    tags: ["macro", "full stem"],
    items: [
      {
        id: "macro-stem-a1",
        format: "frq_half",
        prompt:
          "A closed economy is initially in short-run equilibrium at potential output. The legislature then funds a multi-year highway program by increasing government infrastructure spending, with no immediate change in taxes or the money supply. Assume the spending is large enough to shift AD.\n\n(a) Identify which component of aggregate demand increases first.\n(b) Describe the short-run AD-AS result for real output and the price level.\n(c) Explain one reason the long-run price level may differ from the short-run result if the economy returns to potential output.",
        visibleSteps: [
          "G is a direct component of AD.",
          "AD shifts right: SR output and price level both rise if SRAS is upward-sloping.",
        ],
        blankSteps: ["(a) ______", "(b) ______", "(c) ______"],
        hints: [
          "AD = C + I + G + NX; the prompt changes G first.",
          "Long run: SRAS may shift as wages adjust if output is above potential.",
        ],
      },
    ],
  },
  {
    id: "humgeo-full-stems-a",
    title: "AP Human Geography — Full-stem patterns set A",
    subject: "AP Human Geography",
    kind: "generated",
    description:
      "Original FRQ with a complete urban-scale scenario. Official exam shape: Section I: 60 MCQ. Section II: 3 FRQs.",
    generationNote: "Expands one-line sprawl prompts into a full stem.",
    estimatedMinutes: 20,
    tags: ["geography", "full stem"],
    items: [
      {
        id: "hg-stem-a1",
        format: "frq_half",
        prompt:
          "A mid-sized city rezones farmland on its edge for low-density housing. New residents commute to the old downtown; grocery stores and big-box retail follow the new arterial roads; remaining farms convert to subdivisions over a decade. Regional air-quality monitors later record higher vehicle emissions, and a distant wetland loses seasonal flood storage because upstream pavement increased runoff.\n\n(a) Identify one local effect of this sprawl pattern.\n(b) Identify one effect that is visible at a larger (regional or global) scale.\n(c) Explain how scale of analysis changes which of those effects a planner would treat as the main problem.",
        visibleSteps: [
          "Local: traffic, land-use conversion, longer commutes.",
          "Larger scale: emissions, watershed/runoff, farmland loss in aggregate.",
        ],
        blankSteps: ["(a) ______", "(b) ______", "(c) ______"],
        hints: [
          "Name a neighborhood-scale change from the stem (roads, stores, farms).",
          "Name a regional/global change (emissions, wetland, cumulative farmland).",
        ],
      },
    ],
  },
]);
