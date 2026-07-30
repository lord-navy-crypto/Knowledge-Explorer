"use client";

import { useCallback, useEffect, useRef, useState } from "react";

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

type Props = {
  onTranscript: (text: string, finalChunk: boolean) => void;
  disabled?: boolean;
  className?: string;
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

/**
 * Browser speech-to-text (Chrome / Edge). Appends transcript to the active AI field.
 */
export default function VoiceInputButton({ onTranscript, disabled, className = "" }: Props) {
  const [supported, setSupported] = useState(false);
  const [listening, setListening] = useState(false);
  const recognitionRef = useRef<SpeechRecognitionLike | null>(null);

  useEffect(() => {
    setSupported(Boolean(getSpeechRecognitionCtor()));
    return () => {
      recognitionRef.current?.stop();
    };
  }, []);

  const toggle = useCallback(() => {
    if (disabled) return;
    if (listening) {
      recognitionRef.current?.stop();
      setListening(false);
      return;
    }
    const Ctor = getSpeechRecognitionCtor();
    if (!Ctor) return;
    const rec = new Ctor();
    rec.continuous = true;
    rec.interimResults = true;
    rec.lang = navigator.language || "en-US";
    rec.onresult = (event) => {
      let interim = "";
      let finalText = "";
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const chunk = event.results[i][0]?.transcript || "";
        if (event.results[i].isFinal) finalText += chunk;
        else interim += chunk;
      }
      const text = (finalText || interim).trim();
      if (text) onTranscript(text, Boolean(finalText));
    };
    rec.onend = () => setListening(false);
    rec.onerror = () => setListening(false);
    recognitionRef.current = rec;
    setListening(true);
    try {
      rec.start();
    } catch {
      setListening(false);
    }
  }, [disabled, listening, onTranscript]);

  if (!supported) {
    return (
      <span className={`text-[11px] text-slate-400 ${className}`.trim()} title="Voice input needs Chrome or Edge">
        Voice unavailable
      </span>
    );
  }

  return (
    <button
      type="button"
      className={`inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1 text-xs font-medium transition ${
        listening
          ? "border-red-300 bg-red-50 text-red-800"
          : "border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
      } ${className}`.trim()}
      onClick={toggle}
      disabled={disabled}
      aria-pressed={listening}
      title={listening ? "Stop voice input" : "Speak your question (Chrome / Edge)"}
    >
      <span aria-hidden>{listening ? "●" : "🎤"}</span>
      {listening ? "Listening…" : "Voice input"}
    </button>
  );
}
