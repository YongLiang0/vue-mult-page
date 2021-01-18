'use strict';

const path = require("path");
const webpackBaseConf = require("./webpack.base.config");
const merge = require("webpack-merge");

module.exports = function (env) {
    return merge(webpackBaseConf(env),{
        devtool: "cheap-module-eval-source-map",
        devServer: {
            disableHostCheck: true,
            port: 8082,
            hot : true,
            clientLogLevel: "none",
            contentBase: path.resolve(__dirname, "../dist"),
            proxy: {}
        },
        module: {
            rules: [{
                test: /\.(css|scss)$/,
                use: [
                    {
                        loader : "vue-style-loader"
                    }, 
                    {
                        loader : "css-loader"
                    }, 
                    {
                        loader : "postcss-loader"
                    }, 
                    {
                        loader : "sass-loader"
                    }
                ]
            }]
        }
    })
}