import type { EnglishPracticeQuestion } from "./english-content";

export const extraToeflQuestions: EnglishPracticeQuestion[] = [
  {
    id: "toefl-extra-1",
    skill: "Academic Reading",
    prompt:
      "A city installed permeable pavement in a flood-prone district. Stormwater runoff decreased by 30%, but maintenance costs rose because debris clogged the surface pores. Which conclusion is best supported?",
    choices: [
      "Permeable pavement eliminates flooding entirely.",
      "The pavement reduced runoff but introduced a new maintenance challenge.",
      "Maintenance costs always outweigh environmental benefits.",
      "The district should avoid all infrastructure upgrades.",
    ],
    answer: 1,
    explanation:
      "The passage reports both a benefit (less runoff) and a drawback (higher maintenance), supporting a balanced conclusion rather than an absolute claim.",
  },
  {
    id: "toefl-extra-2",
    skill: "Listening inference",
    prompt:
      "A teaching assistant says, “The rubric is posted, but I’d still come to office hours if your draft doesn’t match what you think the professor wants.” What is the TA implying?",
    choices: [
      "Students should ignore the rubric.",
      "The rubric alone may not resolve every question about expectations.",
      "Office hours are cancelled this week.",
      "Drafts are not allowed in this course.",
    ],
    answer: 1,
    explanation:
      "The TA suggests the rubric is useful but that students with lingering uncertainty should seek clarification in person.",
  },
  {
    id: "toefl-extra-3",
    skill: "Listening purpose",
    prompt:
      "At the start of a lecture, a professor says, “Before we discuss the experiment, notice how the control group was selected.” What is the professor’s purpose?",
    choices: [
      "To announce a cancelled lab",
      "To direct attention to a methodological detail that frames the discussion",
      "To summarize the course syllabus",
      "To argue that control groups are unnecessary",
    ],
    answer: 1,
    explanation:
      "The professor is priming students to evaluate the study design before interpreting results.",
  },
  {
    id: "toefl-extra-4",
    skill: "Writing coherence",
    prompt:
      "Which sentence best begins a paragraph arguing that remote work policies should remain flexible?",
    choices: [
      "Technology has changed many industries.",
      "One reason flexible remote policies should continue is that they allow employees to adapt when caregiving needs arise.",
      "My cousin works from home on Fridays.",
      "Offices have desks and chairs.",
    ],
    answer: 1,
    explanation:
      "It states a focused reason tied directly to the argument for flexible remote work.",
  },
  {
    id: "toefl-extra-5",
    skill: "Speaking clarity",
    prompt:
      "Which response best answers a prompt asking whether museums should offer free admission one day per month?",
    choices: [
      "Museums are buildings with art.",
      "Yes, museums should offer a free day because it broadens access for families who cannot afford regular tickets.",
      "I went to a museum once and it was fine, I guess.",
      "Free things are popular in general.",
    ],
    answer: 1,
    explanation:
      "It gives a clear position and a specific, relevant reason within a short speaking response.",
  },
  {
    id: "toefl-extra-6",
    skill: "Academic Discussion",
    prompt:
      "A discussion board asks whether cities should ban single-use plastic bags. Which reply is most effective?",
    choices: [
      "Plastic is bad.",
      "Bans help, period.",
      "Cities should phase out single-use bags because they litter waterways; however, officials should provide affordable reusable alternatives to avoid burdening low-income shoppers.",
      "I do not like carrying groceries.",
    ],
    answer: 2,
    explanation:
      "This reply states a position, supports it with evidence-based reasoning, and acknowledges a practical concern.",
  },
  {
    id: "toefl-extra-7",
    skill: "Complete the Words",
    prompt:
      "The archaeologist could not re___cile the two carbon dates, so the team requested a third sample.",
    choices: ["con", "coi", "col", "cor"],
    answer: 0,
    explanation: "The complete word is reconcile, meaning to make consistent or compatible.",
  },
  {
    id: "toefl-extra-8",
    skill: "Grammar in context",
    prompt:
      "By the time the reviewers ___ the manuscript, the authors had already posted a preprint online.",
    choices: ["receive", "received", "have received", "receiving"],
    answer: 1,
    explanation:
      "Past perfect in the main clause pairs with simple past in the time clause for a completed earlier action.",
  },
  {
    id: "toefl-extra-9",
    skill: "Reading detail",
    prompt:
      "A passage states that migratory birds delayed departure by nine days during an unusually warm spring. Which detail is explicitly supported?",
    choices: [
      "Warm springs always reduce migration.",
      "The birds departed later than usual in that season.",
      "Birds no longer migrate.",
      "Temperature has no effect on migration.",
    ],
    answer: 1,
    explanation:
      "A nine-day delay during a warm spring directly supports later departure in that specific case.",
  },
  {
    id: "toefl-extra-10",
    skill: "Vocabulary in context",
    prompt:
      "The committee described the proposal as “___,” meaning it was promising but required further testing before adoption.",
    choices: ["obsolete", "preliminary", "hostile", "irreversible"],
    answer: 1,
    explanation:
      "Preliminary fits a promising idea that still needs more testing.",
  },
  {
    id: "toefl-extra-11",
    skill: "Academic Reading",
    prompt:
      "Researchers compared handwritten and typed lecture notes. Handwritten notes produced fewer words but higher scores on conceptual questions. What is the best-supported inference?",
    choices: [
      "Typing notes prevents all learning.",
      "Handwriting may encourage selective processing that aids conceptual understanding.",
      "Students should never use laptops.",
      "Conceptual questions are easier than factual questions.",
    ],
    answer: 1,
    explanation:
      "Fewer words with better conceptual scores suggests deeper processing, not a universal ban on typing.",
  },
  {
    id: "toefl-extra-12",
    skill: "Listening inference",
    prompt:
      "A librarian says, “That journal moved online-only last year, so the print volume on shelf 4 is no longer updated.” What can be inferred?",
    choices: [
      "The print volume contains the most recent articles.",
      "Researchers should use the online version for current issues.",
      "The library no longer subscribes to the journal.",
      "Shelf 4 is reserved for fiction.",
    ],
    answer: 1,
    explanation:
      "If print is not updated, current articles are available elsewhere—most logically online.",
  },
  {
    id: "toefl-extra-13",
    skill: "Listening purpose",
    prompt:
      "During a lab safety briefing, an instructor says, “Goggles are not optional today because we’re using a corrosive solution.” What is the instructor’s purpose?",
    choices: [
      "To describe the history of goggles",
      "To justify a strict safety requirement for a specific activity",
      "To cancel the experiment",
      "To compare two unrelated chemicals",
    ],
    answer: 1,
    explanation:
      "The instructor links mandatory goggles to the hazard posed by the solution.",
  },
  {
    id: "toefl-extra-14",
    skill: "Writing coherence",
    prompt:
      "Which sentence should follow: “Urban tree planting can lower summer temperatures.”?",
    choices: [
      "Many cities have rivers.",
      "For example, shaded sidewalks may remain several degrees cooler than open asphalt during heat waves.",
      "Trees are plants.",
      "I enjoy walking in parks.",
    ],
    answer: 1,
    explanation:
      "The example develops the claim about temperature reduction with specific evidence.",
  },
  {
    id: "toefl-extra-15",
    skill: "Speaking clarity",
    prompt:
      "Which answer best supports the claim that university dining halls should label allergens clearly?",
    choices: [
      "Food is important for students.",
      "Clear allergen labels help students with dietary restrictions choose safe meals quickly.",
      "Some students eat late at night.",
      "Labels are pieces of paper.",
    ],
    answer: 1,
    explanation:
      "It states a direct benefit tied to the claim about allergen labeling.",
  },
  {
    id: "toefl-extra-16",
    skill: "Academic Discussion",
    prompt:
      "Students debate whether AI writing tools belong in composition courses. Which response is strongest?",
    choices: [
      "AI is the future.",
      "Tools should be banned because writing is hard.",
      "Courses should teach students to use AI critically for brainstorming and revision while still requiring original analysis and proper citation.",
      "I have not tried any tools.",
    ],
    answer: 2,
    explanation:
      "It takes a nuanced position with instructional rationale and an academic integrity guardrail.",
  },
  {
    id: "toefl-extra-17",
    skill: "Complete the Words",
    prompt:
      "The diplomat sought a com___mise that would satisfy neither side completely but prevent further escalation.",
    choices: ["pro", "pri", "pre", "pat"],
    answer: 0,
    explanation: "The complete word is compromise, an agreement in which each side gives something up.",
  },
  {
    id: "toefl-extra-18",
    skill: "Grammar in context",
    prompt:
      "Neither the sensors nor the control software ___ ready for deployment last month.",
    choices: ["was", "were", "is", "are"],
    answer: 0,
    explanation:
      "With neither…nor, the verb agrees with the nearer subject: software (singular) → was.",
  },
  {
    id: "toefl-extra-19",
    skill: "Reading detail",
    prompt:
      "A museum exhibit notes that a textile fragment was dyed with indigo imported from a port 800 kilometers away. Which detail is stated?",
    choices: [
      "The dye was produced locally.",
      "Indigo traveled a long distance to reach the site.",
      "The fragment is made of metal.",
      "The port no longer exists.",
    ],
    answer: 1,
    explanation:
      "An imported dye from a distant port implies long-distance trade.",
  },
  {
    id: "toefl-extra-20",
    skill: "Vocabulary in context",
    prompt:
      "Because the witness accounts diverged, the investigator remained ___ about the sequence of events.",
    choices: ["certain", "skeptical", "indifferent", "triumphant"],
    answer: 1,
    explanation:
      "Conflicting accounts would reasonably lead to skepticism rather than certainty.",
  },
  {
    id: "toefl-extra-21",
    skill: "Academic Reading",
    prompt:
      "A study found that office plants improved self-reported focus but did not change objective typing speed. Which conclusion is most reasonable?",
    choices: [
      "Plants improved every measure of productivity.",
      "Plants may affect perceived focus without changing the measured task speed.",
      "Objective measures are always superior to surveys.",
      "The study proves plants are decorative only.",
    ],
    answer: 1,
    explanation:
      "The results distinguish subjective focus from an objective performance metric.",
  },
  {
    id: "toefl-extra-22",
    skill: "Listening inference",
    prompt:
      "A student says, “I finished the reading, but I’m not sure how it connects to tomorrow’s quiz.” The professor replies, “Focus on how the author defines the key term on page 42.” What is implied?",
    choices: [
      "The quiz will ignore the reading.",
      "Understanding the author’s definition is likely important for the quiz.",
      "Page 42 is blank.",
      "The student should skip the reading.",
    ],
    answer: 1,
    explanation:
      "The professor redirects the student to a specific concept likely to be assessed.",
  },
  {
    id: "toefl-extra-23",
    skill: "Listening purpose",
    prompt:
      "A guest speaker opens with, “I’ll describe three failed prototypes before explaining the design that finally worked.” What is the speaker’s purpose?",
    choices: [
      "To discourage engineering careers",
      "To show how iterative failure informed the successful design",
      "To list every product ever made",
      "To avoid discussing the final design",
    ],
    answer: 1,
    explanation:
      "The structure frames failure as part of the path to success.",
  },
  {
    id: "toefl-extra-24",
    skill: "Writing coherence",
    prompt:
      "Which transition best connects two sentences: (1) The trial reduced emissions. (2) ___ it increased commuting time for participants living far from the test route.",
    choices: ["Similarly,", "However,", "Therefore,", "For instance,"],
    answer: 1,
    explanation:
      "The second sentence introduces a drawback, so a contrast transition is appropriate.",
  },
  {
    id: "toefl-extra-25",
    skill: "Speaking clarity",
    prompt:
      "Which statement best compares living in a dorm versus commuting from home?",
    choices: [
      "Both are places.",
      "Dorm life can save travel time but may offer less privacy than living at home.",
      "I like buses and also snacks.",
      "Housing is a topic people discuss.",
    ],
    answer: 1,
    explanation:
      "It makes a clear comparison with two relevant dimensions: time and privacy.",
  },
  {
    id: "toefl-extra-26",
    skill: "Academic Discussion",
    prompt:
      "The prompt asks whether public transit should be free for students. Which answer is best?",
    choices: [
      "Students ride buses.",
      "Free student passes could increase attendance and reduce traffic near campuses if funding is allocated transparently.",
      "Transit is expensive, so nothing should change.",
      "Free means no cost at all for everyone forever.",
    ],
    answer: 1,
    explanation:
      "It supports a position with plausible benefits and notes a funding condition.",
  },
  {
    id: "toefl-extra-27",
    skill: "Complete the Words",
    prompt:
      "The vaccine trial was double-blind, meaning neither participants nor clinicians knew who received the active com___und.",
    choices: ["po", "pa", "pe", "pi"],
    answer: 0,
    explanation: "The complete word is compound, the substance being tested.",
  },
  {
    id: "toefl-extra-28",
    skill: "Grammar in context",
    prompt:
      "The panel of experts ___ divided on whether the artifact should be displayed under brighter lighting.",
    choices: ["is", "are", "were", "have been"],
    answer: 1,
    explanation:
      "In American English, collective nouns like panel often take plural verbs when members act individually.",
  },
  {
    id: "toefl-extra-29",
    skill: "Reading detail",
    prompt:
      "A brochure explains that the observatory’s new telescope captures images in infrared light. Which detail is explicit?",
    choices: [
      "The telescope uses visible light only.",
      "The instrument detects infrared wavelengths.",
      "Infrared light cannot travel through space.",
      "The observatory is closed to the public.",
    ],
    answer: 1,
    explanation:
      "The brochure directly states the telescope captures infrared images.",
  },
  {
    id: "toefl-extra-30",
    skill: "Vocabulary in context",
    prompt:
      "The reviewer called the argument “___” because it relied on a single anecdote rather than systematic data.",
    choices: ["compelling", "cogent", "speculative", "exhaustive"],
    answer: 2,
    explanation:
      "A single anecdote suggests the argument is speculative rather than fully supported.",
  },
  {
    id: "toefl-extra-31",
    skill: "Academic Reading",
    prompt:
      "An article reports that coral bleaching events have become more frequent over 30 years but that some reefs recovered when water temperatures stabilized. Which statement is best supported?",
    choices: [
      "All coral reefs are permanently destroyed.",
      "Bleaching has increased, yet recovery is possible under improved conditions.",
      "Temperature never affects coral.",
      "Recovery occurs regardless of conditions.",
    ],
    answer: 1,
    explanation:
      "The passage presents worsening frequency alongside conditional recovery.",
  },
  {
    id: "toefl-extra-32",
    skill: "Listening inference",
    prompt:
      "A project manager says, “We can meet the deadline if we limit the scope to core features.” What is implied?",
    choices: [
      "Every planned feature will ship on time.",
      "Meeting the deadline may require reducing planned features.",
      "The deadline has already passed.",
      "Core features are unnecessary.",
    ],
    answer: 1,
    explanation:
      "The conditional statement links on-time delivery to a narrower scope.",
  },
  {
    id: "toefl-extra-33",
    skill: "Listening purpose",
    prompt:
      "In a history seminar, the professor says, “Compare the footnotes in these two chapters before you evaluate their claims.” What is the professor’s purpose?",
    choices: [
      "To assign more reading for entertainment",
      "To prompt students to examine evidence sources before judging arguments",
      "To prove that footnotes are optional",
      "To summarize both chapters aloud",
    ],
    answer: 1,
    explanation:
      "The instruction directs students to evaluate evidence backing each chapter’s claims.",
  },
  {
    id: "toefl-extra-34",
    skill: "Writing coherence",
    prompt:
      "Which concluding sentence best wraps a paragraph about reducing food waste on campus?",
    choices: [
      "Food exists worldwide.",
      "By tracking leftovers and adjusting portions, the dining hall could cut waste without sacrificing nutrition.",
      "Students eat every day.",
      "Waste is a short word.",
    ],
    answer: 1,
    explanation:
      "It restates a practical solution tied to the paragraph’s focus on waste reduction.",
  },
  {
    id: "toefl-extra-35",
    skill: "Speaking clarity",
    prompt:
      "Which reason best supports requiring a short orientation before students use 3D printers in a makerspace?",
    choices: [
      "Printers are machines.",
      "Orientation ensures students understand safety procedures and reduce damage to shared equipment.",
      "Some students enjoy crafts.",
      "Orientations can be scheduled.",
    ],
    answer: 1,
    explanation:
      "It links orientation to safety and equipment care—clear, task-relevant reasons.",
  },
  {
    id: "toefl-extra-36",
    skill: "Academic Discussion",
    prompt:
      "Should history museums return certain artifacts to their countries of origin? Choose the strongest reply.",
    choices: [
      "Museums are old.",
      "Repatriation should be evaluated case by case, weighing legal ownership, community significance, and conditions for preservation.",
      "All artifacts must stay where they are.",
      "Return everything immediately without discussion.",
    ],
    answer: 1,
    explanation:
      "It acknowledges complexity and proposes criteria rather than an absolute rule.",
  },
  {
    id: "toefl-extra-37",
    skill: "Complete the Words",
    prompt:
      "The engineer proposed a mod___lar design so damaged sections could be replaced without rebuilding the entire structure.",
    choices: ["u", "i", "e", "a"],
    answer: 0,
    explanation: "The complete word is modular, composed of interchangeable units.",
  },
  {
    id: "toefl-extra-38",
    skill: "Grammar in context",
    prompt:
      "Each of the volunteer shifts ___ assigned a team leader before the event began.",
    choices: ["was", "were", "are", "have been"],
    answer: 0,
    explanation:
      "Each takes a singular verb: was assigned.",
  },
  {
    id: "toefl-extra-39",
    skill: "Reading detail",
    prompt:
      "A campus sustainability report notes that LED retrofits paid for themselves in 14 months through lower electricity bills. Which detail is given?",
    choices: [
      "LEDs never save money.",
      "The retrofit cost was recovered in a little over a year.",
      "Electricity prices are unrelated to lighting.",
      "The report covers only water usage.",
    ],
    answer: 1,
    explanation:
      "A 14-month payback means costs were recovered in just over one year.",
  },
  {
    id: "toefl-extra-40",
    skill: "Vocabulary in context",
    prompt:
      "The curator’s tour was so ___ that several visitors took notes on every stop.",
    choices: ["mundane", "perfunctory", "illuminating", "ambiguous"],
    answer: 2,
    explanation:
      "Visitors taking detailed notes suggests the tour was informative and illuminating.",
  },
];

export const extraSatQuestions: EnglishPracticeQuestion[] = [
  {
    id: "sat-extra-1",
    skill: "Standard English Conventions",
    prompt:
      "The research team completed the trial, ___ the results would not be published until peer review concluded.",
    choices: ["but", "and", "so", "for"],
    answer: 0,
    explanation:
      "A contrast between completing the trial and delaying publication requires but.",
  },
  {
    id: "sat-extra-2",
    skill: "Transitions",
    prompt:
      "The survey measured self-reported sleep quality. ___, wrist sensors recorded actual sleep duration.",
    choices: ["Consequently", "Likewise", "In addition", "Nevertheless"],
    answer: 2,
    explanation:
      "The second instrument adds another measurement method, so In addition fits.",
  },
  {
    id: "sat-extra-3",
    skill: "Information and Ideas",
    prompt:
      "A graph shows electric bus ridership rising after a city lowered fares, while diesel bus ridership stayed flat. Which claim is best supported?",
    choices: [
      "Lower fares were associated with higher electric bus ridership.",
      "All bus riders switched to electric buses.",
      "Fare changes never affect ridership.",
      "Diesel buses were removed from service.",
    ],
    answer: 0,
    explanation:
      "The data support a link for electric buses without proving universal switching.",
  },
  {
    id: "sat-extra-4",
    skill: "Expression of Ideas",
    prompt:
      "Which sentence most effectively introduces a paragraph about why a study’s sample limits its conclusions?",
    choices: [
      "The researchers used computers.",
      "Because the participants were all from one region, the findings may not generalize nationally.",
      "Science is collaborative.",
      "The lab opened in 2019.",
    ],
    answer: 1,
    explanation:
      "It identifies the limitation and explains its impact on generalization.",
  },
  {
    id: "sat-extra-5",
    skill: "Central Ideas",
    prompt:
      "A passage argues that community repair workshops reduce electronic waste. Which detail best supports the central idea?",
    choices: [
      "Workshops meet in basements.",
      "Participants fixed 320 devices in one year that otherwise would have been discarded.",
      "Electricity powers many devices.",
      "Some tools are expensive.",
    ],
    answer: 1,
    explanation:
      "Quantified repairs directly support waste reduction.",
  },
  {
    id: "sat-extra-6",
    skill: "Algebra",
    prompt: "If 4x − 9 = 27, what is the value of x?",
    choices: ["4", "6", "9", "18"],
    answer: 2,
    explanation: "Add 9 to both sides: 4x = 36. Divide by 4: x = 9.",
  },
  {
    id: "sat-extra-7",
    skill: "Data interpretation",
    prompt:
      "A bar chart shows average daily steps increasing from 6,200 in March to 8,100 in June for program participants. Which statement is best supported?",
    choices: [
      "Steps decreased over the period.",
      "Participants’ average daily steps were higher in June than in March.",
      "Every participant walked exactly 8,100 steps.",
      "The program had no effect on anyone.",
    ],
    answer: 1,
    explanation:
      "The averages rise from March to June, supporting a higher June average.",
  },
  {
    id: "sat-extra-8",
    skill: "Punctuation",
    prompt:
      "Which sentence is correctly punctuated?",
    choices: [
      "The specimens which were stored at −80°C, remained viable for months.",
      "The specimens, which were stored at −80°C, remained viable for months.",
      "The specimens which were stored at −80°C remained viable, for months.",
      "The specimens which, were stored at −80°C remained viable for months.",
    ],
    answer: 1,
    explanation:
      "A nonessential clause is set off with commas: The specimens, which were stored at −80°C, remained viable.",
  },
  {
    id: "sat-extra-9",
    skill: "Rhetoric",
    prompt:
      "A writer calls a funding increase “a down payment on long-term research capacity.” What is the writer most likely suggesting?",
    choices: [
      "The funding solves every future problem",
      "The funding is an initial step toward building sustained research strength",
      "Research should be cancelled",
      "Long-term projects are impossible",
    ],
    answer: 1,
    explanation:
      "Down payment implies a first installment toward a larger goal.",
  },
  {
    id: "sat-extra-10",
    skill: "Words in context",
    prompt:
      "Although the composer’s early sketches were ___, the finished symphony displayed remarkable polish.",
    choices: ["refined", "fragmentary", "celebrated", "immutable"],
    answer: 1,
    explanation:
      "The contrast with a polished finished work suggests the sketches were incomplete or fragmentary.",
  },
  {
    id: "sat-extra-11",
    skill: "Linear equations",
    prompt:
      "A line has slope −3 and y-intercept 5. Which equation represents the line?",
    choices: ["y = −3x + 5", "y = 3x + 5", "y = −3x − 5", "y = 5x − 3"],
    answer: 0,
    explanation: "Slope-intercept form y = mx + b gives y = −3x + 5.",
  },
  {
    id: "sat-extra-12",
    skill: "Standard English Conventions",
    prompt: "Each volunteer ___ required to complete safety training before the shift.",
    choices: ["are", "were", "is", "have been"],
    answer: 2,
    explanation: "Each is singular and takes is.",
  },
  {
    id: "sat-extra-13",
    skill: "Transitions",
    prompt:
      "The first algorithm was fast. ___, it produced unreliable estimates on small datasets.",
    choices: ["Moreover", "However", "Similarly", "Thus"],
    answer: 1,
    explanation:
      "Unreliable estimates contrast with being fast, so However fits.",
  },
  {
    id: "sat-extra-14",
    skill: "Information and Ideas",
    prompt:
      "A passage states that a glacier retreated two kilometers between 1990 and 2020 while nearby average temperatures rose. Which inference is most cautious?",
    choices: [
      "Temperature change may be associated with the glacier’s retreat.",
      "The glacier advanced during the period.",
      "Temperature cannot influence glaciers.",
      "All glaciers will disappear next year.",
    ],
    answer: 0,
    explanation:
      "Parallel trends support a possible association without proving inevitability.",
  },
  {
    id: "sat-extra-15",
    skill: "Expression of Ideas",
    prompt:
      "Which sentence best emphasizes the practical application of a chemistry discovery?",
    choices: [
      "Chemists use glassware.",
      "The catalyst could lower production costs for biodegradable packaging.",
      "Science has many branches.",
      "The discovery occurred on a Tuesday.",
    ],
    answer: 1,
    explanation:
      "It connects the discovery to a concrete real-world use.",
  },
  {
    id: "sat-extra-16",
    skill: "Central Ideas",
    prompt:
      "A text claims that urban beekeeping supports pollination in food deserts. Which detail best supports that claim?",
    choices: [
      "Bees produce honey.",
      "Hive placements near community gardens increased fruit set in neighboring plots.",
      "Insects have six legs.",
      "Some residents dislike bees.",
    ],
    answer: 1,
    explanation:
      "Increased fruit set near hives supports improved pollination.",
  },
  {
    id: "sat-extra-17",
    skill: "Algebra",
    prompt:
      "A store sells notebooks for $4 each. Which expression represents the total cost for n notebooks?",
    choices: ["4 + n", "4n", "n − 4", "4/n"],
    answer: 1,
    explanation: "Total cost equals price per item times quantity: 4n.",
  },
  {
    id: "sat-extra-18",
    skill: "Data interpretation",
    prompt:
      "A table lists museum attendance: 12,400 in 2021 and 15,900 in 2024. Which statement is accurate?",
    choices: [
      "Attendance was lower in 2024 than in 2021.",
      "Attendance increased between 2021 and 2024.",
      "Attendance was identical both years.",
      "The table includes monthly weather data.",
    ],
    answer: 1,
    explanation: "15,900 is greater than 12,400, indicating an increase.",
  },
  {
    id: "sat-extra-19",
    skill: "Punctuation",
    prompt:
      "Which option correctly punctuates a list within a sentence?",
    choices: [
      "The kit includes: sensors, cables and a manual.",
      "The kit includes sensors, cables, and a manual.",
      "The kit includes sensors cables, and a manual.",
      "The kit, includes sensors cables and a manual.",
    ],
    answer: 1,
    explanation:
      "Items in a series are separated by commas, including before and in a three-item list.",
  },
  {
    id: "sat-extra-20",
    skill: "Rhetoric",
    prompt:
      "An editorial describes a policy as “a bridge, not a destination.” What is the editorialist’s likely purpose?",
    choices: [
      "To claim the policy is the final solution",
      "To argue the policy is a temporary step toward further reform",
      "To discuss bridge construction",
      "To reject any policy change",
    ],
    answer: 1,
    explanation:
      "Calling something a bridge suggests interim progress, not an endpoint.",
  },
  {
    id: "sat-extra-21",
    skill: "Words in context",
    prompt:
      "The diplomat’s remarks were deliberately ___, allowing multiple audiences to interpret them favorably.",
    choices: ["explicit", "equivocal", "incendiary", "verbose"],
    answer: 1,
    explanation:
      "Equivocal means ambiguous, permitting varied interpretations.",
  },
  {
    id: "sat-extra-22",
    skill: "Linear equations",
    prompt:
      "What is the y-intercept of the line y = 7x − 2?",
    choices: ["7", "−2", "2", "−7"],
    answer: 1,
    explanation: "In y = mx + b, the y-intercept b is −2.",
  },
  {
    id: "sat-extra-23",
    skill: "Standard English Conventions",
    prompt:
      "The committee has reviewed the proposal, and it ___ a decision by Friday.",
    choices: ["announce", "announces", "will announce", "announcing"],
    answer: 2,
    explanation:
      "Future time by Friday calls for the future tense will announce.",
  },
  {
    id: "sat-extra-24",
    skill: "Transitions",
    prompt:
      "Scientists mapped the river’s course in 1920. ___, satellite images reveal channels that are now dry.",
    choices: ["Conversely", "Today", "Nevertheless", "For example"],
    answer: 1,
    explanation:
      "Today shifts the time frame to present observation, linking past mapping to current imagery.",
  },
  {
    id: "sat-extra-25",
    skill: "Information and Ideas",
    prompt:
      "A study finds that students who ate breakfast scored higher on morning quizzes than those who skipped it. Which claim stays within the evidence?",
    choices: [
      "Breakfast caused every student to earn perfect scores.",
      "Skipping breakfast was associated with lower morning quiz scores in the study.",
      "Breakfast has no relationship to academic performance in any context.",
      "All students in the study skipped breakfast.",
    ],
    answer: 1,
    explanation:
      "The study shows association within the sample, not universal causation.",
  },
  {
    id: "sat-extra-26",
    skill: "Expression of Ideas",
    prompt:
      "Which revision best combines these sentences? “The map was outdated. It showed a road that had been removed.”",
    choices: [
      "The map was outdated, it showed a road that had been removed.",
      "The map was outdated, showing a road that had been removed.",
      "The map was outdated showing a road that had been removed.",
      "Outdated the map was, and a road removed it showed.",
    ],
    answer: 1,
    explanation:
      "A participial phrase (showing…) efficiently combines the ideas.",
  },
  {
    id: "sat-extra-27",
    skill: "Central Ideas",
    prompt:
      "A passage’s main idea is that shade structures make playgrounds safer in hot climates. Which detail best supports it?",
    choices: [
      "Playgrounds contain swings.",
      "Surface temperatures under shade sails were 20°F lower at noon.",
      "Children play outdoors.",
      "Climates vary by region.",
    ],
    answer: 1,
    explanation:
      "Lower surface temperatures directly support safer play in heat.",
  },
  {
    id: "sat-extra-28",
    skill: "Algebra",
    prompt:
      "If 2(x + 5) = 18, what is the value of x?",
    choices: ["4", "9", "14", "23"],
    answer: 0,
    explanation: "Divide by 2: x + 5 = 9. Subtract 5: x = 4.",
  },
  {
    id: "sat-extra-29",
    skill: "Data interpretation",
    prompt:
      "A scatterplot shows a negative correlation between hours of screen time before bed and reported sleep quality. Which statement is best supported?",
    choices: [
      "More pre-bed screen time tends to align with lower sleep quality ratings.",
      "Screen time improves sleep for everyone.",
      "Sleep quality is unrelated to habits.",
      "The plot proves screen time causes illness.",
    ],
    answer: 0,
    explanation:
      "Negative correlation supports an inverse trend, not universal causation.",
  },
  {
    id: "sat-extra-30",
    skill: "Punctuation",
    prompt:
      "Which sentence uses a colon correctly?",
    choices: [
      "The experiment requires: three trials.",
      "The experiment requires three trials: baseline, intervention, and follow-up.",
      "The experiment: requires three trials.",
      "The experiment requires three trials baseline: intervention and follow-up.",
    ],
    answer: 1,
    explanation:
      "A colon introduces an explanation after a complete independent clause.",
  },
  {
    id: "sat-extra-31",
    skill: "Rhetoric",
    prompt:
      "A speaker repeats the phrase “we cannot wait” three times before proposing a budget item. What is the likely rhetorical effect?",
    choices: [
      "To confuse the audience about timing",
      "To emphasize urgency and build momentum for the proposal",
      "To provide statistical evidence",
      "To define a technical term",
    ],
    answer: 1,
    explanation:
      "Repetition of urgency signals emphasis and momentum.",
  },
  {
    id: "sat-extra-32",
    skill: "Words in context",
    prompt:
      "The architect’s design was ___: every material was chosen to reduce energy use without sacrificing natural light.",
    choices: ["haphazard", "intentional", "obsolete", "derivative"],
    answer: 1,
    explanation:
      "Deliberate material choices indicate intentional design.",
  },
  {
    id: "sat-extra-33",
    skill: "Linear equations",
    prompt:
      "Which point lies on the line y = 2x + 1?",
    choices: ["(0, 0)", "(1, 3)", "(2, 4)", "(3, 5)"],
    answer: 1,
    explanation: "When x = 1, y = 2(1) + 1 = 3, so (1, 3) is on the line.",
  },
  {
    id: "sat-extra-34",
    skill: "Standard English Conventions",
    prompt:
      "Walking into the lab, ___",
    choices: [
      "the safety goggles were noticed by the student.",
      "the student noticed the safety goggles on the bench.",
      "the bench held goggles that were noticed.",
      "there was noticing of goggles by the student.",
    ],
    answer: 1,
    explanation:
      "The introductory phrase must modify the subject that follows: the student walked in.",
  },
  {
    id: "sat-extra-35",
    skill: "Transitions",
    prompt:
      "The pilot program succeeded on a small scale. ___, policymakers expanded it citywide.",
    choices: ["Nevertheless", "Consequently", "In contrast", "Regardless"],
    answer: 1,
    explanation:
      "Success led to expansion, so Consequently fits.",
  },
  {
    id: "sat-extra-36",
    skill: "Information and Ideas",
    prompt:
      "Two articles describe the same fossil. Article A says it is 90 million years old; Article B says 70 million. What is the most accurate conclusion?",
    choices: [
      "Both dates must be exactly correct.",
      "The sources provide conflicting age estimates that require further evidence.",
      "Fossils cannot be dated.",
      "Article B must be fraudulent.",
    ],
    answer: 1,
    explanation:
      "Conflicting expert estimates imply uncertainty pending further analysis.",
  },
  {
    id: "sat-extra-37",
    skill: "Expression of Ideas",
    prompt:
      "Which sentence should be deleted because it distracts from a paragraph about wetland restoration?",
    choices: [
      "Native sedges stabilized the shoreline within two growing seasons.",
      "Wetland plants filter runoff before it reaches the river.",
      "My cousin once visited a marsh on vacation.",
      "Waterfowl returned after invasive reeds were removed.",
    ],
    answer: 2,
    explanation:
      "The personal vacation anecdote is off-topic for a scientific restoration paragraph.",
  },
  {
    id: "sat-extra-38",
    skill: "Central Ideas",
    prompt:
      "A passage explains how microgrids keep hospitals powered during outages. Which statement expresses the central idea?",
    choices: [
      "Hospitals use electricity.",
      "Localized power networks can maintain critical services when the main grid fails.",
      "Outages never occur.",
      "Microgrids are identical to national grids.",
    ],
    answer: 1,
    explanation:
      "The focus is on localized networks sustaining critical power during failures.",
  },
  {
    id: "sat-extra-39",
    skill: "Algebra",
    prompt:
      "The sum of a number and 12 is 30. Which equation represents the situation?",
    choices: ["12x = 30", "x + 12 = 30", "x − 12 = 30", "x/12 = 30"],
    answer: 1,
    explanation: "Sum of a number x and 12 means x + 12 = 30.",
  },
  {
    id: "sat-extra-40",
    skill: "Data interpretation",
    prompt:
      "A line graph of reservoir volume shows steady decline from April to September and partial recovery in October after heavy rain. Which statement is best supported?",
    choices: [
      "Volume was unchanged all year.",
      "Volume fell during dry months and rose after rainfall in October.",
      "The reservoir was empty every month.",
      "Rainfall cannot affect reservoir volume.",
    ],
    answer: 1,
    explanation:
      "Decline then partial recovery after rain matches the described pattern.",
  },
];
