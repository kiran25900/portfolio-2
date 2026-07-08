"use client"

import { Warp } from "@paper-design/shaders-react";

type ShaderShape = "checks" | "stripes" | "edge";

interface ShaderConfig {
  proportion: number;
  softness: number;
  distortion: number;
  swirl: number;
  swirlIterations: number;
  shape: ShaderShape;
  shapeScale: number;
  colors: string[];
}

interface ServiceCard {
  icon: string;
  title: string;
  description: string;
  colSpan: string;
  bg: string;
  textSize?: string;
}

const services: ServiceCard[] = [
  {
    icon: "code",
    title: "Frontend Development",
    description:
      "Crafting pixel-perfect, responsive, and accessible user interfaces using React, Next.js, and modern CSS frameworks.",
    colSpan: "md:col-span-8",
    bg: "bg-surface-container-low",
  },
  {
    icon: "dns",
    title: "Backend Engineering",
    description:
      "Building scalable APIs and resilient server architectures with Node.js and Python.",
    colSpan: "md:col-span-4",
    bg: "bg-surface-container-highest",
    textSize: "text-sm",
  },
  {
    icon: "database",
    title: "Database Design",
    description:
      "Structuring high-performance data layers with PostgreSQL, Prisma, and Redis.",
    colSpan: "md:col-span-4",
    bg: "bg-surface-container-highest",
    textSize: "text-sm",
  },
  {
    icon: "brush",
    title: "UI/UX Design",
    description:
      "Designing intuitive user experiences with a focus on usability and modern aesthetics.",
    colSpan: "md:col-span-4",
    bg: "bg-surface-container-low",
    textSize: "text-sm",
  },
  {
    icon: "cloud",
    title: "Cloud & DevOps",
    description:
      "Deploying and maintaining applications on AWS, Vercel, and Docker with automated CI/CD pipelines.",
    colSpan: "md:col-span-4",
    bg: "bg-surface-container-low",
    textSize: "text-sm",
  },
];

const getShaderConfig = (index: number): ShaderConfig => {
  const configs: ShaderConfig[] = [
    {
      proportion: 0.3,
      softness: 0.8,
      distortion: 0.15,
      swirl: 0.6,
      swirlIterations: 8,
      shape: "checks",
      shapeScale: 0.08,
      colors: ["hsl(280, 100%, 30%)", "hsl(320, 100%, 60%)", "hsl(340, 90%, 40%)", "hsl(300, 100%, 70%)"],
    },
    {
      proportion: 0.4,
      softness: 1.2,
      distortion: 0.2,
      swirl: 0.9,
      swirlIterations: 12,
      shape: "stripes",
      shapeScale: 0.12,
      colors: ["hsl(200, 100%, 25%)", "hsl(180, 100%, 65%)", "hsl(160, 90%, 35%)", "hsl(190, 100%, 75%)"],
    },
    {
      proportion: 0.35,
      softness: 0.9,
      distortion: 0.18,
      swirl: 0.7,
      swirlIterations: 10,
      shape: "stripes",
      shapeScale: 0.1,
      colors: ["hsl(120, 100%, 25%)", "hsl(140, 100%, 60%)", "hsl(100, 90%, 30%)", "hsl(130, 100%, 70%)"],
    },
    {
      proportion: 0.45,
      softness: 1.1,
      distortion: 0.22,
      swirl: 0.8,
      swirlIterations: 15,
      shape: "stripes",
      shapeScale: 0.09,
      colors: ["hsl(30, 100%, 35%)", "hsl(50, 100%, 65%)", "hsl(40, 90%, 40%)", "hsl(45, 100%, 75%)"],
    },
    {
      proportion: 0.38,
      softness: 0.95,
      distortion: 0.16,
      swirl: 0.85,
      swirlIterations: 11,
      shape: "checks",
      shapeScale: 0.11,
      colors: ["hsl(250, 100%, 30%)", "hsl(270, 100%, 65%)", "hsl(260, 90%, 35%)", "hsl(265, 100%, 70%)"],
    },
    {
      proportion: 0.42,
      softness: 1.0,
      distortion: 0.19,
      swirl: 0.75,
      swirlIterations: 9,
      shape: "stripes",
      shapeScale: 0.13,
      colors: ["hsl(330, 100%, 30%)", "hsl(350, 100%, 60%)", "hsl(340, 90%, 35%)", "hsl(345, 100%, 75%)"],
    },
  ]
  return configs[index % configs.length]
}

export default function BentoGrid() {
  return (
    <section id="bento-services" className="py-24 px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="mb-16">
        <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary mb-2 block">
          Skills & Expertise
        </span>
        <h2 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight">
          What I Do.
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {services.map((service, index) => {
          const shaderConfig = getShaderConfig(index)
          return (
            <div
              key={service.title}
              id={`service-${service.title.toLowerCase().replace(/\s+/g, "-")}`}
              className={`${service.colSpan} bg-black/80 text-white rounded-lg p-10 bento-border group hover:border-primary transition-colors overflow-hidden relative min-h-[300px] flex flex-col justify-end`}
            >
              {/* Background Shader */}
              <div className="absolute inset-0 z-0 overflow-hidden opacity-90 transition-opacity group-hover:opacity-100">
                <Warp
                  style={{ height: "100%", width: "100%" }}
                  proportion={shaderConfig.proportion}
                  softness={shaderConfig.softness}
                  distortion={shaderConfig.distortion}
                  swirl={shaderConfig.swirl}
                  swirlIterations={shaderConfig.swirlIterations}
                  shape={shaderConfig.shape}
                  shapeScale={shaderConfig.shapeScale}
                  scale={1}
                  rotation={0}
                  speed={0.8}
                  colors={shaderConfig.colors}
                />

                {/* Overlay gradient so text is legible */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />
              </div>

              {/* Background watermark for MVP card */}
              {service.title === "Frontend Development" && (
                <span className="material-symbols-outlined text-white/5 absolute -right-4 -bottom-4 text-[160px] pointer-events-none z-10">
                  code
                </span>
              )}

              <div className="relative z-20">
                {/* Icon */}
                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center mb-6 border border-white/20">
                  <span className="material-symbols-outlined text-white">
                    {service.icon}
                  </span>
                </div>

                {/* Content */}
                <h3 className="font-headline text-2xl font-bold mb-4 text-white">
                  {service.title}
                </h3>
                <p
                  className={`text-gray-200 ${service.textSize || ""} ${service.title === "Frontend Development" ? "max-w-md" : ""}`}
                >
                  {service.description}
                </p>
              </div>
            </div>
          )
        })}

        {/* Legacy Modernization — Special full-width card with the 6th shader config */}
        <div
          id="service-legacy-modernization"
          className="md:col-span-12 rounded-lg p-12 border border-white/20 group overflow-hidden relative min-h-[350px] flex items-center"
        >
          {/* Background Shader */}
          <div className="absolute inset-0 z-0 overflow-hidden opacity-90 transition-opacity group-hover:opacity-100">
            <Warp
              style={{ height: "100%", width: "100%" }}
              proportion={getShaderConfig(5).proportion}
              softness={getShaderConfig(5).softness}
              distortion={getShaderConfig(5).distortion}
              swirl={getShaderConfig(5).swirl}
              swirlIterations={getShaderConfig(5).swirlIterations}
              shape={getShaderConfig(5).shape}
              shapeScale={getShaderConfig(5).shapeScale}
              scale={1}
              rotation={0}
              speed={0.8}
              colors={getShaderConfig(5).colors}
            />
            {/* Overlay gradient so text is legible */}
            <div className="absolute inset-0 bg-black/60 z-10 group-hover:bg-black/40 transition-colors" />
          </div>

          <div className="relative z-20 flex flex-col md:flex-row items-center gap-12 w-full">
            <div className="flex-1">
              <div className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/30 text-xs font-bold uppercase tracking-widest mb-6">
                Currently Exploring
              </div>
              <h3 className="font-headline text-3xl md:text-4xl font-black mb-4 uppercase tracking-tighter text-white">
                Web3 & AI Integrations
              </h3>
              <p className="text-lg text-gray-200">
                Constantly learning and adapting. I am actively researching and integrating the latest in LLM capabilities and blockchain technologies into modern web architectures.
              </p>
            </div>
            <div className="flex-shrink-0">
              <span className="material-symbols-outlined text-[120px] text-white/30 group-hover:text-white/60 transition-all filter drop-shadow-xl">
                psychology
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
