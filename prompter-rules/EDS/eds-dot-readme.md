# Edge Delivery Services Development Guidelines

A comprehensive guide for developing with Adobe Edge Delivery Services (EDS/Franklin), focusing on best practices, standards, and development workflows.

## Core Concepts

1. **Document-Based Authoring**

   - Content creation via Google Docs/Microsoft Word
   - Markdown-based content structure
   - Table-to-div transformation patterns
2. **Block Architecture**

   - {block-name}-Container/{block-name}-wrapper/ {block-name}- block  class pattern
   - Semantic HTML structure
   - Responsive design principles
   - Variation handling

## Development Standards

### JavaScript Development

- Use async/await for asynchronous operations
- Create config objects for settings
- Group text strings at file top
- Follow Airbnb style guide
- Implement proper error handling

### CSS Development

- Use CSS variables for configuration in *styles/styles.css*
- Never style container classes
- Implement mobile-first approach
- Use kebab-case naming convention
- Scope styles to block

### Block Structure

```sh
/blocks/{blockname}/
├── {blockname}.js
├── {blockname}.css
├── README.md
├── example.md
├── demo.md
└── example.json (if needed)
```

## Documentation Requirements

### Block Documentation

1. README.md structure:

   - Block description
   - Features
   - Usage examples
   - Configuration options
   - Accessibility notes
   - Performance considerations
2. Example.md format:

   - Block usage examples
   - Variation examples
   - Content structure guidelines

### Metadata Structure

```sh
| metadata        |               |
| :-------------- | :------------ |
| title           |               |
| description     |               |
| json-ld         | article       |
| image           |               |
| author          | Tom Cranstoun |
| longdescription |               |
```

## Technical Requirements

### Performance

- Target Lighthouse scores: 100
- Implement lazy loading
- Optimize asset delivery
- Minimize DOM manipulation
- Use efficient selectors

### Accessibility

- Meet WCAG 2.2 Level AA
- Implement proper ARIA roles
- Ensure keyboard navigation
- Support screen readers
- Maintain contrast ratios

### Browser Support

- Support latest 2 versions (chrome, Microsoft edge, safari, brave, firefox)
- Implement graceful degradation
- Test cross-browser compatibility

## Best Practices

### Code Organization

- Group configuration variables
- Use meaningful naming
- Implement proper error handling
- Follow DRY principles
- Document assumptions

### Version Control

- Use meaningful commit messages
- Follow branching strategy
- Document changes properly

### Testing

- Test across devices
- Verify accessibility
- Check performance
- Validate markup

## Common Pitfalls

1. **Avoid**

   - Styling container classes
   - Inline styles in JS
   - Complex DOM manipulation
   - Unnecessary dependencies
2. **Remember**

   - Mobile-first approach
   - Accessibility requirements
   - Performance implications
   - Documentation needs

## Additional Resources

- [Franklin Documentation](https://www.aem.live/docs/introduction)
- [Airbnb Style Guide](https://github.com/airbnb/javascript)
- [WCAG Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/)

## Contact

For questions or clarifications, contact Tom Cranstoun.

---

Review

## Document Structure Analysis

### Code Analysis Section

Well-structured guidelines for code review
Clear steps for analyzing and documenting code
Good emphasis on meaningful comments vs obvious ones
Strong focus on preserving code structure

### Development Rules Section

**Block Structure Rules**
Comprehensive coverage of Franklin block architecture
Clear structural guidelines
Good emphasis on semantic HTML and accessibility
Proper responsive design requirements
**JavaScript Guidelines**
Strong emphasis on modern JS practices
Clear configuration management approach
Good focus on code organization
Proper error handling requirements
Adherence to Airbnb style guide
**CSS Guidelines**
Clear variable usage requirements
Important container styling restriction
Good mobile-first emphasis
Proper naming convention specification
Clear scoping requirements
**Performance Guidelines**
Comprehensive performance considerations
Clear DOM manipulation guidelines
Good asset optimization requirements
Proper selector efficiency guidelines

### Technical Requirements Section

**Browser Support**
Clear browser version requirements
Good graceful degradation emphasis
Proper testing requirements
**Accessibility**
Strong WCAG compliance requirements
Comprehensive navigation requirements
Good screen reader considerations
Clear contrast requirements
**SEO**
Good semantic markup emphasis
Clear metadata requirements
Proper search optimization guidelines
Structured data consideration

## Configuration Standards

### Block Configuration

```javascript
const BLOCK_CONFIG = {
  PATHS: {
    DATA: '/path/to/data',
    ASSETS: '/path/to/assets'
  },
  MESSAGES: {
    ERROR: 'Error loading content',
    SUCCESS: 'Operation successful'
  },
  TIMING: {
    ANIMATION: 300,
    DELAY: 2000
  }
};
```

### CSS Variables Structure

```css
.block-name {
  --block-spacing-small: 0.5rem;
  --block-spacing-medium: 1rem;
  --block-spacing-large: 2rem;
  --block-transition: 0.3s ease-in-out;
}
```

## Error Handling

### Standard Error Types

- NetworkError: For fetch/API failures
- ValidationError: For data validation issues
- ConfigurationError: For setup issues

### Error Handling Pattern

```javascript
try {
  // Operation code
} catch (error) {
  // eslint-disable-next-line no-console
  console.error('Error:', error);
  // Graceful fallback
}
```

## Block Variations

### Standard Variations

| Variation | Purpose  | Example                   |
| --------- | -------- | ------------------------- |
| bold      | Emphasis | `blockname (bold)`      |
| highlight | Focus    | `blockname (highlight)` |
| large     | Size     | `blockname (large)`     |

### Implementation

```css
.blockname.variation-name {
  /* variation styles */
}
```

## Performance Metrics

### Target Metrics

- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s
- Total Blocking Time: < 300ms
- Cumulative Layout Shift: < 0.1

### Loading Strategies

1. Critical Path

   - Inline critical CSS
   - Defer non-essential JS
   - Preload key resources
2. Asset Optimization

   - Image compression
   - Code splitting
   - Resource hints

## Testing Guidelines

### Unit Testing

- Test pure functions
- Mock external dependencies
- Test error scenarios

### Integration Testing

- Test block interactions
- Verify DOM updates
- Check event handling

### Accessibility Testing

- Screen reader testing
- Keyboard navigation
- Color contrast verification

### Performance Testing

- Lighthouse audits
- Load time measurements
- Memory usage monitoring

## Deployment Guidelines

### Pre-deployment Checklist

- [ ] All tests passing
- [ ] Accessibility verified
- [ ] Performance metrics met
- [ ] Documentation updated
- [ ] Code reviewed

### Post-deployment Verification

- Monitor error rates
- Check performance metrics
- Verify functionality
- Test critical paths

## Troubleshooting

### Common Issues

1. Block not rendering

   - Check block registration
   - Verify markup structure
   - Check console errors
2. Styling issues

   - Verify CSS scope
   - Check CSS variables
   - Inspect responsive breakpoints
3. Performance issues

   - Profile JavaScript execution
   - Check asset loading
   - Monitor memory usage
