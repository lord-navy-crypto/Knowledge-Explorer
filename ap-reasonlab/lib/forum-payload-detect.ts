/** Detect JSON / Base64 payloads in forum posts for tool launchers. */

export function extractForumJsonPayloads(body: string): string[] {
  const out: string[] = [];
  const fence = /```json[^\n]*\n([\s\S]*?)```/gi;
  let match: RegExpExecArray | null;
  while ((match = fence.exec(body)) !== null) {
    const raw = match[1]?.trim();
    if (!raw) continue;
    try {
      JSON.parse(raw);
      out.push(raw);
    } catch {
      /* skip invalid */
    }
  }
  return out.slice(0, 4);
}

export function extractForumBase64Payloads(body: string): string[] {
  const out: string[] = [];
  const fence = /```(?:base64|b64)[^\n]*\n([\s\S]*?)```/gi;
  let match: RegExpExecArray | null;
  while ((match = fence.exec(body)) !== null) {
    const raw = match[1]?.trim();
    if (raw) out.push(raw);
  }
  const dataUrl = /data:[^;]+;base64,([A-Za-z0-9+/=\s]+)/g;
  while ((match = dataUrl.exec(body)) !== null) {
    const raw = match[1]?.replace(/\s+/g, "");
    if (raw && raw.length >= 16) out.push(raw);
  }
  return out.slice(0, 4);
}
