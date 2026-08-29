"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { flushSync } from "react-dom";
import LocalAIControls from "@/components/LocalAIControls";
import MarkdownLatexField from "@/components/MarkdownLatexField";
import AiEquationCards from "@/components/AiEquationCards";
import AiToolboxRelatedStrip from "@/components/AiToolboxRelatedStrip";
import OfficialResourceLinks from "@/components/OfficialResourceLinks";
import {
  AP_PROGRAM_OFFICIAL,
  CODE_HUB_OFFICIAL,
  SAT_HUB_OFFICIAL,
  TOEFL_HUB_OFFICIAL,
} from "@/data/official-resources";
import AiSpecialFeatures from "@/components/AiSpecialFeatures";
import RichContent from "@/components/RichContent";
import VoiceInputButton from "@/components/VoiceInputButton";
import { useToast } from "@/components/ToastProvider";
import SaveGeneratedPractice from "@/components/SaveGeneratedPractice";
import { useLocalAI } from "@/components/LocalAIProvider";
import { codingAiLocal } from "@/lib/ai-coding-prompt";
import {
  HINT_PROCESS_LOCAL,
  SITE_GUIDE_LOCAL,
  conceptExplainLocal,
  englishTutorLocal,
} from "@/lib/ai-prompts";
import {
  appendAiSiteContext,
  fetchAiSiteContext,
  prefetchAiSiteContext,
  AI_SITE_SEARCH_LIMIT_LOCAL,
  AI_SITE_SEARCH_LOCAL_DEADLINE_MS,
} from "@/lib/ai-site-context";
import {
  type AiEquation,
  extractDollarMathToEquations,
  finalizeAiAssistantMath,
  mergeFormulaLists,
  repairAiMarkdownMath,
  withFormulaAccuracy,
} from "@/lib/ai-latex-accuracy";
import { normalizeAiDialogueText } from "@/lib/unicode-math";
import {
  loadToolboxPanelPrefs,
  saveToolboxPanelPrefs,
  type ToolboxCategory,
} from "@/lib/ai-toolbox-prefs";
import { takeToolboxPrefill } from "@/lib/ai-toolbox-prefill";
import { migrateEnglishTask, toolboxHref } from "@/lib/ai-toolbox-url";
import {
  LOCAL_CODING_RETRY_NUDGE,
  LOCAL_ENGLISH_RETRY_NUDGE,
  LOCAL_GUIDE_NUDGE,
  localNudgeForCoding,
  localNudgeForEnglish,
} from "@/lib/ai-reasoning-strip";
import {
  deleteAiThread,
  exportThreadMarkdown,
  getAiThread,
  listAiThreads,
  newThreadId,
  saveAiThread,
  titleFromFirstMessage,
  type AiChatThread,
  type StoredChatMessage,
} from "@/lib/ai-chat-history";
import {
  estimateTokens,
  LOCAL_CONTEXT_SOFT_LIMIT,
  localHistoryWindow,
  localSiteCap,
  localTurnCap,
  localUserCap,
  type ContextBudgetMode,
} from "@/lib/ai-context-budget";
import { parsePracticeItems } from "@/lib/ai-practice-queue";
import { fetchCloudAiWithAbort } from "@/lib/ai-stream-reveal";
import { guidePromptsForSubject } from "@/lib/ai-guide-specials";
import {
  encodeSpecialPrompt,
  type SpecialFeature,
} from "@/lib/ai-special-features";
import { speakEnglish } from "@/lib/english-tts";

const ENGLISH_INPUT_MAX = 16_000;

type Category = ToolboxCategory;

type ApTask =
  | "advice"
  | "concept"
  | "guide"
  | "formula-derive"
  | "generate-questions"
  | "concept-extension";

type EnglishTask =
  | "grammar-explanation"
  | "translator"
  | "writing-feedback"
  | "language-materials"
  | "test-strategy"
  | "practice-generator"
  | "speaking-practice";

type CodingTask = "debug" | "write" | "explain" | "csa-frq";

import { AP_SUBJECTS } from "@/data/ap-expanded";

const SUBJECT_OPTIONS = AP_SUBJECTS;

const AP_TASKS: Array<{ value: ApTask; label: string; hint: string }> = [
  {
    value: "advice",
    label: "Hints & process",
    hint: "Paste a problem for strategy hints (no final answer).",
  },
  {
    value: "concept",
    label: "Concept explain",
    hint: "Explain an AP concept clearly.",
  },
  {
    value: "guide",
    label: "Site / study guide",
    hint: "Ask how to use the website or study workflow.",
  },
  {
    value: "formula-derive",
    label: "Formula derive",
    hint: "Paste a formula — get how/why it is derived.",
  },
  {
    value: "generate-questions",
    label: "Generate practice",
    hint: "Paste a topic or stem — get original practice questions.",
  },
  {
    value: "concept-extension",
    label: "Concept extension",
    hint: "Paste a basic concept or formula — map how AP exams extend it into richer scenes (concepts, formulas, moves).",
  },
];

const ENGLISH_TASKS: Array<{ value: EnglishTask; label: string; hint: string }> = [
  {
    value: "grammar-explanation",
    label: "Grammar check",
    hint: "Find and explain grammar issues.",
  },
  {
    value: "translator",
    label: "Translator",
    hint: "Paste text — translate Chinese ↔ English (or the direction you name).",
  },
  {
    value: "writing-feedback",
    label: "Writing feedback",
    hint: "Feedback on a draft you paste.",
  },
  {
    value: "language-materials",
    label: "Language materials",
    hint: "Large paste → collect useful + extended 语言资料. Short command/sentence → generate language materials.",
  },
  {
    value: "test-strategy",
    label: "Exam strategy",
    hint: "TOEFL / SAT section tips — not AP science.",
  },
  {
    value: "practice-generator",
    label: "Practice generator",
    hint: "Paste any topic — copy it, then generate a new practice topic from it. Not a topic? Still copy and generate.",
  },
  {
    value: "speaking-practice",
    label: "Speaking coach",
    hint: "Dictate or paste spoken English — get fluency coaching + a read-aloud rewrite. Pair with Speech to text.",
  },
];

const CODING_TASKS: Array<{ value: CodingTask; label: string; hint: string }> = [
  { value: "debug", label: "Find bugs", hint: "Paste code and describe the bug." },
  { value: "write", label: "Write code", hint: "Describe what to build; get guided code help." },
  { value: "explain", label: "Explain code", hint: "Paste code for a clear explanation." },
  {
    value: "csa-frq",
    label: "AP CSA FRQ coach",
    hint: "Java AP CSA-style FRQ process — stubs, traces, edge cases. Try snippets on /code/java.",
  },
];

const LANGUAGES = ["Python", "Java", "HTML / CSS / JS", "General algorithms", "Other"] as const;

type Props = {
  defaultCategory?: Category;
  defaultSubject?: string;
  defaultApTask?: string;
  defaultEnglishTask?: string;
  defaultCodingTask?: string;
  /** From URL `sf=` (decoded) or other deep-link prompt body */
  defaultPrefillPrompt?: string;
};

type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  text: string;
  meta?: string;
  lists?: Array<{ label: string; items: string[] }>;
  /** Structured KaTeX equations — rendered as cards, not $…$ in the bubble. */
  equations?: AiEquation[];
  snippet?: string;
  refused?: boolean;
  aiMayBeWrong?: string;
  /** Show editor save for generate-practice replies */
  saveAsPractice?: boolean;
};

function historyText(message: ChatMessage): string {
  const base = message.text || "";
  if (!message.equations?.length) return base;
  const lines = message.equations.map((eq) => {
    const name = eq.name?.trim() || "Equation";
    const means = eq.means?.trim();
    return means ? `${name} | ${eq.latex} | ${means}` : `${name} | ${eq.latex}`;
  });
  return `${base}\n\n## Equations\n${lines.join("\n")}`.trim();
}

function finalizeLocalApMessage(
  text: string,
  extra: Omit<ChatMessage, "id" | "role" | "text" | "equations"> & { id?: string }
): ChatMessage {
  const { prose, equations } = extractDollarMathToEquations(text);
  return {
    id: extra.id || `a-${Date.now()}`,
    role: "assistant",
    text: prose,
    equations: equations.length ? equations : undefined,
    meta: extra.meta,
    lists: extra.lists,
    snippet: extra.snippet,
    refused: extra.refused,
    aiMayBeWrong: extra.aiMayBeWrong,
    saveAsPractice: extra.saveAsPractice,
  };
}

function scrubListDollars(items: string[] | undefined): {
  items: string[];
  equations: AiEquation[];
} {
  const outItems: string[] = [];
  const equations: AiEquation[] = [];
  for (const item of items || []) {
    const lifted = extractDollarMathToEquations(String(item || ""));
    if (lifted.prose.trim()) outItems.push(lifted.prose.trim());
    equations.push(...lifted.equations);
  }
  return { items: outItems, equations };
}

function formatAssistantText(parts: {
  body?: string;
  lists?: Array<{ label: string; items: string[] }>;
  snippet?: string;
  /** Only coding replies should fence snippets — math in ``` never renders as KaTeX. */
  snippetAsCode?: boolean;
  /** When true, run KaTeX validate/repair on the assembled markdown. */
  repairMath?: boolean;
}): string {
  const chunks: string[] = [];
  if (parts.body?.trim()) chunks.push(parts.body.trim());
  for (const list of parts.lists || []) {
    if (!list.items.length) continue;
    // Formula / hint lists stay as markdown bullets (never code fences) so KaTeX can render.
    chunks.push(`**${list.label}**\n${list.items.map((item) => `- ${item}`).join("\n")}`);
  }
  if (parts.snippet?.trim()) {
    const snippet = parts.snippet.trim();
    if (parts.snippetAsCode) {
      chunks.push(`\`\`\`\n${snippet}\n\`\`\``);
    } else {
      chunks.push(snippet);
    }
  }
  const joined = chunks.join("\n\n");
  if (parts.repairMath) return repairAiMarkdownMath(joined).text;
  return joined;
}

/** English replies stay prose-only — strip stray math delimiters models sometimes emit. */
function formatEnglishAssistantText(parts: Parameters<typeof formatAssistantText>[0]): string {
  return normalizeAiDialogueText(formatAssistantText(parts));
}

function buildHistoryBlock(messages: ChatMessage[]): string {
  if (messages.length === 0) return "";
  const recent = messages.slice(-8);
  const lines = recent.map((message) => {
    const who = message.role === "user" ? "Student" : "Tutor";
    return `${who}: ${historyText(message).slice(0, 1200)}`;
  });
  return `Conversation so far (continue from this context; do not restart unless asked):\n${lines.join("\n\n")}\n\n`;
}

export default function UnifiedAiPanel({
  defaultCategory = "ap",
  defaultSubject,
  defaultApTask,
  defaultEnglishTask,
  defaultCodingTask,
  defaultPrefillPrompt,
}: Props) {
  const localAI = useLocalAI();
  const savedPrefs = useMemo(() => loadToolboxPanelPrefs(), []);
  const [category, setCategory] = useState<Category>(defaultCategory || savedPrefs.category);
  const [apTask, setApTask] = useState<ApTask>(() => {
    if (defaultApTask && AP_TASKS.some((t) => t.value === defaultApTask)) {
      return defaultApTask as ApTask;
    }
    return (savedPrefs.apTask as ApTask) || "advice";
  });
  const [englishTask, setEnglishTask] = useState<EnglishTask>(() => {
    if (defaultEnglishTask) {
      const migrated = migrateEnglishTask(defaultEnglishTask);
      if (migrated) return migrated;
    }
    return (
      migrateEnglishTask(savedPrefs.englishTask) ||
      ("grammar-explanation" as EnglishTask)
    );
  });
  const [codingTask, setCodingTask] = useState<CodingTask>(() => {
    if (defaultCodingTask && CODING_TASKS.some((t) => t.value === defaultCodingTask)) {
      return defaultCodingTask as CodingTask;
    }
    return (savedPrefs.codingTask as CodingTask) || "debug";
  });
  const [subject, setSubject] = useState(defaultSubject || savedPrefs.subject || SUBJECT_OPTIONS[0]);
  const [englishTarget, setEnglishTarget] = useState(savedPrefs.englishTarget);
  const [language, setLanguage] = useState<(typeof LANGUAGES)[number]>(
    (savedPrefs.language as (typeof LANGUAGES)[number]) || "Python"
  );
  const [input, setInput] = useState("");
  const [code, setCode] = useState("");
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { warning: toastWarning } = useToast();
  const [siteSearchNote, setSiteSearchNote] = useState("");
  const [siteHits, setSiteHits] = useState<Array<{ title: string; href: string; subject?: string }>>(
    []
  );
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [threadId, setThreadId] = useState(() => newThreadId());
  const [threads, setThreads] = useState<AiChatThread[]>([]);
  const [showThreads, setShowThreads] = useState(false);
  const [budgetMode, setBudgetMode] = useState<ContextBudgetMode>("complete");
  const [practiceQueue, setPracticeQueue] = useState<string[]>([]);
  const [practiceIndex, setPracticeIndex] = useState(0);
  const [runResult, setRunResult] = useState("");
  const [shareNote, setShareNote] = useState("");
  const chatRef = useRef<HTMLDivElement>(null);
  /** When true, new tokens pin the dialogue to the bottom. Scroll up to unlock. */
  const stickToBottomRef = useRef(true);
  const [showJumpLatest, setShowJumpLatest] = useState(false);
  const abortRef = useRef<AbortController | null>(null);
  const budgetModeRef = useRef(budgetMode);
  budgetModeRef.current = budgetMode;

  const taskMeta = useMemo(() => {
    if (category === "ap") {
      return AP_TASKS.find((t) => t.value === apTask) || AP_TASKS[0];
    }
    if (category === "english") {
      return ENGLISH_TASKS.find((t) => t.value === englishTask) || ENGLISH_TASKS[0];
    }
    return CODING_TASKS.find((t) => t.value === codingTask) || CODING_TASKS[0];
  }, [apTask, category, codingTask, englishTask]);

  useEffect(() => {
    if (defaultCategory) setCategory(defaultCategory);
  }, [defaultCategory]);

  useEffect(() => {
    if (defaultSubject) setSubject(defaultSubject);
  }, [defaultSubject]);

  useEffect(() => {
    if (defaultApTask && AP_TASKS.some((t) => t.value === defaultApTask)) {
      setApTask(defaultApTask as ApTask);
    }
  }, [defaultApTask]);

  useEffect(() => {
    if (!defaultEnglishTask) return;
    const migrated = migrateEnglishTask(defaultEnglishTask);
    if (migrated) setEnglishTask(migrated);
  }, [defaultEnglishTask]);

  useEffect(() => {
    if (defaultCodingTask && CODING_TASKS.some((t) => t.value === defaultCodingTask)) {
      setCodingTask(defaultCodingTask as CodingTask);
    }
  }, [defaultCodingTask]);

  useEffect(() => {
    const prefill = takeToolboxPrefill() || defaultPrefillPrompt || "";
    if (prefill) setInput(prefill);
  }, [defaultPrefillPrompt]);

  useEffect(() => {
    void listAiThreads().then(setThreads);
  }, []);

  const guidePrompts = useMemo(
    () => (category === "ap" ? guidePromptsForSubject(subject) : []),
    [category, subject]
  );

  // Warm site-search cache while typing (Local + English/Coding prefer modes).
  useEffect(() => {
    const q = input.trim();
    if (q.length < 8) return;
    const prefer =
      category === "english"
        ? "language"
        : category === "coding"
          ? "code"
          : category === "ap" && apTask === "guide"
            ? "nav"
            : category === "ap"
              ? "formulas"
              : undefined;
    const shouldPrefetch =
      category === "english" || category === "ap" || (localAI.usesLocal && localAI.ready);
    if (!shouldPrefetch) return;
    const timer = window.setTimeout(() => {
      prefetchAiSiteContext(q, { limit: AI_SITE_SEARCH_LIMIT_LOCAL, prefer });
    }, 350);
    return () => window.clearTimeout(timer);
  }, [input, localAI.ready, localAI.usesLocal, category, apTask]);

  useEffect(() => {
    saveToolboxPanelPrefs({
      category,
      apTask,
      englishTask,
      codingTask,
      subject,
      englishTarget,
      language,
    });
  }, [apTask, category, codingTask, englishTarget, englishTask, language, subject]);

  useEffect(() => {
    const node = chatRef.current;
    if (!node) return;
    const onScroll = () => {
      const distance = node.scrollHeight - node.scrollTop - node.clientHeight;
      const nearBottom = distance <= 72;
      stickToBottomRef.current = nearBottom;
      setShowJumpLatest(!nearBottom && messages.length > 0);
    };
    node.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => node.removeEventListener("scroll", onScroll);
  }, [messages.length]);

  // Only follow the stream when the student is already at (or near) the bottom.
  // Scrolling up unlocks free reading while AI keeps generating.
  useEffect(() => {
    const node = chatRef.current;
    if (!node || !stickToBottomRef.current) return;
    node.scrollTop = node.scrollHeight;
  }, [messages, loading]);

  function jumpToLatest() {
    stickToBottomRef.current = true;
    setShowJumpLatest(false);
    const node = chatRef.current;
    if (node) node.scrollTop = node.scrollHeight;
  }

  const contextEstimate = useMemo(() => {
    const historyTextJoined = messages
      .slice(-localHistoryWindow(budgetMode))
      .map((m) => historyText(m))
      .join("\n");
    const used = estimateTokens(historyTextJoined, input, notes, code);
    const limit = localAI.usesLocal ? LOCAL_CONTEXT_SOFT_LIMIT : 14_000;
    return { used, limit, pct: Math.min(100, Math.round((used / limit) * 100)) };
  }, [budgetMode, code, input, localAI.usesLocal, messages, notes]);

  async function refreshThreads() {
    setThreads(await listAiThreads());
  }

  async function persistThread(nextMessages: ChatMessage[]) {
    if (nextMessages.length === 0) return;
    const stored: StoredChatMessage[] = nextMessages.map((m) => ({
      id: m.id,
      role: m.role,
      text: historyText(m),
      meta: m.meta,
      createdAt: Date.now(),
    }));
    const firstUser = nextMessages.find((m) => m.role === "user");
    const thread: AiChatThread = {
      id: threadId,
      title: titleFromFirstMessage(firstUser?.text || "New chat"),
      category,
      task: category === "ap" ? apTask : category === "english" ? englishTask : codingTask,
      subject: category === "ap" ? subject : undefined,
      messages: stored,
      updatedAt: Date.now(),
      createdAt: Date.now(),
    };
    const existing = await getAiThread(threadId);
    if (existing) thread.createdAt = existing.createdAt;
    await saveAiThread(thread);
    await refreshThreads();
  }

  function stopGeneration() {
    abortRef.current?.abort();
    abortRef.current = null;
    if (localAI.usesLocal) localAI.interruptGeneration();
    setLoading(false);
  }

  function clearDialogue() {
    setMessages([]);
    setError("");
    setInput("");
    setCode("");
    setNotes("");
    setRunResult("");
    setPracticeQueue([]);
    setPracticeIndex(0);
    setThreadId(newThreadId());
    stickToBottomRef.current = true;
    setShowJumpLatest(false);
  }

  async function loadThread(id: string) {
    const thread = await getAiThread(id);
    if (!thread) return;
    setThreadId(thread.id);
    setCategory(thread.category);
    if (thread.category === "ap") {
      if (AP_TASKS.some((t) => t.value === thread.task)) setApTask(thread.task as ApTask);
      if (thread.subject) setSubject(thread.subject);
    } else if (thread.category === "english") {
      const migrated = migrateEnglishTask(thread.task);
      if (migrated) setEnglishTask(migrated);
    } else if (CODING_TASKS.some((t) => t.value === thread.task)) {
      setCodingTask(thread.task as CodingTask);
    }
    setMessages(
      thread.messages.map((m) => ({
        id: m.id,
        role: m.role,
        text: m.text,
        meta: m.meta,
      }))
    );
    setShowThreads(false);
    stickToBottomRef.current = true;
  }

  async function removeThread(id: string) {
    await deleteAiThread(id);
    if (id === threadId) clearDialogue();
    await refreshThreads();
  }

  function exportCurrentThread() {
    const firstUser = messages.find((m) => m.role === "user");
    const thread: AiChatThread = {
      id: threadId,
      title: titleFromFirstMessage(firstUser?.text || "Chat export"),
      category,
      task: category === "ap" ? apTask : category === "english" ? englishTask : codingTask,
      subject: category === "ap" ? subject : undefined,
      messages: messages.map((m) => ({
        id: m.id,
        role: m.role,
        text: historyText(m),
        meta: m.meta,
        createdAt: Date.now(),
      })),
      updatedAt: Date.now(),
      createdAt: Date.now(),
    };
    const md = exportThreadMarkdown(thread);
    const blob = new Blob([md], { type: "text/markdown;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${thread.title.replace(/[^\w.-]+/g, "_").slice(0, 40) || "chat"}.md`;
    a.click();
    URL.revokeObjectURL(url);
  }

  function applyPracticeQueueFromText(text: string) {
    const items = parsePracticeItems(text);
    if (items.length) {
      setPracticeQueue(items);
      setPracticeIndex(0);
    }
  }

  function loadPracticeItemIntoInput(asHint: boolean) {
    const item = practiceQueue[practiceIndex];
    if (!item) return;
    if (asHint) {
      setCategory("ap");
      setApTask("advice");
      setInput(item);
      setNotes((prev) => prev || "My attempt so far:\n");
    } else {
      setInput(item);
    }
  }

  function applySpecialFeature(feature: SpecialFeature) {
    if (feature.category !== category) setCategory(feature.category);
    if (feature.category === "ap" && feature.apTask) setApTask(feature.apTask as ApTask);
    if (feature.category === "english" && feature.englishTask) {
      setEnglishTask(feature.englishTask as EnglishTask);
    }
    if (feature.category === "coding" && feature.codingTask) {
      setCodingTask(feature.codingTask as CodingTask);
      if (feature.codingTask === "csa-frq") setLanguage("Java");
    }
    setInput(feature.prompt);
    if (feature.notes !== undefined) setNotes(feature.notes);
    if (feature.code !== undefined) setCode(feature.code);
    stickToBottomRef.current = true;
  }

  async function copyShareLink() {
    const prompt = input.trim();
    if (!prompt) {
      setShareNote("Type or apply a special feature first.");
      return;
    }
    const href = toolboxHref({
      category,
      apTask: category === "ap" ? apTask : undefined,
      englishTask: category === "english" ? englishTask : undefined,
      codingTask: category === "coding" ? codingTask : undefined,
      subject: category === "ap" ? subject : undefined,
      promptEncoded: encodeSpecialPrompt(prompt),
    });
    const absolute =
      typeof window !== "undefined" ? `${window.location.origin}${href}` : href;
    try {
      await navigator.clipboard.writeText(absolute);
      setShareNote("Share link copied.");
    } catch {
      setShareNote(absolute);
    }
    window.setTimeout(() => setShareNote(""), 3200);
  }

  async function ensureLocalReady() {
    if (!localAI.usesLocal) return;
    if (!localAI.ready) {
      throw new Error(
        "Local is selected, but no model is enabled. Enable Local above, or switch to Website API / Your own API."
      );
    }
  }

  async function runLocal(
    system: string,
    user: string,
    history: ChatMessage[],
    onToken?: (token: string, fullText: string) => void,
    completeOptions?: {
      nudge?: string;
      retryNudge?: string;
      sitePrefer?: "formulas" | "language" | "code" | "nav";
    }
  ) {
    await ensureLocalReady();
    // Search the latest question only — history pollutes keyword retrieval.
    // Soft deadline: never hold Local first-token on a slow site-search round-trip.
    // Prefetch + client cache usually make this instant.
    const sitePrefer = completeOptions?.sitePrefer || "formulas";
    const { context, note, hitCount, hits } = await fetchAiSiteContext(
      user,
      true,
      {
        limit: AI_SITE_SEARCH_LIMIT_LOCAL,
        deadlineMs: AI_SITE_SEARCH_LOCAL_DEADLINE_MS,
        prefer: sitePrefer,
      }
    );
    setSiteHits(hits);
    setSiteSearchNote(
      note || (hitCount ? `Using ${hitCount} Knowledge Explorer hit(s).` : "No site matches.")
    );
    const siteHint =
      sitePrefer === "language"
        ? "When Knowledge Explorer site materials are appended below, prefer useful English language snippets (vocab, phrases, example sentences) and cite the hit titles. Ignore AP science / formula hits. Follow the same English teaching rules as the cloud tutor."
        : sitePrefer === "code"
          ? "When Knowledge Explorer site materials are appended below, prefer coding playgrounds, snippets, and programming docs. Cite hit titles. Ignore off-topic AP formula sheets. Follow the coding teaching rules."
          : sitePrefer === "nav"
            ? "When Knowledge Explorer site materials are appended below, prefer site navigation / guide / how-to pages. Cite hit titles. Ignore AP formula sheets unless the student asks about study content. Help them use Knowledge Explorer."
            : "When Knowledge Explorer site materials are appended below, prefer their formulas/definitions and cite the hit titles. Ignore off-topic hits. Follow the same teaching rules as the cloud teacher for this tool.";
    // AP/science Local: compact accuracy protocol + short formula pack (keep ~4k context free).
    const groundedSystem =
      sitePrefer === "formulas"
        ? withFormulaAccuracy(system, subject, { compact: true, maxPackItems: 4 })
        : system;
    const chatMessages: Array<{ role: "system" | "user" | "assistant"; content: string }> = [
      {
        role: "system",
        content: `${groundedSystem}\n\n${siteHint}`,
      },
    ];
    // Keep Local prompts lean — WebLLM context is ~4096 tokens; fat history/site
    // context is the main reason answers stop mid-sentence (finish_reason=length).
    const mode = budgetModeRef.current;
    const historyWindow = localHistoryWindow(mode);
    const turnCap = localTurnCap(mode);
    const siteCap = localSiteCap(mode);
    const userCap = localUserCap(mode);
    for (const message of history.slice(-historyWindow)) {
      chatMessages.push({
        role: message.role === "user" ? "user" : "assistant",
        content: historyText(message).slice(0, turnCap),
      });
    }
    const leanSiteContext =
      context.length > siteCap
        ? `${context.slice(0, Math.max(0, siteCap - 80))}\n\n[Site materials trimmed so Local AI has room to finish the answer.]`
        : context;
    chatMessages.push({
      role: "user",
      content: appendAiSiteContext(user, leanSiteContext).slice(0, userCap),
    });
    const { sitePrefer: _ignore, ...nudgeOpts } = completeOptions || {};
    return localAI.complete(chatMessages, onToken, nudgeOpts);
  }

  async function askOnce(
    userText: string,
    history: ChatMessage[],
    codePaste: string,
    onToken?: (token: string, fullText: string) => void,
    signal?: AbortSignal
  ): Promise<ChatMessage> {
    const historyPrefix = buildHistoryBlock(history);
    const stampedUser = `${historyPrefix}Latest student message:\n${userText}`;

    if (localAI.mode === "byok" && !localAI.usesLocal && !localAI.userKey.trim()) {
      throw new Error("Paste your own API key, or choose Website API / Local.");
    }

    if (category === "ap" && apTask === "advice") {
      if (localAI.usesLocal) {
        const text = await runLocal(
          HINT_PROCESS_LOCAL,
          `Subject: ${subject}\nQuestion:\n${userText}${
            notes.trim() ? `\n\nStudent notes / attempt:\n${notes.trim()}` : ""
          }`,
          history,
          onToken
        );
        return finalizeLocalApMessage(text, {
          meta: "Hints & process · Local",
          aiMayBeWrong: "Local AI may be wrong — verify with your notes.",
        });
      }
      const { ok, data } = await fetchCloudAiWithAbort(
        "/api/hints",
        {
          subject,
          question: stampedUser,
          notes: notes.trim(),
          ...localAI.cloudRequestFields,
        },
        (display) => {
          if (onToken && display) onToken("", display);
        },
        signal
      );
      if (!ok) throw new Error(String(data.error || "Hint request failed"));
      const formulaBlock = mergeFormulaLists([], data.equations);
      const hintLift = scrubListDollars((data.hints as string[]) || []);
      const knownLift = scrubListDollars((data.knownsUnknowns as string[]) || []);
      const checkLift = scrubListDollars((data.checkpoints as string[]) || []);
      const processLift = scrubListDollars((data.processOutline as string[]) || []);
      const partialLift = scrubListDollars((data.workedPartial as string[]) || []);
      // Do not merge scrubbed keyFormulas into cards — those are often English prose.
      const lists = [
        { label: "Hints", items: hintLift.items },
        { label: "Knowns / unknowns", items: knownLift.items },
        { label: "Checkpoints", items: checkLift.items },
        { label: "Process outline", items: processLift.items },
        { label: "Worked partial", items: partialLift.items },
      ];
      const lifted = [
        ...formulaBlock.equations,
        ...hintLift.equations,
        ...knownLift.equations,
        ...checkLift.equations,
        ...processLift.equations,
        ...partialLift.equations,
      ];
      const equations = finalizeAiAssistantMath("", lifted).equations;
      const text = formatAssistantText({ lists });
      return {
        id: `a-${Date.now()}`,
        role: "assistant",
        text,
        meta: String(data.note || "Hints & process"),
        lists,
        equations: equations.length ? equations : undefined,
        aiMayBeWrong: data.aiMayBeWrong as string | undefined,
      };
    }

    if (category === "ap" && apTask === "guide") {
      if (localAI.usesLocal) {
        const text = await runLocal(
          SITE_GUIDE_LOCAL,
          userText,
          history,
          onToken,
          { sitePrefer: "nav", nudge: LOCAL_GUIDE_NUDGE }
        );
        return finalizeLocalApMessage(text, {
          meta: "Site guide · Local",
        });
      }
      const { ok, data } = await fetchCloudAiWithAbort(
        "/api/ai/guide",
        { question: stampedUser, ...localAI.cloudRequestFields },
        (display) => {
          if (onToken && display) onToken("", display);
        },
        signal
      );
      if (!ok) throw new Error(String(data.error || "Guide failed"));
      const text = String(data.reply || "");
      return {
        id: `a-${Date.now()}`,
        role: "assistant",
        text,
        meta: String(data.note || "Site guide"),
        refused: Boolean(data.refused),
        aiMayBeWrong: data.aiMayBeWrong as string | undefined,
      };
    }

    if (category === "ap") {
      const mode =
        apTask === "formula-derive"
          ? "formula-derive"
          : apTask === "generate-questions"
            ? "generate-questions"
            : apTask === "concept-extension"
              ? "concept-extension"
              : apTask === "concept"
                ? "explain"
                : "ask";
      if (localAI.usesLocal) {
        const text = await runLocal(
          conceptExplainLocal(mode),
          `Subject: ${subject}\nMode: ${mode}\nInput:\n${userText}`,
          history,
          onToken
        );
        return finalizeLocalApMessage(text, {
          meta: `${taskMeta.label} · Local`,
          saveAsPractice: apTask === "generate-questions",
        });
      }
      const { ok, data } = await fetchCloudAiWithAbort(
        "/api/ai/concept",
        {
          subject,
          conceptTitle:
            apTask === "concept" || apTask === "concept-extension"
              ? userText.slice(0, 120)
              : "",
          mode,
          question: stampedUser,
          ...localAI.cloudRequestFields,
        },
        (display) => {
          if (onToken && display) onToken("", display);
        },
        signal
      );
      if (!ok) throw new Error(String(data.error || "AP AI failed"));
      const body = [data.reply, data.quizPrompt ? `\n\n**Try this:** ${data.quizPrompt}` : ""]
        .filter(Boolean)
        .join("");
      const finalized = finalizeAiAssistantMath(
        String(body),
        data.equations as AiEquation[] | undefined,
        data.formulas as string[] | undefined
      );
      return {
        id: `a-${Date.now()}`,
        role: "assistant",
        text: finalized.prose,
        meta: String(data.note || taskMeta.label),
        equations: finalized.equations.length ? finalized.equations : undefined,
        refused: Boolean(data.refused),
        aiMayBeWrong: data.aiMayBeWrong as string | undefined,
        saveAsPractice: apTask === "generate-questions",
      };
    }

    if (category === "english") {
      const mode = englishTask;
      // Keep student text + history only here — /api/ai/english adds mode/target controls.
      // Local still gets a light mode label so the model knows which English tool is active.
      const englishUserLocal = `Mode: ${mode}\nExam/track target: ${englishTarget}\nStudent input:\n${userText}`;
      const englishUserCloud = `${historyPrefix}Latest student message:\n${userText}`;
      const wantLocal = localAI.usesLocal && localAI.ready;
      if (localAI.usesLocal && !localAI.ready) {
        // Local is selected but not enabled — do not hard-fail English; use Website API this turn.
        setSiteSearchNote(
          "Local is selected but not enabled yet — using Website API for this reply. Click Enable Local above to run on-device."
        );
      }
      if (wantLocal) {
        const modelId = localAI.selectedModelId || "";
        const text = await runLocal(
          englishTutorLocal(mode),
          englishUserLocal,
          history,
          onToken,
          {
            nudge: localNudgeForEnglish(modelId),
            retryNudge: `${localNudgeForEnglish(modelId)}\n\n${LOCAL_ENGLISH_RETRY_NUDGE}`,
            sitePrefer: "language",
          }
        );
        return {
          id: `a-${Date.now()}`,
          role: "assistant",
          text,
          meta: `${taskMeta.label} · Local`,
          aiMayBeWrong: "Local AI language advice may be wrong — verify important points.",
        };
      }
      const { ok, data } = await fetchCloudAiWithAbort(
        "/api/ai/english",
        {
          mode,
          target: englishTarget,
          input: englishUserCloud,
          ...localAI.cloudRequestFields,
        },
        (display) => {
          if (onToken && display) onToken("", display);
        },
        signal
      );
      if (!ok) throw new Error(String(data.error || "English AI failed"));
      const cloudMeta =
        String(data.note || "") ||
        (localAI.usesLocal && !localAI.ready
          ? `${taskMeta.label} · Website API (Local not enabled)`
          : taskMeta.label);
      if (mode === "translator") {
        const rawFeedback = String(data.feedback || data.raw || "").trim();
        let translation = String(data.revisionExample || "").trim();
        let direction = rawFeedback;
        // Recover when the model returned markdown / put the translation in feedback.
        if (!translation) {
          const fromHeading = rawFeedback.match(
            /##\s*Translation\s*\n+([\s\S]*?)(?=\n##\s|\n*$)/i
          );
          if (fromHeading?.[1]?.trim()) {
            translation = fromHeading[1].trim();
            const dirHeading = rawFeedback.match(/##\s*Direction\s*\n+([^\n#]+)/i);
            direction = dirHeading?.[1]?.trim() || "Translation";
          } else if (rawFeedback.length > 80 || /[\u4e00-\u9fff]/.test(rawFeedback)) {
            // Long feedback (or CJK) is probably the translation itself.
            translation = rawFeedback;
            direction = "Translation";
          }
        }
        const directionLine =
          direction && direction.length < 120 && !direction.includes("\n")
            ? `**${direction.replace(/\*\*/g, "").trim()}**`
            : "**Translation**";
        const body = [directionLine, translation || "(No translation returned.)"].join("\n\n");
        const cleanBody = normalizeAiDialogueText(body);
        return {
          id: `a-${Date.now()}`,
          role: "assistant",
          text: cleanBody,
          meta: cloudMeta,
          snippet: translation,
          refused: Boolean(data.refused),
          aiMayBeWrong: data.aiMayBeWrong as string | undefined,
        };
      }
      const lists = [
        { label: "Strengths", items: (data.strengths as string[]) || [] },
        { label: "Priorities", items: (data.priorities as string[]) || [] },
      ];
      const feedbackBody = String(data.feedback || data.raw || "").trim();
      const snippet = [data.revisionExample, data.practicePrompt].filter(Boolean).join("\n\n");
      const text = formatEnglishAssistantText({
        body: feedbackBody,
        lists,
        snippet: data.revisionExample
          ? `**Revised example**\n${data.revisionExample}${
              data.practicePrompt ? `\n\n**Next practice**\n${data.practicePrompt}` : ""
            }`
          : data.practicePrompt
            ? `**Next practice**\n${data.practicePrompt}`
            : "",
      });
      return {
        id: `a-${Date.now()}`,
        role: "assistant",
        text,
        meta: cloudMeta,
        lists,
        snippet,
        refused: Boolean(data.refused),
        aiMayBeWrong: data.aiMayBeWrong as string | undefined,
      };
    }

    const taskText =
      codingTask === "explain"
        ? `Explain this code clearly.\n${userText}`
        : codingTask === "write"
          ? `Write / help implement:\n${userText}`
          : codingTask === "csa-frq"
            ? `AP CSA FRQ coaching (Java process, stubs, traces):\n${userText}`
            : `Debug / find bugs:\n${userText}`;
    const runBlock = runResult.trim()
      ? `\nPlayground / run result to interpret:\n${runResult.trim()}`
      : "";
    const wantLocalCoding = localAI.usesLocal && localAI.ready;
    if (localAI.usesLocal && !localAI.ready) {
      setSiteSearchNote(
        "Local is selected but not enabled yet — using Website API for this coding reply. Click Enable Local above to run on-device."
      );
    }
    if (wantLocalCoding) {
      const modelId = localAI.selectedModelId || "";
      const text = await runLocal(
        codingAiLocal(codingTask),
        `Language: ${language}\nFocus: ${codingTask}\nTask: ${taskText}\nCode:\n${codePaste || "(none)"}${runBlock}`,
        history,
        onToken,
        {
          nudge: localNudgeForCoding(modelId),
          retryNudge: `${localNudgeForCoding(modelId)}\n\n${LOCAL_CODING_RETRY_NUDGE}`,
          sitePrefer: "code",
        }
      );
      return {
        id: `a-${Date.now()}`,
        role: "assistant",
        text,
        meta: `${taskMeta.label} · Local`,
        aiMayBeWrong: "Local AI coding advice may be wrong — test and verify.",
      };
    }
    const { ok, data } = await fetchCloudAiWithAbort(
      "/api/ai/coding",
      {
        language,
        focus: codingTask,
        task: `${historyPrefix}Latest student message:\n${taskText}${runBlock}`,
        code: codePaste,
        ...localAI.cloudRequestFields,
      },
      (display) => {
        if (onToken && display) onToken("", display);
      },
      signal
    );
    if (!ok) throw new Error(String(data.error || "Coding AI failed"));
    const lists = [{ label: "Steps", items: (data.steps as string[]) || [] }];
    const cloudMeta =
      String(data.note || "") ||
      (localAI.usesLocal && !localAI.ready
        ? `${taskMeta.label} · Website API (Local not enabled)`
        : taskMeta.label);
    const text = formatAssistantText({
      body: String(data.reply || data.raw || ""),
      lists,
      snippet: String(data.snippet || ""),
      snippetAsCode: true,
    });
    return {
      id: `a-${Date.now()}`,
      role: "assistant",
      text,
      meta: cloudMeta,
      lists,
      snippet: String(data.snippet || ""),
      refused: Boolean(data.refused),
      aiMayBeWrong: data.aiMayBeWrong as string | undefined,
    };
  }

  async function submit(event: React.FormEvent) {
    event.preventDefault();
    const userText = input.trim();
    if (!userText && !(category === "coding" && code.trim())) {
      setError(
        category === "coding"
          ? "Describe the coding task and/or paste code."
          : category === "english" && englishTask === "practice-generator"
            ? "Paste a topic first — any text. We copy it and generate a new topic from it."
            : category === "english" && englishTask === "translator"
              ? "Paste text to translate."
              : category === "english" && englishTask === "speaking-practice"
                ? "Dictate or paste your spoken English transcript first."
                : category === "english"
                  ? "Enter English text or a learning question."
                  : "Type a question or paste content first."
      );
      return;
    }
    if (category === "english" && userText.length > ENGLISH_INPUT_MAX) {
      setError(`Input is too long (maximum ${ENGLISH_INPUT_MAX.toLocaleString()} characters).`);
      return;
    }

    const displayUser = [
      userText,
      category === "coding" && code.trim() ? `\n\n\`\`\`\n${code.trim()}\n\`\`\`` : "",
      category === "ap" && apTask === "advice" && notes.trim()
        ? `\n\n_My attempt / notes:_\n${notes.trim()}`
        : "",
    ]
      .filter(Boolean)
      .join("");

    const userMessage: ChatMessage = {
      id: `u-${Date.now()}`,
      role: "user",
      text: displayUser || code.trim(),
      meta: `${taskMeta.label}${messages.length ? " · follow-up" : ""}`,
    };

    const historyBefore = messages;
    stickToBottomRef.current = true;
    setShowJumpLatest(false);
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);
    setError("");

    const draftId = `a-${Date.now()}`;
    const streamLocal = localAI.usesLocal && localAI.ready;
    const controller = new AbortController();
    abortRef.current = controller;

    setMessages((prev) => [
      ...prev,
      {
        id: draftId,
        role: "assistant",
        text: "",
        meta: streamLocal
          ? `${taskMeta.label} · Local · starting…`
          : `${taskMeta.label} · searching site & preparing…`,
      },
    ]);

    try {
      const assistant = await askOnce(
        userText || "(see code)",
        historyBefore,
        code,
        (_token, fullText) => {
          const live =
            category === "ap"
              ? extractDollarMathToEquations(fullText)
              : { prose: fullText, equations: [] as AiEquation[] };
          flushSync(() => {
            setMessages((prev) =>
              prev.map((message) =>
                message.id === draftId
                  ? {
                      ...message,
                      text: live.prose,
                      equations: live.equations.length ? live.equations : undefined,
                      meta: streamLocal
                        ? `${taskMeta.label} · Local · speaking…`
                        : `${taskMeta.label} · writing…`,
                    }
                  : message
              )
            );
          });
        },
        controller.signal
      );
      const merged: ChatMessage = {
        ...assistant,
        id: draftId,
        text: assistant.text,
      };
      setMessages((prev) =>
        prev.map((message) => (message.id === draftId ? merged : message))
      );
      if (assistant.saveAsPractice) applyPracticeQueueFromText(assistant.text);
      await persistThread([...historyBefore, userMessage, merged]);
      if (category === "coding") {
        setCode("");
        setRunResult("");
      }
    } catch (err) {
      if (err instanceof DOMException && err.name === "AbortError") {
        setError("Stopped.");
      } else {
        setError(err instanceof Error ? err.message : "AI request failed");
      }
      setMessages((prev) =>
        prev.filter((message) => message.id !== draftId || message.text.trim())
      );
      // Keep the user message so they can retry / edit the follow-up.
    } finally {
      abortRef.current = null;
      setLoading(false);
    }
  }

  return (
    <section id="unified-ai-chat" className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-200 bg-slate-50 px-4 py-3 md:px-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
          Unified AI
        </p>
        <h2 className="mt-1 text-xl font-bold text-slate-900">
          One panel · dialogue history · keep asking
        </h2>
        <p className="mt-1 text-sm text-slate-600">
          Choose Local / Website API / Your own API, pick a task, then chat in the dialogue box.
          Follow-up questions stay in the same conversation.{" "}
          <strong>Always search Knowledge Explorer</strong> is on — AI teaches from site materials.
          Path and model sit in <strong>AI settings</strong> (collapsed by default so the dialogue stays
          first).
        </p>
        {siteSearchNote ? (
          <div className="mt-2 space-y-1">
            <p className="text-xs font-medium text-emerald-800">{siteSearchNote}</p>
            {siteHits.length > 0 ? (
              <ul className="flex flex-wrap gap-2">
                {siteHits.slice(0, 6).map((hit) => (
                  <li key={hit.href}>
                    <a
                      href={hit.href}
                      className="rounded-md border border-emerald-200 bg-emerald-50/80 px-2 py-0.5 text-[10px] font-medium text-emerald-900 hover:underline"
                    >
                      {hit.title}
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        ) : null}
      </div>

      <div className="space-y-5 p-4 md:p-5">
        <LocalAIControls embedded />
        <AiToolboxRelatedStrip />
        {category === "ap" ? <OfficialResourceLinks block={AP_PROGRAM_OFFICIAL} tone="slate" /> : null}
        {category === "english" ? (
          <div className="grid gap-3 lg:grid-cols-2">
            <OfficialResourceLinks block={SAT_HUB_OFFICIAL} tone="slate" />
            <OfficialResourceLinks block={TOEFL_HUB_OFFICIAL} tone="slate" />
          </div>
        ) : null}
        {category === "coding" ? <OfficialResourceLinks block={CODE_HUB_OFFICIAL} tone="slate" /> : null}
        <AiSpecialFeatures
          category={category}
          apTask={apTask}
          englishTask={englishTask}
          codingTask={codingTask}
          subject={subject}
          guidePrompts={guidePrompts}
          currentPrompt={input}
          currentNotes={notes}
          currentCode={code}
          onApply={applySpecialFeature}
        />

        <div className="grid gap-2 sm:grid-cols-3" role="tablist" aria-label="AI category">
          {(
            [
              { id: "ap", label: "AP / Learning", detail: "Hints, concepts, extensions, formulas, practice" },
              { id: "english", label: "English", detail: "Grammar, translate, speaking, practice" },
              { id: "coding", label: "Coding", detail: "Debug, write, explain, CSA FRQ" },
            ] as const
          ).map((item) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={category === item.id}
              aria-pressed={category === item.id}
              onClick={() => {
                setCategory(item.id);
                setError("");
                // Keep dialogue — switch lanes without wiping the thread.
              }}
              className={`rounded-xl border px-3 py-3 text-left transition ${
                category === item.id
                  ? "border-brand-400 bg-brand-50 shadow-sm"
                  : "border-slate-200 bg-white hover:border-slate-300"
              }`}
            >
              <p className="text-sm font-semibold text-slate-900">{item.label}</p>
              <p className="mt-0.5 text-xs text-slate-500">{item.detail}</p>
            </button>
          ))}
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          <label className="block text-sm font-medium text-slate-700" htmlFor="ai-toolbox-task">
            {category === "ap"
              ? "AP task"
              : category === "english"
                ? "English task"
                : "Coding task"}
            <select
              id="ai-toolbox-task"
              className="input mt-1"
              aria-label={
                category === "ap"
                  ? "Choose an AP AI task"
                  : category === "english"
                    ? "Choose an English AI task"
                    : "Choose a coding AI task"
              }
              value={
                category === "ap" ? apTask : category === "english" ? englishTask : codingTask
              }
              onChange={(e) => {
                const value = e.target.value;
                if (category === "ap") setApTask(value as ApTask);
                else if (category === "english") setEnglishTask(value as EnglishTask);
                else {
                  setCodingTask(value as CodingTask);
                  if (value === "csa-frq") setLanguage("Java");
                }
              }}
            >
              {(category === "ap"
                ? AP_TASKS
                : category === "english"
                  ? ENGLISH_TASKS
                  : CODING_TASKS
              ).map((task) => (
                <option key={task.value} value={task.value}>
                  {task.label}
                </option>
              ))}
            </select>
            <span className="mt-1 block text-xs font-normal text-slate-500">{taskMeta.hint}</span>
          </label>

          {category === "ap" ? (
            <label className="block text-sm font-medium text-slate-700" htmlFor="ai-toolbox-subject">
              AP subject
              <select
                id="ai-toolbox-subject"
                className="input mt-1"
                aria-label="Choose an AP subject for context"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              >
                {SUBJECT_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
          ) : null}

          {category === "english" ? (
            <label className="block text-sm font-medium text-slate-700" htmlFor="ai-toolbox-english-target">
              Exam / track
              <select
                id="ai-toolbox-english-target"
                className="input mt-1"
                aria-label="Choose an English exam or study track"
                aria-describedby="ai-toolbox-english-target-hint"
                value={englishTarget}
                onChange={(e) => setEnglishTarget(e.target.value)}
              >
                {[
                  "General academic English",
                  "TOEFL",
                  "SAT Reading & Writing",
                  "Writing revision",
                ].map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <span id="ai-toolbox-english-target-hint" className="mt-1 block text-xs font-normal text-slate-500">
                Shapes tone and feedback style for TOEFL, SAT, or general academic English.
              </span>
            </label>
          ) : null}

          {category === "coding" ? (
            <label className="block text-sm font-medium text-slate-700" htmlFor="ai-toolbox-language">
              Language
              <select
                id="ai-toolbox-language"
                className="input mt-1"
                aria-label="Choose a programming language"
                aria-describedby="ai-toolbox-language-hint"
                value={language}
                onChange={(e) => setLanguage(e.target.value as (typeof LANGUAGES)[number])}
              >
                {LANGUAGES.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <span id="ai-toolbox-language-hint" className="mt-1 block text-xs font-normal text-slate-500">
                Open the{" "}
                <Link
                  href={
                    language === "Java"
                      ? "/code/editor?lang=java"
                      : language.startsWith("HTML")
                        ? "/code/editor?lang=web"
                        : "/code/editor?lang=python"
                  }
                  className="text-brand-700 hover:underline"
                >
                  Code editor
                </Link>{" "}
                and pick the language there.
              </span>
            </label>
          ) : null}
        </div>

        <div className="flex flex-wrap items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Context</p>
          <div className="min-w-[8rem] flex-1">
            <div className="mb-0.5 flex justify-between text-[10px] text-slate-500">
              <span>
                ~{contextEstimate.used} / {contextEstimate.limit} tokens
              </span>
              <span>{contextEstimate.pct}%</span>
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-slate-200">
              <div
                className={`h-full rounded-full ${
                  contextEstimate.pct > 85
                    ? "bg-amber-500"
                    : contextEstimate.pct > 60
                      ? "bg-brand-500"
                      : "bg-emerald-500"
                }`}
                style={{ width: `${contextEstimate.pct}%` }}
              />
            </div>
          </div>
          <div className="flex gap-1">
            <button
              type="button"
              aria-pressed={budgetMode === "speed"}
              className={`rounded-lg px-2.5 py-1 text-xs font-medium ${
                budgetMode === "speed"
                  ? "bg-brand-600 text-white"
                  : "border border-slate-200 bg-white text-slate-700"
              }`}
              onClick={() => setBudgetMode("speed")}
              title="Shorter history — faster Local replies"
            >
              Speed
            </button>
            <button
              type="button"
              aria-pressed={budgetMode === "complete"}
              className={`rounded-lg px-2.5 py-1 text-xs font-medium ${
                budgetMode === "complete"
                  ? "bg-brand-600 text-white"
                  : "border border-slate-200 bg-white text-slate-700"
              }`}
              onClick={() => setBudgetMode("complete")}
              title="Keep more dialogue context"
            >
              Complete
            </button>
          </div>
        </div>

        {practiceQueue.length > 0 ? (
          <div className="rounded-xl border border-brand-200 bg-brand-50/60 px-3 py-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-brand-800">
              Practice queue · {practiceIndex + 1} / {practiceQueue.length}
            </p>
            <p className="mt-1 max-h-24 overflow-y-auto whitespace-pre-wrap text-sm text-slate-800">
              {practiceQueue[practiceIndex]}
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              <button
                type="button"
                className="btn-secondary text-xs"
                onClick={() => loadPracticeItemIntoInput(false)}
              >
                Load into input
              </button>
              <button
                type="button"
                className="btn-secondary text-xs"
                onClick={() => loadPracticeItemIntoInput(true)}
              >
                Ask hint on this
              </button>
              <button
                type="button"
                className="btn-secondary text-xs"
                disabled={practiceIndex >= practiceQueue.length - 1}
                onClick={() => setPracticeIndex((i) => Math.min(practiceQueue.length - 1, i + 1))}
              >
                Next item
              </button>
              <button
                type="button"
                className="text-xs font-medium text-slate-500 hover:underline"
                onClick={() => {
                  setPracticeQueue([]);
                  setPracticeIndex(0);
                }}
              >
                Clear queue
              </button>
            </div>
          </div>
        ) : null}

        <div className="overflow-hidden rounded-xl border border-slate-200">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 bg-slate-50 px-3 py-2">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Dialogue history
            </p>
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => setShowThreads((v) => !v)}
                className="text-xs font-medium text-brand-700 hover:underline"
              >
                {showThreads ? "Hide chats" : `Saved chats (${threads.length})`}
              </button>
              {messages.length > 0 ? (
                <button
                  type="button"
                  onClick={exportCurrentThread}
                  className="text-xs font-medium text-slate-600 hover:underline"
                >
                  Export
                </button>
              ) : null}
              <button
                type="button"
                onClick={clearDialogue}
                className="text-xs font-medium text-brand-700 hover:underline"
                disabled={loading || messages.length === 0}
              >
                New chat
              </button>
            </div>
          </div>

          {showThreads ? (
            <div className="max-h-40 space-y-1 overflow-y-auto border-b border-slate-200 bg-white px-3 py-2">
              {threads.length === 0 ? (
                <p className="text-xs text-slate-500">No saved chats yet in this browser.</p>
              ) : (
                threads.slice(0, 24).map((thread) => (
                  <div key={thread.id} className="flex items-center gap-2 text-xs">
                    <button
                      type="button"
                      className="min-w-0 flex-1 truncate text-left font-medium text-slate-700 hover:text-brand-800"
                      onClick={() => void loadThread(thread.id)}
                    >
                      {thread.title}
                      <span className="ml-1 font-normal text-slate-400">
                        · {thread.category} · {new Date(thread.updatedAt).toLocaleDateString()}
                      </span>
                    </button>
                    <button
                      type="button"
                      className="shrink-0 text-slate-400 hover:text-red-600"
                      onClick={() => void removeThread(thread.id)}
                    >
                      Delete
                    </button>
                  </div>
                ))
              )}
            </div>
          ) : null}

          <div className="relative">
            <div
              ref={chatRef}
              role="log"
              aria-live="polite"
              aria-relevant="additions"
              aria-label="AI dialogue"
              aria-busy={loading}
              className="flex max-h-[min(28rem,55vh)] min-h-[12rem] flex-col gap-3 overflow-y-auto overscroll-contain bg-white p-3 md:max-h-[28rem] md:min-h-[14rem]"
            >
              {messages.length === 0 ? (
                <p className="m-auto max-w-md text-center text-sm text-slate-500">
                  Pick a <strong>特殊功能</strong> above, or type below. After the first reply, keep
                  asking follow-ups in the same dialogue box.
                </p>
              ) : (
                messages.map((message, index) => {
                  const isStreamingReply =
                    loading &&
                    message.role === "assistant" &&
                    index === messages.length - 1;
                  return (
                <div
                  key={message.id}
                  className={`max-w-[95%] min-w-0 break-words rounded-2xl px-3 py-2.5 text-sm ${
                    message.role === "user"
                      ? "ml-auto bg-brand-600 text-white"
                      : "mr-auto border border-slate-200 bg-slate-50 text-slate-800"
                  }`}
                >
                  {message.meta ? (
                    <p
                      className={`mb-1 text-[10px] font-semibold uppercase tracking-wide ${
                        message.role === "user" ? "text-brand-100" : "text-slate-400"
                      }`}
                    >
                      {message.meta}
                      {message.refused ? " · refused" : ""}
                    </p>
                  ) : null}
                  {message.role === "user" ? (
                    <p className="whitespace-pre-wrap break-words">{message.text}</p>
                  ) : (
                    <div className="space-y-3">
                      {message.equations?.length ? (
                        <AiEquationCards equations={message.equations} />
                      ) : null}
                      <RichContent
                        className="min-w-0 text-sm"
                        streaming={isStreamingReply}
                        aiDialogue
                      >
                        {message.text}
                      </RichContent>
                    </div>
                  )}
                  {message.role === "assistant" && message.aiMayBeWrong ? (
                    <p className="mt-2 text-[11px] text-amber-800">{message.aiMayBeWrong}</p>
                  ) : null}
                  {message.role === "assistant" && message.saveAsPractice ? (
                    <SaveGeneratedPractice
                      practiceText={message.text}
                      defaultSubject={subject}
                      suggestedTitle={`${subject} practice · ${new Date().toISOString().slice(0, 10)}`}
                    />
                  ) : null}
                  {message.role === "assistant" &&
                  category === "english" &&
                  englishTask === "speaking-practice" &&
                  message.text.trim() ? (
                    <button
                      type="button"
                      className="mt-2 text-xs font-medium text-brand-700 hover:underline"
                      onClick={() => {
                        if (!speakEnglish(message.text.slice(0, 1200), { rate: 0.92 })) {
                          toastWarning("Speech synthesis unavailable in this browser.");
                        }
                      }}
                    >
                      Listen (TTS read-aloud)
                    </button>
                  ) : null}
                  {message.role === "assistant" && category === "coding" && message.snippet ? (
                    <Link
                      href={language === "Java" ? "/code/java" : "/code"}
                      className="mt-2 inline-block text-xs font-medium text-brand-700 hover:underline"
                    >
                      Open Code playground →
                    </Link>
                  ) : null}
                </div>
                  );
                })
              )}
              {loading ? (
                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                  <p>
                    {localAI.usesLocal && localAI.status === "generating"
                      ? localAI.statusText || "Writing answer…"
                      : "Working…"}
                  </p>
                  <button
                    type="button"
                    className="rounded-md border border-slate-300 px-2 py-0.5 text-[11px] font-medium text-slate-700 hover:bg-white"
                    onClick={stopGeneration}
                  >
                    Stop
                  </button>
                </div>
              ) : null}
            </div>
            {showJumpLatest ? (
              <button
                type="button"
                onClick={jumpToLatest}
                className="absolute bottom-3 left-1/2 z-10 -translate-x-1/2 rounded-full border border-slate-300 bg-white px-3 py-1 text-xs font-medium text-slate-700 shadow-sm hover:bg-slate-50"
              >
                Jump to latest
              </button>
            ) : null}
          </div>

          <form
            onSubmit={(e) => void submit(e)}
            className="space-y-3 border-t border-slate-200 bg-slate-50 p-3"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="text-xs font-medium text-slate-600">Type or paste your question</p>
              <div className="flex flex-wrap items-center gap-2">
                {category === "english" && englishTask === "speaking-practice" ? (
                  <Link
                    href="/tools/speech-to-text"
                    className="text-xs font-medium text-brand-700 hover:underline"
                  >
                    Speech to text tool
                  </Link>
                ) : null}
                <VoiceInputButton
                  disabled={loading}
                  value={input}
                  onChange={setInput}
                />
              </div>
            </div>
            <MarkdownLatexField
              label={messages.length ? "Follow-up question" : "Your question / paste"}
              value={input}
              onChange={setInput}
              minHeightClass="min-h-[7rem]"
              showPreview={false}
              placeholder={
                messages.length
                  ? "Ask a follow-up… e.g. explain that step again / give another example"
                  : category === "coding"
                    ? codingTask === "csa-frq"
                      ? "Paste the FRQ prompt or your partial Java method…"
                      : "Describe the bug, feature, or what to explain…"
                    : category === "english"
                      ? englishTask === "language-materials"
                        ? "Paste a large text to collect useful + extended 语言资料, or a short command/sentence to generate language materials…"
                        : englishTask === "practice-generator"
                          ? "Paste any topic (or anything). We copy it and generate a NEW practice topic from it."
                          : englishTask === "translator"
                            ? "Paste Chinese or English text to translate…"
                            : englishTask === "speaking-practice"
                              ? "Use the mic, or paste a spoken transcript for fluency coaching…"
                              : "Paste a passage, sentence, or writing draft…"
                      : category === "ap" && apTask === "concept-extension"
                        ? "Paste a basic concept or formula — e.g. Ohm’s law, conservation of energy, ideal gas…"
                        : "Paste a problem, formula, concept, or question…"
              }
              help={
                messages.length
                  ? "This continues the same dialogue history."
                  : taskMeta.hint
              }
            />

            {category === "ap" && apTask === "advice" ? (
              <label className="block text-sm font-medium text-slate-700">
                My attempt / notes (optional)
                <textarea
                  className="input mt-1 text-sm"
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="What you tried, where you are stuck, formulas you considered…"
                />
              </label>
            ) : null}

            {category === "coding" ? (
              <>
                <label className="block text-sm font-medium text-slate-700">
                  Code (optional)
                  <textarea
                    className="input mt-1 font-mono text-xs"
                    rows={5}
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    placeholder="Paste code here…"
                  />
                </label>
                <label className="block text-sm font-medium text-slate-700">
                  Playground run result (optional)
                  <textarea
                    className="input mt-1 font-mono text-xs"
                    rows={3}
                    value={runResult}
                    onChange={(e) => setRunResult(e.target.value)}
                    placeholder="Paste output / error from /code after you try the stub…"
                  />
                  <span className="mt-1 block text-xs font-normal text-slate-500">
                    Try snippets in{" "}
                    <Link
                      href={language === "Java" ? "/code/java" : "/code"}
                      className="text-brand-700 hover:underline"
                    >
                      Code playground
                    </Link>
                    , then paste the result here for coaching.
                  </span>
                </label>
              </>
            ) : null}

            {error ? <p className="text-sm text-red-600">{error}</p> : null}
            {shareNote ? <p className="text-xs text-emerald-800">{shareNote}</p> : null}

            <div className="flex flex-wrap gap-2">
              <button type="submit" className="btn-primary" disabled={loading}>
                {loading
                  ? "Working…"
                  : messages.length
                    ? "Ask follow-up"
                    : category === "english" && englishTask === "translator"
                      ? "Translate"
                      : "Ask AI"}
              </button>
              {loading ? (
                <button type="button" className="btn-secondary" onClick={stopGeneration}>
                  Stop
                </button>
              ) : null}
              <button
                type="button"
                className="btn-secondary"
                onClick={() => void copyShareLink()}
                disabled={loading || !input.trim()}
              >
                Copy special-feature link
              </button>
              {messages.length > 0 ? (
                <button
                  type="button"
                  className="btn-secondary"
                  onClick={clearDialogue}
                  disabled={loading}
                >
                  Clear dialogue
                </button>
              ) : null}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
