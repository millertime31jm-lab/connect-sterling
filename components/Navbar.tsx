"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-brand-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center gap-1">
              <span className="text-2xl font-black text-brand-900 tracking-tight">
                Connect<span className="text-brand-500">Sterling</span>
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link href="/why-sterling" className="text-slate-600 hover:text-brand-700 font-bold transition-colors">
              Why Sterling
            </Link>
            <Link href="/get-involved" className="text-slate-600 hover:text-brand-700 font-bold transition-colors">
              Get Involved
            </Link>
            <Link href="/resources" className="text-slate-600 hover:text-brand-700 font-bold transition-colors">
              Resources
            </Link>
            <Link href="/#guide" className="px-5 py-2.5 bg-brand-500 text-white font-bold rounded-xl shadow-sm hover:bg-brand-700 transition-colors">
              Get the Guide
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-brand-900 focus:outline-none p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-brand-50 absolute w-full shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <Link onClick={() => setIsOpen(false)} href="/why-sterling" className="block px-3 py-3 text-slate-700 font-bold hover:bg-brand-50 rounded-lg">
              Why Sterling
            </Link>
            <Link onClick={() => setIsOpen(false)} href="/get-involved" className="block px-3 py-3 text-slate-700 font-bold hover:bg-brand-50 rounded-lg">
              Get Involved
            </Link>
            <Link onClick={() => setIsOpen(false)} href="/resources" className="block px-3 py-3 text-slate-700 font-bold hover:bg-brand-50 rounded-lg">
              Resources
            </Link>
            <Link onClick={() => setIsOpen(false)} href="/#guide" className="block px-3 py-3 mt-4 text-center bg-brand-500 text-white font-bold rounded-xl shadow-sm">
              Get the Guide
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}