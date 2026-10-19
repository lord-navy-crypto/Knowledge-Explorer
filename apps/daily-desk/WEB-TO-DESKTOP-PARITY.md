# Knowledge Explorer web → Daily Desk desktop: daily-tools port

## Scope

The source inventory is the AP website's `ap-reasonlab/data/study-tools.ts` and `ap-reasonlab/data/tool-workbenches.ts`. The goal is to implement **actual local desktop functionality**, not embed the AP website in a window. The desktop product remains in `apps/daily-desk/`, compiled by Tauri and GitHub Actions. The website stays in `ap-reasonlab/`.

This first port covers the everyday tool set but is **not 100% feature parity** with every web workbench, especially the AI/backend, specialized graphics, and advanced graphing interfaces.

## Functional desktop equivalents included in this branch

| Website module(s) | Desktop implementation | Limits |
| --- | --- | --- |
| focus-desk / timer | Focus Timer | White/pink/brown/soft synthetic local sound beds; original recordings not reproduced |
| flashcards / vocab-book | Saved Flashcards | Local subject decks, due-date filtering and interval reviews; not synced to web |
| mistake-notebook | Study & English / Mistake notebook | Plain text entries |
| exam-countdown | Study & English / Exam countdown | Local calendar dates |
| code-board | Study & English / Code board | Snippet storage, not an IDE |
| word-count | Everyday tools / Word count | English-style token estimate |
| dictation | Study & English / Dictation | System TTS support varies by macOS WebView |
| paraphrase | Study & English / Paraphrase | Word overlap is only a rough measure |
| reading-highlight | Reading highlights | Selection-based colored highlighting + margin notes, saved in native workspace |
| typewriter | Study & English / Typewriter | Reveal lines |
| calculator | Math / Calculator | mathjs expressions, **not full ClassWiz** |
| grapher | Math / Graph | Basic Y(x) function plotting only |
| formula-board | Math / Formula board | Core STEM formulas subset |
| latex | Math / LaTeX | KaTeX preview |
| units | Math / Units | Major common unit groups |
| sci-notation | Math / Scientific notation | Scientific notation, estimated significant figures, custom precision multiplication/division |
| vector-resolve | Math / Vector components | Two polar vectors add/subtract, magnitude and direction |
| pdf-tools / pdf-compress | File desk / PDF | Merge, selected-page split, separate-page ZIP export (≤50 pages), rotate, reserialize |
| image-compress | File desk / Images | Resize, convert JPEG/WebP/PNG, percent-based crop and text caption; freehand annotation pending |
| word-import | File desk / Word to Markdown | `.docx` HTML extraction converted to safe editable Markdown (some formatting loss) |
| dual / write-convert / markdown-pdf | Writing workbench | Markdown + math live preview, file export, system print/PDF; Word→PDF print needs manual testing |
| draft | Drawing desk | Saved black canvas strokes, mouse/stylus freehand marks, undo, PNG export |
| csv-markdown | Everyday tools / CSV | Quoted CSV/TSV parsing |
| batch-rename | Everyday tools / Batch rename | Explicit per-file copy export |
| markdown-plain | Everyday tools / Markdown & plain | Common inline removal, paragraph/heading conversion |
| text-comparator / text-diff | Everyday tools / Diff | Line-by-line comparison, not character-level |
| random-groups | Everyday tools / Groups | Shuffle, divide into groups, or pick one at random |
| color-contrast | Everyday tools / Color | WCAG contrast ratio |
| qr-code | Everyday tools / QR | Local PNG QR |
| json-formatter | Everyday tools / JSON | Pretty-print, validate, minify |
| encode-decode | Everyday tools / Encode | UTF-8 Base64 and URI components |
| notes, tasks | Daily Desk native | Persisted in app data folder |
| flashcards (paste) | Study & English / Instant flip cards | Paste tab or double-colon pairs; intentionally session-only |
| short-code | Local Link presets | Saved code → external HTTP(S) link; no cloud redirects/embeds |

## Still to migrate or build before claiming full parity

- Full AP site's AI workbench, external providers/API keys and WebLLM: needs separate consent and platform-specific integration; **not ported**.
- Speech-to-text / Whisper local microphone processing: **not ported**. Dictation TTS is not speech recognition.
- The website's full ClassWiz calculator, calculus graph analysis (derivatives, roots, polar/parametric), advanced unit/math modes: **partial**.
- PDF individual-page ZIP splitting now supported (up to 50 pages); interactive page preview, heavy-duty scanned image recompression and freehand annotation on images remain **partial**.
- Word→PDF via docx preview/print remains **not ported**. Reading highlight and local link presets now have offline equivalents. Markdown/LaTeX live editing, printing and a saved black drawing canvas have basic implementations.
- Full code editor and off-site tools are not inherently offline; must remain separate from the desktop's core feature set.

## Portability, local export and safety

- Files are processed in the desktop WebView in memory. Save operations prompt for a location using the system dialog and then write locally through a limited Tauri command.
- Native saved outputs: PDF, PNG, JPEG, WebP, Markdown, text, CSV and JSON. The native output command limits file size to 20MB and file extensions to an allowlist.
- Workspace data continues to use the Tauri-managed local application-data file and does not go through Vercel.
- The PDF light optimization rewrites the PDF object structure; it does not necessarily compress embedded images.
- The new input/preview modules need macOS interaction testing beyond TypeScript and automated bundling.

## Acceptance checklist

1. Desktop TypeScript + Vite build succeeds.
2. Rust unit tests and Tauri DMG bundling succeed.
3. Portable local exports in PDF/Image/Word/QR are exercised on macOS.
4. Native stored study extras survive an app restart and backup restore.
5. AP Vercel production domain is unaffected by app-only merges.

## v0.6 easy-tool migration
- Local short-code bookmarks with explicit HTTP(S) URL validation and native external opener.
- Reading highlighter stores selected character offsets, four colors and margin notes; edits clear offsets after confirmation.
- Session-only pasted flip-card practice (tab or double-colon separated).
- Randomly pick one name in addition to random group assignment.
- Basic vector addition/subtraction and selected significant-figure rounding.
- Still no cloud AI, shared shortlinks, online embeds, or speech-to-text transcription.

- Local focus audio is synthetic Web Audio noise (not a copy of the site's real rain recordings). Playback starts only after a click and stops when switched Off.


## v0.7 focused migration

- Math tools add local numerical derivatives, tangents, Simpson definite integrals, sign-changing roots and intersections.
- Math remaining gaps: full ClassWiz, symbolic calculus, parametric/polar charts, pan/zoom and higher-order analysis. Numerical estimates need validation around discontinuities.
- Word-to-PDF gets a **partial** desktop workflow: Mammoth DOCX import → safe Markdown preview → editable Writing Desk → Print / Save PDF if supported by macOS WebView. Exact Word formatting is not preserved.
- CI builds alone cannot verify macOS printing or real-world document fidelity.
