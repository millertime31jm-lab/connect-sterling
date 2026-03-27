import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo / Brand */}
          <div className="shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-extrabold text-slate-900 tracking-tight hover:text-blue-700 transition-colors">
              Connect <span className="text-blue-700">Sterling</span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/why-sterling" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">
              Why Sterling
            </Link>
            <Link href="/get-involved" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">
              Get Involved
            </Link>
            <Link href="/resources" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">
              Resources
            </Link>
          </div>

          {/* Call to Action Button */}
          <div className="flex items-center">
            <Link href="/#guide" className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-5 rounded-lg shadow-sm transition-all hover:shadow-md">
              Get the Guide
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
}