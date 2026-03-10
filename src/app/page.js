export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <nav className="sticky top-0 z-50 border-b border-zinc-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="text-lg font-semibold tracking-tight text-zinc-950">
            Backend<span className="text-emerald-600">Rescue</span>
          </a>

          <div className="hidden items-center gap-6 text-sm text-zinc-600 md:flex">
            <a href="#services" className="hover:text-zinc-950">Services</a>
            <a href="#projects" className="hover:text-zinc-950">Projects</a>
            <a href="#problems" className="hover:text-zinc-950">Problems</a>
            <a href="#approach" className="hover:text-zinc-950">Approach</a>
            <a href="#about" className="hover:text-zinc-950">About</a>
            <a href="#tech" className="hover:text-zinc-950">Tech</a>
            <a href="#contact" className="hover:text-zinc-950">Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO */}

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
            and stabilize messy systems so they become easier to maintain,
            debug, and scale.
          </p>

          <p className="mt-4 text-sm text-zinc-500">
            Built by Curtis Fawcett for teams that need practical backend help.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="mailto:hello@backendrescue.dev"
              className="rounded-xl bg-zinc-950 px-6 py-3 text-sm font-medium text-white hover:bg-zinc-800"
            >
              Start a Conversation
            </a>

            <a
              href="#services"
              className="rounded-xl border border-zinc-300 px-6 py-3 text-sm font-medium text-zinc-900 hover:border-emerald-600 hover:text-emerald-700"
            >
              View Services
            </a>
          </div>
        </div>

        <div className="mt-16 grid gap-6 border-t border-zinc-200 pt-10 md:grid-cols-3">
          <div className="rounded-2xl bg-zinc-50 p-6">
            <p className="font-semibold">Refactoring</p>
            <p className="mt-2 text-sm text-zinc-600">
              Clean up difficult code without breaking production behavior.
            </p>
          </div>

          <div className="rounded-2xl bg-zinc-50 p-6">
            <p className="font-semibold">Debugging</p>
            <p className="mt-2 text-sm text-zinc-600">
              Trace confusing backend logic and isolate the real issue.
            </p>
          </div>

          <div className="rounded-2xl bg-zinc-50 p-6">
            <p className="font-semibold">Stabilization</p>
            <p className="mt-2 text-sm text-zinc-600">
              Make systems more reliable and easier for teams to maintain.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}

      <section id="services" className="border-t border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl font-bold text-zinc-950">Services</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-zinc-200 bg-white p-6">
              <h3 className="font-semibold">Legacy system refactoring</h3>
              <p className="mt-3 text-sm text-zinc-600">
                Clean up old backend code so it becomes easier to understand,
                maintain, and extend.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-6">
              <h3 className="font-semibold">Debugging complex logic</h3>
              <p className="mt-3 text-sm text-zinc-600">
                Track down confusing bugs and brittle logic that keeps causing
                production issues.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-6">
              <h3 className="font-semibold">System stabilization</h3>
              <p className="mt-3 text-sm text-zinc-600">
                Improve reliability and structure so your backend stops slowing
                your team down.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT */}

      <section id="projects" className="border-t border-zinc-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl font-bold text-zinc-950">Example Project</h2>

          <div className="mt-10 rounded-3xl border border-zinc-200 bg-zinc-50 p-8 grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold">
                BackendRescue Website
              </h3>

              <p className="mt-4 text-zinc-600 leading-8">
                A modern developer service website built with Next.js and
                Tailwind CSS to present backend-focused services clearly and
                professionally.
              </p>
            </div>

            <div className="space-y-4 text-sm">
              <div>
                <p className="font-semibold text-zinc-500">Technologies</p>
                <p>Next.js · React · Tailwind · Vercel</p>
              </div>

              <div>
                <p className="font-semibold text-zinc-500">Outcome</p>
                <p>
                  A fast, responsive site ready for deployment and client
                  outreach.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEMS */}

      <section id="problems" className="border-t border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl font-bold">Problems I Solve</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-6 border border-zinc-200">
              <h3 className="font-semibold">Hard-to-follow code paths</h3>
              <p className="mt-2 text-sm text-zinc-600">
                Logic spread across too many files or services.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 border border-zinc-200">
              <h3 className="font-semibold">Fragile backend changes</h3>
              <p className="mt-2 text-sm text-zinc-600">
                Small changes cause unexpected side effects.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 border border-zinc-200">
              <h3 className="font-semibold">Recurring production issues</h3>
              <p className="mt-2 text-sm text-zinc-600">
                The same bugs keep coming back.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 border border-zinc-200">
              <h3 className="font-semibold">Technical debt slowing teams</h3>
              <p className="mt-2 text-sm text-zinc-600">
                Backend complexity blocking progress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* APPROACH */}

      <section id="approach" className="border-t border-zinc-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl font-bold">My Approach</h2>

          <div className="mt-10 grid md:grid-cols-4 gap-6">
            {["Understand", "Identify", "Refactor", "Clarify"].map((step, i) => (
              <div key={step} className="bg-zinc-50 p-6 rounded-2xl">
                <p className="text-emerald-600 font-semibold">0{i + 1}</p>
                <p className="mt-2 font-semibold">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}

      <section id="about" className="border-t border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-6 py-20 grid md:grid-cols-2 gap-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
              About
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              I’m Curtis Fawcett, the developer behind BackendRescue
            </h2>
          </div>

          <div>
            <p className="leading-8 text-zinc-600">
              I started BackendRescue to help teams deal with backend systems
              that have become difficult to understand, maintain, or safely
              change.
            </p>

            <p className="mt-4 leading-8 text-zinc-600">
              My goal is simple: make backend systems clearer, more stable, and
              less stressful to work on.
            </p>
          </div>
        </div>
      </section>

      {/* TECH */}

      <section id="tech" className="border-t border-zinc-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl font-bold">Tech</h2>

          <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "JavaScript",
              "TypeScript",
              "Node.js",
              "Next.js",
              "APIs",
              "Databases",
              "Authentication",
              "Debugging",
            ].map((tech) => (
              <div
                key={tech}
                className="rounded-xl border border-zinc-200 px-4 py-4 text-sm bg-zinc-50"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="border-t border-zinc-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="rounded-3xl bg-zinc-950 text-white px-10 py-14">
            <p className="text-sm uppercase text-emerald-400">Let's talk</p>

            <h2 className="mt-3 text-3xl font-bold">
              If your backend feels brittle or confusing, I'd be glad to hear
              what's going on.
            </h2>

            <a
              href="mailto:hello@backendrescue.dev"
              className="mt-8 inline-block rounded-xl bg-white text-zinc-900 px-6 py-3 font-medium"
            >
              Email hello@backendrescue.dev
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT */}

      <section id="contact" className="border-t border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <h2 className="text-3xl font-bold">Contact</h2>

          <p className="mt-4 text-zinc-600">
            Reach out if you are dealing with backend code that feels brittle or
            hard to understand.
          </p>

          <a
            href="mailto:hello@backendrescue.dev"
            className="mt-8 inline-block border border-zinc-300 px-6 py-3 rounded-xl"
          >
            hello@backendrescue.dev
          </a>
        </div>
      </section>

      <footer className="border-t border-zinc-200 py-10 text-center text-sm text-zinc-500">
        © {new Date().getFullYear()} BackendRescue · backendrescue.dev
      </footer>
    </main>
  );
}