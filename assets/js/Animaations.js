// script.js

// Wait for loading screen to complete
document.addEventListener('DOMContentLoaded', function() {
  const loadingScreen = document.querySelector('.loading-screen');
  
  // This simulates waiting for loading to complete - replace with your actual loading completion logic
  setTimeout(() => {
    loadingScreen.style.display = 'none';
    document.body.style.overflow = 'auto'; // Enable scrolling after loading
    
    // Start all animations after loading completes
    initAnimations();
  }, 2000); // Adjust this time to match your actual loading time
});

function initAnimations() {
  // 1. Header - Slide down with bounce
  const header = document.querySelector('[data-header]');
  header.style.transform = 'translateY(-100%)';
  header.style.transition = 'transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
  setTimeout(() => {
    header.style.transform = 'translateY(0)';
  }, 100);

  // 2. Hero Title - Typewriter effect
  const heroTitle = document.querySelector('.hero-title');
  const originalText = heroTitle.textContent;
  heroTitle.textContent = '';
  heroTitle.style.opacity = '1';
  
  let i = 0;
  const typeWriter = setInterval(() => {
    if (i < originalText.length) {
      heroTitle.textContent += originalText.charAt(i);
      i++;
    } else {
      clearInterval(typeWriter);
    }
  }, 50);

  // 3. Hero Image - Floating animation
  const heroImage = document.querySelector('.hero-banner img');
  heroImage.style.animation = 'float 6s ease-in-out infinite';
  
  // 4. Stats Cards - Sequential flip animation
  const statsCards = document.querySelectorAll('.stats-card');
  statsCards.forEach((card, index) => {
    card.style.transform = 'rotateY(90deg)';
    card.style.opacity = '0';
    card.style.transition = `transform 0.6s ${index * 0.2}s ease-out, opacity 0.4s ${index * 0.2}s`;
    
    setTimeout(() => {
      card.style.transform = 'rotateY(0)';
      card.style.opacity = '1';
    }, 500 + (index * 200));
  });

  // 5. About Section - Image zoom and content slide
  const aboutImage = document.querySelector('.about-banner img');
  const aboutContent = document.querySelector('.about-content');
  
  aboutImage.style.transform = 'scale(0.8)';
  aboutImage.style.opacity = '0';
  aboutImage.style.transition = 'transform 1s 0.3s ease-out, opacity 1s 0.3s ease-out';
  
  aboutContent.style.transform = 'translateX(-50px)';
  aboutContent.style.opacity = '0';
  aboutContent.style.transition = 'transform 1s 0.6s ease-out, opacity 1s 0.6s ease-out';
  
  setTimeout(() => {
    aboutImage.style.transform = 'scale(1)';
    aboutImage.style.opacity = '1';
    aboutContent.style.transform = 'translateX(0)';
    aboutContent.style.opacity = '1';
  }, 800);

  // 6. Skills Cards - Each with unique hover effects
  const skillCards = document.querySelectorAll('.skill-card');
  skillCards.forEach((card, index) => {
    // Different effects based on position
    const effectType = index % 4;
    
    card.style.transform = effectType === 0 ? 'rotate(5deg)' : 
                          effectType === 1 ? 'scale(0.9)' : 
                          effectType === 2 ? 'translateY(10px)' : 
                          'skewX(-5deg)';
    
    card.style.transition = 'all 0.3s ease';
    
    card.addEventListener('mouseenter', () => {
      if (effectType === 0) {
        card.style.transform = 'rotate(-5deg) scale(1.1)';
      } else if (effectType === 1) {
        card.style.transform = 'scale(1.2)';
      } else if (effectType === 2) {
        card.style.transform = 'translateY(-10px)';
      } else {
        card.style.transform = 'skewX(5deg) scale(1.1)';
      }
    });
    
    card.addEventListener('mouseleave', () => {
      if (effectType === 0) {
        card.style.transform = 'rotate(5deg)';
      } else if (effectType === 1) {
        card.style.transform = 'scale(0.9)';
      } else if (effectType === 2) {
        card.style.transform = 'translateY(10px)';
      } else {
        card.style.transform = 'skewX(-5deg)';
      }
    });
  });

  // 7. Contact Form - Wave animation for inputs
  const formInputs = document.querySelectorAll('.input-field');
  formInputs.forEach((input, i) => {
    input.style.transform = 'translateY(20px)';
    input.style.opacity = '0';
    input.style.transition = `all 0.5s ${i * 0.2}s cubic-bezier(0.175, 0.885, 0.32, 1.275)`;
    
    setTimeout(() => {
      input.style.transform = 'translateY(0)';
      input.style.opacity = '1';
    }, 800 + (i * 200));
    
    // Unique focus effects
    input.addEventListener('focus', () => {
      input.parentElement.style.boxShadow = `0 0 0 2px hsl(${i * 60}, 80%, 50%)`;
      input.parentElement.style.transform = 'scale(1.02)';
    });
    
    input.addEventListener('blur', () => {
      input.parentElement.style.boxShadow = 'none';
      input.parentElement.style.transform = 'scale(1)';
    });
  });

  // 8. Footer - Glow animation
  const footerLogo = document.querySelector('.footer .logo');
  footerLogo.style.animation = 'glow 2s ease-in-out infinite alternate';
  
  // 9. Social Icons - Each with unique hover animation
  const socialIcons = document.querySelectorAll('.hero-social-link, .contact-social-link');
  socialIcons.forEach((icon, i) => {
    const animationType = i % 3;
    
    if (animationType === 0) {
      icon.style.transition = 'all 0.3s ease';
      icon.addEventListener('mouseenter', () => {
        icon.style.transform = 'translateY(-5px)';
        icon.style.filter = 'drop-shadow(0 5px 5px rgba(0,0,0,0.3))';
      });
      icon.addEventListener('mouseleave', () => {
        icon.style.transform = 'translateY(0)';
        icon.style.filter = 'none';
      });
    } else if (animationType === 1) {
      icon.style.transition = 'all 0.3s ease';
      icon.addEventListener('mouseenter', () => {
        icon.style.transform = 'rotate(15deg) scale(1.2)';
      });
      icon.addEventListener('mouseleave', () => {
        icon.style.transform = 'rotate(0) scale(1)';
      });
    } else {
      icon.style.transition = 'all 0.5s ease';
      icon.addEventListener('mouseenter', () => {
        icon.style.transform = 'scale(1.5)';
        icon.style.color = `hsl(${i * 30}, 100%, 50%)`;
      });
      icon.addEventListener('mouseleave', () => {
        icon.style.transform = 'scale(1)';
        icon.style.color = '';
      });
    }
  });

  // Add CSS for animations
  const style = document.createElement('style');
  style.textContent = `
    /* Floating animation */
    @keyframes float {
      0% { transform: translateY(0px); }
      50% { transform: translateY(-20px); }
      100% { transform: translateY(0px); }
    }
    
    /* Glow animation */
    @keyframes glow {
      from { text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #4e63e7, 0 0 20px #4e63e7; }
      to { text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #4e63e7, 0 0 40px #4e63e7; }
    }
    
    /* Tooltip animations */
    .tooltip {
      opacity: 0;
      transition: all 0.3s ease;
      transform: translateY(10px);
    }
    
    .skill-card:hover .tooltip,
    .hero-social-link:hover .tooltip,
    .contact-social-link:hover .tooltip {
      opacity: 1;
      transform: translateY(0);
    }
    
    /* Button ripple effect */
    .btn {
      overflow: hidden;
      position: relative;
    }
    
    .ripple {
      position: absolute;
      background: rgba(255, 255, 255, 0.4);
      border-radius: 50%;
      transform: scale(0);
      animation: ripple 0.6s linear;
      pointer-events: none;
    }
    
    @keyframes ripple {
      to {
        transform: scale(4);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);

  // Add ripple effect to buttons
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(button => {
    button.addEventListener('click', function(e) {
      const x = e.clientX - e.target.getBoundingClientRect().left;
      const y = e.clientY - e.target.getBoundingClientRect().top;
      
      const ripple = document.createElement('span');
      ripple.classList.add('ripple');
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      
      this.appendChild(ripple);
      
      setTimeout(() => {
        ripple.remove();
      }, 1000);
    });
  });
}

// script.js

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
  // Animation for header on scroll
  const header = document.querySelector('[data-header]');
  let lastScrollY = window.scrollY;
  
  window.addEventListener('scroll', () => {
    if (lastScrollY < window.scrollY) {
      header.classList.add('header-hidden');
    } else {
      header.classList.remove('header-hidden');
    }
    lastScrollY = window.scrollY;
  });

  // Animation for hero section
  const heroTitle = document.querySelector('.hero-title');
  const heroImage = document.querySelector('.hero-banner img');
  
  setTimeout(() => {
    heroTitle.style.opacity = '1';
    heroTitle.style.transform = 'translateY(0)';
    heroImage.style.transform = 'scale(1)';
  }, 500);

  // Animate stats cards on scroll
  const statsCards = document.querySelectorAll('.stats-card');
  
  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, index * 200);
      }
    });
  }, { threshold: 0.1 });
  
  statsCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.5s ease-out';
    statsObserver.observe(card);
  });

  // Animate skills cards
  const skillCards = document.querySelectorAll('.skill-card');
  
  skillCards.forEach((card, index) => {
    card.style.transform = 'scale(0.9)';
    card.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
    
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'scale(1.1)';
      card.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'scale(0.9)';
      card.style.boxShadow = 'none';
    });
  });

  // Animate contact form inputs
  const inputFields = document.querySelectorAll('.input-field');
  
  inputFields.forEach(input => {
    input.addEventListener('focus', () => {
      input.parentElement.style.transform = 'scale(1.05)';
      input.parentElement.style.borderColor = '#4e63e7';
    });
    
    input.addEventListener('blur', () => {
      input.parentElement.style.transform = 'scale(1)';
      input.parentElement.style.borderColor = '#e5e7eb';
    });
  });

  // Scroll reveal animation for sections
  const sections = document.querySelectorAll('section');
  
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });
  
  sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(50px)';
    section.style.transition = 'all 0.6s ease-out';
    sectionObserver.observe(section);
  });

  // Button hover effects
  const buttons = document.querySelectorAll('.btn');
  
  buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
      button.style.transform = 'translateY(-3px)';
      button.style.boxShadow = '0 5px 15px rgba(0,0,0,0.3)';
    });
    
    button.addEventListener('mouseleave', () => {
      button.style.transform = 'translateY(0)';
      button.style.boxShadow = 'none';
    });
  });

  // Social icon animations
  const socialIcons = document.querySelectorAll('.hero-social-link, .contact-social-link');
  
  socialIcons.forEach(icon => {
    icon.addEventListener('mouseenter', () => {
      icon.style.transform = 'translateY(-5px) rotate(5deg)';
    });
    
    icon.addEventListener('mouseleave', () => {
      icon.style.transform = 'translateY(0) rotate(0)';
    });
  });

  // Add ripple effect to buttons
  buttons.forEach(button => {
    button.addEventListener('click', function(e) {
      const x = e.clientX - e.target.getBoundingClientRect().left;
      const y = e.clientY - e.target.getBoundingClientRect().top;
      
      const ripple = document.createElement('span');
      ripple.classList.add('ripple');
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      
      this.appendChild(ripple);
      
      setTimeout(() => {
        ripple.remove();
      }, 1000);
    });
  });
});

// Add some CSS via JavaScript for the animations
const style = document.createElement('style');
style.textContent = `
  /* Header animation */
  .header {
    transition: transform 0.3s ease;
  }
  
  .header-hidden {
    transform: translateY(-100%);
  }
  
  /* Hero initial state */
  .hero-title {
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.8s ease;
  }
  
  .hero-banner img {
    transform: scale(0.95);
    transition: transform 0.8s ease;
  }
  
  /* Ripple effect */
  .ripple {
    position: absolute;
    background: rgba(255, 255, 255, 0.4);
    border-radius: 50%;
    transform: scale(0);
    animation: ripple 0.6s linear;
    pointer-events: none;
  }
  
  @keyframes ripple {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
  
  /* Tooltip animations */
  .tooltip {
    opacity: 0;
    transition: all 0.3s ease;
    transform: translateY(10px);
  }
  
  .skill-card:hover .tooltip,
  .hero-social-link:hover .tooltip,
  .contact-social-link:hover .tooltip {
    opacity: 1;
    transform: translateY(0);
  }
`;
document.head.appendChild(style);