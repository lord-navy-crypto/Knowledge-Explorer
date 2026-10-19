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

## Native storage and backup (v0.3 preview)

The **Tauri desktop app** stores workspace data as `workspace-v2.json` in its OS-managed application-data directory, resolved by Tauri's `app_data_dir()` API. Writes are serialised by the React client and written using a temporary file, sync and rename on the Rust side to reduce corruption risk. The **browser preview** continues to use the previous localStorage-based store; the desktop app only migrates previous WebView data when no native workspace file exists.

- The local workspace is **not uploaded** to the AP website, Vercel or any server.
- Backups use the macOS native Save/Open dialogs through Tauri and contain all tasks, cards and notes.
- Import requires explicit confirmation before replacing the workspace.
- Native storage has a 3 MB data limit for this version; use exports to move between machines.
- If an existing native file cannot be read, the app does **not** automatically overwrite it. Make a manual backup or restore through the UI.
- Desktop app releases use the `daily-desk-vX.Y.Z` tag prefix; this is currently a preview, not a notarized/signed release.

### Test checklist

1. Add a task, flashcard and note; quit and reopen the app; verify all three survive.
2. Export JSON through the native Save dialog, edit the workspace, import the backup and confirm restoration.
3. Cancel the import and export dialogs; verify no data is lost.
4. Start a Focus session and navigate to other tools; the timer must continue.
5. Push app-only changes and verify Vercel skips a new AP web deployment.

## v0.5 preview: daily workflow parity improvements

- Study deck names per flashcard, due-today filter, and simple interval-based reviews with **Again / Good / Easy** ratings.
- Backward-compatible parsing for older flashcards that only contain a front/back question and answer. Restore and backup retain review metadata.
- PDF desk supports saving selected pages together as one PDF, or individually as multiple one-page PDFs inside a ZIP (maximum 50 pages).
- This scheduling system is intentionally simple; it should not be represented as the AP website's full study engine or a validated spaced-repetition algorithm.
- Versioned desktop CI covers frontend build, Vitest, Rust tests and DMG bundling before integration.

## v0.6 preview: additional easy web tool equivalents

- Offline short-code URL bookmarks saved as local presets (no public redirect service).
- Reading passages with colored selection highlights and margin notes.
- Temporary paste-to-flip cards, and random single-name selection.
- Vector addition/subtraction and explicitly chosen significant-figure rounding.
- White/pink/brown/soft locally synthesised focus audio beds (not streamed recordings).

The desktop program remains separate from the AP website. These changes are not equivalent to web-hosted AI, speech recognition, or all advanced mathematics tools.


## v0.7 preview: offline math and document tools

- **Math calculus tab:** numeric f(x), derivative, tangent, Simpson integral, sign-changing root detection and intersections. Calculations are local approximations; singularities and touching roots need extra care.
- **Word preview:** import a `.docx`, review its converted Markdown, send that content into the persistent Writing Desk, and open the system Print / Save PDF dialog where the macOS WebView supports it.
- DOCX→PDF is **not pixel-identical** to Microsoft Word layout. Complex tables, figures and pagination may differ.
- v0.7 is gated by TypeScript, Vitest, Rust tests and macOS DMG CI before integration. Real Mac printing interactions still need user verification.

## v0.8 preview: richer offline authoring

- **Advanced Grapher**: Multiple Cartesian graphs, polar and parametric curves, drag/scroll or button zoom, panning and local SVG export.
- **PDF previews**: Browser-worker-based PDF.js thumbnails (8 at a time), chosen-page preview, and page selection for existing split/rotation tools. Preview is disabled for PDFs over 25 MB.
- **Document editor**: Local Markdown toolbar, find-and-replace, undo/redo, templates, document outline, split/edit/preview views, Markdown/plain-text import, and basic DOCX generation using the `docx` library.
- **No cloud uploads** are required for these modules. The desktop source continues to be separate from the `ap-reasonlab/` Next.js website.
- Word export simplifies rich styles, equations and tables; verify the output using a desktop Word reader. Print-to-PDF still depends on macOS WebView behavior.
