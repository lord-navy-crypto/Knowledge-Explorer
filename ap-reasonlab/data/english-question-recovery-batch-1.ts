import type { EnglishPracticeQuestion } from "./english-content";

/**
 * Audited English recovery batch 1.
 * Replaces shallow legacy items in place while preserving stable ids.
 */
export const recoveredEnglishItemsBatch1: Record<string, EnglishPracticeQuestion> = {
  "toefl-curated-1": {
    id: "toefl-curated-1",
    skill: "Read an Academic Passage",
    taskType: "Read an Academic Passage",
    authenticity: "exam_authentic",
    responseMode: "single_choice",
    passage:
      "A university compared two introductory biology sections taught by the same instructor. In one section, 84 students completed four 25-minute review sessions distributed across two weeks. In the other, 79 students completed one 100-minute review session the evening before the unit test. Immediate-test means differed by only 1.8 percentage points, but four weeks later the distributed-practice group averaged 76% on an unannounced retention test compared with 63% for the cramming group. Students were allowed to choose their section at registration, and the researchers did not measure prior study habits.",
    prompt:
      "Which conclusion is best supported by the study while also accounting for the design limitation?",
    choices: [
      "Distributed practice caused the 13-point retention advantage because the two sections differed only in review schedule.",
      "Distributed practice was associated with stronger delayed retention, although self-selection means the study does not by itself establish causation.",
      "Cramming is ineffective for immediate learning because the cramming group scored substantially lower on the unit test.",
      "Prior study habits cannot explain any of the delayed-score difference because both sections had the same instructor."
    ],
    answer: 1,
    explanation:
      "The delayed scores favor distributed review, but students self-selected into sections and prior study habits were not controlled. That supports an association, not a clean causal claim."
  },
  "toefl-curated-2": {
    id: "toefl-curated-2",
    skill: "Listen to an Academic Talk",
    taskType: "Academic Talk",
    authenticity: "exam_authentic",
    responseMode: "single_choice",
    passage:
      "Professor: ‘Your claim about urban heat islands is specific, and the satellite-temperature comparison is useful. Right now, though, the paragraph lists three studies one after another. Before your next draft, explain what each study contributes to the same line of reasoning, and tell the reader why the tree-canopy result matters after the pavement result.’",
    prompt: "What revision is the professor primarily asking the student to make?",
    choices: [
      "Replace the satellite evidence with a personal example.",
      "Connect the evidence explicitly so the studies function as parts of one argument rather than as a list.",
      "Remove the central claim because the evidence comes from different studies.",
      "Add more studies before explaining the evidence already included."
    ],
    answer: 1,
    explanation:
      "The professor does not ask for more evidence; the problem is integration. The student must explain the relationship among the existing studies and how each advances the claim."
  },
  "toefl-curated-3": {
    id: "toefl-curated-3",
    skill: "Write for an Academic Discussion",
    taskType: "Academic Discussion",
    authenticity: "exam_authentic",
    responseMode: "academic_discussion",
    passage:
      "Professor: Cities often have limited transportation budgets. Should a city prioritize protected bicycle lanes or additional bus frequency when it cannot fully fund both?\n\nStudent A: Protected lanes can make short trips safer and may reduce car use.\n\nStudent B: More frequent buses may help people who cannot bike because of distance, disability, weather, or age.",
    prompt:
      "Write a contribution to the discussion. Take a position, respond to at least one idea already raised, and support your view with a specific reason or example.",
    choices: [],
    answer: 0,
    referenceAnswer:
      "I would prioritize additional bus frequency first, although protected bike lanes are valuable. Student A is right that safe cycling can replace some short car trips, but Student B identifies a broader access issue: buses serve riders who cannot reasonably bike. For example, increasing a route from every 30 minutes to every 15 minutes can make commuting practical for workers with fixed shift times. A city could then target lower-cost protected lanes on the corridors where cycling demand is already highest.",
    scoringGuide: [
      "States a clear position that directly answers the professor's question.",
      "Engages meaningfully with at least one student's contribution rather than ignoring the discussion.",
      "Develops the position with a specific, relevant reason or example.",
      "Uses coherent, sufficiently controlled English for the ideas to be easy to follow."
    ],
    explanation:
      "A strong Academic Discussion response advances the conversation: it takes a defensible position, connects to an existing contribution, and develops the reasoning with concrete support."
  },
  "toefl-curated-4": {
    id: "toefl-curated-4",
    skill: "Take an Interview",
    taskType: "Take an Interview",
    authenticity: "exam_authentic",
    responseMode: "spoken",
    passage:
      "Interviewer: ‘Some universities require every first-year student to take a writing seminar, even students majoring in mathematics, engineering, or the natural sciences. Do you think such a course should be required? Explain your view.’",
    prompt:
      "Give a focused spoken response. State your position, develop at least two connected reasons, and include a concrete example or consequence.",
    choices: [],
    answer: 0,
    referenceAnswer:
      "Yes. I think a first-year writing seminar should be required because clear writing is part of nearly every academic field, not only the humanities. Engineering students, for example, still have to explain design choices and communicate results to people who did not perform the calculations themselves. A common seminar can also teach students how to use evidence and revise an argument before those skills are assumed in advanced courses. The course should allow discipline-specific topics so that the requirement supports, rather than competes with, a student's major.",
    scoringGuide: [
      "Answers the question with a clear and sustained position.",
      "Develops at least two connected reasons rather than listing disconnected claims.",
      "Uses a specific example or consequence to extend the explanation.",
      "Speech or transcript is coherent and understandable with appropriate vocabulary and sentence control."
    ],
    explanation:
      "The interview task requires an original spoken response, not recognition of a prewritten option. Strong answers sustain a position and develop it with connected support."
  },
  "toefl-curated-5": {
    id: "toefl-curated-5",
    skill: "Read an Academic Passage",
    taskType: "Read an Academic Passage",
    authenticity: "exam_authentic",
    responseMode: "single_choice",
    passage:
      "Ecologists monitored a restored coastal wetland for five years. The number of regularly observed bird species rose from 41 before restoration to 50 in year five, while the mean abundance of marsh-dependent birds increased by 17%. Historical surveys from the late 1980s, however, recorded 58 species and substantially larger areas of mature marsh vegetation. The researchers note that nearby urban development continued throughout the monitoring period.",
    prompt: "Which statement most accurately synthesizes the evidence?",
    choices: [
      "Restoration returned the wetland to its historical ecological condition within five years.",
      "Several biodiversity indicators improved after restoration, but the site had not fully returned to the earlier baseline.",
      "Urban development prevented any measurable ecological improvement at the site.",
      "The increase in species count proves that mature marsh vegetation recovered to its 1980s extent."
    ],
    answer: 1,
    explanation:
      "Both species count and marsh-bird abundance improved, but the historical species count and vegetation condition were still higher. The evidence therefore supports partial, not complete, recovery."
  },
  "toefl-curated-6": {
    id: "toefl-curated-6",
    skill: "Build a Sentence",
    taskType: "Build a Sentence",
    authenticity: "exam_authentic",
    responseMode: "sentence_build",
    passage:
      "The committee reviewed three independent audits before reaching a final decision. Use all of the following idea units to build one grammatical sentence: [after reviewing three independent audits] [the committee] [finalized] [its recommendation].",
    prompt: "Build the sentence so that the time relationship and main clause are grammatically clear.",
    choices: [],
    answer: 0,
    referenceAnswer: "After reviewing three independent audits, the committee finalized its recommendation.",
    scoringGuide: [
      "Uses all required idea units without changing the intended meaning.",
      "Places the introductory modifying phrase so that it clearly modifies the committee.",
      "Produces a complete grammatical sentence with appropriate punctuation."
    ],
    explanation:
      "The introductory participial phrase logically modifies ‘the committee,’ and the completed past action takes the finite verb ‘finalized.’"
  },
  "toefl-curated-7": {
    id: "toefl-curated-7",
    skill: "Write for an Academic Discussion",
    taskType: "Academic Discussion",
    authenticity: "exam_authentic",
    responseMode: "academic_discussion",
    passage:
      "Professor: Generative AI tools can suggest wording, summarize sources, and produce draft paragraphs. In a first-year composition course, should students be allowed to use such tools during graded writing?\n\nStudent A: A total ban is unrealistic because students will encounter these tools outside class.\n\nStudent B: If AI produces too much of the draft, instructors may no longer be evaluating the student's own writing decisions.",
    prompt:
      "Write a contribution that takes a position, responds to the tension identified by the students, and proposes at least one workable boundary for classroom use.",
    choices: [],
    answer: 0,
    referenceAnswer:
      "Students should be allowed to use AI for limited support, but the course should preserve stages where the student's own reasoning is visible. Student A is right that learning responsible use is more realistic than pretending the tools do not exist, while Student B is right that unrestricted generation can hide who made the important writing decisions. I would allow brainstorming and sentence-level feedback but require students to submit an outline and a revision note explaining any AI-assisted changes. That policy teaches tool literacy while still giving instructors evidence of the student's reasoning.",
    scoringGuide: [
      "Takes a clear position on AI use in graded writing.",
      "Responds meaningfully to the competing concerns already raised.",
      "Proposes at least one concrete and workable classroom boundary.",
      "Develops the reasoning coherently with sufficient language control."
    ],
    explanation:
      "The strongest response does more than state a preference: it engages the existing disagreement and develops a specific policy that addresses both learning and authorship concerns."
  },
  "toefl-curated-8": {
    id: "toefl-curated-8",
    skill: "Complete the Words",
    taskType: "Complete the Words",
    authenticity: "exam_authentic",
    responseMode: "single_choice",
    passage:
      "Archaeologists initially dated the wooden tool from its surrounding sediment, but later disturbance may have moved the object between layers. Because of that uncertainty, the team could not con___ the proposed age until direct radiocarbon testing was completed.",
    prompt: "Which letters correctly complete the missing word in context?",
    choices: ["firm", "form", "cern", "vert"],
    answer: 0,
    explanation:
      "The context requires ‘confirm,’ meaning verify with additional evidence. The surrounding sentence explains why direct testing was needed before the age could be accepted."
  },
  "toefl-curated-9": {
    id: "toefl-curated-9",
    skill: "Listen to an Academic Talk",
    taskType: "Academic Talk",
    authenticity: "exam_authentic",
    responseMode: "single_choice",
    passage:
      "Professor: ‘Up to this point, we have treated enzyme kinetics mainly with equations. Next week, you will design a small experiment in teams. Before class, bring a draft procedure that identifies the independent variable, the response you will measure, and at least one factor you will hold constant. We will use the first twenty minutes to compare designs before anyone starts collecting data.’",
    prompt: "Why does the professor mention the three elements students should include in their draft procedure?",
    choices: [
      "To test whether students memorized the definitions of experimental variables",
      "To prepare students to evaluate and refine experimental designs before data collection",
      "To replace the upcoming laboratory experiment with a written assignment",
      "To show that mathematical models are no longer relevant to enzyme kinetics"
    ],
    answer: 1,
    explanation:
      "The professor is setting up a transition from theory to experimental design and wants students prepared for design comparison before data collection begins."
  },
  "toefl-curated-10": {
    id: "toefl-curated-10",
    skill: "Read in Daily Life",
    taskType: "Read in Daily Life",
    authenticity: "exam_authentic",
    responseMode: "single_choice",
    passage:
      "CITY TRANSIT NOTICE — The six-month Saturday fare-free pilot increased weekend boardings by 18% systemwide. Because additional service hours and cleaning raised operating costs by 11%, the transit authority will not extend fare-free travel to weekdays this year. Instead, Saturday fares will remain free for another six months while the authority tests whether higher ridership persists after a new bus-priority corridor opens.",
    prompt: "Why will the authority continue the Saturday program but not expand it to weekdays yet?",
    choices: [
      "Weekend ridership fell, so the authority wants more time to identify the cause.",
      "The pilot increased ridership, but higher operating costs led the authority to gather more evidence before a broader expansion.",
      "The authority concluded that fare-free transit has no effect on ridership when bus-priority lanes are present.",
      "Weekday service is already fare-free, so expansion would have no practical effect."
    ],
    answer: 1,
    explanation:
      "The notice presents a trade-off: ridership increased, but costs also rose. The authority therefore continues a limited test while postponing a larger commitment."
  },
  "sat-curated-1": {
    id: "sat-curated-1",
    skill: "Standard English Conventions",
    authenticity: "exam_authentic",
    responseMode: "single_choice",
    passage:
      "The field team had expected the newly installed sensor network to eliminate most gaps in the record, ___ several units lost power during the storm, leaving the researchers with less continuous data than anticipated.",
    prompt: "Which choice completes the text so that it conforms to the conventions of Standard English and expresses the logical relationship between the clauses?",
    choices: ["and", "but", "so", "for"],
    answer: 1,
    explanation:
      "The second independent clause contrasts with the expectation established in the first: the network was expected to reduce gaps, but power failures created gaps."
  },
  "sat-curated-2": {
    id: "sat-curated-2",
    skill: "Expression of Ideas",
    authenticity: "exam_authentic",
    responseMode: "single_choice",
    passage:
      "A prototype water filter removed more than 95% of the target contaminant in controlled laboratory trials. In a field test using river water, suspended sediment clogged the filter media within several hours. ___, the engineers redesigned the inlet to remove larger particles before they reached the filter.",
    prompt: "Which choice completes the text with the most logical transition?",
    choices: ["Similarly", "However", "Consequently", "For example"],
    answer: 2,
    explanation:
      "The redesign is a consequence of the clogging problem identified in the preceding sentence, so ‘Consequently’ expresses the required cause-and-effect relationship."
  },
  "sat-curated-3": {
    id: "sat-curated-3",
    skill: "Information and Ideas",
    authenticity: "exam_authentic",
    responseMode: "single_choice",
    passage:
      "An energy report gives the following shares of annual electricity generation.\n2014: renewable 12%, coal 39%, natural gas 27%.\n2024: renewable 22%, coal 16%, natural gas 35%.\nTotal electricity generation was 8% higher in 2024 than in 2014.",
    prompt: "Which statement is best supported by the data?",
    choices: [
      "Coal-generated electricity necessarily fell by exactly 23% in absolute amount.",
      "Renewables gained generation share while coal lost share, even though total generation increased.",
      "Natural-gas generation declined because its share remained below 40% in both years.",
      "The increase in renewable share proves that every renewable source generated more electricity in 2024."
    ],
    answer: 1,
    explanation:
      "The percentages directly establish the change in shares, and the total-generation note prevents treating percentage-point changes as identical to changes in absolute generation."
  },
  "sat-curated-4": {
    id: "sat-curated-4",
    skill: "Algebra",
    authenticity: "exam_authentic",
    responseMode: "single_choice",
    passage:
      "A laboratory rents a temperature-controlled chamber for a fixed setup fee plus a constant hourly charge. A 5-hour rental costs $235, and an 11-hour rental costs $397. Let C(h) represent the total cost, in dollars, for h hours.",
    prompt: "Which equation represents C(h)?",
    choices: [
      "C(h) = 27h + 100",
      "C(h) = 27h + 127",
      "C(h) = 32.4h + 73",
      "C(h) = 162h + 73"
    ],
    answer: 0,
    explanation:
      "The hourly rate is (397−235)/(11−5)=27 dollars per hour. Substituting h=5 gives 235=27(5)+b, so b=100 and C(h)=27h+100."
  },
  "sat-curated-5": {
    id: "sat-curated-5",
    skill: "Craft and Structure",
    authenticity: "exam_authentic",
    responseMode: "single_choice",
    passage:
      "In a memo to employees, the director described the first phase of the reorganization as ‘promising but provisional,’ emphasizing that the observed productivity gains came from only two teams and might not persist after the pilot period.",
    prompt: "As used in the text, ‘provisional’ most nearly means",
    choices: ["temporary and subject to revision", "insincere", "highly detailed", "unanimously approved"],
    answer: 0,
    explanation:
      "The director treats the early result as not yet final because it comes from a limited pilot and may change with more evidence. In context, ‘provisional’ means temporary or tentative."
  },
  "sat-curated-6": {
    id: "sat-curated-6",
    skill: "Algebra",
    authenticity: "exam_authentic",
    responseMode: "single_choice",
    passage:
      "A sensor is calibrated so that its reported value y changes linearly with the reference value x. When x=2, the sensor reports y=7. When x=8, it reports y=−11.",
    prompt: "Which equation gives the sensor's reported value y in terms of x?",
    choices: [
      "y = −3x + 13",
      "y = 3x + 1",
      "y = −3x − 1",
      "y = −2x + 11"
    ],
    answer: 0,
    explanation:
      "The slope is (−11−7)/(8−2)=−3. Using (2,7), 7=−3(2)+b gives b=13, so y=−3x+13."
  },
  "sat-curated-7": {
    id: "sat-curated-7",
    skill: "Craft and Structure",
    authenticity: "exam_authentic",
    responseMode: "single_choice",
    passage:
      "Reviewing a proposed flood barrier, an engineer writes that the design ‘would reduce risk in moderate storms, but calling it a complete solution would ignore the possibility of rarer, higher storm surges.’",
    prompt: "Which choice best describes the function of the quoted statement in the engineer's argument?",
    choices: [
      "It rejects the flood barrier because the design provides no measurable benefit.",
      "It acknowledges a benefit while limiting the scope of the claim that can reasonably be made for the design.",
      "It introduces historical evidence about earlier flood barriers.",
      "It argues that rare storms should be excluded from engineering analysis."
    ],
    answer: 1,
    explanation:
      "The engineer concedes that the barrier reduces risk under some conditions but warns against generalizing that benefit to more extreme conditions."
  },
  "sat-curated-8": {
    id: "sat-curated-8",
    skill: "Problem-Solving and Data Analysis",
    authenticity: "exam_authentic",
    responseMode: "single_choice",
    passage:
      "A library recorded monthly visits after extending weekend hours. March: 8,200; April: 8,600; May: 8,550; June: 9,100; July: 9,450; August: 9,300.",
    prompt: "Which statement is best supported by the table?",
    choices: [
      "Visits increased every month from March through August.",
      "August had the greatest number of visits.",
      "Despite two month-to-month declines, visits were higher in August than in March.",
      "The extended weekend hours caused the overall increase in visits."
    ],
    answer: 2,
    explanation:
      "May is lower than April and August is lower than July, so the increase is not monotonic. Still, August exceeds March. The table alone also cannot establish causation."
  },
  "sat-curated-9": {
    id: "sat-curated-9",
    skill: "Expression of Ideas",
    authenticity: "exam_authentic",
    responseMode: "single_choice",
    passage:
      "A draft report states: ‘In one suburban high school, students who attended an optional morning tutoring program earned higher mean algebra scores than students who did not attend. Participation was voluntary, and the study did not measure students' prior achievement.’ The writer wants to add a sentence that accurately limits the scope of the finding.",
    prompt: "Which choice best accomplishes the writer's goal?",
    choices: [
      "The tutoring program therefore raises algebra scores for students in every type of school.",
      "Because the study involved one school and voluntary participation, the result may not generalize broadly or establish that tutoring caused the score difference.",
      "Students in suburban schools usually take algebra before graduation.",
      "The researchers should remove the score data because observational studies cannot provide useful evidence."
    ],
    answer: 1,
    explanation:
      "The chosen sentence identifies both major limitations: one-school scope constrains generalization, and self-selection prevents a clean causal conclusion."
  },
  "sat-curated-10": {
    id: "sat-curated-10",
    skill: "Information and Ideas",
    authenticity: "exam_authentic",
    responseMode: "single_choice",
    passage:
      "A neighborhood study found that residents living within a ten-minute walk of a community garden reported an average of 3.4 new neighborhood contacts during the previous six months, compared with 1.9 among residents farther away. The researchers caution that people who value neighborhood interaction may be more likely to choose housing near shared public spaces.",
    prompt: "Which statement best uses the study as evidence without exceeding what the design supports?",
    choices: [
      "Community gardens cause every nearby resident to form at least one new friendship.",
      "Living near a community garden was associated with reporting more new neighborhood contacts, although self-selection could contribute to the difference.",
      "The study proves that distance from a garden is the only factor affecting neighborhood interaction.",
      "Residents farther from gardens had no neighborhood contacts during the study period."
    ],
    answer: 1,
    explanation:
      "The numerical comparison supports an association, while the researchers' caution means a causal claim would overstate the evidence."
  }
};
