/**
 * 返回当前环境
 */

 module.exports = function(env){
    let currentEnv = '';
    if(env.dev){
        currentEnv = 'dev';
    }
    if(env.preview){
        currentEnv = 'preview';
    }
    if(env.product){
        currentEnv = 'product';
    }
    return currentEnv;
 };