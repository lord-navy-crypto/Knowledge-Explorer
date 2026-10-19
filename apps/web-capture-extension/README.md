# Universal Box Web Capture — browser extension prototype

Browser extension MVP, not part of the packaged Tauri v0.29 app. Supports compatible Chromium MV3 browsers; Safari conversion/package/signing requires separate verification.

## Install for manual test

1. Open your Chromium browser's extensions page and enable developer mode.
2. Load unpacked from `apps/web-capture-extension`.
3. Open a webpage you are authorized to access, click the extension icon, then choose visible text, article Markdown, links CSV or the first visible HTML table as CSV.
4. Verify clipboard paste and result preview in both Chinese and English on at least five page types.

## Privacy / limitations

- `activeTab` and `scripting`: read only the current page after a user click; `clipboardWrite` copies selected results.
- Does not run in the background, monitor tabs, store content, bypass logins/paywalls, or make any network requests.
- Browser internal pages, PDF viewers, extension stores, cross-origin frames and some protected sites may be inaccessible.
- Visible text follows webpage `innerText`; virtualized/closed, lazy-loaded, shadow DOM, embedded images and canvas text may be incomplete. Markdown is a simple structure-preserving approximation, not a full fidelity HTML-to-Markdown engine.
- CSV fields are escaped, spreadsheet-formula-like values are neutralized, links deduplicated and non-HTTP(S) links ignored. Table export deliberately rejects merged cells and only supports the first visible HTML table; complex table spans and non-HTML visual tables are outside this MVP. Test spreadsheet-import behavior before broad release.
- Content is capped at 400,000 characters and first 2,000 links to bound memory and clipboard impact.
- This prototype needs browser end-to-end manual testing before release; do not claim Safari compatibility.

## Suggested next step
Add automated DOM fixtures and Chromium extension integration tests, then a user-initiated explicit clipboard handoff into Universal Box's Quick Actions launcher. Keep every native filesystem and clipboard permission tightly scoped.
