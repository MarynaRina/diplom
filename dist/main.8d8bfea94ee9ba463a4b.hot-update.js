/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatediplom"]("main",{

/***/ "./src/modules/scrollUp.js":
/*!*********************************!*\
  !*** ./src/modules/scrollUp.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* eslint-disable strict */\n\n\nvar scrollUp = function scrollUp() {\n  var upBtn = document.querySelector('.up');\n  upBtn.addEventListener('click', function () {\n    var scrollToTop = window.setInterval(function () {\n      var pos = window.pageYOffset;\n\n      if (pos > 0) {\n        window.scrollTo(0, pos - 20);\n      } else {\n        window.clearInterval(scrollToTop);\n      }\n    }, 5);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scrollUp);\n\n//# sourceURL=webpack://diplom/./src/modules/scrollUp.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e2d08501507c38d6177c")
/******/ })();
/******/ 
/******/ }
);