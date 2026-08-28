"use client";

import { useMemo, useState } from "react";
import StudyToolShell from "@/components/StudyToolShell";
import RelatedToolboxLinks from "@/components/RelatedToolboxLinks";

const SAMPLE = `{
  "name": "Knowledge Explorer",
  "tools": ["code-board", "json-formatter"],
  "nested": { "ok": true }
}`;

export default function JsonFormatterTool() {
  const [input, setInput] = useState(SAMPLE);
  const [indent, setIndent] = useState(2);
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [note, setNote] = useState("");

  const valid = useMemo(() => {
    try {
      JSON.parse(input);
      return true;
    } catch {
      return false;
    }
  }, [input]);

  function run(action: "pretty" | "minify" | "validate") {
    setError("");
    setNote("");
    try {
      const parsed = JSON.parse(input);
      if (action === "validate") {
        setOutput("Valid JSON ✓");
        setNote(`Type: ${Array.isArray(parsed) ? "array" : typeof parsed}`);
        return;
      }
      if (action === "minify") {
        setOutput(JSON.stringify(parsed));
        setNote("Minified.");
        return;
      }
      setOutput(JSON.stringify(parsed, null, indent));
      setNote("Pretty-printed.");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Invalid JSON");
      setOutput("");
    }
  }

  async function copyOutput() {
    if (!output) return;
    try {
      await navigator.clipboard.writeText(output);
      setNote("Copied output.");
    } catch {
      setNote("Copy failed.");
    }
  }

  return (
    <StudyToolShell
      title="JSON formatter"
      description="Validate, pretty-print, or minify JSON in your browser — handy for API responses, config files, and code snippets."
      tip="Pair with Text diff when comparing two JSON exports, or save snippets in the code block adder."
    >
      <div className="card space-y-4">
        <div className="flex flex-wrap items-end gap-3">
          <label className="text-sm font-medium text-slate-600">
            Indent spaces
            <select
              className="input mt-1 min-w-[5rem]"
              value={indent}
              onChange={(e) => setIndent(Number(e.target.value))}
            >
              {[2, 4, 0].map((n) => (
                <option key={n} value={n}>
                  {n === 0 ? "Tab (2)" : n}
                </option>
              ))}
            </select>
          </label>
          <button type="button" className="btn-primary" onClick={() => run("pretty")}>
            Pretty print
          </button>
          <button type="button" className="btn-secondary" onClick={() => run("minify")}>
            Minify
          </button>
          <button type="button" className="btn-secondary" onClick={() => run("validate")}>
            Validate
          </button>
          <button type="button" className="btn-secondary" onClick={() => void copyOutput()} disabled={!output}>
            Copy output
          </button>
          <span className={`text-xs ${valid ? "text-emerald-700" : "text-amber-700"}`}>
            {valid ? "Syntax looks valid" : "Syntax error until fixed"}
          </span>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          <label className="block text-sm font-medium">
            Input JSON
            <textarea
              className="textarea mt-2 min-h-[16rem] font-mono text-xs"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              spellCheck={false}
            />
          </label>
          <div>
            <p className="text-sm font-medium">Output</p>
            <pre className="mt-2 min-h-[16rem] overflow-auto rounded-xl border border-slate-300 bg-slate-950 p-4 font-mono text-xs leading-relaxed text-emerald-100 whitespace-pre-wrap">
              {output || (error ? "" : "Press Pretty print, Minify, or Validate.")}
            </pre>
          </div>
        </div>

        {error ? <p className="text-sm text-red-600">{error}</p> : null}
        {note ? <p className="text-xs text-emerald-700">{note}</p> : null}
      </div>

      <RelatedToolboxLinks clusterId="code-workbench" currentToolId="json-formatter" />
    </StudyToolShell>
  );
}
