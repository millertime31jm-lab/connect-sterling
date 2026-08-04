import type { Metadata } from "next";
import Image from "next/image";
import EventGallery from "./EventGallery";

const singleTicketUrl = "https://buy.stripe.com/3clfZgcF2e4ng1z5vD6Zy02";
const individualSubscriptionUrl = "#pricing";
const couplesSubscriptionUrl = "https://url8931.mailer.zeffy.com/ls/click?upn=u001.7cq20uXr5lGk8D7lfBpXB1eldth7kKWxbtp0TTXJxHHEVih0jTZkghfD-2Fh2v7D-2F3VeY96qRGwl6vNqemy7YmLUTMcP44iOAiAvhFpZz4km-2FXMCBkD8XYtjAOIMQTN2tMI56j52JpjW4bFh4m1tCVpQ-3D-3DKxXt_WfYHBNAWFN-2BaD4DmPOAzWZ-2Fl46kueL2heXD6O6yJAh6YUbMg-2FW0ls3KXO1tjt-2FDx3l-2FgtLOTqxEUhHtJhZ-2BgTk-2FaVXWfI-2FKPQZJin7DOyGdWOV8NKT3ok1ewSbhEaS3IlDNvMnq4bjYLZWDdy-2FeiqH2loaeM-2FinRXqelRUwutInhPrPp8ZHT3GnmuAP4UzAuZwe6Xj-2BhEXaZTgqsA-2Fc1yTOs2n1w4BubPrZKZSBS15lDOggblZniCW7MH2EIYMU59UBWG1gI8UAVmnfSXGSsr7qmWXqPA18LvRiIC7Pc8Gef-2FIlefOYESz54099Ok6FX4ITncGXUoB-2FR-2Btd2nihIQ3DDwqujyLR1szlSUwvQ-2BOtF1W924GAFZNn8ydkD9CEliVXcZ1wAqpFqXXvAys5sxgNCzu3YQd08VeRyjxpHkiNUgCCA-2BqcmXQieT4RFwG8ISPpYIKkGYHV-2FVBveM1764w-3D-3D";
const imageRoot = "/images/sterling/golden ticket";

const eventFeatures = [
  ["01", "All-Inclusive Food & Craft Beverages", "Top-tier catered food and curated drinks are fully covered with your admission. No hidden costs or cash bar inside."],
  ["02", "1920s Attire Optional", "Dress the part in prohibition speakeasy style if you'd like, or come comfortably as you are!"],
  ["03", "Card Games & Beginner Instruction", "Classic parlor card games all night. Never played? Don't worry—we'll teach you the ropes at the table!"],
  ["04", "Secret Location & Password Access", "Because it's a true speakeasy, the location remains off the grid. The venue address and secret entry password are sent 48 hours before doors open."],
];

const subscriberBenefits = [
  ["Substantial Annual Savings", "Pay just $52 per event instead of the $65 single-ticket rate ($13 savings on every ticket)."],
  ["Guaranteed Access", "Golden Ticket gatherings are strictly capped to keep atmospheres intimate. Subscribers never miss out on sold-out nights."],
  ["Elevate Local Programming", "Subscriptions let us bring in higher-tier caterers, craft mixology, live music, and bespoke venue decor."],
  ["Effortless & Flexible", "Auto-billed before each bi-monthly event cycle. Pause or cancel your subscription anytime with one click."],
];

const faqs = [
  ["What is included with my Golden Ticket?", "Everything! Your ticket covers full event entry, gourmet catered food, craft alcoholic and non-alcoholic beverages, themed decor, and entertainment. You never need to spend additional money inside the venue."],
  ["What if I don't know how to play poker or blackjack at the Speakeasy?", "Don't worry at all! We will have friendly hosts on site teaching game rules step-by-step at the tables. Whether you're a seasoned player or a complete beginner, you will feel right at home."],
  ["Do I have to dress in 1920s speakeasy attire?", "Dressing in 1920s/prohibition attire is welcomed and encouraged for fun, but it is completely optional. Wear whatever makes you feel comfortable!"],
  ["Why don't I know the exact event location yet?", "To keep our Prohibition Speakeasy exclusive and authentic, the exact Sterling address and secret entry password are emailed directly to ticket holders 48 hours before doors open."],
  ["How does subscription billing work?", "Subscribers are automatically billed ($52 for single, $104 for couples) before each bi-monthly event cycle. You can log into your account or contact us to pause or cancel anytime with one click."],
  ["Who operates Sterling Golden Ticket?", "Golden Ticket events are designed and hosted by The Sterling Collective in Sterling, Kansas, as part of our mission to build strong local community and meaningful connection."],
];

export const metadata: Metadata = {
  title: "Golden Ticket Events",
  description: "Curated bi-monthly adult social experiences from The Sterling Collective in Sterling, Kansas, with catered food, craft drinks, and genuine connection.",
};

function TicketLink({ children, href = singleTicketUrl, variant = "gold" }: { children: React.ReactNode; href?: string; variant?: "gold" | "outline" | "dark" }) {
  const styles = {
    gold: "bg-amber-300 text-slate-950 shadow-lg shadow-amber-950/20 hover:bg-amber-200",
    outline: "border border-amber-200/50 bg-white/5 text-white hover:border-amber-200 hover:bg-white/10",
    dark: "bg-slate-950 text-white shadow-lg hover:bg-emerald-950",
  };
  return <a href={href} className={`inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-center text-sm font-bold transition focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-300 ${styles[variant]}`}>{children}</a>;
}

export default function GoldenTicketPage() {
  return (
    <main className="bg-[#f7f1e4] text-slate-950">
      <section className="relative isolate overflow-hidden bg-[#081512] text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_10%,rgba(217,169,76,0.25),transparent_34%),linear-gradient(135deg,#06100e_0%,#102c24_55%,#3b2813_100%)]" />
        <div className="absolute -left-24 top-20 -z-10 h-80 w-80 rounded-full border border-amber-300/15" />
        <div className="absolute -right-36 bottom-0 -z-10 h-[28rem] w-[28rem] rotate-45 border border-amber-300/10" />
        <div className="mx-auto flex max-w-6xl flex-col items-center px-5 py-16 text-center sm:px-8 sm:py-24 lg:py-28">
          <Image src={`${imageRoot}/the.sterling.collective.logo.png`} alt="The Sterling Collective" width={440} height={444} priority className="mb-9 h-[180px] w-[180px] rounded-[2.5rem] object-cover shadow-2xl ring-1 ring-white/10 sm:h-[220px] sm:w-[220px]" />
          <p className="rounded-full border border-amber-300/50 bg-amber-300/10 px-4 py-2 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-amber-200 sm:text-xs sm:tracking-[0.22em]">Our next event: Prohibition Speakeasy • Saturday, August 22nd</p>
          <h1 className="mt-7 max-w-5xl text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">A Community with Unique Experiences. Experience the Golden Ticket.</h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-stone-200 sm:text-xl">Curated adult social experiences hosted bi-monthly by The Sterling Collective in Sterling, Kansas. Premium catered food, craft drinks, themed atmospheres, and genuine local connection.</p>
          <div className="mt-10 flex w-full max-w-xl flex-col gap-3 sm:flex-row sm:justify-center">
            <TicketLink href="#next-event">Reserve Event Pass ($65)</TicketLink>
            <TicketLink href="#pricing" variant="outline">Become a Subscriber ($52/Event)</TicketLink>
          </div>
          <p className="mt-12 text-xs font-semibold uppercase tracking-[0.3em] text-amber-100/60">Bi-monthly gatherings · Remarkable local connection</p>
        </div>
      </section>

      <section id="next-event" className="scroll-mt-28 bg-[#f7f1e4]">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:py-28">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-amber-800">Our next event</p>
            <h2 className="mt-4 max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl">Prohibition Speakeasy &amp; Card Parlor</h2>
            <p className="mt-4 text-sm font-bold uppercase tracking-[0.18em] text-amber-800">Saturday, August 22nd</p>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-700">Step back into the Roaring Twenties for an exclusive Prohibition-era speakeasy night right here in Sterling. Expect a hidden atmosphere, high-stakes charm, and an unhurried night out with classic card games like poker and blackjack.</p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {eventFeatures.map(([number, title, description]) => (
                <article key={title} className="rounded-3xl border border-amber-900/10 bg-white p-6 shadow-sm">
                  <p className="text-xs font-bold tracking-[0.2em] text-amber-700">{number}</p>
                  <h3 className="mt-3 text-lg font-bold">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
                </article>
              ))}
            </div>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <TicketLink href={singleTicketUrl}>Reserve Single Ticket ($65)</TicketLink>
              <TicketLink href="#pricing" variant="dark">Reserve Couple Pass ($130)</TicketLink>
              <TicketLink href="#pricing" variant="dark">Lock In $52 Subscriber Rate</TicketLink>
            </div>
          </div>
          <div className="lg:sticky lg:top-28">
            <div className="overflow-hidden rounded-[2rem] border border-amber-900/15 bg-[#111916] p-3 shadow-2xl shadow-slate-950/20">
              <div className="overflow-hidden rounded-[1.4rem] bg-slate-900">
                <div className="relative aspect-[4/3]">
                <Image src={`${imageRoot}/speakeasy.night.graphic.png`} alt="Prohibition Speakeasy Night event graphic" fill sizes="(max-width: 1024px) 100vw, 42vw" className="object-cover" />
                </div>
                <div className="px-6 py-6 text-white">
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-amber-300">The Sterling Collective</p>
                  <p className="mt-2 text-2xl font-bold">Your invitation is waiting.</p>
                </div>
              </div>
            </div>
            <p className="mx-auto mt-5 max-w-md text-center text-sm leading-6 text-slate-600">Subscribers receive guaranteed access. Single-event passes are available while capacity remains.</p>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f1e4] px-5 pb-20 sm:px-6 lg:pb-28">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.25rem] bg-[#0c1c18] px-6 py-14 text-white shadow-2xl sm:px-10 lg:px-14 lg:py-20">
          <div className="max-w-4xl">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-amber-300">Show up. Belong. Repeat.</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">Why Subscribe? The Heart of the Golden Ticket</h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">Real community doesn’t happen by accident—it happens when neighbors consistently show up for one another. The Golden Ticket Subscription guarantees your entry to our bi-monthly gatherings at our best rate while directly sustaining high-quality adult social programming in Sterling.</p>
          </div>
          <div className="mt-12 grid gap-px overflow-hidden rounded-3xl bg-white/15 sm:grid-cols-2 lg:grid-cols-4">
            {subscriberBenefits.map(([title, description]) => (
              <article key={title} className="bg-[#10251f] p-7">
                <div className="mb-5 h-1 w-10 rounded-full bg-amber-300" />
                <h3 className="text-xl font-bold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-amber-800">Past gatherings</p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">Unforgettable Evenings in Sterling</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">Click any event to explore photo moments from recent Golden Ticket gatherings.</p>
          </div>
          <EventGallery />
        </div>
      </section>

      <section id="pricing" className="scroll-mt-28 bg-[#e9dfca] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-amber-800">Choose your pass</p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">One Night or the Whole Year</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">Every pass includes the full Golden Ticket experience—food, drinks, atmosphere, and entertainment.</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3 xl:items-stretch">
            <article className="relative flex flex-col rounded-[2rem] bg-[#0c1c18] p-7 text-white shadow-2xl ring-2 ring-amber-300 sm:p-10">
              <p className="absolute right-6 top-0 -translate-y-1/2 rounded-full bg-amber-300 px-4 py-2 text-[0.68rem] font-extrabold uppercase tracking-[0.18em] text-slate-950">Best value</p>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-amber-300">Best value • $52/event</p>
              <h3 className="mt-4 text-3xl font-bold">Individual Subscriber Pass</h3>
              <div className="mt-7 flex items-end gap-3 border-b border-white/15 pb-7"><span className="text-6xl font-bold tracking-tight">$52</span><span className="pb-2 text-sm text-slate-300">billed per bi-monthly<br />event cycle</span></div>
              <FeatureList items={["Admission for 1 guest to all bi-monthly Golden Ticket events", "All-inclusive gourmet food & beverages included", "$13 savings per event ($65 single price)", "Guaranteed entry & priority check-in", "Pause or cancel anytime"]} light />
              <div className="mt-9"><TicketLink href={individualSubscriptionUrl}>Start Individual Subscription ($52/Event)</TicketLink></div>
            </article>

            <article className="relative flex flex-col rounded-[2rem] border-2 border-amber-700/30 bg-amber-50 p-7 shadow-xl sm:p-10">
              <p className="absolute right-6 top-0 -translate-y-1/2 rounded-full bg-amber-800 px-4 py-2 text-[0.68rem] font-extrabold uppercase tracking-[0.18em] text-white">Best value for two</p>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-amber-800">Best value for two • $104/event</p>
              <h3 className="mt-4 text-3xl font-bold">Couples / 2-Person Subscriber Pass</h3>
              <div className="mt-7 flex items-end gap-3 border-b border-amber-900/15 pb-7"><span className="text-6xl font-bold tracking-tight">$104</span><span className="pb-2 text-sm text-slate-600">billed per bi-monthly<br />event cycle</span></div>
              <FeatureList items={["Admission for 2 guests to all bi-monthly Golden Ticket events", "All-inclusive gourmet food & beverages for both guests", "$26 total savings per event cycle", "Guaranteed entry for both passes", "Pause or cancel anytime"]} />
              <div className="mt-9"><TicketLink href={couplesSubscriptionUrl} variant="dark">Start 2-Person Subscription ($104/Event)</TicketLink></div>
            </article>

            <article className="flex flex-col rounded-[2rem] border border-amber-900/15 bg-white p-7 shadow-lg sm:p-10 md:col-span-2 xl:col-span-1">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-amber-800">Individual pass</p>
              <h3 className="mt-4 text-3xl font-bold">Single Event Pass</h3>
              <div className="mt-7 flex items-end gap-3 border-b border-slate-200 pb-7"><span className="text-6xl font-bold tracking-tight">$65</span><span className="pb-2 text-sm text-slate-500">single event admission</span></div>
              <FeatureList items={["Single entry to upcoming Prohibition Speakeasy event", "All-inclusive food & craft beverages included", "Subject to remaining ticket availability"]} />
              <div className="mt-9"><TicketLink href={singleTicketUrl} variant="dark">Purchase Speakeasy Pass ($65)</TicketLink></div>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.7fr_1.3fr]">
          <div><p className="text-xs font-bold uppercase tracking-[0.24em] text-amber-800">Good to know</p><h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">Frequently Asked Questions</h2><p className="mt-5 text-base leading-7 text-slate-600">Everything you need to arrive ready for an exceptional evening.</p></div>
          <div className="divide-y divide-slate-200 border-y border-slate-200">
            {faqs.map(([question, answer], index) => (
              <details key={question} className="group py-1" open={index === 0}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-lg font-bold marker:content-none">{question}<span aria-hidden="true" className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f7f1e4] text-xl font-normal text-amber-900 transition group-open:rotate-45">+</span></summary>
                <p className="max-w-3xl pb-6 pr-10 text-sm leading-7 text-slate-600">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-[#10251f] via-[#081512] to-[#493117] text-white">
        <div className="absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-amber-300 to-transparent" />
        <div className="mx-auto flex max-w-5xl flex-col items-center px-5 py-20 text-center sm:px-6 lg:py-24">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-amber-300">We’d love to help</p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">Questions About Golden Ticket Events?</h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">Reach out directly to our event team at <a href="mailto:info@sterlinggoldenticket.com" className="font-semibold text-amber-200 underline decoration-amber-300/50 underline-offset-4 hover:text-amber-100">info@sterlinggoldenticket.com</a> or connect with us on the Connect Sterling social channels.</p>
          <a href="mailto:info@sterlinggoldenticket.com" className="mt-9 inline-flex min-h-12 items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-bold text-slate-950 transition hover:bg-amber-100">Email the Event Team</a>
        </div>
      </section>
    </main>
  );
}

function FeatureList({ items, light = false }: { items: string[]; light?: boolean }) {
  return (
    <ul className={`mt-7 flex-1 space-y-4 text-sm leading-6 ${light ? "text-slate-200" : "text-slate-700"}`}>
      {items.map((item) => <li key={item} className="flex gap-3"><span className={`font-bold ${light ? "text-amber-300" : "text-emerald-800"}`} aria-hidden="true">✓</span><span>{item}</span></li>)}
    </ul>
  );
}
