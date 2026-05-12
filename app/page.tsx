import Link from "next/link";
import Image from "next/image";
import {
  employers,
  essentials,
  goldenTicketUrl,
  housingPaths,
  jedMillerTestimonial,
  pathways,
} from "../data/content";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-50">
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <Image
          src="/photos/5.jpg"
          alt="Sterling community gathering outdoors"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/20" />
        <div className="relative mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl content-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-brand-300">
              Sterling, Kansas
            </p>
            <h1 className="mt-5 text-5xl font-black leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
              Trade the commute for community.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-100 sm:text-xl">
              Sterling, Kansas is a growing small town where families, remote workers, job seekers, and builders can find strong schools, real opportunity, everyday essentials, and a place to belong.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/move-here"
                className="rounded-lg bg-brand-300 px-6 py-3 text-center font-extrabold text-slate-950 shadow-sm transition hover:bg-white"
              >
                Explore Moving to Sterling
              </Link>
              <Link
                href="/get-connected"
                className="rounded-lg border border-white/40 bg-white/10 px-6 py-3 text-center font-extrabold text-white backdrop-blur transition hover:bg-white hover:text-slate-950"
              >
                Get Connected Locally
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-3 text-sm font-bold text-slate-200">
              <Link href="/education-family-life" className="rounded-full bg-white/10 px-4 py-2 hover:bg-white/20">
                Education & Family Life
              </Link>
              <Link href="/housing-growth" className="rounded-full bg-white/10 px-4 py-2 hover:bg-white/20">
                Housing & Growth
              </Link>
              <Link href="/work-here" className="rounded-full bg-white/10 px-4 py-2 hover:bg-white/20">
                Work in Sterling
              </Link>
            </div>
          </div>

          <div className="self-end rounded-lg border border-white/20 bg-white/10 p-6 shadow-2xl backdrop-blur">
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-brand-300">A practical first stop</p>
            <p className="mt-4 text-2xl font-black leading-tight">
              Tell us what you need, and we will point you to the right person.
            </p>
            <p className="mt-3 text-sm leading-6 text-slate-200">
              Moving questions, school questions, housing questions, employer connections, community groups, and local introductions can all start in one place.
            </p>
            <Link
              href="/ask-connect-sterling"
              className="mt-6 inline-flex rounded-lg bg-white px-5 py-3 text-sm font-extrabold text-slate-950 transition hover:bg-brand-100"
            >
              Ask Connect Sterling
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {pathways.map((pathway) => (
            <Link
              href={pathway.href}
              key={pathway.title}
              className="group rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-brand-700 hover:shadow-md"
            >
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-brand-700">{pathway.title}</p>
              <p className="mt-4 text-lg font-extrabold leading-6 text-slate-950">{pathway.description}</p>
              <span className="mt-6 inline-flex text-sm font-extrabold text-skyline group-hover:text-brand-900">
                Start here
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-brand-700">Daily life</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950">The essentials are here.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Small-town life works best when families have what they need close by. Sterling offers the daily-life essentials that make a move feel realistic: childcare, strong schools, higher education, healthcare, groceries, internet options, outdoor spaces, growing employers, and regional access when you need it.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {essentials.map((item) => (
              <article key={item.title} className="rounded-lg border border-slate-200 bg-brand-50 p-6">
                <h3 className="text-xl font-extrabold text-slate-950">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-brand-700">Education</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950">
              Schools are one of the biggest reasons families choose Sterling.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Kids can be known here. They can participate here. They can be challenged here. And the community still shows up.
            </p>
            <Link
              href="/education-family-life"
              className="mt-8 inline-flex rounded-lg bg-brand-700 px-6 py-3 font-extrabold text-white transition hover:bg-brand-900"
            >
              Explore Education & Family Life
            </Link>
          </div>
          <blockquote className="rounded-lg border border-brand-100 bg-white p-8 shadow-sm">
            <p className="text-2xl font-extrabold leading-9 text-slate-950">&quot;{jedMillerTestimonial}&quot;</p>
            <footer className="mt-6 text-sm font-bold text-slate-600">Jed Miller, local parent</footer>
          </blockquote>
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-brand-300">Business momentum</p>
              <h2 className="mt-3 text-4xl font-black tracking-tight">A small town with real economic strength.</h2>
            </div>
            <p className="text-lg leading-8 text-slate-300">
              Sterling has more economic strength than many people expect from a town its size. The community is home to growing employers, agriculture, manufacturing, healthcare, education, entrepreneurs, and Main Street businesses.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            {employers.map((employer) => (
              <span key={employer} className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-slate-100">
                {employer}
              </span>
            ))}
          </div>
          <Link
            href="/work-here"
            className="mt-10 inline-flex rounded-lg bg-white px-6 py-3 font-extrabold text-slate-950 transition hover:bg-brand-100"
          >
            Connect with the Chamber
          </Link>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-brand-700">Housing & growth</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950">
              Sterling is growing. Be part of what&apos;s next.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Sterling&apos;s schools, employers, college, and community life are creating real momentum. That growth also creates a need for more housing options. Some families will buy existing homes. Others may choose to build. Some workers may need rental options while they settle. Builders, lenders, landowners, developers, and investors all have a role to play in Sterling&apos;s next chapter.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {housingPaths.map((path) => (
              <article key={path.title} className="rounded-lg border border-slate-200 bg-brand-50 p-6">
                <h3 className="text-2xl font-black text-slate-950">{path.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{path.description}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/housing-growth#housing-interest" className="rounded-lg bg-brand-700 px-6 py-3 text-center font-extrabold text-white transition hover:bg-brand-900">
              Share Your Housing Interest
            </Link>
            <Link href="/housing-growth#housing-interest" className="rounded-lg border border-slate-300 bg-white px-6 py-3 text-center font-extrabold text-slate-950 transition hover:bg-slate-50">
              I&apos;m a Builder, Developer, or Investor
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div className="rounded-lg bg-brand-900 p-8 text-white md:p-10">
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-brand-300">Belong here</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight">New here? You don&apos;t have to figure it out alone.</h2>
            <p className="mt-5 text-lg leading-8 text-brand-100">
              Connect Sterling helps route people to the right local contacts, calendars, organizations, and opportunities. Whether you are looking for swim lessons, youth sports, Rotary, volunteer opportunities, churches, 5th Quarter, school events, Sterling College events, Golden Ticket, or local groups, we will help point you in the right direction.
            </p>
            <Link href="/ask-connect-sterling" className="mt-8 inline-flex rounded-lg bg-white px-6 py-3 font-extrabold text-brand-900 transition hover:bg-brand-100">
              Ask Connect Sterling
            </Link>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-8 shadow-sm md:p-10">
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-clay">Golden Ticket</p>
            <h3 className="mt-3 text-3xl font-black text-slate-950">A small welcome into the life of town.</h3>
            <p className="mt-4 leading-7 text-slate-600">
              Adults who relocate through Connect Sterling receive two Golden Tickets to help kickstart their community connection. It is one more way Sterling helps newcomers meet people, support local experiences, and feel invited into the life of the town.
            </p>
            <a
              href={goldenTicketUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex rounded-lg border border-slate-300 px-6 py-3 font-extrabold text-slate-950 transition hover:bg-slate-50"
            >
              Learn About Golden Ticket
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
