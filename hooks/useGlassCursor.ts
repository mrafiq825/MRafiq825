import { useEffect, useRef } from "react";

export function useGlassCursor<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const hasHover = window.matchMedia("(hover: hover)").matches;
    if (prefersReducedMotion || !hasHover) return;

    let frame: number | null = null;

    const handlePointerMove = (e: PointerEvent) => {
      if (frame !== null) return;
      frame = requestAnimationFrame(() => {
        const rect = node.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;

        node.style.setProperty("--glass-x", `${x}%`);
        node.style.setProperty("--glass-y", `${y}%`);

        // max ~3deg tilt, eases toward edges
        const tiltX = ((y - 50) / 50) * -3;
        const tiltY = ((x - 50) / 50) * 3;
        node.style.setProperty("--glass-tilt-x", `${tiltX}deg`);
        node.style.setProperty("--glass-tilt-y", `${tiltY}deg`);

        frame = null;
      });
    };

    const handlePointerEnter = () => {
      node.style.setProperty("--glass-glow-opacity", "1");
    };

    const handlePointerLeave = () => {
      node.style.setProperty("--glass-glow-opacity", "0");
      node.style.setProperty("--glass-tilt-x", "0deg");
      node.style.setProperty("--glass-tilt-y", "0deg");
    };

    node.addEventListener("pointermove", handlePointerMove);
    node.addEventListener("pointerenter", handlePointerEnter);
    node.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      node.removeEventListener("pointermove", handlePointerMove);
      node.removeEventListener("pointerenter", handlePointerEnter);
      node.removeEventListener("pointerleave", handlePointerLeave);
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, []);

  return ref;
}
