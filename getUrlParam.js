const isUrl = require("./isUrl");

/****
 * @description extract parameters from href
 * @param str{string}
 * @returns {Map}
 */
function getUrlParam(str) {
    let res = new Map(), reg = /\??((\w+)\=(\w+))\&?/g;
    if(!isUrl(str)) return res;
    let match = null;
    do{
        match = reg.exec(str);
        if(match !== null) res.set(match[2], match[3]);
    }while(match !== null);

    return res;
}

module.exports = getUrlParam;