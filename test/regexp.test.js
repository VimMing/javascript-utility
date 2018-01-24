describe('Regexp API:' , function () {
    describe('#isChinaIDCard()', function () {
        it('isChinaIDCard("622224188203234033") should return false ', function () {
            assert(!vim_utility.isChinaIDCard("622224188203234033"))
        });
        it('isChinaIDCard("53010219200508011x") should return true', function () {
            assert(vim_utility.isChinaIDCard("53010219200508011x"));
        });
        it('isChinaIDCard("zas224188203234033") should return false', function () {
            assert(!vim_utility.isChinaIDCard("zas224188203234033"))
        });
    });

    describe('#isEmail()', function () {
        it('isEmail("vimmingshe@gmail.com") should return true', function () {
            assert(vim_utility.isEmail("vimmingshe@gmail.com"));
        });

        it('isEmail("vimming.she@gmail.com") should return true', function () {
            assert(vim_utility.isEmail("vimming.she@gmail.com"));
        });
        it('isEmail("vimming.she") should return false', function () {
            assert.notEqual(vim_utility.isEmail("vimming.she"));
        });
    });

    describe('#isPhone()', function () {
        it('isPhone("15116103402") should return true', function () {
            assert(vim_utility.isPhone("15116103402"));
        });

        it('isPhone("8615116103402") should return true', function () {
            assert(vim_utility.isPhone("8615116103402"));
        });

        it('isPhone("8616116103402") should return false', function () {
            assert(!vim_utility.isPhone("8616116103402"));
        });
    });

    describe('#isUrl()', function () {
        it('vim_utility.isUrl("https://www.baidu.com/s?wd=www.slane.cn&rsv_spt=1") should return true ', function () {
            assert(vim_utility.isUrl("https://www.baidu.com/s?wd=www.slane.cn&rsv_spt=1"))
        });
        it('vim_utility.isUrl("http://www.baidu.com/s?wd=www.slane.cn&rsv_spt=1") should return true ', function () {
            assert(vim_utility.isUrl("http://www.baidu.com/s?wd=www.slane.cn&rsv_spt=1"))
        });
        it('vim_utility.isUrl("www.baidu.com") should return true', function () {
            assert(vim_utility.isUrl("www.baidu.com"))
        });
        it('vim_utility.isUrl("baidu.com") should return true', function () {
            assert(vim_utility.isUrl("baidu.com"))
        });
        it('vim_utility.isUrl("http://baiducom") should return false', function () {
            assert(!vim_utility.isUrl("http://baiducom"))
        });
    });

    describe('#getUrlParam()', function () {
        it('vim_utility.getUrlParam("https://www.baidu.com/s?wd=www.slane.cn&rsv_spt=1") should return true ', function () {
            let arr = [];
            arr["wd"] = "www.slane.cn";
            arr["rsv_spt"] = "1";
            let m = vim_utility.getUrlParam("https://www.baidu.com/s?wd=www.slane.cn&rsv_spt=1");
            assert.equal(m.size , 2);
            for(let [key, value] of arr.entries()){
                assert(m.get(key) === value);
            }
        });
    });

});
