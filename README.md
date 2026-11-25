# Knowledge Explorer

**A collaborative academic-learning platform with practical tools, code workspaces and browser-local AI.**

Knowledge Explorer is a personal academic and peer-learning website built around AP study and English practice, then extended with contextual AI assistants, shared learning resources, coding and mathematics workbenches, practical file tools, workshops and local-AI experiments.

## Main platform — `ap-reasonlab/`

The Next.js website is organized into several connected areas:

- **AP learning:** subject and concept libraries, formulas, guided explanations, practice, question sets, resource uploads and AP-focused AI assistance.
- **English learning:** TOEFL iBT and Digital SAT practice organized around current exam task formats, plus vocabulary, grammar, core skills and an English AI tutor. In-site practice items are original learning materials, not official ETS or College Board questions.
- **Peer learning:** a Forum with public discussions, a shared resource library for materials, and a private **My Box** area for browser-local notes and pictures.
- **Contextual AI:** separate assistants for AP, English and coding, so each helper works in the context of the task. **Easy Local AI** is a separate browser-local WebGPU playground and does not require Ollama or a local model server.
- **Tools & Code:** mathematics and graphing, units and vectors, LaTeX/formulas, coding editors and playgrounds, PDF and image utilities, CSV/Markdown tools, batch file operations and classroom/study utilities.
- **Workshops & resources:** entry points to simulation projects, downloads, external learning resources and Sentinel Map.
- **Site infrastructure:** searchable navigation, user guides, content management and contributor information.

## Separate browser extension — `apps/web-capture-extension/`

The repository also contains **Universal Box Web Capture**, a Chromium Manifest V3 extension (**v0.3.1**):

- On an explicit user click, capture visible page text, article Markdown, links, selected visible HTML tables as CSV, source details or a heading outline.
- Preview, copy or save supported results locally through the browser download manager.
- Table selection, CSV escaping and formula-like value neutralization, size limits, actionable inline errors and real headless Chromium popup/download tests in GitHub Actions.
- Uses narrowly scoped `activeTab`, `scripting` and `clipboardWrite` permissions. It does not continuously monitor tabs, scrape in the background, bypass access controls or transmit captured page content to a server.
- This is a Chromium extension prototype, not a Safari extension or a macOS DMG application.

## Technology and development

The main site uses Next.js, React, TypeScript and a component-based workbench architecture. It includes browser-local WebLLM support, mathematical rendering, local file-processing utilities, Vitest tests and Playwright end-to-end tests.

Run the website locally:

```bash
cd ap-reasonlab
npm install
npm run dev
```

Quality checks:

```bash
npm run test
npm run test:e2e
npm run build
```

The production build runs the WebLLM version check and question-bank validation before `next build`.

## Repository layout

```text
ap-reasonlab/                  Main Knowledge Explorer website
apps/web-capture-extension/   Chromium Web Capture extension
my-first-project/             Small legacy/static starter page
```

**Product boundary:** the native Sentinel Box macOS application is maintained in the separate [`sentinel-macos`](https://github.com/lord-navy-crypto/sentinel-macos) repository. This repository contains the Knowledge Explorer website and its browser-extension subproject.

