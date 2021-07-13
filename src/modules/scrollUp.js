/* eslint-disable strict */
'use strict';

const scrollUp = () => {
    const upBtn = document.querySelector('.up');
    upBtn.addEventListener('click', () => {
        const scrollToTop = window.setInterval(() => {
            const pos = window.pageYOffset;
            if (pos > 0) {
                window.scrollTo(0, pos - 20);
            } else {
                window.clearInterval(scrollToTop);
            }
        }, 2);
    });
};

export default scrollUp;
