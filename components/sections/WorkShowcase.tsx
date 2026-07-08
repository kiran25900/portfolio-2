'use client';
import { ReactLenis } from 'lenis/react';
import { useTransform, motion, useScroll, MotionValue } from 'framer-motion';
import { useRef, useEffect } from 'react';

const projectsData = [
  {
    title: "CINELINK",
    category: "Mobile App",
    role: "Product Designer & Engineer",
    description: "The operating system for film production — verified crew, live project ledgers, and hiring you can trust, all in one place. Features peer-verified filmography, Bond Table for budgets & payments, and real-time crew scheduling.",
    techStack: ["React Native", "Node.js", "PostgreSQL", "Razorpay"],
    kpi: "▲ Film Production OS · 2026",
    link: "/projects/cinelink.png",
    color: "#1a1208",
  },
  {
    title: "CAREFLOW",
    category: "Mobile App",
    role: "Full-Stack Developer",
    description: "Home care management designed to feel as intuitive as a direct message. Effortless shift planning, real-time vitals logging, care team coordination, and privacy-first architecture for caregivers and clients.",
    techStack: ["React Native", "Node.js", "Firebase", "HIPAA"],
    kpi: "▲ Home Care Platform · 2026",
    link: "/projects/careflow.png",
    color: "#050f05",
  },
  {
    title: "ALCOVE",
    category: "UX Redesign",
    role: "Product Designer",
    description: "A full booking-flow redesign for a premium hotel app — from discovery to checkout. Warm editorial aesthetic, illustrated property cards, and a frictionless 3-step reservation experience that feels as considered as the stays it books.",
    techStack: ["Figma", "React Native", "Lottie", "Stripe"],
    kpi: "▲ Hospitality App Redesign · 2026",
    link: "/projects/alcove.png",
    color: "#1a2e1a",
  },
  {
    title: "ENERGY MONITOR",
    category: "IoT Dashboard",
    role: "Full-Stack Developer",
    description: "Real-time smart home energy tracking across every connected device. Live wattage, voltage & current readings, per-device scheduling, cost forecasting, and instant alerts — all in a neon-lit dark interface built for the grid.",
    techStack: ["React Native", "Node.js", "MQTT", "WebSocket"],
    kpi: "▲ Smart Home IoT · 2026",
    link: "/projects/energy-monitor.png",
    color: "#030d0a",
  },
];


interface CardProps {
  i: number;
  title: string;
  category: string;
  role: string;
  description: string;
  techStack: string[];
  kpi: string;
  url: string;
  color: string;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

export const Card = ({
  i,
  title,
  category,
  role,
  description,
  techStack,
  kpi,
  url,
  color,
  progress,
  range,
  targetScale,
}: CardProps) => {
  const container = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  // Glow effect logic
  useEffect(() => {
    const item = cardRef.current;
    if (!item) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = item.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      item.style.setProperty('--mouse-x', `${x}px`);
      item.style.setProperty('--mouse-y', `${y}px`);
    };

    item.addEventListener('mousemove', handleMouseMove);
    return () => {
      item.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={container}
      className="relative h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div
        ref={cardRef}
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className="card-glow relative -top-[8%] w-[95%] lg:w-[80%] max-w-[960px] rounded-[2.5rem] origin-top overflow-hidden border border-white/10 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)]"
      >
        {/* Background gradient layer */}
        <div
          className="absolute inset-0 z-0"
          style={{ backgroundColor: color }}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-white/[0.03] via-transparent to-black/40" />

        {/* Inner layout */}
        <div className="relative z-10 flex flex-col md:flex-row gap-0">

          {/* Left — content panel */}
          <div className="flex flex-col justify-between p-8 lg:p-12 md:w-[52%]">

            {/* Header row */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[11px] font-black tracking-[0.25em] uppercase text-white/30">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="flex-1 h-px bg-white/10" />
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/40 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                  {category}
                </span>
              </div>

              <h2 className="text-3xl lg:text-4xl font-black font-headline text-white tracking-tight leading-tight">
                {title}
              </h2>

              <div className="mt-2 text-xs font-semibold uppercase tracking-widest text-zinc-500">
                {role}
              </div>

              {/* Accent divider */}
              <div className="mt-6 flex items-center gap-3">
                <div className="w-8 h-[2px] bg-white/60 rounded-full" />
                <div className="w-2 h-[2px] bg-white/20 rounded-full" />
              </div>

              <p className="mt-5 text-sm lg:text-base text-zinc-400 leading-relaxed">
                {description}
              </p>
            </div>

            {/* Footer row */}
            <div className="mt-8 pt-6 border-t border-white/[0.08]">
              {/* Tech tags */}
              <div className="flex flex-wrap gap-2 mb-5">
                {techStack?.map((tech: string, idx: number) => (
                  <span
                    key={idx}
                    className="text-[10px] font-bold tracking-widest uppercase text-zinc-400 bg-black/30 px-3 py-1.5 rounded-lg border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* KPI */}
              {kpi && (
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_2px_rgba(52,211,153,0.5)]" />
                  <span className="text-emerald-400 font-bold text-xs tracking-wide">
                    {kpi}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Right — image panel */}
          <div className="relative md:w-[48%] aspect-[4/3] md:aspect-auto md:min-h-[420px] overflow-hidden">
            {/* gradient overlap on left edge */}
            <div
              className="absolute left-0 top-0 bottom-0 w-16 z-10 hidden md:block"
              style={{
                background: `linear-gradient(to right, ${color}, transparent)`,
              }}
            />
            <motion.div className="w-full h-full" style={{ scale: imageScale }}>
              <img
                src={url}
                alt={title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </motion.div>
            {/* subtle vignette bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/40 to-transparent z-10" />
          </div>

        </div>
      </motion.div>
    </div>
  );
};

export default function WorkShowcase() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  return (
    <ReactLenis root>
      <section id="work" className='bg-black relative' ref={container}>
        <style dangerouslySetInnerHTML={{
          __html: `
          .card-glow {
            position: relative;
          }
          .card-glow::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: radial-gradient(
              1000px circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
              rgba(255, 255, 255, 0.08),
              transparent 40%
            );
            opacity: 0;
            transition: opacity 0.3s ease;
            pointer-events: none;
            z-index: 0;
            border-radius: inherit;
          }
          .card-glow:hover::before {
            opacity: 1;
          }
        `}} />
        <div className='text-white h-[60vh] w-full bg-black grid place-content-center relative border-t border-zinc-900'>
          {/* Subtle grid background */}
          <div className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>

          <div className="relative z-10 text-center flex flex-col items-center">
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/50 mb-4 block">
              Selected Works
            </span>
            <h2 className='text-4xl md:text-6xl font-black font-headline text-center tracking-tighter leading-tight uppercase'>
              Digital <br /> Craftsmanship.
            </h2>
            <div className="mt-8 text-zinc-500 animate-bounce">
              <span className="material-symbols-outlined text-3xl">arrow_downward</span>
            </div>
          </div>
        </div>

        <div className='text-white w-full bg-black pb-24'>
          {projectsData.map((project, i) => {
            const targetScale = 1 - (projectsData.length - i) * 0.05;
            return (
              <Card
                key={`p_${i}`}
                i={i}
                url={project.link}
                title={project.title}
                category={project.category}
                role={project.role}
                kpi={project.kpi}
                techStack={project.techStack}
                color={project.color}
                description={project.description}
                progress={scrollYProgress}
                range={[i * (1 / 3), 1]}
                targetScale={targetScale}
              />
            );
          })}
        </div>
      </section>
    </ReactLenis>
  );
}
