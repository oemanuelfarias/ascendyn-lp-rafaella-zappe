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

    // --- Form & Phone Mask ---
    function initPhoneMask() {
        document.querySelectorAll('input[type="tel"]').forEach(input => {
            input.addEventListener('input', (e) => {
                let x = e.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
                e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
            });
        });
    }

    initPhoneMask();

    const form = document.querySelector('form[data-form]');
    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const btn = form.querySelector('[type="submit"]');
            const feedback = form.querySelector('.form-feedback');
            
            // Validacao
            let valid = true;
            form.querySelectorAll('[required]').forEach(field => {
                field.classList.remove('error');
                if (!field.value.trim()) {
                    field.classList.add('error');
                    valid = false;
                }
                if (field.type === 'email' && field.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value)) {
                    field.classList.add('error');
                    valid = false;
                }
                if (field.type === 'tel') {
                    if (field.value.length < 14) { // Pelo menos (11) 9999-9999
                        field.classList.add('error');
                        valid = false;
                    }
                }
            });

            if (!valid) {
                if(feedback) {
                    feedback.style.color = 'var(--accent-color, #d32f2f)';
                    feedback.style.marginBottom = '1rem';
                    feedback.style.textAlign = 'center';
                    feedback.style.fontSize = '0.9rem';
                    feedback.textContent = 'Preencha todos os campos corretamente.';
                    setTimeout(() => { feedback.textContent = ''; }, 5000);
                }
                return;
            }

            // Envia o form com o formato atual (DDD) 99999-9999 (sem mexer com _iti)

            const originalText = btn.textContent;
            btn.disabled = true;
            btn.textContent = 'Enviando...';

            try {
                const actionUrl = form.getAttribute('action') || window.location.pathname;
                const res = await fetch(actionUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                    body: new URLSearchParams(new FormData(form)).toString()
                });

                if (res.ok) {
                    // Meta Pixel / GTM Tracking
                    if (typeof fbq === 'function') fbq('track', 'Lead');
                    if (typeof dataLayer !== 'undefined') dataLayer.push({ event: 'generate_lead', form_name: form.getAttribute('name'), method: 'netlify_form' });

                    // Oculta o form e mostra container de sucesso (que tem o botao do WhatsApp)
                    form.style.display = 'none';
                    const successContainer = document.querySelector('.form-success-container');
                    if(successContainer) {
                        successContainer.style.display = 'block';
                        // Smooth scroll to container to ensure user sees it
                        successContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }
                } else {
                    throw new Error('Erro na resposta do servidor');
                }
            } catch (err) {
                if(feedback) {
                    feedback.style.color = 'var(--accent-color, #d32f2f)';
                    feedback.style.marginBottom = '1rem';
                    feedback.style.textAlign = 'center';
                    feedback.style.fontSize = '0.9rem';
                    feedback.textContent = 'Erro ao enviar. Tente novamente.';
                    setTimeout(() => { feedback.textContent = ''; }, 5000);
                }
            } finally {
                btn.disabled = false;
                btn.textContent = originalText;
            }
        });
    }

    // --- Tracking de Cliques no WhatsApp ---
    document.querySelectorAll('a').forEach(btn => {
        const href = btn.getAttribute('href') || '';
        const text = (btn.textContent || '').toLowerCase();
        const ariaLabel = (btn.getAttribute('aria-label') || '').toLowerCase();
        
        if (href.includes('wa.me') || href.includes('api.whatsapp.com') || text.includes('whatsapp') || ariaLabel.includes('whatsapp')) {
            btn.addEventListener('click', () => {
                if (typeof dataLayer !== 'undefined') {
                    dataLayer.push({ 
                        event: 'whatsapp_click', 
                        click_url: href 
                    });
                }
            });
        }
    });

});
