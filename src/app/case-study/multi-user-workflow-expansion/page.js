export default function MultiUserWorkflowExpansionCaseStudy() {
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
          Multi-User Workflow Expansion
        </h1>

        <p className="mb-8 text-sm text-zinc-500">Last Updated: March 2026</p>

        <p className="mb-10 text-zinc-400 leading-8">
          This planned system expansion outlines the changes required to support
          shared workspaces, multiple contributors, and more structured
          ownership workflows within TrackQA. The goal is to move from a
          single-user internal tool toward a collaborative workflow system.
        </p>

        <div className="mb-10 rounded-xl border border-zinc-800 bg-zinc-900 p-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-zinc-400">
            Project Status
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-zinc-300">
            <li>Type: Planned System Work</li>
            <li>Status: Planned</li>
            <li>System: TrackQA Internal Tool</li>
            <li>Focus: Collaboration, ownership, and shared workflows</li>
          </ul>
        </div>

        <h2 className="mb-3 text-2xl font-semibold">Overview</h2>
        <p className="mb-8 text-zinc-300">
          TrackQA currently operates as a single-user workflow tool. While this
          works well for internal tracking, expanding the system to support
          multiple users would allow shared debugging workflows, clearer task
          ownership, and collaborative QA processes.
        </p>

        <h2 className="mb-3 text-2xl font-semibold">Current Limitations</h2>
        <ul className="mb-8 list-disc pl-6 text-zinc-300 space-y-3">
          <li>Only one user can manage tickets.</li>
          <li>No shared project workspace.</li>
          <li>Ownership is informational rather than user-based.</li>
          <li>No user authentication or permissions.</li>
        </ul>

        <h2 className="mb-3 text-2xl font-semibold">Planned Changes</h2>
        <ul className="mb-8 list-disc pl-6 text-zinc-300 space-y-3">
          <li>User accounts and authentication.</li>
          <li>Shared projects and workspaces.</li>
          <li>Ticket ownership tied to user accounts.</li>
          <li>Role-based permissions.</li>
          <li>Shared activity logs and history tracking.</li>
        </ul>

        <h2 className="mb-3 text-2xl font-semibold">Expected Improvements</h2>
        <ul className="mb-8 list-disc pl-6 text-zinc-300 space-y-3">
          <li>Multiple developers can collaborate on debugging tasks.</li>
          <li>Clear ownership and responsibility tracking.</li>
          <li>Shared QA workflows.</li>
          <li>Better visibility into ongoing work.</li>
          <li>Stronger foundation for team-based workflows.</li>
        </ul>

        <h2 className="mb-3 mt-10 text-2xl font-semibold">Lessons Learned</h2>
        <p className="mb-8 text-zinc-300">
          Many internal tools start as single-user systems but eventually grow
          into collaborative platforms. Planning for multi-user workflows early
          helps guide architecture decisions related to authentication, data
          ownership, and activity tracking.
        </p>

        <h2 className="mb-3 text-2xl font-semibold">References</h2>
        <div className="mb-8 rounded-xl border border-zinc-800 bg-zinc-900 p-6">
          <ul className="list-disc pl-6 text-zinc-300 space-y-2">
            <li>Related System: trackqa-internal + trackqa-saas</li>
            <li>Related Case Study: /case-study/trackqa-internal</li>
            <li>Related Work: Backend API migration and ownership workflow design</li>
          </ul>
        </div>
      </section>
    </main>
  );
}