import type { QuestionnaireItem } from "@/lib/types";

/** Audited AP Microeconomics + Macroeconomics recoveries. */
export const recoveredApItemsBatch3: Record<string, QuestionnaireItem> = {
  "micro-sd-1": {
    id: "micro-sd-1", format: "frq_half", conceptId: "micro-supply-demand",
    conceptIntro: "Section II · Short free response. Binding price ceiling and shortage.",
    authenticity: "exam_authentic", responseMode: "extended_response", difficultyTier: 2,
    stimulus: "A competitive rental-housing market initially has equilibrium monthly rent P* and equilibrium quantity Q*. The city then imposes a legal maximum rent Pc below P*. No other determinant of supply or demand changes in the short run.",
    prompt: "(a) State whether the rent ceiling is binding. (b) At Pc, compare quantity demanded and quantity supplied with their equilibrium values. (c) Identify the resulting market condition and explain why it occurs. (d) Explain whether the demand or supply curve shifts when the legal rent is imposed, assuming no other market determinant changes.",
    answerKey: "(a) The ceiling is binding because Pc<P*. (b) Moving along the existing curves to the lower price increases quantity demanded and decreases quantity supplied. (c) Qd>Qs, so a shortage equal to Qd-Qs occurs. (d) Neither curve shifts solely because of the controlled price; the lower legal price causes movements along the existing demand and supply curves.",
    rationale: "A binding price ceiling constrains price below equilibrium. Price itself changes quantities demanded and supplied through movements along curves; it is not a non-price shifter.",
    scoringGuide: ["1 point: identifies the ceiling as binding.", "1 point: correctly states Qd rises and Qs falls relative to equilibrium.", "1 point: identifies and explains the shortage Qd>Qs.", "1 point: correctly distinguishes movements along curves from shifts."],
    hints: ["A ceiling below equilibrium prevents the market-clearing price from being reached."], examSection: "Section II · Short free response"
  },
  "micro-sd-2": {
    id: "micro-sd-2", format: "frq_half", conceptId: "micro-supply-demand",
    conceptIntro: "Section II · Short free response. Elasticity and total revenue.",
    authenticity: "exam_authentic", responseMode: "extended_response", difficultyTier: 2,
    stimulus: "Over the relevant range of a downward-sloping demand curve, the absolute value of price elasticity of demand is 3.0. A firm lowers its price by 5%, and no other determinant of demand changes.",
    prompt: "(a) Classify demand over this range as elastic, unit elastic, or inelastic. (b) Approximate the percentage change in quantity demanded. (c) Predict the direction of change in total revenue and explain using the relationship between the percentage changes in price and quantity demanded.",
    answerKey: "(a) Demand is elastic because |Ed|=3>1. (b) Quantity demanded increases by approximately 15% because %ΔQd≈3×5% in magnitude. (c) Total revenue increases: the roughly 15% increase in quantity is proportionally larger than the 5% decrease in price, so P×Q rises for an elastic demand curve when price falls.",
    rationale: "For elastic demand, quantity responds by a larger percentage than price. Therefore price and total revenue move in opposite directions.",
    scoringGuide: ["1 point: classifies demand as elastic.", "1 point: obtains about a 15% increase in quantity demanded.", "1 point: predicts total revenue increases.", "1 point: explains the prediction with relative percentage changes or the elastic-demand TR rule."],
    hints: ["Use elasticity in magnitude: |Ed|=|%ΔQd/%ΔP|."], examSection: "Section II · Short free response"
  },
  "micro-cost-1": {
    id: "micro-cost-1", format: "frq_half", conceptId: "micro-production-costs",
    conceptIntro: "Section II · Long free response. Competitive-firm shutdown rule.",
    authenticity: "exam_authentic", responseMode: "extended_response", difficultyTier: 2,
    stimulus: "A perfectly competitive firm is producing where price equals marginal revenue. At the quantity where MR=MC, market price is $5, average variable cost is $6, and average total cost is $8. Assume the firm cannot avoid its fixed cost in the short run.",
    prompt: "(a) Should the firm produce its profit-maximizing positive output or shut down in the short run? Justify using the relevant cost comparison. (b) If it shuts down, identify which costs it still pays in the short run. (c) Explain why comparing price only with ATC is not the correct short-run shutdown rule.",
    answerKey: "(a) Shut down because P=$5<AVC=$6 at the candidate output; revenue per unit does not cover variable cost. (b) The firm still pays fixed costs in the short run. (c) P<ATC establishes an economic loss but does not by itself imply shutdown; a loss-making firm may continue producing when P≥AVC because it can cover all variable cost and some fixed cost.",
    rationale: "The short-run shutdown decision compares revenue with avoidable variable cost. Fixed cost is paid whether the firm produces or shuts down.",
    scoringGuide: ["1 point: chooses shutdown because P<AVC.", "1 point: states fixed cost remains when shut down.", "1 point: explains P<ATC means loss, not necessarily shutdown.", "1 point: states the correct P versus AVC rule."],
    hints: ["Ask which cost disappears when output falls to zero in the short run."], examSection: "Section II · Long free response"
  },
  "micro-fmt-m1": {
    id: "micro-fmt-m1", format: "mcq", conceptId: "micro-elasticity",
    conceptIntro: "Section I · Multiple Choice. Price elasticity of demand.", authenticity: "exam_authentic", responseMode: "single_choice", difficultyTier: 2,
    stimulus: "A market is operating on a portion of its demand curve where the absolute value of price elasticity of demand is 2.0. The price of the good rises by approximately 10%, with all other demand determinants held constant.",
    prompt: "Using the elasticity relationship as a percentage-change approximation, which change in quantity demanded is most consistent with the information?",
    choices: ["A) A decrease of about 5%", "B) A decrease of about 10%", "C) A decrease of about 20%", "D) An increase of about 20%"],
    mcqAnswer: 2, answerKey: "C) A decrease of about 20%",
    rationale: "|Ed|=|%ΔQd/%ΔP|=2. A 10% price increase therefore corresponds to about a 20% quantity-demanded decrease, with the opposite direction required by the law of demand.",
    hints: ["Elasticity gives the ratio of percentage changes; demand price and quantity changes move in opposite directions."], examSection: "Section I · Multiple Choice"
  },
  "macro-ad-1": {
    id: "macro-ad-1", format: "frq_half", conceptId: "macro-ad-as",
    conceptIntro: "Section II · Short free response. Recessionary gap and expansionary fiscal policy.",
    authenticity: "exam_authentic", responseMode: "extended_response", difficultyTier: 2,
    stimulus: "An economy is in short-run equilibrium at real output Y1 below full-employment output Yf. The price level is PL1. Assume policymakers want to close the gap using discretionary fiscal policy and that the short-run aggregate supply curve is upward sloping.",
    prompt: "(a) Identify the type of output gap. (b) State one expansionary fiscal-policy action. (c) State the direction aggregate demand shifts. (d) Predict the short-run changes in real output and the price level as the economy moves toward full employment.",
    answerKey: "(a) The economy has a recessionary gap because Y1<Yf. (b) Increase government purchases and/or decrease taxes. (c) Aggregate demand shifts right. (d) In the short run, real output rises toward Yf and the price level rises, assuming an upward-sloping SRAS curve.",
    rationale: "Expansionary fiscal policy raises components of aggregate demand. Starting below potential output, a rightward AD shift raises both equilibrium output and the price level in the standard short-run AD-AS model.",
    scoringGuide: ["1 point: identifies a recessionary gap.", "1 point: gives a valid expansionary fiscal action.", "1 point: shifts AD right.", "1 point: predicts higher real output and higher price level in the short run."],
    hints: ["Compare actual equilibrium output with Yf before choosing policy."], examSection: "Section II · Short free response"
  },
  "macro-ad-2": {
    id: "macro-ad-2", format: "frq_half", conceptId: "macro-ad-as",
    conceptIntro: "Section II · Short free response. Simple spending multiplier.",
    authenticity: "exam_authentic", responseMode: "extended_response", difficultyTier: 2,
    stimulus: "In a simplified Keynesian multiplier model with no crowding out, no price-level change, and a constant marginal propensity to consume, MPC=0.75. Government purchases increase by $20 billion.",
    prompt: "(a) Calculate the marginal propensity to save. (b) Calculate the simple spending multiplier. (c) Calculate the predicted total change in equilibrium real GDP. (d) Explain why the total GDP change is larger than the initial $20 billion increase in government purchases.",
    answerKey: "(a) MPS=1-MPC=0.25. (b) Spending multiplier=1/MPS=4. (c) ΔY=4×$20 billion=$80 billion. (d) The initial government spending becomes income to others, who spend the MPC fraction of additional income in successive rounds, creating induced consumption spending until leakages through saving dissipate the process.",
    rationale: "The simple multiplier captures repeated rounds of induced consumption from an autonomous spending change under restrictive ceteris-paribus assumptions.",
    scoringGuide: ["1 point: MPS=0.25.", "1 point: multiplier=4.", "1 point: ΔGDP=$80 billion.", "1 point: explains successive induced-spending rounds using MPC/saving leakage."],
    hints: ["MPS+MPC=1."], examSection: "Section II · Short free response"
  },
  "macro-ind-1": {
    id: "macro-ind-1", format: "frq_half", conceptId: "macro-indicators",
    conceptIntro: "Section II · Long free response. CPI inflation and purchasing power.",
    authenticity: "exam_authentic", responseMode: "extended_response", difficultyTier: 2,
    stimulus: "The consumer price index for a representative basket is 240 in Year 1 and 252 in Year 2. A worker's nominal wage is unchanged between the two years.",
    prompt: "(a) Calculate the inflation rate from Year 1 to Year 2. (b) State whether the worker's real wage rises, falls, or stays unchanged. Explain. (c) If the worker had received a 5% nominal wage increase instead, state whether that increase would approximately preserve the worker's purchasing power over the period.",
    answerKey: "(a) Inflation=(252-240)/240×100%=5%. (b) The real wage falls because the nominal wage is unchanged while the price level rises 5%. (c) A 5% nominal wage increase would approximately offset 5% inflation, so purchasing power would be roughly preserved (ignoring index and compounding details).",
    rationale: "Inflation measures the percentage increase in the price index. Real purchasing power depends on nominal income relative to the price level.",
    scoringGuide: ["1 point: calculates 5% inflation.", "1 point: states real wage falls when nominal wage is unchanged.", "1 point: links the fall to the higher price level.", "1 point: explains that an approximately 5% nominal raise roughly offsets 5% inflation."],
    hints: ["Inflation uses the old CPI in the denominator."], examSection: "Section II · Long free response"
  },
  "macro-fmt-m1": {
    id: "macro-fmt-m1", format: "mcq", conceptId: "macro-adas",
    conceptIntro: "Section I · Multiple Choice. Aggregate-demand determinants.", authenticity: "exam_authentic", responseMode: "single_choice", difficultyTier: 2,
    stimulus: "Households become substantially less optimistic about future employment and income. Holding the price level, fiscal policy, monetary policy, and other determinants of spending constant, households reduce current consumption expenditures.",
    prompt: "Which change in the aggregate demand-aggregate supply model is most directly caused by this decrease in consumer confidence?",
    choices: ["A) Aggregate demand shifts right", "B) Aggregate demand shifts left", "C) Long-run aggregate supply shifts right", "D) Short-run aggregate supply shifts right"],
    mcqAnswer: 1, answerKey: "B) Aggregate demand shifts left",
    rationale: "Consumption is a component of aggregate demand. Lower autonomous consumption at each price level reduces total planned spending, shifting AD left; it does not directly change productive capacity or firms' short-run production costs.",
    hints: ["Start from AD=C+I+G+NX."], examSection: "Section I · Multiple Choice"
  }
};
