"use client";

import { Button } from "@/components/ui/button";
import { ArrowDownIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const pillars = [
  {
    label: "Engineering",
    body: "I'm a software engineer focused on building full-stack web applications. My work spans everything from database design and API architecture to the UI — I care about the full picture, not just one layer of the stack.",
  },
  {
    label: "AI & Technology",
    body: "AI has been at the front of my mind lately. I've been deep in the agentic AI space — working with OpenAI, Claude Code, and exploring how autonomous systems can augment the way we build software. I believe we're at an inflection point and I want to be building at that edge.",
  },
  {
    label: "Music Production",
    body: "I've been producing music for 16 years, primarily in hip-hop, R&B, and lo-fi. Music and engineering live in the same part of my brain — both start with a blank canvas and end with something that either works or it doesn't.",
  },
];

export default function Page() {
  return (
    <div className="flex flex-col">
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <div className="flex flex-col-reverse lg:flex-row items-center px-8 pt-8 pb-12 gap-10 lg:pt-20 lg:gap-25">
        {/* Text + Buttons */}
        <div className="w-full lg:w-1/3 flex flex-col gap-8 lg:justify-between lg:self-stretch">
          <div className="flex flex-col gap-8">
            <p className="text-2xl leading-snug sm:text-3xl lg:text-4xl">
              Frontend engineer and music producer crafting digital experiences
              that feel alive. AI has been on the forefront of my mind lately!
            </p>
            <div className="flex flex-col gap-4 w-full lg:w-75">
              <Button
                asChild
                className="gap-4 text-lg font-medium px-6 py-6 rounded-full lg:text-2xl lg:py-8"
              >
                <Link href="/projects">Engineering Projects</Link>
              </Button>
              <Button
                asChild
                className="gap-4 text-lg font-medium px-6 py-6 rounded-full bg-secondary-foreground text-background hover:bg-secondary-foreground/80 lg:text-2xl lg:py-8"
              >
                <Link href="/music">Music Portfolio</Link>
              </Button>
            </div>
          </div>

          <button
            onClick={() =>
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="hidden lg:flex cursor-pointer items-center gap-4 transition-colors"
          >
            <ArrowDownIcon className="h-8 w-8 text-secondary-foreground" />
            <span className="text-2xl font-medium">Learn more about me</span>
          </button>
        </div>

        {/* Hero Image */}
        <div className="w-full lg:w-2/3">
          <Image
            src="/images/hero/devon-hero.png"
            alt="Devon Lewis"
            width={800}
            height={800}
            className="w-full h-auto"
            priority
          />
        </div>
      </div>

      {/* ── About Me ─────────────────────────────────────────────── */}
      <div id="about" className="px-8 pt-16 pb-16 lg:pt-28 lg:pb-24">
        <div className="mb-12 flex flex-col gap-3 lg:mb-16">
          <span className="text-sm font-medium uppercase tracking-widest text-secondary-foreground">
            About Me
          </span>
          <h2 className="text-4xl font-semibold leading-none tracking-tight text-primary lg:text-6xl">
            Devon Lewis
          </h2>
          <p className="mt-2 max-w-xl text-base text-secondary lg:text-lg">
            Software engineer, entrepreneur, music producer,and technology
            enthusiast — I build things that sit at the intersection of
            technical depth and creative vision.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {pillars.map(({ label, body }) => (
            <div
              key={label}
              className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:border-muted-foreground/30"
            >
              <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                {label}
              </span>
              <p className="text-sm leading-relaxed text-secondary">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
