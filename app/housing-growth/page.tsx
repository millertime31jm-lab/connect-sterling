import type { Metadata } from "next";
import InquiryForm from "../../components/InquiryForm";
import { housingPaths } from "../../data/content";

export const metadata: Metadata = {
  title: "Housing & Growth",
  description:
    "Share housing interest in Sterling, Kansas, including buying, building, renting, investing, or development.",
};

export default function HousingGrowthPage() {
  return (
    <main className="bg-brand-50">
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-brand-700">Housing & Growth</p>
          <h1 className="mt-3 max-w-4xl text-4xl font-black tracking-tight text-slate-950 md:text-6xl">
            Sterling is growing. Be part of what&apos;s next.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Sterling&apos;s schools, employers, college, and community life are creating real momentum. That growth also creates a need for more housing options, and there are practical ways for buyers, renters, builders, lenders, landowners, developers, and investors to help.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {housingPaths.map((path) => (
              <article key={path.title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-2xl font-black text-slate-950">{path.title}</h2>
                <p className="mt-3 leading-7 text-slate-600">{path.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="housing-interest" className="scroll-mt-24 bg-white py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <InquiryForm
            title="Housing Interest"
            intro="Share what you are looking for so Connect Sterling can route you to the right next conversation."
            subject="Housing interest in Sterling"
            submitLabel="Share Housing Interest"
            fields={[
              { type: "text", name: "name", label: "Name", required: true },
              { type: "email", name: "email", label: "Email", required: true },
              { type: "text", name: "currentLocation", label: "Current location" },
              { type: "text", name: "timeline", label: "Timeline" },
              {
                type: "select",
                name: "interestedIn",
                label: "Interested in",
                options: ["Buy", "Build", "Rent", "Invest", "Develop"],
                required: true,
              },
              { type: "text", name: "budgetRange", label: "Budget range" },
              { type: "text", name: "bedroomsNeeded", label: "Bedrooms needed" },
              {
                type: "select",
                name: "connectedTo",
                label: "Connected to",
                options: [
                  "Remote work",
                  "Local job",
                  "KMW/local employer",
                  "Returning resident",
                  "Family move",
                  "Sterling College",
                  "Other",
                ],
              },
              { type: "checkbox", name: "openNewConstruction", label: "Open to new construction?" },
              { type: "checkbox", name: "openRuralAcreage", label: "Open to nearby rural or acreage options?" },
              {
                type: "textarea",
                name: "details",
                label: "Question or details",
                placeholder: "Tell us about your housing need, site, project, or timeline.",
              },
            ]}
          />
        </div>
      </section>
    </main>
  );
}
