import type { Metadata } from "next";
import { DM_Sans, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://andikadwi.com";

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
  metadataBase: new URL(baseUrl),
  title: {
    default: "Andika Dwi Prasetya | Software Engineer",
    template: "%s | Andika Dwi Prasetya",
  },
  description:
    "Website pribadi dan catatan rekayasa teknis Andika Dwi Prasetya. Mahasiswa TRPL UGM, fokus pada interoperabilitas teknologi kesehatan (HL7 FHIR / SATUSEHAT), sistem AI/RAG, dan rekayasa backend.",
  alternates: {
    canonical: "./",
  },
  openGraph: {
    title: "Andika Dwi Prasetya | Software Engineer",
    description:
      "Website pribadi dan catatan rekayasa teknis Andika Dwi Prasetya. Mahasiswa TRPL UGM, fokus pada interoperabilitas teknologi kesehatan (HL7 FHIR / SATUSEHAT), sistem AI/RAG, dan rekayasa backend.",
    url: baseUrl,
    siteName: "Andika Dwi Prasetya",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/images/andika-profile.jpg",
        width: 800,
        height: 1000,
        alt: "Andika Dwi Prasetya",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Andika Dwi Prasetya | Software Engineer",
    description:
      "Website pribadi dan catatan rekayasa teknis Andika Dwi Prasetya. Mahasiswa TRPL UGM, fokus pada interoperabilitas teknologi kesehatan (HL7 FHIR / SATUSEHAT), sistem AI/RAG, dan rekayasa backend.",
    images: ["/images/andika-profile.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Andika Dwi Prasetya",
    jobTitle: "Software Engineer",
    url: baseUrl,
    image: `${baseUrl}/images/andika-profile.jpg`,
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Universitas Gadjah Mada",
    },
    sameAs: [
      "https://github.com/prandika",
      "https://linkedin.com/in/andika-dwi-prasetya-3a529b299",
    ],
    knowsAbout: [
      "Software Engineering",
      "Backend Architecture",
      "FastAPI",
      "Next.js",
      "Laravel",
      "Retrieval-Augmented Generation",
      "Healthcare Interoperability",
      "HL7 FHIR",
      "SATUSEHAT",
      "Linux Systems",
    ],
  };

  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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
