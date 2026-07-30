"use client";

import { useState } from "react";
import Link from "next/link";
import { useEditorMode } from "@/components/EditorModeProvider";
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
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState(suggestedTitle || "");
  const [subject, setSubject] = useState(defaultSubject);
  const [changeCode, setChangeCode] = useState("");
  const [githubToken, setGithubToken] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [savedId, setSavedId] = useState("");

  async function save() {
    setBusy(true);
    setError("");
    setSavedId("");
    try {
      if (!title.trim()) throw new Error("Practice set title is required.");
      if (!subject.trim()) throw new Error("Subject is required.");
      const res = await fetch("/api/edit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          action: "add_questionnaire",
          changeCode: changeCode.trim() || undefined,
          githubToken: githubToken.trim() || undefined,
          item: {
            title: title.trim(),
            subject: subject.trim(),
            description: firstParagraph(practiceText),
            firstPrompt: practiceText.trim(),
            generationNote: `Saved from AI Toolbox · ${new Date().toISOString().slice(0, 10)}`,
            estimatedMinutes: 20,
            hint: "Attempt before asking for more hints.",
          },
        }),
      });
      const parsed = await readResponseJson<{
        error?: string;
        content?: { questionnaires?: Array<{ id: string; title: string }> };
      }>(res);
      if (!parsed.ok) throw new Error(parsed.error);
      if (!res.ok) throw new Error(parsed.data.error || "Save failed");
      const created = parsed.data.content?.questionnaires?.find((q) => q.title === title.trim());
      setSavedId(created?.id || "");
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
            onClick={() => setOpen(true)}
          >
            Save as practice set
          </button>
          <span className="text-[10px] text-slate-500">Editors · hints only · review before publish</span>
        </div>
      ) : (
        <div className="space-y-2 rounded-lg border border-slate-200 bg-white p-3">
          <p className="text-xs font-semibold text-slate-700">Save to Practice</p>
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
              {busy ? "Saving…" : "Save practice set"}
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
