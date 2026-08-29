"use client";

import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";

function isInternalNavigationClick(event: MouseEvent) {
  if (event.defaultPrevented || event.button !== 0) return false;
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return false;

  const target = event.target as Element | null;
  const anchor = target?.closest("a[href]") as HTMLAnchorElement | null;
  if (!anchor) return false;
  if (anchor.target && anchor.target !== "_self") return false;
  if (anchor.hasAttribute("download")) return false;

  let next: URL;
  try {
    next = new URL(anchor.href, window.location.href);
  } catch {
    return false;
  }

  if (next.origin !== window.location.origin) return false;

  const current = new URL(window.location.href);
  const onlyHashChanged =
    next.pathname === current.pathname &&
    next.search === current.search &&
    next.hash !== current.hash;

  if (onlyHashChanged) return false;
  if (next.pathname === current.pathname && next.search === current.search && next.hash === current.hash) {
    return false;
  }

  return true;
}

export default function GlobalRouteProgress() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const searchKey = searchParams.toString();
  const shellRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const intervalRef = useRef<number | null>(null);
  const hideRef = useRef<number | null>(null);
  const progressRef = useRef(0);
  const mountedRef = useRef(false);

  useEffect(() => {
    const clearTimers = () => {
      if (intervalRef.current !== null) {
        window.clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      if (hideRef.current !== null) {
        window.clearTimeout(hideRef.current);
        hideRef.current = null;
      }
    };

    const render = (value: number) => {
      progressRef.current = value;
      if (shellRef.current) shellRef.current.style.display = "block";
      if (barRef.current) barRef.current.style.width = `${value}%`;
      if (labelRef.current) labelRef.current.textContent = `Loading ${value}%`;
    };

    const start = () => {
      clearTimers();
      render(7);
      intervalRef.current = window.setInterval(() => {
        const current = progressRef.current;
        const next =
          current < 35
            ? current + 7
            : current < 65
              ? current + 4
              : current < 82
                ? current + 2
                : current < 92
                  ? current + 1
                  : current;
        render(Math.min(92, next));
      }, 170);
    };

    const onClick = (event: MouseEvent) => {
      if (isInternalNavigationClick(event)) start();
    };

    const onPopState = () => start();

    document.addEventListener("click", onClick, true);
    window.addEventListener("popstate", onPopState);

    return () => {
      clearTimers();
      document.removeEventListener("click", onClick, true);
      window.removeEventListener("popstate", onPopState);
    };
  }, []);

  useEffect(() => {
    if (!mountedRef.current) {
      mountedRef.current = true;
      return;
    }

    if (intervalRef.current !== null) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    progressRef.current = 100;
    if (barRef.current) barRef.current.style.width = "100%";
    if (labelRef.current) labelRef.current.textContent = "Loading 100%";
    if (shellRef.current) shellRef.current.style.display = "block";

    if (hideRef.current !== null) window.clearTimeout(hideRef.current);
    hideRef.current = window.setTimeout(() => {
      if (shellRef.current) shellRef.current.style.display = "none";
      progressRef.current = 0;
    }, 240);
  }, [pathname, searchKey]);

  return (
    <div
      ref={shellRef}
      aria-live="polite"
      aria-label="Page loading progress"
      style={{ display: "none", position: "fixed", inset: "0 0 auto 0", zIndex: 2147483647, pointerEvents: "none" }}
    >
      <div style={{ height: 3, background: "rgba(30,58,95,0.12)" }}>
        <div
          ref={barRef}
          style={{
            width: "0%",
            height: "100%",
            background: "#1e3a5f",
            transition: "width 140ms linear",
          }}
        />
      </div>
      <span
        ref={labelRef}
        style={{
          position: "absolute",
          top: 8,
          right: 12,
          border: "1px solid rgba(30,58,95,0.18)",
          borderRadius: 999,
          background: "#fffdf8",
          padding: "4px 8px",
          color: "#1e3a5f",
          fontSize: 11,
          fontWeight: 700,
          lineHeight: 1.2,
        }}
      >
        Loading 0%
      </span>
    </div>
  );
}
