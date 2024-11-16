# Activities Block

A block component that displays activity cards with icons and text in a horizontal row layout. The content is authored directly in Google Docs using a table structure.

## Features

- Responsive layout
- Dynamic content from document table
- Accessible design
- Mobile-first approach

## Usage

Create a table in your Google Doc with the following structure:

| Activities |
| ---------- |
| ![Mountain icon](/icons/mountain.svg) MOUNTAIN BIKING TRIPS |
| ![Hiking icon](/icons/hiking.svg) MOUNTAIN BIKING TRIPS |
| ![Biking icon](/icons/biking.svg) ADVENTURE |

Notes:
- First row contains block name "Activities"
- Each subsequent row contains an image and text
- Images should be referenced using markdown syntax
- Leave a blank line before and after the table

## Configuration

### CSS Variables
- `--activity-spacing`: Controls spacing between cards
- `--activity-text-color`: Sets text color
- `--activity-icon-size`: Controls icon dimensions

## Accessibility

- Images require alt text in Google Doc
- Semantic HTML structure
- Proper color contrast
- Keyboard navigation support

## Performance

- Minimal DOM manipulation
- Optimized for mobile devices
- Efficient content transformation

## Content Authoring

When creating content in Google Docs:
- Use single-column table
- Include image references with descriptive alt text
- Keep text formatting simple
- Ensure consistent spacing 