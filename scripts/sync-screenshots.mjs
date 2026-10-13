import { copyFileSync, existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { screenshotFolders } from "../lib/screenshot-config.ts";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const source = path.join(root, "artifacts", "Screenshots");
const destination = path.join(root, "public", "media", "doxexplorer", "screenshots");
const manifestFile = path.join(root, "lib", "screenshot-manifest.json");
const manifest = {};
for (const folder of new Set(Object.values(screenshotFolders))) {
  const sourceFolder = path.join(source, folder);
  const bundledFolder = path.join(destination, folder);
  // A clean checkout can build from committed copies without the ignored artifacts.
  const input = existsSync(sourceFolder) ? sourceFolder : bundledFolder;
  if (!existsSync(input)) throw Error(`Missing screenshot folder: ${input}`);
  const files = readdirSync(input)
    .filter(name => /^Screenshot[1-9]\d*\.png$/i.test(name))
    .sort((a, b) => Number(a.match(/\d+/)[0]) - Number(b.match(/\d+/)[0]));
  if (!files.length) throw Error(`No screenshots in ${input}`);
  mkdirSync(bundledFolder, { recursive: true });
  manifest[folder] = files.map(name => {
    const sourceFile = path.join(input, name);
    const data = readFileSync(sourceFile);
    if (!data.subarray(0, 8).equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]))) throw Error(`Not a PNG: ${sourceFile}`);
    if (input !== bundledFolder) copyFileSync(sourceFile, path.join(bundledFolder, name));
    return { src: `/media/doxexplorer/screenshots/${folder}/${name}`, number: Number(name.match(/\d+/)[0]), width: data.readUInt32BE(16), height: data.readUInt32BE(20) };
  });
}
writeFileSync(manifestFile, JSON.stringify(manifest, null, 2) + "\n");
console.log(`Prepared ${Object.values(manifest).reduce((total, files) => total + files.length, 0)} screenshots from ${Object.keys(manifest).length} folders.`);
