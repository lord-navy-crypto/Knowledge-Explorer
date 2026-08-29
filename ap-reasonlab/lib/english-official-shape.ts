import type { EnglishPracticeQuestion } from "@/data/english-content";
import { remapEnglishSkill } from "@/lib/english-exam-format";

const SAT_SEC_STEM =
  "Which choice completes the text so that it conforms to the conventions of Standard English?";
const SAT_EOI_STEM = "Which choice best achieves the writer's goal?";
const SAT_II_STEM = "Which choice is best supported by the text?";
const SAT_CS_STEM = "Which choice completes the text with the most logical and precise word or phrase?";

const QUESTION_START =
  /^(Which|What|Why|How|Choose|The writer|The author's|The professor)\b/i;

function splitScenarioAndStem(prompt: string): { body: string; stem: string | null } {
  const text = prompt.trim();
  const re =
    /\s+((?:Which|What|Why|How|Choose|The writer|The author's|The professor)[\s\S]+)$/;
  const match = text.match(re);
  if (match?.index != null && match.index > 24) {
    return { body: text.slice(0, match.index).trim(), stem: match[1]!.trim() };
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

function isQuestionLike(text: string): boolean {
  const t = text.trim();
  if (!t) return false;
  if (QUESTION_START.test(t) || /^Follow-up:/i.test(t)) return true;
  return /\?$/.test(t) && t.length < 180;
}

function stripQuestionTail(text: string): string {
  let t = text.replace(/\s*Follow-up:[\s\S]*$/i, "").trim();
  t = t.replace(/\s+(?:What|Which|Why|How) (?:is|are|does|should|was|were|would|could|the)[\s\S]*$/i, "").trim();
  t = t.replace(/\s+What is the (?:TA|professor|speaker|student)[\s\S]*$/i, "").trim();
  return t;
}

function speakerLabel(raw: string): string {
  if (/teaching assistant|\bTA\b/i.test(raw)) return "Teaching assistant";
  if (/professor/i.test(raw)) return "Professor";
  if (/\bstudent\b/i.test(raw)) return "Student";
  if (/advisor/i.test(raw)) return "Advisor";
  if (/librarian/i.test(raw)) return "Librarian";
  if (/announc/i.test(raw)) return "Announcer";
  const cleaned = raw.replace(/^(At the start of a lecture,\s*)/i, "").replace(/^(A |An )/i, "").trim();
  return cleaned || "Speaker";
}

function conversationTurns(prompt: string): string | null {
  const turns = [
    ...prompt.matchAll(
      /(\w[\w\s,'-]{0,48}?)\s+(?:says|replies|asks|announces),?\s*[“"]([^"“”]+)[”"]/g
    ),
  ];
  if (turns.length >= 2) {
    return turns.map((m) => `${speakerLabel(m[1]!.trim())}: “${m[2]}”`).join("\n");
  }
  return null;
}

function listeningTranscript(prompt: string, spoken: ReturnType<typeof extractSpoken>, body: string): string {
  const multi = conversationTurns(prompt);
  if (multi) return multi;
  if (spoken) {
    return `${speakerLabel(spoken.speaker)}: “${spoken.quote}”`;
  }
  return stripQuestionTail(body) || stripQuestionTail(prompt);
}

function satOfficialStem(skill: string, fallback: string | null): string {
  if (skill === "Standard English Conventions") return SAT_SEC_STEM;
  if (skill === "Expression of Ideas") return SAT_EOI_STEM;
  if (skill === "Information and Ideas") return fallback?.startsWith("Which") ? fallback : SAT_II_STEM;
  if (skill === "Craft and Structure") return fallback?.includes("most nearly") ? fallback : SAT_CS_STEM;
  return fallback || "Which choice is correct?";
}

function looksLikeTransitionChoices(q: EnglishPracticeQuestion): boolean {
  return q.choices.every((c) => {
    const t = c.trim();
    return (
      t.length < 28 &&
      /^(However|Therefore|Consequently|Likewise|In addition|Nevertheless|For example|Similarly|Meanwhile|Instead|In contrast)/i.test(
        t
      )
    );
  });
}

function writerGoal(prompt: string): string {
  const want = prompt.match(/wants to\s+(.+?)(?:\.| Which|$)/i);
  if (want) return want[1]!.trim().replace(/\.$/, "");
  const arguing = prompt.match(/arguing that\s+(.+?)(?:\?|$)/i);
  if (arguing) return `open a paragraph arguing that ${arguing[1]!.trim()}`;
  const emphasize = prompt.match(/emphasize\s+(.+?)(?:\.| Which|$)/i);
  if (emphasize) return `emphasize ${emphasize[1]!.trim()}`;
  return "revise the draft for a stated rhetorical goal";
}

function expandSatReadingPassage(q: EnglishPracticeQuestion, body: string): string {
  const trimmed = body.replace(/^A passage argues that\s+/i, "").trim();
  if (/^A passage argues/i.test(q.prompt) || /^A passage argues/i.test(body)) {
    const claim = (q.prompt.match(/argues that\s+(.+?)(?:\.| Which|$)/i) || [])[1] || trimmed;
    const support = q.choices[q.answer] ?? "";
    return `${ensurePeriod(claim.charAt(0).toUpperCase() + claim.slice(1))} ${ensurePeriod(support)} The same report also notes unrelated constraints such as cost and weather.`;
  }
  return body;
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
    const passage = body.replace(/\s+Which choice completes[\s\S]*$/i, "").trim() || q.prompt;
    return { ...q, skill, passage, prompt: SAT_SEC_STEM };
  }

  if (skill === "Expression of Ideas") {
    if (looksLikeTransitionChoices(q)) {
      return {
        ...q,
        skill,
        passage: body.replace(/\s+Which choice[\s\S]*$/i, "").trim() || q.prompt,
        prompt: "Which choice completes the text with the most logical transition?",
      };
    }
    const goal = writerGoal(q.prompt);
    const draftBits = q.choices.filter((_, i) => i !== q.answer).slice(0, 2);
    const passage = /^Which/.test(body)
      ? `Writer's goal: ${goal}.\nDraft under revision: ${draftBits.join(" ")}`
      : `Writer's goal: ${goal}.\n${body}`;
    return {
      ...q,
      skill,
      passage,
      prompt: SAT_EOI_STEM,
    };
  }

  if (skill === "Craft and Structure") {
    return {
      ...q,
      skill,
      passage: body,
      prompt: satOfficialStem(skill, stem),
    };
  }

  return {
    ...q,
    skill,
    passage: expandSatReadingPassage(q, body),
    prompt: satOfficialStem(skill, stem),
  };
}

function looksLikeCampusNotice(text: string): boolean {
  return /campus|library|housing|From:|Subject:|dining|shuttle|registrar|notice|office hours|dorm|cafeteria|gym hours/i.test(
    text
  );
}

function letterBlank(q: EnglishPracticeQuestion): boolean {
  return q.choices.every((c) => c.length <= 4) && /_{2,}|___/.test(q.prompt);
}

function wordBlankVocab(q: EnglishPracticeQuestion): boolean {
  return /_{2,}|___/.test(q.prompt) && q.choices.every((c) => c.length > 2 && !/\s/.test(c));
}

function fullSentenceChoices(q: EnglishPracticeQuestion): boolean {
  return q.choices.every((c) => c.length > 18 && /\s/.test(c));
}

export function refineToeflSkill(q: EnglishPracticeQuestion, skill: string): string {
  const orig = q.skill;
  const p = q.prompt;
  if (orig === "Listening inference" || orig === "Listening purpose") {
    if (/announc/i.test(p)) return "Listen to an Announcement";
    if (/student|teaching assistant|\bTA\b|advisor|librarian/i.test(p)) return "Listen to a Conversation";
    return "Listen to an Academic Talk";
  }
  if (orig === "Grammar in context") {
    return letterBlank(q) ? "Complete the Words" : "Build a Sentence";
  }
  if (orig === "Complete the Words") return "Complete the Words";
  if (orig === "Vocabulary in context") return "Read an Academic Passage";
  if (orig === "Academic Reading" || orig === "Reading detail") {
    return looksLikeCampusNotice(p) ? "Read in Daily Life" : "Read an Academic Passage";
  }
  if (orig === "Writing coherence" || orig === "Academic Discussion") {
    return /e-?mail/i.test(p) ? "Write an Email" : "Write for an Academic Discussion";
  }
  if (orig === "Speaking clarity") return "Take an Interview";
  return skill;
}

function discussionTopic(prompt: string): string {
  const arguing = prompt.match(/arguing that\s+(.+?)(?:\?|$)/i);
  if (arguing) {
    const claim = arguing[1]!.trim().replace(/\.$/, "");
    return `Should we accept the claim that ${claim}?`;
  }
  const whether = prompt.match(/whether\s+(.+?)(?:\.|\?| Which|$)/i);
  if (whether) return `Take a position on whether ${whether[1]!.trim().replace(/\.$/, "")}.`;
  const about = prompt.match(/about\s+(.+?)(?:\?|$)/i);
  if (about) return `This week's question is about ${about[1]!.trim().replace(/\.$/, "")}. Take a position.`;
  if (/paragraph unity|body paragraph|topic sentence|begins a paragraph/i.test(prompt)) {
    return "What sentence should open your discussion post, and what specific reason will you give?";
  }
  const cleaned = prompt.replace(/^Which sentence best\s+/i, "").replace(/\?$/, "").trim();
  if (cleaned.length > 12 && cleaned.length < 180 && !QUESTION_START.test(cleaned)) {
    return cleaned.charAt(0).toUpperCase() + cleaned.slice(1);
  }
  return "What claim should open your next discussion post, and why?";
}

function academicDiscussionBoard(prompt: string): string {
  const topic = discussionTopic(prompt);
  return `Professor: ${topic}

Student A: I have a view, but I have not given a focused reason yet.
Student B: The strongest posts start with a clear claim and one concrete example.`;
}

function toInterviewQuestion(prompt: string): string {
  const whether = prompt.match(/whether\s+(.+?)(?:\?|$)/i);
  if (whether) {
    const raw = whether[1]!.trim().replace(/\?$/, "");
    const flipped = raw.match(/^(.+?)\s+should\s+(.+)$/i);
    const question = flipped ? `Should ${flipped[1]} ${flipped[2]}` : raw;
    const capped = question.charAt(0).toUpperCase() + question.slice(1);
    return capped.endsWith("?") ? capped : `${capped}?`;
  }
  return "What is your position on this issue, and what is one specific reason? You have 45 seconds.";
}

function interviewPrompt(q: EnglishPracticeQuestion): { passage: string; prompt: string } {
  const question = toInterviewQuestion(q.prompt);
  return {
    passage: `Interviewer: “${question}”`,
    prompt: "Which response is strongest for a timed interview?",
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

  if (wordBlankVocab(q) && (skill.startsWith("Read ") || q.skill === "Vocabulary in context")) {
    return {
      ...q,
      skill: "Read an Academic Passage",
      passage: body || q.prompt,
      prompt: "The blank is closest in meaning to",
    };
  }

  if (skill === "Listen and Choose a Response") {
    const line = spoken ? `You hear: “${spoken.quote}”` : `You hear: “${stripQuestionTail(body)}”`;
    return {
      ...q,
      skill,
      passage: line,
      prompt: "Which response is most appropriate?",
    };
  }

  if (skill === "Listen to a Conversation") {
    return {
      ...q,
      skill,
      passage: listeningTranscript(q.prompt, spoken, body),
      prompt: stem || "What is the speaker implying?",
    };
  }

  if (skill === "Listen to an Announcement") {
    const text = spoken ? spoken.quote : stripQuestionTail(body);
    return {
      ...q,
      skill,
      passage: `Campus announcement: ${ensurePeriod(text)}`,
      prompt: stem || "What should listeners do?",
    };
  }

  if (skill === "Listen to an Academic Talk") {
    const text = spoken
      ? `Professor: “${spoken.quote}”`
      : `Professor: ${ensurePeriod(stripQuestionTail(body))}`;
    return {
      ...q,
      skill,
      passage: text,
      prompt: stem || "What is the professor's main point?",
    };
  }

  if (skill === "Build a Sentence") {
    return {
      ...q,
      skill,
      passage: `Build a sentence that matches the intended meaning.\n${stripQuestionTail(body)}`,
      prompt: fullSentenceChoices(q)
        ? "Which sentence is grammatically correct?"
        : "Which option completes the sentence correctly?",
    };
  }

  if (skill === "Write an Email") {
    return {
      ...q,
      skill,
      passage: `Situation: ${ensurePeriod(stripQuestionTail(body))}`,
      prompt: stem || "Which email is most appropriate?",
    };
  }

  if (skill === "Write for an Academic Discussion") {
    return {
      ...q,
      skill,
      passage: academicDiscussionBoard(q.prompt),
      prompt: "Which reply contributes most to the discussion?",
    };
  }

  if (skill === "Listen and Repeat") {
    const target = spoken?.quote || stripQuestionTail(body);
    return {
      ...q,
      skill,
      passage: `Target sentence: “${target.replace(/^["“]|["”]$/g, "")}”`,
      prompt: "Which repetition is most accurate?",
    };
  }

  if (skill === "Take an Interview") {
    const interview = interviewPrompt(q);
    return {
      ...q,
      skill,
      passage: interview.passage,
      prompt: interview.prompt,
    };
  }

  return {
    ...q,
    skill,
    passage: stripQuestionTail(body),
    prompt: stem || "Which conclusion is best supported?",
  };
}

const MATH_SKILLS = new Set([
  "Algebra",
  "Advanced Math",
  "Problem-Solving and Data Analysis",
  "Geometry and Trigonometry",
]);

/** Rewrite a legacy one-line MCQ into the current official stimulus + stem shape. */
export function shapeOfficialEnglishQuestion(
  exam: "toefl" | "sat",
  question: EnglishPracticeQuestion
): EnglishPracticeQuestion {
  const remapped = remapEnglishSkill(question.skill, exam, question.id);
  const skill = exam === "toefl" ? refineToeflSkill(question, remapped) : remapped;
  const shaped = exam === "sat" ? shapeSat(question, skill) : shapeToefl(question, skill);
  if (MATH_SKILLS.has(skill)) {
    return shaped;
  }
  if (!shaped.passage?.trim() && shaped.prompt.trim()) {
    return { ...shaped, passage: shaped.prompt };
  }
  return shaped;
}
