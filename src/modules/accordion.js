/* eslint-disable strict */
'use strict';

const accordion = () => {
    const accordeon = document.querySelector('.accordeon'),
        titles = accordeon.querySelectorAll('.title'),
        elemContent = accordeon.querySelectorAll('.element-content');

    titles.forEach(title => {
        title.addEventListener("click", e => {
            elemContent.forEach(elem => {
                if (e.target.nextElementSibling !== elem &&
                    elem.classList.contains("active")) {
                    elem.classList.remove("active");
                    titles.forEach(title => title.classList.remove("active"));
                }
            });
            const panel = title.nextElementSibling;
            panel.classList.toggle("active");
            title.classList.toggle("active");
        });
    });

    window.onclick = e => {
        if (!e.target.matches(".element-title")) {
            titles.forEach(title => title.classList.remove("active"));
            elemContent.forEach(elem => elem.classList.remove("active"));
        }
    };
};

export default accordion;
