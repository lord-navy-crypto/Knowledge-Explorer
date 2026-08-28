import type { EnglishPracticeQuestion } from "./english-content";

/** Hand-curated extended bank — 31 TOEFL + 31 SAT items; replaces script-generated batch3 filler. */
export const curatedExtendedToeflQuestions: EnglishPracticeQuestion[] = [
  {
    id: "toefl-curated-ext-1",
    skill: "Academic Reading",
    prompt:
      "A longitudinal study tracked sleep hours and GPA among first-year students. Students sleeping 7–8 hours averaged higher GPAs than those sleeping under 6 hours, but the study did not control for course load. Which conclusion is best supported?",
    choices: [
      "Sleeping exactly 8 hours guarantees a 4.0 GPA.",
      "More sleep was associated with higher GPA in this sample, but course load was not controlled.",
      "Course load has no effect on academic performance.",
      "The study proves sleep causes GPA changes in all populations.",
    ],
    answer: 1,
    explanation:
      "The passage supports a correlation within the sample while noting an uncontrolled variable.",
  },
  {
    id: "toefl-curated-ext-2",
    skill: "Listening inference",
    prompt:
      "A librarian tells a student, “That edition is on reserve, so you can read it in the library for two hours but can’t take it home.” What can the student infer?",
    choices: [
      "The book is freely available for checkout all semester.",
      "The student may use the book inside the library for a limited time only.",
      "Reserve books are never accessible to students.",
      "The library does not own the book.",
    ],
    answer: 1,
    explanation: "On reserve implies in-library use with a time limit, not full checkout.",
  },
  {
    id: "toefl-curated-ext-3",
    skill: "Listening purpose",
    prompt:
      "Before playing an audio clip, an instructor says, “Pay attention to how the speaker qualifies her main claim at the end.” What is the instructor asking students to notice?",
    choices: [
      "The speaker’s volume level",
      "How the speaker limits or adjusts the strength of the claim",
      "The speaker’s hometown",
      "Whether the clip includes background music",
    ],
    answer: 1,
    explanation: "Qualifying a claim means adding nuance, limits, or conditions.",
  },
  {
    id: "toefl-curated-ext-4",
    skill: "Writing coherence",
    prompt:
      "Which sentence best transitions from a paragraph about rising tuition to a paragraph about financial-aid reforms?",
    choices: [
      "Tuition exists at many universities.",
      "Because rising tuition strains low-income families, policymakers have expanded need-based grant programs.",
      "Students often study in libraries.",
      "Financial aid is a topic people discuss.",
    ],
    answer: 1,
    explanation: "It links the problem (tuition) to the next focus (aid reforms).",
  },
  {
    id: "toefl-curated-ext-5",
    skill: "Speaking clarity",
    prompt:
      "Which response best answers whether cities should subsidize public transit for students?",
    choices: [
      "Transit is vehicles that move people.",
      "Yes — discounted student fares can reduce commute costs and encourage regular attendance.",
      "I have taken a bus before.",
      "Maybe yes, maybe no, it depends on many factors without saying which.",
    ],
    answer: 1,
    explanation: "Clear position plus a concrete reason suitable for a timed speaking task.",
  },
  {
    id: "toefl-curated-ext-6",
    skill: "Reading detail",
    prompt:
      "A passage states that coral bleaching events doubled between 2010 and 2020 but that some reefs recovered within three years when water temperatures normalized. Which claim is supported?",
    choices: [
      "All coral reefs permanently died by 2020.",
      "Bleaching became more frequent, yet recovery was possible when conditions improved.",
      "Water temperature never affects coral.",
      "Recovery always takes at least ten years.",
    ],
    answer: 1,
    explanation: "Both the increase in bleaching and conditional recovery are explicitly stated.",
  },
  {
    id: "toefl-curated-ext-7",
    skill: "Grammar in context",
    prompt: "Neither the lab assistant nor the principal investigator ___ the revised protocol yet.",
    choices: ["has approved", "have approved", "approving", "approve"],
    answer: 0,
    explanation: "With neither/nor, the verb agrees with the nearer subject (investigator → has).",
  },
  {
    id: "toefl-curated-ext-8",
    skill: "Academic Discussion",
    prompt:
      "The prompt asks whether museums should return artifacts obtained during colonial periods. Which reply is most developed?",
    choices: [
      "Colonialism was bad.",
      "Museums should prioritize repatriation when source communities request return and provenance shows coercive acquisition, while digitizing items for global study when physical return is impossible.",
      "Artifacts are old.",
      "I visited a museum once.",
    ],
    answer: 1,
    explanation: "It states a nuanced policy with conditions and an alternative.",
  },
  {
    id: "toefl-curated-ext-9",
    skill: "Complete the Words",
    prompt: "The committee will recon___vene after the audit to review the findings.",
    choices: ["ve", "vi", "va", "vo"],
    answer: 0,
    explanation: "The complete word is reconvene.",
  },
  {
    id: "toefl-curated-ext-10",
    skill: "Academic Reading",
    prompt:
      "Researchers compared handwritten and typed lecture notes. Handwritten notes correlated with better conceptual recall; typed notes correlated with more verbatim detail. Which inference is best supported?",
    choices: [
      "Typing notes always produces the worst learning outcomes.",
      "Note format may relate differently to conceptual vs verbatim retention.",
      "Students should never type notes.",
      "The study measured only typing speed.",
    ],
    answer: 1,
    explanation: "The passage contrasts two associated outcomes without absolute rules.",
  },
  {
    id: "toefl-curated-ext-11",
    skill: "Listening inference",
    prompt:
      "A peer reviewer writes, “The argument is compelling, but Figure 2’s axis labels need revision before publication.” What is implied?",
    choices: [
      "The paper is rejected permanently.",
      "The core argument is strong, but a specific figure must be corrected.",
      "Figure 2 should be deleted entirely.",
      "The reviewer did not read the paper.",
    ],
    answer: 1,
    explanation: "Praise for the argument plus a concrete revision request implies conditional acceptance.",
  },
  {
    id: "toefl-curated-ext-12",
    skill: "Listening purpose",
    prompt:
      "A guest lecturer begins, “I’ll outline three competing theories, then explain which one my team tested.” What is the lecture’s likely structure?",
    choices: [
      "A personal biography only",
      "Overview of theories followed by the speaker’s experimental focus",
      "A reading of the syllabus",
      "Unrelated anecdotes with no framework",
    ],
    answer: 1,
    explanation: "The opening previews a compare-then-focus organization.",
  },
  {
    id: "toefl-curated-ext-13",
    skill: "Writing coherence",
    prompt:
      "Which sentence should be removed because it disrupts unity in a paragraph about water conservation in agriculture?",
    choices: [
      "Drip irrigation delivers water directly to plant roots, reducing evaporation.",
      "Many smartphones now include dark mode settings.",
      "Farmers in arid regions increasingly measure soil moisture before irrigating.",
      "Policy incentives can encourage adoption of efficient irrigation technology.",
    ],
    answer: 1,
    explanation: "Smartphone dark mode is unrelated to agricultural water conservation.",
  },
  {
    id: "toefl-curated-ext-14",
    skill: "Speaking clarity",
    prompt:
      "Which opening best supports a recommendation that universities offer peer writing centers?",
    choices: [
      "Writing centers are buildings.",
      "Peer writing centers help students revise drafts with trained classmates, improving clarity before grading.",
      "Some people like to write at night.",
      "Universities have many departments.",
    ],
    answer: 1,
    explanation: "Position plus mechanism and benefit in one concise statement.",
  },
  {
    id: "toefl-curated-ext-15",
    skill: "Reading detail",
    prompt:
      "An article reports that electric bus adoption cut local NO₂ levels by 15% but increased electricity demand at night. Which statement is supported?",
    choices: [
      "Electric buses eliminated all air pollution.",
      "Local NO₂ fell while nighttime electricity demand rose.",
      "No buses operate at night.",
      "Electricity demand never changes.",
    ],
    answer: 1,
    explanation: "Both reported effects are supported without overclaiming.",
  },
  {
    id: "toefl-curated-ext-16",
    skill: "Grammar in context",
    prompt: "The data from the two trials ___ consistent with the original hypothesis.",
    choices: ["is", "are", "was being", "has been being"],
    answer: 1,
    explanation: "Plural subject data (when treated as plural) takes are; trials reinforces plural agreement.",
  },
  {
    id: "toefl-curated-ext-17",
    skill: "Academic Discussion",
    prompt:
      "Should attendance be mandatory in large lecture courses? Which response best engages a prior post claiming recordings make attendance unnecessary?",
    choices: [
      "I disagree because live attendance enables real-time questions and reduces procrastination on recorded lectures.",
      "Attendance is a word with many letters.",
      "Recordings exist.",
      "Some lectures are long.",
    ],
    answer: 0,
    explanation: "It responds directly to the prior claim with specific counter-reasons.",
  },
  {
    id: "toefl-curated-ext-18",
    skill: "Complete the Words",
    prompt: "Volunteers helped dis___tribute food packages throughout the neighborhood.",
    choices: ["tri", "tra", "tre", "tro"],
    answer: 1,
    explanation: "The complete word is distribute.",
  },
  {
    id: "toefl-curated-ext-19",
    skill: "Academic Reading",
    prompt:
      "A meta-analysis combined 40 studies on bilingual education. Most found cognitive benefits, but publication bias could not be ruled out. Which conclusion fits?",
    choices: [
      "Bilingual education has no research support.",
      "Evidence generally favors benefits, but bias limits certainty.",
      "Exactly 40 benefits were proven beyond doubt.",
      "Meta-analyses are never useful.",
    ],
    answer: 1,
    explanation: "Balanced summary matching both the trend and the limitation.",
  },
  {
    id: "toefl-curated-ext-20",
    skill: "Listening inference",
    prompt:
      "An advisor says, “You meet the GPA threshold, but the program also requires two faculty references.” What does the student still need?",
    choices: [
      "A higher GPA",
      "Faculty reference letters",
      "To retake every course",
      "Nothing — admission is guaranteed",
    ],
    answer: 1,
    explanation: "GPA is sufficient; references are the remaining requirement.",
  },
  {
    id: "toefl-curated-ext-21",
    skill: "Listening purpose",
    prompt:
      "A podcast host says, “Today’s episode focuses on what the study did not measure.” What will the episode likely emphasize?",
    choices: [
      "Limitations and gaps in the research design",
      "The host’s vacation plans",
      "Unrelated sports scores",
      "Only the study’s strengths with no critique",
    ],
    answer: 0,
    explanation: "The preview signals discussion of unmeasured factors — design limits.",
  },
  {
    id: "toefl-curated-ext-22",
    skill: "Writing coherence",
    prompt:
      "Which thesis best matches body paragraphs on (1) reduced emissions and (2) job retraining for fossil-fuel workers?",
    choices: [
      "Energy is important.",
      "A just transition to renewable energy should cut emissions while funding retraining for displaced workers.",
      "Workers exist in many countries.",
      "Solar panels are rectangular.",
    ],
    answer: 1,
    explanation: "The thesis covers both planned paragraph topics.",
  },
  {
    id: "toefl-curated-ext-23",
    skill: "Speaking clarity",
    prompt:
      "Which detail best supports the claim that campus farmers’ markets reduce food waste?",
    choices: [
      "Markets sell imperfect produce that supermarkets often discard.",
      "Food has calories.",
      "Students walk to class.",
      "Some fruits are red.",
    ],
    answer: 0,
    explanation: "Selling otherwise-discarded produce directly supports waste reduction.",
  },
  {
    id: "toefl-curated-ext-24",
    skill: "Reading detail",
    prompt:
      "A trial found that mindfulness training lowered self-reported stress but did not change cortisol levels measured in saliva. Which claim is supported?",
    choices: [
      "Mindfulness changed both subjective and biological stress markers.",
      "Participants reported less stress, but cortisol did not change in this measure.",
      "Cortisol always rises with mindfulness.",
      "Self-reports are never valid.",
    ],
    answer: 1,
    explanation: "Subjective improvement without cortisol change is exactly what was reported.",
  },
  {
    id: "toefl-curated-ext-25",
    skill: "Grammar in context",
    prompt: "By the time the reviewers met, the authors ___ the manuscript twice.",
    choices: ["revise", "revised", "had revised", "have revising"],
    answer: 2,
    explanation: "Past perfect shows revision completed before the reviewers met.",
  },
  {
    id: "toefl-curated-ext-26",
    skill: "Academic Discussion",
    prompt:
      "Which reply best adds a new perspective to a thread debating online vs in-person office hours?",
    choices: [
      "Hybrid slots could serve commuters while keeping some in-person times for students who need whiteboard explanations.",
      "Office hours are hours.",
      "Professors work at universities.",
      "Online tools exist.",
    ],
    answer: 0,
    explanation: "It extends the debate with a hybrid solution and reasons.",
  },
  {
    id: "toefl-curated-ext-27",
    skill: "Complete the Words",
    prompt: "The grant will ex___pire unless the team submits a progress report by Friday.",
    choices: ["pi", "pe", "po", "pa"],
    answer: 0,
    explanation: "The complete word is expire.",
  },
  {
    id: "toefl-curated-ext-28",
    skill: "Academic Reading",
    prompt:
      "Scientists engineered drought-resistant wheat that yielded 8% more in dry fields but performed the same as standard wheat under normal rainfall. Which conclusion is supported?",
    choices: [
      "The strain improves yield specifically under drought conditions in this study.",
      "The strain doubles yield in all climates.",
      "Rainfall never affects wheat.",
      "Standard wheat always fails.",
    ],
    answer: 0,
    explanation: "Benefit appears under drought only; normal conditions showed no gain.",
  },
  {
    id: "toefl-curated-ext-29",
    skill: "Listening inference",
    prompt:
      "A student asks to submit an assignment one day late. The professor replies, “The syllabus allows one 24-hour extension if you email before the deadline — did you do that?” What is the professor checking?",
    choices: [
      "Whether the student followed the extension procedure",
      "The student’s major",
      "Whether the assignment exists",
      "Campus parking rules",
    ],
    answer: 0,
    explanation: "The professor conditions late acceptance on prior email notice.",
  },
  {
    id: "toefl-curated-ext-30",
    skill: "Listening purpose",
    prompt:
      "In a lab safety briefing, the instructor repeats, “Know where the eyewash station is before you start.” What is the primary purpose?",
    choices: [
      "To encourage students to skip safety equipment",
      "To ensure students locate emergency equipment proactively",
      "To describe historical lab accidents in detail",
      "To postpone the experiment indefinitely",
    ],
    answer: 1,
    explanation: "Pre-lab location of eyewash is preventive safety preparation.",
  },
  {
    id: "toefl-curated-ext-31",
    skill: "Writing coherence",
    prompt:
      "Which concluding sentence best summarizes an essay arguing for open-access journals?",
    choices: [
      "Journals publish articles.",
      "Making peer-reviewed research freely available accelerates scientific collaboration while requiring sustainable funding models.",
      "Scientists use computers.",
      "Some journals are thick.",
    ],
    answer: 1,
    explanation: "It restates the main claim and acknowledges a key caveat.",
  },
];

export const curatedExtendedSatQuestions: EnglishPracticeQuestion[] = [
  {
    id: "sat-curated-ext-1",
    skill: "Standard English Conventions",
    prompt: "The panel has reviewed the proposals; however, it ___ a final decision until next week.",
    choices: ["will not announce", "not announcing", "has not announce", "announce"],
    answer: 0,
    explanation: "Future tense fits a decision postponed to next week; however sets contrast.",
  },
  {
    id: "sat-curated-ext-2",
    skill: "Transitions",
    prompt:
      "The pilot program reduced wait times at the clinic. ___, administrators cautioned that the sample size was small.",
    choices: ["Similarly", "Nevertheless", "Therefore", "For instance"],
    answer: 1,
    explanation: "Caution about sample size contrasts with the positive pilot result.",
  },
  {
    id: "sat-curated-ext-3",
    skill: "Information and Ideas",
    prompt:
      "A bar chart shows renewable electricity rising from 18% to 27% of total generation over ten years while coal fell from 40% to 28%. Which inference is supported?",
    choices: [
      "Coal use increased over the decade.",
      "Renewable share grew while coal share declined over the period shown.",
      "Total electricity generation stopped increasing.",
      "Renewables supplied more than half of all electricity throughout.",
    ],
    answer: 1,
    explanation: "Stay within the shares reported for the decade.",
  },
  {
    id: "sat-curated-ext-4",
    skill: "Expression of Ideas",
    prompt:
      "Which sentence best clarifies the main finding for a general audience at the end of a paragraph on vaccine efficacy?",
    choices: [
      "Vaccines are medical tools.",
      "In plain terms, vaccinated participants were about five times less likely to be hospitalized during the trial.",
      "Hospitals have many rooms.",
      "Scientists wear lab coats.",
    ],
    answer: 1,
    explanation: "It translates the finding into accessible, concrete language.",
  },
  {
    id: "sat-curated-ext-5",
    skill: "Central Ideas",
    prompt:
      "A passage argues that urban tree planting mitigates heat islands. Which detail best supports the central idea?",
    choices: [
      "Trees have leaves.",
      "Neighborhoods with new tree canopies recorded afternoon temperatures 2°C lower than nearby paved blocks.",
      "Some cities have parks.",
      "Heat is measured in degrees.",
    ],
    answer: 1,
    explanation: "Measured temperature difference directly supports mitigation.",
  },
  {
    id: "sat-curated-ext-6",
    skill: "Algebra",
    prompt: "If 4(x − 3) = 2x + 10, what is x?",
    choices: ["5", "8", "11", "13"],
    answer: 2,
    explanation: "Expand: 4x − 12 = 2x + 10 → 2x = 22 → x = 11.",
  },
  {
    id: "sat-curated-ext-7",
    skill: "Data interpretation",
    prompt:
      "A scatterplot shows hours spent practicing a language vs quiz scores with a positive trend, but one point sits far below the trend at low practice hours. What is reasonable to infer?",
    choices: [
      "Practice never affects scores.",
      "More practice generally aligns with higher scores, though individual results vary.",
      "Every student with low practice scored highest.",
      "The plot proves causation without exception.",
    ],
    answer: 1,
    explanation: "Positive trend with an outlier supports a general, not absolute, relationship.",
  },
  {
    id: "sat-curated-ext-8",
    skill: "Rhetoric",
    prompt:
      "An author describes a budget proposal as “fiscally modest yet strategically targeted.” What is the author most likely emphasizing?",
    choices: [
      "The proposal spends unlimited funds on every program",
      "Limited spending focused on priority goals",
      "Complete rejection of budgeting",
      "Unrelated historical narrative",
    ],
    answer: 1,
    explanation: "Modest spending plus targeted strategy implies constrained but focused investment.",
  },
  {
    id: "sat-curated-ext-9",
    skill: "Linear equations",
    prompt: "What is the slope of the line 3y − 6x = 9?",
    choices: ["−2", "2", "3", "−3"],
    answer: 1,
    explanation: "Solve for y: 3y = 6x + 9 → y = 2x + 3, slope 2.",
  },
  {
    id: "sat-curated-ext-10",
    skill: "Words in context",
    prompt:
      "The diplomat’s tone was deliberately ___, avoiding strong language that might offend either delegation.",
    choices: ["neutral", "combative", "reckless", "triumphant"],
    answer: 0,
    explanation: "Avoiding offense suggests neutral, careful wording.",
  },
  {
    id: "sat-curated-ext-11",
    skill: "Standard English Conventions",
    prompt: "Each of the experiments ___ repeated under identical temperature conditions.",
    choices: ["was", "were", "have been", "are being"],
    answer: 0,
    explanation: "Each takes a singular verb: was repeated.",
  },
  {
    id: "sat-curated-ext-12",
    skill: "Transitions",
    prompt:
      "Marine biologists mapped coral decline along the coast. ___, they tested whether local fishing restrictions slowed the trend.",
    choices: ["Consequently", "Nevertheless", "In contrast", "Next"],
    answer: 0,
    explanation: "Testing restrictions follows mapping decline as a logical next step.",
  },
  {
    id: "sat-curated-ext-13",
    skill: "Information and Ideas",
    prompt:
      "Two passages describe the same archaeological site; Passage A focuses on dating methods, Passage B on trade routes. Which statement is best supported?",
    choices: [
      "Both passages must disagree on every fact.",
      "The passages emphasize different aspects of the same site.",
      "Passage B proves Passage A is false.",
      "Neither passage mentions archaeology.",
    ],
    answer: 1,
    explanation: "Different emphases can complement coverage of one site.",
  },
  {
    id: "sat-curated-ext-14",
    skill: "Expression of Ideas",
    prompt:
      "Where should this sentence be placed? “For example, one district trained teachers over two summers before deploying the new curriculum.”",
    choices: [
      "After a claim that gradual rollout improved implementation",
      "Before the essay title",
      "Unrelated to any paragraph about rollout",
      "After the works-cited list",
    ],
    answer: 0,
    explanation: "For example introduces evidence for a claim about gradual rollout.",
  },
  {
    id: "sat-curated-ext-15",
    skill: "Central Ideas",
    prompt:
      "A writer argues that microgrants help first-generation entrepreneurs. Which detail best supports that idea?",
    choices: [
      "Entrepreneurs often register businesses.",
      "Recipients used $500 grants to purchase equipment and reported first sales within two months.",
      "Some businesses have logos.",
      "Grant applications require forms.",
    ],
    answer: 1,
    explanation: "Concrete outcomes from small grants support the main argument.",
  },
  {
    id: "sat-curated-ext-16",
    skill: "Algebra",
    prompt: "A phone plan charges $20 plus $0.10 per text. Which expression gives the cost C for t texts?",
    choices: ["C = 20t + 0.10", "C = 0.10t + 20", "C = 20 + t", "C = 0.10 − 20t"],
    answer: 1,
    explanation: "Fixed fee plus per-text rate: C = 0.10t + 20.",
  },
  {
    id: "sat-curated-ext-17",
    skill: "Data interpretation",
    prompt:
      "A line graph of average commute times shows a sharp increase in 2020, then a gradual decline through 2024 that remains above 2019 levels. Which statement is supported?",
    choices: [
      "Commute times returned exactly to 2019 levels by 2024.",
      "After a 2020 spike, times improved but were still higher than 2019 in 2024.",
      "Commute data was not collected after 2020.",
      "2020 had the lowest commute times on the graph.",
    ],
    answer: 1,
    explanation: "Decline from spike without full return to 2019 matches the description.",
  },
  {
    id: "sat-curated-ext-18",
    skill: "Rhetoric",
    prompt:
      "A speaker repeats the phrase “we cannot wait” three times before listing policy steps. What is the most likely rhetorical purpose?",
    choices: [
      "To indicate the speaker forgot other phrases",
      "To emphasize urgency before presenting actions",
      "To provide statistical evidence",
      "To define a technical term",
    ],
    answer: 1,
    explanation: "Repetition builds urgency leading into proposed steps.",
  },
  {
    id: "sat-curated-ext-19",
    skill: "Linear equations",
    prompt: "If f(x) = −2x + 7, what is f(4)?",
    choices: ["−1", "1", "15", "−15"],
    answer: 0,
    explanation: "f(4) = −2(4) + 7 = −8 + 7 = −1.",
  },
  {
    id: "sat-curated-ext-20",
    skill: "Words in context",
    prompt:
      "Although the memoir is ___ in detail, the author avoids revealing the names of minor characters.",
    choices: ["sparse", "lavish", "erratic", "ambiguous"],
    answer: 1,
    explanation: "Lavish detail contrasts with withholding some names — although signals contrast.",
  },
  {
    id: "sat-curated-ext-21",
    skill: "Standard English Conventions",
    prompt: "The research team, which included scholars from six countries, ___ its results yesterday.",
    choices: ["published", "publish", "publishing", "have published"],
    answer: 0,
    explanation: "Singular team as subject → published; nonrestrictive clause does not change number.",
  },
  {
    id: "sat-curated-ext-22",
    skill: "Transitions",
    prompt:
      "Wind turbines generate power without direct emissions. ___, their manufacturing still requires mined materials.",
    choices: ["Similarly", "However", "Therefore", "For example"],
    answer: 1,
    explanation: "Manufacturing impacts contrast with emission-free operation.",
  },
  {
    id: "sat-curated-ext-23",
    skill: "Information and Ideas",
    prompt:
      "An author notes that a correlation between screen time and sleep delay does not prove screens cause sleep loss because evening caffeine was not measured. What is the author doing?",
    choices: [
      "Claiming screens improve sleep",
      "Identifying a confounding variable that limits a causal claim",
      "Rejecting all sleep research",
      "Introducing unrelated sports statistics",
    ],
    answer: 1,
    explanation: "Unmeasured caffeine is a confound that weakens causation.",
  },
  {
    id: "sat-curated-ext-24",
    skill: "Expression of Ideas",
    prompt:
      "Which revision best reduces wordiness? Original: “Due to the fact that rain was falling, the event was cancelled.”",
    choices: [
      "Because rain was falling, the event was cancelled.",
      "Due to the fact that precipitation occurred, the event was cancelled.",
      "The event was cancelled because of the fact of rain falling down.",
      "Rain is wet, so events happen.",
    ],
    answer: 0,
    explanation: "Because replaces due to the fact that with the same meaning.",
  },
  {
    id: "sat-curated-ext-25",
    skill: "Central Ideas",
    prompt:
      "A passage claims public libraries function as “digital equity hubs.” Which detail best illustrates that claim?",
    choices: [
      "Libraries loan print novels.",
      "Branches lend Wi-Fi hotspots and offer free device-charging stations for job seekers.",
      "Some buildings have stairs.",
      "Library cards are plastic.",
    ],
    answer: 1,
    explanation: "Hotspots and charging for job seekers exemplify digital equity support.",
  },
  {
    id: "sat-curated-ext-26",
    skill: "Algebra",
    prompt: "What value of k makes 2(k + 3) = 3k − 4 true?",
    choices: ["5", "7", "10", "14"],
    answer: 2,
    explanation: "2k + 6 = 3k − 4 → 10 = k.",
  },
  {
    id: "sat-curated-ext-27",
    skill: "Data interpretation",
    prompt:
      "A table lists median incomes rising in City A but flat in City B over the same decade. Which claim is best supported?",
    choices: [
      "Both cities had identical income trends.",
      "City A’s median income increased while City B’s remained relatively unchanged.",
      "Median income fell in both cities.",
      "The table covers only one year.",
    ],
    answer: 1,
    explanation: "Contrasting trends between cities are directly supported.",
  },
  {
    id: "sat-curated-ext-28",
    skill: "Rhetoric",
    prompt:
      "A writer quotes a park ranger before explaining budget cuts. What is the quote most likely doing?",
    choices: [
      "Providing expert testimony to support the writer’s point",
      "Changing the essay topic to fiction",
      "Proving budget cuts are impossible",
      "Listing unrelated vocabulary",
    ],
    answer: 0,
    explanation: "Expert quotes commonly lend authority to the writer’s argument.",
  },
  {
    id: "sat-curated-ext-29",
    skill: "Linear equations",
    prompt: "Which point lies on the line y = 3x − 2?",
    choices: ["(0, −2)", "(0, 2)", "(2, 0)", "(−2, 0)"],
    answer: 0,
    explanation: "At x = 0, y = −2.",
  },
  {
    id: "sat-curated-ext-30",
    skill: "Words in context",
    prompt:
      "The editor called the draft “promising but ___,” requesting major restructuring before publication.",
    choices: ["unwieldy", "flawless", "obsolete", "minimal"],
    answer: 0,
    explanation: "Needing major restructuring suggests the draft is unwieldy, not polished.",
  },
  {
    id: "sat-curated-ext-31",
    skill: "Expression of Ideas",
    prompt:
      "Which sentence best introduces a counterargument paragraph about remote work?",
    choices: [
      "Some managers argue that remote work reduces spontaneous collaboration, even though teams can schedule regular virtual check-ins.",
      "Offices contain desks.",
      "Computers are electronic.",
      "Many people commute.",
    ],
    answer: 0,
    explanation: "It states the opposing view and hints at a rebuttal.",
  },
];
