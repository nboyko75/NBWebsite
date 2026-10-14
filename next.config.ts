import type { NextConfig } from "next";
import { basePath } from "./lib/site-path.ts";
const config: NextConfig = {
    output: "export",
    basePath,
    trailingSlash: true,
    images: { unoptimized: true },
    poweredByHeader: false
};
export default config;
