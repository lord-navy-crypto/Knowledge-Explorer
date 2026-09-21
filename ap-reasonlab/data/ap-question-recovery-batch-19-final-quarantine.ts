import type { Questionnaire, QuestionnaireItem } from "@/lib/types";
import { normalizeApItem } from "@/lib/question-normalize";
import {
  buildRecoveredApItemsBatch5,
  type RecoveryBatch5Result,
} from "@/data/ap-question-recovery-batch-5";

const STEM = /Physics|Calculus|Statistics|Chemistry|Biology|Environmental|Economics|Psychology|Computer Science/i;

function forceDeepRewriteCandidate(item: QuestionnaireItem): QuestionnaireItem {
  return { ...item, answerKey: undefined, blankAnswers: undefined, mcqAnswer: undefined };
}

function humanitiesReplacement(subject: string, id: string, index: number): QuestionnaireItem {
  const history = /US History|World History|European History/i.test(subject);
  const geography = /Human Geography/i.test(subject);
  const english = /English Language|English Literature/i.test(subject);
  const government = /Government/i.test(subject);
  if (!history && !geography && !english && !government) {
    throw new Error(`Batch 19 has no deep humanities factory for ${subject} / ${id}`);
  }

  const variant = index % 3;
  let conceptIntro = `${subject} · evidence, reasoning, and qualification`;
  let stimulus = "";
  let prompt = "";
  let answerKey = "";

  if (history) {
    const contexts = [
      "A state expands taxation and administration while commercial networks grow. Urban merchants gain new opportunities, rural producers face new obligations, and regional elites bargain for exemptions.",
      "A reform movement spreads through print networks and voluntary associations. Its leaders claim universal principles, but participation and benefits differ by class, region, and legal status.",
      "Long-distance exchange accelerates after a transportation innovation. Prices converge in some markets, migration rises, and governments respond with both infrastructure investment and new regulation.",
    ];
    stimulus = `${contexts[variant]} Treat this as an analytical scenario, not as evidence for one predetermined historical episode.`;
    prompt = "(a) State a defensible causal claim about one mechanism producing change. (b) Identify a specific kind of historical evidence that would test the claim and explain how it would do so. (c) Compare the likely effects on two groups. (d) Give one boundary condition—period, region, institution, or group—for which the claim would need qualification.";
    answerKey = "A full-credit response names a plausible mechanism, connects a concrete evidence type to that mechanism, compares two groups by explaining a meaningful similarity or difference, and qualifies the claim with a historically relevant boundary condition. The evidence must be used analytically rather than merely listed; multiple historically defensible answers are possible.";
  } else if (geography) {
    stimulus = "A metropolitan region opens a rapid-transit corridor. New housing and retail cluster near some stations, while other stations see little change. Neighborhoods differ in zoning, income, existing density, land prices, and automobile access. Researchers compare changes at 0.5 km, 2 km, and citywide scales.";
    prompt = "(a) Apply one geographic process to explain clustering near some stations. (b) Explain how changing the scale of analysis could change the observed pattern. (c) Predict one social or economic consequence and justify it. (d) Identify one variable that could make the transit-development relationship weaker or reverse it.";
    answerKey = "A strong response applies a process such as accessibility, agglomeration, bid-rent, or transit-oriented development; explains a genuine scale effect; traces a plausible consequence such as land-value change, commuting change, business clustering, or displacement; and uses a contextual variable such as zoning, income, density, land availability, or car access as a boundary condition.";
  } else if (english) {
    stimulus = variant === 0
      ? "An original civic editorial opens with a crowded-library scene, introduces sign-in data, concedes staffing costs, and proposes a two-week pilot rather than a permanent policy."
      : variant === 1
      ? "An original reflective passage describes a familiar room first through precise measurements and later through fragmented memories triggered by ordinary sounds; the physical room seems smaller while the remembered one expands."
      : "An original public argument moves from a concrete local example to comparative data, acknowledges a serious counterargument, and ends by reframing the proposal as a testable experiment rather than a final commitment.";
    prompt = "Develop an interpretation of how the writer's sequence and at least two specific choices shape meaning or persuasion. (a) State a defensible thesis. (b) Analyze one choice in context. (c) Explain how a second choice complicates or advances the line of reasoning. (d) Give one plausible alternative reading or audience response and explain what textual feature supports it.";
    answerKey = "A full-credit response offers an arguable thesis, analyzes two concrete choices by explaining their function rather than merely naming devices, connects those choices to meaning, audience, purpose, or tension, and supports a plausible alternative reading or audience response with evidence from the scenario. Unsupported biography or device-labeling alone is insufficient.";
  } else {
    stimulus = "Congress enacts a broad statute delegating technical implementation to an executive agency. The agency later adopts a stricter rule; regulated parties challenge whether the rule fits the statute, while the executive argues that expertise and changing conditions require discretion.";
    prompt = "(a) Identify the central separation-of-powers or administrative issue. (b) Explain one source of authority supporting the agency. (c) Explain one institutional or legal check on that authority. (d) Evaluate the tradeoff between expert flexibility and democratic/legal accountability, including one condition that would strengthen the challengers' argument.";
    answerKey = "A strong response identifies delegated authority and statutory interpretation, explains that agency power must derive from law and executive implementation, identifies a real check such as judicial review, statutory limits, appropriations, oversight, or new legislation, and evaluates the flexibility-accountability tradeoff. A condition such as action contrary to clear statutory text or beyond delegated scope strengthens the challenge.";
  }

  return {
    id,
    format: "frq_half",
    conceptIntro,
    stimulus,
    prompt,
    answerKey,
    rationale: "This replacement converts an unpublishable legacy item into a multi-step task requiring evidence, mechanism, qualification, and a misconception or boundary-condition check rather than recall alone.",
    scoringGuide: [
      "1 point: states the central claim, interpretation, process, or institutional issue accurately.",
      "1 point: uses specific evidence or a concrete mechanism to support the reasoning.",
      "1 point: completes the comparison, second analytical step, or consequence with explanation.",
      "1 point: supplies a defensible qualification, alternative reading, check, or boundary condition.",
    ],
    hints: ["Explain why the evidence supports the claim; do not merely name a concept.", "Use the final part to test where the main reasoning could fail or require qualification."],
    authenticity: "skill_drill",
    responseMode: english ? "essay" : "extended_response",
    difficultyTier: 3,
    examSection: "Constructed-response skill drill · multi-step reasoning and qualification",
  };
}

/** Targets the actual remaining public-gate quarantine; legacy keys are never inferred. */
export function buildFinalQuarantineBatch19(
  sets: Questionnaire[],
  excludedIds: Set<string>
): RecoveryBatch5Result {
  const remaining: Questionnaire[] = sets
    .map((set) => ({
      ...set,
      items: (set.items || [])
        .filter((item) => !excludedIds.has(item.id) && normalizeApItem(item) === null)
        .map(forceDeepRewriteCandidate),
    }))
    .filter((set) => set.items.length > 0);

  const stemSets = remaining.filter((set) => STEM.test(set.subject));
  const humanitiesSets = remaining.filter((set) => !STEM.test(set.subject));
  const stemCount = stemSets.reduce((sum, set) => sum + set.items.length, 0);
  const stem = stemCount
    ? buildRecoveredApItemsBatch5(stemSets, new Set<string>(), stemCount)
    : { items: {}, ids: [], severeMissingAnswer: 0, severeStructural: 0 };

  const humanitiesItems: Record<string, QuestionnaireItem> = {};
  const humanitiesIds: string[] = [];
  let n = 0;
  for (const set of humanitiesSets) {
    for (const item of set.items) {
      humanitiesItems[item.id] = humanitiesReplacement(set.subject, item.id, n++);
      humanitiesIds.push(item.id);
    }
  }

  const items = { ...stem.items, ...humanitiesItems };
  const ids = [...stem.ids, ...humanitiesIds];
  const expected = remaining.reduce((sum, set) => sum + set.items.length, 0);
  if (ids.length !== expected) throw new Error(`Batch 19 expected ${expected} final-quarantine rewrites but built ${ids.length}.`);

  return { items, ids, severeMissingAnswer: ids.length, severeStructural: 0 };
}
