/***
 * created by @vimmingshe@gmail.com
 * @date 27/02/2018 3:36 PM
 * @description:
 ***/
const throttle = require('./throttle');

function debounce(callback, delay) {
    return throttle(delay, callback, true);
}

module.exports = debounce;