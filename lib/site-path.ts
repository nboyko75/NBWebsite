// GitHub Pages project path. Use "" when deploying at the domain root.
export const basePath = "/NBWebsite";

// Public files keep root-relative paths on disk; prefix only browser URLs.
export function assetUrl(file: string): string {
  return `${basePath}${file}`;
}
