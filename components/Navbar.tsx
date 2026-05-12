"use client";

import Link from "next/link";
import { useState } from "react";
import { navLinks } from "../data/content";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-20 items-center justify-between gap-4">
          <Link href="/" className="flex min-w-fit flex-col leading-none" onClick={() => setIsOpen(false)}>
            <span className="text-xl font-black tracking-tight text-slate-950 sm:text-2xl">
              Connect <span className="text-brand-700">Sterling</span>
            </span>
            <span className="mt-1 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
              Sterling, Kansas
            </span>
          </Link>

          <div className="hidden items-center gap-5 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-bold text-slate-700 transition hover:text-brand-900"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/ask-connect-sterling"
              className="rounded-lg bg-brand-700 px-4 py-2.5 text-sm font-extrabold text-white shadow-sm transition hover:bg-brand-900"
            >
              Ask Connect Sterling
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 lg:hidden"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-label="Toggle navigation"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="block text-2xl leading-none">{isOpen ? "x" : "="}</span>
          </button>
        </div>
      </div>

      {isOpen && (
        <div id="mobile-navigation" className="border-t border-slate-200 bg-white lg:hidden">
          <div className="mx-auto max-w-7xl space-y-1 px-4 py-4 sm:px-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block rounded-lg px-3 py-3 text-base font-bold text-slate-800 hover:bg-brand-50"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/ask-connect-sterling"
              onClick={() => setIsOpen(false)}
              className="mt-3 block rounded-lg bg-brand-700 px-4 py-3 text-center font-extrabold text-white"
            >
              Ask Connect Sterling
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
