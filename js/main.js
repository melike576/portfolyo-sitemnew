/* =====================================================
   PORTFOLIO — main.js
   Melike Duman — Frontend Developer & UI/UX Designer
   Navigation, language toggle, scroll animations,
   data-driven project gallery, lightbox, soft skills
   ===================================================== */

/* ── 1. TRANSLATIONS ───────────────────────────────── */
const translations = {
  tr: {
    nav_home: "Ana Sayfa",
    nav_about: "Hakkımda",
    nav_skills: "Yetenekler",
    nav_projects: "Projeler",
    nav_contact: "İletişim",
    hero_subtitle: "Melike Duman — Frontend Developer & UI/UX Designer",
    scroll_hint: "Aşağı kaydır",
    hero_note1: "Merhaba! Bu benim portföyüm",
    hero_note2: "Neler yapabileceğimi gör →",
    hero_note3: "Aşağı kaydır!",
    about_greeting: "Merhaba!",
    about_bio: "Ben bir frontend geliştirici ve tasarımcıyım. Kullanıcı odaklı, modern ve responsive web siteleri geliştirmeyi, estetik ve işlevsel arayüzler tasarlamayı seviyorum. Kod ile tasarımı bir araya getirerek özgün dijital deneyimler üretiyorum.",
    edu_school: "Uludağ Üniversitesi",
    edu_dept: "Bilgisayar Programcılığı",
    edu_years: "2024 – 2026",
    about_contact_title: "İLETİŞİM",
    skills_title: "YETENEKLER",
    projects_title: "PROJELERİM",
    projects_note: "Detaylar için tıkla!",
    filter_all: "Tümü",
    filter_web: "Web",
    filter_oyun: "Oyun",
    filter_tasarim: "Tasarım",
    featured_badge: "⭐ Öne Çıkan",
    lb_demo: "Siteyi Gör",
    lb_play: "Oyunu Oyna",
    lb_github: "GitHub",
    lb_figma: "Figma'da Gör",
    contact_title: "BİRLİKTE ÇALIŞALIM",
    contact_sub: "Staj, iş fırsatı ya da yeni bir proje fikri... Bana yazmaktan çekinme!",
    contact_btn: "MERHABA DE!",
    contact_note: "Mesajını okumak için sabırsızlanıyorum!",
    footer_text: `© ${new Date().getFullYear()} Melike Duman. Tüm hakları saklıdır.`,
  },
  en: {
    nav_home: "Home",
    nav_about: "About",
    nav_skills: "Skills",
    nav_projects: "Projects",
    nav_contact: "Contact",
    hero_subtitle: "Melike Duman — Frontend Developer & UI/UX Designer",
    scroll_hint: "Scroll down",
    hero_note1: "Hello! This is my portfolio",
    hero_note2: "See what I can do →",
    hero_note3: "Scroll down!",
    about_greeting: "Hello!",
    about_bio: "I am a frontend developer and designer. I love building user-centered, modern, and responsive websites, as well as designing aesthetic and functional interfaces. I combine code and design to craft unique digital experiences.",
    edu_school: "Uludağ University",
    edu_dept: "Computer Programming",
    edu_years: "2024 – 2026",
    about_contact_title: "CONTACT",
    skills_title: "SKILLS",
    projects_title: "MY WORK",
    projects_note: "Click to see details!",
    filter_all: "All",
    filter_web: "Web",
    filter_oyun: "Game",
    filter_tasarim: "Design",
    featured_badge: "⭐ Featured",
    lb_demo: "Live Demo",
    lb_play: "Play Game",
    lb_github: "GitHub",
    lb_figma: "View on Figma",
    contact_title: "LET'S WORK TOGETHER",
    contact_sub: "An internship, a job opportunity or a new project idea... Feel free to reach out!",
    contact_btn: "SAY HELLO!",
    contact_note: "I can't wait to hear from you!",
    footer_text: `© ${new Date().getFullYear()} Melike Duman. All rights reserved.`,
  }
};

let currentLang = 'tr';

/* ══════════════════════════════════════════════════════
   2. PROJECTS DATA — Edit your real projects here!
   ══════════════════════════════════════════════════════
   - category: 'web' | 'oyun' | 'tasarim'
   - images: array of paths (first image = card & lightbox hero)
             leave [''] for gradient placeholder
   - featured: true → large card spanning full width
   - techChips: shown on card (max 4) and lightbox (all)
   - cardChipLimit: how many chips to show on the card
   - Links: leave '' to auto-hide the button
   ══════════════════════════════════════════════════════ */
const projectsData = [

  // ── 1. POSTCRAFT (FEATURED) ──────────────────────
  {
    id: 'postcraft',
    category: 'web',
    featured: true,
    titleTR: 'PostCraft',
    titleEN: 'PostCraft',
    // Card description (short)
    cardDescTR: 'İçerik üreticilerinin X, Instagram ve LinkedIn gönderilerini hazırlayıp gerçekçi mockup\'larda önizleyebildiği hepsi-bir-arada sosyal medya stüdyosu.',
    cardDescEN: 'An all-in-one social media studio where creators write X, Instagram and LinkedIn posts and preview them in realistic platform mockups.',
    // Lightbox description (long)
    descTR: 'PostCraft; X (Twitter), Instagram ve LinkedIn gönderilerini akıllı içerik asistanı ve canlı etkileşim skoru eşliğinde hazırlamanı sağlar. Gönderileri platforma özel gerçekçi mockup\'larda (Tweet Zinciri, Çoklu Carousel, PDF Dokümanı) önizleyebilir, tüm üretim sürecini Trello tarzı Kanban panosu ve interaktif takvim üzerinden yönetebilirsin. Mockup\'lar 2× Retina kalitesinde indirilebilir; oturum ve taslaklar cihazda saklanır, şifreler tarayıcının Web Crypto API\'si (SHA-256) ile korunur. Arayüz, sıcak kehribar tonlarındaki "Amber Studio" tasarım sistemiyle hazırlandı.',
    descEN: 'PostCraft lets you compose X (Twitter), Instagram and LinkedIn posts with a smart content assistant and live engagement score. Preview posts in platform-specific realistic mockups (Tweet Threads, Multi-image Carousels, PDF Documents) and manage the entire production pipeline via a Trello-style Kanban board and interactive calendar. Mockups can be downloaded in 2× Retina quality; sessions and drafts are stored on-device, and passwords are protected by the browser\'s Web Crypto API (SHA-256). The interface was designed with the warm amber-toned "Amber Studio" design system.',
    techChips: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS v4', 'Lucide React', 'html-to-image', 'Web Crypto API'],
    cardChipLimit: 4,
    images: [
      'assets/projects/postcraft/1.png',
      'assets/projects/postcraft/2.png',
      'assets/projects/postcraft/3.png',
      'assets/projects/postcraft/4.png'
    ],
    imageAltsTR: [
      'PostCraft editör ekranı: etkileşim skoru ve tweet önizlemesi',
      'PostCraft içerik panosu (Kanban)',
      'PostCraft editör ekranı, koyu tema',
      'PostCraft içerik takvimi'
    ],
    imageAltsEN: [
      'PostCraft editor screen: engagement score and tweet preview',
      'PostCraft content board (Kanban)',
      'PostCraft editor screen, dark mode',
      'PostCraft content calendar'
    ],
    bgGradient: '#FAF3EB',
    aspectRatio: '2/1',
    liveUrl: '',
    playUrl: '',
    githubUrl: 'https://github.com/melike576/postcraft',
    figmaUrl: ''
  },

  // ── 2. CUBE JUMP ─────────────────────────────────
  {
    id: 'cube-jump',
    category: 'oyun',
    featured: false,
    titleTR: 'Cube Jump',
    titleEN: 'Cube Jump',
    cardDescTR: 'Sonsuz bir yolda gelen engellerden zıplayarak en yüksek skora ulaşmaya çalıştığın 2D runner oyunu. Karakter seçimi, skor sistemi ve sonsuz harita içerir.',
    cardDescEN: 'A 2D endless runner where you jump over obstacles on an infinite road and try to reach the highest score. Features character selection, a score system and an endless map.',
    descTR: 'Sonsuz bir yolda gelen engellerden zıplayarak en yüksek skora ulaşmaya çalıştığın 2D runner oyunu. Karakter seçimi, skor sistemi ve sonsuz harita içerir.',
    descEN: 'A 2D endless runner where you jump over obstacles on an infinite road and try to reach the highest score. Features character selection, a score system and an endless map.',
    techChips: ['C#', 'Unity'],
    cardChipLimit: 4,
    hasVideo: true,
    coverImage: 'assets/projects/cube-jump/1.png',
    images: [
      'assets/projects/cube-jump/1.png',
      'assets/projects/cube-jump/2.png',
      'assets/projects/cube-jump/3.png'
    ],
    media: [
      {
        type: 'video',
        src: 'assets/projects/cube-jump/demo.mp4',
        poster: 'assets/projects/cube-jump/1.png',
        altTR: 'Cube Jump oynanış videosu',
        altEN: 'Cube Jump gameplay video'
      },
      {
        type: 'image',
        src: 'assets/projects/cube-jump/1.png',
        altTR: 'Cube Jump oyun ekranı',
        altEN: 'Cube Jump gameplay screen'
      },
      {
        type: 'image',
        src: 'assets/projects/cube-jump/2.png',
        altTR: 'Cube Jump karakter seçim ekranı',
        altEN: 'Cube Jump character selection screen'
      },
      {
        type: 'image',
        src: 'assets/projects/cube-jump/3.png',
        altTR: 'Cube Jump ana menü',
        altEN: 'Cube Jump main menu'
      }
    ],
    imageFit: 'cube-jump',
    bgGradient: '#2A1B3D',
    aspectRatio: '16/9',
    liveUrl: '',
    playUrl: '',
    githubUrl: 'https://github.com/melike576/cube-jump',
    figmaUrl: ''
  },

  // ── 3. ESKİ PORTFOLYO SİTEM ──────────────────────
  {
    id: 'old-portfolio',
    category: 'web',
    featured: false,
    titleTR: 'İlk Portfolyo Sitem',
    titleEN: 'My First Portfolio Website',
    cardDescTR: 'HTML ve CSS ile hazırladığım ilk kişisel portfolyo sitem. Neon temalı tasarım, eğitim zaman çizelgesi, proje galerisi ve iletişim formu içerir.',
    cardDescEN: 'My first personal portfolio website, built with HTML and CSS. Features a neon theme, an education timeline, a project gallery and a contact form.',
    descTR: 'HTML ve CSS ile hazırladığım ilk kişisel portfolyo sitem. Neon temalı tasarım, eğitim zaman çizelgesi, proje galerisi ve iletişim formu içerir.',
    descEN: 'My first personal portfolio website, built with HTML and CSS. Features a neon theme, an education timeline, a project gallery and a contact form.',
    techChips: ['HTML', 'CSS'],
    cardChipLimit: 4,
    images: [
      'assets/projects/old-portfolio/1.png',
      'assets/projects/old-portfolio/2.png',
      'assets/projects/old-portfolio/3.png',
      'assets/projects/old-portfolio/4.png'
    ],
    imageAltsTR: [
      'Eski portfolyo sitesi ana sayfa',
      'Eski portfolyo sitesi çalışmalarım bölümü',
      'Eski portfolyo sitesi eğitim zaman çizelgesi',
      'Eski portfolyo sitesi yetenekler bölümü'
    ],
    imageAltsEN: [
      'Old portfolio website home page',
      'Old portfolio website projects section',
      'Old portfolio website education timeline',
      'Old portfolio website skills section'
    ],
    imageFit: 'contain',
    bgGradient: '#0b0b0f',
    aspectRatio: '16/9',
    liveUrl: '',
    playUrl: '',
    githubUrl: 'https://github.com/melike576/portfolyo-site',
    figmaUrl: ''
  },

  // ── 4. MOBİL UYGULAMA TASARIMI (KARABOĞA) ────────
  {
    id: 'app-design',
    category: 'tasarim',
    featured: false,
    titleTR: 'Karaboğa — Mobil Uygulama Tasarımı',
    titleEN: 'Karaboğa — Mobile App Design',
    cardDescTR: 'Bal ve arı ürünleri satan Karaboğa Arıcılık için Figma\'da tasarladığım mobil uygulama arayüzü.',
    cardDescEN: 'A mobile app interface I designed in Figma for Karaboğa Beekeeping, a honey and bee products store.',
    descTR: 'Bal ve arı ürünleri satan Karaboğa Arıcılık için Figma\'da tasarladığım mobil uygulama arayüzü.',
    descEN: 'A mobile app interface I designed in Figma for Karaboğa Beekeeping, a honey and bee products store.',
    techChips: ['Figma'],
    cardChipLimit: 4,
    images: [
      'assets/projects/app-design/1.png',
      'assets/projects/app-design/2.png',
      'assets/projects/app-design/3.png',
      'assets/projects/app-design/4.png'
    ],
    imageAltsTR: [
      'Karaboğa uygulaması ana sayfa, ürünler, ürün detay ve sepet ekranları',
      'Karaboğa ana sayfa ekranı',
      'Karaboğa ürün detay ekranı',
      'Karaboğa sepet ekranı'
    ],
    imageAltsEN: [
      'Karaboğa app home, products, product detail and cart screens',
      'Karaboğa home screen',
      'Karaboğa product detail screen',
      'Karaboğa cart screen'
    ],
    imageFit: 'contain',
    bgGradient: '#FAF3EB',
    aspectRatio: '16/10',
    liveUrl: '',
    playUrl: '',
    githubUrl: '',
    figmaUrl: ''
  },

  // ── 5. SOSYAL MEDYA POSTLARI ─────────────────────
  {
    id: 'social-posts',
    category: 'tasarim',
    featured: false,
    titleTR: 'Narval Sosyal Medya Postları',
    titleEN: 'Narval Social Media Posts',
    cardDescTR: 'Narval için hazırladığım Tech Rehber serisi sosyal medya post tasarımları: ERP seçimi, pazaryeri ve API entegrasyonu.',
    cardDescEN: 'Social media post designs I created for Narval\'s Tech Guide series: ERP selection, marketplace and API integration.',
    descTR: 'Narval için hazırladığım Tech Rehber serisi sosyal medya post tasarımları: ERP seçimi, pazaryeri ve API entegrasyonu.',
    descEN: 'Social media post designs I created for Narval\'s Tech Guide series: ERP selection, marketplace and API integration.',
    techChips: ['Narval'],
    cardChipLimit: 4,
    images: [
      'assets/projects/social-posts/1.jpg',
      'assets/projects/social-posts/2.jpg',
      'assets/projects/social-posts/3.jpg'
    ],
    imageAltsTR: [
      'Narval Tech Rehber: ERP Seçim Kriterleri postu',
      'Narval Tech Rehber: Pazaryeri Entegrasyonu postu (koyu tema)',
      'Narval Tech Rehber: API Entegrasyon Gücü postu'
    ],
    imageAltsEN: [
      'Narval Tech Guide: ERP Selection Criteria post',
      'Narval Tech Guide: Marketplace Integration post (dark mode)',
      'Narval Tech Guide: API Integration Power post'
    ],
    layout: 'fan',
    imageFit: 'contain',
    bgGradient: 'rgba(123, 92, 255, 0.15)',
    aspectRatio: '16/10',
    liveUrl: '',
    playUrl: '',
    githubUrl: '',
    figmaUrl: ''
  }
];

let currentFilter = 'all';

/* ── 3. RENDER PROJECTS ────────────────────────────── */
const projectsGrid = document.getElementById('projects-grid');

function renderProjects() {
  if (!projectsGrid) return;
  projectsGrid.innerHTML = '';

  projectsData.forEach(proj => {
    const isVisible = currentFilter === 'all' || proj.category === currentFilter;
    const title = currentLang === 'tr' ? proj.titleTR : proj.titleEN;
    const cardDesc = currentLang === 'tr' ? proj.cardDescTR : proj.cardDescEN;
    const catLabels = {
      web: currentLang === 'tr' ? 'Web' : 'Web',
      oyun: currentLang === 'tr' ? 'Oyun' : 'Game',
      tasarim: currentLang === 'tr' ? 'Tasarım' : 'Design'
    };
    const categoryLabel = catLabels[proj.category] || proj.category;

    const card = document.createElement('div');
    card.className = `project-card ${proj.featured ? 'featured' : ''} ${isVisible ? '' : 'hidden'}`.trim();
    card.dataset.id = proj.id;
    card.dataset.category = proj.category;

    // Thumbnail content
    const hasImage = proj.images && proj.images.length > 0 && proj.images[0] !== '';
    let thumbContent = '';
    const altArr = currentLang === 'tr' ? proj.imageAltsTR : proj.imageAltsEN;

    if (proj.layout === 'fan' && proj.images && proj.images.length >= 3) {
      thumbContent = `
        <div class="project-fan-wrap" aria-hidden="true">
          <img src="${proj.images[0]}" alt="${(altArr && altArr[0]) || ''}" class="fan-post fan-post-left" loading="lazy" onerror="this.closest('.project-thumb').classList.add('img-failed')"/>
          <img src="${proj.images[1]}" alt="${(altArr && altArr[1]) || ''}" class="fan-post fan-post-center" loading="lazy"/>
          <img src="${proj.images[2]}" alt="${(altArr && altArr[2]) || ''}" class="fan-post fan-post-right" loading="lazy"/>
        </div>
        <div class="project-thumb-fallback">
          <span class="fallback-icon">🎨</span>
          <span class="fallback-label">${title}</span>
        </div>
      `;
    } else if (hasImage) {
      const altText = (altArr && altArr[0]) || title;
      const fitClass = proj.imageFit === 'contain' ? 'fit-contain' : '';
      thumbContent = `
        <img src="${proj.images[0]}" alt="${altText}" class="${fitClass}" loading="lazy" onerror="this.closest('.project-thumb').classList.add('img-failed')"/>
        <div class="project-thumb-fallback">
          <span class="fallback-icon">🖼️</span>
          <span class="fallback-label">${title}</span>
        </div>
      `;
    } else {
      let placeholderGraphic = '';
      if (proj.id === 'cube-jump') {
        placeholderGraphic = `
          <svg viewBox="0 0 100 70" width="80" height="56" aria-hidden="true">
            <polygon points="68,58 76,38 84,58" fill="#FFD84D" stroke="#2A1B3D" stroke-width="2"/>
            <rect x="24" y="18" width="24" height="24" rx="4" fill="#FF6B4A" stroke="#FFF8F0" stroke-width="2.5" transform="rotate(-12 36 30)"/>
            <line x1="10" y1="58" x2="90" y2="58" stroke="#FFF8F0" stroke-width="3" stroke-linecap="round"/>
          </svg>
        `;
      } else {
        placeholderGraphic = `
          <svg viewBox="0 0 100 70" width="80" height="56" aria-hidden="true">
            <rect x="12" y="10" width="76" height="50" rx="6" fill="#FFF8F0" stroke="#2A1B3D" stroke-width="2.5"/>
            <rect x="12" y="10" width="76" height="12" rx="6" fill="#FFD84D" stroke="#2A1B3D" stroke-width="2.5"/>
            <circle cx="20" cy="16" r="2" fill="#FF6B4A"/>
            <circle cx="26" cy="16" r="2" fill="#2A1B3D"/>
            <circle cx="32" cy="16" r="2" fill="#7B5CFF"/>
            <line x1="20" y1="32" x2="52" y2="32" stroke="#7B5CFF" stroke-width="3" stroke-linecap="round"/>
            <line x1="20" y1="40" x2="78" y2="40" stroke="#2A1B3D" stroke-width="2" stroke-linecap="round"/>
          </svg>
        `;
      }
      thumbContent = `
        <div class="project-thumb-placeholder">
          ${placeholderGraphic}
          <span class="placeholder-graphic-label">${title}</span>
        </div>
      `;
    }

    // Chips for the card (limited)
    const chipLimit = proj.cardChipLimit || 4;
    const cardChips = proj.techChips.slice(0, chipLimit);
    const chipsHtml = cardChips.map(c => `<span class="tech-chip">${c}</span>`).join('');

    // Featured star badge
    const featuredStar = proj.featured
      ? `<svg class="featured-star pulse-star" viewBox="0 0 30 30" width="28" height="28" aria-hidden="true">
           <path d="M15 2 L17 13 L28 15 L17 17 L15 28 L13 17 L2 15 L13 13 Z" fill="#FFD84D"/>
         </svg>`
      : '';

    // Video play badge
    const videoBadge = proj.hasVideo
      ? `<div class="video-play-badge" aria-label="${currentLang === 'tr' ? 'Video mevcut' : 'Has video'}" title="${currentLang === 'tr' ? 'Video mevcut' : 'Has video'}">
           <svg viewBox="0 0 24 24" width="14" height="14" fill="white" aria-hidden="true">
             <path d="M8 5v14l11-7z"/>
           </svg>
         </div>`
      : '';

    const featuredPill = proj.featured
      ? `<span class="project-card-featured-pill">${currentLang === 'tr' ? '⭐ Öne Çıkan' : '⭐ Featured'}</span>`
      : '';

    card.innerHTML = `
      <div class="project-thumb" style="background:${proj.bgGradient}; aspect-ratio:${proj.aspectRatio};">
        ${thumbContent}
        ${featuredStar}
        ${videoBadge}
      </div>
      <div class="project-card-body">
        <div class="project-card-header">
          <span class="project-card-category">${categoryLabel}</span>
          ${featuredPill}
        </div>
        <h3 class="project-card-title">${title}</h3>
        <p class="project-card-desc">${cardDesc}</p>
        <div class="project-card-tech">${chipsHtml}</div>
      </div>
    `;

    card.addEventListener('click', () => openLightboxById(proj.id));
    projectsGrid.appendChild(card);
  });

  // Balanced layout if only 1 item matches filter
  const visibleProjects = projectsData.filter(p => currentFilter === 'all' || p.category === currentFilter);
  projectsGrid.classList.toggle('single-item', visibleProjects.length === 1);
}

/* ── 4. LIGHTBOX ───────────────────────────────────── */
const lightbox = document.getElementById('lightbox');
const lbImgWrap = document.getElementById('lb-img-wrap');
const lbGalleryThumbs = document.getElementById('lb-gallery-thumbs');
const lbTitle = document.getElementById('lb-title');
const lbDesc = document.getElementById('lb-desc');
const lbCategoryTag = document.getElementById('lb-category-tag');
const lbFeaturedBadge = document.getElementById('lb-featured-badge');
const lbTechChips = document.getElementById('lb-tech-chips');
const lbLinkDemo = document.getElementById('lb-link-demo');
const lbLinkPlay = document.getElementById('lb-link-play');
const lbLinkGithub = document.getElementById('lb-link-github');
const lbLinkFigma = document.getElementById('lb-link-figma');
const lbClose = document.getElementById('lb-close');
const lbPrev = document.getElementById('lb-prev');
const lbNext = document.getElementById('lb-next');

let activeVisibleProjects = [];
let currentLbIndex = 0;
let currentGalleryIndex = 0; // for multi-image / mixed media projects

function getVisibleProjects() {
  return projectsData.filter(p => currentFilter === 'all' || p.category === currentFilter);
}

function getProjectSlides(proj) {
  if (!proj) return [];
  if (proj.media && proj.media.length > 0) {
    return proj.media;
  }
  if (proj.images && proj.images.length > 0 && proj.images[0] !== '') {
    const altsTR = proj.imageAltsTR || [];
    const altsEN = proj.imageAltsEN || [];
    return proj.images.map((img, i) => ({
      type: 'image',
      src: img,
      altTR: altsTR[i] || proj.titleTR,
      altEN: altsEN[i] || proj.titleEN
    }));
  }
  return [];
}

function stopCurrentVideo() {
  if (!lbImgWrap) return;
  const vid = lbImgWrap.querySelector('video');
  if (vid) {
    try {
      vid.pause();
      vid.currentTime = 0;
    } catch (_) {}
  }
}

function openLightboxById(id) {
  activeVisibleProjects = getVisibleProjects();
  currentLbIndex = activeVisibleProjects.findIndex(p => p.id === id);
  if (currentLbIndex === -1) currentLbIndex = 0;
  currentGalleryIndex = 0;
  showLightboxItem(currentLbIndex);
  lightbox.removeAttribute('hidden');
  document.body.style.overflow = 'hidden';
  lbClose.focus();
}

function updateLightboxImage() {
  const proj = activeVisibleProjects[currentLbIndex];
  if (!proj) return;
  stopCurrentVideo();

  const title = currentLang === 'tr' ? proj.titleTR : proj.titleEN;
  const slides = getProjectSlides(proj);

  lbImgWrap.innerHTML = '';
  if (slides.length > 0) {
    const curSlide = slides[currentGalleryIndex] || slides[0];
    const alt = (currentLang === 'tr' ? curSlide.altTR : curSlide.altEN) || title;
    const isContain = proj.imageFit === 'contain' || proj.id === 'postcraft' || proj.id === 'social-posts';
    const lbBg = proj.id === 'social-posts' ? '#FAF3EB' : (isContain ? (proj.bgGradient || '#FAF3EB') : 'var(--text)');
    lbImgWrap.style.background = lbBg;

    if (curSlide.type === 'video') {
      const video = document.createElement('video');
      video.controls = true;
      video.playsInline = true;
      video.preload = 'metadata';
      if (curSlide.poster) video.poster = curSlide.poster;
      video.setAttribute('aria-label', alt);
      video.style.cssText = 'width:100%;max-height:70vh;object-fit:contain;background:#000;border-radius:4px;display:block;';
      video.innerHTML = `
        <source src="${curSlide.src}" type="video/mp4"/>
        <p style="color:#FFF8F0;padding:1.5rem;text-align:center;font-family:var(--font-body);">
          ${currentLang === 'tr' ? 'Tarayıcınız bu videoyu doğrudan oynatamıyor.' : 'Your browser cannot play this video directly.'}
          <a href="${curSlide.src}" download style="text-decoration:underline;color:#FFD84D;font-weight:700;">
            ${currentLang === 'tr' ? 'Videoyu indirmek için tıklayın' : 'Download video'}
          </a>.
        </p>
      `;
      video.onerror = () => {
        video.style.display = 'none';
        const fallback = document.createElement('div');
        fallback.style.cssText = 'color:#FFF8F0;padding:2rem;text-align:center;font-family:var(--font-body);';
        fallback.innerHTML = `
          <p style="font-size:1.1rem;margin-bottom:0.8rem;">⚠️ ${currentLang === 'tr' ? 'Video yüklenemedi.' : 'Video failed to load.'}</p>
          <a href="${curSlide.src}" download style="color:#FFD84D;text-decoration:underline;font-weight:700;">
            ${currentLang === 'tr' ? 'Dosyayı indirin' : 'Download file'}
          </a>
        `;
        lbImgWrap.appendChild(fallback);
      };
      lbImgWrap.appendChild(video);
    } else {
      const img = document.createElement('img');
      img.src = curSlide.src;
      img.alt = alt;
      img.style.objectFit = 'contain';
      img.style.maxHeight = '70vh';
      img.style.padding = isContain ? '12px' : '';
      lbImgWrap.appendChild(img);
    }
  } else {
    lbImgWrap.style.background = proj.bgGradient || 'var(--text)';
    const ph = document.createElement('div');
    ph.className = 'lightbox-placeholder-thumb';
    ph.style.background = proj.bgGradient;
    const label = document.createElement('span');
    label.style.cssText = 'font-family:var(--font-heading);font-size:2.2rem;color:rgba(255,255,255,0.85);letter-spacing:3px;';
    label.textContent = title;
    ph.appendChild(label);
    lbImgWrap.appendChild(ph);
  }
}

function renderGalleryThumbs() {
  if (!lbGalleryThumbs) return;
  const proj = activeVisibleProjects[currentLbIndex];
  const slides = getProjectSlides(proj);

  if (slides.length > 1) {
    lbGalleryThumbs.innerHTML = slides.map((slide, i) => {
      const alt = (currentLang === 'tr' ? slide.altTR : slide.altEN) || `Medya ${i + 1}`;
      const thumbSrc = slide.type === 'video' ? (slide.poster || slide.src) : slide.src;
      const isVideo = slide.type === 'video';
      return `
        <button class="lb-thumb-btn ${isVideo ? 'lb-thumb-video' : ''} ${i === currentGalleryIndex ? 'active' : ''}" data-idx="${i}" aria-label="${alt}" type="button">
          <img src="${thumbSrc}" alt="${alt}" loading="lazy"/>
          ${isVideo ? `<span class="thumb-video-icon" aria-hidden="true"><svg viewBox="0 0 24 24" width="12" height="12" fill="white"><path d="M8 5v14l11-7z"/></svg></span>` : ''}
        </button>
      `;
    }).join('');
    lbGalleryThumbs.removeAttribute('hidden');

    lbGalleryThumbs.querySelectorAll('.lb-thumb-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        stopCurrentVideo();
        currentGalleryIndex = parseInt(btn.dataset.idx, 10);
        updateLightboxImage();
        updateActiveThumb();
      });
    });
  } else {
    lbGalleryThumbs.setAttribute('hidden', '');
    lbGalleryThumbs.innerHTML = '';
  }
}

function updateActiveThumb() {
  if (!lbGalleryThumbs) return;
  const thumbs = lbGalleryThumbs.querySelectorAll('.lb-thumb-btn');
  thumbs.forEach((t, i) => {
    t.classList.toggle('active', i === currentGalleryIndex);
  });
}

function showLightboxItem(index) {
  const proj = activeVisibleProjects[index];
  if (!proj) return;

  const title = currentLang === 'tr' ? proj.titleTR : proj.titleEN;
  const desc = currentLang === 'tr' ? proj.descTR : proj.descEN;
  const catLabels = {
    web: currentLang === 'tr' ? 'Web' : 'Web',
    oyun: currentLang === 'tr' ? 'Oyun' : 'Game',
    tasarim: currentLang === 'tr' ? 'Tasarım' : 'Design'
  };
  const categoryLabel = catLabels[proj.category] || proj.category;

  lbTitle.textContent = title;
  lbDesc.textContent = desc;
  if (lbCategoryTag) lbCategoryTag.textContent = categoryLabel;

  // Featured badge
  if (lbFeaturedBadge) {
    if (proj.featured) {
      lbFeaturedBadge.removeAttribute('hidden');
    } else {
      lbFeaturedBadge.setAttribute('hidden', '');
    }
  }

  // Tech chips (show ALL in lightbox)
  if (lbTechChips) {
    lbTechChips.innerHTML = proj.techChips
      .map(c => `<span class="lb-tech-chip">${c}</span>`)
      .join('');
  }

  // Image & thumbnails
  updateLightboxImage();
  renderGalleryThumbs();

  // Links — hide if empty
  setLinkBtn(lbLinkDemo, proj.liveUrl);
  setLinkBtn(lbLinkPlay, proj.playUrl);
  setLinkBtn(lbLinkGithub, proj.githubUrl);
  setLinkBtn(lbLinkFigma, proj.figmaUrl);

  // Prev / Next button visibility
  updateNavArrows();
}

function updateNavArrows() {
  const proj = activeVisibleProjects[currentLbIndex];
  const slides = getProjectSlides(proj);

  if (slides.length > 1) {
    lbPrev.style.display = '';
    lbNext.style.display = '';
  } else {
    lbPrev.style.display = currentLbIndex > 0 ? '' : 'none';
    lbNext.style.display = currentLbIndex < activeVisibleProjects.length - 1 ? '' : 'none';
  }
}

function handleNext() {
  const proj = activeVisibleProjects[currentLbIndex];
  const slides = getProjectSlides(proj);
  stopCurrentVideo();

  if (slides.length > 1) {
    currentGalleryIndex = (currentGalleryIndex + 1) % slides.length;
    updateLightboxImage();
    updateActiveThumb();
  } else if (currentLbIndex < activeVisibleProjects.length - 1) {
    currentLbIndex++;
    currentGalleryIndex = 0;
    showLightboxItem(currentLbIndex);
  }
}

function handlePrev() {
  const proj = activeVisibleProjects[currentLbIndex];
  const slides = getProjectSlides(proj);
  stopCurrentVideo();

  if (slides.length > 1) {
    currentGalleryIndex = (currentGalleryIndex - 1 + slides.length) % slides.length;
    updateLightboxImage();
    updateActiveThumb();
  } else if (currentLbIndex > 0) {
    currentLbIndex--;
    currentGalleryIndex = 0;
    showLightboxItem(currentLbIndex);
  }
}

function setLinkBtn(el, url) {
  if (!el) return;
  if (url && url.trim() !== '') {
    el.href = url;
    el.removeAttribute('hidden');
  } else {
    el.setAttribute('hidden', '');
  }
}

function closeLightbox() {
  stopCurrentVideo();
  lightbox.setAttribute('hidden', '');
  document.body.style.overflow = '';
}

lbClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
lbPrev.addEventListener('click', handlePrev);
lbNext.addEventListener('click', handleNext);

document.addEventListener('keydown', e => {
  if (lightbox.hasAttribute('hidden')) return;
  if (e.key === 'Escape') {
    closeLightbox();
    return;
  }
  const tag = document.activeElement ? document.activeElement.tagName.toLowerCase() : '';
  if (tag === 'video' || tag === 'input' || tag === 'textarea') return;
  if (e.key === 'ArrowLeft') handlePrev();
  if (e.key === 'ArrowRight') handleNext();
});

// Touch swipe navigation for mobile
let touchStartX = 0;
let touchStartY = 0;
lightbox.addEventListener('touchstart', (e) => {
  if (!e.changedTouches || e.changedTouches.length === 0) return;
  touchStartX = e.changedTouches[0].clientX;
  touchStartY = e.changedTouches[0].clientY;
}, { passive: true });

lightbox.addEventListener('touchend', (e) => {
  if (!e.changedTouches || e.changedTouches.length === 0) return;
  const diffX = e.changedTouches[0].clientX - touchStartX;
  const diffY = e.changedTouches[0].clientY - touchStartY;
  if (Math.abs(diffX) > 40 && Math.abs(diffX) > Math.abs(diffY)) {
    if (diffX < 0) {
      handleNext();
    } else {
      handlePrev();
    }
  }
}, { passive: true });

/* ── 5. PROJECT FILTERING ──────────────────────────── */
const filterBtns = document.querySelectorAll('.filter-btn');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentFilter = btn.dataset.filter;

    const cards = document.querySelectorAll('.project-card');
    let visibleCount = 0;
    cards.forEach(card => {
      const match = currentFilter === 'all' || card.dataset.category === currentFilter;
      card.classList.toggle('hidden', !match);
      if (match) visibleCount++;
    });
    if (projectsGrid) {
      projectsGrid.classList.toggle('single-item', visibleCount === 1);
    }
  });
});

/* ── 6. TRANSLATIONS & LANGUAGE TOGGLE ─────────────── */
function applyTranslations(lang) {
  const currentYear = new Date().getFullYear();
  translations.tr.footer_text = `© ${currentYear} Melike Duman. Tüm hakları saklıdır.`;
  translations.en.footer_text = `© ${currentYear} Melike Duman. All rights reserved.`;

  const t = translations[lang];
  document.querySelectorAll('[data-key]').forEach(el => {
    const key = el.dataset.key;
    if (t[key] !== undefined) el.textContent = t[key];
  });
  document.documentElement.lang = lang;

  // Pre-filled subject in mailto button
  const contactMailBtn = document.getElementById('contact-mail-btn');
  if (contactMailBtn) {
    const subject = lang === 'tr' ? 'Merhaba Melike!' : 'Hello Melike!';
    contactMailBtn.href = `mailto:dumanmelike617@gmail.com?subject=${encodeURIComponent(subject)}`;
  }

  updateSoftSkillsLang();
  renderProjects();
}

function updateSoftSkillsLang() {
  const softSkillsTR = 'Problem Çözme ✦ Takım Çalışması ✦ Yaratıcılık ✦ Detaylara Dikkat ✦ Hızlı Öğrenme ✦ İletişim ✦\u00A0';
  const softSkillsEN = 'Problem Solving ✦ Teamwork ✦ Creativity ✦ Attention to Detail ✦ Fast Learning ✦ Communication ✦\u00A0';
  const text = currentLang === 'tr' ? softSkillsTR : softSkillsEN;
  document.querySelectorAll('.soft-marquee-track span').forEach(span => {
    span.textContent = text;
  });
}

const langToggle = document.getElementById('lang-toggle');
if (langToggle) {
  langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'tr' ? 'en' : 'tr';
    langToggle.textContent = currentLang === 'tr' ? 'EN' : 'TR';
    applyTranslations(currentLang);
  });
}

/* ── 7. NAVBAR & SCROLL ────────────────────────────── */
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

window.addEventListener('scroll', () => {
  if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 20);
  updateActiveNav();
});

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-label', isOpen ? 'Menüyü kapat' : 'Menüyü aç');
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.classList.remove('open');
    });
  });
}

function updateActiveNav() {
  const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
  const scrollY = window.scrollY + window.innerHeight / 3;
  sections.forEach(id => {
    const el = document.getElementById(id);
    const link = document.querySelector(`.nav-links a[href="#${id}"]`);
    if (!el || !link) return;
    const absTop = el.offsetTop;
    const absBottom = absTop + el.offsetHeight;
    link.classList.toggle('active', scrollY >= absTop && scrollY < absBottom);
  });
}

/* ── 8. INTERSECTION OBSERVER (Scroll animations) ──── */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ── 9. ARROW DRAW ANIMATION ───────────────────────── */
function initArrowAnimations() {
  document.querySelectorAll('.arrow-draw').forEach(svg => {
    const path = svg.querySelector('path');
    if (!path) return;
    try {
      const len = path.getTotalLength();
      path.style.strokeDasharray = len;
      path.style.strokeDashoffset = len;
      path.style.animation = 'draw-arrow 1.5s ease forwards 0.8s';
    } catch(e) {
      path.style.strokeDashoffset = '0';
    }
  });
}

/* ── INIT ──────────────────────────────────────────── */
renderProjects();
applyTranslations('tr');
updateActiveNav();
initArrowAnimations();
