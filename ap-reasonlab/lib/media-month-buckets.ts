/** Virtual month folders for in-page media browsers (images, files, documents). */

export type MonthBucket<T> = {
  key: string;
  label: string;
  items: T[];
};

export function monthKeyFromTimestamp(ts: number): string {
  const d = new Date(ts);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  return `${y}-${m}`;
}

export function monthLabelFromKey(key: string): string {
  const [y, m] = key.split("-");
  const year = Number(y);
  const month = Number(m);
  if (!year || !month) return key;
  return new Date(year, month - 1, 1).toLocaleString("en-US", {
    month: "long",
    year: "numeric",
  });
}

export function groupByMonth<T>(
  items: T[],
  getTimestamp: (item: T) => number
): MonthBucket<T>[] {
  const map = new Map<string, T[]>();
  for (const item of items) {
    const ts = getTimestamp(item) || Date.now();
    const key = monthKeyFromTimestamp(ts);
    const list = map.get(key) || [];
    list.push(item);
    map.set(key, list);
  }
  return Array.from(map.entries())
    .sort(([a], [b]) => b.localeCompare(a))
    .map(([key, bucketItems]) => ({
      key,
      label: monthLabelFromKey(key),
      items: bucketItems.slice().sort((a, b) => getTimestamp(b) - getTimestamp(a)),
    }));
}

export function matchesMediaSearch(
  query: string,
  fields: Array<string | undefined | null>
): boolean {
  const q = query.trim().toLowerCase();
  if (!q) return true;
  return fields.some((field) => (field || "").toLowerCase().includes(q));
}
