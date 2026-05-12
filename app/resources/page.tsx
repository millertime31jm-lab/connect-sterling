import type { Metadata } from "next";
import Link from "next/link";
import { resources } from "../../data/content";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "A routed directory for Sterling, Kansas new resident basics, education, healthcare, housing, work, utilities, recreation, and community life.",
};

export default function ResourcesPage() {
  return (
    <main className="bg-brand-50 py-16">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-brand-700">Resources</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-950 md:text-6xl">
            A routed directory, not a stale list.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Use this page to find confirmed links or request an introduction when the best local contact depends on what you need. We have removed placeholder phone numbers, pending listings, and dead links.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {resources.map((section) => (
            <a key={section.id} href={`#${section.id}`} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm transition hover:border-brand-700 hover:text-brand-900">
              {section.category}
            </a>
          ))}
        </div>

        <div className="mt-14 space-y-14">
          {resources.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-24">
              <div className="mb-5 flex flex-col gap-2 border-b border-slate-200 pb-4 md:flex-row md:items-end md:justify-between">
                <h2 className="text-2xl font-black text-slate-950">{section.category}</h2>
                <p className="text-sm font-bold text-slate-500">Choose a confirmed link or request a routed introduction.</p>
              </div>
              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {section.items.map((item) => {
                  const isExternal = item.href.startsWith("http");
                  const card = (
                    <>
                      <h3 className="text-xl font-black text-slate-950">{item.name}</h3>
                      <p className="mt-3 flex-1 leading-7 text-slate-600">{item.description}</p>
                      <span className="mt-6 inline-flex text-sm font-extrabold text-skyline">{item.action}</span>
                    </>
                  );

                  if (isExternal) {
                    return (
                      <a key={item.name} href={item.href} target="_blank" rel="noopener noreferrer" className="flex min-h-56 flex-col rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-brand-700 hover:shadow-md">
                        {card}
                      </a>
                    );
                  }

                  return (
                    <Link key={item.name} href={item.href} className="flex min-h-56 flex-col rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-brand-700 hover:shadow-md">
                      {card}
                    </Link>
                  );
                })}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-16 rounded-lg bg-brand-900 p-8 text-white md:p-10">
          <h2 className="text-3xl font-black">Missing something useful?</h2>
          <p className="mt-3 max-w-3xl leading-7 text-brand-100">
            If you represent a local organization, service, group, or event that should be routed through Connect Sterling, send the details and we will review the best place to point people.
          </p>
          <Link href="/ask-connect-sterling" className="mt-6 inline-flex rounded-lg bg-white px-6 py-3 font-extrabold text-brand-900 transition hover:bg-brand-100">
            Submit an event or resource
          </Link>
        </div>
      </section>
    </main>
  );
}
