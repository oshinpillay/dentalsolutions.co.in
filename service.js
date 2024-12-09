let currentIndex = 0;
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

// This function moves the slider to the correct slide
function moveSlider(index) {
    currentIndex = index;
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Example: Auto slide every 3 seconds
setInterval(() => {
    currentIndex = (currentIndex + 1) % totalSlides;
    moveSlider(currentIndex);
}, 3000);

// Optional: Manual control with buttons (Next and Previous)
document.querySelector('.next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    moveSlider(currentIndex);
});

document.querySelector('.prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    moveSlider(currentIndex);
});
