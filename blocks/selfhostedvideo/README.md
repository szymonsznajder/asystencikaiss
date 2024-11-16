# Self Hosted Video Block

A full-width and height video block that plays MP4 videos in a loop.

## Features

- Full viewport width and height video display
- Autoplay with loop
- Muted by default for better user experience
- Mobile-friendly with playsinline attribute

## Usage

Add the video URL to the first cell of the block:

| Selfhostedvideo |
|-----------------|
| /path/to/video.mp4 |

## Configuration

### CSS Variables

- `--video-height`: Controls video container height (default: 100vh)
- `--video-width`: Controls video container width (default: 100vw)
- `--video-object-fit`: Controls video fitting behavior (default: cover)

## Accessibility

- Video is muted by default to prevent unexpected audio
- Video autoplays but doesn't interfere with screen readers

## Performance

- Video is loaded directly into the page
- Consider using compressed video formats for better performance
- Video automatically loops without JavaScript intervention

## Browser Compatibility

- Supports all modern browsers
- Fallback to standard video player on unsupported browsers 