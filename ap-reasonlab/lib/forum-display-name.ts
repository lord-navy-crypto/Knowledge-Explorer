/** Shared localStorage key for Forum + beta feedback display names. */
export const FORUM_DISPLAY_NAME_KEY = "results-forum-display-name";

/** Legacy key written by early beta form builds — read once then migrate. */
const LEGACY_BETA_NAME_KEY = "ke-beta-feedback-name";

export function readForumDisplayName(): string {
  if (typeof window === "undefined") return "";
  try {
    const current = localStorage.getItem(FORUM_DISPLAY_NAME_KEY);
    if (current) return current;
    const legacy = localStorage.getItem(LEGACY_BETA_NAME_KEY);
    if (legacy) {
      localStorage.setItem(FORUM_DISPLAY_NAME_KEY, legacy);
      localStorage.removeItem(LEGACY_BETA_NAME_KEY);
      return legacy;
    }
  } catch {
    /* ignore */
  }
  return "";
}

export function writeForumDisplayName(name: string): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(FORUM_DISPLAY_NAME_KEY, name);
    localStorage.removeItem(LEGACY_BETA_NAME_KEY);
  } catch {
    /* ignore */
  }
}
