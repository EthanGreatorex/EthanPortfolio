import { useState } from 'react';
import './Header.css';

const NAV_LINKS = [
  { label: 'Portfolio', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact me', href: '#contact', primary: true },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <a href="#" className="header-brand">
        <span>Ethan Greatorex</span>
      </a>

      <button
        type="button"
        className={`header-menu-btn ${menuOpen ? 'header-menu-btn--open' : ''}`}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((o) => !o)}
      >
        <span className="header-menu-btn-line" />
        <span className="header-menu-btn-line" />
        <span className="header-menu-btn-line" />
      </button>

      <nav className={`header-nav ${menuOpen ? 'header-nav--open' : ''}`}>
        {NAV_LINKS.map(({ label, href, primary }) => (
          <a
            key={href}
            href={href}
            className={primary ? 'header-link header-link--primary' : 'header-link'}
            onClick={() => setMenuOpen(false)}
          >
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}
