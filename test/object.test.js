describe('Object API:', function () {
    describe('#deepClone()', function () {
        it(`person deepEqual vim_utility.deepClone(person) should return true`, function () {
            let person = {
                name: "user",
                settings: {
                    first: "1",
                    second: [1, 2, 3, 4, 3]
                }
            };
            assert.deepEqual(person, vim_utility.deepClone(person))
        });

        it(`person === vim_utility.deepClone(person) should return false`, function () {
            let person = {
                name: "user",
                settings: {
                    first: "1",
                    second: [1, 2, 3, 4, 3]
                }
            };
            assert.notEqual(person, vim_utility.deepClone(person))
        });
    });
    
});