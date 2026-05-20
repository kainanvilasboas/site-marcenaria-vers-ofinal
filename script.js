// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const mobileNav = document.getElementById('mobileNav');

if (menuToggle && mobileNav) {
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
}

// Contact Form Handling
const contactForm = document.getElementById('contactForm');

if (contactForm) {
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
}


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

// Add scroll effect to header and back to top button
const header = document.querySelector('.header');
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (header) {
        if (currentScroll > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }

    if (backToTop) {
        if (currentScroll > 400) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    }
});


function selecionarServico(servicoNome) {
    const contatoSection = document.getElementById('contato');
    if (contatoSection) {
        const headerOffset = 80;
        const elementPosition = contatoSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }

    const serviceSelect = document.getElementById('service');
    if (serviceSelect) {
        serviceSelect.value = servicoNome;
        const nameInput = document.getElementById('name');
        if (nameInput) {
            setTimeout(() => nameInput.focus(), 800);
        }
    }
}

// 1. & 4. Scroll Reveal & Animated Counter using Intersection Observer
document.addEventListener('DOMContentLoaded', () => {
    const revealElements = document.querySelectorAll('.reveal');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                
                // Se o elemento contiver um contador, inicia a animação
                const counters = entry.target.querySelectorAll('.counter');
                counters.forEach(counter => {
                    if (!counter.classList.contains('counted')) {
                        counter.classList.add('counted');
                        const target = +counter.getAttribute('data-count');
                        let count = 0;
                        const duration = 1500; // 1.5 segundos
                        const increment = target / (duration / 16);

                        const updateCount = () => {
                            count += increment;
                            if (count < target) {
                                counter.innerText = Math.ceil(count);
                                requestAnimationFrame(updateCount);
                            } else {
                                counter.innerText = target;
                            }
                        };
                        updateCount();
                    }
                });

                observer.unobserve(entry.target); // Anima apenas na primeira vez
            }
        });
    }, observerOptions);

    revealElements.forEach(el => observer.observe(el));
});

// Lightbox / Modal para imagens dos projetos
document.addEventListener('DOMContentLoaded', () => {
    const projectImages = document.querySelectorAll('.project-card .project-image');
    const lightbox = document.getElementById('lightboxModal');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxCaption = document.getElementById('lightboxCaption');
    const lightboxClose = document.querySelector('.lightbox-close');

    if (projectImages.length > 0 && lightbox && lightboxImg) {
        projectImages.forEach(imageContainer => {
            imageContainer.addEventListener('click', (e) => {
                e.stopPropagation(); // Evita propagação de eventos
                const img = imageContainer.querySelector('img');
                if (!img) return;

                const src = img.getAttribute('src');
                const alt = img.getAttribute('alt');
                
                // Pega a categoria e título do card para a legenda
                const card = imageContainer.closest('.project-card');
                const category = card.querySelector('.project-category')?.textContent || '';
                const title = card.querySelector('h3')?.textContent || '';
                
                lightboxImg.setAttribute('src', src);
                lightboxImg.setAttribute('alt', alt);
                
                if (category && title) {
                    lightboxCaption.innerHTML = `<span class="lightbox-category">${category}</span> &bull; <span class="lightbox-title">${title}</span>`;
                    lightboxCaption.style.display = 'block';
                } else if (title) {
                    lightboxCaption.innerHTML = `<span class="lightbox-title">${title}</span>`;
                    lightboxCaption.style.display = 'block';
                } else {
                    lightboxCaption.style.display = 'none';
                }
                
                lightbox.classList.add('active');
                document.body.style.overflow = 'hidden'; // Impede o scroll do body quando aberto
            });
        });

        // Fechar lightbox ao clicar no botão X
        if (lightboxClose) {
            lightboxClose.addEventListener('click', closeLightbox);
        }

        // Fechar ao clicar fora da imagem
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox || e.target.classList.contains('lightbox-content-container')) {
                closeLightbox();
            }
        });

        // Fechar ao pressionar ESC
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && lightbox.classList.contains('active')) {
                closeLightbox();
            }
        });

        function closeLightbox() {
            lightbox.classList.remove('active');
            document.body.style.overflow = ''; // Restaura o scroll
            // Limpa o src após a transição de fade-out
            setTimeout(() => {
                if (!lightbox.classList.contains('active')) {
                    lightboxImg.setAttribute('src', '');
                }
            }, 300);
        }
    }
});

