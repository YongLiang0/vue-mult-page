'use strict'

const webpackBaseConf = require("./webpack.base.config");
const merge = require("webpack-merge");
const miniCss = require("mini-css-extract-plugin");
const optimizePlugin  = require("optimize-css-assets-webpack-plugin");
const webpack = require("webpack");

module.exports = function (env) {
    return merge(webpackBaseConf(env),{
        module: {
            rules: [{
                test: /\.(css|scss)$/,
                use: [
                    {
                        loader : miniCss.loader,
                        options : {
                            publicPath : "../",
                        }
                    },
                    "css-loader",
                    "postcss-loader",
                    "sass-loader"
                ]
            }]
        },
        plugins : [
            new webpack.HashedModuleIdsPlugin(),
            new optimizePlugin({
                assetNameRegExp: /\.css$/g,
                cssProcessor: require('cssnano'),
                cssProcessorPluginOptions: {
                    preset: ['default', {
                        discardComments: {
                            removeAll: true
                        }
                    }],
                },
                canPrint: true
            }),

            new miniCss({
                filename : "./css/[name]-[contenthash:8].css",
            }),
        ]
    })
}
