const s_random = require('./random/s_random');
const n_random = require('./random/n_random');

const isChinaIDCard = require('./regexp/isChinaIDCard');
const isEmail =  require('./regexp/isEmail');
const isPhone = require('./regexp/isPhone');
const isUrl = require('./regexp/isUrl');
const getUrlParam = require('./regexp/getUrlParam');

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


module.exports = {
    // random
    s_random, n_random,
    // regexp
    isChinaIDCard, isEmail, isPhone, isUrl, getUrlParam,
    // dom
    closestNode, elementFromPoint, getCaretPosition, getScrollLeft, getScrollTop, nextNode, parentNode, prevNode, scrollTo, setScrollTop, offset,




};