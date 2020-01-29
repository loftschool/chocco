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
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ "./src/scripts/menu.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_menu__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slider */ "./src/scripts/slider.js");
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_slider__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reviews_acco__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reviews-acco */ "./src/scripts/reviews-acco.js");
/* harmony import */ var _reviews_acco__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_reviews_acco__WEBPACK_IMPORTED_MODULE_2__);




/***/ }),

/***/ "./src/scripts/menu.js":
/*!*****************************!*\
  !*** ./src/scripts/menu.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

const menuBlock = $(".fullscreen-menu");
const activeClass = "active";

const showMenuBlock = () => {
  if (menuBlock.length === 0) return new Error("Блока меню не существует");
  menuBlock.addClass(activeClass);
};

const hideMenuBlock = () => {
  menuBlock.removeClass(activeClass);
};

const preventDefault = e => e.preventDefault();

const disableScroll = () => {
  document.addEventListener("wheel", preventDefault, { passive: false });
};

const enableScroll = () => {
  document.removeEventListener("wheel", preventDefault, { passive: false });
};

$(".hamburger").click(e => {
  e.preventDefault();
  showMenuBlock();
  disableScroll();
});

$(".fullscreen-menu__close").click(e => {
  e.preventDefault();
  hideMenuBlock();
  enableScroll();
});

/***/ }),

/***/ "./src/scripts/reviews-acco.js":
/*!*************************************!*\
  !*** ./src/scripts/reviews-acco.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

const getSizeOfBlock = block => block.height();

const openItem = item => {
  const textBlock = item.find(".team__content-block");
  const reqHeight = getSizeOfBlock(textBlock);
  const textContainer = item.find(".team__content");

  item.addClass("active");
  textContainer.height(reqHeight);
};

const closeEveryItem = container => {
  const items = container.find(".team__item");
  const textBlocks = container.find(".team__content");

  items.removeClass("active");
  textBlocks.height(0);
};

$(".team__item").click(e => {
  e.preventDefault();

  const $this = $(e.currentTarget);
  const itemOpened = $this.hasClass("active");
  const container = $this.closest(".team");

  if (itemOpened) {
    closeEveryItem(container);
  } else {
    closeEveryItem(container);
    openItem($this);
  }
});

/***/ }),

/***/ "./src/scripts/slider.js":
/*!*******************************!*\
  !*** ./src/scripts/slider.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

const sliderOptions = {
  pager: false,
  controls: false
};

const slider = $(".products").bxSlider(sliderOptions);

$('.products-slider__btn--next').click(e => {
  e.preventDefault();
  slider.goToNextSlide();
});

$('.products-slider__btn--prev').click(e => {
  e.preventDefault();
  slider.goToPrevSlide();
});

/***/ })

/******/ });