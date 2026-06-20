import Image from "next/image";
import Link from "next/link";
import { pictureSterlingSections, sterlingHeroPhotos } from "@/data/sterlingPhotos";

export const metadata = {
  title: "Picture Sterling | Connect Sterling",
  description:
    "Picture Sterling through approved downtown, campus, lake, housing, and place-based photos from around town.",
};

export default function PictureSterlingPage() {
  const activeSections = pictureSterlingSections.filter(
    (section) => section.photos.length > 0,
  );

  return (
    <main className="bg-stone-50 text-slate-950">
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0">
          <Image
            src={sterlingHeroPhotos.aerial.src}
            alt={sterlingHeroPhotos.aerial.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/95 via-emerald-950/75 to-amber-900/70" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:py-32">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-200">
              Picture Sterling
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Picture life in Sterling.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-100 sm:text-xl">
              Sterling is best understood through the places people move through every
              week: Main Street, the lake, neighborhoods, campus, and the town spaces
              that shape daily life.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
              Real places. Real rhythms. Real proof.
            </h2>
          </div>

          <div className="space-y-5 text-lg leading-8 text-slate-700">
            <p>
              A move to Sterling is not sold by one big attraction. It is built out of
              the smaller things families live inside every week: a walk downtown, a
              trip to the lake, a drive through town, a neighborhood you can imagine
              living in, or a campus that adds another layer of activity.
            </p>
            <p>
              We&apos;re refreshing this gallery with photos approved for community use.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-stone-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <div className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-stone-200">
            <p className="text-sm leading-6 text-slate-700">
              We&apos;re refreshing this gallery with photos approved for community use.
            </p>
          </div>

          <div className="space-y-16">
            {activeSections.map((section) => (
                <section key={section.id} aria-labelledby={section.id}>
                  <div className="max-w-3xl">
                    <h2
                      id={section.id}
                      className="text-3xl font-bold tracking-tight sm:text-4xl"
                    >
                      {section.title}
                    </h2>
                  </div>

                  <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                    {section.photos.map((photo) => (
                      <figure
                        key={photo.src}
                        className="overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-stone-200"
                      >
                        <div className="relative aspect-[4/3]">
                          <Image
                            src={photo.src}
                            alt={photo.alt}
                            fill
                            sizes="(min-width: 1280px) 30vw, (min-width: 640px) 45vw, 100vw"
                            className="object-cover"
                          />
                        </div>
                        <figcaption className="p-5">
                          <p className="text-sm leading-6 text-slate-700">
                            {photo.caption}
                          </p>
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                </section>
              ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-slate-950 via-emerald-950 to-amber-900 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
              Ready to turn the photos into a real question?
            </h2>
          </div>

          <div className="space-y-5 text-lg leading-8 text-slate-200">
            <p>
              If Sterling looks like the kind of place your family has been looking
              for, the next step is simple. Explore moving here or ask the question
              you actually need answered.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/move-here"
                className="rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-slate-950 transition hover:bg-amber-100"
              >
                Explore Moving Here
              </Link>
              <Link
                href="/ask-connect-sterling#ask-form"
                className="rounded-full border border-white/25 bg-white/10 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/20"
              >
                Ask Connect Sterling
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
