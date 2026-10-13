# Nick Boiko — developer portfolio

A responsive single-page portfolio built with React 19, Next.js 16 App Router, and TypeScript. It exports a static site; no backend or external services are needed at runtime.

## Run

Requires Node.js 22.18 or newer (Node.js 24 recommended).

```sh
npm ci
npm run dev
```

Open http://127.0.0.1:3000. On Windows PowerShell with script restrictions, use `npm.cmd` in place of `npm`.

```sh
npm run test
npm run check
npm run build
```

Deploy the generated `out/` directory to any static web host. Run `npm start` for a local production preview, with support for video seeking.

For browser checks, run `npm start` in one terminal and `npm run test:e2e` in another. The checks use installed Microsoft Edge on Windows; elsewhere install Playwright Chromium with `npx playwright install chromium`. You can also set `BROWSER_PATH` to an installed browser executable. Screenshots are saved in `artifacts/`.

## Languages

Complete page translations: English, Ukrainian, German, French, Spanish, Italian, Brazilian Portuguese, Japanese, Korean, Simplified Chinese, and Russian.

Language priority: `?lang=uk` URL parameter → saved selection → browser language → English. Selection updates the page, screenshots, HTML language, title, description, URL, and local storage without navigation. Product names and original media contents stay unchanged. Website translations are authored for this portfolio and should receive native-speaker review before publication.

The eleven locales were verified against `D:/Projects/DocExplorer/docs/README.md` and application localization files. Microsoft Store currently reports only English in its listing metadata, so the application language list is used as requested.

## Content and media

- Official title and developer: **Pdf&DocExplorer**, **Nick Boiko**.
- Description, features, logo, and public support email: https://apps.microsoft.com/detail/9ns0crbdgtv6
- Microsoft Store asset URLs and content provenance: `content/sources.json`.
- Excel content: https://github.com/nboyko75/Excel-utils — Excel macro workbooks for printing mirrored page margins, in English and Ukrainian.
- Original trailer copied from `D:/Projects/Doc/DocExplorer/Video/Trailer4_2.mp4` to `public/media/doxexplorer/trailer.mp4` (about 101 MB / 7 min 28 sec). It loads only when its dialog opens. The poster is extracted from the supplied video.
- DM Sans font files are locally hosted; license is in `public/fonts/OFL.txt`.

### Localized DoxExplorer screenshots

The gallery uses all `Screenshot<number>.png` files in each corresponding folder
under `artifacts/Screenshots`, sorted numerically. Both the page and enlarged
viewer follow the selected language, with translated captions and dynamic counts.

| Website locale | Source subfolder |
| --- | --- |
| `en` | `us` |
| `uk` | `Ua` |
| `de` | `de` |
| `fr` | `fr` |
| `es` | `es` |
| `it` | `it` |
| `pt-BR` | `pt` |
| `ja` | `jp` |
| `ko` | `us` (English, as requested) |
| `zh-CN` | `cn` |
| `ru` | `Ru` |

`npm run media:sync` copies the supplied images, without modifying their contents,
to `public/media/doxexplorer/screenshots/` and writes `lib/screenshot-manifest.json`.
It runs automatically before `npm run dev` and `npm run build`. Keep the public
copies and manifest in version control: a clean checkout can build from these
copies even without the ignored `artifacts` folder. Restart development or rebuild
after changing the source images. Unmapped folders such as `Old` and `sp` are unused.
The trailer remains in English; screenshot text is exactly as supplied.

The four `artifacts/icon-{16,32,64,512}.png` previews use an azure (`#006fbb`)
background and retain transparent corners. The editable `public/icon.svg` is
maintained separately.

### Add Excel-utils presentation media

Reserved paths:

```text
public/media/excel-utils/presentation.png
public/media/excel-utils/trailer.mp4
public/media/excel-utils/trailer-poster.jpg
```

Add your files and rebuild. The screenshot replaces the illustrated placeholder automatically. The trailer button appears only when a real video file exists. The poster is optional. All paths are defined in `lib/media.ts`.

## Editing

- `app/portfolio.tsx`: sections, gallery, modal video players, and navigation.
- `app/globals.css`: responsive design and reduced-motion support.
- `lib/i18n.ts`: translations and language negotiation. All dictionaries must have the same fields; tests check full coverage.
- `app/page.tsx`: build-time optional media detection.

Keyboard support includes visible focus indicators, a skip link, native language selection, Escape to close media, arrow keys in the image viewer, native dialog focus containment, and return focus to the opener.
