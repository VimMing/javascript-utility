!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.vim_utility=e():t.vim_utility=e()}("undefined"!=typeof self?self:this,function(){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:o})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e){t.exports=function(t){return/[\d\w-@:%._+~#=]{2,256}\.[a-z]{2,6}\b([\d\w-@:%_+.~#?&/=]*)/i.test(t)}},function(t,e,n){const o=n(2),r=n(3),u=n(4),i=n(5),f=n(6),s=n(0),l=n(7);t.exports={s_random:o,n_random:r,isChinaIDCard:u,isEmail:i,isPhone:f,isUrl:s,getUrlParam:l}},function(t,e){t.exports=function(t=6){let e="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";for(let o=0;o<t;o++)e+=n[Math.floor(Math.random()*n.length)];return e}},function(t,e){t.exports=function(t,e,n=1){let o=[];for(let r=0;r<n;r++)o.push(Math.floor(Math.random()*(e-t+1))+t);return n<=1?o[0]:o}},function(t,e){t.exports=function(t){let e=/^\d{17}(\d|X|x)$/.test(t);if(e){let n=0,o=[7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2],r=[1,0,"X",9,8,7,6,5,4,3,2];for(let[e,r]of o.entries())n+=r*parseInt(t[e]);let u=r[n%11];e=t.toUpperCase().endsWith(u.toString())}return e}},function(t,e){t.exports=function(t){return/^[\w\.]+@\w+\.\w+$/.test(t)}},function(t,e){t.exports=function(t){return/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/.test(t)}},function(t,e,n){const o=n(0);t.exports=function(t){let e=new Map,n=/\??((\w+)\=(\w+))\&?/g;if(!o(t))return e;let r=null;do{null!==(r=n.exec(t))&&e.set(r[2],r[3])}while(null!==r);return e}}])});