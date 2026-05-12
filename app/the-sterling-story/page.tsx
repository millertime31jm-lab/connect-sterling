import Link from "next/link";

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
      "Lil Cub Childcare, Sterling USD 376, and Sterling College all in one community.",
  },
  {
    value: "2018 + 2024",
    label: "School recognition",
    detail:
      "Sterling Grade School has earned national recognition in recent years.",
  },
  {
    value: "+22.4%",
    label: "Reported home-value growth",
    detail:
      "A signal that more people are seeing the value of living and investing here.",
  },
];

const storyCards = [
  {
    title: "Your kids can be known here.",
    color: "from-amber-600 to-orange-800",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80",
    description:
      "Sterling gives students a place to be seen by teachers, coaches, neighbors, and families. They can try more, participate earlier, and grow up surrounded by adults who care about them beyond the classroom.",
    proof:
      "Sterling offers a full education path from childcare to USD 376 to Sterling College.",
    href: "/education-family-life",
    cta: "Explore schools and family life",
  },
  {
    title: "Your kids can compete here.",
    color: "from-slate-900 to-emerald-900",
    image:
      "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1200&q=80",
    description:
      "Small-town does not have to mean small expectations. Sterling has a sports and activity culture where students can participate and still be part of programs that know how to win.",
    proof:
      "Sterling has captured state titles across multiple programs, and its forensics tradition includes 30 state titles.",
    href: "/education-family-life",
    cta: "See sports and activities",
  },
  {
    title: "Your work can still matter here.",
    color: "from-sky-700 to-indigo-900",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    description:
      "Sterling is not just a quiet place to sleep after working somewhere else. It has employers, agriculture, manufacturing, healthcare, education, entrepreneurs, Main Street businesses, and regional pull.",
    proof:
      "City economic development materials describe Sterling as a net importer of jobs.",
    href: "/resources",
    cta: "Explore resources",
  },
  {
    title: "Your home can be part of the upside.",
    color: "from-emerald-700 to-teal-900",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
    description:
      "Sterling gives families a chance to enter a growing community while the price point can still make sense compared with larger family markets.",
    proof:
      "Sterling’s reported home values showed 22.4% year-over-year growth while still offering a lower entry point than many metro areas.",
    href: "/housing-growth",
    cta: "Explore housing",
  },
];

const lifeBack = [
  "More dinners around the table",
  "A shorter daily rhythm",
  "Kids who are known by name",
  "A school culture that shows up",
  "Sports and activities that build confidence",
  "A chance to serve and belong",
  "Outdoor space without leaving town",
  "A home investment in a growing community",
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

export const metadata = {
  title: "The Sterling Story | Connect Sterling",
  description:
    "Discover why Sterling, Kansas offers strong schools, economic vitality, everyday essentials, and a connected small-town life.",
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
              Sterling, Kansas gives families something many larger markets struggle
              to offer at the same time: strong schools, real economic momentum,
              everyday essentials, and a community where people can still be known.
            </p>
            <p className="mt-5 text-lg leading-8 text-slate-200">
              If you are looking for more margin, more connection, and a better daily
              rhythm, Sterling is worth a closer look.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/move-here"
                className="rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-slate-950 shadow-sm transition hover:bg-amber-100"
              >
                See if Sterling fits your family
              </Link>
              <Link
                href="/ask-connect-sterling"
                className="rounded-full border border-white/30 bg-white/10 px-6 py-3 text-center text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
              >
                Ask Connect Sterling
              </Link>
            </div>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-4">
            {proofStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[2rem] bg-white/10 p-6 ring-1 ring-white/15 backdrop-blur"
              >
                <p className="text-3xl font-bold text-amber-200">{stat.value}</p>
                <p className="mt-2 font-semibold text-white">{stat.label}</p>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {stat.detail}
                </p>
              </div>
            ))}
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
              Maybe that is more time together. Maybe it is a school where your child
              can participate and be known. Maybe it is a home that gives you more
              margin. Maybe it is a community where you can serve, coach, worship,
              volunteer, build, and belong.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {lifeBack.map((item) => (
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

      <section className="bg-stone-50">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
              Sterling works because the pieces fit together.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              Strong schools matter more when there are activities, employers,
              healthcare, churches, recreation, housing options, local businesses,
              and neighbors who help people plug in. Sterling’s story is not one
              feature. It is the combination.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {storyCards.map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className="group overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-stone-200 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={card.image}
                    alt=""
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${card.color} opacity-75`}
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-950 group-hover:text-amber-800">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-700">
                    {card.description}
                  </p>
                  <div className="mt-5 rounded-2xl bg-amber-50 p-4 text-sm leading-6 text-slate-700 ring-1 ring-amber-100">
                    {card.proof}
                  </div>
                  <span className="mt-5 inline-flex text-sm font-semibold text-emerald-800">
                    {card.cta} →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
              Small-town life only works if the town is strong.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Sterling is not asking you to give up everything that makes daily life
              work. The essentials are here, and the region expands your options when
              you need more.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {essentials.map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-white/10 p-5 font-semibold text-white ring-1 ring-white/10"
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
              Your kids can have a chance to participate and a chance to win.
            </h2>
          </div>

          <div className="space-y-5 text-lg leading-8 text-slate-700">
            <p>
              In many larger places, kids can get boxed out early. In Sterling, students
              often have room to try more things, contribute earlier, and be part of
              teams and programs that carry real expectations.
            </p>
            <p>
              That matters because sports, forensics, debate, music, theatre, FFA,
              FBLA, Science Olympiad, and school events are not just activities.
              They become part of how kids build confidence and how families build
              friendships.
            </p>
            <Link
              href="/education-family-life"
              className="inline-flex rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Explore Education & Family Life
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-emerald-100 via-amber-50 to-sky-100">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
              Want Sterling, but do not see the perfect home yet?
            </h2>
          </div>

          <div className="space-y-5 text-lg leading-8 text-slate-700">
            <p>
              Start with local realtors. Talk with builders. Look at what is available,
              then consider what could be built. Sterling’s housing story is not just
              about today’s listings. It is about joining a community with momentum.
            </p>
            <p>
              The reported 22.4% home-value growth number is one reason buyers,
              builders, and investors should pay attention.
            </p>
            <Link
              href="/housing-growth"
              className="inline-flex rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Explore Housing & Growth
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
              Looking for swim lessons, youth sports, Rotary, volunteer opportunities,
              churches, 5th Quarter, school events, Sterling College events, Golden
              Ticket, housing, healthcare, or local resources? Connect Sterling helps
              point you toward the right door.
            </p>
            <p>
              The goal is simple: help new and current residents find the people,
              places, and opportunities that make Sterling feel like home.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/ask-connect-sterling"
                className="rounded-full bg-slate-950 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Ask Connect Sterling
              </Link>
              <Link
                href="/get-connected"
                className="rounded-full border border-slate-300 bg-white px-6 py-3 text-center text-sm font-semibold text-slate-950 transition hover:bg-stone-100"
              >
                Get Connected
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}