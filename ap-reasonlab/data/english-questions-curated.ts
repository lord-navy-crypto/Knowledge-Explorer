import type { EnglishPracticeQuestion } from "./english-content";

/** Hand-curated items — richer prompts than batch3 templates; listed first in banks. */
export const curatedToeflQuestions: EnglishPracticeQuestion[] = [
  {
    id: "toefl-curated-1",
    skill: "Academic Reading",
    prompt:
      "Researchers compared two study methods: spaced review (short sessions over two weeks) versus cramming (one long session). The spaced group scored 14% higher on a delayed test. Which conclusion is best supported?",
    choices: [
      "Spaced review always guarantees perfect scores.",
      "Distributing study over time was associated with better delayed recall in this study.",
      "Cramming is never useful for any student.",
      "The test measured only vocabulary, not comprehension.",
    ],
    answer: 1,
    explanation:
      "The passage supports a link between spaced review and higher delayed scores without claiming universal rules.",
  },
  {
    id: "toefl-curated-2",
    skill: "Listening inference",
    prompt:
      "A professor says, “Your draft shows strong analysis, but the evidence section reads like a list rather than an argument.” What is the professor suggesting?",
    choices: [
      "The student should delete all evidence.",
      "The analysis is strong but evidence needs clearer integration into the argument.",
      "The draft is ready to submit.",
      "The student did not include a thesis.",
    ],
    answer: 1,
    explanation:
      "The professor praises analysis while asking for evidence to function as part of an argument, not a disconnected list.",
  },
  {
    id: "toefl-curated-3",
    skill: "Writing coherence",
    prompt:
      "Which sentence best begins a paragraph arguing that cities should expand bike lanes?",
    choices: [
      "Bicycles have wheels.",
      "One reason cities should add protected bike lanes is that they reduce car traffic on short commutes.",
      "I rode a bike yesterday.",
      "Transportation exists in many countries.",
    ],
    answer: 1,
    explanation:
      "It states a focused reason tied directly to the thesis about bike lanes.",
  },
  {
    id: "toefl-curated-4",
    skill: "Speaking clarity",
    prompt:
      "Which opening best answers whether universities should require a first-year writing seminar?",
    choices: [
      "Writing is a thing people do.",
      "Yes — a required first-year seminar helps students learn academic argument before upper-level courses.",
      "Um, maybe, I guess.",
      "Universities have many buildings.",
    ],
    answer: 1,
    explanation:
      "Clear position plus a specific reason suitable for a timed speaking response.",
  },
  {
    id: "toefl-curated-5",
    skill: "Reading detail",
    prompt:
      "A passage states that wetland restoration increased bird species count by 22% over five years but did not restore pre-1990 levels. Which claim is supported?",
    choices: [
      "Restoration fully reversed all historical damage.",
      "Restoration correlated with increased species count but did not reach earlier baseline levels.",
      "Bird populations were unchanged.",
      "The study lasted only one year.",
    ],
    answer: 1,
    explanation:
      "Both the improvement and the failure to reach the old baseline are explicitly supported.",
  },
  {
    id: "toefl-curated-6",
    skill: "Grammar in context",
    prompt:
      "The committee ___ its recommendation after reviewing three independent audits.",
    choices: ["finalize", "finalizes", "finalized", "finalizing"],
    answer: 2,
    explanation: "Past tense fits a completed action in narrative context.",
  },
  {
    id: "toefl-curated-7",
    skill: "Academic Discussion",
    prompt:
      "A class debates whether AI writing tools belong in first-year composition. Which response is strongest?",
    choices: [
      "AI is everywhere now.",
      "Tools can help brainstorming, but instructors should require students to revise and cite any AI-assisted drafts.",
      "Writing classes should not exist.",
      "I like technology.",
    ],
    answer: 1,
    explanation:
      "It takes a nuanced position with a practical classroom policy.",
  },
  {
    id: "toefl-curated-8",
    skill: "Complete the Words",
    prompt: "The archaeologists could not yet con___firm the artifact's age without further testing.",
    choices: ["fi", "fo", "fu", "fa"],
    answer: 0,
    explanation: "The complete word is confirm.",
  },
  {
    id: "toefl-curated-9",
    skill: "Listening purpose",
    prompt:
      "At the end of a lecture, a professor says, “Next week we shift from theory to lab design — bring your draft procedures.” What is the purpose?",
    choices: [
      "To cancel the lab",
      "To signal an upcoming transition to hands-on lab work",
      "To announce the final exam date",
      "To say theory is unimportant",
    ],
    answer: 1,
    explanation:
      "The professor is preparing students for a shift to lab design with a concrete preparation task.",
  },
  {
    id: "toefl-curated-10",
    skill: "Academic Reading",
    prompt:
      "A city piloted free transit on weekends. Ridership rose 18%, but maintenance costs increased. Which conclusion is best supported?",
    choices: [
      "Free transit eliminated all traffic congestion.",
      "The pilot increased weekend ridership but created a maintenance cost trade-off.",
      "No one used transit on weekends.",
      "Maintenance costs always fall when ridership rises.",
    ],
    answer: 1,
    explanation:
      "Both effects are reported; a balanced conclusion is best supported.",
  },
];

export const curatedSatQuestions: EnglishPracticeQuestion[] = [
  {
    id: "sat-curated-1",
    skill: "Standard English Conventions",
    prompt: "The researchers published their findings, ___ the journal requested additional data.",
    choices: ["and", "but", "so", "for"],
    answer: 1,
    explanation:
      "The second clause contrasts with the first — the journal requested more data despite publication.",
  },
  {
    id: "sat-curated-2",
    skill: "Transitions",
    prompt:
      "The first trial succeeded in controlled conditions. ___, the field test revealed unexpected variability.",
    choices: ["Similarly", "However", "Therefore", "For example"],
    answer: 1,
    explanation: "Field test problems contrast with controlled success.",
  },
  {
    id: "sat-curated-3",
    skill: "Information and Ideas",
    prompt:
      "A graph shows renewable energy share rising from 12% to 19% over a decade while coal share fell. Which inference is supported?",
    choices: [
      "Coal use disappeared entirely.",
      "Renewable share increased while coal share decreased over the period shown.",
      "Energy use stopped growing.",
      "The graph covers only one year.",
    ],
    answer: 1,
    explanation: "Stay within what the graph directly shows.",
  },
  {
    id: "sat-curated-4",
    skill: "Algebra",
    prompt: "If 2x − 5 = 11, what is x?",
    choices: ["3", "6", "8", "16"],
    answer: 2,
    explanation: "Add 5: 2x = 16. Divide by 2: x = 8.",
  },
  {
    id: "sat-curated-5",
    skill: "Words in context",
    prompt:
      "Although the CEO's apology was ___, employees still wanted concrete policy changes.",
    choices: ["sincere", "tentative", "elaborate", "premature"],
    answer: 0,
    explanation:
      "Despite a sincere apology, employees wanted more — 'although' signals contrast with insufficient action.",
  },
  {
    id: "sat-curated-6",
    skill: "Linear equations",
    prompt: "A line has slope −3 and y-intercept 4. Which equation represents the line?",
    choices: ["y = −3x + 4", "y = 3x + 4", "y = −3x − 4", "y = 4x − 3"],
    answer: 0,
    explanation: "Slope-intercept form y = mx + b with m = −3 and b = 4.",
  },
  {
    id: "sat-curated-7",
    skill: "Rhetoric",
    prompt:
      "A writer calls a proposal “a small step, not a complete solution.” What is the writer most likely doing?",
    choices: [
      "Claiming the proposal solves every problem",
      "Acknowledging partial benefit while limiting expectations",
      "Rejecting the proposal entirely",
      "Introducing unrelated history",
    ],
    answer: 1,
    explanation: "The phrase balances modest praise with caution.",
  },
  {
    id: "sat-curated-8",
    skill: "Data interpretation",
    prompt:
      "A table shows library visits increasing each month from March to August. Which statement is best supported?",
    choices: [
      "Visits were highest in March.",
      "Visits generally increased over the months shown.",
      "The library was closed in August.",
      "No one visited in June.",
    ],
    answer: 1,
    explanation: "A month-by-month rise supports a general increase.",
  },
  {
    id: "sat-curated-9",
    skill: "Expression of Ideas",
    prompt:
      "Which sentence best adds a limitation to a paragraph about a single-school study?",
    choices: [
      "Schools exist in many cities.",
      "Because the study observed only one school, its findings may not apply elsewhere.",
      "Students take tests.",
      "The researchers used computers.",
    ],
    answer: 1,
    explanation: "It identifies a sample limitation and explains its scope.",
  },
  {
    id: "sat-curated-10",
    skill: "Central Ideas",
    prompt:
      "A passage argues that community gardens strengthen neighborhood ties. Which detail best supports the central idea?",
    choices: [
      "Plants need sunlight.",
      "Residents who garden together report meeting neighbors they had not spoken with before.",
      "Some gardens grow tomatoes.",
      "Land is expensive in cities.",
    ],
    answer: 1,
    explanation: "This detail directly supports stronger neighborhood connections.",
  },
];
