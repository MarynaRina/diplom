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
    const modal = document.querySelector('.modal-callback'),
        modalClose = document.querySelector('.modal-close'),
        modalOverlay = document.querySelector('.modal-overlay'),
        upBtn = document.querySelector('.up');

    window.addEventListener('click', e => {
        e.preventDefault();
        let target = e.target;
        if (target.matches('.callback-btn') || target.matches('.button-services') || target.matches('.absolute')) {
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
