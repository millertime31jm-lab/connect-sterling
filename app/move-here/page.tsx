import Link from "next/link";

const essentials = [
  {
    title: "Your kids can grow here.",
    image: "/images/sterling/schools/sterling-schools-grade-school-1.jpg",
    description:
      "Sterling gives families a full education path from Lil Cub Childcare to Sterling USD 376 to Sterling College.",
    proof:
      "Strong schools, championship culture, student activities, and a community that shows up give kids room to be known and involved.",
    href: "/education-family-life",
    cta: "Explore schools and family life",
  },
  {
    title: "You can work from here.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
    description:
      "Remote work only works if the internet works. Sterling has multiple internet providers, including Cox, Brightspeed, and MTC.",
    proof:
      "Availability and speeds vary by address, so verify service before choosing a specific home.",
    href: "/ask-connect-sterling#ask-form",
    cta: "Ask about internet options",
  },
  {
    title: "You can handle daily life here.",
    image: "/images/sterling/downtown/sterling-downtown-mural-1.jpg",
    description:
      "Sterling has the basics families ask about first: groceries, pharmacy, restaurants, local services, schools, churches, and Main Street businesses.",
    proof:
      "The goal is not to give up everything convenient. It is to live at a better pace while still having the essentials close.",
    href: "/resources",
    cta: "Explore local resources",
  },
  {
    title: "You can get care close to home.",
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1200&q=80",
    description:
      "A small-town move needs practical confidence. Sterling has local access to everyday healthcare and wellness providers, with broader regional care available when needed.",
    proof:
      "Connect Sterling can help point you toward clinic, pharmacy, dental, chiropractic, counseling, physical therapy, and wellness-related providers.",
    href: "/resources",
    cta: "Find healthcare resources",
  },
  {
    title: "Your family can get outside.",
    image: "/images/sterling/outdoors/sterling-outdoors-sterling-lake.jpg",
    description:
      "Sterling Lake, parks, trails, golf, youth sports, school activities, college athletics, and nearby rural space give families room to move.",
    proof:
      "For many families, the win is not a once-a-year vacation. It is a normal evening with time and space to breathe.",
    href: "/get-connected",
    cta: "Find recreation options",
  },
  {
    title: "You are not cut off.",
    image: "/images/sterling/hero/sterling-hero-downtown-arial.jpg",
    description:
      "Sterling gives you a small-town daily rhythm with broader regional access for larger shopping trips, specialized care, air travel, restaurants, and bigger-city amenities.",
    proof:
      "Sterling does not have to be everything. Daily life can work here, and the region expands your options.",
    href: "/resources",
    cta: "Explore regional resources",
  },
];

const moveQuestions = [
  {
    question: "Will my kids have enough opportunities?",
    answer:
      "Sterling gives students room to participate across academics, athletics, fine arts, forensics, debate, leadership, and service. They can be known and still be challenged.",
  },
  {
    question: "Can we actually work from Sterling?",
    answer:
      "Many families can, especially remote workers. The key is confirming internet availability and speed by address before you choose a home.",
  },
  {
    question: "Will we feel isolated?",
    answer:
      "You will still need to show up, but Sterling gives you plenty of doors to walk through: school events, Sterling Rec, churches, Main Street events, Sterling College, Golden Ticket, and volunteer opportunities.",
  },
  {
    question: "Can we find a home?",
    answer:
      "Start early. Watch the market, talk with local realtors, consider building, and use Connect Sterling if you need help finding the right local contact.",
  },
];

const lifeGains = [
  "More family dinners",
  "Less time in traffic",
  "A school where your kids can be known",
  "Sports and activities that create community",
  "A home with more margin",
  "More room outside",
  "A chance to serve and belong",
  "A better daily rhythm",
];

const nextSteps = [
  {
    title: "See the school and family story",
    image: "/images/sterling/schools/sterling-schools-grade-school-ididaprob.jpg",
    description:
      "Schools are one of the biggest reasons families choose Sterling. See what that could mean for your kids.",
    href: "/education-family-life",
    cta: "Explore education",
  },
  {
    title: "Look at housing options",
    image: "/images/sterling/housing/sterling-housing-all-american-house.jpg",
    description:
      "Buy, build, rent while you settle, or explore housing investment in a growing community.",
    href: "/housing-growth",
    cta: "Explore housing",
  },
  {
    title: "Ask a real local question",
    image: "/images/sterling/community/sterling-community-play.jpg",
    description:
      "Tell Connect Sterling what you are trying to figure out and we’ll help point you toward the right local contact.",
    href: "/ask-connect-sterling#ask-form",
    cta: "Ask Connect Sterling",
  },
];

export const metadata = {
  title: "Move Here | Connect Sterling",
  description:
    "Explore moving to Sterling, Kansas: strong schools, everyday essentials, housing pathways, remote work options, and community connection.",
};

export default function MoveHerePage() {
  return (
    <main className="bg-stone-50 text-slate-950">
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0">
          <img
            src="/images/sterling/hero/sterling-hero-downtown-arial.jpg"
            alt="Aerial view of Sterling showing downtown and surrounding neighborhoods"
            className="h-full w-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/95 via-emerald-950/75 to-amber-900/70" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:py-32">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              A move should give your family something back.
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-100 sm:text-xl">
              If you are considering Sterling, you are probably not just looking for a
              different address. You are looking for more margin, stronger schools,
              a better rhythm, and a place where your family can belong.
            </p>
            <p className="mt-5 text-lg leading-8 text-slate-200">
              Sterling will not be the right fit for everyone. But for the right
              family, it can offer a rare combination: strong schools, daily essentials,
              local opportunity, and small-town connection.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/education-family-life"
                className="rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-slate-950 shadow-sm transition hover:bg-amber-100"
              >
                Start with schools
              </Link>
              <Link
                href="/housing-growth"
                className="rounded-full border border-white/30 bg-white/10 px-6 py-3 text-center text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
              >
                Explore housing
              </Link>
              <Link
                href="/ask-connect-sterling#ask-form"
                className="rounded-full border border-white/30 bg-white/10 px-6 py-3 text-center text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
              >
                Ask a question
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-amber-100 via-orange-50 to-emerald-100">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
              What do you want your normal week to feel like?
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              A move is not just about a house. It is about the life around the house:
              school drop-off, work, dinner, practices, church, groceries, healthcare,
              neighbors, weekends, and whether your family has room to breathe.
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

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
              Check the essentials before you make the move.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              A smaller community only works if the basics work. Sterling gives you
              real answers to the questions families ask first: schools, healthcare,
              groceries, internet, outdoor space, housing, and regional access.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {essentials.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group flex h-full overflow-hidden rounded-[2rem] bg-stone-50 shadow-sm ring-1 ring-stone-200 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <article className="flex h-full w-full flex-col">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/10 to-transparent" />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-bold text-slate-950 group-hover:text-amber-800">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-700">
                    {item.description}
                  </p>
                  <div className="mt-5 rounded-2xl bg-amber-50 p-4 text-sm leading-6 text-slate-700 ring-1 ring-amber-100">
                    {item.proof}
                  </div>
                  <span className="mt-5 inline-flex text-sm font-semibold text-emerald-800">
                    {item.cta} →
                  </span>
                </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
              Ask the questions that actually decide the move.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Do not make a relocation decision on vague small-town charm. Ask the
              practical questions early and get clear on whether Sterling fits your
              family.
            </p>
          </div>

          <div className="space-y-4">
            {moveQuestions.map((item) => (
              <div
                key={item.question}
                className="rounded-[2rem] bg-white/10 p-6 ring-1 ring-white/10"
              >
                <h3 className="text-lg font-bold text-white">{item.question}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-emerald-100 via-amber-50 to-sky-100">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
              Want Sterling, but do not see the perfect home yet?
            </h2>
          </div>

          <div className="space-y-5 text-lg leading-8 text-slate-700">
            <p>
              Start with local realtors. Talk with builders. Look at what is available,
              then consider what could be built. Sterling’s housing story is not just
              about today’s listings. It is about getting into a growing community
              thoughtfully.
            </p>
            <p>
              Sterling’s reported home values showed 22.4% year-over-year growth while
              still offering an entry point below many larger family markets.
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

      <section className="relative overflow-hidden bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
              Picture a weekday that does not feel like a race.
            </h2>
          </div>

          <div className="space-y-5 text-lg leading-8 text-slate-700">
            <p>
              School drop-off where people know your child. A workday that does not
              start and end with a long commute. A quick trip for groceries. A walk near
              the lake. A basketball game where the town shows up. A Friday night where
              your teenager has a safe place to be.
            </p>
            <p>
              That is the kind of ordinary life many families are trying to recover.
              Sterling’s story is not about perfection. It is about getting some of that
              life back.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-stone-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
              Start where your family needs the most clarity.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              You do not need every answer today. Start with the question that matters
              most, then follow the right path.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {nextSteps.map((step) => (
              <Link
                key={step.title}
                href={step.href}
                className="group flex h-full overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-stone-200 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <article className="flex h-full w-full flex-col">
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-bold text-slate-950 group-hover:text-amber-800">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-700">
                    {step.description}
                  </p>
                  <span className="mt-5 inline-flex text-sm font-semibold text-emerald-800">
                    {step.cta} →
                  </span>
                </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
