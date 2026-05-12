import Link from "next/link";

const resourceGroups = [
  {
    title: "Get settled faster.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
    description:
      "Moving comes with a dozen small questions: utilities, trash, internet, school enrollment, healthcare, childcare, and who to call first.",
    proof:
      "Start here if you are new, moving soon, or trying to help someone land well in Sterling.",
    href: "/ask-connect-sterling",
    cta: "Ask for newcomer help",
  },
  {
    title: "Find the right school path.",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80",
    description:
      "Sterling gives families an education path from Lil Cub Childcare to Sterling USD 376 to Sterling College.",
    proof:
      "Schools are one of the biggest reasons families choose Sterling.",
    href: "/education-family-life",
    cta: "Explore education",
  },
  {
    title: "Find everyday care.",
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1200&q=80",
    description:
      "Need clinic, pharmacy, dental, chiropractic, counseling, physical therapy, or wellness-related providers?",
    proof:
      "A small-town move works better when routine care is close enough for daily life.",
    href: "/ask-connect-sterling",
    cta: "Ask for healthcare contacts",
  },
  {
    title: "Explore housing options.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    description:
      "Buy in Sterling, build the home you want, rent while you settle, or explore housing investment in a growing community.",
    proof:
      "Sterling’s reported home values showed 22.4% year-over-year growth while still offering a lower entry point than many larger markets.",
    href: "/housing-growth",
    cta: "Explore housing",
  },
  {
    title: "Understand the local economy.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    description:
      "Sterling is not just a bedroom community. It has employers, agriculture, manufacturing, healthcare, education, Main Street businesses, and regional pull.",
    proof:
      "Sterling is described as a net importer of jobs, employing 73% more people than its population.",
    href: "/the-sterling-story",
    cta: "Read the Sterling story",
  },
  {
    title: "Plug into community life.",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80",
    description:
      "Looking for churches, civic groups, volunteer opportunities, school events, Sterling Rec, Sterling College events, or Golden Ticket?",
    proof:
      "The difference between living somewhere and belonging somewhere is often one introduction.",
    href: "/get-connected",
    cta: "Get connected",
  },
  {
    title: "Handle daily needs.",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80",
    description:
      "Find groceries, pharmacy, restaurants, local services, Main Street businesses, and practical daily-life starting points.",
    proof:
      "Sterling’s strength is not pretending to be a city. It is making daily life work at a better pace.",
    href: "/ask-connect-sterling",
    cta: "Ask for local recommendations",
  },
  {
    title: "Check utilities and internet.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
    description:
      "Need city services, utilities, trash, or internet? Sterling has multiple internet providers, including Cox, Brightspeed, and MTC.",
    proof:
      "Internet availability and speeds vary by address, so verify service before choosing a home.",
    href: "/ask-connect-sterling",
    cta: "Ask about setup",
  },
  {
    title: "Find recreation and outdoor life.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    description:
      "Explore Sterling Lake, parks, trails, golf, school activities, Sterling Rec, college athletics, youth sports, and nearby rural space.",
    proof:
      "For many families, the win is a normal evening with time and space to breathe.",
    href: "/get-connected",
    cta: "Find recreation options",
  },
];

const directLinks = [
  {
    label: "Sterling Recreation Commission",
    href: "https://sterlingrec.org/",
    note: "Youth sports, recreation programs, wellness, leagues, and activities.",
  },
  {
    label: "Sterling Chamber Main Street",
    href: "https://www.visitsterlingks.com/",
    note: "Business resources, Main Street, events, and community connections.",
  },
  {
    label: "USD 376",
    href: "https://www.usd376.com/",
    note: "Schools, enrollment, athletics, activities, calendars, and district information.",
  },
  {
    label: "Sterling College",
    href: "https://www.sterling.edu/",
    note: "College events, athletics, theatre, music, academics, and campus life.",
  },
  {
    label: "City of Sterling",
    href: "https://www.sterling-kansas.com/",
    note: "City services, local government, pool, utilities, and civic information.",
  },
  {
    label: "Golden Ticket",
    href: "https://www.sterlinggoldenticket.com",
    note: "Adult community connection and newcomer social invitations.",
  },
];

export const metadata = {
  title: "Resources | Connect Sterling",
  description:
    "Find Sterling, Kansas resources for moving, housing, schools, healthcare, utilities, internet, recreation, work, and community connection.",
};

export default function ResourcesPage() {
  return (
    <main className="bg-stone-50 text-slate-950">
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1800&q=80"
            alt="Community gathering"
            className="h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/95 via-emerald-950/75 to-amber-900/70" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
              Find what you need without guessing who to ask.
            </h1>
            <p className="mt-6 text-xl leading-8 text-slate-100">
              Sterling has a lot of good people and organizations doing the work. This
              page helps you find the right starting point faster.
            </p>
            <p className="mt-5 text-lg leading-8 text-slate-200">
              Schools, housing, healthcare, utilities, internet, recreation, business,
              community life, or a simple “who should I call?” question can all start
              here.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/ask-connect-sterling"
                className="rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-slate-950 shadow-sm transition hover:bg-amber-100"
              >
                Ask Connect Sterling
              </Link>
              <Link
                href="/community-calendar"
                className="rounded-full border border-white/30 bg-white/10 px-6 py-3 text-center text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
              >
                Find calendars
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-amber-100 via-orange-50 to-emerald-100">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
              Start with what you are trying to do.
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-8 text-slate-700">
            <p>
              A stale directory does not help much. You need a practical path. If a
              link gets you there, use it. If you are not sure who owns the answer,
              ask Connect Sterling and we will help point you toward the right local
              contact.
            </p>
            <p>
              The goal is simple: fewer dead ends, faster introductions, and better
              confidence for people trying to live, work, build, and belong in Sterling.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-stone-50">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
              What do you need help finding?
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              Pick the doorway that matches your question. Each one either sends you
              to the right page or helps you ask for a local connection.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {resourceGroups.map((group) => {
              const isExternal = group.href.startsWith("http");

              return (
                <Link
                  key={group.title}
                  href={group.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noreferrer" : undefined}
                  className="group overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-stone-200 transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={group.image}
                      alt=""
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/10 to-transparent" />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-950 group-hover:text-amber-800">
                      {group.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-slate-700">
                      {group.description}
                    </p>
                    <div className="mt-5 rounded-2xl bg-amber-50 p-4 text-sm leading-6 text-slate-700 ring-1 ring-amber-100">
                      {group.proof}
                    </div>
                    <span className="mt-5 inline-flex text-sm font-semibold text-emerald-800">
                      {group.cta} →
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
              Reliable places to start.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              These organizations maintain key information for Sterling. Event details,
              program information, and service updates are best confirmed directly with
              the organization that owns them.
            </p>
          </div>

          <div className="grid gap-4">
            {directLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="group rounded-[2rem] bg-stone-50 p-6 shadow-sm ring-1 ring-stone-200 transition hover:-translate-y-1 hover:shadow-md"
              >
                <h3 className="text-lg font-bold text-slate-950 group-hover:text-amber-800">
                  {link.label}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{link.note}</p>
                <span className="mt-4 inline-flex text-sm font-semibold text-emerald-800">
                  Visit site →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1800&q=80"
            alt=""
            className="h-full w-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-950/85 to-emerald-950/80" />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
              Still not sure where to start?
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-8 text-slate-200">
            <p>
              You do not need to know which organization owns the answer. Tell Connect
              Sterling what you are looking for, and we will help route your question
              to the right local contact.
            </p>
            <Link
              href="/ask-connect-sterling"
              className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-100"
            >
              Ask Connect Sterling
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}