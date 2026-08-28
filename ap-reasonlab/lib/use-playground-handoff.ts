"use client";

import { useEffect } from "react";
import { consumePlaygroundHandoffNotice } from "@/lib/code-draft-bridge";

/** Show a one-time note when navigating from code block adder. */
export function usePlaygroundHandoffNotice(onHandoff?: (message: string) => void) {
  useEffect(() => {
    if (consumePlaygroundHandoffNotice()) {
      onHandoff?.("Loaded from code block adder — press Run when ready.");
    }
  }, [onHandoff]);
}
