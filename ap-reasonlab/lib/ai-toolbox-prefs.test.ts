import { describe, expect, it, vi } from "vitest";
import { loadAiSettingsOpen, loadAiSpecialOpen, saveAiSettingsOpen, saveAiSpecialOpen } from "@/lib/ai-toolbox-prefs";

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

  it("keeps special-feature chips collapsed by default", () => {
    const store = new Map<string, string>();
    vi.stubGlobal("localStorage", {
      getItem: (k: string) => store.get(k) ?? null,
      setItem: (k: string, v: string) => {
        store.set(k, v);
      },
    });
    expect(loadAiSpecialOpen()).toBe(false);
    saveAiSpecialOpen(true);
    expect(loadAiSpecialOpen()).toBe(true);
  });

  it("keeps saved chats collapsed by default", async () => {
    const { loadAiThreadsOpen, saveAiThreadsOpen } = await import("@/lib/ai-toolbox-prefs");
    const store = new Map<string, string>();
    vi.stubGlobal("localStorage", {
      getItem: (k: string) => store.get(k) ?? null,
      setItem: (k: string, v: string) => {
        store.set(k, v);
      },
    });
    expect(loadAiThreadsOpen()).toBe(false);
    saveAiThreadsOpen(true);
    expect(loadAiThreadsOpen()).toBe(true);
  });
});
