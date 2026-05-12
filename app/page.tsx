import Link from "next/link";

const proofCards = [
  {
    value: "73%",
    title: "More jobs than population",
    description: "Sterling has more economic strength than its size suggests.",
    href: "/the-sterling-story",
  },
  {
    value: "Daycare to college",
    title: "Full education path",
    description:
      "Lil Cub Childcare, Sterling USD 376, and Sterling College give families a rare education path in one small community.",
    href: "/education-family-life",
  },
  {
    value: "Championship culture",
    title: "Students can participate and compete",
    description:
      "Sterling gives kids a chance to be involved, be known, and be part of programs with a winning tradition.",
    href: "/education-family-life",
  },
];

const lifeGains = [
  "More dinners around the table",
  "Less time trapped in the car",
  "Kids who are known by name",
  "A school culture that shows up",
  "Sports and activities that build identity",
];

export default function Home() {
  return (
    <main className="bg-stone-50 text-slate-950">
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1800&q=80"
            alt="Open road through rural landscape"
            className="h-full w-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/95 via-emerald-950/75 to-amber-900/70" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
                Trade the commute for community.
              </h1>
              <p className="mt-6 max-w-3xl text-xl leading-8 text-slate-100">
                What if your family could find strong schools, real opportunity,
                everyday essentials, and a place to belong without carrying the pace,
                pressure, and cost of a bigger market?
              </p>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-200">
                Sterling, Kansas is for families, remote workers, returners, builders,
                and new neighbors who want more margin and a better daily rhythm.
              </p>
            </div>

            <div className="rounded-[2.25rem] bg-white/10 p-5 shadow-2xl ring-1 ring-white/20 backdrop-blur">
              <div className="rounded-[1.75rem] bg-white p-6 text-slate-950">
                <h2 className="text-2xl font-bold tracking-tight">
                  What could your family get back?
                </h2>
                <div className="mt-6 grid gap-3">
                  {lifeGains.map((gain) => (
                    <div
                      key={gain}
                      className="rounded-2xl bg-gradient-to-r from-amber-50 to-emerald-50 p-4 font-semibold text-slate-900 ring-1 ring-stone-200"
                    >
                      {gain}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
                Small-town life only works if the town is strong.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                Sterling gives families more than charm. It has schools people choose
                on purpose, employers with regional pull, a college-town layer, daily
                essentials, and a community rhythm people can actually join.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {proofCards.map((card) => (
                <Link
                  key={card.title}
                  href={card.href}
                  className="rounded-[2rem] bg-white/10 p-6 ring-1 ring-white/10 transition hover:bg-white/15"
                >
                  <p className="text-3xl font-bold text-amber-200">{card.value}</p>
                  <h3 className="mt-3 text-lg font-bold text-white">{card.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    {card.description}
                  </p>
                  <span className="mt-5 inline-flex text-sm font-semibold text-amber-200">
                    Learn more →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}