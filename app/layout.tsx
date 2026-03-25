import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

// This imports a clean, modern, highly readable font
const inter = Inter({ subsets: ["latin"] });

// This is the default SEO data for the site
export const metadata: Metadata = {
  title: "Connect Sterling | Your Rural Opportunity Zone",
  description: "Discover community, opportunity, and belonging in Sterling, Kansas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-50 text-slate-900`}>
        {/* The Navbar will now automatically appear on every page */}
        <Navbar />
        
        {/* This is where the specific page content will load */}
        {children}
      </body>
    </html>
  );
}