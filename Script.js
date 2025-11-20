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
