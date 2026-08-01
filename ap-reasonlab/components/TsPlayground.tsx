"use client";

import { useEffect, useMemo, useState } from "react";

type Example = { id: string; title: string; code: string };

type Props = {
  examples: Example[];
  storageKey?: string;
};

type TsApi = {
  transpile: (
    input: string,
    compilerOptions?: { target?: number; module?: number }
  ) => string;
  ScriptTarget: { ES2019: number };
  ModuleKind: { ESNext: number };
};

declare global {
  interface Window {
    ts?: TsApi;
  }
}

const DEFAULT_TS = `function average(nums: number[]): number {
  return nums.reduce((a, b) => a + b, 0) / nums.length;
}
console.log(average([3, 7, 2, 9]));
`;

function loadTypescript(): Promise<TsApi> {
  if (typeof window === "undefined") return Promise.reject(new Error("No window"));
  if (window.ts) return Promise.resolve(window.ts);
  return new Promise((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>("script[data-ke-typescript]");
    if (existing) {
      existing.addEventListener("load", () =>
        window.ts ? resolve(window.ts) : reject(new Error("TypeScript missing after load"))
      );
      existing.addEventListener("error", () => reject(new Error("Failed to load TypeScript")));
      return;
    }
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/typescript@5.7.3/lib/typescript.js";
    script.async = true;
    script.dataset.keTypescript = "1";
    script.onload = () =>
      window.ts ? resolve(window.ts) : reject(new Error("TypeScript global missing"));
    script.onerror = () => reject(new Error("Failed to load TypeScript from CDN"));
    document.head.appendChild(script);
  });
}

function buildRunnerSrcDoc(userCode: string): string {
  const encoded = JSON.stringify(userCode);
  return `<!DOCTYPE html><html><head><meta charset="UTF-8" /></head><body>
<script>
(function () {
  const lines = [];
  const send = (payload) => parent.postMessage(Object.assign({ source: "ke-ts-playground" }, payload), "*");
  const fmt = (v) => {
    try {
      if (typeof v === "string") return v;
      if (typeof v === "undefined") return "undefined";
      return JSON.stringify(v);
    } catch (_) {
      return String(v);
    }
  };
  console.log = (...args) => { lines.push(args.map(fmt).join(" ")); };
  console.info = console.log;
  console.warn = console.log;
  console.error = console.log;
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

export default function TsPlayground({
  examples,
  storageKey = "ke-code-ts-draft",
}: Props) {
  const starter = examples[0]?.code || DEFAULT_TS;
  const [code, setCode] = useState(starter);
  const [output, setOutput] = useState("Ready. Press Run to transpile TypeScript and execute.");
  const [selected, setSelected] = useState(examples[0]?.id || "default");
  const [note, setNote] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "running">("idle");
  const [srcDoc, setSrcDoc] = useState("");
  const [emitted, setEmitted] = useState("");

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
      if (!data || data.source !== "ke-ts-playground") return;
      setStatus("idle");
      setOutput(data.output || "");
      setNote(data.ok ? "Transpiled + finished." : "Runtime error after transpile.");
    }
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  const exampleOptions = useMemo(
    () => [{ id: "draft", title: "Your draft" }, ...examples],
    [examples]
  );

  async function run() {
    setStatus("loading");
    setNote("Loading TypeScript compiler…");
    try {
      const ts = await loadTypescript();
      setStatus("running");
      const js = ts.transpile(code, {
        target: ts.ScriptTarget.ES2019,
        module: ts.ModuleKind.ESNext,
      });
      setEmitted(js);
      setSrcDoc(buildRunnerSrcDoc(js));
      setOutput("Running…");
      setNote("Running emitted JavaScript…");
    } catch (err) {
      setStatus("idle");
      setOutput(String(err));
      setNote("Compile / load failed.");
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
    setOutput("Ready. Press Run to transpile TypeScript and execute.");
    setNote("Reset to starter example.");
    setSrcDoc("");
    setEmitted("");
  }

  return (
    <section className="card space-y-4">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-brand-600">
            Online editor
          </p>
          <h2 className="text-xl font-bold">TypeScript playground</h2>
          <p className="mt-1 text-sm text-slate-600">
            Transpiles with the TypeScript compiler in your browser, then runs the JS safely in a
            sandbox. Draft auto-saves on this device.
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
            onClick={() => void run()}
            disabled={status !== "idle"}
          >
            {status === "loading" ? "Loading…" : status === "running" ? "Running…" : "Run"}
          </button>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <label className="block min-w-0 text-sm font-medium">
          TypeScript source
          <textarea
            className="textarea mt-2 min-h-[22rem] font-mono text-xs leading-relaxed"
            value={code}
            onChange={(event) => {
              setCode(event.target.value);
              setSelected("draft");
              setNote("");
            }}
            spellCheck={false}
            aria-label="TypeScript source editor"
          />
        </label>
        <div className="min-w-0 space-y-3">
          <div>
            <p className="text-sm font-medium">Console output</p>
            <pre className="mt-2 h-[12rem] overflow-auto rounded-xl border border-slate-300 bg-slate-950 p-4 font-mono text-xs leading-relaxed text-emerald-100 whitespace-pre-wrap">
              {output}
            </pre>
          </div>
          <div>
            <p className="text-sm font-medium">Emitted JavaScript</p>
            <pre className="mt-2 h-[8.5rem] overflow-auto rounded-xl border border-slate-200 bg-slate-50 p-3 font-mono text-[11px] leading-relaxed text-slate-700 whitespace-pre-wrap">
              {emitted || "(run to see emitted JS)"}
            </pre>
          </div>
        </div>
      </div>
      {note ? <p className="text-xs text-emerald-700">{note}</p> : null}
      {srcDoc ? (
        <iframe title="TypeScript runner" className="hidden" sandbox="allow-scripts" srcDoc={srcDoc} />
      ) : null}
    </section>
  );
}
