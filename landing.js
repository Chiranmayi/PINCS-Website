  /* Custom cursor */
  const cur = document.getElementById('cur');
  const ring = document.getElementById('ring');
  let mx=0,my=0,rx=0,ry=0;
  document.addEventListener('mousemove', e=>{
    mx=e.clientX; my=e.clientY;
    cur.style.left=mx+'px'; cur.style.top=my+'px';
  });
  (function tick(){
    rx+=(mx-rx)*.11; ry+=(my-ry)*.11;
    ring.style.left=rx+'px'; ring.style.top=ry+'px';
    requestAnimationFrame(tick);
  })();
  document.querySelectorAll('a,button').forEach(el=>{
    el.addEventListener('mouseenter',()=>{ cur.style.width='14px'; cur.style.height='14px'; ring.style.width='54px'; ring.style.height='54px'; });
    el.addEventListener('mouseleave',()=>{ cur.style.width='8px'; cur.style.height='8px'; ring.style.width='36px'; ring.style.height='36px'; });
  });

  /* Scroll reveal */
  const revealEls = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if(e.isIntersecting) { e.target.classList.add('vis'); } });
  }, { threshold: 0.12 });
  revealEls.forEach(el => observer.observe(el));

  var featIcons = {
    zero:       '<svg viewBox="0 0 24 24" width="32" height="32" stroke="white" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="8" y1="12" x2="16" y2="12"/></svg>',
    customers:  '<svg viewBox="0 0 24 24" width="32" height="32" stroke="white" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
    chat:       '<svg viewBox="0 0 24 24" width="32" height="32" stroke="white" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',
    insights:   '<svg viewBox="0 0 24 24" width="32" height="32" stroke="white" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>',
    storefront: '<svg viewBox="0 0 24 24" width="32" height="32" stroke="white" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>',
    grow:       '<svg viewBox="0 0 24 24" width="32" height="32" stroke="white" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>',
    map:        '<svg viewBox="0 0 24 24" width="32" height="32" stroke="white" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>',
    delivery:   '<svg viewBox="0 0 24 24" width="32" height="32" stroke="white" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
    login:      '<svg viewBox="0 0 24 24" width="32" height="32" stroke="white" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>',
    copy:       '<svg viewBox="0 0 24 24" width="32" height="32" stroke="white" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>',
    ecommerce:  '<svg viewBox="0 0 24 24" width="32" height="32" stroke="white" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>',
    location:   '<svg viewBox="0 0 24 24" width="32" height="32" stroke="white" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3"/></svg>'
  };
  function showFeatureModal(title, desc, iconKey) {
    document.getElementById('featModalTitle').textContent = title;
    document.getElementById('featModalDesc').textContent  = desc;
    document.getElementById('featModalIcon').innerHTML    = featIcons[iconKey] || '';
    document.getElementById('featModal').classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeFeatModal() {
    document.getElementById('featModal').classList.remove('open');
    document.body.style.overflow = '';
  }
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeFeatModal();
  });

  /* Hero map */
  window.addEventListener('load', function() {
    if (typeof L === 'undefined') return;
    const heroMapEl = document.getElementById('heroMap');
    if (!heroMapEl) return;
    const heroPinPosition = [17.4045, 78.4835];

    const map = L.map('heroMap', {
      center: [17.4095, 78.441],
      zoom: 14,
      zoomControl: false,
      scrollWheelZoom: false,
      dragging: true,
      attributionControl: true
    });

    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
      attribution: '© OpenStreetMap © CARTO',
      subdomains: 'abcd',
      maxZoom: 19
    }).addTo(map);

    const pinIcon = L.divIcon({
      className: '',
      html: `<div style="
        width:78px;height:78px;
        background:#C8102E;border-radius:50% 50% 50% 0;
        transform:rotate(-45deg);
        box-shadow:0 18px 42px rgba(200,16,46,.48);
        border:5px solid #fff;
        display:flex;align-items:center;justify-content:center;">
        <div style="
          width:20px;height:20px;border-radius:50%;
          background:#fff;transform:rotate(45deg);"></div>
      </div>`,
      iconSize: [78, 78],
      iconAnchor: [39, 78]
    });

    const dotIcon = L.divIcon({
      className: '',
      html: `<div style="
        width:14px;height:14px;border-radius:50%;
        background:#C8102E;border:2.5px solid #fff;
        box-shadow:0 3px 12px rgba(200,16,46,.4);"></div>`,
      iconSize: [14, 14],
      iconAnchor: [7, 7]
    });

    L.marker(heroPinPosition, { icon: pinIcon }).addTo(map);
    [
      [17.4095, 78.4785],
      [17.4005, 78.4875],
      [17.3965, 78.4745],
      [17.4145, 78.4895]
    ].forEach(pos => L.marker(pos, { icon: dotIcon }).addTo(map));

    L.circle(heroPinPosition, {
      radius: 600,
      color: '#C8102E',
      fillColor: '#C8102E',
      fillOpacity: 0.06,
      weight: 1.5,
      dashArray: '6 6',
      opacity: 0.4
    }).addTo(map);
  });
