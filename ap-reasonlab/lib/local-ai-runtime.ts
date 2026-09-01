export type WebLLMRuntime = typeof import("@mlc-ai/web-llm");

let runtimePromise: Promise<WebLLMRuntime> | null = null;

/**
 * Single lazy entry point for the browser WebLLM runtime.
 * It owns compatibility configuration so callers do not repeat singleton setup.
 */
export function loadWebLLMRuntime(): Promise<WebLLMRuntime> {
  if (!runtimePromise) {
    runtimePromise = import("@mlc-ai/web-llm").then((runtime) => {
      runtime.prebuiltAppConfig.useIndexedDBCache = true;
      return runtime;
    });
  }
  return runtimePromise;
}

export async function detectWebGPU(): Promise<boolean> {
  if (typeof navigator === "undefined") return false;
  const gpu = (navigator as Navigator & { gpu?: { requestAdapter: () => Promise<unknown> } }).gpu;
  if (!gpu?.requestAdapter) return false;
  try {
    return Boolean(await gpu.requestAdapter());
  } catch {
    return false;
  }
}
