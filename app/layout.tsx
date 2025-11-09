import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PostuLink ? Logo",
  description:
    "PostuLink: votre agent IA pour analyser les offres et g?n?rer CV et lettre de motivation adapt?s.",
  metadataBase: new URL("https://agentic-1f910734.vercel.app"),
  icons: { icon: "/icon.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
