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
        initModals();
    } catch (error) {
        console.error('YellowTechLabs: Error initializing app', error);
    }
}

/**
 * Mobile Menu Toggle
 */
function initMobileMenu() {
    const toggleBtn = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (toggleBtn && navLinks) {
        toggleBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = toggleBtn.querySelector('i');
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

        // Close menu when clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                const icon = toggleBtn.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            });
        });
    }
}

/**
 * Smooth Scrolling for Anchor Links
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
            }
        });
    });
}

/**
 * Initializes modal functionality for Terms and Privacy.
 */
function initModals() {
    const modalOverlay = document.getElementById('modalOverlay');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    const closeBtn = document.querySelector('.modal-close');

    if (!modalOverlay) return;

    // Content for modals
    const modalContent = {
        'terms': {
            title: 'Terms and Conditions',
            body: `
                <p>Welcome to YellowTechLabs. By using our website and services, you agree to the following terms:</p>
                <ul>
                    <li><strong>Services:</strong> We provide IT solutions, AI automation, and digital marketing services as described on our website.</li>
                    <li><strong>Usage:</strong> You agree to use our services for lawful purposes only.</li>
                    <li><strong>Intellectual Property:</strong> All content, code, and designs produced by YellowTechLabs remain our property unless otherwise agreed.</li>
                    <li><strong>Liability:</strong> We are not liable for any indirect or consequential damages arising from the use of our services.</li>
                    <li><strong>Updates:</strong> These terms may be updated at any time. Continued use of our services constitutes acceptance of the new terms.</li>
                </ul>
                <p>For full details, please contact our legal team.</p>
            `
        },
        'privacy': {
            title: 'Privacy Policy',
            body: `
                <p>Your privacy is important to us. This policy outlines how we handle your data:</p>
                <ul>
                    <li><strong>Data Collection:</strong> We collect information you provide via contact forms (Name, Email, Phone) to respond to inquiries.</li>
                    <li><strong>Usage:</strong> We use your data solely for communication and service delivery. We do not sell your data to third parties.</li>
                    <li><strong>Cookies:</strong> Our website may use cookies to enhance user experience and analyze traffic.</li>
                    <li><strong>Security:</strong> We implement industry-standard security measures to protect your information.</li>
                    <li><strong>Rights:</strong> You have the right to request access to or deletion of your personal data.</li>
                </ul>
                <p>For questions, contact info@yellowtechlabs.com.</p>
            `
        }
    };

    // Open Modal Triggers
    document.querySelectorAll('.open-modal').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const type = link.getAttribute('data-modal');
            if (modalContent[type]) {
                modalTitle.innerHTML = modalContent[type].title;
                modalBody.innerHTML = modalContent[type].body;
                modalOverlay.classList.add('active');
                document.body.style.overflow = 'hidden'; // Prevent background scrolling
            }
        });
    });

    // Close Modal
    function closeModal() {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }

    // Close on click outside
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
            closeModal();
        }
    });
}
