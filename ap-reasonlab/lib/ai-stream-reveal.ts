/**
 * Progressive reveal for cloud JSON replies — paints like streaming without provider SSE.
 */

import { parseAiSseEvents, type AiSseEvent } from "@/lib/ai-sse";
import { proseFromPartialJson } from "@/lib/ai-stream-display";

export async function revealTextProgressively(
  fullText: string,
  onUpdate: (partial: string) => void,
  options?: { signal?: AbortSignal; chunkMs?: number; chunkSize?: number }
): Promise<string> {
  const text = fullText || "";
  if (!text) {
    onUpdate("");
    return "";
  }
  const chunkSize = options?.chunkSize ?? 24;
  const chunkMs = options?.chunkMs ?? 16;
  let i = 0;
  while (i < text.length) {
    if (options?.signal?.aborted) throw new DOMException("Aborted", "AbortError");
    i = Math.min(text.length, i + chunkSize);
    onUpdate(text.slice(0, i));
    if (i < text.length) {
      await new Promise((r) => setTimeout(r, chunkMs));
    }
  }
  return text;
}

/** Fetch JSON with AbortSignal support. */
export async function fetchJsonWithAbort(
  url: string,
  body: unknown,
  signal?: AbortSignal
): Promise<{ ok: boolean; status: number; data: Record<string, unknown> }> {
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
    signal,
  });
  const data = (await response.json().catch(() => ({}))) as Record<string, unknown>;
  return { ok: response.ok, status: response.status, data };
}

/** Cloud SSE: true provider token stream with final JSON payload. */
export async function fetchCloudStreamWithAbort(
  url: string,
  body: Record<string, unknown>,
  onDisplayText: (displayText: string) => void,
  signal?: AbortSignal
): Promise<{ ok: boolean; status: number; data: Record<string, unknown> }> {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "text/event-stream",
    },
    body: JSON.stringify({ ...body, stream: true }),
    signal,
  });

  if (!response.ok) {
    const data = (await response.json().catch(() => ({}))) as Record<string, unknown>;
    return { ok: false, status: response.status, data };
  }

  if (!response.body) {
    return { ok: false, status: response.status, data: { error: "Empty stream body" } };
  }

  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let buffer = "";
  let doneData: Record<string, unknown> | null = null;
  let errorMsg = "";

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    buffer += decoder.decode(value, { stream: true });
    buffer = parseAiSseEvents(buffer, (event: AiSseEvent) => {
      if (event.type === "token") {
        onDisplayText(proseFromPartialJson(event.full));
      } else if (event.type === "done") {
        doneData = event.data;
      } else if (event.type === "error") {
        errorMsg = event.error;
      }
    });
  }

  if (errorMsg) {
    return { ok: false, status: 502, data: { error: errorMsg } };
  }
  if (!doneData) {
    return { ok: false, status: 502, data: { error: "Stream ended without final payload" } };
  }
  return { ok: true, status: 200, data: doneData };
}

/** Prefer SSE when streaming; fall back to JSON on failure. */
export async function fetchCloudAiWithAbort(
  url: string,
  body: Record<string, unknown>,
  onDisplayText: (displayText: string) => void,
  signal?: AbortSignal
): Promise<{ ok: boolean; status: number; data: Record<string, unknown> }> {
  try {
    return await fetchCloudStreamWithAbort(url, body, onDisplayText, signal);
  } catch (error) {
    if (signal?.aborted) throw error;
    return fetchJsonWithAbort(url, body, signal);
  }
}
