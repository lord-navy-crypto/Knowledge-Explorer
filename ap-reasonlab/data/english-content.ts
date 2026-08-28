import { extraSatQuestions, extraToeflQuestions } from "./english-questions-extra";
import { batch3SatQuestions, batch3ToeflQuestions } from "./english-questions-batch3";
import { curatedSatQuestions, curatedToeflQuestions } from "./english-questions-curated";

export type EnglishPracticeQuestion = {
  id: string;
  skill: string;
  prompt: string;
  choices: string[];
  answer: number;
  explanation: string;
};

/** Exam tracks — exam-style practice questions and uploaded practice sets. */
export const englishExamAreas = [
  {
    href: "/english/toefl",
    title: "TOEFL",
    icon: "T",
    description:
      "Daily practice lanes plus an in-site MCQ bank (80+ questions). Upload reading articles, listening scripts, writing prompts, and speaking dialogues.",
  },
  {
    href: "/english/sat",
    title: "SAT",
    icon: "S",
    description: "4 subject folders: English, Grammar, Reading, Mathematics — practice questions per folder.",
  },
] as const;

/** Core English skills — language ability, separate from exam practice sets. */
export const englishSkillAreas = [
  {
    href: "/english/vocabulary",
    title: "Vocabulary",
    icon: "V",
    description: "Word meaning, families, collocations, and active recall.",
  },
  {
    href: "/english/grammar",
    title: "Grammar & Sentences",
    icon: "G",
    description: "Sentence control, clauses, transitions, and revision.",
  },
] as const;

/** Local practice tools that support skills (not exam practice sets). */
export const englishPracticeTools = [
  {
    href: "/tools/vocab-book",
    title: "My vocab book",
    description: "Personal flashcards saved in this browser.",
  },
  {
    href: "/tools/speech-to-text",
    title: "Speech to text",
    description: "Speak, record, or upload audio → English transcript.",
  },
  {
    href: "/tools/dictation",
    title: "Dictation",
    description: "Listen and type to train listening + spelling.",
  },
  {
    href: "/tools/paraphrase",
    title: "Paraphrase compare",
    description: "Check rewrite overlap for safer paraphrasing.",
  },
  {
    href: "/tools/reading-highlight",
    title: "Reading highlights",
    description: "Mark passages and keep margin notes locally.",
  },
] as const;

/** Flat list for search / legacy consumers. */
export const englishAreas = [
  ...englishExamAreas,
  ...englishSkillAreas,
  {
    href: "/english/ai",
    title: "English AI Tutor",
    icon: "AI",
    description: "Focused English tutor in AI Toolbox — writing, vocab, and strategy feedback.",
  },
] as const;

export const academicVocabulary = [
  { word: "analyze", family: "analysis · analytical", meaning: "examine parts and relationships", collocation: "analyze evidence", example: "The report analyzes how rainfall affects crop yield." },
  { word: "infer", family: "inference · inferential", meaning: "reach a conclusion from evidence", collocation: "infer from context", example: "From the empty nests, researchers inferred that the birds had migrated." },
  { word: "substantiate", family: "substantiation", meaning: "support a claim with evidence", collocation: "substantiate a claim", example: "One observation cannot substantiate a broad conclusion." },
  { word: "concede", family: "concession", meaning: "acknowledge that a point is valid", collocation: "concede a limitation", example: "The author concedes that the sample was small." },
  { word: "derive", family: "derivation · derivative", meaning: "obtain something from a source", collocation: "derive from", example: "The estimate was derived from three independent measurements." },
  { word: "coherent", family: "coherence · coherently", meaning: "logical and easy to follow", collocation: "coherent argument", example: "Clear transitions make the explanation more coherent." },
  { word: "ambiguous", family: "ambiguity · ambiguously", meaning: "open to more than one interpretation", collocation: "ambiguous wording", example: "The pronoun is ambiguous because it could refer to either scientist." },
  { word: "prevalent", family: "prevalence", meaning: "common or widespread", collocation: "widely prevalent", example: "The practice became prevalent after production costs fell." },
  { word: "mitigate", family: "mitigation", meaning: "reduce the severity of something", collocation: "mitigate risk", example: "Backup sensors can mitigate the effect of a single failure." },
  { word: "corroborate", family: "corroboration", meaning: "confirm with additional evidence", collocation: "corroborate findings", example: "A second experiment corroborated the initial result." },
  { word: "plausible", family: "plausibility · plausibly", meaning: "reasonable and believable", collocation: "plausible explanation", example: "The hypothesis is plausible, but it still requires testing." },
  { word: "nevertheless", family: "contrast transition", meaning: "despite what was just stated", collocation: "nevertheless, the result…", example: "The trial was brief; nevertheless, it revealed a useful pattern." },
] as const;

export const sentencePatterns = [
  { title: "Claim → reason", pattern: "[Claim] because [specific reason].", example: "The second design is more reliable because it continues operating after one sensor fails." },
  { title: "Concession → position", pattern: "Although [valid limitation], [main position].", example: "Although the sample is small, the repeated pattern deserves further study." },
  { title: "Evidence → inference", pattern: "Because [evidence], it is reasonable to infer that [careful conclusion].", example: "Because both trials produced similar curves, it is reasonable to infer that the trend is reproducible." },
  { title: "Contrast", pattern: "Whereas [A], [B].", example: "Whereas the first passage emphasizes cost, the second focuses on reliability." },
  { title: "Definition with precision", pattern: "[Term] refers to [category] that [distinguishing feature].", example: "A feedback loop refers to a process in which an output influences a later input." },
  { title: "Cautious academic claim", pattern: "The evidence suggests that [claim], although [uncertainty].", example: "The evidence suggests that sleep improved recall, although the study did not control diet." },
] as const;

const baseToeflQuestions: EnglishPracticeQuestion[] = [
  { id: "toefl-1", skill: "Complete the Words", prompt: "The new evidence did not con___dict the earlier finding; instead, it strengthened it.", choices: ["tra", "tro", "tre", "tru"], answer: 0, explanation: "The complete word is contradict. The sentence says the evidence did the opposite: it strengthened the finding." },
  { id: "toefl-2", skill: "Academic Reading", prompt: "A campus replaced fixed lighting schedules with motion sensors. Energy use fell, but students reported that some hallways became dark too quickly. Which conclusion is best supported?", choices: ["Motion sensors always improve campus safety.", "The system saved energy but may need timing adjustments.", "Students preferred the old system in every building.", "Lighting had no measurable effect on energy use."], answer: 1, explanation: "The passage supports both the energy benefit and a specific usability problem; it does not support absolute claims." },
  { id: "toefl-3", skill: "Academic Discussion", prompt: "A class is discussing whether universities should record every lecture. Which response has the clearest position and support?", choices: ["Yes. Recordings are good.", "It depends, and many things matter.", "Universities should record lectures because students can review complex explanations; however, instructors should control access to protect class discussion.", "Lectures have existed for a long time."], answer: 2, explanation: "This response states a position, gives a relevant reason, and addresses a reasonable limitation." },
  { id: "toefl-4", skill: "Listening inference", prompt: "A professor says, “The lab results were promising, but we need a larger sample before drawing conclusions.” What is the professor implying?", choices: ["The experiment failed completely.", "The current evidence is suggestive but not yet conclusive.", "No further research is necessary.", "Students should ignore the data."], answer: 1, explanation: "Promising results plus a need for a larger sample implies preliminary support, not a final conclusion." },
  { id: "toefl-5", skill: "Writing coherence", prompt: "Which sentence best improves paragraph unity at the start of a body paragraph?", choices: ["Many people like science.", "The second reason the policy should change is that it reduces access for low-income students.", "I went to the library yesterday.", "Science is important everywhere."], answer: 1, explanation: "It signals the paragraph’s focus and connects to a thesis about policy change." },
  { id: "toefl-6", skill: "Speaking clarity", prompt: "Which opening is strongest for a 45-second TOEFL speaking response?", choices: ["Um, I think, like, maybe parks are good.", "I believe cities should expand public parks because they improve health and community interaction.", "Parks exist in many countries.", "Let me tell you a long story about my childhood."], answer: 1, explanation: "It states a clear position with two compact reasons suitable for a timed response." },
  { id: "toefl-8", skill: "Reading detail", prompt: "A study tracked students who reviewed lecture notes within 24 hours versus those who waited a week. The early-review group scored higher on short quizzes. Which inference is best supported?", choices: ["Review never helps retention.", "Timely review may strengthen short-term recall.", "Waiting a week always produces better learning.", "Quiz scores are unrelated to review habits."], answer: 1, explanation: "Higher scores for early review support a link between timing and recall, without claiming a universal rule." },
  { id: "toefl-9", skill: "Listening purpose", prompt: "A student asks, “Do we need the textbook or just the articles?” The professor replies, “The articles are required; the textbook is optional background if you want more examples.” What is the professor’s main point?", choices: ["Students should not read anything.", "Only the textbook matters.", "Articles are required; the textbook is supplementary.", "The course has no readings."], answer: 2, explanation: "The professor clearly distinguishes required articles from optional textbook reading." },
  { id: "toefl-10", skill: "Grammar in context", prompt: "The research team ___ its findings after repeating the experiment under stricter controls.", choices: ["publish", "publishes", "published", "publishing"], answer: 2, explanation: "Past tense fits a completed action in narrative context." },
];

export const toeflQuestions: EnglishPracticeQuestion[] = [
  ...curatedToeflQuestions,
  ...baseToeflQuestions,
  ...extraToeflQuestions,
  ...batch3ToeflQuestions,
];

const baseSatQuestions: EnglishPracticeQuestion[] = [
  { id: "sat-1", skill: "Standard English Conventions", prompt: "The prototype completed twelve trials ___ only two required a manual reset.", choices: [", and", ",", "; and", ": and"], answer: 0, explanation: "Two independent clauses can be joined with a comma plus the coordinating conjunction ‘and’." },
  { id: "sat-2", skill: "Transitions", prompt: "The first model was faster. ___, the second model produced more consistent measurements.", choices: ["For example", "Similarly", "However", "Therefore"], answer: 2, explanation: "The second sentence contrasts speed with consistency, so ‘However’ fits." },
  { id: "sat-3", skill: "Information and Ideas", prompt: "After a library extended weekend hours, attendance rose by 18%, while weekday attendance remained nearly unchanged. Which claim is best supported?", choices: ["The library became more popular every day.", "Longer weekend access was associated with higher weekend attendance.", "Weekday hours should be reduced.", "Most visitors attended only on weekends."], answer: 1, explanation: "This choice stays within the data and avoids unsupported causal or absolute claims." },
  { id: "sat-4", skill: "Expression of Ideas", prompt: "A student wants to emphasize a study's limitation. Which sentence best accomplishes the goal?", choices: ["The result was interesting.", "The experiment used sensors.", "Because the study observed only one school, its findings may not apply to schools with different schedules.", "The researchers created a chart."], answer: 2, explanation: "It identifies the limitation and explains how it restricts the conclusion." },
  { id: "sat-5", skill: "Central Ideas", prompt: "A passage argues that community gardens increase neighborhood cohesion. Which detail best supports the central idea?", choices: ["Gardens need sunlight.", "Residents who garden together report more conversations with neighbors they had not met before.", "Some plants grow quickly.", "Urban land is expensive."], answer: 1, explanation: "This detail directly supports increased social connection within a neighborhood." },
  { id: "sat-6", skill: "Algebra", prompt: "If 3x + 7 = 22, what is the value of x?", choices: ["3", "5", "7", "15"], answer: 1, explanation: "Subtract 7 from both sides: 3x = 15. Divide by 3: x = 5." },
  { id: "sat-7", skill: "Data interpretation", prompt: "A table shows book checkouts rising each month from January to June at a public library. Which statement is best supported?", choices: ["Checkouts were highest in January.", "Checkouts generally increased over the period shown.", "The library closed in June.", "No one borrowed books in March."], answer: 1, explanation: "A month-by-month rise supports a general increase, not an absolute claim about every month." },
  { id: "sat-9", skill: "Rhetoric", prompt: "A writer describes a policy as “a modest step, not a miracle cure.” What is the writer most likely doing?", choices: ["Claiming the policy solves every problem", "Setting realistic expectations while acknowledging some benefit", "Rejecting the policy entirely", "Introducing unrelated historical facts"], answer: 1, explanation: "The phrase balances limited praise with caution against overclaiming." },
  { id: "sat-10", skill: "Linear equations", prompt: "A line passes through (0, 4) and has slope 2. Which equation represents the line?", choices: ["y = 2x + 4", "y = 4x + 2", "y = x + 6", "y = 2x − 4"], answer: 0, explanation: "Slope-intercept form y = mx + b with m = 2 and b = 4 gives y = 2x + 4." },
  { id: "sat-11", skill: "Words in context", prompt: "Although the initial results were ___, the team repeated the trial and confirmed the pattern.", choices: ["definitive", "tentative", "irrelevant", "hostile"], answer: 1, explanation: "Repeating the trial suggests the first results were preliminary or uncertain — tentative." },
];

export const satQuestions: EnglishPracticeQuestion[] = [
  ...curatedSatQuestions,
  ...baseSatQuestions,
  ...extraSatQuestions,
  ...batch3SatQuestions,
];

