"use client";

import { useEffect } from "react";

type Options = {
  onRun?: () => void;
  onCopy?: () => void;
  enabled?: boolean;
};

/** Ctrl/Cmd+Enter → run; Ctrl/Cmd+Shift+C → copy source. */
export function usePlaygroundShortcuts({ onRun, onCopy, enabled = true }: Options) {
  useEffect(() => {
    if (!enabled) return;
    function onKeyDown(event: KeyboardEvent) {
      const mod = event.metaKey || event.ctrlKey;
      if (!mod) return;
      if (event.key === "Enter" && onRun) {
        event.preventDefault();
        onRun();
        return;
      }
      if (event.key.toLowerCase() === "c" && event.shiftKey && onCopy) {
        event.preventDefault();
        onCopy();
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onRun, onCopy, enabled]);
}
