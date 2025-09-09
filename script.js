// Toggle mobile menu
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', function() {
    navbar.classList.toggle('active');

    // Toggle icon between hamburger and X
    if (navbar.classList.contains('active')) {
        menuIcon.classList.remove('bx-menu');
        menuIcon.classList.add('bx-x');
    } else {
        menuIcon.classList.remove('bx-x');
        menuIcon.classList.add('bx-menu');
    }
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
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

// Theme toggle
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


//for validation in form
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Stop refresh

    // Values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    // Error spans
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const subjectError = document.getElementById("subjectError");
    const messageError = document.getElementById("messageError");

    // Reset errors
    nameError.textContent = "";
    emailError.textContent = "";
    subjectError.textContent = "";
    messageError.textContent = "";

    // Patterns
    const namePattern = /^[A-Za-z\s]+$/; // Only letters & spaces
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email regex

    let isValid = true;

    // Name validation
    if (name === "") {
        nameError.textContent = "Fill out this part.";
        isValid = false;
    } else if (!namePattern.test(name)) {
        nameError.textContent = "Name must contain only letters and spaces.";
        isValid = false;
    }

    // Email validation
    if (email === "") {
        emailError.textContent = "Fill out this part.";
        isValid = false;
    } else if (!emailPattern.test(email)) {
        emailError.textContent = "Enter a valid email address.";
        isValid = false;
    }

    // Subject validation
    if (subject === "") {
        subjectError.textContent = "Fill out this part.";
        isValid = false;
    }

    // Message validation
    if (message === "") {
        messageError.textContent = "Fill out this part.";
        isValid = false;
    }

    // If all valid → success
    if (isValid) {
        alert("Thank you! Your message has been sent.");
        document.getElementById("contactForm").reset();
    }
});
