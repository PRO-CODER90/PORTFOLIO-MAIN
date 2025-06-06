// protection.js - Ethical Code Protection
document.addEventListener('DOMContentLoaded', function() {
  // 1. Basic right-click prevention (with user-friendly message)
  document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    showToast('Content protection enabled ⚔️');
    return false;
  });

  // 2. Text selection prevention (with visual feedback)
  document.addEventListener('selectstart', function(e) {
    if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
      e.preventDefault();
      flashElement(e.target);
      return false;
    }
  });

  // 3. Image protection (non-intrusive)
  const images = document.querySelectorAll('img:not([data-allow-drag])');
  images.forEach(img => {
    // Prevent dragging
    img.setAttribute('draggable', 'false');
    img.addEventListener('dragstart', e => e.preventDefault());
    
    // Add subtle hover effect
    img.addEventListener('mouseover', () => {
      img.style.transition = 'all 0.3s';
      img.style.filter = 'drop-shadow(0 0 8px rgba(0,0,0,0.3))';
    });
    img.addEventListener('mouseout', () => {
      img.style.filter = '';
    });
  });

  // 4. Add invisible copyright watermark
  addCopyrightWatermark();

  // 5. Form input protection
  protectForms();

  // Helper functions
  function showToast(message) {
    const toast = document.createElement('div');
    toast.textContent = message;
    toast.style.position = 'fixed';
    toast.style.bottom = '20px';
    toast.style.right = '20px';
    toast.style.padding = '12px 24px';
    toast.style.background = '#333';
    toast.style.color = '#fff';
    toast.style.borderRadius = '4px';
    toast.style.zIndex = '9999';
    toast.style.animation = 'fadeInOut 3s';
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
  }

  function flashElement(el) {
    const original = el.style.boxShadow;
    el.style.boxShadow = '0 0 0 2px red';
    setTimeout(() => {
      el.style.boxShadow = original;
    }, 300);
  }

  function addCopyrightWatermark() {
    const watermark = document.createElement('div');
    watermark.textContent = `© ${new Date().getFullYear()} ${document.title}`;
    watermark.style.position = 'fixed';
    watermark.style.bottom = '0';
    watermark.style.right = '0';
    watermark.style.fontSize = '0px';
    watermark.style.opacity = '0';
    watermark.style.height = '0px';
    document.body.appendChild(watermark);
  }

  function protectForms() {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
      form.addEventListener('submit', function(e) {
        // Add your form protection logic here
        // Example: Validate form fields
      });
    });
  }
});