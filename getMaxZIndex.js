const css = require('./css');

/**
 * get max z-index in the element 's children
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