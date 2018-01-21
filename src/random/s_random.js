/******
 *
 * @param n{number}
 * @returns {string}
 * @effect produce random string
 */
function s_random(n = 6) {
    let text = "" , possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < n; i++)
        text += possible[Math.floor(Math.random() * possible.length)];
    return text;
}

module.exports = s_random;