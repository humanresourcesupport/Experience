/**
 * hrsdesign - Master Logic v2.0
 * Features: Mobile Nav, FAQ Accordion, Scroll Interactivity, Form Validation
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. MOBILE MENU TOGGLE (01-05 Structure)
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('is-active');
        });
    }

    // 2. SEARCHABLE FAQ ACCORDION
    const faqToggles = document.querySelectorAll('.faq-toggle');

    faqToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const faqItem = toggle.parentElement;
            const isOpen = faqItem.classList.contains('active');

            // Close all other open FAQs for a clean UI
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
                item.querySelector('span').textContent = '+';
            });

            // Toggle current item
            if (!isOpen) {
                faqItem.classList.add('active');
                toggle.querySelector('span').textContent = '−';
            }
        });
    });

    // 3. PREMIUM SMOOTH SCROLLING
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                // Close mobile menu if open
                navLinks.classList.remove('active');
                
                window.scrollTo({
                    top: target.offsetTop - 80, // Offset for sticky navbar
                    behavior: 'smooth'
                });
            }
        });
    });

    // 4. MICRO-INTERACTION: NAVBAR SCROLL EFFECT
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.padding = '15px 5%';
            navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        } else {
            navbar.style.padding = '25px 5%';
            navbar.style.background = 'rgba(10, 10, 10, 0.85)';
        }
    });

    // 5. LEAD GENERATION FORM VALIDATION
    const contactForm = document.querySelector('.glass-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = contactForm.querySelector('input[type="text"]').value;
            const phone = contactForm.querySelector('input[type="tel"]').value;

            if (name && phone) {
                // Replace with actual lead handling for hrsdesign
                alert(`Thank you ${name}! We will contact you at ${phone} regarding your branding journey.`);
                contactForm.reset();
            } else {
                alert('Please fill in your name and contact number to proceed.');
            }
        });
    }
});
