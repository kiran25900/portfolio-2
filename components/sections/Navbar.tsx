"use client";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import { useState } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { label: "Home", href: "#hero", active: true },
    { label: "About", href: "#about", active: false },
    { label: "Work", href: "#work", active: false },
    { label: "Skills", href: "#skills", active: false },
    { label: "Contact", href: "#contact", active: false },
  ];

  return (
    <nav
      id="navbar"
      /* Changed bg-white/80 to bg-black/5 and border-zinc-200/30 to border-white/10 */
      className="fixed top-0 w-full z-50 bg-black/0 backdrop-blur-2xl border-b border-white/10"
    >
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <a
          href="#"
          id="navbar-logo"
          /* Changed text-primary (likely black/dark) to text-white */
          className="text-xl font-bold tracking-tighter text-white font-headline"
        >
          OSBORN
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 font-headline tracking-tight font-semibold">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              id={`nav-link-${link.label.toLowerCase()}`}
              className={
                link.active
                  /* Active link: Pure white with white border */
                  ? "text-white border-b-2 border-white pb-1"
                  /* Inactive: Ash-gray (zinc-400) hovering to white */
                  : "text-zinc-400 hover:text-white transition-colors"
              }
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <LiquidButton
          id="hero-cta-primary"
          className="text-white border border-white/20 rounded-full px-12 font-bold uppercase tracking-wider shadow-2xl"
          size="xl"
        >
          Get in Touch
        </LiquidButton>

        {/* Mobile Hamburger */}
        <button
          id="navbar-mobile-toggle"
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
        >
          {/* Changed bg-primary to bg-white */}
          <span
            className={`w-6 h-0.5 bg-white transition-transform ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`w-6 h-0.5 bg-white transition-opacity ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`w-6 h-0.5 bg-white transition-transform ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        /* Mobile menu now matches the dark theme */
        <div className="md:hidden bg-black/90 backdrop-blur-2xl border-t border-white/10 px-8 py-6 space-y-4 font-headline font-semibold">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block text-lg text-white hover:text-zinc-400 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <button className="w-full bg-white text-black px-6 py-3 rounded-full font-headline font-semibold mt-4">
            Get in Touch
          </button>
        </div>
      )}
    </nav>
  );
}