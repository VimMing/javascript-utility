/**
 *
 * @description set Cookie
 * @param key{String}
 * @param value{String}
 * @param days{Number}
 */
function setCookie(key, value, days) {
    let date = new Date();
    date.setDate(date.getDate() + days);
    document.cookie = `${key}=${value};expires=${date}`;
}

module.exports = setCookie;