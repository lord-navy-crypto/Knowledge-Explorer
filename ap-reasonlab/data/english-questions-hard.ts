/** Challenge-tier bank — rewritten into official TOEFL iBT / Digital SAT task shape. */
import type { EnglishPracticeQuestion } from "./english-content";

export const hardToeflQuestions: EnglishPracticeQuestion[] = [
  {
    "id": "toefl-hard-1",
    "skill": "Read an Academic Passage",
    "prompt": "Which response best addresses the critic?",
    "choices": [
      "The critic is wrong because all studies prove spacing always wins.",
      "The design holds total time constant, so the gain isolates spacing schedule rather than more hours studied.",
      "The critic is right, so spacing should never be used.",
      "Total study time is impossible to measure."
    ],
    "answer": 1,
    "explanation": "Equal total time means the comparison targets schedule, not simply studying more.",
    "passage": "A randomized trial assigned students to spaced review (3 sessions over 10 days) or massed review (1 session). Spaced review improved delayed recall by 18%, but both groups spent equal total study time. A critic argues the result only shows spacing works when total time is fixed."
  },
  {
    "id": "toefl-hard-2",
    "skill": "Listen to a Conversation",
    "prompt": "What is the advisor most likely implying?",
    "choices": [
      "The proposal should be withdrawn entirely.",
      "Equipment costs may need updating before reviewers accept the budget.",
      "Funding is guaranteed without revision.",
      "The student should remove all equipment requests."
    ],
    "answer": 1,
    "explanation": "Outdated prices suggest the budget needs revision despite overall fundability.",
    "passage": "Advisor: “Your proposal is fundable, but the budget line for equipment assumes prices from 2019.”"
  },
  {
    "id": "toefl-hard-3",
    "skill": "Write for an Academic Discussion",
    "prompt": "Which reply contributes most to the discussion?",
    "choices": [
      "Cars have four wheels.",
      "Some critics argue congestion fees burden low-income commuters, yet targeted transit credits can offset that burden.",
      "Traffic exists in cities.",
      "Many people drive."
    ],
    "answer": 1,
    "explanation": "It states the opposition and previews a rebuttal.",
    "passage": "Professor: Introduces a counterargument paragraph in an essay supporting urban congestion pricing\n\nStudent A: I have a view, but I have not given a focused reason yet.\nStudent B: The strongest posts start with a clear claim and one concrete example."
  },
  {
    "id": "toefl-hard-4",
    "skill": "Take an Interview",
    "prompt": "Which response is strongest for a timed interview?",
    "choices": [
      "Yes/no without reasons.",
      "Position + one reason + brief example of what training would cover.",
      "A long personal story unrelated to ethics.",
      "Definitions only, no recommendation."
    ],
    "answer": 1,
    "explanation": "Timed speaking needs position, reason, and concrete detail.",
    "passage": "Interviewer: “Should universities require research ethics training?”"
  },
  {
    "id": "toefl-hard-5",
    "skill": "Read an Academic Passage",
    "prompt": "Which claim is supported?",
    "choices": [
      "Reforestation immediately restored full biodiversity.",
      "Canopy cover rose, but species richness had not recovered to earlier levels within eight years.",
      "Birds were unaffected by canopy change.",
      "The study lasted only one month."
    ],
    "answer": 1,
    "explanation": "Both the canopy gain and incomplete richness recovery are stated.",
    "passage": "A passage reports that reforestation increased canopy cover by 12% but did not restore pre-2000 bird species richness after eight years."
  },
  {
    "id": "toefl-hard-6",
    "skill": "Build a Sentence",
    "prompt": "Which option completes the sentence correctly?",
    "choices": [
      "has signed",
      "have signed",
      "signing",
      "signs"
    ],
    "answer": 1,
    "explanation": "With 'not only... but also', the verb agrees with the nearer plural subject (technicians).",
    "passage": "Build a sentence that matches the intended meaning.\nNot only the principal investigator but also the two lab technicians ___ the revised safety protocol."
  },
  {
    "id": "toefl-hard-7",
    "skill": "Write for an Academic Discussion",
    "prompt": "Which reply contributes most to the discussion?",
    "choices": [
      "Detectors are always accurate.",
      "Detectors may help flag drafts for conversation, but false positives mean instructors should not rely on them as sole evidence.",
      "Essays should be banned.",
      "AI does not exist."
    ],
    "answer": 1,
    "explanation": "Balanced policy with limitation on false positives.",
    "passage": "Professor: Should AI detectors be used to flag student essays? Which reply best acknowledges nuance\n\nStudent A: I have a view, but I have not given a focused reason yet.\nStudent B: The strongest posts start with a clear claim and one concrete example."
  },
  {
    "id": "toefl-hard-8",
    "skill": "Complete the Words",
    "prompt": "Select the letters that complete the word.",
    "choices": [
      "ve",
      "vi",
      "va",
      "vo"
    ],
    "answer": 0,
    "explanation": "The word is reconvene.",
    "passage": "The panel will recon___vene after peer reviewers submit comments."
  },
  {
    "id": "toefl-hard-9",
    "skill": "Listen to a Conversation",
    "prompt": "What should students listen for?",
    "choices": [
      "Speaker volume only",
      "Competing definitions of a key term",
      "Background music",
      "The date of the recording"
    ],
    "answer": 1,
    "explanation": "The preview targets definitional disagreement.",
    "passage": "Before a debate clip, the instructor: “Notice how each speaker defines ‘productivity’ differently.”"
  },
  {
    "id": "toefl-hard-10",
    "skill": "Read an Academic Passage",
    "prompt": "What is the best summary?",
    "choices": [
      "Meditation has no effect in any study.",
      "There is a modest stress reduction signal, but active controls suggest some benefit may come from expectations or general relaxation.",
      "All 22 studies used identical methods.",
      "Self-reports are always invalid."
    ],
    "answer": 1,
    "explanation": "Effect size plus shrinkage with active controls implies partial but uncertain benefit.",
    "passage": "Meta-analysis of 22 studies finds meditation reduces self-reported stress (d = 0.35) but effects shrink when active control groups are used."
  },
  {
    "id": "toefl-hard-11",
    "skill": "Listen to an Academic Talk",
    "prompt": "Which conclusion is most cautious?",
    "choices": [
      "The lab result proves the effect for everyone everywhere.",
      "The lab finding is suggestive, but self-selection limits generalization to broader populations.",
      "Self-selected samples always invalidate science.",
      "Field studies are unnecessary."
    ],
    "answer": 1,
    "explanation": "Significant lab finding + self-selection limitation supports cautious generalization.",
    "passage": "Professor: Researchers studying microplastics report a significant effect in the lab but note the field sample was self-selected."
  },
  {
    "id": "toefl-hard-12",
    "skill": "Read an Academic Passage",
    "prompt": "Which conclusion is most cautious?",
    "choices": [
      "The lab result proves the effect for everyone everywhere.",
      "The lab finding is suggestive, but self-selection limits generalization to broader populations.",
      "Self-selected samples always invalidate science.",
      "Field studies are unnecessary."
    ],
    "answer": 1,
    "explanation": "Significant lab finding + self-selection limitation supports cautious generalization.",
    "passage": "Researchers studying language attrition report a significant effect in the lab but note the field sample was self-selected."
  },
  {
    "id": "toefl-hard-13",
    "skill": "Listen to an Academic Talk",
    "prompt": "Which conclusion is most cautious?",
    "choices": [
      "The lab result proves the effect for everyone everywhere.",
      "The lab finding is suggestive, but self-selection limits generalization to broader populations.",
      "Self-selected samples always invalidate science.",
      "Field studies are unnecessary."
    ],
    "answer": 1,
    "explanation": "Significant lab finding + self-selection limitation supports cautious generalization.",
    "passage": "Professor: Researchers studying grid resilience report a significant effect in the lab but note the field sample was self-selected."
  },
  {
    "id": "toefl-hard-14",
    "skill": "Read an Academic Passage",
    "prompt": "Which conclusion is most cautious?",
    "choices": [
      "The lab result proves the effect for everyone everywhere.",
      "The lab finding is suggestive, but self-selection limits generalization to broader populations.",
      "Self-selected samples always invalidate science.",
      "Field studies are unnecessary."
    ],
    "answer": 1,
    "explanation": "Significant lab finding + self-selection limitation supports cautious generalization.",
    "passage": "Researchers studying clinical triage report a significant effect in the lab but note the field sample was self-selected."
  },
  {
    "id": "toefl-hard-15",
    "skill": "Listen to an Academic Talk",
    "prompt": "Which conclusion is most cautious?",
    "choices": [
      "The lab result proves the effect for everyone everywhere.",
      "The lab finding is suggestive, but self-selection limits generalization to broader populations.",
      "Self-selected samples always invalidate science.",
      "Field studies are unnecessary."
    ],
    "answer": 1,
    "explanation": "Significant lab finding + self-selection limitation supports cautious generalization.",
    "passage": "Professor: Researchers studying archive digitization report a significant effect in the lab but note the field sample was self-selected."
  },
  {
    "id": "toefl-hard-16",
    "skill": "Read an Academic Passage",
    "prompt": "Which conclusion is most cautious?",
    "choices": [
      "The lab result proves the effect for everyone everywhere.",
      "The lab finding is suggestive, but self-selection limits generalization to broader populations.",
      "Self-selected samples always invalidate science.",
      "Field studies are unnecessary."
    ],
    "answer": 1,
    "explanation": "Significant lab finding + self-selection limitation supports cautious generalization.",
    "passage": "Researchers studying peer tutoring report a significant effect in the lab but note the field sample was self-selected."
  },
  {
    "id": "toefl-hard-17",
    "skill": "Listen to an Academic Talk",
    "prompt": "Which conclusion is most cautious?",
    "choices": [
      "The lab result proves the effect for everyone everywhere.",
      "The lab finding is suggestive, but self-selection limits generalization to broader populations.",
      "Self-selected samples always invalidate science.",
      "Field studies are unnecessary."
    ],
    "answer": 1,
    "explanation": "Significant lab finding + self-selection limitation supports cautious generalization.",
    "passage": "Professor: Researchers studying heat adaptation report a significant effect in the lab but note the field sample was self-selected."
  },
  {
    "id": "toefl-hard-18",
    "skill": "Read an Academic Passage",
    "prompt": "Which conclusion is most cautious?",
    "choices": [
      "The lab result proves the effect for everyone everywhere.",
      "The lab finding is suggestive, but self-selection limits generalization to broader populations.",
      "Self-selected samples always invalidate science.",
      "Field studies are unnecessary."
    ],
    "answer": 1,
    "explanation": "Significant lab finding + self-selection limitation supports cautious generalization.",
    "passage": "Researchers studying invasive species report a significant effect in the lab but note the field sample was self-selected."
  },
  {
    "id": "toefl-hard-19",
    "skill": "Listen to an Academic Talk",
    "prompt": "Which conclusion is most cautious?",
    "choices": [
      "The lab result proves the effect for everyone everywhere.",
      "The lab finding is suggestive, but self-selection limits generalization to broader populations.",
      "Self-selected samples always invalidate science.",
      "Field studies are unnecessary."
    ],
    "answer": 1,
    "explanation": "Significant lab finding + self-selection limitation supports cautious generalization.",
    "passage": "Professor: Researchers studying open-access publishing report a significant effect in the lab but note the field sample was self-selected."
  },
  {
    "id": "toefl-hard-20",
    "skill": "Read an Academic Passage",
    "prompt": "Which conclusion is most cautious?",
    "choices": [
      "The lab result proves the effect for everyone everywhere.",
      "The lab finding is suggestive, but self-selection limits generalization to broader populations.",
      "Self-selected samples always invalidate science.",
      "Field studies are unnecessary."
    ],
    "answer": 1,
    "explanation": "Significant lab finding + self-selection limitation supports cautious generalization.",
    "passage": "Researchers studying sleep deprivation report a significant effect in the lab but note the field sample was self-selected."
  },
  {
    "id": "toefl-hard-21",
    "skill": "Listen to an Academic Talk",
    "prompt": "Which conclusion is most cautious?",
    "choices": [
      "The lab result proves the effect for everyone everywhere.",
      "The lab finding is suggestive, but self-selection limits generalization to broader populations.",
      "Self-selected samples always invalidate science.",
      "Field studies are unnecessary."
    ],
    "answer": 1,
    "explanation": "Significant lab finding + self-selection limitation supports cautious generalization.",
    "passage": "Professor: Researchers studying water rights report a significant effect in the lab but note the field sample was self-selected."
  },
  {
    "id": "toefl-hard-22",
    "skill": "Read an Academic Passage",
    "prompt": "Which conclusion is most cautious?",
    "choices": [
      "The lab result proves the effect for everyone everywhere.",
      "The lab finding is suggestive, but self-selection limits generalization to broader populations.",
      "Self-selected samples always invalidate science.",
      "Field studies are unnecessary."
    ],
    "answer": 1,
    "explanation": "Significant lab finding + self-selection limitation supports cautious generalization.",
    "passage": "Researchers studying algorithmic bias report a significant effect in the lab but note the field sample was self-selected."
  },
  {
    "id": "toefl-hard-23",
    "skill": "Listen to an Academic Talk",
    "prompt": "Which conclusion is most cautious?",
    "choices": [
      "The lab result proves the effect for everyone everywhere.",
      "The lab finding is suggestive, but self-selection limits generalization to broader populations.",
      "Self-selected samples always invalidate science.",
      "Field studies are unnecessary."
    ],
    "answer": 1,
    "explanation": "Significant lab finding + self-selection limitation supports cautious generalization.",
    "passage": "Professor: Researchers studying museum repatriation report a significant effect in the lab but note the field sample was self-selected."
  },
  {
    "id": "toefl-hard-24",
    "skill": "Read an Academic Passage",
    "prompt": "Which conclusion is most cautious?",
    "choices": [
      "The lab result proves the effect for everyone everywhere.",
      "The lab finding is suggestive, but self-selection limits generalization to broader populations.",
      "Self-selected samples always invalidate science.",
      "Field studies are unnecessary."
    ],
    "answer": 1,
    "explanation": "Significant lab finding + self-selection limitation supports cautious generalization.",
    "passage": "Researchers studying urban noise report a significant effect in the lab but note the field sample was self-selected."
  },
  {
    "id": "toefl-hard-25",
    "skill": "Listen to an Academic Talk",
    "prompt": "Which conclusion is most cautious?",
    "choices": [
      "The lab result proves the effect for everyone everywhere.",
      "The lab finding is suggestive, but self-selection limits generalization to broader populations.",
      "Self-selected samples always invalidate science.",
      "Field studies are unnecessary."
    ],
    "answer": 1,
    "explanation": "Significant lab finding + self-selection limitation supports cautious generalization.",
    "passage": "Professor: Researchers studying vaccine hesitancy report a significant effect in the lab but note the field sample was self-selected."
  },
  {
    "id": "toefl-hard-26",
    "skill": "Read an Academic Passage",
    "prompt": "Which conclusion is most cautious?",
    "choices": [
      "The lab result proves the effect for everyone everywhere.",
      "The lab finding is suggestive, but self-selection limits generalization to broader populations.",
      "Self-selected samples always invalidate science.",
      "Field studies are unnecessary."
    ],
    "answer": 1,
    "explanation": "Significant lab finding + self-selection limitation supports cautious generalization.",
    "passage": "Researchers studying carbon pricing report a significant effect in the lab but note the field sample was self-selected."
  },
  {
    "id": "toefl-hard-27",
    "skill": "Listen to an Academic Talk",
    "prompt": "Which conclusion is most cautious?",
    "choices": [
      "The lab result proves the effect for everyone everywhere.",
      "The lab finding is suggestive, but self-selection limits generalization to broader populations.",
      "Self-selected samples always invalidate science.",
      "Field studies are unnecessary."
    ],
    "answer": 1,
    "explanation": "Significant lab finding + self-selection limitation supports cautious generalization.",
    "passage": "Professor: Researchers studying child literacy report a significant effect in the lab but note the field sample was self-selected."
  },
  {
    "id": "toefl-hard-28",
    "skill": "Read an Academic Passage",
    "prompt": "Which conclusion is most cautious?",
    "choices": [
      "The lab result proves the effect for everyone everywhere.",
      "The lab finding is suggestive, but self-selection limits generalization to broader populations.",
      "Self-selected samples always invalidate science.",
      "Field studies are unnecessary."
    ],
    "answer": 1,
    "explanation": "Significant lab finding + self-selection limitation supports cautious generalization.",
    "passage": "Researchers studying remote sensing report a significant effect in the lab but note the field sample was self-selected."
  },
  {
    "id": "toefl-hard-29",
    "skill": "Listen to an Academic Talk",
    "prompt": "Which conclusion is most cautious?",
    "choices": [
      "The lab result proves the effect for everyone everywhere.",
      "The lab finding is suggestive, but self-selection limits generalization to broader populations.",
      "Self-selected samples always invalidate science.",
      "Field studies are unnecessary."
    ],
    "answer": 1,
    "explanation": "Significant lab finding + self-selection limitation supports cautious generalization.",
    "passage": "Professor: Researchers studying soil erosion report a significant effect in the lab but note the field sample was self-selected."
  },
  {
    "id": "toefl-hard-30",
    "skill": "Read an Academic Passage",
    "prompt": "Which conclusion is most cautious?",
    "choices": [
      "The lab result proves the effect for everyone everywhere.",
      "The lab finding is suggestive, but self-selection limits generalization to broader populations.",
      "Self-selected samples always invalidate science.",
      "Field studies are unnecessary."
    ],
    "answer": 1,
    "explanation": "Significant lab finding + self-selection limitation supports cautious generalization.",
    "passage": "Researchers studying wildfire smoke report a significant effect in the lab but note the field sample was self-selected."
  }
];

export const hardSatQuestions: EnglishPracticeQuestion[] = [
  {
    "id": "sat-hard-1",
    "skill": "Algebra",
    "prompt": "If 3(2x − 4) = 5x + 7, what is x?",
    "choices": [
      "5",
      "9",
      "19",
      "25"
    ],
    "answer": 2,
    "explanation": "Solve step by step; verify by substitution."
  },
  {
    "id": "sat-hard-2",
    "skill": "Algebra",
    "prompt": "If x² − 9 = 0, what is the positive value of x?",
    "choices": [
      "−3",
      "3",
      "9",
      "81"
    ],
    "answer": 1,
    "explanation": "Solve step by step; verify by substitution."
  },
  {
    "id": "sat-hard-3",
    "skill": "Algebra",
    "prompt": "What is the slope of 5x − 2y = 10?",
    "choices": [
      "−2.5",
      "2",
      "2.5",
      "5"
    ],
    "answer": 2,
    "explanation": "Solve step by step; verify by substitution."
  },
  {
    "id": "sat-hard-4",
    "skill": "Algebra",
    "prompt": "If f(x) = x² − 4x + 3, what is f(3)?",
    "choices": [
      "0",
      "3",
      "6",
      "12"
    ],
    "answer": 0,
    "explanation": "Solve step by step; verify by substitution."
  },
  {
    "id": "sat-hard-5",
    "skill": "Algebra",
    "prompt": "If 2x + 3y = 12 and x = 3, what is y?",
    "choices": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answer": 1,
    "explanation": "Solve step by step; verify by substitution."
  },
  {
    "id": "sat-hard-6",
    "skill": "Standard English Conventions",
    "prompt": "Which choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      "Reforms happened recently.",
      "Average outcomes rose 8%, but gap between highest- and lowest-income groups narrowed only 1 point.",
      "Some people support reforms.",
      "The topic is discussed in newspapers."
    ],
    "answer": 1,
    "explanation": "Improvement with a still-large disparity matches the nuanced claim.",
    "passage": "Which detail best supports a claim that renewable portfolio standards reforms improved outcomes without eliminating disparities?"
  },
  {
    "id": "sat-hard-7",
    "skill": "Expression of Ideas",
    "prompt": "Which choice best achieves the writer's goal?",
    "choices": [
      "Similarly",
      "However",
      "Therefore",
      "For instance"
    ],
    "answer": 1,
    "explanation": "Rural lack of change contrasts with pilot success.",
    "passage": "Writer's goal: revise the draft for a stated rhetorical goal.\nThe policy reduced emissions in pilot cities. ___, rural counties saw little change because infrastructure lagged."
  },
  {
    "id": "sat-hard-8",
    "skill": "Information and Ideas",
    "prompt": "Which choice is best supported by the text?",
    "choices": [
      "Reforms happened recently.",
      "Average outcomes rose 8%, but gap between highest- and lowest-income groups narrowed only 1 point.",
      "Some people support reforms.",
      "The topic is discussed in newspapers."
    ],
    "answer": 1,
    "explanation": "Improvement with a still-large disparity matches the nuanced claim.",
    "passage": "Which detail best supports a claim that antibiotic stewardship reforms improved outcomes without eliminating disparities?"
  },
  {
    "id": "sat-hard-9",
    "skill": "Craft and Structure",
    "prompt": "Which choice completes the text with the most logical and precise word or phrase?",
    "choices": [
      "Reforms happened recently.",
      "Average outcomes rose 8%, but gap between highest- and lowest-income groups narrowed only 1 point.",
      "Some people support reforms.",
      "The topic is discussed in newspapers."
    ],
    "answer": 1,
    "explanation": "Improvement with a still-large disparity matches the nuanced claim.",
    "passage": "Which detail best supports a claim that microfinance reforms improved outcomes without eliminating disparities?"
  },
  {
    "id": "sat-hard-10",
    "skill": "Craft and Structure",
    "prompt": "Which choice completes the text with the most logical and precise word or phrase?",
    "choices": [
      "measured",
      "hostile",
      "indifferent",
      "sarcastic"
    ],
    "answer": 0,
    "explanation": "Praise plus noted inequities suggests a measured, balanced tone.",
    "passage": "The author's tone toward coastal wetlands is best described as ___, praising progress while noting unresolved inequities."
  },
  {
    "id": "sat-hard-11",
    "skill": "Problem-Solving and Data Analysis",
    "prompt": "Which value or expression is correct?",
    "choices": [
      "Reforms happened recently.",
      "Average outcomes rose 8%, but gap between highest- and lowest-income groups narrowed only 1 point.",
      "Some people support reforms.",
      "The topic is discussed in newspapers."
    ],
    "answer": 1,
    "explanation": "Improvement with a still-large disparity matches the nuanced claim.",
    "passage": "Which detail best supports a claim that public transit ridership reforms improved outcomes without eliminating disparities?"
  },
  {
    "id": "sat-hard-12",
    "skill": "Expression of Ideas",
    "prompt": "Which choice best achieves the writer's goal?",
    "choices": [
      "Reforms happened recently.",
      "Average outcomes rose 8%, but gap between highest- and lowest-income groups narrowed only 1 point.",
      "Some people support reforms.",
      "The topic is discussed in newspapers."
    ],
    "answer": 1,
    "explanation": "Improvement with a still-large disparity matches the nuanced claim.",
    "passage": "Writer's goal: revise the draft for a stated rhetorical goal.\nDraft under revision: Reforms happened recently. Some people support reforms."
  },
  {
    "id": "sat-hard-13",
    "skill": "Information and Ideas",
    "prompt": "Which choice is best supported by the text?",
    "choices": [
      "Reforms happened recently.",
      "Average outcomes rose 8%, but gap between highest- and lowest-income groups narrowed only 1 point.",
      "Some people support reforms.",
      "The topic is discussed in newspapers."
    ],
    "answer": 1,
    "explanation": "Improvement with a still-large disparity matches the nuanced claim.",
    "passage": "Which detail best supports a claim that school start times reforms improved outcomes without eliminating disparities?"
  },
  {
    "id": "sat-hard-14",
    "skill": "Standard English Conventions",
    "prompt": "Which choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      "Reforms happened recently.",
      "Average outcomes rose 8%, but gap between highest- and lowest-income groups narrowed only 1 point.",
      "Some people support reforms.",
      "The topic is discussed in newspapers."
    ],
    "answer": 1,
    "explanation": "Improvement with a still-large disparity matches the nuanced claim.",
    "passage": "Which detail best supports a claim that food deserts reforms improved outcomes without eliminating disparities?"
  },
  {
    "id": "sat-hard-15",
    "skill": "Expression of Ideas",
    "prompt": "Which choice best achieves the writer's goal?",
    "choices": [
      "Similarly",
      "However",
      "Therefore",
      "For instance"
    ],
    "answer": 1,
    "explanation": "Rural lack of change contrasts with pilot success.",
    "passage": "Writer's goal: revise the draft for a stated rhetorical goal.\nThe policy reduced emissions in pilot cities. ___, rural counties saw little change because infrastructure lagged."
  },
  {
    "id": "sat-hard-16",
    "skill": "Information and Ideas",
    "prompt": "Which choice is best supported by the text?",
    "choices": [
      "Reforms happened recently.",
      "Average outcomes rose 8%, but gap between highest- and lowest-income groups narrowed only 1 point.",
      "Some people support reforms.",
      "The topic is discussed in newspapers."
    ],
    "answer": 1,
    "explanation": "Improvement with a still-large disparity matches the nuanced claim.",
    "passage": "Which detail best supports a claim that ocean acidification reforms improved outcomes without eliminating disparities?"
  },
  {
    "id": "sat-hard-17",
    "skill": "Craft and Structure",
    "prompt": "Which choice completes the text with the most logical and precise word or phrase?",
    "choices": [
      "Reforms happened recently.",
      "Average outcomes rose 8%, but gap between highest- and lowest-income groups narrowed only 1 point.",
      "Some people support reforms.",
      "The topic is discussed in newspapers."
    ],
    "answer": 1,
    "explanation": "Improvement with a still-large disparity matches the nuanced claim.",
    "passage": "Which detail best supports a claim that prison recidivism reforms improved outcomes without eliminating disparities?"
  },
  {
    "id": "sat-hard-18",
    "skill": "Craft and Structure",
    "prompt": "Which choice completes the text with the most logical and precise word or phrase?",
    "choices": [
      "measured",
      "hostile",
      "indifferent",
      "sarcastic"
    ],
    "answer": 0,
    "explanation": "Praise plus noted inequities suggests a measured, balanced tone.",
    "passage": "The author's tone toward quantum computing hype is best described as ___, praising progress while noting unresolved inequities."
  },
  {
    "id": "sat-hard-19",
    "skill": "Problem-Solving and Data Analysis",
    "prompt": "Which value or expression is correct?",
    "choices": [
      "Reforms happened recently.",
      "Average outcomes rose 8%, but gap between highest- and lowest-income groups narrowed only 1 point.",
      "Some people support reforms.",
      "The topic is discussed in newspapers."
    ],
    "answer": 1,
    "explanation": "Improvement with a still-large disparity matches the nuanced claim.",
    "passage": "Which detail best supports a claim that rural broadband reforms improved outcomes without eliminating disparities?"
  },
  {
    "id": "sat-hard-20",
    "skill": "Expression of Ideas",
    "prompt": "Which choice best achieves the writer's goal?",
    "choices": [
      "Reforms happened recently.",
      "Average outcomes rose 8%, but gap between highest- and lowest-income groups narrowed only 1 point.",
      "Some people support reforms.",
      "The topic is discussed in newspapers."
    ],
    "answer": 1,
    "explanation": "Improvement with a still-large disparity matches the nuanced claim.",
    "passage": "Writer's goal: revise the draft for a stated rhetorical goal.\nDraft under revision: Reforms happened recently. Some people support reforms."
  },
  {
    "id": "sat-hard-21",
    "skill": "Information and Ideas",
    "prompt": "Which choice is best supported by the text?",
    "choices": [
      "Reforms happened recently.",
      "Average outcomes rose 8%, but gap between highest- and lowest-income groups narrowed only 1 point.",
      "Some people support reforms.",
      "The topic is discussed in newspapers."
    ],
    "answer": 1,
    "explanation": "Improvement with a still-large disparity matches the nuanced claim.",
    "passage": "Which detail best supports a claim that urban heat islands reforms improved outcomes without eliminating disparities?"
  },
  {
    "id": "sat-hard-22",
    "skill": "Standard English Conventions",
    "prompt": "Which choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      "Reforms happened recently.",
      "Average outcomes rose 8%, but gap between highest- and lowest-income groups narrowed only 1 point.",
      "Some people support reforms.",
      "The topic is discussed in newspapers."
    ],
    "answer": 1,
    "explanation": "Improvement with a still-large disparity matches the nuanced claim.",
    "passage": "Which detail best supports a claim that voting access reforms improved outcomes without eliminating disparities?"
  },
  {
    "id": "sat-hard-23",
    "skill": "Expression of Ideas",
    "prompt": "Which choice best achieves the writer's goal?",
    "choices": [
      "Similarly",
      "However",
      "Therefore",
      "For instance"
    ],
    "answer": 1,
    "explanation": "Rural lack of change contrasts with pilot success.",
    "passage": "Writer's goal: revise the draft for a stated rhetorical goal.\nThe policy reduced emissions in pilot cities. ___, rural counties saw little change because infrastructure lagged."
  },
  {
    "id": "sat-hard-24",
    "skill": "Information and Ideas",
    "prompt": "Which choice is best supported by the text?",
    "choices": [
      "Reforms happened recently.",
      "Average outcomes rose 8%, but gap between highest- and lowest-income groups narrowed only 1 point.",
      "Some people support reforms.",
      "The topic is discussed in newspapers."
    ],
    "answer": 1,
    "explanation": "Improvement with a still-large disparity matches the nuanced claim.",
    "passage": "Which detail best supports a claim that youth mental health reforms improved outcomes without eliminating disparities?"
  },
  {
    "id": "sat-hard-25",
    "skill": "Craft and Structure",
    "prompt": "Which choice completes the text with the most logical and precise word or phrase?",
    "choices": [
      "Reforms happened recently.",
      "Average outcomes rose 8%, but gap between highest- and lowest-income groups narrowed only 1 point.",
      "Some people support reforms.",
      "The topic is discussed in newspapers."
    ],
    "answer": 1,
    "explanation": "Improvement with a still-large disparity matches the nuanced claim.",
    "passage": "Which detail best supports a claim that zero-waste policies reforms improved outcomes without eliminating disparities?"
  },
  {
    "id": "sat-hard-26",
    "skill": "Craft and Structure",
    "prompt": "Which choice completes the text with the most logical and precise word or phrase?",
    "choices": [
      "measured",
      "hostile",
      "indifferent",
      "sarcastic"
    ],
    "answer": 0,
    "explanation": "Praise plus noted inequities suggests a measured, balanced tone.",
    "passage": "The author's tone toward affordable housing is best described as ___, praising progress while noting unresolved inequities."
  },
  {
    "id": "sat-hard-27",
    "skill": "Problem-Solving and Data Analysis",
    "prompt": "Which value or expression is correct?",
    "choices": [
      "Reforms happened recently.",
      "Average outcomes rose 8%, but gap between highest- and lowest-income groups narrowed only 1 point.",
      "Some people support reforms.",
      "The topic is discussed in newspapers."
    ],
    "answer": 1,
    "explanation": "Improvement with a still-large disparity matches the nuanced claim.",
    "passage": "Which detail best supports a claim that carbon capture reforms improved outcomes without eliminating disparities?"
  },
  {
    "id": "sat-hard-28",
    "skill": "Expression of Ideas",
    "prompt": "Which choice best achieves the writer's goal?",
    "choices": [
      "Reforms happened recently.",
      "Average outcomes rose 8%, but gap between highest- and lowest-income groups narrowed only 1 point.",
      "Some people support reforms.",
      "The topic is discussed in newspapers."
    ],
    "answer": 1,
    "explanation": "Improvement with a still-large disparity matches the nuanced claim.",
    "passage": "Writer's goal: revise the draft for a stated rhetorical goal.\nDraft under revision: Reforms happened recently. Some people support reforms."
  },
  {
    "id": "sat-hard-29",
    "skill": "Information and Ideas",
    "prompt": "Which choice is best supported by the text?",
    "choices": [
      "Reforms happened recently.",
      "Average outcomes rose 8%, but gap between highest- and lowest-income groups narrowed only 1 point.",
      "Some people support reforms.",
      "The topic is discussed in newspapers."
    ],
    "answer": 1,
    "explanation": "Improvement with a still-large disparity matches the nuanced claim.",
    "passage": "Which detail best supports a claim that elder care reforms improved outcomes without eliminating disparities?"
  },
  {
    "id": "sat-hard-30",
    "skill": "Standard English Conventions",
    "prompt": "Which choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      "Reforms happened recently.",
      "Average outcomes rose 8%, but gap between highest- and lowest-income groups narrowed only 1 point.",
      "Some people support reforms.",
      "The topic is discussed in newspapers."
    ],
    "answer": 1,
    "explanation": "Improvement with a still-large disparity matches the nuanced claim.",
    "passage": "Which detail best supports a claim that film preservation reforms improved outcomes without eliminating disparities?"
  }
];
