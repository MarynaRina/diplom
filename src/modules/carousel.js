/* eslint-disable strict */
'use strict';

class Carousel {
    constructor({ main, wrap, next, prev, infinity = true, position = 0, slidesToShow = 4 }) {
        this.main = document.querySelector(main);
        this.wrap = document.querySelector(wrap);
        this.slides = document.querySelector(wrap).children;
        this.next = document.querySelector(next);
        this.prev = document.querySelector(prev);
        this.slidesToShow = slidesToShow;
        this.options = {
            position,
            infinity,
            widthSlide: Math.floor(100 / this.slidesToShow)
        };
    }

    init() {
        this.addCarouselClass();
        this.addStyle();
        this.constrolSlider();
    }

    addCarouselClass() {
        this.main.classList.add('carousel-slider');
        this.wrap.classList.add('carousel-slider__wrap');

        for (const item of this.slides) {
            item.classList.add('carousel-slider__item');

        }
    }

    addStyle() {
        const style = document.createElement('style');
        style.id = 'sloderCarousel-style';
        style.textContent = `
            .carousel-slider {
                overflow: hidden !important;
            }
            .carousel-slider__wrap {
                display: flex !important;
                transition: transform 0.5s !important;
                will-change: transform !important;
            }
            .carousel-slider__item {
                flex: 0 0 ${this.options.widthSlide}% !important;
                margin: auto 0 !important;
            }

        `;
        document.head.appendChild(style);
    }

    constrolSlider() {
        this.prev.addEventListener('click', this.prevSlider.bind(this));
        this.next.addEventListener('click', this.nextSlider.bind(this));
    }

    prevSlider() {
        if (this.options.infinity || this.options.position > 0) {
            --this.options.position;
            if (this.options.position < 0) {
                this.options.position = this.slides.length - this.slidesToShow;
            }
            this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
        }
    }

    nextSlider() {
        if (this.options.infinity || this.options.position < this.slides.length - this.slidesToShow) {
            ++this.options.position;
            if (this.options.position > this.slides.length - this.slidesToShow) {
                this.options.position = 0;
            }
            this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
        }
    }
}

const carousel = new Carousel({
    main: '.services-elements',
    wrap: '.row',
    prev: '.arrow-left',
    next: '.arrow-right',
    slidesToShow: 3,
    infinity: true
});


export default carousel;
