"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { loadWebLLMRuntime } from "@/lib/local-ai-runtime";

const LOCAL_AI_PATH = /(?:^\/ai-for-ap(?:\/|$)|^\/english\/ai(?:\/|$)|^\/code\/ai(?:\/|$)|^\/easy-local-ai(?:\/|$)|^\/user-guide\/ai(?:\/|$))/;

/** Load WebLLM only on actual AI surfaces; deterministic legacy tools never wake it up. */
export default function LocalAIWebLLMBootstrap() {
  const pathname = usePathname();

  useEffect(() => {
    if (!LOCAL_AI_PATH.test(pathname || "")) return;
    void loadWebLLMRuntime().catch(() => {
      // Local AI surfaces own user-visible runtime errors. Never break the shell.
    });
  }, [pathname]);

  return null;
}
