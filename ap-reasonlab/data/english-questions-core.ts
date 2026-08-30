/**
 * Core English bank rebuilt around current Digital SAT and post-Jan-2026 TOEFL iBT task families.
 * All material is original. Productive TOEFL tasks remain explicitly labeled skill_drill until
 * the UI collects typed/spoken responses instead of forcing a multiple-choice interaction.
 */
import type { EnglishPracticeQuestion } from "./english-content";

export const coreToeflQuestions: EnglishPracticeQuestion[] = [
  {
    id: "toefl-core-read-daily-1",
    skill: "Read in Daily Life",
    taskType: "Read in Daily Life",
    authenticity: "exam_authentic",
    responseMode: "single_choice",
    prompt: "Why does the library ask students to reserve a room before 4:00 p.m.?",
    passage:
      "University Library Notice — Group study rooms may be used without a reservation before 4:00 p.m. Beginning at 4:00 p.m., demand is highest, so rooms are assigned only to groups that reserve online. A reservation is held for ten minutes after its start time; after that, the room may be given to another group.",
    choices: [
      "To prevent students from using rooms in the morning",
      "To manage heavy demand later in the day",
      "To make every reservation last exactly ten minutes",
      "To limit study rooms to individual students",
    ],
    answer: 1,
    explanation:
      "The notice explicitly connects the reservation requirement after 4:00 p.m. with the period of highest demand. The ten-minute rule concerns how long a room is held, not why reservations are required.",
  },
  {
    id: "toefl-core-read-academic-1",
    skill: "Read an Academic Passage",
    taskType: "Read an Academic Passage",
    authenticity: "exam_authentic",
    responseMode: "single_choice",
    prompt: "Which inference about the coastal plants is best supported by the passage?",
    passage:
      "Some coastal plants tolerate salt by storing excess sodium ions inside cell compartments called vacuoles. Researchers compared two populations of the same species: one from salt marshes and one from inland fields. Under identical laboratory conditions, the marsh population maintained photosynthesis at salt concentrations that sharply reduced photosynthesis in the inland population. The marsh plants also showed higher expression of genes associated with transporting sodium into vacuoles.",
    choices: [
      "The marsh population's salt tolerance is associated with stronger sodium-sequestration mechanisms.",
      "All plants from inland fields die when exposed to any sodium ions.",
      "Photosynthesis increases whenever sodium enters the cytoplasm.",
      "The two populations are different species with unrelated genes.",
    ],
    answer: 0,
    explanation:
      "Two pieces of evidence point in the same direction: marsh plants keep photosynthesizing under salt stress and show greater expression of genes that move sodium into vacuoles. The passage supports an association, not the absolute claims in the other choices.",
  },
  {
    id: "toefl-core-complete-words-1",
    skill: "Complete the Words",
    taskType: "Complete the Words",
    authenticity: "exam_authentic",
    responseMode: "single_choice",
    prompt: "Choose the letters that correctly complete the word in context.",
    passage:
      "Because the telescope collected data for several years, astronomers could distin___ish a recurring signal from random measurement noise.",
    choices: ["gu", "qu", "cu", "ku"],
    answer: 0,
    explanation:
      "The complete word is distinguish. In context, the researchers are separating a recurring signal from noise, which matches the meaning of distinguish.",
  },
  {
    id: "toefl-core-listen-conversation-1",
    skill: "Listen to a Conversation",
    taskType: "Listen to a Conversation",
    authenticity: "exam_authentic",
    responseMode: "single_choice",
    prompt: "What will the student most likely do next?",
    passage:
      "Student: I submitted the lab report, but the course site still says 'missing.'\nTeaching assistant: I can see your file here. The system sometimes takes an hour to update. If the status is still wrong after lunch, send me a screenshot and I will correct it manually.\nStudent: Okay, so I should wait before resubmitting?\nTeaching assistant: Right. A second upload could create two versions for the grader.",
    choices: [
      "Upload the report again immediately",
      "Wait and check the status later",
      "Ask the grader to ignore the first report",
      "Delete the original submission",
    ],
    answer: 1,
    explanation:
      "The teaching assistant explicitly tells the student to wait and check later, warning that another upload could create duplicate versions.",
  },
  {
    id: "toefl-core-listen-announcement-1",
    skill: "Listen to an Announcement",
    taskType: "Listen to an Announcement",
    authenticity: "exam_authentic",
    responseMode: "single_choice",
    prompt: "What is the main purpose of the announcement?",
    passage:
      "Announcer: Due to maintenance on the north entrance, the science building will open only through the south doors on Thursday morning. Laboratories will meet as scheduled. Students who use mobility devices may request access to the service elevator by calling campus facilities before arriving.",
    choices: [
      "To cancel Thursday science laboratories",
      "To explain a temporary change in building access",
      "To advertise a new science building",
      "To ask all students to call campus facilities",
    ],
    answer: 1,
    explanation:
      "The announcement centers on temporary entry arrangements caused by maintenance. Labs are not canceled, and only some students may need to contact facilities.",
  },
  {
    id: "toefl-core-listen-talk-1",
    skill: "Listen to an Academic Talk",
    taskType: "Listen to an Academic Talk",
    authenticity: "exam_authentic",
    responseMode: "single_choice",
    prompt: "Why does the professor mention tree rings from two different valleys?",
    passage:
      "Professor: A single tree can reflect very local conditions, so climate historians rarely rely on one specimen. In one study, researchers compared ring widths from old pines in two valleys separated by more than one hundred kilometers. Both records showed unusually narrow rings during the same sequence of years. That agreement made a regional drought explanation more convincing than a local disease explanation.",
    choices: [
      "To show why the researchers trusted a regional explanation",
      "To prove that tree disease never affects ring width",
      "To explain how the valleys became geographically separated",
      "To argue that one tree is sufficient for climate reconstruction",
    ],
    answer: 0,
    explanation:
      "The professor uses agreement between independent locations as corroborating evidence. Matching narrow-ring years across distant valleys make a regional drought more plausible than a local cause.",
  },
  {
    id: "toefl-core-build-sentence-1",
    skill: "Build a Sentence",
    taskType: "Build a Sentence",
    authenticity: "skill_drill",
    responseMode: "sentence_build",
    prompt: "Choose the sentence that correctly expresses the intended relationship.",
    passage:
      "Intended meaning: The first trial produced an unexpected result. The researchers therefore repeated the procedure before publishing a conclusion.",
    choices: [
      "Because the first trial produced an unexpected result, the researchers repeated the procedure before publishing a conclusion.",
      "The first trial produced an unexpected result, although the researchers had published a conclusion before repeating the procedure.",
      "The researchers repeated the procedure, unless the first trial had produced an unexpected result.",
      "Producing an unexpected result, a conclusion published the researchers before the procedure repeated.",
    ],
    answer: 0,
    explanation:
      "Choice A accurately expresses the cause-and-response relationship and forms a complete grammatical sentence. This is a strategy drill; the production UI will later support direct sentence building.",
  },
  {
    id: "toefl-core-discussion-1",
    skill: "Write for an Academic Discussion",
    taskType: "Write for an Academic Discussion",
    authenticity: "skill_drill",
    responseMode: "academic_discussion",
    prompt: "Which response best demonstrates the qualities you should produce in an Academic Discussion post?",
    passage:
      "Professor: Some universities are considering replacing a portion of large lectures with smaller discussion sessions. Would this change improve learning? Why or why not?\n\nStudent A: Smaller classes are always better, so the answer is obvious.\nStudent B: Discussion can help, but large lectures can efficiently introduce difficult material.",
    choices: [
      "I agree with Student A because smaller is better.",
      "Replacing every lecture would be a mistake, but adding weekly discussion sessions could improve learning because students would have a regular chance to explain ideas and receive feedback. For example, a physics lecture can introduce conservation of energy, while a smaller session can require students to defend which system boundary they chose.",
      "Universities have used lectures for many years.",
      "There are advantages and disadvantages, and everyone has a different opinion.",
    ],
    answer: 1,
    explanation:
      "The strongest response takes a clear position, develops a specific reason, and adds a concrete example while engaging with the discussion rather than repeating another student's claim.",
    referenceAnswer:
      "Replacing every lecture would be a mistake, but adding weekly discussion sessions could improve learning because students would regularly explain ideas and receive feedback. A physics lecture might introduce conservation of energy, while a smaller session could ask students to defend a system boundary and respond to classmates' reasoning.",
    scoringGuide: [
      "States a clear, relevant position.",
      "Develops the position with a specific reason or example.",
      "Uses coherent, understandable academic English.",
    ],
  },
  {
    id: "toefl-core-email-1",
    skill: "Write an Email",
    taskType: "Write an Email",
    authenticity: "skill_drill",
    responseMode: "email",
    prompt: "Which draft best models an effective response to the email situation?",
    passage:
      "Situation: Your seminar presentation is scheduled for Friday, but the required dataset has not yet been released by the instructor. Write to the instructor to explain the problem and request a practical solution.",
    choices: [
      "Hi, I can't do it. Send data now.",
      "Dear Professor Chen, I am preparing Friday's seminar presentation, but the dataset listed in the assignment page is not yet available. Could you let me know whether it will be posted soon, or whether I should use last week's sample dataset instead? I can continue preparing the methods section while I wait. Thank you for your guidance.",
      "Dear Professor, presentations are difficult and datasets are important.",
      "I will not present Friday because the data is missing.",
    ],
    answer: 1,
    explanation:
      "The response clearly states the problem, makes a specific and reasonable request, proposes a workable alternative, and maintains an appropriate academic tone.",
    referenceAnswer:
      "Dear Professor Chen, I am preparing Friday's seminar presentation, but the dataset listed on the assignment page is not yet available. Could you let me know whether it will be posted soon, or whether I should use last week's sample dataset instead? I can continue preparing the methods section while I wait. Thank you for your guidance.",
    scoringGuide: [
      "Explains the situation clearly and accurately.",
      "Makes a specific, appropriate request or proposes a solution.",
      "Uses organized, courteous, comprehensible email language.",
    ],
  },
  {
    id: "toefl-core-interview-1",
    skill: "Take an Interview",
    taskType: "Take an Interview",
    authenticity: "skill_drill",
    responseMode: "spoken",
    prompt: "Which response best models a focused interview answer?",
    passage:
      "Interviewer: Some students prefer to study one subject for several hours, while others switch subjects frequently. Which approach works better for you, and why?",
    choices: [
      "I don't know. Both can be okay.",
      "I usually work on one subject for about an hour before switching. Staying with one topic long enough helps me solve difficult problems without restarting my thinking, but changing subjects after a focused block keeps me from becoming careless. For example, I might finish a physics problem set and then move to reading practice.",
      "Studying is important for all students in every country.",
      "There are many subjects, such as math, science, history, and English.",
    ],
    answer: 1,
    explanation:
      "The response answers the question directly, gives a clear reason, and supports it with a relevant example. It is labeled as a strategy drill until the page supports actual recorded responses.",
    referenceAnswer:
      "I usually work on one subject for about an hour before switching. A focused block lets me stay with a difficult problem long enough to make progress, while changing subjects afterward helps me reset my attention. For example, I might finish a physics problem set and then move to reading practice.",
    scoringGuide: [
      "Directly answers the interview question.",
      "Develops at least one clear reason or example.",
      "Speech should be intelligible, coherent, and paced well enough to follow.",
    ],
  },
];

export const coreSatQuestions: EnglishPracticeQuestion[] = [
  {
    id: "sat-core-ii-1",
    skill: "Information and Ideas",
    authenticity: "exam_authentic",
    responseMode: "single_choice",
    prompt: "Which choice best states the main idea of the text?",
    passage:
      "Marine biologist Keisha Moreno studied two populations of the same crab species living at different depths. Crabs from deeper water had larger gill surfaces, but when both populations were raised for several generations under the same oxygen conditions, the difference became much smaller. Moreno argues that both inherited variation and developmental response to the environment contribute to gill size.",
    choices: [
      "Gill size in the crab species is determined entirely by water depth.",
      "Differences in crab gill size appear to reflect both inherited and environmental influences.",
      "Deep-water crabs cannot survive when oxygen conditions change.",
      "The two crab populations should be classified as separate species.",
    ],
    answer: 1,
    explanation:
      "The final sentence states the central conclusion, and the preceding evidence supports both components: an initial population difference and a reduced difference after shared rearing conditions.",
  },
  {
    id: "sat-core-ii-2",
    skill: "Information and Ideas",
    authenticity: "exam_authentic",
    responseMode: "single_choice",
    prompt: "Which choice most logically completes the text?",
    passage:
      "A city tested reflective roof coatings on 40 otherwise similar apartment buildings. During sunny summer afternoons, coated roofs averaged 7°C cooler than uncoated roofs. Indoor temperatures, however, differed by only about 1°C in buildings with modern insulation but by nearly 4°C in poorly insulated buildings. These results suggest that ____",
    choices: [
      "reflective coatings can affect indoor temperature, but the size of the effect depends partly on insulation.",
      "modern insulation prevents roofs from absorbing any solar energy.",
      "poorly insulated buildings always have cooler roofs than insulated buildings.",
      "roof coatings have exactly the same effect on every type of building.",
    ],
    answer: 0,
    explanation:
      "The data show a cooling effect in both building groups but a much larger indoor effect where insulation is poor. Choice A captures that interaction without making an absolute claim.",
  },
  {
    id: "sat-core-cs-1",
    skill: "Craft and Structure",
    authenticity: "exam_authentic",
    responseMode: "single_choice",
    prompt: "As used in the text, what does “qualified” most nearly mean?",
    passage:
      "Historian Laila Morgan initially described the railway as the decisive cause of the town's growth. After examining tax records showing that several factories had opened before the railway arrived, however, Morgan qualified her claim: the railway accelerated an expansion that had already begun.",
    choices: ["certified", "limited", "praised", "repeated"],
    answer: 1,
    explanation:
      "Morgan narrows her original claim after encountering contrary evidence. In this context, qualified means limited or made less absolute.",
  },
  {
    id: "sat-core-cs-2",
    skill: "Craft and Structure",
    authenticity: "exam_authentic",
    responseMode: "single_choice",
    prompt: "Which choice best describes the function of the second sentence in the text as a whole?",
    passage:
      "Ecologists once assumed that every patch of seagrass in a bay responded similarly to warming. A decade-long survey instead found that shallow patches declined rapidly during heat waves while deeper patches remained comparatively stable. The researchers therefore recommend monitoring depth zones separately rather than treating the bay as one uniform habitat.",
    choices: [
      "It presents evidence that challenges an earlier assumption.",
      "It defines a technical term used in the first sentence.",
      "It gives an example unrelated to the recommendation.",
      "It describes a method the researchers rejected before collecting data.",
    ],
    answer: 0,
    explanation:
      "The second sentence supplies the contrasting evidence—different responses by depth—that overturns the assumption of uniform response and motivates the recommendation.",
  },
  {
    id: "sat-core-eoi-1",
    skill: "Expression of Ideas",
    authenticity: "exam_authentic",
    responseMode: "single_choice",
    prompt: "Which choice completes the text with the most logical transition?",
    passage:
      "The first prototype processed images more quickly than the second. _____, its measurements varied substantially when lighting conditions changed, whereas the second prototype remained stable.",
    choices: ["For example,", "However,", "Similarly,", "Therefore,"],
    answer: 1,
    explanation:
      "The second sentence introduces a disadvantage that contrasts with the first prototype's speed advantage, so However is the logical transition.",
  },
  {
    id: "sat-core-eoi-2",
    skill: "Expression of Ideas",
    authenticity: "exam_authentic",
    responseMode: "single_choice",
    prompt: "Which choice most effectively uses the notes to accomplish the goal?",
    passage:
      "A student wants to emphasize how a discovery changed scientists' interpretation of an archaeological site.\n\nNotes:\n• A cave in northern Spain contains charcoal drawings.\n• Researchers once dated most drawings to about 18,000 years ago.\n• Uranium-series dating of mineral deposits above one hand stencil indicates a minimum age of about 64,000 years.\n• That date is earlier than the known arrival of modern humans in the region.\n• Researchers therefore consider the possibility that Neanderthals made at least some of the cave art.",
    choices: [
      "The cave contains charcoal drawings and a hand stencil beneath mineral deposits.",
      "Researchers have used more than one method to study art in a cave in northern Spain.",
      "A minimum date of about 64,000 years for one stencil led researchers to consider that Neanderthals, rather than only modern humans, may have created some of the cave art.",
      "Modern humans arrived in the region after some mineral deposits formed in the cave.",
    ],
    answer: 2,
    explanation:
      "Choice C directly connects the new date to the changed interpretation—the possibility of Neanderthal authorship—which is exactly the student's stated goal.",
  },
  {
    id: "sat-core-sec-1",
    skill: "Standard English Conventions",
    authenticity: "exam_authentic",
    responseMode: "single_choice",
    prompt: "Which choice completes the text so that it conforms to the conventions of Standard English?",
    passage:
      "The research team calibrated every sensor before the field test _____ the team also recorded the calibration values so that later measurements could be checked for drift.",
    choices: [", and", ",", "; and", ": and"],
    answer: 0,
    explanation:
      "The text contains two independent clauses. A comma followed by the coordinating conjunction and correctly joins them. A comma alone would create a comma splice.",
  },
  {
    id: "sat-core-sec-2",
    skill: "Standard English Conventions",
    authenticity: "exam_authentic",
    responseMode: "single_choice",
    prompt: "Which choice completes the text so that it conforms to the conventions of Standard English?",
    passage:
      "Samples collected from the river in May _____ higher concentrations of dissolved nitrate than samples collected from the same sites in September.",
    choices: ["shows", "show", "showing", "has shown"],
    answer: 1,
    explanation:
      "The plural subject Samples requires the plural verb show. The intervening phrase collected from the river in May does not change the subject's number.",
  },
  {
    id: "sat-core-algebra-1",
    skill: "Algebra",
    authenticity: "exam_authentic",
    responseMode: "single_choice",
    prompt:
      "A laboratory charges a fixed equipment fee plus the same hourly rate for microscope use. A 3-hour reservation costs $86, and a 7-hour reservation costs $158. What is the hourly rate, in dollars per hour?",
    choices: ["14", "18", "22", "24"],
    answer: 1,
    explanation:
      "The cost increases by $72 when time increases by 4 hours, so the hourly rate is 72/4 = $18 per hour. The fixed fee is not needed to answer the question.",
  },
  {
    id: "sat-core-advanced-1",
    skill: "Advanced Math",
    authenticity: "exam_authentic",
    responseMode: "single_choice",
    prompt:
      "For a certain population model, P(t)=120(1.08)^t, where t is the number of years after an initial measurement. Which expression gives the population 6 months after the initial measurement?",
    choices: ["120(1.08)^6", "120(1.08)^(1/2)", "120(1.04)", "60(1.08)"],
    answer: 1,
    explanation:
      "Six months is one-half year, so substitute t = 1/2 into the exponential model: P(1/2)=120(1.08)^(1/2).",
  },
  {
    id: "sat-core-psda-1",
    skill: "Problem-Solving and Data Analysis",
    authenticity: "exam_authentic",
    responseMode: "single_choice",
    prompt:
      "A random sample of 250 students at a school found that 145 support extending library hours. Based on the sample, which estimate is most reasonable for the number of supporters among all 1,800 students at the school?",
    choices: ["580", "900", "1,044", "1,450"],
    answer: 2,
    explanation:
      "The sample proportion is 145/250 = 0.58. Applying that proportion to 1,800 students gives 0.58 × 1,800 = 1,044.",
  },
  {
    id: "sat-core-geometry-1",
    skill: "Geometry and Trigonometry",
    authenticity: "exam_authentic",
    responseMode: "single_choice",
    prompt:
      "A right triangle has legs of lengths 9 and 12. A second right triangle is similar to the first and has a hypotenuse of length 25. What is the length of the shorter leg of the second triangle?",
    choices: ["10", "12", "15", "20"],
    answer: 2,
    explanation:
      "The first triangle is a 9-12-15 right triangle. The scale factor from hypotenuse 15 to 25 is 5/3, so the shorter leg is 9 × 5/3 = 15.",
  },
];
