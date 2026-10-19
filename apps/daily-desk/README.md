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

## v0.9 one-click bulk migration

- **All tools / 全部工具**: searchable navigation index for the offline equivalents of Knowledge Explorer everyday tools. Choose an item and jump directly into the relevant module rather than navigating separate tabs.
- **Code editor**: local code text editing with language-specific templates, file import, find/replace, JSON formatting, plain-text export, and saved code snippet integration.
- **Calculator extras**: BASE-N conversion (BigInt integers), quadratic equations, 1-variable sample/population statistics, and 2×2 simultaneous linear equations.
- **CSV text-file import**: choose .csv or .tsv and process its data locally.
- The existing math, file, writing, study, English, classroom and quick tools remain part of the app. The internet-dependent AI backend, automatic speech recognition and shared/public cloud tools are not described as offline ports.
- All changes are restricted to `apps/daily-desk/` and do not affect the AP website on Vercel.

## v0.10 offline office tools

- **CSV Table Desk:** opens local `.csv` or `.tsv` files or pasted content, up to 2 MB / 2,000 rows / 100 columns. Includes searching all/one column, numeric-aware sort, deduplicate whole rows, first-80-row preview, non-destructive filtered exports in CSV, JSON and Markdown. CSV output guards against opening untrusted formula-like cells in spreadsheet programs.
- **PDF organizer:** `File desk → PDF → Organize` takes explicit one-based page order such as `3,1,2,5-7`; omitting a page removes it. Rejects duplicate or out-of-range page numbers, saves a new PDF and preserves original.
- **Image batch:** `File desk → Images` can convert up to 12 local JPEG/PNG/WebP images to a common format/width and save a single ZIP. Conservative per-file, pixel and ZIP-size limits protect memory on 16 GB Apple Silicon machines.
- The searchable All tools catalog includes the new entries; no AP ReasonLab website code is changed.
- Notes: CSV is a flat table utility, not an XLSX formula editor. PDF editing rearranges page objects, not internal PDF text/annotations. Batch image conversion handles raster input only. Mac WebView interaction remains to be verified after CI build.

## v0.11 local PDF text, Word formatting and batch rename

- **PDF text desk** is available under `File desk → PDF`: opt-in text extraction using a bundled PDF.js worker, per-page text search with match counts, and TXT/Markdown export. Limits: 25 MB, 300 pages, 1 million extracted characters. Scanned PDFs without selectable text need OCR; this feature does not claim OCR support. No network uploads.
- **Word DOCX export** preserves common inline Markdown formatting such as bold, italic, strikethrough and inline code, and writes actual Word bullet lists instead of plain bullet characters. Headings remain native Word headings. Rich tables, equations, hyperlinks, precise layout and embedded assets are not reproduced.
- **Batch rename** adds one-click ZIP export of renamed copies, not 50 separate save dialogs. It enforces 50-file / 16 MB input bounds, checks duplicate names, and preserves originals. Single-file export remains available.
- Main app version 0.11.0. All changes are confined to `apps/daily-desk/**`; AP ReasonLab website is unchanged.
- **Acceptance boundary:** GitHub Actions tests and DMG packaging verify buildability, not macOS WebView PDF preview/print or Word document rendering fidelity. Manual on-device verification is still necessary.

## v0.12 website-parity checkpoint

- Added [44-entry source audit](WEB-TO-DESKTOP-AUDIT.md): **19 core equivalents**, **22 partial/non-identical**, **3 intentionally unported/external**. The catalogue includes hidden aliases, so these numbers do not represent 44 independent applications.
- Text comparator: aligned line differences and word highlights with safe complexity bounds, case/whitespace options, similarity estimate and full local diff export.
- Markdown ↔ plain text: two-way conversion, optional URL retention, input/output swap, word counts and local save.
- Image desk: on-device mouse/stylus annotation, adjustable pen, undo, save new PNG; constrain image resizing by both width and height, preserving aspect ratio.
- All changes remain under `apps/daily-desk/**`. No remote API or website changes, no Ollama dependency.
- The interactive Mac UI (pointer capture, clipboard and file dialogs) still needs real-device acceptance tests.

## v0.13 interactive image crop and website formula parity

- **File Desk → Images → Interactive crop**: drag the on-image crop rectangle, choose a fixed aspect (free/1:1/4:3/16:9/3:2), change width/height via sliders, rotate in 90° steps and save a full-source-resolution cropped PNG. Crop and source are bounded to 20 million pixels; selected images ≤8 MB. The original image remains unchanged.
- **Math → Formula Board**: migrated the website's complete `ap-reasonlab/data/formula-board.ts` category dataset to desktop `src/lib/formulaBoard.ts`. Added category switching, search, LaTeX/plain copy, local favorites and Markdown favorites export, replacing the previous 8-formula sample.
- **Audit quality**: repaired malformed slash-separated description text in the 44-entry parity audit. Formula board now counts as a core desktop equivalent; image UX remains partial until hands-on validation.
- **Project isolation**: all modifications are under `apps/daily-desk/**`; AP web source and Vercel settings are unchanged.
- **Limits**: no OCR, no AI/cloud services, no guarantee of macOS pointer/print fidelity without manual acceptance; neither crop nor annotated export overwrites the imported image.

## v0.14 unit and constant parity (reconciled with v0.13)

The existing v0.13 main branch already contains interactive crop/rotate and a full Formula Board from PR #284; **this release preserves those components unchanged** rather than introducing duplicate versions.

- Migrated the original website's eight unit categories (Length, Mass, Energy, Speed, Force, Pressure, Charge, Time), including Å, atomic mass units, elementary charges and selected engineering units.
- Added °C / °F / K conversion with an absolute-zero sanity check.
- Added all fourteen reference physical constants, searchable, with copy and calculator insertion.
- Added deterministic unit tests for category/constant counts, precise unit factors and temperature calculations.
- Still local-only, no cloud AI or speech-to-text. macOS GUI acceptance testing remains necessary.

## v0.15 preview: advanced calculator modes

The local Math Workbench now has a separate **ClassWiz** tab (also available from **All tools**). The four additional modes are:
- **Complex**: parse real/imaginary scientific notation, add/subtract/multiply/divide, conjugate, magnitude, and argument in degrees.
- **Matrix**: 2×2 / 3×3 square matrices, add/subtract/multiply/transpose, determinant, and numerical inverse with partial-pivot singular checks.
- **STAT 2-var**: paired observations, sample SD, sample covariance, Pearson r, linear regression slope/intercept and R²; constant-X inputs are rejected and constant-Y correlation is labelled undefined.
- **DIST**: normal PDF and lower-tail CDF (numerical approximation), binomial PMF and lower-tail CDF (max 200 trials).

Tests exercise representative values, malformed inputs, singular matrices, complex divisions and distribution edge cases. All implementations live only in `apps/daily-desk/`. This is a functional expansion, not a claim of complete pixel-identical ClassWiz parity or macOS on-device QA. The existing basic calculator, numerical methods, formula board, image crop, unit conversions, and website source remain untouched.

## v0.16 preview: small daily tools and explicit external links

**Quick Tools / 快捷小工具** (also searchable through All Tools) adds four local-only workbenches:
- **Text cleaner**: remove invisible artifacts, normalize copy/paste whitespace, optionally deduplicate lines, drop blanks or join wrapped lines. No background clipboard monitoring.
- **Tracking-link cleaner**: strip common analytics tags such as `utm_*`, `fbclid`, `gclid` while keeping non-tracking parameters and anchors. Manual copy/export. Does not expand redirects or visit websites.
- **Date planner**: date interval and signed offsets in UTC calendar days, avoiding time-zone/DST hour problems. Date range 1900–2100.
- **Weighted grade planner**: calculate graded work average, remaining required average and best possible course score. Explicit `?` markers for future categories, and weights must total 100%.

**External Tools / 外部工具** is now a separate sidebar item with category/search and official URLs for PDF24, ZoteroBib, Overleaf, Desmos, GeoGebra, Wolfram|Alpha, diagrams.net, Excalidraw and Photopea. Each external site is launched explicitly through the Tauri system browser opener (or a separate browser tab in preview). No embedding, silent redirects, automatic file transfer or site credentials.

The full feature suite remains separate from `ap-reasonlab/`; only `apps/daily-desk/` changed. The desktop release is still a preview, and macOS WebView/browser-opening and export UX must be manually tested. Online services have their own account/privacy/pricing terms; listing them is not a guarantee they are ad-free.

## v0.17 preview: PDF Freedom Studio (offline overlays)

The existing **File desk → PDF** now includes **Add text / sign / watermark**, also accessible directly from All tools. It provides four on-device PDF operations, without uploading to the AP website or a paid service:
- Add a short **selectable text label** at a predefined corner/centre, on all or selected pages.
- Add a translucent **diagonal watermark** to selected pages.
- Add **sequential page numbers**, with optional prefix/suffix and start value, in selected-page order.
- Add a local **PNG/JPEG signature or illustration** as a scaled image overlay on selected pages.

A local **TTF/OTF** file can be optionally embedded for Chinese and other Unicode text. Without a custom font, text is restricted to printable ASCII with clear guidance, rather than mangling glyphs. The editor generates a new PDF preview locally and offers non-destructive save. A generated overlay is not a secure redaction and is not a replacement for editing original PDF text. It does not provide certified electronic/digital signing, flattening interactive forms or an advanced OCR engine.

Safety limits: PDFs ≤25 MB / ≤300 pages, overlays ≤120 characters, image inputs ≤8 MB, font input ≤12 MB, export ≤20 MB. Some rotated pages require visual checking. The original PDF is never overwritten; all output is exported through the existing native file save dialog. CI verifies TypeScript, tests, Rust and Apple Silicon packaging; visual WebView preview and Mac print fidelity require real-device acceptance.

The website `ap-reasonlab/` remains entirely separate; no new cloud upload, authentication or subscription is introduced.
