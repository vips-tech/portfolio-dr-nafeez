document.addEventListener('DOMContentLoaded', function() {
    // Animate header elements
    setTimeout(() => {
        document.querySelector('.profile-photo').classList.add('animate-in');
        document.querySelector('header h1').classList.add('animate-in');
        const designation = document.querySelector('.hero-designation');
        if (designation) designation.classList.add('animate-in');
        const quickLinks = document.querySelector('.hero-quick-links');
        if (quickLinks) quickLinks.classList.add('animate-in');
        document.querySelector('.contact-info').classList.add('animate-in');
    }, 500);
    
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all cards and section titles
    document.querySelectorAll('.card, .section-title h2, .section-intro').forEach(el => {
        observer.observe(el);
    });
    
    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});