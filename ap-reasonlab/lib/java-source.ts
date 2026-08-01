/** Helpers for the Java writing editor / future remote runner. */

/** Best-effort public class name for download / compile file naming. */
export function detectJavaPublicClass(source: string): string | null {
  const match = source.match(/public\s+class\s+([A-Za-z_][A-Za-z0-9_]*)/);
  return match?.[1] || null;
}

export function javaDownloadFilename(source: string): string {
  return `${detectJavaPublicClass(source) || "Main"}.java`;
}

export function normalizeJavaSource(source: string): string {
  return source.replace(/\r\n/g, "\n");
}
