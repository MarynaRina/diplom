/* eslint-disable strict */
'use strict';

import accordion from "./modules/accordion";
import carousel from "./modules/carousel";
import modalWindow from "./modules/modalWindow";
import scrollDown from "./modules/scrollDown";
import scrollUp from "./modules/scrollUp";
import sendForm from "./modules/sendForm";
import topSlider from "./modules/topSlider";
import validation from "./modules/validation";

// scroll down
scrollDown();

//scroll up
scrollUp();

// open/close modal window
modalWindow();

// top slider
topSlider();

// accordeon
accordion();

// carousel
carousel.init();

// send form
sendForm();

// validation
validation();
