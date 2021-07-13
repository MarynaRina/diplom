/* eslint-disable strict */
'use strict';

const scrollUp = () => {
    const upBtn = document.querySelector('.up'),
        rootElement = document.documentElement;
    upBtn.style.display = "none";
    window.addEventListener('scroll', () => {
        if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
            upBtn.style.display = "block";
        } else {
            upBtn.style.display = "none";
        }
    });

    function scrollToTop() {
        rootElement.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    upBtn.addEventListener("click", scrollToTop);

};

export default scrollUp;
