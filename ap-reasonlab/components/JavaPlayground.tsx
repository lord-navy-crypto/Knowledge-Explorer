"use client";

import { useEffect, useMemo, useState } from "react";
import { javaDownloadFilename, normalizeJavaSource } from "@/lib/java-source";

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

const READY_MSG =
  "Writing editor ready. Edit on the left — Copy / Download anytime.\nPress Run when a remote Java runner is configured (PISTON_URL).";

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

  async function run() {
    setStatus("running");
    setNote("Contacting Java runner…");
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
        setNote("Editor works — remote Run not enabled yet. Use Download / local JDK for now.");
      } else if (data.ok) {
        setNote("Finished.");
      } else {
        setNote(data.status === "compile_error" ? "Compile error." : "Run finished with errors.");
      }
    } catch (err) {
      setOutput(String(err));
      setNote("Request failed.");
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
    const blob = new Blob([normalizeJavaSource(code)], { type: "text/x-java-source;charset=utf-8" });
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
            Online editor
          </p>
          <h2 className="text-xl font-bold">Java writing editor</h2>
          <p className="mt-1 text-sm text-slate-600">
            Same layout as Python / JS playgrounds. Draft auto-saves on this device. Run uses a
            remote runner when configured; until then, copy or download <code className="rounded bg-slate-100 px-1">{downloadName}</code>.
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
            onClick={() => void run()}
            disabled={status === "running"}
          >
            {status === "running" ? "Running…" : "Run"}
          </button>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <div className="min-w-0 space-y-3">
          <label className="block text-sm font-medium">
            Source
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
            Standard input <span className="font-normal text-slate-500">(for future Run / Scanner)</span>
            <textarea
              className="textarea mt-2 min-h-[4rem] font-mono text-xs"
              value={stdin}
              onChange={(event) => setStdin(event.target.value)}
              placeholder="Optional lines for System.in when the runner is enabled…"
              spellCheck={false}
            />
          </label>
        </div>
        <div className="min-w-0">
          <p className="text-sm font-medium">Output / status</p>
          <pre className="mt-2 h-[22rem] overflow-auto rounded-xl border border-slate-300 bg-slate-950 p-4 font-mono text-xs leading-relaxed text-emerald-100 whitespace-pre-wrap">
            {output}
          </pre>
        </div>
      </div>
      {note ? <p className="text-xs text-emerald-700">{note}</p> : null}
    </section>
  );
}
