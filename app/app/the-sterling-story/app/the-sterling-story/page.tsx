import Link from "next/link";

const proofStats = [
  {
    value: "2,275",
    label: "Approximate population",
    detail: "Small enough to know people. Strong enough to keep growing.",
  },
  {
    value: "73%",
    label: "More jobs than population",
    detail: "Sterling punches above its weight economically.",
  },
  {
    value: "Daycare to college",
    label: "Full education path",
    detail: "Lil Cub Childcare, Sterling USD 376, and Sterling College.",
  },
  {
    value: "2018 + 2024",
    label: "National school recognition",
    detail: "Sterling Grade School has earned national recognition.",
  },
];

const essentials = [
  "Childcare and early education",
  "Sterling USD 376",
  "Sterling College",
  "Local healthcare and wellness providers",
  "Groceries, pharmacy, and daily needs",
  "Cox, Brightspeed, and MTC internet options",
  "Sterling Lake, parks, trails, and recreation",
  "Regional access when you need larger-city amenities",
];

const employers = [
  "Central Prairie Co-op",
  "Hyatt Life Sciences",
  "KMW",
  "Jacam Catalyst",
  "Sterling College",
  "Healthcare providers",
  "Main Street businesses",
  "Local entrepreneurs",
];

export const metadata = {
  title: "The Sterling Story | Connect Sterling",
  description:
    "Discover why Sterling, Kansas offers strong schools, growing employers, everyday essentials, and a connected small-town life.",
};

export default function TheSterlingStoryPage() {
  return (
    <main className="bg-stone-50 text-slate-950">
      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-amber-700">
            The Sterling Story
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Trade the commute for community.
          </h1>
          <p className="mt-6 text-xl leading-8 text-slate-700">
            Sterling, Kansas is a growing small town where families, remote workers,
            returners, builders, and new neighbors can find strong schools, everyday
            essentials, real opportunity, and a place to belong.
          </p>
          <p className="mt-5 text-lg leading-8 text-slate-700">
            This is a place for families who want more margin, more connection, and
            more room to build a life.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/ask-connect-sterling"
              className="rounded-full bg-slate-950 px-6 py-3 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
            >
              Ask Connect Sterling
            </Link>
            <Link
              href="/education-family-life"
              className="rounded-full border border-slate-300 bg-white px-6 py-3 text-center text-sm font-semibold text-slate-950 shadow-sm transition hover:bg-stone-100"
            >
              Explore Education & Family Life
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-stone-200 bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">
              The tension
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Life should not feel this rushed.
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-8 text-slate-700">
            <p>
              Somewhere along the way, a lot of families traded margin for motion.
              Longer commutes. Higher payments. Less time outside. Less time around
              the table. Less room to know neighbors, serve, coach, show up, or breathe.
            </p>
            <p>
              Connect Sterling is for people wondering whether life could be different.
              Not smaller. Not less meaningful. Just more grounded, more connected,
              and more human.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-amber-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">
              The invitation
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              What if your town gave something back?
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-700">
              In Sterling, the goal is not to disappear from the world. It is to live
              with enough room to be present in it. Room for kids to be known. Room
              for work that still leaves time for dinner. Room for neighbors, school
              events, youth sports, church, volunteering, quiet walks, local coffee,
              and Friday nights where people still show up.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
              The proof
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              This is not a town standing still.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Sterling has more going on than many people expect from a town its size:
              strong schools, a college, growing employers, agriculture, manufacturing,
              healthcare, entrepreneurs, and Main Street businesses.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {proofStats.map((stat) => (
              <div key={stat.label} className="rounded-3xl bg-white/10 p-6 ring-1 ring-white/10">
                <div className="text-3xl font-bold text-amber-200">{stat.value}</div>
                <div className="mt-2 font-semibold text-white">{stat.label}</div>
                <p className="mt-3 text-sm leading-6 text-slate-300">{stat.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">
              Confidence builders
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              The essentials are here.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              Small-town life works best when families have what they need close by.
              Sterling offers the daily-life essentials that make a move feel realistic.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {essentials.map((item) => (
              <div key={item} className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
                <p className="font-medium text-slate-900">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-stone-200 bg-stone-100">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">
              Schools and family life
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Schools are one of the biggest reasons families choose Sterling.
            </h2>
          </div>
          <div>
            <p className="text-lg leading-8 text-slate-700">
              Kids can be known here. They can participate here. They can be
              challenged here. And the community still shows up.
            </p>
            <blockquote className="mt-8 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-stone-200">
              <p className="text-lg leading-8 text-slate-800">
                “The school system played and continues to play a central role in our
                choice to live and raise our family in Sterling. We wanted our kids in
                a place where they could be known, challenged, involved, and surrounded
                by people who cared about them beyond the classroom.”
              </p>
              <footer className="mt-4 font-semibold text-slate-950">
                Jed Miller, local parent
              </footer>
            </blockquote>
            <Link
              href="/education-family-life"
              className="mt-8 inline-flex rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Explore Education & Family Life
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">
              Economic strength
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              A small town with real economic strength.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              Sterling is home to growing employers, agriculture, manufacturing,
              healthcare, education, entrepreneurs, and Main Street businesses.
              Connect Sterling does not maintain a live jobs board. Instead, we
              point people toward the Chamber and local employer resources.
            </p>
            <Link
              href="/resources"
              className="mt-8 inline-flex rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-stone-100"
            >
              Connect with local resources
            </Link>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {employers.map((item) => (
              <div key={item} className="rounded-2xl bg-stone-50 p-5 ring-1 ring-stone-200">
                <p className="font-semibold text-slate-950">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-amber-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">
              Growth
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Sterling is growing. Be part of what’s next.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              Sterling’s schools, employers, college, and community life are creating
              real momentum. That growth also creates a need for more housing options.
              Some families will buy existing homes. Others may choose to build. Some
              workers may need rental options while they settle. Builders, lenders,
              landowners, developers, and investors all have a role to play in
              Sterling’s next chapter.
            </p>
            <Link
              href="/housing-growth"
              className="mt-8 inline-flex rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Explore Housing & Growth
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}