"use client";

import { useEffect, useMemo, useState } from "react";
import RichContent from "@/components/RichContent";
import { usePlaygroundHandoffNotice } from "@/lib/use-playground-handoff";

type Example = { id: string; title: string; code: string };

type Props = {
  examples: Example[];
  storageKey?: string;
};

const DEFAULT_MD = `# Markdown lab

Write notes with **bold**, lists, and math: $a^2 + b^2 = c^2$.
`;

export default function MarkdownPlayground({
  examples,
  storageKey = "ke-code-markdown-draft",
}: Props) {
  const starter = examples[0]?.code || DEFAULT_MD;
  const [code, setCode] = useState(starter);
  const [selected, setSelected] = useState(examples[0]?.id || "default");
  const [note, setNote] = useState("");

  usePlaygroundHandoffNotice((msg) => setNote(msg));

  useEffect(() => {
    const stored = localStorage.getItem(storageKey);
    if (stored) {
      setCode(stored);
      setSelected("draft");
    }
  }, [storageKey]);

  useEffect(() => {
    localStorage.setItem(storageKey, code);
  }, [code, storageKey]);

  const exampleOptions = useMemo(
    () => [{ id: "draft", title: "Your draft" }, ...examples],
    [examples]
  );

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
    setNote("Reset to starter example.");
  }

  return (
    <section className="card space-y-4">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-brand-600">
            Online editor
          </p>
          <h2 className="text-xl font-bold">Markdown playground</h2>
          <p className="mt-1 text-sm text-slate-600">
            Live Markdown + KaTeX preview in the browser. Draft auto-saves on this device.
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
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <label className="block min-w-0 text-sm font-medium">
          Source
          <textarea
            className="textarea mt-2 min-h-[22rem] font-mono text-xs leading-relaxed"
            value={code}
            onChange={(event) => {
              setCode(event.target.value);
              setSelected("draft");
              setNote("");
            }}
            spellCheck={false}
            aria-label="Markdown source editor"
          />
        </label>
        <div className="min-w-0">
          <p className="text-sm font-medium">Preview</p>
          <div className="mt-2 h-[22rem] overflow-auto rounded-xl border border-slate-300 bg-white p-4">
            <RichContent className="prose prose-sm max-w-none text-slate-800">{code}</RichContent>
          </div>
        </div>
      </div>
      {note ? <p className="text-xs text-emerald-700">{note}</p> : null}
    </section>
  );
}
