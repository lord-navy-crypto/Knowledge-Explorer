const KEY = "ke-recent-tools-v1";
const MAX = 8;

export type RecentToolEntry = { href: string; title: string; visitedAt: number };

export function readRecentTools(): RecentToolEntry[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as RecentToolEntry[];
    return Array.isArray(parsed) ? parsed.slice(0, MAX) : [];
  } catch {
    return [];
  }
}

/** @deprecated use trackToolboxVisit */
export function trackToolVisit(href: string, title: string) {
  trackToolboxVisit(href, title);
}

export function trackToolboxVisit(href: string, title: string) {
  if (typeof window === "undefined") return;
  const ok = href.startsWith("/tools/") || href.startsWith("/code/");
  if (!ok) return;
  const prev = readRecentTools().filter((e) => e.href !== href);
  const next = [{ href, title, visitedAt: Date.now() }, ...prev].slice(0, MAX);
  localStorage.setItem(KEY, JSON.stringify(next));
}
