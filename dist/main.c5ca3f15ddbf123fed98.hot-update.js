/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatediplom"]("main",{

/***/ "./node_modules/webpack-dev-server/client/index.js?http://localhost:8080":
/*!*******************************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/index.js?http://localhost:8080 ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("var __resourceQuery = \"?http://localhost:8080\";\n\n/* global __resourceQuery WorkerGlobalScope self */\n\n/* eslint prefer-destructuring: off */\n\nvar stripAnsi = __webpack_require__(/*! strip-ansi */ \"./node_modules/strip-ansi/index.js\");\n\nvar socket = __webpack_require__(/*! ./socket */ \"./node_modules/webpack-dev-server/client/socket.js\");\n\nvar overlay = __webpack_require__(/*! ./overlay */ \"./node_modules/webpack-dev-server/client/overlay.js\");\n\nvar _require = __webpack_require__(/*! ./utils/log */ \"./node_modules/webpack-dev-server/client/utils/log.js\"),\n    log = _require.log,\n    setLogLevel = _require.setLogLevel;\n\nvar sendMessage = __webpack_require__(/*! ./utils/sendMessage */ \"./node_modules/webpack-dev-server/client/utils/sendMessage.js\");\n\nvar reloadApp = __webpack_require__(/*! ./utils/reloadApp */ \"./node_modules/webpack-dev-server/client/utils/reloadApp.js\");\n\nvar createSocketUrl = __webpack_require__(/*! ./utils/createSocketUrl */ \"./node_modules/webpack-dev-server/client/utils/createSocketUrl.js\");\n\nvar status = {\n  isUnloading: false,\n  currentHash: ''\n};\nvar options = {\n  hot: false,\n  hotReload: true,\n  liveReload: false,\n  initial: true,\n  useWarningOverlay: false,\n  useErrorOverlay: false,\n  useProgress: false\n};\nvar socketUrl = createSocketUrl(__resourceQuery);\nself.addEventListener('beforeunload', function () {\n  status.isUnloading = true;\n});\n\nif (typeof window !== 'undefined') {\n  var qs = window.location.search.toLowerCase();\n  options.hotReload = qs.indexOf('hotreload=false') === -1;\n}\n\nvar onSocketMessage = {\n  hot: function hot() {\n    options.hot = true;\n    log.info('[WDS] Hot Module Replacement enabled.');\n  },\n  liveReload: function liveReload() {\n    options.liveReload = true;\n    log.info('[WDS] Live Reloading enabled.');\n  },\n  invalid: function invalid() {\n    log.info('[WDS] App updated. Recompiling...'); // fixes #1042. overlay doesn't clear if errors are fixed but warnings remain.\n\n    if (options.useWarningOverlay || options.useErrorOverlay) {\n      overlay.clear();\n    }\n\n    sendMessage('Invalid');\n  },\n  hash: function hash(_hash) {\n    status.currentHash = _hash;\n  },\n  'still-ok': function stillOk() {\n    log.info('[WDS] Nothing changed.');\n\n    if (options.useWarningOverlay || options.useErrorOverlay) {\n      overlay.clear();\n    }\n\n    sendMessage('StillOk');\n  },\n  'log-level': function logLevel(level) {\n    var hotCtx = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'undefined'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n    if (hotCtx.keys().indexOf('./log') !== -1) {\n      hotCtx('./log').setLogLevel(level);\n    }\n\n    setLogLevel(level);\n  },\n  overlay: function overlay(value) {\n    if (typeof document !== 'undefined') {\n      if (typeof value === 'boolean') {\n        options.useWarningOverlay = false;\n        options.useErrorOverlay = value;\n      } else if (value) {\n        options.useWarningOverlay = value.warnings;\n        options.useErrorOverlay = value.errors;\n      }\n    }\n  },\n  progress: function progress(_progress) {\n    if (typeof document !== 'undefined') {\n      options.useProgress = _progress;\n    }\n  },\n  'progress-update': function progressUpdate(data) {\n    if (options.useProgress) {\n      log.info(\"[WDS] \".concat(data.percent, \"% - \").concat(data.msg, \".\"));\n    }\n\n    sendMessage('Progress', data);\n  },\n  ok: function ok() {\n    sendMessage('Ok');\n\n    if (options.useWarningOverlay || options.useErrorOverlay) {\n      overlay.clear();\n    }\n\n    if (options.initial) {\n      return options.initial = false;\n    } // eslint-disable-line no-return-assign\n\n\n    reloadApp(options, status);\n  },\n  'content-changed': function contentChanged() {\n    log.info('[WDS] Content base changed. Reloading...');\n    self.location.reload();\n  },\n  warnings: function warnings(_warnings) {\n    log.warn('[WDS] Warnings while compiling.');\n\n    var strippedWarnings = _warnings.map(function (warning) {\n      return stripAnsi(warning);\n    });\n\n    sendMessage('Warnings', strippedWarnings);\n\n    for (var i = 0; i < strippedWarnings.length; i++) {\n      log.warn(strippedWarnings[i]);\n    }\n\n    if (options.useWarningOverlay) {\n      overlay.showMessage(_warnings);\n    }\n\n    if (options.initial) {\n      return options.initial = false;\n    } // eslint-disable-line no-return-assign\n\n\n    reloadApp(options, status);\n  },\n  errors: function errors(_errors) {\n    log.error('[WDS] Errors while compiling. Reload prevented.');\n\n    var strippedErrors = _errors.map(function (error) {\n      return stripAnsi(error);\n    });\n\n    sendMessage('Errors', strippedErrors);\n\n    for (var i = 0; i < strippedErrors.length; i++) {\n      log.error(strippedErrors[i]);\n    }\n\n    if (options.useErrorOverlay) {\n      overlay.showMessage(_errors);\n    }\n\n    options.initial = false;\n  },\n  error: function error(_error) {\n    log.error(_error);\n  },\n  close: function close() {\n    log.error('[WDS] Disconnected!');\n    sendMessage('Close');\n  }\n};\nsocket(socketUrl, onSocketMessage);\n\n//# sourceURL=webpack://diplom/./node_modules/webpack-dev-server/client/index.js?");

/***/ }),

/***/ "./node_modules/webpack/hot/dev-server.js":
/*!************************************************!*\
  !*** ./node_modules/webpack/hot/dev-server.js ***!
  \************************************************/
/***/ (() => {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open 'C:\\\\Users\\\\MYPC\\\\OneDrive\\\\Рабочий стол\\\\diplom\\\\node_modules\\\\webpack\\\\hot\\\\dev-server.js'\");\n\n//# sourceURL=webpack://diplom/./node_modules/webpack/hot/dev-server.js?");

/***/ }),

/***/ "./node_modules/webpack/hot/emitter.js":
/*!*********************************************!*\
  !*** ./node_modules/webpack/hot/emitter.js ***!
  \*********************************************/
/***/ (() => {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open 'C:\\\\Users\\\\MYPC\\\\OneDrive\\\\Рабочий стол\\\\diplom\\\\node_modules\\\\webpack\\\\hot\\\\emitter.js'\");\n\n//# sourceURL=webpack://diplom/./node_modules/webpack/hot/emitter.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d4531e69b70d4e2224eb")
/******/ })();
/******/ 
/******/ }
);