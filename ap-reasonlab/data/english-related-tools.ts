/** Related built-in + external tool packs for English / exam pages. */

export const ENGLISH_RELATED = {
  hub: {
    title: "English · related tools",
    toolIds: ["vocab-book", "dictation", "speech-to-text", "paraphrase", "reading-highlight", "short-code"],
    externalIds: ["cambridge-dictionary", "oxford-learner", "ets-toefl"],
  },
  vocabulary: {
    title: "Vocabulary · related tools",
    toolIds: ["vocab-book", "dictation", "flashcards", "short-code"],
    externalIds: ["cambridge-dictionary", "oxford-learner", "merriam-webster"],
  },
  grammar: {
    title: "Grammar · related tools",
    toolIds: ["paraphrase", "text-diff", "short-code"],
    externalIds: ["cambridge-dictionary", "oxford-learner"],
  },
  "toefl-reading": {
    title: "TOEFL Reading · related tools",
    toolIds: ["reading-highlight", "vocab-book", "short-code"],
    externalIds: ["ets-toefl", "cambridge-dictionary"],
  },
  "toefl-listening": {
    title: "TOEFL Listening · related tools",
    toolIds: ["dictation", "speech-to-text", "short-code"],
    externalIds: ["ets-toefl", "cambridge-dictionary"],
  },
  "toefl-writing": {
    title: "TOEFL Writing · related tools",
    toolIds: ["paraphrase", "word-count", "draft", "short-code"],
    externalIds: ["ets-toefl", "oxford-learner"],
  },
  "toefl-speaking": {
    title: "TOEFL Speaking · related tools",
    toolIds: ["speech-to-text", "dictation", "short-code"],
    externalIds: ["ets-toefl", "cambridge-dictionary"],
  },
} as const;

export type EnglishRelatedKey = keyof typeof ENGLISH_RELATED;
