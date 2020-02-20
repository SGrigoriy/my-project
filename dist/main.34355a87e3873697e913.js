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

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss ***!
  \*************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/scss/main.scss?./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\nvar isOldIE = function isOldIE() {\r\n  var memo;\r\n  return function memorize() {\r\n    if (typeof memo === 'undefined') {\r\n      // Test for IE <= 9 as proposed by Browserhacks\r\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\r\n      // Tests for existence of standard globals is to allow style-loader\r\n      // to operate correctly into non-standard environments\r\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\r\n      memo = Boolean(window && document && document.all && !window.atob);\r\n    }\r\n\r\n    return memo;\r\n  };\r\n}();\r\n\r\nvar getTarget = function getTarget() {\r\n  var memo = {};\r\n  return function memorize(target) {\r\n    if (typeof memo[target] === 'undefined') {\r\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\r\n\r\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\r\n        try {\r\n          // This will throw an exception if access to iframe is blocked\r\n          // due to cross-origin restrictions\r\n          styleTarget = styleTarget.contentDocument.head;\r\n        } catch (e) {\r\n          // istanbul ignore next\r\n          styleTarget = null;\r\n        }\r\n      }\r\n\r\n      memo[target] = styleTarget;\r\n    }\r\n\r\n    return memo[target];\r\n  };\r\n}();\r\n\r\nvar stylesInDom = [];\r\n\r\nfunction getIndexByIdentifier(identifier) {\r\n  var result = -1;\r\n\r\n  for (var i = 0; i < stylesInDom.length; i++) {\r\n    if (stylesInDom[i].identifier === identifier) {\r\n      result = i;\r\n      break;\r\n    }\r\n  }\r\n\r\n  return result;\r\n}\r\n\r\nfunction modulesToDom(list, options) {\r\n  var idCountMap = {};\r\n  var identifiers = [];\r\n\r\n  for (var i = 0; i < list.length; i++) {\r\n    var item = list[i];\r\n    var id = options.base ? item[0] + options.base : item[0];\r\n    var count = idCountMap[id] || 0;\r\n    var identifier = \"\".concat(id, \" \").concat(count);\r\n    idCountMap[id] = count + 1;\r\n    var index = getIndexByIdentifier(identifier);\r\n    var obj = {\r\n      css: item[1],\r\n      media: item[2],\r\n      sourceMap: item[3]\r\n    };\r\n\r\n    if (index !== -1) {\r\n      stylesInDom[index].references++;\r\n      stylesInDom[index].updater(obj);\r\n    } else {\r\n      stylesInDom.push({\r\n        identifier: identifier,\r\n        updater: addStyle(obj, options),\r\n        references: 1\r\n      });\r\n    }\r\n\r\n    identifiers.push(identifier);\r\n  }\r\n\r\n  return identifiers;\r\n}\r\n\r\nfunction insertStyleElement(options) {\r\n  var style = document.createElement('style');\r\n  var attributes = options.attributes || {};\r\n\r\n  if (typeof attributes.nonce === 'undefined') {\r\n    var nonce =  true ? __webpack_require__.nc : undefined;\r\n\r\n    if (nonce) {\r\n      attributes.nonce = nonce;\r\n    }\r\n  }\r\n\r\n  Object.keys(attributes).forEach(function (key) {\r\n    style.setAttribute(key, attributes[key]);\r\n  });\r\n\r\n  if (typeof options.insert === 'function') {\r\n    options.insert(style);\r\n  } else {\r\n    var target = getTarget(options.insert || 'head');\r\n\r\n    if (!target) {\r\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\r\n    }\r\n\r\n    target.appendChild(style);\r\n  }\r\n\r\n  return style;\r\n}\r\n\r\nfunction removeStyleElement(style) {\r\n  // istanbul ignore if\r\n  if (style.parentNode === null) {\r\n    return false;\r\n  }\r\n\r\n  style.parentNode.removeChild(style);\r\n}\r\n/* istanbul ignore next  */\r\n\r\n\r\nvar replaceText = function replaceText() {\r\n  var textStore = [];\r\n  return function replace(index, replacement) {\r\n    textStore[index] = replacement;\r\n    return textStore.filter(Boolean).join('\\n');\r\n  };\r\n}();\r\n\r\nfunction applyToSingletonTag(style, index, remove, obj) {\r\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\r\n\r\n  /* istanbul ignore if  */\r\n\r\n  if (style.styleSheet) {\r\n    style.styleSheet.cssText = replaceText(index, css);\r\n  } else {\r\n    var cssNode = document.createTextNode(css);\r\n    var childNodes = style.childNodes;\r\n\r\n    if (childNodes[index]) {\r\n      style.removeChild(childNodes[index]);\r\n    }\r\n\r\n    if (childNodes.length) {\r\n      style.insertBefore(cssNode, childNodes[index]);\r\n    } else {\r\n      style.appendChild(cssNode);\r\n    }\r\n  }\r\n}\r\n\r\nfunction applyToTag(style, options, obj) {\r\n  var css = obj.css;\r\n  var media = obj.media;\r\n  var sourceMap = obj.sourceMap;\r\n\r\n  if (media) {\r\n    style.setAttribute('media', media);\r\n  } else {\r\n    style.removeAttribute('media');\r\n  }\r\n\r\n  if (sourceMap && btoa) {\r\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\r\n  } // For old IE\r\n\r\n  /* istanbul ignore if  */\r\n\r\n\r\n  if (style.styleSheet) {\r\n    style.styleSheet.cssText = css;\r\n  } else {\r\n    while (style.firstChild) {\r\n      style.removeChild(style.firstChild);\r\n    }\r\n\r\n    style.appendChild(document.createTextNode(css));\r\n  }\r\n}\r\n\r\nvar singleton = null;\r\nvar singletonCounter = 0;\r\n\r\nfunction addStyle(obj, options) {\r\n  var style;\r\n  var update;\r\n  var remove;\r\n\r\n  if (options.singleton) {\r\n    var styleIndex = singletonCounter++;\r\n    style = singleton || (singleton = insertStyleElement(options));\r\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\r\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\r\n  } else {\r\n    style = insertStyleElement(options);\r\n    update = applyToTag.bind(null, style, options);\r\n\r\n    remove = function remove() {\r\n      removeStyleElement(style);\r\n    };\r\n  }\r\n\r\n  update(obj);\r\n  return function updateStyle(newObj) {\r\n    if (newObj) {\r\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\r\n        return;\r\n      }\r\n\r\n      update(obj = newObj);\r\n    } else {\r\n      remove();\r\n    }\r\n  };\r\n}\r\n\r\nmodule.exports = function (list, options) {\r\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\r\n  // tags it will allow on a page\r\n\r\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\r\n    options.singleton = isOldIE();\r\n  }\r\n\r\n  list = list || [];\r\n  var lastIdentifiers = modulesToDom(list, options);\r\n  return function update(newList) {\r\n    newList = newList || [];\r\n\r\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\r\n      return;\r\n    }\r\n\r\n    for (var i = 0; i < lastIdentifiers.length; i++) {\r\n      var identifier = lastIdentifiers[i];\r\n      var index = getIndexByIdentifier(identifier);\r\n      stylesInDom[index].references--;\r\n    }\r\n\r\n    var newLastIdentifiers = modulesToDom(newList, options);\r\n\r\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\r\n      var _identifier = lastIdentifiers[_i];\r\n\r\n      var _index = getIndexByIdentifier(_identifier);\r\n\r\n      if (stylesInDom[_index].references === 0) {\r\n        stylesInDom[_index].updater();\r\n\r\n        stylesInDom.splice(_index, 1);\r\n      }\r\n    }\r\n\r\n    lastIdentifiers = newLastIdentifiers;\r\n  };\r\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./scss/main.scss */ \"./src/scss/main.scss\");\n\nvar main = document.createElement(\"main\");\nmain.className = \"profile\";\ndocument.body.appendChild(main);\nvar mainSection = document.createElement(\"section\");\nmainSection.className = \"section main-section section_black\";\nmain.appendChild(mainSection);\nvar mainArticle = document.createElement(\"article\");\nmainArticle.className = \"main-article main-article_white\";\nmainSection.appendChild(mainArticle);\nvar mainH1 = document.createElement(\"h1\");\nmainH1.className = \"main-article__title\";\nvar textH1 = document.createTextNode(\"Григорий Селезнев\");\nmainH1.appendChild(textH1);\nmainArticle.appendChild(mainH1);\nvar mainUl = document.createElement(\"ul\");\nmainUl.className = \"main-article__list\";\nvar li0 = document.createElement(\"li\");\nli0.className = \"main-article__item\";\nvar textLi0 = document.createTextNode(\"sgp3982@gmail.com\");\nli0.appendChild(textLi0);\nvar li1 = document.createElement(\"li\");\nli1.className = \"main-article__item\";\nvar textLi1 = document.createTextNode(\"sgp3982@gmail.com\");\nli1.appendChild(textLi1);\nvar li2 = document.createElement(\"li\");\nli2.className = \"main-article__item\";\nvar textLi2 = document.createTextNode(\"sgp3982@gmail.com\");\nli2.appendChild(textLi2);\nvar li3 = document.createElement(\"li\");\nli3.className = \"main-article__item\";\nvar textLi3 = document.createTextNode(\"sgp3982@gmail.com\");\nli3.appendChild(textLi3);\nmainUl.appendChild(li0);\nmainUl.appendChild(li1);\nmainUl.appendChild(li2);\nmainUl.appendChild(li3);\nmainArticle.appendChild(mainUl);\nvar mainImg = document.createElement(\"img\");\nmainImg.className = \"section__img\";\nmainImg.src = \"../src/img/me.png\";\nmainSection.appendChild(mainImg);\nvar graphSection = document.createElement(\"section\");\ngraphSection.className = \"section biography section_white\";\nmain.appendChild(graphSection);\nvar graphArticle = document.createElement(\"article\");\ngraphArticle.className = \"article_black\";\ngraphSection.appendChild(graphArticle);\nvar graphH2 = document.createElement(\"h2\");\ngraphH2.className = \"biography__title\";\nvar textH2 = document.createTextNode(\"Биография\");\ngraphH2.appendChild(textH2);\ngraphArticle.appendChild(graphH2);\nvar graphP0 = document.createElement(\"p\");\ngraphP0.className = \"biography__title\";\nvar textP0 = document.createTextNode(\"Я\");\ngraphP0.appendChild(textP0);\nvar graphP1 = document.createElement(\"p\");\ngraphP1.className = \"biography__title\";\nvar textP1 = document.createTextNode(\"1989 текст текст текст текст текст текст текст\");\ngraphP1.appendChild(textP1);\nvar graphP2 = document.createElement(\"p\");\ngraphP2.className = \"biography__title\";\nvar textP2 = document.createTextNode(\"2000 текст текст текст текст текст текст текст текст текст текст \");\ngraphP2.appendChild(textP2);\nvar graphP3 = document.createElement(\"p\");\ngraphP3.className = \"biography__title\";\nvar textP3 = document.createTextNode(\"2003  текст текст текст текст текст текст \");\ngraphP3.appendChild(textP3);\nvar graphP4 = document.createElement(\"p\");\ngraphP4.className = \"biography__title\";\nvar textP4 = document.createTextNode(\"2004 текст ттекст текст текст текст текст текст текст \");\ngraphP4.appendChild(textP4);\nvar graphP5 = document.createElement(\"p\");\ngraphP5.className = \"biography__title\";\nvar textP5 = document.createTextNode(\"2012 текст тетекст текст текст текст текст текст текст текст текст текст \");\ngraphP5.appendChild(textP5);\ngraphArticle.appendChild(graphP0);\ngraphArticle.appendChild(graphP1);\ngraphArticle.appendChild(graphP2);\ngraphArticle.appendChild(graphP3);\ngraphArticle.appendChild(graphP4);\ngraphArticle.appendChild(graphP5);\nvar graphImg = document.createElement(\"img\");\ngraphImg.className = \"biography__img\";\ngraphImg.src = \"../src/img/me1.png\";\ngraphSection.appendChild(graphImg);\nvar experSection = document.createElement(\"section\");\nexperSection.className = \"section section_white\";\nmain.appendChild(experSection);\nvar experH2 = document.createElement(\"h2\");\nexperH2.className = \"section__title\";\nvar textH2 = document.createTextNode(\"Мой опыт\");\nexperH2.appendChild(textH2);\nexperSection.appendChild(experH2);\nvar experArticle = document.createElement(\"article\");\nexperArticle.className = \"article_black\";\nexperSection.appendChild(experArticle);\nvar experDiv = document.createElement(\"div\");\nexperDiv.className = \"experience\";\nexperArticle.appendChild(experDiv);\nvar experUl = document.createElement(\"ul\");\nexperUl.className = \"experience__list\";\nexperDiv.appendChild(experUl);\nvar li0 = document.createElement(\"li\");\nli0.className = \"experience__item\";\nvar textLi0 = document.createTextNode(\"текст текст текст текст текст текст текст текст \");\nli0.appendChild(textLi0);\nvar li1 = document.createElement(\"li\");\nli1.className = \"experience__item\";\nvar textLi1 = document.createTextNode(\"текст текст текст текст текст текст текст текст \");\nli1.appendChild(textLi1);\nvar li2 = document.createElement(\"li\");\nli2.className = \"experience__item\";\nvar textLi2 = document.createTextNode(\"текст текст текст текст текст текст текст текст \");\nli2.appendChild(textLi2);\nexperUl.appendChild(li0);\nexperUl.appendChild(li1);\nexperUl.appendChild(li2);\nvar experUl1 = document.createElement(\"ul\");\nexperUl1.className = \"experience__list\";\nexperDiv.appendChild(experUl1);\nvar li0 = document.createElement(\"li\");\nli0.className = \"experience__item\";\nvar textLi0 = document.createTextNode(\"текст текст текст текст текст текст текст текст \");\nli0.appendChild(textLi0);\nvar li1 = document.createElement(\"li\");\nli1.className = \"experience__item\";\nvar textLi1 = document.createTextNode(\"текст текст текст текст текст текст текст текст \");\nli1.appendChild(textLi1);\nvar li2 = document.createElement(\"li\");\nli2.className = \"experience__item\";\nvar textLi2 = document.createTextNode(\"текст текст текст текст текст текст текст текст \");\nli2.appendChild(textLi2);\nexperUl1.appendChild(li0);\nexperUl1.appendChild(li1);\nexperUl1.appendChild(li2);\nvar hobbSection = document.createElement(\"section\");\nhobbSection.className = \"section section_white\";\nmain.appendChild(hobbSection);\nvar hobbH2 = document.createElement(\"h2\");\nhobbH2.className = \"section__title\";\nvar textH2 = document.createTextNode(\"Мои увлечения\");\nhobbH2.appendChild(textH2);\nhobbSection.appendChild(hobbH2);\nvar hobbArticle = document.createElement(\"article\");\nhobbArticle.className = \"article_black\";\nhobbSection.appendChild(hobbArticle);\nvar hobbDiv0 = document.createElement(\"div\");\nhobbDiv0.className = \"hobbies\";\nhobbArticle.appendChild(hobbDiv0);\nvar hobbImg0 = document.createElement(\"img\");\nhobbImg0.className = \"section__img\";\nhobbImg0.src = \"../src/img/electronics.png\";\nhobbDiv0.appendChild(hobbImg0);\nvar p0 = document.createElement(\"p\");\np0.className = \"hobbies__item\";\nvar textP0 = document.createTextNode(\"Электроника  текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст \");\np0.appendChild(textP0);\nhobbDiv0.appendChild(p0);\nvar hobbImg1 = document.createElement(\"img\");\nhobbImg1.className = \"section__img\";\nhobbImg1.src = \"../src/img/sport.png\";\nhobbDiv0.appendChild(hobbImg1);\nvar p1 = document.createElement(\"p\");\np1.className = \"hobbies__item\";\nvar textP1 = document.createTextNode(\"Спорт  текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст \");\np1.appendChild(textP1);\nhobbDiv0.appendChild(p1);\nvar hobbDiv1 = document.createElement(\"div\");\nhobbDiv1.className = \"hobbies\";\nhobbArticle.appendChild(hobbDiv1);\nvar hobbImg0 = document.createElement(\"img\");\nhobbImg0.className = \"section__img\";\nhobbImg0.src = \"../src/img/electronics.png\";\nhobbDiv1.appendChild(hobbImg0);\nvar p0 = document.createElement(\"p\");\np0.className = \"hobbies__item\";\nvar textP0 = document.createTextNode(\"Путишествия  текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст \");\np0.appendChild(textP0);\nhobbDiv1.appendChild(p0);\nvar hobbImg1 = document.createElement(\"img\");\nhobbImg1.className = \"section__img\";\nhobbImg1.src = \"../src/img/sport.png\";\nhobbDiv1.appendChild(hobbImg1);\nvar p1 = document.createElement(\"p\");\np1.className = \"hobbies__item\";\nvar textP1 = document.createTextNode(\"Хобби  текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст \");\np1.appendChild(textP1);\nhobbDiv1.appendChild(p1);\nvar footer = document.createElement(\"footer\");\nfooter.className = \"footer\";\ndocument.body.appendChild(footer);\nvar section = document.createElement(\"section\");\nsection.className = \"section section_black\";\nfooter.appendChild(section);\nvar h1 = document.createElement(\"h1\");\nh1.className = \"footer__title\";\nvar textH1 = document.createTextNode(\"Контакты\");\nh1.appendChild(textH1);\nsection.appendChild(h1);\nvar article = document.createElement(\"article\");\narticle.className = \"footer-contact\";\nsection.appendChild(article);\nvar div = document.createElement(\"div\");\ndiv.className = \"footer-form\";\narticle.appendChild(div);\nvar form = document.createElement(\"form\");\nform.className = \"form\";\ndiv.appendChild(form);\nvar nameInput = document.createElement(\"input\");\nnameInput.className = \"footer-form__field\";\nnameInput.type = \"text\";\nnameInput.name = \"name\";\nnameInput.placeholder = \"Имя:\";\nform.appendChild(nameInput);\nvar emailInput = document.createElement(\"input\");\nemailInput.className = \"footer-form__field\";\nemailInput.type = \"text\";\nemailInput.name = \"email\";\nemailInput.placeholder = \"email:\";\nform.appendChild(emailInput);\nvar mesTextarea = document.createElement(\"textarea\");\nmesTextarea.className = \"footer-form__item\";\nmesTextarea.name = \"message\";\nmesTextarea.cols = \"54\";\nmesTextarea.rows = \"5\";\nmesTextarea.placeholder = \"Текст:\";\nform.appendChild(mesTextarea);\nvar buttonInput = document.createElement(\"input\");\nbuttonInput.className = \"footer-form__button\";\nbuttonInput.type = \"submit\";\nbuttonInput.value = \"Отправить\";\nform.appendChild(buttonInput);\nvar div = document.createElement(\"div\");\ndiv.className = \"footer_white\";\narticle.appendChild(div);\nvar footerP0 = document.createElement(\"p\");\nfooterP0.className = \"contact__item\";\nvar footerImg0 = document.createElement(\"img\");\nfooterImg0.className = \"footer__img\";\nfooterImg0.src = \"../src/img/emailicon.png\";\nfooterImg0.alt = \"email: \";\nvar footerSpan0 = document.createElement(\"span\");\nvar textSpan0 = document.createTextNode(\"sgp3982@gmail.com\");\nfooterSpan0.appendChild(textSpan0);\ndiv.appendChild(footerP0);\ndiv.appendChild(footerImg0);\ndiv.appendChild(footerSpan0);\nvar footerP1 = document.createElement(\"p\");\nfooterP1.className = \"contact__item\";\nvar footerImg1 = document.createElement(\"img\");\nfooterImg1.className = \"footer__img\";\nfooterImg1.src = \"../src/img/emailicon.png\";\nfooterImg1.alt = \"phone: \";\nvar footerSpan1 = document.createElement(\"span\");\nvar textSpan1 = document.createTextNode(\"+38(050)685-0218\");\nfooterSpan1.appendChild(textSpan1);\ndiv.appendChild(footerP1);\ndiv.appendChild(footerImg1);\ndiv.appendChild(footerSpan1);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/src!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/scss/main.scss?");

/***/ })

/******/ });