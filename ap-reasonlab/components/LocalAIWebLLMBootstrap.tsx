"use client";

import { prebuiltAppConfig } from "@mlc-ai/web-llm";

// WebLLM 0.2.82 defaults to the browser Cache API unless this legacy flag is set.
// Set it on the browser's shared module singleton before any Local AI engine,
// fallback engine, cache scan, or cache deletion path can run.
prebuiltAppConfig.useIndexedDBCache = true;

export default function LocalAIWebLLMBootstrap() {
  return null;
}
