document.addEventListener("DOMContentLoaded", function () {
  const observerOptions = {
    threshold: 0.08,
    rootMargin: "0px 0px -60px 0px",
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

  // Staggered delays for portfolio cards
  const portfolioItems = document.querySelectorAll(".portfolio-item");
  portfolioItems.forEach((item, index) => {
    item.style.transitionDelay = `${index * 0.08}s`;
  });

  // Staggered delays for portfolio content (h3, h4, p inside cards)
  const portfolioContent = document.querySelectorAll(".portfolio-content");
  portfolioContent.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.08}s`;
  });

  // Staggered delays for testimonial cards
  const testimonialCards = document.querySelectorAll(".testimonial-card");
  testimonialCards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.1}s`;
  });

  // Staggered delays for skill items
  const skillItems = document.querySelectorAll(".skill-item");
  skillItems.forEach((item, index) => {
    item.style.transitionDelay = `${index * 0.06}s`;
  });

  // Staggered delays for soft skill items
  const softSkillItems = document.querySelectorAll(".soft-skill-item");
  softSkillItems.forEach((item, index) => {
    item.style.transitionDelay = `${index * 0.06}s`;
  });

  // Staggered delays for stat items
  const statItems = document.querySelectorAll(".stat-item");
  statItems.forEach((item, index) => {
    item.style.transitionDelay = `${index * 0.1}s`;
  });

  // Staggered delays for social links
  const socialLinks = document.querySelectorAll(".social-link");
  socialLinks.forEach((link, index) => {
    link.style.transitionDelay = `${index * 0.08}s`;
  });
});
