"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const LOCAL_AI_PATH = /(?:^\/ai-for-ap(?:\/|$)|^\/english\/ai(?:\/|$)|^\/code\/ai(?:\/|$)|^\/easy-local-ai(?:\/|$)|^\/user-guide\/ai(?:\/|$)|^\/hints(?:\/|$))/;

/**
 * WebLLM 0.2.82 defaults to the browser Cache API unless the legacy
 * `useIndexedDBCache` flag is set on its shared module singleton.
 *
 * Keep that compatibility setting, but do not statically import the multi-MB
 * WebLLM runtime from the root layout. Ordinary AP/English/content pages should
 * not pay for the local-inference runtime unless the user actually enters an AI
 * surface. LocalAIProvider still dynamically imports WebLLM at the point of use;
 * this route bootstrap only makes sure the cache preference is configured first.
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
        // The Local AI UI owns user-visible WebLLM load errors. This bootstrap is
        // deliberately silent so a failed optional runtime never breaks the site shell.
      });

    return () => {
      cancelled = true;
    };
  }, [pathname]);

  return null;
}
