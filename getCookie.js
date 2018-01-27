/**
 *
 * @description get cookies
 * @param  key{String}
 * @return value{String}
 */
function getCookie(key) {
    let arr = document.cookie.split(';');
    for (let i = 0; i < arr.length; i++) {
        let tempArr = arr[i].trim().split('=');
        if (tempArr[0] === key) {
            return decodeURIComponent(tempArr[1]);
        }
    }
    return '';
}

module.exports = getCookie;