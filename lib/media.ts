import type { Locale } from "./i18n.ts";
import { screenshotFolders, screenshotLabels } from "./screenshot-config.ts";
import screenshotManifest from "./screenshot-manifest.json" with { type: "json" };

export function getScreenshots(locale: Locale) {
  const folder = screenshotFolders[locale] as keyof typeof screenshotManifest;
  return screenshotManifest[folder].map(image => ({
    ...image,
    caption: screenshotLabels[locale][image.number - 1] ?? `${screenshotLabels[locale][0]} ${image.number}`,
  }));
}

export const media = {
  doxTrailer: "/media/doxexplorer/trailer.mp4",
  doxPoster: "/media/doxexplorer/trailer-poster.jpg",
  doxIcon: "/media/doxexplorer/icon.png",
  excelImage: "/media/excel-utils/presentation.png",
  excelPoster: "/media/excel-utils/trailer-poster.jpg",
  excelTrailer: "/media/excel-utils/trailer.mp4",
} as const;
