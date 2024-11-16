/**
 * Decorates the activities block
 * @param {HTMLElement} block The block element to decorate
 */
export default function decorate(block) {
  // Get wrapper element
  const wrapper = block.querySelector('.activities-wrapper');
  
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
