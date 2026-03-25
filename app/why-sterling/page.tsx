import Link from "next/link";

export default function WhySterling() {
  const pillars = [
    { title: "Gigabit Fiber", desc: "Enterprise-grade internet everywhere in town. Work remote without a single dropped Zoom call." },
    { title: "Top-Tier Education", desc: "From Sterling Grade School to Sterling College, your kids get focused, high-quality instruction." },
    { title: "Rural Opportunity Zone", desc: "Move here and the state of Kansas waives your state income tax for up to 5 years." },
    { title: "Outdoor Access", desc: "Golf courses, the lake, the pool, and wide open spaces right out your back door." },
    { title: "Unmatched Safety", desc: "A true neighborhood where kids ride bikes until streetlights come on and neighbors actually know you." },
    { title: "Cost of Living", desc: "Keep more of what you earn. Buy a 4-bedroom home for the price of a 1-bedroom coastal apartment." }
  ];

  return (
    <main className="min-h-screen bg-slate-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
            The math works. <br /> <span className="text-blue-700">The lifestyle is better.</span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            We aren't asking you to compromise. Sterling offers the infrastructure of a modern city with the margins, safety, and breathing room of a classic midwestern town.
          </p>
        </div>

        {/* The ROI Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-slate-900 mb-3">{pillar.title}</h3>
              <p className="text-slate-600 leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="bg-blue-900 rounded-3xl p-10 text-center text-white mt-12">
          <h2 className="text-3xl font-bold mb-4">Ready to run the numbers?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
            Connect with our relocation team to see exactly how the Rural Opportunity Zone applies to your family.
          </p>
          <Link href="/resources" className="inline-block px-8 py-4 bg-white text-blue-900 font-bold rounded-xl shadow hover:bg-slate-100 transition-colors">
            View Relocation Resources
          </Link>
        </div>

      </div>
    </main>
  );
}