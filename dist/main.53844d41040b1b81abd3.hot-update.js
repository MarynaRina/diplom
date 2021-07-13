/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatediplom"]("main",{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_accordeon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/accordeon */ \"./src/modules/accordeon.js\");\n/* harmony import */ var _modules_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/carousel */ \"./src/modules/carousel.js\");\n/* harmony import */ var _modules_modalWindow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modalWindow */ \"./src/modules/modalWindow.js\");\n/* harmony import */ var _modules_scrollDown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/scrollDown */ \"./src/modules/scrollDown.js\");\n/* harmony import */ var _modules_scrollUp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/scrollUp */ \"./src/modules/scrollUp.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/sendForm */ \"./src/modules/sendForm.js\");\n/* harmony import */ var _modules_topSlider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/topSlider */ \"./src/modules/topSlider.js\");\n/* eslint-disable strict */\n\n\n\n\n\n\n\n\n // scroll down\n\n(0,_modules_scrollDown__WEBPACK_IMPORTED_MODULE_3__.default)(); //scroll up\n\n(0,_modules_scrollUp__WEBPACK_IMPORTED_MODULE_4__.default)(); // open/close modal window\n\n(0,_modules_modalWindow__WEBPACK_IMPORTED_MODULE_2__.default)(); // top slider\n\n(0,_modules_topSlider__WEBPACK_IMPORTED_MODULE_6__.default)(); // accordeon\n\n(0,_modules_accordeon__WEBPACK_IMPORTED_MODULE_0__.default)(); // carousel\n\n(0,_modules_carousel__WEBPACK_IMPORTED_MODULE_1__.default)(); // send form\n\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_5__.default)();\n\n//# sourceURL=webpack://diplom/./src/index.js?");

/***/ }),

/***/ "./src/modules/modalWindow.js":
/*!************************************!*\
  !*** ./src/modules/modalWindow.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* eslint-disable strict */\n //Scroll Block\n\nvar disableScroll = function disableScroll() {\n  var widthScroll = window.innerWidth - document.body.offsetWidth;\n  document.body.dbScrollY = window.scrollY;\n  document.body.style.cssText = \"\\n        position: fixed;\\n        top: \".concat(-window.scrollY, \"px;\\n        left: 0;\\n        width: 100%;\\n        height: 100vh;\\n        overflow: hidden;\\n        padding-right: \").concat(widthScroll, \"px;\\n    \");\n};\n\nvar enableScroll = function enableScroll() {\n  document.body.style.cssText = '';\n  window.scroll({\n    top: document.body.dbScrollY\n  });\n};\n\nvar modalWindow = function modalWindow() {\n  var modal = document.querySelector('.modal-callback');\n  var modalClose = document.querySelector('.modal-close');\n  var modalOverlay = document.querySelector('.modal-overlay');\n  window.addEventListener('click', function (e) {\n    var target = e.target;\n\n    if (target.matches('.callback-btn') || target.matches('.button-services')) {\n      modal.style.display = 'block';\n      modalOverlay.style.display = 'block';\n      disableScroll();\n    }\n  });\n  modal.addEventListener('click', function (e) {\n    var target = e.target;\n\n    if (target.classList.contains('.modal-close') || target.matches('.modal-overlay')) {\n      modal.style.display = 'none';\n      modalOverlay.style.display = 'none';\n      enableScroll();\n    } // modal.style.display = 'none';\n    // modalOverlay.style.display = 'none';\n\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modalWindow);\n\n//# sourceURL=webpack://diplom/./src/modules/modalWindow.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("58d8a85d723e4f80365f")
/******/ })();
/******/ 
/******/ }
);