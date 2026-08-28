"use client";

import { useMemo } from "react";
import { extractForumOfficialLinks } from "@/lib/forum-official-links";

export default function ForumOfficialLinks({ body }: { body: string }) {
  const links = useMemo(() => extractForumOfficialLinks(body), [body]);
  if (!links.length) return null;

  return (
    <div className="space-y-2 rounded-lg border border-sky-200 bg-sky-50/80 px-3 py-2">
      <p className="text-xs font-semibold uppercase tracking-wide text-sky-900">
        Official docs & links
      </p>
      <div className="flex flex-wrap gap-2">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className={
              link.kind === "in-thread"
                ? "rounded-md border border-sky-300 bg-white px-2 py-1 text-xs font-semibold text-sky-900 hover:bg-sky-100"
                : link.kind === "code-lang"
                  ? "rounded-md border border-emerald-300 bg-emerald-50 px-2 py-1 text-xs font-semibold text-emerald-900 hover:bg-emerald-100"
                  : "rounded-md border border-violet-200 bg-violet-50 px-2 py-1 text-xs font-semibold text-violet-900 hover:bg-violet-100"
            }
            title={link.href}
          >
            {link.label} ↗
          </a>
        ))}
      </div>
    </div>
  );
}
