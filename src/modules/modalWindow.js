/* eslint-disable strict */
'use strict';

//Scroll Block
const disableScroll = () => {
    document.querySelector("body").style.overflow = 'hidden';
};

const enableScroll = () => {
    document.querySelector("body").style.overflow = 'visible';
};

const modalWindow = () => {
    const modal = document.querySelector('.modal-callback');
    const modalClose = document.querySelector('.modal-close');
    const modalOverlay = document.querySelector('.modal-overlay');
    const upBtn = document.querySelector('.up');

    window.addEventListener('click', e => {
        e.preventDefault();
        let target = e.target;
        if (target.matches('.callback-btn') || target.matches('.button-services')) {
            modal.style.display = 'block';
            modalOverlay.style.display = 'block';
            upBtn.style.display = 'none';
            disableScroll();
        } else {
            target = target.closest('.modal-callback');
            if (!target) {
                modal.style.display = 'none';
                modalOverlay.style.display = 'none';
                enableScroll();
            }
        }
    });

    modalClose.addEventListener('click', () => {
        modal.style.display = 'none';
        modalOverlay.style.display = 'none';
        enableScroll();
    });
};

export default modalWindow;
