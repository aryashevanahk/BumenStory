/* BUMENSTORY — script.js
   Navbar HP, hero slideshow, auto-height footer, log konsol.
   Arya Shevana H.K. | Pemrograman Web 1
*/

document.addEventListener('DOMContentLoaded', function () {

  // Helper singkat
  function $(sel) { return document.querySelector(sel); }
  function $$(sel) { return document.querySelectorAll(sel); }

  // ============ NAVBAR ============
  var header = $('#siteHeader');
  var btn = $('#menuBtn');
  var menu = $('#menu');

  if (header && btn && menu) {
    function closeMenu() { menu.classList.remove('open'); }

    // Shadow saat scroll
    window.addEventListener('scroll', function () {
      header.classList.toggle('scrolled', window.scrollY > 8);
    });

    // Toggle menu HP
    btn.addEventListener('click', function () {
      menu.classList.toggle('open');
    });

    // Tutup menu saat: klik link, klik luar, Escape, resize ke desktop
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

  // ============ HERO SLIDESHOW ============
  var slides = $$('.hero-slide');
  var dots = $$('.hero-dots button');
  var DELAY = 10000;

  if (slides.length > 1) {
    var cur = 0;
    var timer;

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

    // Klik dot manual
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

  // ============ AUTO HEIGHT FOOTER ============
  var footer = $('.footer');

  if (footer) {
    function fitFooter() {
      document.body.style.paddingBottom = footer.offsetHeight + 'px';
    }
    fitFooter();
    window.addEventListener('resize', fitFooter);
    window.addEventListener('load', fitFooter);
  }

  // ============ LOG KONSOL ============
  console.log('%c🏛️  BUMENSTORY', 'font-size:16px;font-weight:bold;color:#0d6efd;');
  console.log('%cJelajahi Sejarah, Kuliner, dan Budaya Kebumen (Bumi Tanduran)', 'color:#198754;');
  console.log('%cArya Shevana H.K. — Tugas Pemrograman Web 1', 'color:#6c757d;');

});