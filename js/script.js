// 1. Tahun otomatis di footer
document.getElementById('year').textContent = new Date().getFullYear();

// 2. Filter keahlian
const filterButtons = document.querySelectorAll('#skillFilter button');
const skillItems = document.querySelectorAll('.skill-item');

filterButtons.forEach(function (btn) {
  btn.addEventListener('click', function () {
    filterButtons.forEach(function (b) { b.classList.remove('active'); });
    btn.classList.add('active');

    const filter = btn.dataset.filter;
    skillItems.forEach(function (item) {
      const show = filter === 'all' || item.dataset.cat === filter;
      item.classList.toggle('hide', !show);
    });
  });
});

// 3. Tutup menu navbar otomatis di layar kecil setelah link diklik
const navMenu = document.getElementById('navMenu');
document.querySelectorAll('#navMenu .nav-link').forEach(function (link) {
  link.addEventListener('click', function () {
    if (navMenu.classList.contains('show')) {
      bootstrap.Collapse.getOrCreateInstance(navMenu).hide();
    }
  });
});
// 4. Mode gelap / terang
const themeBtn = document.getElementById('themeToggle');
const themeIcon = themeBtn.querySelector('i');

function applyTheme(theme) {
  document.documentElement.setAttribute('data-bs-theme', theme);
  themeIcon.className = theme === 'dark' ? 'bi bi-sun' : 'bi bi-moon-stars';
}

// Ambil pilihan terakhir yang tersimpan (kalau belum ada, pakai mode terang)
let savedTheme = null;
try { savedTheme = localStorage.getItem('theme'); } catch (e) {}
applyTheme(savedTheme || 'light');

themeBtn.addEventListener('click', function () {
  const current = document.documentElement.getAttribute('data-bs-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  try { localStorage.setItem('theme', next); } catch (e) {}
});