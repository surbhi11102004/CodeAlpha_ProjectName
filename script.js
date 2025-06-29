// 🌙 Toggle Dark Mode
const toggleBtn = document.getElementById("toggle-dark");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  toggleBtn.textContent = document.body.classList.contains("dark-mode") ? "☀️ Light Mode" : "🌙 Dark Mode";
});

// ⬆ Scroll to Top Button
const scrollBtn = document.getElementById("scrollTopBtn");

window.onscroll = function () {
  scrollBtn.style.display = (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) ? "block" : "none";
};

scrollBtn.onclick = function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
