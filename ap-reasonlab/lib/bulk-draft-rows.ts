/** Shared multi-row draft rows for bulk add forms (ChangePanel, Manage, etc.). */

export type BulkDraftEntry = {
  key: string;
  title: string;
  content: string;
  note: string;
  category: string;
  generationNote?: string;
  minutes?: string;
  difficultyTier?: string;
};

export function blankBulkDraftEntry(): BulkDraftEntry {
  return {
    key: `row-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    title: "",
    content: "",
    note: "",
    category: "Uploaded",
    generationNote: "",
    minutes: "20",
    difficultyTier: "2",
  };
}

export const BULK_ROW_LIMIT = 20;
export const BULK_FILE_LIMIT = 10;
