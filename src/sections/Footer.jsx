import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    {
      label: "Home",
      href: "#home",
    },
    {
      label: "How It Works",
      href: "#how-it-works",
    },
    {
      label: "FAQ",
      href: "#faq",
    },
    {
      label: "About Us",
      href: "#about",
    },
  ];

  const legalLinks = [
    {
      label: "Privacy Policy",
      href: "#privacy-policy",
    },
    {
      label: "Terms of Service",
      href: "#terms",
    },
    {
      label: "Cookie Policy",
      href: "#cookies",
    },
  ];

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__main">
          {/* Brand */}
          <div className="footer__brand">
            <a href="#home" className="footer__logo">
              <span className="footer__logo-icon" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 5.5L18 12L8 18.5V5.5Z" fill="currentColor" />
                </svg>
              </span>

              <span>YTThumbnail</span>
            </a>

            <p className="footer__description">
              A simple online tool to access and download available YouTube
              thumbnail images from supported video URLs.
            </p>

            {/* Social Links */}
            <div className="footer__socials">
              <a href="#" className="footer__social-link" aria-label="Twitter">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4L15 15" />
                  <path d="M4 15L9 10" />
                  <path d="M14 14L20 20" />
                  <path d="M14 4L20 10" />
                </svg>
              </a>

              <a href="#" className="footer__social-link" aria-label="GitHub">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.58 2 12.24C2 16.75 4.87 20.56 8.84 21.91C9.34 22.01 9.52 21.69 9.52 21.41C9.52 21.16 9.51 20.48 9.5 19.58C6.73 20.2 6.14 18.2 6.14 18.2C5.69 17.01 5.03 16.69 5.03 16.69C4.13 16.06 5.1 16.07 5.1 16.07C6.1 16.14 6.63 17.13 6.63 17.13C7.52 18.7 8.96 18.25 9.54 17.98C9.63 17.32 9.89 16.87 10.17 16.61C7.96 16.35 5.63 15.47 5.63 11.46C5.63 10.32 6.02 9.39 6.65 8.66C6.55 8.4 6.19 7.33 6.74 5.89C6.74 5.89 7.56 5.62 9.48 6.96C10.27 6.73 11.13 6.61 12 6.61C12.87 6.61 13.73 6.73 14.52 6.96C16.44 5.62 17.26 5.89 17.26 5.89C17.81 7.33 17.45 8.4 17.35 8.66C17.98 9.39 18.37 10.32 18.37 11.46C18.37 15.48 16.03 16.34 13.81 16.6C14.17 16.92 14.5 17.55 14.5 18.52C14.5 19.91 14.49 21.03 14.49 21.41C14.49 21.69 14.67 22.01 15.17 21.91C19.13 20.56 22 16.75 22 12.24C22 6.58 17.52 2 12 2Z" />
                </svg>
              </a>

              <a href="#" className="footer__social-link" aria-label="YouTube">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="6" width="18" height="12" rx="3" />
                  <path d="M10 9L15 12L10 15V9Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer__column">
            <h2 className="footer__heading">Quick Links</h2>

            <nav className="footer__navigation" aria-label="Footer navigation">
              {quickLinks.map((link) => (
                <a key={link.label} href={link.href} className="footer__link">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Legal */}
          <div className="footer__column">
            <h2 className="footer__heading">Legal</h2>

            <nav className="footer__navigation" aria-label="Legal navigation">
              {legalLinks.map((link) => (
                <a key={link.label} href={link.href} className="footer__link">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="footer__column">
            <h2 className="footer__heading">Contact</h2>

            <a href="mailto:support@ytthumbnail.com" className="footer__link">
              support@thumbpicker.com
            </a>

            <a href="#help" className="footer__link">
              Help Center
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            © {currentYear} ThumbPicker. All rights reserved.
          </p>

          <p className="footer__disclaimer">
            YouTube is a trademark of Google Inc. YTThumbnail is an independent
            tool and is not affiliated with YouTube or Google.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
