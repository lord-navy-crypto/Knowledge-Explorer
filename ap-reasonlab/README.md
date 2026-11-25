# Knowledge Explorer — AP ReasonLab Web Platform

This directory contains the main Knowledge Explorer website. It began with AP study resources and has grown into a broader academic-learning and practical-workbench platform. The home experience is organized around **AP & English**, **Convenient Tools & Code**, **Simulation & Download**, and **Sentinel Map / Easy Local AI**.

## Current platform areas

### AP learning

- AP subject entry points, concept pages, key-concept guides and formula resources.
- Practice workflows, question sets, structured question-bank validation and learning-resource uploads.
- AP-focused AI assistance for hints, concept explanations, formulas, derivations and practice generation.

### English learning

- TOEFL iBT and Digital SAT practice lanes organized around their current task/domain formats.
- Vocabulary, grammar and broader English-skill practice.
- An English AI tutor for writing feedback, grammar, translation, vocabulary support and exam strategy.
- In-site practice is original study material, not official ETS or College Board exam content.

### Community and collaboration

- **Forum → Discussions:** public questions, tips and replies.
- **Forum → Shared library:** shared learning materials for upload and download.
- **Forum → My Box:** private notes and pictures stored in the user's browser rather than a public discussion thread.

### Tools, code and workshops

- Math Workbench: calculator, graphing, calculus, units, vectors, LaTeX and formulas.
- Code Workbench: code editing and practice environments, code board, JSON and text utilities, plus a separate AI-for-Code assistant.
- File Workbench: PDF, image, CSV/Markdown and batch file utilities.
- Study/classroom tools, simulation-workshop links, project downloads and external resource directories.

### Local and contextual AI

- AP, English and coding assistants are placed inside their relevant workflows rather than treated as one context-free assistant.
- **Easy Local AI** uses browser WebGPU/WebLLM for local model testing and chat without requiring Ollama or a separate local model server.
- Other AI routes depend on the provider/configuration selected for that workflow; do not assume every AI feature runs locally.

## Run locally

Requirements: Node.js 20+ and npm.

```bash
npm install
npm run dev
```

The development command prepares managed content before starting Next.js.

## Validation and production build

```bash
npm run test
npm run test:e2e
npm run build
```

- `npm run test` runs Vitest.
- `npm run test:e2e` runs the Playwright end-to-end suite.
- `npm run build` checks the pinned WebLLM version, prepares and validates the question bank, then runs the Next.js production build.

See `docs/ai-workflow.md` for AI/content workflow guidance, `docs/how-to-insert-questionnaires.md` for question-set management, and `docs/DEPLOY-zh.md` for deployment notes.

## Related browser extension

The separate Chromium Manifest V3 **Universal Box Web Capture** extension lives at `../apps/web-capture-extension/` and is currently version **0.3.1**. It captures user-selected visible webpage content on demand; it is not part of the Next.js website runtime.

