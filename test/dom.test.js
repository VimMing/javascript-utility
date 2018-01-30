describe('Dom API:', function () {
    describe('#getScrollTop()', function () {
        let $body = document.body,
            bodyHeight = getComputedStyle($body).getPropertyValue('height'),
            length = 20;
        before(function () {
            $body.style.height = '10000px';
            vim_utility.setScrollTop(length)
        });
        it(`vim_utility.getScrollTop() should return true`, function () {
            assert(vim_utility.getScrollTop() === length)
        });
        after(function () {
            vim_utility.setScrollTop(0);
            $body.style.height = bodyHeight
        })
    });

    describe('#setScrollTop()', function () {
        let $body = document.body,
            bodyHeight = getComputedStyle($body).getPropertyValue('height'),
            length = 20;
        before(function () {
            $body.style.height = '10000px';
            vim_utility.setScrollTop(length)
        });
        it(`vim_utility.getScrollTop() should return true`, function () {
            vim_utility.setScrollTop(length);
            assert(vim_utility.getScrollTop() === length)
        });
        after(function () {
            vim_utility.setScrollTop(0);
            $body.style.height = bodyHeight
        })
    });

    describe('#offset()', function () {
        let $ele = null;
        before(function () {
            let div = document.createElement('div');
            div.id = 'J_addClass';
            div.style.position = 'absolute';
            div.style.top = '200px';
            div.style.left = '300px';
            document.body.appendChild(div);
            $ele = document.querySelector('#J_addClass');
        });
        it(`vim_utility.offset() should return true`, function () {
            let offset = vim_utility.offset($ele);
            assert(offset.left === 300 && offset.top === 200)
        });
        after(function () {
            document.body.removeChild($ele)
        })
    });


    describe('#scrollTo()', function () {
        let $body = document.body,
            bodyHeight = getComputedStyle($body).getPropertyValue('height'),
            length = 20,
            y = 100,
            duration = 300;
        before(function () {
            $body.style.height = '10000px'
        });
        it(`vim_utility.scrollTo() should return true`, function (done) {
            vim_utility.scrollTo(y, duration);
            setTimeout(function () {
                assert.equal(vim_utility.getScrollTop() , y);
                done()
            }, duration + 1000)
        });
        after(function () {
            vim_utility.setScrollTop(0);
            $body.style.height = bodyHeight
        })
    });



    describe('#closestNode', function () {

        let $body = document.body;
        let div = document.createElement('div');
        let test = null;
        div.id = "container";
        div.innerHTML = `<div>
                            <ul>
                                <li></li>
                                <li></li>
                                <li id="testId"></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>`;
        before(()=>{
            $body.appendChild(div);
            test = document.getElementById("testId");
        });
        it(`vim_utility.closestNode() get parent element should return true`, () => {
            let el = vim_utility.closestNode(test, "#container");
            assert(el === div);
        });

        it(`vim_utility.closestNode() get itself should return true`, () => {
            let el = vim_utility.closestNode(test, "#testId");
            assert(el === test);
        });

        after(() => {
            $body.removeChild(div);
        });
    });

    describe('#parentNode', function () {

        let $body = document.body;
        let div = document.createElement('div');
        let test = null;
        div.id = "container";
        div.innerHTML = `<div>
                            <ul id="ulId"></ul>
                            <ul>
                                <li></li>
                                <li></li>
                                <li id="testId"></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>`;
        before(()=>{
            $body.appendChild(div);
            test = document.getElementById("testId");
        });
        it(`vim_utility.parentNode() get parent element should return true`, () => {
            let el = vim_utility.parentNode(test, "#container");
            assert(el === div);
        });

        it(`vim_utility.parentNode() get parent element should return false`, () => {
            let el = vim_utility.parentNode(test, "#container", document.getElementById("ulId"));
            assert(el === null);
        });
        after(() => {
            $body.removeChild(div);
        });
    });

    describe('#nextNode', function () {

        let $body = document.body;
        let div = document.createElement('div');
        let test = null;
        div.id = "container";
        div.innerHTML = `<div>
                            <ul id="ulId"></ul>
                            <ul>
                                <li></li>
                                <li></li>
                                <li id="testId"></li>
                                <li></li>
                                <li class="nextC"></li>
                            </ul>
                        </div>`;
        before(()=>{
            $body.appendChild(div);
            test = document.getElementById("testId");
        });
        it(`vim_utility.nextNode() get next element should return true`, () => {
            let el = vim_utility.nextNode(test, ".nextC");
            assert(el === div.getElementsByClassName("nextC")[0]);
        });

        it(`vim_utility.nextNode() get next element should return true`, () => {
            let el = vim_utility.nextNode(test);
            assert(el === test.nextElementSibling);
        });
        after(() => {
            $body.removeChild(div);
        });
    });

    describe('#prevNode', function () {

        let $body = document.body;
        let div = document.createElement('div');
        let test = null;
        div.id = "container";
        div.innerHTML = `<div>
                            <ul id="ulId"></ul>
                            <ul>
                                <li class="prevC"></li>
                                <li></li>
                                <li id="testId"></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>`;
        before(()=>{
            $body.appendChild(div);
            test = document.getElementById("testId");
        });
        it(`vim_utility.prevNode() get previous element should return true`, () => {
            let el = vim_utility.prevNode(test, ".prevC");
            assert(el === div.getElementsByClassName("prevC")[0]);
        });

        it(`vim_utility.prevNode() get previous element should return true`, () => {
            let el = vim_utility.prevNode(test);
            assert(el === test.previousElementSibling);
        });
        after(() => {
            $body.removeChild(div);
        });
    });


    describe('#elementFromPoint()', function () {
        let $ele = null, div = null, height;
        before(function () {
            div = document.createElement('div');
            div.style.position = 'absolute';
            div.style.top = '200px';
            div.style.left = '300px';
            div.style.width = '100px';
            div.style.height = '100px';
            document.body.style.position="relative";
            document.body.appendChild(div);
            height = document.body.height;
            document.body.style.height = "10000px";
        });
        it(`vim_utility.elementFromPoint() should return true`, function () {
            $ele = vim_utility.elementFromPoint({pageX: 310, pageY: 210});
            assert($ele === div);
        });

        it(`vim_utility.elementFromPoint() should return true`, function () {
            vim_utility.setScrollTop(500);
            assert(vim_utility.getScrollTop() === 500);
            div.style.top = "700px";
            $ele = vim_utility.elementFromPoint({pageX: 310, pageY: 710});
            assert($ele === div);
        });
        after(function () {
            document.body.removeChild(div);
            document.body.style.height = height;
        });
    });


    describe('#getCaretPosition()', function () {
        let input = null;
        before(() => {
            input = document.createElement('input');
            input.value="0123456789";
            document.body.appendChild(input);
        });

        it('vim_utility.getCaretPosition should return true', () => {
            input.setSelectionRange(2, 6);
            assert.equal(2 , vim_utility.getCaretPosition(input));
        });

        after(() => {
            document.body.removeChild(input);
        });
    });

    describe('#addClass()', function () {
        let $ele = null
        before(function () {
            let div = document.createElement('div')
            div.id = 'J_addClass'
            document.body.appendChild(div)
            $ele = document.querySelector('#J_addClass')
        })
        it(`vim_utility.addClass($ele, 'test') should return true`, function () {
            vim_utility.addClass($ele, 'test')
            assert(vim_utility.hasClass($ele, 'test'))
        });
        after(function () {
            document.body.removeChild($ele)
        })
    });

    describe('#hasClass()', function () {
        let $ele = null
        before(function () {
            let div = document.createElement('div')
            div.id = 'J_hasClass'
            document.body.appendChild(div)
            $ele = document.querySelector('#J_hasClass')
            vim_utility.addClass($ele, 'test')
        })
        it(`vim_utility.hasClass($ele, 'test') should return true`, function () {
            assert(vim_utility.hasClass($ele, 'test'))
        });
        after(function () {
            document.body.removeChild($ele)
        })
    });

    describe('#removeClass()', function () {
        let $ele = null
        before(function () {
            let div = document.createElement('div')
            div.id = 'J_removeClass'
            document.body.appendChild(div)
            $ele = document.querySelector('#J_removeClass')
            vim_utility.addClass($ele, 'test')
        })
        it(`vim_utility.removeClass($ele, 'test') should return false`, function () {
            vim_utility.removeClass($ele, 'test')
            assert.notEqual(vim_utility.hasClass($ele, 'test'))
        });
        after(function () {
            document.body.removeChild($ele)
        })
    });

    describe('#toggleClass()', function () {
        let $ele = null;
        before(function () {
            let div = document.createElement('div');
            div.id = 'J_removeClass';
            document.body.appendChild(div);
            $ele = document.querySelector('#J_removeClass');
            vim_utility.addClass($ele, 'test');
        });
        it(`vim_utility.removeClass($ele, 'test') should return false`, function () {
            vim_utility.toggleClass($ele, 'test');
            assert.notEqual(vim_utility.hasClass($ele, 'test'));
            vim_utility.toggleClass($ele, 'test');
            assert(vim_utility.hasClass($ele, 'test'));
        });
        after(function () {
            document.body.removeChild($ele)
        })
    });

    describe('#css()', () => {
        let ele = null;
        before(()=>{
            ele = document.createElement('div');
            ele.style.height = "100px";
            ele.style.width = "101px";
            ele.style.backgroundColor = "rgb(0, 0, 253)";
            document.body.appendChild(ele);
        });

        it(`vim_utility.css(ele, 'prop') should return prop value`, () =>{
            assert.equal(vim_utility.css(ele, 'height'), "100px");
            assert.equal(vim_utility.css(ele, 'width'), "101px");
            assert.equal(vim_utility.css(ele, 'background-color'), "rgb(0, 0, 253)");
        });
        after(()=>{
            document.body.removeChild(ele);
        });
    });

    describe('#getMaxZIndex()', () => {
       let ele = null;
       before(() => {
           ele = document.createElement('div');
           ele.innerHTML = `<ul style="position: relative; z-index: 1">
                                <li style="position: relative; z-index: 1000">2134</li>
                                <li style="position: relative; z-index: 10">231</li>
                                <li style="position: relative; z-index: 100">1234</li>
                            </ul>`;
           document.body.appendChild(ele);
       });

       it(`getMaxZIndex() should return max z-index in the document`, ()=>{
           assert(vim_utility.getMaxZIndex() === 1000);
       });

       after(() => {
           document.body.removeChild(ele);
       });
    });

});