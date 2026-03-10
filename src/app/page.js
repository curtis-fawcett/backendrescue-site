export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <section className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6 py-24">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
          BackendRescue
        </p>

        <h1 className="max-w-4xl text-5xl font-bold tracking-tight text-zinc-950 sm:text-6xl">
          Untangling complex backend systems.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
          I help teams clean up fragile backend code so their systems become
          reliable, maintainable, and easier to work with.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="mailto:youremail@example.com"
            className="rounded-xl bg-zinc-950 px-5 py-3 text-sm font-medium text-white transition hover:bg-zinc-800"
          >
            Contact Me
          </a>

          <a
            href="#services"
            className="rounded-xl border border-zinc-300 px-5 py-3 text-sm font-medium text-zinc-900 transition hover:bg-zinc-100"
          >
            View Services
          </a>
        </div>
      </section>

      <section id="services" className="border-t border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-950">
            How I help
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-zinc-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-zinc-950">
                Legacy system refactoring
              </h3>
              <p className="mt-3 text-sm leading-7 text-zinc-600">
                I clean up difficult backend code so teams can safely maintain
                and extend their systems.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-zinc-950">
                Debugging complex logic
              </h3>
              <p className="mt-3 text-sm leading-7 text-zinc-600">
                I trace confusing business logic, identify fragile areas, and
                help teams fix issues without creating new ones.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-zinc-950">
                System stabilization
              </h3>
              <p className="mt-3 text-sm leading-7 text-zinc-600">
                I make backend systems more reliable, more predictable, and
                easier for developers to work on.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-200 bg-white">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-950">
            My approach
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-4">
            <div className="rounded-2xl bg-zinc-50 p-6">
              <p className="text-sm font-semibold text-zinc-500">01</p>
              <h3 className="mt-2 font-semibold text-zinc-950">
                Understand the flow
              </h3>
              <p className="mt-3 text-sm leading-7 text-zinc-600">
                I start by tracing the system and understanding where logic
                begins and how data moves through it.
              </p>
            </div>

            <div className="rounded-2xl bg-zinc-50 p-6">
              <p className="text-sm font-semibold text-zinc-500">02</p>
              <h3 className="mt-2 font-semibold text-zinc-950">
                Find the fragile parts
              </h3>
              <p className="mt-3 text-sm leading-7 text-zinc-600">
                I identify confusing, brittle, or hard-to-maintain sections of
                the backend.
              </p>
            </div>

            <div className="rounded-2xl bg-zinc-50 p-6">
              <p className="text-sm font-semibold text-zinc-500">03</p>
              <h3 className="mt-2 font-semibold text-zinc-950">
                Refactor safely
              </h3>
              <p className="mt-3 text-sm leading-7 text-zinc-600">
                I improve structure and readability while protecting the
                behavior the system depends on.
              </p>
            </div>

            <div className="rounded-2xl bg-zinc-50 p-6">
              <p className="text-sm font-semibold text-zinc-500">04</p>
              <h3 className="mt-2 font-semibold text-zinc-950">
                Leave it clearer
              </h3>
              <p className="mt-3 text-sm leading-7 text-zinc-600">
                The goal is simple: a backend system your team can understand,
                trust, and build on.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}