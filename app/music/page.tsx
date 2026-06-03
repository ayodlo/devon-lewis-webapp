import { TrophyIcon, MusicIcon, AwardIcon, RadioIcon } from "lucide-react";

const genres = [
  "Hip-Hop",
  "Trap",
  "R&B",
  "Electronic",
  "808s",
  "Sample-based",
];

const credits = [
  {
    Icon: TrophyIcon,
    title: "Achievement One",
    category: "Award",
    year: "2024",
    description:
      "Placeholder description for a notable award or recognition received in music production.",
  },
  {
    Icon: AwardIcon,
    title: "Production Credit",
    category: "Credit",
    year: "2023",
    description:
      "Placeholder description for a production credit on a released track or project.",
  },
  {
    Icon: MusicIcon,
    title: "Milestone",
    category: "Milestone",
    year: "2023",
    description:
      "Placeholder description for a notable career milestone or streaming achievement.",
  },
  {
    Icon: RadioIcon,
    title: "Producer Battle",
    category: "Competition",
    year: "2022",
    description:
      "Placeholder description for a producer battle result or live performance competition.",
  },
];

export default function MusicPage() {
  return (
    <div className="px-8 pt-12 pb-24">

      {/* ── Bio Section ───────────────────────────────────────────── */}
      <div className="mb-24">
        <div className="mb-12 flex flex-col gap-3">
          <span className="text-sm font-medium uppercase tracking-widest text-secondary-foreground">
            Music
          </span>
          <h1 className="text-4xl font-semibold leading-none tracking-tight text-primary md:text-5xl lg:text-7xl">
            Music Producer
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Bio copy */}
          <div className="flex flex-col gap-6">
            <p className="text-lg leading-relaxed text-secondary lg:text-xl">
              I&apos;ve been producing music for years, channeling the same
              precision and creativity I bring to software engineering into
              crafting beats and soundscapes. My production style is rooted in
              hip-hop and trap but draws freely from R&amp;B, electronic, and
              soul — always chasing the right feeling over any single genre
              label.
            </p>
            <p className="text-lg leading-relaxed text-secondary lg:text-xl">
              Every track starts with an idea: a sample, a melody, or a drum
              pattern that sparks something. I layer sounds with intention,
              building from a raw concept to a polished production that moves
              people. Music and engineering live in the same part of my brain —
              both are about building something from nothing that just
              works.
            </p>
          </div>

          {/* Genre tags */}
          <div className="flex flex-col gap-6">
            <h2 className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
              Genres &amp; Styles
            </h2>
            <div className="flex flex-wrap gap-3">
              {genres.map((genre) => (
                <span
                  key={genre}
                  className="rounded-full border border-secondary-foreground/30 bg-secondary-foreground/15 px-5 py-2.5 text-sm font-medium text-primary"
                >
                  {genre}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Divider ───────────────────────────────────────────────── */}
      <div className="mb-20 h-px bg-border" />

      {/* ── Credits & Achievements ────────────────────────────────── */}
      <div className="mb-24">
        <div className="mb-12 flex flex-col gap-3">
          <span className="text-sm font-medium uppercase tracking-widest text-secondary-foreground">
            Resume
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-primary md:text-4xl lg:text-5xl">
            Credits &amp; Achievements
          </h2>
          <p className="mt-1 max-w-lg text-secondary">
            A record of production credits, collaborations, and milestones from
            my music career.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {credits.map(({ Icon, title, category, year, description }) => (
            <div
              key={title}
              className="flex gap-5 rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:border-muted-foreground/30"
            >
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-secondary-foreground/20">
                <Icon className="h-5 w-5 text-secondary-foreground" />
              </div>
              <div className="flex flex-col gap-1.5">
                <div className="flex flex-wrap items-center gap-2.5">
                  <h3 className="font-semibold text-primary">{title}</h3>
                  <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs text-muted-foreground">
                    {category}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-secondary">
                  {description}
                </p>
                <span className="mt-1 text-xs text-muted-foreground">
                  {year}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Divider ───────────────────────────────────────────────── */}
      <div className="mb-20 h-px bg-border" />

      {/* ── Spotify Playlist ──────────────────────────────────────── */}
      <div>
        <div className="mb-10 flex flex-col gap-3">
          <span className="text-sm font-medium uppercase tracking-widest text-secondary-foreground">
            Streaming
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-primary md:text-4xl lg:text-5xl">
            My Music
          </h2>
          <p className="mt-1 max-w-lg text-secondary">
            Every track below is music I personally produced. Stream or preview
            the full playlist right here.
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl border border-border">
          <iframe
            title="Devon Lewis — Produced by Devon"
            src="https://open.spotify.com/embed/playlist/713qvagDauZmhuEt0c13o5?utm_source=generator&theme=0"
            width="100%"
            height="560"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            style={{ display: "block" }}
          />
        </div>
      </div>

    </div>
  );
}
