"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { flushSync } from "react-dom";
import StudyToolShell from "@/components/StudyToolShell";

type SpeechRecognitionResultList = {
  length: number;
  [index: number]: {
    isFinal: boolean;
    [index: number]: { transcript: string };
  };
};

type SpeechRecognitionResultEvent = {
  resultIndex: number;
  results: SpeechRecognitionResultList;
};

type SpeechRecognitionLike = {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  start: () => void;
  stop: () => void;
  abort?: () => void;
  onresult: ((event: SpeechRecognitionResultEvent) => void) | null;
  onend: (() => void) | null;
  onerror: ((event?: { error?: string }) => void) | null;
};

type Tab = "live" | "history";
type HistoryItem = { id: string; text: string; at: number; source: string };

function getSpeechRecognitionCtor():
  | (new () => SpeechRecognitionLike)
  | undefined {
  if (typeof window === "undefined") return undefined;
  const w = window as Window & {
    SpeechRecognition?: new () => SpeechRecognitionLike;
    webkitSpeechRecognition?: new () => SpeechRecognitionLike;
  };
  return w.SpeechRecognition || w.webkitSpeechRecognition;
}

const ACCEPT_AUDIO =
  "audio/*,.mp3,.wav,.m4a,.webm,.ogg,.mpeg,.mpga,.flac,video/webm";
const HISTORY_KEY = "ke-speak-stt-history-v1";
const LANGS = [
  { id: "en-US", label: "English (US)" },
  { id: "en-GB", label: "English (UK)" },
  { id: "en-AU", label: "English (AU)" },
  { id: "en-IN", label: "English (IN)" },
];

/**
 * English speech → text.
 * Live mic = browser Web Speech, writing as you speak.
 * Audio files / clips = Groq Whisper API.
 */
export default function SpeakSttTool() {
  const [tab, setTab] = useState<Tab>("live");
  const [supported, setSupported] = useState(false);
  const [listening, setListening] = useState(false);
  const [interim, setInterim] = useState("");
  const [transcript, setTranscript] = useState("");
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const [recording, setRecording] = useState(false);
  const [lang, setLang] = useState("en-US");
  const [appendMode, setAppendMode] = useState(true);
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [mounted, setMounted] = useState(false);
  const recognitionRef = useRef<SpeechRecognitionLike | null>(null);
  const wantListenRef = useRef(false);
  const langRef = useRef(lang);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setSupported(Boolean(getSpeechRecognitionCtor()));
    setMounted(true);
    try {
      const raw = localStorage.getItem(HISTORY_KEY);
      if (raw) setHistory(JSON.parse(raw) as HistoryItem[]);
    } catch {
      // ignore
    }
    return () => {
      wantListenRef.current = false;
      try {
        recognitionRef.current?.abort?.();
      } catch {
        /* ignore */
      }
      try {
        recognitionRef.current?.stop();
      } catch {
        /* ignore */
      }
      try {
        mediaRecorderRef.current?.stop();
      } catch {
        /* ignore */
      }
    };
  }, []);

  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem(HISTORY_KEY, JSON.stringify(history.slice(0, 40)));
  }, [history, mounted]);

  useEffect(() => {
    langRef.current = lang;
  }, [lang]);

  const wordCount = useMemo(() => {
    const t = [transcript, interim].filter(Boolean).join(" ").trim();
    return t ? t.split(/\s+/).length : 0;
  }, [transcript, interim]);

  const pushHistory = useCallback((text: string, source: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    setHistory((prev) => [
      { id: `h-${Date.now()}`, text: trimmed, at: Date.now(), source },
      ...prev,
    ].slice(0, 40));
  }, []);

  const applyText = useCallback(
    (text: string, source: string) => {
      const piece = text.trim();
      if (!piece) return;
      setTranscript((prev) => {
        if (!appendMode || !prev.trim()) return piece;
        return `${prev.trim()}\n${piece}`;
      });
      pushHistory(piece, source);
    },
    [appendMode, pushHistory]
  );

  const appendFinal = useCallback((chunk: string) => {
    const piece = chunk.trim();
    if (!piece) return;
    flushSync(() => {
      setTranscript((prev) => {
        const base = prev.trim();
        if (!base) return piece;
        const needsSpace = !/[\s\n]$/.test(base);
        return needsSpace ? `${base} ${piece}` : `${base}${piece}`;
      });
      setInterim("");
    });
  }, []);

  const stopListen = useCallback(() => {
    wantListenRef.current = false;
    setListening(false);
    setInterim("");
    setStatus("");
    const rec = recognitionRef.current;
    recognitionRef.current = null;
    try {
      rec?.stop();
    } catch {
      /* ignore */
    }
  }, []);

  const toggleListen = useCallback(() => {
    setError("");
    if (listening || wantListenRef.current) {
      stopListen();
      if (transcript.trim()) pushHistory(transcript, `live ${langRef.current}`);
      return;
    }
    const Ctor = getSpeechRecognitionCtor();
    if (!Ctor) {
      setError("Live mic needs Chrome or Edge. Upload an audio file instead.");
      return;
    }

    wantListenRef.current = true;
    setListening(true);
    setStatus(`Writing as you speak (${langRef.current})…`);

    const attach = () => {
      if (!wantListenRef.current) return;
      const rec = new Ctor();
      rec.continuous = true;
      rec.interimResults = true;
      rec.lang = langRef.current;

      rec.onresult = (event) => {
        let nextInterim = "";
        let finalText = "";
        for (let i = event.resultIndex; i < event.results.length; i++) {
          const chunk = event.results[i][0]?.transcript || "";
          if (event.results[i].isFinal) finalText += chunk;
          else nextInterim += chunk;
        }
        if (finalText.trim()) {
          appendFinal(finalText);
        } else {
          flushSync(() => {
            setInterim(nextInterim.trim());
          });
        }
      };

      rec.onerror = (event) => {
        const err = event?.error || "";
        if (err === "aborted" || err === "no-speech") return;
        if (err === "not-allowed" || err === "service-not-allowed") {
          wantListenRef.current = false;
          setListening(false);
          setInterim("");
          recognitionRef.current = null;
          setError("Mic permission denied. Allow the microphone or upload a file.");
        }
      };

      rec.onend = () => {
        if (wantListenRef.current) {
          try {
            attach();
          } catch {
            wantListenRef.current = false;
            setListening(false);
            setInterim("");
            recognitionRef.current = null;
          }
          return;
        }
        setListening(false);
        setInterim("");
        recognitionRef.current = null;
      };

      recognitionRef.current = rec;
      try {
        rec.start();
      } catch {
        if (!wantListenRef.current) {
          setListening(false);
          recognitionRef.current = null;
        }
      }
    };

    attach();
  }, [appendFinal, listening, stopListen, transcript, pushHistory]);

  async function transcribeBlob(blob: Blob, filename: string) {
    setBusy(true);
    setError("");
    setStatus("Transcribing audio file…");
    try {
      const form = new FormData();
      form.append("file", blob, filename);
      form.append("language", "en");
      const res = await fetch("/api/ai/transcribe", { method: "POST", body: form });
      const data = (await res.json()) as { text?: string; error?: string; note?: string };
      if (!res.ok) throw new Error(data.error || "Transcription failed.");
      const text = String(data.text || "").trim();
      if (!text) throw new Error("No speech detected in this audio.");
      applyText(text, filename.startsWith("recording") ? "record clip" : "upload");
      setStatus(data.note || "Done.");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Transcription failed.");
      setStatus("");
    } finally {
      setBusy(false);
    }
  }

  async function onPickFile(file: File | null) {
    if (!file) return;
    await transcribeBlob(file, file.name || "audio.webm");
    if (fileInputRef.current) fileInputRef.current.value = "";
  }

  async function toggleRecord() {
    setError("");
    if (recording) {
      mediaRecorderRef.current?.stop();
      return;
    }
    if (!navigator.mediaDevices?.getUserMedia) {
      setError("Recording is not available in this browser. Upload a file instead.");
      return;
    }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true,
        },
      });
      const mime = MediaRecorder.isTypeSupported("audio/webm;codecs=opus")
        ? "audio/webm;codecs=opus"
        : MediaRecorder.isTypeSupported("audio/webm")
          ? "audio/webm"
          : "";
      const recorder = mime
        ? new MediaRecorder(stream, { mimeType: mime })
        : new MediaRecorder(stream);
      chunksRef.current = [];
      recorder.ondataavailable = (e) => {
        if (e.data.size > 0) chunksRef.current.push(e.data);
      };
      recorder.onstop = async () => {
        stream.getTracks().forEach((t) => t.stop());
        setRecording(false);
        const blob = new Blob(chunksRef.current, {
          type: recorder.mimeType || "audio/webm",
        });
        chunksRef.current = [];
        if (blob.size < 200) {
          setError("Recording was too short.");
          return;
        }
        await transcribeBlob(blob, "recording.webm");
      };
      mediaRecorderRef.current = recorder;
      recorder.start();
      setRecording(true);
      setStatus("Recording… stop when finished to transcribe.");
    } catch {
      setError("Microphone permission denied or unavailable.");
    }
  }

  async function copyText() {
    const text = [transcript, interim].filter(Boolean).join(" ").trim();
    if (!text) return;
    try {
      await navigator.clipboard.writeText(text);
      setStatus("Copied to clipboard.");
    } catch {
      setError("Could not copy.");
    }
  }

  function downloadTxt() {
    const text = [transcript, interim].filter(Boolean).join(" ").trim();
    if (!text) return;
    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `transcript-${new Date().toISOString().slice(0, 10)}.txt`;
    a.click();
    URL.revokeObjectURL(url);
    setStatus("Downloaded .txt");
  }

  function capitalizeSentences() {
    setInterim("");
    setTranscript((prev) =>
      prev
        .replace(/\s+/g, " ")
        .trim()
        .replace(/(^\s*\w|[.!?]\s+\w)/g, (m) => m.toUpperCase())
    );
  }

  const display = interim
    ? `${transcript}${transcript && !/\s$/.test(transcript) ? " " : ""}${interim}`
    : transcript;

  return (
    <StudyToolShell
      title="Speech to text"
      description="English speech → text while you speak. Choose accent, save history, download .txt. Live mic on Chrome/Edge, or upload / record (Whisper)."
      tip="Live mic streams text as you talk. Files/clips use Groq Whisper — max 4 MB. History stays in this browser."
    >
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          className={tab === "live" ? "btn-primary text-sm" : "btn-secondary text-sm"}
          onClick={() => setTab("live")}
        >
          Transcribe
        </button>
        <button
          type="button"
          className={tab === "history" ? "btn-primary text-sm" : "btn-secondary text-sm"}
          onClick={() => setTab("history")}
        >
          History ({history.length})
        </button>
      </div>

      {tab === "live" ? (
        <div className="space-y-4">
          <div className="flex flex-wrap items-end gap-3">
            <label className="block text-sm">
              Live mic language
              <select
                className="input mt-1"
                value={lang}
                disabled={listening}
                onChange={(e) => setLang(e.target.value)}
              >
                {LANGS.map((l) => (
                  <option key={l.id} value={l.id}>
                    {l.label}
                  </option>
                ))}
              </select>
            </label>
            <label className="flex items-center gap-2 pb-2 text-sm text-slate-700">
              <input
                type="checkbox"
                checked={appendMode}
                onChange={(e) => setAppendMode(e.target.checked)}
              />
              Append file/clip results (vs replace)
            </label>
            <p className="pb-2 text-xs text-slate-500">{wordCount} words</p>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              className={listening ? "btn-primary" : "btn-secondary"}
              onClick={toggleListen}
              disabled={busy || recording}
            >
              {listening ? "Stop mic" : `Live mic (${lang})`}
            </button>
            <button
              type="button"
              className={recording ? "btn-primary" : "btn-secondary"}
              onClick={() => void toggleRecord()}
              disabled={busy || listening}
            >
              {recording ? "Stop & transcribe" : "Record clip"}
            </button>
            <button
              type="button"
              className="btn-secondary"
              disabled={busy || listening || recording}
              onClick={() => fileInputRef.current?.click()}
            >
              Upload audio file
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept={ACCEPT_AUDIO}
              className="hidden"
              onChange={(e) => void onPickFile(e.target.files?.[0] || null)}
            />
            <button
              type="button"
              className="btn-ghost"
              disabled={!display.trim()}
              onClick={() => void copyText()}
            >
              Copy
            </button>
            <button
              type="button"
              className="btn-ghost"
              disabled={!display.trim()}
              onClick={downloadTxt}
            >
              Download .txt
            </button>
            <button
              type="button"
              className="btn-ghost"
              disabled={!transcript.trim()}
              onClick={capitalizeSentences}
            >
              Capitalize sentences
            </button>
            <button
              type="button"
              className="btn-ghost"
              disabled={busy}
              onClick={() => {
                if (transcript.trim()) pushHistory(transcript, "manual save");
                setTranscript("");
                setInterim("");
                setStatus("");
                setError("");
              }}
            >
              Clear
            </button>
          </div>

          {!supported ? (
            <p className="text-xs text-slate-500">
              Live mic is unavailable here — use Record clip or Upload audio file instead.
            </p>
          ) : null}

          <label className="block text-sm font-medium text-slate-700">
            Transcript
            <textarea
              className="input mt-1 min-h-[22rem] w-full font-normal leading-relaxed sm:min-h-[28rem]"
              value={display}
              onChange={(e) => {
                setInterim("");
                setTranscript(e.target.value);
              }}
              placeholder="Speak, record, or upload… text appears here as you talk."
              spellCheck
            />
          </label>

          {busy ? <p className="text-sm text-slate-600">Working…</p> : null}
          {status && !error ? <p className="text-xs text-slate-500">{status}</p> : null}
          {error ? (
            <p className="rounded-xl border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-800">
              {error}
            </p>
          ) : null}

          <ul className="list-disc space-y-1 pl-5 text-xs text-slate-500">
            <li>Live mic: browser speech recognition — text streams while you speak.</li>
            <li>
              Audio file / record clip: server Whisper transcription (needs site Groq key).
            </li>
            <li>Different from Dictation — that tool plays a sentence for you to type.</li>
          </ul>
        </div>
      ) : null}

      {tab === "history" ? (
        <ul className="space-y-3">
          {history.map((h) => (
            <li key={h.id} className="card space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
                <span>
                  {new Date(h.at).toLocaleString()} · {h.source}
                </span>
                <div className="flex gap-1">
                  <button
                    type="button"
                    className="rounded-md border border-slate-200 bg-white px-2 py-1 text-[10px] font-semibold"
                    onClick={() => {
                      setTranscript(h.text);
                      setTab("live");
                    }}
                  >
                    Restore
                  </button>
                  <button
                    type="button"
                    className="rounded-md border border-red-200 bg-red-50 px-2 py-1 text-[10px] font-semibold text-red-700"
                    onClick={() => setHistory((prev) => prev.filter((x) => x.id !== h.id))}
                  >
                    Delete
                  </button>
                </div>
              </div>
              <p className="whitespace-pre-wrap text-sm text-slate-800">{h.text}</p>
            </li>
          ))}
          {!history.length ? (
            <li className="card text-sm text-slate-500">No saved transcripts yet.</li>
          ) : null}
          {history.length ? (
            <button type="button" className="btn-ghost text-sm" onClick={() => setHistory([])}>
              Clear history
            </button>
          ) : null}
        </ul>
      ) : null}
    </StudyToolShell>
  );
}
