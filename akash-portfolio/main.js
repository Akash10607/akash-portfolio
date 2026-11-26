const root = document.documentElement,
  button = document.getElementById('themeToggle');

const saved = localStorage.getItem('akash-theme');

if (saved) {
  root.dataset.theme = saved;
}

function label() {
  button.textContent = root.dataset.theme === 'dark' ? 'Light ☼' : 'Dark ☾';
}

label();

button.addEventListener('click', () => {
  root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('akash-theme', root.dataset.theme);
  label();
});

const observer = new IntersectionObserver(
  entries => entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  }),
  { threshold: .12 }
);

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Always start from the top when the page loads
if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
}

window.addEventListener("load", () => {
    window.scrollTo(0, 0);
});

document.querySelectorAll(".visual img").forEach((img) => {
  img.addEventListener("contextmenu", (e) => {
    e.preventDefault();
  });
});