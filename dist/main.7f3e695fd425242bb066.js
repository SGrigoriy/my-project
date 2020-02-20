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
eval("\n\n__webpack_require__(/*! ./scss/main.scss */ \"./src/scss/main.scss\");\n\nvar main = document.createElement(\"main\");\nmain.className = \"profile\";\ndocument.body.appendChild(main);\nvar section = document.createElement(\"section\");\nsection.className = \"section main-section section_black\";\nmain.appendChild(section);\nvar article = document.createElement(\"article\");\narticle.className = \"main-article main-article_white\";\nsection.appendChild(article);\nvar h1 = document.createElement(\"h1\");\nh1.className = \"main-article__title\";\nvar textH1 = document.createTextNode(\"Григорий Селезнев\");\nh1.appendChild(textH1);\narticle.appendChild(h1);\nvar ul = document.createElement(\"ul\");\nul.className = \"main-article__list\";\nvar li0 = document.createElement(\"li\");\nli0.className = \"main-article__item\";\nvar textLi0 = document.createTextNode(\"Developer\");\nli0.appendChild(textLi0);\nvar li1 = document.createElement(\"li\");\nli1.className = \"main-article__item\";\nvar textLi1 = document.createTextNode(\"Developer\");\nli1.appendChild(textLi1);\nvar li2 = document.createElement(\"li\");\nli2.className = \"main-article__item\";\nvar textLi2 = document.createTextNode(\"Developer\");\nli2.appendChild(textLi2);\nvar li3 = document.createElement(\"li\");\nli3.className = \"main-article__item\";\nvar textLi3 = document.createTextNode(\"Developer\");\nli3.appendChild(textLi3);\nul.appendChild(li0);\nul.appendChild(li1);\nul.appendChild(li2);\nul.appendChild(li3);\narticle.appendChild(ul);\nvar img = document.createElement(\"img\");\nimg.className = \"section__img\";\nimg.src = \"../src/img/me.png\";\nsection.appendChild(img);\nvar section = document.createElement(\"section\");\nsection.className = \"section biography section_white\";\nmain.appendChild(section);\nvar article = document.createElement(\"article\");\narticle.className = \"article_black\";\nsection.appendChild(article);\nvar h2 = document.createElement(\"h2\");\nh2.className = \"biography__title\";\nvar textH2 = document.createTextNode(\"Биография\");\nh2.appendChild(textH2);\narticle.appendChild(h2);\nvar p0 = document.createElement(\"p\");\np0.className = \"biography__title\";\nvar textP0 = document.createTextNode(\"Я\");\np0.appendChild(textP0);\nvar p1 = document.createElement(\"p\");\np1.className = \"biography__title\";\nvar textP1 = document.createTextNode(\"1989\");\np1.appendChild(textP1);\nvar p2 = document.createElement(\"p\");\np2.className = \"biography__title\";\nvar textP2 = document.createTextNode(\"2000\");\np2.appendChild(textP2);\nvar p3 = document.createElement(\"p\");\np3.className = \"biography__title\";\nvar textP3 = document.createTextNode(\"2003\");\np3.appendChild(textP3);\nvar p4 = document.createElement(\"p\");\np4.className = \"biography__title\";\nvar textP4 = document.createTextNode(\"2004\");\np4.appendChild(textP4);\nvar p5 = document.createElement(\"p\");\np5.className = \"biography__title\";\nvar textP5 = document.createTextNode(\"2012\");\np5.appendChild(textP5);\narticle.appendChild(p0);\narticle.appendChild(p1);\narticle.appendChild(p2);\narticle.appendChild(p3);\narticle.appendChild(p4);\narticle.appendChild(p5);\nvar img = document.createElement(\"img\");\nimg.className = \"biography__img\";\nimg.src = \"../src/img/me1.png\";\nsection.appendChild(img);\nvar section = document.createElement(\"section\");\nsection.className = \"section section_white\";\nmain.appendChild(section);\nvar h2 = document.createElement(\"h2\");\nh2.className = \"section__title\";\nvar textH2 = document.createTextNode(\"Мой опыт\");\nh2.appendChild(textH2);\nsection.appendChild(h2);\nvar article = document.createElement(\"article\");\narticle.className = \"article_black\";\nsection.appendChild(article);\nvar div = document.createElement(\"div\");\ndiv.className = \"experience\";\narticle.appendChild(div);\nvar ul = document.createElement(\"ul\");\nul.className = \"experience__list\";\ndiv.appendChild(ul);\nvar li0 = document.createElement(\"li\");\nli0.className = \"experience__item\";\nvar textLi0 = document.createTextNode(\"Установка и настройка ОС симейства Microsoft Windows\");\nli0.appendChild(textLi0);\nvar li1 = document.createElement(\"li\");\nli1.className = \"experience__item\";\nvar textLi1 = document.createTextNode(\"Создание и настройка локальных сетей\");\nli1.appendChild(textLi1);\nvar li2 = document.createElement(\"li\");\nli2.className = \"experience__item\";\nvar textLi2 = document.createTextNode(\"Установка и настройка видеонаблюдения\");\nli2.appendChild(textLi2);\nul.appendChild(li0);\nul.appendChild(li1);\nul.appendChild(li2);\nvar ul = document.createElement(\"ul\");\nul.className = \"experience__list\";\ndiv.appendChild(ul);\nvar li0 = document.createElement(\"li\");\nli0.className = \"experience__item\";\nvar textLi0 = document.createTextNode(\"Обслуживаание переферийного оборудования\");\nli0.appendChild(textLi0);\nvar li1 = document.createElement(\"li\");\nli1.className = \"experience__item\";\nvar textLi1 = document.createTextNode(\"Ремонот ПК и ноутбуков\");\nli1.appendChild(textLi1);\nvar li2 = document.createElement(\"li\");\nli2.className = \"experience__item\";\nvar textLi2 = document.createTextNode(\"Ремонт мобильных телефонов\");\nli2.appendChild(textLi2);\nul.appendChild(li0);\nul.appendChild(li1);\nul.appendChild(li2);\nvar section = document.createElement(\"section\");\nsection.className = \"section section_white\";\nmain.appendChild(section);\nvar h2 = document.createElement(\"h2\");\nh2.className = \"section__title\";\nvar textH2 = document.createTextNode(\"Мои увлечения\");\nh2.appendChild(textH2);\nsection.appendChild(h2);\nvar article = document.createElement(\"article\");\narticle.className = \"article_black\";\nsection.appendChild(article);\nvar div = document.createElement(\"div\");\ndiv.className = \"hobbies\";\narticle.appendChild(div);\nvar img = document.createElement(\"img\");\nimg.className = \"section__img\";\nimg.src = \"../src/img/electronics.png\";\ndiv.appendChild(img);\nvar p0 = document.createElement(\"p\");\np0.className = \"hobbies__item\";\nvar textP0 = document.createTextNode(\"Электроника\");\np0.appendChild(textP0);\ndiv.appendChild(p0);\nvar img1 = document.createElement(\"img\");\nimg1.className = \"section__img\";\nimg1.src = \"../src/img/sport.png\";\ndiv.appendChild(img1);\nvar p1 = document.createElement(\"p\");\np1.className = \"hobbies__item\";\nvar textP1 = document.createTextNode(\"Спорт\");\np1.appendChild(textP1);\ndiv.appendChild(p1);\nvar div = document.createElement(\"div\");\ndiv.className = \"hobbies\";\narticle.appendChild(div);\nvar img = document.createElement(\"img\");\nimg.className = \"section__img\";\nimg.src = \"../src/img/electronics.png\";\ndiv.appendChild(img);\nvar p0 = document.createElement(\"p\");\np0.className = \"hobbies__item\";\nvar textP0 = document.createTextNode(\"Путишествия\");\np0.appendChild(textP0);\ndiv.appendChild(p0);\nvar img1 = document.createElement(\"img\");\nimg1.className = \"section__img\";\nimg1.src = \"../src/img/sport.png\";\ndiv.appendChild(img1);\nvar p1 = document.createElement(\"p\");\np1.className = \"hobbies__item\";\nvar textP1 = document.createTextNode(\"Хобби\");\np1.appendChild(textP1);\ndiv.appendChild(p1);\nvar footer = document.createElement(\"footer\");\nfooter.className = \"footer\";\ndocument.body.appendChild(footer);\nvar section = document.createElement(\"section\");\nsection.className = \"section section_black\";\nfooter.appendChild(section);\nvar h1 = document.createElement(\"h1\");\nh1.className = \"footer__title\";\nvar textH1 = document.createTextNode(\"Контакты\");\nh1.appendChild(textH1);\nsection.appendChild(h1);\nvar article = document.createElement(\"article\");\narticle.className = \"footer-contact\";\nsection.appendChild(article);\nvar div = document.createElement(\"div\");\ndiv.className = \"footer-form\";\narticle.appendChild(div);\nvar form = document.createElement(\"form\");\nform.className = \"form\";\ndiv.appendChild(form);\nvar nameInput = document.createElement(\"input\");\nnameInput.className = \"footer-form__field\";\nnameInput.type = \"text\";\nnameInput.name = \"name\";\nnameInput.placeholder = \"Имя:\";\nform.appendChild(nameInput);\nvar emailInput = document.createElement(\"input\");\nemailInput.className = \"footer-form__field\";\nemailInput.type = \"text\";\nemailInput.name = \"email\";\nemailInput.placeholder = \"email:\";\nform.appendChild(emailInput);\nvar mesTextarea = document.createElement(\"textarea\");\nmesTextarea.className = \"footer-form__item\";\nmesTextarea.name = \"message\";\nmesTextarea.cols = \"54\";\nmesTextarea.rows = \"5\";\nmesTextarea.placeholder = \"Текст:\";\nform.appendChild(mesTextarea);\nvar buttonInput = document.createElement(\"input\");\nbuttonInput.className = \"footer-form__button\";\nbuttonInput.type = \"submit\";\nbuttonInput.value = \"Отправить\";\nform.appendChild(buttonInput);\nvar div = document.createElement(\"div\");\ndiv.className = \"footer_white\";\narticle.appendChild(div);\nvar footerP0 = document.createElement(\"p\");\nfooterP0.className = \"contact__item\";\nvar footerImg0 = document.createElement(\"img\");\nfooterImg0.className = \"footer__img\";\nfooterImg0.src = \"../src/img/emailicon.png\";\nfooterImg0.alt = \"email: \";\nvar footerSpan0 = document.createElement(\"span\");\nvar textSpan0 = document.createTextNode(\"sgp3982@gmail.com\");\nfooterSpan0.appendChild(textSpan0);\ndiv.appendChild(footerP0);\ndiv.appendChild(footerImg0);\ndiv.appendChild(footerSpan0);\nvar footerP1 = document.createElement(\"p\");\nfooterP1.className = \"contact__item\";\nvar footerImg1 = document.createElement(\"img\");\nfooterImg1.className = \"footer__img\";\nfooterImg1.src = \"../src/img/emailicon.png\";\nfooterImg1.alt = \"phone: \";\nvar footerSpan1 = document.createElement(\"span\");\nvar textSpan1 = document.createTextNode(\"+38(050)685-0218\");\nfooterSpan1.appendChild(textSpan1);\ndiv.appendChild(footerP1);\ndiv.appendChild(footerImg1);\ndiv.appendChild(footerSpan1); // var profilediv = document.getElementsByClassName(\"profile\");\n// var mainH1 = document.createElement(\"h1\");\n// mainH1.innerHTML = \"sdfgasgf\";\n// profilediv.append(\"mainH1\");\n\n//# sourceURL=webpack:///./src/index.js?");

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