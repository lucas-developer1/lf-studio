"use client";

/**
 * Navbar – Sticky Glass-Navigation mit Hamburger-Menü für Mobile
 */

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/leistungen", label: "Leistungen" },
  { href: "/ueber-mich", label: "Über mich" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Menü bei Routenwechsel schließen
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header className={`navbar${scrolled ? "" : " navbar--top"}`}>
        {/* Logo */}
        <Link href="/" className="navbar__logo" aria-label="LF Studio – Startseite">
          <Image
            src="/logo.svg"
            alt="LF Studio Logo"
            width={32}
            height={32}
            priority
            className="navbar__logo-img"
          />
          <span>Studio</span>
        </Link>

        {/* Desktop-Nav */}
        <nav className="navbar__links" aria-label="Hauptnavigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`navbar__link${pathname === link.href ? " navbar__link--active" : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <Link
          href="/kontakt"
          className="btn btn--primary btn--sm"
          aria-label="Kostenlos anfragen"
        >
          Kostenlos anfragen
        </Link>

        {/* Hamburger */}
        <button
          className="navbar__hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      {/* Mobile Menü */}
      <div
        className={`mobile-menu${menuOpen ? " mobile-menu--open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <nav aria-label="Mobile Navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`mobile-menu__link${pathname === link.href ? " mobile-menu__link--active" : ""}`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="mobile-menu__cta">
            <Link
              href="/kontakt"
              className="btn btn--primary"
              style={{ width: "100%", justifyContent: "center" }}
              onClick={() => setMenuOpen(false)}
            >
              Kostenlos anfragen
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
