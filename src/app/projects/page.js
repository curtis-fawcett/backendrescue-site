const projects = [
  {
    title: "Backend Architecture Refactor",
    description:
      "Refactoring a growing Express backend into a layered architecture to improve maintainability, debugging clarity, and separation of concerns.",
    tech: ["Node.js", "JavaScript", "Git", "GitHub"],
    github:
      "https://github.com/curtis-fawcett/backendrescue-refactor-case-study",
    image: "/projects/backend-architecture-refactor.png",
    caseStudy: "/case-study/backend-architecture-refactor",
  },
  {
    title: "TrackQA Internal Workflow System",
    description:
      "An internal workflow system built to manage debugging tasks, refactors, technical debt, and QA work across BackendRescue projects. Designed to bring structure and visibility to active development work.",
    tech: ["Next.js", "React", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/curtis-fawcett/TrackQA",
    image: "/projects/trackqa.png",
    caseStudy: "/case-study/trackqa",
  },
  {
    title: "BackendRescue Website",
    description:
      "The public website for BackendRescue, built to present services, engineering case studies, and internal tooling in a clear, professional format.",
    tech: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    github: "https://github.com/curtis-fawcett/backendrescue-site",
    live: "https://backendrescue.dev",
    image: "/projects/backendrescue-website.png",
    // caseStudy: "/case-study/backendrescue-site",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-6xl px-6 py-16">

        <div className="mb-12">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-zinc-400">
            Case Studies
          </p>

          <h1 className="text-4xl font-bold sm:text-5xl">
            Engineering Case Studies
          </h1>

          <p className="mt-4 max-w-2xl text-zinc-300">
            Real engineering work focused on debugging complex systems,
            refactoring backend architecture, and building internal developer 
            tools.
          </p>
        </div>

        <div className="mb-12 rounded-2xl border border-zinc-800 bg-zinc-950 p-6 sm:p-8">
          <h2 className="text-xl font-semibold text-white">
            What these case studies demonstrate
          </h2>

          <p className="mt-4 max-w-3xl text-zinc-300 leading-8">
            These case studies highlight the kind of engineering work BackendRescue is
            built around: debugging fragile systems, refactoring backend architecture,
            and creating internal tools that support real development workflows.
          </p>
        </div>

        <div className="flex flex-col gap-10">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 shadow-lg transition duration-300 hover:-translate-y-2 hover:border-zinc-600 hover:shadow-xl"
            >

              <div className="overflow-hidden border-b border-zinc-800 mb-4">
                {project.caseStudy ? (
                  <a href={project.caseStudy}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-72 w-full object-contain transition duration-500 hover:scale-105"
                    />
                  </a>
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-72 w-full object-contain"
                  />
                )}
              </div>

              <h2 className="text-2xl font-semibold">
                {project.title}
              </h2>

              <p className="mt-3 text-sm leading-6 text-zinc-300">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-300"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex gap-3">

                {project.caseStudy && (
                  <a
                    href={project.caseStudy}
                    className="rounded-lg border border-zinc-700 px-4 py-2 text-sm font-medium text-white transition hover:bg-zinc-900"
                  >
                    Read Case Study
                  </a>
                )}

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-black transition hover:opacity-90"
                  >
                    GitHub
                  </a>
                )}

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-lg border border-zinc-700 px-4 py-2 text-sm font-medium text-white transition hover:bg-zinc-900"
                  >
                    Live Site
                  </a>
                )}

              </div>

            </article>
          ))}
        </div>

      </section>
    </main>
  );
}
