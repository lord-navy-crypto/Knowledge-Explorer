"use client";

import { useEffect } from "react";
import {
  consumeWriteToolHandoff,
  type WriteToolTarget,
} from "@/lib/write-tool-handoff";

/** Load text from write-convert wizard handoff once on mount. */
export function useWriteToolHandoff(
  target: WriteToolTarget,
  onHandoff: (text: string, title?: string) => void
) {
  useEffect(() => {
    const draft = consumeWriteToolHandoff(target);
    if (draft?.text) {
      onHandoff(draft.text, draft.title);
    }
  }, [target, onHandoff]);
}
