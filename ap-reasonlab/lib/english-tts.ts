/**
 * Prefer natural US/UK English voices and avoid defaulting to a
 * non-English / Chinese engine that makes English sound “weird”.
 */

const PREFERRED_NAME_RE =
  /google us english|microsoft aria|microsoft jenny|microsoft guy|microsoft michelle|microsoft andrew|microsoft emma|microsoft ryan|samantha|alex|allison|ava|susan|karen|moira|daniel|google uk english|premium|neural|natural/i;

const AVOID_NAME_RE =
  /chinese|zh-|cmn|yue|cantonese|mandarin|taiwan|hong kong|compact|robot|espeak|nicky|hanhan|ting-ting|mei-jia|sin-ji/i;

export function listEnglishVoices(): SpeechSynthesisVoice[] {
  if (typeof window === "undefined" || !window.speechSynthesis) return [];
  return window.speechSynthesis
    .getVoices()
    .filter((v) => /^en([-_]|$)/i.test(v.lang) && !AVOID_NAME_RE.test(`${v.name} ${v.lang}`))
    .sort((a, b) => {
      const as = scoreVoice(a);
      const bs = scoreVoice(b);
      if (bs !== as) return bs - as;
      return a.name.localeCompare(b.name);
    });
}

function scoreVoice(v: SpeechSynthesisVoice): number {
  let score = 0;
  const name = v.name || "";
  const lang = (v.lang || "").toLowerCase();
  if (/^en-us/i.test(lang)) score += 40;
  else if (/^en-gb/i.test(lang)) score += 25;
  else if (/^en/i.test(lang)) score += 15;
  if (PREFERRED_NAME_RE.test(name)) score += 50;
  if (/google/i.test(name)) score += 20;
  if (/microsoft/i.test(name) && /(aria|jenny|guy|michelle|andrew|emma|ryan)/i.test(name))
    score += 25;
  if (/online|natural|neural|premium/i.test(name)) score += 15;
  if (v.localService === false) score += 8; // cloud voices often clearer
  if (AVOID_NAME_RE.test(name)) score -= 100;
  return score;
}

export function pickBestEnglishVoice(
  voices?: SpeechSynthesisVoice[],
  preferredName?: string
): SpeechSynthesisVoice | null {
  const list = voices?.length ? voices : listEnglishVoices();
  if (!list.length) return null;
  if (preferredName) {
    const hit = list.find((v) => v.name === preferredName);
    if (hit) return hit;
  }
  return list[0] ?? null;
}

/** Strip role labels so TTS does not say “Professor colon”. */
export function cleanTextForSpeech(text: string): string {
  return text
    .replace(/^(professor|student|narrator|man|woman|speaker\s*\d+|a|b|host|guest)\s*[:：]\s*/i, "")
    .replace(/\s+/g, " ")
    .trim();
}

export type SpeakEnglishOptions = {
  rate?: number;
  voiceName?: string;
  onStart?: () => void;
  onEnd?: () => void;
  onError?: () => void;
};

export function speakEnglish(text: string, options: SpeakEnglishOptions = {}): boolean {
  if (typeof window === "undefined" || !window.speechSynthesis) return false;
  const cleaned = cleanTextForSpeech(text);
  if (!cleaned) return false;

  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(cleaned);
  const voice = pickBestEnglishVoice(undefined, options.voiceName);
  if (voice) {
    utterance.voice = voice;
    utterance.lang = voice.lang || "en-US";
  } else {
    utterance.lang = "en-US";
  }
  utterance.rate = options.rate ?? 0.95;
  utterance.pitch = 1;
  utterance.onstart = () => options.onStart?.();
  utterance.onend = () => options.onEnd?.();
  utterance.onerror = () => options.onError?.();
  window.speechSynthesis.speak(utterance);
  return true;
}

/** Voices often load async — call once on mount. */
export function whenVoicesReady(cb: (voices: SpeechSynthesisVoice[]) => void): () => void {
  if (typeof window === "undefined" || !window.speechSynthesis) {
    cb([]);
    return () => undefined;
  }
  const synth = window.speechSynthesis;
  const fire = () => cb(listEnglishVoices());
  fire();
  if (synth.getVoices().length) return () => undefined;
  const onChange = () => fire();
  synth.addEventListener("voiceschanged", onChange);
  // Some browsers need a nudge
  const t = window.setTimeout(fire, 250);
  return () => {
    synth.removeEventListener("voiceschanged", onChange);
    window.clearTimeout(t);
  };
}
