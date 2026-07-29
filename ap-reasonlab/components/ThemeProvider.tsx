"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

/** Visual spectrum themes for the whole site (Style window). */
export type SiteTheme =
  | "ap"
  | "cyberpunk"
  | "luxury"
  | "pastel"
  | "crimson"
  | "verdant"
  | "violet"
  | "amber"
  | "silver";

const STORAGE_KEY = "ke-site-theme";
export const SITE_THEMES: SiteTheme[] = [
  "ap",
  "cyberpunk",
  "luxury",
  "pastel",
  "crimson",
  "verdant",
  "violet",
  "amber",
  "silver",
];

type ThemeContextValue = {
  theme: SiteTheme;
  setTheme: (theme: SiteTheme) => void;
  cycleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

function isSiteTheme(value: string | null): value is SiteTheme {
  return !!value && SITE_THEMES.includes(value as SiteTheme);
}

function applyTheme(theme: SiteTheme) {
  if (typeof document === "undefined") return;
  document.documentElement.setAttribute("data-theme", theme);
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<SiteTheme>("ap");

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    const next: SiteTheme = isSiteTheme(stored) ? stored : "ap";
    setThemeState(next);
    applyTheme(next);
  }, []);

  const setTheme = useCallback((next: SiteTheme) => {
    setThemeState(next);
    applyTheme(next);
    localStorage.setItem(STORAGE_KEY, next);
  }, []);

  const cycleTheme = useCallback(() => {
    const index = SITE_THEMES.indexOf(theme);
    setTheme(SITE_THEMES[(index + 1) % SITE_THEMES.length]);
  }, [setTheme, theme]);

  const value = useMemo(
    () => ({ theme, setTheme, cycleTheme }),
    [theme, setTheme, cycleTheme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useSiteTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useSiteTheme must be used within ThemeProvider");
  return ctx;
}
