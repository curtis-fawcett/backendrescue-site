"use client";

import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white text-zinc-900">

      {/* NAVBAR */}

      <nav className="sticky top-0 z-50 border-b border-zinc-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

          <a href="#" className="text-lg font-semibold tracking-tight">
            Backend<span className="text-emerald-600">Rescue</span>
          </a>

          {/* Desktop Nav */}

          <div className="hidden items-center gap-6 text-sm text-zinc-600 md:flex">
            <a href="#services" className="hover:text-zinc-950">Services</a>
            <a href="#projects" className="hover:text-zinc-950">Projects</a>
            <a href="#problems" className="hover:text-zinc-950">Problems</a>
            <a href="#approach" className="hover:text-zinc-950">Approach</a>
            <a href="#about" className="hover:text-zinc-950">About</a>
            <a href="#tech" className="hover:text-zinc-950">Tech</a>
            <a href="#contact" className="hover:text-zinc-950">Contact</a>
          </div>

          {/* Mobile Button */}

          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}

        {open && (
          <div className="border-t border-zinc-200 md:hidden">
            <div className="flex flex-col gap-4 px-6 py-4 text-sm">
              <a href="#services">Services</a>
              <a href="#projects">Projects</a>
              <a href="#problems">Problems</a>
              <a href="#approach">Approach</a>
              <a href="#about">About</a>
              <a href="#tech">Tech</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* HERO */}

      <section className="mx-auto max-w-6xl px-6 py-24 sm:py-32">

        <div className="max-w-3xl">

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
            BackendRescue
          </p>

          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
            Untangling backend systems that have become hard to trust.
          </h1>

          <p className="mt-6 text-lg leading-8 text-zinc-600">
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
              className="rounded-xl border border-zinc-300 px-6 py-3 text-sm font-medium hover:border-emerald-600 hover:text-emerald-700"
            >
              View Services
            </a>
          </div>

        </div>

      </section>

      {/* SERVICES */}

      <section id="services" className="border-t border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-6 py-20">

          <h2 className="text-3xl font-bold">Services</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">

            <div className="rounded-2xl border border-zinc-200 bg-white p-6">
              <h3 className="font-semibold">Legacy system refactoring</h3>
              <p className="mt-3 text-sm text-zinc-600">
                Clean up backend code so it becomes easier to understand and maintain.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-6">
              <h3 className="font-semibold">Debugging complex logic</h3>
              <p className="mt-3 text-sm text-zinc-600">
                Track down confusing bugs and fragile code paths.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-6">
              <h3 className="font-semibold">System stabilization</h3>
              <p className="mt-3 text-sm text-zinc-600">
                Improve reliability so your backend stops slowing the team down.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* PROJECT */}

      <section id="projects" className="border-t border-zinc-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">

          <h2 className="text-3xl font-bold">Example Project</h2>

          <div className="mt-10 rounded-3xl border border-zinc-200 bg-zinc-50 p-8 grid md:grid-cols-2 gap-8">

            <div>
              <h3 className="text-xl font-semibold">
                BackendRescue Website
              </h3>

              <p className="mt-4 text-zinc-600 leading-8">
                A modern service website built with Next.js and Tailwind CSS
                designed to present backend development services clearly and
                professionally.
              </p>
            </div>

            <div className="text-sm space-y-4">

              <div>
                <p className="font-semibold text-zinc-500">Technologies</p>
                <p>Next.js · React · Tailwind · Vercel</p>
              </div>

              <div>
                <p className="font-semibold text-zinc-500">Outcome</p>
                <p>A fast, responsive production-ready site.</p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ABOUT */}

      <section id="about" className="border-t border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-6 py-20 grid md:grid-cols-2 gap-10">

          <div>
            <h2 className="text-3xl font-bold">
              I’m Curtis Fawcett, the developer behind BackendRescue
            </h2>
          </div>

          <div>
            <p className="leading-8 text-zinc-600">
              I help teams untangle backend systems that have become difficult
              to understand or safely change.
            </p>

            <p className="mt-4 leading-8 text-zinc-600">
              My focus is practical improvements that reduce risk and make
              systems easier to work with.
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
              "Debugging"
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

      {/* CONTACT */}

      <section id="contact" className="border-t border-zinc-200 bg-zinc-50">

        <div className="mx-auto max-w-4xl px-6 py-20 text-center">

          <h2 className="text-3xl font-bold">
            Let’s talk about your backend
          </h2>

          <p className="mt-4 text-zinc-600">
            If your backend feels brittle or difficult to maintain,
            I’d be glad to hear what’s going on.
          </p>

          <a
            href="mailto:hello@backendrescue.dev"
            className="mt-8 inline-block border border-zinc-300 px-6 py-3 rounded-xl"
          >
            hello@backendrescue.dev
          </a>

        </div>

      </section>

      {/* FOOTER */}

      <footer className="border-t border-zinc-200 py-10 text-center text-sm text-zinc-500">

        <p>
          © {new Date().getFullYear()} BackendRescue
        </p>

        <div className="mt-4 flex justify-center gap-6">

          <a
            href="https://github.com/"
            target="_blank"
            className="hover:text-zinc-900"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            className="hover:text-zinc-900"
          >
            LinkedIn
          </a>

        </div>

        <p className="mt-2">backendrescue.dev</p>

      </footer>

    </main>
  );
}