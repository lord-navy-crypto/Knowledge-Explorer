# Daily Desk — Experimental Product Roadmap

## Purpose

Develop a separate, experimental productivity line inside AP ReasonLab / Knowledge Explorer. The goal is a practical home for lightweight study planning, vocabulary review, writing, document work, and everyday utilities—not a second copy of the existing tools.

This work stays on the experiment/study-productivity-suite branch until it has been reviewed and tested. Do not merge it into main automatically.

## Product principles

- **Reuse first:** link to existing tools before implementing another version of the same capability.
- **Local-first:** simple planning data stays in the user's browser unless a future feature explicitly explains and obtains permission for sync.
- **Small, useful modules:** each feature should remove a real bit of friction from daily study or office work.
- **Clear boundaries:** distinguish built-in tools from external websites and show when data stays local, requires a file, or uses an API.
- **Responsive and accessible:** keyboard support, readable labels, mobile layouts, and clear empty/error states.
- **Protect the main line:** develop and test this branch independently; merging requires a deliberate review.

## Existing capabilities to reuse

- Planning and focus: Focus Desk, Exam Countdown, Mistake Notebook.
- Memorisation and language: Flashcards, Vocabulary Book, Dictation, Reading Highlights.
- Writing and documents: Write & Convert, Dual-column Editor, Word Count, PDF Desk, Word-to-PDF, Markdown-to-PDF.
- Quick utilities: Calculator/Graph, Units & Constants, QR Code, JSON Formatter, Image Desk.
- External resources: External Connections & Tools.

## Current experimental milestone

- Add /productivity as a dedicated Daily Desk landing page.
- Provide a lightweight task list with completion tracking and browser-local persistence.
- Group existing tools by user goal instead of requiring users to navigate the entire catalogue.
- Add a link from the static Tools & Code launchpad so the experiment is easy to reach.
- Keep the planner useful without an account, server, or API key.

## Suggested next milestones

### Phase 2 — Planning

- Optional due date and priority for tasks.
- Simple daily/weekly view with a clear reset or archive action.
- Reusable study-session templates.
- Export and import the task list as a user-controlled file.

### Phase 3 — Review workflow

- Saved flashcard decks and review scheduling, building on—not replacing—the current Flashcards and Vocabulary Book.
- One-click handoff from a task to a related tool.
- A lightweight session log so users can see what they worked on.

### Phase 4 — Integration and polish

- Better search and filters across tools.
- Optional pinned and recently used tools.
- Keyboard navigation, responsive checks, and storage failure handling.
- Evaluate sync only if there is a clear need and a privacy-conscious design.

## Acceptance checks before considering a merge

- npm run build passes from ap-reasonlab/.
- npm test passes.
- The planner adds, completes, removes, and reloads tasks correctly.
- Empty input and unavailable/corrupt browser storage do not crash the page.
- The page works on narrow and wide screens and has labelled form controls.
- Every linked tool route exists.
- main remains unchanged until an explicit merge decision.
