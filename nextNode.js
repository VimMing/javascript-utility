/**
 * @description get next element sibling
 * @param el {nodeElement}
 * @param selector {string}
 * @returns {*}
 */

function nextNode(el, selector) {
    el = el.nextElementSibling;
    while (el !== null && el !== undefined) {
        if (selector === undefined || selector === null || el.matches(selector)) {
            return el;
        }
        el = el.nextElementSibling;
    }
    return null;
}

module.exports = nextNode;