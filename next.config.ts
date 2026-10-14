import type { NextConfig } from "next";
const repo = "NBWebsite";
const config: NextConfig = {
    output: "export",
    basePath: `/${repo}`,
    trailingSlash: true,
    images: { unoptimized: true },
    poweredByHeader: false
};
export default config;
