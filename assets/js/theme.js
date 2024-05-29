// toggle Button

document.getElementById('toggleButton').addEventListener('click', function() {
    const navbarNav = document.getElementById('navbarNav');
    const expanded = this.getAttribute('aria-expanded') === 'true' || false;
    this.setAttribute('aria-expanded', !expanded);
    navbarNav.style.display = expanded ? 'none' : 'flex';
});


// Feature Slides

let currentSlide = 0;
    const slides = document.querySelectorAll('.carousel-item');
    
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }
    
    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    function autoSlide() {
        setInterval(() => {
            nextSlide();
        }, 4000); // 
    }

    window.onload = autoSlide;
