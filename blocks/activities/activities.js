/**
 * Decorates the activities block
 * @param {HTMLElement} block The block element to decorate
 */
export default function decorate(block) {
  // Create wrapper if it doesn't exist
  let wrapper = block.querySelector('.activities-wrapper');
  if (!wrapper) {
    wrapper = document.createElement('div');
    wrapper.className = 'activities-wrapper';
    block.appendChild(wrapper);
  }
  
  // Get all rows except the header (first row)
  const rows = [...block.querySelectorAll(':scope > div:not(:first-child)')];
  
  // Transform rows into activity cards
  const activitiesHTML = rows.map(row => {
    // Get image and text from the row
    const img = row.querySelector('img');
    const text = row.textContent.trim();
    
    return `
      <div class="activity-card">
        ${img ? img.outerHTML : ''}
        <p class="activity-text">${text}</p>
      </div>
    `;
  }).join('');

  wrapper.innerHTML = activitiesHTML;
}