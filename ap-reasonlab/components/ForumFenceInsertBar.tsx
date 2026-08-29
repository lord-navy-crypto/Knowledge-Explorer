"use client";

import type { ReactNode } from "react";
import { FORUM_FENCE_INSERTS } from "@/lib/forum-code-blocks";

export default function ForumFenceInsertBar({
  onInsert,
  extra,
}: {
  onInsert: (chunk: string) => void;
  extra?: ReactNode;
}) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {FORUM_FENCE_INSERTS.map(({ tag, label }) => (
        <button
          key={tag}
          type="button"
          className="rounded-md border border-slate-200 bg-white px-2 py-1 text-[11px] font-semibold text-slate-700 hover:bg-slate-50"
          onClick={() => {
            const fence =
              tag === "latex" ? "\n$$\n\n$$\n" : "\n```" + tag + "\n\n```\n";
            onInsert(fence);
          }}
        >
          Insert {label}
        </button>
      ))}
      {extra}
    </div>
  );
}
