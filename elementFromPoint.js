/***
 * @description get element node from mouse point
*  @param e{object} e is mouse event
 *  @return {null | elementNode}
* */

const getScrollLeft = require('./getScrollLeft');
const getScrollTop = require('./getScrollTop');
function elementFromPoint(e) {
    let scrollLeft = getScrollLeft();
    let scrollTop = getScrollTop();
    return document.elementFromPoint(e.pageX - (scrollLeft || window.pageXOffset), e.pageY - (window.pageYOffset || scrollTop));
}

module.exports = elementFromPoint;
