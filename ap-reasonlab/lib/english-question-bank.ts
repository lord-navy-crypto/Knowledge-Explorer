import type { EnglishPracticeQuestion } from "@/data/english-content";
import { satQuestions, toeflQuestions } from "@/data/english-content";
import type { EnglishExamId } from "@/data/english-exam-sections";

const TOEFL_SECTION_SKILLS: Record<string, string[]> = {
  reading: ["Complete the Words", "Academic Reading", "Reading detail", "Grammar in context"],
  listening: ["Listening inference", "Listening purpose"],
  writing: ["Writing coherence", "Academic Discussion"],
  speaking: ["Speaking clarity"],
};

const SAT_SECTION_SKILLS: Record<string, string[]> = {
  english: ["Expression of Ideas", "Rhetoric", "Central Ideas"],
  grammar: ["Standard English Conventions", "Transitions"],
  reading: ["Information and Ideas", "Words in context"],
  mathematics: ["Algebra", "Linear equations", "Data interpretation"],
};

export function questionsForExam(exam: EnglishExamId): EnglishPracticeQuestion[] {
  return exam === "toefl" ? toeflQuestions : satQuestions;
}

export function questionsForSection(
  exam: EnglishExamId,
  sectionId: string
): EnglishPracticeQuestion[] {
  const all = questionsForExam(exam);
  const map = exam === "toefl" ? TOEFL_SECTION_SKILLS : SAT_SECTION_SKILLS;
  const skills = map[sectionId];
  if (!skills) return all;
  return all.filter((q) => skills.some((skill) => q.skill === skill || q.skill.startsWith(skill)));
}

export function skillOptions(questions: EnglishPracticeQuestion[]): string[] {
  return [...new Set(questions.map((q) => q.skill))].sort();
}
