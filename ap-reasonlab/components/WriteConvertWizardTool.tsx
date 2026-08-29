"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import StudyToolShell from "@/components/StudyToolShell";
import RelatedToolboxLinks from "@/components/RelatedToolboxLinks";
import {
  WRITE_CONVERT_PATHS,
  WRITE_TOOL_QUICK_LINKS,
  type WriteConvertPath,
} from "@/data/write-convert-wizard";
import { consumeWriteToolHandoff, preloadWriteToolDraft } from "@/lib/write-tool-handoff";

export default function WriteConvertWizardTool() {
  const router = useRouter();
  const [path, setPath] = useState<WriteConvertPath>(WRITE_CONVERT_PATHS[0]!);
  const [stepIndex, setStepIndex] = useState(0);
  const [text, setText] = useState(`# Draft title

Write your essay or notes here, then send this text to each tool in the pipeline.

- Claim
- Evidence
- Reasoning
`);
  const [title, setTitle] = useState("My draft");
  const [notice, setNotice] = useState("");

  useEffect(() => {
    const handoff = consumeWriteToolHandoff("write-convert");
    if (handoff?.text) {
      setText(handoff.text);
      if (handoff.title) setTitle(handoff.title);
      setNotice("Loaded text returned from a writing tool.");
    }
  }, []);

  const step = path.steps[stepIndex];

  const goToTool = useCallback(
    (targetStep = step) => {
      if (!targetStep) return;
      preloadWriteToolDraft(targetStep.handoffTarget, text, title);
      setNotice(`Sent to ${targetStep.title} — opening tool…`);
      router.push(targetStep.toolHref);
    },
    [router, step, text, title]
  );

  return (
    <StudyToolShell
      title="Write & convert wizard"
      description="Batch workflow across writing tools — keep one draft here and hand it off to word count, Markdown cleanup, or PDF export."
      tip="Send a draft into a tool, edit there, then Return to wizard to continue the pipeline."
    >
      <div className="space-y-6">
        <section className="card space-y-3">
          <h2 className="text-lg font-semibold">Choose a pipeline</h2>
          <div className="flex flex-wrap gap-2">
            {WRITE_CONVERT_PATHS.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => {
                  setPath(p);
                  setStepIndex(0);
                }}
                className={
                  path.id === p.id
                    ? "rounded-xl bg-brand-600 px-4 py-2 text-left text-sm font-semibold text-white"
                    : "rounded-xl border border-slate-200 bg-white px-4 py-2 text-left text-sm font-semibold text-slate-700 hover:border-brand-300"
                }
              >
                {p.title}
              </button>
            ))}
          </div>
          <p className="text-sm text-slate-600">{path.blurb}</p>
        </section>

        <section className="card space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            {path.steps.map((s, idx) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setStepIndex(idx)}
                className={
                  idx === stepIndex
                    ? "rounded-full bg-brand-600 px-3 py-1 text-xs font-semibold text-white"
                    : "rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 hover:bg-slate-50"
                }
              >
                {idx + 1}. {s.title}
                {s.optional ? " (optional)" : ""}
              </button>
            ))}
          </div>

          {step ? (
            <div className="rounded-xl border border-brand-100 bg-brand-50/40 px-4 py-3">
              <h3 className="font-semibold text-slate-900">{step.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{step.blurb}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <button type="button" className="btn-primary text-sm" onClick={() => goToTool(step)}>
                  Send text & open {step.title}
                </button>
                <Link href={step.toolHref} className="btn-secondary text-sm">
                  Open tool only →
                </Link>
                {stepIndex < path.steps.length - 1 ? (
                  <button
                    type="button"
                    className="btn-ghost text-sm"
                    onClick={() => setStepIndex((i) => Math.min(path.steps.length - 1, i + 1))}
                  >
                    Next step →
                  </button>
                ) : null}
              </div>
            </div>
          ) : null}

          <label className="block text-sm font-medium">
            Draft title (optional)
            <input className="input mt-1 max-w-md" value={title} onChange={(e) => setTitle(e.target.value)} />
          </label>
          <label className="block text-sm font-medium">
            Shared draft text
            <textarea
              className="textarea mt-2 min-h-[16rem] font-mono text-xs"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </label>
          {notice ? <p className="text-xs text-emerald-700">{notice}</p> : null}
        </section>

        <section className="card space-y-2">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">All write tools</h2>
          <div className="flex flex-wrap gap-2">
            {WRITE_TOOL_QUICK_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700 hover:bg-brand-50 hover:text-brand-800"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </section>
      </div>

      <RelatedToolboxLinks clusterId="write-convert" currentToolId="write-convert" />
    </StudyToolShell>
  );
}
