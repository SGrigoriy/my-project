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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var hidden = document.querySelector('.main-article__list');\r\nvar open = document.querySelector('.main-btn');\r\nhidden.style.display = 'none'\r\n\r\nopen.addEventListener(\"click\", function() {\r\n    if(hidden.style.display == 'none')\r\n        hidden.style.display = 'block', open.value = 'скрыть';\r\n    else hidden.style.display = 'none', open.value = 'показать';\r\n});\r\n\r\nvar slideIndex = 1;\r\nshowSlides(slideIndex);\r\n\r\nfunction plusSlide() {\r\n    showSlides(slideIndex += 1);\r\n}\r\n\r\nfunction minusSlide() {\r\n    showSlides(slideIndex -= 1);  \r\n}\r\n\r\nfunction currentSlide(n) {\r\n    showSlides(slideIndex = n);\r\n}\r\n\r\nfunction showSlides(n) {\r\n    var i;\r\n    var slides = document.getElementsByClassName(\"item\");\r\n    var dots = document.getElementsByClassName(\"slider-dots_item\");\r\n    if (n > slides.length) {\r\n      slideIndex = 1\r\n    }\r\n    if (n < 1) {\r\n        slideIndex = slides.length\r\n    }\r\n    for (i = 0; i < slides.length; i++) {\r\n        slides[i].style.display = \"none\";\r\n    }\r\n    for (i = 0; i < dots.length; i++) {\r\n        dots[i].className = dots[i].className.replace(\" active\", \"\");\r\n    }\r\n    slides[slideIndex - 1].style.display = \"block\";\r\n    dots[slideIndex - 1].className += \" active\";\r\n}\r\n\r\nconst anchors = document.querySelectorAll('a[href*=\"#\"]');\r\n\r\nfor (let anchor of anchors) {\r\n  anchor.addEventListener('click', function (e) {\r\n    e.preventDefault();\r\n\r\n    const blockID = anchor.getAttribute('href').substr(1);\r\n    \r\n    document.getElementById(blockID).scrollIntoView({\r\n      behavior: 'smooth',\r\n      block: 'start'\r\n    });\r\n  });\r\n}\r\n\r\n// function opacity(element, speed){\r\n//         setInterval(function(){\r\n//             if(!element.style.opacity){\r\n//                 element.style.opacity = 0;\r\n//             }\r\n//                 element.style.opacity = element.style.opacity + 0.3;\r\n//         }, speed)\r\n//     }\r\n\r\n//     opacity(document.getElementsByTagName('body')[0], 1000);\r\n    \r\n// import \"./scss/main.scss\";\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });