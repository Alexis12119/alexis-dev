import type { Variants } from "framer-motion";

function useReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

const noAnimation: Variants = {
  hidden: {},
  visible: {},
};

export const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export function getAnimations() {
  if (useReducedMotion()) {
    return {
      fadeIn: noAnimation,
      fadeInUp: noAnimation,
      staggerContainer: noAnimation,
    };
  }
  return { fadeIn, fadeInUp, staggerContainer };
}

export const motionProps = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true, margin: "-100px" as const },
};
