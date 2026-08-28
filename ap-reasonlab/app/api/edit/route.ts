import { NextRequest, NextResponse } from "next/server";
import {
  canEditContent,
  resolveChangeLevel,
} from "@/lib/change-codes";
import { getContentEditorLevel, getGithubTokenFromCookie, setGithubTokenCookie } from "@/lib/auth";
import {
  loadManagedContent,
  saveManagedContent,
  looksLikeGithubPat,
  sanitizeGithubToken,
  normalizeManagedContent,
  canonicalizeSubjectId,
  canonicalizeSubjectName,
  subjectIdsMatch,
  subjectsMatch,
  uid,
  type ManagedContent,
} from "@/lib/managed-store";
import { subjectSlug } from "@/data/ap-catalog";
import type { QuestionFormat, QuestionnaireItem } from "@/lib/types";
import { normalizeAuthoredText } from "@/lib/unicode-math";
import {
  canonicalizeStorageKeys,
  matchesSpace,
  normalizeSpace,
  spaceAliases,
} from "@/lib/storage-space";
import { MAX_PUBLIC_UPLOAD_DATA_URL_CHARS, MAX_UPLOAD_BATCH_DATA_URL_CHARS, MAX_UPLOAD_DATA_URL_CHARS } from "@/lib/upload-limits";
import { validateForumPostInput, validateForumReplyInput } from "@/lib/forum-api";

const forumWriteTimes = new Map<string, number>();

function rememberDeleted(content: ManagedContent, id?: string | null) {
  if (!id) return;
  if (!Array.isArray(content.deletedIds)) content.deletedIds = [];
  if (!content.deletedIds.includes(id)) content.deletedIds.push(id);
}

function forgetDeleted(content: ManagedContent, id?: string | null) {
  if (!id || !Array.isArray(content.deletedIds)) return;
  content.deletedIds = content.deletedIds.filter((entry) => entry !== id);
}

function buildQuestionnaireItems(raw: unknown, fallbackHint?: string): QuestionnaireItem[] {
  if (!Array.isArray(raw) || raw.length === 0) return [];
  const out: QuestionnaireItem[] = [];
  for (const entry of raw.slice(0, 40)) {
    if (!entry || typeof entry !== "object") continue;
    const item = entry as Record<string, unknown>;
    const prompt = normalizeAuthoredText(String(item.prompt || item.firstPrompt || "")).trim();
    if (!prompt) continue;
    out.push({
      id: uid("m-item"),
      format: (String(item.format || "concept_check") as QuestionFormat) || "concept_check",
      prompt,
      hints: Array.isArray(item.hints)
        ? item.hints.map((h: unknown) => normalizeAuthoredText(String(h)))
        : [
            normalizeAuthoredText(
              String(item.hint || fallbackHint || "Attempt before asking AI for more hints.")
            ),
          ],
      visibleSteps: Array.isArray(item.visibleSteps)
        ? item.visibleSteps.map((s: unknown) => normalizeAuthoredText(String(s)))
        : undefined,
      blankSteps: Array.isArray(item.blankSteps)
        ? item.blankSteps.map((s: unknown) => normalizeAuthoredText(String(s)))
        : undefined,
      choices: Array.isArray(item.choices) ? item.choices.map(String) : undefined,
      conceptIntro: item.conceptIntro
        ? normalizeAuthoredText(String(item.conceptIntro))
        : undefined,
    });
  }
  return out;
}

/** Drop heavy dataUrls from save responses so clients don't hit Request Entity Too Large. */
function slimManagedContent(content: ManagedContent): ManagedContent {
  const slimFile = <T extends { dataUrl?: string; note?: string }>(file: T): Omit<T, "dataUrl"> => {
    if (!file.dataUrl) return file;
    const { dataUrl: _omit, ...rest } = file;
    return {
      ...rest,
      note: rest.note || "File stored — open this page folder to download.",
    };
  };

  return {
    ...content,
    files: (content.files || []).map((file) => slimFile(file)),
    recycleBin: (content.recycleBin || []).map((entry) => {
      const payload = entry.payload;
      if (!payload || typeof payload !== "object") return entry;
      const record = payload as { dataUrl?: string; note?: string };
      if (!record.dataUrl) return entry;
      return { ...entry, payload: slimFile(record) };
    }),
  };
}

function publicWriteRateLimited(req: NextRequest, minGapMs = 8_000): boolean {
  const client = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  const now = Date.now();
  const previous = forumWriteTimes.get(client) || 0;
  forumWriteTimes.set(client, now);
  return now - previous < minGapMs;
}

const FORUM_ATTACH_MAX_CHARS = 900_000; // ~data URL length

function sanitizeForumAttachments(
  raw: unknown,
  maxCount: number
): {
  items: { id: string; name: string; mime: string; fileId: string; size: number; dataUrl: string }[];
  error?: string;
} {
  if (raw == null) return { items: [] };
  if (!Array.isArray(raw)) return { items: [], error: "Invalid attachments" };
  if (raw.length > maxCount) {
    return { items: [], error: `At most ${maxCount} attachments allowed` };
  }
  const items: {
    id: string;
    name: string;
    mime: string;
    fileId: string;
    size: number;
    dataUrl: string;
  }[] = [];
  for (const entry of raw) {
    if (!entry || typeof entry !== "object") continue;
    const row = entry as { name?: string; mime?: string; dataUrl?: string; size?: number };
    const name = String(row.name || "attachment").slice(0, 200);
    const mime = String(row.mime || "application/octet-stream").slice(0, 120);
    const dataUrl = String(row.dataUrl || "");
    if (!dataUrl.startsWith("data:")) {
      return { items: [], error: "Attachment data missing" };
    }
    if (dataUrl.length > FORUM_ATTACH_MAX_CHARS) {
      return { items: [], error: `"${name}" is too large (keep each file under ~650KB)` };
    }
    const size = Number.isFinite(Number(row.size)) ? Number(row.size) : dataUrl.length;
    items.push({
      id: uid("forum-att"),
      name,
      mime,
      fileId: "", // filled when persisted
      size,
      dataUrl,
    });
  }
  return { items };
}

function persistForumAttachments(
  content: ManagedContent,
  prepared: { id: string; name: string; mime: string; fileId: string; size: number; dataUrl: string }[]
) {
  return prepared.map((att) => {
    const fileId = uid("m-file");
    content.files.unshift({
      id: fileId,
      name: att.name,
      mime: att.mime,
      dataUrl: att.dataUrl,
      note: "Forum discussion attachment",
      uploadedAt: Date.now(),
      uploadedBy: "forum",
      area: "forum",
      space: "_root",
    });
    return {
      id: att.id,
      name: att.name,
      mime: att.mime,
      fileId,
      size: att.size,
    };
  });
}

async function tokenFrom(body: { githubToken?: string }) {
  const t = sanitizeGithubToken(body.githubToken);
  if (t) {
    if (!looksLikeGithubPat(t)) {
      // Ignore content-change-code / junk pasted into the GitHub token field.
      return undefined;
    }
    await setGithubTokenCookie(t);
    return t;
  }
  const fromCookie = await getGithubTokenFromCookie();
  if (fromCookie && looksLikeGithubPat(fromCookie)) return fromCookie;
  return undefined;
}

export async function GET(req: NextRequest) {
  const token = await getGithubTokenFromCookie();
  const content = await loadManagedContent(token);
  const area = req.nextUrl.searchParams.get("area")?.trim() || "";
  const space = req.nextUrl.searchParams.get("space")?.trim() || "";
  const fileId = req.nextUrl.searchParams.get("fileId")?.trim() || "";
  const includeData = req.nextUrl.searchParams.get("includeData") === "1";
  const view = req.nextUrl.searchParams.get("view")?.trim() || "";

  if (fileId) {
    const file = (content.files || []).find((entry) => entry.id === fileId);
    if (!file) return NextResponse.json({ error: "File not found" }, { status: 404 });
    return NextResponse.json({ file });
  }

  // Optional scope: return only one area+folder bucket so panels stay separate.
  if (area) {
    const spaceKey = normalizeSpace(space);
    const aliasSet = spaceAliases(spaceKey);
    const inBucket = (item: { area?: string; space?: string }) =>
      matchesSpace(item, area, spaceKey);
    const subjectMatch = (value?: string) => {
      if (spaceKey === "_root") return !value || value === "_root";
      if (spaceKey.startsWith("folder:")) return value === spaceKey || value === space;
      return Boolean(value && aliasSet.has(value));
    };

    // Media panels only need files/docs/folders — skip huge concept/questionnaire payloads
    // that were making phones stutter / white-flash when every page opened a file box.
    if (view === "media") {
      const payload = {
        files: includeData
          ? (content.files || []).filter(inBucket)
          : slimManagedContent(content).files.filter(inBucket),
        documents: (content.documents || []).filter(inBucket),
        folders: (content.folders || []).filter((f) => matchesSpace(f, area, spaceKey)),
        subjects: content.subjects || [],
        updatedAt: content.updatedAt,
        scoped: { area, space: spaceKey, view: "media" },
      };
      const res = NextResponse.json(payload);
      // Always no-store so delete/upload refresh never shows ghost rows.
      res.headers.set("Cache-Control", "no-store");
      return res;
    }

    return NextResponse.json({
      concepts:
        spaceKey === "_root"
          ? (content.concepts || []).filter((c) => !c.subject || c.subject === "_root")
          : (content.concepts || []).filter((c) => subjectMatch(c.subject)),
      formulas:
        spaceKey === "_root"
          ? []
          : (content.formulas || []).filter((f) => subjectMatch(f.subject)),
      documents: (content.documents || []).filter(inBucket),
      // Omit base64 by default — scoped AP Stats etc. was >2MB and broke frontend refresh (413).
      files: includeData
        ? (content.files || []).filter(inBucket)
        : slimManagedContent(content).files.filter(inBucket),
      folders: (content.folders || []).filter((f) => matchesSpace(f, area, spaceKey)),
      topics: (content.topics || []).filter((t) => {
        if (spaceKey === "_root") return !t.subject || t.subject === "_root";
        return subjectMatch(t.subject) || subjectMatch(t.space);
      }),
      questionnaires:
        spaceKey === "_root"
          ? content.questionnaires || []
          : (content.questionnaires || []).filter((q) => subjectMatch(q.subject)),
      subjects: content.subjects || [],
      members: content.members || [],
      forumPosts: area === "forum" ? content.forumPosts || [] : undefined,
      updatedAt: content.updatedAt,
      scoped: { area, space: spaceKey },
    });
  }

  // Unscoped Manage load: omit base64 by default (payload was >1.5MB and triggered 413s).
  return NextResponse.json(includeData ? content : slimManagedContent(content));
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const action = String(body.action || "");
    const item = body.item || {};
    const bulkItems = Array.isArray(body.items) ? body.items : [];
    const publicMaterialsActions = [
      "add_document",
      "add_documents",
      "add_file",
      "add_files",
      "add_folder",
      "add_folders",
    ];
    const wantsPublicMaterials =
      body.publicContribution === true && publicMaterialsActions.includes(action);
    // Every bulk item must be materials — one materials row must not unlock other areas.
    const materialsAreasOk =
      (!item.area || String(item.area) === "materials") &&
      bulkItems.every((entry: { area?: string }) => String(entry?.area || "materials") === "materials");
    const publicMaterialsContribution = wantsPublicMaterials && materialsAreasOk;
    if (wantsPublicMaterials && !materialsAreasOk) {
      return NextResponse.json(
        { error: "Public contributions are limited to Sharing Materials only." },
        { status: 403 }
      );
    }
    const publicForumContribution = ["add_forum_post", "add_forum_reply"].includes(action);
    if (
      (publicForumContribution || publicMaterialsContribution) &&
      publicWriteRateLimited(req)
    ) {
      return NextResponse.json(
        { error: "Please wait a few seconds before contributing again" },
        { status: 429 }
      );
    }

    if (action === "add_forum_post") {
      const validated = validateForumPostInput(item);
      if (!validated.ok) {
        return NextResponse.json({ error: validated.error }, { status: 400 });
      }
    } else if (action === "add_forum_reply") {
      const validated = validateForumReplyInput(item);
      if (!validated.ok) {
        return NextResponse.json({ error: validated.error }, { status: 400 });
      }
    }

    const levelFromCode = resolveChangeLevel(body.changeCode);
    const levelFromSession = await getContentEditorLevel();
    const level = levelFromCode || levelFromSession;
    if (!publicMaterialsContribution && !publicForumContribution && !canEditContent(level)) {
      return NextResponse.json(
        {
          error:
            "Editor not unlocked. Open /login and enter the content change code once, then save again.",
        },
        { status: 401 }
      );
    }

    const token = await tokenFrom(body);
    const current: ManagedContent = normalizeManagedContent(await loadManagedContent(token));
    let createdId: string | undefined;

    if (action === "add_forum_post") {
      const validated = validateForumPostInput(item);
      if (!validated.ok) {
        return NextResponse.json({ error: validated.error }, { status: 400 });
      }
      const { author, title, body: postBody } = validated;
      const attachments = sanitizeForumAttachments(item.attachments, 4);
      if (attachments.error) {
        return NextResponse.json({ error: attachments.error }, { status: 400 });
      }
      current.forumPosts.unshift({
        id: uid("forum-post"),
        author,
        title,
        body: postBody,
        createdAt: Date.now(),
        replies: [],
        attachments: persistForumAttachments(current, attachments.items),
      });
    } else if (action === "add_forum_reply") {
      const validated = validateForumReplyInput(item);
      if (!validated.ok) {
        return NextResponse.json({ error: validated.error }, { status: 400 });
      }
      const { author, body: replyBody, postId } = validated;
      const post = current.forumPosts.find((entry) => entry.id === postId);
      if (!post) return NextResponse.json({ error: "Post not found" }, { status: 404 });
      const attachments = sanitizeForumAttachments(item.attachments, 2);
      if (attachments.error) {
        return NextResponse.json({ error: attachments.error }, { status: 400 });
      }
      if (!Array.isArray(post.replies)) post.replies = [];
      post.replies.push({
        id: uid("forum-reply"),
        author,
        body: replyBody,
        createdAt: Date.now(),
        attachments: persistForumAttachments(current, attachments.items),
      });
    } else if (action === "add_subject") {
      const item = body.item || {};
      const name = String(item.title || item.name || item.subject || "").trim();
      if (!name) return NextResponse.json({ error: "subject name required" }, { status: 400 });
      const slug = subjectSlug(String(item.slug || name));
      if (current.subjects.some((subject) => subject.slug === slug || subject.name === name)) {
        // Idempotent for folder UX: already exists is OK
        // still return success below
      } else {
        current.subjects.push({
          id: canonicalizeSubjectId(slug),
          slug,
          name,
          shortName: String(item.shortName || name.replace(/^AP /, "")),
          description: String(item.description || ""),
          icon: String(item.icon || "◇"),
          color: String(item.color || "blue"),
          order: Number.isFinite(Number(item.order)) ? Number(item.order) : current.subjects.length,
          enabled: item.enabled !== false,
          createdAt: Date.now(),
        });
      }
    } else if (action === "add_unit") {
      const item = body.item || {};
      if (!item.subjectId || !item.title) {
        return NextResponse.json({ error: "subject and unit title required" }, { status: 400 });
      }
      current.units.push({
        id: uid("unit"),
        subjectId: canonicalizeSubjectId(String(item.subjectId)),
        title: String(item.title),
        description: item.description ? String(item.description) : undefined,
        order: Number.isFinite(Number(item.order)) ? Number(item.order) : current.units.length,
        enabled: item.enabled !== false,
        createdAt: Date.now(),
      });
    } else if (action === "add_content_item") {
      const item = body.item || {};
      if (!item.subjectId || !item.title || !item.type) {
        return NextResponse.json({ error: "subject, type, and title required" }, { status: 400 });
      }
      const allowedTypes = ["concept", "formula", "practice", "document", "file", "folder"];
      if (!allowedTypes.includes(String(item.type))) {
        return NextResponse.json({ error: "Unknown content type" }, { status: 400 });
      }
      current.contentItems.unshift({
        id: uid("content"),
        subjectId: canonicalizeSubjectId(String(item.subjectId)),
        unitId: item.unitId ? String(item.unitId) : undefined,
        type: String(item.type) as "concept" | "formula" | "practice" | "document" | "file" | "folder",
        title: String(item.title),
        content: normalizeAuthoredText(String(item.content || "")).slice(0, 200_000),
        tags: Array.isArray(item.tags)
          ? item.tags.map(String)
          : String(item.tags || "").split(",").map((tag) => tag.trim()).filter(Boolean),
        difficulty: ["intro", "standard", "challenge"].includes(String(item.difficulty))
          ? item.difficulty
          : "standard",
        source: item.source ? String(item.source) : undefined,
        status: item.status === "draft" ? "draft" : "published",
        order: Number.isFinite(Number(item.order)) ? Number(item.order) : 0,
        createdAt: Date.now(),
        updatedAt: Date.now(),
      });
    } else if (action === "add_content_items") {
      const items = Array.isArray(body.items) ? body.items : [];
      if (items.length === 0 || items.length > 20) {
        return NextResponse.json({ error: "Add between 1 and 20 content items at once" }, { status: 400 });
      }
      const allowedTypes = ["concept", "formula", "practice", "document", "file", "folder"];
      for (const item of items) {
        if (!item?.subjectId || !item?.title || !item?.type) {
          return NextResponse.json({ error: "Each item needs subject, type, and title" }, { status: 400 });
        }
        if (!allowedTypes.includes(String(item.type))) {
          return NextResponse.json({ error: "Unknown content type in batch" }, { status: 400 });
        }
        current.contentItems.unshift({
          id: uid("content"),
          subjectId: canonicalizeSubjectId(String(item.subjectId)),
          unitId: item.unitId ? String(item.unitId) : undefined,
          type: String(item.type) as "concept" | "formula" | "practice" | "document" | "file" | "folder",
          title: String(item.title),
          content: normalizeAuthoredText(String(item.content || "")).slice(0, 200_000),
          tags: Array.isArray(item.tags)
            ? item.tags.map(String)
            : String(item.tags || "")
                .split(",")
                .map((tag) => tag.trim())
                .filter(Boolean),
          difficulty: ["intro", "standard", "challenge"].includes(String(item.difficulty))
            ? item.difficulty
            : "standard",
          source: item.source ? String(item.source) : undefined,
          status: item.status === "draft" ? "draft" : "published",
          order: Number.isFinite(Number(item.order)) ? Number(item.order) : 0,
          createdAt: Date.now(),
          updatedAt: Date.now(),
        });
      }
    } else if (action === "update") {
      const target = String(body.target || "");
      const id = String(body.id || "");
      const update = body.item || {};
      const text = (value: unknown, limit = 200_000) =>
        normalizeAuthoredText(String(value ?? "")).slice(0, limit);
      if (!id) return NextResponse.json({ error: "Item id required" }, { status: 400 });

      if (target === "content_item") {
        const found = current.contentItems.find((entry) => entry.id === id);
        if (!found) return NextResponse.json({ error: "Content item not found" }, { status: 404 });
        if (update.title !== undefined) found.title = text(update.title, 160);
        if (update.content !== undefined) found.content = text(update.content);
        found.updatedAt = Date.now();
      } else if (target === "concept" || target === "topic") {
        const found = current.concepts.find((entry) => entry.id === id);
        if (!found) return NextResponse.json({ error: "Concept not found" }, { status: 404 });
        if (update.title !== undefined) found.title = text(update.title, 160);
        if (update.summary !== undefined) found.summary = text(update.summary);
        const topic = current.topics.find((entry) => entry.id === id);
        if (topic) {
          topic.title = found.title;
          topic.summary = found.summary;
        }
      } else if (target === "formula") {
        const found = current.formulas.find((entry) => entry.id === id);
        if (!found) return NextResponse.json({ error: "Formula not found" }, { status: 404 });
        if (update.name !== undefined || update.title !== undefined) found.name = text(update.name ?? update.title, 160);
        if (update.content !== undefined) found.content = text(update.content);
      } else if (target === "document") {
        const found = current.documents.find((entry) => entry.id === id);
        if (!found) return NextResponse.json({ error: "Document not found" }, { status: 404 });
        if (update.title !== undefined) found.title = text(update.title, 160);
        if (update.content !== undefined) found.content = text(update.content);
        if (update.category !== undefined) found.category = text(update.category, 80);
        if (update.area !== undefined) found.area = String(update.area).slice(0, 80) || undefined;
        if (update.space !== undefined) found.space = String(update.space).slice(0, 160) || undefined;
        found.updatedAt = Date.now();
      } else if (target === "file") {
        const found = current.files.find((entry) => entry.id === id);
        if (!found) return NextResponse.json({ error: "File not found" }, { status: 404 });
        if (update.name !== undefined) found.name = text(update.name, 200);
        if (update.note !== undefined) found.note = text(update.note, 2_000);
        if (update.area !== undefined) found.area = String(update.area).slice(0, 80) || undefined;
        if (update.space !== undefined) found.space = String(update.space).slice(0, 160) || undefined;
        if (update.dataUrl !== undefined) {
          if (String(update.dataUrl).length > MAX_UPLOAD_DATA_URL_CHARS) return NextResponse.json({ error: "Replacement file is too large" }, { status: 400 });
          found.dataUrl = String(update.dataUrl);
          found.mime = text(update.mime || "application/octet-stream", 120);
          found.uploadedAt = Date.now();
        }
      } else if (target === "folder") {
        const found = current.folders.find((entry) => entry.id === id);
        if (!found) return NextResponse.json({ error: "Folder not found" }, { status: 404 });
        if (update.title !== undefined) found.title = text(update.title, 160);
        if (update.note !== undefined) found.note = text(update.note, 2_000);
      } else if (target === "questionnaire") {
        const found = current.questionnaires.find((entry) => entry.id === id);
        if (!found) return NextResponse.json({ error: "Practice set not found" }, { status: 404 });
        if (update.title !== undefined) found.title = text(update.title, 160);
        if (update.description !== undefined) found.description = text(update.description, 20_000);
        if (update.generationNote !== undefined) found.generationNote = text(update.generationNote, 2_000);
      } else if (target === "subject") {
        const found = current.subjects.find((entry) => entry.id === id);
        if (!found) return NextResponse.json({ error: "Subject not found" }, { status: 404 });
        if (update.name !== undefined || update.title !== undefined) found.name = text(update.name ?? update.title, 160);
        if (update.description !== undefined) found.description = text(update.description, 2_000);
      } else if (target === "unit") {
        const found = current.units.find((entry) => entry.id === id);
        if (!found) return NextResponse.json({ error: "Unit not found" }, { status: 404 });
        if (update.title !== undefined) found.title = text(update.title, 160);
        if (update.description !== undefined) {
          found.description = String(update.description || "").trim()
            ? text(update.description, 4_000)
            : undefined;
        }
        if (update.order !== undefined && Number.isFinite(Number(update.order))) {
          found.order = Number(update.order);
        }
        if (update.enabled !== undefined) found.enabled = Boolean(update.enabled);
        if (update.subjectId !== undefined) {
          found.subjectId = canonicalizeSubjectId(String(update.subjectId));
        }
      } else if (target === "member") {
        const found = current.members.find((entry) => entry.id === id);
        if (!found) return NextResponse.json({ error: "Member not found" }, { status: 404 });
        if (update.name !== undefined || update.title !== undefined) found.name = text(update.name ?? update.title, 160);
        if (update.note !== undefined) found.note = text(update.note, 2_000);
      } else {
        return NextResponse.json({ error: "Unknown update target" }, { status: 400 });
      }
    } else if (action === "set_content_status") {
      const target = current.contentItems.find((item) => item.id === String(body.id || ""));
      if (!target) return NextResponse.json({ error: "Content item not found" }, { status: 404 });
      target.status = body.status === "draft" ? "draft" : "published";
      target.updatedAt = Date.now();
    } else if (action === "restore_content_item") {
      const target = current.contentItems.find((item) => item.id === String(body.id || ""));
      if (!target) return NextResponse.json({ error: "Content item not found" }, { status: 404 });
      delete target.deletedAt;
      target.updatedAt = Date.now();
      forgetDeleted(current, target.id);
    } else if (action === "restore_recycle") {
      const entryId = String(body.id || "");
      const entry = (current.recycleBin || []).find((item) => item.id === entryId);
      if (!entry) return NextResponse.json({ error: "Recycle item not found" }, { status: 404 });
      const payload = entry.payload as Record<string, unknown>;
      const restoredId = typeof payload.id === "string" ? payload.id : "";
      forgetDeleted(current, restoredId);
      if (entry.target === "file") current.files.unshift(payload as never);
      else if (entry.target === "document") current.documents.unshift(payload as never);
      else if (entry.target === "folder") current.folders.unshift(payload as never);
      else if (entry.target === "concept" || entry.target === "topic") {
        current.concepts.unshift(payload as never);
        if (entry.target === "topic") {
          current.topics.unshift({
            id: String(payload.id),
            title: String(payload.title || ""),
            subject: String(payload.subject || ""),
            summary: String(payload.summary || ""),
            createdAt: Date.now(),
          });
        }
      }       else if (entry.target === "formula") current.formulas.unshift(payload as never);
      else if (entry.target === "questionnaire") current.questionnaires.unshift(payload as never);
      else if (entry.target === "member") current.members.unshift(payload as never);
      else if (entry.target === "unit") {
        if (!current.units.some((u) => u.id === restoredId)) {
          current.units.unshift(payload as never);
        }
      } else if (entry.target === "subject") {
        if (!current.subjects.some((s) => s.id === restoredId)) {
          current.subjects.unshift(payload as never);
        }
      } else if (entry.target === "content_item") {
        const item = current.contentItems.find((c) => c.id === String(payload.id || ""));
        if (item) delete item.deletedAt;
        else current.contentItems.unshift(payload as never);
      }
      current.recycleBin = (current.recycleBin || []).filter((item) => item.id !== entryId);
    } else if (action === "purge_recycle") {
      const entryId = String(body.id || "");
      if (!entryId) {
        // User emptied the bin — keep deletedIds so those items cannot resurrect.
        for (const entry of current.recycleBin || []) {
          const payload = entry.payload as { id?: string };
          if (payload?.id) rememberDeleted(current, payload.id);
        }
        current.recycleBin = [];
        current.contentItems = (current.contentItems || []).filter((item) => !item.deletedAt);
      } else {
        const entry = (current.recycleBin || []).find((item) => item.id === entryId);
        if (entry) {
          const payload = entry.payload as { id?: string };
          if (payload?.id) rememberDeleted(current, payload.id);
        }
        current.recycleBin = (current.recycleBin || []).filter((item) => item.id !== entryId);
      }
    } else if (action === "empty_recycle") {
      // User emptied Recycle Bin (Macintosh HD + Manage).
      for (const entry of current.recycleBin || []) {
        const payload = entry.payload as { id?: string };
        if (payload?.id) rememberDeleted(current, payload.id);
      }
      for (const item of current.contentItems || []) {
        if (item.deletedAt) rememberDeleted(current, item.id);
      }
      current.recycleBin = [];
      current.contentItems = (current.contentItems || []).filter((item) => !item.deletedAt);
    } else if (action === "purge_content_item") {
      const id = String(body.id || "");
      rememberDeleted(current, id);
      current.contentItems = current.contentItems.filter((item) => item.id !== id);
      current.recycleBin = (current.recycleBin || []).filter((entry) => {
        const payload = entry.payload as { id?: string };
        return !(entry.target === "content_item" && payload?.id === id);
      });
    } else if (action === "move_content_item") {
      const target = current.contentItems.find((item) => item.id === String(body.id || ""));
      if (!target) return NextResponse.json({ error: "Content item not found" }, { status: 404 });
      target.order = Number(body.order || 0);
      target.updatedAt = Date.now();
    } else if (action === "add_files") {
      const files = Array.isArray(body.items) ? body.items : [];
      if (files.length === 0 || files.length > 10) {
        return NextResponse.json({ error: "Choose between 1 and 10 files" }, { status: 400 });
      }
      const bulkLimit = publicMaterialsContribution
        ? MAX_PUBLIC_UPLOAD_DATA_URL_CHARS
        : MAX_UPLOAD_DATA_URL_CHARS;
      let batchChars = 0;
      for (const item of files) {
        const dataUrl = String(item.dataUrl || "");
        batchChars += dataUrl.length;
        if (batchChars > MAX_UPLOAD_BATCH_DATA_URL_CHARS) {
          return NextResponse.json(
            {
              error:
                "This batch is too large for one upload. Send fewer/smaller files (total under ~2.5MB encoded), or upload in smaller batches.",
            },
            { status: 413 }
          );
        }
        if (!item.name || !dataUrl || dataUrl.length > bulkLimit) {
          return NextResponse.json({ error: "Each file needs a name and must stay under ~1MB" }, { status: 400 });
        }
        const area = publicMaterialsContribution ? "materials" : item.area ? String(item.area) : undefined;
        const keys = canonicalizeStorageKeys(
          area,
          item.space ? String(item.space) : undefined
        );
        // Always create a new row — similar/same display names must not overwrite each other.
        current.files.unshift({
          id: uid("m-file"),
          name: String(item.name),
          mime: String(item.mime || "application/octet-stream"),
          dataUrl: String(item.dataUrl),
          note: item.note ? String(item.note) : undefined,
          uploadedAt: Date.now(),
          uploadedBy: publicMaterialsContribution ? "public-contributor" : "change-code",
          area: area ? keys.area : undefined,
          space: area ? keys.space : undefined,
        });
      }
    } else if (action === "add_concepts" || action === "add_topics") {
      const items = Array.isArray(body.items) ? body.items : [];
      if (items.length === 0 || items.length > 20) {
        return NextResponse.json({ error: "Add between 1 and 20 concepts/topics at once" }, { status: 400 });
      }
      const asTopic = action === "add_topics";
      for (const item of items) {
        if (!item?.title || !item?.subject) {
          return NextResponse.json({ error: "Each item needs title and subject" }, { status: 400 });
        }
        const conceptId = uid(asTopic ? "m-topic" : "m-concept");
        const subjectName = canonicalizeSubjectName(String(item.subject));
        current.concepts.push({
          id: conceptId,
          title: String(item.title),
          subject: subjectName,
          summary: normalizeAuthoredText(String(item.summary || "")),
          keyPoints: Array.isArray(item.keyPoints) ? item.keyPoints.map(String) : [],
          commonMistakes: Array.isArray(item.commonMistakes) ? item.commonMistakes.map(String) : [],
          example: String(item.example || ""),
        });
        if (asTopic) {
          current.topics.push({
            id: conceptId,
            title: String(item.title),
            subject: subjectName,
            summary: normalizeAuthoredText(String(item.summary || "")),
            createdAt: Date.now(),
            area: item.area ? String(item.area) : undefined,
            space: item.space ? String(item.space) : undefined,
          });
        }
      }
    } else if (action === "add_formulas") {
      const items = Array.isArray(body.items) ? body.items : [];
      if (items.length === 0 || items.length > 20) {
        return NextResponse.json({ error: "Add between 1 and 20 formulas at once" }, { status: 400 });
      }
      for (const item of items) {
        if (!item?.name || (!item?.content && !item?.expression) || !item?.subject) {
          return NextResponse.json(
            { error: "Each formula needs name, content, and subject" },
            { status: 400 }
          );
        }
        current.formulas.push({
          id: uid("m-formula"),
          subject: canonicalizeSubjectName(String(item.subject)),
          unit: String(item.unit || "Managed"),
          name: String(item.name),
          expression: String(item.expression || ""),
          content: item.content
            ? normalizeAuthoredText(String(item.content)).slice(0, 200_000)
            : undefined,
          variables: String(item.variables || ""),
          whenToUse: String(item.whenToUse || ""),
          sourceNote: "Added via change-code edit",
        });
      }
    } else if (action === "add_documents") {
      const items = Array.isArray(body.items) ? body.items : [];
      if (items.length === 0 || items.length > 20) {
        return NextResponse.json({ error: "Add between 1 and 20 documents at once" }, { status: 400 });
      }
      for (const item of items) {
        if (!item?.title || !item?.content) {
          return NextResponse.json({ error: "Each document needs title and content" }, { status: 400 });
        }
        if (publicMaterialsContribution && String(item.content).length > 50_000) {
          return NextResponse.json(
            { error: "Public documents must stay under 50,000 characters" },
            { status: 400 }
          );
        }
        const keys = canonicalizeStorageKeys(
          item.area ? String(item.area) : undefined,
          item.space ? String(item.space) : undefined
        );
        current.documents.push({
          id: uid("m-doc"),
          title: String(item.title).slice(0, 160),
          content: normalizeAuthoredText(String(item.content)).slice(0, 200_000),
          category: String(item.category || "Uploaded").slice(0, 80),
          updatedAt: Date.now(),
          area: item.area ? keys.area : undefined,
          space: item.area ? keys.space : undefined,
        });
      }
    } else if (action === "add_folders") {
      const items = Array.isArray(body.items) ? body.items : [];
      if (items.length === 0 || items.length > 20) {
        return NextResponse.json({ error: "Add between 1 and 20 folders at once" }, { status: 400 });
      }
      for (const item of items) {
        if (!item?.title || !item?.area) {
          return NextResponse.json({ error: "Each folder needs title and area" }, { status: 400 });
        }
        const keys = canonicalizeStorageKeys(String(item.area), item.space ? String(item.space) : undefined);
        current.folders.push({
          id: uid("folder"),
          title: String(item.title).slice(0, 160),
          area: keys.area,
          note: item.note ? String(item.note).slice(0, 500) : undefined,
          createdAt: Date.now(),
          space: keys.space,
        });
      }
    } else if (action === "add_concept" || action === "add_topic") {
      const item = body.item || {};
      if (!item.title || !item.subject) {
        return NextResponse.json({ error: "title and subject required" }, { status: 400 });
      }
      const conceptId = uid(action === "add_topic" ? "m-topic" : "m-concept");
      const subjectName = canonicalizeSubjectName(String(item.subject));
      current.concepts.push({
        id: conceptId,
        title: String(item.title),
        subject: subjectName,
        summary: normalizeAuthoredText(String(item.summary || "")),
        keyPoints: Array.isArray(item.keyPoints) ? item.keyPoints.map(String) : [],
        commonMistakes: Array.isArray(item.commonMistakes) ? item.commonMistakes.map(String) : [],
        example: String(item.example || ""),
      });
      if (action === "add_topic") {
        current.topics.push({
          id: conceptId,
          title: String(item.title),
          subject: subjectName,
          summary: normalizeAuthoredText(String(item.summary || "")),
          createdAt: Date.now(),
          area: item.area ? String(item.area) : undefined,
          space: item.space ? String(item.space) : undefined,
        });
      }
    } else if (action === "add_questionnaire") {
      const item = body.item || {};
      if (!item.title || !item.subject) {
        return NextResponse.json({ error: "title and subject required" }, { status: 400 });
      }
      const setId = uid("m-quiz");
      createdId = setId;
      // Prefer full items[] (one-shot save). Fall back to firstPrompt for older clients.
      let items = buildQuestionnaireItems(item.items, String(item.hint || ""));
      if (items.length === 0) {
        const firstPrompt = normalizeAuthoredText(String(item.firstPrompt || item.prompt || "")).trim();
        if (firstPrompt) {
          items = buildQuestionnaireItems(
            [
              {
                prompt: firstPrompt,
                hint: item.hint,
                hints: item.hints,
                format: item.format,
                visibleSteps: item.visibleSteps,
                blankSteps: item.blankSteps,
                choices: item.choices,
                conceptIntro: item.conceptIntro,
              },
            ],
            String(item.hint || "")
          );
        }
      }
      current.questionnaires.push({
        id: setId,
        title: String(item.title),
        subject: canonicalizeSubjectName(String(item.subject)),
        kind: "generated",
        description: normalizeAuthoredText(
          String(item.description || "AI-generated practice set added from the UI.")
        ),
        generationNote: String(
          item.generationNote || `Added via change-code UI · ${new Date().toISOString().slice(0, 10)}`
        ),
        estimatedMinutes: Number(item.estimatedMinutes) || 20,
        tags: Array.isArray(item.tags) ? item.tags.map(String) : ["generated", "managed"],
        items,
      });
    } else if (action === "add_questionnaires") {
      const items = Array.isArray(body.items) ? body.items : [];
      if (items.length === 0 || items.length > 20) {
        return NextResponse.json({ error: "Add between 1 and 20 practice sets at once" }, { status: 400 });
      }
      for (const item of items) {
        if (!item?.title || !item?.subject) {
          return NextResponse.json({ error: "Each practice set needs title and subject" }, { status: 400 });
        }
        const setId = uid("m-quiz");
        const firstPrompt = normalizeAuthoredText(String(item.firstPrompt || item.prompt || "")).trim();
        const quizItems: QuestionnaireItem[] = [];
        if (firstPrompt) {
          quizItems.push({
            id: uid("m-item"),
            format: (String(item.format || "concept_check") as QuestionFormat) || "concept_check",
            prompt: firstPrompt,
            hints: Array.isArray(item.hints)
              ? item.hints.map((h: unknown) => normalizeAuthoredText(String(h)))
              : [normalizeAuthoredText(String(item.hint || "Attempt before asking AI for more hints."))],
            visibleSteps: Array.isArray(item.visibleSteps)
              ? item.visibleSteps.map((s: unknown) => normalizeAuthoredText(String(s)))
              : undefined,
            blankSteps: Array.isArray(item.blankSteps)
              ? item.blankSteps.map((s: unknown) => normalizeAuthoredText(String(s)))
              : undefined,
            choices: Array.isArray(item.choices) ? item.choices.map(String) : undefined,
            conceptIntro: item.conceptIntro
              ? normalizeAuthoredText(String(item.conceptIntro))
              : undefined,
          });
        }
        current.questionnaires.push({
          id: setId,
          title: String(item.title),
          subject: String(item.subject),
          kind: "generated",
          description: normalizeAuthoredText(
            String(item.description || "AI-generated practice set added from the UI.")
          ),
          generationNote: String(
            item.generationNote || `Added via change-code UI · ${new Date().toISOString().slice(0, 10)}`
          ),
          estimatedMinutes: Number(item.estimatedMinutes) || 20,
          tags: Array.isArray(item.tags) ? item.tags.map(String) : ["generated", "managed"],
          items: quizItems,
          difficultyTier:
            item.difficultyTier !== undefined
              ? (Number(item.difficultyTier) as 1 | 2 | 3)
              : undefined,
        });
      }
    } else if (action === "add_questionnaire_item") {
      const setId = String(body.setId || body.id || "");
      const item = body.item || {};
      const quiz = current.questionnaires.find((q) => q.id === setId);
      if (!quiz) {
        return NextResponse.json({ error: "questionnaire set not found" }, { status: 404 });
      }
      if (!item.prompt) {
        return NextResponse.json({ error: "item prompt required" }, { status: 400 });
      }
      quiz.items.push({
        id: uid("m-item"),
        format: (String(item.format || "concept_check") as QuestionFormat) || "concept_check",
        prompt: normalizeAuthoredText(String(item.prompt)),
        hints: Array.isArray(item.hints)
          ? item.hints.map((h: unknown) => normalizeAuthoredText(String(h)))
          : [normalizeAuthoredText(String(item.hint || "Try yourself first."))],
        visibleSteps: Array.isArray(item.visibleSteps)
          ? item.visibleSteps.map((s: unknown) => normalizeAuthoredText(String(s)))
          : undefined,
        blankSteps: Array.isArray(item.blankSteps)
          ? item.blankSteps.map((s: unknown) => normalizeAuthoredText(String(s)))
          : undefined,
        choices: Array.isArray(item.choices) ? item.choices.map(String) : undefined,
        conceptIntro: item.conceptIntro
          ? normalizeAuthoredText(String(item.conceptIntro))
          : undefined,
      });
    } else if (action === "add_formula") {
      const item = body.item || {};
      if (!item.name || (!item.content && !item.expression) || !item.subject) {
        return NextResponse.json({ error: "name, content, and subject required" }, { status: 400 });
      }
      current.formulas.push({
        id: uid("m-formula"),
        subject: canonicalizeSubjectName(String(item.subject)),
        unit: String(item.unit || "Managed"),
        name: String(item.name),
        expression: String(item.expression || ""),
        content: item.content
          ? normalizeAuthoredText(String(item.content)).slice(0, 200_000)
          : undefined,
        variables: String(item.variables || ""),
        whenToUse: String(item.whenToUse || ""),
        sourceNote: "Added via change-code edit",
      });
    } else if (action === "add_document") {
      const item = body.item || {};
      if (!item.title || !item.content) {
        return NextResponse.json({ error: "title and content required" }, { status: 400 });
      }
      if (publicMaterialsContribution && String(item.content).length > 50_000) {
        return NextResponse.json({ error: "Public documents must stay under 50,000 characters" }, { status: 400 });
      }
      {
        const keys = canonicalizeStorageKeys(
          item.area ? String(item.area) : undefined,
          item.space ? String(item.space) : undefined
        );
        const title = String(item.title).slice(0, 160);
        // Always create a new row — same/similar titles must not overwrite each other.
        current.documents.push({
          id: uid("m-doc"),
          title,
          content: normalizeAuthoredText(String(item.content)).slice(0, 200_000),
          category: String(item.category || "Uploaded").slice(0, 80),
          updatedAt: Date.now(),
          area: item.area ? keys.area : undefined,
          space: item.area ? keys.space : undefined,
        });
      }
    } else if (action === "add_file") {
      const item = body.item || {};
      if (!item.name || !item.dataUrl) {
        return NextResponse.json({ error: "file name and data required" }, { status: 400 });
      }
      const publicFileLimit = publicMaterialsContribution ? 1_000_000 : MAX_UPLOAD_DATA_URL_CHARS;
      if (String(item.dataUrl).length > publicFileLimit) {
        return NextResponse.json({ error: "File too large (keep under ~1MB)" }, { status: 400 });
      }
      {
        const keys = canonicalizeStorageKeys(
          item.area ? String(item.area) : undefined,
          item.space ? String(item.space) : undefined
        );
        const name = String(item.name).slice(0, 200);
        // Always create a new row — same/similar names must not overwrite each other.
        current.files.unshift({
          id: uid("m-file"),
          name,
          mime: String(item.mime || "application/octet-stream"),
          dataUrl: String(item.dataUrl),
          note: item.note ? String(item.note) : undefined,
          uploadedAt: Date.now(),
          uploadedBy: publicMaterialsContribution ? "public-contributor" : "change-code",
          area: item.area ? keys.area : undefined,
          space: item.area ? keys.space : undefined,
        });
      }
    } else if (action === "add_member") {
      // Content-code editors can add partners; master still works too.
      if (!canEditContent(level)) {
        return NextResponse.json(
          { error: "Unlock with the content change code (or master) to add members." },
          { status: 403 }
        );
      }
      const item = body.item || {};
      if (!item.name) {
        return NextResponse.json({ error: "member name required" }, { status: 400 });
      }
      current.members.push({
        id: uid("member"),
        name: String(item.name),
        note: item.note ? String(item.note) : undefined,
        addedAt: Date.now(),
      });
    } else if (action === "add_folder") {
      const item = body.item || {};
      if (!item.title || !item.area) {
        return NextResponse.json({ error: "folder title and area required" }, { status: 400 });
      }
      {
        const keys = canonicalizeStorageKeys(String(item.area), item.space ? String(item.space) : "_root");
        current.folders.push({
          id: uid("folder"),
          title: String(item.title).slice(0, 160),
          area: keys.area,
          note: item.note ? String(item.note).slice(0, 500) : undefined,
          createdAt: Date.now(),
          space: keys.space,
        });
      }
    } else if (action === "delete") {
      const target = String(body.target || "");
      const id = String(body.id || "");
      if (target === "member" && !canEditContent(level)) {
        return NextResponse.json(
          { error: "Unlock with the content change code (or master) to remove members." },
          { status: 403 }
        );
      }
      if (!current.recycleBin) current.recycleBin = [];
      if (!current.deletedIds) current.deletedIds = [];
      const pushRecycle = (entryTarget: typeof current.recycleBin[number]["target"], label: string, payload: unknown) => {
        const payloadId =
          payload && typeof payload === "object" && typeof (payload as { id?: unknown }).id === "string"
            ? String((payload as { id: string }).id)
            : "";
        rememberDeleted(current, payloadId);
        current.recycleBin.unshift({
          id: uid("recycle"),
          target: entryTarget,
          label,
          deletedAt: Date.now(),
          payload,
        });
      };
      if (target === "content_item") {
        const item = current.contentItems.find((entry) => entry.id === id);
        if (item) {
          item.deletedAt = Date.now();
          item.updatedAt = Date.now();
          pushRecycle("content_item", item.title, { ...item });
        }
      } else if (target === "concept" || target === "topic") {
        const found = current.concepts.find((c) => c.id === id);
        if (found) {
          pushRecycle(target === "topic" ? "topic" : "concept", found.title, found);
          current.concepts = current.concepts.filter((c) => c.id !== id);
          current.topics = current.topics.filter((t) => t.id !== id);
        }
      } else if (target === "formula") {
        const found = current.formulas.find((f) => f.id === id);
        if (found) {
          pushRecycle("formula", found.name, found);
          current.formulas = current.formulas.filter((f) => f.id !== id);
        }
      } else if (target === "document") {
        const found = current.documents.find((d) => d.id === id);
        if (found) {
          pushRecycle("document", found.title, found);
          current.documents = current.documents.filter((d) => d.id !== id);
        }
      } else if (target === "file") {
        const found = current.files.find((f) => f.id === id);
        if (found) {
          pushRecycle("file", found.name, found);
          current.files = current.files.filter((f) => f.id !== id);
        }
      } else if (target === "member") {
        const found = current.members.find((m) => m.id === id);
        if (found) {
          pushRecycle("member", found.name, found);
          current.members = current.members.filter((m) => m.id !== id);
        }
      } else if (target === "folder") {
        const found = current.folders.find((f) => f.id === id);
        if (found) {
          // Only the folder the user picked — no cascade / auto-clear of children.
          pushRecycle("folder", found.title, found);
          current.folders = current.folders.filter((f) => f.id !== id);
        }
      } else if (target === "subject") {
        const found =
          current.subjects.find(
            (s) => s.id === id || s.slug === id || s.name === id || subjectIdsMatch(s.id, id)
          ) || null;
        if (!found) {
          // Still allow cascading cleanup for catalog-only ids with no managed twin.
          const canonId = canonicalizeSubjectId(id);
          const canonName = canonicalizeSubjectName(id);
          const unitIds = current.units
            .filter((u) => subjectIdsMatch(u.subjectId, canonId) || subjectIdsMatch(u.subjectId, id))
            .map((u) => u.id);
          for (const unit of current.units.filter((u) => unitIds.includes(u.id))) {
            pushRecycle("unit", unit.title, unit);
          }
          current.units = current.units.filter((u) => !unitIds.includes(u.id));
          for (const item of current.contentItems.filter(
            (row) => subjectIdsMatch(row.subjectId, canonId) || subjectIdsMatch(row.subjectId, id)
          )) {
            item.deletedAt = Date.now();
            item.updatedAt = Date.now();
            pushRecycle("content_item", item.title, { ...item });
          }
          const dropConcepts = current.concepts.filter((c) => subjectsMatch(c.subject, canonName));
          for (const c of dropConcepts) pushRecycle("concept", c.title, c);
          current.concepts = current.concepts.filter((c) => !subjectsMatch(c.subject, canonName));
          current.topics = current.topics.filter((t) => !subjectsMatch(t.subject, canonName));
          const dropFormulas = current.formulas.filter((f) => subjectsMatch(f.subject, canonName));
          for (const f of dropFormulas) pushRecycle("formula", f.name, f);
          current.formulas = current.formulas.filter((f) => !subjectsMatch(f.subject, canonName));
          const dropQuizzes = current.questionnaires.filter((q) => subjectsMatch(q.subject, canonName));
          for (const q of dropQuizzes) pushRecycle("questionnaire", q.title, q);
          current.questionnaires = current.questionnaires.filter(
            (q) => !subjectsMatch(q.subject, canonName)
          );
          rememberDeleted(current, id);
          rememberDeleted(current, canonId);
        } else {
          const canonId = canonicalizeSubjectId(found.id || found.slug);
          const unitIds = current.units
            .filter((u) => subjectIdsMatch(u.subjectId, found.id) || subjectIdsMatch(u.subjectId, canonId))
            .map((u) => u.id);
          for (const unit of current.units.filter((u) => unitIds.includes(u.id))) {
            pushRecycle("unit", unit.title, unit);
          }
          current.units = current.units.filter((u) => !unitIds.includes(u.id));
          for (const item of current.contentItems.filter(
            (row) =>
              subjectIdsMatch(row.subjectId, found.id) || subjectIdsMatch(row.subjectId, canonId)
          )) {
            item.deletedAt = Date.now();
            item.updatedAt = Date.now();
            pushRecycle("content_item", item.title, { ...item });
          }
          const dropConcepts = current.concepts.filter((c) => subjectsMatch(c.subject, found.name));
          for (const c of dropConcepts) pushRecycle("concept", c.title, c);
          current.concepts = current.concepts.filter((c) => !subjectsMatch(c.subject, found.name));
          current.topics = current.topics.filter((t) => !subjectsMatch(t.subject, found.name));
          const dropFormulas = current.formulas.filter((f) => subjectsMatch(f.subject, found.name));
          for (const f of dropFormulas) pushRecycle("formula", f.name, f);
          current.formulas = current.formulas.filter((f) => !subjectsMatch(f.subject, found.name));
          const dropQuizzes = current.questionnaires.filter((q) =>
            subjectsMatch(q.subject, found.name)
          );
          for (const q of dropQuizzes) pushRecycle("questionnaire", q.title, q);
          current.questionnaires = current.questionnaires.filter(
            (q) => !subjectsMatch(q.subject, found.name)
          );
          pushRecycle("subject", found.name, found);
          current.subjects = current.subjects.filter((s) => s.id !== found.id);
        }
      } else if (target === "unit") {
        const found = current.units.find((entry) => entry.id === id);
        if (found) {
          pushRecycle("unit", found.title, found);
          current.units = current.units.filter((entry) => entry.id !== id);
          // Detach content items from this unit (keep items, clear unitId).
          for (const item of current.contentItems) {
            if (item.unitId === id) {
              item.unitId = undefined;
              item.updatedAt = Date.now();
            }
          }
        }
      } else if (target === "questionnaire") {
        const found = current.questionnaires.find((q) => q.id === id);
        if (found) {
          pushRecycle("questionnaire", found.title, found);
          current.questionnaires = current.questionnaires.filter((q) => q.id !== id);
        }
      } else if (target === "forum_post") {
        const post = current.forumPosts.find((entry) => entry.id === id);
        if (post) {
          const fileIds = [
            ...(post.attachments || []).map((a) => a.fileId),
            ...(post.replies || []).flatMap((r) => (r.attachments || []).map((a) => a.fileId)),
          ].filter(Boolean);
          for (const fileId of fileIds) {
            const found = current.files.find((f) => f.id === fileId);
            if (found) {
              pushRecycle("file", found.name, found);
              rememberDeleted(current, found.id);
            }
          }
          if (fileIds.length) {
            current.files = current.files.filter((f) => !fileIds.includes(f.id));
          }
        }
        current.forumPosts = current.forumPosts.filter((entry) => entry.id !== id);
      } else if (target === "forum_reply") {
        const post = current.forumPosts.find((entry) => entry.id === String(body.postId || ""));
        if (!post) return NextResponse.json({ error: "Post not found" }, { status: 404 });
        const reply = (post.replies || []).find((entry) => entry.id === id);
        if (reply) {
          const fileIds = (reply.attachments || []).map((a) => a.fileId).filter(Boolean);
          for (const fileId of fileIds) {
            const found = current.files.find((f) => f.id === fileId);
            if (found) {
              pushRecycle("file", found.name, found);
              rememberDeleted(current, found.id);
            }
          }
          if (fileIds.length) {
            current.files = current.files.filter((f) => !fileIds.includes(f.id));
          }
        }
        post.replies = (post.replies || []).filter((entry) => entry.id !== id);
      }
      else return NextResponse.json({ error: "Unknown delete target" }, { status: 400 });
    } else if (action === "set_advanced_default") {
      const enabled = Boolean(body.advancedDefault ?? body.enabled);
      current.settings = {
        ...(current.settings || { advancedDefault: false }),
        advancedDefault: enabled,
      };
    } else if (action === "set_github_token") {
      const t = String(body.githubToken || "").trim();
      if (!t) return NextResponse.json({ error: "githubToken required" }, { status: 400 });
      await setGithubTokenCookie(t);
      return NextResponse.json({ ok: true, note: "GitHub publish token saved for this browser." });
    } else {
      return NextResponse.json({ error: "Unknown action" }, { status: 400 });
    }

    const result = await saveManagedContent(current, token, undefined, {
      baseUpdatedAt: Number(body.baseUpdatedAt || 0) || undefined,
    });
    return NextResponse.json({
      ok: true,
      mode: result.mode,
      level,
      createdId: createdId || undefined,
      // Return the persisted document (real updatedAt) — not the pre-merge snapshot.
      content: slimManagedContent(result.content),
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Save failed";
    // Platform 413 bodies are plain text; still always return JSON from this handler.
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
