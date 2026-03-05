document.addEventListener('DOMContentLoaded', () => {
    
    // --- Hero Parallax Effect ---
    const heroSection = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-centered-content');
    const videoBg = document.querySelector('.video-background');

    if (heroSection && heroContent && videoBg) {
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            const rate = scrolled * 0.5;
            
            // Only animate if hero is in view (optimization)
            if (scrolled < heroSection.offsetHeight) {
                // Video background moves slower (depth effect)
                videoBg.style.transform = `translate3d(0, ${rate * 0.2}px, 0)`;
                // Content moves slightly faster or normal speed
                heroContent.style.transform = `translate3d(0, ${rate * 0.1}px, 0)`;
            }
        });
    }

    // --- Diferenciais (Sticky Scroll Reveal) ---
    // This will handle the "lighting up" of items as they scroll into view
    const diferencialesItems = document.querySelectorAll('.diferencial-item');
    
    if (diferencialesItems.length > 0) {
        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -20% 0px', // Activate when item is in the middle 60% of screen
            threshold: 0.5
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                } else {
                    entry.target.classList.remove('active');
                }
            });
        }, observerOptions);

        diferencialesItems.forEach(item => {
            observer.observe(item);
        });
    }

    // --- FAQ Accordion ---
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            // Close other items (optional - accordion style)
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });

            // Toggle current item
            item.classList.toggle('active');
        });
    });

    // --- Floating WhatsApp Button Visibility ---
    const whatsappBtn = document.querySelector('.whatsapp-float');
    if (whatsappBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) { // Show after scrolling down a bit
                whatsappBtn.classList.add('visible');
            } else {
                whatsappBtn.classList.remove('visible');
            }
        });
    }

});
