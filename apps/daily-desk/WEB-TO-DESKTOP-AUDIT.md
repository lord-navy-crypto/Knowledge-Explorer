# Knowledge Explorer → Daily Desk: source-by-source feature audit

Audit date: 2026-10-19. Compared with the website's `ap-reasonlab/data/study-tools.ts` catalogue and `ap-reasonlab/data/tool-workbenches.ts`. This is an **implementation coverage audit, not a claim of pixel-identical UI parity or on-device QA**.

Website catalogue includes **44 entries**, including hidden aliases/deep-links and externally hosted functionality. Classified as **19 core desktop equivalents**, **22 partial / non-identical equivalents**, **3 not ported / intentionally external**. A core equivalent means the main local job works, *not* that every website knob or workflow is identical.

| Website tool ID | Current status | Evidence / remaining difference |
| --- | --- | --- |
| `ai` | Not ported / intentionally external | /C/l/o/u/d///l/o/c/a/l/ /L/L/M/ /c/o/n/f/i/g/u/r/e/d/ /A/P/I/ /w/o/r/k/b/e/n/c/h/ /n/o/t/ /c/o/p/i/e/d/ /i/n/t/o/ /s/t/a/n/d/a/l/o/n/e/ /o/f/f/l/i/n/e/ /a/p/p/./ |
| `calculator` | Partial / non-identical | /S/c/i/e/n/t/i/f/i/c/ /o/p/e/r/a/t/i/o/n/s/ /e/x/i/s/t/;/ /c/o/m/p/l/e/t/e/ /C/l/a/s/s/W/i/z/ /m/o/d/e/ /p/a/r/i/t/y/ /n/o/t/ /v/e/r/i/f/i/e/d/./ |
| `grapher` | Partial / non-identical | /C/a/r/t/e/s/i/a/n///p/o/l/a/r///p/a/r/a/m/e/t/r/i/c/ /p/l/o/t/t/i/n/g/ /e/x/i/s/t/s/;/ /w/e/b/ /g/r/a/p/h/ /i/n/t/e/r/a/c/t/i/o/n///f/e/a/t/u/r/e/s/ /s/t/i/l/l/ /d/i/f/f/e/r/./ |
| `math-pad` | Partial / non-identical | /M/a/t/h/ /m/o/d/e/s/ /b/r/o/a/d/l/y/ /p/r/e/s/e/n/t/;/ /f/u/l/l/ /w/e/b/s/i/t/e/ /f/u/n/c/t/i/o/n/a/l/i/t/y/ /n/o/t/ /v/e/r/i/f/i/e/d/./ |
| `focus-desk` | Partial / non-identical | /T/i/m/e/r/ /a/n/d/ /g/e/n/e/r/a/t/e/d/ /n/o/i/s/e/ /i/m/p/l/e/m/e/n/t/e/d/;/ /o/r/i/g/i/n/a/l/ /a/u/d/i/o/ /r/e/c/o/r/d/i/n/g/s///r/a/i/n/ /f/e/a/t/u/r/e/s/ /d/i/f/f/e/r/./ |
| `timer` | Core desktop equivalent | /I/n/t/e/g/r/a/t/e/d/ /w/i/t/h/ /F/o/c/u/s/ /T/i/m/e/r/;/ /h/i/d/d/e/n/ /w/e/b/s/i/t/e/ /a/l/i/a/s/./ |
| `flashcards` | Core desktop equivalent | /I/n/s/t/a/n/t/ /p/a/s/t/e/d/ /f/l/a/s/h/c/a/r/d/s/ /o/n/ /t/h/e/ /l/e/a/r/n/i/n/g/ /d/e/s/k/./ |
| `mistake-notebook` | Core desktop equivalent | /L/o/c/a/l/ /e/r/r/o/r/ /l/o/g/ /a/n/d/ /r/e/v/i/e/w/./ |
| `exam-countdown` | Core desktop equivalent | /L/o/c/a/l/ /s/c/h/e/d/u/l/e/d/ /e/x/a/m/ /c/o/u/n/t/d/o/w/n/./ |
| `code-board` | Partial / non-identical | /S/n/i/p/p/e/t/ /l/i/b/r/a/r/y/ /p/r/e/s/e/n/t/;/ /f/u/l/l/ /w/e/b/s/i/t/e/ /c/o/m/m/e/n/t/i/n/g///c/o/d/e/ /h/u/b/ /U/X/ /d/i/f/f/e/r/s/./ |
| `word-count` | Core desktop equivalent | /W/o/r/d/s///c/h/a/r/a/c/t/e/r/s///s/e/n/t/e/n/c/e/s///r/e/a/d/i/n/g/ /e/s/t/i/m/a/t/e/./ |
| `vocab-book` | Partial / non-identical | /S/a/v/e/d/ /f/l/a/s/h/c/a/r/d/s/ /e/x/i/s/t/;/ /w/e/b/s/i/t/e/ /v/o/c/a/b/ /w/o/r/k/f/l/o/w/ /d/i/f/f/e/r/s/./ |
| `speech-to-text` | Not ported / intentionally external | /M/i/c/ /r/e/c/o/r/d/i/n/g///W/h/i/s/p/e/r/ /t/r/a/n/s/c/r/i/p/t/i/o/n/ /i/s/ /n/o/t/ /p/o/r/t/e/d/./ |
| `dictation` | Partial / non-identical | /M/a/c/ /s/p/e/e/c/h/ /s/y/n/t/h/e/s/i/s/ /v/a/r/i/e/s/ /b/y/ /W/e/b/V/i/e/w/ /a/n/d/ /v/o/i/c/e/ /a/v/a/i/l/a/b/i/l/i/t/y/./ |
| `paraphrase` | Partial / non-identical | /O/v/e/r/l/a/p/ /c/o/m/p/a/r/i/s/o/n/,/ /n/o/t/ /f/u/l/l/ /w/e/b/s/i/t/e/ /i/n/t/e/r/a/c/t/i/v/e/ /m/e/t/r/i/c/s/./ |
| `reading-highlight` | Partial / non-identical | /C/o/l/o/r/ /h/i/g/h/l/i/g/h/t/s/ /a/n/d/ /n/o/t/e/s/ /e/x/i/s/t/;/ /r/i/c/h/ /w/e/b/s/i/t/e/ /b/e/h/a/v/i/o/r/ /d/i/f/f/e/r/s/./ |
| `formula-board` | Partial / non-identical | /S/u/b/s/e/t/ /o/f/ /A/P///S/T/E/M/ /f/o/r/m/u/l/a/s/ /i/m/p/l/e/m/e/n/t/e/d/./ |
| `latex` | Core desktop equivalent | /K/a/T/e/X/ /p/r/e/v/i/e/w/ /i/n/ /m/a/t/h/ /a/n/d/ /w/r/i/t/i/n/g/ /d/e/s/k/s/./ |
| `units` | Partial / non-identical | /C/o/m/m/o/n/ /c/o/n/v/e/r/t/e/r/s///c/o/n/s/t/a/n/t/s/,/ /n/o/t/ /e/x/h/a/u/s/t/i/v/e/ /w/e/b/s/i/t/e/ /s/e/t/s/./ |
| `sci-notation` | Partial / non-identical | /N/o/t/a/t/i/o/n/ /a/n/d/ /s/i/g/ /f/i/g/s/,/ /s/o/m/e/ /c/l/a/s/s/r/o/o/m/ /r/o/u/n/d/i/n/g/ /c/a/s/e/s/ /d/i/f/f/e/r/./ |
| `vector-resolve` | Partial / non-identical | /2/D/ /v/e/c/t/o/r/s/;/ /d/i/a/g/r/a/m/ /a/n/d/ /a/l/l/ /a/d/v/a/n/c/e/d/ /i/n/t/e/r/a/c/t/i/o/n/ /n/o/t/ /i/d/e/n/t/i/c/a/l/./ |
| `write-convert` | Partial / non-identical | /W/o/r/k/b/e/n/c/h/e/s/ /e/x/i/s/t/;/ /w/i/z/a/r/d/ /s/t/e/p/-/t/o/-/s/t/e/p/ /h/a/n/d/o/f/f/ /p/a/r/i/t/y/ /m/i/s/s/i/n/g/./ |
| `dual` | Core desktop equivalent | /S/p/l/i/t/ /M/a/r/k/d/o/w/n/ /w/r/i/t/e/r/ /a/n/d/ /l/i/v/e/ /p/r/e/v/i/e/w/./ |
| `typewriter` | Core desktop equivalent | /L/i/n/e/ /r/e/v/e/a/l/ /p/r/a/c/t/i/c/e/./ |
| `draft` | Partial / non-identical | /D/r/a/w/i/n/g/ /b/o/a/r/d/ /i/m/p/l/e/m/e/n/t/e/d/,/ /n/o/t/ /a/l/l/ /w/e/b/s/i/t/e/ /d/r/a/w/i/n/g/ /c/o/n/t/r/o/l/s/./ |
| `word-pdf` | Partial / non-identical | /D/O/C/X/→/M/a/r/k/d/o/w/n/→/p/r/i/n/t/ /p/a/t/h/ /i/s/ /n/o/t/ /p/i/x/e/l/-/f/a/i/t/h/f/u/l/ /a/n/d/ /n/e/e/d/s/ /m/a/c/O/S/ /p/r/i/n/t/ /v/e/r/i/f/i/c/a/t/i/o/n/./ |
| `word-import` | Partial / non-identical | /D/O/C/X/→/M/a/r/k/d/o/w/n/ /w/o/r/k/s/ /b/u/t/ /c/o/m/p/l/e/x/ /t/a/b/l/e/s///m/e/d/i/a///f/o/r/m/a/t/ /m/a/y/ /b/e/ /l/o/s/t/./ |
| `markdown-pdf` | Partial / non-identical | /L/i/v/e/ /p/r/i/n/t/ /p/r/e/v/i/e/w/,/ /b/u/t/ /n/a/t/i/v/e/ /p/r/i/n/t///P/D/F/ /l/a/y/o/u/t/ /m/u/s/t/ /b/e/ /m/a/n/u/a/l/l/y/ /v/a/l/i/d/a/t/e/d/./ |
| `pdf-tools` | Core desktop equivalent | /M/e/r/g/e/,/ /s/p/l/i/t/,/ /r/o/t/a/t/e/ /a/n/d/ /s/e/l/e/c/t///r/e/o/r/d/e/r/ /p/a/g/e/s/,/ /l/o/c/a/l/ /p/r/e/v/i/e/w/;/ /P/D/F/ /t/e/x/t/ /e/x/t/r/a/c/t/i/o/n/ /a/d/d/e/d/ /v/0/./1/1/./ |
| `pdf-compress` | Partial / non-identical | /L/i/g/h/t/ /P/D/F/ /o/b/j/e/c/t/ /o/p/t/i/m/i/z/a/t/i/o/n/ /o/n/l/y/;/ /n/o/t/ /i/m/a/g/e/ /r/e/c/o/m/p/r/e/s/s/i/o/n/./ |
| `csv-markdown` | Core desktop equivalent | /L/o/c/a/l/ /C/S/V///T/S/V/ /p/a/r/s/i/n/g/ /a/n/d/ /M/a/r/k/d/o/w/n/ /t/a/b/l/e/./ |
| `markdown-plain` | Core desktop equivalent | /T/w/o/ /d/i/r/e/c/t/i/o/n/s/,/ /l/i/n/k/ /r/e/t/e/n/t/i/o/n/,/ /s/w/a/p/,/ /c/o/p/y/ /a/n/d/ /l/o/c/a/l/ /e/x/p/o/r/t/ /(/v/0/./1/2/)/./ |
| `batch-rename` | Core desktop equivalent | /R/e/n/a/m/e/ /p/r/e/v/i/e/w/,/ /p/e/r/-/f/i/l/e/ /c/o/p/y/ /a/n/d/ /Z/I/P/ /b/a/t/c/h/ /e/x/p/o/r/t/./ |
| `image-compress` | Partial / non-identical | /R/e/s/i/z/e///c/o/n/v/e/r/t///b/a/t/c/h///c/r/o/p///c/a/p/t/i/o/n/ /a/n/d/ /p/e/n/ /a/n/n/o/t/a/t/i/o/n/ /v/0/./1/2/;/ /d/r/a/g/ /c/r/o/p///r/o/t/a/t/i/o/n/ /r/e/m/a/i/n/ /d/i/f/f/e/r/e/n/t/./ |
| `image-crop` | Partial / non-identical | /P/e/r/c/e/n/t/ /c/r/o/p/ /a/n/d/ /a/n/n/o/t/a/t/i/o/n/s/ /e/x/i/s/t/;/ /n/o/t/ /s/a/m/e/ /d/r/a/g/ /b/o/x///a/s/p/e/c/t/ /c/o/n/t/r/o/l/s/./ |
| `text-comparator` | Core desktop equivalent | /A/l/i/g/n/e/d/ /l/i/n/e/ /d/i/f/f/,/ /w/o/r/d/ /h/i/g/h/l/i/g/h/t/i/n/g/,/ /c/o/m/p/a/r/i/s/o/n/ /o/p/t/i/o/n/s/ /a/n/d/ /l/o/c/a/l/ /d/i/f/f/ /e/x/p/o/r/t/ /(/v/0/./1/2/)/./ |
| `text-diff` | Core desktop equivalent | /W/e/b/s/i/t/e/ /a/l/i/a/s/ /o/f/ /t/e/x/t/-/c/o/m/p/a/r/a/t/o/r/./ |
| `random-groups` | Core desktop equivalent | /S/h/u/f/f/l/e/ /i/n/t/o/ /g/r/o/u/p/s/ /a/n/d/ /c/h/o/o/s/e/ /o/n/e/./ |
| `short-code` | Partial / non-identical | /L/o/c/a/l/ /l/i/n/k/ /p/r/e/s/e/t/s/ /w/o/r/k/;/ /i/f/r/a/m/e/ /e/m/b/e/d///s/h/a/r/e/d/ /h/o/s/t/i/n/g/ /n/o/t/ /p/a/r/t/ /o/f/ /d/e/s/k/t/o/p/./ |
| `color-contrast` | Core desktop equivalent | /W/C/A/G/ /c/o/n/t/r/a/s/t/ /c/a/l/c/u/l/a/t/i/o/n/./ |
| `qr-code` | Core desktop equivalent | /L/o/c/a/l/ /Q/R/ /g/e/n/e/r/a/t/i/o/n/ /a/n/d/ /P/N/G/ /s/a/v/e/./ |
| `json-formatter` | Core desktop equivalent | /V/a/l/i/d/a/t/e/,/ /p/r/e/t/t/i/f/y/ /a/n/d/ /m/i/n/i/f/y/ /J/S/O/N/./ |
| `encode-decode` | Core desktop equivalent | /U/T/F/-/8/ /B/a/s/e/6/4/ /a/n/d/ /U/R/L/ /c/o/m/p/o/n/e/n/t/ /e/n/c/o/d/e///d/e/c/o/d/e/./ |
| `external-hub` | Not ported / intentionally external | /E/x/t/e/r/n/a/l/ /l/i/n/k/s/ /a/r/e/ /n/o/t/ /n/a/t/i/v/e/ /o/f/f/l/i/n/e/ /t/o/o/l/s/ /a/n/d/ /a/r/e/ /k/e/p/t/ /s/e/p/a/r/a/t/e/./ |

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
