import Image from "next/image";

const stats = [
  { value: "74%", label: "Latency Reduction" },
  { value: "12M+", label: "Daily Events" },
  { value: "99.99", label: "Uptime Goal" },
];

export default function CaseStudy() {
  return (
    <section id="case-study" className="bg-inverse-surface py-32 px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary mb-6 block">
              Featured Work
            </span>
            <h2 className="font-headline text-4xl md:text-6xl font-black text-white leading-tight mb-8">
              Global Logistics Architecture Modernization
            </h2>
            <p className="text-zinc-400 text-lg mb-12">
              How we helped a Fortune 500 logistics firm transition from legacy
              mainframes to a distributed, event-driven cloud architecture,
              reducing latency by 74%.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-12">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-headline font-black text-primary">
                    {stat.value}
                  </div>
                  <div className="text-xs uppercase text-zinc-500 font-bold mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <button
              id="case-study-cta"
              className="bg-primary text-on-primary px-10 py-4 rounded-full font-headline font-bold flex items-center gap-3 group"
            >
              Read Full Case Study
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-square bg-zinc-800 rounded-lg overflow-hidden border border-zinc-700 shadow-2xl relative">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSGcZ8mn6OgLH-35DvvJ8hv9vLpUWnTz2JoraHgSQYwtCj37I37U8zeMeLpJB81gVo5mO-x-fTrfpvqIsg7_6f9mGEnI7oBj_CMPR40NM7b16LPxY-Pbf9WVYTTMo9vD8R73lrJ8wi1Lx_Tx_tveLWyhn_uYircU49Z7PF4mH4aC4iL2OPhJxyuSrveJxwfyxTqNkL-RyL-OAwtCnjOVO-Ikk0KV4cMx6Z5oDG1-1eder8DTSNDL9EJkH45M5ZWz7AvPOWgDOFpKk"
                alt="Data Center Architecture"
                fill
                className="object-cover mix-blend-overlay opacity-50"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/5 backdrop-blur-md rounded border border-white/10">
                <code className="text-primary text-sm font-mono block mb-2">
                  {"//"} System Architecture Visualization
                </code>
                <div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-3/4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
