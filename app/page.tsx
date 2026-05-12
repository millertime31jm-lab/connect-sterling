import Link from "next/link";

const heroStats = [
  {
    value: "73%",
    label: "More jobs than population",
    detail: "Sterling has more economic strength than its size suggests.",
  },
  {
    value: "Daycare to college",
    label: "Full education path",
    detail: "Lil Cub Childcare, USD 376, and Sterling College.",
  },
  {
    value: "Championship culture",
    label: "Sports + activities",
    detail: "Students can participate and compete with programs that know how to win.",
  },
];

const audiencePaths = [
  {
    title: "Thinking about moving?",
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80",
    description:
      "See what life in Sterling could look like for your family: schools, housing, healthcare, internet, groceries, outdoor space, and community connection.",
    proof:
      "A good move should give your family more than a new address. It should give you more margin.",
    href: "/move-here",
    cta: "Explore moving here",
    color: "from-emerald-700 to-teal-900",
  },
  {
    title: "Want strong schools?",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80",
    description:
      "Sterling gives families a full education path from childcare through college, with strong school culture, sports, activities, and community support.",
    proof:
      "You are not just choosing a school. You are choosing part of your child’s childhood.",
    href: "/education-family-life",
    cta: "Explore education",
    color: "from-amber-600 to-orange-800",
  },
  {
    title: "Looking for a home?",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
    description:
      "Buy in Sterling, build the home you want, rent while you settle, or explore housing investment in a growing community.",
    proof:
      "Sterling’s reported home values showed 22.4% year-over-year growth while still offering an accessible entry point.",
    href: "/housing-growth",
    cta: "Explore housing",
    color: "from-sky-700 to-indigo-900",
  },
  {
    title: "Ready to plug in?",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80",
    description:
      "Find youth sports, school events, churches, volunteer opportunities, Sterling College events, Golden Ticket, calendars, and local groups.",
    proof:
      "The difference between living somewhere and belonging somewhere is often one invitation.",
    href: "/get-connected",
    cta: "Get connected",
    color: "from-purple-700 to-slate-950",
  },
];

const proofCards = [
  {
    title: "Your kids can be known",
    value: "2018 + 2024",
    description:
      "Sterling Grade School has earned national recognition, and USD 376 gives students a place to be seen, challenged, and involved.",
    href: "/education-family-life",
  },
  {
    title: "Your kids can compete",
    value: "Win + belong",
    description:
      "Sterling has captured state titles across multiple programs. Students can participate in a small-school setting and still compete with winners.",
    href: "/education-family-life",
  },
  {
    title: "Your town can have momentum",
    value: "73%",
    description:
      "Sterling is described as a net importer of jobs and employs more people than its population suggests.",
    href: "/the-sterling-story",
  },
  {
    title: "Your home can be an opportunity",
    value: "+22.4%",
    description:
      "Sterling’s reported home-price growth helps show why buying, building, or investing here can be part of the upside.",
    href: "/housing-growth",
  },
];

const lifeGains = [
  "More dinners around the table",
  "Less time trapped in the car",
  "Kids who are known by name",
  "A school culture that shows up",
  "Sports and activities that build identity",
  "More room outside",
  "A chance to serve and belong",
  "Margin for savings, generosity, and rest",
];

const essentials = [
  {
    title: "Schools",
    description:
      "Childcare, USD 376, and Sterling College create an education path rare for a town this size.",
  },
  {
    title: "Healthcare",
    description:
      "Local access to everyday care with broader regional care available when needed.",
  },
  {
    title: "Groceries + daily needs",
    description:
      "The basics that make daily life work: groceries, pharmacy, food, services, and Main Street businesses.",
  },
  {
    title: "Internet",
    description:
      "Multiple providers serve Sterling. Availability and speeds should be verified by address.",
  },
  {
    title: "Outdoor life",
    description:
      "Sterling Lake, parks, trails, golf, youth sports, and nearby rural space.",
  },
  {
    title: "Regional access",
    description:
      "Small-town daily rhythm with larger-city amenities within driving distance.",
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

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                Trade the commute for community.
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-100 sm:text-xl">
                What if your family could find strong schools, real opportunity,
                everyday essentials, and a place to belong without carrying the pace,
                pressure, and cost of a bigger market?
              </p>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-200">
                Sterling, Kansas is for families, remote workers, returners, builders,
                and new neighbors who want more margin and a better daily rhythm.
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/move-here"
                  className="w-full rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-slate-950 shadow-sm transition hover:bg-amber-100 sm:w-auto"
                >
                  See if Sterling fits your family
                </Link>
                <Link
                  href="/ask-connect-sterling#ask-form"
                  className="w-full rounded-full border border-white/30 bg-white/10 px-6 py-3 text-center text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20 sm:w-auto"
                >
                  Ask Connect Sterling
                </Link>
              </div>
            </div>

            <div className="rounded-[2.25rem] bg-white/10 p-5 shadow-2xl ring-1 ring-white/20 backdrop-blur">
              <div className="rounded-[1.75rem] bg-white p-6 text-slate-950">
                <h2 className="text-2xl font-bold tracking-tight">
                  What could your family get back?
                </h2>
                <div className="mt-6 grid gap-3">
                  {lifeGains.slice(0, 5).map((gain) => (
                    <div
                      key={gain}
                      className="rounded-2xl bg-gradient-to-r from-amber-50 to-emerald-50 p-4 font-semibold text-slate-900 ring-1 ring-stone-200"
                    >
                      {gain}
                    </div>
                  ))}
                </div>
                <Link
                  href="#life-back"
                  className="mt-6 inline-flex text-sm font-bold text-emerald-800"
                >
                  Picture life with more margin →
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {heroStats.map((stat) => (
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

      <section
        id="life-back"
        className="bg-gradient-to-r from-amber-100 via-orange-50 to-emerald-100"
      >
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
              You were not made to spend your best hours rushing from one thing to the next.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              A lot of families are asking the same question: is there a place where
              work still matters, kids still have opportunities, neighbors still know
              each other, and life has a little more breathing room?
            </p>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              Sterling will not be the right fit for everyone. But for the right family,
              it can give something back.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {lifeGains.map((gain) => (
              <div
                key={gain}
                className="rounded-2xl bg-white p-5 font-semibold text-slate-900 shadow-sm ring-1 ring-amber-100"
              >
                {gain}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-stone-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
              Start with the question on your mind.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              Whether you are wondering about schools, housing, work, activities,
              churches, healthcare, internet, or what it would actually feel like to
              live here, start where it matters most to you.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {audiencePaths.map((path) => (
              <Link
                key={path.title}
                href={path.href}
                className="group flex h-full overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-stone-200 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <article className="flex h-full w-full flex-col">
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={path.image}
                    alt=""
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${path.color} opacity-75`}
                  />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-bold text-slate-950 group-hover:text-amber-800">
                    {path.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-700">
                    {path.description}
                  </p>
                  <div className="mt-5 rounded-2xl bg-amber-50 p-4 text-sm leading-6 text-slate-700 ring-1 ring-amber-100">
                    {path.proof}
                  </div>
                  <span className="mt-5 inline-flex text-sm font-semibold text-emerald-800">
                    {path.cta} →
                  </span>
                </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
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

            <div className="grid gap-4 sm:grid-cols-2">
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

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
              You do not have to give up the basics to gain a better rhythm.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              The move only works if daily life works. Sterling offers the essentials
              families ask about first: schools, healthcare, groceries, internet,
              outdoor space, recreation, and regional access when you need it.
            </p>
            <Link
              href="/move-here"
              className="mt-8 inline-flex w-full justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 sm:w-auto"
            >
              Explore the essentials
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {essentials.map((item) => (
              <div
                key={item.title}
                className="rounded-[2rem] bg-gradient-to-br from-stone-50 to-amber-50 p-6 ring-1 ring-stone-200"
              >
                <h3 className="text-lg font-bold text-slate-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-700">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1800&q=80"
            alt="Basketball court"
            className="h-full w-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-950/85 to-amber-900/70" />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
              Your kids can have a chance to play, and a chance to win.
            </h2>
          </div>

          <div className="space-y-5 text-lg leading-8 text-slate-200">
            <p>
              Sports are part of Sterling’s culture. Game nights bring students,
              parents, grandparents, alumni, and neighbors together.
            </p>
            <p>
              Sterling has captured state titles across multiple programs. That means
              kids can grow up in a place where participation and excellence can go
              together.
            </p>
            <Link
              href="/education-family-life"
              className="inline-flex w-full justify-center rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-slate-950 transition hover:bg-amber-100 sm:w-auto"
            >
              Explore schools, sports, and family life
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-emerald-100 via-amber-50 to-sky-100">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
              Want Sterling, but do not see your perfect home yet?
            </h2>
          </div>

          <div className="space-y-5 text-lg leading-8 text-slate-700">
            <p>
              Start with local realtors, builders, and suppliers. Sterling’s reported
              home values showed 22.4% year-over-year growth, but the entry point can
              still be far lower than larger family markets.
            </p>
            <p>
              Buy what fits, build what you want, rent while you settle, or help create
              the housing Sterling needs next.
            </p>
            <Link
              href="/housing-growth"
              className="inline-flex w-full justify-center rounded-full bg-slate-950 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-slate-800 sm:w-auto"
            >
              Explore Housing & Growth
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
              New here? You do not have to figure it out alone.
            </h2>
          </div>

          <div className="space-y-5 text-lg leading-8 text-slate-700">
            <p>
              Looking for swim lessons, youth sports, Rotary, volunteer opportunities,
              churches, 5th Quarter, school events, Sterling College events, Golden
              Ticket, housing, or local resources? Connect Sterling helps point you in
              the right direction.
            </p>
            <p>
              Adults who relocate through Connect Sterling receive two Golden Tickets
              to help kickstart community connection.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/ask-connect-sterling#ask-form"
                className="rounded-full bg-slate-950 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Ask Connect Sterling
              </Link>
              <Link
                href="https://www.sterlinggoldenticket.com"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-slate-300 bg-white px-6 py-3 text-center text-sm font-semibold text-slate-950 transition hover:bg-stone-100"
              >
                Learn About Golden Ticket
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
