
/* JavaScript for Slider Functionality */
let currentSlide = 0;
const slides = document.querySelectorAll('.slides img');
function showSlide(index) {
 slides.forEach((slide, i) => {
 slide.style.display = (i === index) ? 'block' : 'none';
 });
}
function nextSlide() {
 currentSlide = (currentSlide + 1) % slides.length;
 showSlide(currentSlide);
}
// Show the first slide initially
showSlide(currentSlide);
// Change slide every 5 seconds
setInterval(nextSlide, 5000);