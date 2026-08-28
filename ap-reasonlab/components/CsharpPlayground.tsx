"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import CodeLangOfficialStrip from "@/components/CodeLangOfficialStrip";
import { appendToCodeBoard } from "@/lib/code-board-store";
import { usePlaygroundHandoffNotice } from "@/lib/use-playground-handoff";
import { usePlaygroundShortcuts } from "@/lib/use-playground-shortcuts";
import { csharpDownloadFilename, normalizeCsharpSource } from "@/lib/csharp-source";
import {
  runCsharpPracticeJs,
  transpileCsharpPractice,
} from "@/lib/csharp-practice-transpile";

type Example = { id: string; title: string; code: string };

type Props = {
  examples: Example[];
  storageKey?: string;
};

const DEFAULT_CS = `using System;

class Program {
  static void Main() {
    int[] a = {1, 2, 3, 4};
    int sum = 0;
    foreach (int x in a) sum += x;
    Console.WriteLine(sum);
  }
}
`;

const READY_MSG = `C# training editor ready (same idea as Java Practice Run).

Practice Run maps a common intro C# subset → JavaScript in your browser
(not real .NET). Write C# · press Practice Run · see output.
Download .cs anytime for Visual Studio / dotnet.`;

export default function CsharpPlayground({
  examples,
  storageKey = "ke-code-csharp-draft",
}: Props) {
  const starter = examples[0]?.code || DEFAULT_CS;
  const [code, setCode] = useState(starter);
  const [stdin, setStdin] = useState("");
  const [output, setOutput] = useState(READY_MSG);
  const [selected, setSelected] = useState(examples[0]?.id || "default");
  const [note, setNote] = useState("");
  const [status, setStatus] = useState<"idle" | "running">("idle");
  const [copied, setCopied] = useState(false);

  usePlaygroundHandoffNotice((msg) => setNote(msg));

  usePlaygroundShortcuts({
    onRun: () => practiceRun(),
    onCopy: () => void copyCode(),
  });

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
  const downloadName = useMemo(() => csharpDownloadFilename(code), [code]);

  function practiceRun() {
    setStatus("running");
    setNote("");
    try {
      const result = transpileCsharpPractice(code, stdin);
      if (result.unsupported.length) {
        setOutput(
          [
            "Practice Run cannot handle:",
            ...result.unsupported.map((u) => `• ${u}`),
            "",
            "Keep writing C# for training, or Download .cs for real .NET.",
            result.warnings.length ? `\nNotes:\n${result.warnings.join("\n")}` : "",
          ].join("\n")
        );
        setNote("Unsupported for practice mode.");
        return;
      }
      const ran = runCsharpPracticeJs(result.js);
      const header = result.warnings.map((w) => `// ${w}`).join("\n");
      setOutput([header, "", ran.output].filter(Boolean).join("\n"));
      setNote(ran.ok ? "Practice Run finished (JS stand-in)." : "Practice Run error.");
    } catch (err) {
      setOutput(String(err));
      setNote("Practice Run failed.");
    } finally {
      setStatus("idle");
    }
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
    setOutput(READY_MSG);
    setNote("Reset to starter example.");
    setStdin("");
  }

  async function copyCode() {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1500);
  }

  function downloadCs() {
    const blob = new Blob([normalizeCsharpSource(code)], {
      type: "text/plain;charset=utf-8",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = downloadName;
    a.click();
    URL.revokeObjectURL(url);
    setNote(`Downloaded ${downloadName}.`);
  }

  return (
    <section className="card space-y-4">
      <CodeLangOfficialStrip langId="csharp" compact />
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-brand-600">
            C# training editor
          </p>
          <h2 className="text-xl font-bold">Write C# · Practice Run in browser</h2>
          <p className="mt-1 max-w-2xl text-sm text-slate-600">
            Same approach as Java: students write <strong>C#</strong>;{" "}
            <strong>Practice Run</strong> maps an intro subset to JavaScript. Not real .NET — great
            for training. Download{" "}
            <code className="rounded bg-slate-100 px-1">{downloadName}</code> for Visual Studio /
            <code className="rounded bg-slate-100 px-1">dotnet</code>.
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
          <button type="button" className="btn-secondary self-end" onClick={() => void copyCode()}>
            {copied ? "Copied" : "Copy"}
          </button>
          <button type="button" className="btn-secondary self-end" onClick={downloadCs}>
            Download .cs
          </button>
          <button
            type="button"
            className="btn-secondary self-end"
            onClick={() => {
              appendToCodeBoard({
                language: "csharp",
                title: downloadName.replace(/\.cs$/, ""),
                code,
                comment: "Saved from C# playground",
              });
              setNote("Saved to code block adder.");
            }}
          >
            Save to code board
          </button>
          <Link href="/tools/code-board" className="self-end text-xs text-brand-600 hover:underline">
            Open adder →
          </Link>
          <button
            type="button"
            className="btn-primary self-end"
            onClick={practiceRun}
            disabled={status === "running"}
          >
            {status === "running" ? "Running…" : "Practice Run"}
          </button>
        </div>
      </div>

      <div className="rounded-xl border border-sky-200 bg-sky-50/80 px-3 py-2 text-xs text-sky-950">
        <strong>Why C# here:</strong> among the C-series, intro C# fake-runs about as well as Java
        (console, arrays, loops). Raw C/C++ fake-runs are weaker because of pointers and undefined
        behavior — those stay Download-first for now.
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <div className="min-w-0 space-y-3">
          <label className="block text-sm font-medium">
            C# source
            <textarea
              className="textarea mt-2 min-h-[18rem] font-mono text-xs leading-relaxed"
              value={code}
              onChange={(event) => {
                setCode(event.target.value);
                setSelected("draft");
                setNote("");
              }}
              spellCheck={false}
              aria-label="C# source editor"
            />
          </label>
          <label className="block text-sm font-medium">
            Standard input <span className="font-normal text-slate-500">(ReadLine)</span>
            <textarea
              className="textarea mt-2 min-h-[4rem] font-mono text-xs"
              value={stdin}
              onChange={(event) => setStdin(event.target.value)}
              placeholder={"One value per line, e.g.\n3\n5"}
              spellCheck={false}
            />
          </label>
        </div>
        <div className="min-w-0">
          <p className="text-sm font-medium">Output</p>
          <pre className="mt-2 h-[22rem] overflow-auto rounded-xl border border-slate-300 bg-slate-950 p-4 font-mono text-xs leading-relaxed text-emerald-100 whitespace-pre-wrap">
            {output}
          </pre>
        </div>
      </div>
      {note ? <p className="text-xs text-emerald-700">{note}</p> : null}
    </section>
  );
}
