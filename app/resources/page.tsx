import Image from "next/image";
import Link from "next/link";
import { resourceCategories } from "@/data/resourceHub";

const resourcePhotos = [
  {
    src: "/images/sterling/downtown/sterling-downtown-mural-1.jpg",
    alt: "Downtown mural in Sterling",
    label: "Main Street",
  },
  {
    src: "/images/sterling/community/sterling-community-play.jpg",
    alt: "Kids playing at a Sterling community event",
    label: "Family life",
  },
  {
    src: "/images/sterling/outdoors/sterling-outdoors-sterling-lake.jpg",
    alt: "Sterling Lake on a calm day",
    label: "Outdoor life",
  },
];

export const metadata = {
  title: "Resources | Connect Sterling",
  description:
    "Practical Sterling, Kansas resource links for healthcare, housing, utilities, schools, recreation, community life, and everyday local starting points.",
};

export default function ResourcesPage() {
  return (
    <main className="bg-stone-50 text-slate-950">
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">
              Resources
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-6xl">
              Start here when you need a real link or local starting point.
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-700">
              This page is meant to be practical. If there is a direct link, use it.
              If the right answer still depends on your address, your timeline, or the
              kind of connection you need, use Ask Connect Sterling and we will help
              point you in the right direction.
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

          <div className="grid gap-4 sm:grid-cols-3">
            {resourcePhotos.map((photo) => (
              <figure
                key={photo.src}
                className="overflow-hidden rounded-[1.75rem] bg-stone-50 shadow-sm ring-1 ring-stone-200"
              >
                <div className="relative aspect-[4/5]">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(min-width: 640px) 30vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="p-4 text-sm font-semibold text-slate-700">
                  {photo.label}
                </figcaption>
              </figure>
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
                  <div className="grid gap-4 lg:grid-cols-2">
                    {category.resources.map((resource) => {
                      const isExternal = resource.href.startsWith("http");

                      return (
                        <article
                          key={`${category.id}-${resource.name}`}
                          className="rounded-[1.5rem] bg-stone-50 p-5 ring-1 ring-stone-200"
                        >
                          <div className="flex items-start justify-between gap-4">
                            <h3 className="text-lg font-bold text-slate-950">
                              {resource.name}
                            </h3>
                            {resource.tag ? (
                              <span className="shrink-0 rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-slate-600 ring-1 ring-stone-200">
                                {resource.tag}
                              </span>
                            ) : null}
                          </div>

                          <p className="mt-3 text-sm leading-6 text-slate-700">
                            {resource.description}
                          </p>

                          <div className="mt-5">
                            {isExternal ? (
                              <a
                                href={resource.href}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-900"
                              >
                                {resource.buttonLabel}
                              </a>
                            ) : (
                              <Link
                                href={resource.href}
                                className="inline-flex rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-900"
                              >
                                {resource.buttonLabel}
                              </Link>
                            )}
                          </div>
                        </article>
                      );
                    })}
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
              That is normal. A lot of questions depend on your address, your timing,
              your kids, or the kind of local connection you need. Start with the form
              and we will help point you to the right next step.
            </p>
            <Link
              href="/ask-connect-sterling#ask-form"
              className="inline-flex rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-900"
            >
              Still not sure where to start? Ask Connect Sterling.
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
