"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import PlaygroundExtras from "@/components/PlaygroundExtras";
import { usePlaygroundHandoffNotice } from "@/lib/use-playground-handoff";
import { usePlaygroundShortcuts } from "@/lib/use-playground-shortcuts";
import { copySource } from "@/lib/playground-export";

type Example = { id: string; title: string; code: string };

type Props = {
  examples: Example[];
  storageKey?: string;
  title?: string;
  description?: string;
};

const DEFAULT_JS = `const nums = [3, 7, 2, 9];
console.log("numbers:", nums);
console.log("average:", nums.reduce((a, b) => a + b, 0) / nums.length);
`;

function buildRunnerSrcDoc(userCode: string): string {
  const encoded = JSON.stringify(userCode);
  return `<!DOCTYPE html><html><head><meta charset="UTF-8" /></head><body>
<script>
(function () {
  const lines = [];
  const send = (payload) => parent.postMessage(Object.assign({ source: "ke-js-playground" }, payload), "*");
  const fmt = (v) => {
    try {
      if (typeof v === "string") return v;
      if (typeof v === "undefined") return "undefined";
      if (typeof v === "function") return "[function]";
      return JSON.stringify(v);
    } catch (_) {
      return String(v);
    }
  };
  ["log", "info", "warn", "error"].forEach((method) => {
    const orig = console[method].bind(console);
    console[method] = (...args) => {
      lines.push(args.map(fmt).join(" "));
      orig(...args);
    };
  });
  try {
    const userCode = ${encoded};
    const runner = new Function(userCode);
    const result = runner();
    if (typeof result !== "undefined") lines.push("→ " + fmt(result));
    send({ ok: true, output: lines.join("\\n") || "(no console output)" });
  } catch (err) {
    lines.push(String(err && err.stack ? err.stack : err));
    send({ ok: false, output: lines.join("\\n") });
  }
})();
</script></body></html>`;
}

export default function JsPlayground({
  examples,
  storageKey = "ke-code-js-draft",
  title = "JavaScript playground",
  description = "Runs in a sandboxed iframe in your browser — no server. Draft auto-saves on this device.",
}: Props) {
  const starter = examples[0]?.code || DEFAULT_JS;
  const [code, setCode] = useState(starter);
  const [output, setOutput] = useState("Ready. Press Run to execute JavaScript.");
  const [selected, setSelected] = useState(examples[0]?.id || "default");
  const [note, setNote] = useState("");
  const [running, setRunning] = useState(false);
  const [srcDoc, setSrcDoc] = useState("");
  const runId = useRef(0);

  usePlaygroundHandoffNotice((msg) => setNote(msg));

  usePlaygroundShortcuts({
    onRun: () => run(),
    onCopy: () => {
      void copySource(code).then((ok) => setNote(ok ? "Source copied." : "Copy failed."));
    },
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

  useEffect(() => {
    function onMessage(event: MessageEvent) {
      const data = event.data;
      if (!data || data.source !== "ke-js-playground") return;
      setRunning(false);
      setOutput(data.output || "");
      setNote(data.ok ? "Finished." : "Runtime error.");
    }
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  const exampleOptions = useMemo(
    () => [{ id: "draft", title: "Your draft" }, ...examples],
    [examples]
  );

  function run() {
    runId.current += 1;
    setRunning(true);
    setNote("Running…");
    setOutput("Running…");
    setSrcDoc(buildRunnerSrcDoc(code));
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
    setOutput("Ready. Press Run to execute JavaScript.");
    setNote("Reset to starter example.");
    setSrcDoc("");
  }

  return (
    <section className="card space-y-4">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-brand-600">
            Online editor
          </p>
          <h2 className="text-xl font-bold">{title}</h2>
          <p className="mt-1 text-sm text-slate-600">{description}</p>
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
          <PlaygroundExtras code={code} language="javascript" filename="playground.js" onNote={setNote} />
          <button type="button" className="btn-primary self-end" onClick={run} disabled={running}>
            {running ? "Running…" : "Run"}
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
            aria-label="JavaScript source editor"
          />
        </label>
        <div className="min-w-0">
          <p className="text-sm font-medium">Console output</p>
          <pre className="mt-2 h-[22rem] overflow-auto rounded-xl border border-slate-300 bg-slate-950 p-4 font-mono text-xs leading-relaxed text-emerald-100 whitespace-pre-wrap">
            {output}
          </pre>
        </div>
      </div>
      {note ? <p className="text-xs text-emerald-700">{note}</p> : null}
      {srcDoc ? (
        <iframe title="JavaScript runner" className="hidden" sandbox="allow-scripts" srcDoc={srcDoc} />
      ) : null}
    </section>
  );
}
