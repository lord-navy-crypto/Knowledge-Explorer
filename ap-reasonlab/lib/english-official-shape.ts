import type { EnglishPracticeQuestion } from "@/data/english-content";
import { remapEnglishSkill } from "@/lib/english-exam-format";

const SAT_SEC_STEM =
  "Which choice completes the text so that it conforms to the conventions of Standard English?";
const SAT_EOI_STEM = "Which choice best achieves the writer's goal?";
const SAT_II_STEM = "Which choice is best supported by the text?";
const SAT_CS_STEM = "Which choice completes the text with the most logical and precise word or phrase?";

function splitScenarioAndStem(prompt: string): { body: string; stem: string | null } {
  const text = prompt.trim();
  const re =
    /\s+((?:Which|What|Why|How|Choose|The writer|The author's|The professor|The author's caution)[\s\S]+)$/;
  const match = text.match(re);
  if (match?.index != null && match.index > 24) {
    return { body: text.slice(0, match.index).trim(), stem: match[1].trim() };
  }
  const lastQ = text.lastIndexOf("?");
  if (lastQ > 40 && lastQ < text.length - 1) {
    const after = text.slice(lastQ + 1).trim();
    if (!after) {
      const before = text.slice(0, lastQ + 1);
      const sentences = before.split(/(?<=[.!])\s+/);
      if (sentences.length >= 2) {
        const stem = sentences[sentences.length - 1]!;
        const body = sentences.slice(0, -1).join(" ");
        if (body.length > 20) return { body, stem };
      }
    }
  }
  return { body: text, stem: null };
}

function extractSpoken(prompt: string): { speaker: string; quote: string; rest: string } | null {
  const match = prompt.match(
    /^(.*?)\s+(?:says|replies|asks|announces),?\s*[“"]([^"“”]+)[”"]\.?\s*([\s\S]*)$/
  );
  if (!match) return null;
  return { speaker: match[1]!.trim(), quote: match[2]!.trim(), rest: match[3]!.trim() };
}

function ensurePeriod(text: string): string {
  const t = text.trim();
  if (!t) return t;
  return /[.!?]$/.test(t) ? t : `${t}.`;
}

function satOfficialStem(skill: string, fallback: string | null): string {
  if (skill === "Standard English Conventions") return SAT_SEC_STEM;
  if (skill === "Expression of Ideas") return SAT_EOI_STEM;
  if (skill === "Information and Ideas") return fallback?.startsWith("Which") ? fallback : SAT_II_STEM;
  if (skill === "Craft and Structure") return fallback?.includes("most nearly") ? fallback : SAT_CS_STEM;
  return fallback || "Which choice is correct?";
}

function shapeSat(q: EnglishPracticeQuestion, skill: string): EnglishPracticeQuestion {
  if (q.passage?.trim()) {
    return { ...q, skill };
  }

  const { body, stem } = splitScenarioAndStem(q.prompt);

  if (
    skill === "Algebra" ||
    skill === "Advanced Math" ||
    skill === "Problem-Solving and Data Analysis" ||
    skill === "Geometry and Trigonometry"
  ) {
    const isPure = /^(If |Solve |What is |Find |A line |The graph |Which equation)/i.test(q.prompt);
    return {
      ...q,
      skill,
      passage: isPure ? "" : body === q.prompt ? q.prompt : body,
      prompt: isPure ? q.prompt : stem || "Which value or expression is correct?",
    };
  }

  if (skill === "Standard English Conventions") {
    return {
      ...q,
      skill,
      passage: body.replace(/\s+Which choice completes[\s\S]*$/i, "").trim() || q.prompt,
      prompt: SAT_SEC_STEM,
    };
  }

  if (skill === "Expression of Ideas") {
    return {
      ...q,
      skill,
      passage: body.startsWith("Which") ? `Writer's goal: ${body}` : body,
      prompt: stem && !stem.startsWith("Which sentence") ? stem : SAT_EOI_STEM,
    };
  }

  return {
    ...q,
    skill,
    passage: body,
    prompt: satOfficialStem(skill, stem),
  };
}

function shapeToefl(q: EnglishPracticeQuestion, skill: string): EnglishPracticeQuestion {
  if (q.passage?.trim()) {
    return { ...q, skill };
  }

  const spoken = extractSpoken(q.prompt);
  const { body, stem } = splitScenarioAndStem(q.prompt);

  if (skill === "Complete the Words") {
    return {
      ...q,
      skill,
      passage: q.prompt,
      prompt: "Select the letters that complete the word.",
    };
  }

  if (skill === "Listen and Choose a Response") {
    const line = spoken ? `You hear: “${spoken.quote}”` : `You hear: “${body}”`;
    return {
      ...q,
      skill,
      passage: line,
      prompt: "Which response is most appropriate?",
    };
  }

  if (skill === "Listen to a Conversation") {
    const transcript = spoken
      ? `${spoken.speaker}: ${spoken.quote}${spoken.rest ? `\nFollow-up: ${spoken.rest}` : ""}`
      : body;
    return {
      ...q,
      skill,
      passage: transcript,
      prompt: stem || "What is the speaker's main point?",
    };
  }

  if (skill === "Listen to an Announcement") {
    const text = spoken ? spoken.quote : body;
    return {
      ...q,
      skill,
      passage: `Campus announcement: ${ensurePeriod(text)}`,
      prompt: stem || "What should listeners do?",
    };
  }

  if (skill === "Listen to an Academic Talk") {
    const text = spoken ? `Today I want you to notice this: “${spoken.quote}” ${spoken.rest}` : body;
    return {
      ...q,
      skill,
      passage: ensurePeriod(text),
      prompt: stem || "What is the professor's main point?",
    };
  }

  if (skill === "Build a Sentence") {
    return {
      ...q,
      skill,
      passage: `Task: choose the grammatical sentence that matches the intended meaning.\n${body}`,
      prompt: stem || "Which sentence is grammatically correct?",
    };
  }

  if (skill === "Write an Email") {
    return {
      ...q,
      skill,
      passage: `Situation: ${ensurePeriod(body)}`,
      prompt: stem || "Which email is most appropriate?",
    };
  }

  if (skill === "Write for an Academic Discussion") {
    return {
      ...q,
      skill,
      passage: `Discussion prompt: ${ensurePeriod(body)}`,
      prompt: stem || "Which reply contributes most to the discussion?",
    };
  }

  if (skill === "Listen and Repeat") {
    const target = spoken?.quote || body;
    return {
      ...q,
      skill,
      passage: `Target sentence: “${target.replace(/^["“]|["”]$/g, "")}”`,
      prompt: "Which repetition is most accurate?",
    };
  }

  if (skill === "Take an Interview") {
    return {
      ...q,
      skill,
      passage: `Interviewer: “${ensurePeriod(spoken?.quote || body).replace(/\.$/, "")}”`,
      prompt: stem || "Which response is strongest for a timed interview?",
    };
  }

  // Reading tasks
  return {
    ...q,
    skill,
    passage: body,
    prompt: stem || "Which conclusion is best supported?",
  };
}

/** Rewrite a legacy one-line MCQ into the current official stimulus + stem shape. */
export function shapeOfficialEnglishQuestion(
  exam: "toefl" | "sat",
  question: EnglishPracticeQuestion
): EnglishPracticeQuestion {
  const skill = remapEnglishSkill(question.skill, exam, question.id);
  const shaped = exam === "sat" ? shapeSat(question, skill) : shapeToefl(question, skill);
  if (skill.startsWith("Algebra") || skill === "Advanced Math" || skill === "Geometry and Trigonometry") {
    return shaped;
  }
  if (!shaped.passage?.trim() && shaped.prompt.trim()) {
    return { ...shaped, passage: shaped.prompt };
  }
  return shaped;
}
