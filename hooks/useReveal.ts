"use client";

/**
 * useReveal – IntersectionObserver + MutationObserver Hook
 *
 * Fügt .is-visible zu allen .reveal-Elementen hinzu sobald sie sichtbar werden.
 * MutationObserver stellt sicher, dass auch Elemente die per Client-Side-Navigation
 * (Next.js Seitenwechsel) neu in den DOM kommen, automatisch beobachtet werden.
 */

import { useEffect } from "react";

export function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    const observe = (el: Element) => {
      if (!el.classList.contains("is-visible")) {
        io.observe(el);
      }
    };

    // Bestehende Elemente beobachten (initialer Seitenaufruf)
    document.querySelectorAll(".reveal").forEach(observe);

    // Neue Elemente beobachten (Client-Side-Navigation)
    const mo = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType !== Node.ELEMENT_NODE) return;
          const el = node as Element;
          if (el.classList?.contains("reveal")) observe(el);
          el.querySelectorAll(".reveal").forEach(observe);
        });
      });
    });

    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);
}
