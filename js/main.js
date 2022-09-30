/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/***/ (function() {

eval("let menu = document.querySelector('.header-burger');\r\nlet headerBlock = document.querySelector('.header-block')\r\nlet headerMenu = document.querySelector('.header-menu')\r\nlet headerRow = document.querySelector('.header-row')\r\n\r\nmenu.onclick = function (e) {\r\n   headerBlock.classList.toggle('active')\r\n   headerMenu.classList.toggle('active')\r\n   headerRow.classList.toggle('active')\r\n   menu.classList.toggle('active')\r\n   document.body.classList.toggle('active')\r\n}\n\n//# sourceURL=webpack://gulp/./src/js/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/script.js"]();
/******/ 	
/******/ })()
;