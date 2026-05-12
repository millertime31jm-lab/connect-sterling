import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

// Configure the Nunito font
const nunito = Nunito({ 
  subsets: ["latin"],
  variable: '--font-nunito',
});

// This dictates what shows up in Google Search and browser tabs
export const metadata: Metadata = {
  title: "Connect Sterling | Remote Work Relocation",
  description: "Keep your remote job. Keep more of your paycheck. Move to Sterling, Kansas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${nunito.variable} font-sans antialiased text-slate-900 bg-brand-50`}>
        {/* The Navbar will now automatically appear at the top of every page */}
        <Navbar />
        
        {/* The children prop represents the specific page content */}
        {children}
      </body>
    </html>
  );
}