// Keep Blowfish's active entry visible without scrolling the article itself.
(() => {
  const panel = document.getElementById('TOCView');
  const toc = document.getElementById('TableOfContents');
  if (!panel || !toc) return;

  const mobile = document.getElementById('TableOfContentsMobile');
  let previous;
  let previousMobile;
  let frame;

  function followActiveEntry() {
    frame = undefined;
    const active = toc.querySelector('a.active');
    if (!active) return;

    if (previous !== active) {
      previous?.removeAttribute('aria-current');
      active.setAttribute('aria-current', 'location');
      previous = active;

      previousMobile?.classList.remove('active');
      previousMobile?.removeAttribute('aria-current');
      previousMobile = [...(mobile?.querySelectorAll('a') || [])]
        .find(link => link.getAttribute('href') === active.getAttribute('href'));
      previousMobile?.classList.add('active');
      previousMobile?.setAttribute('aria-current', 'location');
    }

    if (!panel.clientHeight) return; // Desktop TOC is hidden on narrow screens.
    const bounds = panel.getBoundingClientRect();
    const entry = active.getBoundingClientRect();
    const padding = 16;
    if (entry.top < bounds.top + padding) {
      panel.scrollTop += entry.top - bounds.top - padding;
    } else if (entry.bottom > bounds.bottom - padding) {
      panel.scrollTop += entry.bottom - bounds.bottom + padding;
    }
  }

  function scheduleFollow() {
    if (frame === undefined) frame = requestAnimationFrame(followActiveEntry);
  }

  new MutationObserver(scheduleFollow).observe(toc, {
    attributes: true,
    attributeFilter: ['class'],
    subtree: true,
  });
  window.addEventListener('resize', scheduleFollow, { passive: true });
  scheduleFollow();
})();
