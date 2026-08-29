import type { EnglishPracticeQuestion } from "./english-content";

function item(
  id: string,
  skill: string,
  passage: string,
  prompt: string,
  choices: [string, string, string, string],
  answer: number,
  explanation: string
): EnglishPracticeQuestion {
  if (typeof prompt !== "string") {
    throw new Error(`Bad authentic TOEFL item ${id}: prompt must be a string`);
  }
  return { id, skill, passage, prompt, choices, answer, explanation };
}

/** Original TOEFL iBT–shaped items (ETS 2026 task types). Not real exam questions. */
export const authenticToeflQuestions: EnglishPracticeQuestion[] = [
  item(
    "toefl-auth-cw-1",
    "Complete the Words",
    "",
    "The lab will re___iew the safety protocol before the next trial begins.",
    ["vi", "ve", "vo", "va"],
    0,
    "The completed word is review. The sentence is about checking a protocol."
  ),
  item(
    "toefl-auth-cw-2",
    "Complete the Words",
    "",
    "The two studies do not con___dict each other; they measure different outcomes.",
    ["tra", "tre", "tro", "tru"],
    0,
    "The completed word is contradict."
  ),
  item(
    "toefl-auth-cw-3",
    "Complete the Words",
    "",
    "Please sub___it the form by 5 p.m. Friday.",
    ["m", "n", "mit", "met"],
    2,
    "The completed word is submit."
  ),
  item(
    "toefl-auth-cw-4",
    "Complete the Words",
    "",
    "The results were con___istent across three independent samples.",
    ["s", "sis", "sit", "set"],
    1,
    "The completed word is consistent."
  ),
  item(
    "toefl-auth-cw-5",
    "Complete the Words",
    "",
    "Students must re___ister before they can use the studio.",
    ["g", "gis", "gist", "jest"],
    2,
    "The completed word is register."
  ),
  item(
    "toefl-auth-daily-1",
    "Read in Daily Life",
    `From: Campus Housing\nTo: Residents of East Hall\nSubject: Hot-water interruption\n\nHot water in East Hall will be off Saturday 8:00 a.m.–2:00 p.m. for pipe repair. Showers in West Hall (next door) will stay open. If you need accessibility assistance, email housing@campus.edu by Friday noon.`,
    "What should a resident who needs accessibility help do?",
    [
      "Call the plumber on Saturday morning.",
      "Email housing by Friday noon.",
      "Use East Hall showers only after 2 p.m. Friday.",
      "Move out of East Hall this week.",
    ],
    1,
    "The notice asks residents who need accessibility assistance to email housing by Friday noon."
  ),
  item(
    "toefl-auth-daily-2",
    "Read in Daily Life",
    `LIBRARY HOLD NOTICE\nItem: “Climate Systems, 4th ed.” is ready at the Circulation Desk.\nPickup hours: Mon–Thu 9 a.m.–9 p.m.; Fri 9 a.m.–5 p.m.\nHolds expire after 5 days. Bring your student ID.`,
    "When can the student pick up the book on Friday?",
    ["Until 9 p.m.", "Until 5 p.m.", "Only after 9 p.m.", "Anytime, including Sunday"],
    1,
    "Friday hours end at 5 p.m."
  ),
  item(
    "toefl-auth-daily-3",
    "Read in Daily Life",
    `Course drop deadline: 11:59 p.m. on September 12.\nAfter that date, a W (withdrawal) appears on the transcript.\nAdvisor signature is required only for drops after the deadline.`,
    "What happens if a student drops the course on September 13?",
    [
      "The course is removed with no record.",
      "A W appears on the transcript.",
      "An advisor signature is never needed.",
      "The student cannot drop at all.",
    ],
    1,
    "After September 12, a withdrawal (W) is recorded."
  ),
  item(
    "toefl-auth-daily-4",
    "Read in Daily Life",
    `BUS 12 — Night schedule (weeknights)\nLast campus loop: 11:10 p.m. from the Student Union.\nDoes not run on university holidays.\nExact fare: $1.50; ID tap accepted.`,
    "Which statement is supported?",
    [
      "The bus runs 24 hours.",
      "The last weeknight loop leaves the Student Union at 11:10 p.m.",
      "Fares cannot be paid with an ID tap.",
      "The bus runs on all holidays.",
    ],
    1,
    "The schedule lists 11:10 p.m. as the last campus loop on weeknights."
  ),
  item(
    "toefl-auth-daily-5",
    "Read in Daily Life",
    `Lab 204 — Closed Thursday for equipment calibration.\nMake-up hours: Friday 2–6 p.m. (sign the sheet on the door).\nDo not leave samples in the cold room overnight Thursday.`,
    "What must students avoid Thursday night?",
    [
      "Attending Friday make-up hours",
      "Leaving samples in the cold room",
      "Signing the door sheet on Friday",
      "Using Lab 204 on Wednesday",
    ],
    1,
    "The notice says not to leave samples in the cold room overnight Thursday."
  ),
  item(
    "toefl-auth-acad-1",
    "Read an Academic Passage",
    `Many coastal cities now map “heat islands,” pockets that stay warmer than nearby green space. Dark pavement stores solar energy and releases it at night, so minimum temperatures stay high. In one mid-latitude city, neighborhoods with less than 10% tree cover had nighttime temperatures 2.1°C higher than parks only 800 meters away. The study did not claim that trees alone cause the difference: traffic density and building height also varied. Still, the pattern is consistent with earlier work linking canopy cover to cooler nights.`,
    "Which conclusion is best supported?",
    [
      "Trees are the only cause of cooler nights.",
      "Lower tree cover was associated with higher nighttime temperatures, though other factors also varied.",
      "Heat islands disappear in mid-latitude cities.",
      "Parks were 800 kilometers from the neighborhoods.",
    ],
    1,
    "The passage reports an association and explicitly warns that other variables differed."
  ),
  item(
    "toefl-auth-acad-2",
    "Read an Academic Passage",
    `Spaced retrieval—testing yourself on material after increasing delays—often beats rereading. In a classroom study, students who used brief quizzes over two weeks scored higher on a delayed exam than students who spent the same total time rereading notes. The authors note a limitation: the delayed exam used the same question types as the quizzes, so part of the gain may be familiarity with the format rather than deeper understanding.`,
    "What limitation do the authors emphasize?",
    [
      "The quizzes took more total time than rereading.",
      "The delayed exam resembled the quizzes, so format familiarity may explain some of the gain.",
      "No student improved.",
      "Rereading always produces higher scores.",
    ],
    1,
    "The authors flag that similar question types could inflate the spaced-retrieval advantage."
  ),
  item(
    "toefl-auth-acad-3",
    "Read an Academic Passage",
    `A wetland restoration project reported a 22% rise in recorded bird species over five years. Counts did not return to the 1990 baseline. Researchers used the same survey route each spring, which reduces some sampling noise but cannot capture birds that use the site only in autumn.`,
    "Which claim is supported?",
    [
      "Restoration fully reversed historical losses.",
      "Species counts rose but remained below the 1990 baseline, and autumn users may be missed.",
      "The survey route changed every year.",
      "Birds were counted only in autumn.",
    ],
    1,
    "Both the increase and the remaining gap, plus the seasonal sampling limit, are stated."
  ),
  item(
    "toefl-auth-acad-4",
    "Read an Academic Passage",
    `In a bargaining experiment, pairs who could see each other’s facial expressions reached agreements faster than pairs who heard only voices. The effect disappeared when one participant was told the other was an actor reading a script. The researchers suggest that trust, not the mere presence of a face, may drive the speed difference.`,
    "What do the researchers suggest?",
    [
      "Faces always slow bargaining.",
      "Trust, rather than seeing a face by itself, may explain faster agreements.",
      "Voice-only pairs never agree.",
      "Actors always bargain faster.",
    ],
    1,
    "The actor condition and the authors’ interpretation point to trust, not faces alone."
  ),
  item(
    "toefl-auth-acad-5",
    "Read an Academic Passage",
    `Glacial meltwater can temporarily increase river flow even as a glacier loses mass overall. Downstream communities may therefore see short-term abundance followed by long-term decline. Hydrologists warn against treating a wet decade as proof that a basin is “climate-proof.”`,
    "The hydrologists’ warning is closest to which idea?",
    [
      "A wet decade guarantees permanent water security.",
      "Short-term high flow can hide a longer-term loss of ice mass.",
      "Glaciers never affect rivers.",
      "Communities should ignore meltwater data.",
    ],
    1,
    "Temporary high flow can coexist with overall glacier loss."
  ),
  item(
    "toefl-auth-resp-1",
    "Listen and Choose a Response",
    `You hear: “The printer on the second floor is jammed again. Could you send someone up?”`,
    "Which response is most appropriate?",
    [
      "I already ate lunch.",
      "Sure — I’ll notify facilities and check back in ten minutes.",
      "Printers were invented long ago.",
      "The second floor does not exist.",
    ],
    1,
    "The speaker asks for help with a jammed printer; a clear, task-focused reply fits."
  ),
  item(
    "toefl-auth-resp-2",
    "Listen and Choose a Response",
    `You hear: “Do you mind if we start the review session ten minutes late? The other class is still in the room.”`,
    "Which response is most appropriate?",
    [
      "That’s fine — I’ll wait in the hall.",
      "Review sessions never start late.",
      "I don’t take any classes.",
      "The room has no door.",
    ],
    0,
    "A cooperative reply accepts the delay and states a simple plan."
  ),
  item(
    "toefl-auth-resp-3",
    "Listen and Choose a Response",
    `You hear: “I can’t find the consent form for the survey. Was it attached to last night’s email?”`,
    "Which response is most appropriate?",
    [
      "Yes — it’s the PDF named consent_v2. I can resend it.",
      "Surveys are popular worldwide.",
      "Email was invented recently.",
      "You should never use forms.",
    ],
    0,
    "The question asks whether the form was attached; naming the file and offering to resend answers it."
  ),
  item(
    "toefl-auth-resp-4",
    "Listen and Choose a Response",
    `You hear: “Is this seat taken?”`,
    "Which response is most appropriate?",
    ["The library closes at midnight.", "No, go ahead.", "Seats have four legs.", "I studied chemistry."],
    1,
    "A short, direct answer to a seating request is expected."
  ),
  item(
    "toefl-auth-conv-1",
    "Listen to a Conversation",
    `Student: I need a quiet room this weekend to record a presentation.\nLibrarian: The media booths are booked, but Study Room 6 is free after 3 p.m. Saturday if you don’t need a microphone.\nStudent: I can use my laptop mic. How long can I stay?\nLibrarian: Two hours, and you’ll need to tap your ID at the door.`,
    "Why does the librarian mention Study Room 6?",
    [
      "Because the media booths are unavailable, and Room 6 is free after 3 p.m. Saturday.",
      "Because Room 6 has a professional microphone.",
      "Because the library is closed on Saturday.",
      "Because ID taps are not allowed.",
    ],
    0,
    "The booths are booked; Room 6 is the alternative with a time and ID condition."
  ),
  item(
    "toefl-auth-conv-2",
    "Listen to a Conversation",
    `Advisor: Your transcript shows you still need a lab-science credit.\nStudent: Can Environmental Geology count? It has a field trip, not a weekly lab.\nAdvisor: The catalog lists it as a lab-science if you complete the Saturday field module. Register for the module section, not the lecture-only section.`,
    "What must the student do for the course to count?",
    [
      "Take the lecture-only section.",
      "Register for the module section that includes the Saturday field work.",
      "Drop all science courses.",
      "Wait until senior year with no action.",
    ],
    1,
    "The advisor distinguishes the module section from lecture-only."
  ),
  item(
    "toefl-auth-conv-3",
    "Listen to a Conversation",
    `Student: The problem set is due tomorrow, but the hint sheet isn’t in the course folder.\nTA: I uploaded it an hour ago. Refresh the page — it’s under Week 4, not the syllabus tab.\nStudent: Got it. Is late work accepted?\nTA: Only with a dean’s note. Otherwise the drop box closes at noon.`,
    "Where is the hint sheet?",
    [
      "On the syllabus tab",
      "Under Week 4 in the course folder",
      "In the dean’s office",
      "It was never uploaded",
    ],
    1,
    "The TA says it is under Week 4 after a recent upload."
  ),
  item(
    "toefl-auth-ann-1",
    "Listen to an Announcement",
    `Attention in the Engineering Building: the west elevator is out of service until Monday. Use the east elevator or the stairs at Stair B. If you have a mobility need, a staff member is at the information desk with a key to the service lift.`,
    "What should a visitor with a mobility need do?",
    [
      "Wait for the west elevator with no other option.",
      "Go to the information desk for the service lift.",
      "Use only Stair B with no alternatives.",
      "Leave campus until next month.",
    ],
    1,
    "The announcement directs mobility needs to the information desk and service lift."
  ),
  item(
    "toefl-auth-ann-2",
    "Listen to an Announcement",
    `The chemistry stockroom will close at 3:30 today for inventory. Pick up reserved kits before then. After 3:30, kits can be collected tomorrow from 9 a.m.`,
    "What is the last time to pick up a reserved kit today?",
    ["9 a.m.", "3:30 p.m.", "Midnight", "Monday only"],
    1,
    "The stockroom closes at 3:30 today."
  ),
  item(
    "toefl-auth-ann-3",
    "Listen to an Announcement",
    `Due to a visiting lecture in Hall A, all 2 p.m. discussion sections that usually meet there will move to Hall C for this Thursday only. Friday meetings are unchanged.`,
    "Which meetings move?",
    [
      "All Friday sections",
      "Thursday 2 p.m. discussion sections that normally meet in Hall A",
      "Every class on campus",
      "Only Hall C’s usual classes",
    ],
    1,
    "The change is limited to Thursday 2 p.m. sections that usually use Hall A."
  ),
  item(
    "toefl-auth-talk-1",
    "Listen to an Academic Talk",
    `Today we’ll treat “correlation” carefully. Ice-cream sales and drowning incidents both rise in summer, but that does not mean ice cream causes drowning. A lurking variable — outdoor activity in heat — can drive both. When I show a scatterplot in this course, I want you to ask: what else might be moving with these two measures?`,
    "What is the professor’s main point?",
    [
      "Ice cream causes drowning.",
      "A correlation can be explained by another variable, so causation should not be assumed.",
      "Scatterplots should never be used.",
      "Summer data are never useful.",
    ],
    1,
    "The ice-cream example illustrates a lurking variable and a warning about causation."
  ),
  item(
    "toefl-auth-talk-2",
    "Listen to an Academic Talk",
    `Peer review is slow, and that slowness is sometimes treated as a defect. In this seminar I want you to see delay as a filter: reviewers catch overclaimed titles and missing controls. Preprints can share results faster, but they are not a substitute for that filter. We’ll read one preprint and one published version of the same study next week.`,
    "How does the professor want students to view peer-review delay?",
    [
      "As proof that journals are unnecessary",
      "As a quality filter, not only as wasted time",
      "As a reason to skip published papers",
      "As identical to posting a preprint",
    ],
    1,
    "The professor frames delay as a filter and still assigns both preprint and published versions."
  ),
  item(
    "toefl-auth-talk-3",
    "Listen to an Academic Talk",
    `When we model a falling object, we often ignore air resistance first. That is not because air never matters; it is because we want a clean baseline. Lab 3 will add a drag term so you can see when the simple model fails.`,
    "Why ignore air resistance at first?",
    [
      "Because air resistance never exists",
      "To establish a baseline before adding a more realistic drag term",
      "Because Lab 3 is cancelled",
      "Because falling objects do not move",
    ],
    1,
    "The professor describes a staged modeling strategy."
  ),
  item(
    "toefl-auth-sent-1",
    "Build a Sentence",
    "Words: the / measurements / remained / stable / after / calibration",
    "Which sentence is grammatically correct and uses all the words?",
    [
      "After calibration remained the measurements stable.",
      "The measurements remained stable after calibration.",
      "Stable the measurements after calibration remained.",
      "The remained measurements stable after calibration.",
    ],
    1,
    "Subject–verb–complement plus a prepositional phrase is the natural order."
  ),
  item(
    "toefl-auth-sent-2",
    "Build a Sentence",
    "Words: although / the / sample / was / small / the / pattern / was / clear",
    "Which sentence is correct?",
    [
      "Although the sample was small, the pattern was clear.",
      "Although was the sample small the pattern was clear.",
      "The pattern although the sample was small was clear.",
      "Small although the sample was the pattern was clear.",
    ],
    0,
    "A concessive clause is followed by a complete main clause."
  ),
  item(
    "toefl-auth-sent-3",
    "Build a Sentence",
    "Words: students / who / arrive / late / must / enter / quietly",
    "Which sentence is correct?",
    [
      "Students who arrive late must enter quietly.",
      "Who students arrive late must enter quietly.",
      "Students arrive who late must enter quietly.",
      "Must students who arrive late enter quietly.",
    ],
    0,
    "A relative clause follows the noun it modifies."
  ),
  item(
    "toefl-auth-email-1",
    "Write an Email",
    `Situation: You missed Professor Chen’s office hours because a required lab ran long. You need a five-minute signature on a form by Thursday.\n\nWhich email is most appropriate?`,
    "Choose the best email.",
    [
      "Hey. Sign this. Thx.",
      "Dear Professor Chen, I missed today’s office hours because lab ended at 4:20. Could I stop by Thursday 10:00–10:15 for a signature on the internship form? Thank you, Amira.",
      "WHY weren’t you in your office??",
      "I will never come to office hours.",
    ],
    1,
    "The strong email is polite, specific about the conflict, and proposes a short time window."
  ),
  item(
    "toefl-auth-email-2",
    "Write an Email",
    `Situation: A group member has not uploaded slides for tomorrow’s presentation. You need them tonight.\n\nWhich email is most appropriate?`,
    "Choose the best email.",
    [
      "You ruined everything.",
      "Hi Jordan — Could you upload your two slides by 9 p.m. tonight so we can check timing? If you’re stuck, tell me which chart you still need. — Sam",
      "I deleted the group chat.",
      "Presentations are optional.",
    ],
    1,
    "The best email states a deadline, a reason, and an offer to help."
  ),
  item(
    "toefl-auth-email-3",
    "Write an Email",
    `Situation: You cannot attend a mandatory safety briefing. You must request the make-up session.\n\nWhich email is most appropriate?`,
    "Choose the best email.",
    [
      "I’ll skip it; safety is obvious.",
      "Hello Ms. Patel, I have a scheduled exam during Thursday’s briefing. Please confirm I may attend the Friday 8 a.m. make-up session. — Kenji",
      "Make-up sessions are for other people.",
      "Send me the answers only.",
    ],
    1,
    "The email names the conflict and asks to join the official make-up."
  ),
  item(
    "toefl-auth-disc-1",
    "Write for an Academic Discussion",
    `Professor: Should first-year labs use pre-collected data or require students to collect their own measurements?\n\nStudent A: Pre-collected data saves time so we can focus on analysis.\nStudent B: Collecting data teaches error and messy real instruments.`,
    "Which reply contributes most to the discussion?",
    [
      "I agree with someone.",
      "A hybrid is strongest: a short student-collected trial to see measurement error, then a larger pre-collected set so the analysis is not blocked by equipment delays.",
      "Labs are fun.",
      "Data does not exist.",
    ],
    1,
    "The best reply takes a position, uses both students’ points, and adds a specific classroom design."
  ),
  item(
    "toefl-auth-disc-2",
    "Write for an Academic Discussion",
    `Professor: Is it fair to ban laptops in seminar so students look up more?\n\nStudent A: Bans help attention.\nStudent B: Some students need laptops for notes or accessibility.`,
    "Which reply is strongest?",
    [
      "Phones are worse.",
      "A default closed-laptop rule with documented exceptions (accessibility, designated note-taker) protects attention without excluding students who need devices.",
      "Seminars should be cancelled.",
      "I like laptops.",
    ],
    1,
    "The reply states a policy that addresses both attention and access."
  ),
  item(
    "toefl-auth-disc-3",
    "Write for an Academic Discussion",
    `Professor: Should citation managers be required in first-year writing?\n\nStudent A: They hide how citations work.\nStudent B: They prevent sloppy bibliographies.`,
    "Which reply is strongest?",
    [
      "Citations are boring.",
      "Require a manager after students format five sources by hand, so they learn the logic first and then use the tool to reduce mechanical errors.",
      "Never cite sources.",
      "Only books matter.",
    ],
    1,
    "The reply sequences learning and tool use instead of treating them as opposites."
  ),
  item(
    "toefl-auth-repeat-1",
    "Listen and Repeat",
    `Target sentence (campus): “Please leave backpacks against the wall during the exam.”`,
    "Which repetition is most accurate?",
    [
      "Please leave backpacks against the wall during the exam.",
      "Please leave bags on the table after the exam.",
      "Leave the wall during backpacks.",
      "Exams are against backpacks.",
    ],
    0,
    "Listen-and-repeat scores closeness to the prompt, not a paraphrase."
  ),
  item(
    "toefl-auth-repeat-2",
    "Listen and Repeat",
    `Target sentence: “Office hours move to Room 210 this week only.”`,
    "Which repetition is most accurate?",
    [
      "Office hours are cancelled forever.",
      "Office hours move to Room 210 this week only.",
      "Room 210 moves office hours every year.",
      "This week has no rooms.",
    ],
    1,
    "The accurate repeat keeps place and the limiter “this week only.”"
  ),
  item(
    "toefl-auth-repeat-3",
    "Listen and Repeat",
    `Target sentence: “Submit the draft before midnight on Thursday.”`,
    "Which repetition is most accurate?",
    [
      "Submit the draft before midnight on Thursday.",
      "Submit the draft after midnight on Friday.",
      "Thursday has no midnight.",
      "Drafts are never submitted.",
    ],
    0,
    "The wording matches the target exactly."
  ),
  item(
    "toefl-auth-int-1",
    "Take an Interview",
    `Interviewer: “Describe a time you had to solve a problem in a group. You have 45 seconds.”`,
    "Which response is strongest for a timed interview?",
    [
      "Um, groups are hard, I don’t know.",
      "In a lab group last term, our sensor failed. I proposed splitting roles—one person checked wiring, one recoded the logger—and we finished the trial on time.",
      "I have many friends.",
      "Problems exist everywhere in the world.",
    ],
    1,
    "A 45-second answer needs a specific situation, action, and result."
  ),
  item(
    "toefl-auth-int-2",
    "Take an Interview",
    `Interviewer: “When you choose a course, is the professor or the schedule more important? Why?”`,
    "Which response is strongest?",
    [
      "Whatever.",
      "Schedule first if I work evenings; otherwise I pick the professor known for clear feedback, because I learn faster with specific comments.",
      "Courses are in catalogs.",
      "I never choose courses.",
    ],
    1,
    "The answer states a conditional preference and a reason."
  ),
  item(
    "toefl-auth-int-3",
    "Take an Interview",
    `Interviewer: “Tell me about a book or article that changed how you study.”`,
    "Which response is strongest?",
    [
      "I don’t read.",
      "A short piece on retrieval practice made me replace rereading with self-quizzes; my quiz scores became more stable.",
      "Books have pages.",
      "Studying is a thing people do.",
    ],
    1,
    "The answer names a change in behavior and a result."
  ),
];
