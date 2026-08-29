/**
 * One-shot: rewrite legacy English bank source files into official exam shape.
 * Run from ap-reasonlab: npx tsx scripts/persist-english-official-shape.ts
 */
import { writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import type { EnglishPracticeQuestion } from "../data/english-content";
import { extraSatQuestions, extraToeflQuestions } from "../data/english-questions-extra";
import { curatedSatQuestions, curatedToeflQuestions } from "../data/english-questions-curated";
import {
  curatedExtendedSatQuestions,
  curatedExtendedToeflQuestions,
} from "../data/english-questions-curated-extended";
import { hardSatQuestions, hardToeflQuestions } from "../data/english-questions-hard";
import { coreSatQuestions, coreToeflQuestions } from "../data/english-questions-core";
import { shapeOfficialEnglishQuestion } from "../lib/english-official-shape";

const root = path.dirname(fileURLToPath(import.meta.url));
const data = path.join(root, "../data");

function shapeAll(exam: "toefl" | "sat", items: EnglishPracticeQuestion[]) {
  return items.map((item) => {
    const shaped = shapeOfficialEnglishQuestion(exam, item);
    const out: EnglishPracticeQuestion = {
      id: shaped.id,
      skill: shaped.skill,
      prompt: shaped.prompt,
      choices: shaped.choices,
      answer: shaped.answer,
      explanation: shaped.explanation,
    };
    if (shaped.passage?.trim()) out.passage = shaped.passage;
    return out;
  });
}

function fileFor(
  header: string,
  toeflName: string,
  satName: string,
  toefl: EnglishPracticeQuestion[],
  sat: EnglishPracticeQuestion[]
) {
  return `${header}
import type { EnglishPracticeQuestion } from "./english-content";

export const ${toeflName}: EnglishPracticeQuestion[] = ${JSON.stringify(toefl, null, 2)};

export const ${satName}: EnglishPracticeQuestion[] = ${JSON.stringify(sat, null, 2)};
`;
}

writeFileSync(
  path.join(data, "english-questions-extra.ts"),
  fileFor(
    "/** Legacy extra bank — rewritten into official TOEFL iBT / Digital SAT task shape. Original items. */",
    "extraToeflQuestions",
    "extraSatQuestions",
    shapeAll("toefl", extraToeflQuestions),
    shapeAll("sat", extraSatQuestions)
  )
);

writeFileSync(
  path.join(data, "english-questions-curated.ts"),
  fileFor(
    "/** Hand-curated bank — rewritten into official TOEFL iBT / Digital SAT task shape. */",
    "curatedToeflQuestions",
    "curatedSatQuestions",
    shapeAll("toefl", curatedToeflQuestions),
    shapeAll("sat", curatedSatQuestions)
  )
);

writeFileSync(
  path.join(data, "english-questions-curated-extended.ts"),
  fileFor(
    "/** Curated-extended bank — rewritten into official TOEFL iBT / Digital SAT task shape. */",
    "curatedExtendedToeflQuestions",
    "curatedExtendedSatQuestions",
    shapeAll("toefl", curatedExtendedToeflQuestions),
    shapeAll("sat", curatedExtendedSatQuestions)
  )
);

writeFileSync(
  path.join(data, "english-questions-hard.ts"),
  fileFor(
    "/** Challenge-tier bank — rewritten into official TOEFL iBT / Digital SAT task shape. */",
    "hardToeflQuestions",
    "hardSatQuestions",
    shapeAll("toefl", hardToeflQuestions),
    shapeAll("sat", hardSatQuestions)
  )
);

writeFileSync(
  path.join(data, "english-questions-core.ts"),
  fileFor(
    "/** Legacy core bank — rewritten into official TOEFL iBT / Digital SAT task shape. Original items. */",
    "coreToeflQuestions",
    "coreSatQuestions",
    shapeAll("toefl", coreToeflQuestions),
    shapeAll("sat", coreSatQuestions)
  )
);

console.log("Wrote core, extra, curated, curated-extended, and hard English banks in official exam shape.");
