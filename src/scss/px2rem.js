/***
 * created by @vimmingshe@gmail.com
 * @date 07/03/2018 10:39 AM
 * @description:
 ***/
const debounce = require('../function/debounce');

function px2rem(ratio = 20, ms = 500, maxWidth = 750) {
    let setRootFontSize = () => {
        let clientWidth = (document.documentElement.clientWidth || document.body.clientWidth);
        if(clientWidth < maxWidth)
            document.documentElement.style.fontSize = `${clientWidth / ratio}px`;
        else
            document.documentElement.style.fontSize = `${maxWidth / ratio}px`;
    };
    let setBodyAttribute = () => {
        let dpr = window.devicePixelRatio || 1;
        document.documentElement.setAttribute('data-dpr', dpr);
        let viewportEl = document.querySelector('meta[name="viewport"]');
        if(viewportEl === null || viewportEl === undefined){
            let content =  "width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no";
            viewportEl = document.createElement('meta');
            viewportEl.setAttribute('name', 'viewport');
            viewportEl.setAttribute('content', content);
            document.head.appendChild(viewportEl);
        }
    };
    let wrap = debounce(setRootFontSize, ms);

    window.addEventListener('resize', (e) => {
        wrap(e);
    });

    window.addEventListener('load', (e) => {
       setBodyAttribute();
       setRootFontSize();
    });

    setBodyAttribute();
    setRootFontSize();
}

module.exports = px2rem;
