export default function TrackQABackendApiMigrationCaseStudy() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-4xl px-6 py-20">
        <a
          href="/projects"
          className="inline-flex items-center rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm font-medium text-zinc-300 transition hover:border-zinc-600 hover:text-white mb-6"
        >
          ← Back to Case Studies
        </a>

        <h1 className="mb-3 text-4xl font-bold">
          Migrating TrackQA from Local Storage to a Backend API
        </h1>

        <p className="mb-8 text-sm text-zinc-500">Last Updated: March 2026</p>

        <p className="mb-10 text-zinc-400 leading-8">
          This planned refactor outlines the migration of TrackQA from a
          local-storage-based persistence model to a backend API and database
          architecture. The goal is to support stronger reliability, future
          multi-user workflows, and a more scalable foundation for the system.
        </p>

        <div className="mb-10 rounded-xl border border-zinc-800 bg-zinc-900 p-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-zinc-400">
            Project Status
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-zinc-300">
            <li>Type: Planned Refactor</li>
            <li>Status: In Progress</li>
            <li>System: TrackQA Internal Tool</li>
            <li>Focus: API architecture, persistence, and system scalability</li>
          </ul>
        </div>

        <h2 className="mb-3 text-2xl font-semibold">Overview</h2>
        <p className="mb-8 text-zinc-300">
          TrackQA began as a lightweight internal tool that stored data in local
          storage to keep development fast and simple. That approach worked well
          for early workflow design and rapid iteration, but it also introduced
          long-term limitations that make a backend architecture the natural
          next step.
        </p>

        <h2 className="mb-3 text-2xl font-semibold">Current Architecture</h2>
        <ul className="mb-8 list-disc pl-6 text-zinc-300 space-y-3">
          <li>Client-side React application</li>
          <li>Local storage for persistence</li>
          <li>Single-user workflow model</li>
          <li>No shared database or backend API layer</li>
        </ul>

        <h2 className="mb-3 text-2xl font-semibold">Current Limitations</h2>
        <ul className="mb-8 list-disc pl-6 text-zinc-300 space-y-3">
          <li>Data is tied to a single browser environment.</li>
          <li>There is no multi-user collaboration support.</li>
          <li>There is no centralized persistence across devices.</li>
          <li>Authentication is not yet part of the system.</li>
          <li>Server-side logging and audit visibility are limited.</li>
        </ul>

        <h2 className="mb-3 text-2xl font-semibold">Proposed Architecture</h2>
        <p className="mb-8 text-zinc-300">
          The planned architecture introduces a backend API and database-backed
          persistence layer. The frontend would continue to support the workflow
          interface, while the backend would manage ticket data, history,
          ownership, and future collaboration features.
        </p>

        <ul className="mb-8 list-disc pl-6 text-zinc-300 space-y-3">
          <li>React frontend</li>
          <li>Node.js / Express backend API</li>
          <li>Database-backed ticket storage</li>
          <li>Activity history persistence</li>
          <li>Future authentication and multi-user support</li>
        </ul>

        <h2 className="mb-3 text-2xl font-semibold">Expected Improvements</h2>
        <ul className="mb-8 list-disc pl-6 text-zinc-300 space-y-3">
          <li>Reliable persistence across sessions and devices</li>
          <li>Support for shared workflows and multiple users</li>
          <li>Clearer activity tracking and audit history</li>
          <li>Stronger debugging visibility through backend logging</li>
          <li>A more scalable foundation for future product expansion</li>
        </ul>

        <h2 className="mb-3 text-2xl font-semibold">Why This Matters</h2>
        <p className="mb-8 text-zinc-300">
          Moving from local storage to a backend API is not just a technical
          upgrade. It changes the reliability, usability, and growth potential
          of the system. For TrackQA, this shift represents the move from a
          single-user internal workflow tool toward a more durable platform
          architecture.
        </p>

        <h2 className="mb-3 mt-10 text-2xl font-semibold">Lessons Learned</h2>
        <p className="mb-8 text-zinc-300">
          Building internal tools often reveals architectural needs gradually.
          Starting with a simpler persistence model made fast iteration
          possible, but ongoing workflow improvements made the long-term value
          of a backend much clearer. This planned refactor reflects how real
          systems evolve: start lean, validate the workflow, then strengthen the
          architecture.
        </p>

        <h2 className="mb-3 text-2xl font-semibold">References</h2>
        <div className="mb-8 rounded-xl border border-zinc-800 bg-zinc-900 p-6">
          <ul className="list-disc pl-6 text-zinc-300 space-y-2">
            <li>Related System: TrackQA Internal Tool</li>
            <li>Related Case Study: trackqa-internal</li>
            <li>Related Work: Local storage persistence and multi-user expansion planning</li>
          </ul>
        </div>
      </section>
    </main>
  );
}