import React, { useState, useEffect } from 'https://esm.sh/react@18.3.1?dev';
import { Link, NavLink, useLocation } from 'https://esm.sh/react-router-dom@6.22.3?dev&deps=react@18.3.1,react-dom@18.3.1';
import { FiMenu, FiX } from 'https://esm.sh/react-icons@5.2.1/fi?dev&deps=react@18.3.1';
import htm from 'https://esm.sh/htm@3';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/booking', label: 'Booking' },
  { to: '/contact', label: 'Contact' },
];

const html = htm.bind(React.createElement);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return html`
    <header className="navbar">
      <div className="nav-inner">
        <${Link} to="/" className="brand">
          <span className="brand-mark">SC</span>
          <div>
            <div className="brand-name">Scarborough CleanCo</div>
            <div className="brand-sub">Premium Cleaning</div>
          </div>
        <//>
        <nav className=${`nav-links ${isOpen ? 'open' : ''}`}>
          ${navLinks.map(
            (link) =>
              html`
                <${NavLink}
                  key=${link.to}
                  to=${link.to}
                  className=${({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                >
                  ${link.label}
                <//>
              `
          )}
        </nav>
        <div className="nav-actions">
          <${Link} to="/booking" className="btn btn-primary full-mobile">
            Book a Cleaning
          <//>
          <button
            className="menu-toggle"
            type="button"
            aria-label="Toggle menu"
            onClick=${() => setIsOpen((prev) => !prev)}
          >
            ${isOpen ? html`<${FiX} />` : html`<${FiMenu} />`}
          </button>
        </div>
      </div>
    </header>
  `;
};

export default Navbar;
