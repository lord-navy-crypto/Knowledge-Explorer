import type { Questionnaire, QuestionnaireItem } from "@/lib/types";

export const FINAL_HUMANITIES_WARNING_IDS = [
  "m-item-d93ee23a-nza6y",
  "m-item-71367668-cgotk",
  "m-item-bc8196ad-n2p7e",
  "m-item-2d7662aa-0k8tt",
  "m-item-c8c6145d-pjbnk",
  "m-item-fa2f7cae-kyotu",
  "m-item-5dbbaeb4-vx9w0",
  "m-item-3689adb2-9adbe",
  "m-item-e419b60c-xfm2k",
  "m-item-1f8530ad-jznd0",
  "m-item-2889b008-les98",
  "m-item-983bf018-g5n85",
  "m-item-752851f1-5dmrq",
  "m-item-d8166a3b-55fqb",
  "m-item-268093fb-a844v",
  "m-item-6b1ae1b9-yoq58",
  "m-item-517a16ed-sh8hr",
  "m-item-89c9d88f-9dj5q",
  "m-item-f09c2ddc-jdrdt",
  "m-item-79e37d8f-8bhz7",
  "m-item-fcb247ce-v8qsb",
  "m-item-19c441ee-tqzpk",
  "m-item-522c526d-ixjj6",
  "m-item-a47c67ff-6a0um",
  "m-item-c29eac2c-atrpj",
  "m-item-c5041188-cm9bx",
  "m-item-b4f849da-eq26o",
  "m-item-37b125f0-rmubb",
  "m-item-73fdbfa5-vpydb",
] as const;

function historyItem(id: string, subject: string, index: number): QuestionnaireItem {
  const cases = [
    {
      context: "a period of expanding state power, economic change, and political debate",
      evidence: "changes in taxation, institutions, trade, labor systems, or political participation",
      comparison: "two groups or states that responded differently to the same broad development",
    },
    {
      context: "a period in which long-distance exchange connected regions while creating unequal political and economic effects",
      evidence: "commercial networks, migration, military expansion, technological transfer, or new legal structures",
      comparison: "supporters of the development and groups that resisted or adapted to it",
    },
    {
      context: "a period of reform, revolution, or ideological competition that challenged an established political order",
      evidence: "legislation, organized movements, wars, constitutions, or shifts in social organization",
      comparison: "the stated goals of reformers and the actual effects experienced by different social groups",
    },
  ];
  const c = cases[index % cases.length];
  return {
    id,
    format: "frq_half",
    conceptIntro: `${subject} · evidence, causation, comparison, and qualification`,
    stimulus: `An historian examining ${c.context} argues that no single cause can explain the full pattern of change. Contemporary actors pursued different interests, and outcomes varied by region and social group. Useful evidence may include ${c.evidence}. A strong historical explanation therefore needs both a clear causal claim and a qualification that identifies where the claim does not apply equally.`,
    prompt: `Using the historical situation above, (a) state a defensible claim about one important cause of the development, (b) support it with one specific piece of historical evidence appropriate to ${subject}, (c) compare ${c.comparison}, and (d) explain one limitation or qualification that would make the argument more precise.`,
    answerKey: `A strong response identifies a historically plausible cause, names specific evidence, and explains the mechanism connecting the evidence to the claim. The comparison must identify a meaningful similarity or difference rather than merely naming two examples. The qualification should narrow the argument by period, region, group, or causal importance. Multiple answers can earn credit when historically accurate and explicitly reasoned.`,
    rationale: "The task rewards contextualized historical reasoning rather than recall alone: claim, evidence, comparison, and qualification must work together.",
    scoringGuide: [
      "1 point: defensible historical claim answering the causal task.",
      "1 point: specific historical evidence used to support the claim.",
      "1 point: meaningful comparison with an explained similarity or difference.",
      "1 point: valid limitation, counterpoint, or qualification.",
    ],
    hints: [
      "Choose one cause and explain how it produced change; do not only list events.",
      "For the qualification, identify a group, region, or period where the claim works differently.",
    ],
    authenticity: "skill_drill",
    responseMode: "essay",
    difficultyTier: 3,
    examSection: "Constructed-response skill drill · historical reasoning",
  };
}

function geographyItem(id: string): QuestionnaireItem {
  return {
    id,
    format: "frq_half",
    conceptIntro: "AP Human Geography · spatial process, scale, and limitation",
    stimulus: "A metropolitan region adds a rapid-transit line connecting a dense employment center with several lower-density districts. Housing construction increases near some stations, retail activity shifts toward transit corridors, and rents rise unevenly. Local researchers note that zoning, household income, existing land use, and access to automobiles differ across neighborhoods, so the same transportation investment does not produce an identical spatial pattern everywhere.",
    prompt: "Using the scenario, (a) identify one geographic process that could explain development near the stations, (b) apply one relevant geographic concept to explain the observed spatial pattern, (c) explain one social or economic consequence, and (d) explain one variable that limits a simple model of transit-driven development.",
    answerKey: "Valid answers may identify accessibility, agglomeration, bid-rent effects, transit-oriented development, or related processes. The concept must be applied to the scenario. A consequence could include changed commuting behavior, business clustering, rising land values, or displacement. A limitation can come from zoning, income, land availability, automobile access, or another variable that changes how strongly transit affects location decisions.",
    rationale: "The response must apply a spatial concept at the correct scale, trace a consequence, and recognize a boundary condition.",
    scoringGuide: [
      "1 point: identifies a defensible geographic process.",
      "1 point: correctly applies a geographic concept to the spatial pattern.",
      "1 point: explains a contextual consequence.",
      "1 point: explains a variable that limits the simplified model.",
    ],
    hints: ["Use the map-like spatial pattern in the scenario as evidence.", "A limitation should name a factor that changes location decisions."],
    authenticity: "skill_drill",
    responseMode: "extended_response",
    difficultyTier: 3,
    examSection: "Constructed-response skill drill · spatial analysis",
  };
}

function englishLanguageItem(id: string, index: number): QuestionnaireItem {
  const situations = [
    "A school newspaper editorial argues for extending library hours during exam weeks. It opens with a scene of crowded study spaces, presents sign-in data, concedes staffing costs, and proposes a two-week pilot.",
    "A community writer argues that a city should add shaded pedestrian areas. The piece moves from a sensory description of summer heat to public-health data, acknowledges budget concerns, and closes by describing shade as infrastructure rather than decoration.",
    "A museum director argues for digitizing fragile local archives. The argument describes damage from repeated handling, explains that digital copies do not replace originals, gives an example of a family finding a relative through an index, and frames access and preservation as complementary goals.",
  ];
  const situation = situations[index % situations.length];
  return {
    id,
    format: "frq_half",
    conceptIntro: "AP English Language · rhetorical analysis and line of reasoning",
    stimulus: `The following is original practice material rather than a published passage. ${situation} The intended audience must make a practical decision, so the writer's sequence of evidence, concession, examples, and framing should be analyzed in relation to audience and purpose rather than reduced to labels such as ethos, pathos, or logos.`,
    prompt: "Develop a focused rhetorical analysis that (a) states a defensible thesis about how the writer shapes the argument for the audience, (b) analyzes one specific rhetorical choice, (c) explains how a second choice develops the line of reasoning, and (d) explains why merely naming an appeal would be an incomplete analysis.",
    answerKey: "A defensible response connects specific choices to audience and purpose. It should explain what a choice makes the audience notice, accept, or reconsider, then show how another choice advances or qualifies the argument. Merely naming ethos, pathos, or logos is insufficient because analysis must explain how a textual choice functions in this context and why that function matters.",
    rationale: "The task assesses functional rhetorical analysis: textual choice, audience effect, purpose, and line of reasoning.",
    scoringGuide: [
      "1 point: defensible thesis connecting choices to audience and purpose.",
      "1 point: analysis of a specific rhetorical choice.",
      "1 point: analysis of a second choice within the line of reasoning.",
      "1 point: explains why device-labeling alone is insufficient.",
    ],
    hints: ["Use the pattern choice → effect → audience → purpose.", "Explain function, not just the name of an appeal."],
    authenticity: "skill_drill",
    responseMode: "essay",
    difficultyTier: 3,
    examSection: "Constructed-response skill drill · rhetorical analysis",
  };
}

export function buildFinalHumanitiesRecovery(sets: Questionnaire[]) {
  const wanted = new Set<string>(FINAL_HUMANITIES_WARNING_IDS);
  const items: Record<string, QuestionnaireItem> = {};
  const subjectById = new Map<string, string>();
  for (const set of sets) {
    for (const item of set.items || []) {
      if (wanted.has(item.id)) subjectById.set(item.id, set.subject);
    }
  }

  FINAL_HUMANITIES_WARNING_IDS.forEach((id, index) => {
    const subject = subjectById.get(id);
    if (!subject) throw new Error(`Final humanities recovery could not find ${id}.`);
    if (/Human Geography/i.test(subject)) items[id] = geographyItem(id);
    else if (/English Language/i.test(subject)) items[id] = englishLanguageItem(id, index);
    else items[id] = historyItem(id, subject, index);
  });

  return {
    items,
    ids: [...FINAL_HUMANITIES_WARNING_IDS],
    severeMissingAnswer: 0,
    severeStructural: FINAL_HUMANITIES_WARNING_IDS.length,
  };
}
