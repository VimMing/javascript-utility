/**
 * 
 * @description set distance that is scrollbar from window top
 */
function setScrollTop(value) {
    window.scrollTo(0, value);
    return value;
}

module.exports = setScrollTop;