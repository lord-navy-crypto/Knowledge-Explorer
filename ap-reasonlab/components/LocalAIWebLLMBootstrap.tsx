"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const LOCAL_AI_PATH = /(?:^\/ai-for-ap(?:\/|$)|^\/english\/ai(?:\/|$)|^\/code\/ai(?:\/|$)|^\/easy-local-ai(?:\/|$)|^\/user-guide\/ai(?:\/|$))/;

/**
 * WebLLM 0.2.82 defaults to the browser Cache API unless this compatibility
 * flag is set on its shared module singleton. Load the runtime only on actual
 * AI surfaces; deterministic legacy tools such as /hints must never wake it up.
 */
export default function LocalAIWebLLMBootstrap() {
  const pathname = usePathname();

  useEffect(() => {
    if (!LOCAL_AI_PATH.test(pathname || "")) return;

    let cancelled = false;
    void import("@mlc-ai/web-llm")
      .then(({ prebuiltAppConfig }) => {
        if (!cancelled) prebuiltAppConfig.useIndexedDBCache = true;
      })
      .catch(() => {
        // Local AI surfaces own user-visible runtime errors. Never break the shell.
      });

    return () => {
      cancelled = true;
    };
  }, [pathname]);

  return null;
}
