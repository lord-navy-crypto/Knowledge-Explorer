"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { trueJetMembers } from "@/data/brand";

type ManagedMember = { id: string; name: string; note?: string };

function githubFromNote(note?: string): string | null {
  if (!note) return null;
  const match = note.match(/github:\s*([A-Za-z0-9-]+)/i);
  if (!match) return null;
  return `https://github.com/${match[1]}`;
}

/**
 * Home roster: static TrueJet + managed Partners members (same source as /partners).
 */
export default function HomeMembersRoster() {
  const [members, setMembers] = useState<ManagedMember[]>([]);

  useEffect(() => {
    let cancelled = false;
    void (async () => {
      try {
        const res = await fetch("/api/edit", { cache: "no-store", credentials: "include" });
        const data = (await res.json()) as { members?: ManagedMember[] };
        if (!cancelled) setMembers(Array.isArray(data.members) ? data.members : []);
      } catch {
        if (!cancelled) setMembers([]);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const roster = useMemo(() => {
    const staticOnes = trueJetMembers.map((m) => ({
      id: `static-${m.name}`,
      name: m.name,
      role: m.role,
      github: m.github.startsWith("http") ? m.github : null,
      avatar: m.avatar || "",
    }));
    const staticNames = new Set(staticOnes.map((s) => s.name.toLowerCase()));
    const extras = members
      .filter((m) => !staticNames.has(m.name.toLowerCase()))
      .map((m) => {
        const gh = githubFromNote(m.note);
        return {
          id: m.id,
          name: m.name,
          role: m.note?.replace(/github:\s*[A-Za-z0-9-]+/i, "").trim() || "Partner",
          github: gh,
          avatar: "",
        };
      });
    return [...staticOnes, ...extras];
  }, [members]);

  return (
    <div className="grid gap-3 sm:grid-cols-3">
      {roster.map((c) => {
        const inner = (
          <>
            {c.avatar ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={c.avatar} alt="" className="h-10 w-10 rounded-full" />
            ) : (
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-sm font-bold text-slate-500">
                {c.name.slice(0, 1).toUpperCase()}
              </span>
            )}
            <div>
              <p className="font-medium text-slate-900">{c.name}</p>
              <p className="text-xs text-slate-500">{c.role}</p>
              {c.github ? (
                <p className="text-xs text-brand-700">
                  @{c.github.replace(/^https?:\/\/github\.com\//i, "")}
                </p>
              ) : (
                <p className="text-xs text-slate-400">No GitHub linked yet</p>
              )}
            </div>
          </>
        );
        return c.github ? (
          <a
            key={c.id}
            href={c.github}
            target="_blank"
            rel="noreferrer"
            className="directory-link relative !border !border-[var(--ke-border)]"
          >
            {inner}
          </a>
        ) : (
          <div key={c.id} className="directory-link relative !border !border-[var(--ke-border)]">
            {inner}
          </div>
        );
      })}
      <Link
        href="/partners"
        className="directory-link relative border border-dashed !border-[var(--ke-border-strong)]"
      >
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-sm font-bold text-slate-500">
          +
        </span>
        <div>
          <p className="font-medium text-slate-900">Add a person</p>
          <p className="text-xs text-slate-500">Name + GitHub on Partners</p>
        </div>
      </Link>
    </div>
  );
}
