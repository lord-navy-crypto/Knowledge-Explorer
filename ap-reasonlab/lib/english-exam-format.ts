/**
 * Official exam-task labels (ETS TOEFL iBT 2026; College Board Digital SAT).
 * Practice items are originals in these formats — not copyrighted exam questions.
 */

export const TOEFL_OFFICIAL_SKILLS = {
  reading: ["Complete the Words", "Read in Daily Life", "Read an Academic Passage"] as const,
  listening: [
    "Listen and Choose a Response",
    "Listen to a Conversation",
    "Listen to an Announcement",
    "Listen to an Academic Talk",
  ] as const,
  writing: ["Build a Sentence", "Write an Email", "Write for an Academic Discussion"] as const,
  speaking: ["Listen and Repeat", "Take an Interview"] as const,
};

export const SAT_OFFICIAL_SKILLS = {
  english: ["Expression of Ideas"] as const,
  grammar: ["Standard English Conventions"] as const,
  reading: ["Information and Ideas", "Craft and Structure"] as const,
  mathematics: [
    "Algebra",
    "Advanced Math",
    "Problem-Solving and Data Analysis",
    "Geometry and Trigonometry",
  ] as const,
};

const TOEFL_READING = new Set<string>(TOEFL_OFFICIAL_SKILLS.reading);
const TOEFL_LISTENING = new Set<string>(TOEFL_OFFICIAL_SKILLS.listening);
const TOEFL_WRITING = new Set<string>(TOEFL_OFFICIAL_SKILLS.writing);
const TOEFL_SPEAKING = new Set<string>(TOEFL_OFFICIAL_SKILLS.speaking);

const SAT_ENGLISH = new Set<string>(SAT_OFFICIAL_SKILLS.english);
const SAT_GRAMMAR = new Set<string>(SAT_OFFICIAL_SKILLS.grammar);
const SAT_READING = new Set<string>(SAT_OFFICIAL_SKILLS.reading);
const SAT_MATH = new Set<string>(SAT_OFFICIAL_SKILLS.mathematics);

function hashId(id: string): number {
  let n = 0;
  for (let i = 0; i < id.length; i += 1) n = (n + id.charCodeAt(i) * (i + 1)) % 997;
  return n;
}

/** Map legacy skill names onto current official task / domain labels. */
export function remapEnglishSkill(skill: string, exam: "toefl" | "sat", id: string): string {
  if (exam === "toefl") {
    if (TOEFL_READING.has(skill) || TOEFL_LISTENING.has(skill) || TOEFL_WRITING.has(skill) || TOEFL_SPEAKING.has(skill)) {
      return skill;
    }
    if (skill === "Complete the Words" || skill === "Grammar in context") return "Complete the Words";
    if (skill === "Academic Reading" || skill === "Reading detail" || skill === "Vocabulary in context") {
      return hashId(id) % 2 === 0 ? "Read an Academic Passage" : "Read in Daily Life";
    }
    if (skill === "Listening inference" || skill === "Listening purpose") {
      return TOEFL_OFFICIAL_SKILLS.listening[hashId(id) % 4]!;
    }
    if (skill === "Writing coherence") return hashId(id) % 2 === 0 ? "Write an Email" : "Build a Sentence";
    if (skill === "Academic Discussion") return "Write for an Academic Discussion";
    if (skill === "Speaking clarity") {
      return hashId(id) % 2 === 0 ? "Take an Interview" : "Listen and Repeat";
    }
    return skill;
  }

  if (
    SAT_ENGLISH.has(skill) ||
    SAT_GRAMMAR.has(skill) ||
    SAT_READING.has(skill) ||
    SAT_MATH.has(skill)
  ) {
    return skill;
  }
  if (skill === "Transitions" || skill === "Punctuation") return "Standard English Conventions";
  if (skill === "Central Ideas" || skill === "Information and Ideas") return "Information and Ideas";
  if (skill === "Rhetoric" || skill === "Words in context" || skill === "Craft and Structure") {
    return "Craft and Structure";
  }
  if (skill === "Expression of Ideas") return "Expression of Ideas";
  if (skill === "Linear equations" || skill === "Algebra") return "Algebra";
  if (skill === "Data interpretation") return "Problem-Solving and Data Analysis";
  return skill;
}

export function toeflSkillsForSection(sectionId: string): readonly string[] | undefined {
  if (sectionId === "reading") return TOEFL_OFFICIAL_SKILLS.reading;
  if (sectionId === "listening") return TOEFL_OFFICIAL_SKILLS.listening;
  if (sectionId === "writing") return TOEFL_OFFICIAL_SKILLS.writing;
  if (sectionId === "speaking") return TOEFL_OFFICIAL_SKILLS.speaking;
  return undefined;
}

export function satSkillsForSection(sectionId: string): readonly string[] | undefined {
  if (sectionId === "english") return SAT_OFFICIAL_SKILLS.english;
  if (sectionId === "grammar") return SAT_OFFICIAL_SKILLS.grammar;
  if (sectionId === "reading") return SAT_OFFICIAL_SKILLS.reading;
  if (sectionId === "mathematics") return SAT_OFFICIAL_SKILLS.mathematics;
  return undefined;
}

export const TOEFL_ALL_SKILLS: readonly string[] = [
  ...TOEFL_OFFICIAL_SKILLS.reading,
  ...TOEFL_OFFICIAL_SKILLS.listening,
  ...TOEFL_OFFICIAL_SKILLS.writing,
  ...TOEFL_OFFICIAL_SKILLS.speaking,
];

export const SAT_ALL_SKILLS: readonly string[] = [
  ...SAT_OFFICIAL_SKILLS.english,
  ...SAT_OFFICIAL_SKILLS.grammar,
  ...SAT_OFFICIAL_SKILLS.reading,
  ...SAT_OFFICIAL_SKILLS.mathematics,
];

export function withOfficialSkill<T extends { id: string; skill: string }>(
  exam: "toefl" | "sat",
  question: T
): T {
  return { ...question, skill: remapEnglishSkill(question.skill, exam, question.id) };
}

/** Label above a stimulus box (passage, transcript, email scenario, etc.). */
export function englishStimulusLabel(skill: string): string {
  if (skill.startsWith("Listen to") || skill === "Listen and Choose a Response") {
    return "Transcript (stand-in for audio)";
  }
  if (skill === "Listen and Repeat") return "Target sentence";
  if (skill === "Take an Interview") return "Interview prompt";
  if (skill === "Build a Sentence") return "Word bank";
  if (skill === "Write an Email") return "Email situation";
  if (skill === "Write for an Academic Discussion") return "Discussion board";
  if (skill === "Read in Daily Life") return "Campus / daily-life text";
  if (skill === "Read an Academic Passage") return "Academic passage";
  if (skill === "Standard English Conventions") return "Text to edit";
  if (skill === "Expression of Ideas") return "Draft to revise";
  return "Passage";
}

export const TOEFL_FORMAT_BLURB =
  "Aligned with the current ETS TOEFL iBT task types (Reading, Listening, Writing, Speaking). Original practice — not real ETS items.";

export const SAT_FORMAT_BLURB =
  "Aligned with the Digital SAT: one short passage (about 25–150 words) per Reading and Writing question, plus College Board Math domains. Original practice — not real SAT items.";

export function examFormatBlurb(exam: "toefl" | "sat"): string {
  return exam === "toefl" ? TOEFL_FORMAT_BLURB : SAT_FORMAT_BLURB;
}
