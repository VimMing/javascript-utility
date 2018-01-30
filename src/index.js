const s_random = require('./random/s_random');
const n_random = require('./random/n_random');

const isChinaIDCard = require('./regexp/isChinaIDCard');
const isEmail =  require('./regexp/isEmail');
const isPhone = require('./regexp/isPhone');
const isUrl = require('./regexp/isUrl');
const getUrlParam = require('./regexp/getUrlParam');
const getOS = require('./regexp/getOS');
const getExplore = require('./regexp/getExplore');

const closestNode  = require('./dom/closestNode');
const  elementFromPoint = require('./dom/elementFromPoint');
const  getCaretPosition = require('./dom/getCaretPosition');
const  getScrollLeft = require('./dom/getScrollLeft');
const  getScrollTop = require('./dom/getScrollTop');
const  nextNode = require('./dom/nextNode');
const  parentNode = require('./dom/parentNode');
const  prevNode = require('./dom/prevNode');
const  scrollTo = require('./dom/scrollTo');
const  setScrollTop = require('./dom/setScrollTop');
const  offset = require('./dom/offset');
const  css = require('./dom/css');
const getMaxZIndex = require('./dom/getMaxZIndex');

const hasClass= require('./dom/hasClass');
const addClass= require('./dom/addClass');
const removeClass= require('./dom/removeClass');
const toggleClass= require('./dom/toggleClass');


const  getCookie = require('./cookie/getCookie');
const  setCookie = require('./cookie/setCookie');
const  removeCookie = require('./cookie/removeCookie');

const keyCode = require('./keycode/keyCode');

const throttle = require('./function/throttle');

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
    throttle,

};