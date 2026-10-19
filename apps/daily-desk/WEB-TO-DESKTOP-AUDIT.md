# Knowledge Explorer → Daily Desk: source-by-source feature audit

Audit date: 2026-10-19. Compared with the website's `ap-reasonlab/data/study-tools.ts` catalogue and `ap-reasonlab/data/tool-workbenches.ts`. This is an **implementation coverage audit, not a claim of pixel-identical UI parity or on-device QA**.

Website catalogue includes **44 entries**, including hidden aliases/deep-links and externally hosted functionality. Classified as **21 core desktop equivalents**, **20 partial / non-identical equivalents**, **3 not ported / intentionally external**. A core equivalent means the main local job works, *not* that every website knob or workflow is identical.

| Website tool ID | Current status | Evidence / remaining difference |
| --- | --- | --- |
| `ai` | Not ported / intentionally external | Cloudlocal LLM configured API workbench not copied into standalone offline app. |
| `calculator` | Partial / non-identical | Scientific operations exist; complete ClassWiz mode parity not verified. |
| `grapher` | Partial / non-identical | Cartesianpolarparametric plotting exists; web graph interactionfeatures still differ. |
| `math-pad` | Partial / non-identical | Math modes broadly present; full website functionality not verified. |
| `focus-desk` | Partial / non-identical | Timer and generated noise implemented; original audio recordingsrain features differ. |
| `timer` | Core desktop equivalent | Integrated with Focus Timer; hidden website alias. |
| `flashcards` | Core desktop equivalent | Instant pasted flashcards on the learning desk. |
| `mistake-notebook` | Core desktop equivalent | Local error log and review. |
| `exam-countdown` | Core desktop equivalent | Local scheduled exam countdown. |
| `code-board` | Partial / non-identical | Snippet library present; full website commentingcode hub UX differs. |
| `word-count` | Core desktop equivalent | Wordscharacterssentencesreading estimate. |
| `vocab-book` | Partial / non-identical | Saved flashcards exist; website vocab workflow differs. |
| `speech-to-text` | Not ported / intentionally external | Mic recordingWhisper transcription is not ported. |
| `dictation` | Partial / non-identical | Mac speech synthesis varies by WebView and voice availability. |
| `paraphrase` | Partial / non-identical | Overlap comparison, not full website interactive metrics. |
| `reading-highlight` | Partial / non-identical | Color highlights and notes exist; rich website behavior differs. |
| `formula-board` | Core desktop equivalent | Full 5-subject, 32-formula catalog; search, favorites, copy, Markdown export and LaTeX preview in v0.13. |
| `latex` | Core desktop equivalent | KaTeX preview in math and writing desks. |
| `units` | Core desktop equivalent | All 8 website unit groups, temperature scales, and 14 reference constants ported in v0.13. |
| `sci-notation` | Partial / non-identical | Notation and sig figs, some classroom rounding cases differ. |
| `vector-resolve` | Partial / non-identical | 2D vectors; diagram and all advanced interaction not identical. |
| `write-convert` | Partial / non-identical | Workbenches exist; wizard step-to-step handoff parity missing. |
| `dual` | Core desktop equivalent | Split Markdown writer and live preview. |
| `typewriter` | Core desktop equivalent | Line reveal practice. |
| `draft` | Partial / non-identical | Drawing board implemented, not all website drawing controls. |
| `word-pdf` | Partial / non-identical | DOCX→Markdown→print path is not pixel-faithful and needs macOS print verification. |
| `word-import` | Partial / non-identical | DOCX→Markdown works but complex tablesmediaformat may be lost. |
| `markdown-pdf` | Partial / non-identical | Live print preview, but native printPDF layout must be manually validated. |
| `pdf-tools` | Core desktop equivalent | Merge, split, rotate and selectreorder pages, local preview; PDF text extraction added v0.11. |
| `pdf-compress` | Partial / non-identical | Light PDF object optimization only; not image recompression. |
| `csv-markdown` | Core desktop equivalent | Local CSVTSV parsing and Markdown table. |
| `markdown-plain` | Core desktop equivalent | Two directions, link retention, swap, copy and local export (v0.12). |
| `batch-rename` | Core desktop equivalent | Rename preview, per-file copy and ZIP batch export. |
| `image-compress` | Partial / non-identical | Resize, formats, batch processing, draggable crop selection with aspect ratios, 90-degree rotation, pen annotation and undo implemented. UI layout still differs from the website. |
| `image-crop` | Partial / non-identical | Interactive crop and aspect presets, rectangle move, rotate and pen mode ported in v0.13; not yet pixel-identical with website tools. |
| `text-comparator` | Core desktop equivalent | Aligned line diff, word highlighting, comparison options and local diff export (v0.12). |
| `text-diff` | Core desktop equivalent | Website alias of text-comparator. |
| `random-groups` | Core desktop equivalent | Shuffle into groups and choose one. |
| `short-code` | Partial / non-identical | Local link presets work; iframe embedshared hosting not part of desktop. |
| `color-contrast` | Core desktop equivalent | WCAG contrast calculation. |
| `qr-code` | Core desktop equivalent | Local QR generation and PNG save. |
| `json-formatter` | Core desktop equivalent | Validate, prettify and minify JSON. |
| `encode-decode` | Core desktop equivalent | UTF-8 Base64 and URL component encodedecode. |
| `external-hub` | Not ported / intentionally external | External links are not native offline tools and are kept separate. |

## Development policy

1. Complete locally feasible source functionality **before** declaring full website parity. Prioritize partial items such as full ClassWiz modes, the image crop drag UI, richer WYSIWYG document layout and full write-workbench handoffs.
2. Do **not** claim API/cloud AI, Whisper microphone transcription, public shared links or external sites are offline-native implementations. They need independent architecture, permissions and tests.
3. Keep all code changes under `apps/daily-desk/**`; `ap-reasonlab/**` remains untouched. New features must be ported as local logic, not an embedded copy of the website.
4. Require TypeScript, Vitest, Rust/Tauri and macOS Apple Silicon DMG CI; manual UI/print/annotation testing is still required.

## v0.12 changes after this audit

- Replaced simple positional text comparison with line alignment and word-level highlighting, similarity, ignore-case/space options, copy/export and bounded comparison work.
- Restored two-way Markdown ↔ plain text conversion with URL retention, swap, stats, copy and export.
- Added image pointer/stylus annotation, adjustable pen, undo and non-destructive PNG export; image resize now supports both maximum width and maximum height.

**Status: site-wide 100% feature parity has not yet been achieved.**

## v0.13 completed equivalents

- Image crop editing gains rectangular pointer drag, free/1:1/4:3/16:9/3:2 aspect presets, moving selection, 90° rotation, apply crop, undo, reset to original, and PNG export. Image preview is downscaled for memory; not guaranteed pixel-identical to the website.
- Formula board now contains all five website subjects and all 32 original formula records, searchable and selectable with local favorites, copying, Markdown export and local LaTeX preview handoff.
- Units and constants include all eight website groups, three temperature scales, fourteen physical constants, result copying and calculator handoff.
- Still **not** claiming 100% source/UI parity; more advanced calculators, rich Word formatting and voice/AI integrations remain incomplete.
