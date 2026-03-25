export default function StatusBasedWorkflowUICaseStudy() {
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
          Designing a Status-Based Workflow System
        </h1>

        <p className="mb-8 text-sm text-zinc-500">Last Updated: March 2026</p>

        <p className="mb-10 text-zinc-400 leading-8">
          This case study documents the design of a structured workflow system
          for managing debugging tasks, QA verification, refactors, and
          technical debt items inside the TrackQA internal tool.
        </p>

        <div className="mb-10 rounded-xl border border-zinc-800 bg-zinc-900 p-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-zinc-400">
            Project Status
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-zinc-300">
            <li>Type: Workflow Design</li>
            <li>Status: Completed</li>
            <li>System: TrackQA Internal Tool</li>
            <li>Focus: Status flow, conditional UI behavior, and process clarity</li>
          </ul>
        </div>

        <h2 className="mb-3 text-2xl font-semibold">Overview</h2>
        <p className="mb-8 text-zinc-300">
          TrackQA was built to create a more structured internal process for
          handling debugging and QA work. Instead of relying on scattered notes
          or memory, the goal was to design a workflow that clearly moved work
          from initial issue discovery through investigation, testing,
          verification, and final closure.
        </p>

        <h2 className="mb-3 text-2xl font-semibold">The Problem</h2>
        <p className="mb-8 text-zinc-300">
          Before this workflow was defined, debugging tasks and QA steps could
          become inconsistent. Work moved between stages without a clear system,
          ownership could become unclear, and historical context was easy to
          lose. The process needed more structure, but it also needed to remain
          lightweight enough to support internal use without turning into a
          heavy project-management platform.
        </p>

        <h2 className="mb-3 text-2xl font-semibold">Workflow Design</h2>
        <p className="mb-8 text-zinc-300">
          The solution was a status-based workflow with defined stages: Open, In
          Progress, Testing, Verified, and Closed. These stages gave tickets a
          visible lifecycle and made it easier to understand where a task stood
          at any moment.
        </p>

        <ul className="mb-8 list-disc pl-6 text-zinc-300 space-y-3">
          <li>Open: issue is captured and waiting to be worked on</li>
          <li>In Progress: investigation or implementation is underway</li>
          <li>Testing: changes are ready for review and QA validation</li>
          <li>Verified: QA checks have passed</li>
          <li>Closed: work is complete and fully documented</li>
        </ul>

        <h2 className="mb-3 text-2xl font-semibold">Key Design Decisions</h2>
        <ul className="mb-8 list-disc pl-6 text-zinc-300 space-y-3">
          <li>Ticket title and description lock after creation to preserve history.</li>
          <li>Ownership uses a dropdown instead of free text for consistency.</li>
          <li>QA verification appears only when relevant to the workflow stage.</li>
          <li>Resolution summaries help capture outcomes before closure.</li>
          <li>Activity history improves visibility into ticket changes over time.</li>
        </ul>

        <h2 className="mb-3 text-2xl font-semibold">Why It Matters</h2>
        <p className="mb-8 text-zinc-300">
          A workflow is more than a visual interface. It defines how work moves,
          how responsibilities are handed off, and how quality checks are
          performed. By tying interface behavior to ticket status, the tool
          became more aligned with how debugging and QA actually happen in
          practice.
        </p>

        <h2 className="mb-3 text-2xl font-semibold">Result</h2>
        <ul className="mb-8 list-disc pl-6 text-zinc-300 space-y-3">
          <li>Work became easier to track from creation to closure.</li>
          <li>Ownership became clearer.</li>
          <li>QA verification steps became more visible and structured.</li>
          <li>Ticket history became easier to preserve and review.</li>
        </ul>

        <h2 className="mb-3 mt-10 text-2xl font-semibold">Lessons Learned</h2>
        <p className="mb-8 text-zinc-300">
          This project reinforced that workflow design is both a product problem
          and a systems problem. Good workflow design reduces confusion,
          improves traceability, and makes the interface support the process
          instead of working against it.
        </p>

        <h2 className="mb-3 text-2xl font-semibold">References</h2>
        <div className="mb-8 rounded-xl border border-zinc-800 bg-zinc-900 p-6">
          <ul className="list-disc pl-6 text-zinc-300 space-y-2">
            <li>Related System: TrackQA Internal Tool</li>
            <li>Related Case Study: trackqa-internal</li>
            <li>Related Work: Multi-user workflow planning and QA verification design</li>
          </ul>
        </div>
      </section>
    </main>
  );
}