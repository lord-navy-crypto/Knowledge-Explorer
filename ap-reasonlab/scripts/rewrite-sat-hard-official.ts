/**
 * Replace leftover template SAT hard items with Digital SAT–shaped originals.
 * Run: npx tsx scripts/rewrite-sat-hard-official.ts
 */
import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import type { EnglishPracticeQuestion } from "../data/english-content";

const SEC =
  "Which choice completes the text so that it conforms to the conventions of Standard English?";
const EOI_GOAL = "Which choice best achieves the writer's goal?";
const EOI_TRANS = "Which choice completes the text with the most logical transition?";
const II = "Which choice is best supported by the text?";
const CS = "Which choice completes the text with the most logical and precise word or phrase?";

const items: EnglishPracticeQuestion[] = [
  {
    id: "sat-hard-1",
    skill: "Algebra",
    prompt: "If 3(2x − 4) = 5x + 7, what is x?",
    choices: ["5", "9", "19", "25"],
    answer: 2,
    explanation: "6x − 12 = 5x + 7, so x = 19.",
  },
  {
    id: "sat-hard-2",
    skill: "Algebra",
    prompt: "If x² − 9 = 0, what is the positive value of x?",
    choices: ["−3", "3", "9", "81"],
    answer: 1,
    explanation: "x² = 9, so the positive solution is 3.",
  },
  {
    id: "sat-hard-3",
    skill: "Algebra",
    prompt: "What is the slope of 5x − 2y = 10?",
    choices: ["−2.5", "2", "2.5", "5"],
    answer: 2,
    explanation: "−2y = −5x + 10, so y = (5/2)x − 5. Slope is 2.5.",
  },
  {
    id: "sat-hard-4",
    skill: "Algebra",
    prompt: "If f(x) = x² − 4x + 3, what is f(3)?",
    choices: ["0", "3", "6", "12"],
    answer: 0,
    explanation: "9 − 12 + 3 = 0.",
  },
  {
    id: "sat-hard-5",
    skill: "Algebra",
    prompt: "If 2x + 3y = 12 and x = 3, what is y?",
    choices: ["1", "2", "3", "4"],
    answer: 1,
    explanation: "6 + 3y = 12, so y = 2.",
  },
  {
    id: "sat-hard-6",
    skill: "Standard English Conventions",
    prompt: SEC,
    passage:
      "A 2024 energy-office brief notes that states with renewable portfolio standards added capacity faster than neighbors without such rules; the same brief ___ that household bills did not fall evenly across income groups.",
    choices: ["report", "reports", "reporting", "have reported"],
    answer: 1,
    explanation: "The subject is the brief (singular), so reports agrees.",
  },
  {
    id: "sat-hard-7",
    skill: "Expression of Ideas",
    prompt: EOI_TRANS,
    passage:
      "Pilot cities cut bus-fleet emissions after switching a portion of routes to electric vehicles. ___, rural counties saw almost no change because charging infrastructure lagged behind the schedule used in the pilots.",
    choices: ["Similarly", "However", "Therefore", "For instance"],
    answer: 1,
    explanation: "The second sentence contrasts with the pilots, so However is the logical transition.",
  },
  {
    id: "sat-hard-8",
    skill: "Information and Ideas",
    prompt: II,
    passage:
      "A hospital system tracked antibiotic stewardship for two years. Average length of stay for pneumonia fell 8 percent. The gap between the highest- and lowest-income ZIP codes narrowed only 1 percentage point, and rural clinics still prescribed broad-spectrum drugs at the old rate.",
    choices: [
      "Stewardship ended all differences between clinics.",
      "Average outcomes improved, but a large disparity remained.",
      "Rural clinics were excluded from the study.",
      "Pneumonia became more common during the study.",
    ],
    answer: 1,
    explanation: "The 8% gain plus the 1-point gap change supports improvement without closing disparities.",
  },
  {
    id: "sat-hard-9",
    skill: "Craft and Structure",
    prompt: CS,
    passage:
      "Microfinance programs in the study towns raised median household savings, yet the author calls the change “a down payment, not a finished house,” because the poorest quartile still lacked collateral.",
    choices: ["a complete solution", "an early installment toward a larger goal", "a legal penalty", "an accounting error"],
    answer: 1,
    explanation: "A down payment is an initial amount, not the completed purchase.",
  },
  {
    id: "sat-hard-10",
    skill: "Craft and Structure",
    prompt: "Which choice best describes the author's tone?",
    passage:
      "The coastal-wetland restoration added acreage and bird counts, the report says, “but the new marsh still sits beside a levee that floods working-class neighborhoods first.” The writer praises the habitat gain in one clause and names who still bears flood risk in the next.",
    choices: ["measured", "hostile", "indifferent", "sarcastic"],
    answer: 0,
    explanation: "Praise paired with a remaining inequity is a measured, balanced tone.",
  },
  {
    id: "sat-hard-11",
    skill: "Problem-Solving and Data Analysis",
    prompt:
      "A transit survey reports that 250 of 1,000 weekday riders switched to a discounted pass. What percent of surveyed riders switched?",
    choices: ["2.5%", "25%", "40%", "250%"],
    answer: 1,
    explanation: "250/1000 = 0.25 = 25%.",
  },
  {
    id: "sat-hard-12",
    skill: "Expression of Ideas",
    prompt: EOI_GOAL,
    passage:
      "Writer's goal: emphasize a limitation of the school-start-time study.\nDraft: Later bells were followed by higher attendance. The sample included only two suburban districts.",
    choices: [
      "The researchers used clocks.",
      "Because only two suburban districts were included, the attendance gain may not apply to large urban systems.",
      "Schools exist in many cities.",
      "Attendance is recorded by computers.",
    ],
    answer: 1,
    explanation: "It names the sample limit and why that limit matters.",
  },
  {
    id: "sat-hard-13",
    skill: "Information and Ideas",
    prompt: II,
    passage:
      "Districts that moved first period from 7:20 a.m. to 8:30 a.m. recorded a 6-point rise in on-time arrival. Tardies in the lowest-income schools fell by 1 point. Athletic practices were shortened by fifteen minutes in every school that changed the bell.",
    choices: [
      "Later start times erased all attendance gaps.",
      "On-time arrival rose overall, while the income-related tardy gap barely moved.",
      "Athletics caused the attendance change.",
      "No school changed its bell schedule.",
    ],
    answer: 1,
    explanation: "The 6-point gain and 1-point gap change are both in the text.",
  },
  {
    id: "sat-hard-14",
    skill: "Standard English Conventions",
    prompt: SEC,
    passage:
      "Food-access researchers mapped grocery openings in three zip codes; the team, along with a county dietitian, ___ a report before the council vote.",
    choices: ["submit", "submits", "submitted", "submitting"],
    answer: 2,
    explanation: "Past-tense narrative: the team submitted a report.",
  },
  {
    id: "sat-hard-15",
    skill: "Expression of Ideas",
    prompt: EOI_TRANS,
    passage:
      "Ocean chemists documented a drop in reef calcification after a marine heat wave. ___, they also published a table showing that two cooler, deeper sites held nearly steady.",
    choices: ["Likewise", "In contrast", "Therefore", "Meanwhile"],
    answer: 3,
    explanation: "The second sentence adds a simultaneous finding, so Meanwhile fits.",
  },
  {
    id: "sat-hard-16",
    skill: "Information and Ideas",
    prompt: II,
    passage:
      "After a marine heat wave, average reef calcification fell 8 percent across the monitored shelf. The gap between the most and least damaged sites narrowed by only 1 percent. Two deeper sites, excluded from that average, showed almost no change.",
    choices: [
      "Every reef declined by the same amount.",
      "The shelf average fell, but differences among sites remained large.",
      "Deeper sites drove the entire decline.",
      "Calcification increased everywhere.",
    ],
    answer: 1,
    explanation: "An 8% average drop with a 1-point gap change is improvement/decline without equalizing sites.",
  },
  {
    id: "sat-hard-17",
    skill: "Craft and Structure",
    prompt: "The quotation in the text primarily serves to",
    passage:
      "A recidivism brief opens with a warden’s line—“We measure returns to prison, not whether a person found a landlord who would sign”—then turns to a table of 12-month re-arrest rates. The rest of the paragraph never quotes the warden again.",
    choices: [
      "introduce a limit of the official metric before the data appear",
      "prove that landlords caused the re-arrests",
      "summarize the table that follows",
      "argue that prisons should stop collecting data",
    ],
    answer: 0,
    explanation: "The quote flags what the rate does not capture, then the table appears.",
  },
  {
    id: "sat-hard-18",
    skill: "Craft and Structure",
    prompt: "Which choice best describes the author's tone?",
    passage:
      "The column on quantum-computing headlines grants that error rates have dropped in lab chips, then spends equal space on “press releases that treat a 100-qubit demo as a factory.” The writer neither mocks researchers nor accepts the ads at face value.",
    choices: ["measured", "hostile", "indifferent", "sarcastic"],
    answer: 0,
    explanation: "Credit for progress plus skepticism of hype is measured.",
  },
  {
    id: "sat-hard-19",
    skill: "Problem-Solving and Data Analysis",
    prompt:
      "A rural-broadband grant covered 40 of 160 remaining unserved census blocks. What fraction of those blocks received the grant?",
    choices: ["1/8", "1/5", "1/4", "2/5"],
    answer: 2,
    explanation: "40/160 = 1/4.",
  },
  {
    id: "sat-hard-20",
    skill: "Expression of Ideas",
    prompt: EOI_GOAL,
    passage:
      "Writer's goal: combine two related findings into one sentence.\nDraft: Urban tree cover rose in the pilot wards. Heat-related ambulance calls in those wards fell 8 percent.",
    choices: [
      "Trees are plants. Ambulances are vehicles.",
      "In the pilot wards, tree cover rose, and heat-related ambulance calls fell 8 percent.",
      "Tree cover rose. Some people like shade.",
      "Ambulance calls exist in cities.",
    ],
    answer: 1,
    explanation: "One sentence keeps both findings and the shared setting.",
  },
  {
    id: "sat-hard-21",
    skill: "Information and Ideas",
    prompt: II,
    passage:
      "After a city planted street trees in three heat-island tracts, mean afternoon pavement temperature dropped 1.2°C. Emergency-room visits for heat illness in those tracts fell 8 percent. Visits in the highest-income tract, already shaded, changed by 1 percent.",
    choices: [
      "Tree planting removed all heat risk.",
      "Cooling and heat-illness visits improved on average, while the already-shaded tract barely changed.",
      "The income gap in visits disappeared.",
      "Pavement temperature rose after planting.",
    ],
    answer: 1,
    explanation: "The 1.2°C and 8% figures are gains; the 1% change shows a remaining disparity.",
  },
  {
    id: "sat-hard-22",
    skill: "Standard English Conventions",
    prompt: SEC,
    passage:
      "Election officials in the pilot counties mailed ballots earlier than in 2020, and each of the clerks ___ a log of undeliverable pieces before certification.",
    choices: ["keep", "keeps", "kept", "keeping"],
    answer: 2,
    explanation: "The sentence is in the past: clerks kept a log.",
  },
  {
    id: "sat-hard-23",
    skill: "Expression of Ideas",
    prompt: EOI_TRANS,
    passage:
      "A youth-clinic trial offered same-week appointments in two zip codes. Wait times fell. ___, a third zip code that kept the old intake form showed no change, which the authors treat as a comparison rather than a failure of the idea.",
    choices: ["For example", "In contrast", "Likewise", "Accordingly"],
    answer: 1,
    explanation: "The third zip code is set against the trial sites.",
  },
  {
    id: "sat-hard-24",
    skill: "Information and Ideas",
    prompt: II,
    passage:
      "Same-week clinic appointments cut median wait time by 8 days in the two trial zip codes. The wait-time gap between those codes and a higher-income comparison zip code narrowed by only 1 day. No zip code in the county lost a counselor during the trial.",
    choices: [
      "The trial equalized wait times countywide.",
      "Waits fell in the trial sites, but a sizable gap remained.",
      "Counselor staffing caused the entire change.",
      "Wait times increased in the trial zip codes.",
    ],
    answer: 1,
    explanation: "An 8-day drop with a 1-day gap change matches incomplete equalization.",
  },
  {
    id: "sat-hard-25",
    skill: "Craft and Structure",
    prompt: CS,
    passage:
      "The zero-waste ordinance is described as “a scaffold, not a finished building”: haulers must offer compost pickup, but the text still allows landfills to take what residents fail to sort.",
    choices: ["a temporary support for later construction", "a legal ban on all trash", "a finished policy with no gaps", "a type of landfill"],
    answer: 0,
    explanation: "A scaffold supports work that is not yet complete.",
  },
  {
    id: "sat-hard-26",
    skill: "Craft and Structure",
    prompt: "Which choice best describes the author's tone?",
    passage:
      "The housing brief applauds a county’s new inclusionary-zoning floor, then lists the three neighborhoods where vouchers still cannot find a landlord. The verbs stay even: “added” and “still cannot,” not “triumph” or “betrayal.”",
    choices: ["measured", "hostile", "indifferent", "sarcastic"],
    answer: 0,
    explanation: "Even verbs plus remaining gaps are measured, not sarcastic or hostile.",
  },
  {
    id: "sat-hard-27",
    skill: "Problem-Solving and Data Analysis",
    prompt:
      "A carbon-capture pilot stored 12 metric tons in year 1 and 18 metric tons in year 2. What was the percent increase from year 1 to year 2?",
    choices: ["6%", "33%", "50%", "150%"],
    answer: 2,
    explanation: "(18 − 12)/12 = 0.5 = 50%.",
  },
  {
    id: "sat-hard-28",
    skill: "Expression of Ideas",
    prompt: "Which sentence should be deleted as least relevant to the paragraph's focus?",
    passage:
      "A film archive’s climate-controlled vault cut color fading in nitrate prints. Humidity logs stayed inside the target band for 11 of 12 months. The archive’s café began serving espresso in 2019. A second vault is scheduled for the north wing.",
    choices: [
      "A film archive’s climate-controlled vault cut color fading in nitrate prints.",
      "Humidity logs stayed inside the target band for 11 of 12 months.",
      "The archive’s café began serving espresso in 2019.",
      "A second vault is scheduled for the north wing.",
    ],
    answer: 2,
    explanation: "The café sentence is off-topic for preservation conditions.",
  },
  {
    id: "sat-hard-29",
    skill: "Information and Ideas",
    prompt: II,
    passage:
      "An elder-care pilot added weekend home visits. Falls reported to the county line dropped 8 percent among participants. The difference in fall rates between the highest- and lowest-income census tracts narrowed by 1 percent. Night-shift staffing at the hospital did not change.",
    choices: [
      "Weekend visits eliminated income differences in fall rates.",
      "Falls declined among participants, while the income gap barely moved.",
      "Hospital staffing caused the decline.",
      "Falls increased after the pilot.",
    ],
    answer: 1,
    explanation: "The 8% drop and 1% gap change are both stated.",
  },
  {
    id: "sat-hard-30",
    skill: "Standard English Conventions",
    prompt: SEC,
    passage:
      "Walking into the preservation lab, ___ the hygrometer on the bench before logging the morning reading.",
    choices: [
      "the safety goggles were noticed by the technician, who then checked",
      "the technician noticed the safety goggles and checked",
      "the bench held goggles that were noticed, then someone checked",
      "there was noticing of goggles before checking",
    ],
    answer: 1,
    explanation: "The participial phrase must modify the technician who walked in.",
  },
];

const file = path.join(path.dirname(fileURLToPath(import.meta.url)), "../data/english-questions-hard.ts");
const source = readFileSync(file, "utf8");
const start = source.indexOf("export const hardSatQuestions");
if (start < 0) throw new Error("missing hardSatQuestions");
const next = `${source.slice(0, start)}export const hardSatQuestions: EnglishPracticeQuestion[] = ${JSON.stringify(items, null, 2)};
`;
writeFileSync(file, next);
console.log(`Wrote ${items.length} official-shape SAT hard items.`);
