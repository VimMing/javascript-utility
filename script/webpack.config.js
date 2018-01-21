/**
 * Created by VimMing on 24/10/2017.
 */
const path = require("path");
const pkg = require('../package.json');
const webpack = require('webpack');

module.exports = {
    entry: {
        index: path.resolve(__dirname, '../src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].js',
        library: `${pkg.name}`,
        libraryTarget: "umd"
    },
    module: {
        rules: [
            {enforce: "pre", test: /\.js$/, loader: "source-map-loader"},
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                include: path.resolve(__dirname, "src"),
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            },

        ]
    },
    // plugins: [
    //     new webpack.optimize.UglifyJsPlugin()
    // ]
    /*
    *  使用uglifyjsp时出现问题，它将我的变量替换了， 和删除， test出现问题
    * */
    // plugins: [
    //     new UglifyJsP(
    //         {
    //             uglifyOptions: {
    //                 ie8: false,
    //                 output: {
    //                     comments: false,
    //                     beautify: false
    //                 },
    //                 mangle: {
    //                     keep_fnames: false
    //                 },
    //                 compress: {
    //                     warnings: true,
    //                     drop_console: true
    //                 }
    //             }
    //         }
    //     ),
    // ]
}