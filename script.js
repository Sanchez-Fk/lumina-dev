window.addEventListener('DOMContentLoaded', () => {
  const hasGsap = window.gsap && window.ScrollTrigger;
  const motionEnabled = hasGsap && !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const header = document.querySelector('.site-header');
  const progress = document.querySelector('.scroll-progress span');
  const menuToggle = document.querySelector('.menu-toggle');
  const siteNav = document.querySelector('#site-nav');

  const refreshScrollUi = () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const percentage = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
    progress.style.width = `${percentage}%`;
    header.classList.toggle('is-scrolled', window.scrollY > 30);
  };
  window.addEventListener('scroll', refreshScrollUi, { passive: true });
  refreshScrollUi();

  menuToggle.addEventListener('click', () => {
    const open = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!open));
    menuToggle.setAttribute('aria-label', open ? 'Abrir navegación' : 'Cerrar navegación');
    siteNav.classList.toggle('open', !open);
  });
  siteNav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Abrir navegación');
    siteNav.classList.remove('open');
  }));

  if (motionEnabled) {
    gsap.registerPlugin(ScrollTrigger);
    gsap.set('.hero-reveal', { yPercent: 115, opacity: 0 });
    gsap.to('.hero-reveal', { yPercent: 0, opacity: 1, duration: .92, stagger: .12, ease: 'power4.out', delay: .18 });
    gsap.from('.hero-art', { opacity: 0, scale: .86, rotate: -4, duration: 1.35, ease: 'power3.out', delay: .3 });
    gsap.to('.orb-one', { x: -75, y: 34, duration: 5.4, repeat: -1, yoyo: true, ease: 'sine.inOut' });
    gsap.utils.toArray('.reveal-item').forEach((item) => {
      gsap.from(item, { x: -28, opacity: 0, duration: .7, ease: 'power3.out', scrollTrigger: { trigger: item, start: 'top 80%' } });
    });
    gsap.from('.section-intro, .project-heading, .contact-intro', { y: 36, opacity: 0, duration: .8, scrollTrigger: { trigger: '.services', start: 'top 75%' } });
    gsap.from('.project-card', { y: 70, opacity: 0, duration: .85, stagger: .14, ease: 'power3.out', scrollTrigger: { trigger: '.project-grid', start: 'top 80%' } });
    gsap.from('.case-copy > *, .window-frame, .case-captions', { y: 50, opacity: 0, stagger: .14, duration: .9, ease: 'power3.out', scrollTrigger: { trigger: '.case-feature', start: 'top 72%' } });
    gsap.from('.price-card', { y: 54, opacity: 0, stagger: .13, duration: .75, ease: 'power3.out', scrollTrigger: { trigger: '.pricing-grid', start: 'top 80%' } });
    gsap.from('.voices-head', { y: 42, opacity: 0, duration: .8, ease: 'power3.out', scrollTrigger: { trigger: '.voices', start: 'top 80%' } });
    gsap.from('.faq-item', { y: 22, opacity: 0, stagger: .09, duration: .55, ease: 'power2.out', scrollTrigger: { trigger: '.faq-list', start: 'top 85%' } });

    const layerTimeline = gsap.timeline({ scrollTrigger: { trigger: '.process', start: 'top top', end: 'bottom bottom', scrub: 1.1, pin: '.process-sticky', anticipatePin: 1 } });
    layerTimeline.from('.process-copy .eyebrow, .process-copy h2, .process-copy > p:last-child', { y: 40, opacity: 0, stagger: .16, duration: .55 })
      .to('.layer-design', { x: 112, y: -82, rotate: 13, duration: 1 }, .2)
      .to('.layer-code', { x: 55, y: -30, rotate: 6, duration: 1 }, .2)
      .to('.layer-seo', { x: -52, y: 36, rotate: -6, duration: 1 }, .2)
      .to('.layer-result', { x: -108, y: 88, rotate: -12, duration: 1 }, .2)
      .to('.layer-index', { opacity: 0, duration: .4 }, .25)
      .to('.device-layer', { scale: .91, duration: .8 }, 1.2)
      .to('.device-layer', { scale: 1, duration: .6 }, 2.1);
  } else {
    document.querySelectorAll('.hero-reveal').forEach((el) => { el.style.transform = 'none'; el.style.opacity = '1'; });
  }

  const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('is-visible');
  }), { threshold: .15 });
  document.querySelectorAll('.contact-form, .project-card').forEach((el) => observer.observe(el));

  const navLinks = [...siteNav.querySelectorAll('a')];
  const navSections = navLinks.map((link) => document.querySelector(link.getAttribute('href'))).filter(Boolean);
  const navObserver = new IntersectionObserver((entries) => entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    navLinks.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
  }), { rootMargin: '-42% 0px -52% 0px', threshold: 0 });
  navSections.forEach((section) => navObserver.observe(section));

  const storySteps = [...document.querySelectorAll('.story-step')];
  const storyProgress = document.querySelector('.story-progress span');
  const storyObserver = new IntersectionObserver((entries) => entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    storySteps.forEach((step) => step.classList.toggle('is-active', step === entry.target));
    const index = storySteps.indexOf(entry.target) + 1;
    storyProgress.style.width = `${(index / storySteps.length) * 100}%`;
  }), { rootMargin: '-30% 0px -45% 0px', threshold: .25 });
  storySteps.forEach((step) => storyObserver.observe(step));

  document.querySelectorAll('.faq-item button').forEach((button) => button.addEventListener('click', () => {
    const item = button.closest('.faq-item');
    const shouldOpen = !item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach((faq) => {
      faq.classList.remove('open');
      faq.querySelector('button').setAttribute('aria-expanded', 'false');
    });
    item.classList.toggle('open', shouldOpen);
    button.setAttribute('aria-expanded', String(shouldOpen));
  }));

  const quotes = [
    ['Por fin sentimos que nuestra web cuenta lo que hacemos sin tener que explicarlo tres veces.', 'Camila Rojas', 'Fundadora, Casa Nativa'],
    ['El proceso nos ayudó a ordenar una idea que ya tenía valor, pero todavía no una forma clara de llegar a la gente.', 'Mateo Vélez', 'Director, Nómada Studio'],
    ['No fue solo un cambio visual. Ahora cada persona entiende qué hacemos y cuál es el siguiente paso.', 'Laura Pineda', 'Co-fundadora, Taller Norte']
  ];
  let quoteIndex = 0;
  const quoteText = document.querySelector('#quote-text');
  const quoteName = document.querySelector('#quote-name');
  const quoteRole = document.querySelector('#quote-role');
  const quoteCounter = document.querySelector('#quote-index');
  const updateQuote = (direction) => {
    quoteIndex = (quoteIndex + direction + quotes.length) % quotes.length;
    const [text, name, role] = quotes[quoteIndex];
    if (motionEnabled) gsap.fromTo([quoteText, quoteName, quoteRole], { y: 12, opacity: 0 }, { y: 0, opacity: 1, duration: .35, stagger: .05, ease: 'power2.out' });
    quoteText.textContent = text; quoteName.textContent = name; quoteRole.textContent = role;
    quoteCounter.textContent = String(quoteIndex + 1).padStart(2, '0');
  };
  document.querySelector('.quote-prev').addEventListener('click', () => updateQuote(-1));
  document.querySelector('.quote-next').addEventListener('click', () => updateQuote(1));

  const demoToast = document.createElement('div');
  demoToast.className = 'demo-toast';
  demoToast.setAttribute('role', 'status');
  document.body.append(demoToast);
  document.querySelectorAll('[data-demo-toast]').forEach((button) => button.addEventListener('click', () => {
    demoToast.textContent = button.dataset.demoToast;
    demoToast.classList.add('show');
    window.setTimeout(() => demoToast.classList.remove('show'), 2800);
  }));

});
