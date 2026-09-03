import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import "./Header.css";

const MotionHeader = motion.header;

const NAV_LINKS = [
  { label: "Work", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Approach", href: "#process" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const firstNavItemRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") setMenuOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      setTimeout(() => firstNavItemRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <MotionHeader
      className={`header ${scrolled ? "header--scrolled" : ""} ${menuOpen ? "header--menu-open" : ""}`}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="header-start">
        <a href="#" className="header-brand">
          <span className="header-brand-mark">E / G</span>
          <span>ETHAN GREATOREX</span>
        </a>
      </div>

      <nav
        id="primary-navigation"
        className={`header-nav ${menuOpen ? "header-nav--open" : ""}`}
      >
        {NAV_LINKS.map(({ label, href }, i) => (
          <a
            key={href}
            href={href}
            ref={i === 0 ? firstNavItemRef : undefined}
            className="header-link"
            onClick={() => setMenuOpen(false)}
          >
            <span className="header-link-text">{label}</span>
            <span className="header-link-dot" aria-hidden />
          </a>
        ))}

        <a
          href="#contact"
          className="header-cta"
          onClick={() => setMenuOpen(false)}
        >
          Want to chat? <span aria-hidden>↗</span>
        </a>
      </nav>

      <button
        type="button"
        className={`header-menu-btn ${menuOpen ? "header-menu-btn--open" : ""}`}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        onClick={() => setMenuOpen((o) => !o)}
      >
        <span className="header-menu-btn-line" />
        <span className="header-menu-btn-line" />
      </button>
    </MotionHeader>
  );
}
