const SELFHOSTEDVIDEO_CONFIG = {
  AUTOPLAY: true,
  LOOP: true,
  MUTED: true,
  PLAYSINLINE: true,
};

export default async function decorate(block) {
  // Create wrapper for video element
  const videoWrapper = document.createElement('div');
  videoWrapper.className = 'selfhostedvideo-wrapper';

  // Create video element
  const video = document.createElement('video');
  video.autoplay = SELFHOSTEDVIDEO_CONFIG.AUTOPLAY;
  video.loop = SELFHOSTEDVIDEO_CONFIG.LOOP;
  video.muted = SELFHOSTEDVIDEO_CONFIG.MUTED;
  video.playsInline = SELFHOSTEDVIDEO_CONFIG.PLAYSINLINE;
  
  // Get video source from first cell in the block
  const videoSource = block.querySelector(':scope div:first-child').textContent.trim();
  
  // Create and append source element
  const source = document.createElement('source');
  source.src = videoSource;
  source.type = 'video/mp4';
  video.appendChild(source);
  
  // Append video to wrapper
  videoWrapper.appendChild(video);
  
  // Clear block content and append wrapper
  block.textContent = '';
  block.appendChild(videoWrapper);
}