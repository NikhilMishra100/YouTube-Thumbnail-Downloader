import { useState } from "react";
import "./FAQ.css";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is a YouTube thumbnail downloader?",
      answer:
        "A YouTube thumbnail downloader is a tool that lets you access and download the thumbnail image associated with a YouTube video by using its video URL.",
    },
    {
      question: "How do I download a YouTube thumbnail?",
      answer:
        "Copy the YouTube video URL, paste it into the downloader input field, and click the Download Thumbnail button. If the URL is valid, the available thumbnail options will be displayed.",
    },
    {
      question: "Can I download thumbnails from YouTube Shorts?",
      answer:
        "Yes. You can use a supported YouTube Shorts URL in the downloader. The tool will process the URL and show the available thumbnail when it can be retrieved.",
    },
    {
      question: "What thumbnail resolutions are available?",
      answer:
        "The available resolutions can vary depending on the YouTube video. The downloader shows the thumbnail options that are actually available instead of promising a fixed resolution for every video.",
    },
    {
      question: "Do I need to create an account?",
      answer:
        "No. The basic thumbnail downloading functionality does not require you to create an account or register.",
    },
    {
      question: "Is this YouTube thumbnail downloader free?",
      answer:
        "Yes. The basic thumbnail downloading functionality is available for free without requiring a subscription.",
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex((currentIndex) => (currentIndex === index ? null : index));
  };

  return (
    <section id="faq" className="faq" aria-labelledby="faq-title">
      <div className="faq__container">
        {/* Section heading */}
        <header className="faq__header">
          <span className="faq__badge">FAQ</span>

          <h2 id="faq-title" className="faq__title">
            Frequently Asked Questions
          </h2>

          <p className="faq__description">
            Find answers to common questions about downloading YouTube
            thumbnails.
          </p>
        </header>

        {/* FAQ list */}
        <div className="faq__list">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            const answerId = `faq-answer-${index}`;

            return (
              <article
                key={faq.question}
                className={`faq__item ${isOpen ? "faq__item--open" : ""}`}
              >
                <h3 className="faq__question">
                  <button
                    type="button"
                    className="faq__question-button"
                    onClick={() => handleToggle(index)}
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                  >
                    <span className="faq__question-text">{faq.question}</span>

                    <span className="faq__icon" aria-hidden="true">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </span>
                  </button>
                </h3>

                <div id={answerId} className="faq__answer" hidden={!isOpen}>
                  <p className="faq__answer-text">{faq.answer}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
