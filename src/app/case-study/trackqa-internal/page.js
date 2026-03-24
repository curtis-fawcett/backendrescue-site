export default function TrackQACaseStudy() {
  const tech = [
    "React",
    "React Router",
    "JavaScript",
    "Local Storage",
    "Vite",
  ];

  const architecturePoints = [
    "React powers the frontend interface and component-based UI",
    "React Router handles dashboard, ticket, and case study navigation",
    "Local Storage persists ticket and project data between sessions",
    "A modular structure supports future backend migration and multi-user expansion",
  ];

  const before = [
    "Issues were handled informally through notes, memory, or scattered messages",
    "There was no consistent workflow between issue creation, testing, and verification",
    "Ownership could become unclear as work moved between stages",
    "Historical changes and investigation progress were easy to lose",
  ];

  const after = [
    "Tickets move through a structured workflow from Open to Closed",
    "Ownership is visible at a glance through consistent labels",
    "QA verification appears only when relevant to the ticket status",
    "Timeline history improves traceability, visibility, and accountability",
  ];

  const problem = [
    "QA issues and debugging tasks were often tracked outside of a dedicated system",
    "There was no clear structure for moving work from investigation to testing to verification",
    "Ownership and status visibility could become inconsistent",
    "Important bugs, refactors, or technical debt items could be forgotten",
    "The workflow needed to stay lightweight instead of feeling like a full project management platform",
  ];

  const solution = [
    "Built a centralized internal ticket system focused on QA and debugging workflows",
    "Created a defined status flow from Open to Closed",
    "Added locked fields after ticket creation to protect ticket history",
    "Used owner dropdowns instead of free text to improve consistency",
    "Added resolution summaries, QA verification notes, and activity history",
  ];

  const workflow = [
    "Create a ticket for a bug, refactor, QA task, or technical debt item",
    "Move the ticket into In Progress while investigating or implementing a fix",
    "Advance the ticket to Testing once the change is ready for review",
    "Add QA verification details when testing is active",
    "Move the ticket to Verified after QA passes",
    "Close the ticket with a final resolution summary",
  ];

  const features = [
    "Ticket creation and detail pages",
    "Structured status workflow",
    "Activity log for ticket history",
    "Ownership tracking",
    "Color-coded tags",
    "Resolution summary",
    "QA verification notes",
    "Conditional UI sections based on ticket state",
    "Local storage persistence",
    "Multi-page routing between dashboard and ticket views",
  ];

  const challenges = [
    "Fixing blank ticket-page rendering caused by routing and state issues",
    "Making Local Storage persistence sync reliably across views",
    "Conditionally rendering sections like QA Verification only when relevant",
    "Locking key fields after creation to prevent accidental history loss",
    "Tracking meaningful ticket changes inside the activity log",
    "Keeping status-based UI behavior clear and consistent across the app",
    "Designing tag colors and owner labels so tickets could be scanned quickly",
  ];

  const learned = [
    "How to structure a React application around a workflow instead of isolated screens",
    "How to manage state and persistence across multiple views",
    "How to debug routing, rendering, and UI state issues in a practical project",
    "How internal tools benefit from clarity and speed more than feature overload",
    "How product decisions and technical decisions influence each other",
  ];

  const futureImprovements = [
    "Move from Local Storage to a database-backed architecture",
    "Add authentication and user accounts",
    "Support multi-user projects and shared workspaces",
    "Create a backend API for ticket and activity data",
    "Add comments, attachments, and notifications",
    "Expand reporting and dashboard views for QA trends",
    "Evolve the internal tool into a future SaaS product",
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
            Internal Tool Case Study
          </p>

          <div className="mt-4 grid gap-8 lg:grid-cols-[1.35fr_0.9fr]">
            <div>
              <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl">
                TrackQA – Internal QA & Debugging Workflow Tool
              </h1>

              <p className="mt-5 max-w-3xl text-base leading-8 text-slate-400 md:text-lg">
                TrackQA is an internal workflow tool I built to organize
                debugging tasks, QA verification, refactoring work, and technical
                debt. While building and improving software, I needed a more
                structured way to track issues across multiple stages without
                relying on scattered notes or heavyweight project-management
                tools. TrackQA was designed to make internal work more visible,
                more traceable, and easier to move from investigation to
                verification.
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
              <StatCard label="Workflow" value="6 Steps" />
              <StatCard label="Storage" value="Local" />
              <StatCard label="Routing" value="Multi-Page" />
              <StatCard label="Focus" value="QA + Debugging" />
            </div>
          </div>
        </section>

        <Section
          title="Overview"
          subtitle="TrackQA was built as a practical internal tool for managing debugging and QA work in a more structured way."
        >
          <TextCard>
            <p className="text-base leading-8 text-slate-400">
              The goal of TrackQA was not to recreate a full project-management
              system. It was to create a lightweight internal workflow that made
              it easier to create tickets, track ownership, move work through
              defined stages, and preserve the history of changes made during QA
              and debugging. The result is a focused tool built around clarity,
              traceability, and practical day-to-day use.
            </p>
          </TextCard>
        </Section>

        <Section
          title="The Problem"
          subtitle="The project started with a simple issue: QA work was happening, but the workflow around it was inconsistent."
        >
          <CardList items={problem} />
        </Section>

        <Section
          title="The Solution"
          subtitle="TrackQA brings structure, ownership, and visibility to internal QA and debugging work without unnecessary overhead."
        >
          <CardList items={solution} />
        </Section>

        <Section
          title="Workflow Design"
          subtitle="TrackQA uses a 6-step workflow designed to move work from issue creation through investigation, testing, verification, and final resolution."
        >
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {workflow.map((item, index) => (
              <NumberCard key={item} number={index + 1} text={item} />
            ))}
          </div>
        </Section>

        <Section
          title="System Architecture"
          subtitle="A lightweight frontend-first architecture focused on speed, clarity, and future flexibility."
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
          subtitle="TrackQA replaced informal tracking with a more structured and traceable internal process."
        >
          <div className="grid gap-5 md:grid-cols-2">
            <SplitCard title="Before" items={before} accent="bg-red-500" />
            <SplitCard title="After" items={after} accent="bg-emerald-500" />
          </div>
        </Section>

        <Section
          title="Core Features"
          subtitle="TrackQA focuses on the features needed to support a clean and reliable internal QA workflow."
        >
          <CardList items={features} />
        </Section>

        <Section
          title="User Interface"
          subtitle="A dark, operational dashboard designed for quick scanning, ticket detail access, and traceable QA activity."
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
          title="Technical Challenges"
          subtitle="The most valuable part of this project was solving practical UI, workflow, and persistence problems during development."
        >
          <CardList items={challenges} />
        </Section>

        <Section
          title="What I Learned"
          subtitle="Building TrackQA strengthened both my technical thinking and my approach to designing tools around real workflows."
        >
          <CardList items={learned} />
        </Section>

        <Section
          title="Impact"
          subtitle="Even as an internal tool, TrackQA demonstrates product thinking, workflow design, and practical frontend architecture."
        >
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <ImpactCard text="Improved visibility across QA and debugging work" />
            <ImpactCard text="Created a more structured internal process for moving tickets through stages" />
            <ImpactCard text="Made ownership, ticket history, and verification easier to understand" />
            <ImpactCard text="Demonstrated practical frontend architecture and workflow-driven product design" />
          </div>
        </Section>

        <Section
          title="Future Improvements"
          subtitle="TrackQA began as an internal tool, but the architecture and workflow open the door to broader product expansion later."
        >
          <CardList items={futureImprovements} />
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

function NumberCard({ number, text }) {
  return (
    <div className="rounded-[20px] border border-slate-800 bg-slate-950/90 p-5">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/15 text-sm font-extrabold text-emerald-400">
        {number}
      </div>
      <p className="mt-4 text-slate-300">{text}</p>
    </div>
  );
}

function TextCard({ children }) {
  return (
    <div className="rounded-[22px] border border-slate-800 bg-slate-950/80 p-6">
      {children}
    </div>
  );
}

function ImpactCard({ text }) {
  return (
    <div className="rounded-[18px] border border-slate-800 bg-slate-950/90 p-5 text-slate-300">
      {text}
    </div>
  );
}