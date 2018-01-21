/****
 * @description judge whether str is url
 * @param str {string}
 * @returns {boolean}
 */

function isUrl(str) {
    return /[\d\w-@:%._+~#=]{2,256}\.[a-z]{2,6}\b([\d\w-@:%_+.~#?&/=]*)/i.test(str);
}

module.exports = isUrl;