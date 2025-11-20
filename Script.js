// -----------------------------
// MENU STICKY
// -----------------------------
const header = document.querySelector('header');
const stickyOffset = header.offsetTop;

window.addEventListener('scroll', () => {
    if(window.pageYOffset > stickyOffset){
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});

// -----------------------------
// CONFIRMATION FORMULAIRE
// -----------------------------
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Empêche l'envoi réel
    alert('Merci pour votre message ! Nous vous répondrons rapidement.');
    form.reset(); // Réinitialise le formulaire
});

// -----------------------------
// ANIMATION BOUTON ACCUEIL
// -----------------------------
const accueilButton = document.querySelector('#accueil button');

accueilButton.addEventListener('mouseenter', () => {
    accueilButton.style.transform = 'scale(1.1)';
    accueilButton.style.transition = 'transform 0.3s';
});

accueilButton.addEventListener('mouseleave', () => {
    accueilButton.style.transform = 'scale(1)';
});
// -----------------------------
// SLIDER AUTOMATIQUE
// -----------------------------
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if(i === index) slide.classList.add('active');
    });
}

// Changer de slide toutes les 4 secondes
setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}, 4000);
// -----------------------------
// ANIMATIONS AU SCROLL
// -----------------------------
const sections = document.querySelectorAll('section');

function revealOnScroll() {
    const triggerBottom = window.innerHeight * 0.85;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if(sectionTop < triggerBottom){
            section.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);

// Exécuter une première fois au chargement
revealOnScroll();