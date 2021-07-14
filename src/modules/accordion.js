/* eslint-disable strict */
'use strict';

const accordion = () => {
    const titles = document.querySelectorAll(".accordeon .title");
    titles.forEach(title => title.addEventListener("click", () => {

        if (title.parentNode.classList.contains("active")) {
            title.parentNode.classList.toggle("active");
            document.querySelector('.element-content').style.display = 'none';
        } else {
            titles.forEach(title => title.parentNode.classList.remove("active"));
            title.parentNode.classList.add("active");
        }

    }));
};

export default accordion;
