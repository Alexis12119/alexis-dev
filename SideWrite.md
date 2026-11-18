# SideWrite

<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/61d32f12-3d52-4142-ba0b-2b2c6edef986" />


A Firefox add-on for highlighting text on any webpage and keeping notes right beside it, stored locally on my own machine — no account, no server.

I made it because I wanted to take notes easily on my laptop while reading: select a sentence, pick a color, write the thought in the sidebar, and move on. It has also become the way I enjoy my personal Bible study — highlighting verses, jotting down what they mean to me, and collecting the better statements I want to remember and return to later.

## What it does

- Select text on a page and choose a color — the highlight is saved instantly.
- The sidebar opens with the note field focused, so writing starts right away.
- Click a highlight for a small menu: **Color** swatches to recolor it in place (no sidebar needed), **Edit note**, and **Delete highlight**.
- Edit notes in the sidebar, where the quoted text sits on the highlight's own color and turns black so it always stays readable.
- Organize with **This page** / **All notes** / **Notebooks**, plus search.
- Highlights are restored when you revisit a page using the text and its surrounding context.
- Everything is saved on the device; **Export backup** / **Import** live in the fixed footer.

## Install / update

1. If you're coming from the older PagePens build, export a backup from it first — the extension id changed to `sidewrite@example.local`, so old highlights don't carry over.
2. Extract this ZIP to a permanent folder.
3. Open `about:debugging#/runtime/this-firefox`.
4. If an old SideWrite temporary add-on is loaded, click **Remove**. This removes the temporary extension registration; it may also remove that version's local storage, so export first.
5. Click **Load Temporary Add-on…** and choose this folder's `manifest.json`.
6. Open the sidebar from Firefox's Sidebar button/menu and choose **SideWrite**.

## Install in Chrome

Chrome rejects Firefox's background manifest key, so Chrome gets its own build:

1. Run `node build.js` in this folder (no dependencies; regenerates `dist/chrome`).
2. Open `chrome://extensions`.
3. Enable **Developer mode** (toggle in the top right).
4. Click **Load unpacked** and select the **`dist/chrome`** folder (not the repo root — Chrome can't load `manifest.json` directly).
5. If an old **PagePens** extension is listed, remove it — its content script interferes and its alerts still say "PagePens".
6. Click the SideWrite toolbar button — the side panel opens on the right. If you don't see its icon, open Chrome's puzzle-piece menu and pin SideWrite.

Re-run `node build.js` after changing any file, then press ↻ on the extension card in `chrome://extensions`.

The unpacked extension stays loaded across Chrome restarts until you remove it. Highlighting, notes, notebooks, search, and export/import work the same as in Firefox. One Chrome quirk: Chrome only lets the toolbar button open the side panel, so choosing **Edit note** or **＋ Note** while the panel is closed shows a hint to open it — the editor opens automatically once you do.

## Open the sidebar again

- The sidebar opens automatically when the extension is installed or loaded.
- Click Firefox's Sidebar button in the toolbar and choose **SideWrite**.
- If it is not visible: Firefox menu → More tools → Customize toolbar… → drag the Sidebar control onto the toolbar.
- You can also use View → Sidebar → SideWrite (menu wording varies by Firefox version).
- The SideWrite extension toolbar button toggles the sidebar.

## Use it

1. Select text on a normal webpage.
2. Choose a highlight color (or **＋ Note**). The highlight is saved and the sidebar editor opens with the note field focused — write the note and choose **Save changes**. If the sidebar is closed, a hint appears in the page; open the sidebar within about 2 minutes and the editor opens there.
3. Click a saved highlight to open its menu: use the **Color** swatches to recolor it immediately, or choose **Edit note** (opens that note in the sidebar editor) / **Delete highlight**.
4. Confirm deletion when asked.
5. Use the sidebar to browse this page, all notes, or notebooks.

## Storage and limitations

- Data is stored on this device using `browser.storage.local`; there is no account or server.
- Text restoration uses the selected text plus nearby context. Dynamic pages that rewrite their content, duplicated text, or pages that substantially change may still need manual attention.
- Browser-internal pages, PDFs, and some protected pages do not allow content-script highlighting.
- Temporary add-ons are removed by Firefox when it restarts; load the add-on again from `about:debugging`, or submit/sign it through Mozilla Add-ons for regular use.
