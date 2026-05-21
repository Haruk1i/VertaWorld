// FAQ Accordion Toggle Interaction with smooth layout adjustments
document.querySelectorAll('#faq .cursor-pointer').forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.querySelector('p');
        const icon = question.querySelector('h4 i');
        
        // Toggle answer visibility
        answer.classList.toggle('hidden');
        
        // Rotate arrow icon smoothly
        if (answer.classList.contains('hidden')) {
            icon.style.transform = 'rotate(0deg)';
        } else {
            icon.style.transform = 'rotate(180deg)';
        }
    });
});

// Smooth Fade-in on Scroll Animation Setup for Luxury Feel
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
    });
}, { threshold: 0.02 }); // Reduced threshold for better mobile trigger response

document.querySelectorAll('section').forEach((section) => {
    // Exclude the infinite brand logo strip from fading out completely
    if(!section.classList.contains('overflow-hidden')) {
        section.classList.add('transform', 'transition', 'duration-1000', 'opacity-0', 'translate-y-10');
        observer.observe(section);
    }
});
