
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