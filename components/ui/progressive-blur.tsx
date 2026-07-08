"use client";

import { cn } from "@/lib/utils";

export interface ProgressiveBlurProps extends React.HTMLAttributes<HTMLDivElement> {
  blurIntensity?: number;
  direction?: "top" | "bottom" | "left" | "right";
}

export function ProgressiveBlur({
  blurIntensity = 2,
  direction = "bottom",
  className,
  ...props
}: ProgressiveBlurProps) {
  const getGradientDirection = () => {
    switch (direction) {
      case "top":
        return "to bottom"; // mask fades downwards to zero
      case "bottom":
        return "to top";
      case "left":
        return "to right";
      case "right":
        return "to left";
      default:
        return "to top";
    }
  };

  return (
    <div
      className={cn("pointer-events-none absolute z-0", className)}
      style={
        {
          "--blur-intensity": `${blurIntensity}px`,
          backdropFilter: `blur(var(--blur-intensity))`,
          maskImage: `linear-gradient(${getGradientDirection()}, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%)`,
          WebkitMaskImage: `linear-gradient(${getGradientDirection()}, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%)`,
        } as React.CSSProperties
      }
      {...props}
    />
  );
}