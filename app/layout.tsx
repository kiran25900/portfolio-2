import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OSBORN.DEV — Precision Engineering Studio",
  description:
    "From validated MVPs to resilient enterprise architecture, we build technical solutions for a connected world. High-end engineering for modern digital ecosystems.",
  keywords: [
    "software engineering",
    "MVP development",
    "cloud infrastructure",
    "API integration",
    "legacy modernization",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=SUSE:wght@300;400;500;600;700;800&family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-surface text-on-surface font-body antialiased">
        {children}
      </body>
    </html>
  );
}
