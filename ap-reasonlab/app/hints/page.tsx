"use client";

import dynamic from "next/dynamic";
import { Suspense, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const MathPad = dynamic(() => import("@/components/MathPad"), {
  loading: () => <div className="card text-sm text-slate-500">Loading Calc + Graph…</div>,
});

function LegacyToolboxRouter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const tool = searchParams.get("tool");
  const section = searchParams.get("section");

  const isMath = tool === "calculator" || tool === "grapher" || tool === "math" || tool === "imagegen";

  useEffect(() => {
    if (isMath) return;
    const query = searchParams.toString();
    if (tool === "english") {
      router.replace(`/english/ai${query ? `?${query}` : ""}`);
      return;
    }
    if (tool === "coding") {
      router.replace(`/code/ai${query ? `?${query}` : ""}`);
      return;
    }
    if (tool === "guide") {
      router.replace(`/user-guide/ai${query ? `?${query}` : ""}`);
      return;
    }
    if (section === "ai-for-ap" || tool === "concept" || tool === "hint") {
      router.replace(`/ai-for-ap${query ? `?${query}` : ""}`);
      return;
    }
    router.replace("/ai-for-ap");
  }, [isMath, router, searchParams, section, tool]);

  if (isMath) {
    return (
      <div className="space-y-5">
        <section className="card">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Convenient Tools</p>
          <h1 className="mt-1 text-2xl font-bold">Calc + Graph</h1>
          <p className="mt-2 text-sm text-slate-600">
            The old AI Toolbox has been split into contextual AI areas. This legacy URL now keeps only
            the calculator / graph utility for compatibility.
          </p>
        </section>
        <MathPad focus={tool === "grapher" || tool === "imagegen" ? "grapher" : "calculator"} />
      </div>
    );
  }

  return <div className="card text-sm text-slate-500">Opening the new contextual AI workspace…</div>;
}

export default function HintsPage() {
  return (
    <Suspense fallback={<div className="card text-sm text-slate-500">Opening AI workspace…</div>}>
      <LegacyToolboxRouter />
    </Suspense>
  );
}
