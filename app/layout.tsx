import type { Metadata } from "next";
import { Orbitron, Inter } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MISRISAAB - Future of Business Scaling",
  description: "High-end IT firm developing business solutions for Touring, Real Estate, and Manufacturing industries.",
};

import { Providers } from "@/components/Providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${orbitron.variable} ${inter.variable} antialiased bg-background text-foreground font-sans selection:bg-cyan-500 selection:text-black`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
