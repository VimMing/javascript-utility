const setCookie = require('./setCookie');

/***
 * @description remove cookies
 * @param key{string}
 */
function removeCookie(key) {
    setCookie(key, "", -1);
}

module.exports = removeCookie;