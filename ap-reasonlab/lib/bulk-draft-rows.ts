/** Shared multi-row draft rows for bulk add forms (ChangePanel, Manage, etc.). */

export type BulkDraftEntry = {
  key: string;
  title: string;
  content: string;
  note: string;
  category: string;
};

export function blankBulkDraftEntry(): BulkDraftEntry {
  return {
    key: `row-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    title: "",
    content: "",
    note: "",
    category: "Uploaded",
  };
}

export const BULK_ROW_LIMIT = 20;
export const BULK_FILE_LIMIT = 10;
