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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/**
 * 
 * @description get distance that is scrollbar from window top
 */
function getScrollTop() {
    return (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
}

module.exports = getScrollTop;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

/**
 * @description test whether element has class
 * @param ele{Node}
 * @param cls{string}
 * @return {boolean}
 */
function hasClass(ele, cls) {
    if(ele instanceof Node){
        return ele.classList.contains(cls);
    }
    return false;
}

module.exports= hasClass;

/***/ }),
/* 2 */
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

/***/ }),
/* 3 */
/***/ (function(module, exports) {

/**
 *
 * @description get distance that is scrollbar from window left
 */
function getScrollLeft() {
    return (document.documentElement && document.documentElement.scrollLeft) || document.body.scrollLeft;
}

module.exports = getScrollLeft;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

/**
 * 
 * @description set distance that is scrollbar from window top
 */
function setScrollTop(value) {
    window.scrollTo(0, value);
    return value;
}

module.exports = setScrollTop;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

/***
 * @description get css attribute value
 * @param ele{Node}
 * @param prop{string}
 * @return {*}
 */
function css(ele, prop) {
    let res = null;
    if(getComputedStyle){
        res = document.defaultView.getComputedStyle(ele, null).getPropertyValue(prop);
    }else if(ele.currentStyle){
        res = ele.currentStyle[prop];
    }
    return res;
}

module.exports = css;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

/**
 *
 * @description set Cookie
 * @param key{String}
 * @param value{String}
 * @param days{Number}
 */
function setCookie(key, value, days) {
    let date = new Date();
    date.setDate(date.getDate() + days);
    document.cookie = `${key}=${value};expires=${date}`;
}

module.exports = setCookie;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

/***
 * @author vimmingshe@gmail.com
 * @date 30/01/2018 8:59 AM
 * @description: limit frequency of function call
 * @detail https://css-tricks.com/debouncing-throttling-explained-examples/
 ***/

/****
 *
 * @param delay {number} unit: ms,  interval time of two same function invoked
 * @param callback {function} callback function
 * @param debounceMode {boolean} is debounce mode
 * @param immediate {boolean} if true invoked immediate then callback can't execute during delay ms
 * @returns {function} return wrap function
 */


/**@throttleMode **/
// Returns a function, that, when invoked, will only be triggered at most once
// during a given window of time.

/**@debounceMode**/
// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.


function throttle(delay, callback, debounceMode = false, immediate = false) {
    let timeoutID, lastExec = 0;

    function wrapper(...args) {

        let elapsed = lastExec === 0 ? 0 : Number(new Date()) - lastExec;

        let exec = () => {
            lastExec = Number(new Date());
            callback.apply(this, args);
            if (timeoutID) clearTimeout(timeoutID);
            timeoutID = undefined;
        };

        if (debounceMode === true) {
            if (immediate === true && (lastExec === 0 || delay < elapsed)) {
                exec();
            } else {
                if (timeoutID) clearTimeout(timeoutID);
                timeoutID = setTimeout(exec, delay);
            }
        } else if (delay < elapsed && timeoutID || (debounceMode === false && (lastExec === 0 || delay < elapsed)) )
        {
            if (timeoutID) clearTimeout(timeoutID);
            timeoutID = undefined;
            exec();
        }

    }

    return wrapper;

}

module.exports = throttle;





/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

const s_random = __webpack_require__(9);
const n_random = __webpack_require__(10);

const isChinaIDCard = __webpack_require__(11);
const isEmail =  __webpack_require__(12);
const isPhone = __webpack_require__(13);
const isUrl = __webpack_require__(2);
const getUrlParam = __webpack_require__(14);
const getOS = __webpack_require__(15);
const getExplore = __webpack_require__(16);

const closestNode  = __webpack_require__(17);
const  elementFromPoint = __webpack_require__(18);
const  getCaretPosition = __webpack_require__(19);
const  getScrollLeft = __webpack_require__(3);
const  getScrollTop = __webpack_require__(0);
const  nextNode = __webpack_require__(20);
const  parentNode = __webpack_require__(21);
const  prevNode = __webpack_require__(22);
const  scrollTo = __webpack_require__(23);
const  setScrollTop = __webpack_require__(4);
const  offset = __webpack_require__(24);
const  css = __webpack_require__(5);
const getMaxZIndex = __webpack_require__(25);

const hasClass= __webpack_require__(1);
const addClass= __webpack_require__(26);
const removeClass= __webpack_require__(27);
const toggleClass= __webpack_require__(28);


const  getCookie = __webpack_require__(29);
const  setCookie = __webpack_require__(6);
const  removeCookie = __webpack_require__(30);

const keyCode = __webpack_require__(31);

const throttle = __webpack_require__(7);
const debounce = __webpack_require__(32);


const deepClone = __webpack_require__(33);

const getTimeStamp = __webpack_require__(34);

const toDataUri = __webpack_require__(35);
module.exports = {
    // random
    s_random, n_random,
    // regexp
    isChinaIDCard, isEmail, isPhone, isUrl, getUrlParam, getOS, getExplore,
    // dom
    css, getMaxZIndex, closestNode, elementFromPoint, getCaretPosition, getScrollLeft, getScrollTop, nextNode, parentNode, prevNode, scrollTo, setScrollTop, offset,
    // dom class
    hasClass, removeClass, addClass, toggleClass,
    // cookie
    getCookie, setCookie, removeCookie,
    // keyCode
    keyCode,
    // function
    throttle, debounce,
    //object
    deepClone,
    // time
    getTimeStamp,
    // transfer
    toDataUri,
};

/***/ }),
/* 9 */
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
/* 10 */
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
/* 11 */
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
/* 12 */
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
/* 13 */
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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

const isUrl = __webpack_require__(2);

/****
 * @description extract parameters from href
 * @param str{string}
 * @returns {Map}
 */
function getUrlParam(str) {
    str = decodeURI(str);
    let res = new Map(), reg = /((\S+?)\=(\S+?))\&/g;
    if(!isUrl(str)) return res;
    str = str.slice(str.indexOf('?') + 1) + '&';
    let match = null;
    do{
        match = reg.exec(str);
        if(match !== null) res.set(match[2], match[3]);
    }while(match !== null);

    return res;
}

module.exports = getUrlParam;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

/**
 * 
 * @desc get operation type
 * @return {String} 
 */
function getOS() {
    var userAgent = 'navigator' in window && 'userAgent' in navigator && navigator.userAgent.toLowerCase() || '';
    var appVersion = 'navigator' in window && 'appVersion' in navigator && navigator.appVersion.toLowerCase() || '';

    if (/iphone/i.test(userAgent) || /ipad/i.test(userAgent) || /ipod/i.test(userAgent)) return 'ios';
    if (/android/i.test(userAgent)) return 'android';
    if (/win/i.test(appVersion) && /phone/i.test(userAgent)) return 'windowsPhone';
    if (/mac/i.test(appVersion)) return 'MacOSX';
    if (/win/i.test(appVersion)) return 'windows';
    if (/linux/i.test(appVersion)) return 'linux';
}

module.exports = getOS;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

/**
 * 
 * @desc get explore type and version
 * @return {String} 
 */
function getExplore() {
    var sys = {},
        ua = navigator.userAgent.toLowerCase(),
        s;
    (s = ua.match(/rv:([\d.]+)\) like gecko/)) ? sys.ie = s[1]:
        (s = ua.match(/msie ([\d\.]+)/)) ? sys.ie = s[1] :
        (s = ua.match(/edge\/([\d\.]+)/)) ? sys.edge = s[1] :
        (s = ua.match(/firefox\/([\d\.]+)/)) ? sys.firefox = s[1] :
        (s = ua.match(/(?:opera|opr).([\d\.]+)/)) ? sys.opera = s[1] :
        (s = ua.match(/chrome\/([\d\.]+)/)) ? sys.chrome = s[1] :
        (s = ua.match(/version\/([\d\.]+).*safari/)) ? sys.safari = s[1] : 0;

    if (sys.ie) return ('IE: ' + sys.ie);
    if (sys.edge) return ('EDGE: ' + sys.edge);
    if (sys.firefox) return ('Firefox: ' + sys.firefox);
    if (sys.chrome) return ('Chrome: ' + sys.chrome);
    if (sys.opera) return ('Opera: ' + sys.opera);
    if (sys.safari) return ('Safari: ' + sys.safari);
    return "Unclear";
}

module.exports = getExplore;

/***/ }),
/* 17 */
/***/ (function(module, exports) {


/***
 * @description get closest element depending on selector
 * @param el {Node}
 * @param selector{string}
 * @returns {null | Node}
 */

function closestNode(el, selector) {
    while (el !== null && el !== undefined) {
        if (el.matches(selector)) {
            return el;
        }
        el = el && el.parentElement;
    }
    return null;
}

module.exports = closestNode;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

/***
 * @description get element node from mouse point
*  @param e{object} e is mouse event
 *  @return {null | elementNode}
* */

const getScrollLeft = __webpack_require__(3);
const getScrollTop = __webpack_require__(0);
function elementFromPoint(e) {
    let scrollLeft = getScrollLeft();
    let scrollTop = getScrollTop();
    return document.elementFromPoint(e.pageX - (scrollLeft || window.pageXOffset), e.pageY - (window.pageYOffset || scrollTop));
}

module.exports = elementFromPoint;


/***/ }),
/* 19 */
/***/ (function(module, exports) {

/***
 * @description get caret position
 * @param el {elementNode}
 * @return {number}
 */

function getCaretPosition (el) {

    var iCaretPos = 0;
    // IE Support
    if (document.selection) {
        el.focus();
        // To get cursor position, get empty selection range
        var oSel = document.selection.createRange();
        // Move selection start to 0 position
        oSel.moveStart('character', -el.value.length);
        // The caret position is selection length
        iCaretPos = oSel.text.length;
    }
    else if (el.selectionStart || el.selectionStart == '0')
        iCaretPos = el.selectionStart;
    return iCaretPos;
}

module.exports = getCaretPosition;

/***/ }),
/* 20 */
/***/ (function(module, exports) {

/**
 * @description get next element sibling
 * @param el {nodeElement}
 * @param selector {string}
 * @returns {*}
 */

function nextNode(el, selector) {
    el = el.nextElementSibling;
    while (el !== null && el !== undefined) {
        if (selector === undefined || selector === null || el.matches(selector)) {
            return el;
        }
        el = el.nextElementSibling;
    }
    return null;
}

module.exports = nextNode;

/***/ }),
/* 21 */
/***/ (function(module, exports) {


/***
 *  @description according to the selector and root node element to get parentNode
 *  @param el {nodeElement}
 *  @param selector {string}
 *  @param root{ nodeElement}
 */
function parentNode(el, selector, root) {
    el = el && el.parentElement;
    while (el !== null && el !== undefined) {
        if(root !== undefined && !root.hasChildNodes(el) && root !== el){
            return null;
        }
        else if (el.matches(selector)) {
            return el;
        }
        el = el && el.parentElement;
    }
    return null;
}

module.exports = parentNode;

/***/ }),
/* 22 */
/***/ (function(module, exports) {

/**
 * @description get previous element sibling
 * @param el {nodeElement}
 * @param selector {string}
 * @returns {*}
 */
function prevNode(el, selector) {
    el = el.previousElementSibling;
    while (el !== null && el !== undefined) {
        if (selector === undefined || selector === null || el.matches(selector)) {
            return el;
        }
        el = el.previousElementSibling;
    }
    return null;
}

module.exports = prevNode;



/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

const getScrollTop = __webpack_require__(0);
const setScrollTop = __webpack_require__(4);
const requestAnimationFrame = (function () {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback, 10);
        };
})();
/**
 * 
 * @desc  scroll to given place during given time
 * @param {Number} to 
 * @param {Number} duration 
 */
function scrollTo(to, duration) {
    if (duration < 0) {
        setScrollTop(to);
        return;
    }
    let diff = to - getScrollTop();
    if (diff === 0) return;
    let step = (diff / duration)*2.718;
    requestAnimationFrame(
        function () {
            if (Math.abs(step) > Math.abs(diff)) {
                setScrollTop(getScrollTop() + diff);
                return;
            }
            setScrollTop(getScrollTop() + step);
            if (diff > 0 && getScrollTop() >= to || diff < 0 && getScrollTop() <= to) {
                return;
            }
            scrollTo(to, duration - 10);
        });
}

module.exports = scrollTo;

/***/ }),
/* 24 */
/***/ (function(module, exports) {

/**
 * 
 * @description  get distance of current element from document
 * @param {HTMLElement} ele 
 * @returns { {left: number, top: number} }
 */
function offset(ele) {
    let pos = {
        left: 0,
        top: 0
    };
    while (ele) {
        pos.left += ele.offsetLeft;
        pos.top += ele.offsetTop;
        ele = ele.offsetParent;
    }
    return pos;
}

module.exports = offset;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

const css = __webpack_require__(5);

/**
 * get max z-index value in the given element 's children by the default ele == document.body
 * @return {number}
 */

function getMaxZIndex(ele) {
    let children = ele === undefined ? document.body.children : ele.children;
    let res = 0, zIndex;
    for(let v of children){
         zIndex = getMaxZIndex(v);
         zIndex = zIndex === "auto" ? 0 : parseInt(zIndex);
         res = res < zIndex ? zIndex : res;
    }
    if(ele instanceof Node){
        zIndex =css(ele, 'z-index');
        zIndex = zIndex === "auto" ? 0 : parseInt(zIndex);
        res = res < zIndex ? zIndex : res;
    }
    return res;
}

module.exports = getMaxZIndex;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

const hasClass = __webpack_require__(1);

/***
 * @description element add class
 * @param ele{Node}
 * @param cls{string}
 */
function addClass(ele, cls){
    if(!hasClass(ele, cls) && ele instanceof Node){
        ele.classList.add(cls);
    }
}

module.exports = addClass;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

const hasClass = __webpack_require__(1);

/****
 * @description element remove class
 * @param ele{Node}
 * @param cls{string}
 */
function removeClass(ele, cls) {
    if(hasClass(ele, cls)){
        ele.classList.remove(cls);
    }
}

module.exports = removeClass;

/***/ }),
/* 28 */
/***/ (function(module, exports) {

/**
 * @description element toggle class
 * @param ele{Node}
 * @param cls{string}
 */
function toggleClass(ele, cls) {
    if(ele instanceof Node){
        ele.classList.toggle(cls);
    }
}

module.exports = toggleClass;

/***/ }),
/* 29 */
/***/ (function(module, exports) {

/**
 *
 * @description get cookies
 * @param  key{String}
 * @return value{String}
 */
function getCookie(key) {
    let arr = document.cookie.split(';');
    for (let i = 0; i < arr.length; i++) {
        let tempArr = arr[i].trim().split('=');
        if (tempArr[0] === key) {
            return decodeURIComponent(tempArr[1]);
        }
    }
    return '';
}

module.exports = getCookie;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

const setCookie = __webpack_require__(6);

/***
 * @description remove cookies
 * @param key{string}
 */
function removeCookie(key) {
    setCookie(key, "", -1);
}

module.exports = removeCookie;

/***/ }),
/* 31 */
/***/ (function(module, exports) {

const map = new Map([
    ['Backspace', 8],
    ['Tab', 9],
    ['Enter', 13],
    ['Shift', 16],
    ['Ctrl', 17],
    ['Alt', 18],
    ['Pause', 19],
    ['Caps Lock', 20],
    ['Escape', 27],
    ['Space', 32],
    ['Page Up', 33],
    ['Page Down', 34],
    ['End', 35],
    ['Home', 36],
    ['Left', 37],
    ['Up', 38],
    ['Right', 39],
    ['Down', 40],
    ['Print Screen', 42],
    ['Insert', 45],
    ['Delete', 46],

    ['0', 48],
    ['1', 49],
    ['2', 50],
    ['3', 51],
    ['4', 52],
    ['5', 53],
    ['6', 54],
    ['7', 55],
    ['8', 56],
    ['9', 57],

    ['A', 65],
    ['B', 66],
    ['C', 67],
    ['D', 68],
    ['E', 69],
    ['F', 70],
    ['G', 71],
    ['H', 72],
    ['I', 73],
    ['J', 74],
    ['K', 75],
    ['L', 76],
    ['M', 77],
    ['N', 78],
    ['O', 79],
    ['P', 80],
    ['Q', 81],
    ['R', 82],
    ['S', 83],
    ['T', 84],
    ['U', 85],
    ['V', 86],
    ['W', 87],
    ['X', 88],
    ['Y', 89],
    ['Z', 90],

    ['Windows', 91],
    ['Right Click', 93],

    ['Numpad 0', 96],
    ['Numpad 1', 97],
    ['Numpad 2', 98],
    ['Numpad 3', 99],
    ['Numpad 4', 100],
    ['Numpad 5', 101],
    ['Numpad 6', 102],
    ['Numpad 7', 103],
    ['Numpad 8', 104],
    ['Numpad 9', 105],
    ['Numpad *', 106],
    ['Numpad +', 107],
    ['Numpad -', 109],
    ['Numpad .', 110],
    ['Numpad /', 111],

    ['F1', 112],
    ['F2', 113],
    ['F3', 114],
    ['F4', 115],
    ['F5', 116],
    ['F6', 117],
    ['F7', 118],
    ['F8', 119],
    ['F9', 120],
    ['F10', 121],
    ['F11', 122],
    ['F12', 123],

    ['Num Lock', 144],
    ['Scroll Lock', 145],
    ['My Computer', 182],
    ['My Calculator', 183],
    [';', 186],
    ['=', 187],
    [',', 188],
    ['-', 189],
    ['.', 190],
    ['/', 191],
    ['`', 192],
    ['[', 219],
    ['\\', 220],
    [']', 221],
    ['\'', 222]
]);

/**
 * @description get keyCode
 * @param name
 * @return {*}
 */
function keyCode(name) {
    return typeof name === 'string' ? map.get(name) : null;
}

module.exports = keyCode;



/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

/***
 * created by @vimmingshe@gmail.com
 * @date 27/02/2018 3:36 PM
 * @description:
 ***/
const throttle = __webpack_require__(7);

function debounce(callback, delay) {
    return throttle(delay, callback, true);
}

module.exports = debounce;

/***/ }),
/* 33 */
/***/ (function(module, exports) {

/***
 * @author vimmingshe@gmail.com
 * @date 30/01/2018 4:41 PM
 * @description:
 ***/

/**
 * @description deep clone 
 * @param {Any} values
 */
function deepClone(values) {
    let copy;

    // Handle the 3 simple types, and null or undefined
    if (values === undefined || null === values || "object" !== typeof values) return values;

    // Handle Date
    if (values instanceof Date) {
        copy = new Date();
        copy.setTime(values.getTime());
        return copy;
    }

    // Handle Array
    if (values instanceof Array) {
        copy = [];
        for (let i = 0, len = values.length; i < len; i++) {
            copy[i] = deepClone(values[i]);
        }
        return copy;
    }

    // Handle Object
    if (values instanceof Object) {
        copy = {};
        for (let key in values) {
            if (values.hasOwnProperty(key)) copy[key] = deepClone(values[key]);
        }
        return copy;
    }

    throw new Error("Unable to copy values! Its type isn't supported.");
}

module.exports = deepClone;

/***/ }),
/* 34 */
/***/ (function(module, exports) {

/***
 * @author vimmingshe@gmail.com
 * @date 30/01/2018 5:14 PM
 * @description: get timestamp that it 's unit is second
 ***/


/****
 *
 * @param cal
 * @param d {number} day
 * @param m {number} minute
 * @param h  {number} hour
 * @param s {number} second
 * @returns {number}
 */
function getTimeStamp({ cal = new Date(), d = 0, h = 0, m = 0 , s = 0 } = {}) {
    return Math.floor(cal.getTime() / 1000) + d*24*60*60 + h*60*60 + m*60 + s;
}

module.exports = getTimeStamp;

/***/ }),
/* 35 */
/***/ (function(module, exports) {

/***
 * created by @vimmingshe@gmail.com
 * @date 26/02/2018 3:00 PM
 * @description:
 ***/

function toDataUri(url, callback) {
    var image = new Image();
    image.crossOrigin="anonymous";

    image.onload =  () => {
        var canvas = document.createElement('canvas');
        canvas.width = this.naturalWidth; // or 'width' if you want a special/scaled size
        canvas.height = this.naturalHeight; // or 'height' if you want a special/scaled size

        canvas.getContext('2d').drawImage(this, 0, 0);

        // Get raw image data
        //callback(canvas.toDataURL('image/png').replace(/^data:image\/(png|jpg);base64,/, ''));

        // ... or get as Data URI
        callback(canvas.toDataURL('image/png'));
    };

    image.src = url;
}

module.exports = toDataUri;

/***/ })
/******/ ]);
});