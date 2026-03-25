import Link from "next/link";

export default function GetInvolved() {
  // PHASE 1 DATA STRUCTURE: 
  // This is a simple list. To add a new event, just copy one of these blocks and change the text.
  const events = [
    {
      id: 1,
      category: "Recreation",
      title: "Summer Youth Sports",
      date: "Spring Registration",
      description: "From T-ball to swimming lessons, the Sterling Rec Commission runs active, well-organized leagues to get the kids out of the house and onto the field.",
      linkText: "View Rec Schedule",
      linkUrl: "#"
    },
    {
      id: 2,
      category: "Community",
      title: "Old Fashioned 4th of July",
      date: "July 4th, All Day",
      description: "Our biggest event of the year. A parade down Main Street, a picnic at the lake, and a massive fireworks show at dusk. You will meet half the town here.",
      linkText: "See Event Details",
      linkUrl: "#"
    },
    {
      id: 3,
      category: "School",
      title: "Friday Night Football",
      date: "Fall Season",
      description: "The classic American rhythm. The whole town shows up to support the Black Bears. It is the easiest way to naturally cross paths with your neighbors.",
      linkText: "View Athletics Calendar",
      linkUrl: "#"
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-12">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Plug into <span className="text-blue-700">Sterling.</span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            You don't have to wait years to feel like a local. Here is exactly what is happening around town and how your family can jump in today.
          </p>
        </div>

        {/* Event Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <div key={event.id} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-3">
                {event.category}
              </span>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{event.title}</h3>
              <p className="text-sm font-semibold text-slate-500 mb-4">{event.date}</p>
              <p className="text-slate-600 mb-8 flex-grow leading-relaxed">{event.description}</p>
              <Link href={event.linkUrl} className="text-blue-700 font-bold hover:text-blue-900 transition-colors flex items-center gap-1">
                {event.linkText} <span>&rarr;</span>
              </Link>
            </div>
          ))}
        </div>

        {/* Failsafe CTA */}
        <div className="mt-16 bg-slate-200 rounded-3xl p-10 text-center max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-slate-900 mb-3">Don't see what you're looking for?</h3>
          <p className="text-slate-700 mb-8 text-lg max-w-2xl mx-auto">
            Whether it's a specific church denomination, a volunteer group, or a niche hobby, let us know what your family is looking for and we will point you in the right direction.
          </p>
          <Link href="/resources" className="inline-block px-8 py-4 bg-slate-900 text-white font-bold rounded-xl shadow-md hover:bg-slate-800 transition-all">
            Browse the Directory
          </Link>
        </div>

      </div>
    </main>
  );
}