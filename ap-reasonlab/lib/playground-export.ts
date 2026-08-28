export async function copySource(code: string): Promise<boolean> {
  if (typeof navigator === "undefined" || !navigator.clipboard) return false;
  try {
    await navigator.clipboard.writeText(code);
    return true;
  } catch {
    return false;
  }
}

export function downloadSource(code: string, filename: string) {
  if (typeof document === "undefined") return;
  const blob = new Blob([code.replace(/\r\n/g, "\n")], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}
