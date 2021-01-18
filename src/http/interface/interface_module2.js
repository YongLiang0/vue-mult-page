import {get, post, put, del} from "../http.js";
import API from "../api/api_module2.js";

const INTERFACE = {

    /**
     * 获取首页配置
     */
    getList2(){
        return get(API.API_TEST2);
    },

};

export default INTERFACE;