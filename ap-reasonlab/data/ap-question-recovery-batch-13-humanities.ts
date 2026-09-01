import type { Questionnaire, QuestionnaireItem } from "@/lib/types";

export type HumanitiesRecoveryBatch = {
  items: Record<string, QuestionnaireItem>;
  ids: string[];
  severeMissingAnswer: number;
  severeStructural: number;
};

const SUPPORTED = /US History|World History|European History|Human Geography|English Language|English Literature|Government/i;

function words(text?: string) {
  return (text || "").trim().split(/\s+/).filter(Boolean).length;
}

function hasAnswer(item: QuestionnaireItem) {
  if (item.answerKey?.trim()) return true;
  if (item.blankAnswers?.some((answer) => answer.trim())) return true;
  return Boolean(
    item.format === "mcq" &&
      item.choices?.length &&
      Number.isInteger(item.mcqAnswer) &&
      Number(item.mcqAnswer) >= 0 &&
      Number(item.mcqAnswer) < item.choices.length
  );
}

function needsRecovery(item: QuestionnaireItem) {
  if (item.format === "mcq") return false;
  if (!hasAnswer(item)) return true;
  return words(`${item.stimulus || ""} ${item.prompt}`) < 35 || !item.scoringGuide?.length;
}

function drill(
  id: string,
  conceptIntro: string,
  stimulus: string,
  prompt: string,
  answerKey: string,
  rationale: string,
  scoringGuide: string[],
  hints: string[],
  responseMode: "extended_response" | "essay" = "extended_response"
): QuestionnaireItem {
  return {
    id,
    format: "frq_half",
    conceptIntro,
    stimulus,
    prompt,
    answerKey,
    rationale,
    scoringGuide,
    hints,
    authenticity: "skill_drill",
    responseMode,
    difficultyTier: 3,
    examSection: "Constructed-response skill drill · evidence, reasoning, and source analysis",
  };
}

type HistorySpec = {
  period: string;
  development: string;
  comparison: string;
  evidenceA: string;
  evidenceB: string;
  limitation: string;
};

const US_HISTORY: HistorySpec[] = [
  {
    period: "the 1790s through the 1820s",
    development: "the expansion of federal authority alongside the growth of organized party competition",
    comparison: "supporters of a stronger national government and critics who feared concentrated federal power",
    evidenceA: "debates over the national bank, federal taxation, and implied powers",
    evidenceB: "the emergence of partisan newspapers and competing interpretations of the Constitution",
    limitation: "regional interests and changing foreign-policy pressures meant neither political coalition was internally uniform",
  },
  {
    period: "the 1840s through the 1860s",
    development: "territorial expansion intensifying sectional conflict over slavery and political power",
    comparison: "claims that expansion represented national opportunity and arguments that it threatened the balance between free and slave states",
    evidenceA: "the consequences of the Mexican-American War and debates over slavery in western territories",
    evidenceB: "the Compromise of 1850, Kansas-Nebraska Act, and the collapse of older national party alignments",
    limitation: "economic modernization, immigration, and local political cultures also shaped sectional identities",
  },
  {
    period: "the 1870s through the 1910s",
    development: "rapid industrialization creating new wealth while provoking labor, regulatory, and urban reform movements",
    comparison: "business leaders who emphasized growth and efficiency and reformers who emphasized inequality, corruption, or unsafe conditions",
    evidenceA: "railroad consolidation, large corporations, and the growth of wage labor",
    evidenceB: "labor organizing, antitrust legislation, municipal reform, and Progressive-era regulation",
    limitation: "reform goals differed sharply by class, race, gender, region, and political ideology",
  },
  {
    period: "the 1930s through the 1960s",
    development: "the federal government assuming a larger role in economic security and civil rights enforcement",
    comparison: "arguments for national intervention and arguments favoring state, local, or private responsibility",
    evidenceA: "New Deal relief, recovery, and social-insurance programs",
    evidenceB: "federal court decisions, legislation, and executive action during the modern civil rights movement",
    limitation: "federal action was uneven, contested, and often depended on pressure from social movements and changing electoral coalitions",
  },
  {
    period: "the 1970s through the early twenty-first century",
    development: "political polarization growing around the proper scope of government, cultural issues, and economic policy",
    comparison: "conservative arguments for deregulation and lower taxes and liberal arguments for public investment and expanded protections",
    evidenceA: "the rise of the modern conservative movement and changes in party coalitions",
    evidenceB: "debates over taxation, welfare, environmental regulation, civil rights, and the social safety net",
    limitation: "voters frequently held cross-cutting views, so ideological labels did not perfectly predict preferences on every issue",
  },
];

const WORLD_HISTORY: HistorySpec[] = [
  {
    period: "c. 1200 to c. 1450",
    development: "expanding long-distance trade strengthening commercial cities and cross-cultural exchange",
    comparison: "Indian Ocean maritime networks and overland Eurasian routes",
    evidenceA: "merchant diasporas, monsoon navigation, port cities, and exchange across the Indian Ocean",
    evidenceB: "caravan trade, Mongol-era security, and movement of technologies and beliefs across Eurasia",
    limitation: "political instability, disease, and geographic barriers could interrupt exchange even during periods of commercial growth",
  },
  {
    period: "c. 1450 to c. 1750",
    development: "gunpowder empires using military and administrative innovations to consolidate rule",
    comparison: "centralizing strategies used by the Ottoman and Mughal states",
    evidenceA: "professional armies, firearms, taxation, and imperial bureaucracies",
    evidenceB: "religious accommodation or restriction, monumental architecture, and elite patronage",
    limitation: "local intermediaries and diverse subject populations limited how completely rulers could centralize authority",
  },
  {
    period: "c. 1750 to c. 1900",
    development: "industrialization changing production, labor systems, and global economic relationships",
    comparison: "early industrialization in Britain and later state-supported industrialization in other regions",
    evidenceA: "mechanized textile production, coal power, factories, and urban wage labor",
    evidenceB: "railroads, state investment, tariff policies, and imported industrial technology",
    limitation: "industrial development remained uneven and often coexisted with agriculture, artisanal production, and coerced labor",
  },
  {
    period: "c. 1800 to c. 1914",
    development: "imperial expansion linking industrial power to political domination and new racial ideologies",
    comparison: "formal colonial rule and informal economic influence",
    evidenceA: "military conquest, colonial administrations, and extraction of raw materials",
    evidenceB: "unequal treaties, investment, concession zones, and foreign control over trade or finance",
    limitation: "colonized peoples negotiated, adapted to, and resisted imperial rule in varied ways",
  },
  {
    period: "c. 1945 to the late twentieth century",
    development: "decolonization creating new states that navigated Cold War rivalry and domestic nation-building",
    comparison: "negotiated independence movements and armed anti-colonial struggles",
    evidenceA: "mass political organization, constitutional negotiations, and changing metropolitan public opinion",
    evidenceB: "guerrilla warfare, counterinsurgency, and superpower involvement in postcolonial conflicts",
    limitation: "the form of independence did not determine a single postcolonial political or economic outcome",
  },
];

const EURO_HISTORY: HistorySpec[] = [
  {
    period: "the Renaissance and Reformation era",
    development: "religious and intellectual challenges weakening older claims to a unified Western Christian order",
    comparison: "humanist criticism and Protestant reform movements",
    evidenceA: "textual scholarship, classical learning, and criticism of clerical practices",
    evidenceB: "vernacular scripture, disputes over authority, and new confessional institutions",
    limitation: "political rulers and local social conditions strongly shaped whether reform movements succeeded",
  },
  {
    period: "the seventeenth and eighteenth centuries",
    development: "European states expanding administrative and fiscal capacity while facing competing ideas about sovereignty",
    comparison: "absolutist monarchy and constitutional limitations on rulers",
    evidenceA: "standing armies, centralized taxation, royal bureaucracies, and court culture",
    evidenceB: "representative institutions, legal constraints, and bargaining over taxation",
    limitation: "even powerful monarchies depended on nobles, local offices, and negotiated privileges",
  },
  {
    period: "the late eighteenth through mid-nineteenth centuries",
    development: "revolutionary and nationalist politics challenging dynastic and corporate privilege",
    comparison: "liberal constitutional movements and nationalist movements",
    evidenceA: "rights discourse, constitutions, representative government, and attacks on legal privilege",
    evidenceB: "claims of common language, culture, history, or political destiny",
    limitation: "liberalism and nationalism could reinforce one another but could also conflict over minority rights and borders",
  },
  {
    period: "the nineteenth century",
    development: "industrialization transforming class relations, cities, and political reform",
    comparison: "laissez-faire responses and social reform or socialist responses",
    evidenceA: "factory growth, urbanization, market competition, and expanding middle-class influence",
    evidenceB: "labor organization, public-health reform, social insurance, and socialist critique",
    limitation: "industrial change varied in timing and intensity across European regions",
  },
  {
    period: "1914 through the Cold War",
    development: "total war and ideological conflict expanding state power and reshaping European political orders",
    comparison: "democratic welfare-state responses and authoritarian or totalitarian mobilization",
    evidenceA: "mass conscription, economic planning, social provision, and postwar reconstruction",
    evidenceB: "one-party rule, propaganda, political policing, and state-directed economic or social programs",
    limitation: "state expansion took different institutional forms and did not erase national political traditions",
  },
];

function history(id: string, subject: string, n: number): QuestionnaireItem {
  const specs = /US History/i.test(subject) ? US_HISTORY : /European/i.test(subject) ? EURO_HISTORY : WORLD_HISTORY;
  const s = specs[n % specs.length];
  const stimulus = `A historian studying ${s.period} argues that ${s.development}. The historian notes that contemporaries disagreed about the meaning and consequences of this change, and that later scholars have emphasized both institutional decisions and wider social forces. Relevant evidence includes ${s.evidenceA}; another useful line of evidence is ${s.evidenceB}. The claim should therefore be evaluated as an argument about degree and causation rather than treated as a description that explains every group or region in the same way.`;
  const prompt = `Using the historical situation above, (a) state a defensible claim about one major cause of the development, (b) support the claim with one specific piece of historical evidence, (c) compare ${s.comparison}, and (d) explain one limitation or qualification that would make the argument more historically precise.`;
  const answerKey = `A strong response identifies a historically plausible cause and connects it to the stated development rather than merely naming an event. Evidence could include ${s.evidenceA} or ${s.evidenceB}, provided the response explains how the evidence supports the claim. For comparison, the response should identify a meaningful similarity or difference between ${s.comparison} and explain why that distinction mattered. A valid qualification is that ${s.limitation}. Other historically accurate evidence and qualifications can earn credit when they are explicitly tied to the reasoning.`;
  return drill(
    id,
    `${subject} · contextualization, evidence, comparison, and qualification`,
    stimulus,
    prompt,
    answerKey,
    "The item requires a defensible historical claim, specific evidence used analytically, a comparison with an explained point of significance, and a qualification that prevents overgeneralization.",
    [
      "1 point: defensible causal claim tied to the stated development.",
      "1 point: specific historical evidence explained as support for the claim.",
      "1 point: meaningful comparison with an explained similarity or difference.",
      "1 point: historically valid limitation, counterpoint, or qualification.",
    ],
    ["Name a cause, then explain the mechanism connecting it to the development.", "A qualification should narrow or complicate the claim, not simply contradict it."],
    "essay"
  );
}

type GeoSpec = {
  setting: string;
  process: string;
  concept: string;
  consequence: string;
  counter: string;
};

const GEO: GeoSpec[] = [
  {
    setting: "A metropolitan region has a dense rail-served core, rapidly growing outer suburbs, and rising housing prices near major transit stations.",
    process: "new employment and residential development clustering around high-accessibility corridors",
    concept: "bid-rent, accessibility, and transit-oriented development",
    consequence: "shorter automobile trips for some residents but possible displacement of lower-income households from high-accessibility neighborhoods",
    counter: "zoning rules, housing supply, and household income can alter the relationship between transit access and residential location",
  },
  {
    setting: "A farming district shifts from subsistence grains toward export-oriented fruit production after refrigerated transport and a new port terminal reduce shipping time.",
    process: "market access changing land use and agricultural specialization",
    concept: "commercial agriculture, transportation costs, and comparative advantage",
    consequence: "higher export income alongside greater exposure to global price swings and water demand",
    counter: "government subsidies, labor availability, and environmental constraints can outweigh simple distance-to-market effects",
  },
  {
    setting: "A country with falling fertility and rising life expectancy begins to experience slower labor-force growth while the share of elderly residents increases.",
    process: "demographic transition changing age structure and dependency patterns",
    concept: "fertility, mortality, population pyramids, and dependency ratios",
    consequence: "greater pressure on pension and health systems and possible demand for immigration or productivity growth",
    counter: "retirement policy, female labor-force participation, and migration can change the economic effect of population aging",
  },
  {
    setting: "A coastal city receives migrants from several rural regions. New arrivals initially settle near relatives and community institutions, then some households move outward as incomes rise.",
    process: "chain migration and social networks shaping settlement patterns",
    concept: "migration push-pull factors, ethnic enclaves, and spatial assimilation",
    consequence: "strong community support networks alongside changing residential segregation patterns",
    counter: "housing discrimination, zoning, transportation access, and preferences can prevent a simple outward-assimilation pattern",
  },
  {
    setting: "A multinational firm places design and finance offices in a global city, component production in several middle-income countries, and final assembly near a major container port.",
    process: "production being divided among locations with different labor, infrastructure, and market advantages",
    concept: "global supply chains, outsourcing, agglomeration, and interdependence",
    consequence: "specialization and employment gains alongside vulnerability to transport disruptions and uneven value capture",
    counter: "automation, trade policy, political risk, and reshoring incentives can change the geography of production",
  },
];

function geography(id: string, n: number): QuestionnaireItem {
  const s = GEO[n % GEO.length];
  return drill(
    id,
    "AP Human Geography · spatial process, scale, consequence, and model limitation",
    `${s.setting} Local officials and researchers have mapped the pattern over time and agree that location matters, but they disagree about whether a single geographic model is sufficient to explain the observed change. The case therefore requires using a geographic concept at the correct scale while also identifying variables that could modify the expected pattern.`,
    `Using the scenario, (a) identify the geographic process described as ${s.process}, (b) explain how ${s.concept} helps account for the spatial pattern, (c) explain one social, economic, or environmental consequence, and (d) explain one reason the simplified geographic explanation might not predict every location or household correctly.`,
    `(a) The response should identify ${s.process}. (b) It should accurately apply ${s.concept} to explain why activities or people are distributed as described rather than merely defining a term. (c) One defensible consequence is ${s.consequence}. (d) A strong limitation is that ${s.counter}. Equivalent geographic reasoning earns credit when it is tied directly to the scenario and scale.`,
    "Credit depends on applying a geographic concept to a spatial pattern, tracing a consequence, and recognizing a boundary condition rather than reciting vocabulary.",
    [
      "1 point: correctly identifies the geographic process.",
      "1 point: applies an appropriate concept to explain the spatial pattern.",
      "1 point: explains a defensible consequence in context.",
      "1 point: explains a variable or boundary condition that limits the simplified model.",
    ],
    ["Use the scenario as evidence instead of giving a dictionary definition.", "For the limitation, name a variable that could change the expected spatial pattern." ]
  );
}

const RHETORIC = [
  {
    audience: "members of a town council deciding whether to convert an unused parking lot into a public shaded plaza",
    passage: "A planner begins with a concrete description of the lot at noon, shifts to survey data about pedestrian heat exposure, acknowledges concerns about parking capacity, and ends by framing shade as basic public infrastructure rather than decoration.",
    choice: "the shift from sensory description to quantitative evidence and then concession",
    purpose: "make the proposal appear both immediately tangible and administratively practical",
  },
  {
    audience: "students considering whether their school should extend library hours during examination weeks",
    passage: "A student writer opens with a brief scene of crowded study tables, cites sign-in records from the current closing hour, concedes that staffing has a cost, and proposes a limited two-week pilot rather than a permanent change.",
    choice: "the concession followed by a narrowly scoped pilot proposal",
    purpose: "reduce resistance by presenting the recommendation as testable and proportionate",
  },
  {
    audience: "residents evaluating a city program that replaces some decorative lawns with drought-tolerant planting",
    passage: "The writer contrasts two monthly water bills, explains the maintenance burden of lawns in a dry climate, addresses the fear that native planting will look neglected, and closes with an image of a landscaped street that uses less water while remaining inviting.",
    choice: "the repeated contrast between appearance and resource use",
    purpose: "redefine conservation as compatible with civic beauty rather than as aesthetic sacrifice",
  },
  {
    audience: "parents debating a proposed later start time for a secondary school",
    passage: "The author summarizes sleep research in accessible language, narrates a student's early-morning commute, acknowledges conflicts with athletics and family schedules, and then argues for adjusting transport and activity times together rather than treating the bell schedule in isolation.",
    choice: "the combination of research summary, individual example, and acknowledgement of logistical costs",
    purpose: "build credibility while showing that the writer understands practical objections",
  },
  {
    audience: "community members deciding whether a local museum should digitize fragile neighborhood archives",
    passage: "The director describes the physical wear on frequently handled photographs, emphasizes that digitization does not replace preservation of originals, gives an example of a family discovering a relative through an online index, and asks readers to view access and conservation as complementary goals.",
    choice: "the explicit rejection of the either-or framing between access and preservation",
    purpose: "recast the debate so that digitization appears to support rather than threaten stewardship",
  },
];

function englishLanguage(id: string, n: number): QuestionnaireItem {
  const s = RHETORIC[n % RHETORIC.length];
  const stimulus = `The following is an original practice passage summary, not an excerpt from a published work. ${s.passage} The intended audience is ${s.audience}. Because the writer is advocating a decision, each rhetorical choice should be analyzed in relation to that audience, the writer's purpose, and the sequence of the argument.`;
  return drill(
    id,
    "AP English Language · rhetorical analysis, evidence, and line of reasoning",
    stimulus,
    `Write a focused rhetorical analysis that (a) states a defensible thesis about how the writer shapes the argument for this audience, (b) analyzes ${s.choice}, (c) explains how at least one additional choice contributes to the line of reasoning, and (d) identifies one limitation of an analysis that merely labels ethos, pathos, or logos without explaining function.`,
    `A defensible thesis should connect the writer's choices to the purpose: to ${s.purpose}. Analysis of ${s.choice} should explain what the choice makes the audience notice, accept, or reconsider. A second choice from the passage summary should be connected to the developing line of reasoning rather than discussed in isolation. For part (d), simply naming ethos, pathos, or logos is insufficient because rhetorical analysis must explain how a specific textual choice works in this context and why it matters for the intended audience.`,
    "The response earns credit for functional analysis—choice, audience effect, and purpose—not for device spotting or generic praise of persuasiveness.",
    [
      "1 point: defensible thesis connecting choices to audience and purpose.",
      "1 point: specific analysis of the named rhetorical choice.",
      "1 point: analysis of a second choice as part of the line of reasoning.",
      "1 point: explains why device-labeling without functional analysis is insufficient.",
    ],
    ["Use the pattern: choice → immediate effect → audience → purpose.", "Do not stop after naming a rhetorical appeal; explain what the writer is doing with it."],
    "essay"
  );
}

const LITERATURE = [
  {
    setting: "During a family dinner after years away, a character notices that everyone still leaves one chair slightly pulled back from the table, though no one mentions the relative who once sat there.",
    detail: "the repeated image of the half-withdrawn chair and the characters' avoidance of naming the absent person",
    tension: "memory and deliberate silence",
  },
  {
    setting: "A narrator returns to a childhood apartment before it is sold and finds that the rooms seem smaller, while ordinary sounds from the hallway trigger unusually vivid recollections.",
    detail: "the contrast between physically diminished rooms and emotionally enlarged memories",
    tension: "the measurable present and the narrator's subjective past",
  },
  {
    setting: "In an original dramatic scene, two siblings repair a broken radio while discussing everything except the argument that caused one of them to leave home.",
    detail: "the mechanical task, clipped dialogue, and repeated failures to tune a clear signal",
    tension: "practical cooperation and unresolved emotional conflict",
  },
  {
    setting: "A speaker describes a river first as a boundary separating two communities and later as the route by which food, letters, and stories pass between them.",
    detail: "the changing metaphor of the river from barrier to connection",
    tension: "division and interdependence",
  },
  {
    setting: "A young employee rehearses a resignation speech in an elevator, but when the doors open, the carefully prepared sentences are replaced by a single unexpected question to the supervisor.",
    detail: "the contrast between interior rehearsal and sparse spoken dialogue",
    tension: "control and uncertainty",
  },
];

function englishLiterature(id: string, n: number): QuestionnaireItem {
  const s = LITERATURE[n % LITERATURE.length];
  return drill(
    id,
    "AP English Literature · close reading, tension, and interpretive evidence",
    `The following scenario is original practice material rather than a published passage. ${s.setting} The scene is written so that concrete details carry interpretive weight; a successful analysis should therefore examine how form and language create meaning instead of inventing biographical information about an author.`,
    `Develop an interpretation of how the scene explores ${s.tension}. In your response, (a) state a defensible thesis, (b) analyze ${s.detail}, (c) explain how another structural or language choice complicates the scene's meaning, and (d) describe one plausible alternative reading that a careful reader could support without making the interpretation self-contradictory.`,
    `A strong thesis should make an arguable claim about ${s.tension}. The analysis should treat ${s.detail} as evidence and explain how it shapes characterization, tone, symbolism, structure, or another relevant feature. A second choice should complicate rather than merely repeat the first point. An alternative reading can earn credit if it is grounded in the same details—for example, a gesture can signal both attachment and avoidance—showing that literary interpretation can accommodate tension without becoming arbitrary.`,
    "The item rewards a defensible interpretation supported by close reading and complexity; plot summary or unsupported claims about authorial biography do not satisfy the task.",
    [
      "1 point: defensible interpretive thesis.",
      "1 point: close analysis of the specified textual/structural detail.",
      "1 point: second piece of evidence used to complicate the interpretation.",
      "1 point: plausible evidence-based alternative reading or qualification.",
    ],
    ["Treat the concrete detail as evidence: what changes in meaning because it is there?", "An alternative reading should still be anchored in the scenario."],
    "essay"
  );
}

const GOVERNMENT = [
  {
    scenario: "Congress passes a broad environmental statute directing an executive agency to set technical emissions standards. A regulated industry challenges the agency's interpretation after the agency tightens a rule.",
    concepts: "delegated authority, judicial review, and the relationship between statutes and administrative implementation",
    tradeoff: "expertise and policy responsiveness versus accountability and legal constraint",
  },
  {
    scenario: "A state adopts a voting procedure that differs from neighboring states, while a federal statute establishes nationwide minimum protections for access to the ballot.",
    concepts: "federalism, the Elections Clause, and conflict between state administration and federal standards",
    tradeoff: "state experimentation versus national protection of political rights",
  },
  {
    scenario: "A president directs an executive department to change an enforcement priority after Congress declines to enact the president's preferred legislation.",
    concepts: "separation of powers, executive discretion, and legislative control through statutes and appropriations",
    tradeoff: "administrative flexibility versus the risk of executive policymaking beyond delegated authority",
  },
  {
    scenario: "A public school disciplines students for a protest conducted on school grounds, and the students argue that the punishment violates constitutional protections for expression.",
    concepts: "civil liberties, incorporation, and balancing individual rights against institutional responsibilities",
    tradeoff: "protection of political expression versus maintaining an effective school environment",
  },
];

function government(id: string, n: number): QuestionnaireItem {
  const s = GOVERNMENT[n % GOVERNMENT.length];
  return drill(
    id,
    "AP Government · institutions, constitutional reasoning, and competing principles",
    `${s.scenario} Assume the facts are disputed only where the scenario says so; the task is not to predict a specific court case but to reason from constitutional structures and institutional powers. Relevant concepts include ${s.concepts}.`,
    `Using the scenario, (a) identify the principal constitutional or institutional issue, (b) explain how one branch or level of government could justify its authority, (c) explain a plausible check, limit, or counterargument, and (d) evaluate the tradeoff between ${s.tradeoff}.`,
    `A strong answer accurately frames the issue using ${s.concepts}. It explains the claimed source of authority rather than simply asserting that one institution is powerful. It then identifies a real check such as judicial review, statutory limits, appropriations, elections, federal supremacy, state powers, or a protected liberty as appropriate to the scenario. The evaluation should weigh ${s.tradeoff} and reach a reasoned conclusion while acknowledging the competing principle.`,
    "The question tests institutional reasoning and competing constitutional principles, not recall of a single case name.",
    [
      "1 point: accurately identifies the institutional or constitutional issue.",
      "1 point: explains a plausible source of governmental authority.",
      "1 point: explains a valid check, limitation, or counterargument.",
      "1 point: evaluates the stated tradeoff with a reasoned conclusion.",
    ],
    ["Name the source of authority, not just the institution using it.", "A check must be something another institution, law, or constitutional protection can actually do." ]
  );
}

function makeReplacement(subject: string, id: string, n: number): QuestionnaireItem | null {
  if (/Human Geography/i.test(subject)) return geography(id, n);
  if (/English Language/i.test(subject)) return englishLanguage(id, n);
  if (/English Literature/i.test(subject)) return englishLiterature(id, n);
  if (/Government/i.test(subject)) return government(id, n);
  if (/US History|World History|European History/i.test(subject)) return history(id, subject, n);
  return null;
}

export function buildHumanitiesRecoveryBatch(
  sets: Questionnaire[],
  excludedIds: Set<string>,
  target = 75
): HumanitiesRecoveryBatch {
  const candidates: Array<{ subject: string; item: QuestionnaireItem; missing: boolean }> = [];

  for (const set of sets) {
    if (!SUPPORTED.test(set.subject || "")) continue;
    for (const item of set.items || []) {
      if (excludedIds.has(item.id) || !needsRecovery(item)) continue;
      candidates.push({ subject: set.subject, item, missing: !hasAnswer(item) });
    }
  }

  if (candidates.length < target) {
    throw new Error(
      `AP humanities recovery expected ${target} thin/missing-answer constructed responses but found ${candidates.length}.`
    );
  }

  const selected = candidates.slice(0, target);
  const items: Record<string, QuestionnaireItem> = {};
  const ids: string[] = [];
  let severeMissingAnswer = 0;

  selected.forEach((candidate, index) => {
    const replacement = makeReplacement(candidate.subject, candidate.item.id, index);
    if (!replacement) return;
    items[candidate.item.id] = replacement;
    ids.push(candidate.item.id);
    if (candidate.missing) severeMissingAnswer += 1;
  });

  if (ids.length !== target) {
    throw new Error(`AP humanities recovery generated ${ids.length}/${target} replacements.`);
  }

  return {
    items,
    ids,
    severeMissingAnswer,
    severeStructural: ids.length - severeMissingAnswer,
  };
}
