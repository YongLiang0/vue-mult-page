/**
 * create by ly
 * 工具类
 */
class utils {

    /**
     * 去空格
     * @param {*} str
     */
    static trim(str){
        return str.replace(/(^\s*)|(\s*$)/g, "");
	}

    /**
	 * 深拷贝
	 * @param {Object} obj
	 */
    static deepCopy(obj){
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

    /**
     * 判断是否为空对象
     * @param {*} obj
     */
    static isEmptyObject(obj ){
        var name;
		for ( name in obj ) {
			return false;
		}
		return true;
    }

    /**
     * 生成随机数
     * @param {*} n
     */
    static randomNumber(n){
        var rnd = "";
        for(var i = 0; i < n ; i ++){
            rnd += Math.floor(Math.random() * 10);
        }
        return rnd;
    }
    
    /**
     * 获取url后面参数
     */
    static getQueryString(name,str) {
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
		var search = window.location.search;
		if(str){
			search = "?" + str.split("?")[1];
		}
		var r = search.substr(1).match(reg);
		var context = "";
		if (r != null)
			context = r[2];
		reg = null;
		r = null;
		return context == null || context == "" || context == "undefined" ? "" : context;
	}
	
	/**
	 * 判断是否在微信浏览器内
	 */
	static isWechateBrower(){
		var ua = navigator.userAgent.toLowerCase();
		if(ua.match(/MicroMessenger/i) ==   "micromessenger"){
			return true; 
		} 
		else{
			return false
		} 
	}

};

var obj = {
    install(Vue){
        Vue.prototype.utils = utils;
    }
};

export {
    obj as default,
    utils
};
