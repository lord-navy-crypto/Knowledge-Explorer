import { describe, expect, it, vi } from "vitest";
import { loadAiSettingsOpen, saveAiSettingsOpen } from "@/lib/ai-toolbox-prefs";

describe("AI Toolbox settings prefs", () => {
  it("persists whether path/model details are expanded", () => {
    const store = new Map<string, string>();
    vi.stubGlobal("localStorage", {
      getItem: (k: string) => store.get(k) ?? null,
      setItem: (k: string, v: string) => {
        store.set(k, v);
      },
    });
    expect(loadAiSettingsOpen()).toBe(false);
    saveAiSettingsOpen(true);
    expect(loadAiSettingsOpen()).toBe(true);
    saveAiSettingsOpen(false);
    expect(loadAiSettingsOpen()).toBe(false);
  });
});
