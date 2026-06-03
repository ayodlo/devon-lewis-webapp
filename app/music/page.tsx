import { TrophyIcon, MusicIcon, AwardIcon, RadioIcon } from "lucide-react";

const genres = ["Hip-Hop", "Trap", "R&B", "Electronic", "808s", "Sample-based"];

const credits = [
  {
    Icon: TrophyIcon,
    title:
      'RIAA Platinum Producer Award for Lil Dicky – "Hannibal Interlude" (Professional Rapper)',
    category: "Award",
    year: "2015",
    description:
      'Produced "Hannibal Interlude" on Lil Dicky\'s debut studio album Professional Rapper, which has since achieved Platinum certification. The project contributed to one of hip-hop\'s most commercially successful and culturally impactful debut albums of its era, blending cinematic production, storytelling, and experimental sound design. This placement reflects experience working at a high industry level alongside major-label artists and commercially recognized releases.',
  },
  {
    Icon: AwardIcon,
    title: 'Production Credit - A$AP Mob – "London Town" (Cozy Tapes Vol. 1)',
    category: "Credit",
    year: "2019",
    description:
      'Produced "London Town" for A$AP Mob\'s collaborative project Cozy Tapes Vol. 1: Friends, featuring the collective\'s signature blend of atmospheric production, experimental textures, and modern hip-hop energy. The project showcased production work alongside one of hip-hop\'s most influential creative collectives, contributing to a release recognized for its cultural impact, forward-thinking sound, and star-studded collaborations.',
  },
  {
    Icon: MusicIcon,
    title: "Producer Battles — Competitive Platform for Music Producers",
    category: "Milestone",
    year: "2023",
    description:
      "Producer Battles is a web platform designed to bring music producers together through competitive online beat battles, cash prizes, and community-driven collaboration. Inspired by the competitive culture that has shaped hip-hop production for decades, the platform gives upcoming and established producers a place to showcase their creativity, sharpen their skills, build connections, and compete for recognition and rewards in a modern digital environment.",
  },
  {
    Icon: RadioIcon,
    title: "Sharing Music With Artists Around the World",
    category: "Competition",
    year: "2022",
    description:
      "Over the course of my career, I've had the opportunity to collaborate with a wide range of independent artists from around the world, producing music that has collectively reached audiences across countless platforms and communities. These collaborations have played a major role in shaping my sound, creative approach, and passion for helping artists bring their vision to life. The embedded playlist below highlights a collection of records and collaborations that represent the diverse range of music and artists I've worked with throughout my journey as a producer.",
  },
];

export default function MusicPage() {
  return (
    <div className="px-8 pt-12 pb-24">

      {/* ── Bio + Playlist ────────────────────────────────────────── */}
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
              My music journey started at 16 after my high school baseball
              season ended and I suddenly had nothing but time, headphones, and
              obsession. Around that time, Kanye West&apos;s <em>Graduation</em>{" "}
              and Nujabes&apos; <em>Modal Soul</em> completely changed the way I
              heard music. One felt huge, triumphant, and untouchable. The other
              felt soulful, dusty, emotional, and timeless. From that point on,
              producing became everything.
            </p>

            <p className="text-lg leading-relaxed text-secondary lg:text-xl">
              I spent years locked in making beats for hours every single day —
              studying drums, chopping samples, learning melodies, uploading
              tracks, reaching out to artists, and chasing progress nonstop. It
              wasn&apos;t a hobby anymore, it was tunnel vision. Late nights
              turned into early mornings and the grind slowly started turning
              into real opportunities.
            </p>

            <p className="text-lg leading-relaxed text-secondary lg:text-xl">
              During college, I was mentored by Benny Cassette, one of Kanye
              West&apos;s longtime collaborators, which helped sharpen both my
              sound and creative direction. From there, I went on to work with
              artists across the world, contribute to major releases, and build
              projects rooted in music, creativity, and producer culture.
            </p>

            <p className="text-lg leading-relaxed text-secondary lg:text-xl">
              Everything I create still comes from that same mindset: keep
              evolving, keep building, and make something that people actually
              feel.
            </p>
          </div>

          {/* Spotify Playlist */}
          <div className="flex flex-col gap-6">
            <h2 className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
              My Music
            </h2>
            <div className="overflow-hidden rounded-3xl border border-border">
              <iframe
                title="Devon Lewis — Produced by Devon"
                src="https://open.spotify.com/embed/playlist/713qvagDauZmhuEt0c13o5?utm_source=generator&theme=0"
                width="100%"
                height="480"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                style={{ display: "block" }}
              />
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

      {/* ── Genres & Styles ───────────────────────────────────────── */}
      <div>
        <div className="mb-10 flex flex-col gap-3">
          <span className="text-sm font-medium uppercase tracking-widest text-secondary-foreground">
            Sounds
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-primary md:text-4xl lg:text-5xl">
            Genres &amp; Styles
          </h2>
          <p className="mt-1 max-w-lg text-secondary">
            The sounds and styles that have shaped my production identity over
            16 years behind the boards.
          </p>
        </div>
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
  );
}
