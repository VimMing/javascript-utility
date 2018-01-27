describe('Cookie API:', function () {
    describe('#getCookie()', function () {
        before(function () {
            vim_utility.setCookie('test', 'getTestValue')
        })
        it(`vim_utility.getCookie('test', 'getTestValue') should return true`, function () {
            assert(vim_utility.getCookie('test') === 'getTestValue')
        })
        after(function () {
            vim_utility.removeCookie('test')
        })
    })

    describe('#removeCookie()', function () {
        before(function () {
            vim_utility.setCookie('test', 'removeTestValue')
        })
        it(`vim_utility.removeCookie('test') should return false`, function () {
            vim_utility.removeCookie('test')
            assert.notEqual(vim_utility.getCookie('test') === 'removeTestValue')
        })
    })

    describe('#setCookie()', function () {
        it(`vim_utility.getCookie('test', 'setCookie') should return true`, function () {
            vim_utility.setCookie('test', 'setCookie')
            assert(vim_utility.getCookie('test') === 'setCookie')
        })
        after(function () {
            vim_utility.removeCookie('test')
        })
    })
})