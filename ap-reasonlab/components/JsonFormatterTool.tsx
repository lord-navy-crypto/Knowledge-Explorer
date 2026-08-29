"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import StudyToolShell from "@/components/StudyToolShell";
import RelatedToolboxLinks from "@/components/RelatedToolboxLinks";
import { getJsonPath, jsonStats, sortJsonKeys } from "@/lib/json-format";
import { appendToCodeBoard } from "@/lib/code-board-store";
import {
  consumeJsonFormatterHandoff,
  preloadEncodeDecode,
  preloadTextDiff,
} from "@/lib/payload-handoff";
import { openCodeEditorDesk } from "@/lib/code-draft-bridge";

const SAMPLE = `{
  "name": "Knowledge Explorer",
  "tools": ["code-board", "json-formatter"],
  "nested": { "ok": true }
}`;

export default function JsonFormatterTool({ embedded = false }: { embedded?: boolean }) {
  const router = useRouter();
  const [input, setInput] = useState(SAMPLE);
  const [indent, setIndent] = useState(2);
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [note, setNote] = useState("");
  const [path, setPath] = useState("nested.ok");

  useEffect(() => {
    const handed = consumeJsonFormatterHandoff();
    if (handed) {
      setInput(handed);
      setNote("Loaded from Forum or another tool.");
    }
  }, []);

  const valid = useMemo(() => {
    try {
      JSON.parse(input);
      return true;
    } catch {
      return false;
    }
  }, [input]);

  function parse(): unknown {
    return JSON.parse(input);
  }

  function run(action: "pretty" | "minify" | "validate" | "sort" | "path") {
    setError("");
    setNote("");
    try {
      const parsed = parse();
      if (action === "validate") {
        const stats = jsonStats(parsed);
        setOutput("Valid JSON ✓");
        setNote(`Type: ${stats.type} · keys: ${stats.keys} · depth: ${stats.depth}`);
        return;
      }
      if (action === "minify") {
        setOutput(JSON.stringify(parsed));
        setNote("Minified.");
        return;
      }
      if (action === "sort") {
        setOutput(JSON.stringify(sortJsonKeys(parsed), null, indent || 2));
        setNote("Keys sorted recursively.");
        return;
      }
      if (action === "path") {
        const hit = getJsonPath(parsed, path);
        if (hit === undefined) {
          setError(`No value at path “${path.trim() || "(empty)"}”.`);
          setOutput("");
          return;
        }
        setOutput(typeof hit === "string" ? hit : JSON.stringify(hit, null, indent || 2));
        setNote(`Extracted ${path.trim()}.`);
        return;
      }
      setOutput(JSON.stringify(parsed, null, indent || 2));
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

  function compareWithDiff() {
    const pretty = output || (() => {
      try {
        return JSON.stringify(JSON.parse(input), null, indent || 2);
      } catch {
        return input;
      }
    })();
    preloadTextDiff(input, pretty);
    router.push("/tools/text-diff");
  }

  function sendToEncode() {
    const payload = output || input;
    preloadEncodeDecode(payload, "base64-encode");
    openCodeEditorDesk(router, "encode");
  }

  function saveToBoard() {
    const payload = output || input;
    appendToCodeBoard({
      language: "javascript",
      title: "JSON snippet",
      code: payload,
      comment: "Saved from JSON formatter",
    });
    setNote("Saved to the code board on this editor.");
  }

  const body = (
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
                  {n === 0 ? "Compact-ish (2)" : n}
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
          <button type="button" className="btn-secondary" onClick={() => run("sort")}>
            Sort keys
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

        <div className="flex flex-wrap items-end gap-2">
          <label className="min-w-[12rem] flex-1 text-sm font-medium">
            Path (dot / brackets)
            <input
              className="input mt-1"
              value={path}
              onChange={(e) => setPath(e.target.value)}
              placeholder="nested.ok or tools[0]"
            />
          </label>
          <button type="button" className="btn-secondary" onClick={() => run("path")}>
            Extract path
          </button>
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
              {output || (error ? "" : "Pretty print, minify, sort keys, validate, or extract a path.")}
            </pre>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          <button type="button" className="btn-secondary text-sm" onClick={compareWithDiff}>
            Compare in text diff
          </button>
          <button type="button" className="btn-secondary text-sm" onClick={sendToEncode}>
            Send to Base64 encoder
          </button>
          <button type="button" className="btn-secondary text-sm" onClick={saveToBoard}>
            Save to code board
          </button>
        </div>

        {error ? <p className="text-sm text-red-600">{error}</p> : null}
        {note ? <p className="text-xs text-emerald-700">{note}</p> : null}
      </div>
  );

  if (embedded) return <div className="space-y-4">{body}</div>;

  return (
    <StudyToolShell
      title="JSON formatter"
      description="Validate, pretty-print, minify, sort keys, or pick a path — then compare, encode, or save the result."
      tip="Pair with Text diff to compare two JSON exports, or send Base64 to the encoder."
    >
      {body}
      <RelatedToolboxLinks clusterId="code-workbench" currentToolId="json-formatter" />
    </StudyToolShell>
  );
}
