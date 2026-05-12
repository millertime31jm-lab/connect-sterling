import Link from "next/link";

const navItems = [
  { label: "The Sterling Story", href: "/the-sterling-story" },
  { label: "Move Here", href: "/move-here" },
  { label: "Education & Family Life", href: "/education-family-life" },
  { label: "Housing & Growth", href: "/housing-growth" },
  { label: "Get Connected", href: "/get-connected" },
  { label: "Resources", href: "/resources" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
        <Link href="/" className="group">
          <div className="text-lg font-bold tracking-tight text-slate-950 group-hover:text-emerald-800">
            Connect Sterling
          </div>
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">
            Trade the commute for community
          </div>
        </Link>

        <div className="hidden items-center gap-5 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-slate-700 transition hover:text-emerald-800"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Link
          href="/ask-connect-sterling"
          className="hidden rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-900 sm:inline-flex"
        >
          Ask Connect Sterling
        </Link>
      </nav>

      <div className="border-t border-stone-100 bg-stone-50 lg:hidden">
        <div className="mx-auto flex max-w-7xl gap-4 overflow-x-auto px-6 py-3">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="shrink-0 text-sm font-semibold text-slate-700 transition hover:text-emerald-800"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/ask-connect-sterling"
            className="shrink-0 text-sm font-bold text-emerald-800"
          >
            Ask
          </Link>
        </div>
      </div>
    </header>
  );
}