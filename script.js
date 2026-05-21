// Current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Reveal sections on scroll
const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  {
    threshold: 0.15,
  }
);

revealElements.forEach((element) => {
  observer.observe(element);
});

// Add subtle shadow when scrolling
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    navbar.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.25)";
  } else {
    navbar.style.boxShadow = "none";
  }
});
