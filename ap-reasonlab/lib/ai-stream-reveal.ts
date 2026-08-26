/**
 * Progressive reveal for cloud JSON replies — paints like streaming without provider SSE.
 */

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
