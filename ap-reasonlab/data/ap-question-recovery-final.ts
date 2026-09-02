import type { QuestionnaireItem } from "@/lib/types";

export const recoveredFinalThinMcqs: Record<string, QuestionnaireItem> = {
  "p1-mcq-001": {
    id: "p1-mcq-001",
    format: "mcq",
    conceptIntro: "AP Physics 1 · energy conservation in a frictionless system",
    stimulus:
      "A 2.0 kg block starts from rest at the top of a frictionless ramp. The block descends through a vertical height of 5.0 m before reaching the bottom. Take g = 10 m/s² and neglect air resistance.",
    prompt:
      "Which expression and value correctly give the block's speed at the bottom of the ramp?",
    choices: [
      "v = gh = 50 m/s",
      "v = √(2gh) = 10 m/s",
      "v = mgh = 100 m/s",
      "v = √(gh/2) = 5 m/s",
    ],
    mcqAnswer: 1,
    answerKey:
      "Because the ramp is frictionless, gravitational potential energy becomes kinetic energy: mgh = 1/2 mv². The mass cancels, so v = √(2gh) = √(2·10·5) = 10 m/s.",
    rationale:
      "The correct choice applies conservation of mechanical energy. The distractors confuse energy with speed or omit the factor of two from kinetic energy.",
    hints: [
      "Compare gravitational potential energy at the top with kinetic energy at the bottom.",
      "The mass appears on both sides of the energy equation and cancels.",
    ],
    authenticity: "exam_authentic",
    responseMode: "single_choice",
    difficultyTier: 2,
    examSection: "AP Physics 1 · Multiple Choice · energy conservation",
  },
  "calc-mcq-001": {
    id: "calc-mcq-001",
    format: "mcq",
    conceptIntro: "AP Calculus AB/BC · interpreting a definite integral as accumulated change",
    stimulus:
      "Water enters a tank at a rate R(t) = 6 - t liters per minute for 0 ≤ t ≤ 4, where t is measured in minutes. The tank contains 20 liters of water at t = 0.",
    prompt:
      "Which expression gives the amount of water in the tank at t = 4, and what is its value?",
    choices: [
      "20 + ∫₀⁴(6 - t)dt = 36 liters",
      "20 + R(4) = 22 liters",
      "∫₀⁴(6 - t)dt = 16 liters",
      "20 - ∫₀⁴(6 - t)dt = 4 liters",
    ],
    mcqAnswer: 0,
    answerKey:
      "The amount equals the initial quantity plus accumulated inflow: 20 + ∫₀⁴(6 - t)dt = 20 + [6t - t²/2]₀⁴ = 20 + 16 = 36 liters.",
    rationale:
      "A rate must be integrated over time to obtain accumulated change. The initial 20 liters must then be added to that change.",
    hints: [
      "A rate in liters per minute must be integrated to obtain liters.",
      "Do not forget the initial amount already in the tank.",
    ],
    authenticity: "exam_authentic",
    responseMode: "single_choice",
    difficultyTier: 2,
    examSection: "AP Calculus AB/BC · Multiple Choice · accumulation",
  },
};
