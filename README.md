# javascript-utility
![Build Status](https://travis-ci.org/VimMing/javascript-utility.svg?branch=master)
[![Coverage Status](https://coveralls.io/repos/github/VimMing/javascript-utility/badge.svg?branch=master)](https://coveralls.io/github/VimMing/javascript-utility?branch=master)
![![npm](https://www.npmjs.com/package/vim_utility)](https://img.shields.io/npm/dw/localeval.svg)
[![GitHub stars](https://img.shields.io/github/stars/VimMing/javascript-utility.svg)](https://github.com/VimMing/javascript-utility/stargazers)



## Install

```

npm install --save-dev vim_utility

```

## usage
```
import {s_random} from "vim_utility"
s_random(7);
```

## doc

### scss

[px2rem](https://github.com/VimMing/javascript-utility/blob/master/src/scss/px2rem.js)
> click to see code


```javascript
// import px2rem.js in your bootstrap js
import {px2rem} from "vim_utility/utility"



// Dynamically change the html font-size when window's size changed
px2rem();
```


```scss
@import '~vim_utility/src/scss/px2rem.scss';
$designWidth : 750px; /*Design draft width*/

.example{
  height: px2rem(200px);
  border: solid 1px black;
  	font-size: 12px ;
  	[data-dpr="2"] &{
  		font-size: 24px;
  	}
  	[data-dpr="3"] &{
  		font-size: 36px;
  	}
}
 
```

### cookie
[getCookie](https://github.com/VimMing/javascript-utility/blob/master/src/cookie/getCookie.js)

```javascript
// assuming there is (yourKey => yourValue) in the cookie
getCookie(yourKey); // return yourValue
```

[removeCookie](https://github.com/VimMing/javascript-utility/blob/master/src/cookie/removeCookie.js)

```javascript
removeCookie(yourKey);
```

[setCookie](https://github.com/VimMing/javascript-utility/blob/master/src/cookie/setCookie.js)

```javascript
setCookie(key, value, days);
```

### dom

[addClass](https://github.com/VimMing/javascript-utility/blob/master/src/dom/addClass.js)

```javascript
addClass(ele, cls); /*ele instance of Node, cls is string*/
```

[closestNode](https://github.com/VimMing/javascript-utility/blob/master/src/dom/closestNode.js)

```javascript
closestNode(el, selector); /*Similar to the jquery closestNode method*/
```


[css](https://github.com/VimMing/javascript-utility/blob/master/src/dom/css.js)


```javascript
css(ele, prop); /*get css attribute value*/
```

[elementFromPoint](https://github.com/VimMing/javascript-utility/blob/master/src/dom/elementFromPoint.js)

```javascript
elementFromPoint(e); // e is mouse event
// return Node

```

[getCaretPosition](https://github.com/VimMing/javascript-utility/blob/master/src/dom/getCaretPosition.js)

```javascript
getCaretPosition (el); // return number;

```

[getMaxZIndex](https://github.com/VimMing/javascript-utility/blob/master/src/dom/getMaxZIndex.js)

```javascript
getMaxZIndex(ele = undefined); // if ele === undefined , return max z-index value in the document
```

[getScrollLeft](https://github.com/VimMing/javascript-utility/blob/master/src/dom/getScrollLeft.js)

```javascript
getScrollLeft();

```

[getScrollTop](https://github.com/VimMing/javascript-utility/blob/master/src/dom/getScrollTop.js)

```javascript
getScrollTop();
```

[hasClass](https://github.com/VimMing/javascript-utility/blob/master/src/dom/hasClass.js)

```javascript
hasClass(ele, cls);
```

[nextNode](https://github.com/VimMing/javascript-utility/blob/master/src/dom/nextNode.js)

```javascript
nextNode(el, selector);
```

[offset](https://github.com/VimMing/javascript-utility/blob/master/src/dom/offset.js)

```javascript
offset(ele); // get distance away from window
/* @return
* {
    left: x,  
     top: y
   }
* */
```

[parentNode](https://github.com/VimMing/javascript-utility/blob/master/src/dom/parentNode.js)

```javascript
parentNode(el, selector, root=undefined);
```

[prevNode](https://github.com/VimMing/javascript-utility/blob/master/src/dom/prevNode.js)

```javascript
prevNode(el, selector);
```

[removeClass](https://github.com/VimMing/javascript-utility/blob/master/src/dom/removeClass.js)

```javascript
removeClass(ele, cls);
```

[scrollTo](https://github.com/VimMing/javascript-utility/blob/master/src/dom/scrollTo.js)

```javascript
scrollTo(to, duration); //  scroll to given place during given time
```

[setScrollTop](https://github.com/VimMing/javascript-utility/blob/master/src/dom/setScrollTop.js)

```javascript
setScrollTop(value); // it exec window.scrollTo();
```

[toggleClass](https://github.com/VimMing/javascript-utility/blob/master/src/dom/toggleClass.js)

```javascript
toggleClass(ele, cls);
```

[toDataUri](https://github.com/VimMing/javascript-utility/blob/master/src/dom/toDataUri.js)

```javascript
toDataUri(url, (d) => {console.log(d);}); // transfer image png/jpg to base64
```


### function

[throttle](https://github.com/VimMing/javascript-utility/blob/master/src/function/throttle.js)

```javascript
throttle(delay, callback, debounceMode = false, immediate = false);

```

[debounce](https://github.com/VimMing/javascript-utility/blob/master/src/function/debounce.js)

```javascript
let wrap = debounce(/*callback*/ (e) => {console.log(e);}, /*delay*/ 500); // return wrapper function;
window.addEventListener('resize', (e) => {wrap(e)});
```

### keycode

[keyCode](https://github.com/VimMing/javascript-utility/blob/master/keycode/keyCode.js)

```javascript
keyCode(name); // return keyCode Number;
```



### object

[deepClone](https://github.com/VimMing/javascript-utility/blob/master/object/deepClone.js)

```javascript
deepClone(obj); // return any;
```



### random

[n_random](https://github.com/VimMing/javascript-utility/blob/master/random/n_random.js)

```javascript
n_random(min, max, n = 1);
```

[s_random](https://github.com/VimMing/javascript-utility/blob/master/s_random.js)

```javascript
s_random(7); // return string it's length is 7
```







### regexp







[getExplore](https://github.com/VimMing/javascript-utility/blob/master/src/regexp/getExplore.js)

```javascript
getExplore(); // get explore type and version
```

[getOS](https://github.com/VimMing/javascript-utility/blob/master/src/regexp/getOS.js)

```javascript
getOS();
```

[getUrlParam](https://github.com/VimMing/javascript-utility/blob/master/src/regexp/getUrlParam.js)

```javascript
getUrlParam(url); // return Map;
```

[isChinaIDCard](https://github.com/VimMing/javascript-utility/blob/master/src/regexp/isChinaIDCard.js)

```javascript
isChinaIDCard(str); // return boolean
```

[isEmail](https://github.com/VimMing/javascript-utility/blob/master/src/regexp/isEmail.js)

```javascript
isEmail(str); // return boolean
```

[isPhone](https://github.com/VimMing/javascript-utility/blob/master/src/regexp/isPhone.js)

```javascript
isPhone(str); // return boolean, validator chinese phone number
```

[isUrl](https://github.com/VimMing/javascript-utility/blob/master/src/regexp/isUrl.js)

```javascript
isUrl(url); // return boolean
```








### time

[getTimeStamp](https://github.com/VimMing/javascript-utility/blob/master/src/time/getTimeStamp.js)

```javascript
getTimeStamp({ cal = new Date(), d = 0, h = 0, m = 0 , s = 0 } = {}); // return number(seconds)
```





