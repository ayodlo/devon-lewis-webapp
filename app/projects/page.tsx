import Link from "next/link";
import Image from "next/image";
import { ArrowUpRightIcon } from "lucide-react";

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg role="img" viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

const projects = [
  {
    id: "01",
    title: "Producer Battles",
    description:
      "A full-stack competition platform for music producers — built independently from schema to deployment. Producers submit original compositions each round based on a rule set and required sample. A judging panel selects a winner who earns a cash prize. Includes auth, file uploads to AWS S3 via presigned URLs, a competition engine, and an admin interface.",
    tags: ["Next.js", "PostgreSQL", "Prisma", "AWS S3", "Vercel"],
    href: "/producer-battles",
    github: null,
    image: "/images/images/producer_battles_projects_image.png",
    cta: "View case study",
    external: false,
  },
  {
    id: "02",
    title: "Suno Bot",
    description:
      "A Python CLI tool that automates audio processing workflows on Suno using Playwright browser automation. Supports batch processing of WAV and MP3 files, session persistence via saved browser profiles, dry-run mode, processing state tracking to prevent duplicate submissions, and a modular pipeline architecture built for extension.",
    tags: ["Python", "Playwright", "Click", "YAML"],
    href: "https://github.com/ayodlo/suno-bot",
    github: "https://github.com/ayodlo/suno-bot",
    image: "/images/images/suno_bot_project_image.png",
    cta: "View on GitHub",
    external: true,
  },
  {
    id: "03",
    title: "Visadapt Scraper",
    description:
      "A Python CLI that locates nearby businesses via the Google Places API, discovers their websites through a multi-layer search strategy, and runs automated WCAG 2.1 accessibility audits using Playwright and axe-core. Evaluates 50+ accessibility criteria across four severity levels and outputs interactive, filterable HTML reports.",
    tags: ["Python", "Playwright", "axe-core", "Google Places API"],
    href: "https://github.com/ayodlo/visadapt-scraper",
    github: "https://github.com/ayodlo/visadapt-scraper",
    image: "/images/images/visadapt_projects_image.png",
    cta: "View on GitHub",
    external: true,
  },
];

export default function ProjectsPage() {
  return (
    <div className="px-8 pt-12 pb-24">

      {/* ── Page Header ──────────────────────────────────────────── */}
      <div className="flex flex-col gap-3 mb-12 lg:mb-20">
        <span className="text-sm font-medium tracking-widest uppercase text-secondary-foreground">
          Engineering
        </span>
        <h1 className="text-4xl font-semibold tracking-tight text-primary leading-none md:text-5xl lg:text-7xl">
          Projects
        </h1>
        <p className="text-secondary text-base max-w-lg mt-2 leading-relaxed lg:text-xl">
          A collection of work built at the intersection of thoughtful design
          and reliable engineering.
        </p>
        <a
          href="https://github.com/ayodlo"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex items-center gap-2.5 self-start rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-secondary transition-all duration-200 hover:border-muted-foreground/30 hover:text-primary"
        >
          <GitHubIcon className="h-4 w-4" />
          github.com/ayodlo
          <ArrowUpRightIcon className="h-3.5 w-3.5" />
        </a>
      </div>

      {/* ── Projects Grid ────────────────────────────────────────── */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.id}
            className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-muted-foreground/30"
          >
            {/* Project Image */}
            <div className="relative aspect-video overflow-hidden bg-muted">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Card Body */}
            <div className="flex flex-1 flex-col gap-5 p-8">
              <div className="flex flex-col gap-3">
                <h2 className="text-2xl font-semibold tracking-tight text-primary">
                  {project.title}
                </h2>
                <p className="text-sm leading-relaxed text-secondary">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-muted px-3 py-1.5 text-xs font-medium text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex items-center justify-between border-t border-border pt-5">
                {project.external ? (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-secondary transition-colors group-hover:text-primary"
                  >
                    {project.cta}
                    <ArrowUpRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                ) : (
                  <Link
                    href={project.href}
                    className="inline-flex items-center gap-2 text-sm font-medium text-secondary transition-colors group-hover:text-primary"
                  >
                    {project.cta}
                    <ArrowUpRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>
                )}

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-primary"
                    aria-label="View source on GitHub"
                  >
                    <GitHubIcon className="h-4 w-4" />
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
