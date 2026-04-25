// Simple Scroll Effect for Navbar
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('nav-scrolled');
    } else {
        nav.classList.remove('nav-scrolled');
    }
});

// Typewriter Effect (Optional)
const text = "I build digital solutions.";
let index = 0;
function type() {
    if (index < text.length) {
        document.querySelector('.hero p').innerHTML += text.charAt(index);
        index++;
        setTimeout(type, 100);
    }
}
window.onload = type;