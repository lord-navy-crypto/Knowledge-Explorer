"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useEditorMode } from "@/components/EditorModeProvider";
import { parsePracticeQuestions } from "@/lib/parse-practice-draft";
import { readResponseJson } from "@/lib/safe-json";

type Props = {
  practiceText: string;
  defaultSubject: string;
  suggestedTitle?: string;
};

function firstParagraph(text: string, max = 400): string {
  const trimmed = text.trim();
  if (!trimmed) return "AI-generated practice set.";
  const para = trimmed.split(/\n\n+/)[0] || trimmed;
  return para.length > max ? `${para.slice(0, max)}…` : para;
}

export default function SaveGeneratedPractice({
  practiceText,
  defaultSubject,
  suggestedTitle,
}: Props) {
  const { unlocked, editor, refresh } = useEditorMode();
  const parsed = useMemo(() => parsePracticeQuestions(practiceText), [practiceText]);
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState(suggestedTitle || "");
  const [subject, setSubject] = useState(defaultSubject);
  const [description, setDescription] = useState(() => firstParagraph(practiceText));
  const [generationNote, setGenerationNote] = useState(
    () => `Saved from AI Toolbox · ${new Date().toISOString().slice(0, 10)}`
  );
  const [minutes, setMinutes] = useState("20");
  const [questions, setQuestions] = useState(parsed);
  const [changeCode, setChangeCode] = useState("");
  const [githubToken, setGithubToken] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [savedId, setSavedId] = useState("");

  function updateQuestion(id: string, patch: Partial<{ prompt: string; hint: string }>) {
    setQuestions((prev) => prev.map((q) => (q.id === id ? { ...q, ...patch } : q)));
  }

  async function save() {
    setBusy(true);
    setError("");
    setSavedId("");
    try {
      if (!title.trim()) throw new Error("Practice set title is required.");
      if (!subject.trim()) throw new Error("Subject is required.");
      const cleaned = questions.map((q) => ({ ...q, prompt: q.prompt.trim() })).filter((q) => q.prompt);
      if (cleaned.length === 0) throw new Error("Add at least one question prompt.");

      const payload = {
        changeCode: changeCode.trim() || undefined,
        githubToken: githubToken.trim() || undefined,
        action: "add_questionnaire",
        item: {
          title: title.trim(),
          subject: subject.trim(),
          description: description.trim() || firstParagraph(practiceText),
          firstPrompt: cleaned[0].prompt,
          generationNote: generationNote.trim(),
          estimatedMinutes: Number(minutes) || 20,
          hint: cleaned[0].hint || "Attempt before asking for more hints.",
        },
      };

      const res = await fetch("/api/edit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(payload),
      });
      const parsedRes = await readResponseJson<{
        error?: string;
        createdId?: string;
        content?: { questionnaires?: Array<{ id: string; title: string }> };
      }>(res);
      if (!parsedRes.ok) throw new Error(parsedRes.error);
      if (!res.ok) throw new Error(parsedRes.data.error || "Save failed");

      const setId =
        parsedRes.data.createdId ||
        [...(parsedRes.data.content?.questionnaires || [])]
          .reverse()
          .find((q) => q.title === title.trim())?.id;
      if (!setId) throw new Error("Practice set saved but id not returned — check Practice.");

      for (let i = 1; i < cleaned.length; i += 1) {
        const extra = cleaned[i];
        const itemRes = await fetch("/api/edit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify({
            action: "add_questionnaire_item",
            setId,
            changeCode: changeCode.trim() || undefined,
            githubToken: githubToken.trim() || undefined,
            item: {
              prompt: extra.prompt,
              hints: [extra.hint || "Attempt before asking for more hints."],
              format: "concept_check",
            },
          }),
        });
        const itemParsed = await readResponseJson<{ error?: string }>(itemRes);
        if (!itemParsed.ok) {
          throw new Error(itemParsed.error || `Failed to add question ${i + 1}`);
        }
        if (!itemRes.ok) {
          throw new Error(itemParsed.data.error || `Failed to add question ${i + 1}`);
        }
      }

      setSavedId(setId);
      setOpen(false);
      void refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Save failed");
    } finally {
      setBusy(false);
    }
  }

  if (!practiceText.trim()) return null;

  return (
    <div className="mt-3 border-t border-slate-200 pt-3">
      {!open ? (
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            className="rounded-md border border-emerald-700/30 bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-900 hover:bg-emerald-100"
            onClick={() => {
              setQuestions(parsePracticeQuestions(practiceText));
              setOpen(true);
            }}
          >
            Preview &amp; save practice set
          </button>
          <span className="text-[10px] text-slate-500">
            Editors · {parsed.length} detected question{parsed.length === 1 ? "" : "s"} · hints only
          </span>
        </div>
      ) : (
        <div className="space-y-3 rounded-lg border border-slate-200 bg-white p-3">
          <p className="text-xs font-semibold text-slate-700">Preview &amp; save to Practice</p>
          {!unlocked && !editor ? (
            <p className="text-xs text-slate-600">
              <Link href="/login" className="font-medium text-brand-700 underline">
                Unlock editor
              </Link>{" "}
              or enter a change code below.
            </p>
          ) : null}
          <input
            className="input text-sm"
            placeholder="Practice set title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            className="input text-sm"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <textarea
            className="textarea text-sm min-h-[4rem]"
            placeholder="Set description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            className="input text-sm"
            placeholder="Generation note"
            value={generationNote}
            onChange={(e) => setGenerationNote(e.target.value)}
          />
          <input
            className="input text-sm"
            placeholder="Estimated minutes"
            value={minutes}
            onChange={(e) => setMinutes(e.target.value)}
          />
          <div className="space-y-2">
            <p className="text-xs font-medium text-slate-600">Questions (edit prompts &amp; hints)</p>
            {questions.map((q, index) => (
              <div key={q.id} className="space-y-1 rounded-md border border-slate-100 bg-slate-50 p-2">
                <p className="text-[10px] font-semibold uppercase text-slate-400">Q{index + 1}</p>
                <textarea
                  className="textarea min-h-[5rem] text-xs"
                  value={q.prompt}
                  onChange={(e) => updateQuestion(q.id, { prompt: e.target.value })}
                />
                <input
                  className="input text-xs"
                  placeholder="Hint"
                  value={q.hint}
                  onChange={(e) => updateQuestion(q.id, { hint: e.target.value })}
                />
              </div>
            ))}
          </div>
          {!unlocked ? (
            <>
              <input
                className="input text-sm"
                placeholder="Change code (if not unlocked)"
                value={changeCode}
                onChange={(e) => setChangeCode(e.target.value)}
              />
              <input
                className="input text-sm"
                placeholder="GitHub token (optional)"
                value={githubToken}
                onChange={(e) => setGithubToken(e.target.value)}
              />
            </>
          ) : null}
          {error ? <p className="text-xs text-red-600">{error}</p> : null}
          <div className="flex flex-wrap gap-2">
            <button type="button" className="btn-primary text-xs" disabled={busy} onClick={() => void save()}>
              {busy ? "Saving…" : `Save ${questions.length} question(s)`}
            </button>
            <button type="button" className="btn-ghost text-xs" onClick={() => setOpen(false)}>
              Cancel
            </button>
          </div>
        </div>
      )}
      {savedId ? (
        <p className="mt-2 text-xs text-emerald-800">
          Saved.{" "}
          <Link href={`/questionnaires/${savedId}`} className="font-semibold underline">
            Open practice set →
          </Link>
        </p>
      ) : null}
    </div>
  );
}
