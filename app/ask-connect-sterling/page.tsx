import type { Metadata } from "next";
import InquiryForm from "../../components/InquiryForm";
import { askCategories } from "../../data/content";

export const metadata: Metadata = {
  title: "Ask Connect Sterling",
  description:
    "Tell Connect Sterling what you are trying to do and get routed toward the right local contact in Sterling, Kansas.",
};

export default function AskConnectSterlingPage() {
  return (
    <main className="bg-brand-50 py-16">
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-brand-700">Central intake</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
            What are you trying to do?
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Tell us what you need, and Connect Sterling will help point you toward the right person, organization, calendar, or local resource.
          </p>
        </div>

        <InquiryForm
          title="Ask Connect Sterling"
          intro="Use this as the front door for moving, work, housing, school, childcare, volunteering, events, business, churches, and community connections."
          subject="Ask Connect Sterling inquiry"
          submitLabel="Send to Connect Sterling"
          fields={[
            { type: "select", name: "category", label: "What are you trying to do?", options: askCategories, required: true },
            { type: "text", name: "name", label: "Name", required: true },
            { type: "email", name: "email", label: "Email", required: true },
            { type: "tel", name: "phone", label: "Phone optional" },
            { type: "text", name: "currentLocation", label: "Current location" },
            { type: "text", name: "timeline", label: "Timeline" },
            {
              type: "select",
              name: "followUp",
              label: "Best way to follow up",
              options: ["Email", "Phone", "Text", "No preference"],
              required: true,
            },
            {
              type: "textarea",
              name: "details",
              label: "Question or details",
              placeholder: "Share enough context for us to route you well.",
              required: true,
            },
          ]}
        />
      </section>
    </main>
  );
}
