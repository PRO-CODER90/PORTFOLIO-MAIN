/**
 * Theme and Particles Background Switcher - Fixed Version
 */

const themeToggleBtn = document.querySelector("[data-theme-btn]");

// Function to switch particle styles and CSS
function switchParticleTheme(theme) {
  const particlesContainer = document.getElementById('particles-js');
  const particleCSS = document.querySelector('link[href*="Particles"]');
  
  if (theme === 'dark_theme') {
    // Apply dark theme particles and CSS
    if (particleCSS) {
      particleCSS.href = './assets/css/Particles.css';
    }
    // Initialize dark theme particles (assuming Particles.js is already loaded)
    particlesJS("particles-js", {
      particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#ffffff" },
        shape: { type: "circle", stroke: { width: 0, color: "#000000" } },
        opacity: { value: 0.5, random: false },
        size: { value: 3, random: true },
        line_linked: {
          enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1
        },
        move: {
          enable: true, speed: 6, direction: "none", random: false,
          straight: false, out_mode: "out", bounce: false
        }
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: true, mode: "grab" },
          onclick: { enable: true, mode: "push" }
        },
        modes: {
          grab: { distance: 140, line_linked: { opacity: 1 } },
          push: { particles_nb: 4 }
        }
      },
      retina_detect: true
    });
  } else {
    // Apply light theme particles and CSS
    if (particleCSS) {
      particleCSS.href = './assets/css/Particles-2.css';
    }
    // Initialize light theme particles (using the same particles.js library)
    particlesJS("particles-js", {
      particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#02020a" },
        shape: { type: "circle", stroke: { width: 0, color: "#000000" } },
        opacity: { value: 0.5, random: false },
        size: { value: 3, random: true },
        line_linked: {
          enable: true, distance: 150, color: "#02020a", opacity: 0.4, width: 1
        },
        move: {
          enable: true, speed: 6, direction: "none", random: false,
          straight: false, out_mode: "out", bounce: false
        }
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: true, mode: "grab" },
          onclick: { enable: true, mode: "push" }
        },
        modes: {
          grab: { distance: 140, line_linked: { opacity: 1 } },
          push: { particles_nb: 4 }
        }
      },
      retina_detect: true
    });
  }
}

// Theme toggle functionality
themeToggleBtn.addEventListener("click", function() {
  elemToggleFunc(themeToggleBtn);

  if (themeToggleBtn.classList.contains("active")) {
    document.body.classList.add("dark_theme");
    document.body.classList.remove("light_theme");
    switchParticleTheme('dark_theme');
    localStorage.setItem("theme", "dark_theme");
  } else {
    document.body.classList.remove("dark_theme");
    document.body.classList.add("light_theme");
    switchParticleTheme('light_theme');
    localStorage.setItem("theme", "light_theme");
  }
});

// Initialize theme on page load
function initTheme() {
  const savedTheme = localStorage.getItem("theme") || "dark_theme";
  
  if (savedTheme === "light_theme") {
    themeToggleBtn.classList.remove("active");
    document.body.classList.add("light_theme");
    document.body.classList.remove("dark_theme");
    switchParticleTheme('light_theme');
  } else {
    themeToggleBtn.classList.add("active");
    document.body.classList.add("dark_theme");
    document.body.classList.remove("light_theme");
    switchParticleTheme('dark_theme');
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // First, load the default particles.js
  const particleScript = document.createElement('script');
  particleScript.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
  particleScript.onload = function() {
    // After particles.js is loaded, initialize theme
    initTheme();
  };
  document.body.appendChild(particleScript);
});