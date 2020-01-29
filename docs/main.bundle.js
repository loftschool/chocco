/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/scripts/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/scripts/main.js":
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ \"./src/scripts/menu.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_menu__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slider */ \"./src/scripts/slider.js\");\n/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_slider__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _reviews_acco__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reviews-acco */ \"./src/scripts/reviews-acco.js\");\n/* harmony import */ var _reviews_acco__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_reviews_acco__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tYWluLmpzPzI5NjMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBIiwiZmlsZSI6Ii4vc3JjL3NjcmlwdHMvbWFpbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vbWVudVwiXG5pbXBvcnQgXCIuL3NsaWRlclwiXG5pbXBvcnQgXCIuL3Jldmlld3MtYWNjb1wiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/main.js\n");

/***/ }),

/***/ "./src/scripts/menu.js":
/*!*****************************!*\
  !*** ./src/scripts/menu.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const menuBlock = $(\".fullscreen-menu\");\nconst activeClass = \"active\";\n\nconst showMenuBlock = () => {\n  if (menuBlock.length === 0) return new Error(\"Блока меню не существует\");\n  menuBlock.addClass(activeClass);\n};\n\nconst hideMenuBlock = () => {\n  menuBlock.removeClass(activeClass);\n};\n\nconst preventDefault = e => e.preventDefault();\n\nconst disableScroll = () => {\n  document.addEventListener(\"wheel\", preventDefault, { passive: false });\n};\n\nconst enableScroll = () => {\n  document.removeEventListener(\"wheel\", preventDefault, { passive: false });\n};\n\n$(\".hamburger\").click(e => {\n  e.preventDefault();\n  showMenuBlock();\n  disableScroll();\n});\n\n$(\".fullscreen-menu__close\").click(e => {\n  e.preventDefault();\n  hideMenuBlock();\n  enableScroll();\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tZW51LmpzPzUxNTIiXSwibmFtZXMiOlsibWVudUJsb2NrIiwiJCIsImFjdGl2ZUNsYXNzIiwic2hvd01lbnVCbG9jayIsImxlbmd0aCIsIkVycm9yIiwiYWRkQ2xhc3MiLCJoaWRlTWVudUJsb2NrIiwicmVtb3ZlQ2xhc3MiLCJwcmV2ZW50RGVmYXVsdCIsImUiLCJkaXNhYmxlU2Nyb2xsIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicGFzc2l2ZSIsImVuYWJsZVNjcm9sbCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjbGljayJdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsWUFBWUMsRUFBRSxrQkFBRixDQUFsQjtBQUNBLE1BQU1DLGNBQWMsUUFBcEI7O0FBRUEsTUFBTUMsZ0JBQWdCLE1BQU07QUFDMUIsTUFBSUgsVUFBVUksTUFBVixLQUFxQixDQUF6QixFQUE0QixPQUFPLElBQUlDLEtBQUosQ0FBVSwwQkFBVixDQUFQO0FBQzVCTCxZQUFVTSxRQUFWLENBQW1CSixXQUFuQjtBQUNELENBSEQ7O0FBS0EsTUFBTUssZ0JBQWdCLE1BQU07QUFDMUJQLFlBQVVRLFdBQVYsQ0FBc0JOLFdBQXRCO0FBQ0QsQ0FGRDs7QUFJQSxNQUFNTyxpQkFBaUJDLEtBQUtBLEVBQUVELGNBQUYsRUFBNUI7O0FBRUEsTUFBTUUsZ0JBQWdCLE1BQU07QUFDMUJDLFdBQVNDLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DSixjQUFuQyxFQUFtRCxFQUFFSyxTQUFTLEtBQVgsRUFBbkQ7QUFDRCxDQUZEOztBQUlBLE1BQU1DLGVBQWUsTUFBTTtBQUN6QkgsV0FBU0ksbUJBQVQsQ0FBNkIsT0FBN0IsRUFBc0NQLGNBQXRDLEVBQXNELEVBQUVLLFNBQVMsS0FBWCxFQUF0RDtBQUNELENBRkQ7O0FBSUFiLEVBQUUsWUFBRixFQUFnQmdCLEtBQWhCLENBQXNCUCxLQUFLO0FBQ3pCQSxJQUFFRCxjQUFGO0FBQ0FOO0FBQ0FRO0FBQ0QsQ0FKRDs7QUFNQVYsRUFBRSx5QkFBRixFQUE2QmdCLEtBQTdCLENBQW1DUCxLQUFLO0FBQ3RDQSxJQUFFRCxjQUFGO0FBQ0FGO0FBQ0FRO0FBQ0QsQ0FKRCIsImZpbGUiOiIuL3NyYy9zY3JpcHRzL21lbnUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBtZW51QmxvY2sgPSAkKFwiLmZ1bGxzY3JlZW4tbWVudVwiKTtcbmNvbnN0IGFjdGl2ZUNsYXNzID0gXCJhY3RpdmVcIjtcblxuY29uc3Qgc2hvd01lbnVCbG9jayA9ICgpID0+IHtcbiAgaWYgKG1lbnVCbG9jay5sZW5ndGggPT09IDApIHJldHVybiBuZXcgRXJyb3IoXCLQkdC70L7QutCwINC80LXQvdGOINC90LUg0YHRg9GJ0LXRgdGC0LLRg9C10YJcIik7XG4gIG1lbnVCbG9jay5hZGRDbGFzcyhhY3RpdmVDbGFzcyk7XG59O1xuXG5jb25zdCBoaWRlTWVudUJsb2NrID0gKCkgPT4ge1xuICBtZW51QmxvY2sucmVtb3ZlQ2xhc3MoYWN0aXZlQ2xhc3MpO1xufTtcblxuY29uc3QgcHJldmVudERlZmF1bHQgPSBlID0+IGUucHJldmVudERlZmF1bHQoKTtcblxuY29uc3QgZGlzYWJsZVNjcm9sbCA9ICgpID0+IHtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIndoZWVsXCIsIHByZXZlbnREZWZhdWx0LCB7IHBhc3NpdmU6IGZhbHNlIH0pO1xufTtcblxuY29uc3QgZW5hYmxlU2Nyb2xsID0gKCkgPT4ge1xuICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwid2hlZWxcIiwgcHJldmVudERlZmF1bHQsIHsgcGFzc2l2ZTogZmFsc2UgfSk7XG59O1xuXG4kKFwiLmhhbWJ1cmdlclwiKS5jbGljayhlID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBzaG93TWVudUJsb2NrKCk7XG4gIGRpc2FibGVTY3JvbGwoKTtcbn0pO1xuXG4kKFwiLmZ1bGxzY3JlZW4tbWVudV9fY2xvc2VcIikuY2xpY2soZSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgaGlkZU1lbnVCbG9jaygpO1xuICBlbmFibGVTY3JvbGwoKTtcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/menu.js\n");

/***/ }),

/***/ "./src/scripts/reviews-acco.js":
/*!*************************************!*\
  !*** ./src/scripts/reviews-acco.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const getSizeOfBlock = block => block.height();\n\nconst openItem = item => {\n  const textBlock = item.find(\".team__content-block\");\n  const reqHeight = getSizeOfBlock(textBlock);\n  const textContainer = item.find(\".team__content\");\n\n  item.addClass(\"active\");\n  textContainer.height(reqHeight);\n};\n\nconst closeEveryItem = container => {\n  const items = container.find(\".team__item\");\n  const textBlocks = container.find(\".team__content\");\n\n  items.removeClass(\"active\");\n  textBlocks.height(0);\n};\n\n$(\".team__item\").click(e => {\n  e.preventDefault();\n\n  const $this = $(e.currentTarget);\n  const itemOpened = $this.hasClass(\"active\");\n  const container = $this.closest(\".team\");\n\n  if (itemOpened) {\n    closeEveryItem(container);\n  } else {\n    closeEveryItem(container);\n    openItem($this);\n  }\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9yZXZpZXdzLWFjY28uanM/MTg4MiJdLCJuYW1lcyI6WyJnZXRTaXplT2ZCbG9jayIsImJsb2NrIiwiaGVpZ2h0Iiwib3Blbkl0ZW0iLCJpdGVtIiwidGV4dEJsb2NrIiwiZmluZCIsInJlcUhlaWdodCIsInRleHRDb250YWluZXIiLCJhZGRDbGFzcyIsImNsb3NlRXZlcnlJdGVtIiwiY29udGFpbmVyIiwiaXRlbXMiLCJ0ZXh0QmxvY2tzIiwicmVtb3ZlQ2xhc3MiLCIkIiwiY2xpY2siLCJlIiwicHJldmVudERlZmF1bHQiLCIkdGhpcyIsImN1cnJlbnRUYXJnZXQiLCJpdGVtT3BlbmVkIiwiaGFzQ2xhc3MiLCJjbG9zZXN0Il0sIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxpQkFBaUJDLFNBQVNBLE1BQU1DLE1BQU4sRUFBaEM7O0FBRUEsTUFBTUMsV0FBV0MsUUFBUTtBQUN2QixRQUFNQyxZQUFZRCxLQUFLRSxJQUFMLENBQVUsc0JBQVYsQ0FBbEI7QUFDQSxRQUFNQyxZQUFZUCxlQUFlSyxTQUFmLENBQWxCO0FBQ0EsUUFBTUcsZ0JBQWdCSixLQUFLRSxJQUFMLENBQVUsZ0JBQVYsQ0FBdEI7O0FBRUFGLE9BQUtLLFFBQUwsQ0FBYyxRQUFkO0FBQ0FELGdCQUFjTixNQUFkLENBQXFCSyxTQUFyQjtBQUNELENBUEQ7O0FBU0EsTUFBTUcsaUJBQWlCQyxhQUFhO0FBQ2xDLFFBQU1DLFFBQVFELFVBQVVMLElBQVYsQ0FBZSxhQUFmLENBQWQ7QUFDQSxRQUFNTyxhQUFhRixVQUFVTCxJQUFWLENBQWUsZ0JBQWYsQ0FBbkI7O0FBRUFNLFFBQU1FLFdBQU4sQ0FBa0IsUUFBbEI7QUFDQUQsYUFBV1gsTUFBWCxDQUFrQixDQUFsQjtBQUNELENBTkQ7O0FBUUFhLEVBQUUsYUFBRixFQUFpQkMsS0FBakIsQ0FBdUJDLEtBQUs7QUFDMUJBLElBQUVDLGNBQUY7O0FBRUEsUUFBTUMsUUFBUUosRUFBRUUsRUFBRUcsYUFBSixDQUFkO0FBQ0EsUUFBTUMsYUFBYUYsTUFBTUcsUUFBTixDQUFlLFFBQWYsQ0FBbkI7QUFDQSxRQUFNWCxZQUFZUSxNQUFNSSxPQUFOLENBQWMsT0FBZCxDQUFsQjs7QUFFQSxNQUFJRixVQUFKLEVBQWdCO0FBQ2RYLG1CQUFlQyxTQUFmO0FBQ0QsR0FGRCxNQUVPO0FBQ0xELG1CQUFlQyxTQUFmO0FBQ0FSLGFBQVNnQixLQUFUO0FBQ0Q7QUFDRixDQWJEIiwiZmlsZSI6Ii4vc3JjL3NjcmlwdHMvcmV2aWV3cy1hY2NvLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZ2V0U2l6ZU9mQmxvY2sgPSBibG9jayA9PiBibG9jay5oZWlnaHQoKTtcblxuY29uc3Qgb3Blbkl0ZW0gPSBpdGVtID0+IHtcbiAgY29uc3QgdGV4dEJsb2NrID0gaXRlbS5maW5kKFwiLnRlYW1fX2NvbnRlbnQtYmxvY2tcIik7XG4gIGNvbnN0IHJlcUhlaWdodCA9IGdldFNpemVPZkJsb2NrKHRleHRCbG9jayk7XG4gIGNvbnN0IHRleHRDb250YWluZXIgPSBpdGVtLmZpbmQoXCIudGVhbV9fY29udGVudFwiKTtcblxuICBpdGVtLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xuICB0ZXh0Q29udGFpbmVyLmhlaWdodChyZXFIZWlnaHQpO1xufTtcblxuY29uc3QgY2xvc2VFdmVyeUl0ZW0gPSBjb250YWluZXIgPT4ge1xuICBjb25zdCBpdGVtcyA9IGNvbnRhaW5lci5maW5kKFwiLnRlYW1fX2l0ZW1cIik7XG4gIGNvbnN0IHRleHRCbG9ja3MgPSBjb250YWluZXIuZmluZChcIi50ZWFtX19jb250ZW50XCIpO1xuXG4gIGl0ZW1zLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xuICB0ZXh0QmxvY2tzLmhlaWdodCgwKTtcbn07XG5cbiQoXCIudGVhbV9faXRlbVwiKS5jbGljayhlID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gIGNvbnN0ICR0aGlzID0gJChlLmN1cnJlbnRUYXJnZXQpO1xuICBjb25zdCBpdGVtT3BlbmVkID0gJHRoaXMuaGFzQ2xhc3MoXCJhY3RpdmVcIik7XG4gIGNvbnN0IGNvbnRhaW5lciA9ICR0aGlzLmNsb3Nlc3QoXCIudGVhbVwiKTtcbiAgXG4gIGlmIChpdGVtT3BlbmVkKSB7XG4gICAgY2xvc2VFdmVyeUl0ZW0oY29udGFpbmVyKTtcbiAgfSBlbHNlIHtcbiAgICBjbG9zZUV2ZXJ5SXRlbShjb250YWluZXIpXG4gICAgb3Blbkl0ZW0oJHRoaXMpO1xuICB9XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/reviews-acco.js\n");

/***/ }),

/***/ "./src/scripts/slider.js":
/*!*******************************!*\
  !*** ./src/scripts/slider.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const sliderOptions = {\n  pager: false,\n  controls: false\n};\n\nconst slider = $(\".products\").bxSlider(sliderOptions);\n\n$('.products-slider__btn--next').click(e => {\n  e.preventDefault();\n  slider.goToNextSlide();\n});\n\n$('.products-slider__btn--prev').click(e => {\n  e.preventDefault();\n  slider.goToPrevSlide();\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9zbGlkZXIuanM/ZjMwMiJdLCJuYW1lcyI6WyJzbGlkZXJPcHRpb25zIiwicGFnZXIiLCJjb250cm9scyIsInNsaWRlciIsIiQiLCJieFNsaWRlciIsImNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZ29Ub05leHRTbGlkZSIsImdvVG9QcmV2U2xpZGUiXSwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLGdCQUFnQjtBQUNwQkMsU0FBTyxLQURhO0FBRXBCQyxZQUFVO0FBRlUsQ0FBdEI7O0FBS0EsTUFBTUMsU0FBU0MsRUFBRSxXQUFGLEVBQWVDLFFBQWYsQ0FBd0JMLGFBQXhCLENBQWY7O0FBRUFJLEVBQUUsNkJBQUYsRUFBaUNFLEtBQWpDLENBQXVDQyxLQUFLO0FBQzFDQSxJQUFFQyxjQUFGO0FBQ0FMLFNBQU9NLGFBQVA7QUFDRCxDQUhEOztBQUtBTCxFQUFFLDZCQUFGLEVBQWlDRSxLQUFqQyxDQUF1Q0MsS0FBSztBQUMxQ0EsSUFBRUMsY0FBRjtBQUNBTCxTQUFPTyxhQUFQO0FBQ0QsQ0FIRCIsImZpbGUiOiIuL3NyYy9zY3JpcHRzL3NsaWRlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHNsaWRlck9wdGlvbnMgPSB7XG4gIHBhZ2VyOiBmYWxzZSxcbiAgY29udHJvbHM6IGZhbHNlXG59XG5cbmNvbnN0IHNsaWRlciA9ICQoXCIucHJvZHVjdHNcIikuYnhTbGlkZXIoc2xpZGVyT3B0aW9ucyk7XG5cbiQoJy5wcm9kdWN0cy1zbGlkZXJfX2J0bi0tbmV4dCcpLmNsaWNrKGUgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIHNsaWRlci5nb1RvTmV4dFNsaWRlKCk7XG59KTtcblxuJCgnLnByb2R1Y3RzLXNsaWRlcl9fYnRuLS1wcmV2JykuY2xpY2soZSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgc2xpZGVyLmdvVG9QcmV2U2xpZGUoKTtcbn0pIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/slider.js\n");

/***/ })

/******/ });