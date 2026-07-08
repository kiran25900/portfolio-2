"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { InfiniteSlider } from "./infinite-slider";
import { ProgressiveBlur } from "./progressive-blur";

interface Logo {
  src: string;
  alt: string;
  /**
   * Set to `true` for logos whose SVG artwork is dark/black-dominant.
   * These receive `invert brightness-110` so they become white/light on the
   * dark background, preserving legibility without distorting brand shapes.
   */
  darkLogo?: boolean;
}

interface LogoCloudProps {
  className?: string;
  logos: Logo[];
}

export function LogoCloud({ className, logos = [] }: LogoCloudProps) {
  return (
    <div
      className={cn(
        "relative mx-auto w-full py-6 overflow-hidden",
        className
      )}
    >
      <InfiniteSlider gap={64} duration={40} reverse>
        {logos.map((logo, index) => (
          <div key={index} className="flex items-center justify-center px-4">
            <img
              src={logo.src}
              alt={logo.alt}
              className={cn(
                // Base: grayscale at rest, full colour on hover, smooth fade
                "h-7 w-auto transition-all duration-500",
                // Idle state
                "opacity-50 grayscale",
                // Hover state
                "hover:opacity-100 hover:grayscale-0",
                // Dark logos: invert to white so they read on black background.
                // hover:invert-0 restores original colour on interaction.
                logo.darkLogo && "invert brightness-110 hover:invert-0"
              )}
            />
          </div>
        ))}
      </InfiniteSlider>

      {/* Progressive edge fade — left */}
      <ProgressiveBlur
        blurIntensity={1.5}
        className="pointer-events-none absolute top-0 left-0 h-full w-[120px] z-10"
        direction="left"
      />
      {/* Progressive edge fade — right */}
      <ProgressiveBlur
        blurIntensity={1.5}
        className="pointer-events-none absolute top-0 right-0 h-full w-[120px] z-10"
        direction="right"
      />
    </div>
  );
}