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