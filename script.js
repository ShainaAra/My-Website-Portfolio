// Toggle mobile menu
document.getElementById('menu-icon').addEventListener('click', function() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
    
    // Change menu icon to close icon when active
    if (navbar.classList.contains('active')) {
        this.classList.remove('bx-menu');
        this.classList.add('bx-x');
    } else {
        this.classList.remove('bx-x');
        this.classList.add('bx-menu');
    }
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        const navbar = document.querySelector('.navbar');
        const menuIcon = document.getElementById('menu-icon');
        
        navbar.classList.remove('active');
        menuIcon.classList.remove('bx-x');
        menuIcon.classList.add('bx-menu');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    });
});

// Contact button functionality
document.querySelector('.gradient-btn').addEventListener('click', function() {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
        window.scrollTo({
            top: contactSection.offsetTop - 100,
            behavior: 'smooth'
        });
    } else {
        alert('Contact section is not available yet!');
    }
});

// Add scroll effect to header
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(0, 0, 0, 0.9)';
        header.style.padding = '2rem 15%';
    } else {
        header.style.background = 'rgba(0, 0, 0, 0.3)';
        header.style.padding = '4rem 15%';
    }
});

// Animation on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.home-content, .home-img, .about-img, .about-content');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = 1;
            element.style.transform = 'translateY(0)';
        }
    });
}

// Initialize elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.home-content, .home-img, .about-img, .about-content');
    
    elements.forEach(element => {
        element.style.opacity = 0;
        element.style.transform = 'translateY(50px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    // Trigger once on load
    animateOnScroll();
});


const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;
const icon = toggleBtn.querySelector('i');

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('light-theme');

  if(body.classList.contains('light-theme')){
    icon.classList.replace('bx-moon', 'bx-sun');
  } else {
    icon.classList.replace('bx-sun', 'bx-moon');
  }
});

