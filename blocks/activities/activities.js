const ACTIVITIES_CONFIG = {
  ARIA_LABELS: {
    SECTION: 'Activities section',
    ACTIVITY: 'Activity item',
  },
  CLASSES: {
    ITEM: 'activities-item',
    ICON: 'activities-icon',
    TITLE: 'activities-title',
  },
};

/**
 * Decorates the activities block
 * @param {HTMLElement} block The activities block element
 */
export default async function decorate(block) {
  // Create wrapper for semantic structure and accessibility
  const wrapper = document.createElement('div');
  wrapper.className = 'activities-wrapper';
  wrapper.setAttribute('role', 'region');
  wrapper.setAttribute('aria-label', ACTIVITIES_CONFIG.ARIA_LABELS.SECTION);

  // Transform table cells into activity items
  const items = [...block.children];
  items.forEach((item) => {
    const cells = [...item.children];
    const activityDiv = document.createElement('div');
    activityDiv.className = ACTIVITIES_CONFIG.CLASSES.ITEM;
    activityDiv.setAttribute('role', 'article');
    activityDiv.setAttribute('aria-label', ACTIVITIES_CONFIG.ARIA_LABELS.ACTIVITY);

    // Create icon container
    const iconDiv = document.createElement('div');
    iconDiv.className = ACTIVITIES_CONFIG.CLASSES.ICON;
    iconDiv.appendChild(cells[0].firstElementChild || cells[0]);

    // Create title
    const titleDiv = document.createElement('div');
    titleDiv.className = ACTIVITIES_CONFIG.CLASSES.TITLE;
    titleDiv.textContent = cells[1]?.textContent || '';

    activityDiv.append(iconDiv, titleDiv);
    wrapper.appendChild(activityDiv);
  });

  // Replace block contents with new structure
  block.textContent = '';
  block.appendChild(wrapper);
} 