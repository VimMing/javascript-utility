/***
 * @author vimmingshe@gmail.com
 * @date 30/01/2018 8:59 AM
 * @description: limit frequency of function call
 * @detail https://css-tricks.com/debouncing-throttling-explained-examples/
 ***/

/****
 *
 * @param delay {number} unit: ms,  interval time of two same function invoked
 * @param callback {function} callback function
 * @param debounceMode {boolean} is debounce mode
 * @param immediate {boolean} if true invoked immediate then callback can't execute during delay ms
 * @returns {function} return wrap function
 */


/**@throttleMode **/
// Returns a function, that, when invoked, will only be triggered at most once
// during a given window of time.

/**@debounceMode**/
// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.


function throttle(delay, callback, debounceMode = false, immediate = false) {
    let timeoutID, lastExec = 0;

    function wrapper(...args) {

        let elapsed = lastExec === 0 ? 0 : Number(new Date()) - lastExec;

        let exec = () => {
            lastExec = Number(new Date());
            callback.apply(this, args);
            if (timeoutID) clearTimeout(timeoutID);
            timeoutID = undefined;
        };

        if (debounceMode === true) {
            if (immediate === true && (lastExec === 0 || delay < elapsed)) {
                exec();
            } else {
                if (timeoutID) clearTimeout(timeoutID);
                timeoutID = setTimeout(exec, delay);
            }
        } else if (delay < elapsed && timeoutID || (debounceMode === false && (lastExec === 0 || delay < elapsed)) )
        {
            if (timeoutID) clearTimeout(timeoutID);
            timeoutID = undefined;
            exec();
        }

    }

    return wrapper;

}

module.exports = throttle;



