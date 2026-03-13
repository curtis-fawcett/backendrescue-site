"use client";

import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "/projects", label: "Projects" },
    { href: "#results", label: "Results" },
    { href: "#who-i-help", label: "Who I Help" },
    { href: "#problems", label: "Problems" },
    { href: "#process", label: "Process" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <nav className="sticky top-0 z-50 border-b border-zinc-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a
            href="#"
            className="text-lg font-semibold tracking-tight"
            onClick={closeMenu}
          >
            Backend<span className="text-emerald-600">Rescue</span>
          </a>

          <div className="hidden items-center gap-6 text-sm text-zinc-600 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition hover:text-zinc-950"
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="inline-flex items-center justify-center rounded-xl border border-zinc-300 px-3 py-2 text-sm text-zinc-700 transition hover:bg-zinc-100 md:hidden"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>

        {open && (
          <div className="border-t border-zinc-200 bg-white md:hidden">
            <div className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4 text-sm text-zinc-700">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="rounded-lg px-2 py-2 transition hover:bg-zinc-100"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      <section className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <div className="pointer-events-none absolute inset-0 -z-10 flex justify-center overflow-hidden">
          <div className="h-[500px] w-[850px] rounded-full bg-emerald-500/10 blur-[120px]" />
        </div>

        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
              BackendRescue
            </p>

            <h1 className="text-5xl font-bold tracking-tight text-zinc-950 sm:text-6xl md:text-7xl">
              Fixing backend systems that have become hard to trust.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600 sm:text-xl">
              I help small teams and growing businesses clean up fragile backend
              code, debug recurring issues, and stabilize systems that have
              become difficult to maintain.
            </p>

            <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-500">
              If your backend feels brittle, confusing, or risky to change,
              BackendRescue helps make it clearer, safer, and easier to work on.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="mailto:hello@backendrescue.dev?subject=Backend%20help%20request"
                className="rounded-xl bg-zinc-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-zinc-800"
              >
                Request Backend Help
              </a>

              <a
                href="#services"
                className="rounded-xl border border-zinc-300 px-6 py-3 text-sm font-medium text-zinc-900 transition hover:border-emerald-600 hover:text-emerald-700"
              >
                View Services
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-4 text-sm text-zinc-500">
              <span>Refactoring</span>
              <span>•</span>
              <span>Debugging</span>
              <span>•</span>
              <span>Stabilization</span>
              <span>•</span>
              <span>Internal tools</span>
            </div>
          </div>

          <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
              When to bring me in
            </p>

            <div className="mt-6 space-y-5">
              <div className="rounded-2xl bg-white p-5 shadow-sm">
                <p className="font-semibold text-zinc-950">
                  Production bugs keep returning
                </p>
                <p className="mt-2 text-sm leading-7 text-zinc-600">
                  The same issues keep resurfacing because the underlying logic
                  is brittle or unclear.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-5 shadow-sm">
                <p className="font-semibold text-zinc-950">
                  The backend feels risky to change
                </p>
                <p className="mt-2 text-sm leading-7 text-zinc-600">
                  Small edits create side effects, slow releases, or break
                  unrelated behavior.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-5 shadow-sm">
                <p className="font-semibold text-zinc-950">
                  Your team needs clarity fast
                </p>
                <p className="mt-2 text-sm leading-7 text-zinc-600">
                  You need someone to trace the mess, identify the real problem,
                  and leave the system in a better state.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="border-t border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-zinc-950">Services</h2>
            <p className="mt-4 leading-8 text-zinc-600">
              Practical backend help for teams dealing with instability,
              technical debt, and hard-to-debug systems.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-zinc-950">
                Backend refactoring
              </h3>
              <p className="mt-3 text-sm leading-7 text-zinc-600">
                Clean up confusing backend code so it becomes easier to read,
                safer to change, and less stressful to maintain.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-zinc-950">
                Bug investigation & debugging
              </h3>
              <p className="mt-3 text-sm leading-7 text-zinc-600">
                Track down recurring issues, hidden failure points, and complex
                logic problems that waste team time.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-zinc-950">
                System stabilization
              </h3>
              <p className="mt-3 text-sm leading-7 text-zinc-600">
                Reduce fragility, improve structure, and make backend systems
                more reliable for day-to-day development.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="results" className="border-t border-zinc-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-zinc-950">
              What clients get
            </h2>
            <p className="mt-4 leading-8 text-zinc-600">
              BackendRescue is built around outcomes that matter to real teams,
              not just code changes.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-600">
                Clearer systems
              </p>
              <p className="mt-3 text-sm leading-7 text-zinc-600">
                Cleaner logic, better structure, and backend flows that are
                easier to understand.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-600">
                More stability
              </p>
              <p className="mt-3 text-sm leading-7 text-zinc-600">
                Fewer repeat issues, fewer risky changes, and more confidence in
                production behavior.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-600">
                Faster momentum
              </p>
              <p className="mt-3 text-sm leading-7 text-zinc-600">
                Less time wasted untangling old problems and more time spent
                building forward.
              </p>
            </div>
          </div>

          <div className="mt-10 rounded-3xl border border-zinc-200 bg-zinc-50 p-8">
            <h3 className="text-xl font-semibold text-zinc-950">
              Good fit for projects like:
            </h3>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-white p-5">
                <p className="font-medium text-zinc-950">
                  Backend cleanup before growth
                </p>
                <p className="mt-2 text-sm leading-7 text-zinc-600">
                  When a system technically works, but the codebase is getting
                  harder to trust as the business grows.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-5">
                <p className="font-medium text-zinc-950">
                  Recurring bug investigations
                </p>
                <p className="mt-2 text-sm leading-7 text-zinc-600">
                  When the same production issues keep coming back and the team
                  needs root-cause clarity.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-5">
                <p className="font-medium text-zinc-950">
                  Refactoring brittle logic
                </p>
                <p className="mt-2 text-sm leading-7 text-zinc-600">
                  When important backend code has become too tangled to extend
                  safely.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-5">
                <p className="font-medium text-zinc-950">
                  Internal tool support
                </p>
                <p className="mt-2 text-sm leading-7 text-zinc-600">
                  When a business needs practical, focused developer help behind
                  the scenes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="who-i-help"
        className="border-t border-zinc-200 bg-zinc-50"
      >
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-zinc-950">Who I help</h2>
            <p className="mt-4 leading-8 text-zinc-600">
              BackendRescue is a strong fit for organizations that need focused
              backend help without the overhead of a large agency.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-zinc-200 bg-white p-6">
              <h3 className="font-semibold text-zinc-950">Small businesses</h3>
              <p className="mt-3 text-sm leading-7 text-zinc-600">
                For businesses relying on software that has become difficult to
                support or risky to change.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-6">
              <h3 className="font-semibold text-zinc-950">Startups</h3>
              <p className="mt-3 text-sm leading-7 text-zinc-600">
                For growing teams that need to reduce technical debt and improve
                backend reliability before it slows them down.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-6">
              <h3 className="font-semibold text-zinc-950">
                Teams with messy systems
              </h3>
              <p className="mt-3 text-sm leading-7 text-zinc-600">
                For teams dealing with hard-to-follow logic, fragile changes,
                and recurring backend pain.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="problems" className="border-t border-zinc-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-zinc-950">
              Problems I solve
            </h2>
            <p className="mt-4 leading-8 text-zinc-600">
              These are the kinds of backend issues that quietly drain time,
              confidence, and delivery speed.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
              <h3 className="font-semibold text-zinc-950">
                Hard-to-follow code paths
              </h3>
              <p className="mt-2 text-sm leading-7 text-zinc-600">
                Logic spread across too many files, services, or layers.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
              <h3 className="font-semibold text-zinc-950">
                Fragile backend changes
              </h3>
              <p className="mt-2 text-sm leading-7 text-zinc-600">
                Small changes causing unexpected side effects.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
              <h3 className="font-semibold text-zinc-950">
                Recurring production issues
              </h3>
              <p className="mt-2 text-sm leading-7 text-zinc-600">
                The same bugs keep coming back because the root cause remains.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
              <h3 className="font-semibold text-zinc-950">
                Technical debt slowing teams
              </h3>
              <p className="mt-2 text-sm leading-7 text-zinc-600">
                Backend complexity blocking momentum and raising delivery risk.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="border-t border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-zinc-950">Process</h2>
            <p className="mt-4 leading-8 text-zinc-600">
              A practical approach focused on reducing confusion, identifying
              root causes, and leaving the backend in a stronger state.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {[
              {
                number: "01",
                title: "Assess",
                text: "Understand the backend flow, constraints, and risk before making changes.",
              },
              {
                number: "02",
                title: "Trace",
                text: "Follow the logic carefully to identify brittle areas and root causes.",
              },
              {
                number: "03",
                title: "Improve",
                text: "Refactor or fix the system with stability, clarity, and maintainability in mind.",
              },
              {
                number: "04",
                title: "Leave it stronger",
                text: "Make the code easier to trust, easier to support, and easier to extend.",
              },
            ].map((step) => (
              <div key={step.number} className="rounded-2xl bg-white p-6">
                <p className="font-semibold text-emerald-600">{step.number}</p>
                <p className="mt-2 font-semibold text-zinc-950">{step.title}</p>
                <p className="mt-3 text-sm leading-7 text-zinc-600">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="border-t border-zinc-200 bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
              About
            </p>
            <h2 className="mt-3 text-3xl font-bold text-zinc-950">
              I’m Curtis Fawcett, the developer behind BackendRescue
            </h2>
          </div>

          <div>
            <p className="leading-8 text-zinc-600">
              I started BackendRescue to help businesses and teams deal with
              backend systems that have become difficult to understand, maintain,
              or safely change. I’m especially drawn to the kinds of problems
              that slow real work down: messy logic, fragile code paths,
              recurring bugs, and technical debt.
            </p>

            <p className="mt-4 leading-8 text-zinc-600">
              My goal is simple: make backend systems clearer, more stable, and
              less stressful to work on. BackendRescue is focused on practical,
              hands-on backend improvement work for clients who need real help,
              not fluff.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="rounded-3xl border border-zinc-200 bg-white p-8 md:p-10">
            <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
                  Need help?
                </p>
                <h2 className="mt-3 text-3xl font-bold text-zinc-950">
                  If your backend feels brittle, confusing, or risky to change,
                  let’s talk.
                </h2>
                <p className="mt-4 max-w-2xl leading-8 text-zinc-600">
                  Send a short note about what’s going wrong, what stack you’re
                  using, and where things feel stuck.
                </p>
              </div>

              <div>
                <a
                  href="mailto:hello@backendrescue.dev?subject=Backend%20help%20request"
                  className="inline-block rounded-xl bg-zinc-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-zinc-800"
                >
                  Email BackendRescue
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-zinc-200 bg-white">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <h2 className="text-3xl font-bold text-zinc-950">
            Start a conversation
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-8 text-zinc-600">
            Tell me what your backend is doing, what’s breaking, or what feels
            too risky to touch. I’ll take a look and we can talk through next
            steps.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="mailto:hello@backendrescue.dev?subject=Backend%20help%20request"
              className="inline-block rounded-xl bg-zinc-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-zinc-800"
            >
              hello@backendrescue.dev
            </a>

            <a
              href="https://www.linkedin.com/in/curtis-fawcett-8a5a7922a"
              target="_blank"
              rel="noreferrer"
              className="inline-block rounded-xl border border-zinc-300 px-6 py-3 text-sm font-medium text-zinc-900 transition hover:border-emerald-600 hover:text-emerald-700"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-zinc-200 py-10 text-center text-sm text-zinc-500">
        <p>© {new Date().getFullYear()} BackendRescue</p>

        <div className="mt-4 flex justify-center gap-6">
          <a
            href="https://github.com/curtis-fawcett"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-zinc-900"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/curtis-fawcett-8a5a7922a"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-zinc-900"
          >
            LinkedIn
          </a>
        </div>

        <p className="mt-2">backendrescue.dev</p>
      </footer>
    </main>
  );
}