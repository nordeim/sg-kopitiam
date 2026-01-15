import type { Metadata } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import { Toaster } from "@/components/ui/retro/toaster";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import "../styles/globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Morning Brew Collective | Singapore Heritage Kopitiam",
  description: "Authentic Singaporean breakfast since 1973. Kopi, Kaya Toast, and community.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${dmSans.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}