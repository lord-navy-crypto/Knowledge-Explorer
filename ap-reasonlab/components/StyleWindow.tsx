"use client";

import { useEffect, useState } from "react";
import { useSiteTheme, type SiteTheme } from "@/components/ThemeProvider";

const styles: Array<{
  id: SiteTheme;
  name: string;
  blurb: string;
}> = [
  {
    id: "ap",
    name: "AP Classic",
    blurb: "Academic blue with crisp study chrome — the original KE look.",
  },
  {
    id: "cyberpunk",
    name: "Cyberpunk Red",
    blurb: "Dark neon deck with red frames, grid glow, and scanline depth.",
  },
  {
    id: "luxury",
    name: "Luxury Gold & Silver",
    blurb: "Metallic gold foil woven with silver chrome — reflective premium trim.",
  },
  {
    id: "pastel",
    name: "Pastel Pink & Purple",
    blurb: "Blush pink leads, soft purple accents — cute layered candy study vibe.",
  },
  {
    id: "crimson",
    name: "红霞 Crimson Glow",
    blurb: "Warm sunset crimson haze — soft red sky light without the neon dark deck.",
  },
  {
    id: "verdant",
    name: "翠绿 Emerald Green",
    blurb: "Fresh forest green panels and jade accents for calm study focus.",
  },
  {
    id: "violet",
    name: "紫晶 Deep Violet",
    blurb: "Rich violet crystal tones — deeper than pastel candy purple.",
  },
  {
    id: "amber",
    name: "橙晖 Amber Orange",
    blurb: "Bright amber–orange warmth, like late-afternoon study light.",
  },
  {
    id: "silver",
    name: "银霜 Pure Silver",
    blurb: "Cool silver chrome and frost highlights — metallic without gold.",
  },
];

/**
 * Floating window frame: click a style tile to restyle the whole site.
 */
export default function StyleWindow() {
  const { theme, setTheme, nightMode, setNightMode } = useSiteTheme();
  const [open, setOpen] = useState(false);
  const [minimized, setMinimized] = useState(false);

  useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <button
        type="button"
        className="style-window-launcher"
        onClick={() => {
          setOpen(true);
          setMinimized(false);
        }}
        title="Change page style"
        aria-label="Open style window"
      >
        <span className="style-window-launcher-dots" aria-hidden>
          <i />
          <i />
          <i />
        </span>
        Style
      </button>

      {open && (
        <div
          className="style-window-overlay"
          role="presentation"
          onClick={(event) => {
            if (event.target === event.currentTarget) setOpen(false);
          }}
        >
          <div
            className={`style-window ${minimized ? "style-window--min" : ""}`}
            role="dialog"
            aria-modal="true"
            aria-labelledby="style-window-title"
          >
            <header className="style-window-titlebar">
              <div className="style-window-traffic" aria-hidden>
                <button
                  type="button"
                  className="sw-dot sw-dot-close"
                  onClick={() => setOpen(false)}
                  aria-label="Close style window"
                />
                <button
                  type="button"
                  className="sw-dot sw-dot-min"
                  onClick={() => setMinimized((value) => !value)}
                  aria-label={minimized ? "Expand style window" : "Minimize style window"}
                />
                <span className="sw-dot sw-dot-max" />
              </div>
              <h2 id="style-window-title" className="style-window-heading">
                Style window · visual spectrum
              </h2>
              <button type="button" className="style-window-close-text" onClick={() => setOpen(false)}>
                Esc
              </button>
            </header>

            {!minimized && (
              <div className="style-window-body">
                <p className="style-window-lead">
                  Nine looks across the color spectrum — Classic, Cyberpunk, Luxury, Pastel, plus
                  Crimson / Emerald / Violet / Amber / Silver. Choice is saved in this browser.
                </p>

                <div className="style-night-row">
                  <div>
                    <p className="style-night-title">Night mode</p>
                    <p className="style-night-blurb">
                      Darkens the whole site — pages, panels, and chrome. Saved in this browser.
                    </p>
                  </div>
                  <button
                    type="button"
                    className={`style-night-toggle ${nightMode ? "is-on" : ""}`}
                    onClick={() => setNightMode(!nightMode)}
                    aria-pressed={nightMode}
                  >
                    {nightMode ? "Night on" : "Night off"}
                  </button>
                </div>

                <div className="style-window-grid style-window-grid--spectrum">
                  {styles.map((item) => {
                    const active = theme === item.id;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        className={`style-tile style-tile--${item.id} ${active ? "is-active" : ""}`}
                        onClick={() => setTheme(item.id)}
                        aria-pressed={active}
                      >
                        <span className="style-tile-preview" aria-hidden />
                        <span className="style-tile-name">{item.name}</span>
                        <span className="style-tile-blurb">{item.blurb}</span>
                        {active && <span className="style-tile-badge">Active</span>}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
