// Local preview for the static export, including byte ranges for video seeking.
import http from "node:http";
import { createReadStream, existsSync, statSync } from "node:fs";
import path from "node:path";
import { basePath } from "../lib/site-path.ts";

const root = path.resolve("out");
if (!existsSync(path.join(root, "index.html"))) throw Error("Run npm run build before npm start.");
const types = { ".html": "text/html; charset=utf-8", ".css": "text/css", ".js": "text/javascript", ".json": "application/json", ".png": "image/png", ".jpg": "image/jpeg", ".svg": "image/svg+xml", ".mp4": "video/mp4", ".ttf": "font/ttf", ".woff2": "font/woff2", ".txt": "text/plain" };
const server = http.createServer((req, res) => {
  try {
    if (!["GET", "HEAD"].includes(req.method)) { res.writeHead(405).end(); return; }
    const url = new URL(req.url, "http://localhost");
    const pathname = decodeURIComponent(url.pathname);
    if (basePath && (pathname === "/" || pathname === basePath)) {
      res.writeHead(302, { Location: `${basePath}/${url.search}` }).end(); return;
    }
    if (basePath && !pathname.startsWith(`${basePath}/`)) { res.writeHead(404).end("Not found"); return; }
    let file = path.resolve(root, `.${pathname.slice(basePath.length)}`);
    if (file !== root && !file.startsWith(root + path.sep)) { res.writeHead(403).end(); return; }
    if (existsSync(file) && statSync(file).isDirectory()) file = path.join(file, "index.html");
    if (!existsSync(file)) { res.writeHead(404).end("Not found"); return; }
    const size = statSync(file).size;
    res.setHeader("Content-Type", types[path.extname(file)] ?? "application/octet-stream");
    res.setHeader("Accept-Ranges", "bytes");
    res.setHeader("X-Content-Type-Options", "nosniff");
    let start = 0, end = size - 1;
    if (req.headers.range) {
      const match = /^bytes=(\d*)-(\d*)$/.exec(req.headers.range);
      if (!match || (!match[1] && !match[2])) { res.writeHead(416, { "Content-Range": `bytes */${size}` }).end(); return; }
      start = match[1] ? Number(match[1]) : Math.max(0, size - Number(match[2]));
      end = match[1] && match[2] ? Math.min(Number(match[2]), size - 1) : size - 1;
      if (start >= size || start > end) { res.writeHead(416, { "Content-Range": `bytes */${size}` }).end(); return; }
      res.statusCode = 206;
      res.setHeader("Content-Range", `bytes ${start}-${end}/${size}`);
    }
    res.setHeader("Content-Length", end - start + 1);
    if (req.method === "HEAD") { res.end(); return; }
    const stream = createReadStream(file, { start, end });
    stream.on("error", () => res.destroy());
    res.on("close", () => stream.destroy());
    stream.pipe(res);
  } catch { res.writeHead(400).end("Bad request"); }
});
server.listen(Number(process.env.PORT || 3000), "127.0.0.1", () => console.log(`Portfolio preview: http://127.0.0.1:${server.address().port}${basePath}/`));
