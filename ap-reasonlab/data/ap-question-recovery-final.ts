import type { QuestionnaireItem } from "@/lib/types";

export const singleItemPracticeSetIds = new Set([
  "micro-gen-costs",
  "macro-gen-indicators",
  "p2-gen-thermo",
  "p2-gen-optics",
  "p2-gen-waves",
  "p2-gen-modern",
  "apwh-leq-practice-a",
  "aplang-rhetoric-practice-a",
  "phys1-gen-energy-a",
  "phys1-gen-momentum-a",
  "calcab-gen-integrals-a",
  "chem-gen-stoich-a",
  "bio-gen-cell-a",
  "stats-gen-inference-a",
  "psych-gen-research-a",
  "econ-micro-gen-a",
  "econ-macro-gen-a",
  "ush-gen-sourcing-a",
  "world-gen-comparison-a",
  "englang-gen-rhetoric-a",
  "englit-gen-analysis-a",
  "envsci-gen-ecosystems-a",
  "csa-gen-methods-a",
  "csp-gen-data-a",
  "phys2-gen-waves-a",
  "physc-mech-gen-a",
  "physc-em-gen-a",
  "humgeo-gen-a",
  "eurohist-gen-a",
]);

function frq(
  id: string,
  conceptIntro: string,
  stimulus: string,
  prompt: string,
  answerKey: string,
  scoringGuide: string[],
  hints: string[]
): QuestionnaireItem {
  return {
    id,
    format: "frq_half",
    conceptIntro,
    stimulus,
    prompt,
    answerKey,
    rationale:
      "A strong response uses the supplied context as evidence, explains the reasoning connecting evidence to the claim, and includes the requested qualification or comparison instead of only naming terms.",
    scoringGuide,
    hints,
    authenticity: "skill_drill",
    responseMode: "extended_response",
    difficultyTier: 3,
    examSection: "Constructed-response skill drill · evidence and reasoning",
  };
}

type HistorySpec = {
  period: string;
  development: string;
  evidenceA: string;
  evidenceB: string;
  comparison: string;
  qualification: string;
};

const US_SPECS: HistorySpec[] = [
  {
    period: "the 1790s through the 1820s",
    development: "the growth of federal authority and organized political opposition",
    evidenceA: "the national bank, implied powers, and federal taxation",
    evidenceB: "the emergence of party newspapers and competing constitutional interpretations",
    comparison: "Federalist and Democratic-Republican approaches to national power",
    qualification: "regional interests and foreign-policy crises complicated simple party divisions",
  },
  {
    period: "the 1840s through the 1860s",
    development: "territorial expansion intensifying sectional conflict",
    evidenceA: "the Mexican-American War and disputes over slavery in western territories",
    evidenceB: "the Compromise of 1850, Kansas-Nebraska Act, and collapsing national party coalitions",
    comparison: "free-soil arguments and defenses of slavery's expansion",
    qualification: "economic modernization and local political cultures also shaped sectional identity",
  },
  {
    period: "the 1870s through the 1910s",
    development: "industrialization provoking labor conflict and regulatory reform",
    evidenceA: "railroad consolidation, corporations, and expanding wage labor",
    evidenceB: "labor organizing, antitrust laws, and Progressive-era regulation",
    comparison: "business arguments for growth and reform arguments about inequality or unsafe conditions",
    qualification: "reform priorities differed by class, race, gender, and region",
  },
  {
    period: "the 1930s through the 1960s",
    development: "the federal government taking a larger role in economic security and civil rights",
    evidenceA: "New Deal relief, recovery, and social-insurance programs",
    evidenceB: "federal court decisions and civil-rights legislation",
    comparison: "arguments for national intervention and arguments favoring state or private responsibility",
    qualification: "federal action was uneven and often depended on pressure from social movements",
  },
];

const WORLD_SPECS: HistorySpec[] = [
  {
    period: "c. 1200 to c. 1450",
    development: "long-distance trade strengthening cities and cross-cultural exchange",
    evidenceA: "Indian Ocean merchant diasporas, monsoon navigation, and port cities",
    evidenceB: "caravan trade and Mongol-era movement of technologies and beliefs across Eurasia",
    comparison: "maritime Indian Ocean networks and overland Eurasian routes",
    qualification: "political instability, disease, and geography could interrupt exchange",
  },
  {
    period: "c. 1450 to c. 1750",
    development: "large land empires using military and administrative innovations to consolidate rule",
    evidenceA: "firearms, professional armies, taxation, and imperial bureaucracies",
    evidenceB: "religious policy, monumental architecture, and elite patronage",
    comparison: "Ottoman and Mughal strategies for managing diverse populations",
    qualification: "local intermediaries limited how completely rulers centralized authority",
  },
  {
    period: "c. 1750 to c. 1900",
    development: "industrialization changing labor systems and global economic relationships",
    evidenceA: "mechanized production, coal power, factories, and urban wage labor",
    evidenceB: "railroads, state investment, tariff policies, and imported industrial technology",
    comparison: "early British industrialization and later state-supported industrialization",
    qualification: "industrial growth remained uneven and coexisted with agriculture and artisanal production",
  },
  {
    period: "c. 1800 to c. 1914",
    development: "imperial expansion linking industrial power to political domination",
    evidenceA: "military conquest, colonial administrations, and raw-material extraction",
    evidenceB: "unequal treaties, concession zones, and foreign control over trade or finance",
    comparison: "formal colonial rule and informal economic influence",
    qualification: "colonized peoples negotiated, adapted to, and resisted imperial rule in varied ways",
  },
  {
    period: "c. 1945 to the late twentieth century",
    development: "decolonization creating new states amid Cold War rivalry",
    evidenceA: "mass political organization and constitutional negotiations",
    evidenceB: "armed anti-colonial struggle, counterinsurgency, and superpower involvement",
    comparison: "negotiated independence and armed liberation movements",
    qualification: "the route to independence did not determine a single postcolonial outcome",
  },
];

const EURO_SPECS: HistorySpec[] = [
  {
    period: "the Renaissance and Reformation era",
    development: "religious and intellectual challenges weakening older claims to Christian unity",
    evidenceA: "humanist textual scholarship and criticism of clerical practices",
    evidenceB: "vernacular scripture and disputes over religious authority",
    comparison: "humanist criticism and Protestant reform",
    qualification: "political rulers and local conditions shaped whether reform succeeded",
  },
  {
    period: "the seventeenth and eighteenth centuries",
    development: "states expanding fiscal and administrative capacity",
    evidenceA: "standing armies, centralized taxation, and royal bureaucracies",
    evidenceB: "representative institutions and bargaining over taxation",
    comparison: "absolutist monarchy and constitutional limits on rulers",
    qualification: "even powerful monarchies depended on nobles and negotiated privileges",
  },
  {
    period: "the late eighteenth through mid-nineteenth centuries",
    development: "revolutionary politics challenging dynastic and corporate privilege",
    evidenceA: "rights discourse, constitutions, and representative government",
    evidenceB: "nationalist claims based on language, culture, or common political destiny",
    comparison: "liberal constitutional movements and nationalist movements",
    qualification: "liberalism and nationalism could conflict over borders and minority rights",
  },
  {
    period: "the nineteenth century",
    development: "industrialization transforming class relations and political reform",
    evidenceA: "factory growth, urbanization, and market competition",
    evidenceB: "labor organization, public-health reform, and socialist critique",
    comparison: "laissez-faire responses and social-reform responses",
    qualification: "industrial change varied greatly in timing and intensity across Europe",
  },
];

function historyItem(id: string, subject: "AP US History" | "AP World History" | "AP European History", index: number) {
  const specs = subject === "AP US History" ? US_SPECS : subject === "AP European History" ? EURO_SPECS : WORLD_SPECS;
  const s = specs[index % specs.length];
  return frq(
    id,
    `${subject} · contextualization, evidence, comparison, and qualification`,
    `A historian studying ${s.period} argues that ${s.development}. The argument draws on institutional decisions as well as wider social and economic forces. Relevant evidence includes ${s.evidenceA}. A second line of evidence is ${s.evidenceB}. Because the pattern differed across groups and regions, the claim should be evaluated as an argument about degree and causation rather than treated as a universal description.`,
    `Using the historical situation above, (a) state a defensible claim about one cause of the development, (b) support the claim with one specific piece of evidence, (c) compare ${s.comparison}, and (d) explain one limitation or qualification that would make the argument more historically precise.`,
    `A strong response identifies a plausible cause and explains the mechanism connecting it to the development. Evidence may include ${s.evidenceA} or ${s.evidenceB} when explicitly tied to the claim. The comparison should explain a meaningful similarity or difference between ${s.comparison}. A defensible qualification is that ${s.qualification}. Other historically accurate evidence can earn credit when used analytically.`,
    [
      "1 point: defensible causal claim tied to the stated development.",
      "1 point: specific historical evidence explained as support.",
      "1 point: meaningful comparison with significance explained.",
      "1 point: historically valid limitation or qualification.",
    ],
    ["Name a cause, then explain how it produced the development.", "Use evidence as support, not as a list of names or events." ]
  );
}

function humanGeographyItem(id: string) {
  return frq(
    id,
    "AP Human Geography · migration, urban structure, scale, and model limits",
    "A rapidly growing metropolitan area receives migrants from surrounding rural districts. New arrivals initially cluster near relatives, transit, and low-cost rental housing, while higher-income households are more likely to move toward newer outer-ring neighborhoods. Over time, redevelopment raises prices near several central transit stations. Researchers agree that accessibility and social networks matter but caution that housing policy and discrimination can alter the expected spatial pattern.",
    "Using the scenario, (a) identify one geographic process shaping migrant settlement, (b) explain how accessibility or social networks influence the spatial pattern, (c) explain one social or economic consequence of redevelopment near transit, and (d) explain one reason a simple spatial-assimilation model may not predict every household's location.",
    "Chain migration and social networks can explain initial clustering because existing contacts reduce information and settlement costs. Accessibility also raises the value of locations near jobs and transit. Redevelopment may improve access while increasing rents and displacement pressure. A simple spatial-assimilation model is limited because zoning, discrimination, housing supply, household preferences, and income can prevent a uniform outward movement pattern.",
    [
      "1 point: identifies a relevant geographic process.",
      "1 point: applies accessibility or social-network reasoning to the spatial pattern.",
      "1 point: explains a defensible redevelopment consequence.",
      "1 point: explains a variable that limits the simplified model.",
    ],
    ["Use the scenario as evidence rather than only defining a term.", "For the limitation, name a variable that could change the predicted pattern." ]
  );
}

function englishLanguageItem(id: string, index: number) {
  const scenarios = [
    {
      audience: "a town council considering whether to convert an unused parking lot into a shaded public plaza",
      passage: "A planner opens with a concrete description of the lot at noon, shifts to survey data about pedestrian heat exposure, acknowledges concerns about parking capacity, and ends by framing shade as public infrastructure rather than decoration.",
      choice: "the shift from sensory description to quantitative evidence and then concession",
      purpose: "make the proposal feel both immediate and administratively practical",
    },
    {
      audience: "students considering whether their school should extend library hours during examination weeks",
      passage: "A student writer begins with crowded study tables, cites sign-in records from the current closing hour, concedes that staffing has a cost, and proposes a limited two-week pilot rather than a permanent change.",
      choice: "the concession followed by a narrowly scoped pilot proposal",
      purpose: "reduce resistance by presenting the recommendation as testable and proportionate",
    },
    {
      audience: "residents evaluating a city program that replaces decorative lawns with drought-tolerant planting",
      passage: "The writer contrasts water bills, explains maintenance demands in a dry climate, addresses concern that native planting will look neglected, and closes with an image of an attractive street that uses less water.",
      choice: "the repeated contrast between appearance and resource use",
      purpose: "redefine conservation as compatible with civic beauty",
    },
  ];
  const s = scenarios[index % scenarios.length];
  return frq(
    id,
    "AP English Language · rhetorical analysis and line of reasoning",
    `The following is original practice material, not a published passage. ${s.passage} The intended audience is ${s.audience}. Because the writer advocates a decision, each rhetorical choice should be analyzed in relation to audience, purpose, and the sequence of the argument.`,
    `Write a focused analysis that (a) states a defensible thesis about how the writer shapes the argument, (b) analyzes ${s.choice}, (c) explains how one additional choice contributes to the line of reasoning, and (d) explains why merely labeling ethos, pathos, or logos would be insufficient analysis.`,
    `A defensible thesis should connect the writer's choices to the purpose: to ${s.purpose}. Analysis of ${s.choice} should explain what the choice makes the audience notice, accept, or reconsider. A second choice should be connected to the developing line of reasoning. Simply naming an appeal is insufficient because rhetorical analysis must explain how a specific choice functions for this audience and purpose.`,
    [
      "1 point: defensible thesis connecting choices to audience and purpose.",
      "1 point: functional analysis of the named rhetorical choice.",
      "1 point: second choice analyzed as part of the line of reasoning.",
      "1 point: explains why device-labeling alone is insufficient.",
    ],
    ["Use the pattern choice → effect → audience → purpose.", "Do not stop after naming a rhetorical appeal." ]
  );
}

const US_IDS = [
  "m-item-91ac5e26-trjno",
  "m-item-bfac57ae-bhbts",
  "m-item-57fbfb54-38ke3",
  "m-item-d93ee23a-nza6y",
  "m-item-71367668-cgotk",
  "m-item-bc8196ad-n2p7e",
];
const WORLD_IDS = [
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
  "m-item-73fdbfa5-vpydb",
];
const EURO_IDS = [
  "m-item-268093fb-a844v",
  "m-item-6b1ae1b9-yoq58",
  "m-item-517a16ed-sh8hr",
  "m-item-89c9d88f-9dj5q",
  "m-item-f09c2ddc-jdrdt",
  "m-item-79e37d8f-8bhz7",
  "m-item-fcb247ce-v8qsb",
  "m-item-19c441ee-tqzpk",
  "m-item-522c526d-ixjj6",
];
const ENGLISH_IDS = [
  "m-item-4896b6a8-5ee5t",
  "m-item-c29eac2c-atrpj",
  "m-item-c5041188-cm9bx",
  "m-item-b4f849da-eq26o",
  "m-item-37b125f0-rmubb",
];

export const finalRecoveryItems: Record<string, QuestionnaireItem> = {};
US_IDS.forEach((id, index) => (finalRecoveryItems[id] = historyItem(id, "AP US History", index)));
WORLD_IDS.forEach((id, index) => (finalRecoveryItems[id] = historyItem(id, "AP World History", index)));
EURO_IDS.forEach((id, index) => (finalRecoveryItems[id] = historyItem(id, "AP European History", index)));
ENGLISH_IDS.forEach((id, index) => (finalRecoveryItems[id] = englishLanguageItem(id, index)));
finalRecoveryItems["m-item-a47c67ff-6a0um"] = humanGeographyItem("m-item-a47c67ff-6a0um");

finalRecoveryItems["p1-mcq-001"] = {
  id: "p1-mcq-001",
  format: "mcq",
  conceptIntro: "AP Physics 1 · work-energy reasoning with a nonzero height change",
  stimulus:
    "A 2.0 kg cart moves on a frictionless track. It enters a rising section at 6.0 m/s and reaches a point 1.0 m higher than its initial position. Take g = 9.8 m/s² and ignore rotational energy of the wheels.",
  prompt: "What is the cart's approximate speed at the higher point?",
  choices: ["2.0 m/s", "4.0 m/s", "5.0 m/s", "7.4 m/s"],
  mcqAnswer: 1,
  answerKey: "4.0 m/s",
  rationale:
    "Mechanical energy is conserved: 1/2 m vi² = 1/2 m vf² + mgh, so vf² = 36 - 19.6 = 16.4 and vf ≈ 4.0 m/s.",
  hints: ["Compare the initial and final mechanical energies.", "Mass cancels from the energy equation."],
  authenticity: "skill_drill",
  responseMode: "single_choice",
  difficultyTier: 2,
  examSection: "Multiple-choice skill drill · energy conservation",
};

finalRecoveryItems["calc-mcq-001"] = {
  id: "calc-mcq-001",
  format: "mcq",
  conceptIntro: "AP Calculus AB/BC · accumulated change and the Fundamental Theorem of Calculus",
  stimulus:
    "For 0 ≤ t ≤ 4, water enters a tank at a differentiable rate R(t) liters per minute. At t = 0 the tank contains 20 liters. The total amount of water that enters from t = 0 to t = 4 is represented by the definite integral of R(t) over that interval.",
  prompt: "Which expression gives the amount of water in the tank at t = 4, assuming no water leaves the tank?",
  choices: ["R(4)", "20 + R(4)", "20 + ∫₀⁴ R(t) dt", "20 + ∫₀⁴ R'(t) dt"],
  mcqAnswer: 2,
  answerKey: "20 + ∫₀⁴ R(t) dt",
  rationale:
    "The definite integral of a rate over time gives accumulated change. Adding that accumulated inflow to the initial 20 liters gives the final amount.",
  hints: ["Ask what integrating a rate over time represents.", "Start from initial amount plus accumulated change."],
  authenticity: "skill_drill",
  responseMode: "single_choice",
  difficultyTier: 2,
  examSection: "Multiple-choice skill drill · accumulation",
};

export const finalRecoveryBatch = {
  items: finalRecoveryItems,
  ids: Object.keys(finalRecoveryItems),
  severeMissingAnswer: 0,
  severeStructural: Object.keys(finalRecoveryItems).length,
};
