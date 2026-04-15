"use client";

/**
 * RevealProvider – Aktiviert den IntersectionObserver für .reveal-Elemente.
 * Wird einmal in layout.tsx eingebunden.
 */

import { useReveal } from "@/hooks/useReveal";

export default function RevealProvider() {
  useReveal();
  return null;
}
