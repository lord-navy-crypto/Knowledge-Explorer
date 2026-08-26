import { encodeSpecialPrompt } from "@/lib/ai-special-features";
import { toolboxHref } from "@/lib/ai-toolbox-url";

const STORAGE_KEY = "ke-toolbox-prefill";

export function stashToolboxPrefill(text: string) {
  if (typeof window === "undefined") return;
  try {
    sessionStorage.setItem(STORAGE_KEY, text);
  } catch {
    /* ignore quota */
  }
}

export function takeToolboxPrefill(): string {
  if (typeof window === "undefined") return "";
  try {
    const value = sessionStorage.getItem(STORAGE_KEY) || "";
    sessionStorage.removeItem(STORAGE_KEY);
    return value;
  } catch {
    return "";
  }
}

export function openToolboxWithPrefill(params: {
  category?: "ap" | "english" | "coding";
  apTask?: string;
  englishTask?: string;
  codingTask?: "debug" | "write" | "explain" | "csa-frq";
  subject?: string;
  prompt: string;
}) {
  stashToolboxPrefill(params.prompt);
  const href = toolboxHref({
    category: params.category,
    apTask: params.apTask as never,
    englishTask: params.englishTask as never,
    codingTask: params.codingTask,
    subject: params.subject,
    // Also put prompt in URL so share / refresh / new tab still works.
    promptEncoded: encodeSpecialPrompt(params.prompt),
  });
  window.location.href = href;
}
