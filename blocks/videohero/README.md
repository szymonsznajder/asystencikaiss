# VideoHero Block

    A full-width, full-height YouTube video background block for creating immersive hero sections.

## Features

- Full viewport width and height video background
- Automatic YouTube video embedding
- Muted autoplay with loop
- Responsive design that maintains video aspect ratio
- No video controls for cleaner appearance

## Usage

Add the VideoHero block to your document using a table with a YouTube URL:

| VideoHero                                     |
| --------------------------------------------- |
| https://www.youtube.com/watch?v=your-video-id |

## Configuration

### CSS Variables

- `--video-z-index`: Controls the stacking order of the video (default: -1)

### Supported YouTube URL Formats

- Standard watch URLs: `https://www.youtube.com/watch?v=VIDEO_ID`
- Short URLs: `https://youtu.be/VIDEO_ID`
- Embed URLs: `https://www.youtube.com/embed/VIDEO_ID`

## Accessibility

- Video is muted by default
- Decorative video background with no controls
- Video iframe includes appropriate title attribute

## Performance

- Video loads with optimized YouTube embed parameters
- Minimal DOM manipulation
- CSS-based responsive scaling

## Browser Compatibility

- Works in all modern browsers
- Fallback for older browsers: displays nothing if iframe is not supported

## Troubleshooting

- Ensure YouTube URL is valid and video exists
- Check browser console for any error messages
- Verify video is not blocked by browser autoplay restrictions
