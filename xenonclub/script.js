// Sticky navbar
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
});

// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
menuToggle.addEventListener('click', () => navLinks.classList.toggle('active'));

// Smooth scroll
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        navLinks.classList.remove('active');
        target.scrollIntoView({ behavior: 'smooth' });
    });
});
document.getElementById('scrollTeam').addEventListener('click', () => {
    document.getElementById('team').scrollIntoView({ behavior: 'smooth' });
});

// Theme toggle
const themeBtn = document.getElementById('themeToggle');
if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light');
    themeBtn.textContent = 'Dark Mode';
}
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('light');
    const isLight = document.body.classList.contains('light');
    themeBtn.textContent = isLight ? 'Dark Mode' : 'Light Mode';
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
});

// Fade-in animation
const fadeEls = document.querySelectorAll('.fade-in');
function fadeInOnScroll() {
    const triggerBottom = window.innerHeight * 0.85;
    fadeEls.forEach(el => {
        const rect = el.getBoundingClientRect().top;
        if (rect < triggerBottom) el.classList.add('visible');
    });
}
window.addEventListener('scroll', fadeInOnScroll);
fadeInOnScroll();
