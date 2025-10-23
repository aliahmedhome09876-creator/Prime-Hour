// ...existing code...
document.addEventListener('DOMContentLoaded', () => {
  const sel = [
    'section',
    '.team-member',
    '.process-step',
    '.achievement',
    '.about-value',
    '.faq-item',
    '.about-img img',
    '.team-member img',
    /* product/card targets */
    '.card',
    '.product',
    '.product-card',
    '.product-item',
    '.cart-item',
    '.shop-item',
    '.product-grid > *',
    '.products > *'
  ].join(',');

  const els = document.querySelectorAll(sel);
  els.forEach(e => e.classList.add('reveal'));

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach(en => {
        if (en.isIntersecting) {
          en.target.classList.add('visible');
          obs.unobserve(en.target);
        }
      });
    }, { root: null, rootMargin: '0px 0px -50px 0px', threshold: 0.12 });
    els.forEach(e => io.observe(e));
  } else {
    const onScroll = () => els.forEach(e => {
      if (e.getBoundingClientRect().top < window.innerHeight - 40) e.classList.add('visible');
    });
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }
});
// ...existing code...