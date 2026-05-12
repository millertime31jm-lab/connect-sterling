"use client";

import Link from "next/link";
import { useState } from "react";
import { siteStats, testimonials } from "../data/content";

export default function Home() {
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function handleSubscribe(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormStatus('loading');
    
    const formData = new FormData(e.currentTarget);
    const firstName = formData.get('firstName');
    const email = formData.get('email');

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName, email }),
      });
      
      if (res.ok) {
        setFormStatus('success');
      } else {
        setFormStatus('error');
      }
    } catch (err) {
      setFormStatus('error');
    }
  }

  return (
    <main className="min-h-screen bg-brand-50">
      
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-brand-900 tracking-tight mb-6">
            Your career shouldn&apos;t cost you <br className="hidden md:block" />
            <span className="text-brand-500">your family time.</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto mb-10">
            Keep your remote job. Keep more of your paycheck. Move to Sterling, Kansas—a town wired with gigabit fiber, anchored by elite schools, and built for a better family rhythm.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link href="#guide" className="px-8 py-4 bg-brand-500 text-white font-bold rounded-xl shadow-lg hover:bg-brand-700 transition-colors text-lg w-full sm:w-auto text-center">
              Get the Relocation Guide
            </Link>
            <Link href="/why-sterling" className="px-8 py-4 bg-white text-brand-900 font-bold rounded-xl border border-slate-200 shadow-sm hover:bg-brand-50 transition-colors text-lg w-full sm:w-auto text-center">
              Compare Cost of Living
            </Link>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 flex flex-wrap justify-between gap-6 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-slate-100">
            {siteStats.map((stat, index) => (
              <div key={index} className="flex-1 min-w-[150px] pt-4 md:pt-0 md:px-6 first:pl-0 first:pt-0 border-t-0">
                <div className="text-2xl mb-2">{stat.icon}</div>
                <p className="text-3xl font-black text-brand-900 mb-1">{stat.value}</p>
                <p className="text-sm font-bold text-slate-700 mb-1">{stat.label}</p>
                <p className="text-xs text-slate-400 uppercase tracking-wide font-semibold">{stat.source}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-brand-900 mb-4">A better rhythm for your family.</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Trade the 45-minute commute for a 5-minute walk to the splash park. This is what a Tuesday in Sterling actually looks like.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
            <div className="md:col-span-2 md:row-span-2 rounded-3xl overflow-hidden shadow-sm relative group">
              <img src="/photos/edu-6.jpg" alt="Family life in Sterling" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-900/60 to-transparent flex items-end p-8">
                <span className="text-white font-bold text-lg">Community Events</span>
              </div>
            </div>
            
            <div className="md:col-span-2 rounded-3xl overflow-hidden shadow-sm relative group">
              <img src="/photos/edu-2.jpg" alt="Friday Night Football" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-900/60 to-transparent flex items-end p-6">
                <span className="text-white font-bold">Friday Night Lights</span>
              </div>
            </div>
            
            <div className="rounded-3xl overflow-hidden shadow-sm relative group">
              <img src="/photos/edu-1.jpg" alt="Local schools" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            
            <div className="rounded-3xl overflow-hidden shadow-sm relative group bg-brand-100 flex items-center justify-center p-6 text-center">
              <div>
                <span className="text-4xl block mb-2">⛳</span>
                <span className="text-brand-900 font-bold">5 minutes<br/>to the first tee.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-brand-900 py-24 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Don&apos;t just take our word for it.</h2>
            <p className="text-brand-100">Hear from the families who have already made the move.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-brand-700 rounded-2xl p-8 border border-brand-500 shadow-xl flex flex-col h-full">
                <p className="text-lg text-brand-50 leading-relaxed mb-8 flex-grow">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-brand-900 border-2 border-brand-500">
                    <img src={testimonial.image} alt={testimonial.author} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-bold text-white">{testimonial.author}</p>
                    <p className="text-sm text-brand-100">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="guide" className="w-full bg-white py-24 scroll-mt-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-brand-500 font-bold tracking-wider uppercase text-sm mb-4 block">Free Download</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-900 mb-6">
            Get the Official Relocation Guide
          </h2>
          <p className="text-lg text-slate-600 mb-10 leading-relaxed">
            Everything you need to run the numbers for your family. Inside, you&apos;ll find the complete guide to the 5-year tax waiver, local housing market contacts, and internet provider breakdowns.
          </p>
          
          {formStatus === 'success' ? (
            <div className="max-w-md mx-auto p-8 bg-emerald-50 border border-emerald-200 rounded-2xl shadow-sm">
              <span className="text-4xl block mb-4">📬</span>
              <h3 className="text-2xl font-bold text-emerald-900 mb-2">Guide Sent!</h3>
              <p className="text-emerald-700">Check your inbox. Your relocation guide should arrive in the next few minutes.</p>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="max-w-md mx-auto space-y-4">
              <input 
                type="text" 
                name="firstName"
                placeholder="First Name" 
                required
                disabled={formStatus === 'loading'}
                className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all disabled:opacity-50"
              />
              <input 
                type="email" 
                name="email"
                placeholder="Work or Personal Email" 
                required
                disabled={formStatus === 'loading'}
                className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all disabled:opacity-50"
              />
              <button 
                type="submit" 
                disabled={formStatus === 'loading'}
                className="w-full px-8 py-4 bg-brand-900 text-white font-bold rounded-xl shadow-md hover:bg-slate-800 transition-colors text-lg disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {formStatus === 'loading' ? 'Sending...' : 'Send Me the Guide'}
              </button>
              
              {formStatus === 'error' && (
                <p className="text-red-600 font-bold text-sm mt-2">
                  Oops! Something went wrong. Please try again or email us directly.
                </p>
              )}
              
              <p className="text-xs text-slate-400 mt-4">
                We respect your inbox. No spam, ever. Unsubscribe anytime.
              </p>
            </form>
          )}
        </div>
      </section>

    </main>
  );
}