import type { Metadata } from "next";
import Link from "next/link";
import { employers } from "../../data/content";

export const metadata: Metadata = {
  title: "Work Here",
  description:
    "Learn about Sterling's business momentum and get routed to Chamber and employer resources without a stale jobs board.",
};

export default function WorkHerePage() {
  return (
    <main className="bg-brand-50">
      <section className="bg-slate-950 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-brand-300">Work Here</p>
          <h1 className="mt-3 max-w-4xl text-4xl font-black tracking-tight md:text-6xl">
            Sterling has more economic strength than many people expect from a town its size.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            The community is home to growing employers, agriculture, manufacturing, healthcare, education, entrepreneurs, and Main Street businesses. Connect Sterling helps job seekers and relocating families get routed toward current local resources.
          </p>
          <Link href="/ask-connect-sterling" className="mt-8 inline-flex rounded-lg bg-white px-6 py-3 font-extrabold text-slate-950 transition hover:bg-brand-100">
            Connect with the Chamber
          </Link>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {employers.map((employer) => (
              <article key={employer} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-xl font-black text-slate-950">{employer}</h2>
                <p className="mt-3 leading-7 text-slate-600">
                  Part of the local business ecosystem that gives Sterling real momentum and practical employment pathways.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-brand-700">No stale listings</p>
            <h2 className="mt-3 text-3xl font-black text-slate-950">We route people instead of pretending to run a live jobs board.</h2>
          </div>
          <p className="text-lg leading-8 text-slate-600">
            Connect Sterling does not maintain a live jobs board. For current openings and employer connections, we help route job seekers and relocating families to the Sterling Chamber and local business resources.
          </p>
        </div>
      </section>
    </main>
  );
}
