import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { essentials } from "../../data/content";

export const metadata: Metadata = {
  title: "Move Here",
  description:
    "Explore daily life, essentials, schools, housing, internet, healthcare, groceries, recreation, and regional access in Sterling, Kansas.",
};

export default function MoveHerePage() {
  return (
    <main className="bg-brand-50">
      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.8fr] lg:px-8">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-brand-700">Move Here</p>
            <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-950 md:text-6xl">
              Small-town life without losing what your family depends on.
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Sterling is for families, remote workers, returning residents, job seekers, and people looking for a more connected daily rhythm. The essentials are here, and when you need help finding the right local contact, Connect Sterling can route you.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/ask-connect-sterling" className="rounded-lg bg-brand-700 px-6 py-3 text-center font-extrabold text-white transition hover:bg-brand-900">
                Ask Connect Sterling
              </Link>
              <Link href="/education-family-life" className="rounded-lg border border-slate-300 px-6 py-3 text-center font-extrabold text-slate-950 transition hover:bg-slate-50">
                Explore Schools
              </Link>
            </div>
          </div>
          <div className="relative min-h-80 overflow-hidden rounded-lg shadow-sm">
            <Image src="/photos/1.jpg" alt="A street view of Sterling, Kansas" fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-slate-950">The essentials are here.</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {essentials.map((item) => (
              <article key={item.title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-black text-slate-950">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
