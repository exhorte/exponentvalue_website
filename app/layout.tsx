import type { Metadata } from "next";
import { Poppins, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import GrainOverlay from "@/components/GrainOverlay";

/*
 * GARET — police de marque (display et corps).
 * Garet n’est pas sur Google Fonts : déposer les fichiers fournis par le
 * propriétaire dans /public/fonts/ :
 *   - public/fonts/Garet-Book.woff2   (graisse 400)
 *   - public/fonts/Garet-Heavy.woff2  (graisse 800)
 * Puis :
 *   1. décommenter le bloc localFont ci-dessous ;
 *   2. ajouter `${garet.variable}` au className de <html> ;
 *   3. dans app/globals.css, remplacer `"Garet"` par `var(--font-garet)`
 *      dans la déclaration --font-sans.
 *
 * import localFont from "next/font/local";
 *
 * const garet = localFont({
 *   src: [
 *     { path: "../public/fonts/Garet-Book.woff2", weight: "400", style: "normal" },
 *     { path: "../public/fonts/Garet-Heavy.woff2", weight: "800", style: "normal" },
 *   ],
 *   variable: "--font-garet",
 *   display: "swap",
 * });
 */

/* Fallback géométrique le plus proche de Garet, actif tant que les .woff2
   ne sont pas fournis. */
const poppins = Poppins({
  weight: ["400", "600", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

/* Police utilitaire : eyebrows, labels techniques, chiffres, numérotations. */
const plexMono = IBM_Plex_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://exponentvalue.com"),
  title: {
    default: "exponentvalue — Re-engineering opérationnel",
    template: "%s — exponentvalue",
  },
  description:
    "exponentvalue conçoit, déploie et exécute les applications métiers critiques qui font tourner votre cœur de métier — 5 à 10 fois plus vite que les solutions standards du marché.",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "exponentvalue",
    url: "https://exponentvalue.com",
    title: "exponentvalue — Re-engineering opérationnel",
    description:
      "Vos applications métiers critiques. Déployées en 90 jours, pas en 24 mois.",
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
      className={`${poppins.variable} ${plexMono.variable} h-full antialiased`}
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
