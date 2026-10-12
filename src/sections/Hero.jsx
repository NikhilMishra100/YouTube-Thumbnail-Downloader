import { useState } from "react";
import "./Hero.css";
import {
  extractYouTubeVideoId,
  getThumbnailUrls,
  checkThumbnailAvailability,
} from "../utils/youtube";

function Hero({ onThumbnailFound }) {
  const [videoUrl, setVideoUrl] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Clear the previous error before starting a new validation.
    setError("");

    const trimmedUrl = videoUrl.trim();

    // Check if the input is empty.
    if (!trimmedUrl) {
      setError("Please enter a YouTube URL.");
      return;
    }

    // Try to extract the YouTube video ID.
    const videoId = extractYouTubeVideoId(trimmedUrl);

    // If no video ID was found, the URL is invalid.
    if (!videoId) {
      setError("Please enter a valid YouTube URL.");
      return;
    }

    const thumbnailUrls = getThumbnailUrls(videoId);

    const results = await Promise.all([
      checkThumbnailAvailability(thumbnailUrls.high),
      checkThumbnailAvailability(thumbnailUrls.medium),
      checkThumbnailAvailability(thumbnailUrls.standard),
    ]);

    const availableThumbnails = {
      high: results[0],
      medium: results[1],
      standard: results[2],
    };

    console.log("Available thumbnails:", availableThumbnails);

    onThumbnailFound(availableThumbnails);
  };

  return (
    <section id="home" className="hero">
      <div className="hero__container">
        <div className="hero__content">
          <span className="hero__badge">FREE & EASY TO USE</span>

          <h1 className="hero__title">Download YouTube Thumbnails in HD</h1>

          <p className="hero__description">
            Paste any YouTube video URL and download its thumbnail in high
            quality — fast, free, and without registration.
          </p>

          {/* Downloader form */}
          <form className="hero__form" onSubmit={handleSubmit}>
            <div className="hero__input-wrapper">
              {/* Link icon */}
              <span className="hero__input-icon" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                </svg>
              </span>

              <input
                type="url"
                className="hero__input"
                placeholder="https://www.youtube.com/watch?v=..."
                aria-label="YouTube video URL"
                value={videoUrl}
                onChange={(event) => {
                  setVideoUrl(event.target.value);

                  // Remove the previous error when the user starts typing again.
                  if (error) {
                    setError("");
                  }
                }}
              />

              <button type="submit" className="hero__button">
                Download Thumbnail
              </button>
            </div>
          </form>

          {/* Validation error */}
          {error && (
            <p className="hero__error" role="alert">
              {error}
            </p>
          )}

          <p className="hero__support-text">
            Supports youtube.com, youtu.be and YouTube Shorts URLs
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
