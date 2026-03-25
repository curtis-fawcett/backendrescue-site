export default function BackendArchitectureRefactorCaseStudy() {
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
          Backend Architecture Refactor
        </h1>

        <p className="mb-8 text-sm text-zinc-500">Last Updated: March 2026</p>

        <p className="mb-10 text-zinc-400 leading-8">
          This case study documents a backend refactor that introduced a layered
          architecture to improve maintainability, debugging clarity, and
          separation of concerns in an Express API.
        </p>

        <div className="mb-10 rounded-xl border border-zinc-800 bg-zinc-900 p-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-zinc-400">
            Project Status
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-zinc-300">
            <li>Type: Backend Refactor</li>
            <li>Status: Completed</li>
            <li>System: Express API Case Study</li>
            <li>Focus: Layered architecture and maintainability</li>
          </ul>
        </div>

        <div className="mb-10 rounded-xl border border-zinc-800 bg-zinc-900 p-6">
          <pre className="overflow-x-auto text-sm leading-7 text-zinc-300">{`Before

routes
├ business logic
├ data access
└ response formatting

After

routes
↓
controllers
↓
services
↓
repositories
↓
data`}</pre>
        </div>

        <h2 className="mb-3 text-2xl font-semibold">Overview</h2>
        <p className="mb-8 text-zinc-300">
          This refactor focused on improving the internal structure of an API
          without changing its external behavior. The goal was to make request
          flow easier to trace, reduce duplicated logic, and give each layer of
          the backend a clearer responsibility as the project grew.
        </p>

        <h2 className="mb-3 text-2xl font-semibold">Architecture Before</h2>
        <p className="mb-8 text-zinc-300">
          In the original structure, route handlers were responsible for too
          many tasks. They handled request validation, business logic, database
          interaction, and response formatting all in one place. As the number
          of endpoints grew, this made the codebase harder to follow and
          increased the risk of duplicated logic across routes.
        </p>

        <h2 className="mb-3 text-2xl font-semibold">The Problem</h2>
        <p className="mb-8 text-zinc-300">
          The original API worked, but its internal structure made it harder to
          maintain as the project grew. Business logic lived inside route
          handlers, data access was mixed with request handling, and response
          formatting patterns were duplicated across endpoints.
        </p>

        <h2 className="mb-3 text-2xl font-semibold">The Goal</h2>
        <p className="mb-8 text-zinc-300">
          The goal of the refactor was to preserve the existing API behavior
          while reorganizing the backend into a cleaner layered architecture
          with clearer separation of concerns.
        </p>

        <h2 className="mb-3 text-2xl font-semibold">The Refactor</h2>
        <p className="mb-8 text-zinc-300">
          The backend was restructured into dedicated layers for routes,
          controllers, services, repositories, and data. This made the request
          flow easier to follow and gave each part of the system a more focused
          responsibility.
        </p>

        <h2 className="mb-3 text-2xl font-semibold">Key Improvements</h2>
        <ul className="mb-8 list-disc pl-6 text-zinc-300 space-y-3">
          <li>
            Clearer separation of concerns between routing, request handling,
            business logic, and data access.
          </li>
          <li>
            A more maintainable backend structure that is easier to extend as
            new endpoints and features are added.
          </li>
          <li>
            Reduced duplication by moving repeated patterns into more focused
            architectural layers.
          </li>
          <li>
            Improved readability so request flow is easier to trace during
            debugging and future backend changes.
          </li>
        </ul>

        <h2 className="mb-3 text-2xl font-semibold">Example Endpoints</h2>
        <ul className="mb-8 list-disc pl-6 text-zinc-300">
          <li>POST /api/tasks</li>
          <li>GET /api/tasks</li>
          <li>PUT /api/tasks/:id</li>
          <li>DELETE /api/tasks/:id</li>
        </ul>

        <h2 className="mb-3 text-2xl font-semibold">Tech Stack</h2>
        <ul className="mb-8 list-disc pl-6 text-zinc-300">
          <li>Node.js</li>
          <li>Express</li>
          <li>JavaScript</li>
          <li>Layered Backend Architecture</li>
        </ul>

        <h2 className="mb-3 mt-10 text-2xl font-semibold">Lessons Learned</h2>
        <p className="mb-8 text-zinc-300">
          This refactor reinforced how quickly backend complexity can grow when
          business logic, routing, and data access are mixed together. Even when
          a system is technically working, unclear structure can slow
          development, make debugging harder, and increase the risk of
          accidental regressions.
        </p>

        <p className="mb-8 text-zinc-300">
          Introducing a clearer layered architecture helped make request flow
          easier to trace and gave each part of the backend a more focused
          responsibility. This kind of structural clarity becomes increasingly
          valuable as projects grow and more developers interact with the
          codebase.
        </p>

        <h2 className="mb-3 text-2xl font-semibold">References</h2>
        <div className="mb-8 rounded-xl border border-zinc-800 bg-zinc-900 p-6">
          <ul className="list-disc pl-6 text-zinc-300 space-y-2">
            <li>Repository: backendrescue-architecture-refactor</li>
            <li>Related Work: BackendRescue Case Studies</li>
          </ul>
        </div>
      </section>
    </main>
  );
}