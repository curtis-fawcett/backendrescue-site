export default function TrackQACaseStudy() {
  const tech = ["React", "React Router", "Local Storage", "Vite"];

  const architecturePoints = [
    "React powers the frontend interface",
    "React Router handles dashboard, ticket, and case study navigation",
    "Local Storage persists ticket and project data",
    "Component-based structure supports future scaling and backend migration",
  ];

  const before = [
    "Issues were handled informally",
    "No clear workflow between creation, testing, and verification",
    "Ownership was harder to track",
    "Historical changes were easy to lose",
  ];

  const after = [
    "Tickets move through a structured workflow",
    "Ownership is visible at a glance",
    "QA verification appears only when relevant",
    "Timeline history improves traceability and accountability",
  ];

  const problem = [
    "QA issues were often tracked in messages or memory",
    "There was no consistent ticket structure",
    "Ownership could be unclear",
    "Important bugs could be forgotten",
    "Progress visibility was limited",
  ];

  const solution = [
    "Built a centralized internal ticket system",
    "Created defined workflow statuses from Open to Closed",
    "Locked key fields after creation to protect ticket history",
    "Used owner dropdowns instead of free text for consistency",
    "Added resolution summaries and QA verification tracking",
  ];

  const impact = [
    "Improved clarity around QA workflow",
    "Made ticket status easier to track",
    "Created a more structured internal process",
    "Demonstrated practical frontend architecture and workflow design",
  ];

  return (
    <main className="min-h-screen bg-[#020617] text-slate-200">
      <div className="mx-auto max-w-7xl px-6 py-10 md:px-8 md:py-16">
        <a
          href="/projects"
          className="inline-flex items-center rounded-xl border border-slate-700 bg-slate-900 px-4 py-2 text-sm font-medium text-slate-300 transition hover:border-slate-600 hover:text-white"
        >
          ← Back to Projects
        </a>

        <section className="mt-6 rounded-[28px] border border-slate-800 bg-gradient-to-b from-slate-900/95 to-slate-950/95 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.28)] md:p-10">
          <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-emerald-400">
            SaaS Case Study
          </p>

          <div className="mt-4 grid gap-8 lg:grid-cols-[1.35fr_0.9fr]">
            <div>
              <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl">
                TrackQA – Internal QA Workflow System
              </h1>

              <p className="mt-5 max-w-3xl text-base leading-8 text-slate-400 md:text-lg">
                TrackQA is an internal QA management tool built to organize how
                bugs, tickets, and verification workflows are handled. The goal
                was to replace scattered communication with a structured,
                reliable system that improves visibility, accountability, and
                workflow consistency.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-700 bg-slate-900 px-3 py-2 text-sm font-semibold text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <StatCard label="Workflow" value="5 Stages" />
              <StatCard label="Storage" value="Local" />
              <StatCard label="Routing" value="Multi-Page" />
              <StatCard label="Focus" value="QA Ops" />
            </div>
          </div>
        </section>

        <Section
          title="System Architecture"
          subtitle="A lightweight frontend-first architecture focused on speed, clarity, and a clean workflow."
        >
          <ImageCard
            src="/case-studies/trackqa-internal/architecture.png"
            alt="TrackQA architecture"
          />

          <div className="mt-5 rounded-[20px] border border-slate-800 bg-slate-950/75 p-6">
            <ul className="list-disc space-y-3 pl-5 text-slate-400">
              {architecturePoints.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </Section>

        <Section
          title="Before vs After Workflow"
          subtitle="TrackQA replaced informal QA tracking with a more structured and traceable internal workflow."
        >
          <div className="grid gap-5 md:grid-cols-2">
            <SplitCard title="Before" items={before} accent="bg-red-500" />
            <SplitCard title="After" items={after} accent="bg-emerald-500" />
          </div>
        </Section>

        <Section
          title="User Interface"
          subtitle="A dark, operational dashboard experience designed for quick scanning, ticket detail access, and traceable QA activity."
        >
          <div className="grid gap-5">
            <ImageCard
              src="/case-studies/trackqa-internal/dashboard.png"
              alt="TrackQA dashboard"
            />
            <ImageCard
              src="/case-studies/trackqa-internal/ticket-view.png"
              alt="TrackQA ticket view"
            />
            <ImageCard
              src="/case-studies/trackqa-internal/activity-log.png"
              alt="TrackQA activity log"
            />
          </div>
        </Section>

        <Section
          title="Problem"
          subtitle="The project started with a very practical internal issue: QA work was happening, but the system around it was inconsistent."
        >
          <CardList items={problem} />
        </Section>

        <Section
          title="Solution"
          subtitle="The app was designed to bring structure, ownership, and visibility to internal QA work without adding unnecessary complexity."
        >
          <CardList items={solution} />
        </Section>

        <Section
          title="Impact"
          subtitle="Even as an internal tool, TrackQA demonstrates product thinking, workflow design, and scalable frontend architecture decisions."
        >
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {impact.map((item) => (
              <div
                key={item}
                className="rounded-[18px] border border-slate-800 bg-slate-950/90 p-5 text-slate-300"
              >
                {item}
              </div>
            ))}
          </div>
        </Section>

        <Section
          title="Project Links"
          subtitle="This case study is based on the working internal application and a private internal codebase."
        >
          <div className="rounded-[22px] border border-slate-800 bg-slate-950/90 p-6">
            <ul className="list-disc space-y-3 pl-5 text-slate-400">
              <li>Repository: Private internal repository available upon request</li>
              <li>Live Demo: Internal tool, not publicly deployed</li>
            </ul>
          </div>
        </Section>
      </div>
    </main>
  );
}

function Section({ title, subtitle, children }) {
  return (
    <section className="mt-8">
      <div className="mb-4">
        <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl">
          {title}
        </h2>
        {subtitle ? (
          <p className="mt-3 max-w-3xl text-base leading-7 text-slate-400">
            {subtitle}
          </p>
        ) : null}
      </div>
      <div>{children}</div>
    </section>
  );
}

function StatCard({ label, value }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-950/90 p-4">
      <div className="text-xs font-bold uppercase tracking-[0.08em] text-slate-500">
        {label}
      </div>
      <div className="mt-2 text-2xl font-extrabold text-white">{value}</div>
    </div>
  );
}

function ImageCard({ src, alt }) {
  return (
    <div className="rounded-[22px] border border-slate-800 bg-gradient-to-b from-slate-900/95 to-slate-950/95 p-4 shadow-[0_18px_50px_rgba(0,0,0,0.28)]">
      <img
        src={src}
        alt={alt}
        className="block w-full rounded-2xl border border-slate-800"
      />
    </div>
  );
}

function SplitCard({ title, items, accent }) {
  return (
    <div className="rounded-[22px] border border-slate-800 bg-slate-950/90 p-6">
      <div className={`mb-5 h-1.5 w-16 rounded-full ${accent}`} />
      <h3 className="text-2xl font-bold text-white">{title}</h3>
      <ul className="mt-4 list-disc space-y-3 pl-5 text-slate-400">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function CardList({ items }) {
  return (
    <div className="rounded-[22px] border border-slate-800 bg-slate-950/80 p-6">
      <ul className="list-disc space-y-3 pl-5 text-slate-400">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}