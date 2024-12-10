let currentSlide = 0; // Track the current slide index

// Function to show a specific slide
function showSlide(index) {
    const slides = document.querySelectorAll(".slide");
    const totalSlides = slides.length;

    // Ensure the index loops back correctly
    currentSlide = (index + totalSlides) % totalSlides;

    // Move the slides container to display the active slide
    const slidesContainer = document.querySelector(".slides");
    slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Event listeners for navigation buttons
document.querySelector(".next").addEventListener("click", () => {
    showSlide(currentSlide + 1); // Move to the next slide
});

document.querySelector(".prev").addEventListener("click", () => {
    showSlide(currentSlide - 1); // Move to the previous slide
});

// Auto-rotate slides every 5 seconds
setInterval(() => {
    showSlide(currentSlide + 1);
}, 10000);

// Initialize the carousel
document.addEventListener("DOMContentLoaded", () => {
    showSlide(currentSlide); // Show the first slide
});
