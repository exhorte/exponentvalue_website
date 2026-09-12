import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import GrainOverlay from "@/components/GrainOverlay";

export const metadata: Metadata = {
  metadataBase: new URL("https://exponentvalue.com"),
  title: {
    default: "ExponentValue — Multiply what matters.",
    template: "%s — ExponentValue",
  },
  description:
    "ExponentValue designs, deploys, and supervises governed AI agent systems for French-speaking SMBs and mid-market companies — measurable, controlled, auditable actions.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "ExponentValue",
    url: "https://exponentvalue.com",
    title: "ExponentValue — Multiply what matters.",
    description:
      "Compress time. Expand value. Governed AI agents, wired into your operations, with evidence and control behind every decision.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Nav />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
        <GrainOverlay />
      </body>
    </html>
  );
}
