import Link from "next/link";
// This path looks up one level from the app folder to find the data folder
import { siteStats, testimonials } from "../data/content";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
            Your career shouldn't cost you <br className="hidden md:block" />
            <span className="text-blue-700">your family time.</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto mb-10">
            Keep your remote job. Keep more of your paycheck. Move to Sterling, Kansas—a town wired with gigabit fiber, anchored by elite schools, and built for a better family rhythm.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link href="#guide" className="px-8 py-4 bg-blue-700 text-white font-bold rounded-xl shadow-lg hover:bg-blue-800 transition-colors text-lg w-full sm:w-auto text-center">
              Get the Relocation Guide
            </Link>
            <Link href="/why-sterling" className="px-8 py-4 bg-white text-slate-700 font-bold rounded-xl border border-slate-200 shadow-sm hover:bg-slate-50 transition-colors text-lg w-full sm:w-auto text-center">
              Compare Cost of Living
            </Link>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 flex flex-wrap justify-between gap-6 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-slate-100">
            {siteStats.map((stat, index) => (
              <div key={index} className="flex-1 min-w-[150px] pt-4 md:pt-0 md:px-6 first:pl-0 first:pt-0 border-t-0">
                <div className="text-2xl mb-2">{stat.icon}</div>
                <p className="text-3xl font-black text-slate-900 mb-1">{stat.value}</p>
                <p className="text-sm font-bold text-slate-700 mb-1">{stat.label}</p>
                <p className="text-xs text-slate-400 uppercase tracking-wide font-semibold">{stat.source}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-blue-900 py-24 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Don't just take our word for it.</h2>
            <p className="text-blue-200">Hear from the families who have already made the move.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-blue-800 rounded-2xl p-8 border border-blue-700 shadow-xl flex flex-col h-full">
                <p className="text-lg text-blue-100 leading-relaxed mb-8 flex-grow">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-blue-900 border-2 border-blue-500">
                    <img src={testimonial.image} alt={testimonial.author} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-bold text-white">{testimonial.author}</p>
                    <p className="text-sm text-blue-300">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="guide" className="w-full bg-white py-24 scroll-mt-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-4 block">Free Download</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
            Get the Official Relocation Guide
          </h2>
          <p className="text-lg text-slate-600 mb-10 leading-relaxed">
            Everything you need to run the numbers for your family. Inside, you'll find the complete guide to the 5-year tax waiver, local housing market contacts, and internet provider breakdowns.
          </p>
          
          <form className="max-w-md mx-auto space-y-4">
            <input 
              type="text" 
              placeholder="First Name" 
              required
              className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
            <input 
              type="email" 
              placeholder="Work or Personal Email" 
              required
              className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
            <button 
              type="submit" 
              className="w-full px-8 py-4 bg-slate-900 text-white font-bold rounded-xl shadow-md hover:bg-slate-800 transition-colors text-lg"
            >
              Send Me the Guide
            </button>
            <p className="text-xs text-slate-400 mt-4">
              We respect your inbox. No spam, ever. Unsubscribe anytime.
            </p>
          </form>
        </div>
      </section>

    </main>
  );
}