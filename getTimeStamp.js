/***
 * @author vimmingshe@gmail.com
 * @date 30/01/2018 5:14 PM
 * @description: get timestamp that it 's unit is second
 ***/


/****
 *
 * @param cal
 * @param d {number} day
 * @param m {number} minute
 * @param h  {number} hour
 * @param s {number} second
 * @returns {number}
 */
function getTimeStamp({ cal = new Date(), d = 0, h = 0, m = 0 , s = 0 } = {}) {
    return Math.floor(cal.getTime() / 1000) + d*24*60*60 + h*60*60 + m*60 + s;
}

module.exports = getTimeStamp;