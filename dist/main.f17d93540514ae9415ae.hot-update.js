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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* eslint-disable strict */\n //Scroll Block\n\nvar disableScroll = function disableScroll() {\n  var widthScroll = window.innerWidth - document.body.offsetWidth;\n  document.body.dbScrollY = window.scrollY;\n  document.body.style.cssText = \"\\n        position: fixed;\\n        top: \".concat(-window.scrollY, \"px;\\n        left: 0;\\n        width: 100%;\\n        height: 100vh;\\n        overflow: hidden;\\n        padding-right: \").concat(widthScroll, \"px;\\n    \");\n};\n\nvar enableScroll = function enableScroll() {\n  document.body.style.cssText = '';\n  window.scroll({\n    top: document.body.dbScrollY\n  });\n};\n\nvar modalWindow = function modalWindow() {\n  var modal = document.querySelector('.modal-callback');\n  var callbackBtn = document.querySelector('.button-services');\n  var modalClose = document.querySelector('.modal-close');\n  var modalOverlay = document.querySelector('.modal-overlay');\n  callbackBtn.addEventListener('click', function () {\n    modal.style.display = 'block';\n    modalOverlay.style.display = 'block';\n    disableScroll();\n  });\n  modal.addEventListener('click', function (e) {\n    var target = e.target;\n\n    if (target.classList.contains(\"modal-close\")) {\n      modal.style.display = \"none\";\n      modalOverlay.style.display = 'none';\n      enableScroll();\n    } else {\n      target = target.closest(\"modal-callback\");\n\n      if (!target) {\n        modal.style.display = \"none\";\n        modalOverlay.style.display = 'none';\n        document.getElementById('form-group').reset();\n      }\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modalWindow);\n\n//# sourceURL=webpack://diplom/./src/modules/modalWindow.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a4d264924b978dfebc17")
/******/ })();
/******/ 
/******/ }
);