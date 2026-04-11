import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Dynafy — Alle Financiën in één app",
  description: "Dynafy combineert persoonlijk financieel beheer met volledige administratie. Facturen, BTW, transacties en inzichten, alles op één plek. Gratis beginnen.",
  keywords: "ZZP financiën, boekhouden ZZP, persoonlijk financieel beheer, facturen, BTW aangifte, budgetteren",
  openGraph: {
    title: "Dynafy — Financiën & ZZP beheer in één app",
    description: "De Nederlandse financiële app voor ZZP'ers en particulieren. Gratis beginnen.",
    url: "https://dynafy.nl",
    siteName: "Dynafy",
    locale: "nl_NL",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
