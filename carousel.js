let currentIndex = 0;
const carousel = document.querySelector('.carousel');
const images = document.querySelectorAll('.carousel-image');
const totalImages = images.length;

function updateCarousel() {
    const offset = -currentIndex * 100; // Calculate offset for transform
    carousel.style.transform = `translateX(${offset}%)`;
}

setInterval(() => {
    currentIndex = (currentIndex + 1) % totalImages; // Increment index cyclically
    updateCarousel();
}, 300); // Change image every second
