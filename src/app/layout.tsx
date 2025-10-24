import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Psychologos",
  description: "ნორბეკოვის სისტემის ფსიქო სომატიკური თვითაღდგენის კურსი. გააღვიძე შენი სხეულის და გონების თვითგანკურნების მექანიზმი.",
  icons: {
    icon: [
      { url: "/logo.jpeg" },
      { url: "/icon.jpeg" },
    ],
    apple: "/logo.jpeg",
    shortcut: "/logo.jpeg",
  },
  openGraph: {
    title: "Psychologos",
    description: "ნორბეკოვის სისტემის ფსიქო სომატიკური თვითაღდგენის კურსი",
    images: [
      {
        url: "/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Psychologos",
      },
    ],
    siteName: "Psychologos",
  },
  twitter: {
    card: "summary_large_image",
    title: "Psychologos",
    description: "ნორბეკოვის სისტემის ფსიქო სომატიკური თვითაღდგენის კურსი",
    images: ["/logo.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth overflow-x-hidden">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
