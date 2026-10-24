import type { Metadata } from "next";
import PrivacyPolicy from "./privacy-policy";

export const metadata: Metadata = {
  title: "Privacy policy — Nick Boiko",
  description: "Privacy policy for applications published by Nick Boiko, including Pdf&DocExplorer and Excel-utils.",
};

export default function PrivacyPage() {
  return <PrivacyPolicy />;
}
