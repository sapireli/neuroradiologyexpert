const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav-links');
const navPanelItems = document.querySelectorAll('.nav-item.has-panel');
const closeNav = () => {
  if (!nav || !toggle) return;
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
  closeNavPanels();
};
const closeNavPanels = () => {
  navPanelItems.forEach((item) => {
    item.classList.remove('is-open');
    const button = item.querySelector('.nav-panel-toggle');
    if (button) {
      button.setAttribute('aria-expanded', 'false');
    }
  });
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
  const button = item.querySelector('.nav-panel-toggle');
  if (!button) return;
  button.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    const isOpen = item.classList.toggle('is-open');
    button.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
});

if (nav && toggle) {
  nav.addEventListener('click', (event) => {
    const link = event.target.closest('a');
    if (link && nav.classList.contains('open')) {
      closeNav();
    }
  });

  document.addEventListener('click', (event) => {
    if (!nav.classList.contains('open')) return;
    if (event.target.closest('.nav-links') || event.target.closest('.nav-toggle')) return;
    closeNav();
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

const revealGroups = [
  '.capability-grid',
  '.counter-grid',
  '.service-grid',
  '.post-grid',
  '.feature-grid',
  '.process-grid',
  '.why-grid',
  '.service-subgrid',
  '.services-quicklist',
  '.gallery-grid',
  '.media-grid',
  '.faq-accordion'
];

const revealSingles = [
  '.split-block',
  '.split-card',
  '.intro-card',
  '.contact-panel',
  '.service-intro',
  '.service-section',
  '.highlight-card',
  '.callout'
];

const revealSet = new Set();
const setReveal = (el, delay) => {
  if (!el || revealSet.has(el)) return;
  el.classList.add('reveal');
  if (typeof delay === 'number') {
    el.style.setProperty('--reveal-delay', `${delay}s`);
  }
  revealSet.add(el);
};

revealGroups.forEach((selector) => {
  document.querySelectorAll(selector).forEach((container) => {
    Array.from(container.children).forEach((child, index) => {
      setReveal(child, Math.min(index * 0.08, 0.4));
    });
  });
});

revealSingles.forEach((selector) => {
  document.querySelectorAll(selector).forEach((el) => setReveal(el));
});

if (revealSet.size) {
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -10% 0px' });
    revealSet.forEach((el) => observer.observe(el));
  } else {
    revealSet.forEach((el) => el.classList.add('is-visible'));
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
