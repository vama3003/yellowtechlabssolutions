
/**
 * YellowTechLabs - Main JavaScript
 * Handles interactions and dynamic behavior.
 */

document.addEventListener('DOMContentLoaded', () => {
    initApp();
});

function initApp() {
    console.log('YellowTechLabs: App Initialized');

    try {
        initMobileMenu();
        initSmoothScrolling();
        // initContactForm(); // Disabled in favor of inline script in contact.html
    } catch (error) {
        console.error('YellowTechLabs: Error initializing app', error);
    }
}

/**
 * Initializes the mobile menu toggle functionality.
 */
function initMobileMenu() {
    const toggleButton = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (!toggleButton || !navLinks) {
        console.warn('YellowTechLabs: Mobile menu elements not found');
        return;
    }

    toggleButton.addEventListener('click', () => {
        const isExpanded = toggleButton.getAttribute('aria-expanded') === 'true';
        toggleButton.setAttribute('aria-expanded', !isExpanded);
        navLinks.classList.toggle('active');

        // Toggle icon
        const icon = toggleButton.querySelector('i');
        if (icon) {
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        }
    });

    // Close menu when clicking outside
    document.addEventListener('click', (event) => {
        if (!toggleButton.contains(event.target) && !navLinks.contains(event.target) && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            toggleButton.setAttribute('aria-expanded', 'false');
            const icon = toggleButton.querySelector('i');
            if (icon) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        }
    });
}

/**
 * Initializes smooth scrolling for anchor links.
 */
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                const navLinks = document.querySelector('.nav-links');
                const toggleButton = document.querySelector('.mobile-menu-toggle');
                if (navLinks && navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    if (toggleButton) {
                        toggleButton.setAttribute('aria-expanded', 'false');
                        const icon = toggleButton.querySelector('i');
                        if (icon) {
                            icon.classList.remove('fa-times');
                            icon.classList.add('fa-bars');
                        }
                    }
                }
            }
        });
    });
}

/**
 * Initializes contact form submission.
 * Handles Email (FormSubmit) and WhatsApp.
 * @deprecated Logic moved to contact.html inline script
 */
/*
function initContactForm() {
    const form = document.getElementById('contactForm');
    const successMsg = document.getElementById('successMessage');

    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        const contactMethod = data.contact_method; // 'email' or 'whatsapp'

        if (contactMethod === 'whatsapp') {
            // WhatsApp Logic
            // Using the owner's number: 8866360950
            const targetNumber = '8866360950';

            let message = `*New Inquiry from Website*\n\n`;
            message += `*Name:* ${data.name}\n`;
            message += `*Email:* ${data.email}\n`;
            message += `*Phone:* ${data.phone || 'N/A'}\n`;
            message += `*Company:* ${data.company || 'N/A'}\n`;
            message += `*Service:* ${data.service}\n`;
            message += `*Budget:* ${data.budget}\n`;
            message += `*Message:* ${data.message}\n`;

            const whatsappUrl = `https://wa.me/${targetNumber}?text=${encodeURIComponent(message)}`;

            window.open(whatsappUrl, '_blank');

            // Show success message locally for WhatsApp
            form.style.display = 'none';
            if (successMsg) {
                successMsg.style.display = 'block';
                successMsg.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }

        } else {
            // Email Logic (Standard Form Submission)
            // We do NOT preventDefault() here, allowing the form to submit to formsubmit.co naturally.
            // This avoids CORS and Timeout issues with the AJAX API.
            form.submit();
        }
    });
}
*/
