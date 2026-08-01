/** Helpers for the C# training editor. */

export function normalizeCsharpSource(source: string): string {
  return source.replace(/\r\n/g, "\n");
}

/** Best-effort entry class name for download. */
export function detectCsharpClass(source: string): string | null {
  const match = source.match(/(?:public\s+)?(?:static\s+)?class\s+([A-Za-z_][A-Za-z0-9_]*)/);
  return match?.[1] || null;
}

export function csharpDownloadFilename(source: string): string {
  return `${detectCsharpClass(source) || "Program"}.cs`;
}
