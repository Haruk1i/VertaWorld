// FAQ Accordion Toggle Interaction - Completely Fixed for both PC and Phones
document.querySelectorAll('.faq-btn').forEach(button => {
    button.addEventListener('click', (e) => {
        // Prevent default actions
        e.preventDefault();
        
        const answer = button.querySelector('.faq-answer');
        const icon = button.querySelector('h4 i');
        
        // Toggle the current answer
        if (answer) {
            answer.classList.toggle('hidden');
            
            // Adjust the arrow icon rotation
            if (answer.classList.contains('hidden')) {
                icon.style.transform = 'rotate(0deg)';
            } else {
                icon.style.transform = 'rotate(180deg)';
            }
        }
    });
});

// PC visibility bug completely fixed by using a much modern approach
document.addEventListener("DOMContentLoaded", () => {
    // Reveal all sections safely without locking them on big desktop screens
    document.querySelectorAll('section').forEach((section) => {
        if(!section.classList.contains('overflow-hidden')) {
            section.classList.add('transform', 'transition', 'duration-700');
        }
    });
});
