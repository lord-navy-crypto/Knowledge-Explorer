# Universal Box Web Capture — browser extension prototype

Browser extension MVP, not part of the packaged Tauri v0.29 app. Supports compatible Chromium MV3 browsers; Safari conversion/package/signing requires separate verification.

## Install for manual test

1. Open your Chromium browser's extensions page and enable developer mode.
2. Load unpacked from `apps/web-capture-extension`.
3. Open a webpage you are authorized to access, click the extension icon, then choose visible text, article Markdown, links CSV or a chosen visible HTML table as CSV, a source/title block, or a page-heading outline.
4. Verify clipboard paste and result preview in both Chinese and English on at least five page types.

## Privacy / limitations

- `activeTab` and `scripting`: read only the current page after a user click; `clipboardWrite` copies selected results.
- Does not run in the background, monitor tabs, store content, bypass logins/paywalls, or make any network requests.
- Browser internal pages, PDF viewers, extension stores, cross-origin frames and some protected sites may be inaccessible.
- Visible text follows webpage `innerText`; virtualized/closed, lazy-loaded, shadow DOM, embedded images and canvas text may be incomplete. Markdown is a simple structure-preserving approximation, not a full fidelity HTML-to-Markdown engine.
- CSV fields are escaped, spreadsheet-formula-like values are neutralized, links deduplicated and non-HTTP(S) links ignored. Table export deliberately rejects merged cells and supports the first 24 visible HTML tables using an explicit selector; complex table spans and non-HTML visual tables are outside this MVP. Test spreadsheet-import behavior before broad release.
- Content is capped at 400,000 characters and first 2,000 links to bound memory and clipboard impact.
- This prototype needs browser end-to-end manual testing before release; do not claim Safari compatibility.

## Suggested next step
Add automated DOM fixtures and Chromium extension integration tests, then a user-initiated explicit clipboard handoff into Universal Box's Quick Actions launcher. Keep every native filesystem and clipboard permission tightly scoped.

User-click local actions: tidy captured non-CSV text, save TXT/MD/CSV to browser Downloads, or invoke the current webpage print dialog to manually Save as PDF. No background monitoring, network calls or system-level permissions are added.

## Web Capture v0.2: direct in-extension handoffs

Users can select **一键提取并保存 Markdown** or **一键提取并保存表格 CSV** directly in the popup. A single user click reads only the active tab (via the existing activeTab/scripting permission), shows a preview and triggers a local download; no extra clipboard copy or separate save click is required. Other modes still support copy and review. The extension does not add host permissions, send captured content over the network, or run background page scans. Unsupported/blocked pages show an error without saving.

## v0.3 · multi-table choice, provenance preview and safer one-click save

- Click **查找所有表格** to list up to 24 visible HTML tables with captions, approximate row counts and column counts. Choose the intended table, then click Copy CSV or Direct Save CSV. For a page containing a single table, Direct Save CSV still works with one click; for multiple tables the first click opens the chooser rather than silently taking the wrong table. Scans run only when clicked, against the currently authorized active tab, using the existing `activeTab` + `scripting` permissions. No broad host permissions were added.
- CSV is escaped and spreadsheet formula-like cells are neutralized. **Oversize CSV is rejected instead of truncated** halfway through rows/cells; tables with merged cells or over 5,000 rows and cells over 20,000 characters produce explicit errors. The existing 400,000 character text cap still applies to plain text and Markdown, with an upper-limit warning where applicable.
- The redesigned popup groups text, tables and source actions and displays the source hostname, format and character count for each captured preview. **Copy preview** or **Save current preview** remains available. Download names include hostname, format and timestamp. Direct saves trigger the browser download manager; they are not claimed to have completed until verified by the browser.
- The Markdown walker now tracks its character budget incrementally rather than joining the entire buffer on every visited DOM node.
- Run `node --test apps/web-capture-extension/test/*.test.cjs` for DOM fixture tests and extension permission contract checks. Browser UI tests remain necessary on complex pages and Chromium builds. This extension is not a Safari build and does not access cross-origin frames or bypass page access restrictions.

## Packaged Chromium testing build

The GitHub Actions `Web Capture Extension CI` workflow packages a tested `universal-box-web-capture-v0.3.0.zip` after the syntax and DOM-fixture tests pass. Unzip the archive into a local folder. In a Chromium-family browser, open Extensions → Developer mode → Load unpacked, then select the unzipped folder containing `manifest.json`. This is a browser extension, **not a macOS DMG** and not a native Safari extension. No extension store publication or browser-side user interaction verification is claimed.


## v0.3.1 · Real Chromium browser testing and inline warnings

- A dedicated GitHub Actions workflow now launches an **installed Manifest V3 browser extension in headless Chromium** using Playwright, opens local HTML fixtures, clicks actual popup buttons, saves real downloaded files and validates their CSV bytes. Browser screenshots and sample downloads are attached to each run.
- Browser tests cover direct single-table saving, selecting a second table, no-table errors, CSV merged-cell and size safety, and Markdown preview/provenance. DOM-fixture tests remain for more granular input cases.
- Real testing exposed a defect: exceptions thrown by `chrome.scripting.executeScript` in the page were reduced to unhelpful generic messages. Errors are now returned as structured data so users see the actual cause.
- Table errors also appear **next to the table controls** in an accessible inline alert rather than only at the bottom preview, based on inspected real Chromium screenshots.
- The E2E runner copies the release popup and uses a **test-only** localhost host grant and inert service worker to discover the extension ID and avoid the lack of toolbar-gesture permissions in automated full-tab popup sessions. The **shipped extension** still only requests `activeTab`, `scripting`, `clipboardWrite`; it adds no background monitoring, global host access or network transmission.
- Validated scope is Chromium headless on GitHub's Linux runner. It is **not** proof of native Safari or every GUI environment. The production release remains a Load unpacked Chromium extension, not a DMG.
