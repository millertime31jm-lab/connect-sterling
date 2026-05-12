import Link from "next/link";

const mainLinks = [
  { label: "The Sterling Story", href: "/the-sterling-story" },
  { label: "Move Here", href: "/move-here" },
  { label: "Education & Family Life", href: "/education-family-life" },
  { label: "Housing & Growth", href: "/housing-growth" },
  { label: "Get Connected", href: "/get-connected" },
  { label: "Community Calendar Hub", href: "/community-calendar" },
  { label: "Resources", href: "/resources" },
];

const localLinks = [
  { label: "Sterling Chamber Main Street", href: "https://www.visitsterlingks.com/" },
  { label: "City of Sterling", href: "https://www.sterling-kansas.com/" },
  { label: "USD 376", href: "https://www.usd376.com/" },
  { label: "Sterling College", href: "https://www.sterling.edu/" },
  { label: "Sterling Recreation Commission", href: "https://sterlingrec.org/" },
  { label: "Golden Ticket", href: "https://www.sterlinggoldenticket.com" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-[1.1fr_0.9fr_0.9fr]">
        <div>
          <Link href="/" className="inline-block">
            <div className="text-2xl font-bold tracking-tight">Connect Sterling</div>
            <div className="mt-1 text-sm font-semibold uppercase tracking-[0.18em] text-amber-300">
              Trade the commute for community
            </div>
          </Link>

          <p className="mt-5 max-w-xl text-base leading-7 text-slate-300">
            Sterling, Kansas is for families, remote workers, returners, builders,
            and new neighbors who want strong schools, real opportunity, everyday
            essentials, and a place to belong.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/move-here"
              className="rounded-full bg-white px-5 py-3 text-center text-sm font-semibold text-slate-950 transition hover:bg-amber-100"
            >
              See if Sterling fits
            </Link>
            <Link
              href="/ask-connect-sterling#ask-form"
              className="rounded-full border border-white/25 bg-white/10 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/20"
            >
              Ask Connect Sterling
            </Link>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-300">
            Explore
          </h2>
          <div className="mt-5 grid gap-3">
            {mainLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-300 transition hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-300">
            Local starting points
          </h2>
          <div className="mt-5 grid gap-3">
            {localLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-slate-300 transition hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Connect Sterling. All rights reserved.</p>
          <p>Built to help people live, work, build, and belong in Sterling.</p>
        </div>
      </div>
    </footer>
  );
}
