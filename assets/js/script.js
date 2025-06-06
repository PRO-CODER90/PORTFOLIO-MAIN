'use strict';

/**
 * element toggle function
 */
const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }

/**
 * go to top button functionality
 */
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 10) {
    goTopBtn.classList.add("active");
  } else {
    goTopBtn.classList.remove("active");
  }
});

/**
 * navbar toggle
 */
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbar = document.querySelector("[data-navbar]");

navToggleBtn.addEventListener("click", function () {
  elemToggleFunc(navToggleBtn);
  elemToggleFunc(navbar);
  elemToggleFunc(document.body);
});


/**
 * skills toggle
 */

const toggleBtnBox = document.querySelector("[data-toggle-box]");
const toggleBtns = document.querySelectorAll("[data-toggle-btn]");
const skillsBox = document.querySelector("[data-skills-box]");

for (let i = 0; i < toggleBtns.length; i++) {
  toggleBtns[i].addEventListener("click", function () {

    elemToggleFunc(toggleBtnBox);
    for (let i = 0; i < toggleBtns.length; i++) { elemToggleFunc(toggleBtns[i]); }
    elemToggleFunc(skillsBox);

  });
}



/**
 * dark & light theme toggle
 */

const themeToggleBtn = document.querySelector("[data-theme-btn]");

themeToggleBtn.addEventListener("click", function () {

  elemToggleFunc(themeToggleBtn);

  if (themeToggleBtn.classList.contains("active")) {
    document.body.classList.remove("dark_theme");
    document.body.classList.add("light_theme");

    localStorage.setItem("theme", "light_theme");
  } else {
    document.body.classList.add("dark_theme");
    document.body.classList.remove("light_theme");

    localStorage.setItem("theme", "dark_theme");
  }

});

/**
 * check & apply last time selected theme from localStorage
 */

if (localStorage.getItem("theme") === "light_theme") {
  themeToggleBtn.classList.add("active");
  document.body.classList.remove("dark_theme");
  document.body.classList.add("light_theme");
} else {
  themeToggleBtn.classList.remove("active");
  document.body.classList.remove("light_theme");
  document.body.classList.add("dark_theme");
}

/**
 * Language switching functionality
 */

const langSwitcher = document.querySelector("[data-lang-switcher]");
const elementsToTranslate = document.querySelectorAll("[data-i18n]");

// Translations object
const translations = {
  en: {
    "home": "Home.",
    "about": "About.",
    "skills": "Skills.",
    "portfolio": "Portfolio.",
    "contact": "Contact.",
    "hero_title": "We Design & Build Creative Products",
    "get_in_touch": "Get in touch",
    "about_me": "About me",
    "about_title": "Need a Creative Product? I can Help You!",
    "about_text": "Hi! I'm Developergtm Reacher, and I'm a developer who has passion for building clean web applications with intuitive functionalities. I enjoy the process of turning ideas into reality using creative solutions. I'm always curious about learning new skills, tools, and concepts.",
    "hire_me": "Hire me",
    "download_cv": "Download cv",
    "skills_subtitle": "My skills",
    "skills_title": "What My Programming Skills Included?",
    "skills_text": "I develop simple, intuitive and responsive user interface that helps users get things done with less effort and time with those technologies.",
    "contact_subtitle": "Contact",
    "contact_title": "Have You Any Project? Please Drop a Message",
    "contact_text": "Get in touch and let me know how i can help. Fill out the form and i'll be in touch as soon as possible.",
    "address": "Address:",
    "phone": "Phone:",
    "email": "Email:",
    "name_placeholder": "Your Name",
    "email_placeholder": "E.g. Hero90@gmail.com",
    "phone_placeholder": "Phone Number",
    "message_placeholder": "Write message...",
    "send": "Send"
  },
  hi: {
    "home": "होम.",
    "about": "परिचय.",
    "skills": "कौशल.",
    "portfolio": "पोर्टफोलियो.",
    "contact": "संपर्क.",
    "hero_title": "हम रचनात्मक उत्पादों को डिजाइन और निर्माण करते हैं",
    "get_in_touch": "संपर्क करें",
    "about_me": "मेरे बारे में",
    "about_title": "क्या आपको रचनात्मक उत्पाद चाहिए? मैं आपकी मदद कर सकता हूँ!",
    "about_text": "नमस्ते! मैं डेवलपर हूँ, और मुझे साफ-सुथरे वेब एप्लिकेशन बनाने का शौक है जो सहज कार्यक्षमता के साथ आते हैं। मुझे रचनात्मक समाधानों का उपयोग करके विचारों को वास्तविकता में बदलने की प्रक्रिया पसंद है।",
    "hire_me": "मुझे नियुक्त करें",
    "download_cv": "सीवी डाउनलोड करें",
    "skills_subtitle": "मेरे कौशल",
    "skills_title": "मेरे प्रोग्रामिंग कौशल क्या शामिल हैं?",
    "skills_text": "मैं सरल, सहज और उत्तरदायी यूजर इंटरफेस विकसित करता हूं जो उपयोगकर्ताओं को कम प्रयास और समय के साथ काम करने में मदद करता है।",
    "contact_subtitle": "संपर्क",
    "contact_title": "क्या आपके पास कोई प्रोजेक्ट है? कृपया एक संदेश छोड़ें",
    "contact_text": "संपर्क करें और मुझे बताएं कि मैं कैसे मदद कर सकता हूं। फॉर्म भरें और मैं जल्द से जल्द संपर्क करूंगा।",
    "address": "पता:",
    "phone": "फोन:",
    "email": "ईमेल:",
    "name_placeholder": "आपका नाम",
    "email_placeholder": "जैसे Hero90@gmail.com",
    "phone_placeholder": "फोन नंबर",
    "message_placeholder": "संदेश लिखें...",
    "send": "भेजें"
  }
};

/**
 * Fixed Language Switching Functionality
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get language switcher element
    const langSwitcher = document.getElementById('lang');
    
    // If no element with ID 'lang', try data attribute
    if (!langSwitcher) {
        langSwitcher = document.querySelector('[data-lang-switcher]');
    }

    // Translations object (same as yours)
    const translations = {
        en: {
            // ... your existing English translations ...
        },
        hi: {
            // ... your existing Hindi translations ...
        }
    };

    // Function to update all translatable elements
    function updateLanguage(lang) {
        // Update HTML lang attribute
        document.documentElement.lang = lang;
        
        // Find all elements with data-i18n attribute
        const elements = document.querySelectorAll('[data-i18n]');
        
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            
            // Check if translation exists
            if (translations[lang] && translations[lang][key]) {
                // Handle different element types
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translations[lang][key];
                } else {
                    element.textContent = translations[lang][key];
                }
            }
        });
        
        // Save preference to localStorage
        localStorage.setItem('language', lang);
    }

    // Initialize language
    function initLanguage() {
        const savedLang = localStorage.getItem('language') || 'en';
        
        // Set dropdown value
        if (langSwitcher) {
            langSwitcher.value = savedLang;
        }
        
        // Update page content
        updateLanguage(savedLang);
    }

    // Set up event listener for language change
    if (langSwitcher) {
        langSwitcher.addEventListener('change', function() {
            updateLanguage(this.value);
        });
    }

    // Initialize language when page loads
    initLanguage();
});



/**
 * Validate name input to allow only alphabetic characters and spaces with warning message
 */
function validateNameInput() {
  const nameInput = document.getElementById('name');
  
  if (nameInput) {
    // Create warning message element
    const warningMsg = document.createElement('div');
    warningMsg.className = 'input-warning';
    warningMsg.style.display = 'none';
    nameInput.parentNode.appendChild(warningMsg);

    // Timer variable to manage the warning display
    let warningTimer = null;

    nameInput.addEventListener('input', function(e) {
      const originalValue = this.value;
      // Remove any non-alphabetic characters and spaces
      this.value = this.value.replace(/[^a-zA-Z\s]/g, '');
      
      // Show warning if characters were removed
      if (originalValue !== this.value) {
        warningMsg.textContent = 'Only alphabetic characters and spaces are allowed';
        warningMsg.style.display = 'block';
        
        // Clear any existing timer
        if (warningTimer) clearTimeout(warningTimer);
        
        // Set new timer to hide after 3 seconds
        warningTimer = setTimeout(() => {
          warningMsg.style.display = 'none';
        }, 3000);
      }
    });
    
    nameInput.addEventListener('keydown', function(e) {
      // Allow navigation and control keys
      if (['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab'].includes(e.key)) {
        return;
      }
      
      // Prevent entering numbers or special characters
      if (!/^[a-zA-Z\s]$/.test(e.key)) {
        e.preventDefault();
        warningMsg.textContent = `"${e.key}" is not allowed - only letters and spaces`;
        warningMsg.style.display = 'block';
        
        // Clear any existing timer
        if (warningTimer) clearTimeout(warningTimer);
        
        // Set new timer to hide after 3 seconds
        warningTimer = setTimeout(() => {
          warningMsg.style.display = 'none';
        }, 3000);
      }
    });

    // Hide warning when input gains focus (clean slate for new attempts)
    nameInput.addEventListener('focus', function() {
      warningMsg.style.display = 'none';
      if (warningTimer) clearTimeout(warningTimer);
    });
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  validateNameInput();
  // ... rest of your existing code ...
});


/** 
 * POP-UP Message
*/
// Function to show cool pop-up notification
function showNotification(message, type = 'success') {
  // Create notification element
  const notification = document.createElement('div');
  notification.className = `notification ${type} bounce`;
  
  // Notification content
  notification.innerHTML = `
    <ion-icon class="notification-icon" name="${type === 'success' ? 'checkmark-circle' : 'close-circle'}"></ion-icon>
    <span>${message}</span>
    <div class="notification-progress"></div>
  `;
  
  // Add to body
  document.body.appendChild(notification);
  
  // Remove notification after 3 seconds
  setTimeout(() => {
    notification.classList.remove('bounce');
    notification.classList.add('fade-out');
    setTimeout(() => {
      notification.remove();
    }, 300);
  }, 3000);
}

// Form submission handler
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Validate form (you can add more validation here)
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    
    if (nameInput.value.trim() === '' || emailInput.value.trim() === '') {
      showNotification('Please fill in all required fields', 'error');
      return;
    }
    
    // Show success message
    showNotification('Message sent successfully! We will contact you soon.');
    
    // Reset form (optional)
    this.reset();
    
    // Here you would normally send the form data to your server
    // For demo purposes, we're just showing the notification
  });
}
