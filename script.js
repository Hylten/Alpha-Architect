window.addEventListener('load', function() {
  setTimeout(function() {
    document.getElementById('preloader').classList.add('hidden');
  }, 2000);
});

document.getElementById('shareBtn').addEventListener('click', async () => {
  const shareData = {
    title: 'Jonas Hyltén | Fractional GP',
    text: 'Institutional Origination & Sovereign Alpha Architecture',
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

const capabilitiesToggle = document.getElementById('capabilitiesToggle');
const capabilitiesContent = document.getElementById('capabilitiesContent');
const capabilitiesIcon = document.getElementById('capabilitiesIcon');

if(capabilitiesToggle) {
  capabilitiesToggle.addEventListener('click', () => {
    capabilitiesContent.classList.toggle('open');
    capabilitiesIcon.innerText = capabilitiesContent.classList.contains('open') ? '-' : '+';
  });
}

const mandateToggle = document.getElementById('mandateToggle');
const mandateContent = document.getElementById('mandateContent');
const mandateIcon = document.getElementById('mandateIcon');

if(mandateToggle) {
  mandateToggle.addEventListener('click', () => {
    mandateContent.classList.toggle('open');
    mandateIcon.innerText = mandateContent.classList.contains('open') ? '-' : '+';
  });
}

const legacyToggle = document.getElementById('legacyToggle');
const legacyContent = document.getElementById('legacyContent');
const legacyIcon = document.getElementById('legacyIcon');

if(legacyToggle) {
  legacyToggle.addEventListener('click', () => {
    legacyContent.classList.toggle('open');
    legacyIcon.innerText = legacyContent.classList.contains('open') ? '-' : '+';
  });
}

function toggleInquiry(el) {
  el.classList.toggle('active');
}

function handleLinkedInClick(element, delay) {
  const url = element.href;
  const overlay = document.getElementById('linkOverlay');
  overlay.classList.add('active');

  setTimeout(() => {
    overlay.classList.remove('active');
    window.open(url, '_blank');
  }, delay);

  return false;
}

document.querySelectorAll('[data-toggle-inquiry]').forEach(el => {
  el.addEventListener('click', function() { toggleInquiry(this); });
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
