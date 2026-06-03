import { ArrowUpRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const stack = [
  {
    name: "Next.js",
    role: "Full-Stack Framework",
    description:
      "App Router with React Server Components for performant server-driven pages, co-located API routes, and seamless Vercel deployment.",
  },
  {
    name: "PostgreSQL",
    role: "Relational Database",
    description:
      "Production database hosted on a managed PostgreSQL instance, modeling competitions, submissions, users, and judging records.",
  },
  {
    name: "Prisma",
    role: "ORM & Migrations",
    description:
      "Type-safe database access with schema-driven migrations, keeping the data layer consistent across development and production.",
  },
  {
    name: "AWS S3",
    role: "Asset Storage",
    description:
      "Secure, scalable object storage for all producer audio submissions. Files are uploaded directly to S3 via presigned URLs, keeping the server stateless.",
  },
  {
    name: "Vercel",
    role: "Deployment & CI",
    description:
      "Zero-config deployments tied to the main branch. Preview deployments on every pull request for a clean review workflow.",
  },
];

const scope = [
  {
    area: "Authentication",
    detail:
      "User registration, login, and session management — producers have accounts tied to their competition history.",
  },
  {
    area: "Competition Engine",
    detail:
      "A data model that tracks bi-weekly competition cycles, rule sets, required samples, submission windows, and judging state.",
  },
  {
    area: "File Uploads",
    detail:
      "Producers upload audio directly to AWS S3 via presigned URLs. The server stores only the reference — no binary data hits the API.",
  },
  {
    area: "Judging System",
    detail:
      "Judges score submissions through an internal interface. Scores are aggregated and a winner is resolved programmatically.",
  },
  {
    area: "Admin Interface",
    detail:
      "Private admin tooling for creating competitions, configuring rule sets, attaching sample audio, and publishing results.",
  },
];

const stats = [
  { value: "24", label: "Participants across 2 competitions" },
  { value: "100%", label: "Independently designed and built" },
  { value: "S3 + PG", label: "Production infrastructure" },
  { value: "Vercel", label: "Deployed and publicly accessible" },
];

export default function ProducerBattlesPage() {
  return (
    <div className="px-8 pt-12 pb-24">

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <div className="mb-24">
        <div className="mb-10 flex flex-col gap-3">
          <span className="text-sm font-medium uppercase tracking-widest text-secondary-foreground">
            Independent Full-Stack Build
          </span>
          <h1 className="text-4xl font-semibold leading-none tracking-tight text-primary md:text-5xl lg:text-7xl">
            Producer Battles
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="flex flex-col gap-6">
            <p className="text-lg leading-relaxed text-secondary lg:text-xl">
              Producer Battles is a competition platform I designed, engineered,
              and deployed on my own — from the database schema to the deployed
              product. It is a real, running application built with Next.js,
              PostgreSQL, Prisma, and AWS S3, hosted on Vercel.
            </p>
            <p className="text-lg leading-relaxed text-secondary lg:text-xl">
              Every layer of the stack was written and owned by me: the data
              model, the API, the file upload pipeline, the judging system, and
              the front-end UI. Nothing was scaffolded from a template or
              outsourced — this project exists to demonstrate what I can build
              independently, end to end.
            </p>
            <div className="pt-2">
              <Button
                asChild
                className="gap-2 rounded-full px-6 py-6 text-lg font-medium"
              >
                <a
                  href="https://producerbattles.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Live Site
                  <ArrowUpRightIcon className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map(({ value, label }) => (
              <div
                key={label}
                className="flex flex-col gap-2 rounded-2xl border border-border bg-card p-6"
              >
                <span className="text-3xl font-bold tracking-tight text-primary lg:text-4xl">
                  {value}
                </span>
                <span className="text-sm text-secondary">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Divider ──────────────────────────────────────────────── */}
      <div className="mb-20 h-px bg-border" />

      {/* ── Tech Stack ───────────────────────────────────────────── */}
      <div className="mb-24">
        <div className="mb-12 flex flex-col gap-3">
          <span className="text-sm font-medium uppercase tracking-widest text-secondary-foreground">
            Stack
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-primary md:text-4xl lg:text-5xl">
            Technologies Used
          </h2>
          <p className="mt-1 max-w-lg text-secondary">
            Each technology was chosen deliberately. This is a production-grade
            stack — not a tutorial build.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {stack.map(({ name, role, description }) => (
            <div
              key={name}
              className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:border-muted-foreground/30"
            >
              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-semibold text-primary">{name}</h3>
                <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                  {role}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-secondary">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Divider ──────────────────────────────────────────────── */}
      <div className="mb-20 h-px bg-border" />

      {/* ── Engineering Scope ────────────────────────────────────── */}
      <div className="mb-24">
        <div className="mb-12 flex flex-col gap-3">
          <span className="text-sm font-medium uppercase tracking-widest text-secondary-foreground">
            What I Built
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-primary md:text-4xl lg:text-5xl">
            Engineering Scope
          </h2>
          <p className="mt-1 max-w-lg text-secondary">
            The application covers the full surface area of a production
            platform — not a prototype, not a demo.
          </p>
        </div>

        <div className="flex flex-col divide-y divide-border rounded-3xl border border-border bg-card overflow-hidden">
          {scope.map(({ area, detail }) => (
            <div
              key={area}
              className="flex flex-col gap-2 px-8 py-7 transition-colors duration-200 hover:bg-muted/30 md:flex-row md:items-start md:gap-12"
            >
              <span className="w-44 shrink-0 text-sm font-semibold text-primary">
                {area}
              </span>
              <p className="text-sm leading-relaxed text-secondary">{detail}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Divider ──────────────────────────────────────────────── */}
      <div className="mb-20 h-px bg-border" />

      {/* ── What the Platform Does ───────────────────────────────── */}
      <div className="mb-24">
        <div className="mb-10 flex flex-col gap-3">
          <span className="text-sm font-medium uppercase tracking-widest text-secondary-foreground">
            The Platform
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-primary md:text-4xl lg:text-5xl">
            What Producer Battles Is
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          <p className="text-lg leading-relaxed text-secondary lg:text-xl">
            Producer Battles runs bi-weekly music production competitions. Each
            round, a rule set and a required audio sample are published.
            Producers submit original compositions that incorporate the sample,
            then a panel of judges — led by me as founder — selects a winner who
            receives a cash prize of $25–$50.
          </p>
          <p className="text-lg leading-relaxed text-secondary lg:text-xl">
            Two competitions have already been held on Instagram, drawing 24
            total participants through a Meta Ads campaign. The web platform
            brings the full competition experience online — submissions, judging,
            and results all managed through the application I built.
          </p>
        </div>
      </div>

      {/* ── Divider ──────────────────────────────────────────────── */}
      <div className="mb-20 h-px bg-border" />

      {/* ── Founder Note ─────────────────────────────────────────── */}
      <div className="rounded-3xl border border-border bg-card p-10 lg:p-14">
        <span className="text-sm font-medium uppercase tracking-widest text-secondary-foreground">
          From the Engineer
        </span>
        <blockquote className="mt-6 max-w-3xl text-xl leading-relaxed text-secondary lg:text-2xl">
          &ldquo;I built Producer Battles to show that I can take an idea from
          zero to a deployed, working product on my own. The goal was not just
          to ship something — it was to make engineering decisions that would
          hold up under real users, real data, and real usage patterns. That
          means a proper data model, secure file handling, and a deployment
          pipeline I can trust.&rdquo;
        </blockquote>
        <div className="mt-8 flex flex-col gap-0.5">
          <span className="font-semibold text-primary">Devon Lewis</span>
          <span className="text-sm text-muted-foreground">
            Engineer &amp; Founder · Producer Battles
          </span>
        </div>
      </div>

    </div>
  );
}
