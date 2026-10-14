import type { Metadata } from "next";
import { assetUrl } from "../lib/site-path";
import "./globals.css";
export const metadata: Metadata = {
  title: "Nick Boiko — Thoughtful tools for everyday work",
  description: "Explore Pdf&DocExplorer and Excel-utils. Practical Windows software and Excel tools by independent developer Nick Boiko.",
  icons: { icon: assetUrl("/icon.svg") },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
