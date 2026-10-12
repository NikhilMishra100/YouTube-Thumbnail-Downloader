/**
 * Extracts the video ID from a YouTube URL.
 *
 * Supported formats:
 * - youtube.com/watch?v=VIDEO_ID
 * - youtu.be/VIDEO_ID
 * - youtube.com/shorts/VIDEO_ID
 */
export function extractYouTubeVideoId(value) {
  if (!value || typeof value !== "string") {
    return null;
  }

  try {
    const url = new URL(value.trim());

    const hostname = url.hostname.toLowerCase().replace(/^www\./, "");

    // Standard YouTube URL
    if (hostname === "youtube.com") {
      const videoId = url.searchParams.get("v");

      if (videoId) {
        return videoId;
      }

      // YouTube Shorts URL
      if (url.pathname.startsWith("/shorts/")) {
        const videoId = url.pathname.split("/shorts/")[1]?.split("/")[0];

        return videoId || null;
      }
    }

    // Short YouTube URL
    if (hostname === "youtu.be") {
      const videoId = url.pathname.split("/")[1];

      return videoId || null;
    }

    return null;
  } catch {
    return null;
  }
}

/**
 * Generates YouTube thumbnail image URLs using a video ID.
 *
 * Note: Generating a URL does not guarantee that the
 * corresponding thumbnail resolution is available.
 */
export function getThumbnailUrls(videoId) {
  const baseUrl = `https://img.youtube.com/vi/${videoId}`;

  return {
    high: `${baseUrl}/maxresdefault.jpg`,
    medium: `${baseUrl}/sddefault.jpg`,
    standard: `${baseUrl}/hqdefault.jpg`,
  };
}

/**
 * Checks whether a thumbnail image is available.
 *
 * Returns the image dimensions when the image loads successfully.
 * Returns null when the image cannot be loaded.
 */
export function checkThumbnailAvailability(url) {
  return new Promise((resolve) => {
    const image = new Image();

    image.onload = () => {
      resolve({
        url,
        width: image.naturalWidth,
        height: image.naturalHeight,
      });
    };

    image.onerror = () => {
      resolve(null);
    };

    image.src = url;
  });
}
