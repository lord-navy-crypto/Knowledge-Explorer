export type ParsedPracticeQuestion = {
  id: string;
  prompt: string;
  hint: string;
};

/** Split AI markdown into separate practice prompts (numbered / heading patterns). */
export function parsePracticeQuestions(text: string): ParsedPracticeQuestion[] {
  const trimmed = text.trim();
  if (!trimmed) return [];

  const chunks = trimmed
    .split(/\n(?=(?:\d{1,2}[.)]\s+)|(?:#{1,3}\s*(?:Q(?:uestion)?\s*)?\d+)|(?:\*\*Q\d+)|(?:^Item\s+\d+))/im)
    .map((part) => part.trim())
    .filter(Boolean);

  const parts = chunks.length > 1 ? chunks : [trimmed];

  return parts.map((part, index) => {
    const prompt = part
      .replace(/^\d{1,2}[.)]\s*/, "")
      .replace(/^#{1,3}\s*(?:Q(?:uestion)?\s*)?\d+[.:)\s-]*/i, "")
      .replace(/^\*\*Q\d+\*\*:?\s*/i, "")
      .replace(/^Item\s+\d+:?\s*/i, "")
      .trim();

    const hintMatch = part.match(/(?:^|\n)(?:hint|hints?)[:：]\s*(.+)$/im);
    const hint = hintMatch?.[1]?.trim() || "Attempt before asking for more hints.";

    return {
      id: `q-${index + 1}`,
      prompt,
      hint,
    };
  });
}
