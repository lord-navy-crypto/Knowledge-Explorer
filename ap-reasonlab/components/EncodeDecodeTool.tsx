"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import StudyToolShell from "@/components/StudyToolShell";
import RelatedToolboxLinks from "@/components/RelatedToolboxLinks";
import {
  decodeBase64,
  decodeHex,
  decodeHtmlEntities,
  decodeUri,
  decodeUriComponent,
  encodeBase64,
  encodeHex,
  encodeHtmlEntities,
  encodeUri,
  encodeUriComponent,
  peekJwt,
} from "@/lib/encode-decode";
import {
  consumeEncodeDecodeHandoff,
  preloadJsonFormatter,
  type EncodeHandoffMode,
} from "@/lib/payload-handoff";
import { openCodeEditorDesk } from "@/lib/code-draft-bridge";

type Mode = EncodeHandoffMode;

const MODES: { id: Mode; label: string }[] = [
  { id: "base64-encode", label: "Base64 encode" },
  { id: "base64-decode", label: "Base64 decode" },
  { id: "url-encode", label: "URL encode (component)" },
  { id: "url-decode", label: "URL decode (component)" },
  { id: "uri-encode", label: "URI encode (full)" },
  { id: "uri-decode", label: "URI decode (full)" },
  { id: "hex-encode", label: "Hex encode" },
  { id: "hex-decode", label: "Hex decode" },
  { id: "html-encode", label: "HTML encode" },
  { id: "html-decode", label: "HTML decode" },
  { id: "jwt-peek", label: "JWT peek" },
];

export default function EncodeDecodeTool({ embedded = false }: { embedded?: boolean }) {
  const router = useRouter();
  const [input, setInput] = useState("Hello, Knowledge Explorer! 🎓");
  const [mode, setMode] = useState<Mode>("base64-encode");
  const [note, setNote] = useState("");

  useEffect(() => {
    const handed = consumeEncodeDecodeHandoff();
    if (handed) {
      setInput(handed.text);
      if (handed.mode) setMode(handed.mode);
      setNote("Loaded from Forum or another tool.");
    }
  }, []);

  const result = useMemo(() => {
    try {
      if (mode === "base64-encode") return { out: encodeBase64(input), err: "" };
      if (mode === "base64-decode") return { out: decodeBase64(input), err: "" };
      if (mode === "url-encode") return { out: encodeUriComponent(input), err: "" };
      if (mode === "url-decode") return { out: decodeUriComponent(input), err: "" };
      if (mode === "uri-encode") return { out: encodeUri(input), err: "" };
      if (mode === "uri-decode") return { out: decodeUri(input), err: "" };
      if (mode === "hex-encode") return { out: encodeHex(input), err: "" };
      if (mode === "hex-decode") return { out: decodeHex(input), err: "" };
      if (mode === "html-encode") return { out: encodeHtmlEntities(input), err: "" };
      if (mode === "html-decode") return { out: decodeHtmlEntities(input), err: "" };
      return { out: peekJwt(input), err: "" };
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

  function sendToJson() {
    if (!result.out) return;
    preloadJsonFormatter(result.out);
    openCodeEditorDesk(router, "json");
  }

  function onFile(file: File) {
    const reader = new FileReader();
    reader.onload = () => {
      setInput(String(reader.result || ""));
      setMode("base64-encode");
      setNote(`Loaded ${file.name} as a data URL.`);
    };
    reader.readAsDataURL(file);
  }

  const body = (
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

        <div className="flex flex-wrap items-center gap-2">
          <button type="button" className="btn-secondary text-sm" onClick={() => void copyOutput()} disabled={!result.out}>
            Copy output
          </button>
          <button type="button" className="btn-secondary text-sm" onClick={useOutputAsInput} disabled={!result.out}>
            Use output as input
          </button>
          <button
            type="button"
            className="btn-secondary text-sm"
            onClick={sendToJson}
            disabled={!result.out}
          >
            Open output in JSON formatter
          </button>
          <label className="btn-secondary cursor-pointer text-sm">
            Load file as data URL
            <input
              type="file"
              className="sr-only"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) onFile(file);
                e.target.value = "";
              }}
            />
          </label>
        </div>
        {note ? <p className="text-xs text-emerald-700">{note}</p> : null}
      </div>
  );

  if (embedded) return <div className="space-y-4">{body}</div>;

  return (
    <StudyToolShell
      title="Base64 & URL encoder"
      description="Encode or decode Base64, URL/URI, hex, HTML entities, or peek at a JWT — all locally in this browser."
      tip="Never paste private passwords or live API keys into shared screenshots. JWT peek does not verify signatures."
    >
      {body}
      <RelatedToolboxLinks clusterId="code-workbench" currentToolId="encode-decode" />
    </StudyToolShell>
  );
}
