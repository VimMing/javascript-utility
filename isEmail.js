/****
 * @description judge email address
 * @param str {string}
 * @returns {boolean}
 */
function isEmail(str) {
    return /^[\w\.]+@\w+\.\w+$/.test(str);
}

module.exports = isEmail;