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
