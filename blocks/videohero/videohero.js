// Configuration object for VideoHero block
const VIDEOHERO_CONFIG = {
  // YouTube embed URL pattern
  YOUTUBE_EMBED_URL: 'https://www.youtube.com/embed/',
  // Error messages
  ERROR_MESSAGES: {
    INVALID_URL: 'Invalid YouTube URL provided',
    LOADING_ERROR: 'Error loading video:',
  },
  // CSS classes
  CLASSES: {
    WRAPPER: 'videohero-wrapper',
    IFRAME: 'videohero-iframe',
  },
  // YouTube URL parameters
  YOUTUBE_PARAMS: {
    autoplay: 1,
    mute: 1,
    controls: 0,
    loop: 1,
    playlist: '', // Will be dynamically set
    modestbranding: 1,
    showinfo: 0,
    rel: 0,
  },
};

/**
 * Extracts YouTube video ID from various YouTube URL formats
 * @param {string} url - YouTube URL
 * @returns {string|null} YouTube video ID or null if invalid
 */
function extractVideoId(url) {
  const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[7].length === 11) ? match[7] : null;
}

/**
 * Creates YouTube embed URL with parameters
 * @param {string} videoId - YouTube video ID
 * @returns {string} Formatted embed URL
 */
function createEmbedUrl(videoId) {
  const params = new URLSearchParams(VIDEOHERO_CONFIG.YOUTUBE_PARAMS);
  params.set('playlist', videoId); // Set playlist to same video for looping
  return `${VIDEOHERO_CONFIG.YOUTUBE_EMBED_URL}${videoId}?${params.toString()}`;
}

/**
 * Decorates the video hero block
 * @param {Element} block - The block element to decorate
 */
export default async function decorate(block) {
  // Get YouTube URL from first cell
  const youtubeUrl = block.textContent.trim();
  
  // Clear original content
  block.textContent = '';
  
  // Extract video ID
  const videoId = extractVideoId(youtubeUrl);
  
  if (!videoId) {
    // eslint-disable-next-line no-console
    console.error(VIDEOHERO_CONFIG.ERROR_MESSAGES.INVALID_URL);
    return;
  }

  // Create iframe element
  const iframe = document.createElement('iframe');
  iframe.className = VIDEOHERO_CONFIG.CLASSES.IFRAME;
  iframe.src = createEmbedUrl(videoId);
  iframe.setAttribute('frameborder', '0');
  iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('title', 'Background video');

  // Add iframe to block
  block.appendChild(iframe);
} 