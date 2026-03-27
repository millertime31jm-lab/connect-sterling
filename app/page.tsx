import Link from "next/link";
import PhotoCarousel from "../components/PhotoCarousel";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-slate-50">
      
      {/* 1. Remote-Optimized Hero Section */}
      <section className="w-full py-20 md:py-28 px-4 sm:px-6 lg:px-8 flex items-center justify-center text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Trade the commute for <span className="text-blue-700">community.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            You shouldn't have to choose between a thriving career and a great place to raise a family. Sterling offers remote workers gigabit fiber, a radically lower cost of living, and state income tax waivers—all wrapped in a high-trust neighborhood.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <Link 
              href="#guide" 
              className="w-full sm:w-auto px-8 py-4 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-xl shadow-md transition-all text-lg"
            >
              Get the Relocation Guide
            </Link>
            <Link 
              href="/why-sterling" 
              className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 font-semibold rounded-xl shadow-sm transition-all text-lg"
            >
              See the Math
            </Link>
          </div>

        </div>
      </section>

      {/* 2. Spousal Veto Carousel */}
      <PhotoCarousel />

      {/* 3. The Hybrid Lead Capture (Guide + Concierge) */}
      <section id="guide" className="w-full bg-slate-900 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: The Sell */}
          <div className="space-y-6 text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Get the <span className="text-blue-400">Remote Worker's</span> Guide to Sterling.
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed">
              We put together a simple, no-fluff guide covering exactly what you need to know about relocating to Sterling. 
            </p>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-center gap-3">
                <span className="text-blue-400">✓</span> How the 5-Year Income Tax Waiver works
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-400">✓</span> Gigabit Fiber coverage map & speeds
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-400">✓</span> Real estate averages vs. national markets
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-400">✓</span> School system overview & class sizes
              </li>
            </ul>
          </div>

          {/* Right Side: The Hybrid Intake Form */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Where should we send it?</h3>
            <p className="text-sm text-slate-500 mb-6">Plus, ask any specific questions you have about the town.</p>
            
            {/* The Fully Wired Headless Kit Form */}
            <form action="https://app.kit.com/forms/9252611/subscriptions" method="POST" target="_blank" className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">First Name</label>
                  {/* Notice the name attribute: fields[first_name] */}
                  <input type="text" name="fields[first_name]" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-700 focus:border-blue-700 outline-none transition-all" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Last Name</label>
                  <input type="text" name="fields[last_name]" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-700 focus:border-blue-700 outline-none transition-all" placeholder="Doe" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Email Address</label>
                {/* Notice the name attribute: email_address (Required by Kit) */}
                <input type="email" name="email_address" required className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-700 focus:border-blue-700 outline-none transition-all" placeholder="john@example.com" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">What's your biggest question about moving? <span className="text-slate-400 font-normal">(Optional)</span></label>
                <textarea name="fields[question]" rows={3} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-700 focus:border-blue-700 outline-none transition-all resize-none" placeholder="e.g., How long is the waiting list for local daycares?"></textarea>
              </div>

              <button type="submit" className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 rounded-lg shadow transition-colors mt-2">
                Send Me the Guide
              </button>
            </form>
          </div>

        </div>
      </section>

    </main>
  );
}