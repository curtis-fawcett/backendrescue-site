export default function LocalStorageStateSyncCaseStudy() {
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
          Local Storage Persistence and State Synchronization Issues
        </h1>

        <p className="mb-8 text-sm text-zinc-500">Last Updated: March 2026</p>

        <p className="mb-10 text-zinc-400 leading-8">
          This case study documents an investigation into persistence and state
          synchronization issues in a React application that used local storage
          to store ticket and workflow data. The goal was to make updates more
          reliable across views and ensure that saved changes were reflected
          immediately without requiring a reload.
        </p>

        <div className="mb-10 rounded-xl border border-zinc-800 bg-zinc-900 p-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-zinc-400">
            Project Status
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-zinc-300">
            <li>Type: Architecture Investigation</li>
            <li>Status: Completed</li>
            <li>System: TrackQA Internal Tool</li>
            <li>Focus: Local storage, persistence, and cross-view state updates</li>
          </ul>
        </div>

        <h2 className="mb-3 text-2xl font-semibold">Overview</h2>
        <p className="mb-8 text-zinc-300">
          TrackQA initially used local storage as a lightweight way to preserve
          ticket data between sessions without adding backend complexity.
          Although this made rapid development easier, it also introduced a
          challenge: changes made in one part of the interface were not always
          reflected immediately in another part of the application.
        </p>

        <h2 className="mb-3 text-2xl font-semibold">The Problem</h2>
        <p className="mb-8 text-zinc-300">
          The main issue was inconsistent data visibility between different
          views. Ticket updates, status changes, and activity history could be
          saved successfully but still appear stale in other parts of the UI.
          This weakened trust in the workflow because users could not always
          tell whether a change had been applied correctly.
        </p>

        <h2 className="mb-3 text-2xl font-semibold">Symptoms</h2>
        <ul className="mb-8 list-disc pl-6 text-zinc-300 space-y-3">
          <li>Edits did not always appear immediately after saving.</li>
          <li>Status changes could look delayed until a page refresh.</li>
          <li>Activity history was not always in sync across views.</li>
          <li>Dashboard and ticket views could temporarily show different states.</li>
        </ul>

        <h2 className="mb-3 text-2xl font-semibold">Investigation</h2>
        <p className="mb-8 text-zinc-300">
          The investigation focused on how state was initialized, when data was
          written to local storage, and how different parts of the application
          consumed that data. It became clear that persistence logic and UI
          state updates were not always moving in lockstep. In practice, this
          meant the data could be saved correctly while the rendered interface
          still showed stale values.
        </p>

        <p className="mb-8 text-zinc-300">
          The review also showed that persistence behavior is more fragile when
          multiple views depend on the same stored data but update it at
          different times or from different components.
        </p>

        <h2 className="mb-3 text-2xl font-semibold">Root Cause</h2>
        <p className="mb-8 text-zinc-300">
          The root cause was a mismatch between local storage writes and React
          state updates. Data persistence worked, but UI updates were not always
          synchronized with the latest saved values, which created temporary
          inconsistencies across screens.
        </p>

        <h2 className="mb-3 text-2xl font-semibold">The Fix</h2>
        <p className="mb-8 text-zinc-300">
          The fix involved making persistence behavior more consistent,
          standardizing how data was loaded, and ensuring that state updates
          were applied in a more reliable order. This reduced the chance of
          stale UI behavior and made ticket updates more visible immediately
          after a change was made.
        </p>

        <h2 className="mb-3 text-2xl font-semibold">Result</h2>
        <ul className="mb-8 list-disc pl-6 text-zinc-300 space-y-3">
          <li>Ticket updates appeared more consistently across views.</li>
          <li>Status changes reflected more reliably after edits.</li>
          <li>Workflow behavior became easier to trust.</li>
          <li>The application became better prepared for future backend migration.</li>
        </ul>

        <h2 className="mb-3 mt-10 text-2xl font-semibold">Lessons Learned</h2>
        <p className="mb-8 text-zinc-300">
          This investigation reinforced that local storage can work well for
          early development, but state persistence becomes more complex as
          workflows grow. Even without a backend, it is important to treat data
          flow and synchronization carefully. Strong persistence patterns make
          debugging easier now and make future architecture changes easier
          later.
        </p>

        <h2 className="mb-3 text-2xl font-semibold">References</h2>
        <div className="mb-8 rounded-xl border border-zinc-800 bg-zinc-900 p-6">
          <ul className="list-disc pl-6 text-zinc-300 space-y-2">
            <li>Related System: TrackQA Internal Tool</li>
            <li>Related Case Study: trackqa-internal</li>
            <li>Related Work: TrackQA Backend API Migration</li>
          </ul>
        </div>
      </section>
    </main>
  );
}