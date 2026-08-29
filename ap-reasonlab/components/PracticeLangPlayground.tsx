"use client";

import { useEffect, useMemo, useState } from "react";
import PlaygroundExtras from "@/components/PlaygroundExtras";
import { checkPracticeSource } from "@/lib/practice-lang-check";
import type { PracticeLangSpec } from "@/data/practice-langs";
import type { PracticeExample } from "@/data/practice-lang-examples";

type Props = {
  spec: PracticeLangSpec;
  examples: PracticeExample[];
};

export default function PracticeLangPlayground({ spec, examples }: Props) {
  const starter = examples[0]?.code || "";
  const [code, setCode] = useState(starter);
  const [output, setOutput] = useState(spec.readyMessage);
  const [selected, setSelected] = useState(examples[0]?.id || "default");
  const [note, setNote] = useState("");
  const [status, setStatus] = useState<"idle" | "running">("idle");

  useEffect(() => {
    const stored = localStorage.getItem(spec.storageKey);
    if (stored) {
      setCode(stored);
      setSelected("draft");
    }
  }, [spec.storageKey]);

  useEffect(() => {
    localStorage.setItem(spec.storageKey, code);
  }, [code, spec.storageKey]);

  const exampleOptions = useMemo(
    () => [{ id: "draft", title: "Your draft" }, ...examples],
    [examples]
  );

  function practiceRun() {
    setStatus("running");
    const result = checkPracticeSource(code, { hashComments: spec.hashComments });
    const lines = [
      result.ok ? "Structure check passed." : "Structure check found issues:",
      ...result.issues.map((item) => `• ${item}`),
      "",
      ...result.notes,
    ];
    setOutput(lines.filter((line, i) => line !== "" || i === 0).join("\n"));
    setNote(result.ok ? "Practice Run finished (structure only)." : "Fix the listed issues, or download for a real toolchain.");
    setStatus("idle");
  }

  function loadExample(id: string) {
    setSelected(id);
    if (id === "draft") return;
    const found = examples.find((item) => item.id === id);
    if (!found) return;
    setCode(found.code);
    setNote(`Loaded “${found.title}”.`);
  }

  function resetStarter() {
    setCode(starter);
    setSelected(examples[0]?.id || "default");
    setOutput(spec.readyMessage);
    setNote("Reset to starter example.");
  }

  return (
    <section className="card space-y-4">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-brand-600">
            {spec.title} practice editor
          </p>
          <h2 className="text-xl font-bold">Write {spec.title} · Practice Run is a structure check</h2>
          <p className="mt-1 max-w-2xl text-sm text-slate-600">
            This is <strong>not</strong> an in-browser compiler. Practice Run balances braces and quotes.
            Download <code className="rounded bg-slate-100 px-1">{spec.filename}</code> for the official
            toolchain. Draft auto-saves. Post a fence to Forum to discuss it.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <label className="text-sm font-medium text-slate-600">
            Example
            <select
              className="input mt-1 min-w-[10rem]"
              value={selected}
              onChange={(event) => loadExample(event.target.value)}
            >
              {exampleOptions.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.title}
                </option>
              ))}
            </select>
          </label>
          <button type="button" className="btn-secondary self-end" onClick={resetStarter}>
            Reset
          </button>
          <button
            type="button"
            className="btn-primary self-end"
            onClick={practiceRun}
            disabled={status === "running"}
          >
            {status === "running" ? "Checking…" : "Practice Run"}
          </button>
          <PlaygroundExtras
            code={code}
            language={spec.id}
            filename={spec.filename}
            onRun={practiceRun}
          />
        </div>
      </div>

      <div className="rounded-xl border border-amber-200 bg-amber-50/80 px-3 py-2 text-xs text-amber-950">
        <strong>Honest practice mode:</strong> no fake {spec.title} runtime. Use Practice Run to catch
        unmatched braces before you download. Java and C# keep their existing JS stand-ins; this editor
        does not pretend to compile {spec.title}.
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <div className="min-w-0">
          <label className="block text-sm font-medium">
            {spec.title} source
            <textarea
              className="textarea mt-2 min-h-[22rem] font-mono text-xs leading-relaxed"
              value={code}
              onChange={(event) => {
                setCode(event.target.value);
                setSelected("draft");
                setNote("");
              }}
              spellCheck={false}
              aria-label={`${spec.title} source editor`}
            />
          </label>
        </div>
        <div className="min-w-0">
          <p className="text-sm font-medium">Practice Run output</p>
          <pre className="mt-2 h-[22rem] overflow-auto rounded-xl border border-slate-300 bg-slate-950 p-4 font-mono text-xs leading-relaxed text-emerald-100 whitespace-pre-wrap">
            {output}
          </pre>
        </div>
      </div>
      {note ? <p className="text-xs text-emerald-700">{note}</p> : null}
    </section>
  );
}
