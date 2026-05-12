import Link from "next/link";
import InquiryForm from "@/components/InquiryForm";

const commonQuestions = [
  "Can we find a home in Sterling?",
  "Who should I talk to about building?",
  "How do I enroll my kids in school?",
  "Where do I sign up for youth sports?",
  "What internet options are available at a specific address?",
  "Where do families find childcare?",
  "What churches, groups, or volunteer opportunities should we explore?",
  "What is happening this weekend?",
];

const routingExamples = [
  {
    title: "Moving here",
    description:
      "Ask about schools, housing, internet, childcare, healthcare, daily needs, or what life could actually feel like for your family.",
  },
  {
    title: "Housing",
    description:
      "Ask about buying, building, renting, builders, lenders, land, development interest, or local real estate starting points.",
  },
  {
    title: "Kids and activities",
    description:
      "Ask about Sterling Rec, swim lessons, school activities, youth sports, church youth groups, 5th Quarter, or community events.",
  },
  {
    title: "Getting plugged in",
    description:
      "Ask about churches, civic groups, volunteer roles, Golden Ticket, Sterling College events, Chamber events, or local organizations.",
  },
];

export const metadata = {
  title: "Ask Connect Sterling | Connect Sterling",
  description:
    "Ask Connect Sterling for help finding the right local contact, resource, organization, calendar, or next step in Sterling, Kansas.",
};

export default function AskConnectSterlingPage() {
  return (
    <main className="bg-stone-50 text-slate-950">
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1800&q=80"
            alt="People gathered around a table"
            className="h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/95 via-emerald-950/75 to-amber-900/70" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
              Ask the question you actually need answered.
            </h1>
            <p className="mt-6 text-xl leading-8 text-slate-100">
              You do not need to know who owns the answer. Tell Connect Sterling what
              you are trying to figure out, and we will help point you toward the right
              local contact, organization, calendar, or next step.
            </p>
            <p className="mt-5 text-lg leading-8 text-slate-200">
              Moving, housing, schools, childcare, youth sports, churches, events,
              healthcare, internet, volunteering, or something else. Start here.
            </p>

            <div className="mt-10">
              <Link
                href="#ask-form"
                className="rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-slate-950 shadow-sm transition hover:bg-amber-100"
              >
                Go to the form
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="ask-form" className="scroll-mt-28 bg-stone-50">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
              Send your question.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              Be as specific as you can. The more context you share, the easier it is
              to point you toward the right person or resource.
            </p>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              Examples: your timeline, whether you are moving from another town, your
              kids’ ages, the kind of housing you are looking for, or the activity you
              are trying to find.
            </p>

            <div className="mt-8 rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-stone-200">
              <h3 className="text-xl font-bold text-slate-950">
                Want to browse first?
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                You can also explore the resource hub, calendar hub, education page, or
                housing page if you already know what kind of information you need.
              </p>
              <div className="mt-5 flex flex-col gap-3">
                <Link
                  href="/resources"
                  className="text-sm font-bold text-emerald-800"
                >
                  Explore Resources →
                </Link>
                <Link
                  href="/community-calendar"
                  className="text-sm font-bold text-emerald-800"
                >
                  Find Calendars →
                </Link>
                <Link
                  href="/housing-growth"
                  className="text-sm font-bold text-emerald-800"
                >
                  Explore Housing →
                </Link>
              </div>
            </div>
          </div>

          <InquiryForm
            title="Ask Connect Sterling"
            description="Tell us what you are trying to figure out, and we will help point you toward the right local contact or resource."
            fields={[
              {
                name: "name",
                label: "Name",
                type: "text",
                required: true,
              },
              {
                name: "email",
                label: "Email",
                type: "email",
                required: true,
              },
              {
                name: "phone",
                label: "Phone",
                type: "tel",
                required: false,
              },
              {
                name: "currentLocation",
                label: "Where are you reaching out from?",
                type: "text",
                required: false,
              },
              {
                name: "category",
                label: "What is your question mostly about?",
                type: "select",
                required: true,
                options: [
                  "Moving to Sterling",
                  "Housing",
                  "Schools or enrollment",
                  "Childcare",
                  "Youth sports or activities",
                  "Community events",
                  "Churches or faith community",
                  "Volunteering or civic groups",
                  "Healthcare or wellness",
                  "Internet or utilities",
                  "Local business or work",
                  "Golden Ticket",
                  "Something else",
                ],
              },
              {
                name: "timeline",
                label: "Timeline, if relevant",
                type: "select",
                required: false,
                options: [
                  "Immediately",
                  "0-3 months",
                  "3-6 months",
                  "6-12 months",
                  "12+ months",
                  "Just exploring",
                  "Not applicable",
                ],
              },
              {
                name: "details",
                label: "What are you trying to figure out?",
                type: "textarea",
                required: true,
              },
            ]}
          />
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
              What can you ask about?
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              Start with the question in front of you. If it belongs somewhere else,
              Connect Sterling can help point it in the right direction.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {commonQuestions.map((question) => (
              <div
                key={question}
                className="rounded-2xl bg-gradient-to-br from-stone-50 to-amber-50 p-5 font-semibold text-slate-900 shadow-sm ring-1 ring-stone-200"
              >
                {question}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
              A few common starting points.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              If your question fits one of these areas, choose the closest category.
              If it does not fit neatly, choose “Something else.”
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {routingExamples.map((item) => (
              <div
                key={item.title}
                className="rounded-[2rem] bg-white/10 p-6 ring-1 ring-white/10"
              >
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-6 text-slate-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}