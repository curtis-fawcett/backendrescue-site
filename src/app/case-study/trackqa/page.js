export default function TrackQACaseStudy() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-4xl px-6 py-20">

        <h1 className="text-4xl font-bold mb-6">
          TrackQA – Developer Workflow Manager
        </h1>

        <img
          src="/projects/trackqa.png"
          alt="TrackQA Dashboard"
          className="rounded-xl border border-zinc-800 mb-10"
        />

        <h2 className="text-2xl font-semibold mb-3">The Problem</h2>

        <p className="text-zinc-300 mb-8">
          Development teams often struggle to track debugging tasks, technical
          debt, and QA work during active projects. Many lightweight projects
          rely on scattered notes or generic task tools that do not reflect a
          developer's workflow.
        </p>

        <h2 className="text-2xl font-semibold mb-3">The Solution</h2>

        <p className="text-zinc-300 mb-8">
          TrackQA was built as a lightweight internal workflow system designed
          specifically for managing debugging tasks, refactors, and development
          progress. The tool organizes work into structured tickets and allows
          developers to move tasks through stages such as New, In Progress,
          Testing, and Completed.
        </p>

        <h2 className="text-2xl font-semibold mb-3">Tech Stack</h2>

        <ul className="list-disc pl-6 text-zinc-300">
          <li>Next.js</li>
          <li>React</li>
          <li>Tailwind CSS</li>
          <li>JavaScript</li>
        </ul>

      </section>
    </main>
  );
}