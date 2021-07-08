let carousel = document.getElementById('comments');
let slides = carousel.querySelectorAll('.carousel-coments');
let totalSlides = slides.length;
let currentSlide = 0;
let interval = carousel.getAttribute('data-interval') ? parseInt(carousel.getAttribute('data-interval')) : 4000;

function carouselInit() {
  slides.forEach((slide) => {
    slide.style.display = 'none';
  });
  slides[currentSlide].style.display = 'block';
}

function prev() {
  currentSlide = currentSlide - 1 < 0 ? totalSlides - 1 : currentSlide - 1;
  carouselInit();
}

function next() {
  currentSlide = currentSlide + 1 >= totalSlides ? 0 : currentSlide + 1;
  carouselInit();
}

setInterval(() => {
  next();
}, interval);

carouselInit();
