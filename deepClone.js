/***
 * @author vimmingshe@gmail.com
 * @date 30/01/2018 4:41 PM
 * @description:
 ***/

/**
 * @description deep clone 
 * @param {Any} values
 */
function deepClone(values) {
    let copy;

    // Handle the 3 simple types, and null or undefined
    if (values === undefined || null === values || "object" !== typeof values) return values;

    // Handle Date
    if (values instanceof Date) {
        copy = new Date();
        copy.setTime(values.getTime());
        return copy;
    }

    // Handle Array
    if (values instanceof Array) {
        copy = [];
        for (let i = 0, len = values.length; i < len; i++) {
            copy[i] = deepClone(values[i]);
        }
        return copy;
    }

    // Handle Object
    if (values instanceof Object) {
        copy = {};
        for (let key in values) {
            if (values.hasOwnProperty(key)) copy[key] = deepClone(values[key]);
        }
        return copy;
    }

    throw new Error("Unable to copy values! Its type isn't supported.");
}

module.exports = deepClone;