"use client";

/**
 * Footer – Links, Impressum, Datenschutz, Copyright
 */

import Link from "next/link";
import Image from "next/image";

const links = [
  { href: "/leistungen", label: "Leistungen" },
  { href: "/ueber-mich", label: "Über mich" },
  { href: "/kontakt", label: "Kontakt" },
  { href: "/impressum", label: "Impressum" },
  { href: "/datenschutz", label: "Datenschutz" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          {/* Logo + Tagline */}
          <div className="footer__brand">
            <Link href="/" className="footer__logo" aria-label="LF Studio – Startseite">
              <Image
                src="/logo.svg"
                alt="LF Studio Logo"
                width={40}
                height={40}
                className="navbar__logo-img"
              />
              <span className="footer__logo-text">Studio</span>
            </Link>
            <p className="footer__tagline">
              Websites für kleine Betriebe. Fair. Schnell. Gut.
            </p>
          </div>

          {/* Nav-Links */}
          <nav className="footer__links" aria-label="Footer Navigation">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="footer__link">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="footer__divider" />

        <div className="footer__bottom">
          <p className="footer__copy">
            © 2026 LF Studio · Lucas Bernhardt · St. Wendel, Saarland
          </p>
        </div>
      </div>
    </footer>
  );
}
