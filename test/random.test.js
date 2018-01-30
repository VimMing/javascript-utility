describe('Random API:', function () {
    describe('#s_random()', function () {
        it(`s_random should return specifies random character`, function () {
            let num = Math.floor(Math.random()*50);
            let s = vim_utility.s_random(num);
            assert.equal(s.length, num);
        });
    });

    describe('#n_random()', function () {
        it(`n_random(10, 1000, 30) will return array and minimum number large or equal than 10, max number will less or equal than 1000`, function () {
            let num = vim_utility.n_random(10, 1000);
            assert(num <= 1000 && num >= 10);
            let arr = vim_utility.n_random(10, 20, 30);
            let min = Math.min.apply(null, arr);
            let max = Math.max.apply(null, arr);
            assert(arr.length === 30);
            assert(10 <= min && min <=max);
            assert(min <= max && max <= 1000);
        });
    });
});