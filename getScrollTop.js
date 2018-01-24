/**
 * 
 * @description get distance that is scrollbar from window top
 */
function getScrollTop() {
    return (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
}

module.exports = getScrollTop;