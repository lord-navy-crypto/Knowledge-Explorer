/**
 * Generate harder English MCQs (challenge tier). Run: npm run generate:hard-english
 * Output: data/english-questions-hard.ts — hand-review after generation.
 */
import { writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(fileURLToPath(import.meta.url));

const TOEFL_HARD = [
  {
    skill: "Academic Reading",
    prompt:
      "A randomized trial assigned students to spaced review (3 sessions over 10 days) or massed review (1 session). Spaced review improved delayed recall by 18%, but both groups spent equal total study time. A critic argues the result only shows spacing works when total time is fixed. Which response best addresses the critic?",
    choices: [
      "The critic is wrong because all studies prove spacing always wins.",
      "The design holds total time constant, so the gain isolates spacing schedule rather than more hours studied.",
      "The critic is right, so spacing should never be used.",
      "Total study time is impossible to measure.",
    ],
    answer: 1,
    explanation: "Equal total time means the comparison targets schedule, not simply studying more.",
  },
  {
    skill: "Listening inference",
    prompt:
      "A graduate advisor says, “Your proposal is fundable, but the budget line for equipment assumes prices from 2019.” What is the advisor most likely implying?",
    choices: [
      "The proposal should be withdrawn entirely.",
      "Equipment costs may need updating before reviewers accept the budget.",
      "Funding is guaranteed without revision.",
      "The student should remove all equipment requests.",
    ],
    answer: 1,
    explanation: "Outdated prices suggest the budget needs revision despite overall fundability.",
  },
  {
    skill: "Writing coherence",
    prompt:
      "Which sentence best introduces a counterargument paragraph in an essay supporting urban congestion pricing?",
    choices: [
      "Cars have four wheels.",
      "Some critics argue congestion fees burden low-income commuters, yet targeted transit credits can offset that burden.",
      "Traffic exists in cities.",
      "Many people drive.",
    ],
    answer: 1,
    explanation: "It states the opposition and previews a rebuttal.",
  },
  {
    skill: "Speaking clarity",
    prompt:
      "In 45 seconds, which structure best answers whether universities should require research ethics training?",
    choices: [
      "Yes/no without reasons.",
      "Position + one reason + brief example of what training would cover.",
      "A long personal story unrelated to ethics.",
      "Definitions only, no recommendation.",
    ],
    answer: 1,
    explanation: "Timed speaking needs position, reason, and concrete detail.",
  },
  {
    skill: "Reading detail",
    prompt:
      "A passage reports that reforestation increased canopy cover by 12% but did not restore pre-2000 bird species richness after eight years. Which claim is supported?",
    choices: [
      "Reforestation immediately restored full biodiversity.",
      "Canopy cover rose, but species richness had not recovered to earlier levels within eight years.",
      "Birds were unaffected by canopy change.",
      "The study lasted only one month.",
    ],
    answer: 1,
    explanation: "Both the canopy gain and incomplete richness recovery are stated.",
  },
  {
    skill: "Grammar in context",
    prompt: "Not only the principal investigator but also the two lab technicians ___ the revised safety protocol.",
    choices: ["has signed", "have signed", "signing", "signs"],
    answer: 1,
    explanation: "With 'not only... but also', the verb agrees with the nearer plural subject (technicians).",
  },
  {
    skill: "Academic Discussion",
    prompt:
      "Should AI detectors be used to flag student essays? Which reply best acknowledges nuance?",
    choices: [
      "Detectors are always accurate.",
      "Detectors may help flag drafts for conversation, but false positives mean instructors should not rely on them as sole evidence.",
      "Essays should be banned.",
      "AI does not exist.",
    ],
    answer: 1,
    explanation: "Balanced policy with limitation on false positives.",
  },
  {
    skill: "Complete the Words",
    prompt: "The panel will recon___vene after peer reviewers submit comments.",
    choices: ["ve", "vi", "va", "vo"],
    answer: 0,
    explanation: "The word is reconvene.",
  },
  {
    skill: "Listening purpose",
    prompt:
      "Before a debate clip, the instructor says, “Notice how each speaker defines ‘productivity’ differently.” What should students listen for?",
    choices: [
      "Speaker volume only",
      "Competing definitions of a key term",
      "Background music",
      "The date of the recording",
    ],
    answer: 1,
    explanation: "The preview targets definitional disagreement.",
  },
  {
    skill: "Academic Reading",
    prompt:
      "Meta-analysis of 22 studies finds meditation reduces self-reported stress (d = 0.35) but effects shrink when active control groups are used. What is the best summary?",
    choices: [
      "Meditation has no effect in any study.",
      "There is a modest stress reduction signal, but active controls suggest some benefit may come from expectations or general relaxation.",
      "All 22 studies used identical methods.",
      "Self-reports are always invalid.",
    ],
    answer: 1,
    explanation: "Effect size plus shrinkage with active controls implies partial but uncertain benefit.",
  },
];

// Duplicate pattern filler with variations for remaining 20 TOEFL - use loop in script
const TOEFL_TOPICS = [
  "microplastics",
  "language attrition",
  "grid resilience",
  "clinical triage",
  "archive digitization",
  "peer tutoring",
  "heat adaptation",
  "invasive species",
  "open-access publishing",
  "sleep deprivation",
  "water rights",
  "algorithmic bias",
  "museum repatriation",
  "urban noise",
  "vaccine hesitancy",
  "carbon pricing",
  "child literacy",
  "remote sensing",
  "soil erosion",
  "wildfire smoke",
];

const SAT_ALG = [
  { prompt: "If 3(2x − 4) = 5x + 7, what is x?", ans: 19, choices: ["5", "9", "19", "25"] },
  { prompt: "If x² − 9 = 0, what is the positive value of x?", ans: 3, choices: ["−3", "3", "9", "81"] },
  { prompt: "What is the slope of 5x − 2y = 10?", ans: 2.5, choices: ["−2.5", "2", "2.5", "5"] },
  { prompt: "If f(x) = x² − 4x + 3, what is f(3)?", ans: 0, choices: ["0", "3", "6", "12"] },
  { prompt: "If 2x + 3y = 12 and x = 3, what is y?", ans: 2, choices: ["1", "2", "3", "4"] },
];

function buildToeflHard(): object[] {
  const items = [...TOEFL_HARD];
  let n = items.length + 1;
  for (const topic of TOEFL_TOPICS) {
    if (items.length >= 30) break;
    items.push({
      skill: n % 2 === 0 ? "Academic Reading" : "Listening inference",
      prompt: `Researchers studying ${topic} report a significant effect in the lab but note the field sample was self-selected. Which conclusion is most cautious?`,
      choices: [
        "The lab result proves the effect for everyone everywhere.",
        "The lab finding is suggestive, but self-selection limits generalization to broader populations.",
        "Self-selected samples always invalidate science.",
        "Field studies are unnecessary.",
      ],
      answer: 1,
      explanation: "Significant lab finding + self-selection limitation supports cautious generalization.",
    });
    n++;
  }
  return items.map((q, i) => ({
    id: `toefl-hard-${i + 1}`,
    ...q,
  }));
}

function buildSatHard(): object[] {
  const skills = [
    "Standard English Conventions",
    "Transitions",
    "Information and Ideas",
    "Rhetoric",
    "Words in context",
    "Data interpretation",
    "Expression of Ideas",
    "Central Ideas",
  ];
  const items: object[] = [];

  for (let i = 0; i < SAT_ALG.length; i++) {
    const a = SAT_ALG[i]!;
    items.push({
      id: `sat-hard-${items.length + 1}`,
      skill: "Algebra",
      prompt: a.prompt,
      choices: a.choices,
      answer: a.choices.indexOf(String(a.ans === 2.5 ? "2.5" : a.ans)),
      explanation: "Solve step by step; verify by substitution.",
    });
  }

  const topics = [
    "renewable portfolio standards",
    "historical zoning",
    "antibiotic stewardship",
    "microfinance",
    "coastal wetlands",
    "public transit ridership",
    "journalism trust",
    "school start times",
    "food deserts",
    "language extinction",
    "ocean acidification",
    "prison recidivism",
    "quantum computing hype",
    "rural broadband",
    "teacher retention",
    "urban heat islands",
    "voting access",
    "wildlife corridors",
    "youth mental health",
    "zero-waste policies",
    "affordable housing",
    "carbon capture",
    "digital privacy",
    "elder care",
    "film preservation",
  ];

  for (let i = 0; i < topics.length && items.length < 30; i++) {
    const skill = skills[i % skills.length]!;
    const topic = topics[i]!;
    if (skill === "Words in context") {
      items.push({
        id: `sat-hard-${items.length + 1}`,
        skill,
        prompt: `The author's tone toward ${topic} is best described as ___, praising progress while noting unresolved inequities.`,
        choices: ["measured", "hostile", "indifferent", "sarcastic"],
        answer: 0,
        explanation: "Praise plus noted inequities suggests a measured, balanced tone.",
      });
    } else if (skill === "Transitions") {
      items.push({
        id: `sat-hard-${items.length + 1}`,
        skill,
        prompt: `The policy reduced emissions in pilot cities. ___, rural counties saw little change because infrastructure lagged.`,
        choices: ["Similarly", "However", "Therefore", "For instance"],
        answer: 1,
        explanation: "Rural lack of change contrasts with pilot success.",
      });
    } else {
      items.push({
        id: `sat-hard-${items.length + 1}`,
        skill,
        prompt: `Which detail best supports a claim that ${topic} reforms improved outcomes without eliminating disparities?`,
        choices: [
          "Reforms happened recently.",
          "Average outcomes rose 8%, but gap between highest- and lowest-income groups narrowed only 1 point.",
          "Some people support reforms.",
          "The topic is discussed in newspapers.",
        ],
        answer: 1,
        explanation: "Improvement with a still-large disparity matches the nuanced claim.",
      });
    }
  }

  return items.slice(0, 30);
}

const toefl = buildToeflHard();
const sat = buildSatHard();

const source = `import type { EnglishPracticeQuestion } from "./english-content";

/** Challenge-tier MCQs — generated by scripts/generate-hard-english.ts (review/edit by hand). */
export const hardToeflQuestions: EnglishPracticeQuestion[] = ${JSON.stringify(toefl, null, 2)};

export const hardSatQuestions: EnglishPracticeQuestion[] = ${JSON.stringify(sat, null, 2)};
`;

writeFileSync(path.join(root, "../data/english-questions-hard.ts"), source, "utf8");
console.log(`Wrote hard English: ${toefl.length} TOEFL + ${sat.length} SAT`);
