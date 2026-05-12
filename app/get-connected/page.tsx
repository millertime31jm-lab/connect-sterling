import Link from "next/link";

const connectionCards = [
  {
    title: "Sign your kids up for sports or activities.",
    image:
      "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?auto=format&fit=crop&w=1200&q=80",
    description:
      "Sterling Rec is one of the easiest ways for families to plug in. Youth leagues, activities, wellness programs, and community recreation help kids and adults find familiar faces faster.",
    proof:
      "Start here for classes, leagues, recreation programs, and seasonal activities.",
    href: "https://sterlingrec.org/",
    cta: "Visit Sterling Rec",
  },
  {
    title: "Find swim lessons and pool information.",
    image:
      "https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=1200&q=80",
    description:
      "Summer in Sterling has a rhythm of pool days, swim lessons, and kids seeing friends outside of school.",
    proof:
      "The Sterling Municipal Pool page points families to Sterling Rec for swim lesson information.",
    href: "https://www.sterling-kansas.com/266/Municipal-Swimming-Pool",
    cta: "See pool information",
  },
  {
    title: "See what’s happening around town.",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80",
    description:
      "Main Street events, holiday traditions, markets, Warrior Fest, school events, and local gatherings help people move from living near each other to actually knowing each other.",
    proof:
      "Use the Chamber calendar as a starting point for public community events.",
    href: "https://www.visitsterlingks.com/calendar/",
    cta: "View community calendar",
  },
  {
    title: "Explore downtown and Main Street.",
    image:
      "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1200&q=80",
    description:
      "Broadway Avenue is part of Sterling’s front porch: local shops, coffee, events, public art, historic buildings, and the kind of downtown people hope still exists.",
    proof:
      "Sterling Chamber Main Street is a strong first stop for downtown, events, business, and community life.",
    href: "https://www.visitsterlingks.com/",
    cta: "Explore Chamber Main Street",
  },
  {
    title: "Find Sterling College events.",
    image:
      "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1200&q=80",
    description:
      "Sterling College adds athletics, music, theatre, speakers, students, service, and campus activity that spills into community life.",
    proof:
      "College-town energy gives Sterling more events and more cultural activity than many towns its size.",
    href: "https://www.sterling.edu/",
    cta: "Visit Sterling College",
  },
  {
    title: "Follow school activities and games.",
    image:
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=80",
    description:
      "School activities are not just for students. Games, concerts, plays, activities, and celebrations become part of the town’s shared rhythm.",
    proof:
      "Start with USD 376 for school information, calendars, athletics, enrollment, and student life.",
    href: "https://www.usd376.com/",
    cta: "Visit USD 376",
  },
  {
    title: "Find a church or faith community.",
    image:
      "https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&w=1200&q=80",
    description:
      "Churches are part of Sterling’s connective tissue. They support worship, youth activities, meals, service opportunities, and informal care networks.",
    proof:
      "If you are looking for a church home or youth activity, Connect Sterling can help point you toward local contacts.",
    href: "/ask-connect-sterling",
    cta: "Ask for church connections",
  },
  {
    title: "Ask about 5th Quarter or youth activities.",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80",
    description:
      "After big school events, students need safe places to gather. Programs like 5th Quarter give high school students food, games, and time together at no cost.",
    proof:
      "Local churches help create safe, community-supported spaces for teens.",
    href: "/ask-connect-sterling",
    cta: "Ask about youth activities",
  },
  {
    title: "Find a place to volunteer.",
    image:
      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1200&q=80",
    description:
      "Small towns work best when people participate. Sterling has opportunities to serve through schools, churches, civic groups, events, boards, youth programs, and downtown efforts.",
    proof:
      "If you want to use your gifts here, start with the Chamber or ask Connect Sterling where help is needed.",
    href: "https://www.visitsterlingks.com/",
    cta: "Start with the Chamber",
  },
  {
    title: "Use your Golden Tickets.",
    image:
      "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1200&q=80",
    description:
      "Adults who relocate through Connect Sterling receive two Golden Tickets to help kickstart community connection.",
    proof:
      "It is a fun first doorway into adult social life, local experiences, and meeting people.",
    href: "https://www.sterlinggoldenticket.com",
    cta: "Learn about Golden Ticket",
  },
  {
    title: "Get help with the basics.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
    description:
      "Moving comes with small questions: utilities, school enrollment, internet, trash, healthcare, childcare, activities, and who to call first.",
    proof:
      "You do not need to know which organization owns the answer. Ask and we’ll help route you.",
    href: "/ask-connect-sterling",
    cta: "Ask Connect Sterling",
  },
];

export const metadata = {
  title: "Get Connected | Connect Sterling",
  description:
    "Find youth activities, community events, Sterling Rec, school events, churches, volunteer opportunities, Golden Ticket, and newcomer resources in Sterling, Kansas.",
};

export default function GetConnectedPage() {
  return (
    <main className="bg-stone-50 text-slate-950">
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1800&q=80"
            alt="People gathered around a table enjoying community"
            className="h-full w-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/95 via-emerald-950/75 to-amber-900/70" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
              New here? Start with one doorway into the community.
            </h1>
            <p className="mt-6 text-xl leading-8 text-slate-100">
              You do not have to know every calendar, coach, church, board, program,
              or local contact on day one. Start with what you need, and Connect
              Sterling will help point you in the right direction.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/ask-connect-sterling"
                className="rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-slate-950 shadow-sm transition hover:bg-amber-100"
              >
                Tell us what you need
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
              Belonging usually starts with one invitation.
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-8 text-slate-700">
            <p>
              Most towns have activities. The hard part is knowing where to start,
              who to ask, what calendar to check, and which doorway fits your family.
            </p>
            <p>
              Sterling’s strength is not just that there are things to do. It is that
              people still show up. Kids see familiar faces. Parents meet other parents.
              Adults find ways to serve. New residents can move from unknown to known.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-stone-50">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
              What are you trying to find?
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              Start with the question you already have. Sports, swim lessons, school
              events, churches, volunteering, college events, Golden Ticket, city
              resources, or just “who do I ask?”
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {connectionCards.map((card) => {
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
                        alt=""
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/10 to-transparent" />
                    </div>

                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="text-xl font-bold text-slate-950 group-hover:text-amber-800">
                        {card.title}
                      </h3>
                      <p className="mt-4 text-sm leading-6 text-slate-700">
                        {card.description}
                      </p>
                      <div className="mt-5 rounded-2xl bg-amber-50 p-4 text-sm leading-6 text-slate-700 ring-1 ring-amber-100">
                        {card.proof}
                      </div>
                      <span className="mt-6 inline-flex text-sm font-semibold text-emerald-800">
                        {card.cta} →
                      </span>
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>
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
              The goal is not just to move in. The goal is to plug in.
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-8 text-slate-200">
            <p>
              A family can technically live somewhere and still feel disconnected.
              Connect Sterling exists because the difference between “we moved here”
              and “this feels like home” is often a handful of introductions.
            </p>
            <p>
              That might mean a coach, a church, a school activity, a Rec program, a
              Chamber event, a volunteer role, a Golden Ticket night, or another family
              who says, “Come sit with us.”
            </p>
            <Link
              href="/ask-connect-sterling"
              className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-100"
            >
              Ask for a connection
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}