import type { PracticeQuestion, Questionnaire, QuestionnaireItem } from "@/lib/types";
import { shapeApQuestionnaires } from "@/lib/ap-exam-format";

/** Official AP exam-format drills (original practice — not College Board items). */

function frq(
  id: string,
  prompt: string,
  visibleSteps: string[],
  hints: string[],
  conceptId?: string
): QuestionnaireItem {
  return { id, format: "frq_half", prompt, visibleSteps, hints, conceptId };
}

function mcq(
  id: string,
  prompt: string,
  choices: [string, string, string, string],
  mcqAnswer: number,
  hints: string[],
  conceptId?: string
): QuestionnaireItem {
  return { id, format: "mcq", prompt, choices, mcqAnswer, hints, conceptId };
}

const PHYSICS1_ITEMS: QuestionnaireItem[] = [
  mcq(
    "p1-mcq-001",
    "A ball is dropped from rest. Which statement is true while it falls (ignore air resistance)?",
    [
      "A) Velocity is constant and acceleration is zero.",
      "B) Acceleration is constant and downward; speed increases.",
      "C) Acceleration increases as speed increases.",
      "D) Displacement and distance must be equal.",
    ],
    1,
    ["L1: Free fall near Earth has constant g.", "L2: Speed changes; acceleration does not (ideal)."],
    "kinematics-basics"
  ),
  frq(
    "p1-001",
    "A ball is dropped from rest from a height of 20 m. Ignore air resistance. Take g = 10 m/s². How long does it take to hit the ground?",
    [
      "Known: v₀ = 0, Δy = 20 m, a = 10 m/s² downward.",
      "Choose an equation linking displacement, initial velocity, acceleration, and time.",
    ],
    [
      "L1: This is vertical motion with constant acceleration.",
      "L2: Try an equation with Δy, v₀, a, and t without needing final velocity.",
      "L3: Verify units before computing.",
    ],
    "kinematics-basics"
  ),
  frq(
    "p1-002",
    "A 5 kg box on a frictionless horizontal surface is pushed with a horizontal force of 20 N. Find the acceleration.",
    ["Draw a free-body diagram.", "Identify the net horizontal force, then use Newton’s second law."],
    [
      "L1: Frictionless means no horizontal friction force.",
      "L2: Weight and normal force are vertical on a flat surface.",
      "L3: a = F_net / m after confirming net force.",
    ]
  ),
  frq(
    "p1-003",
    "A 1.5 kg cart moves at 4 m/s on a frictionless track. Find its kinetic energy.",
    ["Recall K = ½mv².", "Use speed, not the sign of velocity."],
    ["L1: K uses speed squared.", "L2: Units: kg · (m/s)² = joules."]
  ),
  frq(
    "p1-004",
    "A 2 kg object moving at 3 m/s collides and stops. What is the magnitude of its momentum change?",
    ["p_i = mv_i and p_f = 0.", "Find |Δp| = |p_f − p_i|."],
    ["L1: Momentum is a vector; the magnitude of the change is asked.", "L2: Δp = m(v_f − v_i) with signs."]
  ),
  frq(
    "p1-005",
    "A disk with rotational inertia 0.4 kg·m² experiences a net torque of 2.0 N·m. Find its angular acceleration.",
    ["Recall α = τ_net / I.", "Substitute τ_net and I."],
    ["L1: Rotational form of Newton’s second law.", "L2: I is kg·m²; torque is N·m."]
  ),
  frq(
    "p1-006",
    "A 0.005 m³ block is fully submerged in water (ρ = 1000 kg/m³). Take g = 10 m/s². Find the magnitude of the buoyant force.",
    ["Archimedes: F_b = ρ V g.", "Fully submerged ⇒ displaced volume equals the block volume."],
    ["L1: Buoyant force equals the weight of displaced fluid.", "L2: ρ is the fluid density, not the block density."]
  ),
  frq(
    "p1-007",
    "A 0.50 kg mass on a spring (k = 50 N/m) oscillates on a frictionless surface. Find the period of oscillation.",
    ["Use T = 2π√(m/k).", "Substitute m and k."],
    ["L1: Ideal period depends on m and k, not amplitude.", "L2: T = 2π√(0.50/50)."]
  ),
];

const CALC_ITEMS: QuestionnaireItem[] = [
  mcq(
    "calc-mcq-001",
    "If f(x) = x², which statement about f′(2) is correct?",
    [
      "A) f′(2) is the average rate of change on [0, 2].",
      "B) f′(2) is the slope of the tangent line to y = f(x) at x = 2.",
      "C) f′(2) equals f(2).",
      "D) f′(2) is the area under y = f(x) from 0 to 2.",
    ],
    1,
    ["L1: The derivative at a point is an instantaneous rate / tangent slope."]
  ),
  frq(
    "calc-001",
    "Evaluate ∫₀¹ (2x + 1) dx for a particle whose velocity is v(t) = 2t + 1 m/s from t = 0 to t = 1 s. The integral is the displacement over that second.",
    ["Find an antiderivative of 2x + 1.", "Apply the Fundamental Theorem: F(1) − F(0)."],
    ["L1: ∫2x dx = x²; ∫1 dx = x.", "L2: Evaluate at both bounds."]
  ),
  frq(
    "calc-002",
    "Find lim x→3 (x² − 9)/(x − 3).",
    ["Direct substitution gives 0/0, so factor the numerator.", "Cancel the common factor and re-evaluate."],
    ["L1: x² − 9 is a difference of squares.", "L2: After canceling, substitute x = 3."]
  ),
  frq(
    "calc-003",
    "A spherical balloon is inflated so that its volume increases at 8π cm³/s. Find dr/dt when r = 2 cm.",
    ["V = (4/3)πr³. Differentiate both sides with respect to t.", "Substitute dV/dt = 8π and r = 2."],
    ["L1: Chain rule: dV/dt = dV/dr · dr/dt.", "L2: dV/dr = 4πr²."]
  ),
  frq(
    "calc-004",
    "Solve dy/dx = 2y with y(0) = 3.",
    ["Separate variables: dy/y = 2 dx.", "Integrate and apply the initial condition."],
    ["L1: ln|y| = 2x + C.", "L2: Exponential form: y = Ce^{2x}."]
  ),
];

const TOPIC: Record<string, string> = {
  "p1-mcq-001": "Kinematics",
  "p1-001": "Kinematics",
  "p1-002": "Forces",
  "p1-003": "Energy",
  "p1-004": "Momentum",
  "p1-005": "Rotational Motion",
  "p1-006": "Fluids",
  "p1-007": "Simple Harmonic Motion",
  "calc-mcq-001": "Derivatives",
  "calc-001": "Integrals",
  "calc-002": "Limits",
  "calc-003": "Related Rates",
  "calc-004": "Differential Equations",
};

export const apPracticeDrillQuestionnaires: Questionnaire[] = shapeApQuestionnaires([
  {
    id: "phys1-exam-drills",
    title: "Physics 1 — Exam-format drills",
    subject: "AP Physics 1",
    kind: "generated",
    description: "Original Section I MCQ and Section II Mathematical Routines FRQs.",
    generationNote: "Rewritten from half-process drills into College Board exam shape.",
    estimatedMinutes: 35,
    tags: ["physics 1", "exam format", "drills"],
    items: PHYSICS1_ITEMS,
  },
  {
    id: "calc-exam-drills",
    title: "Calculus AB/BC — Exam-format drills",
    subject: "AP Calculus AB/BC",
    kind: "generated",
    description: "Original Section I MCQ and Section II free-response items.",
    generationNote: "Rewritten from half-process drills into College Board exam shape.",
    estimatedMinutes: 30,
    tags: ["calculus", "exam format", "drills"],
    items: CALC_ITEMS,
  },
]);

export const practiceQuestions: PracticeQuestion[] = apPracticeDrillQuestionnaires.flatMap((set) =>
  set.items.map((item) => ({
    id: item.id,
    subject: set.subject,
    topic: TOPIC[item.id] ?? set.title,
    question: item.prompt,
    visibleSteps: item.visibleSteps ?? [],
    blankSteps: item.blankSteps ?? (item.format === "mcq" ? [] : ["(a) ______", "(b) ______"]),
    hints: item.hints,
    examSection: item.examSection,
    format: item.format,
    choices: item.choices,
  }))
);
