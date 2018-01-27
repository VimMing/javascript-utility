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