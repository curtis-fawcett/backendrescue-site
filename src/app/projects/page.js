const projects = [
  {
    title: "TrackQA Task Manager",
    description:
      "A lightweight task management system designed to track development work through stages like New, In Progress, Testing, and Completed. Built to manage debugging, QA, and development workflows.",
    tech: ["Next.js", "React", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/curtis-fawcett/TrackQA",
    image: "/projects/trackqa.png",
    caseStudy: "/case-study/trackqa",
  },
  {
    title: "Backend Architecture Refactor",
    description:
      "A refactor-focused backend case study demonstrating improvements to project structure, controller-service-repository architecture, and maintainable code organization.",
    tech: ["Node.js", "JavaScript", "Git", "GitHub"],
    github:
      "https://github.com/curtis-fawcett/backendrescue-refactor-case-study",
    image: "/projects/backend-architecture-refactor.png",
  },
  {
    title: "BackendRescue Website",
    description:
      "The official website for BackendRescue built with Next.js and deployed online. Designed to showcase services, projects, and development workflow tools.",
    tech: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    github: "https://github.com/curtis-fawcett/backendrescue-site",
    live: "https://backendrescue.dev",
    image: "/projects/backendrescue-website.png",
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
              className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 shadow-lg transition duration-300 hover:-translate-y-2 hover:border-zinc-600 hover:shadow-xl"
            >
              <div className="overflow-hidden border-b border-zinc-800 mb-4">
                {project.caseStudy ? (
                  <a href={project.caseStudy}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-56 w-full object-cover transition duration-500 hover:scale-105"
                    />
                  </a>
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-56 w-full object-cover"
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
                  Case Study
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