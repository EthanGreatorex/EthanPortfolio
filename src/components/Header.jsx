import { useEffect, useState, useRef } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import './Header.css';

const MotionHeader = motion.header;
const MotionButton = motion.button;
const MotionSpan = motion.span;

const NAV_LINKS = [
  { label: 'Work', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Story', href: '#timeline' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const firstNavItemRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === 'Escape') setMenuOpen(false);
    }
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => firstNavItemRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <MotionHeader
      className={`header ${scrolled ? 'header--scrolled' : ''} ${menuOpen ? 'header--menu-open' : ''}`}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <a href="#" className="header-brand">
        <MotionSpan
          className="header-brand-dot"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
        <span>Ethan</span>
      </a>

      <nav
        id="primary-navigation"
        className={`header-nav ${menuOpen ? 'header-nav--open' : ''}`}
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

        <MotionButton
          type="button"
          className="header-theme-btn"
          aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          onClick={toggleTheme}
          whileTap={{ rotate: 180, scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 300, damping: 15 }}
        >
          <AnimatePresence mode="wait">
            <MotionSpan
              key={isDark ? 'sun' : 'moon'}
              initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.25 }}
            >
              {isDark ? <FiSun size={18} /> : <FiMoon size={18} />}
            </MotionSpan>
          </AnimatePresence>
        </MotionButton>

        <a
          href="#contact"
          className="header-cta"
          onClick={() => setMenuOpen(false)}
        >
          Say hi 👋
        </a>
      </nav>

      <button
        type="button"
        className={`header-menu-btn ${menuOpen ? 'header-menu-btn--open' : ''}`}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
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
