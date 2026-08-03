"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import LocalAIControls from "@/components/LocalAIControls";
import MarkdownLatexField from "@/components/MarkdownLatexField";
import RichContent from "@/components/RichContent";
import VoiceInputButton from "@/components/VoiceInputButton";
import SaveGeneratedPractice from "@/components/SaveGeneratedPractice";
import { useLocalAI } from "@/components/LocalAIProvider";
import { codingAiLocal } from "@/lib/ai-coding-prompt";
import {
  HINT_PROCESS_LOCAL,
  SITE_GUIDE_LOCAL,
  conceptExplainLocal,
  englishTutorLocal,
} from "@/lib/ai-prompts";
import { appendAiSiteContext, fetchAiSiteContext, AI_SITE_SEARCH_LIMIT_LOCAL } from "@/lib/ai-site-context";
import {
  loadToolboxPanelPrefs,
  saveToolboxPanelPrefs,
  type ToolboxCategory,
} from "@/lib/ai-toolbox-prefs";
import { takeToolboxPrefill } from "@/lib/ai-toolbox-prefill";
import { migrateEnglishTask } from "@/lib/ai-toolbox-url";

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
  | "practice-generator";

type CodingTask = "debug" | "write" | "explain";

const SUBJECT_OPTIONS = [
  "AP Physics 1",
  "AP Physics 2",
  "AP Physics C: Mechanics",
  "AP Physics C: E&M",
  "AP Calculus AB/BC",
  "AP Statistics",
  "AP Chemistry",
  "AP Biology",
  "AP Psychology",
  "AP Computer Science A",
  "AP Microeconomics",
  "AP Macroeconomics",
  "AP US History",
] as const;

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
    hint: "TOEFL / IELTS / SAT section tips — not AP science.",
  },
  {
    value: "practice-generator",
    label: "Practice generator",
    hint: "Paste any topic — copy it, then generate a new practice topic from it. Not a topic? Still copy and generate.",
  },
];

const CODING_TASKS: Array<{ value: CodingTask; label: string; hint: string }> = [
  { value: "debug", label: "Find bugs", hint: "Paste code and describe the bug." },
  { value: "write", label: "Write code", hint: "Describe what to build; get guided code help." },
  { value: "explain", label: "Explain code", hint: "Paste code for a clear explanation." },
];

const LANGUAGES = ["Python", "Java", "HTML / CSS / JS", "General algorithms", "Other"] as const;

type Props = {
  defaultCategory?: Category;
  defaultSubject?: string;
  defaultApTask?: string;
  defaultEnglishTask?: string;
  defaultCodingTask?: string;
};

type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  text: string;
  meta?: string;
  lists?: Array<{ label: string; items: string[] }>;
  snippet?: string;
  refused?: boolean;
  aiMayBeWrong?: string;
  /** Show editor save for generate-practice replies */
  saveAsPractice?: boolean;
};

function formatAssistantText(parts: {
  body?: string;
  lists?: Array<{ label: string; items: string[] }>;
  snippet?: string;
  /** Only coding replies should fence snippets — math in ``` never renders as KaTeX. */
  snippetAsCode?: boolean;
}): string {
  const chunks: string[] = [];
  if (parts.body?.trim()) chunks.push(parts.body.trim());
  for (const list of parts.lists || []) {
    if (!list.items.length) continue;
    chunks.push(`**${list.label}**\n${list.items.map((item) => `- ${item}`).join("\n")}`);
  }
  if (parts.snippet?.trim()) {
    const snippet = parts.snippet.trim();
    if (parts.snippetAsCode) {
      chunks.push(`\`\`\`\n${snippet}\n\`\`\``);
    } else {
      // Formulas / English revisions: plain markdown so RichContent can render $math$.
      chunks.push(snippet);
    }
  }
  return chunks.join("\n\n");
}

function buildHistoryBlock(messages: ChatMessage[]): string {
  if (messages.length === 0) return "";
  const recent = messages.slice(-8);
  const lines = recent.map((message) => {
    const who = message.role === "user" ? "Student" : "Tutor";
    return `${who}: ${message.text.slice(0, 1200)}`;
  });
  return `Conversation so far (continue from this context; do not restart unless asked):\n${lines.join("\n\n")}\n\n`;
}

export default function UnifiedAiPanel({
  defaultCategory = "ap",
  defaultSubject,
  defaultApTask,
  defaultEnglishTask,
  defaultCodingTask,
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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [siteSearchNote, setSiteSearchNote] = useState("");
  const [siteHits, setSiteHits] = useState<Array<{ title: string; href: string; subject?: string }>>(
    []
  );
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const chatRef = useRef<HTMLDivElement>(null);

  const taskMeta = useMemo(() => {
    if (category === "ap") return AP_TASKS.find((t) => t.value === apTask)!;
    if (category === "english") return ENGLISH_TASKS.find((t) => t.value === englishTask)!;
    return CODING_TASKS.find((t) => t.value === codingTask)!;
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
    const prefill = takeToolboxPrefill();
    if (prefill) setInput(prefill);
  }, []);

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
    node.scrollTop = node.scrollHeight;
  }, [messages, loading]);

  function clearDialogue() {
    setMessages([]);
    setError("");
    setInput("");
    setCode("");
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
    onToken?: (token: string, fullText: string) => void
  ) {
    await ensureLocalReady();
    // Search the latest question only — history pollutes keyword retrieval.
    const { context, note, hitCount, hits } = await fetchAiSiteContext(
      user,
      localAI.siteSearchEnabled,
      { limit: AI_SITE_SEARCH_LIMIT_LOCAL }
    );
    setSiteHits(hits);
    setSiteSearchNote(
      localAI.siteSearchEnabled
        ? note || (hitCount ? `Using ${hitCount} site hit(s).` : "No site matches.")
        : "Site search off."
    );
    const chatMessages: Array<{ role: "system" | "user" | "assistant"; content: string }> = [
      {
        role: "system",
        content: `${system}\n\nWhen Knowledge Explorer site materials are appended below, prefer their formulas/definitions and cite the hit titles. Ignore off-topic hits. Follow the same teaching rules as the cloud teacher for this tool.`,
      },
    ];
    // Local prefill is slow — keep history short so the timeout budget goes to the answer.
    for (const message of history.slice(-4)) {
      chatMessages.push({
        role: message.role === "user" ? "user" : "assistant",
        content: message.text.slice(0, 1200),
      });
    }
    chatMessages.push({
      role: "user",
      content: appendAiSiteContext(user, context).slice(0, 6_000),
    });
    return localAI.complete(chatMessages, onToken);
  }

  async function askOnce(
    userText: string,
    history: ChatMessage[],
    codePaste: string,
    onToken?: (token: string, fullText: string) => void
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
          `Subject: ${subject}\nQuestion:\n${userText}`,
          history,
          onToken
        );
        return {
          id: `a-${Date.now()}`,
          role: "assistant",
          text,
          meta: "Hints & process · Local",
          aiMayBeWrong: "Local AI may be wrong — verify with your notes.",
        };
      }
      const response = await fetch("/api/hints", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          subject,
          question: stampedUser,
          notes: "",
          ...localAI.cloudRequestFields,
        }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Hint request failed");
      const lists = [
        { label: "Hints", items: data.hints || [] },
        { label: "Key formulas", items: data.keyFormulas || [] },
        { label: "Knowns / unknowns", items: data.knownsUnknowns || [] },
        { label: "Checkpoints", items: data.checkpoints || [] },
        { label: "Process outline", items: data.processOutline || [] },
        { label: "Worked partial", items: data.workedPartial || [] },
      ];
      return {
        id: `a-${Date.now()}`,
        role: "assistant",
        text: formatAssistantText({ lists }),
        meta: data.note || "Hints & process",
        lists,
        aiMayBeWrong: data.aiMayBeWrong,
      };
    }

    if (category === "ap" && apTask === "guide") {
      if (localAI.usesLocal) {
        const text = await runLocal(
          SITE_GUIDE_LOCAL,
          userText,
          history,
          onToken
        );
        return {
          id: `a-${Date.now()}`,
          role: "assistant",
          text,
          meta: "Site guide · Local",
        };
      }
      const response = await fetch("/api/ai/guide", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: stampedUser, ...localAI.cloudRequestFields }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Guide failed");
      return {
        id: `a-${Date.now()}`,
        role: "assistant",
        text: data.reply || "",
        meta: data.note || "Site guide",
        refused: data.refused,
        aiMayBeWrong: data.aiMayBeWrong,
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
        return {
          id: `a-${Date.now()}`,
          role: "assistant",
          text,
          meta: `${taskMeta.label} · Local`,
          saveAsPractice: apTask === "generate-questions",
        };
      }
      const response = await fetch("/api/ai/concept", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          subject,
          conceptTitle:
            apTask === "concept" || apTask === "concept-extension"
              ? userText.slice(0, 120)
              : "",
          mode,
          question: stampedUser,
          ...localAI.cloudRequestFields,
        }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "AP AI failed");
      const body = [data.reply, data.quizPrompt ? `\n\n**Try this:** ${data.quizPrompt}` : ""]
        .filter(Boolean)
        .join("");
      const lists = [
        { label: "Key formulas", items: Array.isArray(data.formulas) ? data.formulas : [] },
      ];
      return {
        id: `a-${Date.now()}`,
        role: "assistant",
        text: formatAssistantText({ body, lists }),
        meta: data.note || taskMeta.label,
        lists,
        refused: data.refused,
        aiMayBeWrong: data.aiMayBeWrong,
        saveAsPractice: apTask === "generate-questions",
      };
    }

    if (category === "english") {
      const mode = englishTask;
      const englishControls =
        mode === "practice-generator"
          ? `Exam/track target (tone only): ${englishTarget}
Rule: COPY whatever the student pasted as the topic (do not judge if it is a “real topic”). Then GENERATE a NEW practice topic from that copy.
Student paste (topic):`
          : mode === "language-materials"
            ? `Exam/track target: ${englishTarget}
Role: language-materials collector on large pastes; language-materials generator on short commands/sentences (语言资料, not generic data).
Student input:`
            : mode === "translator"
              ? `Exam/track target (ignore for translation): ${englishTarget}
Rule: JUST TRANSLATE. Chinese ↔ English by default (auto-detect). If the student names a direction, follow it. Put the full translation in revisionExample.
Student paste:`
              : `Exam/track target: ${englishTarget}
Student input:`;
      const englishUser = `${englishControls}\n${userText}`;
      if (localAI.usesLocal) {
        const text = await runLocal(
          englishTutorLocal(mode),
          `Mode: ${mode}\n${englishUser}`,
          history,
          onToken
        );
        return {
          id: `a-${Date.now()}`,
          role: "assistant",
          text,
          meta: `${taskMeta.label} · Local`,
        };
      }
      const response = await fetch("/api/ai/english", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          mode,
          target: englishTarget,
          input: `${historyPrefix}${englishUser}`,
          ...localAI.cloudRequestFields,
        }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "English AI failed");
      const lists = [
        { label: "Strengths", items: data.strengths || [] },
        { label: "Priorities", items: data.priorities || [] },
      ];
      const snippet =
        mode === "translator"
          ? data.revisionExample || ""
          : [data.revisionExample, data.practicePrompt].filter(Boolean).join("\n\n");
      return {
        id: `a-${Date.now()}`,
        role: "assistant",
        text: formatAssistantText({ body: data.feedback || "", lists, snippet }),
        meta: data.note || taskMeta.label,
        lists,
        snippet,
        refused: data.refused,
        aiMayBeWrong: data.aiMayBeWrong,
      };
    }

    const taskText =
      codingTask === "explain"
        ? `Explain this code clearly.\n${userText}`
        : codingTask === "write"
          ? `Write / help implement:\n${userText}`
          : `Debug / find bugs:\n${userText}`;
    if (localAI.usesLocal) {
      const text = await runLocal(
        codingAiLocal(codingTask),
        `Language: ${language}\nFocus: ${codingTask}\nTask: ${taskText}\nCode:\n${codePaste || "(none)"}`,
        history,
        onToken
      );
      return {
        id: `a-${Date.now()}`,
        role: "assistant",
        text,
        meta: `${taskMeta.label} · Local`,
      };
    }
    const response = await fetch("/api/ai/coding", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        language,
        focus: codingTask,
        task: `${historyPrefix}${taskText}`,
        code: codePaste,
        ...localAI.cloudRequestFields,
      }),
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || "Coding AI failed");
    const lists = [{ label: "Steps", items: data.steps || [] }];
    return {
      id: `a-${Date.now()}`,
      role: "assistant",
      text: formatAssistantText({
        body: data.reply || "",
        lists,
        snippet: data.snippet || "",
        snippetAsCode: true,
      }),
      meta: data.note || taskMeta.label,
      lists,
      snippet: data.snippet || "",
      refused: data.refused,
      aiMayBeWrong: data.aiMayBeWrong,
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
            : "Type a question or paste content first."
      );
      return;
    }

    const displayUser = [
      userText,
      category === "coding" && code.trim() ? `\n\n\`\`\`\n${code.trim()}\n\`\`\`` : "",
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
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);
    setError("");

    const draftId = `a-${Date.now()}`;
    const streamLocal = localAI.usesLocal;
    if (streamLocal) {
      setMessages((prev) => [
        ...prev,
        {
          id: draftId,
          role: "assistant",
          text: "",
          meta: `${taskMeta.label} · Local · writing…`,
        },
      ]);
    }

    try {
      const assistant = await askOnce(
        userText || "(see code)",
        historyBefore,
        code,
        streamLocal
          ? (_token, fullText) => {
              setMessages((prev) =>
                prev.map((message) =>
                  message.id === draftId
                    ? {
                        ...message,
                        text: fullText,
                        meta: `${taskMeta.label} · Local · writing…`,
                      }
                    : message
                )
              );
            }
          : undefined
      );
      if (streamLocal) {
        setMessages((prev) =>
          prev.map((message) =>
            message.id === draftId
              ? {
                  ...assistant,
                  id: draftId,
                  text: assistant.text || message.text,
                }
              : message
          )
        );
      } else {
        setMessages((prev) => [...prev, assistant]);
      }
      if (category === "coding") setCode("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "AI request failed");
      if (streamLocal) {
        setMessages((prev) =>
          prev.filter((message) => message.id !== draftId || message.text.trim())
        );
      }
      // Keep the user message so they can retry / edit the follow-up.
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-200 bg-slate-50 px-4 py-3 md:px-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
          Unified AI
        </p>
        <h2 className="mt-1 text-xl font-bold text-slate-900">
          One panel · dialogue history · keep asking
        </h2>
        <p className="mt-1 text-sm text-slate-600">
          Choose Local / Website API / Your own API, pick a task, then chat in the dialogue box.
          Follow-up questions stay in the same conversation. Keep{" "}
          <strong>Always search Knowledge Explorer</strong> on so AI teaches from site materials.
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

        <div className="grid gap-2 sm:grid-cols-3">
          {(
            [
              { id: "ap", label: "AP / Learning", detail: "Hints, concepts, extensions, formulas, practice" },
              { id: "english", label: "English", detail: "Grammar, translate, materials, practice" },
              { id: "coding", label: "Coding", detail: "Debug, write, explain" },
            ] as const
          ).map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setCategory(item.id)}
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
          <label className="block text-sm font-medium text-slate-700">
            Task
            <select
              className="input mt-1"
              value={
                category === "ap" ? apTask : category === "english" ? englishTask : codingTask
              }
              onChange={(e) => {
                const value = e.target.value;
                if (category === "ap") setApTask(value as ApTask);
                else if (category === "english") setEnglishTask(value as EnglishTask);
                else setCodingTask(value as CodingTask);
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
            <label className="block text-sm font-medium text-slate-700">
              Subject
              <select
                className="input mt-1"
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
            <label className="block text-sm font-medium text-slate-700">
              Exam / track
              <select
                className="input mt-1"
                value={englishTarget}
                onChange={(e) => setEnglishTarget(e.target.value)}
              >
                {[
                  "General academic English",
                  "TOEFL",
                  "IELTS",
                  "SAT Reading & Writing",
                  "Writing revision",
                ].map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
          ) : null}

          {category === "coding" ? (
            <label className="block text-sm font-medium text-slate-700">
              Language
              <select
                className="input mt-1"
                value={language}
                onChange={(e) => setLanguage(e.target.value as (typeof LANGUAGES)[number])}
              >
                {LANGUAGES.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
          ) : null}
        </div>

        <div className="overflow-hidden rounded-xl border border-slate-200">
          <div className="flex items-center justify-between gap-2 border-b border-slate-200 bg-slate-50 px-3 py-2">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Dialogue history
            </p>
            <button
              type="button"
              onClick={clearDialogue}
              className="text-xs font-medium text-brand-700 hover:underline"
              disabled={loading || messages.length === 0}
            >
              New chat
            </button>
          </div>

          <div
            ref={chatRef}
            className="flex max-h-[28rem] min-h-[14rem] flex-col gap-3 overflow-y-auto overscroll-contain bg-white p-3"
          >
            {messages.length === 0 ? (
              <p className="m-auto max-w-md text-center text-sm text-slate-500">
                Start the conversation below. After the first reply, keep asking follow-up questions
                in the same dialogue box.
              </p>
            ) : (
              messages.map((message) => (
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
                    <RichContent className="min-w-0 text-sm">{message.text}</RichContent>
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
                </div>
              ))
            )}
            {loading ? (
              <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                <p>
                  {localAI.usesLocal && localAI.status === "generating"
                    ? localAI.statusText || "Writing answer…"
                    : "Working…"}
                </p>
                {localAI.usesLocal ? (
                  <button
                    type="button"
                    className="rounded-md border border-slate-300 px-2 py-0.5 text-[11px] font-medium text-slate-700 hover:bg-white"
                    onClick={() => localAI.interruptGeneration()}
                  >
                    Stop
                  </button>
                ) : null}
              </div>
            ) : null}
          </div>

          <form
            onSubmit={(e) => void submit(e)}
            className="space-y-3 border-t border-slate-200 bg-slate-50 p-3"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="text-xs font-medium text-slate-600">Type or paste your question</p>
              <VoiceInputButton
                disabled={loading}
                onTranscript={(text, isFinal) => {
                  setInput((prev) => {
                    if (!prev.trim() || isFinal) {
                      const spacer = prev.trim() && isFinal ? (prev.endsWith(" ") ? "" : " ") : "";
                      return `${prev}${spacer}${text}`.trimStart();
                    }
                    return `${prev.replace(/\s+$/, "")} ${text}`.trim();
                  });
                }}
              />
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
                    ? "Describe the bug, feature, or what to explain…"
                    : category === "english"
                      ? englishTask === "language-materials"
                        ? "Paste a large text to collect useful + extended 语言资料, or a short command/sentence to generate language materials…"
                        : englishTask === "practice-generator"
                          ? "Paste any topic (or anything). We copy it and generate a NEW practice topic from it."
                          : englishTask === "translator"
                            ? "Paste Chinese or English text to translate…"
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

            {category === "coding" ? (
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
            ) : null}

            {error ? <p className="text-sm text-red-600">{error}</p> : null}

            <div className="flex flex-wrap gap-2">
              <button type="submit" className="btn-primary" disabled={loading}>
                {loading ? "Working…" : messages.length ? "Ask follow-up" : "Ask AI"}
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
