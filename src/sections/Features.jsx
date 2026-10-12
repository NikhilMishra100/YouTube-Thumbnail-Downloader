import "./Features.css";

function Features() {
  const features = [
    {
      title: "100% Free",
      description:
        "Download available YouTube thumbnails without subscriptions or paid plans.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="M8 9h8" />
          <path d="M8 13h5" />
        </svg>
      ),
    },

    {
      title: "No Registration",
      description:
        "Start downloading thumbnails without creating an account or entering personal details.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="8" r="3" />
          <path d="M6 20a6 6 0 0 1 12 0" />
          <path d="m17 11 2 2 3-3" />
        </svg>
      ),
    },

    {
      title: "High Quality",
      description:
        "Access the available thumbnail resolutions provided for each YouTube video.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m7 15 3-3 2 2 3-4 2 3" />
        </svg>
      ),
    },

    {
      title: "All Devices Supported",
      description:
        "Use the thumbnail downloader comfortably across desktop, tablet, and mobile devices.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="3" y="4" width="13" height="10" rx="1.5" />
          <path d="M7 20h5" />
          <path d="M9.5 14v6" />
          <rect x="18" y="7" width="3" height="10" rx="1" />
        </svg>
      ),
    },

    {
      title: "Fast & Simple",
      description:
        "Paste a YouTube URL, find the available thumbnail, and download it with just a few clicks.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="m13 2-9 12h7l-1 8 9-12h-7l1-8Z" />
        </svg>
      ),
    },

    {
      title: "Privacy Focused",
      description:
        "Basic thumbnail downloading does not require an account or personal information.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M12 3 5 6v5c0 4.5 2.8 8 7 10 4.2-2 7-5.5 7-10V6l-7-3Z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="features"
      className="features"
      aria-labelledby="features-title"
    >
      <div className="features__container">
        {/* Section heading */}
        <header className="features__header">
          <span className="features__badge">FEATURE RICH</span>

          <h2 id="features-title" className="features__title">
            Why Choose YTThumbnail?
          </h2>

          <p className="features__description">
            A simple and convenient way to download available YouTube thumbnail
            images.
          </p>
        </header>

        {/* Feature cards */}
        <div className="features__grid">
          {features.map((feature) => (
            <article key={feature.title} className="features__card">
              <div className="features__icon" aria-hidden="true">
                {feature.icon}
              </div>

              <h3 className="features__card-title">{feature.title}</h3>

              <p className="features__card-description">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
