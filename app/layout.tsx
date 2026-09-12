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
    "ExponentValue conçoit, déploie et supervise des systèmes d'agents IA gouvernés pour les PME et ETI francophones — des actions mesurables, contrôlées et auditables.",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "ExponentValue",
    url: "https://exponentvalue.com",
    title: "ExponentValue — Multiply what matters.",
    description:
      "Compress time. Expand value. Des agents IA gouvernés, branchés sur vos opérations, avec preuve et contrôle à chaque décision.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
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
