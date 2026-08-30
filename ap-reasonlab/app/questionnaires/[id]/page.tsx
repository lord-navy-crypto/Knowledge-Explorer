"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import EthicsBanner from "@/components/EthicsBanner";
import QuestionnaireItemCard from "@/components/QuestionnaireItemCard";
import ChangePanel from "@/components/ChangePanel";
import MarkdownLatexField from "@/components/MarkdownLatexField";
import RichContent from "@/components/RichContent";
import type { Questionnaire } from "@/lib/types";

export default function QuestionnaireDetailPage() {
  const params = useParams();
  const id = String(params?.id || "");
  const [quiz, setQuiz] = useState<Questionnaire | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [changeCode, setChangeCode] = useState("");
  const [itemPrompt, setItemPrompt] = useState("");
  const [itemHint, setItemHint] = useState("");
  const [itemAnswerKey, setItemAnswerKey] = useState("");
  const [saving, setSaving] = useState(false);
  const [note, setNote] = useState("");

  useEffect(() => {
    if (!id) return;
    let cancelled = false;
    (async () => {
      setLoading(true);
      setError("");
      try {
        const builtInRes = await fetch(`/api/questionnaire/${encodeURIComponent(id)}`, { cache: "no-store" });
        if (builtInRes.ok) {
          const data = await builtInRes.json();
          if (!cancelled) setQuiz(data.quiz || null);
          return;
        }
        const res = await fetch("/api/edit", { cache: "no-store", credentials: "include" });
        const data = await res.json();
        if (cancelled) return;
        const found = (data.questionnaires || []).find((q: Questionnaire) => q.id === id);
        if (!found) {
          setError("Set not found.");
          setQuiz(null);
        } else setQuiz(found);
      } catch {
        if (!cancelled) setError("Failed to load set.");
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => { cancelled = true; };
  }, [id]);

  async function addItem(e: React.FormEvent) {
    e.preventDefault();
    if (!quiz || !itemPrompt.trim() || !itemAnswerKey.trim() || !changeCode.trim()) return;
    setSaving(true);
    setError("");
    setNote("");
    try {
      const res = await fetch("/api/edit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          action: "add_questionnaire_item",
          setId: quiz.id,
          changeCode: changeCode.trim(),
          item: {
            prompt: itemPrompt.trim(),
            hint: itemHint.trim() || "Try the task independently before opening the reference response.",
            answerKey: itemAnswerKey.trim(),
            format: "concept_check",
            authenticity: "skill_drill",
            responseMode: "short_response",
          },
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Save failed");
      const updated = (data.content?.questionnaires || []).find((q: Questionnaire) => q.id === quiz.id);
      if (updated) setQuiz(updated);
      setItemPrompt("");
      setItemHint("");
      setItemAnswerKey("");
      setNote("Complete skill-drill item added.");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Save failed");
    } finally {
      setSaving(false);
    }
  }

  if (loading) return <div className="text-sm text-slate-500">Loading set…</div>;
  if (!quiz) {
    return (
      <div className="space-y-4">
        <Link href="/practice" className="text-sm font-medium text-brand-600 hover:underline">← Practice</Link>
        <p className="text-sm text-red-600">{error || "Set not found."}</p>
      </div>
    );
  }

  const isManaged = quiz.id.startsWith("m-quiz");
  const relatedConceptIds = [...new Set((quiz.items || []).map((item) => item.conceptId).filter(Boolean) as string[])];
  const authenticCount = (quiz.items || []).filter((item) => item.authenticity === "exam_authentic").length;

  return (
    <div className="practice-exam-page space-y-6">
      <Link href={`/practice?subject=${encodeURIComponent(quiz.subject)}`} className="text-sm font-medium text-brand-600 hover:underline">← {quiz.subject} practice</Link>

      <section className="card practice-exam-header space-y-3 border-violet-100 bg-gradient-to-br from-white to-violet-50/30">
        <div className="flex flex-wrap gap-2">
          <span className="badge">{quiz.subject}</span>
          <span className={quiz.authenticity === "exam_authentic" ? "badge" : "badge-generated"}>
            {quiz.authenticity === "exam_authentic" ? "Exam-style set" : "Skill-drill set"}
          </span>
          <span className="badge">Original practice</span>
          <span className="badge">~{quiz.estimatedMinutes} min</span>
          <span className="badge">{authenticCount}/{quiz.items.length} Exam-style items</span>
          {quiz.difficultyTier ? <span className="badge">Tier {quiz.difficultyTier}</span> : null}
          {isManaged ? <span className="badge">UI-added</span> : null}
        </div>
        <h1 className="text-3xl font-bold">{quiz.title}</h1>
        <p className="text-slate-600"><RichContent>{quiz.description}</RichContent></p>
        {quiz.examFormatNote ? <p className="rounded-xl border border-violet-200 bg-violet-50 px-4 py-2 text-sm text-violet-950">{quiz.examFormatNote}</p> : null}
        <p className="rounded-xl bg-slate-50 px-4 py-2 text-sm text-slate-500">{quiz.generationNote}</p>
      </section>

      <EthicsBanner />

      {relatedConceptIds.length > 0 ? (
        <section className="card space-y-2 border-brand-100 bg-brand-50/40">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-600">Related concepts</h2>
          <div className="flex flex-wrap gap-2">
            {relatedConceptIds.map((conceptId) => (
              <Link key={conceptId} href={`/concepts/${conceptId}`} className="rounded-full border border-brand-200 bg-white px-3 py-1 text-sm font-medium text-brand-800 hover:border-brand-400">
                {conceptId.replace(/-/g, " ")} →
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      {(quiz.items || []).map((item, index) => <QuestionnaireItemCard key={item.id} item={item} index={index} />)}

      {isManaged ? (
        <section className="card space-y-3 border-brand-200">
          <h2 className="font-semibold text-slate-900">+ Add complete item to this set</h2>
          <p className="text-sm text-slate-600">
            New UI-added items enter as <strong>Skill drill</strong>. A complete prompt and reference answer are required; this prevents answerless placeholders from re-entering the public bank.
          </p>
          <form onSubmit={addItem} className="space-y-3">
            <MarkdownLatexField label="Question prompt" value={itemPrompt} onChange={setItemPrompt} required minHeightClass="min-h-[8rem]" placeholder="Complete prompt with all context needed to answer…" />
            <MarkdownLatexField label="Hint (optional)" help="Strategy guidance only — do not give away the answer here." value={itemHint} onChange={setItemHint} minHeightClass="min-h-[5rem]" placeholder="Strategy hint…" showPreview={Boolean(itemHint.trim())} />
            <MarkdownLatexField label="Reference answer (required)" help="Required quality gate. Include the actual result/reasoning needed for self-check." value={itemAnswerKey} onChange={setItemAnswerKey} required minHeightClass="min-h-[7rem]" placeholder="Complete reference answer…" showPreview={Boolean(itemAnswerKey.trim())} />
            <input type="password" className="input" placeholder="Change code (required)" value={changeCode} onChange={(e) => setChangeCode(e.target.value)} required />
            {error ? <p className="text-sm text-red-600">{error}</p> : null}
            {note ? <p className="text-sm text-emerald-700">{note}</p> : null}
            <button type="submit" className="btn-primary" disabled={saving || !itemAnswerKey.trim()}>{saving ? "Saving..." : "Save complete item"}</button>
          </form>
        </section>
      ) : (
        <section className="card space-y-3">
          <h2 className="font-semibold">Want another set like this?</h2>
          <p className="text-sm text-slate-600">Go back to Practice → this subject → use <strong>+ Add generated practice set</strong>. New content should include a complete answer and explanation before publication.</p>
          <ChangePanel mode="questionnaire" label="+ Add generated practice set" defaultSubject={quiz.subject} folderArea="practice" spaceKey={quiz.subject} />
        </section>
      )}
    </div>
  );
}
