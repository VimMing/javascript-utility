const hasClass = require('./hasClass');

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