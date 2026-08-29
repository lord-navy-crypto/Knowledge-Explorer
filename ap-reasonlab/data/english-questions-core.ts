/** Legacy core bank — rewritten into official TOEFL iBT / Digital SAT task shape. Original items. */
import type { EnglishPracticeQuestion } from "./english-content";

export const coreToeflQuestions: EnglishPracticeQuestion[] = [
  {
    "id": "toefl-1",
    "skill": "Complete the Words",
    "prompt": "Select the letters that complete the word.",
    "choices": [
      "tra",
      "tro",
      "tre",
      "tru"
    ],
    "answer": 0,
    "explanation": "The complete word is contradict. The sentence says the evidence did the opposite: it strengthened the finding.",
    "passage": "The new evidence did not con___dict the earlier finding; instead, it strengthened it."
  },
  {
    "id": "toefl-2",
    "skill": "Read in Daily Life",
    "prompt": "Which conclusion is best supported?",
    "choices": [
      "Motion sensors always improve campus safety.",
      "The system saved energy but may need timing adjustments.",
      "Students preferred the old system in every building.",
      "Lighting had no measurable effect on energy use."
    ],
    "answer": 1,
    "explanation": "The passage supports both the energy benefit and a specific usability problem; it does not support absolute claims.",
    "passage": "A campus replaced fixed lighting schedules with motion sensors. Energy use fell, but students reported that some hallways became dark too quickly."
  },
  {
    "id": "toefl-3",
    "skill": "Write for an Academic Discussion",
    "prompt": "Which reply contributes most to the discussion?",
    "choices": [
      "Yes. Recordings are good.",
      "It depends, and many things matter.",
      "Universities should record lectures because students can review complex explanations; however, instructors should control access to protect class discussion.",
      "Lectures have existed for a long time."
    ],
    "answer": 2,
    "explanation": "This response states a position, gives a relevant reason, and addresses a reasonable limitation.",
    "passage": "Professor: Take a position on whether universities should record every lecture.\n\nStudent A: I have a view, but I have not given a focused reason yet.\nStudent B: The strongest posts start with a clear claim and one concrete example."
  },
  {
    "id": "toefl-4",
    "skill": "Listen to an Academic Talk",
    "prompt": "What is the professor implying?",
    "choices": [
      "The experiment failed completely.",
      "The current evidence is suggestive but not yet conclusive.",
      "No further research is necessary.",
      "Students should ignore the data."
    ],
    "answer": 1,
    "explanation": "Promising results plus a need for a larger sample implies preliminary support, not a final conclusion.",
    "passage": "Professor: “The lab results were promising, but we need a larger sample before drawing conclusions.”"
  },
  {
    "id": "toefl-5",
    "skill": "Write for an Academic Discussion",
    "prompt": "Which reply contributes most to the discussion?",
    "choices": [
      "Many people like science.",
      "The second reason the policy should change is that it reduces access for low-income students.",
      "I went to the library yesterday.",
      "Science is important everywhere."
    ],
    "answer": 1,
    "explanation": "It signals the paragraph’s focus and connects to a thesis about policy change.",
    "passage": "Professor: What sentence should open your discussion post, and what specific reason will you give?\n\nStudent A: I have a view, but I have not given a focused reason yet.\nStudent B: The strongest posts start with a clear claim and one concrete example."
  },
  {
    "id": "toefl-6",
    "skill": "Take an Interview",
    "prompt": "Which response is strongest for a timed interview?",
    "choices": [
      "Um, I think, like, maybe parks are good.",
      "I believe cities should expand public parks because they improve health and community interaction.",
      "Parks exist in many countries.",
      "Let me tell you a long story about my childhood."
    ],
    "answer": 1,
    "explanation": "It states a clear position with two compact reasons suitable for a timed response.",
    "passage": "Interviewer: “What is your position on this issue, and what is one specific reason? You have 45 seconds.”"
  },
  {
    "id": "toefl-8",
    "skill": "Read an Academic Passage",
    "prompt": "Which inference is best supported?",
    "choices": [
      "Review never helps retention.",
      "Timely review may strengthen short-term recall.",
      "Waiting a week always produces better learning.",
      "Quiz scores are unrelated to review habits."
    ],
    "answer": 1,
    "explanation": "Higher scores for early review support a link between timing and recall, without claiming a universal rule.",
    "passage": "A study tracked students who reviewed lecture notes within 24 hours versus those who waited a week. The early-review group scored higher on short quizzes."
  },
  {
    "id": "toefl-9",
    "skill": "Listen to a Conversation",
    "prompt": "The professor replies, “The articles are required; the textbook is optional background if you want more examples.” What is the professor’s main point?",
    "choices": [
      "Students should not read anything.",
      "Only the textbook matters.",
      "Articles are required; the textbook is supplementary.",
      "The course has no readings."
    ],
    "answer": 2,
    "explanation": "The professor clearly distinguishes required articles from optional textbook reading.",
    "passage": "Student: “Do we need the textbook or just the articles?”\nProfessor: “The articles are required; the textbook is optional background if you want more examples.”"
  },
  {
    "id": "toefl-10",
    "skill": "Build a Sentence",
    "prompt": "Which option completes the sentence correctly?",
    "choices": [
      "publish",
      "publishes",
      "published",
      "publishing"
    ],
    "answer": 2,
    "explanation": "Past tense fits a completed action in narrative context.",
    "passage": "Build a sentence that matches the intended meaning.\nThe research team ___ its findings after repeating the experiment under stricter controls."
  }
];

export const coreSatQuestions: EnglishPracticeQuestion[] = [
  {
    "id": "sat-1",
    "skill": "Standard English Conventions",
    "prompt": "Which choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      ", and",
      ",",
      "; and",
      ": and"
    ],
    "answer": 0,
    "explanation": "Two independent clauses can be joined with a comma plus the coordinating conjunction ‘and’.",
    "passage": "The prototype completed twelve trials ___ only two required a manual reset."
  },
  {
    "id": "sat-2",
    "skill": "Expression of Ideas",
    "prompt": "Which choice completes the text with the most logical transition?",
    "choices": [
      "For example",
      "Similarly",
      "However",
      "Therefore"
    ],
    "answer": 2,
    "explanation": "The second sentence contrasts speed with consistency, so ‘However’ fits.",
    "passage": "The first model was faster. ___, the second model produced more consistent measurements."
  },
  {
    "id": "sat-3",
    "skill": "Information and Ideas",
    "prompt": "Which claim is best supported?",
    "choices": [
      "The library became more popular every day.",
      "Longer weekend access was associated with higher weekend attendance.",
      "Weekday hours should be reduced.",
      "Most visitors attended only on weekends."
    ],
    "answer": 1,
    "explanation": "This choice stays within the data and avoids unsupported causal or absolute claims.",
    "passage": "After a library extended weekend hours, attendance rose by 18%, while weekday attendance remained nearly unchanged."
  },
  {
    "id": "sat-4",
    "skill": "Expression of Ideas",
    "prompt": "Which choice best achieves the writer's goal?",
    "choices": [
      "The result was interesting.",
      "The experiment used sensors.",
      "Because the study observed only one school, its findings may not apply to schools with different schedules.",
      "The researchers created a chart."
    ],
    "answer": 2,
    "explanation": "It identifies the limitation and explains how it restricts the conclusion.",
    "passage": "Writer's goal: emphasize a study's limitation.\nA student wants to emphasize a study's limitation."
  },
  {
    "id": "sat-5",
    "skill": "Information and Ideas",
    "prompt": "Which detail best supports the central idea?",
    "choices": [
      "Gardens need sunlight.",
      "Residents who garden together report more conversations with neighbors they had not met before.",
      "Some plants grow quickly.",
      "Urban land is expensive."
    ],
    "answer": 1,
    "explanation": "This detail directly supports increased social connection within a neighborhood.",
    "passage": "Community gardens increase neighborhood cohesion. Residents who garden together report more conversations with neighbors they had not met before. The same report also notes unrelated constraints such as cost and weather."
  },
  {
    "id": "sat-6",
    "skill": "Algebra",
    "prompt": "If 3x + 7 = 22, what is the value of x?",
    "choices": [
      "3",
      "5",
      "7",
      "15"
    ],
    "answer": 1,
    "explanation": "Subtract 7 from both sides: 3x = 15. Divide by 3: x = 5."
  },
  {
    "id": "sat-7",
    "skill": "Problem-Solving and Data Analysis",
    "prompt": "Which statement is best supported?",
    "choices": [
      "Checkouts were highest in January.",
      "Checkouts generally increased over the period shown.",
      "The library closed in June.",
      "No one borrowed books in March."
    ],
    "answer": 1,
    "explanation": "A month-by-month rise supports a general increase, not an absolute claim about every month.",
    "passage": "A table shows book checkouts rising each month from January to June at a public library."
  },
  {
    "id": "sat-9",
    "skill": "Craft and Structure",
    "prompt": "Which choice completes the text with the most logical and precise word or phrase?",
    "choices": [
      "Claiming the policy solves every problem",
      "Setting realistic expectations while acknowledging some benefit",
      "Rejecting the policy entirely",
      "Introducing unrelated historical facts"
    ],
    "answer": 1,
    "explanation": "The phrase balances limited praise with caution against overclaiming.",
    "passage": "A writer describes a policy as “a modest step, not a miracle cure.”"
  },
  {
    "id": "sat-10",
    "skill": "Algebra",
    "prompt": "A line passes through (0, 4) and has slope 2. Which equation represents the line?",
    "choices": [
      "y = 2x + 4",
      "y = 4x + 2",
      "y = x + 6",
      "y = 2x − 4"
    ],
    "answer": 0,
    "explanation": "Slope-intercept form y = mx + b with m = 2 and b = 4 gives y = 2x + 4."
  },
  {
    "id": "sat-11",
    "skill": "Craft and Structure",
    "prompt": "Which choice completes the text with the most logical and precise word or phrase?",
    "choices": [
      "definitive",
      "tentative",
      "irrelevant",
      "hostile"
    ],
    "answer": 1,
    "explanation": "Repeating the trial suggests the first results were preliminary or uncertain — tentative.",
    "passage": "Although the initial results were ___, the team repeated the trial and confirmed the pattern."
  }
];
