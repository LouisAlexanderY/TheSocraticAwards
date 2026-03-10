// ============ HERO CAROUSEL ============
(function() {
  const slides = document.querySelectorAll('.carousel-slide');
  const dotsContainer = document.getElementById('carouselDots');
  if (!slides.length || !dotsContainer) return;

  let current = 0;

  // Build dots
  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', 'Slide ' + (i + 1));
    dot.addEventListener('click', () => goTo(i));
    dotsContainer.appendChild(dot);
  });

  function goTo(index) {
    slides[current].classList.remove('active');
    dotsContainer.children[current].classList.remove('active');
    current = index;
    slides[current].classList.add('active');
    dotsContainer.children[current].classList.add('active');
  }

  // Auto-advance every 5 seconds
  setInterval(() => goTo((current + 1) % slides.length), 5000);
})();


const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) nav.style.background = 'rgba(13,27,42,0.99)';
  else nav.style.background = 'rgba(13,27,42,0.97)';
});

// ============ MOBILE NAV ============
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

// ============ WINNER SEARCH/FILTER ============
function filterWinners() {
  const query = document.getElementById('searchInput')?.value.toLowerCase() || '';
  const type  = document.getElementById('filterType')?.value || '';
  const year  = document.getElementById('filterYear')?.value || '';
  const genre = document.getElementById('filterGenre')?.value || '';
  const cards = document.querySelectorAll('.winner-card');

  cards.forEach(card => {
    const title     = card.querySelector('h3')?.textContent.toLowerCase() || '';
    const author    = card.querySelector('p')?.textContent.toLowerCase() || '';
    const cardType  = card.dataset.type  || '';
    const cardYear  = card.dataset.year  || '';
    const cardGenre = card.dataset.genre || '';

    const matchQuery = !query || title.includes(query) || author.includes(query);
    const matchType  = !type  || cardType  === type;
    const matchYear  = !year  || cardYear  === year;
    const matchGenre = !genre || cardGenre === genre;

    card.style.display = (matchQuery && matchType && matchYear && matchGenre) ? 'block' : 'none';
  });
}

// Allow Enter key in search
document.getElementById('searchInput')?.addEventListener('keyup', e => {
  if (e.key === 'Enter') filterWinners();
});

// ============ FADE IN ON SCROLL ============
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.winner-card, .spotlight-inner, .about-strip-inner').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});
