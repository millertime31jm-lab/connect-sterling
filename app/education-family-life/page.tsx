import Link from "next/link";

const educationPath = [
  {
    title: "Start with childcare.",
    image: "/images/sterling/people/sterling-people-kids-playing.jpg",
    description:
      "For young families, childcare can decide whether a move is even possible. Lil Cub Childcare gives Sterling an important local foundation for early childhood care.",
    proof:
      "This is one of the first questions many families need answered before they can seriously consider Sterling.",
    href: "/ask-connect-sterling#ask-form",
    cta: "Ask about childcare",
  },
  {
    title: "Choose schools where your kids can be known.",
    image: "/images/sterling/schools/sterling-schools-grade-school-ididaprob.jpg",
    description:
      "Sterling USD 376 gives students a place to learn, compete, perform, lead, and grow up around adults who know more than just their name on a roster.",
    proof:
      "USD 376 highlights strong graduation rates, small student-to-teacher ratios, national grade school recognition, and broad student opportunities.",
    href: "https://www.usd376.com/",
    cta: "Visit USD 376",
  },
  {
    title: "Get the college-town bonus.",
    image: "/images/sterling/college/sterling-college-cooper-hall.jpg",
    description:
      "Sterling College adds athletics, theatre, music, speakers, service, students, and campus activity that most towns Sterling’s size do not have.",
    proof:
      "For families, that means more events, more culture, more activity, and more energy in town.",
    href: "https://www.sterling.edu/",
    cta: "Visit Sterling College",
  },
];

const schoolStats = [
  {
    value: "94%",
    label: "Graduation rate",
    detail: "A confidence builder for families evaluating long-term fit.",
  },
  {
    value: "10:1",
    label: "Student-to-teacher ratio",
    detail: "A smaller environment where students can be known.",
  },
  {
    value: "2018",
    label: "National Blue Ribbon School",
    detail: "Sterling Grade School earned national recognition.",
  },
  {
    value: "2024",
    label: "National ESEA Distinguished School",
    detail: "Another strong signal at the elementary level.",
  },
];

const sportsHighlights = [
  {
    title: "Boys Basketball",
    image: "/images/sterling/sports/sterling-sports-basketball-champions-1.jpg",
    description:
      "Basketball is part of Sterling’s winter heartbeat. Sterling boys basketball has built one of the strongest recent small-school runs in Kansas.",
    whyItMatters:
      "Your kids can experience a small-school setting without giving up the energy of a serious winning culture.",
    href: "https://www.usd376.com/events?section_ids=189709&view=cal-month",
    cta: "View USD 376 athletics",
  },
  {
    title: "Football",
    image: "/images/sterling/sports/sterling-sports-football.JPG",
    description:
      "Football nights bring Sterling together: students, parents, grandparents, alumni, younger kids, and neighbors under the lights.",
    whyItMatters:
      "Game night is one of the easiest places for a new family to start recognizing faces and feeling part of the town.",
    href: "https://www.usd376.com/events?section_ids=189709&view=cal-month",
    cta: "View football and athletics",
  },
  {
    title: "Tennis",
    image: "/images/sterling/sports/sterling-sports-jr-high-tennis.jpg",
    description:
      "Sterling’s athletic story is not limited to one or two headline sports. Tennis is part of the broader championship culture.",
    whyItMatters:
      "More programs means more students can find their lane, compete, contribute, and be part of something excellent.",
    href: "https://www.usd376.com/events?section_ids=189709&view=cal-month",
    cta: "Explore athletics",
  },
  {
    title: "Track & Field",
    image: "/images/sterling/sports/sterling-sports-track.jpg",
    description:
      "Track and field gives students many ways to compete: speed, endurance, jumps, throws, relays, discipline, and personal growth.",
    whyItMatters:
      "Some kids find their confidence in a team sport. Others find it in the quiet discipline of beating their own best mark.",
    href: "https://www.usd376.com/events?section_ids=189709&view=cal-month",
    cta: "Explore track and activities",
  },
  {
    title: "Girls Basketball",
    image: "/images/sterling/sports/sterling-sports-basketball-girls-1.jpg",
    alt: "Sterling girls basketball players in action during a game",
    description:
      "Sterling’s competitive culture extends across boys and girls programs, giving daughters and sons alike a chance to be part of strong teams.",
    whyItMatters:
      "Families want their kids to have opportunity. Sterling gives students a chance to participate and compete.",
    href: "https://www.usd376.com/events?section_ids=189709&view=cal-month",
    cta: "View girls athletics",
  },
  {
    title: "More Ways to Compete",
    image: "/images/sterling/sports/sterling-sports-volleyball.JPG",
    description:
      "Students can explore sports like cross country, volleyball, wrestling, baseball, softball, golf, soccer, cheer, and more.",
    whyItMatters:
      "In a smaller school, kids often get the chance to try multiple sports, discover what they love, and contribute earlier.",
    href: "https://www.usd376.com/events?section_ids=189709&view=cal-month",
    cta: "Explore all athletics",
  },
];

const activityCards = [
  {
    title: "Forensics",
    image: "/images/sterling/schools/sterling-schools-forensics-champions.jpg",
    description:
      "Sterling is not small when it comes to competitive speech. Sterling High School’s forensics tradition includes 30 state titles.",
    whyItMatters:
      "Students build confidence, communication, stage presence, quick thinking, and courage in front of a room.",
    href: "https://www.usd376.com/",
    cta: "Explore USD 376",
  },
  {
    title: "Debate",
    image: "/images/sterling/schools/sterling-schools-debate.jpg",
    alt: "Sterling students competing in a debate event",
    description:
      "Sterling’s debate tradition gives students a serious intellectual competition outlet in a small-school setting.",
    whyItMatters:
      "Students learn to reason, prepare, speak clearly, listen carefully, and defend ideas under pressure.",
    href: "https://www.usd376.com/",
    cta: "Explore academic activities",
  },
  {
    title: "Fine Arts & Performing Arts",
    image: "/images/sterling/schools/sterling-schools-band-choir.jpg",
    description:
      "Sterling students have opportunities in band, vocal music, theatre, performing arts, and creative expression.",
    whyItMatters:
      "Not every child finds confidence on a field or court. The stage, music room, and auditorium matter too.",
    href: "https://www.usd376.com/",
    cta: "Explore USD 376 programs",
  },
  {
    title: "Science Olympiad & Quiz Bowl",
    image: "/images/sterling/schools/sterling-schools-grade-school-1.jpg",
    description:
      "Students who love problem-solving, knowledge, and challenge can find academic competition through programs like Science Olympiad and Quiz Bowl.",
    whyItMatters:
      "A small-town school can still stretch curious students and give them places to compete.",
    href: "https://www.usd376.com/page/district-information",
    cta: "Read district information",
  },
  {
    title: "FFA, FBLA & Student Organizations",
    image: "/images/sterling/schools/sterling-schools-prom-2.JPG",
    description:
      "Students can build leadership and real-world skills through organizations like FFA, FBLA, FCCLA, student leadership, and service activities.",
    whyItMatters:
      "These programs help kids practice responsibility, teamwork, communication, entrepreneurship, and service.",
    href: "https://www.usd376.com/page/district-information",
    cta: "Explore student opportunities",
  },
  {
    title: "Music, Theatre & School Events",
    image: "/images/sterling/schools/sterling-schools-band.jpg",
    description:
      "Concerts, plays, performances, and school events give students more ways to be seen and give families more reasons to gather.",
    whyItMatters:
      "Community pride is built in gyms, stadiums, auditoriums, classrooms, and every place kids get celebrated.",
    href: "https://www.usd376.com/",
    cta: "Explore school life",
  },
];

const familyLife = [
  {
    title: "Your child can be known.",
    description:
      "Teachers, coaches, neighbors, and families often know the whole child, not just the classroom version.",
  },
  {
    title: "Your child can try more.",
    description:
      "Students have room to participate across sports, arts, academics, leadership, service, and school life.",
  },
  {
    title: "Your child can compete with winners.",
    description:
      "Sterling gives students a chance to participate in a small-school environment while stepping into programs with real championship history.",
  },
];

export const metadata = {
  title: "Education & Family Life | Connect Sterling",
  description:
    "Explore education and family life in Sterling, Kansas, from Lil Cub Childcare to Sterling USD 376 to Sterling College.",
};

export default function EducationFamilyLifePage() {
  return (
    <main className="bg-stone-50 text-slate-950">
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0">
          <img
            src="/images/sterling/schools/sterling-schools-grade-school-1.jpg"
            alt="Students gathered on school grounds in Sterling"
            className="h-full w-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/95 via-emerald-950/75 to-amber-900/70" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:py-32">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Your kids can be known, challenged, involved, and surrounded by people who care.
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-100 sm:text-xl">
              Sterling gives families a full education path from childcare through
              college, with strong school culture, championship sports, standout
              activities, and a community that still shows up for kids.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="https://www.usd376.com/page/enrollment"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-slate-950 shadow-sm transition hover:bg-amber-100"
              >
                View USD 376 Enrollment
              </Link>
              <Link
                href="https://www.usd376.com/events?section_ids=189709&view=cal-month"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/30 bg-white/10 px-6 py-3 text-center text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
              >
                View HS & JH Athletics
              </Link>
              <Link
                href="/ask-connect-sterling#ask-form"
                className="rounded-full border border-white/30 bg-white/10 px-6 py-3 text-center text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
              >
                Ask about schools
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-amber-100 via-orange-50 to-emerald-100">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
              You are not just choosing a school. You are choosing part of your child’s childhood.
            </h2>
          </div>

          <div className="space-y-5 text-lg leading-8 text-slate-700">
            <p>
              A school shapes friendships, confidence, values, mentors, routines,
              activities, and the way a child experiences community.
            </p>
            <p>
              Sterling’s strength is not only that students can learn here. It is that
              they can be seen here. They can try, lead, compete, perform, serve, and
              grow up surrounded by adults who care about them beyond the classroom.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
              From childcare to college, Sterling gives families a real education path.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              Most towns Sterling’s size cannot say that. Families can start with
              early childhood care, move through local public schools, and still have
              the energy of a college town right here.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {educationPath.map((item) => {
              const isExternal = item.href.startsWith("http");

              return (
                <Link
                  key={item.title}
                  href={item.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noreferrer" : undefined}
                  className="group flex h-full overflow-hidden rounded-[2rem] bg-stone-50 shadow-sm ring-1 ring-stone-200 transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <article className="flex h-full w-full flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/10 to-transparent" />
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-xl font-bold text-slate-950 group-hover:text-amber-800">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-slate-700">
                      {item.description}
                    </p>
                    <div className="mt-5 rounded-2xl bg-white p-4 text-sm leading-6 text-slate-600 ring-1 ring-stone-200">
                      {item.proof}
                    </div>
                    <span className="mt-5 inline-flex text-sm font-semibold text-emerald-800">
                      {item.cta} →
                    </span>
                  </div>
                  </article>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
              Families need more than a warm feeling. They need reasons to believe.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Sterling gives families proof points that matter: small student-to-teacher
              ratios, strong graduation rates, national grade school recognition, and a
              broad set of opportunities for students.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {schoolStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[2rem] bg-white/10 p-6 ring-1 ring-white/10"
              >
                <div className="text-3xl font-bold text-amber-200">{stat.value}</div>
                <div className="mt-2 font-semibold text-white">{stat.label}</div>
                <p className="mt-3 text-sm leading-6 text-slate-300">{stat.detail}</p>
              </div>
            ))}
          </div>

          <p className="mt-6 text-xs leading-5 text-slate-400">
            Source notes: Confirm current USD 376 data before major paid promotion.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
              Your kids can have a chance to play, and a chance to win.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              Sports are a major part of Sterling’s culture. Games bring the town
              together, give students shared identity, and give families one of the
              easiest ways to connect with other families.
            </p>
          </div>

          <div className="rounded-[2rem] bg-gradient-to-br from-slate-950 to-emerald-900 p-8 text-white shadow-sm">
            <h3 className="text-3xl font-bold tracking-tight">
              Community pride becomes visible on game night.
            </h3>
            <p className="mt-5 text-base leading-7 text-slate-200">
              You see students competing, parents volunteering, grandparents in the
              stands, younger kids watching the older kids, and newcomers finding
              people to sit with. That is culture you can feel.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {sportsHighlights.map((card) => {
              const isExternal = card.href.startsWith("http");

              return (
                <Link
                  key={card.title}
                  href={card.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noreferrer" : undefined}
                  className="group overflow-hidden rounded-[2rem] bg-stone-50 shadow-sm ring-1 ring-stone-200 transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.alt ?? card.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/10 to-transparent" />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-950 group-hover:text-amber-800">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-slate-700">
                      {card.description}
                    </p>
                    <div className="mt-5 rounded-2xl bg-amber-50 p-4 text-sm leading-6 text-slate-700 ring-1 ring-amber-100">
                      <span className="font-semibold">Why it matters: </span>
                      {card.whyItMatters}
                    </div>
                    <span className="mt-5 inline-flex text-sm font-semibold text-emerald-800">
                      {card.cta} →
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

          <p className="mt-6 text-xs leading-5 text-slate-500">
            Source notes: Confirm athletic title history locally before major paid promotion.
          </p>
        </div>
      </section>

      <section className="bg-stone-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
              Your child can find a place to grow beyond the gym and field.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              Some students come alive in speech, debate, music, theatre, science,
              business, agriculture, leadership, or service. Sterling gives kids more
              than one way to build confidence.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {activityCards.map((card) => {
              const isExternal = card.href.startsWith("http");

              return (
                <Link
                  key={card.title}
                  href={card.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noreferrer" : undefined}
                  className="group overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-stone-200 transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.alt ?? card.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/10 to-transparent" />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-950 group-hover:text-amber-800">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-slate-700">
                      {card.description}
                    </p>
                    <div className="mt-5 rounded-2xl bg-amber-50 p-4 text-sm leading-6 text-slate-700 ring-1 ring-amber-100">
                      <span className="font-semibold">Why it matters: </span>
                      {card.whyItMatters}
                    </div>
                    <span className="mt-5 inline-flex text-sm font-semibold text-emerald-800">
                      {card.cta} →
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-amber-100 via-orange-50 to-emerald-100">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-16 sm:px-6 lg:grid-cols-3">
          {familyLife.map((item) => (
            <div key={item.title} className="rounded-[2rem] bg-white p-8 ring-1 ring-amber-100">
              <h3 className="text-2xl font-bold text-slate-950">{item.title}</h3>
              <p className="mt-4 text-base leading-7 text-slate-700">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0">
          <img
            src="/images/sterling/people/sterling-people-kids-playing.jpg"
            alt="Children playing together in Sterling"
            className="h-full w-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-950/85 to-emerald-950/80" />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
              Why one family chose Sterling.
            </h2>
          </div>

          <blockquote className="rounded-[2rem] bg-white p-8 text-slate-950 shadow-sm">
            <p className="text-xl leading-9">
              “The school system played and continues to play a central role in our
              choice to live and raise our family in Sterling. We wanted our kids in
              a place where they could be known, challenged, involved, and surrounded
              by people who cared about them beyond the classroom.”
            </p>
            <footer className="mt-5 font-semibold">
              Jed Miller, local parent
            </footer>
          </blockquote>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
              Sterling College gives the town another layer of energy.
            </h2>
          </div>

          <div className="space-y-5 text-lg leading-8 text-slate-700">
            <p>
              Sterling College adds athletics, arts, service, students, events, and
              young adults to the life of the town. That gives Sterling more than a
              school system. It gives the community a broader education ecosystem.
            </p>
            <p>
              Your family can experience college athletics, theatre, music, student
              service, guest speakers, and a steady rhythm of activity that helps the
              town feel alive.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="https://www.sterling.edu/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Visit Sterling College
              </Link>
              <Link
                href="/community-calendar"
                className="inline-flex rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-stone-100"
              >
                Find Community Calendars
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-slate-950 via-emerald-950 to-amber-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
              Ask the school questions that matter to your family.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-200">
              Whether you are asking about enrollment, childcare, youth activities,
              sports, churches, housing, or what daily life feels like, Connect Sterling
              can help point you to the right local contact.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/ask-connect-sterling#ask-form"
                className="rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-slate-950 transition hover:bg-amber-100"
              >
                Ask Connect Sterling
              </Link>
              <Link
                href="/move-here"
                className="rounded-full border border-white/30 bg-white/10 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/20"
              >
                Explore Moving Here
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
