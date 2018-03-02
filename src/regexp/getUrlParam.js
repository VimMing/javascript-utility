const isUrl = require("./isUrl");

/****
 * @description extract parameters from href
 * @param str{string}
 * @returns {Map}
 */
function getUrlParam(str) {
    str = decodeURI(str);
    let res = new Map(), reg = /((\S+?)\=(\S+?))\&/g;
    if(!isUrl(str)) return res;
    str = str.slice(str.indexOf('?') + 1) + '&';
    let match = null;
    do{
        match = reg.exec(str);
        if(match !== null) res.set(match[2], match[3]);
    }while(match !== null);

    return res;
}

module.exports = getUrlParam;