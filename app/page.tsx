import { existsSync } from "node:fs";
import path from "node:path";
import Portfolio from "./portfolio";
import { media } from "../lib/media";
export default function Page() {
  const available = (file: string) => existsSync(path.join(process.cwd(), "public", file));
  return <Portfolio excelMedia={{ image: available(media.excelImage), trailer: available(media.excelTrailer), poster: available(media.excelPoster) }} />;
}
