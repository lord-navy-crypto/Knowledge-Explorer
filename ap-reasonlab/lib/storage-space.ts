/** Per-folder storage keys: each area + space is an isolated bucket. */

import { AP_CATALOG } from "@/data/ap-catalog";

export const ROOT_SPACE = "_root";

/** Areas that store files per AP subject (same subject identity). */
export const AP_SUBJECT_FILE_AREAS = [
  "ap-subject",
  "past-papers",
  "practice",
  "concepts",
  "formulas",
] as const;

export function normalizeSpace(space?: string | null): string {
  const s = (space || "").trim();
  return s || ROOT_SPACE;
}

export function folderSpaceId(folderId: string): string {
  return `folder:${folderId}`;
}

export function isFolderSpace(space: string): boolean {
  return space.startsWith("folder:");
}

export function parseFolderId(space: string): string | null {
  if (!isFolderSpace(space)) return null;
  return space.slice("folder:".length) || null;
}

/** Build navigation URL for a storage space under a page base path. */
export function spaceHref(
  basePath: string,
  space: string,
  extra?: Record<string, string>
): string {
  const [pathOnly, existingQuery = ""] = basePath.split("?", 2);
  const params = new URLSearchParams(existingQuery);
  if (extra) {
    for (const [key, value] of Object.entries(extra)) {
      if (value != null && value !== "") params.set(key, value);
    }
  }
  // Reset space selectors before applying the target space.
  params.delete("folder");
  params.delete("subject");
  if (space === ROOT_SPACE) {
    // keep other query keys (e.g. Forum ?tab=shared)
  } else if (isFolderSpace(space)) {
    const id = parseFolderId(space);
    if (id) params.set("folder", id);
  } else {
    params.set("subject", space);
  }
  const q = params.toString();
  return q ? `${pathOnly}?${q}` : pathOnly;
}

export function spaceFromSearchParams(params: {
  subject?: string | null;
  folder?: string | null;
}): string {
  if (params.folder?.trim()) return folderSpaceId(params.folder.trim());
  if (params.subject?.trim()) return canonicalSubjectSpace(params.subject.trim());
  return ROOT_SPACE;
}

/** Resolve catalog subject from slug, full name, or short name. */
export function resolveCatalogSubject(space: string) {
  const n = normalizeSpace(space);
  if (n === ROOT_SPACE || isFolderSpace(n)) return null;
  return (
    AP_CATALOG.find((s) => s.slug === n) ||
    AP_CATALOG.find((s) => s.name === n) ||
    AP_CATALOG.find((s) => s.shortName === n) ||
    null
  );
}

/**
 * Canonical subject space for storage writes: catalog full name when known.
 * Keeps live data (AP Physics 2) and UI labels aligned.
 */
export function canonicalSubjectSpace(space?: string | null): string {
  const n = normalizeSpace(space);
  if (n === ROOT_SPACE || isFolderSpace(n)) return n;
  // English hub historically used "hub" — same bucket as root.
  if (n === "hub") return ROOT_SPACE;
  const hit = resolveCatalogSubject(n);
  return hit?.name || n;
}

/** Normalize area+space on write so Finder and pages share one key. */
export function canonicalizeStorageKeys(area?: string | null, space?: string | null): {
  area: string;
  space: string;
} {
  let a = (area || "").trim();
  let sp = canonicalSubjectSpace(space);
  // Orphan bucket: ap + subject name → ap-subject (AP hub is only ap/_root)
  if (a === "ap" && sp !== ROOT_SPACE && resolveCatalogSubject(sp)) {
    a = "ap-subject";
  }
  if (a === "english" && sp === "hub") sp = ROOT_SPACE;
  return { area: a || "general", space: sp };
}

/** Slug / full name / short name are the same AP subject bucket. */
export function spaceAliases(space: string): Set<string> {
  const n = normalizeSpace(space);
  const set = new Set<string>([n]);
  if (n === "hub") set.add(ROOT_SPACE);
  if (n === ROOT_SPACE) set.add("hub");
  const hit = resolveCatalogSubject(n);
  if (hit) {
    set.add(hit.slug);
    set.add(hit.name);
    if (hit.shortName) set.add(hit.shortName);
  }
  return set;
}

function spacesMatch(itemSpace: string, space: string): boolean {
  if (itemSpace === normalizeSpace(space)) return true;
  return spaceAliases(space).has(itemSpace);
}

export function matchesSpace(
  item: { area?: string; space?: string },
  area: string,
  space: string
): boolean {
  const itemArea = item.area || "";
  const itemSpace = normalizeSpace(item.space);
  if (!item.area && !item.space) {
    // Legacy unscoped rows: only show in materials root to avoid leaking everywhere
    return area === "materials" && space === ROOT_SPACE;
  }
  if (itemArea !== area) return false;
  return spacesMatch(itemSpace, space);
}

/**
 * Macintosh HD / Manage: one AP subject folder shows files from all related
 * page buckets (subject media, exam-and-paper media, practice, concepts, formulas).
 */
export function matchesFolderItem(
  item: { area?: string; space?: string },
  area: string,
  space: string
): boolean {
  if (matchesSpace(item, area, space)) return true;
  if (area === "ap-subject" && normalizeSpace(space) !== ROOT_SPACE) {
    for (const related of AP_SUBJECT_FILE_AREAS) {
      if (related === "ap-subject") continue;
      if (matchesSpace(item, related, space)) return true;
    }
    // Legacy orphan: ap + subject name
    if (matchesSpace(item, "ap", space)) return true;
  }
  return false;
}

export function spaceLabel(space: string, folderTitle?: string): string {
  if (space === ROOT_SPACE) return "This area (root)";
  if (isFolderSpace(space)) return folderTitle || "Custom folder";
  return space;
}

/** Prefer catalog slug for /ap/[slug] links when space is a subject name. */
export function apSubjectHref(space: string): string {
  const n = normalizeSpace(space);
  const hit = resolveCatalogSubject(n);
  return hit ? `/ap/${hit.slug}` : `/ap/${encodeURIComponent(n)}`;
}
