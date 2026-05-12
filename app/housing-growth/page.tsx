import Link from "next/link";
import InquiryForm from "@/components/InquiryForm";

const marketStats = [
  {
    value: "$217K",
    label: "Sterling median home price",
    detail:
      "Realtor.com reported Sterling’s median home price at $217,450 in October 2025.",
  },
  {
    value: "+22.4%",
    label: "Sterling 1-year price growth",
    detail:
      "A strong signal that more people are seeing the value of living and investing here.",
  },
  {
    value: "$482K",
    label: "Overland Park typical value",
    detail:
      "A nearby metro-suburb comparison point with a much higher entry cost.",
  },
  {
    value: "$540K",
    label: "Denver typical value",
    detail:
      "A larger-market comparison point that shows how accessible Sterling can still be.",
  },
];

const housingPaths = [
  {
    title: "Buy in Sterling",
    color: "from-emerald-700 to-teal-900",
    description:
      "Looking for a home in Sterling? Start with people who know the local market. Homes may not sit long when families are choosing Sterling for schools, community, and a better daily rhythm.",
    proof:
      "Sterling’s reported median home price was $217,450 with 22.4% year-over-year growth. That combination of accessible entry point and appreciation is the story.",
    resources: [
      {
        label: "Timber Oaks Realty",
        note:
          "Sterling-based real estate office listed publicly with local Rice County roots.",
        href: "https://timberoaksrealty.com/",
      },
      {
        label: "Homes.com Sterling agent list",
        note:
          "Public list of agents serving Sterling, including agents with Sterling sales history.",
        href: "https://www.homes.com/real-estate-agents/sterling-ks/",
      },
      {
        label: "Realtor.com Sterling agent list",
        note:
          "Another public starting point for agents serving the Sterling market.",
        href: "https://www.realtor.com/realestateagents/sterling_ks",
      },
    ],
  },
  {
    title: "Build your home",
    color: "from-amber-600 to-orange-800",
    description:
      "Don’t see your perfect home on the market? Connect with Sterling builders and suppliers to explore creating the home you actually want in a community you want to be part of.",
    proof:
      "Building can turn a move to Sterling into a long-term investment, especially in a town gaining attention from families, employers, and returners.",
    resources: [
      {
        label: "Hood Construction",
        note:
          "Sterling contractor offering residential and commercial new builds, additions, remodels, porches, decks, windows, doors, siding, and more.",
        href: "https://hoodconstructionks.com",
      },
      {
        label: "Home Lumber & Supply",
        note:
          "Sterling building supply resource on Broadway. Home Lumber offers materials, advice, and quotes for homeowners and professionals.",
        href: "https://homelumberandsupply.com/locations/sterling/",
      },
      {
        label: "City of Sterling",
        note:
          "Start here for city processes, utilities, and questions that may affect building.",
        href: "https://www.sterling-kansas.com/",
      },
    ],
  },
  {
    title: "Rent while you decide",
    color: "from-sky-700 to-indigo-900",
    description:
      "Not ready to buy or build yet? A rental or temporary landing spot can give your family time to settle in, learn the community, evaluate schools, and decide what comes next.",
    proof:
      "A softer landing can make Sterling possible before every long-term housing answer is solved.",
    resources: [
      {
        label: "Ask Connect Sterling",
        note:
          "Rental availability can be informal and change quickly. Use the housing form below and we’ll help point you toward the best current local contact.",
        href: "#housing-interest",
      },
    ],
  },
  {
    title: "Invest or develop",
    color: "from-purple-700 to-slate-950",
    description:
      "Sterling needs people who can help create what comes next. Builders, lenders, employers, landowners, and investors can all play a role in making room for future families and workers.",
    proof:
      "When a town has school strength, employer momentum, college energy, and 22.4% reported home-price growth, housing becomes more than a need. It becomes an opportunity.",
    resources: [
      {
        label: "Share development interest",
        note:
          "Use the housing form below if you want to explore building, developing, financing, or supporting new housing options in Sterling.",
        href: "#housing-interest",
      },
    ],
  },
];

const demandSignals = [
  {
    title: "Lower entry point",
    description:
      "Sterling’s reported median home price is still far below higher-cost family markets like Overland Park and Denver.",
  },
  {
    title: "22.4% reported growth",
    description:
      "The market is showing momentum. That matters for families buying a home and for builders considering new supply.",
  },
  {
    title: "School-driven demand",
    description:
      "Families choose towns where their kids can be known, challenged, involved, and surrounded by people who show up.",
  },
  {
    title: "Remote-work upside",
    description:
      "Remote workers can bring metro-level income into a lower-cost community without giving up meaningful work.",
  },
  {
    title: "Employer growth",
    description:
      "Growing local employers need workers, and workers need places to live.",
  },
  {
    title: "Returners and builders",
    description:
      "People who want to come home, build new, invest, or develop need a clearer path to act.",
  },
];

const audienceCards = [
  {
    title: "For families",
    color: "bg-emerald-700",
    description:
      "Sterling gives you a chance to buy into a growing community while still finding more margin than many larger family markets.",
  },
  {
    title: "For builders",
    color: "bg-amber-700",
    description:
      "If families want Sterling but cannot find the right home, new construction can help unlock the next wave of growth.",
  },
  {
    title: "For employers",
    color: "bg-sky-700",
    description:
      "Housing is workforce infrastructure. More places to live means more ability to recruit, relocate, and retain people.",
  },
];

export const metadata = {
  title: "Housing & Growth | Connect Sterling",
  description:
    "Sterling is growing. Explore buying, building, renting, investing, or developing housing in Sterling, Kansas.",
};

export default function HousingGrowthPage() {
  return (
    <main className="bg-stone-50 text-slate-950">
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950 via-slate-950 to-amber-900" />
        <div className="absolute inset-0 opacity-25 [background-image:radial-gradient(circle_at_20%_20%,rgba(251,191,36,0.55),transparent_28%),radial-gradient(circle_at_80%_10%,rgba(16,185,129,0.45),transparent_26%),radial-gradient(circle_at_60%_80%,rgba(56,189,248,0.35),transparent_30%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Get into Sterling while the opportunity still makes sense.
            </h1>
            <p className="mt-6 text-xl leading-8 text-slate-100">
              Sterling home values are showing real momentum, but the entry point can
              still be far lower than larger family markets.
            </p>
            <p className="mt-5 text-lg leading-8 text-slate-200">
              Buy an existing home, build the one you want, rent while you settle, or
              help create the next wave of housing. Sterling is growing, and housing is
              one of the clearest ways to be part of what comes next.
            </p>

            <div className="mt-10">
              <Link
                href="#housing-interest"
                className="rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-slate-950 shadow-sm transition hover:bg-amber-100"
              >
                Share Your Housing Interest
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <div className="mb-8 max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Lower entry point. Real appreciation signal.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              For families coming from larger markets, Sterling can offer more margin.
              For builders and investors, the 22.4% reported growth number shows why
              this is worth paying attention to now.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-4">
            {marketStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[2rem] bg-gradient-to-br from-amber-50 to-emerald-50 p-6 ring-1 ring-stone-200"
              >
                <p className="text-4xl font-bold tracking-tight text-slate-950">
                  {stat.value}
                </p>
                <p className="mt-2 font-semibold text-slate-950">{stat.label}</p>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {stat.detail}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-5 text-xs leading-5 text-slate-500">
            Source notes: Sterling data from Realtor.com October 2025 market summary.
            Overland Park and Denver comparison values from Zillow March 2026 market
            summaries. Confirm current data before paid promotion.
          </p>
        </div>
      </section>

      <section className="bg-gradient-to-r from-amber-100 via-orange-50 to-emerald-100">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Don’t wait for the perfect listing to appear.
            </h2>
          </div>

          <div className="space-y-5 text-lg leading-8 text-slate-700">
            <p>
              If the right home is available, great. Start with a local realtor. If it
              is not, Sterling still gives you options: build, rent while you settle,
              or explore whether your employer, builder, lender, or family can help
              create the right path.
            </p>
            <p>
              The goal is not to make housing feel hard. The goal is to help you get
              into the right conversation faster.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-stone-50">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Choose the housing path that fits your season.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              Buying, building, renting, and developing are different conversations.
              Start with the one that fits where you are right now.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {housingPaths.map((path) => (
              <article
                key={path.title}
                className="overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-stone-200"
              >
                <div className={`bg-gradient-to-br ${path.color} p-6 text-white`}>
                  <h3 className="text-3xl font-bold tracking-tight">
                    {path.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-white/90">
                    {path.description}
                  </p>
                </div>

                <div className="p-6">
                  <div className="rounded-2xl bg-amber-50 p-4 text-sm leading-6 text-slate-700 ring-1 ring-amber-100">
                    {path.proof}
                  </div>

                  <div className="mt-6 space-y-3">
                    {path.resources.map((resource) => {
                      const isExternal = resource.href.startsWith("http");

                      return (
                        <Link
                          key={resource.label}
                          href={resource.href}
                          target={isExternal ? "_blank" : undefined}
                          rel={isExternal ? "noreferrer" : undefined}
                          className="block rounded-2xl bg-stone-50 p-4 ring-1 ring-stone-200 transition hover:bg-white hover:shadow-sm"
                        >
                          <p className="font-bold text-slate-950">
                            {resource.label}
                          </p>
                          <p className="mt-2 text-sm leading-6 text-slate-600">
                            {resource.note}
                          </p>
                          <span className="mt-3 inline-flex text-sm font-semibold text-emerald-800">
                            Visit resource →
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              The housing story is bigger than listings.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              The more clearly Sterling understands who wants to live, work, build, or
              invest here, the better the community can plan for smart growth.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {demandSignals.map((signal) => (
              <div
                key={signal.title}
                className="rounded-[2rem] bg-white/10 p-6 ring-1 ring-white/10"
              >
                <h3 className="text-lg font-bold text-white">{signal.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {signal.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-emerald-100 via-amber-50 to-sky-100">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Better housing options help everyone.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {audienceCards.map((card) => (
              <div
                key={card.title}
                className="overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-stone-200"
              >
                <div className={`${card.color} h-3`} />
                <div className="p-7">
                  <h3 className="text-xl font-bold text-slate-950">
                    {card.title}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-slate-700">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="housing-interest" className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Tell us what kind of housing path you are exploring.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              Use this form if you are considering buying, building, renting,
              investing, developing, or helping create housing options in Sterling.
              The Connect Sterling inbox will help route your inquiry to the right
              local contact.
            </p>
          </div>

          <InquiryForm
            title="Housing Interest"
            description="Share what you are considering, and Connect Sterling will help point you toward the right local conversation."
            fields={[
              {
                name: "name",
                label: "Name",
                type: "text",
                required: true,
              },
              {
                name: "email",
                label: "Email",
                type: "email",
                required: true,
              },
              {
                name: "phone",
                label: "Phone",
                type: "tel",
                required: false,
              },
              {
                name: "currentLocation",
                label: "Current location",
                type: "text",
                required: false,
              },
              {
                name: "housingPath",
                label: "What housing path are you exploring?",
                type: "select",
                required: true,
                options: [
                  "Buy an existing home",
                  "Build a home",
                  "Find a rental",
                  "Temporary housing while we settle",
                  "Invest in housing",
                  "Develop housing",
                  "Builder or contractor inquiry",
                  "Landowner inquiry",
                  "Employer workforce housing",
                  "Something else",
                ],
              },
              {
                name: "timeline",
                label: "Timeline",
                type: "select",
                required: false,
                options: [
                  "Immediately",
                  "0-3 months",
                  "3-6 months",
                  "6-12 months",
                  "12+ months",
                  "Just exploring",
                ],
              },
              {
                name: "budgetRange",
                label: "Budget range, if known",
                type: "text",
                required: false,
              },
              {
                name: "bedroomsNeeded",
                label: "Bedrooms needed, if applicable",
                type: "text",
                required: false,
              },
              {
                name: "details",
                label: "Tell us what you are looking for",
                type: "textarea",
                required: true,
              },
            ]}
          />
        </div>
      </section>

      <section className="bg-gradient-to-r from-slate-950 via-emerald-950 to-amber-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Housing is one part of a bigger Sterling story.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-200">
              Before you decide, explore the schools, sports, community life, daily
              essentials, and connection points that make Sterling worth considering.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/move-here"
                className="rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-slate-950 transition hover:bg-amber-100"
              >
                Explore Moving Here
              </Link>
              <Link
                href="/the-sterling-story"
                className="rounded-full border border-white/30 bg-white/10 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/20"
              >
                Read The Sterling Story
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}