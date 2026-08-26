import { readFile, writeFile } from "fs/promises";
import path from "path";
import {
  emptyManagedContent,
  normalizeManagedContent,
  type ManagedContent,
  type UsersFile,
} from "@/lib/managed-types";

export type {
  ManagedDocument,
  ManagedFile,
  ManagedFolder,
  ManagedTopic,
  ManagedSubject,
  ManagedUnit,
  ManagedContentItem,
  ManagedForumReply,
  ManagedForumPost,
  ManagedContent,
  StoredUser,
  UsersFile,
} from "@/lib/managed-types";

export {
  emptyManagedContent,
  normalizeSubjects,
  managedSubjectNames,
  canonicalizeSubjectId,
  canonicalizeSubjectName,
  subjectIdsMatch,
  subjectsMatch,
  normalizeManagedContent,
  uid,
} from "@/lib/managed-types";

const CONTENT_PATH = path.join(process.cwd(), "data", "managed-content.json");
const USERS_PATH = path.join(process.cwd(), "data", "users.json");

const emptyUsers = (): UsersFile => ({ users: [], updatedAt: 0 });

/** Strip paste/env accidents that cause GitHub "Bad credentials" (401). */
export function sanitizeGithubToken(raw?: string | null): string {
  if (!raw) return "";
  let t = String(raw).trim();
  // Common Vercel/UI mistakes: wrapping quotes or accidental Bearer prefix
  if (
    (t.startsWith('"') && t.endsWith('"')) ||
    (t.startsWith("'") && t.endsWith("'"))
  ) {
    t = t.slice(1, -1).trim();
  }
  if (/^bearer\s+/i.test(t)) t = t.replace(/^bearer\s+/i, "").trim();
  return t;
}

/** True when the string looks like a GitHub PAT (not a content change code). */
export function looksLikeGithubPat(raw?: string | null): boolean {
  const t = sanitizeGithubToken(raw);
  return /^(ghp_|github_pat_|gho_|ghu_|ghs_|ghr_)/.test(t);
}

/**
 * Repo Save / publish tokens ONLY.
 *
 * Owner setup:
 * - GITHUB_TOKEN = real GitHub PAT for writing managed-content.json to the repo
 * - CONTENT_GITHUB_TOKEN = GitHub Models AI key (see lib/ai-client.ts) — NOT used here
 */
export function githubAuthCandidates(override?: string | null): string[] {
  const fromClient = sanitizeGithubToken(override);
  const envOnes = [process.env.GITHUB_TOKEN, process.env.GH_TOKEN].map(sanitizeGithubToken);

  const ordered: string[] = [];
  const push = (t: string) => {
    if (t && !ordered.includes(t)) ordered.push(t);
  };

  if (fromClient && looksLikeGithubPat(fromClient)) push(fromClient);
  for (const t of envOnes) {
    if (t && looksLikeGithubPat(t)) push(t);
  }
  for (const t of envOnes) {
    if (t) push(t);
  }
  return ordered;
}

/** First usable write token (UI override → GITHUB_TOKEN → GH_TOKEN). */
export function resolveGithubAuth(override?: string | null): string {
  return githubAuthCandidates(override)[0] || "";
}

function repoSettings() {
  return {
    token: resolveGithubAuth(),
    repo: process.env.GITHUB_REPO || "lord-navy-crypto/ap-webside",
    branch: process.env.GITHUB_BRANCH || "main",
  };
}

const MANAGED_CONTENT_REPO_PATH = "ap-reasonlab/data/managed-content.json";

export type ManagedContentHistoryEntry = {
  sha: string;
  message: string;
  author: string;
  date: string;
  url: string;
};

async function readJsonFile<T>(filePath: string, fallback: T): Promise<T> {
  try {
    const raw = await readFile(filePath, "utf8");
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

async function writeJsonFile(filePath: string, data: unknown): Promise<void> {
  await writeFile(filePath, JSON.stringify(data, null, 2) + "\n", "utf8");
}

async function githubGet(
  filePathInRepo: string,
  token?: string,
  ref?: string
): Promise<{ text: string; sha: string } | null> {
  const { repo, branch } = repoSettings();
  const candidates = [...githubAuthCandidates(token), ""];

  const apiPath = filePathInRepo.replace(/^\/+/, "");
  const url = `https://api.github.com/repos/${repo}/contents/${apiPath}?ref=${encodeURIComponent(
    ref || branch
  )}`;

  for (const auth of candidates) {
    const res = await fetch(url, {
      headers: {
        ...(auth ? { Authorization: `Bearer ${auth}` } : {}),
        Accept: "application/vnd.github+json",
      },
      cache: "no-store",
    });
    if (res.status === 404) return null;
    if (!res.ok) continue;
    const body = await res.json();
    // Directory listing — not a file.
    if (Array.isArray(body) || !body?.sha) continue;

    let text = "";
    if (typeof body.content === "string" && body.content.length > 0) {
      text = Buffer.from(String(body.content).replace(/\n/g, ""), "base64").toString("utf8");
    } else if (typeof body.download_url === "string" && body.download_url) {
      // Files over ~1MB omit inline content; fetch via download_url or git blob.
      const raw = await fetch(body.download_url, {
        headers: {
          ...(auth ? { Authorization: `Bearer ${auth}` } : {}),
          Accept: "application/vnd.github.raw",
        },
        cache: "no-store",
      });
      if (raw.ok) text = await raw.text();
    }

    if (!text && auth) {
      const blobRes = await fetch(`https://api.github.com/repos/${repo}/git/blobs/${body.sha}`, {
        headers: {
          Authorization: `Bearer ${auth}`,
          Accept: "application/vnd.github+json",
        },
        cache: "no-store",
      });
      if (blobRes.ok) {
        const blob = await blobRes.json();
        if (blob?.encoding === "base64" && typeof blob.content === "string") {
          text = Buffer.from(String(blob.content).replace(/\n/g, ""), "base64").toString("utf8");
        }
      }
    }

    // Return sha even when text is empty so writers can update existing files.
    return { text, sha: String(body.sha) };
  }
  return null;
}

/** Contents API rejects bodies over ~1MB — use Git Data API for large files. */
const CONTENTS_API_SOFT_LIMIT = 900_000;

async function githubWriteViaGitData(
  apiPath: string,
  content: string,
  message: string,
  auth: string,
  repo: string,
  branch: string
): Promise<{ ok: true } | { ok: false; status: number; text: string }> {
  const headers = {
    Authorization: `Bearer ${auth}`,
    Accept: "application/vnd.github+json",
    "Content-Type": "application/json",
  };

  const refRes = await fetch(`https://api.github.com/repos/${repo}/git/ref/heads/${branch}`, {
    headers,
    cache: "no-store",
  });
  if (!refRes.ok) {
    return { ok: false, status: refRes.status, text: await refRes.text() };
  }
  const refBody = await refRes.json();
  const parentCommitSha = String(refBody?.object?.sha || "");
  if (!parentCommitSha) {
    return { ok: false, status: 500, text: "Could not resolve branch head commit." };
  }

  const commitRes = await fetch(`https://api.github.com/repos/${repo}/git/commits/${parentCommitSha}`, {
    headers,
    cache: "no-store",
  });
  if (!commitRes.ok) {
    return { ok: false, status: commitRes.status, text: await commitRes.text() };
  }
  const commitBody = await commitRes.json();
  const baseTreeSha = String(commitBody?.tree?.sha || "");
  if (!baseTreeSha) {
    return { ok: false, status: 500, text: "Could not resolve base tree." };
  }

  const blobRes = await fetch(`https://api.github.com/repos/${repo}/git/blobs`, {
    method: "POST",
    headers,
    body: JSON.stringify({ content, encoding: "utf-8" }),
  });
  if (!blobRes.ok) {
    return { ok: false, status: blobRes.status, text: await blobRes.text() };
  }
  const blobBody = await blobRes.json();
  const blobSha = String(blobBody?.sha || "");
  if (!blobSha) {
    return { ok: false, status: 500, text: "Git blob create returned no sha." };
  }

  const treeRes = await fetch(`https://api.github.com/repos/${repo}/git/trees`, {
    method: "POST",
    headers,
    body: JSON.stringify({
      base_tree: baseTreeSha,
      tree: [{ path: apiPath, mode: "100644", type: "blob", sha: blobSha }],
    }),
  });
  if (!treeRes.ok) {
    return { ok: false, status: treeRes.status, text: await treeRes.text() };
  }
  const treeBody = await treeRes.json();
  const treeSha = String(treeBody?.sha || "");
  if (!treeSha) {
    return { ok: false, status: 500, text: "Git tree create returned no sha." };
  }

  const newCommitRes = await fetch(`https://api.github.com/repos/${repo}/git/commits`, {
    method: "POST",
    headers,
    body: JSON.stringify({
      message,
      tree: treeSha,
      parents: [parentCommitSha],
    }),
  });
  if (!newCommitRes.ok) {
    return { ok: false, status: newCommitRes.status, text: await newCommitRes.text() };
  }
  const newCommitBody = await newCommitRes.json();
  const newCommitSha = String(newCommitBody?.sha || "");
  if (!newCommitSha) {
    return { ok: false, status: 500, text: "Git commit create returned no sha." };
  }

  const updateRef = await fetch(`https://api.github.com/repos/${repo}/git/refs/heads/${branch}`, {
    method: "PATCH",
    headers,
    body: JSON.stringify({ sha: newCommitSha }),
  });
  if (!updateRef.ok) {
    return { ok: false, status: updateRef.status, text: await updateRef.text() };
  }
  return { ok: true };
}

async function githubWrite(
  filePathInRepo: string,
  content: string,
  message: string,
  token?: string
): Promise<{ ok: true } | { ok: false; error: string }> {
  const { repo, branch } = repoSettings();
  const candidates = githubAuthCandidates(token);
  if (candidates.length === 0) {
    return {
      ok: false,
      error:
        "No GitHub write token. Set GITHUB_TOKEN on Vercel to your real repo-write PAT (ghp_ / github_pat_), Redeploy, leave the optional GitHub field empty. CONTENT_GITHUB_TOKEN is for GitHub Models AI only — it is not used for Save.",
    };
  }

  const apiPath = filePathInRepo.replace(/^\/+/, "");
  const url = `https://api.github.com/repos/${repo}/contents/${apiPath}`;
  const useGitData = Buffer.byteLength(content, "utf8") > CONTENTS_API_SOFT_LIMIT;

  let lastStatus = 0;
  let lastText = "";

  for (const auth of candidates) {
    if (useGitData) {
      const viaData = await githubWriteViaGitData(apiPath, content, message, auth, repo, branch);
      if (viaData.ok) return { ok: true };
      lastStatus = viaData.status;
      lastText = viaData.text;
      if (viaData.status !== 401) break;
      continue;
    }

    const existing = await githubGet(apiPath, auth);
    const payload: Record<string, unknown> = {
      message,
      content: Buffer.from(content, "utf8").toString("base64"),
      branch,
    };
    // Updating an existing file REQUIRES sha. Creating a new file must omit it.
    if (existing?.sha) payload.sha = existing.sha;

    const putRes = await fetch(url, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${auth}`,
        Accept: "application/vnd.github+json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    if (putRes.ok) return { ok: true };
    lastStatus = putRes.status;
    lastText = await putRes.text();

    // Retry once via Git Data if Contents API rejects for size/sha quirks.
    if (
      putRes.status === 422 &&
      (/sha/i.test(lastText) || /too large|1 mb|1mb/i.test(lastText))
    ) {
      const viaData = await githubWriteViaGitData(apiPath, content, message, auth, repo, branch);
      if (viaData.ok) return { ok: true };
      lastStatus = viaData.status;
      lastText = viaData.text;
      if (viaData.status !== 401) break;
      continue;
    }

    if (putRes.status !== 401) break;
  }

  let hint = "";
  if (lastStatus === 401) {
    hint =
      " Bad credentials: GITHUB_TOKEN on Vercel is wrong/expired/revoked. Put your real repo-write PAT into GITHUB_TOKEN, Redeploy. CONTENT_GITHUB_TOKEN is for GitHub Models AI (not Save). Do not paste the content change code into the GitHub token field.";
  } else if (lastStatus === 403) {
    hint =
      " Token was accepted but lacks write access. Fine-grained PAT: repo ap-webside + Contents: Read and write. Classic PAT: repo scope.";
  } else if (lastStatus === 422 && /sha/i.test(lastText)) {
    hint =
      " File already exists on GitHub but its sha could not be read (often when managed-content.json is over 1MB). Retry after redeploy; large saves now use the Git Data API.";
  }
  return {
    ok: false,
    error: `GitHub write failed (${lastStatus}): ${lastText.slice(0, 300)}${hint}`,
  };
}

/**
 * Brief in-memory cache for repeated reads in one request burst.
 * Keep very short — longer TTLs made deletes look "undone" on multi-instance refresh.
 */
const MANAGED_LOAD_TTL_MS = 1_500;
let managedLoadCache: { at: number; key: string; content: ManagedContent } | null = null;

export function invalidateManagedContentCache(): void {
  managedLoadCache = null;
}

function rememberCached(key: string, content: ManagedContent) {
  managedLoadCache = { at: Date.now(), key, content };
}

export async function loadManagedContent(token?: string): Promise<ManagedContent> {
  const key = sanitizeGithubToken(token) || "__default__";
  const now = Date.now();
  if (
    managedLoadCache &&
    managedLoadCache.key === key &&
    now - managedLoadCache.at < MANAGED_LOAD_TTL_MS
  ) {
    return managedLoadCache.content;
  }

  let content: ManagedContent;
  const fromGh = await githubGet(MANAGED_CONTENT_REPO_PATH, token);
  if (fromGh?.text) {
    try {
      content = normalizeManagedContent(JSON.parse(fromGh.text) as ManagedContent);
      rememberCached(key, content);
      return content;
    } catch {
      // fall through
    }
  }
  content = normalizeManagedContent(await readJsonFile(CONTENT_PATH, emptyManagedContent()));
  rememberCached(key, content);
  return content;
}

export async function loadManagedContentAtRef(
  ref: string,
  token?: string
): Promise<ManagedContent | null> {
  if (!/^[a-f0-9]{40}$/i.test(ref)) return null;
  const fromGithub = await githubGet(MANAGED_CONTENT_REPO_PATH, token, ref);
  if (!fromGithub?.text) return null;
  try {
    return normalizeManagedContent(JSON.parse(fromGithub.text) as ManagedContent);
  } catch {
    return null;
  }
}

export async function listManagedContentHistory(
  token?: string,
  limit = 20
): Promise<ManagedContentHistoryEntry[]> {
  const { repo, branch } = repoSettings();
  const candidates = [...githubAuthCandidates(token), ""];
  const safeLimit = Math.max(2, Math.min(50, Math.floor(limit)));
  const url = new URL(`https://api.github.com/repos/${repo}/commits`);
  url.searchParams.set("path", MANAGED_CONTENT_REPO_PATH);
  url.searchParams.set("sha", branch);
  url.searchParams.set("per_page", String(safeLimit));

  for (const auth of candidates) {
    const response = await fetch(url, {
      headers: {
        ...(auth ? { Authorization: `Bearer ${auth}` } : {}),
        Accept: "application/vnd.github+json",
      },
      cache: "no-store",
    });
    if (!response.ok) continue;
    const rows = (await response.json()) as Array<{
      sha?: string;
      html_url?: string;
      commit?: {
        message?: string;
        author?: { name?: string; date?: string };
        committer?: { name?: string; date?: string };
      };
    }>;
    return rows
      .filter((row) => row.sha && row.commit)
      .map((row) => ({
        sha: String(row.sha),
        message: String(row.commit?.message || "Managed content update").split("\n")[0],
        author: String(
          row.commit?.author?.name || row.commit?.committer?.name || "Liji Explore Manager"
        ),
        date: String(row.commit?.author?.date || row.commit?.committer?.date || ""),
        url: String(row.html_url || ""),
      }));
  }
  return [];
}

function mergeRowsById<T extends { id: string }>(
  live: T[],
  incoming: T[],
  deletedIds: Set<string>,
  stamp: (row: T) => number
): T[] {
  const map = new Map<string, T>();
  for (const row of live) {
    if (!deletedIds.has(row.id)) map.set(row.id, row);
  }
  for (const row of incoming) {
    if (deletedIds.has(row.id)) {
      map.delete(row.id);
      continue;
    }
    const prev = map.get(row.id);
    if (!prev || stamp(row) >= stamp(prev)) map.set(row.id, row);
  }
  return [...map.values()];
}

export async function saveManagedContent(
  data: ManagedContent,
  token?: string,
  message = "chore: update managed content via Admin UI",
  options?: { baseUpdatedAt?: number }
): Promise<{ mode: "github" | "local"; content: ManagedContent }> {
  const incoming = normalizeManagedContent(data);
  let next = { ...incoming, updatedAt: Date.now() };

  // Protect deletes / concurrent adds against stale overwrites (old Manage tab / page panel).
  try {
    invalidateManagedContentCache();
    const live = normalizeManagedContent(await loadManagedContent(token));
    const clientFresh =
      typeof options?.baseUpdatedAt === "number" &&
      options.baseUpdatedAt > 0 &&
      options.baseUpdatedAt === live.updatedAt;

    const incomingActiveIds = new Set<string>([
      ...(incoming.files || []).map((row) => row.id),
      ...(incoming.documents || []).map((row) => row.id),
      ...(incoming.folders || []).map((row) => row.id),
      ...(incoming.members || []).map((row) => row.id),
      ...(incoming.concepts || []).map((row) => row.id),
      ...(incoming.formulas || []).map((row) => row.id),
      ...(incoming.topics || []).map((row) => row.id),
      ...(incoming.questionnaires || []).map((row) => row.id),
      ...(incoming.subjects || []).map((row) => row.id),
      ...(incoming.units || []).map((row) => row.id),
      ...(incoming.contentItems || []).map((row) => row.id),
      ...(incoming.forumPosts || []).map((row) => row.id),
    ]);

    const liveDeleted = new Set(live.deletedIds || []);
    const incomingDeleted = new Set(incoming.deletedIds || []);
    const mergedDeletedSet = new Set<string>([...liveDeleted, ...incomingDeleted]);
    // Allow restores: id was tombstoned live, client removed tombstone and put the row back.
    for (const id of liveDeleted) {
      if (!incomingDeleted.has(id) && incomingActiveIds.has(id)) {
        mergedDeletedSet.delete(id);
      }
    }

    const byId = new Map<string, (typeof live.recycleBin)[number]>();
    for (const entry of [...(live.recycleBin || []), ...(incoming.recycleBin || [])]) {
      const prev = byId.get(entry.id);
      if (!prev || (entry.deletedAt || 0) >= (prev.deletedAt || 0)) byId.set(entry.id, entry);
    }
    // Drop recycle rows that were restored into active collections.
    for (const [entryId, entry] of [...byId.entries()]) {
      const payloadId =
        entry.payload && typeof entry.payload === "object"
          ? String((entry.payload as { id?: string }).id || "")
          : "";
      if (payloadId && incomingActiveIds.has(payloadId) && !incomingDeleted.has(payloadId)) {
        byId.delete(entryId);
      }
    }
    // Empty / purge recycle: keep only live bin rows the client never knew about (newer deletes).
    const incomingBin = incoming.recycleBin || [];
    const mergedRecycle = clientFresh
      ? [...incomingBin]
      : incomingBin.length === 0
        ? (live.recycleBin || []).filter((entry) => {
            const payloadId =
              entry.payload && typeof entry.payload === "object"
                ? String((entry.payload as { id?: string }).id || "")
                : "";
            return Boolean(payloadId) && !incomingDeleted.has(payloadId);
          })
        : [...byId.values()].sort((a, b) => (b.deletedAt || 0) - (a.deletedAt || 0));

    const mergedDeleted = [...mergedDeletedSet];
    const deletedSet = new Set(mergedDeleted);

    // Stale clients: union additive collections by id so front/back uploads don't wipe each other.
    const files = clientFresh
      ? incoming.files
      : mergeRowsById(live.files || [], incoming.files || [], deletedSet, (row) => row.uploadedAt || 0);
    const documents = clientFresh
      ? incoming.documents
      : mergeRowsById(
          live.documents || [],
          incoming.documents || [],
          deletedSet,
          (row) => row.updatedAt || 0
        );
    const folders = clientFresh
      ? incoming.folders
      : mergeRowsById(
          live.folders || [],
          incoming.folders || [],
          deletedSet,
          (row) => row.createdAt || 0
        );
    const members = clientFresh
      ? incoming.members
      : mergeRowsById(
          live.members || [],
          incoming.members || [],
          deletedSet,
          (row) => row.addedAt || 0
        );
    const concepts = clientFresh
      ? incoming.concepts
      : mergeRowsById(
          live.concepts || [],
          incoming.concepts || [],
          deletedSet,
          (row) => Number((row as { updatedAt?: number }).updatedAt || 0)
        );
    const formulas = clientFresh
      ? incoming.formulas
      : mergeRowsById(
          live.formulas || [],
          incoming.formulas || [],
          deletedSet,
          (row) => Number((row as { updatedAt?: number }).updatedAt || 0)
        );
    const topics = clientFresh
      ? incoming.topics
      : mergeRowsById(
          live.topics || [],
          incoming.topics || [],
          deletedSet,
          (row) => row.createdAt || 0
        );
    const questionnaires = clientFresh
      ? incoming.questionnaires
      : mergeRowsById(
          live.questionnaires || [],
          incoming.questionnaires || [],
          deletedSet,
          (row) => Number((row as { updatedAt?: number }).updatedAt || 0)
        );
    const subjects = clientFresh
      ? incoming.subjects
      : mergeRowsById(
          live.subjects || [],
          incoming.subjects || [],
          deletedSet,
          (row) => row.createdAt || 0
        );
    const pickMerged = <T extends { id: string }>(
      liveRows: T[],
      incomingRows: T[] | undefined,
      stamp: (row: T) => number
    ) => {
      const incomingList = incomingRows || [];
      // Never let an empty array wipe additive collections — even on a "fresh" client.
      if (clientFresh && incomingList.length > 0) return incomingList;
      return mergeRowsById(liveRows, incomingList, deletedSet, stamp);
    };

    const contentItems = pickMerged(
      live.contentItems || [],
      incoming.contentItems,
      (row) => Number((row as { updatedAt?: number }).updatedAt || 0)
    );
    const units = pickMerged(
      live.units || [],
      incoming.units,
      (row) => Number((row as { createdAt?: number }).createdAt || 0)
    );
    const forumPosts = pickMerged(
      live.forumPosts || [],
      incoming.forumPosts,
      (row) => Number((row as { createdAt?: number; updatedAt?: number }).updatedAt || (row as { createdAt?: number }).createdAt || 0)
    );

    next = normalizeManagedContent({
      ...incoming,
      files,
      documents,
      folders,
      members,
      concepts,
      formulas,
      topics,
      questionnaires,
      subjects,
      units,
      contentItems,
      forumPosts,
      recycleBin: mergedRecycle,
      deletedIds: mergedDeleted,
      // Settings: prefer incoming when fresh, else keep live knobs if client omitted them.
      settings: clientFresh
        ? incoming.settings
        : {
            advancedDefault: Boolean(
              incoming.settings?.advancedDefault ?? live.settings?.advancedDefault
            ),
          },
      updatedAt: Date.now(),
    });
  } catch {
    /* keep incoming only */
  }

  const text = JSON.stringify(next, null, 2) + "\n";
  const viaGithub = await githubWrite(
    MANAGED_CONTENT_REPO_PATH,
    text,
    message,
    token
  );
  async function afterPersist(mode: "github" | "local") {
    const key = sanitizeGithubToken(token) || "__default__";
    rememberCached(key, next);
    try {
      const { invalidateAiSiteSearchCache } = await import("@/lib/ai-site-context-server");
      invalidateAiSiteSearchCache();
    } catch {
      /* optional */
    }
    try {
      const { invalidateSiteAiTierCache } = await import("@/lib/ai-tiers-managed");
      invalidateSiteAiTierCache();
    } catch {
      /* optional */
    }
    return { mode, content: next };
  }

  if (viaGithub.ok) {
    return afterPersist("github");
  }

  // Local/dev fallback — fails on Vercel read-only FS.
  try {
    await writeJsonFile(CONTENT_PATH, next);
    return afterPersist("local");
  } catch {
    throw new Error(viaGithub.error);
  }
}

export async function loadUsers(token?: string): Promise<UsersFile> {
  const fromGh = await githubGet("ap-reasonlab/data/users.json", token);
  if (fromGh?.text) {
    try {
      return JSON.parse(fromGh.text) as UsersFile;
    } catch {
      // fall through
    }
  }
  return readJsonFile(USERS_PATH, emptyUsers());
}

export async function saveUsers(
  data: UsersFile,
  token?: string
): Promise<{ mode: "github" | "local" }> {
  const next = { ...data, updatedAt: Date.now() };
  const text = JSON.stringify(next, null, 2) + "\n";
  const repoPath = "ap-reasonlab/data/users.json";
  const viaGithub = await githubWrite(repoPath, text, "chore: update users via Admin UI", token);
  if (viaGithub.ok) return { mode: "github" };
  try {
    await writeJsonFile(USERS_PATH, next);
    return { mode: "local" };
  } catch {
    throw new Error(viaGithub.error);
  }
}
