/* eslint-disable strict */
'use strict';

const topSlider = () => {
    let slideIndex = 0;
    const slides = document.querySelectorAll(".item");

    const showSlides = () => {
        slides.forEach(slide => slide.style.display = "none");
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 3000);
    };
    showSlides();
};

export default topSlider;
