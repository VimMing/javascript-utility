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