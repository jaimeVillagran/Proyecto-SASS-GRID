// Funcionalidad del slider
const slides = document.querySelectorAll('.slider__slide');
let currentSlide = 0;
let slideInterval;

function changeSlide() {
	slides[currentSlide].classList.remove('slider__slide-active');
	currentSlide = (currentSlide + 1) % slides.length;
	slides[currentSlide].classList.add('slider__slide-active');
}

function initSlider() {
	stopSlider();
	if (slides.length > 0) {
		slides[currentSlide].classList.add('slider__slide-active');
		slideInterval = setInterval(changeSlide, 3000);
	} else {
		console.error('No se encontraron diapositivas para inicializar el slider.');
	}
}

function stopSlider() {
	if (slideInterval) {
		clearInterval(slideInterval);
	}
}

function init() {
	initSlider();
	initMenu();
}

window.addEventListener('blur', stopSlider);

window.addEventListener('focus', initSlider);

document.addEventListener('DOMContentLoaded', init);

const menuToggle = document.getElementById('menu-toggle');
const mainNav = document.getElementById('main-nav');

function toggleMenu() {
	mainNav.classList.toggle('active');
}

function initMenu() {
	menuToggle.addEventListener('click', toggleMenu);
}
