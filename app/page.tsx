import Link from "next/link";
import PhotoCarousel from "../components/PhotoCarousel";

export default function Home() {
  return (
    <main className="flex flex-col min-h-[calc(100vh-80px)] bg-slate-50">
      
      {/* Hero Section */}
      <section className="w-full py-20 md:py-28 px-4 sm:px-6 lg:px-8 flex items-center justify-center text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Trade the commute for <span className="text-blue-700">community.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Sterling isn’t just an affordable place to live—it’s a place to belong. Discover strong schools, gigabit fiber internet, safe streets, and the financial incentives to make your move a reality.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <Link 
              href="#golden-ticket" 
              className="w-full sm:w-auto px-8 py-4 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-xl shadow-md transition-all text-lg"
            >
              Claim Your Golden Ticket
            </Link>
            <Link 
              href="/why-sterling" 
              className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 font-semibold rounded-xl shadow-sm transition-all text-lg"
            >
              See Why Sterling Wins
            </Link>
          </div>

        </div>
      </section>

      {/* Spousal Veto Carousel */}
      <PhotoCarousel />

    </main>
  );
}