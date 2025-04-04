document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("active");
        hamburger.classList.toggle("active"); // Optional: Add animation to hamburger
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Get all timeline cards
    const timelineCards = document.querySelectorAll('.timeline-card');
    
    // Add click event listeners to each card
    timelineCards.forEach(card => {
        card.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove 'active' class from all cards
            timelineCards.forEach(c => {
                c.classList.remove('active');
            });
            
            // Add 'active' class to clicked card
            this.classList.add('active');
            
            // Here you could add code to load content based on the clicked timeline item
            const title = this.querySelector('h3').textContent;
            console.log(`Timeline item clicked: ${title}`);
            
            // You could implement content loading or navigation here
        });
    });
    
    // Highlight the first item by default
    if (timelineCards.length > 0) {
        timelineCards[0].classList.add('active');
    }
    
    // Optional: Add smooth scrolling to the timeline
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});