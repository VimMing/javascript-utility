
describe('Function API:', function () {

    describe('#throttle()', function () {
        const throttle = vim_utility.throttle;

        it(`vim_utility.throttle() should return true`, function (done) {
            let num = 0;
            let interval = null;
            let throttled = throttle(200, function () {
                num++;
                return true
            });
            interval = setInterval(function () {
                throttled();
            }, 20);
            setTimeout(function () {
                assert.equal(num , Math.floor(805 / 200));
                done();
                clearInterval(interval);
            }, 805);
        });
        it(`vim_utility.throttle() should return true`, function (done) {
            let num = 0;
            let interval = null;
            let throttled = throttle(200, function () {
                num++;
                assert.equal(num , 1);
                done();
                return true
            }, true);
            interval = setInterval(function () {
                throttled();
            }, 20);
            setTimeout(function () {

                clearInterval(interval);
            }, 805);
        });
    });
});
