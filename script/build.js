const path = require('path');
const fs = require('fs');
const ora = require('ora');
const rm = require('rimraf');
const copy = require('copy');
const chalk = require('chalk');
const webpack = require('webpack');
const config = require('./webpack.config');
const rootPath = path.resolve(__dirname, '../');

new Promise((resolve, reject) => {
    // 构建全量压缩包
    let building = ora('building...');
    building.start();
    // 删除旧的包
    rm(path.resolve(rootPath, 'dist', `*`), err => {
        if (err) throw (err);
        webpack(config, function (err, stats) {
            if (err) throw (err);
            building.stop();
            process.stdout.write(stats.toString({
                colors: true,
                modules: false,
                children: false,
                chunks: false,
                chunkModules: false
            }) + '\n\n');
            resolve();
            console.log(chalk.cyan('  Build complete.\n'));
        })
    })
}).then(() => {
    // 替换模块文件
    let copying = ora('copying...');
    copying.start();
    rm('*.js', err => {
        if (err) throw (err);
        let folderList = fs.readdirSync(path.resolve(rootPath, 'src'));
        folderList.forEach((item, index) => {
            copy(`src/${item}/*.js`, rootPath, function (err, files) {
                if (err) throw err;
                if (index === folderList.length - 1) {
                    console.log(chalk.cyan('  Copy complete.\n'));
                    copying.stop();
                    replace();
                }
            })
        })
    })
}).catch((err) => {
    throw err
});

function replace() {
    const readFilePromise = function (fileName, fs) {
        return new Promise(function (resolve, reject) {
            fs.readFile(fileName, 'utf8', function(error, data) {
                if (error) return reject(error);
                resolve(data);
            });
        });
    };

    async function readFile(files, fs, rootPath) {
        let declare = "";
        for(let file of files){
            let content = await readFilePromise(`${rootPath}/${file}`, fs);
             content = content.replace(/function /g, 'export function ');
             content = content.replace(/module\.exports.+/g, ' ');
              content = content.replace(/.+require\(.+\).+/g, ' ');
             declare += content;
        }
        return declare;
    }
    fs.readdir(rootPath, (err, files) => {
        files = files.filter(file => {
            if(/\.js$/.test(file)){
                return true;
            }
        });

        let p = readFile(files, fs, rootPath);
        p.then((data) => {
            fs.writeFile(`${rootPath}/utility.js`, data, 'utf8', function (err) {
                if (err) return console.log(err);
            });
        });
    });

}

