export default function LoggingErrorTrackingImprovementsCaseStudy() {
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
          Logging & Error Tracking Improvements
        </h1>

        <p className="mb-8 text-sm text-zinc-500">Last Updated: March 2026</p>

        <p className="mb-10 text-zinc-400 leading-8">
          This planned system improvement focuses on improving error visibility,
          logging, and event tracking to make debugging workflows more reliable
          and improve system traceability.
        </p>

        <div className="mb-10 rounded-xl border border-zinc-800 bg-zinc-900 p-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-zinc-400">
            Project Status
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-zinc-300">
            <li>Type: Planned System Work</li>
            <li>Status: Planned</li>
            <li>System: TrackQA Internal Tool</li>
            <li>Focus: Logging, observability, and debugging visibility</li>
          </ul>
        </div>

        <h2 className="mb-3 text-2xl font-semibold">Overview</h2>
        <p className="mb-8 text-zinc-300">
          As systems grow, debugging becomes more dependent on visibility into
          what the system is doing internally. Logging and error tracking are
          essential for understanding failures, tracing user actions, and
          diagnosing unexpected behavior.
        </p>

        <h2 className="mb-3 text-2xl font-semibold">Current Limitations</h2>
        <ul className="mb-8 list-disc pl-6 text-zinc-300 space-y-3">
          <li>Limited visibility into system errors.</li>
          <li>No centralized logging for important events.</li>
          <li>Difficult to trace when changes were made.</li>
          <li>Debugging relies heavily on manual inspection.</li>
        </ul>

        <h2 className="mb-3 text-2xl font-semibold">Planned Improvements</h2>
        <ul className="mb-8 list-disc pl-6 text-zinc-300 space-y-3">
          <li>System event logging for ticket changes.</li>
          <li>Error logging for failed operations.</li>
          <li>Activity history improvements.</li>
          <li>Backend logging for API operations.</li>
          <li>Improved traceability for debugging workflows.</li>
        </ul>

        <h2 className="mb-3 text-2xl font-semibold">Why This Matters</h2>
        <p className="mb-8 text-zinc-300">
          Logging and observability are critical for maintaining reliable
          systems. When errors occur, logs often provide the only clear record
          of what happened. Improving logging makes debugging faster and helps
          prevent recurring issues from going unnoticed.
        </p>

        <h2 className="mb-3 text-2xl font-semibold">Expected Improvements</h2>
        <ul className="mb-8 list-disc pl-6 text-zinc-300 space-y-3">
          <li>Better debugging visibility.</li>
          <li>Clearer history of system changes.</li>
          <li>Easier investigation of recurring issues.</li>
          <li>More reliable system behavior over time.</li>
        </ul>

        <h2 className="mb-3 mt-10 text-2xl font-semibold">Lessons Learned</h2>
        <p className="mb-8 text-zinc-300">
          Reliable systems depend on visibility and traceability. Logging is not
          just for errors; it is a tool for understanding system behavior,
          tracking changes, and improving long-term stability.
        </p>

        <h2 className="mb-3 text-2xl font-semibold">References</h2>
        <div className="mb-8 rounded-xl border border-zinc-800 bg-zinc-900 p-6">
          <ul className="list-disc pl-6 text-zinc-300 space-y-2">
            <li>Related System: trackqa-internal</li>
            <li>Related Work: Backend API migration and activity history improvements</li>
            <li>Focus Area: Observability and debugging visibility</li>
          </ul>
        </div>
      </section>
    </main>
  );
}