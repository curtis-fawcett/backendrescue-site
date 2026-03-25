export default function RoutingRenderingInvestigationCaseStudy() {
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
          Routing and Rendering Behavior Investigation in a React Application
        </h1>

        <p className="mb-8 text-sm text-zinc-500">Last Updated: March 2026</p>

        <p className="mb-10 text-zinc-400 leading-8">
          This case study documents an investigation into routing and rendering
          behavior in a React application with multiple views and dynamic
          navigation paths. The goal was to improve stability when moving
          between pages and ensure that dynamic views rendered reliably.
        </p>

        <div className="mb-10 rounded-xl border border-zinc-800 bg-zinc-900 p-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-zinc-400">
            Project Status
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-zinc-300">
            <li>Type: Debugging Investigation</li>
            <li>Status: Completed</li>
            <li>System: TrackQA Internal Tool</li>
            <li>Focus: Route behavior, dynamic rendering, and state timing</li>
          </ul>
        </div>

        <h2 className="mb-3 text-2xl font-semibold">Overview</h2>
        <p className="mb-8 text-zinc-300">
          Multi-page React applications depend heavily on the relationship
          between routing, state, and rendering timing. In TrackQA, navigating
          between dashboard and ticket views exposed cases where rendering
          behavior became inconsistent, especially when dealing with dynamic
          routes and data-dependent screens.
        </p>

        <h2 className="mb-3 text-2xl font-semibold">The Problem</h2>
        <p className="mb-8 text-zinc-300">
          Some routes behaved differently depending on how the user arrived at
          the page. A route could appear stable during in-app navigation but
          still behave unexpectedly when refreshing, loading data later than
          expected, or depending on route parameters that did not immediately
          map to available state.
        </p>

        <h2 className="mb-3 text-2xl font-semibold">Investigation</h2>
        <p className="mb-8 text-zinc-300">
          The investigation focused on route configuration, route parameter
          usage, component mounting behavior, data loading timing, and
          conditional rendering rules. The review also compared differences
          between direct navigation and navigation that happened from within the
          application itself.
        </p>

        <p className="mb-8 text-zinc-300">
          This made it easier to see that route behavior was not the only
          variable. Rendering success depended on whether the required data was
          available at the moment the component attempted to display.
        </p>

        <h2 className="mb-3 text-2xl font-semibold">Root Cause</h2>
        <p className="mb-8 text-zinc-300">
          The root cause involved the timing of state availability combined with
          route-based rendering. Components attempted to render before all
          required data had been fully resolved, which produced inconsistent
          results depending on navigation path and state conditions.
        </p>

        <h2 className="mb-3 text-2xl font-semibold">The Fix</h2>
        <p className="mb-8 text-zinc-300">
          The fix focused on making route-dependent views more defensive and
          predictable. This included improving route parameter handling,
          strengthening rendering conditions, and ensuring that key screens
          handled missing or delayed data more safely.
        </p>

        <h2 className="mb-3 text-2xl font-semibold">Result</h2>
        <ul className="mb-8 list-disc pl-6 text-zinc-300 space-y-3">
          <li>Rendering behavior became more predictable across routes.</li>
          <li>Dynamic pages became more stable during navigation.</li>
          <li>Route-dependent views handled missing data more safely.</li>
          <li>The application became easier to troubleshoot in future iterations.</li>
        </ul>

        <h2 className="mb-3 mt-10 text-2xl font-semibold">Lessons Learned</h2>
        <p className="mb-8 text-zinc-300">
          This investigation reinforced that routing issues are often not only
          routing issues. In many cases, the real problem lives at the
          intersection of route parameters, state timing, and rendering logic.
          Stable route behavior requires strong coordination between all three.
        </p>

        <h2 className="mb-3 text-2xl font-semibold">References</h2>
        <div className="mb-8 rounded-xl border border-zinc-800 bg-zinc-900 p-6">
          <ul className="list-disc pl-6 text-zinc-300 space-y-2">
            <li>Related System: TrackQA Internal Tool</li>
            <li>Related Case Study: trackqa-internal</li>
            <li>Related Investigation: Debugging a Blank Page Issue in React</li>
          </ul>
        </div>
      </section>
    </main>
  );
}