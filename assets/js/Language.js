// Update the translations object to include the new keys
const translations = {
  en: {
    // ... existing translations ...
    "skills_tab": "Skills",
    "tools_tab": "Tools",
    "name_label": "Name",
    "email_label": "Email",
    "phone_label": "Phone",
    "message_label": "Message"
  },
  hi: {
    // ... existing translations ...
    "skills_tab": "कौशल",
    "tools_tab": "उपकरण",
    "name_label": "नाम",
    "email_label": "ईमेल",
    "phone_label": "फोन",
    "message_label": "संदेश"
  }
};

// Update the updateLanguage function to handle placeholders
function updateLanguage(lang) {
  // Update meta tag
  document.querySelector('meta[name="lang"]').setAttribute('content', lang);
  
  // Update all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });
  
  // Update all elements with data-i18n-placeholder attribute
  document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
    const key = element.getAttribute('data-i18n-placeholder');
    if (translations[lang][key]) {
      element.setAttribute('placeholder', translations[lang][key]);
    }
  });
  
  // Save language preference to localStorage
  localStorage.setItem('language', lang);
}

// Initialize language
document.addEventListener('DOMContentLoaded', function() {
  const savedLanguage = localStorage.getItem('language') || 'en';
  document.getElementById('lang').value = savedLanguage;
  updateLanguage(savedLanguage);
  
  // Add event listener for language switcher
  document.getElementById('lang').addEventListener('change', function() {
    updateLanguage(this.value);
  });
});