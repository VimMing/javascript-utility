/***
 * @description judge china id card
 * @param str {string}
 * @returns {boolean}
 */

function isChinaIDCard(str) {
    let res = /^\d{17}(\d|X|x)$/.test(str);
    if(res){
        let sum = 0;
        let coefficient = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
        let verification = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2];
        for(let [key, value] of coefficient.entries()){
            sum += value*parseInt(str[key]);
        }
        let vCode = verification[sum % 11];
        res = str.toUpperCase().endsWith(vCode.toString());
    }
    return res;
}

module.exports = isChinaIDCard;