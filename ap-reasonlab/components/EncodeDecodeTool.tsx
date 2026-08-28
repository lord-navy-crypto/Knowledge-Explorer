"use client";

import { useMemo, useState } from "react";
import StudyToolShell from "@/components/StudyToolShell";
import RelatedToolboxLinks from "@/components/RelatedToolboxLinks";
import {
  decodeBase64,
  decodeUri,
  decodeUriComponent,
  encodeBase64,
  encodeUri,
  encodeUriComponent,
} from "@/lib/encode-decode";

type Mode = "base64-encode" | "base64-decode" | "url-encode" | "url-decode" | "uri-encode" | "uri-decode";

const MODES: { id: Mode; label: string }[] = [
  { id: "base64-encode", label: "Base64 encode" },
  { id: "base64-decode", label: "Base64 decode" },
  { id: "url-encode", label: "URL encode (component)" },
  { id: "url-decode", label: "URL decode (component)" },
  { id: "uri-encode", label: "URI encode (full)" },
  { id: "uri-decode", label: "URI decode (full)" },
];

export default function EncodeDecodeTool() {
  const [input, setInput] = useState("Hello, Knowledge Explorer! 🎓");
  const [mode, setMode] = useState<Mode>("base64-encode");
  const [note, setNote] = useState("");

  const result = useMemo(() => {
    try {
      if (mode === "base64-encode") return { out: encodeBase64(input), err: "" };
      if (mode === "base64-decode") return { out: decodeBase64(input), err: "" };
      if (mode === "url-encode") return { out: encodeUriComponent(input), err: "" };
      if (mode === "url-decode") return { out: decodeUriComponent(input), err: "" };
      if (mode === "uri-encode") return { out: encodeUri(input), err: "" };
      return { out: decodeUri(input), err: "" };
    } catch (err) {
      return { out: "", err: err instanceof Error ? err.message : "Conversion failed" };
    }
  }, [input, mode]);

  async function copyOutput() {
    if (!result.out) return;
    try {
      await navigator.clipboard.writeText(result.out);
      setNote("Copied output.");
    } catch {
      setNote("Copy failed.");
    }
  }

  function useOutputAsInput() {
    if (!result.out) return;
    setInput(result.out);
    setNote("Output moved to input.");
  }

  return (
    <StudyToolShell
      title="Base64 & URL encoder"
      description="Encode or decode Base64 and URL/URI strings locally — useful for API tokens, query params, and data URLs."
      tip="Never paste private passwords or live API keys into shared screenshots. Processing stays in this browser."
    >
      <div className="card space-y-4">
        <div className="flex flex-wrap gap-2">
          {MODES.map((m) => (
            <button
              key={m.id}
              type="button"
              className={mode === m.id ? "btn-primary text-xs" : "btn-secondary text-xs"}
              onClick={() => setMode(m.id)}
            >
              {m.label}
            </button>
          ))}
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          <label className="block text-sm font-medium">
            Input
            <textarea
              className="textarea mt-2 min-h-[14rem] font-mono text-xs"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              spellCheck={false}
            />
          </label>
          <div>
            <p className="text-sm font-medium">Output</p>
            <textarea
              className="textarea mt-2 min-h-[14rem] font-mono text-xs"
              readOnly
              value={result.err ? "" : result.out}
              spellCheck={false}
            />
            {result.err ? <p className="mt-2 text-sm text-red-600">{result.err}</p> : null}
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          <button type="button" className="btn-secondary text-sm" onClick={() => void copyOutput()} disabled={!result.out}>
            Copy output
          </button>
          <button type="button" className="btn-secondary text-sm" onClick={useOutputAsInput} disabled={!result.out}>
            Use output as input
          </button>
        </div>
        {note ? <p className="text-xs text-emerald-700">{note}</p> : null}
      </div>

      <RelatedToolboxLinks clusterId="code-workbench" currentToolId="encode-decode" />
    </StudyToolShell>
  );
}
