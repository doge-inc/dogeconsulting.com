"use client";

import { useEffect, useState } from "react";

/**
 * Returns how far the window has scrolled through the first `distance` pixels, from 0 to 1.
 * Updates at most once per animation frame, and stops re-rendering once the value is clamped.
 */
export function useScrollProgress(distance: number) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      setProgress(Math.min(Math.max(window.scrollY / distance, 0), 1));
    };

    const onScroll = () => {
      if (!frame) {
        frame = requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [distance]);

  return progress;
}
