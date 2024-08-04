// app/layout.tsx
import type { Metadata } from "next";
import Head from "next/head";
import { Inter } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Container from "@/components/global/Container";
import PageWrapper from "@/components/global/PageWrapper";
import Providers from "@/components/providers/Providers";

const inter = Inter({ subsets: ["latin"] });
const baseBgColor = "bg-blue-200";

export const metadata: Metadata = {
  title: "Matt Heller Plumbing",
  description:
    "A licensed and insured professional. Matt is ready to help you with all your plumbing needs. Schedule with MH plumbing today!",
  icons: {
    icon: "/favicon-512x512.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <Navbar />
          <PageWrapper className={baseBgColor}>{children}</PageWrapper>
        </Providers>
      </body>
    </html>
  );
}
