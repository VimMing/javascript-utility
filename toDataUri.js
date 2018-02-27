/***
 * created by @vimmingshe@gmail.com
 * @date 26/02/2018 3:00 PM
 * @description:
 ***/

function toDataUri(url, callback) {
    var image = new Image();
    image.crossOrigin="anonymous";

    image.onload = function () {
        var canvas = document.createElement('canvas');
        canvas.width = this.naturalWidth; // or 'width' if you want a special/scaled size
        canvas.height = this.naturalHeight; // or 'height' if you want a special/scaled size

        canvas.getContext('2d').drawImage(this, 0, 0);

        // Get raw image data
        //callback(canvas.toDataURL('image/png').replace(/^data:image\/(png|jpg);base64,/, ''));

        // ... or get as Data URI
        callback(canvas.toDataURL('image/png'));
    };

    image.src = url;
}

module.exports = toDataUri;