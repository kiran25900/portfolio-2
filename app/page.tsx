import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import TechTicker from "@/components/sections/TechTicker";
import BentoGrid from "@/components/sections/BentoGrid";
import WorkShowcase from "@/components/sections/WorkShowcase";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <Hero />
        <TechTicker />
        <BentoGrid />
        <WorkShowcase />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
