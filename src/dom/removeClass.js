const hasClass = require('./hasClass');

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