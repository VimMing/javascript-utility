/**
 * @description get previous element sibling
 * @param el {nodeElement}
 * @param selector {string}
 * @returns {*}
 */
function prevNode(el, selector) {
    el = el.previousElementSibling;
    while (el !== null && el !== undefined) {
        if (selector === undefined || selector === null || el.matches(selector)) {
            return el;
        }
        el = el.previousElementSibling;
    }
    return null;
}

module.exports = prevNode;

