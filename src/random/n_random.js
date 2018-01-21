/**
 *
 * @desc generate specified range [min, max] numbers
 * @param  {Number} min
 * @param  {Number} max
 * @param  {Number} n
 * @return {Number}
 */
function n_random(min, max, n = 1) {
    let res = [];
    for(let i = 0; i < n ; i++){
        res.push(Math.floor(Math.random() * (max-min+1) )+ min);
    }
    if(n <= 1)
        return res[0];
    else{
        return res;
    }
}

module.exports = n_random;