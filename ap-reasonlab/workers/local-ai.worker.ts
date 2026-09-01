import { WebWorkerMLCEngineHandler, prebuiltAppConfig } from "@mlc-ai/web-llm";

// WebLLM 0.2.82 uses this legacy flag to select IndexedDB instead of the
// browser Cache API. This avoids the Cache.add() failure seen on large
// Hugging Face model shards while keeping the model fully browser-local.
prebuiltAppConfig.useIndexedDBCache = true;

const handler = new WebWorkerMLCEngineHandler();

self.onmessage = (event: MessageEvent) => {
  handler.onmessage(event);
};
