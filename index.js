// Add JavaScript functionality if needed
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

themeToggle.addEventListener("change", () => {
  body.classList.toggle("dark-mode");
});
