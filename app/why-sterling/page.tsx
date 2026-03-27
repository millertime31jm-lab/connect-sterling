import Link from "next/link";

export default function WhySterling() {
  const pillars = [
    { title: "A School That Knows Their Name", desc: "Top-tier academics, small classes, and teachers who actually have time to invest in your child's future.", link: "#education" },
    { title: "Rock-Solid Internet", desc: "Work from the porch. We are wired with multiple enterprise-grade fiber internet providers offering up to 2 Gbps.", link: "#infrastructure" },
    { title: "Everyday Conveniences", desc: "Local doctors, a fully stocked grocery store, and modern fitness facilities—all without the traffic.", link: "#amenities" },
    { title: "Financial Breathing Room", desc: "Keep more of your paycheck. Move here from out of state and your Kansas state income tax is waived for up to 5 years.", link: "#financials" }
  ];

  const fiberProviders = [
    { 
      name: "Brightspeed Fiber", 
      speed: "Up to 2 Gbps Symmetrical", 
      price: "Starts ~$30/mo", 
      desc: "No annual contracts and no data caps. True symmetrical fiber means your video calls will never drop and large files upload in seconds." 
    },
    { 
      name: "Cox Communications", 
      speed: "Up to 2 Gbps", 
      price: "Starts ~$55/mo", 
      desc: "Highly reliable, high-bandwidth connections perfect for families with a dozen phones, tablets, and TVs running all at once." 
    },
    { 
      name: "Local Kansas Fiber", 
      speed: "Up to 1 Gbps Symmetrical", 
      price: "Starts ~$60/mo", 
      desc: "Provided by MTC and IdeaTek. If the internet ever hiccups, you aren't calling a phone tree—you are calling someone right here in Kansas." 
    }
  ];

  const cityComparisons = [
    { city: "San Francisco, CA", price: "$1.2M+", tax: "Up to 13.3%" },
    { city: "Los Angeles, CA", price: "$900,000+", tax: "Up to 13.3%" },
    { city: "Seattle, WA", price: "$850,000+", tax: "High Gen. Cost of Living" },
    { city: "New York City, NY", price: "$800,000+", tax: "Up to 10.9%" },
    { city: "Washington, D.C.", price: "$650,000+", tax: "Up to 8.5%" },
    { city: "Denver, CO", price: "$600,000+", tax: "4.40%" },
    { city: "Miami, FL", price: "$600,000+", tax: "0% (High Ins. / Property)" },
    { city: "Austin, TX", price: "$550,000+", tax: "0% (High Property Tax)" },
    { city: "Chicago, IL", price: "$350,000+", tax: "4.95%" },
  ];

  const amenities = [
    { icon: "🩺", title: "Proactive Healthcare", desc: "Say goodbye to anonymous waiting rooms. Sterling has dedicated local doctors at Sterling Family Care, specialized mental health support at Pivotal Point Therapy, and immediate access to large regional hospitals when you need them." },
    { icon: "🏋️", title: "The Wellness Center", desc: "Your health doesn't take a back seat. The Sterling Community Wellness Center is a modern hub offering personal trainers, group fitness instructors, and personal health coaches." },
    { icon: "🐾", title: "Elite Pet Care", desc: "We know your pets are family. Ark Vet Clinic is located right here in Sterling, offering a full array of veterinary care, surgeries, and professional boarding so your animals are always in great hands." },
    { icon: "⛳", title: "Outdoors & Recreation", desc: "Unplug and get outside. Play a round at the local golf course, hit the tennis and pickleball courts, or spend a slow Saturday fishing at Sterling Lake and cooling off at the city splash park." },
    { icon: "🛒", title: "Daily Essentials", desc: "You don't have to make a road trip for the basics. We have a fully stocked Dillons (a Kroger company) for your groceries, Home Lumber for your DIY projects, and the local services to keep life running smoothly." },
    { icon: "✈️", title: "Frictionless Travel", desc: "When you need to travel for work or want to take a family vacation, the Wichita National Airport (ICT) is just an easy hour's drive away, keeping you seamlessly connected to the rest of the country." }
  ];

  return (
    <main className="min-h-screen bg-slate-50 py-16">
      
      {/* Page Header & Intro Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
            A place where your family—<br /> <span className="text-blue-700">and your dollar—has room to grow.</span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            You shouldn&apos;t have to choose between a thriving career and a great place to raise your kids. Sterling offers the reliable infrastructure you need for remote work, wrapped in the safety, community, and breathing room your family deserves.
          </p>
        </div>

        {/* Clickable Navigation Cards (Steering Wheel) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-4">
          {pillars.map((pillar, index) => (
            <a key={index} href={pillar.link} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all cursor-pointer group flex flex-col h-full">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors">{pillar.title}</h3>
                <span className="text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity text-xl leading-none">↓</span>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mt-auto">{pillar.desc}</p>
            </a>
          ))}
        </div>
      </div>

      {/* SECTION 1: Education */}
      <section id="education" className="w-full bg-white py-24 border-y border-slate-200 mt-12 scroll-mt-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-16 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
              A nationally recognized school system, right down the street.
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              We are incredibly proud to be a Top 5% school district in Kansas. With national awards, 10:1 class sizes, and recent state championships, every student here is seen, valued, and encouraged to participate.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Side: The Narrative */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">A place to play, lead, and belong.</h3>
                <p className="text-slate-600 leading-relaxed">
                  In larger districts, kids often have to compete just to get a spot on the roster. Here in Sterling, students actually get to play and lead. From a full lineup of sports—including our recent state championship football team—to the arts, band, and FFA, your child will have every opportunity to jump in and be part of the team.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Excellence without the pressure cooker.</h3>
                <p className="text-slate-600 leading-relaxed">
                  We believe you can have high academic standards without burning kids out. Our students consistently score well above state averages in math and science, and earn fantastic ACT scores—all while getting to enjoy a balanced, healthy childhood.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">A vibrant college town feel.</h3>
                <p className="text-slate-600 leading-relaxed">
                  We are proud to be the home of Sterling College. Having a thriving four-year liberal arts university in town brings a wonderful energy to the community, offering local access to college athletics, theatre productions, and great campus events.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Modern tools for modern learning.</h3>
                <p className="text-slate-600 leading-relaxed">
                  Every student is equipped for the future. We provide iPads for our younger learners (Pre-K through 1st) and Chromebooks for 2nd through 12th grade, ensuring they have the tech they need in a focused environment.
                </p>
              </div>
            </div>

            {/* Right Side: The Hard Outcomes Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-blue-50 border border-blue-100 p-6 rounded-2xl">
                <p className="text-4xl font-extrabold text-blue-700 mb-2">10:1</p>
                <h4 className="font-bold text-slate-900 mb-1">Student-Teacher Ratio</h4>
                <p className="text-sm text-slate-600">Teachers who actually have time to know your child&apos;s strengths and struggles.</p>
              </div>
              
              <div className="bg-blue-50 border border-blue-100 p-6 rounded-2xl">
                <p className="text-4xl font-extrabold text-blue-700 mb-2">Top 5%</p>
                <h4 className="font-bold text-slate-900 mb-1">Statewide Academics</h4>
                <p className="text-sm text-slate-600">59% Math proficiency (nearly double the state average) and Top 20% in Science.</p>
              </div>

              <div className="bg-blue-50 border border-blue-100 p-6 rounded-2xl">
                <p className="text-4xl font-extrabold text-blue-700 mb-2">30+</p>
                <h4 className="font-bold text-slate-900 mb-1">State Championships</h4>
                <p className="text-sm text-slate-600">A strong tradition of success across athletics, debate, and forensics.</p>
              </div>

              <div className="bg-blue-50 border border-blue-100 p-6 rounded-2xl">
                <p className="text-3xl font-extrabold text-blue-700 mb-2">National</p>
                <h4 className="font-bold text-slate-900 mb-1">Recognition</h4>
                <p className="text-sm text-slate-600">Honored with the National Blue Ribbon (2018) & ESEA Distinguished awards.</p>
              </div>
            </div>

          </div>

          {/* Bottom Row: 6 Championship & Culture Photos (Swapped 4 & 6) */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-16">
            <div className="aspect-[4/3] lg:aspect-square bg-slate-200 rounded-xl overflow-hidden shadow-sm border border-slate-100">
              <img src="/photos/edu-1.jpg" alt="Sterling Academics" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-[4/3] lg:aspect-square bg-slate-200 rounded-xl overflow-hidden shadow-sm border border-slate-100">
              <img src="/photos/edu-2.jpg" alt="Sterling Athletics Championship" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-[4/3] lg:aspect-square bg-slate-200 rounded-xl overflow-hidden shadow-sm border border-slate-100">
              <img src="/photos/edu-3.jpg" alt="Sterling College Campus" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-[4/3] lg:aspect-square bg-slate-200 rounded-xl overflow-hidden shadow-sm border border-slate-100">
              <img src="/photos/edu-6.jpg" alt="Sterling Student Life" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-[4/3] lg:aspect-square bg-slate-200 rounded-xl overflow-hidden shadow-sm border border-slate-100">
              <img src="/photos/edu-5.jpg" alt="Sterling Fine Arts" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-[4/3] lg:aspect-square bg-slate-200 rounded-xl overflow-hidden shadow-sm border border-slate-100">
              <img src="/photos/edu-4.jpg" alt="Sterling Community Participation" className="w-full h-full object-cover" />
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2: Infrastructure / Fiber */}
      <section id="infrastructure" className="w-full bg-slate-900 py-24 scroll-mt-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 md:flex md:justify-between md:items-end">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold text-white mb-4">Stay connected with true gigabit fiber.</h2>
              <p className="text-slate-400 text-lg">
                Your livelihood depends on your connection. That is why Sterling is wired with multiple enterprise-grade internet providers, giving you big-city bandwidth at highly competitive prices.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {fiberProviders.map((provider, index) => (
              <div key={index} className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-blue-500 transition-colors">
                <h3 className="text-xl font-bold text-white mb-1">{provider.name}</h3>
                <div className="flex flex-col gap-1 mb-4 mt-3">
                  <span className="inline-block bg-blue-900/50 text-blue-300 text-sm font-semibold px-3 py-1 rounded-full w-fit">
                    {provider.speed}
                  </span>
                  <span className="inline-block bg-emerald-900/30 text-emerald-400 text-sm font-semibold px-3 py-1 rounded-full w-fit">
                    {provider.price}
                  </span>
                </div>
                <p className="text-slate-300 leading-relaxed text-sm">{provider.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: Amenities & Lifestyle */}
      <section id="amenities" className="w-full bg-slate-50 py-24 border-b border-slate-200 scroll-mt-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
              You aren&apos;t giving up your lifestyle.
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Imagine wrapping up your workday on a gigabit connection, grabbing groceries without fighting traffic, and meeting a personal trainer—all within five minutes of your front door.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {amenities.map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col gap-4 hover:shadow-md transition-shadow">
                <div className="text-4xl">{item.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: Financials & Margin (The Closer) */}
      <section id="financials" className="w-full bg-blue-900 py-24 text-white scroll-mt-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Free up money for what actually matters.
            </h2>
            <p className="text-blue-200 text-lg leading-relaxed">
              When you work remotely, there&apos;s no reason to overpay for coastal mortgages and high state taxes. By keeping your current salary and bringing your family to Sterling, you can finally build some real financial breathing room.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side: The ROZ & Cost Breakdown */}
            <div className="space-y-8">
              <div className="bg-blue-800 rounded-3xl p-8 border border-blue-700 shadow-xl">
                <span className="text-blue-300 font-bold tracking-wider uppercase text-sm mb-2 block">The Rural Opportunity Zone</span>
                <h3 className="text-2xl font-extrabold mb-3">Pay zero state income tax for 5 years.</h3>
                <p className="text-blue-100 leading-relaxed mb-6">
                  It sounds too good to be true, but it&apos;s a real program backed by the state of Kansas. If you move here from out of state, your Kansas state income tax is completely waived for your first five years.
                </p>
                <div className="bg-blue-900 rounded-2xl p-6 border border-blue-600">
                  <p className="text-blue-200 text-sm font-semibold mb-1">If you make a $100k remote salary:</p>
                  <div className="flex items-end gap-3">
                    <span className="text-4xl font-black text-emerald-400">~$25,000</span>
                    <span className="text-blue-200 font-medium pb-1">saved over 5 years.</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">A lower cost of living across the board.</h3>
                <ul className="space-y-4 text-blue-100">
                  <li className="flex gap-3">
                    <span className="text-emerald-400 font-bold">✓</span>
                    <span><strong>Childcare:</strong> Daycare in major cities can easily rival a mortgage payment. Here, high-quality childcare is incredibly affordable and accessible.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-emerald-400 font-bold">✓</span>
                    <span><strong>Groceries & Fuel:</strong> Kansas grocery and fuel prices sit comfortably below the national average, giving you more flexibility at the checkout line.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-emerald-400 font-bold">✓</span>
                    <span><strong>Real Estate:</strong> The median home in Sterling is around $175,000. You can buy a beautiful 4-bedroom house with a big yard for less than a down payment in California.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Side: The Visual Budget Graph & Metro Comparison */}
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl text-slate-900 flex flex-col h-full">
              <h3 className="text-2xl font-bold mb-2">The Monthly Margin</h3>
              <p className="text-slate-500 mb-8 text-sm">Visualizing an $8,333/mo gross remote salary.</p>

              {/* Coastal Metro Bar */}
              <div className="mb-10">
                <div className="flex justify-between mb-2">
                  <span className="font-bold text-slate-800">Typical Major Metro</span>
                  <span className="text-slate-500 text-sm font-semibold">Tightly stretched</span>
                </div>
                <div className="w-full h-12 bg-slate-100 rounded-full flex overflow-hidden shadow-inner">
                  <div className="bg-red-500/80 h-full w-[30%] flex items-center justify-center border-r border-white/20" title="Taxes (Federal + High State)"></div>
                  <div className="bg-slate-400 h-full w-[45%] flex items-center justify-center border-r border-white/20" title="High Mortgage/Rent"></div>
                  <div className="bg-slate-300 h-full w-[20%] flex items-center justify-center border-r border-white/20" title="Groceries, Fuel, Expensive Childcare"></div>
                  <div className="bg-emerald-500 h-full w-[5%] flex items-center justify-center" title="Disposable Income"></div>
                </div>
                <div className="flex gap-4 mt-3 text-xs text-slate-500 font-medium justify-center">
                  <div className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-red-500/80"></span> Taxes</div>
                  <div className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-slate-400"></span> Housing</div>
                  <div className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-slate-300"></span> Living Costs</div>
                  <div className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-emerald-500"></span> Leftover</div>
                </div>
              </div>

              {/* Sterling Bar */}
              <div className="mb-10">
                <div className="flex justify-between mb-2">
                  <span className="font-bold text-slate-800">Sterling, KS</span>
                  <span className="text-emerald-600 text-sm font-bold uppercase tracking-wide">Room to save & travel</span>
                </div>
                <div className="w-full h-12 bg-slate-100 rounded-full flex overflow-hidden shadow-inner ring-2 ring-emerald-500 ring-offset-2">
                  <div className="bg-red-500/80 h-full w-[20%] flex items-center justify-center border-r border-white/20" title="Federal Taxes Only"></div>
                  <div className="bg-slate-400 h-full w-[15%] flex items-center justify-center border-r border-white/20" title="Low Mortgage"></div>
                  <div className="bg-slate-300 h-full w-[15%] flex items-center justify-center border-r border-white/20" title="Affordable Groceries, Fuel, Childcare"></div>
                  <div className="bg-emerald-500 h-full w-[50%] flex items-center justify-center text-white font-bold text-sm" title="Disposable Income">
                    Money Left Over
                  </div>
                </div>
              </div>

              {/* Metro List */}
              <div className="mt-auto border-t border-slate-100 pt-6">
                <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Compare Median Home Prices</h4>
                <div className="space-y-3 h-48 overflow-y-auto pr-2 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-slate-100 [&::-webkit-scrollbar-thumb]:bg-slate-300 [&::-webkit-scrollbar-thumb]:rounded-full">
                  
                  {/* Sterling Anchor in List */}
                  <div className="flex justify-between items-center p-3 bg-emerald-50 rounded-lg border border-emerald-100">
                    <div>
                      <p className="font-bold text-emerald-800">Sterling, KS</p>
                      <p className="text-emerald-600 text-xs font-semibold uppercase">0% State Tax (Up to 5 Yrs)</p>
                    </div>
                    <p className="font-bold text-emerald-700 text-lg">$175,000</p>
                  </div>

                  {cityComparisons.map((city, index) => (
                    <div key={index} className="flex justify-between items-center p-2 rounded-lg hover:bg-slate-50 transition-colors">
                      <div>
                        <p className="font-semibold text-slate-700">{city.city}</p>
                        <p className="text-slate-400 text-xs font-medium uppercase">{city.tax}</p>
                      </div>
                      <p className="font-semibold text-slate-900">{city.price}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 mb-12">
        <div className="bg-blue-100 rounded-3xl p-10 text-center border border-blue-200">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Want to see the numbers for yourself?</h2>
          <p className="text-blue-800 mb-8 max-w-2xl mx-auto text-lg">
            Connect with our team and let&apos;s talk about how the Kansas tax waivers and local real estate could work for your family&apos;s budget.
          </p>
          <Link href="/#guide" className="inline-block px-8 py-4 bg-blue-700 text-white font-bold rounded-xl shadow hover:bg-blue-800 transition-colors">
            Get the Relocation Guide
          </Link>
        </div>
      </div>

    </main>
  );
}