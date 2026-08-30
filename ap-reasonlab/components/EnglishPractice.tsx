"use client";

import { useRef, useState } from "react";
import type { EnglishPracticeQuestion } from "@/data/english-content";
import RichContent from "@/components/RichContent";
import { englishStimulusLabel } from "@/lib/english-exam-format";
import type { ResponseMode } from "@/lib/types";

type Props = {
  questions: EnglishPracticeQuestion[];
  answers?: Record<string, number>;
  onAnswer?: (answers: Record<string, number>) => void;
};

type SpeechRec = {
  lang: string;
  continuous: boolean;
  interimResults: boolean;
  onresult: ((ev: { results: ArrayLike<{ 0: { transcript: string }; isFinal: boolean }> }) => void) | null;
  onerror: (() => void) | null;
  onend: (() => void) | null;
  start: () => void;
  stop: () => void;
};

function getSpeechRecognition(): (new () => SpeechRec) | null {
  if (typeof window === "undefined") return null;
  const w = window as Window & {
    SpeechRecognition?: new () => SpeechRec;
    webkitSpeechRecognition?: new () => SpeechRec;
  };
  return w.SpeechRecognition || w.webkitSpeechRecognition || null;
}

function modeLabel(mode: ResponseMode): string {
  switch (mode) {
    case "single_choice": return "Selected response";
    case "student_produced": return "Student-produced response";
    case "sentence_build": return "Build a sentence";
    case "email": return "Write an email";
    case "academic_discussion": return "Academic discussion";
    case "spoken": return "Spoken response";
    case "listen_repeat": return "Listen & repeat";
    case "essay": return "Essay";
    case "extended_response": return "Extended response";
    default: return "Short response";
  }
}

function responsePlaceholder(mode: ResponseMode): string {
  if (mode === "email") return "Write your complete email here…";
  if (mode === "academic_discussion") return "Write your discussion response here…";
  if (mode === "sentence_build") return "Build the complete sentence…";
  if (mode === "student_produced") return "Enter your answer…";
  if (mode === "spoken" || mode === "listen_repeat") return "Your spoken response transcript will appear here, or type what you said…";
  if (mode === "essay" || mode === "extended_response") return "Write your response here…";
  return "Write your response…";
}

export default function EnglishPractice({ questions, answers: controlled, onAnswer }: Props) {
  const isControlled = controlled != null && onAnswer != null;
  const [responses, setResponses] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState<Record<string, boolean>>({});
  const [listeningId, setListeningId] = useState<string | null>(null);
  const recRef = useRef<SpeechRec | null>(null);

  function select(questionId: string, choiceIndex: number) {
    if (!onAnswer) return;
    onAnswer({ ...(controlled || {}), [questionId]: choiceIndex });
  }

  function setResponse(questionId: string, value: string) {
    setResponses((prev) => ({ ...prev, [questionId]: value }));
    setSubmitted((prev) => ({ ...prev, [questionId]: false }));
  }

  function stopMic() {
    try { recRef.current?.stop(); } catch { /* ignore */ }
    recRef.current = null;
    setListeningId(null);
  }

  function startMic(questionId: string) {
    const Ctor = getSpeechRecognition();
    if (!Ctor) return;
    stopMic();
    const rec = new Ctor();
    rec.lang = "en-US";
    rec.continuous = true;
    rec.interimResults = true;
    rec.onresult = (ev) => {
      let text = "";
      for (let i = 0; i < ev.results.length; i += 1) text += `${ev.results[i][0].transcript} `;
      setResponse(questionId, text.trim());
    };
    rec.onerror = () => setListeningId(null);
    rec.onend = () => setListeningId(null);
    recRef.current = rec;
    try {
      rec.start();
      setListeningId(questionId);
    } catch {
      setListeningId(null);
    }
  }

  function playPrompt(text: string) {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.rate = 0.92;
    window.speechSynthesis.speak(utterance);
  }

  return (
    <div className="space-y-4">
      {questions.map((question, questionIndex) => {
        const selected = isControlled ? controlled[question.id] : undefined;
        const answered = selected !== undefined;
        const passage = question.passage?.trim();
        const mode = question.responseMode || "single_choice";
        const productive = mode !== "single_choice";
        const response = responses[question.id] || "";
        const hasSubmitted = Boolean(submitted[question.id]);
        const canMic = typeof window !== "undefined" && Boolean(getSpeechRecognition());

        return (
          <article key={question.id} className="card space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="badge">Practice {questionIndex + 1}</span>
              <span className="text-xs font-medium text-slate-500">{question.skill}</span>
              <span className={question.authenticity === "exam_authentic" ? "badge" : "badge-generated"}>
                {question.authenticity === "exam_authentic" ? "Exam-style" : "Skill drill"}
              </span>
              <span className="badge">{modeLabel(mode)}</span>
            </div>

            {passage ? (
              <figure className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                <figcaption className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                  {englishStimulusLabel(question.skill)}
                </figcaption>
                <blockquote className="mt-2 whitespace-pre-wrap text-sm leading-6 text-slate-800">
                  {passage}
                </blockquote>
              </figure>
            ) : null}

            <RichContent className="font-medium leading-7 text-slate-900">{question.prompt}</RichContent>

            {!productive ? (
              <div className="grid gap-2">
                {question.choices.map((choice, choiceIndex) => {
                  const isSelected = selected === choiceIndex;
                  const isCorrect = answered && choiceIndex === question.answer;
                  return (
                    <button
                      key={`${question.id}-${choiceIndex}`}
                      type="button"
                      onClick={() => select(question.id, choiceIndex)}
                      className={`rounded-xl border px-4 py-3 text-left text-sm transition ${
                        isCorrect
                          ? "border-emerald-300 bg-emerald-50 text-emerald-950"
                          : isSelected
                            ? "border-brand-400 bg-brand-50 text-brand-950"
                            : "border-slate-200 bg-white hover:border-brand-300"
                      }`}
                      aria-pressed={isSelected}
                    >
                      <span className="mr-2 font-semibold">{String.fromCharCode(65 + choiceIndex)}.</span>
                      <RichContent className="inline [&>p]:inline">{choice}</RichContent>
                    </button>
                  );
                })}
              </div>
            ) : (
              <div className="space-y-3 rounded-xl border border-brand-100 bg-brand-50/30 p-4">
                {(mode === "spoken" || mode === "listen_repeat") ? (
                  <div className="flex flex-wrap gap-2">
                    <button
                      type="button"
                      className="btn-secondary text-sm"
                      onClick={() => playPrompt(mode === "listen_repeat" ? (passage || question.prompt) : (passage || question.prompt))}
                    >
                      ▶ Play prompt
                    </button>
                    <button
                      type="button"
                      className="btn-primary text-sm"
                      disabled={!canMic}
                      onClick={() => listeningId === question.id ? stopMic() : startMic(question.id)}
                    >
                      {listeningId === question.id ? "Stop response" : "Record spoken response"}
                    </button>
                    {!canMic ? <span className="self-center text-xs text-amber-700">Mic transcription needs a browser with SpeechRecognition support; typing is still available.</span> : null}
                  </div>
                ) : null}

                {mode === "student_produced" || mode === "sentence_build" ? (
                  <input
                    className="input"
                    value={response}
                    onChange={(e) => setResponse(question.id, e.target.value)}
                    placeholder={responsePlaceholder(mode)}
                    aria-label={`${modeLabel(mode)} answer`}
                  />
                ) : (
                  <textarea
                    className="input min-h-[9rem]"
                    value={response}
                    onChange={(e) => setResponse(question.id, e.target.value)}
                    placeholder={responsePlaceholder(mode)}
                    aria-label={`${modeLabel(mode)} answer`}
                  />
                )}

                <div className="flex flex-wrap items-center gap-2">
                  <button
                    type="button"
                    className="btn-primary text-sm"
                    disabled={!response.trim()}
                    onClick={() => setSubmitted((prev) => ({ ...prev, [question.id]: true }))}
                  >
                    Submit response
                  </button>
                  <span className="text-xs text-slate-500">Reference answer and scoring criteria stay hidden until you submit an attempt.</span>
                </div>
              </div>
            )}

            {!productive && answered ? (
              <div
                role="status"
                className={`rounded-xl px-4 py-3 text-sm ${selected === question.answer ? "bg-emerald-50 text-emerald-900" : "bg-amber-50 text-amber-950"}`}
              >
                <strong>
                  {selected === question.answer
                    ? "Correct."
                    : `Review: the best answer is ${String.fromCharCode(65 + question.answer)}.`}
                </strong>{" "}
                <RichContent className="mt-1 inline [&>p]:inline">{question.explanation}</RichContent>
              </div>
            ) : null}

            {productive && hasSubmitted ? (
              <div className="space-y-3 rounded-xl border border-emerald-200 bg-emerald-50/70 px-4 py-3 text-sm text-slate-800">
                <div>
                  <p className="font-semibold text-emerald-900">Reference response</p>
                  <RichContent className="mt-1">{question.referenceAnswer || question.explanation}</RichContent>
                </div>
                {question.scoringGuide?.length ? (
                  <div>
                    <p className="font-semibold text-emerald-900">Scoring criteria</p>
                    <ul className="mt-1 list-disc space-y-1 pl-5">
                      {question.scoringGuide.map((criterion) => <li key={criterion}>{criterion}</li>)}
                    </ul>
                  </div>
                ) : null}
                <p className="text-xs text-emerald-800">Use the model as a comparison target, not wording to memorize. Equivalent reasoning or language can also be strong.</p>
              </div>
            ) : null}
          </article>
        );
      })}
    </div>
  );
}
