import "./About.css";

function About() {
  const informationCards = [
    {
      title: "What Is a YouTube Thumbnail Downloader?",
      description:
        "A YouTube thumbnail downloader is a simple online tool that helps you access the thumbnail image associated with a YouTube video using its video URL.",
    },
    {
      title: "How Can You Download a YouTube Thumbnail?",
      description:
        "Copy the URL of a YouTube video, paste it into the downloader above, and submit the link. If the video URL is supported, the available thumbnail options will be displayed for download.",
    },
    {
      title: "What Thumbnail Quality Is Available?",
      description:
        "Thumbnail availability can vary between YouTube videos. Instead of promising one fixed resolution for every video, this tool displays the thumbnail options that are actually available.",
    },
    {
      title: "Can You Download YouTube Shorts Thumbnails?",
      description:
        "Yes. Supported YouTube Shorts URLs can be processed in the same way as regular YouTube video URLs. The available thumbnail is displayed when it can be retrieved.",
    },
  ];

  return (
    <section id="about" className="about" aria-labelledby="about-title">
      <div className="about__container">
        {/* Section introduction */}
        <header className="about__header">
          <span className="about__badge">ABOUT THE TOOL</span>

          <h2 id="about-title" className="about__title">
            About YouTube Thumbnail Downloader
          </h2>

          <p className="about__description">
            Our YouTube thumbnail downloader provides a simple way to access and
            download available thumbnail images from supported YouTube video
            URLs.
          </p>
        </header>

        {/* Informational content */}
        <div className="about__grid">
          {informationCards.map((card) => (
            <article key={card.title} className="about__card">
              <h3 className="about__card-title">{card.title}</h3>

              <p className="about__card-description">{card.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
