const s_random = require('./random/s_random');
const n_random = require('./random/n_random');

const isChinaIDCard = require('./regexp/isChinaIDCard');
const isEmail =  require('./regexp/isEmail');
const isPhone = require('./regexp/isPhone');
const isUrl = require('./regexp/isUrl');
const getUrlParam = require('./regexp/getUrlParam');



module.exports = {
    // random
    s_random, n_random,
    // regexp
    isChinaIDCard, isEmail, isPhone, isUrl, getUrlParam
    // dom


};