!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.vim_utility=e():t.vim_utility=e()}("undefined"!=typeof self?self:this,function(){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:o})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=7)}([function(t,e){t.exports=function(){return document.documentElement&&document.documentElement.scrollTop||document.body.scrollTop}},function(t,e){t.exports=function(t,e){return t instanceof Node&&t.classList.contains(e)}},function(t,e){t.exports=function(t){return/[\d\w-@:%._+~#=]{2,256}\.[a-z]{2,6}\b([\d\w-@:%_+.~#?&/=]*)/i.test(t)}},function(t,e){t.exports=function(){return document.documentElement&&document.documentElement.scrollLeft||document.body.scrollLeft}},function(t,e){t.exports=function(t){return window.scrollTo(0,t),t}},function(t,e){t.exports=function(t,e){let n=null;return getComputedStyle?n=document.defaultView.getComputedStyle(t,null).getPropertyValue(e):t.currentStyle&&(n=t.currentStyle[e]),n}},function(t,e){t.exports=function(t,e,n){let o=new Date;o.setDate(o.getDate()+n),document.cookie=`${t}=${e};expires=${o}`}},function(t,e,n){const o=n(8),r=n(9),i=n(10),u=n(11),l=n(12),c=n(2),s=n(13),f=n(14),a=n(15),d=n(16),p=n(3),m=n(0),x=n(17),g=n(18),h=n(19),w=n(20),v=n(4),b=n(21),y=n(5),S=n(22),C=n(1),E=n(23),M=n(24),N=n(25),P=n(26),L=n(6),T=n(27);t.exports={s_random:o,n_random:r,isChinaIDCard:i,isEmail:u,isPhone:l,isUrl:c,getUrlParam:s,css:y,getMaxZIndex:S,closestNode:f,elementFromPoint:a,getCaretPosition:d,getScrollLeft:p,getScrollTop:m,nextNode:x,parentNode:g,prevNode:h,scrollTo:w,setScrollTop:v,offset:b,hasClass:C,removeClass:M,addClass:E,toggleClass:N,getCookie:P,setCookie:L,removeCookie:T}},function(t,e){t.exports=function(t=6){let e="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";for(let o=0;o<t;o++)e+=n[Math.floor(Math.random()*n.length)];return e}},function(t,e){t.exports=function(t,e,n=1){let o=[];for(let r=0;r<n;r++)o.push(Math.floor(Math.random()*(e-t+1))+t);return n<=1?o[0]:o}},function(t,e){t.exports=function(t){let e=/^\d{17}(\d|X|x)$/.test(t);if(e){let n=0,o=[7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2],r=[1,0,"X",9,8,7,6,5,4,3,2];for(let[e,r]of o.entries())n+=r*parseInt(t[e]);let i=r[n%11];e=t.toUpperCase().endsWith(i.toString())}return e}},function(t,e){t.exports=function(t){return/^[\w\.]+@\w+\.\w+$/.test(t)}},function(t,e){t.exports=function(t){return/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/.test(t)}},function(t,e,n){const o=n(2);t.exports=function(t){let e=new Map,n=/\??((\w+)\=(\w+))\&?/g;if(!o(t))return e;let r=null;do{null!==(r=n.exec(t))&&e.set(r[2],r[3])}while(null!==r);return e}},function(t,e){t.exports=function(t,e){for(;null!==t&&void 0!==t;){if(t.matches(e))return t;t=t&&t.parentElement}return null}},function(t,e,n){const o=n(3),r=n(0);t.exports=function(t){let e=o(),n=r();return document.elementFromPoint(t.pageX-(e||window.pageXOffset),t.pageY-(window.pageYOffset||n))}},function(t,e){t.exports=function(t){var e=0;if(document.selection){t.focus();var n=document.selection.createRange();n.moveStart("character",-t.value.length),e=n.text.length}else(t.selectionStart||"0"==t.selectionStart)&&(e=t.selectionStart);return e}},function(t,e){t.exports=function(t,e){for(t=t.nextElementSibling;null!==t&&void 0!==t;){if(void 0===e||null===e||t.matches(e))return t;t=t.nextElementSibling}return null}},function(t,e){t.exports=function(t,e,n){for(t=t&&t.parentElement;null!==t&&void 0!==t;){if(void 0!==n&&!n.hasChildNodes(t)&&n!==t)return null;if(t.matches(e))return t;t=t&&t.parentElement}return null}},function(t,e){t.exports=function(t,e){for(t=t.previousElementSibling;null!==t&&void 0!==t;){if(void 0===e||null===e||t.matches(e))return t;t=t.previousElementSibling}return null}},function(t,e,n){const o=n(0),r=n(4),i=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,10)};t.exports=function t(e,n){if(n<0)return void r(e);let u=e-o();if(0===u)return;let l=u/n*2.718;i(function(){Math.abs(l)>Math.abs(u)?r(o()+u):(r(o()+l),u>0&&o()>=e||u<0&&o()<=e||t(e,n-10))})}},function(t,e){t.exports=function(t){let e={left:0,top:0};for(;t;)e.left+=t.offsetLeft,e.top+=t.offsetTop,t=t.offsetParent;return e}},function(t,e,n){const o=n(5);t.exports=function t(e){let n,r=void 0===e?document.body.children:e.children,i=0;for(let e of r)i=i<(n="auto"===(n=t(e))?0:parseInt(n))?n:i;return e instanceof Node&&(i=i<(n="auto"===(n=o(e,"z-index"))?0:parseInt(n))?n:i),i}},function(t,e,n){const o=n(1);t.exports=function(t,e){!o()&&t instanceof Node&&t.classList.add(e)}},function(t,e,n){const o=n(1);t.exports=function(t,e){o(t,e)&&t.classList.remove(e)}},function(t,e){t.exports=function(t,e){t instanceof Node&&t.classList.toggle(e)}},function(t,e){t.exports=function(t){let e=document.cookie.split(";");for(let n=0;n<e.length;n++){let o=e[n].trim().split("=");if(o[0]===t)return decodeURIComponent(o[1])}return""}},function(t,e,n){const o=n(6);t.exports=function(t){o(t,"",-1)}}])});