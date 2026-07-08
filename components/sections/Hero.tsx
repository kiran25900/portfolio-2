import { WebGLShader } from "@/components/ui/web-gl-shader";
import { LiquidButton, MetalButton } from "@/components/ui/liquid-glass-button";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[819px] flex flex-col justify-center items-center px-6 py-24 text-center overflow-hidden"
    >
      {/* Background Shader Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <WebGLShader />
        {/* Darkening overlay ensures text remains prominent against the moving shader waves */}
        <div className="absolute inset-0 bg-black/50 z-10 transition-colors" />
      </div>

      <div className="max-w-5xl mx-auto relative z-20 mt-16">
        <span className="text-[12px] uppercase tracking-[0.3em] font-bold text-primary mb-8 block drop-shadow-lg filter">
          Full Stack Software Engineer
        </span>

        <h1 className="font-headline text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] text-white mb-8 drop-shadow-2xl">
          BUILDING DIGITAL EXPERIENCES
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto mb-16 font-medium drop-shadow-md">
          I craft intuitive, high-performance web applications that solve real problems and look great doing it.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          <LiquidButton
            id="hero-cta-primary"
            className="text-white border border-white/20 rounded-full px-12 font-bold uppercase tracking-wider shadow-2xl"
            size="xl"
          >
            Get In Touch
          </LiquidButton>

          <LiquidButton
            id="hero-cta-primary"
            className="text-white border border-white/20 rounded-full px-12 font-bold uppercase tracking-wider shadow-2xl"
            size="xl"
          >
            View Portfolio
          </LiquidButton>
        </div>
      </div>
    </section>
  );
}
