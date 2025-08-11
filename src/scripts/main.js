// Mobile menu toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Countdown Timer
function countdown() {
    // Set the date for the seasonal drop, e.g., December 1, 2025
    const countToDate = new Date("2025-12-01T00:00:00").getTime();
    const now = new Date().getTime();
    const difference = countToDate - now;

    if (document.getElementById('days')) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        document.getElementById('days').innerText = String(days).padStart(2, '0');
        document.getElementById('hours').innerText = String(hours).padStart(2, '0');
        document.getElementById('minutes').innerText = String(minutes).padStart(2, '0');
        document.getElementById('seconds').innerText = String(seconds).padStart(2, '0');

        if (difference < 0) {
            clearInterval(interval);
            document.getElementById('countdown').innerHTML = "<div class='text-2xl font-bold'>The Drop is Here!</div>";
        }
    }
}

let interval = setInterval(countdown, 1000);

// Customer Photo Carousel
document.addEventListener('DOMContentLoaded', function () {
    const track = document.querySelector('.carousel-track');
    if (track) {
        const items = Array.from(track.children);
        const nextButton = document.querySelector('.carousel-button.next');
        const prevButton = document.querySelector('.carousel-button.prev');
        const itemWidth = items[0].getBoundingClientRect().width;
        let currentIndex = 0;

        const updateCarousel = () => {
            track.style.transform = `translateX(-${currentIndex * 100}%)`;
        };

        nextButton.addEventListener('click', e => {
            currentIndex = (currentIndex + 1) % items.length;
            updateCarousel();
        });

        prevButton.addEventListener('click', e => {
            currentIndex = (currentIndex - 1 + items.length) % items.length;
            updateCarousel();
        });

        // Optional: Auto-play
        // setInterval(() => {
        //     currentIndex = (currentIndex + 1) % items.length;
        //     updateCarousel();
        // }, 5000);
    }
});
