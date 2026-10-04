(function () {
  var s = document.querySelector('.slider');
  if (!s) return;
  var track = s.querySelector('.track');
  var slides = Array.prototype.slice.call(track.children);
  var dots = s.querySelector('.dots');
  var i = 0, timer;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  slides.forEach(function (sl, n) {
    var img = sl.querySelector('img');
    function miss() { sl.classList.add('missing'); }
    img.addEventListener('error', miss);
    if (img.complete && img.naturalWidth === 0) miss();
    var d = document.createElement('button');
    d.setAttribute('aria-label', 'Show picture ' + (n + 1));
    d.addEventListener('click', function () { go(n); });
    dots.appendChild(d);
  });

  function go(n) {
    i = (n + slides.length) % slides.length;
    track.style.transform = 'translateX(-' + (i * 100) + '%)';
    Array.prototype.forEach.call(dots.children, function (d, k) {
      d.setAttribute('aria-current', k === i ? 'true' : 'false');
    });
  }
  function play() { if (!reduce) timer = setInterval(function () { go(i + 1); }, 5000); }
  function stop() { clearInterval(timer); }

  s.querySelector('.prev').addEventListener('click', function () { go(i - 1); });
  s.querySelector('.next').addEventListener('click', function () { go(i + 1); });
  s.addEventListener('mouseenter', stop);
  s.addEventListener('mouseleave', play);
  s.addEventListener('focusin', stop);
  s.addEventListener('focusout', play);
  go(0);
  play();
})();
