import { useEffect, useState, useRef } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';
import './Header.css';

const NAV_LINKS = [
  { label: 'Portfolio', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact me', href: '#contact', primary: true },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const navRef = useRef(null);
  const firstNavItemRef = useRef(null);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === 'Escape') {
        setMenuOpen(false);
      }
    }

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  // Focus management for mobile menu
  useEffect(() => {
    if (menuOpen && firstNavItemRef.current) {
      // Delay to ensure the menu is fully rendered
      setTimeout(() => {
        firstNavItemRef.current?.focus();
      }, 100);
    }
  }, [menuOpen]);

  const handleNavLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <a href="#" className="header-brand">
        <span>Ethan Greatorex</span>
      </a>

      <nav
        ref={navRef}
        id="primary-navigation"
        className={`header-nav ${menuOpen ? 'header-nav--open' : ''}`}
      >
        <button
          type="button"
          ref={firstNavItemRef}
          className="header-theme-btn"
          aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          onClick={toggleTheme}
          title={isDark ? 'Light mode' : 'Dark mode'}
        >
          {isDark ? <FiSun size={20} /> : <FiMoon size={20} />}
        </button>

        {NAV_LINKS.map(({ label, href, primary }) => (
          <a
            key={href}
            href={href}
            className={primary ? 'header-link header-link--primary' : 'header-link'}
            onClick={handleNavLinkClick}
          >
            {label}
          </a>
        ))}
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
        <span className="header-menu-btn-line" />
      </button>
    </header>
  );
}
