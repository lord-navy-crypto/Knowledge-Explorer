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
