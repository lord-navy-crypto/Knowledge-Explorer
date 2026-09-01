import { WebWorkerMLCEngineHandler, prebuiltAppConfig } from "@mlc-ai/web-llm";

// Use IndexedDB for model artifacts instead of the default Cache API.
// Cache API downloads can fail with `Cache.add() encountered a network error`
// on large Hugging Face shards even when WebGPU itself is healthy.
// WebLLM officially supports IndexedDB as a persistent cache backend.
prebuiltAppConfig.cacheBackend = "indexeddb";

const handler = new WebWorkerMLCEngineHandler();

self.onmessage = (event: MessageEvent) => {
  handler.onmessage(event);
};
