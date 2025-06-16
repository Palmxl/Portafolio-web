const toggle = document.getElementById('menu-toggle');
const menu = document.getElementById('mobile-menu');

toggle.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});

const navbarOffset = document.querySelector('nav')?.offsetHeight || 80;

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href').substring(1);
    const target = document.getElementById(targetId);

    if (target) {
      e.preventDefault();
      const offsetTop = target.offsetTop - navbarOffset;

      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollToTopBtn.classList.add("opacity-100");
    scrollToTopBtn.classList.remove("opacity-0", "pointer-events-none");
  } else {
    scrollToTopBtn.classList.add("opacity-0", "pointer-events-none");
    scrollToTopBtn.classList.remove("opacity-100");
  }
});

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
