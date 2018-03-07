const getScrollTop = require('./getScrollTop');
const setScrollTop = require('./setScrollTop');
const requestAnimationFrame = (() => {
    let c = (callback) => {
        window.setTimeout(callback, 10);
    };
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame || c;

})();
/**
 * 
 * @desc  scroll to given place during given time
 * @param {Number} to 
 * @param {Number} duration 
 */
function scrollTo(to, duration) {
    if (duration < 0) {
        setScrollTop(to);
        return;
    }
    let diff = to - getScrollTop();
    if (diff === 0) return;
    let step = (diff / duration)*2.718;
    requestAnimationFrame(
         () => {
            if (Math.abs(step) > Math.abs(diff)) {
                setScrollTop(getScrollTop() + diff);
                return;
            }
            setScrollTop(getScrollTop() + step);
            if (diff > 0 && getScrollTop() >= to || diff < 0 && getScrollTop() <= to) {
                return;
            }
            scrollTo(to, duration - 10);
        });
}

module.exports = scrollTo;