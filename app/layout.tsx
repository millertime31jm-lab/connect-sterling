import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Load the fonts and assign them to CSS variables
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });

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
      {/* We inject the variables into the body tag so the whole site can access them */}
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-slate-50 text-slate-900 flex flex-col min-h-screen`}>
        <Navbar />
        
        <div className="flex-grow">
          {children}
        </div>

        <Footer />
      </body>
    </html>
  );
}