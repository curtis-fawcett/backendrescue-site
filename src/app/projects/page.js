import Link from "next/link";

const featuredCaseStudies = [
  {
    title: "TrackQA – Internal QA & Debugging Workflow Tool",
    type: "Case Study",
    status: "Featured",
    description:
      "An internal workflow tool for tracking bugs, refactors, QA verification, and technical debt through a structured ticket lifecycle.",
    href: "/case-study/trackqa-internal",
    tags: ["React", "Vite", "JavaScript", "Workflow Design"],
  },
  {
    title: "Backend Architecture Refactor",
    type: "Case Study",
    status: "Featured",
    description:
      "Refactoring an Express API into a layered architecture to improve maintainability, debugging clarity, and separation of concerns.",
    href: "/case-study/backend-architecture-refactor",
    tags: ["Node.js", "Express", "JavaScript", "Architecture"],
  },
];

const investigations = [
  {
    title: "Debugging a Blank Page Issue in React",
    type: "Investigation",
    status: "Active",
    description:
      "Tracing a ticket-page rendering issue caused by routing and state flow problems inside a React application.",
    href: "/case-study/debugging-blank-page-react",
    tags: ["React", "Routing", "Debugging", "UI State"],
  },
  {
    title: "Local Storage Persistence & State Sync Issues",
    type: "Investigation",
    status: "Active",
    description:
      "Investigating how local persistence and cross-view state updates can create inconsistent workflow behavior in internal tools.",
    href: "/case-study/local-storage-state-sync",
    tags: ["Local Storage", "State Management", "Debugging"],
  },
  {
    title: "Routing & Rendering Investigation",
    type: "Investigation",
    status: "Active",
    description:
      "Breaking down how route structure, ticket lookup behavior, and rendering conditions affect stability across the app.",
    href: "/case-study/routing-rendering-investigation",
    tags: ["React Router", "Rendering", "Debugging"],
  },
  {
    title: "Status-Based Workflow UI Logic",
    type: "Engineering Notes",
    status: "Active",
    description:
      "Documenting how conditional UI sections, ownership rules, and verification states shape a more reliable QA workflow.",
    href: "/case-study/status-based-workflow-ui",
    tags: ["Workflow Logic", "UI Design", "Product Thinking"],
  },
];

const plannedWork = [
  {
    title: "TrackQA Backend API Migration",
    type: "Planned Refactor",
    status: "Planned",
    description:
      "Moving TrackQA from local-only persistence toward a backend-backed architecture that supports reliability and future expansion.",
    href: "/case-study/trackqa-backend-api-migration",
    tags: ["API Design", "Backend", "Refactor"],
  },
  {
    title: "Multi-User Workflow Expansion",
    type: "Planned System Work",
    status: "Planned",
    description:
      "Planning the changes needed to support shared workspaces, multiple contributors, and more structured ownership workflows.",
    href: "/case-study/multi-user-workflow-expansion",
    tags: ["System Design", "Scalability", "Collaboration"],
  },
  {
    title: "Logging & Error Tracking Improvements",
    type: "Planned System Work",
    status: "Planned",
    description:
      "Designing clearer error visibility and event tracking to improve debugging workflows and system traceability.",
    href: "/case-study/logging-error-tracking-improvements",
    tags: ["Logging", "Observability", "Debugging"],
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#020617] text-slate-200">
      <section className="mx-auto max-w-7xl px-6 py-12 md:px-8 md:py-16">
        <div className="rounded-[32px] border border-slate-800 bg-gradient-to-b from-slate-900/95 to-slate-950/95 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.28)] md:p-10">
          <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-emerald-400">
            BackendRescue
          </p>

          <h1 className="mt-4 text-4xl font-bold leading-tight text-white md:text-5xl">
            Case Studies & Engineering Work
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-400 md:text-lg">
            These case studies document backend refactors, debugging
            investigations, internal tools, and system improvements focused on
            maintainability, workflow visibility, debugging clarity, and
            long-term reliability. Many of these projects are connected to
            TrackQA, an internal QA and debugging workflow tool used to explore
            how systems behave, break, and improve over time.
          </p>
        </div>

        <Section
          title="Featured Case Studies"
          subtitle="The strongest examples of backend refactoring, workflow design, and internal tool development."
        >
          <div className="grid gap-6 lg:grid-cols-2">
            {featuredCaseStudies.map((project) => (
              <ProjectCard key={project.title} project={project} featured />
            ))}
          </div>
        </Section>

        <Section
          title="Debugging & Investigations"
          subtitle="Active engineering investigations focused on routing, rendering, persistence, and workflow behavior."
        >
          <div className="grid gap-6 md:grid-cols-2">
            {investigations.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </Section>

        <Section
          title="Planned Refactors & System Work"
          subtitle="Ongoing system planning and future architecture work designed to support reliability, scalability, and stronger debugging workflows."
        >
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {plannedWork.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </Section>
      </section>
    </main>
  );
}

function Section({ title, subtitle, children }) {
  return (
    <section className="mt-10">
      <div className="mb-5">
        <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl">
          {title}
        </h2>
        {subtitle ? (
          <p className="mt-3 max-w-3xl text-base leading-7 text-slate-400">
            {subtitle}
          </p>
        ) : null}
      </div>
      {children}
    </section>
  );
}

function ProjectCard({ project, featured = false }) {
  return (
    <div
      className={`group rounded-[26px] border border-slate-800 bg-slate-950/90 p-6 shadow-[0_18px_50px_rgba(0,0,0,0.22)] transition hover:-translate-y-0.5 hover:border-slate-700 ${
        featured ? "md:p-7" : ""
      }`}
    >
      <div className="flex flex-wrap items-center gap-3">
        <Badge variant="type">{project.type}</Badge>
        <Badge variant="status" status={project.status}>
          {project.status}
        </Badge>
      </div>

      <h3 className="mt-5 text-2xl font-bold leading-tight text-white">
        {project.title}
      </h3>

      <p className="mt-4 text-base leading-8 text-slate-400">
        {project.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1.5 text-sm font-medium text-slate-300"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-6">
        <Link
          href={project.href}
          className="inline-flex items-center rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-2.5 text-sm font-semibold text-emerald-300 transition hover:border-emerald-400/40 hover:bg-emerald-500/15 hover:text-emerald-200"
        >
          View {project.type}
        </Link>
      </div>
    </div>
  );
}

function Badge({ children, variant, status }) {
  let classes =
    "inline-flex items-center rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.08em]";

  if (variant === "type") {
    classes += " border border-slate-700 bg-slate-900 text-slate-300";
  }

  if (variant === "status") {
    if (status === "Featured") {
      classes +=
        " border border-emerald-500/30 bg-emerald-500/10 text-emerald-300";
    } else if (status === "Active") {
      classes +=
        " border border-amber-500/30 bg-amber-500/10 text-amber-300";
    } else if (status === "Planned") {
      classes += " border border-sky-500/30 bg-sky-500/10 text-sky-300";
    } else {
      classes += " border border-slate-700 bg-slate-900 text-slate-300";
    }
  }

  return <span className={classes}>{children}</span>;
}