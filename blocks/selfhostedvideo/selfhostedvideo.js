const SELFHOSTEDVIDEO_CONFIG = {
  AUTOPLAY: true,
  LOOP: true,
  MUTED: true,
  PLAYSINLINE: true,
  VIDEO_URL: 'https://raw.githubusercontent.com/[username]/[repo]/[branch]/[path-to-video]'
};

export default async function decorate(block) {
  const videoWrapper = document.createElement('div');
  videoWrapper.className = 'selfhostedvideo-wrapper';

  const video = document.createElement('video');
  video.autoplay = SELFHOSTEDVIDEO_CONFIG.AUTOPLAY;
  video.loop = SELFHOSTEDVIDEO_CONFIG.LOOP;
  video.muted = SELFHOSTEDVIDEO_CONFIG.MUTED;
  video.playsInline = SELFHOSTEDVIDEO_CONFIG.PLAYSINLINE;
  
  const source = document.createElement('source');
  source.src = SELFHOSTEDVIDEO_CONFIG.VIDEO_URL;
  source.type = 'video/mp4';
  video.appendChild(source);
  
  videoWrapper.appendChild(video);
  block.textContent = '';
  block.appendChild(videoWrapper);
} 