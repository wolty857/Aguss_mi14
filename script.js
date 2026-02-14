// ===================================
// Van Gogh Starry Night - Valentine's Website
// Navigation and Animation Controller
// ===================================

document.addEventListener('DOMContentLoaded', function () {
  initializePasswordLock();
  initializeStarryBackground();
  initializeNavigation();
  initializeSwirlEffects();
});

// ===================================
// Password Lock System
// ===================================

function initializePasswordLock() {
  const lockScreen = document.getElementById('lockScreen');
  const passwordInput = document.getElementById('passwordInput');
  const unlockBtn = document.getElementById('unlockBtn');
  const errorMessage = document.getElementById('errorMessage');
  const padlock = document.querySelector('.pixel-padlock');
  const correctPassword = '091224';

  // Focus on input when page loads
  passwordInput.focus();

  // Allow Enter key to submit
  passwordInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      checkPassword();
    }
  });

  // Unlock button click
  unlockBtn.addEventListener('click', checkPassword);

  function checkPassword() {
    const enteredPassword = passwordInput.value.trim();

    if (enteredPassword === correctPassword) {
      // Correct password - unlock animation
      errorMessage.textContent = '';
      padlock.classList.add('unlocking');
      unlockBtn.textContent = '¡Correcto! 💛';
      unlockBtn.style.background = 'linear-gradient(135deg, #4ade80 0%, #22c55e 100%)';
      passwordInput.disabled = true;
      unlockBtn.disabled = true;

      // Wait for animation, then hide lock screen
      setTimeout(() => {
        lockScreen.classList.add('unlocked');
      }, 1500);
    } else {
      // Wrong password - show error
      errorMessage.textContent = '❌ Contraseña incorrecta. Intenta de nuevo.';
      passwordInput.value = '';
      passwordInput.focus();

      // Shake animation
      passwordInput.style.animation = 'shake 0.5s ease';
      setTimeout(() => {
        passwordInput.style.animation = '';
      }, 500);
    }
  }
}

// ===================================
// Starry Background Generation
// ===================================

function initializeStarryBackground() {
  const starryBg = document.querySelector('.starry-background');
  const numberOfStars = 150;

  // Create stars
  for (let i = 0; i < numberOfStars; i++) {
    const star = document.createElement('div');
    star.className = 'star';

    // Random size
    const sizeClass = Math.random() > 0.7 ? 'large' : (Math.random() > 0.5 ? 'medium' : 'small');
    star.classList.add(sizeClass);

    // Random position
    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 100 + '%';

    // Random animation delay
    star.style.animationDelay = Math.random() * 3 + 's';

    starryBg.appendChild(star);
  }
}

// ===================================
// Swirl Effects (Van Gogh Style)
// ===================================

function initializeSwirlEffects() {
  const starryBg = document.querySelector('.starry-background');
  const numberOfSwirls = 8;

  for (let i = 0; i < numberOfSwirls; i++) {
    const swirl = document.createElement('div');
    swirl.className = 'swirl';

    // Random size and position
    const size = 100 + Math.random() * 200;
    swirl.style.width = size + 'px';
    swirl.style.height = size + 'px';
    swirl.style.left = Math.random() * 100 + '%';
    swirl.style.top = Math.random() * 100 + '%';

    // Random animation duration
    swirl.style.animationDuration = (15 + Math.random() * 15) + 's';

    // Random rotation direction
    if (Math.random() > 0.5) {
      swirl.style.animationDirection = 'reverse';
    }

    starryBg.appendChild(swirl);
  }
}

// ===================================
// Navigation System
// ===================================

function initializeNavigation() {
  const navLinks = document.querySelectorAll('nav a');
  const sections = document.querySelectorAll('.page-section');

  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);

      // Remove active class from all links
      navLinks.forEach(l => l.classList.remove('active'));

      // Add active class to clicked link
      this.classList.add('active');

      // Hide all sections
      sections.forEach(section => {
        section.classList.remove('active');
      });

      // Show target section
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.classList.add('active');

        // Scroll to top smoothly
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    });
  });

  // Set initial active state
  if (navLinks.length > 0) {
    navLinks[0].classList.add('active');
  }
  if (sections.length > 0) {
    sections[0].classList.add('active');
  }
}

// ===================================
// Smooth Scroll for Better UX
// ===================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#') {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  });
});

// ===================================
// Add Parallax Effect on Scroll
// ===================================

window.addEventListener('scroll', function () {
  const scrolled = window.pageYOffset;
  const stars = document.querySelectorAll('.star');

  stars.forEach((star, index) => {
    const speed = 0.5 + (index % 3) * 0.2;
    star.style.transform = `translateY(${scrolled * speed}px)`;
  });
});

// ===================================
// Interactive Hover Effects
// ===================================

// Add glow effect to cards on hover
document.addEventListener('DOMContentLoaded', function () {
  const cards = document.querySelectorAll('.song-card, .moment-card, .food-card, .reason-item');

  cards.forEach(card => {
    card.addEventListener('mouseenter', function () {
      this.style.boxShadow = '0 10px 40px rgba(244, 208, 63, 0.4)';
    });

    card.addEventListener('mouseleave', function () {
      this.style.boxShadow = '';
    });
  });
});
