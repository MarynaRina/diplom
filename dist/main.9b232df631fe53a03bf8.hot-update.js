/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatediplom"]("main",{

/***/ "./src/modules/modalWindow.js":
/*!************************************!*\
  !*** ./src/modules/modalWindow.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* eslint-disable strict */\n //Scroll Block\n\nvar disableScroll = function disableScroll() {\n  var scrollY = document.documentElement.style.getPropertyValue('--scroll-y');\n  var body = document.body;\n  body.style.position = 'fixed';\n  body.style.top = \"-\".concat(scrollY);\n};\n\nvar enableScroll = function enableScroll() {\n  document.body.style.cssText = '';\n};\n\nvar modalWindow = function modalWindow() {\n  var modal = document.querySelector('.modal-callback');\n  var modalClose = document.querySelector('.modal-close');\n  var modalOverlay = document.querySelector('.modal-overlay');\n  var upBtn = document.querySelector('.up');\n  window.addEventListener('click', function (e) {\n    e.preventDefault();\n    var target = e.target;\n\n    if (target.matches('.callback-btn') || target.matches('.button-services')) {\n      modal.style.display = 'block';\n      modalOverlay.style.display = 'block';\n      upBtn.style.display = 'none';\n      disableScroll();\n    } else {\n      target = target.closest('.modal-callback');\n\n      if (!target) {\n        modal.style.display = 'none';\n        modalOverlay.style.display = 'none';\n        enableScroll();\n      }\n    }\n  });\n  modalClose.addEventListener('click', function () {\n    modal.style.display = 'none';\n    modalOverlay.style.display = 'none';\n    enableScroll();\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modalWindow);\n\n//# sourceURL=webpack://diplom/./src/modules/modalWindow.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("4a8d62ad5a5f306ed684")
/******/ })();
/******/ 
/******/ }
);