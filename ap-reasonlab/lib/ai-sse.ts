/** Server-sent events helpers for cloud AI streaming. */

export type AiSseEvent =
  | { type: "token"; text: string; full: string }
  | { type: "done"; data: Record<string, unknown> }
  | { type: "error"; error: string };

export function encodeAiSseEvent(event: AiSseEvent): Uint8Array {
  return new TextEncoder().encode(`data: ${JSON.stringify(event)}\n\n`);
}

export function parseAiSseEvents(
  chunk: string,
  onEvent: (event: AiSseEvent) => void
): string {
  const lines = chunk.split("\n");
  const remainder = lines.pop() || "";
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed.startsWith("data:")) continue;
    const payload = trimmed.slice(5).trim();
    if (!payload) continue;
    try {
      onEvent(JSON.parse(payload) as AiSseEvent);
    } catch {
      // ignore
    }
  }
  return remainder;
}

export const AI_SSE_HEADERS = {
  "Content-Type": "text/event-stream; charset=utf-8",
  "Cache-Control": "no-cache, no-transform",
  Connection: "keep-alive",
} as const;
