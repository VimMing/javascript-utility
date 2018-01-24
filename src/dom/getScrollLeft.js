/**
 *
 * @description get distance that is scrollbar from window left
 */
function getScrollLeft() {
    return (document.documentElement && document.documentElement.scrollLeft) || document.body.scrollLeft;
}

module.exports = getScrollLeft;