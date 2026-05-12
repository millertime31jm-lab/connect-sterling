import Link from "next/link";

const lifeGains = [
  "More dinners around the table",
  "Less time trapped in the car",
  "Kids who are known by name",
  "A school culture that shows up",
  "Sports and activities that build identity",
  "More room outside",
];

const dailyMoments = [
  {
    title: "A weekday that does not feel like a race.",
    description:
      "School drop-off, work, errands, practice, dinner, and an evening walk should not require a logistics degree. Sterling gives families a chance to live with a little more breathing room.",
  },
  {
    title: "A place where your kids can be known.",
    description:
      "Kids grow differently when teachers, coaches, neighbors, and families know them by name and care about more than performance.",
  },
  {
    title: "A town where showing up still matters.",
    description:
      "Games, concerts, school events, church activities, Main Street, Sterling Rec, and college events become places where people recognize each other and build real connection.",
  },
];

const qualityCards = [
  {
    title: "Safe",
    description:
      "Not because nothing hard ever happens, but because a connected community notices, responds, and looks out for one another.",
  },
  {
    title: "Friendly",
    description:
      "The kind of place where people wave, learn your name, ask about your kids, and make it easier to stop feeling new.",
  },
  {
    title: "Clean",
    description:
      "A calmer daily environment with parks, schools, Main Street, neighborhoods, and public spaces that feel cared for.",
  },
  {
    title: "Less pressure",
    description:
      "Less pressure to keep up, less time lost in traffic, less noise around ordinary life, and more room to be present.",
  },
];

const proofCards = [
  {
    value: "73%",
    title: "More jobs than population",
    description: "Sterling has more economic strength than its size suggests.",
    href: "/the-sterling-story",
  },
  {
    value: "Daycare to college",
    title: "A full education path",
    description:
      "Lil Cub Childcare, Sterling USD 376, and Sterling College give families a rare education path in one small community.",
    href: "/education-family-life",
  },
  {
    value: "Championship culture",
    title: "Kids can participate and compete",
    description:
      "Sterling gives students a chance to be involved, be known, and be part of programs with a winning tradition.",
    href: "/education-family-life",
  },
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

      <section className="bg-gradient-to-r from-amber-100 via-orange-50 to-emerald-100">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
              A better life is usually built out of ordinary moments.
            </h2>
          </div>

          <div className="space-y-5 text-lg leading-8 text-slate-700">
            <p>
              It is easy to talk about moving like it is only about a house, a job, or
              a school district. But most families are really asking a deeper question:
              could our normal week feel better?
            </p>
            <p>
              Could mornings feel less frantic? Could our kids be known? Could we spend
              less time driving and more time around the table? Could we find a place
              where people still notice, invite, serve, and show up?
            </p>
            <p>
              That is the promise behind Connect Sterling. Not a perfect town. A better
              rhythm.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
              Picture a normal week with more room to breathe.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              Sterling is not trying to win people with flash. The value is quieter
              than that. It is the life you feel after the moving boxes are gone and
              Tuesday night starts to feel human again.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {dailyMoments.map((moment) => (
              <div
                key={moment.title}
                className="rounded-[2rem] bg-stone-50 p-8 shadow-sm ring-1 ring-stone-200"
              >
                <h3 className="text-2xl font-bold text-slate-950">
                  {moment.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-slate-700">
                  {moment.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-stone-50">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
              What feels different here?
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              The strongest parts of Sterling are not always the easiest to put on a
              brochure. They are the things people feel after they have lived here for
              a while.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {qualityCards.map((card) => (
              <div
                key={card.title}
                className="rounded-[2rem] bg-white p-7 shadow-sm ring-1 ring-stone-200"
              >
                <h3 className="text-2xl font-bold text-slate-950">{card.title}</h3>
                <p className="mt-4 text-sm leading-6 text-slate-700">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
                Small-town life only works if the town is strong.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                Sterling gives families more than charm. It has schools people choose
                on purpose, employers with regional pull, a college-town layer, daily
                essentials, and a community rhythm people can actually join.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {proofCards.map((card) => (
                <Link
                  key={card.title}
                  href={card.href}
                  className="flex min-h-[270px] flex-col rounded-[2rem] bg-white/10 p-6 ring-1 ring-white/10 transition hover:bg-white/15"
                >
                  <p className="text-3xl font-bold leading-tight text-amber-200">
                    {card.value}
                  </p>
                  <h3 className="mt-4 text-xl font-bold leading-snug text-white">
                    {card.title}
                  </h3>
                  <p className="mt-4 flex-1 text-sm leading-6 text-slate-300">
                    {card.description}
                  </p>
                  <span className="mt-6 inline-flex text-sm font-semibold text-amber-200">
                    Learn more →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-slate-950 via-emerald-950 to-amber-900 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
              Sterling is not selling escape.
            </h2>
          </div>

          <div className="space-y-5 text-lg leading-8 text-slate-200">
            <p>
              Work still matters here. School still matters. Responsibility still
              matters. But so do neighbors, margin, safety, service, Friday nights,
              family dinners, and being known.
            </p>
            <p>
              That is why families take a closer look. Not because Sterling is bigger,
              louder, or flashier. Because it may give them something they have been
              missing.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}