import { useState } from "react";
import "./Navbar.css";

function Navbar({ isDarkMode, onThemeToggle }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const [hoveredLink, setHoveredLink] = useState(null);

  const navigationLinks = [
    {
      id: "home",
      label: "Home",
      href: "#",
    },
    {
      id: "how-it-works",
      label: "How It Works",
      href: "#how-it-works",
    },
    {
      id: "faq",
      label: "FAQ",
      href: "#faq",
    },
    {
      id: "about",
      label: "About",
      href: "#about",
    },
  ];

  const handleMenuToggle = () => {
    setIsMenuOpen((previousState) => !previousState);
  };

  const handleNavClick = (linkId) => {
    setActiveLink(linkId);
    setIsMenuOpen(false);
    setHoveredLink(null);
  };

  return (
    <header className="navbar">
      <nav className="navbar__container">
        {/* ========================================
            Desktop Navigation
        ======================================== */}

        <a href="#home" className="navbar__brand">
          <span className="navbar__brand-icon" aria-hidden="true">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="24" height="24" rx="6" fill="var(--color-primary)" />

              <path d="M10 8.2L16 12L10 15.8V8.2Z" fill="#ffffff" />
            </svg>
          </span>

          <span className="navbar__brand-text">ThumbPicker</span>
        </a>

        <div
          className="navbar__links"
          onMouseLeave={() => setHoveredLink(null)}
        >
          {navigationLinks.map((link) => {
            const isActive = hoveredLink
              ? hoveredLink === link.id
              : activeLink === link.id;

            return (
              <a
                key={link.id}
                href={link.href}
                className={`navbar__link ${
                  isActive ? "navbar__link--active" : ""
                }`}
                onMouseEnter={() => setHoveredLink(link.id)}
                onClick={() => handleNavClick(link.id)}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        {/* ========================================
            Desktop Theme Button
        ======================================== */}

        <button
          type="button"
          className="navbar__theme-button navbar__theme-button--desktop"
          onClick={onThemeToggle}
          aria-label={
            isDarkMode ? "Switch to light mode" : "Switch to dark mode"
          }
          title={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          {isDarkMode ? (
            /* Moon icon */
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
            </svg>
          ) : (
            /* Sun icon */
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2" />
              <path d="M12 20v2" />
              <path d="m4.93 4.93 1.41 1.41" />
              <path d="m17.66 17.66 1.41 1.41" />
              <path d="M2 12h2" />
              <path d="M20 12h2" />
              <path d="m6.34 17.66-1.41 1.41" />
              <path d="m19.07 4.93-1.41 1.41" />
            </svg>
          )}
        </button>

        {/* ========================================
            Mobile Controls
        ======================================== */}

        <div className="navbar__mobile-controls">
          {/* Mobile Theme Button */}

          <button
            type="button"
            className="navbar__theme-button navbar__theme-button--mobile"
            onClick={onThemeToggle}
            aria-label={
              isDarkMode ? "Switch to light mode" : "Switch to dark mode"
            }
            title={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDarkMode ? (
              /* Moon icon */
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
              </svg>
            ) : (
              /* Sun icon */
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2" />
                <path d="M12 20v2" />
                <path d="m4.93 4.93 1.41 1.41" />
                <path d="m17.66 17.66 1.41 1.41" />
                <path d="M2 12h2" />
                <path d="M20 12h2" />
                <path d="m6.34 17.66-1.41 1.41" />
                <path d="m19.07 4.93-1.41 1.41" />
              </svg>
            )}
          </button>

          {/* Mobile Menu Button */}

          <button
            type="button"
            className="navbar__menu-button"
            onClick={handleMenuToggle}
            aria-label={
              isMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMenuOpen ? (
              /* Close icon */
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="M6 6l12 12" />
                <path d="M18 6 6 18" />
              </svg>
            ) : (
              /* Hamburger icon */
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="M4 6h16" />
                <path d="M4 12h16" />
                <path d="M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* ========================================
          Mobile Navigation
      ======================================== */}

      {isMenuOpen && (
        <div id="mobile-navigation" className="navbar__mobile-menu">
          <div className="navbar__mobile-menu-inner">
            {navigationLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => handleNavClick(link.id)}
                className={`navbar__mobile-link ${
                  activeLink === link.id ? "navbar__mobile-link--active" : ""
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
