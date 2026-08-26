/**
 * Pull a few howToUseAI tips from key-concept guides for the selected subject
 * so Toolbox「特殊功能」can show guide-linked starters.
 */

import { keyConceptGuides } from "@/data/key-concepts";

function subjectKey(subject: string): string {
  const s = subject.toLowerCase();
  if (s.includes("physics 1")) return "physics 1";
  if (s.includes("physics 2")) return "physics 2";
  if (s.includes("mechanics")) return "mechanics";
  if (s.includes("e&m") || s.includes("electric")) return "e&m";
  if (s.includes("calculus")) return "calculus";
  if (s.includes("statistics") || s.includes("stats")) return "statistics";
  if (s.includes("chemistry")) return "chemistry";
  if (s.includes("biology")) return "biology";
  if (s.includes("computer science a") || s.includes("csa")) return "csa";
  if (s.includes("ai for ap") || s.includes("study skills")) return "ai for ap";
  return s.slice(0, 24);
}

export function guidePromptsForSubject(subject: string): Array<{ label: string; prompt: string }> {
  const key = subjectKey(subject);
  const matches = keyConceptGuides.filter((c) => {
    const sub = (c.subject || "").toLowerCase();
    const title = (c.title || "").toLowerCase();
    const id = c.id || "";
    if (key === "ai for ap") {
      return id.startsWith("guide-ai") || c.category === "ai_for_ap";
    }
    return sub.includes(key) || title.includes(key);
  });

  const out: Array<{ label: string; prompt: string }> = [];
  for (const concept of matches) {
    for (const tip of concept.howToUseAI || []) {
      const cleaned = tip
        .replace(/^Ask AI[:：]?\s*/i, "")
        .replace(/^Prompt(?: pattern)?[:：]?\s*/i, "")
        .trim();
      if (cleaned.length < 24) continue;
      if (/^do not\b/i.test(cleaned) || /^never\b/i.test(cleaned)) continue;
      out.push({
        label: cleaned.length > 40 ? `${cleaned.slice(0, 40)}…` : cleaned,
        prompt: cleaned,
      });
      if (out.length >= 6) return out;
    }
  }
  return out;
}
