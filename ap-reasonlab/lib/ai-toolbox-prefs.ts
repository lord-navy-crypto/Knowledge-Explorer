import { migrateEnglishTask } from "@/lib/ai-toolbox-url";

export type ToolboxExtraTool = "ai" | "calculator" | "grapher";
export type ToolboxCategory = "ap" | "english" | "coding";

export type ToolboxPanelPrefs = {
  category: ToolboxCategory;
  apTask: string;
  englishTask: string;
  codingTask: string;
  subject: string;
  englishTarget: string;
  language: string;
};

const EXTRA_TOOL_KEY = "results-toolbox-extra";
const PANEL_PREFS_KEY = "results-toolbox-panel";
const SETTINGS_OPEN_KEY = "results-toolbox-settings-open";

const DEFAULT_PANEL_PREFS: ToolboxPanelPrefs = {
  category: "ap",
  apTask: "advice",
  englishTask: "grammar-explanation",
  codingTask: "debug",
  subject: "AP Physics 1",
  englishTarget: "General academic English",
  language: "Python",
};

function browserStorage(): Storage | null {
  try {
    return (globalThis as { localStorage?: Storage }).localStorage ?? null;
  } catch {
    return null;
  }
}

function readJson<T>(raw: string | null): T | null {
  if (!raw) return null;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return null;
  }
}

export function loadToolboxExtraTool(): ToolboxExtraTool | null {
  if (typeof window === "undefined") return null;
  const raw = localStorage.getItem(EXTRA_TOOL_KEY);
  if (raw === "ai" || raw === "calculator" || raw === "grapher") return raw;
  // Retired Image Gen → function plotter
  if (raw === "imagegen") return "grapher";
  return null;
}

export function saveToolboxExtraTool(tool: ToolboxExtraTool) {
  if (typeof window === "undefined") return;
  localStorage.setItem(EXTRA_TOOL_KEY, tool);
}

export function loadToolboxPanelPrefs(): ToolboxPanelPrefs {
  if (typeof window === "undefined") return DEFAULT_PANEL_PREFS;
  const parsed = readJson<Partial<ToolboxPanelPrefs>>(localStorage.getItem(PANEL_PREFS_KEY));
  if (!parsed) return DEFAULT_PANEL_PREFS;
  return {
    category:
      parsed.category === "english" || parsed.category === "coding" || parsed.category === "ap"
        ? parsed.category
        : DEFAULT_PANEL_PREFS.category,
    apTask: parsed.apTask || DEFAULT_PANEL_PREFS.apTask,
    englishTask:
      migrateEnglishTask(parsed.englishTask) || DEFAULT_PANEL_PREFS.englishTask,
    codingTask: parsed.codingTask || DEFAULT_PANEL_PREFS.codingTask,
    subject: parsed.subject || DEFAULT_PANEL_PREFS.subject,
    englishTarget: parsed.englishTarget || DEFAULT_PANEL_PREFS.englishTarget,
    language: parsed.language || DEFAULT_PANEL_PREFS.language,
  };
}

export function saveToolboxPanelPrefs(prefs: ToolboxPanelPrefs) {
  if (typeof window === "undefined") return;
  localStorage.setItem(PANEL_PREFS_KEY, JSON.stringify(prefs));
}

/** Whether the detailed AI path / model settings block is expanded. */
export function loadAiSettingsOpen(): boolean {
  const raw = browserStorage()?.getItem(SETTINGS_OPEN_KEY);
  if (raw === "0") return false;
  if (raw === "1") return true;
  return false;
}

export function saveAiSettingsOpen(open: boolean) {
  browserStorage()?.setItem(SETTINGS_OPEN_KEY, open ? "1" : "0");
}
