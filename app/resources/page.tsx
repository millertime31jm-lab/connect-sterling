import Link from "next/link";

export default function Resources() {
  // PHASE 1 DATA STRUCTURE:
  // Organized by category to make it highly scannable for newcomers.
  const directory = [
    {
      category: "Real Estate & Housing",
      items: [
        { name: "Sterling Real Estate", description: "Local experts in residential and commercial properties.", contact: "555-0101" },
        { name: "Midwest Builders", description: "Custom home construction and major renovations.", contact: "555-0102" }
      ]
    },
    {
      category: "Utilities & Infrastructure",
      // Note: Added Gigabit Fiber here as it is a massive selling point for remote workers
      items: [
        { name: "Sterling City Utilities", description: "Water, trash, and local city services setup.", contact: "555-0103" },
        { name: "ConnectKS Fiber", description: "Gigabit fiber internet installation for remote work.", contact: "555-0104" }
      ]
    },
    {
      category: "Healthcare & Wellness",
      items: [
        { name: "Sterling Medical Clinic", description: "Primary care, pediatrics, and general practice.", contact: "555-0105" },
        { name: "Main Street Pharmacy", description: "Local prescriptions and wellness supplies.", contact: "555-0106" }
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Relocation <span className="text-blue-700">Directory</span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Everything you need to make the transition smooth. From finding a home to setting up gigabit internet, start here.
          </p>
        </div>

        {/* Directory Listings */}
        <div className="space-y-10">
          {directory.map((section, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 border-b border-slate-100 pb-4">
                {section.category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {section.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="space-y-1">
                    <h3 className="text-lg font-bold text-blue-700">{item.name}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                    <p className="text-sm font-semibold text-slate-900 pt-1">{item.contact}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Relocation Concierge CTA */}
        <div id="golden-ticket" className="mt-16 bg-blue-900 rounded-3xl p-10 text-center text-white shadow-lg">
          <h3 className="text-3xl font-bold mb-4">Need a personal guide?</h3>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
            Navigating a move can be overwhelming. Claim your Golden Ticket and connect directly with our relocation team to get personalized answers and see if you qualify for the Rural Opportunity Zone incentives.
          </p>
          <Link href="mailto:hello@connectsterling.com" className="inline-block px-8 py-4 bg-white text-blue-900 font-bold rounded-xl shadow hover:bg-slate-100 transition-colors">
            Contact the Relocation Team
          </Link>
        </div>

      </div>
    </main>
  );
}