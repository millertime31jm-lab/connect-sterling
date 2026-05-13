import Link from "next/link";

const calendarLinks = [
  {
    title: "Find public community events.",
    image: "/images/sterling/events/sterling-events-mainstreet-market.jpg",
    description:
      "Start here for Main Street events, seasonal traditions, local business gatherings, markets, and town-wide celebrations.",
    proof:
      "The Chamber calendar is one of the best starting points for seeing Sterling's public event rhythm.",
    href: "https://www.visitsterlingks.com/calendar/",
    cta: "View Chamber calendar",
  },
  {
    title: "District Events",
    image: "/images/sterling/schools/sterling-schools-band-choir.jpg",
    description:
      "Use the district calendar for broad public-school meetings, district-wide notices, and events that affect families across Sterling schools.",
    proof:
      "This is the best starting point when you want the district-level calendar, not just one building or one type of event.",
    href: "https://www.usd376.com/events?section_ids=69308&view=cal-month",
    cta: "View district events",
  },
  {
    title: "HS & JH Events",
    image: "/images/sterling/schools/sterling-schools-high-school-class.jpg",
    description:
      "Use this calendar for high school and junior high performances, activities, and school events beyond athletics.",
    proof:
      "This is one of the most practical pages for families trying to track the rhythm of student life week to week.",
    href: "https://www.usd376.com/events?section_ids=189708&view=cal-month",
    cta: "View HS & JH events",
  },
  {
    title: "Grade School Events",
    image: "/images/sterling/schools/sterling-schools-grade-school-1.jpg",
    description:
      "Use the grade school calendar for elementary events, performances, classroom celebrations, and school-family dates.",
    proof:
      "For younger families, this is the cleanest place to see what grade school life actually looks like on the calendar.",
    href: "https://www.usd376.com/events?section_ids=189707&view=cal-month",
    cta: "View grade school events",
  },
  {
    title: "High School & Junior High Athletics",
    image: "/images/sterling/sports/sterling-sports-football.JPG",
    description:
      "Use this athletics calendar for Black Bear and Bear Cub games, meets, and competition dates.",
    proof:
      "If you are trying to track game nights, this is the most direct public link for high school and junior high athletics.",
    href: "https://www.usd376.com/events?section_ids=189709&view=cal-month",
    cta: "View athletics calendar",
  },
  {
    title: "Sign up through Sterling Rec.",
    image: "/images/sterling/community/sterling-community-play.jpg",
    description:
      "Sterling Rec helps families find youth sports, recreation programs, wellness opportunities, leagues, classes, and seasonal activities.",
    proof:
      "For new families, Rec programs are often where kids make friends and parents meet other parents.",
    href: "https://sterlingrec.org/",
    cta: "Visit Sterling Rec",
  },
  {
    title: "See what's happening at Sterling College.",
    image: "/images/sterling/college/sterling-college-speaking-event.jpg",
    description:
      "Sterling College brings athletics, theatre, music, speakers, student activities, and campus life into the broader community.",
    proof:
      "College activity gives Sterling more cultural energy than many towns its size.",
    href: "https://www.sterling.edu/",
    cta: "Visit Sterling College",
  },
  {
    title: "Follow Warrior athletics.",
    image: "/images/sterling/college/sterling-college-warriorfest.jpg",
    description:
      "College athletics add another layer of game-day energy, student life, and weekend activity for local families.",
    proof:
      "Families get access to both high school and college sports culture in the same small town.",
    href: "https://www.sterlingwarriors.com/",
    cta: "View Warrior athletics",
  },
  {
    title: "Check city information.",
    image: "/images/sterling/downtown/sterling-downtown-christmas.jpg",
    description:
      "Find city services, civic updates, pool information, public meetings, and local government resources.",
    proof:
      "The practical side of belonging starts with knowing where to find city information.",
    href: "https://www.sterling-kansas.com/",
    cta: "Visit city website",
  },
  {
    title: "Find library programs.",
    image:
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80",
    description:
      "Libraries are quiet anchors of family life: books, programs, kids' activities, learning, and community gathering.",
    proof:
      "For young families and lifelong learners, the library can become a regular connection point.",
    href: "https://www.sterling-kansas.com/214/Public-Library",
    cta: "Find library info",
  },
  {
    title: "Ask about church and youth activities.",
    image: "/images/sterling/community/sterling-community-smore-church.jpg",
    description:
      "Churches help host worship, youth activities, meals, service opportunities, small groups, and community support.",
    proof:
      "Programs like 5th Quarter help give students safe places to gather after big school events.",
    href: "/ask-connect-sterling#ask-form",
    cta: "Ask for church connections",
  },
  {
    title: "Use your Golden Tickets.",
    image: "/images/sterling/events/sterling-events-golden-ticket.jpg",
    description:
      "Golden Ticket gives adults a fun way to meet people, support local experiences, and build community.",
    proof:
      "Adults who relocate through Connect Sterling receive two Golden Tickets to help kickstart connection.",
    href: "https://www.sterlinggoldenticket.com",
    cta: "Learn about Golden Ticket",
  },
];

const eventTypes = [
  "District events",
  "Grade school events",
  "HS & JH events",
  "HS & JH athletics",
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
            src="/images/sterling/events/sterling-events-mainstreet-market.jpg"
            alt="People gathered at a Sterling Main Street event"
            className="h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/95 via-emerald-950/75 to-amber-900/70" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:py-32">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Find what&apos;s happening in Sterling.
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-100 sm:text-xl">
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
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.85fr_1.15fr]">
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
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
              The town has more rhythm than one calendar can capture.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              School games, Chamber events, Rec activities, college athletics, church
              youth nights, library programs, city meetings, and Golden Ticket
              gatherings all become part of how people move from &ldquo;new here&rdquo; to
              &ldquo;known here.&rdquo;
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
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
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
                  className="group flex h-full overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-stone-200 transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <article className="flex h-full w-full flex-col">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/10 to-transparent" />
                    </div>

                    <div className="flex flex-1 flex-col p-6">
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
                  </article>
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
            src="/images/sterling/events/sterling-events-outdoor-concert.jpg"
            alt="Sterling residents enjoying an outdoor event"
            className="h-full w-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-950/85 to-emerald-950/80" />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[0.85fr_1.15fr]">
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
              href="/ask-connect-sterling#ask-form"
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
