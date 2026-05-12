import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { educationSections, jedMillerTestimonial } from "../../data/content";

export const metadata: Metadata = {
  title: "Education & Family Life",
  description:
    "Explore childcare, Sterling USD 376, Sterling College, activities, and family life in Sterling, Kansas.",
};

export default function EducationFamilyLifePage() {
  return (
    <main className="bg-brand-50">
      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.85fr] lg:px-8">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-brand-700">Education & Family Life</p>
            <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-950 md:text-6xl">
              A place where kids can be known, challenged, and involved.
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              For many families, education is one of the biggest reasons to choose Sterling. From Lil Cub Childcare to Sterling USD 376 to Sterling College, Sterling offers a full education path with small-town support and real community pride.
            </p>
            <Link href="/ask-connect-sterling" className="mt-8 inline-flex rounded-lg bg-brand-700 px-6 py-3 font-extrabold text-white transition hover:bg-brand-900">
              Ask About Schools or Childcare
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <div className="relative h-64 overflow-hidden rounded-lg shadow-sm">
              <Image src="/photos/edu-2.jpg" alt="Sterling students and school activities" fill sizes="(min-width: 1024px) 40vw, 50vw" className="object-cover" />
            </div>
            <div className="relative h-64 overflow-hidden rounded-lg shadow-sm">
              <Image src="/photos/edu-3.jpg" alt="Sterling College campus life" fill sizes="(min-width: 1024px) 40vw, 50vw" className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-2">
            {educationSections.map((section) => (
              <article key={section.title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-2xl font-black text-slate-950">{section.title}</h2>
                <p className="mt-3 leading-7 text-slate-600">{section.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-brand-300">Beyond the classroom</p>
              <h2 className="mt-3 text-4xl font-black tracking-tight">A community that still shows up.</h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "Athletics",
                "Fine arts",
                "FFA",
                "FBLA",
                "Forensics",
                "Scholars' Bowl",
                "Science Olympiad",
                "Music",
                "Theatre",
                "Student leadership",
                "School events",
                "Community support",
              ].map((activity) => (
                <div key={activity} className="rounded-lg border border-white/10 bg-white/10 px-4 py-3 font-bold">
                  {activity}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-8">
          <article className="rounded-lg border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-black text-slate-950">Sterling College adds energy to town life.</h2>
            <p className="mt-4 leading-7 text-slate-600">
              College athletics, theatre, music, speakers, student life, service projects, and campus events give Sterling a rhythm that reaches beyond campus. It adds people, activity, service, and a sense that the town is still becoming.
            </p>
          </article>
          <blockquote className="rounded-lg bg-brand-900 p-8 text-white shadow-sm">
            <p className="text-2xl font-extrabold leading-9">&quot;{jedMillerTestimonial}&quot;</p>
            <footer className="mt-6 text-sm font-bold text-brand-100">Jed Miller, local parent</footer>
          </blockquote>
        </div>
      </section>
    </main>
  );
}
