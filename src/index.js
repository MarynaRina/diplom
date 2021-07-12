/* eslint-disable strict */
'use strict';

import accordeon from "./modules/accordeon";
import carousel from "./modules/carousel";
import modalWindow from "./modules/modalWindow";
import scrollDowm from "./modules/scrollDown";
import scrollUp from "./modules/scrollUp";
import sendForm from "./modules/sendForm";
import topSlider from "./modules/topSlider";

// scroll down
scrollDowm();

//scroll up
scrollUp();

// open/close modal window
modalWindow();

// top slider
topSlider();

// accordeon
accordeon();

// carousel
carousel();

// send form
sendForm();
