/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatediplom"]("main",{

/***/ "./src/modules/accordion.js":
/*!**********************************!*\
  !*** ./src/modules/accordion.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* eslint-disable strict */\n\n\nvar accordion = function accordion() {\n  var accordeon = document.querySelector('.accordeon'),\n      titles = document.querySelectorAll('.element-title'),\n      elemContent = accordeon.querySelectorAll('.element-content');\n  titles.forEach(function (title) {\n    title.addEventListener(\"click\", function (e) {\n      elemContent.forEach(function (elem) {\n        if (e.target.nextElementSibling !== elem && elem.classList.contains(\"active\")) {\n          elem.classList.remove(\"active\");\n          elem.forEach(function (btn) {\n            return btn.classList.remove(\"active\");\n          });\n        }\n      });\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (accordion);\n\n//# sourceURL=webpack://diplom/./src/modules/accordion.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("5f7ee26458897299a10f")
/******/ })();
/******/ 
/******/ }
);