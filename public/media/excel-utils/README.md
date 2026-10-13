# Excel-utils presentation assets

Reserved filenames (case-sensitive):

- `presentation.png` — main screenshot or presentation image; recommended 1280 × 800 or larger.
- `trailer.mp4` — presentation video; H.264 video with AAC audio recommended.
- `trailer-poster.jpg` — optional video poster; recommended 1280 × 720.

Place your real files in this folder, then rebuild with `npm run build` (restart the development server if needed).
The page checks file availability at build time. The illustration is replaced when the image exists, and the video button appears when the video exists. No broken-image or empty-video placeholders are served.
