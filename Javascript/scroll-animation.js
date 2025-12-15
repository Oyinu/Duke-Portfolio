// scroll-animations.js
// Cross-browser scroll animations for mobile and desktop

document.addEventListener('DOMContentLoaded', function() {
    
    // Intersection Observer configuration
    const observerOptions = {
        threshold: 0.1, // Trigger when 10% of element is visible
        rootMargin: '0px 0px -100px 0px' // Start animation slightly before element enters viewport
    };
    
    // Create the observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add 'in-view' class when element enters viewport
                entry.target.classList.add('in-view');
            } else {
                // Remove 'in-view' class when element leaves viewport
                entry.target.classList.remove('in-view');
            }
        });
    }, observerOptions);
    
    // Select all elements that need scroll animations
    const animatedElements = document.querySelectorAll(`
        #partner-logos,
        #clients-logos,
        #courses-section p,
        #clients-section p,
        #testimonial-section p,
        .about-container,
        .card,
        .card-body,
        .card-body h3,
        .card-body p,
        #card-body,
        #pricing-card,
        .testimonial-card,
        .testimonial-name,
        .testimonial-name h5,
        .testimonial-name p,
        #carousel-container,
        #footer-content,
        #footer-section h1,
        #location h3,
        #location p
    `);
    
    // Observe each element
    animatedElements.forEach(element => {
        observer.observe(element);
    });
    
    // Add staggered animation delays for cards
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
    });
    
    // Add staggered animation delays for testimonial cards
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    testimonialCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.15}s`;
    });
    
});