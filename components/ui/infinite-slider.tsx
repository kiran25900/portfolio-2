"use client";

import { cn } from "@/lib/utils";
import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useState } from "react";
import useMeasure from "react-use-measure";

export interface InfiniteSliderProps {
  children: React.ReactNode;
  duration?: number;
  reverse?: boolean;
  gap?: number;
  className?: string;
}

export function InfiniteSlider({
  children,
  duration = 20,
  reverse = false,
  gap = 24,
  className,
}: InfiniteSliderProps) {
  const [ref, { width }] = useMeasure();
  const controls = useAnimationControls();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (width <= 0) return;

    const contentWidth = width + gap;

    // Determine direction of motion
    // Standard left-to-right (not reverse): animate from 0 to -contentWidth
    // Reverse (right-to-left): animate from -contentWidth to 0
    let startX = reverse ? -contentWidth : 0;
    let endX = reverse ? 0 : -contentWidth;

    controls.start({
      x: [startX, endX],
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
      },
    });

    setIsReady(true);
  }, [width, gap, duration, reverse, controls]);

  return (
    <div className={cn("flex overflow-hidden relative", className)}>
      <motion.div
        className="flex min-w-max"
        style={{ gap: `${gap}px` }}
        animate={controls}
        initial={{ x: 0 }}
      >
        <div
          ref={ref}
          className={cn("flex min-w-max items-center", !isReady && "opacity-0")}
          style={{ gap: `${gap}px` }}
        >
          {children}
        </div>
        {/* Render copies so the animation feels seamless */}
        <div
          className={cn("flex min-w-max items-center", !isReady && "opacity-0")}
          style={{ gap: `${gap}px` }}
        >
          {children}
        </div>
        <div
          className={cn("flex min-w-max items-center", !isReady && "opacity-0")}
          style={{ gap: `${gap}px` }}
        >
          {children}
        </div>
      </motion.div>
    </div>
  );
}