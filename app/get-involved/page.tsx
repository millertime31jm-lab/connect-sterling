import Link from "next/link";

export default function GetInvolved() {
  const hubs = [
    { 
      category: "Sports & Recreation",
      title: "Leagues, Lessons & Courts", 
      desc: "From summer swim lessons and youth soccer with the Sterling Rec Commission to weekend rounds at the golf course and local pickleball matches, there is always a way to stay active.",
      linkText: "View the Rec Schedule →",
      linkHref: "https://www.sterlingrec.org" 
    },
    { 
      category: "School Events",
      title: "Cheer on the Black Bears", 
      desc: "The whole town turns out. Whether it is Friday night football, state-contending debate tournaments, or high school theatre, school events are the easiest way to naturally cross paths with your neighbors.",
      linkText: "View the Athletics Calendar →",
      linkHref: "https://www.usd376.com" 
    },
    { 
      category: "Community Events",
      title: "Mainstreet & Milestones", 
      desc: "We celebrate big. Join us for the famous Old Fashioned 4th of July parade down Main Street, the bustling Mainstreet Market, and massive summer community picnics out at Sterling Lake.",
      linkText: "See Upcoming Events →",
      linkHref: "https://www.sterling-kansas.com" 
    },
    { 
      category: "Kids & Family",
      title: "Programs, Parks & Play", 
      desc: "Keep the little ones engaged year-round with robust summer reading programs and toddler storytimes at the Sterling Free Public Library, or burn off energy at the city splash park.",
      linkText: "Explore Family Activities →",
      linkHref: "https://sterling.scklslibrary.info/" 
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 py-16">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
            Plug into <span className="text-blue-700">Sterling.</span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            You don&apos;t have to wait years to feel like a local. Whether you are looking for youth sports, community festivals, or just a place to volunteer, here is exactly where to look to get your family plugged in today.
          </p>
        </div>
      </div>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {hubs.map((hub, index) => (
            <div key={index} className="bg-white p-10 rounded-3xl shadow-sm border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all group flex flex-col h-full">
              <span className="text-blue-600 font-bold tracking-wider uppercase text-xs mb-3 block">
                {hub.category}
              </span>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-700 transition-colors">
                {hub.title}
              </h3>
              <p className="text-slate-600 leading-relaxed mb-8 flex-grow">
                {hub.desc}
              </p>
              <a href={hub.linkHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-700 font-bold group-hover:text-blue-800">
                {hub.linkText}
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="bg-amber-50 rounded-3xl p-10 md:p-12 border border-amber-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="max-w-2xl">
            <span className="text-amber-700 font-bold uppercase tracking-wider text-xs mb-3 block">New Resident Networking</span>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">The Golden Ticket Program</h2>
            <p className="text-slate-700 text-lg leading-relaxed mb-0">
              Getting connected as an adult in a new town takes time. We want to speed up the process. The Golden Ticket is a dedicated networking event hosted to help new residents meet their neighbors, connect with local leaders, and find their footing over a casual evening.
            </p>
          </div>
          <div className="flex-shrink-0 w-full md:w-auto">
            <Link href="#golden-ticket-rsvp" className="block w-full text-center px-8 py-4 bg-amber-500 text-slate-900 font-bold rounded-xl shadow hover:bg-amber-400 transition-colors">
              RSVP for the Next Event
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-slate-100 rounded-3xl p-10 text-center border border-slate-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">Don&apos;t see what you&apos;re looking for?</h2>
          <p className="text-slate-600 mb-8 max-w-xl mx-auto">
            Whether it&apos;s a specific church denomination, a volunteer fire department, or a niche hobby group, let us know what your family is looking for and we will point you in the right direction.
          </p>
          <Link href="/resources" className="inline-block px-8 py-3 bg-slate-900 text-white font-bold rounded-xl shadow hover:bg-slate-800 transition-colors">
            Browse the Directory
          </Link>
        </div>
      </section>

    </main>
  );
}