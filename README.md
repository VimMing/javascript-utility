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
method one
```
const utility = require('vim_utility');
utility.s_random(7); // Generates a random string of length 7

```
method two

```
import {s_random} from "vim_utility/utility"
s_random(7);
```

## doc

## scss

[px2rem](https://github.com/VimMing/javascript-utility/blob/master/src/scss/px2rem.js)
> click to see code

```
# js file
// import px2rem.js in your bootstrap js
import {px2rem} from "vim_utility/utility"

...

// Dynamically change the html font-size when window's size changed
px2rem();

...

# scss file
@import 'vim_utility/src/scss/px2rem.scss';
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
[getCookie](https://github.com/VimMing/javascript-utility/blob/master/getCookie.js)

[removeCookie](https://github.com/VimMing/javascript-utility/blob/master/removeCookie.js)

[setCookie](https://github.com/VimMing/javascript-utility/blob/master/Cookieset.js)

### dom

[addClass](https://github.com/VimMing/javascript-utility/blob/master/addClass.js)

[closestNode](https://github.com/VimMing/javascript-utility/blob/master/closestNode.js)

[css](https://github.com/VimMing/javascript-utility/blob/master/css.js)

[elementFromPoint](https://github.com/VimMing/javascript-utility/blob/master/elementFromPoint.js)

[getCaretPosition](https://github.com/VimMing/javascript-utility/blob/master/getCaretPosition.js)

[getMaxZIndex](https://github.com/VimMing/javascript-utility/blob/master/getMaxZIndex.js)

[getScrollLeft](https://github.com/VimMing/javascript-utility/blob/master/getScrollLeft.js)

[getScrollTop](https://github.com/VimMing/javascript-utility/blob/master/getScrollTop.js)

[hasClass](https://github.com/VimMing/javascript-utility/blob/master/hasClass.js)

[nextNode](https://github.com/VimMing/javascript-utility/blob/master/nextNode.js)

[offset](https://github.com/VimMing/javascript-utility/blob/master/offset.js)

[parentNode](https://github.com/VimMing/javascript-utility/blob/master/parentNode.js)

[prevNode](https://github.com/VimMing/javascript-utility/blob/master/prevNode.js)

[removeClass](https://github.com/VimMing/javascript-utility/blob/master/removeClass.js)

[scrollTo](https://github.com/VimMing/javascript-utility/blob/master/scrollTo.js)

[setScrollTop](https://github.com/VimMing/javascript-utility/blob/master/setScrollTop.js)

[toggleClass](https://github.com/VimMing/javascript-utility/blob/master/toggleClass.js)

[toDataUri](https://github.com/VimMing/javascript-utility/blob/master/toDataUri.js)


### function

[throttle](https://github.com/VimMing/javascript-utility/blob/master/throttle.js)

[debounce](https://github.com/VimMing/javascript-utility/blob/master/debounce.js)

### keycode

[keyCode](https://github.com/VimMing/javascript-utility/blob/master/keyCode.js)



### object

[deepClone](https://github.com/VimMing/javascript-utility/blob/master/deepClone.js)



### random

[n_random](https://github.com/VimMing/javascript-utility/blob/master/n_random.js)

[s_random](https://github.com/VimMing/javascript-utility/blob/master/s_random.js)







### regexp







[getExplore](https://github.com/VimMing/javascript-utility/blob/master/getExplore.js)

[getOS](https://github.com/VimMing/javascript-utility/blob/master/getOS.js)

[getUrlParam](https://github.com/VimMing/javascript-utility/blob/master/getUrlParam.js)

[isChinaIDCard](https://github.com/VimMing/javascript-utility/blob/master/isChinaIDCard.js)

[isEmail](https://github.com/VimMing/javascript-utility/blob/master/isEmail.js)

[isPhone](https://github.com/VimMing/javascript-utility/blob/master/isPhone.js)

[isUrl](https://github.com/VimMing/javascript-utility/blob/master/isUrl.js)








### time

[getTimeStamp](https://github.com/VimMing/javascript-utility/blob/master/getTimeStamp.js)





