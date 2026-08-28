/** Sentinel Mac — latest release metadata (mirrors GitHub releases). */

export const SENTINEL_MACOS = {
  repo: "https://github.com/lord-navy-crypto/sentinel-macos",
  releases: "https://github.com/lord-navy-crypto/sentinel-macos/releases",
  tag: "v2.2.0-beta",
  versionLabel: "Sentinel Mac v2.2.0-beta",
  publishedAt: "2026-08-28",
  license: "MPL-2.0",
  tagline: "Local-first macOS system intelligence, security inspection, storage analysis, and change monitoring.",
  principle: "Explain what the system is doing before trying to change it.",
  dmg: {
    name: "Sentinel-2.2.0-beta.dmg",
    href: "https://github.com/lord-navy-crypto/sentinel-macos/releases/download/v2.2.0-beta/Sentinel-2.2.0-beta.dmg",
    sizeLabel: "~7.2 MB",
    sha256: "cd0811fe86f682c57c7feca1bb54dde9c41fa9c9542dfb55b27da29ea6846e6f",
  },
  installSteps: [
    "Download the DMG from this page or GitHub Releases.",
    "Drag Sentinel.app to Applications.",
    "Double-click Sentinel — your browser opens the localhost dashboard automatically.",
    "No Terminal required for normal use.",
  ],
  highlights: [
    "Runs entirely on your Mac — analysis stays on 127.0.0.1",
    "Universal 2 — Apple Silicon and Intel from one .app",
    "Storage intelligence with bounded duplicate detection (SHA-256)",
    "Quick Check attention index — prioritization, not malware certainty",
    "Change Monitor, incident intelligence, and evidence graph",
    "Safe Actions only — reversible moves to Sentinel Vault, no auto-delete",
  ],
  modules: [
    {
      title: "System Intelligence",
      body: "Mac model, chip, cores, memory, macOS build, storage capacity — without unnecessary serial/UUID exposure.",
    },
    {
      title: "Storage Intelligence",
      body: "Answer “where did my space go?” with ranked files, type/directory breakdown, and bounded exact-duplicate hashing.",
    },
    {
      title: "Quick Check",
      body: "Read-only rollup of security observations, storage pressure, baselines, and incident evidence into an Attention Index.",
    },
    {
      title: "Change Monitor",
      body: "FSEvents-backed filesystem watch with bounded history — changes are evidence, not automatic verdicts.",
    },
    {
      title: "Process & Network",
      body: "Running processes with signatures and Gatekeeper state; bounded local TCP snapshot with endpoint classification.",
    },
    {
      title: "Persistence & Startup",
      body: "LaunchAgents/Daemons review plus session baseline for new, removed, or modified launch configuration.",
    },
    {
      title: "Behavior & Trusted Profile",
      body: "Compare captures over time; optional approved reference profile with explicit drift reporting.",
    },
    {
      title: "Integrity Lab",
      body: "Deep read-only inspection — SHA-256, code signature, Team ID, quarantine, and static validation when available.",
    },
  ],
} as const;

/** Condensed release notes for on-site rendering (full text on GitHub). */
export const SENTINEL_RELEASE_NOTES_MD = `# Sentinel Mac — Local-First macOS System Intelligence

**Sentinel Mac** is a local-first system intelligence, security inspection, storage analysis, and change-monitoring platform for macOS. It helps you understand what your Mac is storing, running, launching, changing, and connecting to — without cloud analysis or destructive automated actions.

The desktop app is a lightweight native launcher: it starts the local Sentinel engine, creates a protected session, opens the **127.0.0.1** dashboard in your default browser, and shuts the engine down safely when you exit.

> **Explain what the system is doing before trying to change it.**

## Localhost-first architecture

- Universal 2 launcher selects Apple Silicon or Intel engine at runtime
- Single UI source of truth in the browser dashboard (not embedded WKWebView)
- DMG distribution with Developer ID signing and notarization workflow support

## What you can inspect

- **Quick Check** — attention index from security, storage, baselines, and incidents
- **Storage Intelligence** — multi-phase scans with observable duplicate hashing progress
- **Power Search** — structured filters across collected evidence; optional deep filename search
- **Change Monitor** — live events, review queues, checkpoint-aware monitoring
- **Incident Intelligence** — correlated evidence stories with explicit confidence semantics
- **Evidence graph & Object Stories** — files, processes, persistence, network, behavior
- **Safe Actions** — Reveal, Rename, Move to Vault, Restore (no permanent delete, no kill)

## Privacy model

Analysis, hashes, baselines, Trusted Profiles, and action history stay local by default. Exported reports may contain sensitive paths — review before sharing.

## License

Mozilla Public License 2.0 (MPL-2.0). Source and full release notes: [GitHub Releases](${SENTINEL_MACOS.releases}).
`;
