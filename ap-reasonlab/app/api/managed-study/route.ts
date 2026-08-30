import { NextRequest, NextResponse } from "next/server";
import { getGithubTokenFromCookie } from "@/lib/auth";
import { loadManagedContent, normalizeManagedContent, canonicalizeSubjectId, subjectIdsMatch, subjectsMatch } from "@/lib/managed-store";

export async function GET(req: NextRequest) {
  const token = await getGithubTokenFromCookie();
  const content = normalizeManagedContent(await loadManagedContent(token));
  const view = req.nextUrl.searchParams.get("view")?.trim() || "subjects";
  const subject = req.nextUrl.searchParams.get("subject")?.trim() || "";

  if (view === "subjects") {
    return NextResponse.json({ subjects: content.subjects || [], updatedAt: content.updatedAt });
  }

  if (view === "subject-content") {
    const subjectId = canonicalizeSubjectId(subject);
    const subjectRow = (content.subjects || []).find(
      (item) => item.slug === subject || subjectIdsMatch(item.id, subjectId) || subjectsMatch(item.name, subject)
    );
    const resolvedId = canonicalizeSubjectId(subjectRow?.id || subjectRow?.slug || subject);
    return NextResponse.json({
      subjects: subjectRow ? [subjectRow] : [],
      contentItems: (content.contentItems || []).filter(
        (item) => subjectIdsMatch(item.subjectId, resolvedId) && !item.deletedAt && item.status === "published"
      ),
      updatedAt: content.updatedAt,
    });
  }

  if (view === "concepts") {
    return NextResponse.json({
      subjects: content.subjects || [],
      concepts: subject
        ? (content.concepts || []).filter((item) => subjectsMatch(item.subject, subject))
        : content.concepts || [],
      updatedAt: content.updatedAt,
    });
  }

  if (view === "formulas") {
    return NextResponse.json({
      subjects: content.subjects || [],
      formulas: subject
        ? (content.formulas || []).filter((item) => subjectsMatch(item.subject, subject))
        : content.formulas || [],
      updatedAt: content.updatedAt,
    });
  }

  if (view === "practice") {
    return NextResponse.json({
      subjects: content.subjects || [],
      questionnaires: subject
        ? (content.questionnaires || []).filter((item) => subjectsMatch(item.subject, subject))
        : content.questionnaires || [],
      updatedAt: content.updatedAt,
    });
  }

  return NextResponse.json({ error: "Unknown managed study view" }, { status: 400 });
}
