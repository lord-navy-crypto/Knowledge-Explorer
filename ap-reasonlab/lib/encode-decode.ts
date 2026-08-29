/** Base64 and URL encode/decode helpers (browser-safe). */

export function encodeBase64(text: string): string {
  const bytes = new TextEncoder().encode(text);
  let binary = "";
  for (let i = 0; i < bytes.length; i += 1) binary += String.fromCharCode(bytes[i]!);
  return btoa(binary);
}

export function decodeBase64(encoded: string): string {
  const binary = atob(encoded.trim());
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i += 1) bytes[i] = binary.charCodeAt(i);
  return new TextDecoder().decode(bytes);
}

export function encodeUriComponent(text: string): string {
  return encodeURIComponent(text);
}

export function decodeUriComponent(text: string): string {
  return decodeURIComponent(text);
}

export function encodeUri(text: string): string {
  return encodeURI(text);
}

export function decodeUri(text: string): string {
  return decodeURI(text);
}

export function encodeHex(text: string): string {
  const bytes = new TextEncoder().encode(text);
  return Array.from(bytes)
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export function decodeHex(hex: string): string {
  const clean = hex.replace(/[^0-9a-f]/gi, "");
  if (!clean) return "";
  if (clean.length % 2 !== 0) throw new Error("Odd hex length");
  const bytes = new Uint8Array(clean.length / 2);
  for (let i = 0; i < bytes.length; i += 1) {
    bytes[i] = Number.parseInt(clean.slice(i * 2, i * 2 + 2), 16);
  }
  return new TextDecoder().decode(bytes);
}

const HTML_ENCODE: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
};

export function encodeHtmlEntities(text: string): string {
  return text.replace(/[&<>"']/g, (ch) => HTML_ENCODE[ch] || ch);
}

export function decodeHtmlEntities(text: string): string {
  const named: Record<string, string> = {
    amp: "&",
    lt: "<",
    gt: ">",
    quot: '"',
    apos: "'",
    nbsp: " ",
  };
  return text.replace(/&(#x?[0-9a-f]+|[a-z]+);/gi, (full, ent: string) => {
    if (ent.startsWith("#")) {
      const n =
        ent[1] === "x" || ent[1] === "X"
          ? Number.parseInt(ent.slice(2), 16)
          : Number.parseInt(ent.slice(1), 10);
      if (!Number.isFinite(n)) return full;
      try {
        return String.fromCodePoint(n);
      } catch {
        return full;
      }
    }
    return named[ent.toLowerCase()] || full;
  });
}

/** Decode JWT header + payload locally (does not verify the signature). */
export function peekJwt(token: string): string {
  const parts = token.trim().split(".");
  if (parts.length < 2) throw new Error("Not a JWT — need header.payload.signature");
  const decodePart = (part: string) => {
    const padded = part.replace(/-/g, "+").replace(/_/g, "/") + "=".repeat((4 - (part.length % 4)) % 4);
    return JSON.parse(decodeBase64(padded));
  };
  return JSON.stringify(
    {
      header: decodePart(parts[0]!),
      payload: decodePart(parts[1]!),
      signaturePresent: Boolean(parts[2]),
    },
    null,
    2
  );
}
