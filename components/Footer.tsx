import Link from "next/link";
import { goldenTicketUrl, navLinks } from "../data/content";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-12 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <h2 className="text-2xl font-black tracking-tight">
              Connect <span className="text-brand-300">Sterling</span>
            </h2>
            <p className="mt-4 max-w-md text-sm leading-6 text-slate-300">
              Sterling, Kansas&apos; front door for growth and connection. Tell us what you need, and we will point you to the right local person.
            </p>
            <p className="mt-4 text-sm font-bold text-brand-100">Trade the commute for community.</p>
          </div>

          <div>
            <h3 className="text-sm font-extrabold uppercase tracking-[0.18em] text-slate-400">Explore</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-slate-300 transition hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-extrabold uppercase tracking-[0.18em] text-slate-400">Connect</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/ask-connect-sterling" className="text-brand-100 transition hover:text-white">
                  Ask Connect Sterling
                </Link>
              </li>
              <li>
                <Link href="/community-calendar" className="text-slate-300 transition hover:text-white">
                  Community Calendar Hub
                </Link>
              </li>
              <li>
                <a href={goldenTicketUrl} className="text-slate-300 transition hover:text-white" target="_blank" rel="noopener noreferrer">
                  Golden Ticket
                </a>
              </li>
              <li>
                <a href="mailto:hello@connectsterling.com" className="text-slate-300 transition hover:text-white">
                  hello@connectsterling.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-800 pt-6 text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Connect Sterling. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
