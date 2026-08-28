import type { Questionnaire } from "@/lib/types";

/** Extract Set A–E label from generated practice titles. */
export function practiceSetLabel(title: string): string | null {
  const match = title.match(/\bSet\s+([A-E])\b/i);
  return match ? `Set ${match[1]!.toUpperCase()}` : null;
}

/** Base title without trailing "Set X" for grouping. */
export function practiceSetBaseTitle(title: string): string {
  return title
    .replace(/\s*—\s*Set\s+[A-E]\s*$/i, "")
    .replace(/\s+Set\s+[A-E]\s*$/i, "")
    .trim();
}

export type PracticeSetGroup = {
  key: string;
  baseTitle: string;
  sets: Questionnaire[];
};

const SET_ORDER = ["Set A", "Set B", "Set C", "Set D", "Set E", "Other"];

export function groupPracticeSets(sets: Questionnaire[]): PracticeSetGroup[] {
  const map = new Map<string, PracticeSetGroup>();

  for (const set of sets) {
    const label = practiceSetLabel(set.title);
    const baseTitle = practiceSetBaseTitle(set.title);
    const key = `${set.subject}::${baseTitle}`;
    const existing = map.get(key);
    if (existing) {
      existing.sets.push(set);
    } else {
      map.set(key, { key, baseTitle, sets: [set] });
    }
  }

  const groups = [...map.values()];
  for (const group of groups) {
    group.sets.sort((a, b) => {
      const la = practiceSetLabel(a.title) || "Set Z";
      const lb = practiceSetLabel(b.title) || "Set Z";
      return SET_ORDER.indexOf(la) - SET_ORDER.indexOf(lb);
    });
  }

  return groups.sort((a, b) => a.baseTitle.localeCompare(b.baseTitle));
}

export function isGeneratedPracticeSet(q: Questionnaire): boolean {
  return q.kind === "generated" || /Set\s+[A-E]\b/i.test(q.title);
}
