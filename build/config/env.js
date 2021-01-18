/**
 * 返回当前环境
 */

module.exports = function(env){
    let currentEnv = 'dev';

    if(env.dev){
        currentEnv = 'dev';
    }
    else if(env.test){
        currentEnv = 'test';
    }
    else if(env.preview){
        currentEnv = 'preview';
    }
    else if(env.product){
        currentEnv = 'product';
    }

    return currentEnv;
};