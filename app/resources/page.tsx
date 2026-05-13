import { resourceCategories } from "@/data/resourceHub";

export const metadata = {
  title: "Resources | Connect Sterling",
  description:
    "Direct Sterling, Kansas resource links for healthcare, housing, schools, utilities, recreation, and practical local starting points.",
};

export default function ResourcesPage() {
  return (
    <main className="bg-stone-50 text-slate-950">
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">
            Resources
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight sm:text-6xl">
            Find the Sterling resource you need.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
            Choose a category below. Each section opens to direct links and local
            starting points.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {resourceCategories.map((category) => (
              <a
                key={category.id}
                href={`#${category.id}`}
                className="rounded-full border border-stone-300 bg-stone-50 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-900"
              >
                {category.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-stone-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <div className="space-y-5">
            {resourceCategories.map((category, index) => (
              <details
                key={category.id}
                id={category.id}
                open={index === 0}
                className="overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-stone-200"
              >
                <summary className="cursor-pointer list-none px-6 py-5 marker:hidden">
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <h2 className="text-2xl font-bold tracking-tight text-slate-950">
                        {category.title}
                      </h2>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {category.intro}
                      </p>
                    </div>
                    <span className="shrink-0 rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-amber-800 ring-1 ring-amber-200">
                      {category.resources.length} links
                    </span>
                  </div>
                </summary>

                <div className="border-t border-stone-200 px-6 py-6">
                  <div className="grid gap-4">
                    {category.resources.map((resource) => (
                      <article
                        key={`${category.id}-${resource.name}`}
                        className="rounded-[1.5rem] bg-stone-50 p-5 ring-1 ring-stone-200"
                      >
                        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                          <div className="min-w-0 flex-1">
                            <div className="flex flex-wrap items-center gap-3">
                              <h3 className="text-lg font-bold text-slate-950">
                                {resource.name}
                              </h3>
                              {resource.tag ? (
                                <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-slate-600 ring-1 ring-stone-200">
                                  {resource.tag}
                                </span>
                              ) : null}
                            </div>

                            <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-700">
                              {resource.description}
                            </p>
                          </div>

                          <a
                            href={resource.href}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex shrink-0 rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-900"
                          >
                            {resource.buttonLabel}
                          </a>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-stone-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
              Still not sure where to start?
            </h2>
          </div>

          <div className="space-y-5 text-lg leading-8 text-slate-700">
            <p>
              If you still need help sorting where to go first, send a note and we will
              help you get pointed in the right direction.
            </p>
            <a
              href="mailto:hello@connectsterling.com"
              className="inline-flex rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-900"
            >
              Email hello@connectsterling.com
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
