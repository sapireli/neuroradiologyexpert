const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav-links');
const navPanelItems = document.querySelectorAll('.nav-item.has-panel');
const closeNavPanels = () => {
  navPanelItems.forEach((item) => {
    item.classList.remove('is-open');
  });
};
const closeNav = () => {
  if (!nav || !toggle) return;
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
  closeNavPanels();
};
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    if (!isOpen) {
      closeNavPanels();
    }
  });
}

navPanelItems.forEach((item) => {
  const link = item.querySelector('.nav-link');
  if (!link) return;
  link.addEventListener('click', (event) => {
    const isMobile = window.matchMedia('(max-width: 860px)').matches;
    event.preventDefault();
    navPanelItems.forEach((panelItem) => {
      if (panelItem !== item) {
        panelItem.classList.remove('is-open');
      }
    });
    const shouldOpen = !item.classList.contains('is-open');
    item.classList.toggle('is-open', shouldOpen);
    if (!isMobile && !shouldOpen) {
      return;
    }
    if (isMobile && !shouldOpen) {
      closeNav();
    }
  });
});

if (nav && toggle) {
  nav.addEventListener('click', (event) => {
    const link = event.target.closest('a');
    if (!link || !nav.classList.contains('open')) return;
    const item = link.closest('.nav-item.has-panel');
    const isMobile = window.matchMedia('(max-width: 860px)').matches;
    if (item && isMobile) {
      return;
    }
    closeNav();
  });

  document.addEventListener('click', (event) => {
    if (event.target.closest('.nav-links') || event.target.closest('.nav-toggle')) return;
    closeNavPanels();
    if (nav.classList.contains('open')) {
      closeNav();
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('is-loaded');
});

const counters = document.querySelectorAll('.counter[data-target]');
if (counters.length) {
  const animateCounter = (el) => {
    const target = Number(el.dataset.target || 0);
    const suffix = el.dataset.suffix || '';
    if (!target) return;
    let current = 0;
    const step = Math.max(1, Math.floor(target / 80));
    const tick = () => {
      current = Math.min(target, current + step);
      el.textContent = `${current.toLocaleString()}${current >= target ? suffix : ''}`;
      if (current < target) {
        requestAnimationFrame(tick);
      }
    };
    tick();
  };

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });
    counters.forEach((counter) => observer.observe(counter));
  } else {
    counters.forEach((counter) => animateCounter(counter));
  }
}


const topicFilter = document.querySelector('.topic-filter');
if (topicFilter) {
  const buttons = Array.from(topicFilter.querySelectorAll('.topic-pill'));
  const cards = Array.from(document.querySelectorAll('[data-filter-grid] .post-card'));
  const slugify = (value) => (value || '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

  const applyFilter = (topic) => {
    const normalized = slugify(topic);
    buttons.forEach((button) => {
      const isActive = button.dataset.topic === normalized;
      button.classList.toggle('is-active', isActive);
      button.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });

    cards.forEach((card) => {
      const tags = (card.dataset.tags || '').split('|').map(slugify).filter(Boolean);
      const match = normalized === 'all' || tags.includes(normalized);
      card.style.display = match ? '' : 'none';
    });
  };

  buttons.forEach((button) => {
    button.setAttribute('aria-pressed', button.classList.contains('is-active') ? 'true' : 'false');
    button.addEventListener('click', () => applyFilter(button.dataset.topic));
  });
}
