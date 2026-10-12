import "./HowItWorks.css";

function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Copy YouTube URL",
      description:
        "Find the YouTube video and copy its URL from your browser's address bar or share menu.",
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
          <rect x="8" y="8" width="10" height="10" rx="2" />
          <path d="M6 16H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
        </svg>
      ),
    },
    {
      number: "02",
      title: "Paste URL",
      description:
        "Paste the copied YouTube link into our smart input field at the top of the page.",
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
          <rect x="6" y="4" width="12" height="16" rx="2" />
          <path d="M9 4h6" />
          <path d="M9 9h6" />
          <path d="M9 13h4" />
        </svg>
      ),
    },
    {
      number: "03",
      title: "Download Thumbnail",
      description:
        "Choose an available thumbnail resolution and download your image instantly.",
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
          <path d="M12 3v12" />
          <path d="m7 10 5 5 5-5" />
          <path d="M5 21h14" />
        </svg>
      ),
    },
  ];

  return (
    <section id="how-it-works" className="how-it-works">
      <div className="how-it-works__container">
        {/* Section heading */}
        <div className="how-it-works__header">
          <span className="how-it-works__badge">SIMPLE PROCESS</span>

          <h2 className="how-it-works__title">How It Works</h2>

          <p className="how-it-works__description">
            Download a YouTube thumbnail in just three simple steps.
          </p>
        </div>

        {/* Steps */}
        <div className="how-it-works__steps">
          {steps.map((step) => (
            <article key={step.number} className="how-it-works__step">
              <div className="how-it-works__step-top">
                {/* Icon */}
                <div className="how-it-works__icon">{step.icon}</div>

                {/* Step number */}
                <span className="how-it-works__number">{step.number}</span>
              </div>

              <h3 className="how-it-works__step-title">{step.title}</h3>

              <p className="how-it-works__step-description">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
