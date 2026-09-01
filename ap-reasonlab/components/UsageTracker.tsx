"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

type UsagePayload = {
  event: "page_view";
  route: string;
  device: "mobile" | "tablet" | "desktop";
  language?: string;
  timezone?: string;
  referrerHost?: string;
};

function deviceClass(): UsagePayload["device"] {
  if (typeof window === "undefined") return "desktop";
  const width = window.innerWidth;
  if (width < 640) return "mobile";
  if (width < 1024) return "tablet";
  return "desktop";
}

function safeReferrerHost() {
  if (typeof document === "undefined" || !document.referrer) return undefined;
  try {
    const host = new URL(document.referrer).hostname;
    return host === window.location.hostname ? "internal" : host.slice(0, 120);
  } catch {
    return undefined;
  }
}

export default function UsageTracker() {
  const pathname = usePathname();
  const lastRoute = useRef("");

  useEffect(() => {
    if (!pathname || pathname === lastRoute.current) return;
    lastRoute.current = pathname;

    const payload: UsagePayload = {
      event: "page_view",
      route: pathname.slice(0, 180),
      device: deviceClass(),
      language: navigator.language?.slice(0, 20),
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone?.slice(0, 60),
      referrerHost: safeReferrerHost(),
    };

    const body = JSON.stringify(payload);
    if (navigator.sendBeacon) {
      navigator.sendBeacon("/api/usage-log", new Blob([body], { type: "application/json" }));
      return;
    }

    void fetch("/api/usage-log", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body,
      keepalive: true,
    }).catch(() => undefined);
  }, [pathname]);

  return null;
}
