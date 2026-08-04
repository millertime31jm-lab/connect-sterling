import Link from "next/link";

const navItems = [
  { label: "The Sterling Story", href: "/the-sterling-story", kind: "story" },
  { label: "Move Here", href: "/move-here", kind: "story" },
  { label: "Education & Family Life", href: "/education-family-life", kind: "story" },
  { label: "Housing & Growth", href: "/housing-growth", kind: "story" },
  { label: "Get Connected", href: "/get-connected", kind: "utility" },
  { label: "Resources", href: "/resources", kind: "utility" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3.5 sm:gap-6 sm:px-6 sm:py-4">
        <Link href="/" className="group">
          <div className="text-base font-bold tracking-tight text-slate-950 group-hover:text-emerald-800 sm:text-lg">
            Connect Sterling
          </div>
          <div className="max-w-[11rem] text-[10px] font-semibold uppercase tracking-[0.18em] text-amber-700 sm:max-w-none sm:text-xs">
            Trade the commute for community
          </div>
        </Link>

        <div className="hidden items-center gap-5 lg:flex">
          {navItems.map((item) =>
            item.href === "/get-connected" ? (
              <div key={item.href} className="group relative">
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-3 py-1.5 text-sm font-semibold text-amber-900 ring-1 ring-amber-200 transition hover:bg-emerald-50 hover:text-emerald-900 hover:ring-emerald-200"
                >
                  {item.label} <span aria-hidden="true">⌄</span>
                </Link>
                <div className="invisible absolute left-0 top-full z-50 w-60 translate-y-1 pt-3 opacity-0 transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                  <div className="grid gap-1 rounded-2xl border border-stone-200 bg-white p-2 shadow-xl">
                    <Link href="/get-connected" className="rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-stone-50 hover:text-emerald-900">
                      Community Connections
                    </Link>
                    <Link href="/goldenticket" className="rounded-xl bg-amber-50 px-4 py-3 text-sm font-semibold text-amber-900 transition hover:bg-amber-100">
                      Golden Ticket Events
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-semibold transition ${
                  item.kind === "utility"
                    ? "rounded-full bg-amber-50 px-3 py-1.5 text-amber-900 ring-1 ring-amber-200 hover:bg-emerald-50 hover:text-emerald-900 hover:ring-emerald-200"
                    : "text-slate-700 hover:text-emerald-800"
                }`}
              >
                {item.label}
              </Link>
            ),
          )}
        </div>

        <Link
          href="/ask-connect-sterling#ask-form"
          className="hidden rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-900 sm:inline-flex"
        >
          Ask Connect Sterling
        </Link>
      </nav>

      <div className="border-t border-stone-100 bg-stone-50 lg:hidden">
        <div className="mx-auto flex max-w-7xl gap-4 overflow-x-auto px-4 py-3 sm:px-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`shrink-0 text-sm font-semibold transition ${
                item.kind === "utility"
                  ? "rounded-full bg-amber-50 px-3 py-1.5 text-amber-900 ring-1 ring-amber-200 hover:bg-emerald-50 hover:text-emerald-900 hover:ring-emerald-200"
                  : "text-slate-700 hover:text-emerald-800"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/goldenticket"
            className="shrink-0 rounded-full bg-amber-100 px-3 py-1.5 text-sm font-semibold text-amber-950 ring-1 ring-amber-300"
          >
            Golden Ticket Events
          </Link>
          <Link
            href="/ask-connect-sterling#ask-form"
            className="shrink-0 text-sm font-bold text-emerald-800"
          >
            Ask
          </Link>
        </div>
      </div>
    </header>
  );
}
