document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelector('.carousel-slides');
  const images = document.querySelectorAll('.carousel-slides img');
  const prevBtn = document.querySelector('.carousel-prev');
  const nextBtn = document.querySelector('.carousel-next');

  let currentIndex = 0; 
  const totalImages = images.length; 

  function updateCarousel() {
    const offset = -currentIndex * 100; 
    slides.style.transform = `translateX(${offset}%)`;
  }

  prevBtn.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = totalImages - 1; 
    }
    updateCarousel();
  });


  nextBtn.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >= totalImages) {
      currentIndex = 0; 
    }
    updateCarousel();
  });


  updateCarousel();
});