document.addEventListener("DOMContentLoaded", function () {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
      } else {
        entry.target.classList.remove("in-view");
      }
    });
  }, observerOptions);

  // Select all elements that need scroll animations
  const animatedElements = document.querySelectorAll(`
    .welcome,
.home-text h1,
.home-text p,
.buttons,
.home-image img,
.about-section-begin,
.about-section h2,
.about-section-text,
.about-section-image img,
.service-section-begin,
.service-section h2,
.service-card,
.service-card h3,
.service-card p,
.service-section-image img,
.portfolio-section-begin,
.portfolio-section h2,
.portfolio-section-text,
.portfolio-item,
.portfolio-content h3,
.portfolio-content h4,
.portfolio-content p,
.tag,
#skills,
.skills-section-begin,
.skills-section h2,
.skill-category h3,
.skill-item,
.skill-info h4,
.skill-info p,
.soft-skill-item,
.skill-bullet,
.soft-skill-item p,
#languages,
.languages-section-begin,
.languages-section h2,
.language-item,
.language-header h3,
.proficiency-badge,
.proficiency-fill,
.language-note p,
.stats-container,
.stat-item,
.stat-item h4,
.stat-item p,
.social-links,
.social-link,
.testimonial-section h1,
.testimonial-section p,
.testimonial-card,
.contact-section-begin,
.contact-section h2,
.contact-section-text,
.contact-item,
.contact-item h4,
.contact-item p,
.form-group label,
.form-group input,
.form-group textarea,
#submit-btn,
.footer-content p
    `);

  // Observe each element
  animatedElements.forEach((element) => {
    observer.observe(element);
  });

  // Add staggered animation delays for cards
  const cards = document.querySelectorAll(".portfolio-content");
  cards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.1}s`;
  });

  // Add staggered animation delays for testimonial cards
  const testimonialCards = document.querySelectorAll(".testimonial-card");
  testimonialCards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.15}s`;
  });
});
