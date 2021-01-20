'use strict';

// 引入基础模块
const fs = require('fs');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// 页面配置文件
const COMMON_CONFIG = require('./config/common.js');
const PAGE_CONFIG = require('./config/page.js');
const BUILD = require('./config/build.js');

// 目录配置
const CHUNK_SEP = '/';
const PATH_SEP = path.sep;

//入口文件
const ENTRY_JS = 'app.js';
const SRC_PAGE = '../src/pages';

/**
 * 遍历目录获取指定文件
 * @param {*} rootDir 
 * @param {*} fileName 
 */
function _getFilesByName(rootDir, fileName) {
    let fileList = [];
  
    let walk = (_path) => {
        let files = fs.readdirSync(_path);
  
        files.forEach((file) => {
            let tmpPath = _path + PATH_SEP + file;
            let stats = fs.statSync(tmpPath);
  
            if (stats.isDirectory()) {
                walk(tmpPath);
            } 
            else {
                let ext = path.extname(tmpPath);
  
                if(file === fileName){
                    fileList.push(tmpPath);
                }
            }
        })
    }
  
    walk(rootDir);
  
    return fileList;
};

/**
 * 获取入口文件相关数据
 */
function _getEntryFiles(){
    let pagesPath = path.join(__dirname, SRC_PAGE);
    let entryFiles = _getFilesByName(pagesPath, ENTRY_JS);

    let ary = [];

    entryFiles.forEach((filePath) => {
        let entryDir = filePath.substring(pagesPath.length + 1, filePath.indexOf(PATH_SEP + ENTRY_JS));
        let chunkName = entryDir.replace(/\\/g, CHUNK_SEP);

        ary.push({
            chunkName: chunkName,
            filePath: filePath
        })
    })

    return ary;
};

/**
 * 自定义版本号
 */
function _getVersionCode(){
    let currentStrap = (new Date()).getTime();
    return `vue-mul-page-${currentStrap}`;
};

/**
 *  多入口配置
 *  目录下有'app.js'文件的会当作打包入口,路径作为页面pathname
 */
exports.entries = function(){
    let map = {};
    let entryFiles = _getEntryFiles();

    entryFiles.forEach((obj) => {
        map[obj.chunkName] = obj.filePath;
    })
    
    return map;
};

/**
 * 配置htmlWebpackPlugin
 */
exports.htmlWebpackPlugin = function(env){
    let plugInList = [];
    let entryFiles = _getEntryFiles();

    entryFiles.forEach((item) => {
        if(BUILD.isUse){
            let inf = BUILD.buildList.indexOf(item.chunkName);
            if(inf < 0){
                return;
            }
        }

        let config_page = PAGE_CONFIG[item.chunkName] || {};
        let fileName = config_page.fileName || item.chunkName; 
        let curentPageJs = config_page.js || [];
        let currentPageCss = config_page.css || [];

        let conf = {
            template: './index.html',
            filename: `${fileName}.html`,
            title : config_page.title,
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
            },
            externals : [...COMMON_CONFIG.COMMON_JS_SRC,...curentPageJs],
            css : [...COMMON_CONFIG.COMMON_CSS_SRC,...currentPageCss],
            version : _getVersionCode(),
            chunks: ['runtime', 'vendor', 'common', item.chunkName]
        };

        plugInList.push(new HtmlWebpackPlugin(conf));
    });

    return plugInList;
};