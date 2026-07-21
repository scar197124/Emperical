/* Empirical v7.6 — reveal subtle cues only when a reading panel has more content. */
(() => {
  const MIN_OVERFLOW = 10;
  const candidateSelector = [
    '.reader-card .scroll', '.reader-card [id$="Detail"]',
    '.panel3 > .card > .scroll', '.panel3 > .card > [id$="Detail"]',
    '.panel3 > .card > [id$="Stories"]',
    '.v2-feature-reading > div', '.v2-edition-list',
    '.detail.scroll', '.story-detail', '.reading-panel',
    '[id="storyDetail"]', '[id="groupDetail"]', '[id="categoryDetail"]',
    '[id="editionDetail"]', '[id="archiveDetail"]'
  ].join(',');

  const ignored = el => el.closest('.ticker-overlay,.mobile-nav,.header-hotspots,footer,.empirical-real-footer');

  function ensureDecorations(host) {
    let fade = host.querySelector(':scope > .emp-scroll-fade');
    if (!fade) {
      fade = document.createElement('span');
      fade.className = 'emp-scroll-fade';
      fade.setAttribute('aria-hidden', 'true');
      host.appendChild(fade);
    }
    let arrow = host.querySelector(':scope > .emp-scroll-chevron');
    if (!arrow) {
      arrow = document.createElement('span');
      arrow.className = 'emp-scroll-chevron';
      arrow.textContent = '⌄';
      arrow.setAttribute('aria-hidden', 'true');
      host.appendChild(arrow);
    }
  }

  function hostFor(el) {
    return el.closest('.reader-card,.card,.v2-feature-reading,.panel3') || el.parentElement;
  }

  function update(el) {
    if (!el || !el.isConnected || ignored(el)) return;
    const style = getComputedStyle(el);
    const scrollMode = `${style.overflowY} ${style.overflow}`;
    const canScroll = /(auto|scroll)/.test(scrollMode) && el.scrollHeight > el.clientHeight + MIN_OVERFLOW;
    const host = hostFor(el);
    if (!host) return;

    el.classList.toggle('emp-scrollable', canScroll);
    if (!canScroll) {
      if (host.dataset.empScrollOwner === el.dataset.empScrollId) {
        host.classList.remove('emp-scroll-host','emp-has-more','emp-at-bottom','emp-user-scrolled');
      }
      return;
    }

    if (!el.dataset.empScrollId) el.dataset.empScrollId = `emp-scroll-${Math.random().toString(36).slice(2,9)}`;
    host.dataset.empScrollOwner = el.dataset.empScrollId;
    host.classList.add('emp-scroll-host');
    ensureDecorations(host);
    const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 5;
    host.classList.toggle('emp-at-bottom', atBottom);
    host.classList.toggle('emp-has-more', !atBottom);
  }

  function bind(el) {
    if (el.dataset.empScrollBound || ignored(el)) return;
    el.dataset.empScrollBound = 'true';
    el.addEventListener('scroll', () => {
      const host = hostFor(el);
      if (host && el.scrollTop > 6) host.classList.add('emp-user-scrolled');
      update(el);
    }, { passive: true });
    if ('ResizeObserver' in window) new ResizeObserver(() => update(el)).observe(el);
    update(el);
  }

  function scan() {
    document.querySelectorAll(candidateSelector).forEach(bind);
    document.querySelectorAll('.emp-scrollable').forEach(update);
  }

  let scheduled = false;
  const scheduleScan = () => {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(() => { scheduled = false; scan(); });
  };

  document.addEventListener('DOMContentLoaded', scan, { once: true });
  window.addEventListener('load', scan, { once: true });
  window.addEventListener('resize', scheduleScan, { passive: true });
  new MutationObserver(scheduleScan).observe(document.documentElement, { childList: true, subtree: true, characterData: true });
})();
