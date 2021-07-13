/* eslint-disable strict */
'use strict';

//Scroll Block

const disableScroll = () => {
    const widthScroll = window.innerWidth - document.body.offsetWidth;
    document.body.dbScrollY = window.scrollY;
    document.body.style.cssText = `
        position: fixed;
        top: ${-window.scrollY}px;
        left: 0;
        width: 100%;
        height: 100vh;
        overflow: hidden;
        padding-right: ${widthScroll}px;
    `;
};

const enableScroll = () => {
    document.body.style.cssText = '';
    window.scroll({
        top: document.body.dbScrollY
    });
};

const modalWindow = () => {
    const modal = document.querySelector('.modal-callback');
    const modalClose = document.querySelector('.modal-close');
    const modalOverlay = document.querySelector('.modal-overlay');
    const upBtn = document.querySelector('.up');

    window.addEventListener('click', e => {
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
                upBtn.style.display = 'block';
                enableScroll();
            }
        }
    });

    modalClose.addEventListener('click', () => {
        modal.style.display = 'none';
        modalOverlay.style.display = 'none';
        upBtn.style.display = 'block';
        enableScroll();
    });
};

export default modalWindow;
