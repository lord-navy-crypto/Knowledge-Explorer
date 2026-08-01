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
const NIGHT_STORAGE_KEY = "ke-night-mode";
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
  /** Style-window night: B&W tomato desk (and soft site dim). */
  nightMode: boolean;
  setNightMode: (on: boolean) => void;
  toggleNightMode: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

function isSiteTheme(value: string | null): value is SiteTheme {
  return !!value && SITE_THEMES.includes(value as SiteTheme);
}

function applyTheme(theme: SiteTheme) {
  if (typeof document === "undefined") return;
  document.documentElement.setAttribute("data-theme", theme);
}

function applyNight(on: boolean) {
  if (typeof document === "undefined") return;
  if (on) document.documentElement.setAttribute("data-night", "on");
  else document.documentElement.removeAttribute("data-night");
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<SiteTheme>("ap");
  const [nightMode, setNightModeState] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    const next: SiteTheme = isSiteTheme(stored) ? stored : "ap";
    setThemeState(next);
    applyTheme(next);
    const nightOn = localStorage.getItem(NIGHT_STORAGE_KEY) === "on";
    setNightModeState(nightOn);
    applyNight(nightOn);
  }, []);

  const setTheme = useCallback((next: SiteTheme) => {
    setThemeState(next);
    applyTheme(next);
    localStorage.setItem(STORAGE_KEY, next);
  }, []);

  const setNightMode = useCallback((on: boolean) => {
    setNightModeState(on);
    applyNight(on);
    localStorage.setItem(NIGHT_STORAGE_KEY, on ? "on" : "off");
  }, []);

  const toggleNightMode = useCallback(() => {
    setNightMode(!nightMode);
  }, [nightMode, setNightMode]);

  const cycleTheme = useCallback(() => {
    const index = SITE_THEMES.indexOf(theme);
    setTheme(SITE_THEMES[(index + 1) % SITE_THEMES.length]);
  }, [setTheme, theme]);

  const value = useMemo(
    () => ({ theme, setTheme, cycleTheme, nightMode, setNightMode, toggleNightMode }),
    [theme, setTheme, cycleTheme, nightMode, setNightMode, toggleNightMode]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useSiteTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useSiteTheme must be used within ThemeProvider");
  return ctx;
}
