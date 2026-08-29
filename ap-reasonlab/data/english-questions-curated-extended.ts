/** Curated-extended bank — rewritten into official TOEFL iBT / Digital SAT task shape. */
import type { EnglishPracticeQuestion } from "./english-content";

export const curatedExtendedToeflQuestions: EnglishPracticeQuestion[] = [
  {
    "id": "toefl-curated-ext-1",
    "skill": "Read an Academic Passage",
    "prompt": "Which conclusion is best supported?",
    "choices": [
      "Sleeping exactly 8 hours guarantees a 4.0 GPA.",
      "More sleep was associated with higher GPA in this sample, but course load was not controlled.",
      "Course load has no effect on academic performance.",
      "The study proves sleep causes GPA changes in all populations."
    ],
    "answer": 1,
    "explanation": "The passage supports a correlation within the sample while noting an uncontrolled variable.",
    "passage": "A longitudinal study tracked sleep hours and GPA among first-year students. Students sleeping 7–8 hours averaged higher GPAs than those sleeping under 6 hours, but the study did not control for course load."
  },
  {
    "id": "toefl-curated-ext-2",
    "skill": "Listen to a Conversation",
    "prompt": "What can the student infer?",
    "choices": [
      "The book is freely available for checkout all semester.",
      "The student may use the book inside the library for a limited time only.",
      "Reserve books are never accessible to students.",
      "The library does not own the book."
    ],
    "answer": 1,
    "explanation": "On reserve implies in-library use with a time limit, not full checkout.",
    "passage": "A librarian tells a student, “That edition is on reserve, so you can read it in the library for two hours but can’t take it home.”"
  },
  {
    "id": "toefl-curated-ext-3",
    "skill": "Listen to a Conversation",
    "prompt": "What is the instructor asking students to notice?",
    "choices": [
      "The speaker’s volume level",
      "How the speaker limits or adjusts the strength of the claim",
      "The speaker’s hometown",
      "Whether the clip includes background music"
    ],
    "answer": 1,
    "explanation": "Qualifying a claim means adding nuance, limits, or conditions.",
    "passage": "Before playing an audio clip, an instructor: “Pay attention to how the speaker qualifies her main claim at the end.”"
  },
  {
    "id": "toefl-curated-ext-4",
    "skill": "Write for an Academic Discussion",
    "prompt": "Which reply contributes most to the discussion?",
    "choices": [
      "Tuition exists at many universities.",
      "Because rising tuition strains low-income families, policymakers have expanded need-based grant programs.",
      "Students often study in libraries.",
      "Financial aid is a topic people discuss."
    ],
    "answer": 1,
    "explanation": "It links the problem (tuition) to the next focus (aid reforms).",
    "passage": "Professor: This week's question is about rising tuition to a paragraph about financial-aid reforms. Take a position.\n\nStudent A: I have a view, but I have not given a focused reason yet.\nStudent B: The strongest posts start with a clear claim and one concrete example."
  },
  {
    "id": "toefl-curated-ext-5",
    "skill": "Take an Interview",
    "prompt": "Which response is strongest for a timed interview?",
    "choices": [
      "Transit is vehicles that move people.",
      "Yes — discounted student fares can reduce commute costs and encourage regular attendance.",
      "I have taken a bus before.",
      "Maybe yes, maybe no, it depends on many factors without saying which."
    ],
    "answer": 1,
    "explanation": "Clear position plus a concrete reason suitable for a timed speaking task.",
    "passage": "Interviewer: “Should cities subsidize public transit for students?”"
  },
  {
    "id": "toefl-curated-ext-6",
    "skill": "Read an Academic Passage",
    "prompt": "Which claim is supported?",
    "choices": [
      "All coral reefs permanently died by 2020.",
      "Bleaching became more frequent, yet recovery was possible when conditions improved.",
      "Water temperature never affects coral.",
      "Recovery always takes at least ten years."
    ],
    "answer": 1,
    "explanation": "Both the increase in bleaching and conditional recovery are explicitly stated.",
    "passage": "A passage states that coral bleaching events doubled between 2010 and 2020 but that some reefs recovered within three years when water temperatures normalized."
  },
  {
    "id": "toefl-curated-ext-7",
    "skill": "Build a Sentence",
    "prompt": "Which option completes the sentence correctly?",
    "choices": [
      "has approved",
      "have approved",
      "approving",
      "approve"
    ],
    "answer": 0,
    "explanation": "With neither/nor, the verb agrees with the nearer subject (investigator → has).",
    "passage": "Build a sentence that matches the intended meaning.\nNeither the lab assistant nor the principal investigator ___ the revised protocol yet."
  },
  {
    "id": "toefl-curated-ext-8",
    "skill": "Write for an Academic Discussion",
    "prompt": "Which reply contributes most to the discussion?",
    "choices": [
      "Colonialism was bad.",
      "Museums should prioritize repatriation when source communities request return and provenance shows coercive acquisition, while digitizing items for global study when physical return is impossible.",
      "Artifacts are old.",
      "I visited a museum once."
    ],
    "answer": 1,
    "explanation": "It states a nuanced policy with conditions and an alternative.",
    "passage": "Professor: Take a position on whether museums should return artifacts obtained during colonial periods.\n\nStudent A: I have a view, but I have not given a focused reason yet.\nStudent B: The strongest posts start with a clear claim and one concrete example."
  },
  {
    "id": "toefl-curated-ext-9",
    "skill": "Complete the Words",
    "prompt": "Select the letters that complete the word.",
    "choices": [
      "ve",
      "vi",
      "va",
      "vo"
    ],
    "answer": 0,
    "explanation": "The complete word is reconvene.",
    "passage": "The committee will recon___vene after the audit to review the findings."
  },
  {
    "id": "toefl-curated-ext-10",
    "skill": "Read an Academic Passage",
    "prompt": "Which inference is best supported?",
    "choices": [
      "Typing notes always produces the worst learning outcomes.",
      "Note format may relate differently to conceptual vs verbatim retention.",
      "Students should never type notes.",
      "The study measured only typing speed."
    ],
    "answer": 1,
    "explanation": "The passage contrasts two associated outcomes without absolute rules.",
    "passage": "Researchers compared handwritten and typed lecture notes. Handwritten notes correlated with better conceptual recall; typed notes correlated with more verbatim detail."
  },
  {
    "id": "toefl-curated-ext-11",
    "skill": "Listen to an Academic Talk",
    "prompt": "What is implied?",
    "choices": [
      "The paper is rejected permanently.",
      "The core argument is strong, but a specific figure must be corrected.",
      "Figure 2 should be deleted entirely.",
      "The reviewer did not read the paper."
    ],
    "answer": 1,
    "explanation": "Praise for the argument plus a concrete revision request implies conditional acceptance.",
    "passage": "Professor: A peer reviewer writes, “The argument is compelling, but Figure 2’s axis labels need revision before publication.”."
  },
  {
    "id": "toefl-curated-ext-12",
    "skill": "Listen to an Academic Talk",
    "prompt": "What is the lecture’s likely structure?",
    "choices": [
      "A personal biography only",
      "Overview of theories followed by the speaker’s experimental focus",
      "A reading of the syllabus",
      "Unrelated anecdotes with no framework"
    ],
    "answer": 1,
    "explanation": "The opening previews a compare-then-focus organization.",
    "passage": "Professor: A guest lecturer begins, “I’ll outline three competing theories, then explain which one my team tested.”."
  },
  {
    "id": "toefl-curated-ext-13",
    "skill": "Write for an Academic Discussion",
    "prompt": "Which reply contributes most to the discussion?",
    "choices": [
      "Drip irrigation delivers water directly to plant roots, reducing evaporation.",
      "Many smartphones now include dark mode settings.",
      "Farmers in arid regions increasingly measure soil moisture before irrigating.",
      "Policy incentives can encourage adoption of efficient irrigation technology."
    ],
    "answer": 1,
    "explanation": "Smartphone dark mode is unrelated to agricultural water conservation.",
    "passage": "Professor: This week's question is about water conservation in agriculture. Take a position.\n\nStudent A: I have a view, but I have not given a focused reason yet.\nStudent B: The strongest posts start with a clear claim and one concrete example."
  },
  {
    "id": "toefl-curated-ext-14",
    "skill": "Take an Interview",
    "prompt": "Which response is strongest for a timed interview?",
    "choices": [
      "Writing centers are buildings.",
      "Peer writing centers help students revise drafts with trained classmates, improving clarity before grading.",
      "Some people like to write at night.",
      "Universities have many departments."
    ],
    "answer": 1,
    "explanation": "Position plus mechanism and benefit in one concise statement.",
    "passage": "Interviewer: “What is your position on this issue, and what is one specific reason? You have 45 seconds.”"
  },
  {
    "id": "toefl-curated-ext-15",
    "skill": "Read an Academic Passage",
    "prompt": "Which statement is supported?",
    "choices": [
      "Electric buses eliminated all air pollution.",
      "Local NO₂ fell while nighttime electricity demand rose.",
      "No buses operate at night.",
      "Electricity demand never changes."
    ],
    "answer": 1,
    "explanation": "Both reported effects are supported without overclaiming.",
    "passage": "An article reports that electric bus adoption cut local NO₂ levels by 15% but increased electricity demand at night."
  },
  {
    "id": "toefl-curated-ext-16",
    "skill": "Build a Sentence",
    "prompt": "Which option completes the sentence correctly?",
    "choices": [
      "is",
      "are",
      "was being",
      "has been being"
    ],
    "answer": 1,
    "explanation": "Plural subject data (when treated as plural) takes are; trials reinforces plural agreement.",
    "passage": "Build a sentence that matches the intended meaning.\nThe data from the two trials ___ consistent with the original hypothesis."
  },
  {
    "id": "toefl-curated-ext-17",
    "skill": "Write for an Academic Discussion",
    "prompt": "Which reply contributes most to the discussion?",
    "choices": [
      "I disagree because live attendance enables real-time questions and reduces procrastination on recorded lectures.",
      "Attendance is a word with many letters.",
      "Recordings exist.",
      "Some lectures are long."
    ],
    "answer": 0,
    "explanation": "It responds directly to the prior claim with specific counter-reasons.",
    "passage": "Professor: Should attendance be mandatory in large lecture courses? Which response best engages a prior post claiming recordings make attendance unnecessary\n\nStudent A: I have a view, but I have not given a focused reason yet.\nStudent B: The strongest posts start with a clear claim and one concrete example."
  },
  {
    "id": "toefl-curated-ext-18",
    "skill": "Complete the Words",
    "prompt": "Select the letters that complete the word.",
    "choices": [
      "tri",
      "tra",
      "tre",
      "tro"
    ],
    "answer": 1,
    "explanation": "The complete word is distribute.",
    "passage": "Volunteers helped dis___tribute food packages throughout the neighborhood."
  },
  {
    "id": "toefl-curated-ext-19",
    "skill": "Read an Academic Passage",
    "prompt": "Which conclusion fits?",
    "choices": [
      "Bilingual education has no research support.",
      "Evidence generally favors benefits, but bias limits certainty.",
      "Exactly 40 benefits were proven beyond doubt.",
      "Meta-analyses are never useful."
    ],
    "answer": 1,
    "explanation": "Balanced summary matching both the trend and the limitation.",
    "passage": "A meta-analysis combined 40 studies on bilingual education. Most found cognitive benefits, but publication bias could not be ruled out."
  },
  {
    "id": "toefl-curated-ext-20",
    "skill": "Listen to a Conversation",
    "prompt": "What does the student still need?",
    "choices": [
      "A higher GPA",
      "Faculty reference letters",
      "To retake every course",
      "Nothing — admission is guaranteed"
    ],
    "answer": 1,
    "explanation": "GPA is sufficient; references are the remaining requirement.",
    "passage": "Advisor: “You meet the GPA threshold, but the program also requires two faculty references.”"
  },
  {
    "id": "toefl-curated-ext-21",
    "skill": "Listen to an Academic Talk",
    "prompt": "What will the episode likely emphasize?",
    "choices": [
      "Limitations and gaps in the research design",
      "The host’s vacation plans",
      "Unrelated sports scores",
      "Only the study’s strengths with no critique"
    ],
    "answer": 0,
    "explanation": "The preview signals discussion of unmeasured factors — design limits.",
    "passage": "Professor: “Today’s episode focuses on what the study did not measure.”"
  },
  {
    "id": "toefl-curated-ext-22",
    "skill": "Write for an Academic Discussion",
    "prompt": "Which reply contributes most to the discussion?",
    "choices": [
      "Energy is important.",
      "A just transition to renewable energy should cut emissions while funding retraining for displaced workers.",
      "Workers exist in many countries.",
      "Solar panels are rectangular."
    ],
    "answer": 1,
    "explanation": "The thesis covers both planned paragraph topics.",
    "passage": "Professor: What sentence should open your discussion post, and what specific reason will you give?\n\nStudent A: I have a view, but I have not given a focused reason yet.\nStudent B: The strongest posts start with a clear claim and one concrete example."
  },
  {
    "id": "toefl-curated-ext-23",
    "skill": "Take an Interview",
    "prompt": "Which response is strongest for a timed interview?",
    "choices": [
      "Markets sell imperfect produce that supermarkets often discard.",
      "Food has calories.",
      "Students walk to class.",
      "Some fruits are red."
    ],
    "answer": 0,
    "explanation": "Selling otherwise-discarded produce directly supports waste reduction.",
    "passage": "Interviewer: “What is your position on this issue, and what is one specific reason? You have 45 seconds.”"
  },
  {
    "id": "toefl-curated-ext-24",
    "skill": "Read an Academic Passage",
    "prompt": "Which claim is supported?",
    "choices": [
      "Mindfulness changed both subjective and biological stress markers.",
      "Participants reported less stress, but cortisol did not change in this measure.",
      "Cortisol always rises with mindfulness.",
      "Self-reports are never valid."
    ],
    "answer": 1,
    "explanation": "Subjective improvement without cortisol change is exactly what was reported.",
    "passage": "A trial found that mindfulness training lowered self-reported stress but did not change cortisol levels measured in saliva."
  },
  {
    "id": "toefl-curated-ext-25",
    "skill": "Build a Sentence",
    "prompt": "Which option completes the sentence correctly?",
    "choices": [
      "revise",
      "revised",
      "had revised",
      "have revising"
    ],
    "answer": 2,
    "explanation": "Past perfect shows revision completed before the reviewers met.",
    "passage": "Build a sentence that matches the intended meaning.\nBy the time the reviewers met, the authors ___ the manuscript twice."
  },
  {
    "id": "toefl-curated-ext-26",
    "skill": "Write for an Academic Discussion",
    "prompt": "Which reply contributes most to the discussion?",
    "choices": [
      "Hybrid slots could serve commuters while keeping some in-person times for students who need whiteboard explanations.",
      "Office hours are hours.",
      "Professors work at universities.",
      "Online tools exist."
    ],
    "answer": 0,
    "explanation": "It extends the debate with a hybrid solution and reasons.",
    "passage": "Professor: What claim should open your next discussion post, and why?\n\nStudent A: I have a view, but I have not given a focused reason yet.\nStudent B: The strongest posts start with a clear claim and one concrete example."
  },
  {
    "id": "toefl-curated-ext-27",
    "skill": "Complete the Words",
    "prompt": "Select the letters that complete the word.",
    "choices": [
      "pi",
      "pe",
      "po",
      "pa"
    ],
    "answer": 0,
    "explanation": "The complete word is expire.",
    "passage": "The grant will ex___pire unless the team submits a progress report by Friday."
  },
  {
    "id": "toefl-curated-ext-28",
    "skill": "Read an Academic Passage",
    "prompt": "Which conclusion is supported?",
    "choices": [
      "The strain improves yield specifically under drought conditions in this study.",
      "The strain doubles yield in all climates.",
      "Rainfall never affects wheat.",
      "Standard wheat always fails."
    ],
    "answer": 0,
    "explanation": "Benefit appears under drought only; normal conditions showed no gain.",
    "passage": "Scientists engineered drought-resistant wheat that yielded 8% more in dry fields but performed the same as standard wheat under normal rainfall."
  },
  {
    "id": "toefl-curated-ext-29",
    "skill": "Listen to a Conversation",
    "prompt": "The professor replies, “The syllabus allows one 24-hour extension if you email before the deadline — did you do that?” What is the professor checking?",
    "choices": [
      "Whether the student followed the extension procedure",
      "The student’s major",
      "Whether the assignment exists",
      "Campus parking rules"
    ],
    "answer": 0,
    "explanation": "The professor conditions late acceptance on prior email notice.",
    "passage": "Professor: “The syllabus allows one 24-hour extension if you email before the deadline — did you do that?”"
  },
  {
    "id": "toefl-curated-ext-30",
    "skill": "Listen to an Academic Talk",
    "prompt": "What is the primary purpose?",
    "choices": [
      "To encourage students to skip safety equipment",
      "To ensure students locate emergency equipment proactively",
      "To describe historical lab accidents in detail",
      "To postpone the experiment indefinitely"
    ],
    "answer": 1,
    "explanation": "Pre-lab location of eyewash is preventive safety preparation.",
    "passage": "Professor: In a lab safety briefing, the instructor repeats, “Know where the eyewash station is before you start.”."
  },
  {
    "id": "toefl-curated-ext-31",
    "skill": "Write for an Academic Discussion",
    "prompt": "Which reply contributes most to the discussion?",
    "choices": [
      "Journals publish articles.",
      "Making peer-reviewed research freely available accelerates scientific collaboration while requiring sustainable funding models.",
      "Scientists use computers.",
      "Some journals are thick."
    ],
    "answer": 1,
    "explanation": "It restates the main claim and acknowledges a key caveat.",
    "passage": "Professor: What claim should open your next discussion post, and why?\n\nStudent A: I have a view, but I have not given a focused reason yet.\nStudent B: The strongest posts start with a clear claim and one concrete example."
  }
];

export const curatedExtendedSatQuestions: EnglishPracticeQuestion[] = [
  {
    "id": "sat-curated-ext-1",
    "skill": "Standard English Conventions",
    "prompt": "Which choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      "will not announce",
      "not announcing",
      "has not announce",
      "announce"
    ],
    "answer": 0,
    "explanation": "Future tense fits a decision postponed to next week; however sets contrast.",
    "passage": "The panel has reviewed the proposals; however, it ___ a final decision until next week."
  },
  {
    "id": "sat-curated-ext-2",
    "skill": "Expression of Ideas",
    "prompt": "Which choice best achieves the writer's goal?",
    "choices": [
      "Similarly",
      "Nevertheless",
      "Therefore",
      "For instance"
    ],
    "answer": 1,
    "explanation": "Caution about sample size contrasts with the positive pilot result.",
    "passage": "Writer's goal: revise the draft for a stated rhetorical goal.\nThe pilot program reduced wait times at the clinic. ___, administrators cautioned that the sample size was small."
  },
  {
    "id": "sat-curated-ext-3",
    "skill": "Information and Ideas",
    "prompt": "Which inference is supported?",
    "choices": [
      "Coal use increased over the decade.",
      "Renewable share grew while coal share declined over the period shown.",
      "Total electricity generation stopped increasing.",
      "Renewables supplied more than half of all electricity throughout."
    ],
    "answer": 1,
    "explanation": "Stay within the shares reported for the decade.",
    "passage": "A bar chart shows renewable electricity rising from 18% to 27% of total generation over ten years while coal fell from 40% to 28%."
  },
  {
    "id": "sat-curated-ext-4",
    "skill": "Expression of Ideas",
    "prompt": "Which choice best achieves the writer's goal?",
    "choices": [
      "Vaccines are medical tools.",
      "In plain terms, vaccinated participants were about five times less likely to be hospitalized during the trial.",
      "Hospitals have many rooms.",
      "Scientists wear lab coats."
    ],
    "answer": 1,
    "explanation": "It translates the finding into accessible, concrete language.",
    "passage": "Writer's goal: revise the draft for a stated rhetorical goal.\nDraft under revision: Vaccines are medical tools. Hospitals have many rooms."
  },
  {
    "id": "sat-curated-ext-5",
    "skill": "Information and Ideas",
    "prompt": "Which detail best supports the central idea?",
    "choices": [
      "Trees have leaves.",
      "Neighborhoods with new tree canopies recorded afternoon temperatures 2°C lower than nearby paved blocks.",
      "Some cities have parks.",
      "Heat is measured in degrees."
    ],
    "answer": 1,
    "explanation": "Measured temperature difference directly supports mitigation.",
    "passage": "Urban tree planting mitigates heat islands. Neighborhoods with new tree canopies recorded afternoon temperatures 2°C lower than nearby paved blocks. The same report also notes unrelated constraints such as cost and weather."
  },
  {
    "id": "sat-curated-ext-6",
    "skill": "Algebra",
    "prompt": "If 4(x − 3) = 2x + 10, what is x?",
    "choices": [
      "5",
      "8",
      "11",
      "13"
    ],
    "answer": 2,
    "explanation": "Expand: 4x − 12 = 2x + 10 → 2x = 22 → x = 11."
  },
  {
    "id": "sat-curated-ext-7",
    "skill": "Problem-Solving and Data Analysis",
    "prompt": "What is reasonable to infer?",
    "choices": [
      "Practice never affects scores.",
      "More practice generally aligns with higher scores, though individual results vary.",
      "Every student with low practice scored highest.",
      "The plot proves causation without exception."
    ],
    "answer": 1,
    "explanation": "Positive trend with an outlier supports a general, not absolute, relationship.",
    "passage": "A scatterplot shows hours spent practicing a language vs quiz scores with a positive trend, but one point sits far below the trend at low practice hours."
  },
  {
    "id": "sat-curated-ext-8",
    "skill": "Craft and Structure",
    "prompt": "Which choice completes the text with the most logical and precise word or phrase?",
    "choices": [
      "The proposal spends unlimited funds on every program",
      "Limited spending focused on priority goals",
      "Complete rejection of budgeting",
      "Unrelated historical narrative"
    ],
    "answer": 1,
    "explanation": "Modest spending plus targeted strategy implies constrained but focused investment.",
    "passage": "An author describes a budget proposal as “fiscally modest yet strategically targeted.”"
  },
  {
    "id": "sat-curated-ext-9",
    "skill": "Algebra",
    "prompt": "What is the slope of the line 3y − 6x = 9?",
    "choices": [
      "−2",
      "2",
      "3",
      "−3"
    ],
    "answer": 1,
    "explanation": "Solve for y: 3y = 6x + 9 → y = 2x + 3, slope 2."
  },
  {
    "id": "sat-curated-ext-10",
    "skill": "Craft and Structure",
    "prompt": "Which choice completes the text with the most logical and precise word or phrase?",
    "choices": [
      "neutral",
      "combative",
      "reckless",
      "triumphant"
    ],
    "answer": 0,
    "explanation": "Avoiding offense suggests neutral, careful wording.",
    "passage": "The diplomat’s tone was deliberately ___, avoiding strong language that might offend either delegation."
  },
  {
    "id": "sat-curated-ext-11",
    "skill": "Standard English Conventions",
    "prompt": "Which choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      "was",
      "were",
      "have been",
      "are being"
    ],
    "answer": 0,
    "explanation": "Each takes a singular verb: was repeated.",
    "passage": "Each of the experiments ___ repeated under identical temperature conditions."
  },
  {
    "id": "sat-curated-ext-12",
    "skill": "Expression of Ideas",
    "prompt": "Which choice best achieves the writer's goal?",
    "choices": [
      "Consequently",
      "Nevertheless",
      "In contrast",
      "Next"
    ],
    "answer": 0,
    "explanation": "Testing restrictions follows mapping decline as a logical next step.",
    "passage": "Writer's goal: revise the draft for a stated rhetorical goal.\nMarine biologists mapped coral decline along the coast. ___, they tested whether local fishing restrictions slowed the trend."
  },
  {
    "id": "sat-curated-ext-13",
    "skill": "Information and Ideas",
    "prompt": "Which statement is best supported?",
    "choices": [
      "Both passages must disagree on every fact.",
      "The passages emphasize different aspects of the same site.",
      "Passage B proves Passage A is false.",
      "Neither passage mentions archaeology."
    ],
    "answer": 1,
    "explanation": "Different emphases can complement coverage of one site.",
    "passage": "Two passages describe the same archaeological site; Passage A focuses on dating methods, Passage B on trade routes."
  },
  {
    "id": "sat-curated-ext-14",
    "skill": "Expression of Ideas",
    "prompt": "Which choice best achieves the writer's goal?",
    "choices": [
      "After a claim that gradual rollout improved implementation",
      "Before the essay title",
      "Unrelated to any paragraph about rollout",
      "After the works-cited list"
    ],
    "answer": 0,
    "explanation": "For example introduces evidence for a claim about gradual rollout.",
    "passage": "Writer's goal: revise the draft for a stated rhetorical goal.\nWhere should this sentence be placed? “For example, one district trained teachers over two summers before deploying the new curriculum.”"
  },
  {
    "id": "sat-curated-ext-15",
    "skill": "Information and Ideas",
    "prompt": "Which detail best supports that idea?",
    "choices": [
      "Entrepreneurs often register businesses.",
      "Recipients used $500 grants to purchase equipment and reported first sales within two months.",
      "Some businesses have logos.",
      "Grant applications require forms."
    ],
    "answer": 1,
    "explanation": "Concrete outcomes from small grants support the main argument.",
    "passage": "A writer argues that microgrants help first-generation entrepreneurs."
  },
  {
    "id": "sat-curated-ext-16",
    "skill": "Algebra",
    "prompt": "Which expression gives the cost C for t texts?",
    "choices": [
      "C = 20t + 0.10",
      "C = 0.10t + 20",
      "C = 20 + t",
      "C = 0.10 − 20t"
    ],
    "answer": 1,
    "explanation": "Fixed fee plus per-text rate: C = 0.10t + 20.",
    "passage": "A phone plan charges $20 plus $0.10 per text."
  },
  {
    "id": "sat-curated-ext-17",
    "skill": "Problem-Solving and Data Analysis",
    "prompt": "A line graph of average commute times shows a sharp increase in 2020, then a gradual decline through 2024 that remains above 2019 levels. Which statement is supported?",
    "choices": [
      "Commute times returned exactly to 2019 levels by 2024.",
      "After a 2020 spike, times improved but were still higher than 2019 in 2024.",
      "Commute data was not collected after 2020.",
      "2020 had the lowest commute times on the graph."
    ],
    "answer": 1,
    "explanation": "Decline from spike without full return to 2019 matches the description."
  },
  {
    "id": "sat-curated-ext-18",
    "skill": "Craft and Structure",
    "prompt": "Which choice completes the text with the most logical and precise word or phrase?",
    "choices": [
      "To indicate the speaker forgot other phrases",
      "To emphasize urgency before presenting actions",
      "To provide statistical evidence",
      "To define a technical term"
    ],
    "answer": 1,
    "explanation": "Repetition builds urgency leading into proposed steps.",
    "passage": "A speaker repeats the phrase “we cannot wait” three times before listing policy steps."
  },
  {
    "id": "sat-curated-ext-19",
    "skill": "Algebra",
    "prompt": "If f(x) = −2x + 7, what is f(4)?",
    "choices": [
      "−1",
      "1",
      "15",
      "−15"
    ],
    "answer": 0,
    "explanation": "f(4) = −2(4) + 7 = −8 + 7 = −1."
  },
  {
    "id": "sat-curated-ext-20",
    "skill": "Craft and Structure",
    "prompt": "Which choice completes the text with the most logical and precise word or phrase?",
    "choices": [
      "sparse",
      "lavish",
      "erratic",
      "ambiguous"
    ],
    "answer": 1,
    "explanation": "Lavish detail contrasts with withholding some names — although signals contrast.",
    "passage": "Although the memoir is ___ in detail, the author avoids revealing the names of minor characters."
  },
  {
    "id": "sat-curated-ext-21",
    "skill": "Standard English Conventions",
    "prompt": "Which choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      "published",
      "publish",
      "publishing",
      "have published"
    ],
    "answer": 0,
    "explanation": "Singular team as subject → published; nonrestrictive clause does not change number.",
    "passage": "The research team, which included scholars from six countries, ___ its results yesterday."
  },
  {
    "id": "sat-curated-ext-22",
    "skill": "Expression of Ideas",
    "prompt": "Which choice completes the text with the most logical transition?",
    "choices": [
      "Similarly",
      "However",
      "Therefore",
      "For example"
    ],
    "answer": 1,
    "explanation": "Manufacturing impacts contrast with emission-free operation.",
    "passage": "Wind turbines generate power without direct emissions. ___, their manufacturing still requires mined materials."
  },
  {
    "id": "sat-curated-ext-23",
    "skill": "Information and Ideas",
    "prompt": "Which choice is best supported by the text?",
    "choices": [
      "Claiming screens improve sleep",
      "Identifying a confounding variable that limits a causal claim",
      "Rejecting all sleep research",
      "Introducing unrelated sports statistics"
    ],
    "answer": 1,
    "explanation": "Unmeasured caffeine is a confound that weakens causation.",
    "passage": "An author notes that a correlation between screen time and sleep delay does not prove screens cause sleep loss because evening caffeine was not measured."
  },
  {
    "id": "sat-curated-ext-24",
    "skill": "Expression of Ideas",
    "prompt": "Which choice best achieves the writer's goal?",
    "choices": [
      "Because rain was falling, the event was cancelled.",
      "Due to the fact that precipitation occurred, the event was cancelled.",
      "The event was cancelled because of the fact of rain falling down.",
      "Rain is wet, so events happen."
    ],
    "answer": 0,
    "explanation": "Because replaces due to the fact that with the same meaning.",
    "passage": "Writer's goal: revise the draft for a stated rhetorical goal.\nDraft under revision: Due to the fact that precipitation occurred, the event was cancelled. The event was cancelled because of the fact of rain falling down."
  },
  {
    "id": "sat-curated-ext-25",
    "skill": "Information and Ideas",
    "prompt": "Which detail best illustrates that claim?",
    "choices": [
      "Libraries loan print novels.",
      "Branches lend Wi-Fi hotspots and offer free device-charging stations for job seekers.",
      "Some buildings have stairs.",
      "Library cards are plastic."
    ],
    "answer": 1,
    "explanation": "Hotspots and charging for job seekers exemplify digital equity support.",
    "passage": "A passage claims public libraries function as “digital equity hubs.”"
  },
  {
    "id": "sat-curated-ext-26",
    "skill": "Algebra",
    "prompt": "Which value or expression is correct?",
    "choices": [
      "5",
      "7",
      "10",
      "14"
    ],
    "answer": 2,
    "explanation": "2k + 6 = 3k − 4 → 10 = k.",
    "passage": "What value of k makes 2(k + 3) = 3k − 4 true?"
  },
  {
    "id": "sat-curated-ext-27",
    "skill": "Problem-Solving and Data Analysis",
    "prompt": "Which claim is best supported?",
    "choices": [
      "Both cities had identical income trends.",
      "City A’s median income increased while City B’s remained relatively unchanged.",
      "Median income fell in both cities.",
      "The table covers only one year."
    ],
    "answer": 1,
    "explanation": "Contrasting trends between cities are directly supported.",
    "passage": "A table lists median incomes rising in City A but flat in City B over the same decade."
  },
  {
    "id": "sat-curated-ext-28",
    "skill": "Craft and Structure",
    "prompt": "Which choice completes the text with the most logical and precise word or phrase?",
    "choices": [
      "Providing expert testimony to support the writer’s point",
      "Changing the essay topic to fiction",
      "Proving budget cuts are impossible",
      "Listing unrelated vocabulary"
    ],
    "answer": 0,
    "explanation": "Expert quotes commonly lend authority to the writer’s argument.",
    "passage": "A writer quotes a park ranger before explaining budget cuts."
  },
  {
    "id": "sat-curated-ext-29",
    "skill": "Algebra",
    "prompt": "Which value or expression is correct?",
    "choices": [
      "(0, −2)",
      "(0, 2)",
      "(2, 0)",
      "(−2, 0)"
    ],
    "answer": 0,
    "explanation": "At x = 0, y = −2.",
    "passage": "Which point lies on the line y = 3x − 2?"
  },
  {
    "id": "sat-curated-ext-30",
    "skill": "Craft and Structure",
    "prompt": "Which choice completes the text with the most logical and precise word or phrase?",
    "choices": [
      "unwieldy",
      "flawless",
      "obsolete",
      "minimal"
    ],
    "answer": 0,
    "explanation": "Needing major restructuring suggests the draft is unwieldy, not polished.",
    "passage": "The editor called the draft “promising but ___,” requesting major restructuring before publication."
  },
  {
    "id": "sat-curated-ext-31",
    "skill": "Expression of Ideas",
    "prompt": "Which choice best achieves the writer's goal?",
    "choices": [
      "Some managers argue that remote work reduces spontaneous collaboration, even though teams can schedule regular virtual check-ins.",
      "Offices contain desks.",
      "Computers are electronic.",
      "Many people commute."
    ],
    "answer": 0,
    "explanation": "It states the opposing view and hints at a rebuttal.",
    "passage": "Writer's goal: revise the draft for a stated rhetorical goal.\nDraft under revision: Offices contain desks. Computers are electronic."
  }
];
