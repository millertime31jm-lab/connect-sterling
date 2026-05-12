import type { Metadata } from "next";
import Link from "next/link";
import { calendarLinks } from "../../data/content";

export const metadata: Metadata = {
  title: "Community Calendar Hub",
  description:
    "Find links to Sterling school events, city meetings, Chamber activities, college events, youth programs, library events, and community opportunities.",
};

export default function CommunityCalendarPage() {
  return (
    <main className="bg-brand-50 py-16">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-brand-700">Calendar hub</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-950 md:text-6xl">
            Find what&apos;s happening in Sterling.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Connect Sterling helps you find what is happening without trying to replace the calendars already maintained by local organizations. Use the links below to find school events, city meetings, Chamber activities, Sterling College events, youth programs, church activities, and community opportunities.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {calendarLinks.map((link) => {
            const isExternal = link.href.startsWith("http");
            const className =
              "rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-brand-700 hover:shadow-md";

            if (isExternal) {
              return (
                <a key={link.title} href={link.href} target="_blank" rel="noopener noreferrer" className={className}>
                  <h2 className="text-xl font-black text-slate-950">{link.title}</h2>
                  <p className="mt-3 text-sm font-bold text-skyline">Visit source calendar</p>
                </a>
              );
            }

            return (
              <Link key={link.title} href={link.href} className={className}>
                <h2 className="text-xl font-black text-slate-950">{link.title}</h2>
                <p className="mt-3 text-sm font-bold text-skyline">Open resource</p>
              </Link>
            );
          })}
        </div>

        <p className="mt-8 rounded-lg border border-slate-200 bg-white p-5 text-sm font-bold text-slate-600">
          Event details are maintained by the organization hosting the event.
        </p>
      </section>
    </main>
  );
}
