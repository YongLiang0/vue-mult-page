/**
 * 工具类方法
 */

var _utils = {

    /**
     * 本地存储 setItem
     * @param {*} key 
     * @param {*} value 
     */
    setStorage : function(key,value){
        window.localStorage.setItem(key,JSON.stringify(value));
    },

    /**
     * 本地存储 getItem
     * @param {*} key 
     * @param {*} value 
     */
    getStorage : function(key){
        var data = window.localStorage.getItem(key);
        if(!data || data === 'null'){
            return null;
        }
        var obj;
        try {
            obj = JSON.parse(data);
        } catch (error) {
            return null;
        }
        return obj;
    },

    /**
     * 清除所有本地存储 
     */
    clearAllStorage : function(){
        window.localStorage.clear();
    },

    /**
     * 根据key删除本地存储
     * @param {*} key 
     */
    removeStorageBykey : function(key){
        window.localStorage.removeItem(key);
    },

    /**
     * 获取url参数
     * @param {*} name 
     */
    getQueryString : function(name){
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        var context = "";
        if (r != null){
            context = r[2];
            reg = null;
            r = null;
        }
        return context == null || context == "" || context == "undefined" ? "" : context;
    },

    /**
	 * 区分普通浏览器，微信浏览器，企业微信浏览器
	 */
    getBrowserAgent : function(){
        var type = 'normal';
        var ua = navigator.userAgent.toLowerCase();
        var isWx = ua.match(/MicroMessenger/i) == "micromessenger";
        var isWxWork = ua.match(/WxWork/i) == "wxwork";
        if(isWx){
            type = 'wechat';
        }
        if(isWxWork){
            type = 'wechat_work';
		}
		return type;
    },

    /**
     * 判断是否为空对象
     * @param {*} obj
     */
    isEmptyObject : function(obj){
        var name;
		for ( name in obj ) {
			return false;
		}
		return true;
    },

    /**
	 * 深拷贝
	 * @param {Object} obj
	 */
    deepCopy : function(obj){
        var str, newobj = obj.constructor === Array ? [] : {};
		if(typeof obj !== 'object')
		{
			return;
		}
		else if(window.JSON)
		{
			str = JSON.stringify(obj), //系列化对象
				newobj = JSON.parse(str); //还原
		}
		else
		{
			for(var i in obj){
				newobj[i] = typeof obj[i] === 'object' ? cloneObj(obj[i]) : obj[i];
			}
		}
		return newobj;
    }
};