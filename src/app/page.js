"use client";

import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

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
            <a href="#services" className="transition hover:text-zinc-950">
              Services
            </a>
            <a href="#projects" className="transition hover:text-zinc-950">
              Selected Work
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
              <a
                href="#services"
                onClick={closeMenu}
                className="rounded-lg px-2 py-2 transition hover:bg-zinc-100"
              >
                Services
              </a>
              <a
                href="#projects"
                onClick={closeMenu}
                className="rounded-lg px-2 py-2 transition hover:bg-zinc-100"
              >
                Selected Work
              </a>
              <a
                href="#problems"
                onClick={closeMenu}
                className="rounded-lg px-2 py-2 transition hover:bg-zinc-100"
              >
                Problems
              </a>
              <a
                href="#approach"
                onClick={closeMenu}
                className="rounded-lg px-2 py-2 transition hover:bg-zinc-100"
              >
                Approach
              </a>
              <a
                href="#about"
                onClick={closeMenu}
                className="rounded-lg px-2 py-2 transition hover:bg-zinc-100"
              >
                About
              </a>
              <a
                href="#tech"
                onClick={closeMenu}
                className="rounded-lg px-2 py-2 transition hover:bg-zinc-100"
              >
                Tech
              </a>
              <a
                href="#contact"
                onClick={closeMenu}
                className="rounded-lg px-2 py-2 transition hover:bg-zinc-100"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      <section className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <div className="grid items-center gap-14 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="max-w-3xl">
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
              Built by Curtis Fawcett for teams that need practical backend
              help.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="mailto:hello@backendrescue.dev"
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

            <div className="mt-6 flex flex-wrap gap-4 text-sm text-zinc-500">
              <a
                href="https://github.com/curtis-fawcett"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-zinc-900"
              >
                View GitHub →
              </a>
              <a
                href="https://www.linkedin.com/in/curtis-fawcett-8a5a7922a"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-zinc-900"
              >
                Connect on LinkedIn →
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
              Focus areas
            </p>

            <div className="mt-6 space-y-5">
              <div className="rounded-2xl bg-white p-5 shadow-sm">
                <p className="font-semibold text-zinc-950">Refactoring</p>
                <p className="mt-2 text-sm leading-7 text-zinc-600">
                  Clean up difficult backend code without breaking production
                  behavior.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-5 shadow-sm">
                <p className="font-semibold text-zinc-950">Debugging</p>
                <p className="mt-2 text-sm leading-7 text-zinc-600">
                  Trace confusing logic and isolate the real issue faster.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-5 shadow-sm">
                <p className="font-semibold text-zinc-950">Stabilization</p>
                <p className="mt-2 text-sm leading-7 text-zinc-600">
                  Make systems easier for teams to trust, support, and extend.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="border-t border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl font-bold text-zinc-950">Services</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-zinc-950">
                Legacy system refactoring
              </h3>
              <p className="mt-3 text-sm leading-7 text-zinc-600">
                Clean up backend code so it becomes easier to understand,
                maintain, and safely extend.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-zinc-950">
                Debugging complex logic
              </h3>
              <p className="mt-3 text-sm leading-7 text-zinc-600">
                Track down confusing bugs, fragile logic, and hidden failure
                points.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-zinc-950">
                System stabilization
              </h3>
              <p className="mt-3 text-sm leading-7 text-zinc-600">
                Improve reliability and structure so your backend stops slowing
                the team down.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="border-t border-zinc-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl font-bold text-zinc-950">Selected Work</h2>

          <div className="mt-10 grid gap-8 rounded-3xl border border-zinc-200 bg-zinc-50 p-8 md:grid-cols-2">
            <div>
              <h3 className="text-xl font-semibold text-zinc-950">
                BackendRescue Website
              </h3>

              <p className="mt-4 leading-8 text-zinc-600">
                A modern service website built with Next.js and Tailwind CSS to
                present backend-focused services clearly and professionally.
              </p>

              <p className="mt-4 leading-8 text-zinc-600">
                The project focuses on clear messaging, strong hierarchy,
                responsive layout, and a polished foundation that can grow as
                the brand grows.
              </p>
            </div>

            <div className="space-y-5 text-sm">
              <div>
                <p className="font-semibold text-zinc-500">Technologies</p>
                <p className="mt-1 text-zinc-700">
                  Next.js · React · Tailwind CSS · Vercel
                </p>
              </div>

              <div>
                <p className="font-semibold text-zinc-500">Outcome</p>
                <p className="mt-1 text-zinc-700">
                  A fast, responsive, production-ready site for presenting a
                  solo backend developer brand.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="problems" className="border-t border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl font-bold text-zinc-950">Problems I Solve</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-zinc-200 bg-white p-6">
              <h3 className="font-semibold text-zinc-950">
                Hard-to-follow code paths
              </h3>
              <p className="mt-2 text-sm leading-7 text-zinc-600">
                Logic spread across too many files, services, or layers.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-6">
              <h3 className="font-semibold text-zinc-950">
                Fragile backend changes
              </h3>
              <p className="mt-2 text-sm leading-7 text-zinc-600">
                Small changes causing unexpected side effects.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-6">
              <h3 className="font-semibold text-zinc-950">
                Recurring production issues
              </h3>
              <p className="mt-2 text-sm leading-7 text-zinc-600">
                The same bugs keep coming back because the root cause remains.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-6">
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

      <section id="approach" className="border-t border-zinc-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl font-bold text-zinc-950">My Approach</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {[
              {
                number: "01",
                title: "Understand",
                text: "Trace the flow before making risky assumptions.",
              },
              {
                number: "02",
                title: "Identify",
                text: "Find the brittle parts and the real root causes.",
              },
              {
                number: "03",
                title: "Refactor",
                text: "Improve structure while protecting important behavior.",
              },
              {
                number: "04",
                title: "Clarify",
                text: "Leave the backend easier to understand and maintain.",
              },
            ].map((step) => (
              <div key={step.number} className="rounded-2xl bg-zinc-50 p-6">
                <p className="font-semibold text-emerald-600">{step.number}</p>
                <p className="mt-2 font-semibold text-zinc-950">
                  {step.title}
                </p>
                <p className="mt-3 text-sm leading-7 text-zinc-600">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="border-t border-zinc-200 bg-zinc-50">
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
              I started BackendRescue to help teams deal with backend systems
              that have become difficult to understand, maintain, or safely
              change. I’m especially interested in the kinds of problems that
              slow teams down: messy logic, fragile code paths, recurring bugs,
              and technical debt.
            </p>

            <p className="mt-4 leading-8 text-zinc-600">
              My goal is simple: make backend systems clearer, more stable, and
              less stressful to work on. Right now, BackendRescue is focused on
              hands-on backend improvement work. Over time, I plan to turn the
              patterns and lessons from that work into useful tools, products,
              and SaaS solutions.
            </p>
          </div>
        </div>
      </section>

      <section id="tech" className="border-t border-zinc-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl font-bold text-zinc-950">Tech</h2>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
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
                className="rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-4 text-sm text-zinc-700"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
              Looking ahead
            </p>
            <h2 className="mt-3 text-3xl font-bold text-zinc-950">
              Building from service work toward tools and products
            </h2>
            <p className="mt-4 leading-8 text-zinc-600">
              BackendRescue starts with practical backend cleanup, refactoring,
              and debugging work. The long-term goal is to grow from hands-on
              services into useful software products shaped by real-world
              backend problems.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-zinc-200 bg-white">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <h2 className="text-3xl font-bold text-zinc-950">
            Let’s talk about your backend
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-8 text-zinc-600">
            If your backend feels brittle or difficult to maintain, I’d be glad
            to hear what’s going on.
          </p>

          <a
            href="mailto:hello@backendrescue.dev"
            className="mt-8 inline-block rounded-xl border border-zinc-300 px-6 py-3 transition hover:border-emerald-600 hover:text-emerald-700"
          >
            hello@backendrescue.dev
          </a>
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