import "./ThumbnailResult.css";

function ThumbnailResult({ thumbnailOptions }) {
  const handleDownload = async (thumbnail, quality) => {
    if (!thumbnail?.url) {
      return;
    }

    try {
      const response = await fetch(thumbnail.url);

      if (!response.ok) {
        throw new Error("Thumbnail could not be downloaded.");
      }

      const blob = await response.blob();

      const downloadUrl = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = `youtube-thumbnail-${quality}.jpg`;

      document.body.appendChild(link);
      link.click();
      link.remove();

      URL.revokeObjectURL(downloadUrl);
    } catch (error) {
      console.error("Thumbnail download failed:", error);
    }
  };

  // Don't render the result section until thumbnail data is available.
  if (!thumbnailOptions) {
    return null;
  }

  return (
    <section className="thumbnail-result">
      <div className="thumbnail-result__container">
        {/* Thumbnail preview */}
        <div className="thumbnail-result__preview">
          <img
            src={
              thumbnailOptions.high?.url ||
              thumbnailOptions.medium?.url ||
              thumbnailOptions.standard?.url
            }
            alt="YouTube video thumbnail"
            className="thumbnail-result__image"
          />

          <p className="thumbnail-result__success">
            Thumbnail successfully loaded
          </p>
        </div>

        {/* Thumbnail information */}
        <div className="thumbnail-result__info">
          <h2 className="thumbnail-result__title">YouTube Thumbnail</h2>

          <p className="thumbnail-result__description">
            Your YouTube thumbnail is ready to download.
          </p>

          {/* Available thumbnail qualities */}
          <div className="thumbnail-result__options">
            {thumbnailOptions.high && (
              <div className="thumbnail-result__option">
                <div>
                  <span className="thumbnail-result__quality">
                    High Quality
                  </span>

                  <span className="thumbnail-result__resolution">
                    {thumbnailOptions.high.width} ×{" "}
                    {thumbnailOptions.high.height}
                  </span>
                </div>

                <button
                  type="button"
                  className="thumbnail-result__download"
                  onClick={() => handleDownload(thumbnailOptions.high, "high")}
                >
                  Download
                </button>
              </div>
            )}

            {thumbnailOptions.medium && (
              <div className="thumbnail-result__option">
                <div>
                  <span className="thumbnail-result__quality">
                    Medium Quality
                  </span>

                  <span className="thumbnail-result__resolution">
                    {thumbnailOptions.medium.width} ×{" "}
                    {thumbnailOptions.medium.height}
                  </span>
                </div>

                <button
                  type="button"
                  className="thumbnail-result__download"
                  onClick={() =>
                    handleDownload(thumbnailOptions.medium, "medium")
                  }
                >
                  Download
                </button>
              </div>
            )}

            {thumbnailOptions.standard && (
              <div className="thumbnail-result__option">
                <div>
                  <span className="thumbnail-result__quality">
                    Standard Quality
                  </span>

                  <span className="thumbnail-result__resolution">
                    {thumbnailOptions.standard.width} ×{" "}
                    {thumbnailOptions.standard.height}
                  </span>
                </div>

                <button
                  type="button"
                  className="thumbnail-result__download"
                  onClick={() =>
                    handleDownload(thumbnailOptions.standard, "standard")
                  }
                >
                  Download
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ThumbnailResult;
