// FAQ Accordion Toggle Logic
document.querySelectorAll('#faq h4').forEach(question => {
    question.style.cursor = 'pointer';
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        answer.classList.toggle('hidden');
        answer.classList.toggle('block');
    });
});

// Smooth Fade-in on Scroll (Luxury appearance)
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('section').forEach((section) => {
    section.classList.add('transform', 'transition', 'duration-1000', 'opacity-0', 'translate-y-10');
    observer.observe(section);
});// Current year in footer
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
