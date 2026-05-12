import Link from "next/link";

const calendarLinks = [
  {
    title: "Find public community events.",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80",
    description:
      "Start here for Main Street events, seasonal traditions, local business gatherings, markets, and town-wide celebrations.",
    proof:
      "The Chamber calendar is one of the best starting points for seeing Sterling’s public event rhythm.",
    href: "https://www.visitsterlingks.com/calendar/",
    cta: "View Chamber calendar",
  },
  {
    title: "Follow school events.",
    image:
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=80",
    description:
      "Games, concerts, plays, activities, meetings, and student celebrations are part of Sterling’s community rhythm.",
    proof:
      "For families, the school calendar is one of the fastest ways to understand what Sterling feels like week to week.",
    href: "https://www.usd376.com/",
    cta: "Visit USD 376",
  },
  {
    title: "Catch a Black Bear game.",
    image:
      "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1200&q=80",
    description:
      "Sports are central to Sterling’s culture. Game nights bring students, parents, alumni, grandparents, and neighbors together.",
    proof:
      "Sterling has a championship tradition across multiple sports, and athletics are one of the easiest ways for families to plug in.",
    href: "https://www.usd376.com/o/usd-376/page/athletics",
    cta: "View Black Bear athletics",
  },
  {
    title: "Sign up through Sterling Rec.",
    image:
      "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?auto=format&fit=crop&w=1200&q=80",
    description:
      "Sterling Rec helps families find youth sports, recreation programs, wellness opportunities, leagues, classes, and seasonal activities.",
    proof:
      "For new families, Rec programs are often where kids make friends and parents meet other parents.",
    href: "https://sterlingrec.org/",
    cta: "Visit Sterling Rec",
  },
  {
    title: "See what’s happening at Sterling College.",
    image:
      "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1200&q=80",
    description:
      "Sterling College brings athletics, theatre, music, speakers, student activities, and campus life into the broader community.",
    proof:
      "College activity gives Sterling more cultural energy than many towns its size.",
    href: "https://www.sterling.edu/",
    cta: "Visit Sterling College",
  },
  {
    title: "Follow Warrior athletics.",
    image:
      "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=1200&q=80",
    description:
      "College athletics add another layer of game-day energy, student life, and weekend activity for local families.",
    proof:
      "Families get access to both high school and college sports culture in the same small town.",
    href: "https://www.sterlingwarriors.com/",
    cta: "View Warrior athletics",
  },
  {
    title: "Check city information.",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
    description:
      "Find city services, civic updates, pool information, public meetings, and local government resources.",
    proof:
      "The practical side of belonging starts with knowing where to find city information.",
    href: "https://www.sterling-kansas.com/",
    cta: "Visit City website",
  },
  {
    title: "Find library programs.",
    image:
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80",
    description:
      "Libraries are quiet anchors of family life: books, programs, kids’ activities, learning, and community gathering.",
    proof:
      "For young families and lifelong learners, the library can become a regular connection point.",
    href: "https://www.sterling-kansas.com/214/Public-Library",
    cta: "Find library info",
  },
  {
    title: "Ask about church and youth activities.",
    image:
      "https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&w=1200&q=80",
    description:
      "Churches help host worship, youth activities, meals, service opportunities, small groups, and community support.",
    proof:
      "Programs like 5th Quarter help give students safe places to gather after big school events.",
    href: "/ask-connect-sterling",
    cta: "Ask for church connections",
  },
  {
    title: "Use your Golden Tickets.",
    image:
      "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1200&q=80",
    description:
      "Golden Ticket gives adults a fun way to meet people, support local experiences, and build community.",
    proof:
      "Adults who relocate through Connect Sterling receive two Golden Tickets to help kickstart connection.",
    href: "https://www.sterlinggoldenticket.com",
    cta: "Learn about Golden Ticket",
  },
];

const eventTypes = [
  "School games and performances",
  "Youth sports and recreation",
  "Main Street events",
  "Sterling College athletics",
  "Church and youth activities",
  "City meetings and civic updates",
  "Library programs",
  "Golden Ticket gatherings",
];

export const metadata = {
  title: "Community Calendar Hub | Connect Sterling",
  description:
    "Find Sterling, Kansas event calendars for schools, athletics, Sterling Rec, Chamber Main Street, Sterling College, city events, library programs, churches, and Golden Ticket.",
};

export default function CommunityCalendarPage() {
  return (
    <main className="bg-stone-50 text-slate-950">
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1800&q=80"
            alt="Community event gathering"
            className="h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/95 via-emerald-950/75 to-amber-900/70" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
              Find what’s happening in Sterling.
            </h1>
            <p className="mt-6 text-xl leading-8 text-slate-100">
              You do not need to follow every organization on day one. Start here and
              find the calendars that match what your family is looking for.
            </p>
            <p className="mt-5 text-lg leading-8 text-slate-200">
              School events, sports, Sterling Rec, Chamber events, Sterling College,
              church activities, library programs, city information, and Golden Ticket
              all have a place in the rhythm of Sterling.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/get-connected"
                className="rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-slate-950 shadow-sm transition hover:bg-amber-100"
              >
                Get Connected
              </Link>
              <Link
                href="/ask-connect-sterling"
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
              A connected town still needs a good map.
            </h2>
          </div>

          <div className="space-y-5 text-lg leading-8 text-slate-700">
            <p>
              Most communities have more going on than newcomers realize. The challenge
              is knowing where to look, which calendar is current, and who owns the
              details.
            </p>
            <p>
              This page points you to the organizations that maintain event information.
              If you are not sure where to start, ask Connect Sterling and we will help
              route you.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
              The town has more rhythm than one calendar can capture.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              School games, Chamber events, Rec activities, college athletics, church
              youth nights, library programs, city meetings, and Golden Ticket
              gatherings all become part of how people move from “new here” to
              “known here.”
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {eventTypes.map((type) => (
              <div
                key={type}
                className="rounded-2xl bg-gradient-to-br from-stone-50 to-amber-50 p-5 font-semibold text-slate-900 shadow-sm ring-1 ring-stone-200"
              >
                {type}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-stone-200 bg-stone-50">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
              Go to the source that owns the details.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              Event times, locations, cancellations, signups, and details are maintained
              by each organization. These links are meant to get you to the right place
              quickly.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {calendarLinks.map((card) => {
              const isExternal = card.href.startsWith("http");

              return (
                <Link
                  key={card.title}
                  href={card.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noreferrer" : undefined}
                  className="group overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-stone-200 transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={card.image}
                      alt=""
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/10 to-transparent" />
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
              );
            })}
          </div>

          <p className="mt-6 text-sm leading-6 text-slate-500">
            Event details are maintained by the organization hosting the event. Connect
            Sterling may route people to calendars, but does not guarantee the accuracy
            of third-party event listings.
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1800&q=80"
            alt=""
            className="h-full w-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-950/85 to-emerald-950/80" />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
              Not sure which calendar to check?
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-8 text-slate-200">
            <p>
              Tell us what kind of event, activity, or group you are trying to find.
              We can help point you toward the right organization, coach, school
              contact, church, Rec program, or community group.
            </p>
            <Link
              href="/ask-connect-sterling"
              className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-100"
            >
              Ask for help finding an event
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}