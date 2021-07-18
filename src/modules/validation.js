/* eslint-disable strict */
'use strict';

const validation = () => {
    const name = document.getElementById('form-name'),
        phone = document.getElementById('form-tel');

    const validPhone = elem =>  {
        elem.addEventListener('blur', event => {
            event.target.value = event.target.value.replace(/( \s+)(^\s*$)/gi, '');
            event.target.value = event.target.value.split(' ').filter(n => n).join(' ');
            event.target.value = event.target.value.replaceAll(event.target.value.match(/-+/), '-');
            event.target.value = event.target.value.replaceAll(event.target.value.match(/ +/), ' ');
        });

        elem.addEventListener('input', event => {
            event.target.value = event.target.value.replace(/[^+\d]/g, '');
        });
    };

    const validName = elem => {
        elem.addEventListener('blur', event => {
            event.target.value = event.target.value.replace(/( \s+)(^\s*$)/gi, '');
            event.target.value = event.target.value.split(' ').filter(n => n).join(' ');
            event.target.value = event.target.value.replaceAll(event.target.value.match(/-+/), '-');
            event.target.value = event.target.value.replaceAll(event.target.value.match(/ +/), ' ');
            if (event.target.value) {
                event.target.value = event.target.value.split(' ').map(e => e[0].toUpperCase() +
                    e.slice(1)).join(" ");
            } else {
                return;
            }
        });
        elem.addEventListener('input', event => {
            event.target.value = event.target.value.replace(/[^а-яё -]/gi, '');
        });
    };


    validName(name);
    validPhone(phone);
};

export default validation;
