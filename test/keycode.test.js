describe('Keycode API:', function () {

    describe('#keyCode()', function () {
        it(`vim_utility.getKeyName('Enter') should return 13`, function () {
            assert(vim_utility.keyCode('Enter') === 13)
        });
        it(`vim_utility.getKeyName() should return null`, function () {
            assert(vim_utility.keyCode() === null)
        });
    });

});