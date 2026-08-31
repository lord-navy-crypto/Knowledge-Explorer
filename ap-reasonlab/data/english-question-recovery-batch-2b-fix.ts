import type { EnglishPracticeQuestion } from "./english-content";
export const recoveredEnglishItemsBatch2BFix: Record<string, EnglishPracticeQuestion> = {
  "sat-curated-ext-19": {
    id: "sat-curated-ext-19",
    skill: "Algebra",
    authenticity: "exam_authentic",
    responseMode: "single_choice",
    passage: "A function f(x)=−2x+7 models one temperature-change process, while g(x)=x−5 models a second process over the same interval.",
    prompt: "For what value of x do the two models predict the same value?",
    choices: ["4", "3", "4/3", "6"],
    answer: 0,
    explanation: "Set the models equal: −2x+7=x−5. Then 12=3x, so x=4. The other choices correspond to sign or division errors and are not equivalent to the correct result."
  }
};