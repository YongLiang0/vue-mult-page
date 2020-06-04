'use strict'

const path = require("path");
const webpackBaseConf = require("./webpack.base.config");
const merge = require("webpack-merge");
const PORT = 8080;

module.exports = function (env) {
    return merge(webpackBaseConf(env,PORT),{
        devtool: "cheap-module-eval-source-map",
        devServer: {
            disableHostCheck: true,
            port: PORT,
            hot : true,
            clientLogLevel: "none",
            contentBase: path.resolve(__dirname, "../dist"),
            proxy: {}
        },
        module: {
            rules: [{
                test: /\.(css|scss)$/,
                use: [
                    "vue-style-loader", 
                    "css-loader", 
                    "postcss-loader", 
                    "sass-loader"
                ]
            }]
        }
    })
}