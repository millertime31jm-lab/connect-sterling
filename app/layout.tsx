import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://connectsterling.com"),
  title: {
    default: "Connect Sterling | Move, Work, Build, and Belong in Sterling, Kansas",
    template: "%s | Connect Sterling",
  },
  description:
    "Connect Sterling helps families, remote workers, job seekers, builders, and new residents get connected in Sterling, Kansas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-brand-50 font-sans text-slate-900 antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
