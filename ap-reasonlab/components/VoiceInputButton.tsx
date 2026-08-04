"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";

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

type Props = {
  /** Current field value — snapshotted when listening starts. */
  value: string;
  /** Full live field text (base + finals + interim). Called as you speak — no wait for “sync”. */
  onChange: (next: string) => void;
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

function joinSpeech(base: string, finals: string, interim: string): string {
  let out = base;
  const fin = finals.trim();
  const mid = interim.trim();
  if (fin) {
    const needsSpace = out.length > 0 && !/\s$/.test(out);
    out = needsSpace ? `${out} ${fin}` : `${out}${fin}`;
  }
  if (mid) {
    const needsSpace = out.length > 0 && !/\s$/.test(out);
    out = needsSpace ? `${out} ${mid}` : `${out}${mid}`;
  }
  return out;
}

/**
 * Browser speech-to-text (Chrome / Edge).
 * Writes into the active field while you speak (interim + final) — no phrase-batch delay,
 * and no echoed duplicates from stacking interim results.
 */
export default function VoiceInputButton({ value, onChange, disabled, className = "" }: Props) {
  const [supported, setSupported] = useState(false);
  const [listening, setListening] = useState(false);
  const recognitionRef = useRef<SpeechRecognitionLike | null>(null);
  const wantListenRef = useRef(false);
  const valueRef = useRef(value);
  const baseRef = useRef("");
  const finalsRef = useRef("");
  const onChangeRef = useRef(onChange);

  useEffect(() => {
    valueRef.current = value;
  }, [value]);

  useEffect(() => {
    onChangeRef.current = onChange;
  }, [onChange]);

  useEffect(() => {
    setSupported(Boolean(getSpeechRecognitionCtor()));
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
    };
  }, []);

  const publishLive = useCallback((finals: string, interim: string) => {
    const next = joinSpeech(baseRef.current, finals, interim);
    // Same live paint path as Local AI tokens — do not wait for React batching.
    flushSync(() => {
      onChangeRef.current(next);
    });
  }, []);

  const stopListening = useCallback(() => {
    wantListenRef.current = false;
    setListening(false);
    const rec = recognitionRef.current;
    recognitionRef.current = null;
    try {
      rec?.stop();
    } catch {
      /* ignore */
    }
  }, []);

  const startListening = useCallback(() => {
    const Ctor = getSpeechRecognitionCtor();
    if (!Ctor) return;

    baseRef.current = valueRef.current;
    finalsRef.current = "";
    wantListenRef.current = true;
    setListening(true);

    const attach = () => {
      if (!wantListenRef.current) return;
      const rec = new Ctor();
      rec.continuous = true;
      rec.interimResults = true;
      rec.lang = navigator.language || "en-US";

      rec.onresult = (event) => {
        let interim = "";
        let newlyFinal = "";
        for (let i = event.resultIndex; i < event.results.length; i++) {
          const chunk = event.results[i][0]?.transcript || "";
          if (event.results[i].isFinal) newlyFinal += chunk;
          else interim += chunk;
        }
        if (newlyFinal.trim()) {
          const piece = newlyFinal.trim();
          const prev = finalsRef.current.trim();
          finalsRef.current = prev ? `${prev} ${piece}` : piece;
        }
        // Always publish interim (and finals) so text appears while speaking.
        publishLive(finalsRef.current, interim);
      };

      rec.onerror = (event) => {
        // "no-speech" / "aborted" are normal — keep going if user still wants mic.
        const err = event?.error || "";
        if (err === "aborted" || err === "no-speech") return;
        if (err === "not-allowed" || err === "service-not-allowed") {
          wantListenRef.current = false;
          setListening(false);
          recognitionRef.current = null;
        }
      };

      rec.onend = () => {
        // Chrome ends sessions after pauses even with continuous=true — restart immediately.
        if (wantListenRef.current) {
          try {
            attach();
          } catch {
            wantListenRef.current = false;
            setListening(false);
            recognitionRef.current = null;
          }
          return;
        }
        setListening(false);
        recognitionRef.current = null;
      };

      recognitionRef.current = rec;
      try {
        rec.start();
      } catch {
        // Already started — ignore; otherwise drop listening.
        if (!wantListenRef.current) {
          setListening(false);
          recognitionRef.current = null;
        }
      }
    };

    attach();
  }, [publishLive]);

  const toggle = useCallback(() => {
    if (disabled) return;
    if (listening || wantListenRef.current) {
      stopListening();
      return;
    }
    startListening();
  }, [disabled, listening, startListening, stopListening]);

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
      title={
        listening
          ? "Stop voice input — text is writing live as you speak"
          : "Speak into the field (writes live while you talk · Chrome / Edge)"
      }
    >
      <span aria-hidden>{listening ? "●" : "🎤"}</span>
      {listening ? "Writing…" : "Voice input"}
    </button>
  );
}
