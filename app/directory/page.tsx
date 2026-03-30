import Link from "next/link";

export default function Directory() {
  const directoryData = [
    {
      id: "civic",
      category: "City & Civic Services",
      items: [
        { name: "City of Sterling (City Hall)", desc: "Utility billing, municipal inquiries, and city management.", link: "https://www.sterling-kansas.com", phone: "(620) 278-3423" },
        { name: "Sterling Police Department", desc: "Non-emergency dispatch and local law enforcement.", link: "https://www.sterling-kansas.com", phone: "(620) 278-2100" },
        { name: "Planning & Zoning Commission", desc: "Building permits, zoning regulations, and town development plans.", link: "https://www.sterling-kansas.com", phone: "Via City Hall" },
        { name: "Sterling Chamber of Commerce", desc: "Local business networking, Mainstreet events, and economic development.", link: "#", phone: "Contact via Website" }
      ]
    },
    {
      id: "utilities",
      category: "Utilities & Essential Services",
      items: [
        { name: "City Water, Sewer & Trash", desc: "Set up your residential water, sewer, and Stutzman refuse collection.", link: "https://www.sterling-kansas.com/609/Public-Utilities", phone: "(620) 278-3423" },
        { name: "Evergy (Electric)", desc: "Primary electrical provider for residential and commercial.", link: "https://www.evergy.com", phone: "800-383-1183" },
        { name: "Kansas Gas Service", desc: "Natural gas provider for the region.", link: "https://www.kansasgasservice.com", phone: "800-794-4780" },
        { name: "MTC / IdeaTek / Brightspeed", desc: "Local fiber internet providers. Up to 2 Gbps symmetrical.", link: "/why-sterling#infrastructure", phone: "See Infrastructure Page" }
      ]
    },
    {
      id: "education",
      category: "Education & Library",
      items: [
        { name: "Sterling Grade School (USD 376)", desc: "Pre-K through 6th grade education. Home of the Black Bears.", link: "https://www.usd376.com", phone: "(620) 278-3112" },
        { name: "Sterling High School (USD 376)", desc: "7th through 12th grade. Athletics, arts, and college prep.", link: "https://www.usd376.com", phone: "(620) 278-2171" },
        { name: "Sterling Free Public Library", desc: "Summer reading programs, public Wi-Fi, and toddler storytimes. Located at 138 N. Broadway.", link: "https://sterling.scklslibrary.info/", phone: "(620) 278-3191" },
        { name: "Sterling College", desc: "Four-year Christ-centered liberal arts college.", link: "https://www.sterling.edu", phone: "(800) 346-1017" }
      ]
    },
    {
      id: "recreation",
      category: "Parks & Recreation",
      items: [
        { name: "Sterling Recreation Commission", desc: "Youth sports leagues, summer camps, and adult recreation.", link: "https://www.sterlingrec.org", phone: "(620) 278-2357" },
        { name: "Sterling Municipal Pool", desc: "City pool access, swimming lessons, and private party rentals.", link: "https://www.sterling-kansas.com/266/Municipal-Swimming-Pool", phone: "(620) 904-7033" },
        { name: "Sterling Community Wellness Center", desc: "Modern fitness hub with personal trainers and health coaches.", link: "https://www.sterlingrec.org", phone: "(620) 278-2357" },
        { name: "Sterling Lake & Campground", desc: "Fishing, RV hookups, and community picnic areas.", link: "https://www.sterling-kansas.com/253/Parks-and-Recreation", phone: "Via City Hall" }
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 py-16">
      
      {/* Page Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
            The <span className="text-blue-700">Sterling</span> Directory.
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            The exact contacts, organizations, and local services you need to navigate life in town. 
          </p>
        </div>
      </div>

      {/* Quick Jump Navigation */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="flex flex-wrap justify-center gap-3">
          {directoryData.map((section) => (
            <a 
              key={section.id} 
              href={`#${section.id}`}
              className="px-5 py-2.5 bg-white border border-slate-200 rounded-full text-sm font-bold text-slate-700 hover:bg-slate-100 hover:border-slate-300 transition-all shadow-sm"
            >
              {section.category}
            </a>
          ))}
        </div>
      </div>

      {/* Directory Sections */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {directoryData.map((section) => (
          <section key={section.id} id={section.id} className="scroll-mt-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 pb-2 border-b-2 border-slate-200">
              {section.category}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {section.items.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{item.name}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">{item.desc}</p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-auto">
                    <span className="text-sm font-semibold text-slate-500">{item.phone}</span>
                    {item.link !== "#" ? (
                      <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 text-sm font-bold hover:text-blue-800">
                        Visit Website →
                      </a>
                    ) : (
                      <span className="text-slate-400 text-sm font-medium">Link Pending</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Crowdsourcing Maintenance CTA */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 mb-12">
        <div className="bg-slate-900 rounded-3xl p-10 text-center shadow-xl">
          <h2 className="text-2xl font-bold text-white mb-3">Are we missing something?</h2>
          <p className="text-slate-400 mb-8">
            This directory is a living document. If you represent a local organization, club, or service that should be listed here, let us know so we can get you added.
          </p>
          <a href="mailto:hello@connectsterling.com" className="inline-block px-8 py-3 bg-white text-slate-900 font-bold rounded-xl shadow hover:bg-slate-100 transition-colors">
            Suggest an Addition
          </a>
        </div>
      </div>

    </main>
  );
}