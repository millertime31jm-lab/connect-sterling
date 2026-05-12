import type { Metadata } from "next";
import Link from "next/link";
import { connectionCategories, goldenTicketUrl } from "../../data/content";

export const metadata: Metadata = {
  title: "Get Connected",
  description:
    "Find community connections, family activities, churches, youth programs, civic groups, and new resident resources in Sterling, Kansas.",
};

export default function GetConnectedPage() {
  return (
    <main className="bg-brand-50">
      <section className="bg-brand-900 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-brand-300">Get Connected</p>
          <h1 className="mt-3 max-w-4xl text-4xl font-black tracking-tight md:text-6xl">
            Sterling&apos;s community point guard.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-brand-100">
            Whether you are looking for swim lessons, youth sports, Rotary, volunteer opportunities, churches, 5th Quarter, school events, Sterling College events, Golden Ticket, or local groups, we will help point you in the right direction.
          </p>
          <Link href="/ask-connect-sterling" className="mt-8 inline-flex rounded-lg bg-white px-6 py-3 font-extrabold text-brand-900 transition hover:bg-brand-100">
            Tell us what you&apos;re looking for
          </Link>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {connectionCategories.map((category) => (
              <article key={category} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-xl font-black text-slate-950">{category}</h2>
                <p className="mt-3 leading-7 text-slate-600">
                  Ask Connect Sterling for current contacts, local links, and the right next place to check.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-clay">Golden Ticket</p>
            <h2 className="mt-3 text-3xl font-black text-slate-950">A small welcome for adults relocating through Connect Sterling.</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Adults who relocate through Connect Sterling receive two Golden Tickets to help kickstart their community connection. It is one more way Sterling helps newcomers meet people, support local experiences, and feel invited into the life of the town.
            </p>
            <a href={goldenTicketUrl} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex rounded-lg border border-slate-300 px-6 py-3 font-extrabold text-slate-950 transition hover:bg-slate-50">
              Learn About Golden Ticket
            </a>
          </div>
          <div className="rounded-lg bg-brand-50 p-8">
            <h3 className="text-2xl font-black text-slate-950">Need calendars?</h3>
            <p className="mt-3 leading-7 text-slate-600">
              Connect Sterling does not replace the calendars local organizations already maintain. The calendar hub points you to the source links.
            </p>
            <Link href="/community-calendar" className="mt-6 inline-flex rounded-lg bg-brand-700 px-5 py-3 font-extrabold text-white transition hover:bg-brand-900">
              Find what&apos;s happening
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
