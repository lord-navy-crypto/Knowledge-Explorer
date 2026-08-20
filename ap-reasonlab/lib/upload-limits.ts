/** Shared upload limits for Manage + front-end panels (base64 JSON storage). */

/** Raw file byte cap before encoding (~750KB → ~1MB data URL). */
export const MAX_UPLOAD_FILE_BYTES = 750_000;

/** Max data URL character length accepted by /api/edit. */
export const MAX_UPLOAD_DATA_URL_CHARS = 1_500_000;

/** Max total data URL chars in one multi-file POST (avoids platform 413). */
export const MAX_UPLOAD_BATCH_DATA_URL_CHARS = 2_500_000;

/** Public contribution per-file cap (stricter than editor). */
export const MAX_PUBLIC_UPLOAD_DATA_URL_CHARS = 1_000_000;

export function assertUploadableFile(file: File, label = file.name): void {
  if (file.size > MAX_UPLOAD_FILE_BYTES) {
    throw new Error(
      `“${label}” is too large (keep each file under ~750 KB). Compress images first if needed.`
    );
  }
}

export function assertUploadableDataUrl(dataUrl: string, label = "File"): void {
  if (dataUrl.length > MAX_UPLOAD_DATA_URL_CHARS) {
    throw new Error(`“${label}” is too large after encoding (keep under ~1 MB).`);
  }
}
