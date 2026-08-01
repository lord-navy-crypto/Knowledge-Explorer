"use client";

import { useCallback, useEffect, useRef, useState } from "react";
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
  onresult: ((event: SpeechRecognitionResultEvent) => void) | null;
  onend: (() => void) | null;
  onerror: (() => void) | null;
};

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

/**
 * Special tool: pure English speech → text.
 * Live mic = browser Web Speech (en-US). Audio files / clips = Groq Whisper API.
 */
export default function SpeakSttTool() {
  const [supported, setSupported] = useState(false);
  const [listening, setListening] = useState(false);
  const [interim, setInterim] = useState("");
  const [transcript, setTranscript] = useState("");
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const [recording, setRecording] = useState(false);
  const recognitionRef = useRef<SpeechRecognitionLike | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setSupported(Boolean(getSpeechRecognitionCtor()));
    return () => {
      recognitionRef.current?.stop();
      mediaRecorderRef.current?.stop();
    };
  }, []);

  const appendFinal = useCallback((chunk: string) => {
    const piece = chunk.trim();
    if (!piece) return;
    setTranscript((prev) => {
      const base = prev.trim();
      if (!base) return piece;
      const needsSpace = !/[\s\n]$/.test(base);
      return needsSpace ? `${base} ${piece}` : `${base}${piece}`;
    });
  }, []);

  const toggleListen = useCallback(() => {
    setError("");
    if (listening) {
      recognitionRef.current?.stop();
      setListening(false);
      setInterim("");
      return;
    }
    const Ctor = getSpeechRecognitionCtor();
    if (!Ctor) {
      setError("Live mic needs Chrome or Edge. Upload an audio file instead.");
      return;
    }
    const rec = new Ctor();
    rec.continuous = true;
    rec.interimResults = true;
    rec.lang = "en-US";
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
        setInterim("");
      } else {
        setInterim(nextInterim.trim());
      }
    };
    rec.onend = () => {
      setListening(false);
      setInterim("");
    };
    rec.onerror = () => {
      setListening(false);
      setInterim("");
      setError("Mic recognition stopped. Check permission or try an audio file.");
    };
    recognitionRef.current = rec;
    setListening(true);
    setStatus("Listening (en-US)…");
    try {
      rec.start();
    } catch {
      setListening(false);
      setError("Could not start the microphone.");
    }
  }, [appendFinal, listening]);

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
      setTranscript((prev) => {
        const base = prev.trim();
        return base ? `${base}\n${text}` : text;
      });
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
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
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

  const display = interim
    ? `${transcript}${transcript && !/\s$/.test(transcript) ? " " : ""}${interim}`
    : transcript;

  return (
    <StudyToolShell
      title="Speech to text"
      description="Pure English speech → text. Live mic on Chrome/Edge, or upload / record an audio file (Whisper)."
      tip="Live mic stays in the browser (en-US). Audio files and recorded clips go to the site’s Groq Whisper path — max 4 MB (mp3, wav, m4a, webm, ogg)."
    >
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          className={listening ? "btn-primary" : "btn-secondary"}
          onClick={toggleListen}
          disabled={busy || recording}
        >
          {listening ? "Stop mic" : "Live mic (en-US)"}
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
          disabled={busy}
          onClick={() => {
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

      <label className="block text-sm">
        Transcript
        <textarea
          className="input mt-1 min-h-[14rem] font-normal"
          value={display}
          onChange={(e) => {
            setInterim("");
            setTranscript(e.target.value);
          }}
          placeholder="Speak, record, or upload… text appears here."
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
        <li>Live mic: browser speech recognition, language locked to English (US).</li>
        <li>Audio file / record clip: server Whisper transcription (needs site Groq key).</li>
        <li>Different from Dictation — that tool plays a sentence for you to type.</li>
      </ul>
    </StudyToolShell>
  );
}
