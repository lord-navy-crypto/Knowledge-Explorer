import type { EnglishPracticeQuestion } from "@/data/english-content";
import { satQuestions, toeflQuestions } from "@/data/english-content";
import type { EnglishExamId } from "@/data/english-exam-sections";
import { satSkillsForSection, toeflSkillsForSection } from "@/lib/english-exam-format";

export function questionsForExam(exam: EnglishExamId): EnglishPracticeQuestion[] {
  return exam === "toefl" ? toeflQuestions : satQuestions;
}

export function questionsForSection(
  exam: EnglishExamId,
  sectionId: string
): EnglishPracticeQuestion[] {
  const all = questionsForExam(exam);
  const skills = exam === "toefl" ? toeflSkillsForSection(sectionId) : satSkillsForSection(sectionId);
  if (!skills) return all;
  return all.filter((q) => skills.some((skill) => q.skill === skill || q.skill.startsWith(skill)));
}

export function skillOptions(questions: EnglishPracticeQuestion[]): string[] {
  return [...new Set(questions.map((q) => q.skill))].sort();
}
