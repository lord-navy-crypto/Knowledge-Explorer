import type { Questionnaire, QuestionnaireItem } from "@/lib/types";
import { normalizeApItem } from "@/lib/question-normalize";
import { buildRecoveredApItemsBatch5, type RecoveryBatch5Result } from "@/data/ap-question-recovery-batch-5";

const STEM = /Physics|Calculus|Statistics|Chemistry|Biology|Environmental|Economics|Psychology|Computer Science/i;
function forceCandidate(item: QuestionnaireItem): QuestionnaireItem { return { ...item, answerKey: undefined, blankAnswers: undefined, mcqAnswer: undefined }; }

function nonStemReplacement(subject: string, id: string, index: number): QuestionnaireItem {
  const history = /US History|World History|European History/i.test(subject);
  const geography = /Human Geography/i.test(subject);
  const english = /English Language|English Literature/i.test(subject);
  const government = /Government/i.test(subject);
  const variant = index % 3;
  let stimulus = ""; let prompt = ""; let answerKey = "";
  if (history) {
    const contexts = [
      "A state expands taxation and administration while commercial networks grow. Urban merchants gain opportunities, rural producers face new obligations, and regional elites bargain for exemptions.",
      "A reform movement spreads through print networks and associations. Leaders claim universal principles, but participation and benefits differ by class, region, and legal status.",
      "Long-distance exchange accelerates after a transportation innovation. Prices converge in some markets, migration rises, and governments respond with infrastructure and regulation.",
    ];
    stimulus = `${contexts[variant]} Treat this as an analytical scenario, not as evidence for one predetermined episode.`;
    prompt = "(a) State a defensible causal claim about one mechanism producing change. (b) Identify a specific kind of historical evidence that would test the claim and explain how. (c) Compare likely effects on two groups. (d) Give one period, regional, institutional, or social boundary condition requiring qualification.";
    answerKey = "Full credit requires a plausible mechanism, a concrete evidence type explicitly connected to that mechanism, an explained comparison of two groups, and a historically relevant qualification. Evidence must be used analytically rather than merely listed; multiple historically defensible answers are possible.";
  } else if (geography) {
    stimulus = "A metropolitan region opens a rapid-transit corridor. Housing and retail cluster near some stations but not others. Neighborhoods differ in zoning, income, density, land prices, and automobile access; researchers compare changes at 0.5 km, 2 km, and citywide scales.";
    prompt = "(a) Apply one geographic process to explain clustering. (b) Explain how scale could change the observed pattern. (c) Predict and justify one social or economic consequence. (d) Identify one variable that could weaken or reverse the transit-development relationship.";
    answerKey = "A strong response applies accessibility, agglomeration, bid-rent, transit-oriented development, or another valid process; explains a genuine scale effect; traces a plausible consequence; and uses zoning, income, density, land availability, automobile access, or another contextual variable as a boundary condition.";
  } else if (english) {
    stimulus = variant === 0 ? "An original civic editorial opens with a crowded-library scene, introduces sign-in data, concedes staffing costs, and proposes a two-week pilot." : variant === 1 ? "An original reflective passage describes a familiar room through precise measurements and then fragmented memories; the physical room seems smaller while the remembered one expands." : "An original public argument moves from a local example to comparative data, acknowledges a serious counterargument, and reframes the proposal as a testable experiment.";
    prompt = "Develop an interpretation of how sequence and at least two specific choices shape meaning or persuasion. (a) State a defensible thesis. (b) Analyze one choice. (c) Explain how a second choice complicates or advances the reasoning. (d) Give one plausible alternative reading or audience response and support it with a textual feature.";
    answerKey = "Full credit requires an arguable thesis, functional analysis of two concrete choices, connection to meaning, audience, purpose, or tension, and an evidence-based alternative reading or audience response. Device-labeling or unsupported biography alone is insufficient.";
  } else if (government) {
    stimulus = "Congress enacts a broad statute delegating technical implementation to an executive agency. The agency later adopts a stricter rule; regulated parties challenge whether it fits the statute, while the executive argues that expertise and changing conditions require discretion.";
    prompt = "(a) Identify the central institutional issue. (b) Explain one source of agency authority. (c) Explain one legal or institutional check. (d) Evaluate expert flexibility versus accountability and identify one condition strengthening the challengers' argument.";
    answerKey = "A strong response identifies delegated authority and statutory interpretation, explains that agency power derives from law and executive implementation, identifies a real check such as judicial review, statutory limits, appropriations, oversight, or legislation, and evaluates the tradeoff. Action contrary to clear statutory text or beyond delegated scope strengthens the challenge.";
  } else {
    stimulus = `In an original ${subject} investigation, two competing explanations fit the initial observations. A second data set changes one relevant variable while holding others as constant as the setting permits; the two explanations then predict different outcomes.`;
    prompt = "(a) State what evidence would discriminate between the explanations. (b) Explain why merely matching the first observation is insufficient. (c) Interpret what it would mean if the second data set favored one prediction. (d) Identify one confound, assumption, or boundary condition that would limit the conclusion.";
    answerKey = "Full credit identifies discriminating evidence tied to different predictions, explains underdetermination from the first observation, interprets the second result as comparative support rather than absolute proof, and names a relevant confound, assumption, or boundary condition. The reasoning must be specific to the stated investigation rather than a list of generic scientific terms.";
  }
  return { id, format: "frq_half", conceptIntro: `${subject} · evidence, reasoning, and qualification`, stimulus, prompt, answerKey,
    rationale: "This replacement turns an unpublishable legacy item into a multi-step assessment requiring evidence, mechanism, qualification, and a boundary-condition check rather than recall alone.",
    scoringGuide: ["1 point: accurate central claim, interpretation, process, or issue.", "1 point: specific evidence or mechanism supporting the reasoning.", "1 point: explained comparison, second analytical step, or consequence.", "1 point: defensible qualification, alternative, check, confound, or boundary condition."],
    hints: ["Explain why the evidence supports the claim; do not merely name a concept.", "Use the final part to test where the main reasoning could fail or require qualification."], authenticity: "skill_drill", responseMode: english ? "essay" : "extended_response", difficultyTier: 3,
    examSection: "Constructed-response skill drill · multi-step reasoning and qualification" };
}

export function buildFinalQuarantineBatch19(sets: Questionnaire[], excludedIds: Set<string>): RecoveryBatch5Result {
  const remaining = sets.map((set) => ({ ...set, items: (set.items || []).filter((item) => !excludedIds.has(item.id) && normalizeApItem(item) === null).map(forceCandidate) })).filter((set) => set.items.length > 0);
  const stemSets = remaining.filter((set) => STEM.test(set.subject));
  const nonStemSets = remaining.filter((set) => !STEM.test(set.subject));
  const stemCount = stemSets.reduce((sum, set) => sum + set.items.length, 0);
  const stem = stemCount ? buildRecoveredApItemsBatch5(stemSets, new Set<string>(), stemCount) : { items: {}, ids: [], severeMissingAnswer: 0, severeStructural: 0 };
  const extraItems: Record<string, QuestionnaireItem> = {}; const extraIds: string[] = []; let n = 0;
  for (const set of nonStemSets) for (const item of set.items) { extraItems[item.id] = nonStemReplacement(set.subject, item.id, n++); extraIds.push(item.id); }
  const ids = [...stem.ids, ...extraIds];
  return { items: { ...stem.items, ...extraItems }, ids, severeMissingAnswer: ids.length, severeStructural: 0 };
}
