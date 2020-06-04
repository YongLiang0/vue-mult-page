/**
 * 页面信息配置
 */

const _page_config = {

    // 所有页面信息
    pages : {
        'index' : {
            title : '首页'
        },
        'test/page1' : {
            title : 'page1'
        },
        'test/page2' : {
            title : 'page2'
        }
    },

    // 公用js，cdn,static文件内的js都可以引入
    commonJs : [
        '//cdnjs.cloudflare.com/ajax/libs/babel-polyfill/7.10.1/polyfill.min.js',
        '//cdnjs.cloudflare.com/ajax/libs/vue/2.6.11/vue.min.js',
    ],

    // 公用css，cdn,static文件内的css都可以引入
    commonCss : [
        '//cdnjs.cloudflare.com/ajax/libs/weui/2.3.0/style/weui.min.css'
    ]

};

module.exports = _page_config;