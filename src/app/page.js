export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <nav className="sticky top-0 z-50 border-b border-zinc-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="text-lg font-semibold tracking-tight text-zinc-950">
            Backend<span className="text-emerald-600">Rescue</span>
          </a>

          <div className="hidden items-center gap-6 text-sm text-zinc-600 md:flex">
            <a href="#services" className="transition hover:text-zinc-950">
              Services
            </a>
            <a href="#projects" className="transition hover:text-zinc-950">
              Projects
            </a>
            <a href="#problems" className="transition hover:text-zinc-950">
              Problems
            </a>
            <a href="#approach" className="transition hover:text-zinc-950">
              Approach
            </a>
            <a href="#about" className="transition hover:text-zinc-950">
              About
            </a>
            <a href="#tech" className="transition hover:text-zinc-950">
              Tech
            </a>
            <a href="#contact" className="transition hover:text-zinc-950">
              Contact
            </a>
          </div>
        </div>
      </nav>

      <section className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <div className="max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
            BackendRescue
          </p>

          <h1 className="text-5xl font-bold tracking-tight text-zinc-950 sm:text-6xl md:text-7xl">
            Untangling backend systems that have become hard to trust.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600 sm:text-xl">
            I help teams clean up fragile backend code, reduce technical debt,
            and stabilize messy systems so they become easier to maintain, debug,
            and scale.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="mailto:fawcett.curtis@gmail.com"
              className="rounded-xl bg-zinc-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-zinc-800"
            >
              Start a Conversation
            </a>

            <a
              href="#services"
              className="rounded-xl border border-zinc-300 px-6 py-3 text-sm font-medium text-zinc-900 transition hover:border-emerald-600 hover:text-emerald-700"
            >
              View Services
            </a>
          </div>
        </div>

        <div className="mt-16 grid gap-6 border-t border-zinc-200 pt-10 md:grid-cols-3">
          <div className="rounded-2xl bg-zinc-50 p-6">
            <p className="text-sm font-semibold text-zinc-950">Refactoring</p>
            <p className="mt-2 text-sm leading-7 text-zinc-600">
              Clean up difficult code without breaking the behavior the business
              depends on.
            </p>
          </div>

          <div className="rounded-2xl bg-zinc-50 p-6">
            <p className="text-sm font-semibold text-zinc-950">Debugging</p>
            <p className="mt-2 text-sm leading-7 text-zinc-600">
              Trace confusing backend logic and isolate the real cause of issues.
            </p>
          </div>

          <div className="rounded-2xl bg-zinc-50 p-6">
            <p className="text-sm font-semibold text-zinc-950">Stabilization</p>
            <p className="mt-2 text-sm leading-7 text-zinc-600">
              Make systems more reliable, predictable, and easier to support.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="border-t border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
              Services
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
              Focused backend help for difficult systems
            </h2>
            <p className="mt-4 leading-8 text-zinc-600">
              I work on backend problems that are risky to change, hard to
              follow, or slowing down your team’s momentum.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-zinc-950">
                Legacy system refactoring
              </h3>
              <p className="mt-3 text-sm leading-7 text-zinc-600">
                Clean up old or difficult backend code so it becomes easier to
                understand, maintain, and safely extend.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-zinc-950">
                Debugging complex logic
              </h3>
              <p className="mt-3 text-sm leading-7 text-zinc-600">
                Track down confusing bugs, hidden failure points, and brittle
                business logic that keeps resurfacing.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-zinc-950">
                System stabilization
              </h3>
              <p className="mt-3 text-sm leading-7 text-zinc-600">
                Improve reliability and structure so your backend feels less
                fragile and your team can move with more confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="border-t border-zinc-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
              Case Study
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
              Example project
            </h2>
            <p className="mt-4 leading-8 text-zinc-600">
              A real project that shows the type of work and presentation style
              behind BackendRescue.
            </p>
          </div>

          <div className="mt-10 rounded-3xl border border-zinc-200 bg-zinc-50 p-8">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="text-xl font-semibold text-zinc-950">
                  BackendRescue Website
                </h3>

                <p className="mt-4 leading-8 text-zinc-600">
                  A modern service website built with Next.js and Tailwind CSS
                  to present backend-focused freelance services in a clean,
                  credible, and conversion-friendly way.
                </p>

                <p className="mt-4 leading-8 text-zinc-600">
                  The project emphasizes clear messaging, strong visual
                  hierarchy, responsive layout, and a polished frontend
                  foundation that can grow into a larger business website over
                  time.
                </p>
              </div>

              <div className="space-y-5">
                <div>
                  <p className="text-sm font-semibold text-zinc-500">Problem</p>
                  <p className="mt-1 text-sm leading-7 text-zinc-700">
                    Create a professional developer service website with clear
                    messaging, strong branding, and a modern UI.
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-zinc-500">Solution</p>
                  <p className="mt-1 text-sm leading-7 text-zinc-700">
                    Built a polished one-page site using Next.js and Tailwind CSS
                    with structured sections, clear calls to action, and
                    backend-specific positioning.
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-zinc-500">
                    Technologies
                  </p>
                  <p className="mt-1 text-sm leading-7 text-zinc-700">
                    Next.js · React · Tailwind CSS · Vercel
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-zinc-500">Outcome</p>
                  <p className="mt-1 text-sm leading-7 text-zinc-700">
                    A fast, responsive website ready for deployment, brand
                    growth, and future client outreach.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="problems" className="border-t border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
              Problems I solve
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
              When the backend becomes the bottleneck
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-zinc-200 bg-white p-6">
              <h3 className="text-base font-semibold text-zinc-950">
                Hard-to-follow code paths
              </h3>
              <p className="mt-3 text-sm leading-7 text-zinc-600">
                Logic is spread across too many files, services, or layers,
                making behavior difficult to trace with confidence.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-6">
              <h3 className="text-base font-semibold text-zinc-950">
                Fragile changes
              </h3>
              <p className="mt-3 text-sm leading-7 text-zinc-600">
                Small updates create side effects because the system is tightly
                coupled or poorly structured.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-6">
              <h3 className="text-base font-semibold text-zinc-950">
                Recurring production issues
              </h3>
              <p className="mt-3 text-sm leading-7 text-zinc-600">
                The same bugs return because the root cause has not been clearly
                identified and cleaned up.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-6">
              <h3 className="text-base font-semibold text-zinc-950">
                Technical debt slowing delivery
              </h3>
              <p className="mt-3 text-sm leading-7 text-zinc-600">
                Teams spend too much time working around backend issues instead
                of building new features confidently.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="approach" className="border-t border-zinc-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
              Approach
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
              Careful, practical backend improvement
            </h2>
            <p className="mt-4 leading-8 text-zinc-600">
              I focus on understanding the system first, then making deliberate
              improvements that reduce confusion and risk.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-4">
            <div className="rounded-2xl bg-zinc-50 p-6">
              <p className="text-sm font-semibold text-emerald-600">01</p>
              <h3 className="mt-2 font-semibold text-zinc-950">
                Understand the flow
              </h3>
              <p className="mt-3 text-sm leading-7 text-zinc-600">
                Trace how requests, logic, and data move through the system.
              </p>
            </div>

            <div className="rounded-2xl bg-zinc-50 p-6">
              <p className="text-sm font-semibold text-emerald-600">02</p>
              <h3 className="mt-2 font-semibold text-zinc-950">
                Identify the weak points
              </h3>
              <p className="mt-3 text-sm leading-7 text-zinc-600">
                Find brittle areas, confusing logic, and patterns behind
                recurring issues.
              </p>
            </div>

            <div className="rounded-2xl bg-zinc-50 p-6">
              <p className="text-sm font-semibold text-emerald-600">03</p>
              <h3 className="mt-2 font-semibold text-zinc-950">
                Refactor safely
              </h3>
              <p className="mt-3 text-sm leading-7 text-zinc-600">
                Improve structure and readability while protecting important
                behavior.
              </p>
            </div>

            <div className="rounded-2xl bg-zinc-50 p-6">
              <p className="text-sm font-semibold text-emerald-600">04</p>
              <h3 className="mt-2 font-semibold text-zinc-950">
                Leave it clearer
              </h3>
              <p className="mt-3 text-sm leading-7 text-zinc-600">
                The result is a backend your team can understand, trust, and
                keep building on.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="border-t border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
                About
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
                BackendRescue is run by Curtis Fawcett
              </h2>
            </div>

            <div>
              <p className="leading-8 text-zinc-600">
                I built BackendRescue around one goal: helping teams regain
                control of backend systems that have become difficult to
                understand, maintain, or safely change.
              </p>

              <p className="mt-4 leading-8 text-zinc-600">
                The focus is practical improvement — tracing messy logic,
                reducing technical debt, and making backend code clearer and more
                reliable for the people who have to work on it every day.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
                Who I help
              </p>
              <h3 className="mt-3 text-2xl font-bold tracking-tight text-zinc-950">
                Teams dealing with messy or fragile backend systems
              </h3>
              <p className="mt-4 leading-8 text-zinc-600">
                This is a fit for startups, small businesses, and growing teams
                that need backend clarity without wasting time on endless
                rewrites.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
                What you get
              </p>
              <h3 className="mt-3 text-2xl font-bold tracking-tight text-zinc-950">
                Cleaner systems and lower-risk changes
              </h3>
              <p className="mt-4 leading-8 text-zinc-600">
                The goal is not just to patch bugs, but to leave the backend in
                a better state — clearer structure, more confidence, and fewer
                recurring problems.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="tech" className="border-t border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
              Tech
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
              Comfortable working across modern backend environments
            </h2>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            {[
              "JavaScript",
              "TypeScript",
              "Node.js",
              "Next.js",
              "APIs",
              "Databases",
              "Authentication",
              "System Debugging",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-zinc-200 bg-white px-4 py-4 text-sm font-medium text-zinc-700"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="rounded-3xl bg-zinc-950 px-8 py-12 text-white sm:px-12">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
                Ready to talk?
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                If your backend feels fragile, confusing, or difficult to
                change, let’s talk.
              </h2>
              <p className="mt-4 leading-8 text-zinc-300">
                Send a short message about what is breaking, what is slowing your
                team down, or what part of the system has become hard to manage.
              </p>

              <a
                href="mailto:hello@backendrescue.dev"
                className="mt-8 inline-block rounded-xl bg-white px-6 py-3 text-sm font-medium text-zinc-950 transition hover:bg-zinc-200"
              >
                Email BackendRescue
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
            Contact
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
            Let’s fix the parts slowing your team down
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-8 text-zinc-600">
            Reach out if you are dealing with backend code that feels brittle,
            hard to understand, or risky to change.
          </p>

          <a
            href="mailto:hello@backendrescue.dev"
            className="mt-8 inline-block rounded-xl border border-zinc-300 px-6 py-3 text-sm font-medium text-zinc-900 transition hover:border-emerald-600 hover:text-emerald-700"
          >
            hello@backendrescue.dev
          </a>

          <p className="mt-4 text-sm text-zinc-500">backendrescue.dev</p>
        </div>
      </section>

      <footer className="border-t border-zinc-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-10 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} BackendRescue. All rights reserved.</p>
          <p>Backend cleanup, debugging, and stabilization</p>
        </div>
      </footer>
    </main>
  );
}