'use strict'

const path = require("path");
const utils = require('./utils');
const webpack = require('webpack');
const cleanWebpackPlugin = require("clean-webpack-plugin");
const vueLoaderPlugin = require("vue-loader/lib/plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const getEnv = require('./env');

module.exports =  function(env){
    let base_conf = {
        entry : utils.entries(),
        externals : {
            'vue' : 'Vue',
            'vuex' : 'Vuex',
            'vue-router': 'VueRouter',
            'babel-polyfill': 'window'
        },
        output : {
            path : path.resolve(__dirname,"../dist"),
            filename : env.dev ? "js/[name].js" : "js/[name]-[contenthash:8].js",
            publicPath : '/'
        },
        module: {
            rules: [
                {
                    test: /\.(js)$/,
                    exclude: /node_modules/,
                    use: [{
                        loader: "babel-loader",
                        options : {
                            cacheDirectory : true
                        }
                    }]
                },
                {
                    test : /\.(jpg|jpeg|png|gif)$/,
                    use : [
                        {
                            loader : "url-loader",
                            options : {
                                limit : 8192,
                                name : env.dev ? "[name].[ext]" : "[name]-[contenthash:8].[ext]",
                                outputPath : "./images"
                            }
                        }
                    ]
                },
                {
                    test: /\.vue$/,
                    use: ["vue-loader"]
                },
                {
                    test: /\.pug$/,
                    loader: 'pug-plain-loader'
                },
                {
                    test: /\.(eot|woff|woff2|ttf|svg)/,
                    loader: "url-loader",
                    options: {
                        limit: 100,
                        name: './fonts/[name].[ext]'
                    }
                }
            ]
        },
        resolve : {
            extensions: [".js", ".vue", ".css", ".less", ".json"],
            alias : {
                "@" : path.resolve(__dirname,"../src")
            }
        },
        plugins : [
            new webpack.DefinePlugin({
                GLOBAL_ENV :JSON.stringify(getEnv(env))
            }),
            new cleanWebpackPlugin(),
            new vueLoaderPlugin(),
            new CopyWebpackPlugin([
                {
                    from: path.resolve(__dirname, '../static'),
                    to: 'static',
                    ignore: ['.*']
                }
            ]),
            ...utils.htmlWebpackPlugin(env)
        ],
        watchOptions: {
            ignored: [path.resolve("../node_modules")]
        },
        optimization: {
            runtimeChunk: 'single',
            splitChunks: {
                chunks: 'async',
                cacheGroups: {
                    vendor: {
                        test: /[\\/]node_modules[\\/]/,
                        name: 'vendor',
                        chunks: 'all',
                        priority: 20,
                        enforce: true
                    },
                    commons: {
                        name: 'common',
                        test : /\.js/,
                        chunks: 'all',
                        priority: 10,
                        minChunks : 5,
                        enforce: true
                    }
                }
            }
        },
    };

    return base_conf;
}