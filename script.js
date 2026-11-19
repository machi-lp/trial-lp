'use strict';

document.addEventListener('DOMContentLoaded', () => {
  // FAQアコーディオン開閉
  const faqTriggers = document.querySelectorAll('.faq-trigger');

  faqTriggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const faqItem = trigger.closest('.faq-item');
      const answerId = trigger.getAttribute('aria-controls');
      const answer = answerId ? document.getElementById(answerId) : null;

      if (!faqItem) return;

      const isOpen = faqItem.classList.toggle('is-open');
      trigger.setAttribute('aria-expanded', String(isOpen));

      if (answer) {
        answer.setAttribute('aria-hidden', String(!isOpen));
      }
    });
  });

  // スマホ下部固定CTAの高さに合わせてbody下部余白を同期（フッター・本文の被り防止）
  const fixedCta = document.querySelector('.fixed-cta');
  const syncFixedCtaSpace = () => {
    if (!fixedCta) return;
    const isVisible = window.getComputedStyle(fixedCta).display !== 'none';
    const height = isVisible ? fixedCta.offsetHeight : 0;
    document.documentElement.style.setProperty('--fixed-cta-height', `${height}px`);
  };

  syncFixedCtaSpace();
  window.addEventListener('resize', syncFixedCtaSpace);
});
