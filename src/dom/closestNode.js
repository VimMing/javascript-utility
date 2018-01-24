
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
