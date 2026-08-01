"use client";

import { Suspense, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

/**
 * Private Learning Box lives in Forum → My box.
 * Preserve legacy ?tab=pictures|random|library as ?view=.
 */
function LearningBoxRedirect() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const view = searchParams.get("view") || searchParams.get("tab");
    if (view === "pictures" || view === "random" || view === "library") {
      router.replace(`/forum?tab=box&view=${view}`);
      return;
    }
    router.replace("/forum?tab=box");
  }, [router, searchParams]);

  return <div className="card text-sm text-slate-500">Opening My box in Forum…</div>;
}

export default function LearningBoxRedirectPage() {
  return (
    <Suspense fallback={<div className="card text-sm text-slate-500">Opening My box in Forum…</div>}>
      <LearningBoxRedirect />
    </Suspense>
  );
}
