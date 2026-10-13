export const media = {
  doxTrailer: "/media/doxexplorer/trailer.mp4",
  doxPoster: "/media/doxexplorer/trailer-poster.jpg",
  doxIcon: "/media/doxexplorer/icon.png",
  screenshots: ["introduction", "search", "tabs", "pdf"].map(name => `/media/doxexplorer/${name}.png`),
  excelImage: "/media/excel-utils/presentation.png",
  excelPoster: "/media/excel-utils/trailer-poster.jpg",
  excelTrailer: "/media/excel-utils/trailer.mp4",
} as const;
