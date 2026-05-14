// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const mobileNav = document.getElementById('mobileNav');

menuToggle.addEventListener('click', () => {
    mobileNav.classList.toggle('active');
});

// Close mobile menu when clicking on a link
const mobileNavLinks = mobileNav.querySelectorAll('a');
mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileNav.classList.remove('active');
    });
});

// Contact Form Handling
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        message: document.getElementById('message').value
    };

    // Show success message
    alert('Obrigado pelo contato! Em breve retornaremos sua mensagem.');

    // Reset form
    contactForm.reset();
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href*="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Se for um link apenas com ID (#...) ou um link para a mesma página (index.html#...)
        const isInternal = href.startsWith('#');
        const isSamePage = href.startsWith('index.html#') && (window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/'));
        const isProjectsSamePage = href.startsWith('projetos.html#') && window.location.pathname.endsWith('projetos.html');

        if (isInternal || isSamePage || isProjectsSamePage) {
            const targetId = href.split('#')[1];
            const target = document.getElementById(targetId);
            
            if (target) {
                e.preventDefault();
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Add scroll effect to header
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
    }

    lastScroll = currentScroll;
});
