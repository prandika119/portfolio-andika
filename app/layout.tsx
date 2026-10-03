import type { Metadata } from "next";
import { DM_Sans, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";

const bodyFont = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const displayFont = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const monoFont = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Andika Dwi Prasetya | Software Engineer",
    template: "%s | Andika Dwi Prasetya",
  },
  description:
    "Website pribadi dan catatan rekayasa teknis Andika Dwi Prasetya. Fokus pada interoperabilitas teknologi kesehatan (HL7 FHIR / SATUSEHAT), sistem AI/RAG, dan rekayasa backend.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body
        className={`${bodyFont.variable} ${displayFont.variable} ${monoFont.variable} min-h-screen flex flex-col bg-[#fafafa] text-zinc-900 antialiased`}
      >
        <Navbar />
        <main className="max-w-4xl mx-auto px-4 sm:px-6 w-full flex-1 pt-6 pb-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
