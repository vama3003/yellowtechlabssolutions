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
    // Content for modals
    const modalContent = {
        'terms': {
            title: 'Terms & Conditions',
            body: `
                <p>By accessing or using www.yellowtechlabs.in, you agree to comply with and be bound by these Terms & Conditions.</p>
                
                <h3>1. Use of Website</h3>
                <ul>
                    <li>You agree to use the website for lawful purposes only</li>
                    <li>You must not misuse, hack, or disrupt website functionality</li>
                    <li>Unauthorized use may result in legal action</li>
                </ul>

                <h3>2. Services Disclaimer</h3>
                <ul>
                    <li>All services are provided on a best-effort basis</li>
                    <li>Project timelines, results, or outcomes may vary based on scope, client inputs, and external dependencies</li>
                    <li>We do not guarantee specific business results (sales, revenue, rankings, profits)</li>
                </ul>

                <h3>3. Intellectual Property</h3>
                <ul>
                    <li>All content (text, graphics, logos, code, designs) is the property of YellowTechLabs Solutions LLP</li>
                    <li>You may not copy, reproduce, or distribute content without written permission</li>
                </ul>

                <h3>4. Client Responsibilities</h3>
                <p>Clients are responsible for:</p>
                <ul>
                    <li>Providing accurate requirements and content</li>
                    <li>Timely approvals and feedback</li>
                    <li>Legal compliance of their own data, content, and business operations</li>
                </ul>

                <h3>5. Limitation of Liability</h3>
                <p>YellowTechLabs Solutions LLP shall not be liable for:</p>
                <ul>
                    <li>Any direct, indirect, incidental, or consequential damages</li>
                    <li>Loss of data, revenue, or business opportunities</li>
                    <li>Third-party service failures (hosting, APIs, payment gateways, cloud providers)</li>
                </ul>

                <h3>6. Third-Party Services</h3>
                <p>We may integrate third-party tools, APIs, or platforms. We are not responsible for outages, changes, or failures of third-party services.</p>

                <h3>7. Termination</h3>
                <p>We reserve the right to suspend or terminate access to our services or website without notice if:</p>
                <ul>
                    <li>Terms are violated</li>
                    <li>Illegal activity is detected</li>
                    <li>Misuse or abuse occurs</li>
                </ul>

                <h3>8. Governing Law</h3>
                <p>These Terms & Conditions are governed by the laws of India. Any disputes shall be subject to the jurisdiction of courts in India.</p>

                <h3>9. Changes to Terms</h3>
                <p>We may update these Terms at any time. Continued use of the website implies acceptance of updated terms.</p>
            `
        },
        'privacy': {
            title: 'Privacy Policy',
            body: `
                <p>YellowTechLabs Solutions LLP (“we”, “our”, “us”) respects your privacy and is committed to protecting the personal information of users who visit our website www.yellowtechlabs.in or use our services.</p>

                <h3>1. Information We Collect</h3>
                <p>We may collect the following types of information:</p>
                <p><strong>a) Personal Information</strong></p>
                <ul>
                    <li>Name</li>
                    <li>Email address</li>
                    <li>Phone number</li>
                    <li>Company name</li>
                    <li>Project or service-related details</li>
                </ul>
                <p><strong>b) Technical Information</strong></p>
                <ul>
                    <li>IP address</li>
                    <li>Browser type</li>
                    <li>Device information</li>
                    <li>Pages visited and time spent</li>
                </ul>

                <h3>2. How We Use Your Information</h3>
                <p>We use your information to:</p>
                <ul>
                    <li>Provide and improve our services</li>
                    <li>Communicate about inquiries, projects, or support</li>
                    <li>Send updates, proposals, or marketing communication (only if opted in)</li>
                    <li>Improve website performance and user experience</li>
                    <li>Comply with legal obligations</li>
                </ul>

                <h3>3. Data Sharing & Disclosure</h3>
                <p>We do not sell, rent, or trade your personal information. We may share data only:</p>
                <ul>
                    <li>With trusted service providers (hosting, analytics, payment gateways)</li>
                    <li>If required by law, court order, or government authority</li>
                    <li>To protect our legal rights, company assets, or users</li>
                </ul>

                <h3>4. Data Security</h3>
                <p>We implement industry-standard security measures to protect your data. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.</p>

                <h3>5. Cookies Policy</h3>
                <p>Our website may use cookies to:</p>
                <ul>
                    <li>Analyze traffic</li>
                    <li>Improve website functionality</li>
                    <li>Personalize user experience</li>
                </ul>
                <p>You may disable cookies via your browser settings.</p>

                <h3>6. Third-Party Links</h3>
                <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of external sites.</p>

                <h3>7. Your Rights</h3>
                <p>You have the right to:</p>
                <ul>
                    <li>Request access to your data</li>
                    <li>Request correction or deletion</li>
                    <li>Withdraw consent at any time</li>
                </ul>
                <p>Email us at info@yellowtechlabs.in for requests.</p>

                <h3>8. Policy Updates</h3>
                <p>We may update this Privacy Policy at any time. Changes will be posted on this page with an updated date.</p>

                <h3>9. Contact Information</h3>
                <p><strong>YellowTechLabs Solutions LLP</strong><br>
                📧 Email: info@yellowtechlabs.in<br>
                🌐 Website: www.yellowtechlabssolutions.com</p>
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
