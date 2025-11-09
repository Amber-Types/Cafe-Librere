// Mobile nav toggle
const toggle = document.querySelector('.menu-toggle');
const nav = document.getElementById('primary-nav');
if (toggle && nav){
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!open));
    nav.style.display = open ? 'none' : 'flex';
  });
}

// Simple reservation dialog
const form = document.getElementById('reserve-form');
if (form){
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form));
    alert(`Thanks, ${data.name}! We penciled you in for ${data.date} at ${data.time} — party of ${data.size}.`);
    form.reset();
  });
}

// Year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Minimal carousel
const carousel = document.querySelector('[data-carousel]');
if (carousel){
  const slidesWrap = carousel.querySelector('.slides');
  const slides = Array.from(carousel.querySelectorAll('.slide'));
  const prev = carousel.querySelector('.prev');
  const next = carousel.querySelector('.next');
  let index = 0;
  const go = (i)=>{
    index = (i+slides.length)%slides.length;
    slidesWrap.style.transform = `translateX(-${index*100}%)`;
  };
  prev.addEventListener('click', ()=>go(index-1));
  next.addEventListener('click', ()=>go(index+1));
  // Auto-advance (respect reduced motion)
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(!prefersReduced){ setInterval(()=>go(index+1), 5000); }
}
