// تطبيق نتفلكس  - V5 Template Engine
// Professional JavaScript Controller

document.addEventListener('DOMContentLoaded', () => {
  console.log('🚀 تطبيق نتفلكس  V5 Template initialized');
  
  initNavbar();
  initScrollAnimations();
  initMobileMenu();
  initParallax();
});

// Navbar scroll effect
function initNavbar() {
  const navbar = document.getElementById('navbar');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      navbar.classList.add('py-2');
      navbar.classList.remove('py-4');
    } else {
      navbar.classList.remove('py-2');
      navbar.classList.add('py-4');
    }
  });
}

// Scroll animations using Intersection Observer
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in-up');
      }
    });
  }, { threshold: 0.1 });
  
  document.querySelectorAll('section > div').forEach(el => {
    observer.observe(el);
  });
}

// Mobile menu toggle
function initMobileMenu() {
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.createElement('div');
  mobileMenu.className = 'fixed inset-0 bg-black/95 backdrop-blur-xl z-40 hidden flex-col items-center justify-center gap-8';
  mobileMenu.innerHTML = `
    <a href="#features" class="text-2xl font-bold">المميزات</a>
    <a href="#about" class="text-2xl font-bold">عن المشروع</a>
    <a href="#contact" class="text-2xl font-bold">تواصل معنا</a>
    <button class="px-8 py-3 bg-gradient-to-r from-[var(--primary)] to-[var(--primary-dark)] rounded-xl font-bold">ابدأ الآن</button>
  `;
  document.body.appendChild(mobileMenu);
  
  menuBtn?.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('flex');
  });
  
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      mobileMenu.classList.remove('flex');
    });
  });
}

// Parallax effect
function initParallax() {
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    document.querySelectorAll('[data-parallax]').forEach(el => {
      const speed = el.dataset.parallax || 0.5;
      el.style.transform = `translateY(${scrolled * speed}px)`;
    });
  });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});