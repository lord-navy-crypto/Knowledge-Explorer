import type { EnglishExamId } from "@/data/english-exam-sections";

/** Official-ish section timers (minutes) for in-site MCQ banks. */
export const ENGLISH_SECTION_TIMER_MINUTES: Record<
  EnglishExamId,
  Partial<Record<string, number>>
> = {
  toefl: {
    reading: 30,
    listening: 29,
    writing: 23,
    speaking: 8,
  },
  sat: {
    english: 32,
    grammar: 32,
    reading: 32,
    mathematics: 35,
  },
};

export function sectionTimerMinutes(
  examId: EnglishExamId,
  sectionId: string
): number | undefined {
  return ENGLISH_SECTION_TIMER_MINUTES[examId]?.[sectionId];
}

/** Full-hub practice pace (all skills combined). */
export const ENGLISH_HUB_TIMER_MINUTES: Record<EnglishExamId, number> = {
  toefl: 90,
  sat: 64,
};

export function hubTimerMinutes(examId: EnglishExamId): number {
  return ENGLISH_HUB_TIMER_MINUTES[examId];
}
