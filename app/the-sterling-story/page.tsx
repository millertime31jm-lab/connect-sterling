import Link from "next/link";

const qualityOfLife = [
  "A town where people wave",
  "A school where your kids can be known",
  "A Friday night where the community shows up",
  "A cleaner, calmer daily rhythm",
  "Less pressure to keep up",
  "More room to breathe",
  "Neighbors who notice",
  "A place where serving still matters",
];

const proofStats = [
  {
    value: "73%",
    label: "More jobs than population",
    detail:
      "Sterling has more economic pull than its population number suggests.",
  },
  {
    value: "Daycare to college",
    label: "Full education path",
    detail:
      "Families can find childcare, public schools, and Sterling College in one community.",
  },
  {
    value: "+22.4%",
    label: "Reported home-value growth",
    detail:
      "A signal that more people are seeing value in living and investing here.",
  },
];

const comparisonCards = [
  {
    title: "Less noise",
    description:
      "Not no responsibility. Not no work. Just fewer layers of rush, congestion, and pressure around ordinary life.",
  },
  {
    title: "More trust",
    description:
      "A place where families can learn names, build reputations, and become part of the community instead of staying invisible.",
  },
  {
    title: "More shared life",
    description:
      "School events, sports, churches, college activities, youth programs, and local traditions give families natural ways to connect.",
  },
];

export const metadata = {
  title: "The Sterling Story | Connect Sterling",
  description:
    "Discover why Sterling, Kansas offers a cleaner, calmer, more connected quality of life with strong schools, real opportunity, and room to belong.",
};

export default function TheSterlingStoryPage() {
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
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
              You do not have to choose between opportunity and belonging.
            </h1>
            <p className="mt-6 text-xl leading-8 text-slate-100">
              Sterling, Kansas is for families who want a cleaner, calmer, more
              connected way to live without giving up strong schools, real work,
              everyday essentials, and a community that still shows up.
            </p>
            <p className="mt-5 text-lg leading-8 text-slate-200">
              If life feels too rushed, too expensive, too disconnected, or too hard
              to slow down, Sterling is worth a closer look.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/move-here"
                className="rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-slate-950 shadow-sm transition hover:bg-amber-100"
              >
                See if Sterling fits your family
              </Link>
              <Link
                href="/ask-connect-sterling#ask-form"
                className="rounded-full border border-white/30 bg-white/10 px-6 py-3 text-center text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
              >
                Ask Connect Sterling
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-amber-100 via-orange-50 to-emerald-100">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
              A good move should give your family something back.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              Not just a different address. Not just a cheaper house. A better rhythm.
              A safer feeling. A friendlier pace. A place where your kids can be known,
              your family can breathe, and your calendar does not feel like it owns you.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {qualityOfLife.map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-white p-5 font-semibold text-slate-900 shadow-sm ring-1 ring-amber-100"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
              Picture an ordinary week that feels more human.
            </h2>
          </div>

          <div className="space-y-5 text-lg leading-8 text-slate-700">
            <p>
              School drop-off where people know your child. A workday that does not
              begin and end with a long commute. A quick trip for groceries. A walk
              near the lake. A youth sports practice where parents become friends. A
              Friday night game where the town shows up.
            </p>
            <p>
              That is the Sterling story at its best. Not perfect. Not polished for
              a brochure. Just a real community where daily life can feel lighter,
              cleaner, friendlier, and more connected.
            </p>
            <p>
              For the right family, that is not a small thing. That is the product.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
              Small-town life only works if the town is strong.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Sterling has the pieces families look for first: schools, employers,
              healthcare, groceries, internet options, recreation, churches, local
              businesses, and regional access when you need more.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {proofStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[2rem] bg-white/10 p-6 ring-1 ring-white/10"
              >
                <p className="text-4xl font-bold text-amber-200">{stat.value}</p>
                <p className="mt-3 font-semibold text-white">{stat.label}</p>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {stat.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-stone-50">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
              What feels different here?
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              Sterling is not trying to be a metro. That is the point. The value is in
              the things people often lose when life gets too crowded, too costly, and
              too fast.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {comparisonCards.map((card) => (
              <div
                key={card.title}
                className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-stone-200"
              >
                <h3 className="text-2xl font-bold text-slate-950">{card.title}</h3>
                <p className="mt-4 text-base leading-7 text-slate-700">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1800&q=80"
            alt="People gathered together"
            className="h-full w-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-950/85 to-emerald-950/80" />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
              Your kids can grow up with more eyes for them, not more pressure on them.
            </h2>
          </div>

          <div className="space-y-5 text-lg leading-8 text-slate-200">
            <p>
              In Sterling, kids can be known in the classroom, seen at the game,
              encouraged at church, recognized downtown, and supported by adults who
              care about more than performance.
            </p>
            <p>
              They can still be challenged. They can still compete. They can still
              stretch. But they can do it in a place where participation, belonging,
              and accountability still fit together.
            </p>
            <Link
              href="/education-family-life"
              className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-100"
            >
              Explore schools and family life
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-emerald-100 via-amber-50 to-sky-100">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
              There is still room to build a life here.
            </h2>
          </div>

          <div className="space-y-5 text-lg leading-8 text-slate-700">
            <p>
              Sterling is growing, but it is still accessible compared with many larger
              family markets. That creates a rare window: a place with momentum where
              families, builders, returners, remote workers, and local employers can
              help shape what comes next.
            </p>
            <p>
              If you want Sterling but do not see the perfect home yet, that does not
              have to end the conversation. Talk with local realtors. Talk with builders.
              Look at what exists, then consider what could be created.
            </p>
            <Link
              href="/housing-growth"
              className="inline-flex rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Explore housing and growth
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
              You do not have to figure Sterling out by yourself.
            </h2>
          </div>

          <div className="space-y-5 text-lg leading-8 text-slate-700">
            <p>
              Looking for schools, housing, childcare, healthcare, churches, youth
              sports, swim lessons, volunteer opportunities, Sterling College events,
              Golden Ticket, or local resources? Connect Sterling helps point you
              toward the right door.
            </p>
            <p>
              The goal is simple: help people find the people, places, and opportunities
              that make Sterling feel like home.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/move-here"
                className="rounded-full bg-slate-950 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                See if Sterling fits
              </Link>
              <Link
                href="/ask-connect-sterling#ask-form"
                className="rounded-full border border-slate-300 bg-white px-6 py-3 text-center text-sm font-semibold text-slate-950 transition hover:bg-stone-100"
              >
                Ask Connect Sterling
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-slate-950 via-emerald-950 to-amber-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
              Sterling is not selling escape. It is offering a better rhythm.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-200">
              Work still matters here. School still matters. Responsibility still
              matters. But so do neighbors, margin, safety, service, Friday nights,
              family dinners, and being known.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
