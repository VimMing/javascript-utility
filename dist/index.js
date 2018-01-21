(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vim_utility"] = factory();
	else
		root["vim_utility"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

// /*************
//  *
//  * DOM
//  *************/
//
// /***
//  * @param el
//  * @param selector
//  * @returns {*}
//  */
//
// export function closestNode(el, selector) {
//     while (el !== null && el !== undefined) {
//         if (el.matches(selector)) {
//             return el;
//         }
//         el = el && el.parentElement;
//     }
//     return null;
// }
//
// /*
//  *  @param el{nodeElement}
//  *  @param selector{string}
//  *  @param root{nodeElement}
//  */
// export function parentNode(el, selector, root) {
//     el = el && el.parentElement;
//     while (el !== null && el !== undefined) {
//         if(root !== undefined && !root.hasChildNodes(el) && root !== el){
//             return null;
//         }
//         else if (el.matches(selector)) {
//             return el;
//         }
//         el = el && el.parentElement;
//     }
//     return null;
// }
// export function prevNode(el, selector) {
//     el = el.previousElementSibling;
//     while (el !== null && el !== undefined) {
//         if (el.matches(selector)) {
//             return el;
//         }
//         el = el.previousElementSibling;
//     }
//     return null;
// }
// export function nextNode(el, selector) {
//     el = el.nextElementSibling;
//     while (el !== null && el !== undefined) {
//         if (el.matches(selector)) {
//             return el;
//         }
//         el = el.nextElementSibling;
//     }
//     return null;
// }
// /*
// *  @param e{object} mouse event
// * */
// export function elementFromPoint(e) {
//     return document.elementFromPoint(e.pageX - (document.body.scrollLeft || window.pageXOffset), e.pageY - (window.pageYOffset || document.documentElement.scrollTop));
// }

const s_random = __webpack_require__(1);
const n_random = __webpack_require__(2);
const isChinaIDCard = __webpack_require__(3);
const isEmail =  __webpack_require__(4);
const isPhone = __webpack_require__(5);
const isUrl = __webpack_require__(6);
module.exports = {
    s_random, n_random,
    isChinaIDCard, isEmail, isPhone, isUrl
};

/***/ }),
/* 1 */
/***/ (function(module, exports) {

/******
 *
 * @param n{number}
 * @returns {string}
 * @effect produce random string
 */
function s_random(n = 6) {
    let text = "" , possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < n; i++)
        text += possible[Math.floor(Math.random() * possible.length)];
    return text;
}

module.exports = s_random;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

/**
 *
 * @desc generate specified range [min, max] numbers
 * @param  {Number} min
 * @param  {Number} max
 * @param  {Number} n
 * @return {Number}
 */
function n_random(min, max, n = 1) {
    let res = [];
    for(let i = 0; i < n ; i++){
        res.push(Math.floor(Math.random() * (max-min+1) )+ min);
    }
    if(n <= 1)
        return res[0];
    else{
        return res;
    }
}

module.exports = n_random;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

/***
 * @description judge china id card
 * @param str {string}
 * @returns {boolean}
 */

function isChinaIDCard(str) {
    let res = /^\d{17}(\d|X|x)$/.test(str);
    if(res){
        let sum = 0;
        let coefficient = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
        let verification = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2];
        for(let [key, value] of coefficient.entries()){
            sum += value*parseInt(str[key]);
        }
        let vCode = verification[sum % 11];
        res = str.toUpperCase().endsWith(vCode.toString());
    }
    return res;
}

module.exports = isChinaIDCard;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

/****
 * @description judge email address
 * @param str {string}
 * @returns {boolean}
 */
function isEmail(str) {
    return /^[\w\.]+@\w+\.\w+$/.test(str);
}

module.exports = isEmail;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

/*****
 * @description judge phone number
 * @param str {string | number}
 * @returns {boolean}
 */
function isPhone(str) {
    return /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/.test(str);
}

module.exports = isPhone;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

/****
 * @description judge whether str is url
 * @param str {string}
 * @returns {boolean}
 */

function isUrl(str) {
    return /[\d\w-@:%._+~#=]{2,256}\.[a-z]{2,6}\b([\d\w-@:%_+.~#?&/=]*)/i.test(str);
}

module.exports = isUrl;

/***/ })
/******/ ]);
});