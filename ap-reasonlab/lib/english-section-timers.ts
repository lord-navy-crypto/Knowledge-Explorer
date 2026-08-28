import type { EnglishExamId } from "@/data/english-exam-sections";

/** Exam-style section timers (minutes) for in-site MCQ banks. */
export const ENGLISH_SECTION_TIMER_MINUTES: Record<
  EnglishExamId,
  Partial<Record<string, number>>
> = {
  toefl: {
    reading: 35,
    listening: 20,
    writing: 18,
    speaking: 12,
  },
  sat: {
    english: 25,
    grammar: 15,
    reading: 25,
    mathematics: 35,
  },
};

export function sectionTimerMinutes(
  examId: EnglishExamId,
  sectionId: string
): number | undefined {
  return ENGLISH_SECTION_TIMER_MINUTES[examId]?.[sectionId];
}
