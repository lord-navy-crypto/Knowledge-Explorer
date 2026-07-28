"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import LocalAIControls from "@/components/LocalAIControls";
import MarkdownLatexField from "@/components/MarkdownLatexField";
import RichContent from "@/components/RichContent";
import { useLocalAI } from "@/components/LocalAIProvider";
import { appendAiSiteContext, fetchAiSiteContext } from "@/lib/ai-site-context";

type Category = "ap" | "english" | "coding";

type ApTask =
  | "advice"
  | "concept"
  | "guide"
  | "formula-derive"
  | "generate-questions";

type EnglishTask =
  | "grammar-explanation"
  | "vocab-extract"
  | "optimize-reading"
  | "corpus-find"
  | "corpus-generate"
  | "writing-feedback";

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
];

const ENGLISH_TASKS: Array<{ value: EnglishTask; label: string; hint: string }> = [
  {
    value: "grammar-explanation",
    label: "Grammar check",
    hint: "Find and explain grammar issues.",
  },
  {
    value: "vocab-extract",
    label: "Vocab extract",
    hint: "Pull useful words from a reading passage.",
  },
  {
    value: "optimize-reading",
    label: "Optimize reading",
    hint: "Make a passage clearer or easier to follow.",
  },
  {
    value: "corpus-find",
    label: "Find useful corpus",
    hint: "Suggest useful example sentences / passages for a target.",
  },
  {
    value: "corpus-generate",
    label: "Corpus generator",
    hint: "Create short original practice sentences or a mini passage.",
  },
  {
    value: "writing-feedback",
    label: "Writing feedback",
    hint: "Feedback on a draft you paste.",
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
};

function formatAssistantText(parts: {
  body?: string;
  lists?: Array<{ label: string; items: string[] }>;
  snippet?: string;
}): string {
  const chunks: string[] = [];
  if (parts.body?.trim()) chunks.push(parts.body.trim());
  for (const list of parts.lists || []) {
    if (!list.items.length) continue;
    chunks.push(`**${list.label}**\n${list.items.map((item) => `- ${item}`).join("\n")}`);
  }
  if (parts.snippet?.trim()) chunks.push(`\`\`\`\n${parts.snippet.trim()}\n\`\`\``);
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
}: Props) {
  const localAI = useLocalAI();
  const [category, setCategory] = useState<Category>(defaultCategory);
  const [apTask, setApTask] = useState<ApTask>("advice");
  const [englishTask, setEnglishTask] = useState<EnglishTask>("grammar-explanation");
  const [codingTask, setCodingTask] = useState<CodingTask>("debug");
  const [subject, setSubject] = useState(defaultSubject || SUBJECT_OPTIONS[0]);
  const [englishTarget, setEnglishTarget] = useState("General academic English");
  const [language, setLanguage] = useState<(typeof LANGUAGES)[number]>("Python");
  const [input, setInput] = useState("");
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const chatRef = useRef<HTMLDivElement>(null);

  const taskMeta = useMemo(() => {
    if (category === "ap") return AP_TASKS.find((t) => t.value === apTask)!;
    if (category === "english") return ENGLISH_TASKS.find((t) => t.value === englishTask)!;
    return CODING_TASKS.find((t) => t.value === codingTask)!;
  }, [apTask, category, codingTask, englishTask]);

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

  async function runLocal(system: string, user: string, history: ChatMessage[]) {
    await ensureLocalReady();
    const withHistory = `${buildHistoryBlock(history)}${user}`;
    const { context } = await fetchAiSiteContext(withHistory, localAI.siteSearchEnabled);
    const chatMessages: Array<{ role: "system" | "user" | "assistant"; content: string }> = [
      { role: "system", content: system },
    ];
    for (const message of history.slice(-8)) {
      chatMessages.push({
        role: message.role === "user" ? "user" : "assistant",
        content: message.text.slice(0, 2000),
      });
    }
    chatMessages.push({
      role: "user",
      content: appendAiSiteContext(user, context),
    });
    return localAI.complete(chatMessages);
  }

  async function askOnce(
    userText: string,
    history: ChatMessage[],
    codePaste: string
  ): Promise<ChatMessage> {
    const historyPrefix = buildHistoryBlock(history);
    const stampedUser = `${historyPrefix}Latest student message:\n${userText}`;

    if (localAI.mode === "byok" && !localAI.usesLocal && !localAI.userKey.trim()) {
      throw new Error("Paste your own API key, or choose Website API / Local.");
    }

    if (category === "ap" && apTask === "advice") {
      if (localAI.usesLocal) {
        const text = await runLocal(
          "You are an AP tutor. Give strategy hints and half-process steps only. Never give the final answer. Continue the dialogue helpfully. Reply in plain markdown.",
          `Subject: ${subject}\nQuestion:\n${userText}`,
          history
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
        { label: "Checkpoints", items: data.checkpoints || [] },
        { label: "Process outline", items: data.processOutline || [] },
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
          "You are Site Guide for Knowledge Explorer. Only answer how to use the site. Refuse homework solving. Continue the dialogue.",
          userText,
          history
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
            : apTask === "concept"
              ? "explain"
              : "ask";
      if (localAI.usesLocal) {
        const text = await runLocal(
          "You are an AP concept tutor. Teach clearly. Never finish graded finals. Continue the dialogue. Reply in markdown.",
          `Subject: ${subject}\nMode: ${mode}\nInput:\n${userText}`,
          history
        );
        return {
          id: `a-${Date.now()}`,
          role: "assistant",
          text,
          meta: `${taskMeta.label} · Local`,
        };
      }
      const response = await fetch("/api/ai/concept", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          subject,
          conceptTitle: apTask === "concept" ? userText.slice(0, 120) : "",
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
      return {
        id: `a-${Date.now()}`,
        role: "assistant",
        text: body,
        meta: data.note || taskMeta.label,
        refused: data.refused,
        aiMayBeWrong: data.aiMayBeWrong,
      };
    }

    if (category === "english") {
      const mode = englishTask === "vocab-extract" ? "vocabulary-coach" : englishTask;
      if (localAI.usesLocal) {
        const text = await runLocal(
          "You are English AI Tutor. Only English learning help. Refuse AP science solving. Continue the dialogue. Reply in markdown.",
          `Mode: ${mode}\nTarget: ${englishTarget}\n\nStudent input:\n${userText}`,
          history
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
          input: stampedUser,
          ...localAI.cloudRequestFields,
        }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "English AI failed");
      const lists = [
        { label: "Strengths", items: data.strengths || [] },
        { label: "Priorities", items: data.priorities || [] },
      ];
      const snippet = [data.revisionExample, data.practicePrompt].filter(Boolean).join("\n\n");
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
        "You are Coding AI. Teach with hints and short examples. Prefer partial solutions for graded work. Continue the dialogue. Reply in markdown.",
        `Language: ${language}\nFocus: ${codingTask}\nTask: ${taskText}\nCode:\n${codePaste || "(none)"}`,
        history
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
      text: formatAssistantText({ body: data.reply || "", lists, snippet: data.snippet || "" }),
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

    try {
      const assistant = await askOnce(userText || "(see code)", historyBefore, code);
      setMessages((prev) => [...prev, assistant]);
      if (category === "coding") setCode("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "AI request failed");
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
          Follow-up questions stay in the same conversation.
        </p>
      </div>

      <div className="space-y-5 p-4 md:p-5">
        <LocalAIControls />

        <div className="grid gap-2 sm:grid-cols-3">
          {(
            [
              { id: "ap", label: "AP / Learning", detail: "Hints, concepts, formulas, practice" },
              { id: "english", label: "English", detail: "Grammar, vocab, reading, corpus" },
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
              Target
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
                  className={`max-w-[95%] rounded-2xl px-3 py-2.5 text-sm ${
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
                    <p className="whitespace-pre-wrap">{message.text}</p>
                  ) : (
                    <RichContent className="text-sm">{message.text}</RichContent>
                  )}
                  {message.role === "assistant" && message.aiMayBeWrong ? (
                    <p className="mt-2 text-[11px] text-amber-800">{message.aiMayBeWrong}</p>
                  ) : null}
                </div>
              ))
            )}
            {loading ? (
              <p className="text-xs text-slate-500">AI is thinking…</p>
            ) : null}
          </div>

          <form
            onSubmit={(e) => void submit(e)}
            className="space-y-3 border-t border-slate-200 bg-slate-50 p-3"
          >
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
                      ? "Paste a passage, sentence, or writing draft…"
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
