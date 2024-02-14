document.addEventListener("DOMContentLoaded", function() {
    var slides = document.querySelectorAll(".slide");

    slides.forEach(function(slide) {
        slide.addEventListener("mouseover", function() {
            slide.classList.add("hovered");
        });

        slide.addEventListener("mouseout", function() {
            slide.classList.remove("hovered");
        });
    });

    var currentSlide = 0;
    var slideInterval = setInterval(nextSlide, 3000); // Cambia de slide cada 3 segundos

    function nextSlide() {
        slides[currentSlide].classList.remove("active");
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add("active");
    }
});
