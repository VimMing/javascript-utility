/***
 * @description get caret position
 * @param el {elementNode}
 * @return {number}
 */

function getCaretPosition (el) {

    var iCaretPos = 0;
    // IE Support
    if (document.selection) {
        el.focus();
        // To get cursor position, get empty selection range
        var oSel = document.selection.createRange();
        // Move selection start to 0 position
        oSel.moveStart('character', -el.value.length);
        // The caret position is selection length
        iCaretPos = oSel.text.length;
    }
    else if (el.selectionStart || el.selectionStart == '0')
        iCaretPos = el.selectionStart;
    return iCaretPos;
}

module.exports = getCaretPosition;