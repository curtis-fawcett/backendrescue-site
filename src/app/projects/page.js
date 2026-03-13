const projects = [
  {
    title: "TrackQA Task Manager",
    description:
      "A lightweight task management system designed to track development work through stages like New, In Progress, Testing, and Completed. Built to help manage client requests and development workflows efficiently.",
    tech: ["Next.js", "React", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/curtis-fawcett/TrackQA",
    live: "",
  },
  {
    title: "BackendRescue Dashboard",
    description:
      "A responsive development dashboard designed to manage debugging, refactoring, and project workflows. The interface focuses on clarity and stability across different screen sizes.",
    tech: ["Next.js", "React", "Tailwind CSS"],
    github: "",
    live: "",
  },
  {
    title: "Backend Architecture Refactor",
    description:
      "A case study focused on improving project architecture, refactoring existing code, and organizing the development structure to improve maintainability and scalability.",
    tech: ["JavaScript", "Git", "GitHub", "Project Architecture"],
    github: "https://github.com/curtis-fawcett/backendrescue-refactor-case-study",
    live: "",
  },
  {
    title: "BackendRescue Website",
    description:
      "The official business website for BackendRescue. Built to present services, portfolio projects, and client contact options using a modern and responsive design.",
    tech: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    github: "https://github.com/curtis-fawcett/backendrescue-site",
    live: "https://backendrescue.dev",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-6xl px-6 py-16">

        <div className="mb-12">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-zinc-400">
            Portfolio
          </p>

          <h1 className="text-4xl font-bold sm:text-5xl">
            Projects
          </h1>

          <p className="mt-4 max-w-2xl text-zinc-300">
            A selection of development projects focused on workflow tools,
            debugging systems, and practical web applications.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 shadow-lg"
            >
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