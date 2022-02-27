const webpack = require('webpack');
const path = require('path');
const WrapperPlugin = require('wrapper-webpack-plugin');

const config = {
    entry: './app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    target: "node",
    mode: "production",
    // plugins: [
    //     //...
    //     new WrapperPlugin({
    //         test: /\.js$/,
    //         header: ('(function umdWrapper(root, factory) {' +
    //             '  if(typeof exports === "object" && typeof module === "object")' +
    //             '    module.exports = factory().default;' +
    //             '  else if(typeof define === "function" && define.amd)' +
    //             '    define("NAME", [], function() { return factory().default; });' +
    //             '  else if(typeof exports === "object")' +
    //             '    exports["NAME"] = factory().default;' +
    //             '  else' +
    //             '    root["NAME"] = factory().default;' +
    //             '})(this, function() {' +
    //             'return ').replace(/NAME/g, 'SamJs'), // this is the name of your lib
    //         footer: '\n})',
    //     }),
    // ],
};

module.exports = config;