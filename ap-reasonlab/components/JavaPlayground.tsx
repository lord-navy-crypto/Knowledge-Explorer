"use client";

import { useEffect, useMemo, useState } from "react";
import PlaygroundExtras from "@/components/PlaygroundExtras";
import { javaDownloadFilename, normalizeJavaSource } from "@/lib/java-source";
import {
  runJavaPracticeJs,
  transpileJavaPractice,
} from "@/lib/java-practice-transpile";

type Example = { id: string; title: string; code: string };

type Props = {
  examples: Example[];
  storageKey?: string;
};

const DEFAULT_JAVA = `public class Main {
  public static void main(String[] args) {
    int[] a = {1, 2, 3, 4};
    int sum = 0;
    for (int x : a) sum += x;
    System.out.println("sum = " + sum);
  }
}
`;

const READY_MSG = `Java training editor ready.

Practice Run converts a common CSA Java subset → JavaScript in your browser
(so you get a Java-like experience without a real JVM).

Write Java · press Practice Run · see output.
Copy / Download .java anytime for IntelliJ / real JDK.`;

export default function JavaPlayground({
  examples,
  storageKey = "ke-code-java-draft",
}: Props) {
  const starter = examples[0]?.code || DEFAULT_JAVA;
  const [code, setCode] = useState(starter);
  const [stdin, setStdin] = useState("");
  const [output, setOutput] = useState(READY_MSG);
  const [selected, setSelected] = useState(examples[0]?.id || "default");
  const [note, setNote] = useState("");
  const [status, setStatus] = useState<"idle" | "running">("idle");
  const [copied, setCopied] = useState(false);

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

  const downloadName = useMemo(() => javaDownloadFilename(code), [code]);

  function practiceRun() {
    setStatus("running");
    setNote("");
    try {
      const result = transpileJavaPractice(code, stdin);
      if (result.unsupported.length) {
        setOutput(
          [
            "Practice Run cannot handle:",
            ...result.unsupported.map((u) => `• ${u}`),
            "",
            "Keep writing Java for training, or Download .java for a real JDK.",
            result.warnings.length ? `\nNotes:\n${result.warnings.join("\n")}` : "",
          ].join("\n")
        );
        setNote("Unsupported for practice mode.");
        return;
      }
      const ran = runJavaPracticeJs(result.js);
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

  async function remoteRun() {
    setStatus("running");
    setNote("Contacting optional real Java runner…");
    setOutput("Running…");
    try {
      const res = await fetch("/api/code/run-java", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: normalizeJavaSource(code), stdin }),
      });
      const data = (await res.json()) as {
        ok?: boolean;
        status?: string;
        output?: string;
      };
      setOutput(data.output || "(no output)");
      if (data.status === "not_configured") {
        setNote("Real JVM runner not configured — use Practice Run for training.");
      } else if (data.ok) {
        setNote("Real runner finished.");
      } else {
        setNote("Real runner reported errors.");
      }
    } catch (err) {
      setOutput(String(err));
      setNote("Remote request failed.");
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

  function downloadJava() {
    const blob = new Blob([normalizeJavaSource(code)], {
      type: "text/x-java-source;charset=utf-8",
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
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-brand-600">
            Java training editor
          </p>
          <h2 className="text-xl font-bold">Write Java · Practice Run in browser</h2>
          <p className="mt-1 max-w-2xl text-sm text-slate-600">
            Students write <strong>Java</strong> for training.{" "}
            <strong>Practice Run</strong> accurately maps a common CSA subset to JavaScript and
            runs it here — no real JVM needed. Draft auto-saves. Download{" "}
            <code className="rounded bg-slate-100 px-1">{downloadName}</code> for real Java later.
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
          <button type="button" className="btn-secondary self-end" onClick={downloadJava}>
            Download .java
          </button>
          <button
            type="button"
            className="btn-primary self-end"
            onClick={practiceRun}
            disabled={status === "running"}
          >
            {status === "running" ? "Running…" : "Practice Run"}
          </button>
          <PlaygroundExtras code={code} language="java" filename="Main.java" onRun={practiceRun} />
          <button
            type="button"
            className="btn-secondary self-end"
            onClick={() => void remoteRun()}
            disabled={status === "running"}
            title="Optional real JVM via PISTON_URL"
          >
            Real Java
          </button>
        </div>
      </div>

      <div className="rounded-xl border border-amber-200 bg-amber-50/80 px-3 py-2 text-xs text-amber-950">
        <strong>Practice mode:</strong> great for loops, arrays,{" "}
        <code className="rounded bg-white/80 px-1">System.out.println</code>,{" "}
        <code className="rounded bg-white/80 px-1">Scanner</code>, and main-method drills. Not full
        Java (no ArrayList / inheritance / files). That is intentional for training without a
        server JVM.
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <div className="min-w-0 space-y-3">
          <label className="block text-sm font-medium">
            Java source
            <textarea
              className="textarea mt-2 min-h-[18rem] font-mono text-xs leading-relaxed"
              value={code}
              onChange={(event) => {
                setCode(event.target.value);
                setSelected("draft");
                setNote("");
              }}
              spellCheck={false}
              aria-label="Java source editor"
            />
          </label>
          <label className="block text-sm font-medium">
            Standard input <span className="font-normal text-slate-500">(Scanner)</span>
            <textarea
              className="textarea mt-2 min-h-[4rem] font-mono text-xs"
              value={stdin}
              onChange={(event) => setStdin(event.target.value)}
              placeholder="Optional tokens/lines for Scanner…"
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
