window.addEventListener('load', function() {
  setTimeout(function() {
    const preloader = document.getElementById('preloader');
    if (preloader) {
      preloader.classList.add('hidden');
    }
  }, 2000);
});

document.getElementById('shareBtn').addEventListener('click', async () => {
  const shareData = {
    title: 'Jonas Hyltén | Fractional Deal Principal',
    text: 'Off-market M&A origination and acquisition execution for family offices and private capital groups.',
    url: window.location.href
  };
  if (navigator.share) {
    try {
      await navigator.share(shareData);
    } catch (err) {
      console.log('Share canceled', err);
    }
  } else {
    navigator.clipboard.writeText(window.location.href);
    const btn = document.getElementById('shareBtn');
    const originalText = btn.innerText;
    btn.innerText = 'Link Copied!';
    setTimeout(() => btn.innerText = originalText, 2000);
  }
});

const qrModal = document.getElementById('qrModal');
const qrBtn = document.getElementById('qrBtn');
const closeQr = document.getElementById('closeQr');

qrBtn.addEventListener('click', () => {
  qrModal.classList.add('active');
});

closeQr.addEventListener('click', () => {
  qrModal.classList.remove('active');
});

qrModal.addEventListener('click', (e) => {
  if (e.target === qrModal) {
    qrModal.classList.remove('active');
  }
});

const legalModal = document.getElementById('legalModal');
const legalBtn = document.getElementById('legalBtn');
const closeLegal = document.getElementById('closeLegal');

if(legalBtn) {
  legalBtn.addEventListener('click', () => {
    legalModal.classList.add('active');
  });
}

if(closeLegal) {
  closeLegal.addEventListener('click', () => {
    legalModal.classList.remove('active');
  });
}

legalModal.addEventListener('click', (e) => {
  if (e.target === legalModal) {
    legalModal.classList.remove('active');
  }
});

document.querySelectorAll('[data-hover-color]').forEach(el => {
  const targetColor = el.dataset.hoverColor;
  const originalColor = el.style.color;
  el.addEventListener('mouseover', () => { el.style.color = targetColor; });
  el.addEventListener('mouseout', () => { el.style.color = originalColor; });
});

document.querySelectorAll('.footer-action-link').forEach(el => {
  const originalColor = 'var(--text-muted)';
  const originalOpacity = '0.6';
  el.addEventListener('mouseover', () => {
    el.style.color = 'var(--accent)';
    el.style.opacity = '1';
  });
  el.addEventListener('mouseout', () => {
    el.style.color = originalColor;
    el.style.opacity = originalOpacity;
  });
});
