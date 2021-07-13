/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatediplom"]("main",{

/***/ "./src/modules/scrollDown.js":
/*!***********************************!*\
  !*** ./src/modules/scrollDown.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* eslint-disable strict */\n\n\nvar scrollDowm = function scrollDowm() {\n  var links = document.querySelectorAll(\".top-menu ul a\");\n\n  function clickHandler(e) {\n    e.preventDefault();\n    var href = this.getAttribute(\"href\");\n    var offsetTop = document.querySelector(href).offsetTop;\n    scroll({\n      top: offsetTop,\n      behavior: \"smooth\"\n    });\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scrollDowm);\n\n//# sourceURL=webpack://diplom/./src/modules/scrollDown.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d05d94fbe96e2913f10a")
/******/ })();
/******/ 
/******/ }
);