document.addEventListener('DOMContentLoaded', function () {

  if (typeof feather !== 'undefined') feather.replace();

  function $(s) { return document.querySelector(s); }
  function $$(s) { return document.querySelectorAll(s); }

  // navbar
  var header = $('#siteHeader');
  var btn = $('#menuBtn');
  var menu = $('#menu');

  if (header && btn && menu) {
    function closeMenu() { menu.classList.remove('open'); }

    window.addEventListener('scroll', function () {
      header.classList.toggle('scrolled', window.scrollY > 8);
    });

    btn.addEventListener('click', function () {
      menu.classList.toggle('open');
    });

    menu.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') closeMenu();
    });

    document.addEventListener('click', function (e) {
      if (!header.contains(e.target)) closeMenu();
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeMenu();
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth > 768) closeMenu();
    });
  }

  // hero slideshow
  var slides = $$('.hero-slide');
  var dots = $$('.hero-dots button');
  var DELAY = 10000;

  if (slides.length > 1) {
    var cur = 0, timer;

    function goTo(i) {
      slides[cur].classList.remove('active');
      if (dots[cur]) dots[cur].classList.remove('active');
      cur = i;
      slides[cur].classList.add('active');
      if (dots[cur]) dots[cur].classList.add('active');
    }

    function auto() {
      clearInterval(timer);
      timer = setInterval(function () {
        goTo((cur + 1) % slides.length);
      }, DELAY);
    }

    for (var i = 0; i < dots.length; i++) {
      (function (i) {
        dots[i].addEventListener('click', function () {
          goTo(i);
          auto();
        });
      })(i);
    }

    auto();
  }

  // timeline
  (function () {
    var tDots = $$('.timeline-dot');
    if (!tDots.length) return;

    for (var i = 0; i < tDots.length; i++) {
      (function (i) {
        tDots[i].addEventListener('click', function () {
          showEvent(i);
        });
      })(i);
    }
  })();

  function showEvent(index) {
    var tDots = $$('.timeline-dot');
    var tPanels = $$('.timeline-panel');

    for (var i = 0; i < tDots.length; i++) {
      tDots[i].classList.remove('active');
      tDots[i].setAttribute('aria-selected', 'false');
    }
    for (var j = 0; j < tPanels.length; j++) {
      tPanels[j].classList.remove('active');
    }

    if (tDots[index]) {
      tDots[index].classList.add('active');
      tDots[index].setAttribute('aria-selected', 'true');
    }
    if (tPanels[index]) {
      tPanels[index].classList.add('active');
      if (window.innerWidth <= 768) {
        tPanels[index].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }
  }

  // accordion
  (function () {
    var items = $$('.accordion-item');
    if (!items.length) return;

    for (var i = 0; i < items.length; i++) {
      (function (item) {
        var b = item.querySelector('.accordion-btn');
        if (!b) return;
        b.addEventListener('click', function () {
          item.classList.toggle('open');
        });
      })(items[i]);
    }
  })();

    // form kontak
  (function () {
    var form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var nama = form.nama.value.trim();
      alert('Terima kasih, ' + nama + '! Pesanmu sudah kami terima.');
      form.reset();
    });
  })();

  // footer auto-height
  var footer = $('.footer');

  if (footer) {
    function fitFooter() {
      document.body.style.paddingBottom = footer.offsetHeight + 'px';
    }
    fitFooter();
    window.addEventListener('resize', fitFooter);
    window.addEventListener('load', fitFooter);
  }

  console.log('%c🏛️  BUMENSTORY', 'font-size:16px;font-weight:bold;color:#0d6efd;');
  console.log('%cJelajahi Sejarah, Kuliner, dan Budaya Kebumen (Bumi Tanduran)', 'color:#198754;');
  console.log('%cArya Shevana H.K. — Tugas Pemrograman Web 1', 'color:#6c757d;');

});