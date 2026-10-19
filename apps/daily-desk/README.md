# Daily Desk

Daily Desk is the standalone desktop product in the Knowledge-Explorer repository. It is separate from the AP ReasonLab Next.js website and is not deployed by Vercel.

## Stack

- React + TypeScript + Vite for the desktop UI
- Tauri 2 + Rust for the desktop shell
- macOS DMG bundle for the first release target
- GitHub Releases for versioned installers

## Development

Requirements: Node.js, npm, Rust toolchain, and the platform dependencies listed in the Tauri prerequisites.

```sh
npm install
npm run tauri:dev
```

Build the frontend:

```sh
npm run build
```

Build a macOS DMG on a compatible macOS runner:

```sh
npm run tauri:build
```

## Release policy

- Version and release tags use `daily-desk-vX.Y.Z`.
- The release workflow builds DMG assets and attaches them to a GitHub Release.
- Do not commit generated `.dmg`, `.app`, `target/`, or `dist/` output to source control.
- The AP website remains rooted at `ap-reasonlab/` in Vercel.


## Implemented workspace modules

- **Planner**: task priorities, optional due dates, filters, and completion tracking.
- **Flashcards**: add and review question/answer cards with flip, search, and removal.
- **Focus timer**: focus and break sessions with start, pause, and reset.
- **Notes**: a local autosaved scratchpad.
- **Quick utilities**: text metrics and JSON formatting.
- **Backup & privacy**: export and restore a validated v2 JSON workspace.

Data currently lives in the Tauri WebView's local storage, and is not synced to the AP website. Treat it as **local convenience storage**, not as a backed-up database. Backups should be exported periodically; future versions should migrate durable user data to an app-controlled directory or SQLite. Importing a backup replaces existing data after confirmation.

### Build resources

GitHub Actions generates macOS icons from `src-tauri/app-icon.svg` using `npx tauri icon src-tauri/app-icon.svg` before attempting Tauri bundling. A missing `src-tauri/icons/icon.png` previously prevented a successful desktop build.

### Isolation contract

The Vercel project `center` uses `ap-reasonlab/` as its Root Directory. The Tauri app lives entirely in `apps/daily-desk/`, and the separate GitHub Actions workflows build macOS artifacts. Do not import desktop-only code into the website's Next.js bundle.
