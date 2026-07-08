"use client";

import { LogoCloud } from "@/components/ui/logo-cloud";

/**
 * darkLogo: true  → logo is dark/black-dominant and needs inversion on dark bg
 * darkLogo: false → logo is light/coloured and renders fine as-is
 */
const techLogos = [
  {
    src: "https://svgl.app/library/nextjs_icon_dark.svg",
    alt: "Next.js",
    darkLogo: true,   // pure black wordmark — invisible on black
  },
  {
    src: "https://svgl.app/library/typescript.svg",
    alt: "TypeScript",
    darkLogo: false,  // blue badge — fine on dark
  },
  {
    src: "https://svgl.app/library/tailwindcss-icon.svg",
    alt: "Tailwind CSS",
    darkLogo: false,  // cyan mark — fine on dark
  },
  {
    src: "https://svgl.app/library/prisma.svg",
    alt: "Prisma",
    darkLogo: true,   // dark wordmark — invisible on black
  },
  {
    src: "https://svgl.app/library/postgresql.svg",
    alt: "PostgreSQL",
    darkLogo: false,  // blue elephant — fine on dark
  },
  {
    src: "https://svgl.app/library/docker.svg",
    alt: "Docker",
    darkLogo: false,  // blue whale — fine on dark
  },
  {
    src: "https://svgl.app/library/aws.svg",
    alt: "AWS",
    darkLogo: false,   // dark orange text at low opacity — poor contrast
  },
  {
    src: "https://svgl.app/library/framer-motion.svg",
    alt: "Framer Motion",
    darkLogo: false,   // black mark — invisible on black
  },
];

export default function TechTicker() {
  return (
    <section className="py-24 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        {/* Heading — zinc-400 ensures ≥ 4.5:1 contrast on black */}
        <div className="text-center mb-12">
          <h2 className="text-zinc-400 font-headline font-medium tracking-widest text-xs uppercase">
            My Tech Stack
          </h2>
        </div>

        {/* Infinite Slider */}
        <div className="relative group">
          <LogoCloud logos={techLogos} />

          {/* Hover subtitle — zinc-400 for WCAG AA compliance */}
          <div className="mt-8 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            <p className="text-zinc-400 text-sm font-mono">
              Modern • Scalable • Performant
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}