/* ==========================================================================
   APEX MOTORS — Premium Interaction System
   Cinematic animations, smooth scrolling, and luxury micro-interactions
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initPreloader();
  initNavigation();
  initScrollAnimations();
  initHeroParticles();
  initHeroCounters();
  initCarousel();
  initInquiryForm();
  initSmoothScroll();
  initParallaxEffects();
  initCinematicCursor();
});

/* ---------- Preloader ---------- */
function initPreloader() {
  const preloader = document.getElementById('preloader');
  if (!preloader) return;

  window.addEventListener('load', () => {
    setTimeout(() => {
      preloader.classList.add('loaded');
    }, 2000);
  });

  // Fallback: remove after 4s regardless
  setTimeout(() => {
    preloader.classList.add('loaded');
  }, 4000);
}

/* ---------- Navigation ---------- */
function initNavigation() {
  const navbar = document.getElementById('navbar');
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  const links = document.querySelectorAll('.nav-link');

  // Scroll behavior
  let lastScroll = 0;
  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        handleNavScroll(navbar, lastScroll);
        lastScroll = window.scrollY;
        ticking = false;
      });
      ticking = true;
    }
  });

  // Mobile toggle
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('active');
      navLinks.classList.toggle('open');
      document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
    });
  }

  // Active link tracking
  const sections = document.querySelectorAll('section[id]');
  const observerOptions = {
    root: null,
    rootMargin: '-40% 0px -40% 0px',
    threshold: 0
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        links.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => sectionObserver.observe(section));

  // Close mobile nav on link click
  links.forEach(link => {
    link.addEventListener('click', () => {
      if (navLinks.classList.contains('open')) {
        navToggle.classList.remove('active');
        navLinks.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  });
}

function handleNavScroll(navbar, lastScroll) {
  const scrollY = window.scrollY;

  if (scrollY > 80) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}

/* ---------- Scroll Animations ---------- */
function initScrollAnimations() {
  const fadeElements = document.querySelectorAll('.fade-up');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Stagger animation for siblings
        const parent = entry.target.parentElement;
        const siblings = parent ? parent.querySelectorAll('.fade-up') : [];
        let delay = 0;

        siblings.forEach((sibling, i) => {
          if (sibling === entry.target) {
            delay = i * 100;
          }
        });

        setTimeout(() => {
          entry.target.classList.add('visible');
        }, delay);

        observer.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    rootMargin: '0px 0px -80px 0px',
    threshold: 0.1
  });

  fadeElements.forEach(el => observer.observe(el));
}

/* ---------- Hero Particles ---------- */
function initHeroParticles() {
  const container = document.getElementById('heroParticles');
  if (!container) return;

  const particleCount = 30;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${40 + Math.random() * 50}%`;
    particle.style.animationDelay = `${Math.random() * 8}s`;
    particle.style.animationDuration = `${5 + Math.random() * 6}s`;
    particle.style.width = `${1 + Math.random() * 2}px`;
    particle.style.height = particle.style.width;
    container.appendChild(particle);
  }
}

/* ---------- Hero Counter Animation ---------- */
function initHeroCounters() {
  const counters = document.querySelectorAll('.hero-stat-number');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = parseInt(entry.target.dataset.target, 10);
        animateCounter(entry.target, target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => observer.observe(counter));
}

function animateCounter(element, target) {
  const duration = 2000;
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    // Ease out expo
    const eased = 1 - Math.pow(1 - progress, 4);
    const current = Math.round(eased * target);

    element.textContent = current;

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}

/* ---------- Vehicle Carousel ---------- */
function initCarousel() {
  const track = document.getElementById('carouselTrack');
  const prevBtn = document.getElementById('carouselPrev');
  const nextBtn = document.getElementById('carouselNext');
  const dotsContainer = document.getElementById('carouselDots');

  if (!track || !prevBtn || !nextBtn || !dotsContainer) return;

  const cards = track.querySelectorAll('.vehicle-card');
  let currentIndex = 0;
  let cardsPerView = getCardsPerView();
  let totalSlides = Math.ceil(cards.length / cardsPerView);

  // Create dots
  function createDots() {
    dotsContainer.innerHTML = '';
    for (let i = 0; i < totalSlides; i++) {
      const dot = document.createElement('div');
      dot.className = `carousel-dot${i === 0 ? ' active' : ''}`;
      dot.addEventListener('click', () => goToSlide(i));
      dotsContainer.appendChild(dot);
    }
  }

  function getCardsPerView() {
    if (window.innerWidth <= 768) return 1;
    if (window.innerWidth <= 1024) return 2;
    return 3;
  }

  function updateCarousel() {
    const gap = 24;
    const cardWidth = cards[0].offsetWidth + gap;
    const offset = -(currentIndex * cardsPerView * cardWidth);
    track.style.transform = `translateX(${offset}px)`;

    // Update dots
    const dots = dotsContainer.querySelectorAll('.carousel-dot');
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentIndex);
    });
  }

  function goToSlide(index) {
    currentIndex = Math.max(0, Math.min(index, totalSlides - 1));
    updateCarousel();
  }

  prevBtn.addEventListener('click', () => {
    goToSlide(currentIndex - 1);
  });

  nextBtn.addEventListener('click', () => {
    goToSlide(currentIndex + 1);
  });

  // Touch/drag support
  let isDragging = false;
  let startX = 0;
  let currentTranslate = 0;

  track.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX;
    track.style.transition = 'none';
  });

  track.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const diff = e.clientX - startX;
    track.style.transform = `translateX(${currentTranslate + diff}px)`;
  });

  track.addEventListener('mouseup', (e) => {
    if (!isDragging) return;
    isDragging = false;
    track.style.transition = '';
    const diff = e.clientX - startX;

    if (Math.abs(diff) > 80) {
      if (diff < 0) goToSlide(currentIndex + 1);
      else goToSlide(currentIndex - 1);
    } else {
      updateCarousel();
    }
  });

  track.addEventListener('mouseleave', () => {
    if (isDragging) {
      isDragging = false;
      track.style.transition = '';
      updateCarousel();
    }
  });

  // Touch events
  track.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    track.style.transition = 'none';
  }, { passive: true });

  track.addEventListener('touchmove', (e) => {
    const diff = e.touches[0].clientX - startX;
    const gap = 24;
    const cardWidth = cards[0].offsetWidth + gap;
    currentTranslate = -(currentIndex * cardsPerView * cardWidth);
    track.style.transform = `translateX(${currentTranslate + diff}px)`;
  }, { passive: true });

  track.addEventListener('touchend', (e) => {
    track.style.transition = '';
    const diff = e.changedTouches[0].clientX - startX;
    if (Math.abs(diff) > 50) {
      if (diff < 0) goToSlide(currentIndex + 1);
      else goToSlide(currentIndex - 1);
    } else {
      updateCarousel();
    }
  });

  // Responsive
  window.addEventListener('resize', () => {
    const newPerView = getCardsPerView();
    if (newPerView !== cardsPerView) {
      cardsPerView = newPerView;
      totalSlides = Math.ceil(cards.length / cardsPerView);
      currentIndex = 0;
      createDots();
      updateCarousel();
    }
  });

  createDots();

  // Auto-advance
  let autoSlide = setInterval(() => {
    goToSlide((currentIndex + 1) % totalSlides);
  }, 6000);

  track.addEventListener('mouseenter', () => clearInterval(autoSlide));
  track.addEventListener('mouseleave', () => {
    autoSlide = setInterval(() => {
      goToSlide((currentIndex + 1) % totalSlides);
    }, 6000);
  });
}

/* ---------- Inquiry Form ---------- */
function initInquiryForm() {
  const form = document.getElementById('inquiryForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    // Basic validation
    if (!data.name || !data.email) {
      highlightField(form.querySelector('#name'));
      return;
    }

    if (!isValidEmail(data.email)) {
      highlightField(form.querySelector('#email'));
      return;
    }

    // Simulate submission
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    submitBtn.style.opacity = '0.6';

    setTimeout(() => {
      submitBtn.textContent = 'Inquiry Sent';
      submitBtn.style.background = '#1a6b1a';
      submitBtn.style.boxShadow = '0 4px 20px rgba(26, 107, 26, 0.3)';

      setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        submitBtn.style.opacity = '';
        submitBtn.style.background = '';
        submitBtn.style.boxShadow = '';
        form.reset();
      }, 3000);
    }, 1500);
  });

  // Focus effects
  const inputs = form.querySelectorAll('.form-input');
  inputs.forEach(input => {
    input.addEventListener('focus', () => {
      input.parentElement.classList.add('focused');
    });
    input.addEventListener('blur', () => {
      input.parentElement.classList.remove('focused');
    });
  });
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function highlightField(field) {
  if (!field) return;
  field.style.borderColor = '#E10600';
  field.focus();
  setTimeout(() => {
    field.style.borderColor = '';
  }, 2000);
}

/* ---------- Smooth Scroll ---------- */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;

      const offset = 80;
      const elementPosition = target.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    });
  });
}

/* ---------- Parallax Effects ---------- */
function initParallaxEffects() {
  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        applyParallax();
        ticking = false;
      });
      ticking = true;
    }
  });
}

function applyParallax() {
  const scrollY = window.scrollY;

  // Hero parallax
  const heroContent = document.querySelector('.hero-content');
  if (heroContent && scrollY < window.innerHeight) {
    const opacity = 1 - (scrollY / (window.innerHeight * 0.6));
    const translateY = scrollY * 0.3;
    heroContent.style.opacity = Math.max(0, opacity);
    heroContent.style.transform = `translateY(${translateY}px)`;
  }

  // Scroll indicator fade
  const scrollIndicator = document.querySelector('.hero-scroll-indicator');
  if (scrollIndicator) {
    const opacity = 1 - (scrollY / 200);
    scrollIndicator.style.opacity = Math.max(0, opacity);
  }
}

/* ---------- Cinematic Cursor Glow ---------- */
function initCinematicCursor() {
  // Only on desktop
  if (window.innerWidth < 1024) return;

  const cursor = document.createElement('div');
  cursor.style.cssText = `
    position: fixed;
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, rgba(225, 6, 0, 0.04) 0%, transparent 70%);
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    transform: translate(-50%, -50%);
    transition: opacity 0.3s ease;
    mix-blend-mode: screen;
  `;
  document.body.appendChild(cursor);

  let mouseX = 0;
  let mouseY = 0;
  let cursorX = 0;
  let cursorY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animateCursor() {
    cursorX += (mouseX - cursorX) * 0.08;
    cursorY += (mouseY - cursorY) * 0.08;
    cursor.style.left = `${cursorX}px`;
    cursor.style.top = `${cursorY}px`;
    requestAnimationFrame(animateCursor);
  }

  animateCursor();
}
