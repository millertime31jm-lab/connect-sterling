import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 py-12 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Brand & Mission */}
          <div className="space-y-4">
            <h3 className="text-xl font-extrabold text-white tracking-tight">
              Connect <span className="text-blue-500">Sterling</span>
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed pr-4">
              Building a stronger community by connecting remote workers, families, and values-driven professionals to the opportunities in Sterling, Kansas.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white font-bold tracking-wide">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/why-sterling" className="text-slate-400 hover:text-white transition-colors">Why Sterling</Link>
              </li>
              <li>
                <Link href="/get-involved" className="text-slate-400 hover:text-white transition-colors">Get Involved</Link>
              </li>
              <li>
                <Link href="/resources" className="text-slate-400 hover:text-white transition-colors">Relocation Resources</Link>
              </li>
            </ul>
          </div>

          {/* Contact & CTA */}
          <div className="space-y-4">
            <h4 className="text-white font-bold tracking-wide">Take Action</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/#golden-ticket" className="text-blue-400 font-semibold hover:text-blue-300 transition-colors">
                  Claim Your Golden Ticket
                </Link>
              </li>
              <li>
                <a href="mailto:hello@connectsterling.com" className="text-slate-400 hover:text-white transition-colors">
                  Contact Our Team
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Connect Sterling. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}